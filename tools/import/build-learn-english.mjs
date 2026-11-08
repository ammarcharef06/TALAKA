#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — توليد TypeScript وأوراق المراجعة من JSON المستخرج
   ───────────────────────────────────────────────────────────────
   يقرأ:  content/learn-english/{curriculum,readings,manifest}.json
   يكتب:  src/data/learnEnglish/{curriculum,readings}.generated.ts
          content/learn-english/review/*.md + manifest.json
   لا يكتب في src/data/academy ولا يدمج أي محتوى في الدروس.
   التشغيل:
     node tools/import/build-learn-english.mjs
   ═══════════════════════════════════════════════════════════════ */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENT = join(ROOT, 'content', 'learn-english');
const DATA_OUT = join(ROOT, 'src', 'data', 'learnEnglish');
const REVIEW_OUT = join(CONTENT, 'review');

const STAGES = ['S0', 'A1', 'A2', 'B1'];
const VOCAB_SAMPLE_STEP = 5;

const EXPECTED = {
  units: 23,
  grammar: 41,
  vocabulary: 366,
  uniqueVocabulary: 355,
  sentences: 246,
  dialogue: 108,
  readings: 16,
  readingQuestions: 75,
  readingWords: 1679,
};

function readJson(name) {
  return JSON.parse(readFileSync(join(CONTENT, name), 'utf8'));
}

const curriculum = readJson('curriculum.json');
const readingsFile = readJson('readings.json');
const manifest = readJson('manifest.json');

/* ── اختيار النطاق والتحقق من المصدر ─────────────────────────── */

const source = curriculum.source;
const readingsSource = readingsFile.source;
if (source.commit !== readingsSource.commit || source.fingerprint !== readingsSource.fingerprint) {
  throw new Error('بصمة المصدر في curriculum.json لا تطابق readings.json');
}
if (source.commit !== manifest.source.commit || source.fingerprint !== manifest.source.fingerprint) {
  throw new Error('بصمة المصدر في manifest.json لا تطابق ملفات المحتوى');
}

const units = curriculum.stages
  .filter((stage) => STAGES.includes(stage.stage))
  .flatMap((stage) => stage.units)
  .filter((unit) => !unit.deferred);

const readings = readingsFile.readings.filter((reading) => STAGES.includes(reading.stage));

/* ── العدّ والتحقق ─────────────────────────────────────────────── */

const normalizeVocabulary = (value) => value.trim().toLowerCase().replace(/\s+/g, ' ');

function uniqueVocabularyEntries(unitList) {
  const seen = new Set();
  const entries = [];
  for (const unit of unitList) {
    for (const vocabulary of unit.vocabulary) {
      const key = normalizeVocabulary(vocabulary.en);
      if (seen.has(key)) continue;
      seen.add(key);
      entries.push({ unit, vocabulary });
    }
  }
  return entries;
}

const uniqueVocabulary = uniqueVocabularyEntries(units);

const counts = {
  units: units.length,
  grammar: units.reduce((total, unit) => total + unit.grammar.length, 0),
  vocabulary: units.reduce((total, unit) => total + unit.vocabulary.length, 0),
  uniqueVocabulary: uniqueVocabulary.length,
  sentences: units.reduce((total, unit) => total + unit.sentences.length, 0),
  dialogue: units.reduce((total, unit) => total + unit.dialogue.length, 0),
  readings: readings.length,
  readingQuestions: readings.reduce((total, reading) => total + reading.questions.length, 0),
  readingWords: readings.reduce((total, reading) => total + reading.wordCount, 0),
};

