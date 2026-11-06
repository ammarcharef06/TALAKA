/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — التحقق المستقل من الشهادات
   يقرأ ملف JSON، يتحقق من التوقيع ECDSA والمفتاح العام والبصمة،
   ويعرض النتيجة دون الحاجة إلى حساب أو خادم.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';
import { shortFingerprint, verifyCertificate } from '../engine/certificate';
import type { CertificateVerification, SignedCertificate } from '../engine/certificate';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function renderResult(container: HTMLElement, result: CertificateVerification, cert: SignedCertificate | null): void {
  if (!result.valid || !cert) {
    container.innerHTML = `
      <article class="verify-result verify-invalid">
        <div class="verify-icon">✕</div>
        <h2>الشهادة غير صالحة</h2>
        <p>${escapeHtml(result.reason)}</p>
        <p class="verify-note">لم يتم التحقق من سلامة التوقيع. لا تعتمد هذه الشهادة.</p>
      </article>`;
    return;
  }
  const p = cert.payload;
  const meta = LEVEL_META[p.level];
  container.innerHTML = `
    <article class="verify-result verify-valid">
      <div class="verify-icon">✓</div>
      <h2>الشهادة سليمة وموقّعة</h2>
      <p class="verify-reason">${escapeHtml(result.reason)}</p>
      <dl class="verify-details">
        <div><dt>الطالب</dt><dd>${escapeHtml(p.studentName)}</dd></div>
        <div><dt>رقم الطالب</dt><dd dir="ltr">${escapeHtml(p.studentId)}</dd></div>
        <div><dt>المستوى المعتمد</dt><dd><b dir="ltr">${escapeHtml(p.level)}</b> — ${escapeHtml(meta.ar)}</dd></div>
        <div><dt>نوع الشهادة</dt><dd>${p.scope === 'full-path' ? 'إتمام المسار الكامل S0 → C2' : 'اعتماد مستوى'}</dd></div>
        <div><dt>تاريخ الإصدار</dt><dd>${escapeHtml(formatDate(p.issuedAt))}</dd></div>
        <div><dt>الدروس المكتملة</dt><dd dir="ltr">${p.lessonsCompleted}/${p.lessonsTotal}</dd></div>
        <div class="verify-full"><dt>رقم الشهادة</dt><dd dir="ltr">${escapeHtml(p.id)}</dd></div>
        <div class="verify-full"><dt>بصمة المفتاح العام</dt><dd><span dir="ltr" title="${escapeHtml(result.fingerprint ?? '')}">${escapeHtml(shortFingerprint(result.fingerprint ?? ''))}</span></dd></div>
      </dl>
      <p class="verify-note">السلامة الرقمية تثبت أن المحتوى لم يُعدّل بعد التوقيع. أما الاعتماد المؤسسي الخارجي فيتطلب مطابقة بصمة المفتاح مع الجهة المصدرة — وهذا ما لم نبنِه بعد.</p>
    </article>`;
}

function renderVerify(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen verify-screen">
  <header class="topbar topbar-paper">
    <button id="backToGateBtn" class="icon-btn" aria-label="عودة إلى البوابة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>التحقق من شهادة</b><small dir="ltr">CERTIFICATE VERIFICATION</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="verify-wrap">
    <section class="verify-hero">
      <span class="unit-kicker">تحقق مستقل — بلا حساب ولا خادم</span>
      <h1>هل هذه الشهادة أصلية؟</h1>
      <p>اختر ملف الشهادة (JSON) أو الصق محتواه. يتحقق طَلَاقَة من التوقيع ECDSA والمفتاح العام والبصمة، ويعرض النتيجة فوراً على جهازك.</p>
    </section>

    <section class="verify-panel">
      <label class="verify-file-label">
        <span>ملف الشهادة</span>
        <input id="verifyFile" type="file" accept="application/json,.json" />
      </label>
      <div class="verify-or">أو</div>
      <label class="verify-text-label">
        <span>الصق محتوى الشهادة</span>
        <textarea id="verifyText" rows="7" placeholder='{"algorithm":"ECDSA-P256-SHA256", ...}' dir="ltr"></textarea>
      </label>
      <button id="verifyBtn" class="btn btn-gold btn-xl">تحقق الآن</button>
      <p id="verifyError" class="verify-error" hidden></p>
    </section>

    <section id="verifyResult" class="verify-result-wrap" aria-live="polite"></section>

    <p class="exam-hall-note">◆ التحقق محلي بالكامل: لا يُرسل الملف إلى أي خادم، ولا يُحفظ بعد إغلاق الصفحة.</p>
  </main>
</div>`;

  root.querySelector('#backToGateBtn')!.addEventListener('click', () => go('gate'));

  const fileInput = root.querySelector<HTMLInputElement>('#verifyFile')!;
  const textArea = root.querySelector<HTMLTextAreaElement>('#verifyText')!;
  const errorEl = root.querySelector<HTMLElement>('#verifyError')!;
  const resultEl = root.querySelector<HTMLElement>('#verifyResult')!;

  root.querySelector('#verifyBtn')!.addEventListener('click', () => {
    void (async () => {
      errorEl.hidden = true;
      resultEl.innerHTML = '';
      const file = fileInput.files?.[0];
      let text = textArea.value.trim();
      if (file) text = await file.text();
      if (!text) {
        errorEl.textContent = 'اختر ملف شهادة أو الصق محتواه أولاً.';
        errorEl.hidden = false;
        return;
      }
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        errorEl.textContent = 'النص ليس JSON صالحاً — تأكد أنك نسخت ملف الشهادة كاملاً.';
        errorEl.hidden = false;
        return;
      }
      const result = await verifyCertificate(parsed);
      const cert = result.valid ? (parsed as SignedCertificate) : null;
      renderResult(resultEl, result, cert);
    })();
  });
}

registerScreen('verify', renderVerify);
