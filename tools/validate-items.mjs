/* طَلَاقَة — المُتحقق الآلي من بنك الأسئلة
   يفشل بخروج 1 عند أي خلل: معرفات مكررة، خيارات متطابقة، إجابة خارج النطاق… */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const dir = join(root, '..', 'src', 'data', 'items');
const files = ['rules.json', 'vocab.json', 'reading.json'];

const CEFR = new Set(['S0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
let errors = [];
let all = [];

for (const f of files) {
  const data = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  for (const item of data.items) {
    const ctx = `${f} / ${item.id}`;
    if (!item.id || typeof item.id !== 'string') errors.push(`${ctx}: معرف مفقود`);
    if (item.section && item.section !== data.section) errors.push(`${ctx}: القسم لا يطابق الملف`);
    if (!CEFR.has(item.cefr)) errors.push(`${ctx}: مستوى غير معروف «${item.cefr}»`);
    if (typeof item.difficulty !== 'number' || item.difficulty < 0 || item.difficulty > 100)
      errors.push(`${ctx}: صعوبة خارج النطاق 0-100`);
    if (!Array.isArray(item.options) || item.options.length !== 4)
      errors.push(`${ctx}: يجب أن تكون هناك 4 خيارات`);
    else {
      const norm = item.options.map((o) => String(o).trim().toLowerCase());
      if (new Set(norm).size !== norm.length) errors.push(`${ctx}: خيارات مكررة`);
      if (norm.some((o) => o.length === 0)) errors.push(`${ctx}: خيار فارغ`);
    }
    if (typeof item.answer !== 'number' || item.answer < 0 || item.answer > 3)
      errors.push(`${ctx}: الإجابة خارج النطاق 0-3`);
    if (!item.question || String(item.question).trim().length < 4)
      errors.push(`${ctx}: السؤال فارغ أو قصير جداً`);
    if (!item.explanation || String(item.explanation).trim().length < 4)
      errors.push(`${ctx}: التفسير فارغ أو قصير جداً`);
    if (!Array.isArray(item.tags) || item.tags.length === 0)
      errors.push(`${ctx}: وسوم مفقودة`);
    all.push({ ...item, section: data.section });
  }
}

const ids = new Map();
for (const i of all) ids.set(i.id, (ids.get(i.id) ?? 0) + 1);
for (const [id, n] of ids) if (n > 1) errors.push(`المعرف «${id}» مكرر ${n} مرات`);

const qs = new Map();
for (const i of all) {
  const key = String(i.question).trim().toLowerCase();
  qs.set(key, (qs.get(key) ?? 0) + 1);
}
for (const [q, n] of qs) if (n > 1) errors.push(`سؤال مكررحرفياً (${n}×): «${q.slice(0, 60)}…»`);

console.log(`المُتحقق: ${all.length} سؤالاً فُحصت من ${files.length} ملفات.`);
const bySection = {};
for (const i of all) bySection[i.section] = (bySection[i.section] ?? 0) + 1;
console.log('توزيع الأقسام:', bySection);
const byCefr = {};
for (const i of all) byCefr[i.cefr] = (byCefr[i.cefr] ?? 0) + 1;
console.log('توزيع المستويات:', byCefr);

if (errors.length) {
  console.error(`\n✗ فشل التحقق — ${errors.length} مشكلة:`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('✓ بنك الأسئلة سليم 100% — لا تناقضات ولا تكرار ولا أخطاء بنيوية.');
