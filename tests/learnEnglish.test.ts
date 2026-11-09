import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  LEARN_ENGLISH_COUNTS,
  LEARN_ENGLISH_MERGE_ALLOWED,
  LEARN_ENGLISH_READINGS,
  LEARN_ENGLISH_REVIEW_STATUS,
  LEARN_ENGLISH_SOURCE,
  LEARN_ENGLISH_UNITS,
  learnEnglishUnitsForStage,
} from '../src/data/learnEnglish';
import {
  LEARN_ENGLISH_LESSON_MAP,
  allMergedLearnEnglishUnitIds,
  learnEnglishUnitsForLesson,
} from '../src/data/academy/learnEnglishMerge';
import { UNITS, allLessonsInOrder } from '../src/data/academy/course';

const reviewDir = join(process.cwd(), 'content', 'learn-english', 'review');

function collectIds(): string[] {
  const ids: string[] = [];
  for (const unit of LEARN_ENGLISH_UNITS) {
    ids.push(unit.id);
    for (const grammar of unit.grammar) {
      ids.push(grammar.id, ...grammar.examples.map((example) => example.id));
    }
    for (const vocabulary of unit.vocabulary) {
      ids.push(vocabulary.id, ...vocabulary.collocations.map((collocation) => collocation.id));
    }
    ids.push(...unit.sentences.map((sentence) => sentence.id));
    ids.push(...unit.dialogue.map((line) => line.id));
    for (const phonetics of unit.phonetics) {
      ids.push(
        phonetics.id,
        ...phonetics.contrastPairs.map((pair) => pair.id),
        ...phonetics.connectedSpeech.map((pair) => pair.id),
        ...phonetics.intonation.map((pair) => pair.id)
      );
    }
    ids.push(...unit.l1Transfers.map((transfer) => transfer.id));
    ids.push(...unit.academicFocus.map((term) => term.id));
  }
  for (const reading of LEARN_ENGLISH_READINGS) {
    ids.push(reading.id);
    ids.push(...reading.words.map((word) => word.id));
    ids.push(...reading.questions.map((question) => question.id));
  }
  return ids;
}

describe('بيانات Learn-English المولّدة', () => {
  it('الأعداد الرسمية تطابق تقرير الاستخراج', () => {
    expect(LEARN_ENGLISH_COUNTS).toEqual({
      units: 23,
      grammar: 41,
      vocabulary: 366,
      uniqueVocabulary: 355,
      sentences: 246,
      dialogue: 108,
      readings: 16,
      readingQuestions: 75,
      readingWords: 1679,
    });
  });

  it('توزيع الوحدات على المراحل S0–B1 صحيح، ولا وحدة مؤجلة', () => {
    const expected: Array<[Parameters<typeof learnEnglishUnitsForStage>[0], number]> = [
      ['S0', 5],
      ['A1', 6],
      ['A2', 6],
      ['B1', 6],
    ];
    for (const [stage, count] of expected) {
      expect(learnEnglishUnitsForStage(stage), stage).toHaveLength(count);
    }
    for (const unit of LEARN_ENGLISH_UNITS) {
      expect(unit.deferred, unit.id).toBe(false);
      expect(unit.foundation, unit.id).toBe(unit.stage === 'S0');
    }
  });

  it('كل المعرّفات فريدة — لا تصادم بين الوحدات والقواعد والمفردات والقراءات', () => {
    const ids = collectIds();
    expect(ids.length).toBeGreaterThan(1000);
    expect(new Set(ids).size, 'عدد المعرّفات المكررة').toBe(ids.length);
  });

  it('كل وحدة تحمل عنواناً وهدفاً وقاعدة ومفردات، والقراءات كلها في النطاق', () => {
    for (const unit of LEARN_ENGLISH_UNITS) {
      expect(unit.titleAr.trim(), unit.id).not.toBe('');
      expect(unit.goalAr.trim(), unit.id).not.toBe('');
      expect(unit.grammar.length, unit.id).toBeGreaterThan(0);
      expect(unit.vocabulary.length, unit.id).toBeGreaterThan(0);
    }
    for (const reading of LEARN_ENGLISH_READINGS) {
      expect(['S0', 'A1', 'A2', 'B1'], reading.id).toContain(reading.stage);
      expect(reading.questions.length, reading.id).toBeGreaterThan(0);
      for (const question of reading.questions) {
        expect(question.options.length, question.id).toBe(4);
        expect(question.answer, question.id).toBeGreaterThanOrEqual(0);
        expect(question.answer, question.id).toBeLessThan(question.options.length);
      }
    }
  });

  it('بصمة المصدر موثقة ومطابقة للنسخة المستخرجة', () => {
    expect(LEARN_ENGLISH_SOURCE.name).toBe('Learn-English');
    expect(LEARN_ENGLISH_SOURCE.commit).toBe('57b91e73cd679fc3b639f198fb4887f49ac942d0');
    expect(LEARN_ENGLISH_SOURCE.fingerprint).toBe(
      'ba1fb4702bb8bce9ceefabf540f1ff727c9407dc15b5c6a8dfb0ea3c7ec1fdef'
    );
    expect(LEARN_ENGLISH_SOURCE.dirty).toBe(false);
  });
});

