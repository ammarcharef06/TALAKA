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
}
