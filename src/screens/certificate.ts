/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — الشهادة الموقعة رقمياً
   تُبنى من أعلى اعتماد، تُوقّع بمفتاح ECDSA محلي، وتُصدَّر كملف
   JSON يحمل مفتاحه العام للتحقق في أي نسخة من التطبيق.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml, toast } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';
import { highestCertifiedLevel } from '../engine/levelExam';
import {
  certificateFileName,
  certificateToJson,
  createCertificatePayload,
  generateSigningKeyPair,
  shortFingerprint,
  signCertificate,
} from '../engine/certificate';
import {
  getAllLevelExamResults,
  getCurrentStudent,
  getLatestCertificate,
  getProgressMap,
  getSigningKey,
  saveCertificate,
  saveSigningKey,
} from '../store/db';
import { UNITS, allLessonsInOrder } from '../data/academy/course';
import type { SignedCertificate } from '../engine/certificate';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function renderEmpty(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen certificate-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الشهادة والتوثيق</b><small dir="ltr">CERTIFICATE &amp; VERIFICATION</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>
  <main class="result-wrap">
    <article class="review-empty certificate-empty">
      <div class="done-seal">${sealSVG(88, 'onPaper')}</div>
      <h1>لا شهادة بعد</h1>
      <p class="review-empty-sub">تُصدر الشهادة بعد اجتياز أول امتحان معتمد. اجتز A1 أولاً، وستجد شهادتك هنا موقعة رقمياً وقابلة للتحقق.</p>
      <button id="toExamHallBtn" class="btn btn-gold btn-xl">اذهب إلى قاعة الامتحانات</button>
      <button id="backToBuildingBtn2" class="btn btn-ghost">العودة إلى المبنى</button>
    </article>
  </main>
</div>`;
  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));
  root.querySelector('#backToBuildingBtn2')!.addEventListener('click', () => go('building'));
  root.querySelector('#toExamHallBtn')!.addEventListener('click', () => go('examHall'));
}

function renderCertificate(root: HTMLElement, cert: SignedCertificate): void {
  const p = cert.payload;
  const meta = LEVEL_META[p.level];
  const full = p.scope === 'full-path';
  const examsRows = p.exams
    .map(
      (e) => `
      <tr>
        <td><b dir="ltr">${escapeHtml(e.level)}</b></td>
        <td dir="ltr">${e.score}%</td>
        <td dir="ltr">${e.passMark}%</td>
        <td>${escapeHtml(formatDate(e.takenAt))}</td>
      </tr>`
    )
    .join('');

  root.innerHTML = `
<div class="screen certificate-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الشهادة والتوثيق</b><small dir="ltr">SIGNED CERTIFICATE</small></div>
    <div class="spacer"></div>
    <button id="printCertBtn" class="icon-btn" title="طباعة الشهادة" aria-label="طباعة الشهادة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5"/><path d="M7 17H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-3"/><rect x="7" y="14" width="10" height="7"/></svg></button>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="result-wrap">
    <article class="result-document certificate-document ${full ? 'certificate-full' : ''}" aria-label="شهادة طلاقة الموقعة">
      <div class="doc-watermark" aria-hidden="true">ط</div>

      <header class="doc-head">
        ${sealSVG(64, 'onPaper')}
        <div class="doc-head-titles">
          <b>أَكَادِيمِيَّة طَلَاقَة</b>
          <small dir="ltr">TALAQA — THE SOVEREIGN ENGLISH ACADEMY FOR ARABS</small>
          <span class="doc-line">${full ? 'شَهَادَة إِتْمَام المَسَار الأَكَادِيمِي — Certificate of Completion' : 'شَهَادَة اعْتِمَاد مُسْتَوَى — Certificate of Certification'}</span>
        </div>
        <div class="doc-head-side"><span class="doc-conf">موقّعة<br/>SIGNED</span></div>
      </header>

      <div class="doc-meta">
        <span>الطالب: <b>${escapeHtml(p.studentName)}</b></span>
        <span>رقم الطالب: <b dir="ltr">${escapeHtml(p.studentId)}</b></span>
        <span>تاريخ الإصدار: <b>${escapeHtml(formatDate(p.issuedAt))}</b></span>
      </div>

      <section class="cert-hero">
        <span class="unit-kicker">${full ? 'من الصفر إلى C2' : 'اعتماد مستوى معتمد'}</span>
        <h1 class="cert-title">${full ? 'شهادة إتمام المسار' : 'شهادة اعتماد مستوى'}</h1>
        <p class="cert-pre">تشهد أكاديمية طَلَاقَة بأن</p>
        <h2 class="cert-name">${escapeHtml(p.studentName)}</h2>
        <p class="cert-statement">${escapeHtml(p.statementAr)}</p>
        <p class="cert-statement-en" dir="ltr">${escapeHtml(p.statementEn)}</p>
        <div class="cert-level"><b dir="ltr">${escapeHtml(p.level)}</b><span>${escapeHtml(meta.ar)} · ${escapeHtml(meta.en)}</span></div>
      </section>

      <section class="transcript-section" aria-label="الامتحانات المعتمدة">
        <h3>الامتحانات المعتمدة المدرجة في الشهادة</h3>
        <table class="transcript-table">
          <thead><tr><th>المستوى</th><th>الدرجة</th><th>حد النجاح</th><th>التاريخ</th></tr></thead>
          <tbody>${examsRows}</tbody>
        </table>
      </section>

      <section class="cert-verification" aria-label="بيانات التحقق">
        <div>
          <span class="cert-verify-label">رقم الشهادة</span>
          <b class="cert-verify-id" dir="ltr">${escapeHtml(p.id)}</b>
        </div>
        <div>
          <span class="cert-verify-label">بصمة المفتاح العام (SHA-256)</span>
          <b class="cert-verify-fingerprint" dir="ltr" title="${escapeHtml(cert.fingerprint)}">${escapeHtml(shortFingerprint(cert.fingerprint))}</b>
        </div>
        <div>
          <span class="cert-verify-label">خوارزمية التوقيع</span>
          <b dir="ltr">${escapeHtml(cert.algorithm)}</b>
        </div>
        <div>
          <span class="cert-verify-label">الدروس المكتملة</span>
          <b dir="ltr">${p.lessonsCompleted}/${p.lessonsTotal}</b>
        </div>
      </section>

      <p class="cert-honest">هذه الشهادة موقعة بمفتاح ECDSA محلي على هذا الجهاز، وملفها يحمل مفتاحه العام؛ يمكن لأي نسخة من طَلَاقَة التحقق من سلامتها. التحقق المؤسسي الخارجي يحتاج مطابقة بصمة المفتاح مع الجهة المصدرة — لا نقدّم ضماناً خارجياً لم نبنِه بعد.</p>

      <footer class="doc-foot"><span dir="ltr">TALAQA ACADEMY · REGISTRAR'S OFFICE</span><i>◆</i><span>الخطأ مادة التعلم — والإصرار مادة النجاح</span></footer>
    </article>

    <div class="result-actions">
      <button id="downloadCertBtn" class="btn btn-primary btn-xl">حمّل ملف الشهادة الموقّع (JSON)</button>
      <div class="cert-actions-row">
        <button id="verifyCertBtn" class="btn btn-gold">تحقق من شهادة أخرى</button>
        <button id="openTranscriptBtn" class="btn btn-ghost">السجل الأكاديمي</button>
        <button id="backToBuildingBtn2" class="btn btn-ghost">العودة إلى المبنى</button>
      </div>
    </div>
  </main>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));
  root.querySelector('#backToBuildingBtn2')!.addEventListener('click', () => go('building'));
  root.querySelector('#printCertBtn')!.addEventListener('click', () => window.print());
  root.querySelector('#verifyCertBtn')!.addEventListener('click', () => go('verify'));
  root.querySelector('#openTranscriptBtn')!.addEventListener('click', () => go('transcript'));
  root.querySelector('#downloadCertBtn')!.addEventListener('click', () => {
    const blob = new Blob([certificateToJson(cert)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = certificateFileName(cert);
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('حُفظ ملف الشهادة — هويتك الأكاديمية تسافر معك');
  });
}

function renderCertificateError(root: HTMLElement, message: string): void {
  root.innerHTML = `
<div class="screen certificate-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الشهادة والتوثيق</b><small dir="ltr">CERTIFICATE</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>
  <main class="result-wrap">
    <article class="review-empty">
      <h1>تعذر إصدار الشهادة</h1>
      <p class="review-empty-sub">${escapeHtml(message)}</p>
      <button id="backToBuildingBtn2" class="btn btn-gold btn-xl">العودة إلى المبنى</button>
    </article>
  </main>
</div>`;
  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));
  root.querySelector('#backToBuildingBtn2')!.addEventListener('click', () => go('building'));
}

