/* طَلَاقَة — التخزين المحلي: IndexedDB على جهازك وحدك. لا خادم، لا حساب، لا تتبع. */
import type { AppSettings, Cefr, CvProfile, LevelExamResult, SettingsRecord, StudentRecord } from '../types';
import type { SignedCertificate } from '../engine/certificate';
import type { InterviewResult } from '../engine/interview';
import type { SrsState } from '../engine/srs';

const DB_NAME = 'talaqa';
const DB_VERSION = 8;
const STORE_STUDENTS = 'students';
const STORE_META = 'meta';
const STORE_PROGRESS = 'progress';
const STORE_SRS = 'srs-cards';
const STORE_EXAMS = 'exams';
const STORE_KEYS = 'keys';
const STORE_CERTS = 'certificates';
const STORE_LIBRARY = 'library';
const STORE_CAREER = 'career';
const STORE_CV = 'cv-profile';
const STORE_SETTINGS = 'settings';

const EXPORT_STORES = [
  STORE_STUDENTS,
  STORE_META,
  STORE_PROGRESS,
  STORE_SRS,
  STORE_EXAMS,
  STORE_CERTS,
  STORE_LIBRARY,
  STORE_CAREER,
  STORE_CV,
  STORE_SETTINGS,
] as const;

export interface TalaqaBackup {
  format: 'talaqa-backup';
  version: 1;
  exportedBy: 'talaqa';
  exportedAt: string;
  dbVersion: number;
  /** لا يشمل مفتاح التوقيع الخاص — المفتاح غير قابل للتصدير ويبقى على الجهاز */
  stores: Record<string, unknown[]>;
}

export interface CertificateSigningKeyRecord {
  id: 'cert-signing';
  privateKey: CryptoKey;
  publicKeyJwk: JsonWebKey;
  fingerprint: string;
  createdAt: string;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_STUDENTS)) db.createObjectStore(STORE_STUDENTS, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(STORE_META)) db.createObjectStore(STORE_META, { keyPath: 'key' });
      if (!db.objectStoreNames.contains(STORE_PROGRESS)) db.createObjectStore(STORE_PROGRESS, { keyPath: 'lessonId' });
      if (!db.objectStoreNames.contains(STORE_SRS)) db.createObjectStore(STORE_SRS, { keyPath: 'cardId' });
      if (!db.objectStoreNames.contains(STORE_EXAMS)) db.createObjectStore(STORE_EXAMS, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(STORE_KEYS)) db.createObjectStore(STORE_KEYS, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(STORE_CERTS)) db.createObjectStore(STORE_CERTS, { keyPath: 'payload.id' });
      if (!db.objectStoreNames.contains(STORE_LIBRARY)) db.createObjectStore(STORE_LIBRARY, { keyPath: 'readerId' });
      if (!db.objectStoreNames.contains(STORE_CAREER)) db.createObjectStore(STORE_CAREER, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(STORE_CV)) db.createObjectStore(STORE_CV, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(STORE_SETTINGS)) db.createObjectStore(STORE_SETTINGS, { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('تعذر فتح قاعدة البيانات المحلية'));
  });
}

function tx<T>(db: IDBDatabase, storeName: string, mode: IDBTransactionMode, op: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = db.transaction(storeName, mode);
    const store = t.objectStore(storeName);
    const req = op(store);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('فشل إجراء قاعدة البيانات'));
  });
}

async function getMeta(db: IDBDatabase, key: string): Promise<string | null> {
  try {
    const row = await tx<{ key: string; value: string } | undefined>(db, STORE_META, 'readonly', (s) => s.get(key));
    return row?.value ?? null;
  } catch {
    return null;
  }
}

async function setMeta(db: IDBDatabase, key: string, value: string): Promise<void> {
  await tx(db, STORE_META, 'readwrite', (s) => s.put({ key, value }));
}

export async function getCurrentStudent(): Promise<StudentRecord | null> {
  const db = await openDb();
  try {
    const currentId = await getMeta(db, 'currentStudentId');
    if (!currentId) return null;
    const rec = await tx<StudentRecord | undefined>(db, STORE_STUDENTS, 'readonly', (s) => s.get(currentId));
    return rec ?? null;
  } finally {
    db.close();
  }
}

