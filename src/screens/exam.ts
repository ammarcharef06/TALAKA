import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { showConfirm } from '../ui/confirm';
import { session } from '../state';
import { PlacementEngine, SECTION_NAMES } from '../engine/placement';
import type { Item } from '../types';

const LETTERS = ['أ', 'ب', 'ج', 'د'];

function renderExam(root: HTMLElement): void {
  const engine = new PlacementEngine();
  let currentItem: Item | null = null;
  let answered = false;
  let advanceTimer: number | null = null;

  root.innerHTML = `
<div class="screen exam-screen">
  <header class="topbar topbar-paper">
    <button id="exitExamBtn" class="icon-btn" aria-label="إنهاء الاختبار"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <div class="topbar-titles"><b>اختبار تحديد المستوى</b><small dir="ltr">PLACEMENT EXAMINATION</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <div class="exam-progress" aria-hidden="true">
    <div class="exam-progress-meta"><span id="examSectionChip" class="section-chip">القواعد</span><span id="examCounter" class="exam-counter">السؤال 1 من 18</span></div>
    <div class="exam-bar"><div id="examBarFill" class="exam-bar-fill"></div></div>
  </div>

  <main class="exam-body">
    <div id="questionCard" class="question-card"></div>
    <div id="explanationBox" class="explanation-box" hidden></div>
    <div class="exam-foot"><p class="exam-hint">التشخيص لا يُحاسب — أجب بحدسك، وهو يعرف أكثر مما تظن.</p>
      <button id="nextBtn" class="btn btn-primary btn-next" hidden>التالي</button></div>
  </main>
</div>`;

  const sectionChip = root.querySelector<HTMLElement>('#examSectionChip')!;
  const counter = root.querySelector<HTMLElement>('#examCounter')!;
  const fill = root.querySelector<HTMLElement>('#examBarFill')!;
  const card = root.querySelector<HTMLElement>('#questionCard')!;
  const explanationBox = root.querySelector<HTMLElement>('#explanationBox')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('#nextBtn')!;

  root.querySelector('#exitExamBtn')!.addEventListener('click', () => {
    void showConfirm('إنهاء الاختبار الآن يعني ضياع إجاباتك الحالية. خروج؟', 'إنهاء الاختبار').then((ok) => {
      if (ok) {
        if (advanceTimer) window.clearTimeout(advanceTimer);
        go('gate');
      }
    });
  });

  nextBtn.addEventListener('click', () => {
    if (advanceTimer) window.clearTimeout(advanceTimer);
    showNext();
  });

  const renderOptions = (item: Item) => {
    card.innerHTML = `
      ${item.passage ? `<div class="reading-passage" dir="ltr" lang="en">${escapeHtmlExam(item.passage)}</div>` : ''}
      <h2 class="question-text" ${item.passage ? '' : 'dir="ltr" lang="en"'}>${escapeHtmlExam(item.question)}</h2>
      <div class="options" role="listbox" aria-label="الخيارات">
        ${item.options
          .map(
            (opt, i) => `
          <button class="option" data-i="${i}" role="option" aria-selected="false">
            <span class="option-letter">${LETTERS[i]}</span>
            <span class="option-text" dir="auto">${escapeHtmlExam(opt)}</span>
          </button>`
          )
          .join('')}
      </div>`;
  };

  const showNext = () => {
    answered = false;
    explanationBox.hidden = true;
    nextBtn.hidden = true;
    currentItem = engine.nextItem();

    if (!currentItem) {
      finishExam();
      return;
    }
    const section = currentItem.section;
    sectionChip.textContent = SECTION_NAMES[section];
    const index = engine.answeredCount + 1;
    counter.textContent = `السؤال ${index} من ${engine.totalPlanned}`;
    fill.style.width = `${((index - 1) / engine.totalPlanned) * 100}%`;

    renderOptions(currentItem);

    card.querySelectorAll<HTMLButtonElement>('.option').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answered || !currentItem) return;
        answered = true;
        const chosen = Number(btn.dataset.i);
        const { correct } = engine.answer(currentItem, chosen);

        card.querySelectorAll<HTMLButtonElement>('.option').forEach((b) => {
          const i = Number(b.dataset.i);
          b.disabled = true;
          b.setAttribute('aria-selected', i === chosen ? 'true' : 'false');
          if (i === currentItem!.answer) b.classList.add('option-correct');
          else if (i === chosen) b.classList.add('option-wrong');
          else b.classList.add('option-dim');
        });

        explanationBox.hidden = false;
        explanationBox.innerHTML = `
          <div class="explanation-head ${correct ? 'is-correct' : 'is-wrong'}">${correct ? 'أحسنت — إجابة صحيحة' : 'خطأ شائع — انتبه لهذه النقطة'}</div>
          <p class="explanation-text">${escapeHtmlExam(currentItem.explanation)}</p>`;
        fill.style.width = `${(index / engine.totalPlanned) * 100}%`;

        nextBtn.hidden = false;
        nextBtn.focus();
        const remaining = engine.totalPlanned - engine.answeredCount;
        nextBtn.textContent = remaining === 0 ? 'إنهاء الاختبار ورؤية النتيجة' : 'التالي';
        if (advanceTimer) window.clearTimeout(advanceTimer);
        advanceTimer = window.setTimeout(() => showNext(), correct ? 1500 : 2600);
      });
    });
  };

  const finishExam = () => {
    if (advanceTimer) window.clearTimeout(advanceTimer);
    session.result = engine.finish();
    go('result');
  };

  showNext();
}

function escapeHtmlExam(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] as string));
}

registerScreen('exam', renderExam);
