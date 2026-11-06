export type SectionId = 'rules' | 'vocab' | 'reading';
export type Cefr = 'S0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Item {
  id: string;
  section: SectionId;
  cefr: Cefr;
  difficulty: number; // 0..100 — معايرة مشتركة عبر الأقسام الثلاثة
  tags: string[]; // أخطاء العرب المستهدفة (articles، false-friends…)
  question: string;
  passage?: string;
  options: [string, string, string, string];
  answer: number; // 0..3
  explanation: string; // بالعربية الفصحى
}

export type Confidence = 'high' | 'medium' | 'low';

export interface PlacementResult {
  level: Cefr;
  confidence: Confidence;
  finalEstimate: number; // 0..100
  sectionEstimates: Record<SectionId, number>;
  weakAreas: { tag: string; count: number }[];
  totalQuestions: number;
  correctCount: number;
  estimatedAt: string; // ISO
}

export interface OnboardingAnswers {
  name: string;
  ageBand: string;
  goal: string;
  dailyMinutes: number;
}

export interface StudentRecord {
  version: 1;
  id: string; // TALAQA-2026-XXXX-x
  name: string;
  ageBand: string;
  goal: string;
  dailyMinutes: number;
  level: Cefr;
  levelConfidence: Confidence;
  finalEstimate: number;
  sectionEstimates: Record<SectionId, number>;
  weakAreas: { tag: string; count: number }[];
  registeredAt: string;
  estimatedAt: string;
  /** أعلى مستوى اجتاز امتحانه المعتمد (محلياً على هذا الجهاز) */
  certifiedLevel?: Cefr;
  certifiedAt?: string;
}

/* ── امتحانات المستويات المعتمدة ── */
export type ExamLevel = 'A1' | 'A2' | 'B1' | 'B2';

export interface LevelExamQuestion {
  itemId: string;
  section: SectionId;
  cefr: Cefr;
  difficulty: number;
  tags: string[];
  question: string;
  passage?: string;
  options: string[];
  answer: number; // بعد خلط الخيارات
  explanation: string;
}

export interface ExamSectionScore {
  correct: number;
  total: number;
}

export interface LevelExamResult {
  id: string;
  studentId: string;
  level: ExamLevel;
  score: number; // 0..100
  correctCount: number;
  totalQuestions: number;
  passMark: number; // 0..100
  passed: boolean;
  sectionScores: Record<SectionId, ExamSectionScore>;
  weakAreas: { tag: string; count: number }[];
  takenAt: string;
  durationSeconds: number;
}

/* ── المحتوى المنهجي ── */

export type LessonBlock =
  | { type: 'rule'; title: string; body: string }
  | { type: 'tip'; title: string; body: string }
  | { type: 'table'; title?: string; head: [string, string]; rows: [string, string][] };

export interface LessonExample {
  /** الجملة الإنجليزية كما تُنطق */
  text: string;
  /** ملاحظة عربية اختيارية */
  note?: string;
}

export interface PracticeItem {
  id: string;
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  estMinutes: number;
  objectives: string[];
  blocks: LessonBlock[];
  examples: LessonExample[];
  practice: PracticeItem[];
}

export interface Unit {
  id: string;
  order: number;
  title: string;
  tagline: string;
  forLevels: string;
  lessons: Lesson[];
}

export interface LessonProgress {
  lessonId: string;
  completedAt: string;
  bestScore: number; // 0..100
}