describe('أوراق المراجعة البشرية', () => {
  const grammar = readFileSync(join(reviewDir, '01-grammar-review.md'), 'utf8');
  const readings = readFileSync(join(reviewDir, '02-readings-review.md'), 'utf8');
  const vocabulary = readFileSync(join(reviewDir, '03-vocabulary-sample.md'), 'utf8');
  const readme = readFileSync(join(reviewDir, 'README.md'), 'utf8');
  const reviewManifest = JSON.parse(readFileSync(join(reviewDir, 'manifest.json'), 'utf8')) as {
    sample: { size: number; totalUnique: number; ratio: number; unitsCovered: number; ids: string[] };
    counts: typeof LEARN_ENGLISH_COUNTS;
  };

  it('ورقة القواعد تغطي 100% من قواعد S0–B1', () => {
    expect((grammar.match(/^### G\d{2}/gm) ?? []).length).toBe(LEARN_ENGLISH_COUNTS.grammar);
    expect(grammar).toContain('قرار المراجع');
  });

  it('ورقة القراءات تغطي 100% من النصوص وأسئلتها', () => {
    expect((readings.match(/^## R\d{2}/gm) ?? []).length).toBe(LEARN_ENGLISH_COUNTS.readings);
    expect(readings).toContain('قرار المراجع على النص وأسئلته');
  });

  it('عيّنة المفردات 20% بالضبط وتغطي كل الوحدات', () => {
    expect((vocabulary.match(/^### V\d{2}/gm) ?? []).length).toBe(71);
    expect(reviewManifest.sample.size).toBe(71);
    expect(reviewManifest.sample.totalUnique).toBe(355);
    expect(reviewManifest.sample.ratio).toBeCloseTo(0.2, 5);
    expect(reviewManifest.sample.unitsCovered).toBe(LEARN_ENGLISH_COUNTS.units);
    expect(reviewManifest.counts).toEqual(LEARN_ENGLISH_COUNTS);
  });

  it('معرّفات العيّنة فريدة وموجودة فعلاً في البيانات المولّدة', () => {
    const allVocabularyIds = new Set(
      LEARN_ENGLISH_UNITS.flatMap((unit) => unit.vocabulary.map((vocabularyItem) => vocabularyItem.id))
    );
    const sampleIds = reviewManifest.sample.ids;
    expect(new Set(sampleIds).size).toBe(sampleIds.length);
    for (const id of sampleIds) expect(allVocabularyIds.has(id), id).toBe(true);
  });

  it('README يوثق جدول التوقيع واعتماد المالك الكتابي', () => {
    expect(readme).toContain('جدول التوقيع');
    expect(readme).toContain('اعتماد كتابي');
    expect(readme).toContain('☑ معتمد');
    expect(readme).not.toContain('بانتظار مراجعة المالك');
  });
});

describe('بوابة الدمج', () => {
  it('الدمج مفتوح بعد اعتماد المالك الكتابي في 2026-11-08', () => {
    expect(LEARN_ENGLISH_MERGE_ALLOWED).toBe(true);
    expect(LEARN_ENGLISH_REVIEW_STATUS).toBe('owner-approved-2026-11-08');
  });

  it('كل الدروس المستهدفة (m0–m3) تحمل مرجع إثراء، والدروس الـ42 كلها باقية', () => {
    const all = allLessonsInOrder();
    expect(all).toHaveLength(42);
    const merged = all.filter(({ lesson }) => lesson.learnEnglish);
    expect(merged).toHaveLength(24);
    expect(merged.map(({ lesson }) => lesson.id).sort()).toEqual(
      Object.keys(LEARN_ENGLISH_LESSON_MAP).sort()
    );
    for (const { unit } of all) {
      expect(UNITS).toContain(unit);
    }
  });

  it('المحطات 5–7 (B2–C2) لم تُمسّ: 18 درساً بلا إثراء Learn-English', () => {
    const untouched = allLessonsInOrder().filter(({ unit }) => unit.order >= 5);
    expect(untouched).toHaveLength(18);
    expect(untouched.every(({ lesson }) => !lesson.learnEnglish)).toBe(true);
  });

  it('كل وحدات S0–B1 الـ23 مدمجة مرة على الأقل، ولا معرّف مفقود', () => {
    const mapped = allMergedLearnEnglishUnitIds();
    expect(mapped).toHaveLength(LEARN_ENGLISH_COUNTS.units);
    expect(new Set(mapped).size).toBe(LEARN_ENGLISH_COUNTS.units);
    const existing = new Set(LEARN_ENGLISH_UNITS.map((unit) => unit.id));
    for (const id of mapped) expect(existing.has(id), id).toBe(true);
  });

  it('وسم التأسيسي S0 يظهر في كل درس يحمل وحدة S0', () => {
    for (const { lesson } of allLessonsInOrder()) {
      if (!lesson.learnEnglish) continue;
      const units = learnEnglishUnitsForLesson(lesson.id);
      const hasS0 = units.some((unit) => unit.stage === 'S0');
      expect(lesson.learnEnglish.foundation, lesson.id).toBe(hasS0);
      expect(lesson.learnEnglish.unitIds.length, lesson.id).toBeGreaterThan(0);
    }
  });

  it('الإثراء تكثيف لا إلغاء: الكتل والأمثلة والتدريب الأصلية باقية ومزيد عليها', () => {
    for (const { lesson } of allLessonsInOrder()) {
      expect(lesson.blocks.length, lesson.id).toBeGreaterThanOrEqual(1);
      expect(lesson.examples.length, lesson.id).toBeGreaterThanOrEqual(3);
      expect(lesson.practice.length, lesson.id).toBeGreaterThanOrEqual(5);
    }
    const enriched = allLessonsInOrder().filter(({ lesson }) => lesson.learnEnglish);
    for (const { lesson } of enriched) {
      expect(lesson.blocks.length, lesson.id).toBeGreaterThan(1);
      expect(lesson.examples.length, lesson.id).toBeGreaterThan(3);
    }
  });

  it('معرّفات تدريب المفردات المدمج فريدة وخياراتها سليمة', () => {
    const ids = new Set<string>();
    for (const { lesson } of allLessonsInOrder()) {
      for (const item of lesson.practice) {
        expect(ids.has(item.id), `معرّف تدريب مكرر: ${item.id}`).toBe(false);
        ids.add(item.id);
        expect(new Set(item.options).size, `${lesson.id}/${item.id}`).toBe(4);
        expect(item.answer, item.id).toBeGreaterThanOrEqual(0);
        expect(item.answer, item.id).toBeLessThan(4);
        expect(item.explanation.trim().length, item.id).toBeGreaterThan(10);
      }
    }
  });
});
