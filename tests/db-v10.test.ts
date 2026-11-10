/* طَلَاقَة — اختبارات مخطط IndexedDB v10 والتحقق من النسخ الاحتياطية */
import { describe, expect, it } from 'vitest';
import { ACADEMIC_STORES, DB_VERSION, EXPORT_STORES, validateBackupPayload } from '../src/store/db';

const LEGACY_STORES: Record<string, unknown[]> = {
  students: [{ id: 'TALAQA-2026-0001-X' }],
  meta: [{ key: 'currentStudentId', value: 'TALAQA-2026-0001-X' }],
  progress: [{ lessonId: 'l1', completedAt: '2026-01-01', bestScore: 80 }],
  'srs-cards': [{ cardId: 'c1' }],
  exams: [{ id: 'e1' }],
  certificates: [{ payload: { id: 'cert1' } }],
  library: [{ readerId: 'r1' }],
  career: [{ id: 'career1' }],
  'cv-profile': [{ id: 'cv' }],
  settings: [{ id: 'settings' }],
  gamification: [{ id: 'gamification' }],
};

const ACADEMIC_FIXTURES: Record<string, unknown[]> = {
  'student-profiles': [{ studentId: 'TALAQA-2026-0001-X' }],
  'admission-sessions': [{ id: 'admission1' }],
  'admission-responses': [{ id: 'response1' }],
  'assessment-sessions': [{ id: 'assessment1' }],
  'assessment-results': [{ id: 'result1' }],
  'skill-mastery': [{ id: 'TALAQA-2026-0001-X:skill1' }],
  'learning-plans': [{ id: 'plan1' }],
};

function backup(dbVersion: number, academic = false) {
  return {
    format: 'talaqa-backup',
    version: 1,
    exportedBy: 'talaqa',
    exportedAt: '2026-11-10T12:00:00.000Z',
    dbVersion,
    stores: { ...LEGACY_STORES, ...(academic ? ACADEMIC_FIXTURES : {}) },
  };
}

describe('IndexedDB v10 schema', () => {
  it('يرفع الإصدار إلى 10 ويضيف المخازن الأكاديمية السبعة دون إخراج القديمة من التصدير', () => {
    expect(DB_VERSION).toBe(10);
    expect(ACADEMIC_STORES).toEqual([
      'student-profiles',
      'admission-sessions',
      'admission-responses',
      'assessment-sessions',
      'assessment-results',
      'skill-mastery',
      'learning-plans',
    ]);
    for (const store of Object.keys(LEGACY_STORES)) expect(EXPORT_STORES).toContain(store);
    for (const store of ACADEMIC_STORES) expect(EXPORT_STORES).toContain(store);
    expect(EXPORT_STORES).not.toContain('keys');
  });
});

describe('التحقق من النسخ الاحتياطية قبل الاستيراد', () => {
  it('يقبل نسخة v9 القديمة ويهيئ المخازن الأكاديمية الجديدة كمصفوفات فارغة', () => {
    const valid = validateBackupPayload(backup(9));
    for (const store of ACADEMIC_STORES) expect(valid.stores[store]).toEqual([]);
    expect(valid.stores.students).toHaveLength(1);
  });

  it('يقبل نسخة v8 التي سبقت إضافة مخزن التحفيز', () => {
    const legacyV8 = backup(8);
    delete legacyV8.stores.gamification;
    const valid = validateBackupPayload(legacyV8);
    expect(valid.stores.gamification).toEqual([]);
    expect(valid.stores.students).toHaveLength(1);
  });

  it('يقبل نسخة v10 فقط عند وجود المخازن السبعة كلها', () => {
    expect(() => validateBackupPayload(backup(10))).toThrow(/ناقص/);
    const valid = validateBackupPayload(backup(10, true));
    expect(valid.stores['student-profiles']).toHaveLength(1);
  });

  it('يرفض إصدار قاعدة بيانات أحدث من التطبيق', () => {
    expect(() => validateBackupPayload(backup(11, true))).toThrow(/أحدث/);
  });

  it('يرفض المخازن غير المعروفة والمصفوفات غير الصالحة', () => {
    const unknown = backup(9) as ReturnType<typeof backup>;
    unknown.stores.unexpected = [];
    expect(() => validateBackupPayload(unknown)).toThrow(/غير معروف/);

    const malformed = backup(9);
    malformed.stores.progress = {} as unknown as unknown[];
    expect(() => validateBackupPayload(malformed)).toThrow(/غير صالحة/);
  });

  it('يرفض السجل غير الكائني أو المفتاح المفقود أو المكرر', () => {
    const nonObject = backup(9);
    nonObject.stores.progress = [null];
    expect(() => validateBackupPayload(nonObject)).toThrow(/سجل غير صالح/);

    const missingKey = backup(9);
    missingKey.stores.progress = [{ bestScore: 80 }];
    expect(() => validateBackupPayload(missingKey)).toThrow(/مفتاح مفقود/);

    const duplicate = backup(9);
    duplicate.stores.progress = [{ lessonId: 'l1' }, { lessonId: 'l1' }];
    expect(() => validateBackupPayload(duplicate)).toThrow(/مكرر/);
  });

  it('يرفض نقص أي مخزن قديم مطلوب', () => {
    const incomplete = backup(9);
    delete incomplete.stores.career;
    expect(() => validateBackupPayload(incomplete)).toThrow(/مطلوب/);
  });
});
