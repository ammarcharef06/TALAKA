import { describe, expect, it } from 'vitest';
import { matchUtterance, normalizeUtterance } from '../src/engine/voice';

describe('تطبيع النطق', () => {
  it('يوحّد الحالة والترقيم والمسافات', () => {
    expect(normalizeUtterance('  A Coffee,   PLEASE! ')).toBe('a coffee please');
    expect(normalizeUtterance('«Thank you.»')).toBe('thank you');
  });
});

describe('مطابقة النطق', () => {
  it('يقبل الكلمة الصحيحة داخل جملة كاملة', () => {
    expect(matchUtterance('I would like a coffee, please.', ['coffee', 'tea'])).toBe('strong');
  });

  it('يقبل اشتقاق الكلمة (thanks / thank)', () => {
    expect(matchUtterance('Thanks a lot!', ['thank'])).toBe('strong');
    expect(matchUtterance('Two sandwiches, please.', ['sandwich'])).toBe('strong');
  });

  it('يقبل العبارة الكاملة متعددة الكلمات', () => {
    expect(matchUtterance('Here you go.', ['here you go'])).toBe('strong');
  });

  it('يتسامح مع خطأ حرف واحد كفهم جزئي لا كفهم كامل', () => {
    expect(matchUtterance('A cofee please', ['coffee'])).toBe('weak');
    expect(matchUtterance('I said thank you', ['thank'])).toBe('strong');
  });

  it('لا يخلط الكلمات القصيرة (no / nothing)', () => {
    expect(matchUtterance('nothing else', ['no'])).toBe('miss');
    expect(matchUtterance('no thanks', ['no'])).toBe('strong');
  });

  it('يرفض الكلام غير المرتبط', () => {
    expect(matchUtterance('The weather is nice today', ['coffee', 'sandwich'])).toBe('miss');
    expect(matchUtterance('', ['coffee'])).toBe('miss');
  });
});
