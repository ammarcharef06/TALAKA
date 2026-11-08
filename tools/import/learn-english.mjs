#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — أداة استخراج محتوى Learn-English
   تقرأ مصدر Learn-English المحلي (مجلد مستقل)، وتُنتج JSON مُطبَّعاً
   + manifest + تقرير عدّ وتكرارات. لا تدمج شيئاً في src/data/academy.
   التشغيل:
     node tools/import/learn-english.mjs --source "C:\path\to\Learn-English"
   ═══════════════════════════════════════════════════════════════ */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const DEFAULT_OUT = join(ROOT, 'content', 'learn-english');
const SOURCE_DATA_FILES = [
  'curriculum-a1.js',
  'curriculum-a2.js',
  'curriculum-b1.js',
  'curriculum-advanced.js',
  'readings.js',
  'zero-words.js',
];
const STAGE_ORDER = ['S0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const DEFERRED_STAGES = new Set(['B2', 'C1', 'C2']);
const CLAIMED_CORE_VOCAB = 288;

function fail(message) {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

function parseArgs(argv) {
  const out = { source: process.env.LEARN_ENGLISH_SOURCE ?? '', out: DEFAULT_OUT };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--source') {
      out.source = argv[i + 1] ?? '';
      i += 1;
    } else if (arg.startsWith('--source=')) {
      out.source = arg.slice('--source='.length);
    } else if (arg === '--out') {
      out.out = argv[i + 1] ?? DEFAULT_OUT;
      i += 1;
    } else if (arg.startsWith('--out=')) {
      out.out = arg.slice('--out='.length);
    } else if (arg === '--help' || arg === '-h') {
      console.log('الاستخدام: node tools/import/learn-english.mjs --source <مجلد Learn-English> [--out <مجلد>]');
      process.exit(0);
    } else {
      fail(`وسيط غير معروف: ${arg}`);
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
if (!args.source) {
  fail('مرّر مسار مصدر Learn-English عبر --source أو LEARN_ENGLISH_SOURCE');
}
const sourceRoot = resolve(args.source);
const dataDir = join(sourceRoot, 'assets', 'js', 'data');
if (!existsSync(join(dataDir, 'curriculum-a1.js'))) {
  fail(`لم أجد ملفات Learn-English في: ${dataDir}`);
}
const outDir = resolve(args.out);
mkdirSync(outDir, { recursive: true });

/* ── أدوات نصية ─────────────────────────────────────────────── */

const text = (value) => (typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim() : '');
const asArray = (value) => (Array.isArray(value) ? value : []);
const pad = (n) => String(n).padStart(2, '0');

const ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
};

function decodeEntities(value) {
  return value.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => ENTITIES[m] ?? m);
}

/** يحوّل HTML المصدر إلى نص عربي/إنجليزي مقروء مع الحفاظ على الفقرات */
function stripHtml(value) {
  const source = text(value);
  if (!source) return '';
  return decodeEntities(
    source
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|li|ul|ol|h[1-6]|div|tr)>/gi, '\n')
      .replace(/<li[^>]*>/gi, '• ')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeKey(value) {
  return text(value).toLowerCase().replace(/\s+/g, ' ');
}

function exampleOf(value) {
  if (!value || typeof value !== 'object') return null;
  const en = text(value.en);
  const ar = text(value.ar);
  return en || ar ? { en, ar } : null;
}

function pairList(value, idPrefix) {
  return asArray(value).map((entry, index) => ({
    id: `${idPrefix}-${pad(index + 1)}`,
    en: text(entry?.en),
    ar: text(entry?.ar),
  }));
}

/* ── قراءة المصدر ───────────────────────────────────────────── */

const importStamp = Date.now();
async function importData(file) {
  const url = `${pathToFileURL(join(dataDir, file)).href}?t=${importStamp}`;
  return import(url);
}

const { LEVEL_A1 } = await importData('curriculum-a1.js');
const { LEVEL_A2 } = await importData('curriculum-a2.js');
const { LEVEL_B1 } = await importData('curriculum-b1.js');
const advanced = await importData('curriculum-advanced.js');
const { READINGS } = await importData('readings.js');

const SOURCE_LEVELS = [
  LEVEL_A1,
  LEVEL_A2,
  LEVEL_B1,
  advanced.B2_STAGED_CURRICULUM,
  advanced.C1_STAGED_CURRICULUM,
  advanced.C2_STAGED_CURRICULUM,
].filter(Boolean);

function gitValue(gitArgs) {
  try {
    return execFileSync('git', ['-C', sourceRoot, ...gitArgs], { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

const sourceCommit = gitValue(['rev-parse', 'HEAD']);
const sourceCommitDate = gitValue(['show', '-s', '--format=%cI', 'HEAD']);
const sourceDirty = Boolean(gitValue(['status', '--short']));
const sourceFiles = SOURCE_DATA_FILES.map((file) => {
  const path = join(dataDir, file);
  const bytes = readFileSync(path);
  return {
    path: relative(sourceRoot, path).replaceAll('\\', '/'),
    sha256: createHash('sha256').update(bytes).digest('hex'),
    bytes: bytes.length,
  };
});
const sourceFingerprint = createHash('sha256')
  .update(sourceFiles.map((file) => `${file.path}:${file.sha256}`).join('\n'))
  .digest('hex');

const sourceMeta = {
  name: 'Learn-English',
  repository: 'https://github.com/ammarcharef06/Learn-English',
  commit: sourceCommit,
  commitDate: sourceCommitDate,
  dirty: sourceDirty,
  fingerprint: sourceFingerprint,
  files: sourceFiles,
};

/* ── تطبيع الوحدات ──────────────────────────────────────────── */

function stageFor(levelId, unit) {
  if (levelId === 'a1' && /foundation/i.test(unit.id)) return 'S0';
  return levelId.toUpperCase();
}

function normalizeGrammar(grammar, unitId, index) {
  const id = `${unitId}-g${pad(index + 1)}`;
  const table = grammar.table && Array.isArray(grammar.table.headers) && Array.isArray(grammar.table.rows)
    ? {
        headers: grammar.table.headers.map(text),
        rows: grammar.table.rows.map((row) => asArray(row).map(text)),
      }
    : null;
  return {
    id,
    ...(text(grammar.id) ? { sourceId: text(grammar.id) } : {}),
    titleAr: text(grammar.title),
    explainHtml: text(grammar.explain),
    explainText: stripHtml(grammar.explain),
    table,
    examples: asArray(grammar.examples).map((entry, entryIndex) => ({
      id: `${id}-e${pad(entryIndex + 1)}`,
      en: text(entry?.en),
      ar: text(entry?.ar),
    })),
    tips: asArray(grammar.tips).map(text).filter(Boolean),
  };
}

function normalizeVocabulary(vocab, unitId, index) {
  const id = `${unitId}-v${pad(index + 1)}`;
  return {
    id,
    en: text(vocab.en),
    ar: text(vocab.ar),
    ...(text(vocab.pos) ? { pos: text(vocab.pos) } : {}),
    ...(text(vocab.kind) ? { kind: text(vocab.kind) } : {}),
    ...(text(vocab.emoji) ? { emoji: text(vocab.emoji) } : {}),
    example: exampleOf(vocab.example),
    collocations: asArray(vocab.collocations).map((entry, entryIndex) => ({
      id: `${id}-c${pad(entryIndex + 1)}`,
      en: text(entry?.en),
      ar: text(entry?.ar),
      ...(exampleOf(entry?.example) ? { example: exampleOf(entry.example) } : {}),
    })),
    ...(text(vocab.audio_url) ? { audioUrl: text(vocab.audio_url) } : {}),
  };
}

function normalizeSentence(sentence, unitId, index) {
  return {
    id: `${unitId}-s${pad(index + 1)}`,
    en: text(sentence.en),
    ar: text(sentence.ar),
    ...(text(sentence.audio_url) ? { audioUrl: text(sentence.audio_url) } : {}),
  };
}

function normalizeDialogue(line, unitId, index) {
  return {
    id: `${unitId}-d${pad(index + 1)}`,
    who: text(line.who),
    en: text(line.en),
    ar: text(line.ar),
    ...(text(line.audio_url) ? { audioUrl: text(line.audio_url) } : {}),
  };
}

function normalizePhonetics(phonetic, unitId, index) {
  const sourceId = text(phonetic.id);
  const id = sourceId ? `${unitId}-p-${sourceId}` : `${unitId}-p${pad(index + 1)}`;
  return {
    id,
    ...(sourceId ? { sourceId } : {}),
    en: text(phonetic.en),
    ipa: text(phonetic.ipa),
    ar: text(phonetic.ar),
    contrastPairs: pairList(phonetic.contrastPairs, `${id}-c`),
    connectedSpeech: pairList(phonetic.connectedSpeech, `${id}-s`),
    intonation: pairList(phonetic.intonation, `${id}-i`),
    ...(text(phonetic.audioKey) ? { audioKey: text(phonetic.audioKey) } : {}),
    ...(text(phonetic.audio_url) ? { audioUrl: text(phonetic.audio_url) } : {}),
    ...(text(phonetic.ipa_audio_url) ? { ipaAudioUrl: text(phonetic.ipa_audio_url) } : {}),
  };
}

function normalizeTransfer(transfer, unitId, index) {
  const sourceId = text(transfer.id);
  const id = sourceId ? `${unitId}-l1-${sourceId}` : `${unitId}-l1-${pad(index + 1)}`;
  return {
    id,
    ...(sourceId ? { sourceId } : {}),
    incorrect: text(transfer.incorrect),
    corrected: text(transfer.corrected),
    ...(text(transfer.pattern) ? { pattern: text(transfer.pattern) } : {}),
    explanationAr: text(transfer.explanationAr),
    practice: asArray(transfer.practice),
  };
}

function normalizeAcademic(term, unitId, index) {
  const sourceId = text(term.id);
  const id = sourceId ? `${unitId}-a-${sourceId}` : `${unitId}-a${pad(index + 1)}`;
  return {
    id,
    ...(sourceId ? { sourceId } : {}),
    term: text(term.term),
    meaningAr: text(term.meaningAr),
    example: exampleOf(term.example),
    paraphrasing: asArray(term.paraphrasing).map((entry) => ({
      original: text(entry?.original),
      paraphrase: text(entry?.paraphrase),
    })),
    idioms: asArray(term.idioms).map((entry) => ({
      phrase: text(entry?.phrase),
      meaningAr: text(entry?.meaningAr),
    })),
    readingAnalysis: asArray(term.readingAnalysis).map((entry) => ({
      term: text(entry?.term),
      meaningAr: text(entry?.meaningAr),
    })),
  };
}

function normalizeUnit(levelId, unit) {
  const stage = stageFor(levelId, unit);
  const id = `le-${stage.toLowerCase()}-${unit.id}`;
  const grammar = asArray(unit.grammar).map((entry, index) => normalizeGrammar(entry, id, index));
  const vocabulary = asArray(unit.vocabulary).map((entry, index) => normalizeVocabulary(entry, id, index));
  const sentences = asArray(unit.sentences).map((entry, index) => normalizeSentence(entry, id, index));
  const dialogue = asArray(unit.dialogue).map((entry, index) => normalizeDialogue(entry, id, index));
  const phonetics = asArray(unit.phonetics).map((entry, index) => normalizePhonetics(entry, id, index));
  const l1Transfers = asArray(unit.arabic_l1_transfers).map((entry, index) => normalizeTransfer(entry, id, index));
  const academicFocus = asArray(unit.academic_focus).map((entry, index) => normalizeAcademic(entry, id, index));

  return {
    id,
    sourceId: unit.id,
    sourceLevel: levelId,
    stage,
    foundation: stage === 'S0',
    deferred: DEFERRED_STAGES.has(stage),
    titleAr: text(unit.title),
    titleEn: text(unit.titleEn),
    ...(text(unit.icon) ? { icon: text(unit.icon) } : {}),
    goalAr: text(unit.goal),
    grammar,
    vocabulary,
    sentences,
    dialogue,
    phonetics,
    l1Transfers,
    academicFocus,
  };
}

const stages = STAGE_ORDER.map((stage) => ({
  stage,
  deferred: DEFERRED_STAGES.has(stage),
  foundation: stage === 'S0',
  units: [],
}));
const stageMap = new Map(stages.map((entry) => [entry.stage, entry]));

for (const level of SOURCE_LEVELS) {
  for (const unit of asArray(level.units)) {
    const normalized = normalizeUnit(level.id, unit);
    stageMap.get(normalized.stage)?.units.push(normalized);
  }
}

/* ── تطبيع القراءات ─────────────────────────────────────────── */

function stageForReading(reading) {
  if (/foundation/i.test(text(reading.id))) return 'S0';
  return text(reading.level).toUpperCase();
}

function normalizeReading(reading, index) {
  const stage = stageForReading(reading);
  const id = `le-${text(reading.id) || `reading-${pad(index + 1)}`}`;
  const textEn = text(reading.text);
  return {
    id,
    sourceId: text(reading.id),
    sourceLevel: text(reading.level),
    stage,
    foundation: stage === 'S0',
    title: text(reading.title),
    titleAr: text(reading.titleAr),
    ...(text(reading.emoji) ? { emoji: text(reading.emoji) } : {}),
    text: textEn,
    textAr: text(reading.textAr),
    wordCount: textEn ? textEn.split(/\s+/).filter(Boolean).length : 0,
    words: asArray(reading.words).map((word, wordIndex) => ({
      id: `${id}-w${pad(wordIndex + 1)}`,
      en: text(word?.en),
      ar: text(word?.ar),
    })),
    questions: asArray(reading.questions).map((question, questionIndex) => ({
      id: `${id}-q${pad(questionIndex + 1)}`,
      question: text(question?.q),
      questionAr: text(question?.qAr),
      options: asArray(question?.options).map(text),
      answer: Number(question?.answer),
      explanationAr: text(question?.explain),
    })),
  };
}

const readings = READINGS.map((reading, index) => normalizeReading(reading, index));

/* ── العدّ والتكرارات ───────────────────────────────────────── */

function uniqueCount(records, key) {
  return new Set(records.map((record) => normalizeKey(record[key]))).size;
}

function duplicateGroups(records, key) {
  const groups = new Map();
  for (const record of records) {
    const normalized = normalizeKey(record[key]);
    if (!normalized) continue;
    if (!groups.has(normalized)) groups.set(normalized, []);
    groups.get(normalized).push(record);
  }
  return [...groups.entries()]
    .filter(([, entries]) => entries.length > 1)
    .map(([normalized, entries]) => ({
      key: normalized,
      count: entries.length,
      // سجلات الوحدات تحمل unitId، وسجلات أسئلة القراءة تحمل readingId.
      units: [...new Set(entries.map((entry) => entry.unitId ?? entry.readingId))],
      stages: [...new Set(entries.map((entry) => entry.stage))],
      ar: entries[0].ar ?? '',
    }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

function collectUnitRecords(units, key) {
  return units.flatMap((unit) =>
    asArray(unit[key]).map((entry) => ({
      unitId: unit.sourceId,
      stage: unit.stage,
      key: entry.en,
      en: entry.en,
      ar: entry.ar,
    }))
  );
}

const allUnits = stages.flatMap((stage) => stage.units);
const coreUnits = allUnits.filter((unit) => !unit.deferred && !unit.foundation);
const foundationUnits = allUnits.filter((unit) => unit.foundation);
const deferredUnits = allUnits.filter((unit) => unit.deferred);

function countUnits(units) {
  const vocabulary = collectUnitRecords(units, 'vocabulary');
  const sentences = collectUnitRecords(units, 'sentences');
  const dialogue = collectUnitRecords(units, 'dialogue');
  return {
    units: units.length,
    grammar: units.reduce((sum, unit) => sum + unit.grammar.length, 0),
    vocabulary: vocabulary.length,
    uniqueVocabulary: uniqueCount(vocabulary, 'en'),
    sentences: sentences.length,
    uniqueSentences: uniqueCount(sentences, 'en'),
    dialogue: dialogue.length,
    uniqueDialogue: uniqueCount(dialogue, 'en'),
    phonetics: units.reduce((sum, unit) => sum + unit.phonetics.length, 0),
    l1Transfers: units.reduce((sum, unit) => sum + unit.l1Transfers.length, 0),
    academicTerms: units.reduce((sum, unit) => sum + unit.academicFocus.length, 0),
  };
}

const countsByStage = Object.fromEntries(
  stages.map((stage) => [stage.stage, countUnits(stage.units)])
);
const totals = countUnits(allUnits);
const coreCounts = countUnits(coreUnits);
const foundationCounts = countUnits(foundationUnits);
const deferredCounts = countUnits(deferredUnits);

const allVocabulary = collectUnitRecords(allUnits, 'vocabulary');
const coreVocabulary = collectUnitRecords(coreUnits, 'vocabulary');
const foundationVocabulary = collectUnitRecords(foundationUnits, 'vocabulary');
const allSentences = collectUnitRecords(allUnits, 'sentences');
const allDialogue = collectUnitRecords(allUnits, 'dialogue');

const duplicateVocabulary = duplicateGroups(allVocabulary, 'en');
const duplicateCoreVocabulary = duplicateGroups(coreVocabulary, 'en');
const duplicateSentences = duplicateGroups(allSentences, 'en');
const duplicateDialogue = duplicateGroups(allDialogue, 'en');

const readingQuestions = readings.flatMap((reading) =>
  reading.questions.map((question) => ({
    readingId: reading.id,
    stage: reading.stage,
    key: question.question,
    en: question.question,
    ar: question.questionAr,
  }))
);
const duplicateReadingQuestions = duplicateGroups(readingQuestions, 'en');

const readingsByStage = Object.fromEntries(
  STAGE_ORDER.map((stage) => {
    const items = readings.filter((reading) => reading.stage === stage);
    return [
      stage,
      {
        readings: items.length,
        questions: items.reduce((sum, reading) => sum + reading.questions.length, 0),
        words: items.reduce((sum, reading) => sum + reading.wordCount, 0),
      },
    ];
  })
);

/* ── جرد الصوت ──────────────────────────────────────────────── */

function walkFiles(dir, predicate, result = []) {
  if (!existsSync(dir)) return result;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walkFiles(path, predicate, result);
    } else if (predicate(path)) {
      result.push({ path, bytes: stat.size });
    }
  }
  return result;
}

const audioRoot = join(sourceRoot, 'assets', 'audio');
const audioFiles = walkFiles(audioRoot, (path) => path.toLowerCase().endsWith('.mp3'));
const audioByDirectory = {};
for (const file of audioFiles) {
  const dir = relative(audioRoot, dirname(file.path)).replaceAll('\\', '/');
  const entry = audioByDirectory[dir] ?? { files: 0, bytes: 0 };
  entry.files += 1;
  entry.bytes += file.bytes;
  audioByDirectory[dir] = entry;
}
const audio = {
  totalFiles: audioFiles.length,
  totalBytes: audioFiles.reduce((sum, file) => sum + file.bytes, 0),
  byDirectory: audioByDirectory,
  imported: false,
  note: 'الصوت لم يُنسخ إلى TALAQA بعد؛ خطة S0 تبدأ بـ Web Speech ثم 100–150 مقطعاً اختيارياً.',
};

/* ── التحقق من الأرقام المعلنة ─────────────────────────────── */

const claimedDeltaFromUnique = CLAIMED_CORE_VOCAB - coreCounts.uniqueVocabulary;
const claimedDeltaFromRaw = CLAIMED_CORE_VOCAB - coreCounts.vocabulary;

const warnings = [];
if (!sourceCommit) warnings.push('تعذر قراءة commit المصدر (git غير متاح أو المجلد ليس مستودعاً).');
if (sourceDirty) warnings.push('مستودع Learn-English المصدر يحتوي تعديلات غير ملتزمة وقت الاستخراج.');
if (!existsSync(join(sourceRoot, 'LICENSE')) && !existsSync(join(sourceRoot, 'LICENSE.md'))) {
  warnings.push('لا يوجد ملف LICENSE في مصدر Learn-English؛ الاعتماد على إقرار المالك المكتوب في NOTICE وdocs/CONTENT-SOURCES.md.');
}
if (foundationCounts.dialogue === 0) warnings.push('الوحدات التأسيسية الخمس (S0) لا تحتوي حواراً في المصدر؛ ستُبنى حوارات S0 داخل TALAQA عند الدمج.');
if (deferredUnits.length > 0) warnings.push('وحدات B2–C2 في المصدر «staged» وغير مكتملة الكثافة (48 مفردة و6 جمل لكل مستوى)؛ مستخرجة للتوثيق وغير مدمجة الآن.');
if (duplicateVocabulary.length > 0) warnings.push(`توجد ${duplicateVocabulary.length} مفردة مكررة (${allVocabulary.length - totals.uniqueVocabulary} تكراراً زائداً)؛ يُحتفظ بالأولى ويُدمج السياق عند الدمج.`);
if (duplicateSentences.length > 0) warnings.push(`توجد جملة واحدة مكررة حرفياً في المصدر: «${duplicateSentences[0].key}».`);
if (duplicateReadingQuestions.length > 0) warnings.push(`يوجد سؤال قراءة واحد مكرر حرفياً بين نصين: «${duplicateReadingQuestions[0].key}».`);
if (claimedDeltaFromUnique !== 0) warnings.push(`الرقم المعلن ${CLAIMED_CORE_VOCAB} لا يطابق العدّ: raw ${coreCounts.vocabulary}، unique ${coreCounts.uniqueVocabulary} (فرق ${claimedDeltaFromUnique >= 0 ? '+' : ''}${claimedDeltaFromUnique} عن الفريد).`);
warnings.push('كل محتوى Learn-English المستورد ينتظر مراجعة المالك: 100% من القواعد والقراءات و20% من المفردات قبل أي دمج في src/data/academy.');

/* ── بناء المخرجات ─────────────────────────────────────────── */

const curriculum = {
  schemaVersion: 1,
  source: sourceMeta,
  stages: stages.map((stage) => ({
    stage: stage.stage,
    deferred: stage.deferred,
    foundation: stage.foundation,
    labelAr:
      stage.stage === 'S0'
        ? 'S0 — التأسيسي (من Learn-English)'
        : `${stage.stage} — ${stage.stage === 'A1' ? 'المبتدئ' : stage.stage === 'A2' ? 'ما قبل المتوسط' : stage.stage === 'B1' ? 'المتوسط' : stage.stage === 'B2' ? 'فوق المتوسط' : stage.stage === 'C1' ? 'متقدم' : 'إتقان'}`,
    units: stage.units,
  })),
};

const readingsOutput = {
  schemaVersion: 1,
  source: sourceMeta,
  readings,
};

const curriculumPath = join(outDir, 'curriculum.json');
const readingsPath = join(outDir, 'readings.json');
const manifestPath = join(outDir, 'manifest.json');
const reportPath = join(outDir, 'EXTRACTION_REPORT.md');

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

writeJson(curriculumPath, curriculum);
writeJson(readingsPath, readingsOutput);

function outputInfo(path) {
  const bytes = readFileSync(path);
  return {
    path: relative(ROOT, path).replaceAll('\\', '/'),
    sha256: createHash('sha256').update(bytes).digest('hex'),
    bytes: bytes.length,
  };
}

const manifest = {
  schemaVersion: 1,
  generatedBy: 'tools/import/learn-english.mjs',
  generatedAt: new Date().toISOString(),
  source: sourceMeta,
  outputs: [outputInfo(curriculumPath), outputInfo(readingsPath)],
  scope: {
    extractedStages: STAGE_ORDER,
    integrationStages: ['S0', 'A1', 'A2', 'B1'],
    deferredStages: ['B2', 'C1', 'C2'],
    note: 'B2–C2 مستخرجة للتوثيق فقط؛ التزاماً بقرار المالك تبقى TALAQA الحالية هي المرجع في B2–C2.',
  },
  counts: {
    byStage: countsByStage,
    totals,
    core: coreCounts,
    foundation: foundationCounts,
    deferred: deferredCounts,
    readings: {
      total: readings.length,
      questions: readingQuestions.length,
      words: readings.reduce((sum, reading) => sum + reading.wordCount, 0),
      byStage: readingsByStage,
    },
    audio,
  },
  uniqueness: {
    vocabulary: {
      raw: allVocabulary.length,
      unique: totals.uniqueVocabulary,
      duplicates: allVocabulary.length - totals.uniqueVocabulary,
      duplicateTerms: duplicateVocabulary.length,
    },
    coreVocabulary: {
      raw: coreVocabulary.length,
      unique: coreCounts.uniqueVocabulary,
      duplicates: coreVocabulary.length - coreCounts.uniqueVocabulary,
      duplicateTerms: duplicateCoreVocabulary.length,
      claimed: CLAIMED_CORE_VOCAB,
      claimedDeltaFromUnique,
      claimedDeltaFromRaw,
    },
    foundationVocabulary: {
      raw: foundationVocabulary.length,
      unique: foundationCounts.uniqueVocabulary,
    },
    sentences: {
      raw: allSentences.length,
      unique: totals.uniqueSentences,
      duplicates: allSentences.length - totals.uniqueSentences,
    },
    dialogue: {
      raw: allDialogue.length,
      unique: totals.uniqueDialogue,
      duplicates: allDialogue.length - totals.uniqueDialogue,
    },
  },
  duplicates: {
    vocabulary: duplicateVocabulary,
    coreVocabulary: duplicateCoreVocabulary,
    sentences: duplicateSentences,
    dialogue: duplicateDialogue,
    readingQuestions: duplicateReadingQuestions,
  },
  warnings,
};

writeJson(manifestPath, manifest);

/* ── تقرير عربي قابل للإرسال ────────────────────────────────── */

function mdCell(value) {
  return String(value ?? '').replaceAll('|', '\\|').replace(/\n/g, ' ');
}

function table(headers, rows) {
  return [
    `| ${headers.map(mdCell).join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(mdCell).join(' | ')} |`),
  ].join('\n');
}

function stageLabel(stage) {
  return stage === 'S0' ? 'S0 التأسيسي' : stage;
}

function stageRows(counts) {
  return STAGE_ORDER.filter((stage) => counts[stage] && (counts[stage].units > 0 || stage === 'S0')).map((stage) => {
    const row = counts[stage];
    return [
      stageLabel(stage),
      row.units,
      row.grammar,
      row.vocabulary,
      row.uniqueVocabulary,
      row.sentences,
      row.dialogue,
    ];
  });
}

const duplicateVocabRows = duplicateVocabulary.map((entry) => [
  entry.key,
  entry.count,
  entry.units.join('، '),
  entry.stages.join('، '),
]);

const readingRows = readings.map((reading) => [
  reading.id,
  stageLabel(reading.stage),
  reading.title,
  reading.wordCount,
  reading.questions.length,
]);

const audioRows = Object.entries(audio.byDirectory)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([dir, info]) => [dir, info.files, `${(info.bytes / 1024 / 1024).toFixed(2)} MB`]);

const report = `# تقرير استخراج محتوى Learn-English

> **التاريخ:** ${new Date().toISOString().slice(0, 10)} · **المصدر:** Learn-English (المستودع الرسمي) · **commit:** \`${sourceCommit ?? 'غير متاح'}\`${sourceDirty ? ' · **تحذير:** المصدر يحتوي تعديلات غير ملتزمة' : ''}
>
> **الحالة:** استخراج وتطبيع وعدّ فقط — **لم يُدمج أي محتوى في \`src/data/academy\` بعد**. هذا التقرير يُرسل للمالك قبل أي دمج.

---

## 1. الملخص التنفيذي

- **نطاق الدمج المقترح (S0–B1):** ${coreCounts.units + foundationCounts.units} وحدة (${foundationCounts.units} تأسيسية S0 + ${coreCounts.units} أساسية)، ${foundationCounts.grammar + coreCounts.grammar} قاعدة، ${foundationCounts.vocabulary + coreCounts.vocabulary} مفردة خام (${foundationCounts.uniqueVocabulary + coreCounts.uniqueVocabulary} فريدة)، ${foundationCounts.sentences + coreCounts.sentences} جملة، ${foundationCounts.dialogue + coreCounts.dialogue} سطر حوار.
- **كل ما في المصدر (S0–C2):** ${totals.units} وحدة، ${totals.grammar} قاعدة، ${totals.vocabulary} مفردة خام (${totals.uniqueVocabulary} فريدة)، ${totals.sentences} جملة، ${totals.dialogue} سطر حوار، ${readings.length} نصاً و${readingQuestions.length} سؤال قراءة.
- **المؤجل (B2–C2):** ${deferredCounts.units} وحدة و${deferredCounts.vocabulary} مفردة خام — مستخرجة للتوثيق، **غير مدمجة**؛ تبقى TALAQA الحالية هي المرجع في B2–C2.
- **الصوت:** ${audio.totalFiles} ملف MP3 بحجم ${(audio.totalBytes / 1024 / 1024).toFixed(2)} MB — **لم يُنسخ**؛ خطة S0 تبدأ بـ Web Speech ثم 100–150 مقطعاً اختيارياً.
- **القراءات:** ${readings.length} نصاً (${readingsByStage.S0.readings} تأسيسية S0 + ${readingsByStage.A1.readings} A1 + ${readingsByStage.A2.readings} A2 + ${readingsByStage.B1.readings} B1)، ${readingQuestions.length} سؤالاً، ${readings.reduce((sum, reading) => sum + reading.wordCount, 0)} كلمة.
- **التأسيسي:** ${foundationCounts.units} وحدات وُسمت \`S0\` (كانت \`a1-foundation-*\` في المصدر)، ${foundationCounts.vocabulary} مفردة و${foundationCounts.sentences} جملة و${foundationCounts.grammar} قاعدة.

---

## 2. العدّ حسب المستوى

${table(
  ['المستوى', 'الوحدات', 'القواعد', 'المفردات الخام', 'المفردات الفريدة', 'الجمل', 'سطور الحوار'],
  stageRows(countsByStage)
)}

**الإجمالي:** ${totals.units} وحدة · ${totals.grammar} قاعدة · ${totals.vocabulary} مفردة (${totals.uniqueVocabulary} فريدة) · ${totals.sentences} جملة · ${totals.dialogue} سطر حوار.

---

## 3. التأسيسي S0

${table(
  ['الوحدة', 'المفردات', 'الجمل', 'القواعد', 'الحوار'],
  foundationUnits.map((unit) => [
    unit.sourceId,
    unit.vocabulary.length,
    unit.sentences.length,
    unit.grammar.length,
    unit.dialogue.length,
  ])
)}

**ملاحظة:** الوحدات التأسيسية الخمس لا تحتوي حواراً في المصدر. عند الدمج ستُبنى حوارات S0 قصيرة داخل TALAQA، ولا تُنسخ من مصدر آخر.

---

## 4. تكرارات المفردات (كل المصدر)

- **كل المصدر:** ${allVocabulary.length} خام → ${totals.uniqueVocabulary} فريدة؛ ${duplicateVocabulary.length} مصطلحاً مكرراً (${allVocabulary.length - totals.uniqueVocabulary} تكراراً).
- **النطاق الأساسي (بلا تأسيسي):** ${coreVocabulary.length} خام → ${coreCounts.uniqueVocabulary} فريدة؛ ${duplicateCoreVocabulary.length} مصطلحاً مكرراً.
- **التأسيسي:** ${foundationVocabulary.length} خام → ${foundationCounts.uniqueVocabulary} فريدة؛ لا تكرارات.

${table(['المصطلح', 'مرات', 'الوحدات', 'المستويات'], duplicateVocabRows)}

**قرار الدمج المقترح:** يُحتفظ بالمدخل الأول، ويُضاف مثال/متلازمة من المدخل الثاني إلى سياق البطاقة نفسها بدل إنشاء بطاقة مكررة.

---

## 5. مطابقة الرقم المعلن 288

الرقم المعلن من المالك: **288 مفردة أساسية**.

| القياس | القيمة |
|---|---:|
| المفردات الأساسية الخام (A1 core + A2 + B1) | ${coreCounts.vocabulary} |
| المفردات الأساسية الفريدة | ${coreCounts.uniqueVocabulary} |
| الفرق عن الرقم المعلن (فريد) | ${claimedDeltaFromUnique >= 0 ? '+' : ''}${claimedDeltaFromUnique} |
| الفرق عن الرقم المعلن (خام) | ${claimedDeltaFromRaw >= 0 ? '+' : ''}${claimedDeltaFromRaw} |
| التأسيسي الخام | ${foundationCounts.vocabulary} |
| كل المصدر الخام | ${totals.vocabulary} |
| كل المصدر الفريد | ${totals.uniqueVocabulary} |

**الخلاصة:** لا يوجد عدّ مباشر يعطي 288. العدّ الموثّق هو **${coreCounts.vocabulary} خام / ${coreCounts.uniqueVocabulary} فريدة** للنطاق الأساسي، و**${totals.vocabulary} خام / ${totals.uniqueVocabulary} فريدة** لكل المصدر. الفرق 5 عن الفريد و−6 عن الخام؛ الأرجح أن الرقم 288 جُمع بطريقة مختلفة (ربما بإضافة 5 مصطلحات تأسيسية أو بعدّ بعض التكرارات). **التوصية:** اعتماد ${coreCounts.uniqueVocabulary} فريدة أساسية و${totals.uniqueVocabulary} فريدة إجمالية كأرقام رسمية في التقارير القادمة.

---

## 6. الجمل والحوار

- **الجمل:** ${allSentences.length} خام → ${totals.uniqueSentences} فريدة؛ ${duplicateSentences.length} جملة مكررة.
- **الحوار:** ${allDialogue.length} سطراً → ${totals.uniqueDialogue} فريداً؛ ${duplicateDialogue.length} سطراً مكرراً.

${duplicateSentences.length ? table(['الجملة المكررة', 'مرات', 'الوحدات'], duplicateSentences.map((entry) => [entry.key, entry.count, entry.units.join('، ')])) : 'لا توجد جمل مكررة.'}

---

## 7. القراءات

${table(['المعرّف', 'المستوى', 'العنوان', 'الكلمات', 'الأسئلة'], readingRows)}

- **أسئلة القراءة:** ${readingQuestions.length} سؤالاً؛ ${duplicateReadingQuestions.length ? 'سؤال واحد مكرر حرفياً.' : 'لا تكرار.'}

${duplicateReadingQuestions.length ? table(['السؤال المكرر', 'مرات', 'النصوص'], duplicateReadingQuestions.map((entry) => [entry.key, entry.count, entry.units.join('، ')])) : ''}

- **ملاحظة:** القراءات التأسيسية الأربع وُسمت S0، والـ12 الأخرى موزعة A1/A2/B1.

---

## 8. الصوت

${table(['المجلد', 'الملفات', 'الحجم'], audioRows)}

- الإجمالي: **${audio.totalFiles}** ملفاً · **${(audio.totalBytes / 1024 / 1024).toFixed(2)} MB**.
- لم يُنسخ أي ملف إلى TALAQA في هذه المرحلة. خطة S0: Web Speech أولاً، ثم 100–150 مقطعاً اختيارياً.

---

## 9. البنية والجودة

- **القواعد:** ${totals.grammar} قاعدة، منها ${foundationCounts.grammar} تأسيسية. شرح المصدر HTML؛ أُنتج \`explainHtml\` و\`explainText\` معاً.
- **المفردات:** ${totals.vocabulary} مدخلاً خاماً، مع \`example\` و\`collocations\` حيث وُجدت.
- **الجمل والحوار:** ${totals.sentences} جملة و${totals.dialogue} سطر حوار، مع النص الإنجليزي والترجمة العربية.
- **الصوتيات:** ${totals.phonetics} مدخلاً صوتياً (IPA، أزواج تقابل، كلام متصل، تنغيم).
- **انتقالات العربية:** ${totals.l1Transfers} خطأً عربياً موثقاً.
- **المفردات الأكاديمية:** ${totals.academicTerms} مصطلحاً.
- **B2–C2:** ${deferredCounts.units} وحدة «staged» — كثافتها أقل (${deferredCounts.vocabulary} مفردة، ${deferredCounts.sentences} جملة، ${deferredCounts.dialogue} سطر حوار)؛ لا تُدمج الآن.

---

## 10. التحذيرات

${warnings.map((warning) => `- ${warning}`).join('\n')}

---

## 11. الخطوة التالية (بانتظار موافقة المالك)

1. مراجعة هذا التقرير والأرقام، خصوصاً مطابقة **288**.
2. مراجعة بشرية: **100% من القواعد والقراءات، و20% من المفردات** (المالك: عمار).
3. بعد الموافقة: توليد TypeScript من JSON المطبّع ودمجه في **42 درساً** (تكثيف لا إلغاء) مع وسم التأسيسي S0.
4. لا يُدمج أي محتوى قبل هذه الموافقة.

---

## 12. الملفات الناتجة

- \`content/learn-english/curriculum.json\` — الوحدات المطبّعة (S0–C2، مع \`deferred\` لـB2–C2).
- \`content/learn-english/readings.json\` — 16 نصاً و75 سؤالاً.
- \`content/learn-english/manifest.json\` — البصمات والعدّ والتكرارات.
- \`content/learn-english/EXTRACTION_REPORT.md\` — هذا التقرير.

**بصمة المصدر:** \`${sourceFingerprint}\`
`;

writeFileSync(reportPath, report, 'utf8');

console.log('✓ اكتمل الاستخراج');
console.log(`  المصدر: ${sourceRoot}`);
console.log(`  commit: ${sourceCommit ?? 'غير متاح'}`);
console.log(`  الوحدات: ${totals.units} (S0–B1: ${coreCounts.units + foundationCounts.units}، مؤجلة: ${deferredCounts.units})`);
console.log(`  المفردات: ${totals.vocabulary} خام / ${totals.uniqueVocabulary} فريدة`);
console.log(`  القراءات: ${readings.length} نصاً / ${readingQuestions.length} سؤالاً`);
console.log(`  الصوت: ${audio.totalFiles} ملفاً (${(audio.totalBytes / 1024 / 1024).toFixed(2)} MB) — غير منسوخ`);
console.log(`  المخرجات: ${outDir}`);
