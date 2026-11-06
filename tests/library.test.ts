import { describe, expect, it } from 'vitest';
import { READERS, READER_LEVELS, WORD_BANDS, getReadersByLevel, wordCount } from '../src/data/library/readers';
import { CEFR_ORDER, LEVEL_META } from '../src/engine/placement';

describe('المكتبة المتدرّجة — سلامة المحتوى', () => {
  it('المستويات السبعة كاملة ومُعرّفة في جدول المستويات', () => {
    expect(READER_LEVELS).toEqual(CEFR_ORDER);
    for (const level of READER_LEVELS) {
      expect(LEVEL_META[level]).toBeDefined();
      expect(LEVEL_META[level].ar.trim().length).toBeGreaterThan(0);
    }
  });

  it('معرفات النصوص فريدة ولا تتكرر', () => {
    const ids = READERS.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('كل مستوى يحمل نصين على الأقل بترتيب متسلسل', () => {
    for (const level of READER_LEVELS) {
      const group = getReadersByLevel(level);
      expect(group.length, level).toBeGreaterThanOrEqual(2);
      group.forEach((r, i) => expect(r.order, `${r.id}`).toBe(i + 1));
    }
  });

  it('عدد كلمات كل نص داخل نطاق مستواه — لا نصوص مُضعَّفة ولا مُداراة', () => {
    for (const r of READERS) {
      const [min, max] = WORD_BANDS[r.level];
      const wc = wordCount(r);
      expect(wc, `${r.id} فيه ${wc} كلمة خارج النطاق ${min}-${max}`).toBeGreaterThanOrEqual(min);
      expect(wc, `${r.id} فيه ${wc} كلمة خارج النطاق ${min}-${max}`).toBeLessThanOrEqual(max);
    }
  });

  it('كل نص يحمل فقرات إنجليزية حقيقية ومسرد عربي وملخصاً', () => {
    for (const r of READERS) {
      expect(r.paragraphs.length, r.id).toBeGreaterThanOrEqual(3);
      for (const p of r.paragraphs) expect(p.trim().length, r.id).toBeGreaterThan(15);
      expect(r.title.trim().length).toBeGreaterThan(3);
      expect(r.titleAr.trim().length).toBeGreaterThan(3);
      expect(r.topic.trim().length).toBeGreaterThan(2);
      expect(r.summary.trim().length).toBeGreaterThan(15);
      expect(r.estMinutes).toBeGreaterThan(0);
    }
  });

  it('مسرد كل نص يحمل 6 مفاهيم على الأقل بمعانٍ عربية غير فارغة', () => {
    for (const r of READERS) {
      expect(r.vocab.length, r.id).toBeGreaterThanOrEqual(5);
      const terms = r.vocab.map((v) => v.term);
      expect(new Set(terms).size, r.id).toBe(terms.length);
      for (const v of r.vocab) {
        expect(v.term.trim().length, r.id).toBeGreaterThan(1);
        expect(v.meaning.trim().length, `${r.id} / ${v.term}`).toBeGreaterThan(2);
      }
    }
  });

  it('كل سؤال فهم يملك 4 خيارات فريدة وإجابة داخل النطاق وشرحاً عربياً حقيقياً', () => {
    for (const r of READERS) {
      expect(r.questions.length, r.id).toBeGreaterThanOrEqual(4);
      const ids = r.questions.map((q) => q.id);
      expect(new Set(ids).size, r.id).toBe(ids.length);
      for (const q of r.questions) {
        expect(q.options, `${r.id}/${q.id}`).toHaveLength(4);
        const norm = q.options.map((o) => o.trim().toLowerCase());
        expect(new Set(norm).size, `${r.id}/${q.id}: خيارات مكررة`).toBe(4);
        expect(norm.every((o) => o.length > 0)).toBe(true);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThanOrEqual(3);
        expect(q.explanation.trim().length, `${r.id}/${q.id}: شرح ناقص`).toBeGreaterThan(10);
      }
    }
  });
});