export async function saveStudent(rec: StudentRecord): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_STUDENTS, 'readwrite', (s) => s.put(rec));
    await setMeta(db, 'currentStudentId', rec.id);
  } finally {
    db.close();
  }
}

/* ── تقدّم الدروس (المحتوى التأسيسي) ── */

export async function getProgressMap(): Promise<Record<string, { completedAt: string; bestScore: number }>> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_PROGRESS, 'readonly');
      const store = t.objectStore(STORE_PROGRESS);
      const req = store.getAll();
      req.onsuccess = () => {
        const map: Record<string, { completedAt: string; bestScore: number }> = {};
        for (const row of req.result as { lessonId: string; completedAt: string; bestScore: number }[]) {
          map[row.lessonId] = { completedAt: row.completedAt, bestScore: row.bestScore };
        }
        resolve(map);
      };
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة تقدم الدروس'));
    });
  } finally {
    db.close();
  }
}

/** تسجيل إتمام درس مع الحفاظ على أفضل درجة */
export async function markLessonComplete(lessonId: string, score: number): Promise<void> {
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const t = db.transaction(STORE_PROGRESS, 'readwrite');
      const store = t.objectStore(STORE_PROGRESS);
      const getReq = store.get(lessonId);
      getReq.onsuccess = () => {
        const prev = getReq.result as { lessonId: string; completedAt: string; bestScore: number } | undefined;
        store.put({
          lessonId,
          completedAt: new Date().toISOString(),
          bestScore: Math.max(prev?.bestScore ?? 0, score),
        });
      };
      t.oncomplete = () => resolve();
      t.onerror = () => reject(t.error ?? new Error('تعذر حفظ تقدم الدرس'));
    });
  } finally {
    db.close();
  }
}

/* ── بطاقات التكرار المتباعد ── */

export async function getAllSrsStates(): Promise<Record<string, SrsState>> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_SRS, 'readonly');
      const store = t.objectStore(STORE_SRS);
      const req = store.getAll();
      req.onsuccess = () => {
        const map: Record<string, SrsState> = {};
        for (const row of req.result as (SrsState & { cardId: string })[]) {
          const { cardId, ...state } = row;
          map[cardId] = state;
        }
        resolve(map);
      };
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة بطاقات المراجعة'));
    });
  } finally {
    db.close();
  }
}

export async function recordReview(cardId: string, state: SrsState): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_SRS, 'readwrite', (s) => s.put({ cardId, ...state }));
  } finally {
    db.close();
  }
}

/* ── محاضر امتحانات المستويات المعتمدة ── */

export async function saveLevelExamResult(rec: LevelExamResult): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_EXAMS, 'readwrite', (s) => s.put(rec));
  } finally {
    db.close();
  }
}

/** كل محاضر الامتحانات — مرتبة من الأقدم إلى الأحدث */
export async function getAllLevelExamResults(): Promise<LevelExamResult[]> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_EXAMS, 'readonly');
      const req = t.objectStore(STORE_EXAMS).getAll();
      req.onsuccess = () => {
        const rows = (req.result as LevelExamResult[]).sort((a, b) => Date.parse(a.takenAt) - Date.parse(b.takenAt));
        resolve(rows);
      };
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة محاضر الامتحانات'));
    });
  } finally {
    db.close();
  }
}

/** تحديث اعتماد الطالب — لا ينزل أبداً بمستواه المعتمد */
export async function certifyStudent(level: Cefr): Promise<StudentRecord | null> {
  const db = await openDb();
  try {
    const currentId = await getMeta(db, 'currentStudentId');
    if (!currentId) return null;
    const rec = await tx<StudentRecord | undefined>(db, STORE_STUDENTS, 'readonly', (s) => s.get(currentId));
    if (!rec) return null;
    const order: Cefr[] = ['S0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const currentRank = order.indexOf(rec.certifiedLevel ?? 'S0');
    if (order.indexOf(level) <= currentRank) return rec;
    const updated: StudentRecord = { ...rec, certifiedLevel: level, certifiedAt: new Date().toISOString() };
    await tx(db, STORE_STUDENTS, 'readwrite', (s) => s.put(updated));
    return updated;
  } finally {
    db.close();
  }
}

/* ── مفاتيح توقيع الشهادات والشهادات الصادرة ── */

export async function getSigningKey(): Promise<CertificateSigningKeyRecord | null> {
  const db = await openDb();
  try {
    const row = await tx<CertificateSigningKeyRecord | undefined>(db, STORE_KEYS, 'readonly', (s) => s.get('cert-signing'));
    return row ?? null;
  } finally {
    db.close();
  }
}

export async function saveSigningKey(rec: CertificateSigningKeyRecord): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_KEYS, 'readwrite', (s) => s.put(rec));
  } finally {
    db.close();
  }
}

