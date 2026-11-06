/* طَلَاقَة — اختبارات SM-2 وسلامة الرزمة */
import { describe, expect, it } from 'vitest';
import { initialSrsState, gradeCard, type ReviewQuality } from '../src/engine/srs';
import { deckIntegrityCheck, SRS_DECK, cardsForLesson, countDueCards } from '../src/data/academy/deck';
import { UNITS } from '../src/data/academy/course';

const NOW = new Date('2026-11-05T12:00:00.000Z');

describe('SM-2 — الخوارزمية', () => {
  it('بطاقة جديدة بتقييم 4: تكرار أول غداً، ثم بعد 6 أيام، ثم نسبة', () => {
    let s = initialSrsState(NOW);
    s = gradeCard(s, 4, NOW).state;
    expect(s.reps).toBe(1);
    expect(s.interval).toBe(1);
    expect(new Date(s.due).getTime() - NOW.getTime()).toBe(86_400_000);

    s = gradeCard(s, 4, new Date(new Date(s.due).getTime())).state;
    expect(s.reps).toBe(2);
    expect(s.interval).toBe(6);

    s = gradeCard(s, 4, new Date(new Date(s.due).getTime())).state;
    expect(s.reps).toBe(3);
    expect(s.interval).toBe(Math.round(6 * s.ease));
  });

  it('النسيان يعيد البطاقة غداً ويكسر السلسلة ويزيد lapses', () => {
    let s = initialSrsState(NOW);
    s = gradeCard(s, 5, NOW).state;
    s = gradeCard(s, 5, new Date(new Date(s.due).getTime())).state;
    expect(s.reps).toBe(2);
    s = gradeCard(s, 1, new Date(new Date(s.due).getTime())).state;
    expect(s.reps).toBe(0);
    expect(s.interval).toBe(1);
    expect(s.lapses).toBe(1);
  });

  it('معامل السهولة لا يهبط تحت 1.3', () => {
    let s = initialSrsState(NOW);
    for (let i = 0; i < 12; i++) s = gradeCard(s, 1, NOW).state;
    expect(s.ease).toBeGreaterThanOrEqual(1.3);
  });

  it('curve: جودة أعلى ← سهولة أعلى أو تساوي', () => {
    const q: ReviewQuality[] = [1, 3, 4, 5];
    const eases = q.map((quality) => gradeCard(initialSrsState(NOW), quality, NOW).state.ease);
    for (let i = 1; i < eases.length; i++) expect(eases[i]).toBeGreaterThan(eases[i - 1]);
  });
});

describe('الرزمة — نزاهة المحتوى', () => {
  it('كل البطاقات لها درس موجود ومعرفات فريدة وغير فارغة', () => {
    const { ok, problems } = deckIntegrityCheck(UNITS);
    expect(problems).toEqual([]);
    expect(ok).toBe(true);
  });

  it('كل دروس المحطات السبع تملك بطاقات، والرزمة ≥ 260', () => {
    for (const unit of UNITS) {
      for (const lesson of unit.lessons) {
        expect(cardsForLesson(lesson.id).length).toBeGreaterThanOrEqual(6);
      }
    }
    expect(SRS_DECK.length).toBeGreaterThanOrEqual(260);
  });

  it('countDueCards: البطاقة لا تستحق إلا بعد إتمام درسها، أو بدون حالة أو بموعد سابق', () => {
    const emptyProgress = {};
    expect(countDueCards({}, emptyProgress)).toBe(0);
    const done = { 'l1-sounds': { completedAt: NOW.toISOString(), bestScore: 100 } };
    expect(countDueCards({}, done)).toBe(cardsForLesson('l1-sounds').length);
    const futureState = { [SRS_DECK[0].id]: { ease: 2.6, interval: 30, reps: 4, due: new Date(Date.now() + 30 * 86400000).toISOString(), lapses: 0, lastReviewed: NOW.toISOString() } };
    expect(countDueCards(futureState, done)).toBe(cardsForLesson('l1-sounds').length - 1);
  });
});
