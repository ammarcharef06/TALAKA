/* طَلَاقَة — التخزين المحلي: IndexedDB على جهازك وحدك. لا خادم، لا حساب، لا تتبع. */
import type { Cefr, LevelExamResult, StudentRecord } from '../types';
import type { SrsState } from '../engine/srs';

const DB_NAME = 'talaqa';
const DB_VERSION = 4;
const STORE_STUDENTS = 'students';
const STORE_META = 'meta';
const STORE_PROGRESS = 'progress';
const STORE_SRS = 'srs-cards';
const STORE_EXAMS = 'exams';

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