export async function saveCertificate(cert: SignedCertificate): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_CERTS, 'readwrite', (s) => s.put(cert));
  } finally {
    db.close();
  }
}

export async function getAllCertificates(): Promise<SignedCertificate[]> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_CERTS, 'readonly');
      const req = t.objectStore(STORE_CERTS).getAll();
      req.onsuccess = () => resolve(req.result as SignedCertificate[]);
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة الشهادات'));
    });
  } finally {
    db.close();
  }
}

export async function getLatestCertificate(studentId: string, level: Cefr): Promise<SignedCertificate | null> {
  const all = await getAllCertificates();
  const own = all
    .filter((c) => c.payload.studentId === studentId && c.payload.level === level)
    .sort((a, b) => Date.parse(b.payload.issuedAt) - Date.parse(a.payload.issuedAt));
  return own[0] ?? null;
}

/* ── المكتبة المتدرّجة ── */

export async function getLibraryProgressMap(): Promise<Record<string, { completedAt: string; bestScore: number }>> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_LIBRARY, 'readonly');
      const req = t.objectStore(STORE_LIBRARY).getAll();
      req.onsuccess = () => {
        const map: Record<string, { completedAt: string; bestScore: number }> = {};
        for (const row of req.result as { readerId: string; completedAt: string; bestScore: number }[]) {
          map[row.readerId] = { completedAt: row.completedAt, bestScore: row.bestScore };
        }
        resolve(map);
      };
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة تقدم المكتبة'));
    });
  } finally {
    db.close();
  }
}

/** تسجيل قراءة نص مع الحفاظ على أفضل نتيجة */
export async function markReaderComplete(readerId: string, score: number): Promise<void> {
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const t = db.transaction(STORE_LIBRARY, 'readwrite');
      const store = t.objectStore(STORE_LIBRARY);
      const getReq = store.get(readerId);
      getReq.onsuccess = () => {
        const prev = getReq.result as { readerId: string; completedAt: string; bestScore: number } | undefined;
        store.put({
          readerId,
          completedAt: new Date().toISOString(),
          bestScore: Math.max(prev?.bestScore ?? 0, Math.round(score)),
        });
      };
      t.oncomplete = () => resolve();
      t.onerror = () => reject(t.error ?? new Error('تعذر حفظ تقدم القراءة'));
    });
  } finally {
    db.close();
  }
}

/* ── المسار المهني (Career Hub) ── */

export async function saveInterviewResult(rec: InterviewResult): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_CAREER, 'readwrite', (s) => s.put(rec));
  } finally {
    db.close();
  }
}

/** كل محاولات المقابلات — مرتبة من الأقدم إلى الأحدث */
export async function getInterviewResults(): Promise<InterviewResult[]> {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const t = db.transaction(STORE_CAREER, 'readonly');
      const req = t.objectStore(STORE_CAREER).getAll();
      req.onsuccess = () => {
        const rows = (req.result as InterviewResult[]).sort((a, b) => Date.parse(a.takenAt) - Date.parse(b.takenAt));
        resolve(rows);
      };
      req.onerror = () => reject(req.error ?? new Error('تعذر قراءة نتائج المقابلات'));
    });
  } finally {
    db.close();
  }
}

/** أفضل نتيجة وعدد المحاولات وحالة الاجتياز لكل سيناريو */
export async function getInterviewBestMap(): Promise<Record<string, { bestScore: number; attempts: number; passed: boolean }>> {
  const results = await getInterviewResults();
  const map: Record<string, { bestScore: number; attempts: number; passed: boolean }> = {};
  for (const r of results) {
    const prev = map[r.scenarioId];
    map[r.scenarioId] = {
      bestScore: Math.max(prev?.bestScore ?? 0, r.score),
      attempts: (prev?.attempts ?? 0) + 1,
      passed: (prev?.passed ?? false) || r.passed,
    };
  }
  return map;
}

