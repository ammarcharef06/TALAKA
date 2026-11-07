/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك تقييم المقابلة (Deterministic — بلا أي استدعاء سحابي)
   يقيم إجابتك ضد الكلمات المفتاحية للسؤال، ويحسّن نطقك نصياً،
   ويمنحك verdict صريحاً: strong / partial / weak.
   ═══════════════════════════════════════════════════════════════ */
import { normalizeUtterance } from './voice';
import type { InterviewQuestion } from '../data/career/scenarios';

export type InterviewVerdict = 'strong' | 'partial' | 'weak';

export interface InterviewEvaluation {
  hits: string[];
  missed: string[];
  /** النتيجة 0..100 */
  score: number;
  verdict: InterviewVerdict;
  wordCount: number;
}

/** تطبيع عربي: إزالة التشكيل وتوحيد الهمزات وإزالة الـ */
function normalizeArabic(text: string): string {
  return text
    .replace(/[\u064B-\u0652\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s*ال\s*/g, ' ');
}

function normalizeToken(text: string): string {
  return normalizeArabic(normalizeUtterance(text)).trim().toLowerCase();
}

/** فحص إن كانت الكلمة/العبارة موجودة في النص المطبّع */
function keywordInText(keyword: string, normText: string): boolean {
  const kw = normalizeToken(keyword);
  if (!kw) return false;

  // عبارة من كلمتين فأكثر: تطابق حرفي كامل
  if (kw.includes(' ')) return normText.includes(kw);

  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // كلمة مفردة: مطابقة من بداية الكلمة مع تحمل اللواحق (close ← closed ← closing)
  if (kw.length >= 4) return new RegExp(`(^|\\s)${escaped}`).test(normText);
  return new RegExp(`(^|\\s)${escaped}(\\s|$)`).test(normText);
}

/** التقييم الكامل لسؤال واحد */
export function evaluateAnswer(question: InterviewQuestion, rawAnswer: string): InterviewEvaluation {
  const norm = normalizeToken(normalizeUtterance(rawAnswer).replace(/\s+/g, ' ').trim());
  const answerTokens = norm ? norm.split(' ') : [];
  const wordCount = answerTokens.length;

  const hits: string[] = [];
  const missed: string[] = [];
  for (const kw of question.keywords) {
    if (keywordInText(kw, norm)) hits.push(kw);
    else missed.push(kw);
  }

  const ratio = question.keywords.length > 0 ? hits.length / question.keywords.length : 0;
  let score = Math.round(ratio * 100);

  // إجابة قصيرة جداً لا تحتسب كفئة ممتازة — وإن كانت الكلمات صحيحة
  if (wordCount < 12) score = Math.min(score, 40);
  // إجابة طويلة فعلاً بلا كلمات مفتاحية تُركَم — لا ترفعها الجمل الفارغة
  if (hits.length === 0) score = Math.min(score, 25);

  const verdict: InterviewVerdict = score >= 70 ? 'strong' : score >= 40 ? 'partial' : 'weak';

  return { hits, missed, score, verdict, wordCount };
}

export interface InterviewQuestionEntry {
  questionId: string;
  order: number;
  question: string;
  answer: string;
  score: number;
  verdict: InterviewVerdict;
  wordCount: number;
}

export interface InterviewResult {
  id: string;
  studentId: string;
  scenarioId: string;
  takenAt: string;
  durationSeconds: number;
  /** النتيجة الكلية 0..100 — متوسط درجات الأسئلة */
  score: number;
  perQuestion: InterviewQuestionEntry[];
  passed: boolean;
}

/** يبني محضر المقابلة النهائي */
export function buildInterviewResult(
  studentId: string,
  scenarioId: string,
  scenario: { passScore: number },
  entries: InterviewQuestionEntry[],
  durationSeconds: number,
  takenAt = new Date().toISOString()
): InterviewResult {
  const total = entries.reduce((sum, e) => sum + e.score, 0);
  const score = entries.length > 0 ? Math.round(total / entries.length) : 0;
  return {
    id: `interview-${scenarioId}-${Date.now().toString(36)}`,
    studentId,
    scenarioId,
    takenAt,
    durationSeconds,
    score,
    perQuestion: entries,
    passed: score >= scenario.passScore,
  };
}
