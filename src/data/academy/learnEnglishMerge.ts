/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — دمج محتوى Learn-English (S0–B1) في الدروس الـ42
   ───────────────────────────────────────────────────────────────
   القاعدة: تكثيف لا إلغاء. كل درس قائم يحتفظ بمعرّفه وعنوانه وأهدافه
   وكتله وأمثلته وتدريبه الأصلي، ثم يُضاف إليه إثراء Learn-English.
   B2–C2 (المحطات 5–7) يبقى على محتوى TALAQA وحده.
   المصدر: content/learn-english/ — معتمد بشرياً في 2026-11-08.
   ═══════════════════════════════════════════════════════════════ */
import type {
  LessonBlock,
  LessonExample,
  LessonLearnEnglish,
  PracticeItem,
} from '../../types';
import { LEARN_ENGLISH_UNITS } from '../learnEnglish';
import type { LearnEnglishStage, LearnEnglishUnit } from '../learnEnglish/types';

/**
 * خريطة الدمج: كل وحدة Learn-English تُسند إلى درس أو أكثر من دروس
 * المحطات 1–4 (m0–m3). الإسناد موضوعي/نحوي، وليس آلياً أعمى.
 */
export const LEARN_ENGLISH_LESSON_MAP: Record<string, string[]> = {
  /* ── المحطة الأولى: S0/A1 — أول خطواتك ── */
  'l1-sounds': ['le-s0-a1-foundation-animals'],
  'l2-im': ['le-s0-a1-foundation-people-body', 'le-a1-a1u2'],
  'l3-numbers': ['le-a1-a1u3'],
  'l4-greetings': ['le-a1-a1u1'],
  'l5-job': ['le-s0-a1-foundation-school', 'le-s0-a1-foundation-people-body'],
  'l6-dialogue': ['le-a1-a1u1'],

  /* ── المحطة الثانية: A1 — الجمل العاملة ── */
  'l7-dont': ['le-a1-a1u4'],
  'l8-dodoes': ['le-a1-a1u4'],
  'l9-are': ['le-a1-a1u6'],
  'l10-habits': ['le-s0-a1-foundation-home-verbs', 'le-a1-a1u5', 'le-a1-a1u6'],
  'l11-mine': ['le-a1-a1u2'],
  'l12-cafe': ['le-s0-a1-foundation-food-colors', 'le-a1-a1u4'],

  /* ── المحطة الثالثة: A2 — الزمن يتكلم ── */
  'l13-past-ed': ['le-a2-a2u1'],
  'l14-irregular': ['le-a2-a2u1'],
  'l15-did': ['le-a2-a2u1', 'le-a2-a2u3'],
  'l16-future': ['le-a2-a2u5'],
  'l17-compare': ['le-a2-a2u2', 'le-a2-a2u4'],
  'l18-trip': ['le-a2-a2u3'],

  /* ── المحطة الرابعة: B1 — لغة الحياة ── */
  'l19-perfect': ['le-a2-a2u6', 'le-b1-b1u1'],
  'l20-used-to': ['le-a2-a2u4', 'le-b1-b1u2'],
  'l21-conditionals': ['le-b1-b1u5'],
  'l22-passive': ['le-b1-b1u3'],
  'l23-relative': ['le-b1-b1u6'],
  'l24-interview': ['le-b1-b1u1', 'le-b1-b1u4'],
};

const UNIT_BY_ID = new Map(LEARN_ENGLISH_UNITS.map((unit) => [unit.id, unit]));

/** الدروس المستهدفة بالدمج — 24 درساً في المحطات 1–4 فقط. */
export const LEARN_ENGLISH_MERGED_LESSON_IDS = Object.keys(LEARN_ENGLISH_LESSON_MAP);

/** وحدات Learn-English الفعلية لدرس معيّن (بعد التحقق من المعرّفات). */
export function learnEnglishUnitsForLesson(lessonId: string): LearnEnglishUnit[] {
  const ids = LEARN_ENGLISH_LESSON_MAP[lessonId] ?? [];
  return ids.map((id) => UNIT_BY_ID.get(id)).filter((unit): unit is LearnEnglishUnit => Boolean(unit));
}

/** مرجع الإثراء الذي يُخزَّن على الدرس نفسه — بلا نسخ للبيانات. */
export function learnEnglishForLesson(lessonId: string): LessonLearnEnglish | undefined {
  const units = learnEnglishUnitsForLesson(lessonId);
  if (units.length === 0) return undefined;
  const stages = [...new Set(units.map((unit) => unit.stage))] as LearnEnglishStage[];
  return {
    unitIds: units.map((unit) => unit.id),
    stages,
    foundation: units.some((unit) => unit.foundation),
  };
}

