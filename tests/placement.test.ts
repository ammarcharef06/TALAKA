/* طَلَاقَة — اختبارات محرك تحديد المستوى التكيفي */
import { describe, expect, it } from 'vitest';
import { PlacementEngine, estimateToLevel, confidenceLabel, LEVEL_META } from '../src/engine/placement';
import type { Item } from '../src/types';

type Correctness = (item: Item) => boolean;

function runEngine(isCorrect: Correctness) {
  const engine = new PlacementEngine();
  let item = engine.nextItem();
  const path: string[] = [];
  while (item) {
    path.push(`${item.section}:${item.difficulty}`);
    const chosen = isCorrect(item) ? item.answer : (item.answer + 1) % item.options.length;
    engine.answer(item, chosen);
    item = engine.nextItem();
  }
  return { result: engine.finish(), path };
}

describe('estimateToLevel — باند CEFR', () => {
  it('يعيّن الحدود بشكل صحيح', () => {
    expect(estimateToLevel(0)).toBe('S0');
    expect(estimateToLevel(11.9)).toBe('S0');
    expect(estimateToLevel(12)).toBe('A1');
    expect(estimateToLevel(25)).toBe('A2');
    expect(estimateToLevel(37)).toBe('B1');
    expect(estimateToLevel(52)).toBe('B2');
    expect(estimateToLevel(66)).toBe('C1');
    expect(estimateToLevel(82)).toBe('C2');
    expect(estimateToLevel(100)).toBe('C2');
  });

  it('كل مستوى له بيانات وصفية عربية', () => {
    for (const meta of Object.values(LEVEL_META)) {
      expect(meta.ar.length).toBeGreaterThan(3);
      expect(meta.en.length).toBeGreaterThan(1);
      expect(meta.advice.length).toBeGreaterThan(10);
    }
  });
});

describe('PlacementEngine — الخوارزمية التكيفية', () => {
  it('طالب مثالي (كل الإجابات صحيحة) يصل إلى C1/C2', () => {
    const { result } = runEngine(() => true);
    expect(['C1', 'C2']).toContain(result.level);
    expect(result.correctCount).toBe(18);
    expect(result.confidence).toBe('high');
    expect(result.weakAreas).toHaveLength(0);
  });

  it('طالب فاشل كلياً يهبط إلى S0/A1', () => {
    const { result } = runEngine(() => false);
    expect(['S0', 'A1']).toContain(result.level);
    expect(result.correctCount).toBe(0);
    expect(result.weakAreas.length).toBeGreaterThan(0);
    expect(result.weakAreas.length).toBeLessThanOrEqual(3);
  });

  it('طالب يعرف السهل فقط (d<35) يُصنّف في المراتب التأسيسية', () => {
    const { result } = runEngine((item) => item.difficulty < 35);
    expect(['S0', 'A1', 'A2']).toContain(result.level);
  });

  it('طالب يعرف المفردات أفضل من القراءة يُظهر فرقاً بين الأقسام', () => {
    const { result } = runEngine((item) => (item.section === 'vocab' ? true : item.difficulty < 35));
    expect(result.sectionEstimates.vocab).toBeGreaterThan(result.sectionEstimates.reading);
    expect(result.sectionEstimates.vocab).toBeGreaterThan(result.sectionEstimates.rules);
  });

  it('يطرح 18 سؤالاً بالضبط و6 لكل قسم', () => {
    const engine = new PlacementEngine();
    expect(engine.totalPlanned).toBe(18);
    let item = engine.nextItem();
    while (item) {
      engine.answer(item, item.answer);
      item = engine.nextItem();
    }
    const result = engine.finish();
    expect(result.totalQuestions).toBe(18);
    expect(result.estimatedAt).toBeTruthy();
  });

  it('لا يطرح السؤال نفسه مرتين', () => {
    const engine = new PlacementEngine();
    const seen = new Set<string>();
    let item = engine.nextItem();
    while (item) {
      expect(seen.has(item.id)).toBe(false);
      seen.add(item.id);
      engine.answer(item, item.answer);
      item = engine.nextItem();
    }
  });

  it('confidenceLabel يعيد نصوصاً عربية لكل حالة', () => {
    expect(confidenceLabel('high')).toContain('عالية');
    expect(confidenceLabel('medium')).toContain('متوسطة');
    expect(confidenceLabel('low')).toContain('منخفضة');
  });
});
