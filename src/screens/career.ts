/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المسار المهني (Career Hub)
   مقابلات العمل + صانع السيرة الذاتية — بلا خادم، بلا كلفة
   المحرك حتمي يعمل لصالحك لصقل ما لديك، ليس وكيلاً يحاور فوق معرفتك.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml } from '../ui/confirm';
import { getCurrentStudent, getInterviewBestMap } from '../store/db';
import { INTERVIEW_SCENARIOS } from '../data/career/scenarios';
import { session } from '../state';

function renderCareer(root: HTMLElement): void {
  root.innerHTML = `<div class="screen career-screen"><main class="career-wrap"><p class="review-empty-sub">جارٍ تجهيز مسارك المهني…</p></main></div>`;

  void Promise.all([getCurrentStudent(), getInterviewBestMap()]).then(([student, best]) => {
    if (!student) {
      go('gate');
      return;
    }

    const totalAttempts = Object.values(best).reduce((sum, b) => sum + b.attempts, 0);
    const passedCount = Object.values(best).filter((b) => b.passed).length;

    const scenarioCards = INTERVIEW_SCENARIOS.map((s) => {
      const b = best[s.id];
      const stateClass = b?.passed ? 'career-scenario-pass' : b ? 'career-scenario-tried' : '';
      const status = b?.passed
        ? `اجتزتها — أفضل نتيجة <b dir="ltr">${b.bestScore}%</b>`
        : b
          ? `أفضل نتيجة <b dir="ltr">${b.bestScore}%</b> — حاول مجدداً`
          : 'لم تبدأ بعد';
      return `
      <article class="career-scenario-card ${stateClass}">
        <div class="career-scenario-head">
          <span class="career-scenario-num">${s.order}</span>
          <div>
            <h2 class="career-scenario-title" dir="ltr">${escapeHtml(s.title)}</h2>
            <p class="career-scenario-role">${escapeHtml(s.roleAr)}</p>
          </div>
        </div>
        <p class="career-scenario-desc">${escapeHtml(s.desc)}</p>
        <div class="career-scenario-foot">
          <span class="career-scenario-status">${status}</span>
          <button class="btn btn-gold career-enter-btn" data-scenario="${escapeHtml(s.id)}">ابدأ المقابلة</button>
        </div>
      </article>`;
    }).join('');

    root.innerHTML = `
<div class="screen career-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>المسار المهني</b><small dir="ltr">CAREER HUB</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="career-wrap">
    <section class="career-hero">
      <span class="unit-kicker">استعداد للسوق — المقابلة والسيرة</span>
      <h1>مكتب المسار المهني</h1>
      <p>أربع مقابلات عمل بالأسئلة الأكثر تكراراً، تقييم حتمي بالكلمات المفتاحية ونصائح نطق، وصانع سيرة ذاتية بالإنجليزية — كل ذلك على جهازك، بلا خادم.</p>
      <div class="career-stats" aria-label="إحصائياتك المهنية">
        <div class="career-stat"><b dir="ltr">${INTERVIEW_SCENARIOS.length}</b><span>سيناريوهات مقابلة</span></div>
        <div class="career-stat"><b dir="ltr">${passedCount}</b><span>اجتزتها</span></div>
        <div class="career-stat"><b dir="ltr">${totalAttempts}</b><span>محاولة</span></div>
      </div>
    </section>

    <section class="career-scenarios" aria-label="سيناريوهات المقابلات">
      ${scenarioCards}
    </section>

    <section class="career-cv-card" aria-label="صانع السيرة الذاتية">
      <div class="career-cv-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9.5 8h5M9.5 12h5M9.5 16h3"/></svg>
      </div>
      <div class="career-cv-body">
        <h2>صانع السيرة الذاتية</h2>
        <p>أدخل بيانات سيرتك — اسمك، خبرتك، مهاراتك — واحصل على سيرة إنجليزية احترافية بصيغة متعارف عليها، جاهزة للطباعة كـPDF من متصفحك، وتُحفظ في جهازك وحده.</p>
        <button id="openCvBtn" class="btn btn-gold">افتح صانع السيرة</button>
      </div>
    </section>

    <p class="exam-hall-note">◆ كل مقابلة اجتزتها تولد بطاقات مراجعة للألفاظ المهنية في ردهة التكرار المتباعد — ذاكرتك المهنية تبنى هنا.</p>
  </main>
</div>`;

    root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));
    root.querySelector('#openCvBtn')!.addEventListener('click', () => go('cv'));
    root.querySelectorAll<HTMLButtonElement>('.career-enter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        session.careerScenarioId = btn.dataset.scenario ?? null;
        go('interview');
      });
    });
  });
}

registerScreen('career', renderCareer);
