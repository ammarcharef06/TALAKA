/* طَلَاقَة — الحالة المؤقتة للجلسة (تُفقد عند إعادة التحميل عمداً: لا شيء سري هنا) */
import type { ExamLevel, LevelExamResult, OnboardingAnswers, PlacementResult } from './types';

export const session: {
  onboarding: OnboardingAnswers | null;
  result: PlacementResult | null;
  currentLessonId: string | null;
  pendingExamLevel: ExamLevel | null;
  levelExamResult: LevelExamResult | null;
  /** السيناريو المهني المختار للمقابلة */
  careerScenarioId: string | null;
} = {
  onboarding: null,
  result: null,
  currentLessonId: null,
  pendingExamLevel: null,
  levelExamResult: null,
  careerScenarioId: null,
};

export function resetSession(): void {
  session.onboarding = null;
  session.result = null;
  session.currentLessonId = null;
  session.pendingExamLevel = null;
  session.levelExamResult = null;
  session.careerScenarioId = null;
}
