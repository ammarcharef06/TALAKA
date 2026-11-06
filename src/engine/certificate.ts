/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — الشهادة الموقعة رقمياً (Web Crypto / ECDSA P-256)
   التوقيع محلي بلا خادم. التحقق يتم بالمفتاح العام المدمج في ملف
   الشهادة، وبصمة المفتاح تُعرض للتحقق اليدوي من الجهة المصدرة.
   ═══════════════════════════════════════════════════════════════ */
import { EXAM_LEVELS } from './levelExam';
import type { ExamLevel, LevelExamResult, StudentRecord } from '../types';

export const CERTIFICATE_ALGORITHM = 'ECDSA-P256-SHA256';
export const CERTIFICATE_VERSION = 1;

export interface CertificateExamEntry {
  level: ExamLevel;
  score: number;
  passMark: number;
  takenAt: string;
}

export interface CertificatePayload {
  version: 1;
  kind: 'talaqa-certificate';
  id: string;
  studentId: string;
  studentName: string;
  level: ExamLevel;
  scope: 'full-path' | 'level';
  issuedAt: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  certifiedLevels: ExamLevel[];
  exams: CertificateExamEntry[];
  statementAr: string;
  statementEn: string;
}

export interface SignedCertificate {
  algorithm: typeof CERTIFICATE_ALGORITHM;
  issuer: {
    name: string;
    publicKeyJwk: JsonWebKey;
  };
  fingerprint: string;
  payload: CertificatePayload;
  signature: string;
}

export interface CertificateKeyPair {
  privateKey: CryptoKey;
  publicKeyJwk: JsonWebKey;
  fingerprint: string;
}

export interface CertificateVerification {
  valid: boolean;
  reason: string;
  fingerprint: string | null;
}

const encoder = new TextEncoder();

/** JSON قانوني: ترتيب مفاتيح ثابت حتى تتحقق البصمة في أي متصفح */
export function canonicalJson(value: unknown): string {
  const walk = (v: unknown): unknown => {
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      const obj = v as Record<string, unknown>;
      const out: Record<string, unknown> = {};
      for (const key of Object.keys(obj).sort()) out[key] = walk(obj[key]);
      return out;
    }
    return v;
  };
  return JSON.stringify(walk(value));
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function base64ToBytes(b64: string): Uint8Array<ArrayBuffer> {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function bytesToHex(bytes: Uint8Array): string {
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** بصمة المفتاح العام — تُطبع على الشهادة للمقارنة اليدوية */
export async function fingerprintJwk(jwk: JsonWebKey): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(canonicalJson(jwk)));
  return bytesToHex(new Uint8Array(digest));
}

export async function generateSigningKeyPair(): Promise<CertificateKeyPair> {
  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['sign', 'verify']
  );
  const publicKeyJwk = await crypto.subtle.exportKey('jwk', keyPair.publicKey);
  return {
    privateKey: keyPair.privateKey,
    publicKeyJwk,
    fingerprint: await fingerprintJwk(publicKeyJwk),
  };
}

/** توقيع المحتوى (لا يشمل التوقيع نفسه) */
export async function signCertificate(
  payload: CertificatePayload,
  privateKey: CryptoKey,
  publicKeyJwk: JsonWebKey
): Promise<SignedCertificate> {
  const signature = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    privateKey,
    encoder.encode(canonicalJson(payload))
  );
  return {
    algorithm: CERTIFICATE_ALGORITHM,
    issuer: { name: 'TALAQA ACADEMY', publicKeyJwk },
    fingerprint: await fingerprintJwk(publicKeyJwk),
    payload,
    signature: bytesToBase64(new Uint8Array(signature)),
  };
}

