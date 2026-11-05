/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — خوارزمية التكرار المتباعد (SuperMemo-2 معدلة)
   نقية وبلا أثر جانبي: قابلة للاختبار الآلي بالكامل
   ═══════════════════════════════════════════════════════════════ */

export type ReviewQuality = 1 | 3 | 4 | 5; // نسيت / تعتعتُ / عرفتها / بديهية

export interface SrsState {
  ease: number; // معامل السهولة — يبدأ 2.5 ويتنقص حتى 1.3 كأدنى حد
  interval: number; // المدة بالأيام حتى المراجعة القادمة
  reps: number; // عدد المراجعات الناجحة المتتالية
  due: string; // تاريخ الاستحقاق (ISO)
  lapses: number; // عدد مرات النسيان
  lastReviewed: string | null;
}

export function initialSrsState(now: Date = new Date()): SrsState {
  return { ease: 2.5, interval: 0, reps: 0, due: now.toISOString(), lapses: 0, lastReviewed: null };
}

export interface GradeResult {
  state: SrsState;
  /** نسبة الثقة بعد الجواب — للعرض التحليلي */
  retained: boolean;
}

export function gradeCard(state: SrsState, quality: ReviewQuality, now: Date = new Date()): GradeResult {
  const retained = quality >= 3;
  const DAY_MS = 86_400_000;

  let ease = state.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  ease = Math.max(1.3, ease);

  let reps: number;
  let interval: number;

  if (quality < 3) {
    // نسيان: أعد البطاقة غداً واكسر سلسلة الإتقان
    reps = 0;
    interval = 1;
  } else if (state.reps === 0) {
    reps = 1;
    interval = 1;
  } else if (state.reps === 1) {
    reps = 2;
    interval = 6;
  } else {
    reps = state.reps + 1;
    interval = Math.max(1, Math.round(state.interval * ease));
  }

  const due = new Date(now.getTime() + interval * DAY_MS);

  return {
    state: {
      ease,
      interval,
      reps,
      due: due.toISOString(),
      lapses: quality < 3 ? state.lapses + 1 : state.lapses,
      lastReviewed: now.toISOString(),
    },
    retained,
  };
}

export const QUALITY_LABELS: Record<ReviewQuality, { label: string; hint: string }> = {
  1: { label: 'نسيت', hint: 'تعود غداً' },
  3: { label: 'تعتعتُ', hint: 'تحتاج جهداً' },
  4: { label: 'عرفتها', hint: 'بثقة' },
  5: { label: 'بديهية', hint: 'لا تُنسى' },
};