function renderCertificateScreen(root: HTMLElement): void {
  root.innerHTML = `<div class="screen certificate-screen"><main class="result-wrap"><p class="review-empty-sub">جارٍ تجهيز شهادتك الموقعة…</p></main></div>`;

  void Promise.all([getCurrentStudent(), getProgressMap(), getAllLevelExamResults()])
    .then(async ([student, progress, allResults]) => {
      if (!student) {
        go('gate');
        return;
      }
      const results = allResults.filter((r) => r.studentId === student.id);
      const level = highestCertifiedLevel(results);
      if (!level) {
        renderEmpty(root);
        return;
      }

      let cert = await getLatestCertificate(student.id, level);
      if (!cert) {
        let key = await getSigningKey();
        if (!key) {
          const pair = await generateSigningKeyPair();
          key = {
            id: 'cert-signing',
            privateKey: pair.privateKey,
            publicKeyJwk: pair.publicKeyJwk,
            fingerprint: pair.fingerprint,
            createdAt: new Date().toISOString(),
          };
          await saveSigningKey(key);
        }
        const completed = allLessonsInOrder().filter(({ lesson }) => progress[lesson.id]).length;
        const payload = createCertificatePayload({
          student,
          results,
          lessonsCompleted: completed,
          lessonsTotal: UNITS.flatMap((u) => u.lessons).length,
        });
        cert = await signCertificate(payload, key.privateKey, key.publicKeyJwk);
        await saveCertificate(cert);
      }
      renderCertificate(root, cert);
    })
    .catch((err: unknown) => {
      renderCertificateError(root, err instanceof Error ? err.message : 'تعذر الوصول إلى Web Crypto أو بيانات الاعتماد.');
    });
}

registerScreen('certificate', renderCertificateScreen);
