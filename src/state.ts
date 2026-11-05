/* طَلَاقَة — الحالة المؤقتة للجلسة (تُفقد عند إعادة التحميل عمداً: لا شيء سري هنا) */
import type { OnboardingAnswers, PlacementResult } from './types';

export const session: {
  onboarding: OnboardingAnswers | null;
  result: PlacementResult | null;
  currentLessonId: string | null;
} = {
  onboarding: null,
  result: null,
  currentLessonId: null,
};

export function resetSession(): void {
  session.onboarding = null;
  session.result = null;
  session.currentLessonId = null;
}
