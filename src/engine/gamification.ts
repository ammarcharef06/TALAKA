/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك التحفيز (Gamification)
   ───────────────────────────────────────────────────────────────
   حتمي ومحلي بالكامل: لا خادم، لا حساب، لا تتبع، لا LLM.
   القاعدة: نقطتان لكل إجابة خاطئة (تدريب الدرس أو مراجعة «نسيت»)،
   بحد أقصى 20 نقطة في اليوم المحلي. النقاط تبدأ من صفر عند التفعيل،
   والأوسمة تُشتق من إنجازات الطالب الحقيقية في IndexedDB.
   ═══════════════════════════════════════════════════════════════ */
import type { GamificationBadge, GamificationRecord } from '../types';

export const POINTS_PER_MISTAKE = 2;
export const DAILY_POINT_CAP = 20;
export const GAMIFICATION_ID = 'gamification' as const;

/** إشارات الإنجاز المقروءة من مخازن الطالب — تُغذّي حساب الأوسمة. */
export interface GamificationSignals {
  lessonsCompleted: number;
  perfectLessons: number;
  foundationComplete: boolean;
  examsPassed: number;
  libraryReadings: number;
  interviewsPassed: number;
  hasCv: boolean;
  masteredCards: number;
}

export const EMPTY_GAMIFICATION_SIGNALS: GamificationSignals = {
  lessonsCompleted: 0,
  perfectLessons: 0,
  foundationComplete: false,
  examsPassed: 0,
  libraryReadings: 0,
  interviewsPassed: 0,
  hasCv: false,
  masteredCards: 0,
};

export interface BadgeDefinition {
  id: string;
  title: string;
  description: string;
  earned: (signals: GamificationSignals) => boolean;
}

/** الأوسمة الاثنا عشر — كلها مشتقة من إنجازات حقيقية، لا من عداد نقرات. */
export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: 'foundation-six',
    title: 'أساس متين',
    description: 'أتممت دروس المحطة التأسيسية الستة (S0).',
    earned: (s) => s.foundationComplete,
  },
  {
    id: 'first-lesson',
    title: 'أول ختم',
    description: 'أتممت درسك الأول في طَلَاقة.',
    earned: (s) => s.lessonsCompleted >= 1,
  },
  {
    id: 'ten-lessons',
    title: 'عشر خطوات',
    description: 'أتممت عشرة دروس من المنهاج.',
    earned: (s) => s.lessonsCompleted >= 10,
  },
  {
    id: 'all-lessons',
    title: 'خريج المحطات السبع',
    description: 'أتممت الدروس الـ42 كاملة من S0 إلى C2.',
    earned: (s) => s.lessonsCompleted >= 42,
  },
  {
    id: 'perfect-five',
    title: 'إتقان مطلق',
    description: 'حصلت على 100% في خمسة دروس على الأقل.',
    earned: (s) => s.perfectLessons >= 5,
  },
  {
    id: 'first-exam',
    title: 'أول اعتماد',
    description: 'اجتزت أول امتحان مستوى معتمد.',
    earned: (s) => s.examsPassed >= 1,
  },
  {
    id: 'three-exams',
    title: 'ثلاثة اعتمادات',
    description: 'اجتزت ثلاثة امتحانات مستوى معتمدة.',
    earned: (s) => s.examsPassed >= 3,
  },
  {
    id: 'library-five',
    title: 'قارئ نهم',
    description: 'أتممت قراءة خمسة نصوص من المكتبة المتدرّجة.',
    earned: (s) => s.libraryReadings >= 5,
  },
  {
    id: 'first-interview',
    title: 'أول مقابلة',
    description: 'اجتزت أول مقابلة عمل في المسار المهني.',
    earned: (s) => s.interviewsPassed >= 1,
  },
  {
    id: 'career-ready',
    title: 'جاهز للعمل',
    description: 'اجتزت المقابلات الأربع في المسار المهني.',
    earned: (s) => s.interviewsPassed >= 4,
  },
  {
    id: 'cv-ready',
    title: 'سيرتك جاهزة',
    description: 'أنشأت سيرتك الذاتية في صانع CV.',
    earned: (s) => s.hasCv,
  },
  {
    id: 'memory-steel',
    title: 'ذاكرة فولاذية',
    description: 'وصلت بعشرة بطاقات إلى مرحلة الإتقان في التكرار المتباعد.',
    earned: (s) => s.masteredCards >= 10,
  },
];

const BADGE_BY_ID = new Map(BADGE_DEFINITIONS.map((definition) => [definition.id, definition]));

