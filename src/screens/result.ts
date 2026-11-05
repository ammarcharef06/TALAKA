import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG } from '../ui/seal';
import { showConfirm, escapeHtml } from '../ui/confirm';
import { LEVEL_META, confidenceLabel, estimateToLevel, tagName, SECTION_NAMES } from '../engine/placement';
import type { SectionId } from '../types';

function renderResult(root: HTMLElement): void {
  const onboarding = session.onboarding;
  const result = session.result;

  if (!onboarding || !result) {
    // لا توجد نتيجة في الذاكرة — العودة إلى مكتب القبول
    go('acceptance');
    return;
  }

  const meta = LEVEL_META[result.level];
  const dateStr = new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

  const sectionRows = (['rules', 'vocab', 'reading'] as SectionId[])
    .map((s) => {
      const est = Math.round(result.sectionEstimates[s]);
      const lvl = estimateToLevel(result.sectionEstimates[s]);
      return `
      <div class="section-row">
        <span class="section-row-name">${SECTION_NAMES[s]}</span>
        <div class="section-bar"><i style="width:${est}%"></i></div>
        <span class="section-row-level" dir="ltr">${lvl}</span>
      </div>`;
    })
    .join('');

  const weakBlock = result.weakAreas.length
    ? `<ul class="weak-list">${result.weakAreas
        .map(
          (w) => `<li><span class="weak-tag">${escapeHtml(tagName(w.tag))}</span><span class="weak-count">${w.count === 1 ? 'ظهر مرة' : `تكرر ${w.count} مرات`}</span></li>`
        )
        .join('')}</ul>`
    : `<p class="no-weak">لا توجد أخطاء تُذكر — أداء نظيف تماماً في هذا الاختبار.</p>`;

  root.innerHTML = `
<div class="screen result-screen">
  <header class="topbar topbar-paper">
    <div class="topbar-titles"><b>مكتب القبول — صحيفة النتيجة</b><small dir="ltr">ADMISSIONS — OFFICIAL RESULT</small></div>
    <div class="spacer"></div>
    <button id="printResultBtn" class="icon-btn" title="طباعة الصحيفة" aria-label="طباعة الصحيفة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5"/><path d="M7 17H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-3"/><rect x="7" y="14" width="10" height="7"/></svg></button>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="result-wrap">
    <article class="result-document" aria-label="صحيفة نتيجة تحديد المستوى">
      <div class="doc-watermark" aria-hidden="true">ط</div>

      <header class="doc-head">
        ${sealSVG(64, 'onPaper')}
        <div class="doc-head-titles">
          <b>أَكَادِيمِيَّة طَلَاقَة</b>
          <small dir="ltr">TALAQA — THE SOVEREIGN ENGLISH ACADEMY FOR ARABS</small>
          <span class="doc-line">صَحِيفَة نَتِيجَة تَحْدِيد المُسْتَوى — Placement Examination Result</span>
        </div>
        <div class="doc-head-side"><span class="doc-conf">رسمي<br/>CONFIDENTIAL</span></div>
      </header>

      <div class="doc-meta"><span>اسم الطالب: <b>${escapeHtml(onboarding.name)}</b></span><span>التاريخ: <b>${escapeHtml(dateStr)}</b></span></div>

      <div class="doc-verdict">
        <div class="doc-level-block">
          <span class="doc-level-code" dir="ltr">${escapeHtml(result.level)}</span>
          <span class="doc-level-ar">${escapeHtml(meta.ar)}</span>
          <span class="doc-level-en" dir="ltr">${escapeHtml(meta.en)}</span>
        </div>
        <div class="doc-stamp" aria-hidden="true">${sealSVG(92, 'onPaper')}<span>مُقِرّ بِهِ</span></div>
      </div>

      <p class="doc-confidence">${escapeHtml(confidenceLabel(result.confidence))} · ${result.correctCount} صواب من ${result.totalQuestions} سؤالاً</p>

      <section class="doc-sections" aria-label="تفاصيل الأقسام">
        <h3>تفصيل الأداء حسب القسم</h3>
        ${sectionRows}
      </section>

      <section class="doc-weak" aria-label="أولويات العلاج">
        <h3>أولويات علاجك — أخطاء العرب الشائعة التي ظهرت لديك</h3>
        ${weakBlock}
      </section>

      <section class="doc-plan">
        <h3>قرار مكتب القبول</h3>
        <p>${escapeHtml(meta.advice)}</p>
        <p class="doc-plan-note">خطتك الزمنية: <b>${onboarding.dailyMinutes} دقيقة يومياً</b> — والجهد بيدك، والباب لا يُغلق أبداً.</p>
      </section>

      <footer class="doc-foot"><span dir="ltr">TALAQA ACADEMY · ADMISSIONS OFFICE</span><i>◆</i><span>هذه الصحيفة تُختم بختم الأكاديمية عند التسجيل</span></footer>
    </article>

    <div class="result-actions">
      <button id="toRegistrationBtn" class="btn btn-primary btn-xl">إتمام التسجيل واستلام رقمك الطالبي</button>
      <button id="retakeBtn" class="btn btn-ghost">إعادة الاختبار (هذا قرارك وحدك)</button>
    </div>
  </main>
</div>`;

  root.querySelector('#toRegistrationBtn')!.addEventListener('click', () => go('card'));
  root.querySelector('#printResultBtn')!.addEventListener('click', () => window.print());
  root.querySelector('#retakeBtn')!.addEventListener('click', () => {
    void showConfirm('إعادة الاختبار تلغي هذه النتيجة نهائياً. متابعة؟', 'نعم، أعد الاختبار').then((ok) => {
      if (ok) {
        session.result = null;
        go('exam');
      }
    });
  });
}

registerScreen('result', renderResult);
