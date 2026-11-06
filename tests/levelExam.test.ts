import { describe, expect, it } from 'vitest';
import {
  LEVEL_EXAM_CONFIG,
  createLevelExam,
  examAvailability,
  examQuestionCount,
  highestCertifiedLevel,
  requiredLessonsFor,
  scoreLevelExam,
} from '../src/engine/levelExam';
import { ITEM_BANK } from '../src/data/items';
import type { ExamLevel, LevelExamResult } from '../src/types';

function fakeResult(level: ExamLevel, passed: boolean, score: number, takenAt = '2026-11-06T10:00:00.000Z'): LevelExamResult {
  return {
    id: `fake-${level}-${takenAt}`,
    studentId: 'TALAQA-TEST',
    level,
    score,
    correctCount: Math.round((score / 100) * examQuestionCount(level)),
    totalQuestions: examQuestionCount(level),
    passMark: 80,
    passed,
    sectionScores: { rules: { correct: 0, total: 0 }, vocab: { correct: 0, total: 0 }, reading: { correct: 0, total: 0 } },
    weakAreas: [],
    takenAt,
    durationSeconds: 600,
  };
}

describe('بناء ورقة الامتحان', () => {
  it('A1: 12 سؤالاً بتوزيع 5/4/3، بلا تكرار، وكل إجابة صحيحة تشير إلى نص الخيار الأصلي', () => {
    const questions = createLevelExam('A1', () => 0.42);
    expect(questions).toHaveLength(12);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(4);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(3);
    expect(new Set(questions.map((q) => q.itemId)).size).toBe(12);
    for (const q of questions) {
      const original = ITEM_BANK.find((i) => i.id === q.itemId)!;
      expect(new Set(q.options).size).toBe(4);
      expect(q.options[q.answer]).toBe(original.options[original.answer]);
    }
  });

  it('A2: 15 سؤالاً بتوزيع 6/5/4 وكلها من مستوى A2', () => {
    const questions = createLevelExam('A2', () => 0.17);
    expect(questions).toHaveLength(15);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(6);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(4);
    expect(questions.every((q) => q.cefr === 'A2')).toBe(true);
  });

  it('B1: 16 سؤالاً بتوزيع 7/5/4 وكلها من مستوى B1', () => {
    const questions = createLevelExam('B1', () => 0.23);
    expect(questions).toHaveLength(16);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(7);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(4);
    expect(questions.every((q) => q.cefr === 'B1')).toBe(true);
    expect(new Set(questions.map((q) => q.itemId)).size).toBe(16);
  });

  it('B2: 17 سؤالاً بتوزيع 8/5/4 وكلها من مستوى B2', () => {
    const questions = createLevelExam('B2', () => 0.31);
    expect(questions).toHaveLength(17);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(8);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(4);
    expect(questions.every((q) => q.cefr === 'B2')).toBe(true);
    expect(new Set(questions.map((q) => q.itemId)).size).toBe(17);
  });

  it('C1: 16 سؤالاً بتوزيع 7/5/4 وكلها من مستوى C1', () => {
    const questions = createLevelExam('C1', () => 0.53);
    expect(questions).toHaveLength(16);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(7);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(4);
    expect(questions.every((q) => q.cefr === 'C1')).toBe(true);
    expect(new Set(questions.map((q) => q.itemId)).size).toBe(16);
  });

  it('C2: 16 سؤالاً بتوزيع 7/5/4 وكلها من مستوى C2', () => {
    const questions = createLevelExam('C2', () => 0.83);
    expect(questions).toHaveLength(16);
    expect(questions.filter((q) => q.section === 'rules')).toHaveLength(7);
    expect(questions.filter((q) => q.section === 'vocab')).toHaveLength(5);
    expect(questions.filter((q) => q.section === 'reading')).toHaveLength(4);
    expect(questions.every((q) => q.cefr === 'C2')).toBe(true);
    expect(new Set(questions.map((q) => q.itemId)).size).toBe(16);
  });

  it('الورقة لا تعتمد على ترتيب الخيارات الأصلي', () => {
    const a = createLevelExam('A1', () => 0.9);
    const b = createLevelExam('A1', () => 0.1);
    expect(JSON.stringify(a.map((q) => q.options))).not.toBe(JSON.stringify(b.map((q) => q.options)));
  });
});

