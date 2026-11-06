/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك امتحانات المستويات المعتمدة
   امتحان ثابت الطول (لا تكيفي): يسحب من بنك المعايرة حسب المستوى،
   يخلط الأسئلة والخيارات، ولا يكشف التصحيح قبل التسليم.
   ═══════════════════════════════════════════════════════════════ */
import { ITEM_BANK } from '../data/items';
import { UNITS } from '../data/academy/course';
import type {
  ExamLevel,
  ExamSectionScore,
  LevelExamQuestion,
  LevelExamResult,
  SectionId,
} from '../types';

export interface LevelExamConfig {
  level: ExamLevel;
  passMark: number; // نسبة مئوية
  timeLimitSec: number;
  blueprint: Record<SectionId, number>;
  requiredUnits: number[];
  prerequisite: ExamLevel | null;
}

export const LEVEL_EXAM_CONFIG: Record<ExamLevel, LevelExamConfig> = {
  A1: {
    level: 'A1',
    passMark: 80,
    timeLimitSec: 15 * 60,
    blueprint: { rules: 5, vocab: 4, reading: 3 },
    requiredUnits: [1, 2],
    prerequisite: null,
  },
  A2: {
    level: 'A2',
    passMark: 80,
    timeLimitSec: 20 * 60,
    blueprint: { rules: 6, vocab: 5, reading: 4 },
    requiredUnits: [3],
    prerequisite: 'A1',
  },
  B1: {
    level: 'B1',
    passMark: 80,
    timeLimitSec: 20 * 60,
    blueprint: { rules: 7, vocab: 5, reading: 4 },
    requiredUnits: [4],
    prerequisite: 'A2',
  },
  B2: {
    level: 'B2',
    passMark: 80,
    timeLimitSec: 25 * 60,
    blueprint: { rules: 8, vocab: 5, reading: 4 },
    requiredUnits: [5],
    prerequisite: 'B1',
  },
  C1: {
    level: 'C1',
    passMark: 80,
    timeLimitSec: 25 * 60,
    blueprint: { rules: 7, vocab: 5, reading: 4 },
    requiredUnits: [6],
    prerequisite: 'B2',
  },
  C2: {
    level: 'C2',
    passMark: 80,
    timeLimitSec: 30 * 60,
    blueprint: { rules: 7, vocab: 5, reading: 4 },
    requiredUnits: [7],
    prerequisite: 'C1',
  },
};

export const EXAM_LEVELS: ExamLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const SECTION_ORDER: SectionId[] = ['rules', 'vocab', 'reading'];

export function examQuestionCount(level: ExamLevel): number {
  const b = LEVEL_EXAM_CONFIG[level].blueprint;
  return b.rules + b.vocab + b.reading;
}

/** دروس المنهج التي يجب إتمامها قبل دخول امتحان هذا المستوى */
export function requiredLessonsFor(level: ExamLevel): string[] {
  const units = LEVEL_EXAM_CONFIG[level].requiredUnits;
  return UNITS.filter((u) => units.includes(u.order)).flatMap((u) => u.lessons.map((l) => l.id));
}