/** مفتاح اليوم بالتوقيت المحلي للجهاز — لا UTC، حتى يتصفّر الرصيد منتصف ليل الطالب. */
export function localDateKey(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function createGamificationRecord(now: Date = new Date()): GamificationRecord {
  return {
    version: 1,
    id: GAMIFICATION_ID,
    points: 0,
    dailyPoints: 0,
    dailyDate: localDateKey(now),
    badges: [],
    updatedAt: now.toISOString(),
  };
}

function nonNegativeInt(value: unknown): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

/** تنظيف أي سجل قادم من نسخة احتياطية أو إصدار أقدم — بلا رمي استثناءات. */
export function sanitizeGamification(value: unknown, now: Date = new Date()): GamificationRecord | null {
  if (typeof value !== 'object' || value === null) return null;
  const raw = value as Record<string, unknown>;
  if (raw.id !== GAMIFICATION_ID) return null;

  const dailyDate =
    typeof raw.dailyDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.dailyDate)
      ? raw.dailyDate
      : localDateKey(now);

  const seen = new Set<string>();
  const badges: GamificationBadge[] = [];
  if (Array.isArray(raw.badges)) {
    for (const item of raw.badges) {
      if (typeof item !== 'object' || item === null) continue;
      const candidate = item as Record<string, unknown>;
      const definition = typeof candidate.id === 'string' ? BADGE_BY_ID.get(candidate.id) : undefined;
      if (!definition || seen.has(definition.id)) continue;
      seen.add(definition.id);
      badges.push({
        id: definition.id,
        title: definition.title,
        description: definition.description,
        earnedAt:
          typeof candidate.earnedAt === 'string' && !Number.isNaN(Date.parse(candidate.earnedAt))
            ? candidate.earnedAt
            : now.toISOString(),
        legacy: candidate.legacy === true,
      });
    }
  }

  return {
    version: 1,
    id: GAMIFICATION_ID,
    points: nonNegativeInt(raw.points),
    dailyPoints: Math.min(DAILY_POINT_CAP, nonNegativeInt(raw.dailyPoints)),
    dailyDate,
    badges,
    updatedAt:
      typeof raw.updatedAt === 'string' && !Number.isNaN(Date.parse(raw.updatedAt))
        ? raw.updatedAt
        : now.toISOString(),
  };
}

/** تصفير رصيد اليوم عند تغيّر التاريخ المحلي — النقاط الكلية تبقى. */
export function normalizeDaily(record: GamificationRecord, now: Date = new Date()): GamificationRecord {
  const today = localDateKey(now);
  if (record.dailyDate === today) return record;
  return { ...record, dailyPoints: 0, dailyDate: today, updatedAt: now.toISOString() };
}

export interface MistakeAward {
  record: GamificationRecord;
  awarded: number;
  /** بلغ الطالب السقف اليومي فلم تُضف نقاط */
  capped: boolean;
  dailyPoints: number;
  dailyCap: number;
}

/**
 * تطبيق نقطة محاولة خاطئة واحدة على السجل (نقية — لا تلمس التخزين).
 * النقطة تُحتسب مرتين: للخطأ الواحد نقطتان، وحتى ينفد سقف اليوم.
 */
export function applyMistakeAward(record: GamificationRecord, now: Date = new Date()): MistakeAward {
  const normalized = normalizeDaily(record, now);
  const remaining = Math.max(0, DAILY_POINT_CAP - normalized.dailyPoints);
  const awarded = Math.min(POINTS_PER_MISTAKE, remaining);

  if (awarded === 0) {
    return {
      record: normalized,
      awarded: 0,
      capped: true,
      dailyPoints: normalized.dailyPoints,
      dailyCap: DAILY_POINT_CAP,
    };
  }

  const dailyPoints = normalized.dailyPoints + awarded;
  return {
    record: {
      ...normalized,
      points: normalized.points + awarded,
      dailyPoints,
      updatedAt: now.toISOString(),
    },
    awarded,
    capped: dailyPoints >= DAILY_POINT_CAP,
    dailyPoints,
    dailyCap: DAILY_POINT_CAP,
  };
}

export function earnedBadgeIds(signals: GamificationSignals): string[] {
  return BADGE_DEFINITIONS.filter((definition) => definition.earned(signals)).map((definition) => definition.id);
}

export interface BadgeRefreshResult {
  record: GamificationRecord;
  added: GamificationBadge[];
}

/**
 * إضافة الأوسمة المستحقة دون تكرار. الأوسمة القديمة تحتفظ بتاريخها،
 * والجديدة تُوسم legacy فقط عند أول تهيئة لتاريخ طالب قائم.
 */
export function refreshBadges(
  record: GamificationRecord,
  signals: GamificationSignals,
  now: Date = new Date(),
  legacy = false
): BadgeRefreshResult {
  const existing = new Set(record.badges.map((badge) => badge.id));
  const added: GamificationBadge[] = [];
  for (const definition of BADGE_DEFINITIONS) {
    if (existing.has(definition.id) || !definition.earned(signals)) continue;
    added.push({
      id: definition.id,
      title: definition.title,
      description: definition.description,
      earnedAt: now.toISOString(),
      legacy,
    });
  }
  if (added.length === 0) return { record, added };
  return {
    record: { ...record, badges: [...record.badges, ...added], updatedAt: now.toISOString() },
    added,
  };
}

/** ملخّص للعرض: النقاط والأوسمة في سطر واحد. */
export function gamificationSummary(record: GamificationRecord): string {
  return `${record.points} نقطة · ${record.badges.length} من ${BADGE_DEFINITIONS.length} وسام`;
}