describe('تصحيح الامتحان', () => {
  it('كل الإجابات صحيحة ← 100% ونجاح', () => {
    const qs = createLevelExam('A1', () => 0.5);
    const result = scoreLevelExam('A1', qs, qs.map((q) => q.answer), {
      studentId: 'TALAQA-TEST',
      durationSeconds: 500,
      takenAt: '2026-11-06T10:00:00.000Z',
    });
    expect(result.score).toBe(100);
    expect(result.correctCount).toBe(12);
    expect(result.passed).toBe(true);
    expect(result.sectionScores.rules).toEqual({ correct: 5, total: 5 });
    expect(result.durationSeconds).toBe(500);
  });

  it('حد النجاح: 10/12 تنجح، و9/12 لا تنجح، والإجابات الفارغة تُحتسب خطأ', () => {
    const qs = createLevelExam('A1', () => 0.5);
    const ten = qs.map((q, i) => (i < 10 ? q.answer : (q.answer + 1) % 4));
    expect(scoreLevelExam('A1', qs, ten, { studentId: 'T' }).passed).toBe(true);

    const nine = qs.map((q, i) => (i < 9 ? q.answer : null));
    const failed = scoreLevelExam('A1', qs, nine, { studentId: 'T' });
    expect(failed.correctCount).toBe(9);
    expect(failed.score).toBe(75);
    expect(failed.passed).toBe(false);
  });

  it('A2: 12/15 تعادل 80% وتنجح', () => {
    const qs = createLevelExam('A2', () => 0.3);
    const twelve = qs.map((q, i) => (i < 12 ? q.answer : (q.answer + 1) % 4));
    const result = scoreLevelExam('A2', qs, twelve, { studentId: 'T' });
    expect(result.score).toBe(80);
    expect(result.passed).toBe(true);
  });

  it('B1: 13/16 تنجح، و12/16 لا تنجح', () => {
    const qs = createLevelExam('B1', () => 0.4);
    const thirteen = qs.map((q, i) => (i < 13 ? q.answer : (q.answer + 1) % 4));
    const pass = scoreLevelExam('B1', qs, thirteen, { studentId: 'T' });
    expect(pass.score).toBe(81);
    expect(pass.passed).toBe(true);

    const twelve = qs.map((q, i) => (i < 12 ? q.answer : (q.answer + 1) % 4));
    const fail = scoreLevelExam('B1', qs, twelve, { studentId: 'T' });
    expect(fail.score).toBe(75);
    expect(fail.passed).toBe(false);
  });

  it('B2: 14/17 تنجح، و13/17 لا تنجح', () => {
    const qs = createLevelExam('B2', () => 0.6);
    const fourteen = qs.map((q, i) => (i < 14 ? q.answer : (q.answer + 1) % 4));
    const pass = scoreLevelExam('B2', qs, fourteen, { studentId: 'T' });
    expect(pass.score).toBe(82);
    expect(pass.passed).toBe(true);

    const thirteen = qs.map((q, i) => (i < 13 ? q.answer : (q.answer + 1) % 4));
    const fail = scoreLevelExam('B2', qs, thirteen, { studentId: 'T' });
    expect(fail.score).toBe(76);
    expect(fail.passed).toBe(false);
  });

  it('C1: 13/16 تنجح، و12/16 لا تنجح', () => {
    const qs = createLevelExam('C1', () => 0.7);
    const thirteen = qs.map((q, i) => (i < 13 ? q.answer : (q.answer + 1) % 4));
    const pass = scoreLevelExam('C1', qs, thirteen, { studentId: 'T' });
    expect(pass.score).toBe(81);
    expect(pass.passed).toBe(true);

    const twelve = qs.map((q, i) => (i < 12 ? q.answer : (q.answer + 1) % 4));
    const fail = scoreLevelExam('C1', qs, twelve, { studentId: 'T' });
    expect(fail.score).toBe(75);
    expect(fail.passed).toBe(false);
  });

  it('C2: 13/16 تنجح، و12/16 لا تنجح', () => {
    const qs = createLevelExam('C2', () => 0.9);
    const thirteen = qs.map((q, i) => (i < 13 ? q.answer : (q.answer + 1) % 4));
    const pass = scoreLevelExam('C2', qs, thirteen, { studentId: 'T' });
    expect(pass.score).toBe(81);
    expect(pass.passed).toBe(true);

    const twelve = qs.map((q, i) => (i < 12 ? q.answer : (q.answer + 1) % 4));
    const fail = scoreLevelExam('C2', qs, twelve, { studentId: 'T' });
    expect(fail.score).toBe(75);
    expect(fail.passed).toBe(false);
  });

  it('أولويات العلاج تُجمع من وسوم الأخطاء', () => {
    const qs = createLevelExam('A1', () => 0.5);
    const result = scoreLevelExam('A1', qs, qs.map(() => null), { studentId: 'T' });
    expect(result.weakAreas.length).toBeGreaterThan(0);
    expect(result.weakAreas.every((w) => w.count > 0)).toBe(true);
  });
});

