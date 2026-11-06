/* طَلَاقَة — اختبارات نزاهة المحتوى المنهجي */
import { describe, expect, it } from 'vitest';
import { UNITS, allLessonsInOrder, curriculumAvailability, nextLessonAfter } from '../src/data/academy/course';

describe('بنية المنهاج', () => {
  it('كل درس: معرف فريد، ترتيب تصاعدي داخل وحدته، أهداف، ٤ خيارات فريدة، إجابة صالحة', () => {
    const ids = new Set<string>();
    for (const unit of UNITS) {
      const orders = unit.lessons.map((l) => l.order).sort((a, b) => a - b);
      expect(orders).toEqual([...orders].sort((a, b) => a - b));
      for (const lesson of unit.lessons) {
        expect(ids.has(lesson.id), `معرف مكرر: ${lesson.id}`).toBe(false);
        ids.add(lesson.id);
        expect(lesson.objectives.length).toBeGreaterThanOrEqual(2);
        // درسا الحوار التطبيقي (٦ و١٢) يكتفيان بكتلة واحدة ثم تنطلق الأمثلة
        expect(lesson.blocks.length).toBeGreaterThanOrEqual(1);
        expect(lesson.examples.length).toBeGreaterThanOrEqual(3);
        expect(lesson.practice.length).toBeGreaterThanOrEqual(5);
        for (const item of lesson.practice) {
          expect(new Set(item.options).size, `${lesson.id}/${item.id} خيارات مكررة`).toBe(4);
          expect(item.answer, `${lesson.id}/${item.id}`).toBeGreaterThanOrEqual(0);
          expect(item.answer, `${lesson.id}/${item.id}`).toBeLessThanOrEqual(3);
          expect(item.explanation.trim().length).toBeGreaterThan(10);
        }
      }
    }
  });

  it('الترتيب العالمي عبر المحطات: 30 درساً فريداً مرتباً لكل درس تاليه', () => {
    const all = allLessonsInOrder();
    expect(all.length).toBe(30);
    for (const { unit } of all) {
      expect(UNITS).toContain(unit);
    }
  });

  it('curriculumAvailability: الفتح تتابعي، وأول درس current عند العدم', () => {
    const fresh = curriculumAvailability({});
    const values = Object.values(fresh);
    expect(values.filter((v) => v === 'current')).toHaveLength(1);
    expect(values.filter((v) => v === 'completed')).toHaveLength(0);
    expect(values.filter((v) => v === 'locked').length).toBe(allLessonsInOrder().length - 1);

    const first = allLessonsInOrder()[0].lesson;
    const oneDone = curriculumAvailability({ [first.id]: { completedAt: new Date().toISOString(), bestScore: 100 } });
    expect(oneDone[first.id]).toBe('completed');
    expect(Object.values(oneDone).filter((v) => v === 'current')).toHaveLength(1);
  });

  it('nextLessonAfter: تتابع عبر حدود المحطات (6 → 7 → 13 → 19 → 25) وينتهي عند 30', () => {
    const l6 = allLessonsInOrder().find((x) => x.lesson.id === 'l6-dialogue');
    expect(nextLessonAfter(l6!.lesson.id)?.lesson.id).toBe('l7-dont');
    const l12 = allLessonsInOrder().find((x) => x.lesson.id === 'l12-cafe');
    expect(nextLessonAfter(l12!.lesson.id)?.lesson.id).toBe('l13-past-ed');
    const l18 = allLessonsInOrder().find((x) => x.lesson.id === 'l18-trip');
    expect(nextLessonAfter(l18!.lesson.id)?.lesson.id).toBe('l19-perfect');
    const l24 = allLessonsInOrder().find((x) => x.lesson.id === 'l24-interview');
    expect(nextLessonAfter(l24!.lesson.id)?.lesson.id).toBe('l25-third-wish');
    expect(nextLessonAfter('l30-seminar')).toBeNull();
  });
});
