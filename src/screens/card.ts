import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG, barcodeSVG, initialsOf } from '../ui/seal';
import { escapeHtml } from '../ui/confirm';
import { LEVEL_META, confidenceLabel } from '../engine/placement';
import { saveStudent, exportStudentFile } from '../store/db';
import type { StudentRecord } from '../types';

const CHECK_LETTERS = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط'];

function hashString(input: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function generateStudentId(name: string): string {
  const buf = new Uint16Array(1);
  crypto.getRandomValues(buf);
  const serial = 1000 + (buf[0] % 9000);
  const base = `TALAQA-2026-${serial}`;
  const check = CHECK_LETTERS[hashString(`${base}|${name}`) % CHECK_LETTERS.length];
  return `${base}-${check}`;
}

function formatFullDate(iso: string): string {
  return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
}

function renderCard(root: HTMLElement): void {
  const onboarding = session.onboarding;
  const result = session.result;

  if (!onboarding || !result) {
    go('acceptance');
    return;
  }

  /* ───────── المرحلة الأولى: طلب الالتحاق الرسمي ───────── */
  root.innerHTML = `
<div class="screen card-screen">
  <header class="topbar topbar-paper">
    <div class="topbar-titles"><b>مكتب القبول — طلب الالتحاق</b><small dir="ltr">REGISTRATION FORM</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="registration-wrap">
    <article class="registration-document">
      <header class="doc-head doc-head-compact">
        ${sealSVG(52, 'onPaper')}
        <div class="doc-head-titles">
          <b>أكاديمية طَلَاقَة</b>
          <small dir="ltr">TALAQA ACADEMY — REGISTRAR'S OFFICE</small>
          <span class="doc-line">طَلَب التِحاق — طلب تسجيل رسمي</span>
        </div>
      </header>

      <dl class="reg-table">
        <div><dt>الاسم الكامل</dt><dd>${escapeHtml(onboarding.name)}</dd></div>
        <div><dt>الفئة العمرية</dt><dd>${escapeHtml(onboarding.ageBand)}</dd></div>
        <div><dt>الهدف من الدراسة</dt><dd>${escapeHtml(onboarding.goal)}</dd></div>
        <div><dt>الالتزام اليومي</dt><dd>${onboarding.dailyMinutes} دقيقة يومياً — بمرونة مطلقة</dd></div>
        <div><dt>المستوى المُثبت</dt><dd><span dir="ltr" class="reg-level">${escapeHtml(result.level)}</span> — ${escapeHtml(LEVEL_META[result.level].ar)} (${escapeHtml(confidenceLabel(result.confidence).split('—')[0].trim())})</dd></div>
      </dl>

      <label class="reg-consent">
        <input type="checkbox" id="consentCheck"/>
        <span>أقرّ بأن بياناتي صحيحة، وأوافق على حفظها <b>محلياً على هذا الجهاز وحده</b> — لا تغادر طَلَاقَة أبداً، ولا تُرسل لأي جهة، ويحق لي تنزيلها أو مسحها في أي وقت.</span>
      </label>

      <button id="confirmRegistrationBtn" class="btn btn-gold btn-xl" disabled>تأكيد التسجيل واستلام رقمك الطالبي</button>
      <p class="reg-note">بعد التأكيد، يُولّد لك رقم طالب دائم وبطاقة طالب رقمية مختومة — وتصبح عضواً رسمياً في أكاديمية طَلَاقَة.</p>
    </article>
  </main>
</div>`;

  const consent = root.querySelector<HTMLInputElement>('#consentCheck')!;
  const confirmBtn = root.querySelector<HTMLButtonElement>('#confirmRegistrationBtn')!;
  consent.addEventListener('change', () => {
    confirmBtn.disabled = !consent.checked;
  });

  confirmBtn.addEventListener('click', () => {
    const now = new Date().toISOString();
    const rec: StudentRecord = {
      version: 1,
      id: generateStudentId(onboarding.name),
      name: onboarding.name.trim(),
      ageBand: onboarding.ageBand,
      goal: onboarding.goal,
      dailyMinutes: onboarding.dailyMinutes,
      level: result.level,
      levelConfidence: result.confidence,
      finalEstimate: result.finalEstimate,
      sectionEstimates: result.sectionEstimates,
      weakAreas: result.weakAreas,
      registeredAt: now,
      estimatedAt: result.estimatedAt,
    };
    void saveStudent(rec).then(() => renderStudentCard(root, rec)).catch(() => {
      // لو فشل IndexedDB (مثلاً وضع التصفح الخاص): اعرض البطاقة والملف بديلاً
      renderStudentCard(root, rec, true);
    });
  });
}

/* ───────── المرحلة الثانية: بطاقة الطالب الرسمية ───────── */
function renderStudentCard(root: HTMLElement, rec: StudentRecord, storageFailed = false): void {
  const meta = LEVEL_META[rec.level];
  const dateStr = formatFullDate(rec.registeredAt);

  root.innerHTML = `
<div class="screen card-screen card-issued-screen">
  <header class="topbar topbar-paper">
    <div class="topbar-titles"><b>تم تسجيلك رسمياً</b><small dir="ltr">REGISTRATION COMPLETE</small></div>
    <div class="spacer"></div>
    <button id="printCardBtn" class="icon-btn" title="طباعة البطاقة" aria-label="طباعة البطاقة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5"/><path d="M7 17H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-3"/><rect x="7" y="14" width="10" height="7"/></svg></button>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="card-wrap">
    <p class="issued-banner">◆ صدرت بطاقتك الطالبية — أهلاً بك في عائلة طَلَاقَة ◆</p>

    <article class="id-card" id="idCard" aria-label="بطاقة طالب طلاقة">
      <div class="id-card-inner">
        <header class="id-card-head">
          <div class="id-card-brand"><b>طَلَاقَة</b><small dir="ltr">TALAQA ACADEMY</small></div>
          <span class="id-card-type">بطاقة طالب<br/><em dir="ltr">STUDENT ID</em></span>
        </header>
        <div class="id-card-body">
          <div class="id-avatar">${initialsOf(rec.name)}</div>
          <dl class="id-fields">
            <div><dt>الاسم / Name</dt><dd>${escapeHtml(rec.name)}</dd></div>
            <div><dt>رقم الطالب / ID No.</dt><dd class="id-number" dir="ltr">${escapeHtml(rec.id)}</dd></div>
            <div class="id-fields-split">
              <div><dt>المستوى / Level</dt><dd><span class="id-level" dir="ltr">${escapeHtml(rec.level)}</span> <small>${escapeHtml(meta.ar)}</small></dd></div>
              <div><dt>تاريخ الالتحاق</dt><dd>${escapeHtml(dateStr)}</dd></div>
            </div>
          </dl>
          <div class="id-seal">${sealSVG(64, 'onDark')}</div>
        </div>
        <footer class="id-card-foot">
          <div class="id-barcode">${barcodeSVG(rec.id)}<span dir="ltr">${escapeHtml(rec.id)}</span></div>
          <span class="id-motto">من الصفر إلى C2 ◆ From Zero to C2</span>
        </footer>
      </div>
    </article>

    <div class="card-actions">
      <button id="downloadBtn" class="btn btn-primary">تحميل ملف بطاقتي (JSON — نسخة سيادتي)</button>
      <button id="enterBuildingBtn" class="btn btn-gold">دخول مبنى الأكاديمية — رحلتك تبدأ الآن</button>
    </div>

    <p class="card-warning"><b>تنبيه رسمي من مكتب التسجيل:</b> احفظ ملف بطاقتك الآن — لو مسح المتصفح بياناته (الكوكيز أو التخزين المحلي) تضيع هويتك ولا يُسجَّل أنك كنت هنا. <b>الملف هو أنت.</b></p>
    ${storageFailed ? '<p class="card-warning">تنبيه: تعذر الحفظ المحلي على هذا الجهاز (غالباً وضع التصفح الخاص). بطاقتك تعمل الآن، لكنها لن تُحفَظ — حمّل ملفها فوراً.</p>' : ''}
  </main>
</div>`;

  root.querySelector('#downloadBtn')!.addEventListener('click', () => exportStudentFile(rec));
  root.querySelector('#enterBuildingBtn')!.addEventListener('click', () => go('building'));
  root.querySelector('#printCardBtn')!.addEventListener('click', () => window.print());
}

registerScreen('card', renderCard);
