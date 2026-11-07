/* طَلَاقَة — اختبارات سلامة المسار المهني: المحتوى + محرك التقييم الحتمي */
import { describe, expect, it } from 'vitest';
import {
  CAREER_DECK,
  INTERVIEW_SCENARIOS,
  SCENARIO_IDS,
  scenarioById,
} from '../src/data/career/scenarios';
import { buildInterviewResult, evaluateAnswer, type InterviewQuestionEntry } from '../src/engine/interview';
import { SRS_DECK } from '../src/data/academy/deck';

function expectArabic(text: string, label: string): void {
  expect(text.trim().length, label).toBeGreaterThan(2);
  expect(text, label).toMatch(/[\u0600-\u06FF]/);
}

describe('المسار المهني — سلامة المحتوى', () => {
  it('أربعة سيناريوهات، معرفات فريدة، وترتيب متسلسل', () => {
    expect(INTERVIEW_SCENARIOS).toHaveLength(4);
    expect(new Set(SCENARIO_IDS).size).toBe(4);
    INTERVIEW_SCENARIOS.forEach((s, i) => {
      expect(s.order).toBe(i + 1);
      expect(s.title.trim().length).toBeGreaterThan(10);
      expectArabic(s.titleAr, `${s.id} titleAr`);
      expectArabic(s.roleAr, `${s.id} roleAr`);
      expectArabic(s.desc, `${s.id} desc`);
      expect(s.estMinutes).toBeGreaterThan(5);
      expect(s.passScore).toBeGreaterThanOrEqual(50);
      expect(s.passScore).toBeLessThanOrEqual(100);
      expect(s.questions).toHaveLength(8);
    });
  });

  it('كل سؤال: معرف فريد، ترتيب، إنجليزية سليمة، شرح عربي، ونموذج إجابة', () => {
    const ids = new Set<string>();
    for (const scenario of INTERVIEW_SCENARIOS) {
      scenario.questions.forEach((q, i) => {
        expect(ids.has(q.id), `معرف سؤال مكرر: ${q.id}`).toBe(false);
        ids.add(q.id);
        expect(q.order).toBe(i + 1);
        expect(q.question, q.id).toMatch(/[A-Za-z]/);
        expect(q.question.trim().length, q.id).toBeGreaterThan(8);
        expect(q.modelAnswer, q.id).toMatch(/[A-Za-z]/);
        expect(q.modelAnswer.trim().length, q.id).toBeGreaterThan(40);
        expectArabic(q.intentAr, `${q.id} intentAr`);
        expectArabic(q.modelAnswerAr, `${q.id} modelAnswerAr`);
        expect(q.tipsAr.length, q.id).toBeGreaterThanOrEqual(2);
        for (const tip of q.tipsAr) expectArabic(tip, `${q.id} tip`);
      });
    }
    expect(ids.size).toBe(32);
  });

  it('الكلمات المفتاحية: 4 على الأقل، فريدة، غير فارغة، ونموذج الإجابة يحقق النجاح', () => {
    for (const scenario of INTERVIEW_SCENARIOS) {
      for (const q of scenario.questions) {
        expect(q.keywords.length, q.id).toBeGreaterThanOrEqual(4);
        const norm = q.keywords.map((k) => k.trim().toLowerCase());
        expect(new Set(norm).size, `${q.id}: كلمات مفتاحية مكررة`).toBe(norm.length);
        expect(norm.every((k) => k.length > 0), q.id).toBe(true);
        // نموذج الإجابة هو مرجع السؤال — يجب أن يُقيَّم «قوياً» لا «جزئياً»
        const evaluation = evaluateAnswer(q, q.modelAnswer);
        expect(evaluation.verdict, `${q.id}: نموذج الإجابة لا يحقق strong`).toBe('strong');
        expect(evaluation.score, q.id).toBeGreaterThanOrEqual(70);
      }
    }
  });

  it('كل سؤال يحمل ألفاظاً مهنية بمعنى عربي ومثال إنجليزي', () => {
    for (const scenario of INTERVIEW_SCENARIOS) {
      for (const q of scenario.questions) {
        expect(q.terms.length, q.id).toBeGreaterThanOrEqual(2);
        const terms = q.terms.map((t) => t.term.trim().toLowerCase());
        expect(new Set(terms).size, `${q.id}: ألفاظ مكررة`).toBe(terms.length);
        for (const t of q.terms) {
          expect(t.term.trim().length, `${q.id} term`).toBeGreaterThan(1);
          expectArabic(t.meaning, `${q.id} / ${t.term} meaning`);
          expect(t.example, `${q.id} / ${t.term} example`).toMatch(/[A-Za-z]/);
          expect(t.example.trim().length, `${q.id} / ${t.term} example`).toBeGreaterThan(10);
        }
      }
    }
  });

  it('رزمة SRS المهنية: بطاقة لكل لفظ، معرفات فريدة، ومربوطة بسيناريوها', () => {
    const expected = INTERVIEW_SCENARIOS.reduce(
      (sum, s) => sum + s.questions.reduce((n, q) => n + q.terms.length, 0),
      0
    );
    expect(CAREER_DECK).toHaveLength(expected);
    const ids = CAREER_DECK.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    const allIds = new Set([...SRS_DECK.map((c) => c.id), ...ids]);
    expect(allIds.size, 'تعارض معرفات بين بطاقات المنهاج والمسار المهني').toBe(SRS_DECK.length + CAREER_DECK.length);
    for (const card of CAREER_DECK) {
      expect(card.lessonId).toMatch(/^career-(dev|sales|support|admin)$/);
      expect(card.front.trim().length, card.id).toBeGreaterThan(5);
      expect(card.back.trim().length, card.id).toBeGreaterThan(1);
      expect(card.example?.trim().length ?? 0, card.id).toBeGreaterThan(10);
    }
  });

  it('scenarioById: يعيد الصحيح ويرفض المجهول', () => {
    expect(scenarioById('dev')?.title).toContain('Developer');
    expect(scenarioById('sales')?.id).toBe('sales');
    expect(scenarioById('nope')).toBeUndefined();
  });
});