function shuffle<T>(items: T[], rng: () => number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** يبني ورقة امتحان: أسئلة مسحوبة عشوائياً وخيارات مخلوطة */
export function createLevelExam(level: ExamLevel, rng: () => number = Math.random): LevelExamQuestion[] {
  const blueprint = LEVEL_EXAM_CONFIG[level].blueprint;
  const questions: LevelExamQuestion[] = [];

  for (const section of SECTION_ORDER) {
    const pool = ITEM_BANK.filter((i) => i.cefr === level && i.section === section);
    const wanted = Math.min(blueprint[section], pool.length);
    const chosen = shuffle(pool, rng).slice(0, wanted);

    for (const item of chosen) {
      const indexed = item.options.map((option, originalIndex) => ({ option, originalIndex }));
      const shuffled = shuffle(indexed, rng);
      questions.push({
        itemId: item.id,
        section: item.section,
        cefr: item.cefr,
        difficulty: item.difficulty,
        tags: item.tags,
        question: item.question,
        ...(item.passage ? { passage: item.passage } : {}),
        options: shuffled.map((o) => o.option),
        answer: shuffled.findIndex((o) => o.originalIndex === item.answer),
        explanation: item.explanation,
      });
    }
  }

  return questions;
}

export interface ScoreOptions {
  studentId: string;
  durationSeconds?: number;
  takenAt?: string;
  id?: string;
}

/** يصحّح الورقة ويبني محضراً كاملاً — الإجابات الفارغة تُحتسب خطأ */
export function scoreLevelExam(
  level: ExamLevel,
  questions: LevelExamQuestion[],
  answers: (number | null)[],
  options: ScoreOptions
): LevelExamResult {
  const takenAt = options.takenAt ?? new Date().toISOString();
  const sectionScores: Record<SectionId, ExamSectionScore> = {
    rules: { correct: 0, total: 0 },
    vocab: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
  };
  const wrongTags = new Map<string, number>();
  let correctCount = 0;

  questions.forEach((q, index) => {
    sectionScores[q.section].total += 1;
    const chosen = answers[index];
    if (chosen !== null && chosen === q.answer) {
      correctCount += 1;
      sectionScores[q.section].correct += 1;
    } else {
      for (const tag of q.tags) wrongTags.set(tag, (wrongTags.get(tag) ?? 0) + 1);
    }
  });

  const totalQuestions = questions.length;
  const score = totalQuestions === 0 ? 0 : Math.round((correctCount / totalQuestions) * 100);
  const passMark = LEVEL_EXAM_CONFIG[level].passMark;
  const weakAreas = [...wrongTags.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  return {
    id: options.id ?? `exam-${level}-${Date.parse(takenAt) || Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    studentId: options.studentId,
    level,
    score,
    correctCount,
    totalQuestions,
    passMark,
    passed: score >= passMark,
    sectionScores,
    weakAreas,
    takenAt,
    durationSeconds: Math.max(0, Math.round(options.durationSeconds ?? 0)),
  };
}

export interface ExamAvailability {
  level: ExamLevel;
  status: 'locked' | 'available' | 'failed' | 'passed';
  reason: string | null;
  lessonsDone: number;
  lessonsTotal: number;
  bestScore: number | null;
  lastResult: LevelExamResult | null;
  passed: boolean;
}

function latestResultFor(level: ExamLevel, results: LevelExamResult[]): LevelExamResult | null {
  const own = results.filter((r) => r.level === level).sort((a, b) => Date.parse(b.takenAt) - Date.parse(a.takenAt));
  return own[0] ?? null;
}

export function examAvailability(
  level: ExamLevel,
  progress: Record<string, unknown>,
  results: LevelExamResult[]
): ExamAvailability {
  const required = requiredLessonsFor(level);
  const missing = required.filter((id) => !progress[id]);
  const lessonsDone = required.length - missing.length;
  const config = LEVEL_EXAM_CONFIG[level];
  const prerequisitePassed =
    config.prerequisite === null || results.some((r) => r.level === config.prerequisite && r.passed);

  const own = results.filter((r) => r.level === level);
  const passed = own.some((r) => r.passed);
  const bestScore = own.length ? Math.max(...own.map((r) => r.score)) : null;
  const lastResult = latestResultFor(level, results);

  let status: ExamAvailability['status'];
  let reason: string | null = null;

  if (passed) {
    status = 'passed';
  } else if (missing.length > 0 || !prerequisitePassed) {
    status = 'locked';
    if (missing.length > 0 && !prerequisitePassed) {
      reason = `أكمل ${missing.length} درساً من منهج ${level} واجتز امتحان ${config.prerequisite} أولاً`;
    } else if (missing.length > 0) {
      reason = `أكمل ${missing.length} درساً من منهج ${level} أولاً — الباب يُفتح بعد إتمام المحطة`;
    } else {
      reason = `اجتز امتحان ${config.prerequisite} المعتمد أولاً`;
    }
  } else if (own.length > 0) {
    status = 'failed';
  } else {
    status = 'available';
  }

  return {
    level,
    status,
    reason,
    lessonsDone,
    lessonsTotal: required.length,
    bestScore,
    lastResult,
    passed,
  };
}

export function passedLevels(results: LevelExamResult[]): ExamLevel[] {
  return EXAM_LEVELS.filter((level) => results.some((r) => r.level === level && r.passed));
}

/** أعلى اعتماد حصل عليه الطالب — يُستخدم في السجل والبطاقة */
export function highestCertifiedLevel(results: LevelExamResult[]): ExamLevel | null {
  const passed = passedLevels(results);
  return passed.length ? passed[passed.length - 1] : null;
}