/** السيناريوهات المجتازة — لاختبار ميلاد بطاقات SRS المهنية */
export async function getPassedInterviewScenarios(): Promise<string[]> {
  const results = await getInterviewResults();
  const passed = new Set<string>();
  for (const r of results) if (r.passed) passed.add(r.scenarioId);
  return [...passed];
}

/* ── السيرة الذاتية (CV Builder) ── */

export async function getCvProfile(): Promise<CvProfile | null> {
  const db = await openDb();
  try {
    const row = await tx<CvProfile | undefined>(db, STORE_CV, 'readonly', (s) => s.get('cv'));
    return row ?? null;
  } finally {
    db.close();
  }
}

export async function saveCvProfile(profile: CvProfile): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_CV, 'readwrite', (s) => s.put(profile));
  } finally {
    db.close();
  }
}

/* ── إعدادات مكتب شؤون الطلاب ── */

export async function getSettingsRecord(): Promise<SettingsRecord | null> {
  const db = await openDb();
  try {
    const row = await tx<SettingsRecord | undefined>(db, STORE_SETTINGS, 'readonly', (s) => s.get('settings'));
    return row ?? null;
  } finally {
    db.close();
  }
}

export async function saveSettingsRecord(settings: AppSettings): Promise<void> {
  const db = await openDb();
  try {
    await tx(db, STORE_SETTINGS, 'readwrite', (s) => s.put({ id: 'settings', ...settings }));
  } finally {
    db.close();
  }
}

/* ── النسخ الاحتياطي الشامل: كل بيانات الطالب، بلا مفتاح التوقيع الخاص ── */

async function readStore(db: IDBDatabase, storeName: string): Promise<unknown[]> {
  return await new Promise((resolve, reject) => {
    const t = db.transaction(storeName, 'readonly');
    const req = t.objectStore(storeName).getAll();
    req.onsuccess = () => resolve(req.result as unknown[]);
    req.onerror = () => reject(req.error ?? new Error(`تعذر قراءة مخزن ${storeName}`));
  });
}

export async function exportAllData(): Promise<TalaqaBackup> {
  const db = await openDb();
  try {
    const stores: Record<string, unknown[]> = {};
    for (const name of EXPORT_STORES) stores[name] = await readStore(db, name);
    return {
      format: 'talaqa-backup',
      version: 1,
      exportedBy: 'talaqa',
      exportedAt: new Date().toISOString(),
      dbVersion: DB_VERSION,
      stores,
    };
  } finally {
    db.close();
  }
}

