/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — واجهة بيانات Learn-English المولّدة
   المحتوى هنا مولّد آلياً من content/learn-english/*.json.
   ✅ اعتمد المالك أوراق المراجعة الثلاث كتابياً في 2026-11-08،
   وبدأ دمج S0–B1 في الدروس الـ42 القائمة (تكثيف لا إلغاء).
   ═══════════════════════════════════════════════════════════════ */

import { LEARN_ENGLISH_UNITS } from './curriculum.generated';
import { LEARN_ENGLISH_READINGS } from './readings.generated';
import type { LearnEnglishUnit } from './types';

export * from './types';
export { LEARN_ENGLISH_SOURCE, LEARN_ENGLISH_UNITS } from './curriculum.generated';
export { LEARN_ENGLISH_READINGS } from './readings.generated';

/** المراحل المشمولة في نطاق الدمج المقترح — B2–C2 يبقى على محتوى TALAQA. */
export const LEARN_ENGLISH_STAGES = ['S0', 'A1', 'A2', 'B1'] as const;
export type LearnEnglishScopeStage = (typeof LEARN_ENGLISH_STAGES)[number];

/** حالة المراجعة: اعتماد المالك الكتابي في 2026-11-08 بعد مراجعة الأوراق الثلاث. */
export const LEARN_ENGLISH_REVIEW_STATUS = 'owner-approved-2026-11-08' as const;

/** بوابة الدمج: فُتحت بعد الاعتماد الكتابي للمالك — والدمج تكثيف لا إلغاء. */
export const LEARN_ENGLISH_MERGE_ALLOWED = true;

function normalizeVocabulary(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function uniqueVocabularyCount(units: LearnEnglishUnit[]): number {
  return new Set(
    units.flatMap((unit) => unit.vocabulary.map((vocabulary) => normalizeVocabulary(vocabulary.en)))
  ).size;
}

/** أعداد النطاق المولّد — محسوبة من البيانات نفسها، لا من أرقام مكتوبة يدوياً. */
export const LEARN_ENGLISH_COUNTS = {
  units: LEARN_ENGLISH_UNITS.length,
  grammar: LEARN_ENGLISH_UNITS.reduce((total, unit) => total + unit.grammar.length, 0),
  vocabulary: LEARN_ENGLISH_UNITS.reduce((total, unit) => total + unit.vocabulary.length, 0),
  uniqueVocabulary: uniqueVocabularyCount(LEARN_ENGLISH_UNITS),
  sentences: LEARN_ENGLISH_UNITS.reduce((total, unit) => total + unit.sentences.length, 0),
  dialogue: LEARN_ENGLISH_UNITS.reduce((total, unit) => total + unit.dialogue.length, 0),
  readings: LEARN_ENGLISH_READINGS.length,
  readingQuestions: LEARN_ENGLISH_READINGS.reduce(
    (total, reading) => total + reading.questions.length,
    0
  ),
  readingWords: LEARN_ENGLISH_READINGS.reduce((total, reading) => total + reading.wordCount, 0),
} as const;

/** وحدات مرحلة واحدة — للاستخدام في التوليد والمراجعة والدمج لاحقاً. */
export function learnEnglishUnitsForStage(stage: LearnEnglishScopeStage): LearnEnglishUnit[] {
  return LEARN_ENGLISH_UNITS.filter((unit) => unit.stage === stage);
}
