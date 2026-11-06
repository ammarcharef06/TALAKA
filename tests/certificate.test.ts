import { describe, expect, it } from 'vitest';
import {
  canonicalJson,
  certificateToJson,
  createCertificatePayload,
  generateSigningKeyPair,
  signCertificate,
  verifyCertificate,
} from '../src/engine/certificate';
import { EXAM_LEVELS } from '../src/engine/levelExam';
import type { ExamLevel, LevelExamResult, StudentRecord } from '../src/types';

const student: StudentRecord = {
  version: 1,
  id: 'TALAQA-TEST-0001-خ',
  name: 'طالب الاختبار',
  ageBand: '25-34',
  goal: 'العمل',
  dailyMinutes: 30,
  level: 'C1',
  levelConfidence: 'high',
  finalEstimate: 80,
  sectionEstimates: { rules: 80, vocab: 80, reading: 80 },
  weakAreas: [],
  registeredAt: '2026-11-01T10:00:00.000Z',
  estimatedAt: '2026-11-01T10:00:00.000Z',
  certifiedLevel: 'C2',
};

function result(level: ExamLevel, score: number, takenAt: string): LevelExamResult {
  return {
    id: `exam-${level}-${takenAt}`,
    studentId: student.id,
    level,
    score,
    correctCount: 12,
    totalQuestions: 15,
    passMark: 80,
    passed: score >= 80,
    sectionScores: {
      rules: { correct: 4, total: 5 },
      vocab: { correct: 4, total: 5 },
      reading: { correct: 4, total: 5 },
    },
    weakAreas: [],
    takenAt,
    durationSeconds: 500,
  };
}

const allPassed = EXAM_LEVELS.map((level, i) => result(level, 85 + i, `2026-11-0${i + 1}T10:00:00.000Z`));

describe('الشهادة — التوقيع والتحقق', () => {
  it('canonicalJson يعطي الناتج نفسه مهما اختلف ترتيب المفاتيح', () => {
    expect(canonicalJson({ b: 1, a: { d: 2, c: 3 } })).toBe(canonicalJson({ a: { c: 3, d: 2 }, b: 1 }));
  });

  it('شهادة موقعة تمر من التحقق، والملف JSON يعود كاملاً', async () => {
    const pair = await generateSigningKeyPair();
    const payload = createCertificatePayload({
      student,
      results: allPassed,
      lessonsCompleted: 42,
      lessonsTotal: 42,
    });
    const cert = await signCertificate(payload, pair.privateKey, pair.publicKeyJwk);
    const check = await verifyCertificate(cert);
    expect(check.valid).toBe(true);
    expect(check.fingerprint).toBe(pair.fingerprint);
    expect(cert.payload.scope).toBe('full-path');
    expect(cert.payload.exams).toHaveLength(6);
    expect(JSON.parse(certificateToJson(cert)).payload.studentName).toBe(student.name);
  });

  it('تعديل أي حقل في المحتوى يُبطل التوقيع', async () => {
    const pair = await generateSigningKeyPair();
    const payload = createCertificatePayload({ student, results: allPassed, lessonsCompleted: 42, lessonsTotal: 42 });
    const cert = await signCertificate(payload, pair.privateKey, pair.publicKeyJwk);
    const tampered = { ...cert, payload: { ...cert.payload, studentName: 'شخص آخر' } };
    const check = await verifyCertificate(tampered);
    expect(check.valid).toBe(false);
    expect(check.reason).toContain('التوقيع غير صالح');
  });

  it('تعديل التوقيع أو المفتاح أو البصمة يُبطل الشهادة', async () => {
    const pair = await generateSigningKeyPair();
    const other = await generateSigningKeyPair();
    const payload = createCertificatePayload({ student, results: allPassed, lessonsCompleted: 42, lessonsTotal: 42 });
    const cert = await signCertificate(payload, pair.privateKey, pair.publicKeyJwk);

    const badSignature = { ...cert, signature: cert.signature.slice(0, -4) + 'AAAA' };
    expect((await verifyCertificate(badSignature)).valid).toBe(false);

    const badKey = { ...cert, issuer: { ...cert.issuer, publicKeyJwk: other.publicKeyJwk }, fingerprint: other.fingerprint };
    expect((await verifyCertificate(badKey)).valid).toBe(false);

    const badFingerprint = { ...cert, fingerprint: '0'.repeat(64) };
    expect((await verifyCertificate(badFingerprint)).valid).toBe(false);
  });

  it('شهادة مستوى واحد ليست شهادة مسار كامل، وتختار أفضل درجة', async () => {
    const pair = await generateSigningKeyPair();
    const results = [result('A1', 80, '2026-11-01T10:00:00.000Z'), result('A1', 95, '2026-11-02T10:00:00.000Z')];
    const payload = createCertificatePayload({ student, results, lessonsCompleted: 12, lessonsTotal: 42 });
    expect(payload.level).toBe('A1');
    expect(payload.scope).toBe('level');
    expect(payload.exams[0].score).toBe(95);
    const cert = await signCertificate(payload, pair.privateKey, pair.publicKeyJwk);
    expect((await verifyCertificate(cert)).valid).toBe(true);
  });

  it('يرفض بناء شهادة بلا أي اعتماد', () => {
    expect(() =>
      createCertificatePayload({
        student,
        results: [result('A1', 70, '2026-11-01T10:00:00.000Z')],
        lessonsCompleted: 0,
        lessonsTotal: 42,
      })
    ).toThrow();
  });
});
