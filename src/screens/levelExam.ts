/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — جلسة امتحان المستوى المعتمد
   أسئلة مسحوبة من بنك المعايرة، خيارات مخلوطة، بلا تصحيح قبل التسليم.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG } from '../ui/seal';
import { escapeHtml, showConfirm, toast } from '../ui/confirm';
import { SECTION_NAMES, LEVEL_META } from '../engine/placement';
import { createLevelExam, scoreLevelExam, LEVEL_EXAM_CONFIG } from '../engine/levelExam';
import { certifyStudent, getCurrentStudent, saveLevelExamResult } from '../store/db';
import type { ExamLevel } from '../types';

const LETTERS = ['أ', 'ب', 'ج', 'د'];

function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function renderLevelExam(root: HTMLElement): void {
  const level = session.pendingExamLevel;
  if (!level) {
    go('examHall');
    return;
  }

  void getCurrentStudent().then((student) => {
    if (!student) {
      go('gate');
      return;
    }
    startExam(root, level, student.id);
  });
}

function startExam(root: HTMLElement, level: ExamLevel, studentId: string): void {
  const config = LEVEL_EXAM_CONFIG[level];
  const meta = LEVEL_META[level];
  const questions = createLevelExam(level);
  const answers: (number | null)[] = new Array(questions.length).fill(null);
  let index = 0;
  let selected: number | null = null;
  let finished = false;
  let timerId: number | null = null;

  const startedAt = Date.now();
  const deadline = startedAt + config.timeLimitSec * 1000;

  root.innerHTML = `
<div class="screen exam-screen level-exam-screen">
  <header class="topbar topbar-paper">
    <button id="exitExamBtn" class="icon-btn" aria-label="إنهاء الامتحان"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <div class="topbar-titles"><b>امتحان ${escapeHtml(level)} المعتمد</b><small dir="ltr">CERTIFIED ${escapeHtml(level)} EXAMINATION</small></div>
    <div class="spacer"></div>
    <span id="examTimer" class="exam-timer" title="الوقت المتبقي">${formatClock(config.timeLimitSec)}</span>
    ${sealSVG(34, 'onPaper')}
  </header>

  <div class="exam-progress">
    <div class="exam-progress-meta"><span id="examSectionChip" class="section-chip">${SECTION_NAMES[questions[0]?.section ?? 'rules']}</span><span id="examCounter" class="exam-counter">السؤال 1 من ${questions.length}</span></div>
    <div class="exam-bar"><div id="examBarFill" class="exam-bar-fill"></div></div>
  </div>

  <main class="exam-body">
    <div class="level-exam-instructions">
      <span>◆ ${escapeHtml(meta.ar)} — ${questions.length} سؤالاً · النجاح من ${config.passMark}% · لا تصحيح قبل التسليم.</span>
    </div>
    <div id="questionCard" class="question-card"></div>
    <div class="exam-foot">
      <p class="exam-hint">لا يمكنك العودة إلى سؤال سابق. اقرأ بتمعّن ثم اختر.</p>
      <button id="nextBtn" class="btn btn-primary btn-next" disabled>التالي</button>
    </div>
  </main>
</div>`;

  const card = root.querySelector<HTMLElement>('#questionCard')!;
  const counter = root.querySelector<HTMLElement>('#examCounter')!;
  const sectionChip = root.querySelector<HTMLElement>('#examSectionChip')!;
  const fill = root.querySelector<HTMLElement>('#examBarFill')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('#nextBtn')!;
  const timerEl = root.querySelector<HTMLElement>('#examTimer')!;

  const clearTimer = () => {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const finish = (fromTimer: boolean) => {
    if (finished) return;
    finished = true;
    clearTimer();
    if (fromTimer && selected !== null) answers[index] = selected;
    const durationSeconds = Math.min(config.timeLimitSec, Math.round((Date.now() - startedAt) / 1000));
    const result = scoreLevelExam(level, questions, answers, { studentId, durationSeconds });
    session.levelExamResult = result;
    session.pendingExamLevel = null;

    void (async () => {
      try {
        await saveLevelExamResult(result);
      } catch {
        toast('تعذر حفظ محضر الامتحان محلياً — النتيجة معروضة لكنها قد لا تبقى بعد إغلاق الصفحة');
      }
      if (result.passed) {
        try {
          await certifyStudent(level);
        } catch {
          // المحضر محفوظ؛ تعذّر تحديث بطاقة الاعتماد فقط
        }
      }
      go('examResult');
    })();
  };

  root.querySelector('#exitExamBtn')!.addEventListener('click', () => {
    if (finished) return;
    void showConfirm('الخروج الآن يعني تسليم ورقة فارغة وضياع إجاباتك. هل تريد الخروج؟', 'اخرج وأهدر المحاولة').then((ok) => {
      if (!ok) return;
      finished = true;
      clearTimer();
      session.pendingExamLevel = null;
      go('examHall');
    });
  });

  const renderQuestion = () => {
    const q = questions[index];
    selected = null;
    nextBtn.disabled = true;
    nextBtn.textContent = index + 1 === questions.length ? 'سلّم الامتحان' : 'التالي';
    sectionChip.textContent = SECTION_NAMES[q.section];
    counter.textContent = `السؤال ${index + 1} من ${questions.length}`;
    fill.style.width = `${(index / questions.length) * 100}%`;

    card.innerHTML = `
      ${q.passage ? `<div class="reading-passage" dir="ltr" lang="en">${escapeHtml(q.passage)}</div>` : ''}
      <h2 class="question-text" ${/[\u0600-\u06FF]/.test(q.question) ? 'dir="auto"' : 'dir="ltr" lang="en"'}>${escapeHtml(q.question)}</h2>
      <div class="options" role="listbox" aria-label="الخيارات">
        ${q.options
          .map(
            (opt, i) => `
          <button class="option" data-i="${i}" role="option" aria-selected="false">
            <span class="option-letter">${LETTERS[i]}</span>
            <span class="option-text" dir="auto">${escapeHtml(opt)}</span>
          </button>`
          )
          .join('')}
      </div>`;

    card.querySelectorAll<HTMLButtonElement>('.option').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (finished) return;
        selected = Number(btn.dataset.i);
        card.querySelectorAll<HTMLButtonElement>('.option').forEach((b) => {
          b.classList.toggle('exam-selected', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        nextBtn.disabled = false;
      });
    });
  };

  nextBtn.addEventListener('click', () => {
    if (finished || selected === null) return;
    answers[index] = selected;
    if (index + 1 >= questions.length) {
      finish(false);
      return;
    }
    index += 1;
    renderQuestion();
  });

  const tick = () => {
    const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerEl.textContent = formatClock(left);
    timerEl.classList.toggle('exam-timer-low', left <= 120);
    if (left <= 0) finish(true);
  };
  tick();
  timerId = window.setInterval(tick, 1000);

  renderQuestion();
  fill.style.width = '0%';
}

registerScreen('levelExam', renderLevelExam);