describe('أهلية الامتحان', () => {
  const a1Lessons = requiredLessonsFor('A1');
  const a2Lessons = requiredLessonsFor('A2');
  const b1Lessons = requiredLessonsFor('B1');
  const b2Lessons = requiredLessonsFor('B2');
  const c1Lessons = requiredLessonsFor('C1');
  const c2Lessons = requiredLessonsFor('C2');
  const progressAll = (ids: string[]) => Object.fromEntries(ids.map((id) => [id, { bestScore: 100 }]));

  it('دروس الامتحان: A1 اثنا عشر درساً، والباقي ستة لكل مستوى', () => {
    expect(a1Lessons).toHaveLength(12);
    expect(a2Lessons).toHaveLength(6);
    expect(b1Lessons).toHaveLength(6);
    expect(b2Lessons).toHaveLength(6);
    expect(c1Lessons).toHaveLength(6);
    expect(c2Lessons).toHaveLength(6);
    expect(a2Lessons[0]).toBe('l13-past-ed');
    expect(b1Lessons[0]).toBe('l19-perfect');
    expect(b2Lessons[0]).toBe('l25-third-wish');
    expect(c1Lessons[0]).toBe('l31-inversion');
    expect(c2Lessons[0]).toBe('l37-inversion-c2');
  });

  it('A1 مغلق قبل إتمام المحطتين، ومتاح بعدهما', () => {
    const locked = examAvailability('A1', {}, []);
    expect(locked.status).toBe('locked');
    expect(locked.lessonsDone).toBe(0);

    const available = examAvailability('A1', progressAll(a1Lessons), []);
    expect(available.status).toBe('available');
    expect(available.lessonsDone).toBe(12);
  });

  it('A2 لا يُفتح إلا بإتمام المحطة الثالثة واجتياز A1', () => {
    const onlyLessons = examAvailability('A2', progressAll(a2Lessons), []);
    expect(onlyLessons.status).toBe('locked');
    expect(onlyLessons.reason).toContain('A1');

    const a1Passed = [fakeResult('A1', true, 90)];
    const onlyA1 = examAvailability('A2', {}, a1Passed);
    expect(onlyA1.status).toBe('locked');

    const ready = examAvailability('A2', progressAll(a2Lessons), a1Passed);
    expect(ready.status).toBe('available');
  });

  it('B1 لا يُفتح إلا بإتمام المحطة الرابعة واجتياز A2', () => {
    const a1a2 = [fakeResult('A1', true, 90), fakeResult('A2', true, 90, '2026-11-06T11:00:00.000Z')];
    const onlyLessons = examAvailability('B1', progressAll(b1Lessons), [fakeResult('A1', true, 90)]);
    expect(onlyLessons.status).toBe('locked');
    expect(onlyLessons.reason).toContain('A2');

    const ready = examAvailability('B1', progressAll(b1Lessons), a1a2);
    expect(ready.status).toBe('available');
    expect(ready.lessonsTotal).toBe(6);
  });

  it('B2 لا يُفتح إلا بإتمام المحطة الخامسة واجتياز B1', () => {
    const upToB1 = [
      fakeResult('A1', true, 90),
      fakeResult('A2', true, 90, '2026-11-06T11:00:00.000Z'),
      fakeResult('B1', true, 90, '2026-11-07T11:00:00.000Z'),
    ];
    const onlyLessons = examAvailability('B2', progressAll(b2Lessons), upToB1.slice(0, 2));
    expect(onlyLessons.status).toBe('locked');
    expect(onlyLessons.reason).toContain('B1');

    const ready = examAvailability('B2', progressAll(b2Lessons), upToB1);
    expect(ready.status).toBe('available');
    expect(ready.lessonsTotal).toBe(6);
  });

  it('C1 لا يُفتح إلا بإتمام المحطة السادسة واجتياز B2', () => {
    const upToB2 = [
      fakeResult('A1', true, 90),
      fakeResult('A2', true, 90, '2026-11-06T11:00:00.000Z'),
      fakeResult('B1', true, 90, '2026-11-07T11:00:00.000Z'),
      fakeResult('B2', true, 90, '2026-11-08T11:00:00.000Z'),
    ];
    const onlyLessons = examAvailability('C1', progressAll(c1Lessons), upToB2.slice(0, 3));
    expect(onlyLessons.status).toBe('locked');
    expect(onlyLessons.reason).toContain('B2');

    const ready = examAvailability('C1', progressAll(c1Lessons), upToB2);
    expect(ready.status).toBe('available');
    expect(ready.lessonsTotal).toBe(6);
  });

  it('C2 لا يُفتح إلا بإتمام المحطة السابعة واجتياز C1', () => {
    const upToC1 = [
      fakeResult('A1', true, 90),
      fakeResult('A2', true, 90, '2026-11-06T11:00:00.000Z'),
      fakeResult('B1', true, 90, '2026-11-07T11:00:00.000Z'),
      fakeResult('B2', true, 90, '2026-11-08T11:00:00.000Z'),
      fakeResult('C1', true, 90, '2026-11-09T11:00:00.000Z'),
    ];
    const onlyLessons = examAvailability('C2', progressAll(c2Lessons), upToC1.slice(0, 4));
    expect(onlyLessons.status).toBe('locked');
    expect(onlyLessons.reason).toContain('C1');

    const ready = examAvailability('C2', progressAll(c2Lessons), upToC1);
    expect(ready.status).toBe('available');
    expect(ready.lessonsTotal).toBe(6);
  });

  it('بعد الاجتياز: الحالة معتمدة وأفضل درجة محفوظة', () => {
    const results = [fakeResult('A1', false, 70), fakeResult('A1', true, 85, '2026-11-06T11:00:00.000Z')];
    const a = examAvailability('A1', progressAll(a1Lessons), results);
    expect(a.status).toBe('passed');
    expect(a.bestScore).toBe(85);
    expect(highestCertifiedLevel(results)).toBe('A1');

    const all = [fakeResult('A1', true, 90), fakeResult('A2', true, 85, '2026-11-07T10:00:00.000Z'), fakeResult('B1', true, 88, '2026-11-08T10:00:00.000Z'), fakeResult('B2', true, 84, '2026-11-09T10:00:00.000Z'), fakeResult('C1', true, 86, '2026-11-10T10:00:00.000Z'), fakeResult('C2', true, 87, '2026-11-11T10:00:00.000Z')];
    expect(highestCertifiedLevel(all)).toBe('C2');
  });
});

describe('إعدادات المستويات', () => {
  it('كل مستوى: مدة ودرجة نجاح وعدد أسئلة متسقة', () => {
    expect(examQuestionCount('A1')).toBe(12);
    expect(examQuestionCount('A2')).toBe(15);
    expect(examQuestionCount('B1')).toBe(16);
    expect(examQuestionCount('B2')).toBe(17);
    expect(examQuestionCount('C1')).toBe(16);
    expect(examQuestionCount('C2')).toBe(16);
    expect(LEVEL_EXAM_CONFIG.A1.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.A2.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.B1.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.B2.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.C1.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.C2.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.A2.prerequisite).toBe('A1');
    expect(LEVEL_EXAM_CONFIG.B1.prerequisite).toBe('A2');
    expect(LEVEL_EXAM_CONFIG.B2.prerequisite).toBe('B1');
    expect(LEVEL_EXAM_CONFIG.C1.prerequisite).toBe('B2');
    expect(LEVEL_EXAM_CONFIG.C2.prerequisite).toBe('C1');
  });
});