describe('محرك تقييم المقابلة — حتمي وعادل', () => {
  const q1 = INTERVIEW_SCENARIOS[0].questions[0];

  it('نموذج الإجابة قوي، والفراغ ضعيف بصفر', () => {
    expect(evaluateAnswer(q1, q1.modelAnswer).verdict).toBe('strong');
    const empty = evaluateAnswer(q1, '   ');
    expect(empty.score).toBe(0);
    expect(empty.verdict).toBe('weak');
    expect(empty.wordCount).toBe(0);
  });

  it('الإجابة القصيرة لا تُمنح درجة قوية ولو أصابت الكلمات', () => {
    const short = evaluateAnswer(q1, 'experience developer build');
    expect(short.score).toBeLessThanOrEqual(40);
    expect(short.verdict).not.toBe('strong');
  });

  it('الكلام الطويل بلا كلمات مفتاحية لا يُكافأ', () => {
    const filler = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore';
    const result = evaluateAnswer(q1, filler);
    expect(result.hits).toHaveLength(0);
    expect(result.score).toBeLessThanOrEqual(25);
    expect(result.verdict).toBe('weak');
  });

  it('مطابقة الكلمة من بدايتها فقط — «already» لا تُحسب «read»', () => {
    const q = INTERVIEW_SCENARIOS[0].questions[3];
    const result = evaluateAnswer(q, 'I have already done it and I am very experienced with many things in this field today');
    expect(result.hits).not.toContain('read');
  });

  it('تطبيع الشرطة: front-end تُطابق front end', () => {
    const result = evaluateAnswer(q1, 'I am a front end developer with experience, applications, build and learn');
    expect(result.hits).toContain('front-end');
  });

  it('buildInterviewResult: متوسط الدرجات والنجاح عند الحد', () => {
    const entries: InterviewQuestionEntry[] = [80, 60, 70].map((score, i) => ({
      questionId: `q${i + 1}`,
      order: i + 1,
      question: 'Question?',
      answer: 'Answer.',
      score,
      verdict: score >= 70 ? 'strong' : score >= 40 ? 'partial' : 'weak',
      wordCount: 20,
    }));
    const result = buildInterviewResult('TALAQA-2026-0001-a', 'dev', { passScore: 60 }, entries, 125, '2026-11-06T10:00:00.000Z');
    expect(result.score).toBe(70);
    expect(result.passed).toBe(true);
    expect(result.durationSeconds).toBe(125);
    expect(result.perQuestion).toHaveLength(3);
    expect(result.id.startsWith('interview-dev-')).toBe(true);

    const failed = buildInterviewResult('TALAQA-2026-0001-a', 'dev', { passScore: 80 }, entries, 125);
    expect(failed.passed).toBe(false);
  });

  it('buildInterviewResult: لا أسئلة = صفر ورسوب', () => {
    const result = buildInterviewResult('TALAQA-2026-0001-a', 'dev', { passScore: 60 }, [], 0);
    expect(result.score).toBe(0);
    expect(result.passed).toBe(false);
  });
});