function tableToBlock(unit: LearnEnglishUnit, index: number): LessonBlock | null {
  const grammar = unit.grammar[index];
  if (!grammar?.table) return null;
  const { headers, rows } = grammar.table;
  if (headers.length < 2 || rows.length === 0) return null;
  const head: [string, string] =
    headers.length === 2
      ? [headers[0], headers[1]]
      : [headers.slice(0, -1).join(' — '), headers[headers.length - 1]];
  const bodyRows: [string, string][] = rows
    .filter((row) => row.length >= 2)
    .map((row) =>
      row.length === 2
        ? [row[0], row[1]]
        : [row.slice(0, -1).join(' — '), row[row.length - 1]]
    );
  if (bodyRows.length === 0) return null;
  return {
    type: 'table',
    title: `[${unit.stage}] ${grammar.titleAr}`,
    head,
    rows: bodyRows,
  };
}

/** كتل القواعد المدمجة — تُضاف إلى كتل الدرس الأصلية. */
export function learnEnglishBlocksForLesson(lessonId: string): LessonBlock[] {
  const blocks: LessonBlock[] = [];
  for (const unit of learnEnglishUnitsForLesson(lessonId)) {
    unit.grammar.forEach((grammar, index) => {
      blocks.push({
        type: 'rule',
        title: `[${unit.stage}] ${grammar.titleAr}`,
        body: grammar.explainText,
      });
      const table = tableToBlock(unit, index);
      if (table) blocks.push(table);
      if (grammar.tips.length > 0) {
        blocks.push({
          type: 'tip',
          title: `نصيحة — ${grammar.titleAr}`,
          body: grammar.tips.join('\n'),
        });
      }
    });
  }
  return blocks;
}

/** أمثلة القواعد والجمل المدمجة — تُضاف إلى أمثلة الدرس الأصلية. */
export function learnEnglishExamplesForLesson(lessonId: string): LessonExample[] {
  const examples: LessonExample[] = [];
  const seen = new Set<string>();
  const push = (text: string, note: string) => {
    const key = text.trim().toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    examples.push({ text, note });
  };
  for (const unit of learnEnglishUnitsForLesson(lessonId)) {
    for (const grammar of unit.grammar) {
      for (const example of grammar.examples) push(example.en, example.ar);
    }
    for (const sentence of unit.sentences) push(sentence.en, sentence.ar);
  }
  return examples;
}

/** مفردات الدرس المدمجة — تُعرض في قسم الإثراء. */
export function learnEnglishVocabularyForLesson(lessonId: string) {
  return learnEnglishUnitsForLesson(lessonId).flatMap((unit) =>
    unit.vocabulary.map((vocabulary) => ({ unit, vocabulary }))
  );
}

function uniqueMeanings(unit: LearnEnglishUnit, vocabularyId: string, limit: number): string[] {
  const meanings: string[] = [];
  const target = unit.vocabulary.find((item) => item.id === vocabularyId)?.ar.trim();
  for (const item of unit.vocabulary) {
    if (item.id === vocabularyId) continue;
    const meaning = item.ar.trim();
    if (!meaning || meaning === target || meanings.includes(meaning)) continue;
    meanings.push(meaning);
    if (meanings.length === limit) break;
  }
  return meanings;
}

/**
 * تدريب مفردات مشتق من الوحدات المدمجة — 3 أسئلة لكل وحدة كحد أقصى.
 * مشتق حتمياً من معاني المصدر، ولا يضيف ادعاءً جديداً.
 */
export function learnEnglishPracticeForLesson(lessonId: string): PracticeItem[] {
  const items: PracticeItem[] = [];
  const units = learnEnglishUnitsForLesson(lessonId);
  units.forEach((unit, unitIndex) => {
    const vocabulary = unit.vocabulary;
    if (vocabulary.length < 4) return;
    const picks = [...new Set([0, Math.floor(vocabulary.length / 2), vocabulary.length - 1])].slice(0, 3);
    picks.forEach((pick, pickIndex) => {
      const word = vocabulary[pick];
      const distractors = uniqueMeanings(unit, word.id, 3);
      if (distractors.length < 3) return;
      const correctIndex = (unitIndex + pickIndex + pick) % 4;
      const options: string[] = [];
      let distractorIndex = 0;
      for (let optionIndex = 0; optionIndex < 4; optionIndex += 1) {
        if (optionIndex === correctIndex) {
          options.push(word.ar);
        } else {
          options.push(distractors[distractorIndex]);
          distractorIndex += 1;
        }
      }
      items.push({
        id: `le-${lessonId}-${unit.sourceId}-v${String(pick + 1).padStart(2, '0')}`,
        question: `ما معنى «${word.en}» بالعربية؟`,
        options: options as [string, string, string, string],
        answer: correctIndex,
        explanation: `${word.en} = ${word.ar}. مثال: ${word.example.en} — ${word.example.ar}`,
      });
    });
  });
  return items;
}

/** وحدات كل المراحل المدمجة — للاختبارات والتوثيق. */
export function allMergedLearnEnglishUnitIds(): string[] {
  return [...new Set(Object.values(LEARN_ENGLISH_LESSON_MAP).flat())];
}