const problems = [];
for (const [key, expected] of Object.entries(EXPECTED)) {
  if (counts[key] !== expected) problems.push(`${key}: ${counts[key]} ≠ ${expected}`);
}
if (units.some((unit) => unit.deferred)) problems.push('وُجدت وحدة مؤجلة داخل نطاق التوليد');
if (readings.some((reading) => !STAGES.includes(reading.stage))) {
  problems.push('وُجدت قراءة خارج نطاق S0–B1');
}
if (problems.length > 0) {
  console.error('✗ فشل التحقق قبل التوليد:');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

/* ── عيّنة المفردات 20% (كل خامسة بعد إزالة التكرار) ─────────── */

const vocabularySample = uniqueVocabulary.filter((_, index) => index % VOCAB_SAMPLE_STEP === 0);
const sampleUnitCount = new Set(vocabularySample.map((entry) => entry.unit.id)).size;
if (vocabularySample.length !== 71) {
  throw new Error(`حجم عيّنة المفردات ${vocabularySample.length} لا يساوي 71 (20% من 355)`);
}
if (sampleUnitCount !== units.length) {
  throw new Error(`العيّنة لا تغطي كل الوحدات: ${sampleUnitCount}/${units.length}`);
}

/* ── أدوات Markdown ───────────────────────────────────────────── */

const pad = (value) => String(value).padStart(2, '0');
const clean = (value) => String(value ?? '').replace(/\r\n/g, '\n').trim();
const cell = (value) => clean(value).replace(/\|/g, '\\|').replace(/\n+/g, ' ');

function markdownTable(table) {
  const header = `| ${table.headers.map(cell).join(' | ')} |`;
  const divider = `| ${table.headers.map(() => '---').join(' | ')} |`;
  const rows = table.rows.map((row) => `| ${row.map(cell).join(' | ')} |`);
  return [header, divider, ...rows].join('\n');
}

function reviewFooter(index, total) {
  return [
    '',
    `> **التقدّم:** ${index} من ${total}`,
    '',
    '**قرار المراجع:** ☐ مقبول · ☐ يحتاج تعديلاً · ☐ مرفوض — ملاحظات: ______________________________',
    '',
    '---',
    '',
  ].join('\n');
}

/* ── ورقة القواعد 100% ────────────────────────────────────────── */

function grammarSheet() {
  const rows = [];
  let index = 0;
  for (const stage of STAGES) {
    const stageUnits = units.filter((unit) => unit.stage === stage);
    if (stageUnits.length === 0) continue;
    rows.push(`# ورقة مراجعة القواعد — المرحلة ${stage}`, '');
    for (const unit of stageUnits) {
      for (const grammar of unit.grammar) {
        index += 1;
        rows.push(
          `### G${pad(index)} · ${clean(grammar.titleAr)}`,
          '',
          `- **المعرّف:** \`${grammar.id}\` · **وحدة المصدر:** \`${unit.sourceId}\` · **المرحلة:** ${unit.stage}`,
          `- **الوحدة:** ${clean(unit.titleAr)}`,
          '',
          '**الشرح:**',
          '',
          clean(grammar.explainText)
            .split('\n')
            .map((line) => (line.startsWith('•') ? `- ${line.slice(1).trim()}` : line))
            .join('\n'),
          ''
        );
        if (grammar.table) {
          rows.push('**الجدول:**', '', markdownTable(grammar.table), '');
        }
        if (grammar.examples.length > 0) {
          rows.push('**الأمثلة:**', '', ...grammar.examples.map((example) => `- ${clean(example.en)} — ${clean(example.ar)}`), '');
        }
        if (grammar.tips.length > 0) {
          rows.push('**نصائح:**', '', ...grammar.tips.map((tip) => `- ${clean(tip)}`), '');
        }
        rows.push(reviewFooter(index, counts.grammar));
      }
    }
  }
  return rows.join('\n');
}

/* ── ورقة القراءات 100% ───────────────────────────────────────── */

function readingsSheet() {
  const rows = [];
  let index = 0;
  for (const reading of readings) {
    index += 1;
    rows.push(
      `## R${pad(index)} · ${clean(reading.title)} — ${clean(reading.titleAr)}`,
      '',
      `- **المعرّف:** \`${reading.id}\` · **المرحلة:** ${reading.stage}${reading.foundation ? ' (تأسيسي)' : ''} · **الكلمات:** ${reading.wordCount}`,
      `- **المصدر:** \`${reading.sourceId}\``,
      '',
      '**النص الإنجليزي:**',
      '',
      `> ${clean(reading.text).replace(/\n+/g, ' ')}`,
      '',
      '**الترجمة العربية:**',
      '',
      `> ${clean(reading.textAr).replace(/\n+/g, ' ')}`,
      '',
      `**المفردات (${reading.words.length}):** ${reading.words.map((word) => `${clean(word.en)} = ${clean(word.ar)}`).join(' · ')}`,
      '',
      '**الأسئلة:**',
      ''
    );
    reading.questions.forEach((question, questionIndex) => {
      const options = question.options
        .map((option, optionIndex) => (optionIndex === question.answer ? `**${clean(option)}** ✅` : clean(option)))
        .join(' · ');
      rows.push(
        `${questionIndex + 1}. **${clean(question.question)}** — ${clean(question.questionAr)}`,
        `   - الخيارات: ${options}`,
        `   - الشرح: ${clean(question.explanationAr)}`,
        ''
      );
    });
    rows.push(
      `- **قرار المراجع على النص وأسئلته (${reading.questions.length}):** ☐ مقبول · ☐ يحتاج تعديلاً · ☐ مرفوض — ملاحظات: ____________________`,
      '',
      '---',
      ''
    );
  }
  return rows.join('\n');
}

/* ── ورقة عيّنة المفردات 20% ──────────────────────────────────── */

function vocabularySheet() {
  const rows = [];
  let index = 0;
  for (const stage of STAGES) {
    const stageEntries = vocabularySample.filter((entry) => entry.unit.stage === stage);
    if (stageEntries.length === 0) continue;
    rows.push(`# ورقة مراجعة عيّنة المفردات — المرحلة ${stage}`, '');
    let currentUnit = null;
    for (const entry of stageEntries) {
      if (entry.unit.id !== currentUnit) {
        currentUnit = entry.unit.id;
        rows.push(`## ${clean(entry.unit.titleAr)} (\`${entry.unit.sourceId}\`)`, '');
      }
      index += 1;
      const { vocabulary, unit } = entry;
      rows.push(
        `### V${pad(index)} · ${clean(vocabulary.en)}`,
        '',
        `- **المعرّف:** \`${vocabulary.id}\` · **المرحلة:** ${unit.stage} · **الوحدة:** ${clean(unit.titleAr)} · **النوع:** ${clean(vocabulary.pos) || '—'}`,
        `- **المعنى:** ${clean(vocabulary.ar)}`,
        `- **المثال:** ${clean(vocabulary.example.en)} — ${clean(vocabulary.example.ar)}`
      );
      if (vocabulary.collocations.length > 0) {
        rows.push(
          `- **المتلازمات:** ${vocabulary.collocations
            .map((collocation) => `${clean(collocation.en)} = ${clean(collocation.ar)}`)
            .join(' · ')}`
        );
      }
      rows.push(reviewFooter(index, vocabularySample.length));
    }
  }
  return rows.join('\n');
}

/* ── README المراجعة ──────────────────────────────────────────── */

function reviewReadme() {
  return `# أوراق المراجعة البشرية — Learn-English (S0–B1)

> **الحالة:** بانتظار مراجعة المالك وتوقيعه. **لا دمج في الدروس الـ42 قبل ذلك.**
>
> **المصدر:** Learn-English · commit \`${source.commit}\` · بصمة \`${source.fingerprint}\`
> **تاريخ الاستخراج:** ${manifest.generatedAt.slice(0, 10)}

## 1. لماذا هذه الأوراق؟

اتفقنا على مراجعة **100% من القواعد والقراءات** و**20% من المفردات** قبل أي دمج.
هذه الأوراق هي سجل المراجعة الرسمي؛ كل بند فيه مربّع قرار ومساحة ملاحظات.
عند اكتمالها وتوقيعها يمكن بدء الدمج في 42 درساً قائمة (تكثيف لا إلغاء).

## 2. الملفات والأعداد

| الملف | المحتوى | العدد | الحالة |
|---|---|---:|---|
| \`01-grammar-review.md\` | كل قواعد S0–B1 | ${counts.grammar} | ☐ بانتظار المراجعة |
| \`02-readings-review.md\` | كل قراءات S0–B1 وأسئلتها | ${counts.readings} نصاً / ${counts.readingQuestions} سؤالاً | ☐ بانتظار المراجعة |
| \`03-vocabulary-sample.md\` | عيّنة 20% من المفردات الفريدة | ${vocabularySample.length} من ${counts.uniqueVocabulary} | ☐ بانتظار المراجعة |

## 3. كيف تراجع؟

1. اقرأ كل بند، ثم اختر: **☐ مقبول** أو **☐ يحتاج تعديلاً** أو **☐ مرفوض**.
2. اكتب ملاحظاتك في السطر المخصص (أو بجانب البند).
3. إن كان البند يحتاج تعديلاً، اذكر التعديل المطلوب بدقة (النص البديل، حذف، إعادة صياغة).
4. عند الانتهاء، املأ جدول التوقيع أدناه وأبلغني بالضوء الأخضر.
5. **لا يُعدّل أي ملف مولّد يدوياً**؛ التعديلات تُسجّل في الأوراق ثم تُطبّق في المصدر أو في أداة التوليد.

## 4. قاعدة عيّنة المفردات

- أُزيل تكرار المفردات أولاً (355 فريدة).
- ثم أُخذت **كل خامسة** في الترتيب (0، 5، 10، …) = **${vocabularySample.length} مفردة = 20%**.
- العيّنة تغطي **${sampleUnitCount} وحدة** من أصل ${counts.units}.
- قائمة المعرّفات الكاملة في \`manifest.json\` لغرض التدقيق.

## 5. جدول التوقيع

| الورقة | راجعها | التاريخ | القرار |
|---|---|---|---|
| القواعد 100% |  |  | ☐ معتمد · ☐ مع تعديلات · ☐ مرفوض |
| القراءات 100% |  |  | ☐ معتمد · ☐ مع تعديلات · ☐ مرفوض |
| المفردات 20% |  |  | ☐ معتمد · ☐ مع تعديلات · ☐ مرفوض |

**توقيع المالك:** ______________________

## 6. إعادة التوليد

\`\`\`bash
node tools/import/learn-english.mjs --source "C:\\path\\to\\Learn-English"
node tools/import/build-learn-english.mjs
\`\`\`

الأول يستخرج من المصدر، والثاني يولّد TypeScript والأوراق من JSON المطبّع.
أي تغيير في المصدر يغيّر البصمة، ويجب إعادة المراجعة على الأوراق الجديدة.

## 7. ما لا تفعله هذه الأوراق

- لا تدمج شيئاً في \`src/data/academy/course.ts\`.
- لا تعدّل بيانات المصدر.
- لا تعتبر المراجعة تمت بمجرد توليد الأوراق.
`;
}

/* ── كتابة TypeScript المولّد ─────────────────────────────────── */

const header = (title) => `/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — ${title}
   ⚠️ ملف مولّد آلياً — لا تعدّله يدوياً.
   المصدر: Learn-English · commit ${source.commit}
   البصمة: ${source.fingerprint}
   النطاق: S0–B1 فقط (B2–C2 يبقى على محتوى TALAQA)
   المولّد: tools/import/build-learn-english.mjs
   الحالة: ينتظر المراجعة البشرية — غير مدمج في الدروس.
   ═══════════════════════════════════════════════════════════════ */
`;

const curriculumTs = `${header('بيانات منهج Learn-English المولّدة')}
import type { LearnEnglishSource, LearnEnglishUnit } from './types';

export const LEARN_ENGLISH_SOURCE: LearnEnglishSource = ${JSON.stringify(source, null, 2)};

export const LEARN_ENGLISH_UNITS: LearnEnglishUnit[] = ${JSON.stringify(units, null, 2)};
`;

const readingsTs = `${header('بيانات قراءات Learn-English المولّدة')}
import type { LearnEnglishReading } from './types';

export const LEARN_ENGLISH_READINGS: LearnEnglishReading[] = ${JSON.stringify(readings, null, 2)};
`;

const reviewManifest = {
  schemaVersion: 1,
  generatedBy: 'tools/import/build-learn-english.mjs',
  source: {
    name: source.name,
    repository: source.repository,
    commit: source.commit,
    fingerprint: source.fingerprint,
  },
  scope: 'S0-B1',
  counts,
  sample: {
    method: `every-${VOCAB_SAMPLE_STEP}th-unique-vocabulary`,
    size: vocabularySample.length,
    totalUnique: counts.uniqueVocabulary,
    ratio: vocabularySample.length / counts.uniqueVocabulary,
    unitsCovered: sampleUnitCount,
    ids: vocabularySample.map((entry) => entry.vocabulary.id),
  },
  files: {
    grammar: '01-grammar-review.md',
    readings: '02-readings-review.md',
    vocabulary: '03-vocabulary-sample.md',
  },
};

mkdirSync(DATA_OUT, { recursive: true });
mkdirSync(REVIEW_OUT, { recursive: true });

writeFileSync(join(DATA_OUT, 'curriculum.generated.ts'), curriculumTs, 'utf8');
writeFileSync(join(DATA_OUT, 'readings.generated.ts'), readingsTs, 'utf8');
writeFileSync(join(REVIEW_OUT, 'README.md'), reviewReadme(), 'utf8');
writeFileSync(join(REVIEW_OUT, '01-grammar-review.md'), grammarSheet(), 'utf8');
writeFileSync(join(REVIEW_OUT, '02-readings-review.md'), readingsSheet(), 'utf8');
writeFileSync(join(REVIEW_OUT, '03-vocabulary-sample.md'), vocabularySheet(), 'utf8');
writeFileSync(join(REVIEW_OUT, 'manifest.json'), `${JSON.stringify(reviewManifest, null, 2)}\n`, 'utf8');

console.log('✓ اكتمل التوليد');
console.log(`  الوحدات: ${counts.units} · القواعد: ${counts.grammar} · المفردات: ${counts.vocabulary} خام / ${counts.uniqueVocabulary} فريدة`);
console.log(`  الجمل: ${counts.sentences} · الحوار: ${counts.dialogue} · القراءات: ${counts.readings} / ${counts.readingQuestions} سؤالاً`);
console.log(`  عيّنة المفردات: ${vocabularySample.length} (20%) تغطي ${sampleUnitCount} وحدة`);
console.log(`  TypeScript: ${join(DATA_OUT, 'curriculum.generated.ts')}`);
console.log(`              ${join(DATA_OUT, 'readings.generated.ts')}`);
console.log(`  أوراق المراجعة: ${REVIEW_OUT}`);
