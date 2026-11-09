/* طَلَاقَة — اختبارات التحفيز: النقاط، السقف اليومي، والأوسمة الصامتة */
import { describe, expect, it } from 'vitest';
import {
  BADGE_DEFINITIONS,
  DAILY_POINT_CAP,
  POINTS_PER_MISTAKE,
  applyMistakeAward,
  createGamificationRecord,
  earnedBadgeIds,
  localDateKey,
  normalizeDaily,
  refreshBadges,
  sanitizeGamification,
  type GamificationSignals,
} from '../src/engine/gamification';
import { DB_VERSION, EXPORT_STORES } from '../src/store/db';

const DAY_ONE = new Date(2026, 10, 9, 10, 0, 0);
const DAY_TWO = new Date(2026, 10, 10, 0, 5, 0);

function signals(overrides: Partial<GamificationSignals> = {}): GamificationSignals {
  return {
    lessonsCompleted: 0,
    perfectLessons: 0,
    foundationComplete: false,
    examsPassed: 0,
    libraryReadings: 0,
    interviewsPassed: 0,
    hasCv: false,
    masteredCards: 0,
    ...overrides,
  };
}

describe('نقاط المحاولة', () => {
  it('نقطتان لكل إجابة خاطئة، وسقف 20 نقطة في اليوم', () => {
    let record = createGamificationRecord(DAY_ONE);
    for (let i = 0; i < 10; i += 1) {
      const award = applyMistakeAward(record, DAY_ONE);
      expect(award.awarded).toBe(POINTS_PER_MISTAKE);
      expect(award.capped).toBe(i === 9);
      record = award.record;
    }
    expect(record.points).toBe(DAILY_POINT_CAP);
    expect(record.dailyPoints).toBe(DAILY_POINT_CAP);

    const eleventh = applyMistakeAward(record, DAY_ONE);
    expect(eleventh.awarded).toBe(0);
    expect(eleventh.capped).toBe(true);
    expect(eleventh.record.points).toBe(DAILY_POINT_CAP);
  });

  it('رصيد اليوم يتصفّر عند تغيّر التاريخ المحلي والنقاط الكلية تبقى', () => {
    const record = { ...createGamificationRecord(DAY_ONE), points: 12, dailyPoints: DAILY_POINT_CAP };
    const next = applyMistakeAward(record, DAY_TWO);
    expect(next.awarded).toBe(POINTS_PER_MISTAKE);
    expect(next.dailyPoints).toBe(POINTS_PER_MISTAKE);
    expect(next.record.points).toBe(14);
    expect(next.record.dailyDate).toBe(localDateKey(DAY_TWO));
  });

  it('مفتاح اليوم محلي لا UTC — لا يتصفّر الرصيد قبل منتصف ليل الطالب', () => {
    const late = new Date(2026, 10, 9, 23, 59, 0);
    expect(localDateKey(late)).toBe('2026-11-09');
    const record = { ...createGamificationRecord(late), dailyPoints: DAILY_POINT_CAP };
    expect(normalizeDaily(record, late).dailyPoints).toBe(DAILY_POINT_CAP);
  });
});

describe('الأوسمة', () => {
  it('تُشتق من إنجازات حقيقية فقط', () => {
    expect(earnedBadgeIds(signals())).toEqual([]);
    expect(earnedBadgeIds(signals({ lessonsCompleted: 1 }))).toContain('first-lesson');
    expect(earnedBadgeIds(signals({ foundationComplete: true }))).toContain('foundation-six');
    expect(earnedBadgeIds(signals({ perfectLessons: 4 }))).not.toContain('perfect-five');
    expect(earnedBadgeIds(signals({ perfectLessons: 5 }))).toContain('perfect-five');
  });

  it('كل إنجاز مكتمل يمنح كل الأوسمة الاثني عشر', () => {
    const all = earnedBadgeIds(
      signals({
        lessonsCompleted: 42,
        perfectLessons: 5,
        foundationComplete: true,
        examsPassed: 3,
        libraryReadings: 5,
        interviewsPassed: 4,
        hasCv: true,
        masteredCards: 10,
      })
    );
    expect(all).toHaveLength(BADGE_DEFINITIONS.length);
    expect(new Set(all).size).toBe(BADGE_DEFINITIONS.length);
  });

  it('refreshBadges لا يكرر الوسام ويحفظ تاريخ منحه', () => {
    const record = createGamificationRecord(DAY_ONE);
    const first = refreshBadges(record, signals({ lessonsCompleted: 1 }), DAY_ONE, true);
    expect(first.added).toHaveLength(1);
    expect(first.added[0].legacy).toBe(true);

    const second = refreshBadges(first.record, signals({ lessonsCompleted: 2 }), DAY_TWO, false);
    expect(second.added).toHaveLength(0);
    expect(second.record.badges[0].earnedAt).toBe(first.added[0].earnedAt);
  });

  it('الوسام الجديد بعد التهيئة ليس legacy', () => {
    const first = refreshBadges(createGamificationRecord(DAY_ONE), signals(), DAY_ONE, true);
    const later = refreshBadges(first.record, signals({ examsPassed: 1 }), DAY_TWO, false);
    expect(later.added).toHaveLength(1);
    expect(later.added[0].legacy).toBe(false);
  });
});

describe('تنظيف سجل التحفيز', () => {
  it('يرفض غير الصالح ويقصّ القيم ويحذف الأوسمة المكررة والمجهولة', () => {
    expect(sanitizeGamification(null)).toBeNull();
    expect(sanitizeGamification({ id: 'other' })).toBeNull();

    const sanitized = sanitizeGamification(
      {
        id: 'gamification',
        points: -5,
        dailyPoints: 999,
        dailyDate: 'bad',
        badges: [{ id: 'first-lesson' }, { id: 'first-lesson' }, { id: 'unknown' }],
      },
      DAY_ONE
    );
    expect(sanitized).not.toBeNull();
    expect(sanitized?.points).toBe(0);
    expect(sanitized?.dailyPoints).toBe(DAILY_POINT_CAP);
    expect(sanitized?.dailyDate).toBe(localDateKey(DAY_ONE));
    expect(sanitized?.badges).toHaveLength(1);
    expect(sanitized?.badges[0].id).toBe('first-lesson');
  });
});

describe('قاعدة البيانات v9', () => {
  it('الإصدار 9 ومخزن التحفيز داخل النسخة الاحتياطية', () => {
    expect(DB_VERSION).toBe(9);
    expect(EXPORT_STORES).toContain('gamification');
    // مفتاح التوقيع الخاص لا يُصدَّر أبداً
    expect(EXPORT_STORES).not.toContain('keys');
  });
});
