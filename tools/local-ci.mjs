import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const context = 'local/validate-build-test';

function command(bin, args, options = {}) {
  const result = spawnSync(bin, args, {
    cwd: root,
    stdio: options.capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
    encoding: options.capture ? 'utf8' : undefined,
    shell: process.platform === 'win32',
  });
  if (result.error) throw result.error;
  if (!options.allowFailure && result.status !== 0) {
    throw new Error(`فشل الأمر: ${bin} ${args.join(' ')} (exit ${result.status ?? 'unknown'})`);
  }
  return result;
}

function output(bin, args) {
  return (command(bin, args, { capture: true }).stdout ?? '').trim();
}

function publishStatus(sha, state, description) {
  command('gh', [
    'api', `repos/${repository}/statuses/${sha}`,
    '--method', 'POST',
    '-f', `state=${state}`,
    '-f', `context=${context}`,
    '-f', `description=${description}`,
  ]);
}

let repository;
let sha;

try {
  repository = output('gh', ['repo', 'view', '--json', 'nameWithOwner', '--jq', '.nameWithOwner']);
  sha = output('git', ['rev-parse', 'HEAD']);
  output('gh', ['auth', 'status']);

  publishStatus(sha, 'pending', 'Local validation is running on the developer machine.');
  const steps = [
    ['npm', ['run', 'validate']],
    ['npm', ['run', 'build']],
    ['npm', ['test']],
  ];

  for (const [bin, args] of steps) {
    console.log(`\n> ${bin} ${args.join(' ')}`);
    const result = command(bin, args, { allowFailure: true });
    if (result.status !== 0) {
      publishStatus(sha, 'failure', `Failed: ${bin} ${args.join(' ')}`);
      process.exit(result.status ?? 1);
    }
  }

  publishStatus(sha, 'success', 'validate, build and tests passed locally.');
  console.log('\nنجحت جميع الفحوصات المحلية، وأُرسلت الحالة إلى GitHub.');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (repository && sha) {
    try {
      publishStatus(sha, 'error', 'Local validation could not complete or report its result.');
    } catch {
      console.error('تعذر إرسال حالة الفحص إلى GitHub.');
    }
  }
  process.exit(1);
}