/** يحقق سلامة الشهادة: التوقيع + بصمة المفتاح + بنية المحتوى */
export async function verifyCertificate(cert: unknown): Promise<CertificateVerification> {
  try {
    const c = cert as Partial<SignedCertificate>;
    if (!c || typeof c !== 'object') return { valid: false, reason: 'الملف ليس شهادة صالحة.', fingerprint: null };
    if (c.algorithm !== CERTIFICATE_ALGORITHM) return { valid: false, reason: 'خوارزمية التوقيع غير مدعومة.', fingerprint: null };
    if (!c.payload || c.payload.kind !== 'talaqa-certificate' || c.payload.version !== CERTIFICATE_VERSION) {
      return { valid: false, reason: 'محتوى الشهادة غير معروف أو إصداره غير مدعوم.', fingerprint: null };
    }
    if (!c.issuer?.publicKeyJwk || typeof c.signature !== 'string') {
      return { valid: false, reason: 'بيانات المفتاح أو التوقيع ناقصة.', fingerprint: null };
    }
    const fingerprint = await fingerprintJwk(c.issuer.publicKeyJwk);
    if (c.fingerprint && c.fingerprint !== fingerprint) {
      return { valid: false, reason: 'بصمة المفتاح لا تطابق المفتاح المرفق — الشهادة معدّلة.', fingerprint };
    }
    const publicKey = await crypto.subtle.importKey(
      'jwk',
      c.issuer.publicKeyJwk,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['verify']
    );
    const ok = await crypto.subtle.verify(
      { name: 'ECDSA', hash: 'SHA-256' },
      publicKey,
      base64ToBytes(c.signature),
      encoder.encode(canonicalJson(c.payload))
    );
    return ok
      ? { valid: true, reason: 'التوقيع سليم والمحتوى لم يُعدّل.', fingerprint }
      : { valid: false, reason: 'التوقيع غير صالح — المحتوى عُدّل بعد الإصدار.', fingerprint };
  } catch {
    return { valid: false, reason: 'تعذر قراءة الشهادة أو التحقق من توقيعها.', fingerprint: null };
  }
}

export interface CertificateInput {
  student: StudentRecord;
  results: LevelExamResult[];
  lessonsCompleted: number;
  lessonsTotal: number;
}

/** يبني محتوى الشهادة من أعلى اعتماد — وأفضل درجة لكل مستوى */
export function createCertificatePayload(input: CertificateInput, issuedAt = new Date().toISOString()): CertificatePayload {
  const bestByLevel = new Map<ExamLevel, LevelExamResult>();
  for (const r of input.results) {
    if (!r.passed) continue;
    const prev = bestByLevel.get(r.level);
    if (!prev || r.score > prev.score || (r.score === prev.score && Date.parse(r.takenAt) > Date.parse(prev.takenAt))) {
      bestByLevel.set(r.level, r);
    }
  }
  const certifiedLevels = EXAM_LEVELS.filter((l) => bestByLevel.has(l));
  if (certifiedLevels.length === 0) throw new Error('لا يوجد اعتماد مستوى لبناء شهادة.');
  const level = certifiedLevels[certifiedLevels.length - 1];
  const fullPath = level === 'C2' && certifiedLevels.length === EXAM_LEVELS.length;
  const issued = issuedAt;
  const id = `TALAQA-CERT-${level}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  const exams: CertificateExamEntry[] = certifiedLevels.map((l) => {
    const r = bestByLevel.get(l)!;
    return { level: l, score: r.score, passMark: r.passMark, takenAt: r.takenAt };
  });

  const statementAr = fullPath
    ? 'تشهد أكاديمية طَلَاقَة بأن الطالب/الطالبة أتم المسار الأكاديمي الكامل من الصفر إلى مستوى C2، واجتاز امتحانات الاعتماد الستة المعتمدة.'
    : `تشهد أكاديمية طَلَاقَة بأن الطالب/الطالبة اجتاز امتحان المستوى ${level} المعتمد، وأُدرج اعتماده في السجل الأكاديمي.`;
  const statementEn = fullPath
    ? 'TALAQA Academy certifies that the student has completed the full academic path from Zero to C2 and passed all six certified examinations.'
    : `TALAQA Academy certifies that the student has passed the certified ${level} examination.`;

  return {
    version: CERTIFICATE_VERSION,
    kind: 'talaqa-certificate',
    id,
    studentId: input.student.id,
    studentName: input.student.name,
    level,
    scope: fullPath ? 'full-path' : 'level',
    issuedAt: issued,
    lessonsCompleted: input.lessonsCompleted,
    lessonsTotal: input.lessonsTotal,
    certifiedLevels,
    exams,
    statementAr,
    statementEn,
  };
}

export function certificateToJson(cert: SignedCertificate): string {
  return JSON.stringify(cert, null, 2);
}

export function certificateFileName(cert: SignedCertificate): string {
  return `talaqa-certificate-${cert.payload.level}-${cert.payload.id}.json`;
}

export function shortFingerprint(fingerprint: string): string {
  return fingerprint ? `${fingerprint.slice(0, 8)}…${fingerprint.slice(-8)}` : '—';
}