export async function exportAllDataFile(): Promise<void> {
  const backup = await exportAllData();
  const body = JSON.stringify(backup, null, 2);
  const blob = new Blob([body], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `talaqa-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** استيراد نسخة كاملة: يستبدل مخازن بيانات الطالب، ويترك مفتاح التوقيع المحلي في مكانه */
export async function importAllData(file: File): Promise<{ students: number; hasSettings: boolean }> {
  const text = await file.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('الملف ليس JSON صالحاً');
  }
  const backup = parsed as Partial<TalaqaBackup>;
  if (!backup || backup.format !== 'talaqa-backup' || backup.version !== 1 || !backup.stores || typeof backup.stores !== 'object') {
    throw new Error('الملف ليس نسخة احتياطية صالحة من طَلَاقة');
  }
  const stores = backup.stores;
  const allowed = new Set<string>(EXPORT_STORES);
  for (const [name, rows] of Object.entries(stores)) {
    if (!allowed.has(name)) throw new Error(`مخزن غير معروف في النسخة: ${name}`);
    if (!Array.isArray(rows)) throw new Error(`بيانات المخزن ${name} غير صالحة`);
  }

  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const t = db.transaction([...EXPORT_STORES], 'readwrite');
      for (const name of EXPORT_STORES) t.objectStore(name).clear();
      for (const [name, rows] of Object.entries(stores)) {
        const store = t.objectStore(name);
        for (const row of rows) {
          if (!row || typeof row !== 'object') continue;
          store.put(row as object);
        }
      }
      t.oncomplete = () => resolve();
      t.onerror = () => reject(t.error ?? new Error('تعذر استيراد النسخة'));
      t.onabort = () => reject(t.error ?? new Error('أُلغيت عملية الاستيراد'));
    });
    const studentRows = stores[STORE_STUDENTS];
    const settingsRows = stores[STORE_SETTINGS];
    return {
      students: Array.isArray(studentRows) ? studentRows.length : 0,
      hasSettings: Array.isArray(settingsRows) && settingsRows.length > 0,
    };
  } finally {
    db.close();
  }
}

export interface StorageEstimate {
  usage: number;
  quota: number;
}

export async function getStorageEstimate(): Promise<StorageEstimate | null> {
  if (typeof navigator === 'undefined' || !navigator.storage?.estimate) return null;
  try {
    const estimate = await navigator.storage.estimate();
    return { usage: estimate.usage ?? 0, quota: estimate.quota ?? 0 };
  } catch {
    return null;
  }
}

/** الحجم التقريبي لبيانات طَلَاقة وحدها (JSON بلا مفتاح التوقيع) */
export async function getDataFootprint(): Promise<number> {
  const backup = await exportAllData();
  return new TextEncoder().encode(JSON.stringify(backup)).length;
}

export async function clearAllStudents(): Promise<void> {
  const db = await openDb();
  try {
    const done = (store: string) =>
      new Promise<void>((resolve, reject) => {
        const t = db.transaction(store, 'readwrite');
        t.objectStore(store).clear();
        t.oncomplete = () => resolve();
        t.onerror = () => reject(t.error);
      });
    await done(STORE_STUDENTS);
    await done(STORE_META);
    await done(STORE_PROGRESS);
    await done(STORE_SRS);
    await done(STORE_EXAMS);
    await done(STORE_KEYS);
    await done(STORE_CERTS);
    await done(STORE_LIBRARY);
    await done(STORE_CAREER);
    await done(STORE_CV);
    await done(STORE_SETTINGS);
  } finally {
    db.close();
  }
}

/** تصدير بطاقة الطالب كملف JSON — حقه في سيادة بياناته */
export function exportStudentFile(rec: StudentRecord): void {
  const body = JSON.stringify({ exportedBy: 'talaqa', exportedAt: new Date().toISOString(), student: rec }, null, 2);
  const blob = new Blob([body], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `talaqa-student-${rec.id}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** استيراد بطاقة طالب من ملف JSON والتحقق من سلامته */
export async function importStudentFile(file: File): Promise<StudentRecord> {
  const text = await file.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('الملف ليس JSON صالحاً');
  }
  const obj = parsed as { student?: unknown };
  const s = (obj && typeof obj === 'object' && 'student' in obj ? obj.student : parsed) as Partial<StudentRecord>;

  if (!s || typeof s !== 'object') throw new Error('لا توجد بيانات طالب في الملف');
  if (s.version !== 1) throw new Error('إصدار البطاقة غير مدعوم');
  if (typeof s.id !== 'string' || !s.id.startsWith('TALAQA-')) throw new Error('رقم الطالب غير صالح');
  if (typeof s.name !== 'string' || s.name.trim().length < 2) throw new Error('اسم الطالب غير صالح');
  if (typeof s.level !== 'string') throw new Error('المستوى غير صالح');
  if (typeof s.registeredAt !== 'string') throw new Error('تاريخ التسجيل غير صالح');

  const rec: StudentRecord = {
    version: 1,
    id: s.id,
    name: s.name.trim(),
    ageBand: typeof s.ageBand === 'string' ? s.ageBand : '—',
    goal: typeof s.goal === 'string' ? s.goal : '—',
    dailyMinutes: typeof s.dailyMinutes === 'number' ? s.dailyMinutes : 20,
    level: s.level as StudentRecord['level'],
    levelConfidence: (s.levelConfidence as StudentRecord['levelConfidence']) ?? 'medium',
    finalEstimate: typeof s.finalEstimate === 'number' ? s.finalEstimate : 45,
    sectionEstimates: (s.sectionEstimates as StudentRecord['sectionEstimates']) ?? { rules: 45, vocab: 45, reading: 45 },
    weakAreas: Array.isArray(s.weakAreas) ? s.weakAreas : [],
    registeredAt: s.registeredAt,
    estimatedAt: typeof s.estimatedAt === 'string' ? s.estimatedAt : s.registeredAt,
    ...(typeof s.certifiedLevel === 'string' ? { certifiedLevel: s.certifiedLevel as StudentRecord['certifiedLevel'] } : {}),
    ...(typeof s.certifiedAt === 'string' ? { certifiedAt: s.certifiedAt } : {}),
  };
  await saveStudent(rec);
  return rec;
}
