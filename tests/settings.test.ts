/* طَلَاقَة — اختبارات محرك إعدادات مكتب شؤون الطلاب (بلا متصفح) */
import { describe, expect, it } from 'vitest';
import {
  defaultSettings,
  hashPin,
  initialsFromName,
  normalizeSettings,
  publicNameFor,
  recognitionLangFor,
  ttsConfigFor,
  verifyPinCredential,
} from '../src/engine/settings';

describe('الإعدادات الافتراضية والتطبيع', () => {
  it('الافتراضي: جلسة 20 دقيقة، سقف 20 بطاقة، صوت عادي، لهجة أمريكية، مظهر النظام', () => {
    const s = defaultSettings();
    expect(s.academic.defaultSessionMinutes).toBe(20);
    expect(s.academic.srsDailyCap).toBe(20);
    expect(s.academic.ttsSpeed).toBe('normal');
    expect(s.academic.accent).toBe('american');
    expect(s.profile.theme).toBe('system');
    expect(s.publicIdentity.nameMode).toBe('full');
    expect(s.accessibility.fontScale).toBe('normal');
  });

  it('يطبّع القيم غير الصالحة ويقص الحدود بدل أن يرمي', () => {
    const s = normalizeSettings({
      academic: { defaultSessionMinutes: 999, srsDailyCap: 500, ttsSpeed: 'turbo', accent: 'marsian' },
      profile: { displayName: '  أحمد  ', initials: 'ABC', theme: 'neon', avatar: 'robot' },
      publicIdentity: { nameMode: 'middle', showStudentId: 'yes', showSignature: 1, showDetailedGrades: null },
      accessibility: { fontScale: 'giant', highContrast: 'on', reducedMotion: 1 },
    });
    expect(s.academic.defaultSessionMinutes).toBe(20);
    expect(s.academic.srsDailyCap).toBe(100);
    expect(s.academic.ttsSpeed).toBe('normal');
    expect(s.academic.accent).toBe('american');
    expect(s.profile.displayName).toBe('أحمد');
    expect(s.profile.initials).toBe('AB');
    expect(s.profile.theme).toBe('system');
    expect(s.profile.avatar).toBe('initials');
    expect(s.publicIdentity.nameMode).toBe('full');
    expect(s.publicIdentity.showStudentId).toBe(true);
    expect(s.accessibility.fontScale).toBe('normal');
    expect(s.accessibility.highContrast).toBe(false);
  });

  it('يقبل جلسة 10 أو 60 ويحفظ سقفاً داخل النطاق', () => {
    expect(normalizeSettings({ academic: { defaultSessionMinutes: 10 } }).academic.defaultSessionMinutes).toBe(10);
    expect(normalizeSettings({ academic: { defaultSessionMinutes: 60 } }).academic.defaultSessionMinutes).toBe(60);
    expect(normalizeSettings({ academic: { srsDailyCap: 5 } }).academic.srsDailyCap).toBe(5);
    expect(normalizeSettings({ academic: { srsDailyCap: 60 } }).academic.srsDailyCap).toBe(60);
  });

  it('لا يثق في PIN مشوّه', () => {
    expect(normalizeSettings({ profile: { pin: { salt: '', hash: '', iterations: 1 } } }).profile.pin).toBeNull();
    expect(normalizeSettings({ profile: { pin: { salt: 'aa', hash: 'bb', iterations: 120000 } } }).profile.pin).not.toBeNull();
  });
});

describe('الاسم العام والأحرف الأولى', () => {
  it('الاسم الكامل يبقى كاملاً، والوضع الأول يخفي ما بعده', () => {
    const s = defaultSettings();
    expect(publicNameFor('سارة أحمد حسن', s)).toBe('سارة أحمد حسن');
    s.publicIdentity.nameMode = 'first';
    expect(publicNameFor('سارة أحمد حسن', s)).toBe('سارة');
    expect(publicNameFor('  سارة   أحمد  ', s)).toBe('سارة');
    expect(publicNameFor('', s)).toBe('');
  });

  it('الأحرف الأولى من كلمة أو كلمتين أو اسم فارغ', () => {
    expect(initialsFromName('سارة')).toBe('سا');
    expect(initialsFromName('سارة أحمد حسن')).toBe('سأ');
    expect(initialsFromName('   ')).toBe('ط');
  });
});

describe('الصوت واللهجة', () => {
  it('خرائط السرعة واللهجة', () => {
    const s = defaultSettings();
    expect(ttsConfigFor(s)).toEqual({ lang: 'en-US', rate: 1 });
    s.academic.accent = 'british';
    s.academic.ttsSpeed = 'slow';
    expect(ttsConfigFor(s)).toEqual({ lang: 'en-GB', rate: 0.7 });
    s.academic.ttsSpeed = 'fast';
    expect(ttsConfigFor(s)).toEqual({ lang: 'en-GB', rate: 1.28 });
    expect(recognitionLangFor(s)).toBe('en-GB');
  });
});

describe('PIN المحلي — PBKDF2-SHA-256', () => {
  it('يولّد ملحاً عشوائياً ولا يخزن الرمز نفسه، ويتحقق من الصحيح فقط', async () => {
    const credential = await hashPin('1234');
    expect(credential.hash).not.toContain('1234');
    expect(credential.salt.length).toBe(32);
    expect(credential.iterations).toBe(120_000);
    await expect(verifyPinCredential('1234', credential)).resolves.toBe(true);
    await expect(verifyPinCredential('4321', credential)).resolves.toBe(false);
    await expect(verifyPinCredential('12', credential)).resolves.toBe(false);
  });

  it('ملحان مختلفان يعطيان بصمتين مختلفتين للرمز نفسه', async () => {
    const a = await hashPin('0000');
    const b = await hashPin('0000');
    expect(a.salt).not.toBe(b.salt);
    expect(a.hash).not.toBe(b.hash);
  });

  it('يرفض رمزاً غير رباعي', async () => {
    await expect(hashPin('123')).rejects.toThrow();
    await expect(hashPin('abcd')).rejects.toThrow();
  });
});
