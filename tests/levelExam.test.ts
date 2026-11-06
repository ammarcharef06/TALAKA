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
  const progressAll = (ids: string[]) => Object.fromEntries(ids.map((id) => [id, { bestScore: 100 }]));

  it('دروس الامتحان: A1 اثنا عشر درساً، وA2 ستة', () => {
    expect(a1Lessons).toHaveLength(12);
    expect(a2Lessons).toHaveLength(6);
    expect(a2Lessons[0]).toBe('l13-past-ed');
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

  it('بعد الاجتياز: الحالة معتمدة وأفضل درجة محفوظة', () => {
    const results = [fakeResult('A1', false, 70), fakeResult('A1', true, 85, '2026-11-06T11:00:00.000Z')];
    const a = examAvailability('A1', progressAll(a1Lessons), results);
    expect(a.status).toBe('passed');
    expect(a.bestScore).toBe(85);
    expect(highestCertifiedLevel(results)).toBe('A1');
  });
});

describe('إعدادات المستويات', () => {
  it('كل مستوى: مدة ودرجة نجاح وعدد أسئلة متسقة', () => {
    expect(examQuestionCount('A1')).toBe(12);
    expect(examQuestionCount('A2')).toBe(15);
    expect(LEVEL_EXAM_CONFIG.A1.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.A2.passMark).toBe(80);
    expect(LEVEL_EXAM_CONFIG.A2.prerequisite).toBe('A1');
  });
});
