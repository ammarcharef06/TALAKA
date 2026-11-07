import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { findLesson, allLessonsInOrder, nextLessonAfter } from '../data/academy/course';
import { cardsForLesson } from '../data/academy/deck';
import { markLessonComplete, getProgressMap } from '../store/db';
import { session } from '../state';
import { escapeHtml, toast } from '../ui/confirm';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';
import { SettingsEngine } from '../engine/settings';
import { buildFluidPlan, FLUID_MODES, type FluidMinutes, type FluidPlan } from '../engine/timeFluid';

const LETTERS = ['أ', 'ب', 'ج', 'د'];

function renderLesson(root: HTMLElement): void {
  const found = session.currentLessonId ? findLesson(session.currentLessonId) : null;
  if (!found) {
    go('classroom');
    return;
  }
  const { lesson } = found;
  const globalIndex = allLessonsInOrder().findIndex((x) => x.lesson.id === lesson.id) + 1;
  const totalLessons = allLessonsInOrder().length;

  const shell = (body: string) => `
<div class="screen lesson-screen">
  <header class="topbar topbar-paper">
    <button id="backToClassroomBtn" class="icon-btn" aria-label="عودة إلى الفصل"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الدرس ${globalIndex} من ${totalLessons}</b><small dir="ltr">LESSON ${globalIndex}</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>
  <main class="lesson-wrap">${body}</main>
</div>`;

  const wireBack = (el: HTMLElement) =>
    el.querySelector('#backToClassroomBtn')!.addEventListener('click', () => {
      stopSpeaking();
      go('classroom');
    });

  // مدة الجلسة الحالية — تُقرأ من مكتب شؤون الطلاب، وتُحفظ عند تغييرها داخل الدرس
  let minutes: FluidMinutes = SettingsEngine.current().academic.defaultSessionMinutes;
  const planFor = (): FluidPlan => buildFluidPlan(lesson, minutes);

  const phaseStrip = (plan: FluidPlan): string =>
    plan.phases
      .map(
        (phase) => `<span class="fluid-phase" title="${escapeHtml(phase.description)}"><b>${escapeHtml(phase.title)}</b><i>${phase.minutes} د</i></span>`
      )
      .join('');

  const fluidPanel = (plan: FluidPlan): string => `
    <section class="fluid-panel" aria-label="الوقت السائل — مدة الجلسة">
      <div class="fluid-head">
        <div class="fluid-head-copy">
          <span class="fluid-kicker">الوقت السائل · TIME-FLUID</span>
          <b class="fluid-title">${escapeHtml(plan.label)} — <span dir="ltr">${plan.minutes}</span> دقيقة</b>
        </div>
        <span class="fluid-preserved"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4.5 4.5L19 8"/></svg>كل ${plan.objectives.length} أهداف محفوظة</span>
      </div>

      <div class="fluid-modes" role="group" aria-label="اختر مدة الجلسة">
        ${FLUID_MODES.map(
          (mode) => `
          <button type="button" class="fluid-mode${mode.minutes === minutes ? ' is-active' : ''}" data-minutes="${mode.minutes}" aria-pressed="${mode.minutes === minutes}">
            <b>${escapeHtml(mode.short)}</b>
            <small>${escapeHtml(mode.label)}</small>
          </button>`
        ).join('')}
      </div>

      <div class="fluid-phases" aria-label="ميزانية الوقت">${phaseStrip(plan)}</div>
      <p class="fluid-summary">${escapeHtml(plan.summary)}</p>
      <p class="fluid-honest">${
        plan.minutes === 10
          ? 'ضغط ذكي: كل هدف له موضع في الشرح والأمثلة والتدريب — ما تقلّص هو التكرار لا الأهداف.'
          : plan.minutes === 60
            ? 'توسيع: الدرس كاملاً + ورشة إنتاج ومراجعة ذاتية — لا معلومة تُحذف، بل تُضاف طبقة تطبيق.'
            : 'الجلسة المتوازنة: كل كتل الدرس وأمثلته وتدريبه في جلسة واحدة.'
      }</p>

      <details class="fluid-map">
        <summary>كيف يغطي هذا الوقت كل هدف تعليمي؟</summary>
        <ul>
          ${plan.coverage
            .map(
              (row) => `
            <li>
              <b>${escapeHtml(row.objective)}</b>
              <span>${escapeHtml(row.blockTitle ?? 'شرح الدرس')}${row.exampleText ? ` · <i dir="ltr" lang="en">${escapeHtml(row.exampleText)}</i>` : ''}</span>
            </li>`
            )
            .join('')}
        </ul>
      </details>
    </section>`;

  /* ───────── المرحلة 1: الدراسة ───────── */
  const renderStudy = () => {
    const plan = planFor();
    const blocks = plan.blocks
      .map((b) => {
        if (b.type === 'rule')
          return `<section class="lesson-block block-rule"><h2 class="block-title">${escapeHtml(b.title)}</h2><p>${escapeHtml(b.body)}</p></section>`;
        if (b.type === 'tip')
          return `<section class="lesson-block block-tip"><h2 class="block-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>${escapeHtml(b.title)}</h2><p>${escapeHtml(b.body)}</p></section>`;
        const head = `<div class="table-head"><span>${escapeHtml(b.head[0])}</span><span>${escapeHtml(b.head[1])}</span></div>`;
        const rows = b.rows.map(([a, c]) => `<div class="table-row"><span>${escapeHtml(a)}</span><span>${escapeHtml(c)}</span></div>`).join('');
        return `<section class="lesson-block block-table">${b.title ? `<h2 class="block-title">${escapeHtml(b.title)}</h2>` : ''}<div class="two-col-table">${head}${rows}</div></section>`;
      })
      .join('');

    const listenButton = speechSupported()
      ? (text: string) => `<button class="listen-btn" data-say="${escapeHtml(text)}" aria-label="استمع إلى الجملة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H3v6h3.5L11 19Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.2 6a9 9 0 0 1 0 12"/></svg><span>استمع</span></button>`
      : () => '';

    root.innerHTML = shell(`
    <article class="lesson-document">
      <header class="lesson-head">
        <span class="lesson-kicker">الدرس ${globalIndex}</span>
        <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>
        <div class="lesson-objectives">
          <h2>بعد هذا الدرس ستتقن:</h2>
          <ul>${plan.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
        </div>
      </header>

      ${fluidPanel(plan)}

      ${blocks}

      <section class="lesson-block block-examples">
        <h2 class="block-title">الأمثلة — استمع وردد بصوت عالٍ</h2>
        <ul class="examples-list">
          ${plan.examples
            .map(
              (ex) => `
            <li class="example-row">
              <p class="example-text" dir="ltr" lang="en">${escapeHtml(ex.text)}</p>
              ${ex.note ? `<p class="example-note">${escapeHtml(ex.note)}</p>` : ''}
              ${listenButton(ex.text)}
            </li>`
            )
            .join('')}
        </ul>
      </section>

      <button id="startPracticeBtn" class="btn btn-primary btn-xl lesson-cta">فهمت واستمعت — ابدأ التدريب (${plan.practice.length} أسئلة)</button>
    </article>`);

    wireBack(root);
    root.querySelectorAll<HTMLButtonElement>('.listen-btn').forEach((btn) => {
      btn.addEventListener('click', () => speakEnglish(btn.dataset.say ?? ''));
    });
    root.querySelectorAll<HTMLButtonElement>('.fluid-mode').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = Number(btn.dataset.minutes) as FluidMinutes;
        if (next === minutes) return;
        minutes = next;
        void SettingsEngine.update((draft) => {
          draft.academic.defaultSessionMinutes = next;
        })
          .then(() => toast(`مدة جلستك الافتراضية الآن ${next} دقيقة`))
          .catch(() => undefined);
        stopSpeaking();
        renderStudy();
      });
    });
    root.querySelector('#startPracticeBtn')!.addEventListener('click', () => {
      stopSpeaking();
      renderPractice(0);
    });
  };

  /* ───────── المرحلة 2: التدريب ───────── */
  const renderPractice = (index: number, correctSoFar = 0) => {
    const plan = planFor();
    const items = plan.practice;
    const item = items[index];
    const total = items.length;

    root.innerHTML = shell(`
    <div class="practice-wrap">
      <div class="practice-meta"><span class="section-chip">التدريب التقويمي</span><span class="exam-counter">السؤال ${index + 1} من ${total} · ${plan.minutes} دقيقة</span></div>
      <div class="exam-bar"><div class="exam-bar-fill" style="width:${(index / total) * 100}%"></div></div>
      <div class="question-card">
        <h2 class="question-text" dir="auto">${escapeHtml(item.question)}</h2>
        <div class="options" role="listbox" aria-label="الخيارات">
          ${item.options
            .map(
              (opt, i) => `
            <button class="option" data-i="${i}" role="option" aria-selected="false">
              <span class="option-letter">${LETTERS[i]}</span>
              <span class="option-text" dir="auto">${escapeHtml(opt)}</span>
            </button>`
            )
            .join('')}
        </div>
      </div>
      <div id="practiceExplanation" class="explanation-box" hidden></div>
      <div class="exam-foot"><p class="exam-hint">الخطأ هنا لا يخيف — إنه مادة التعلم نفسها.</p>
        <button id="practiceNextBtn" class="btn btn-primary btn-next" hidden>${index + 1 === total ? 'إنهاء التدريب ورؤية نتيجتك' : 'التالي'}</button></div>
    </div>`);

    wireBack(root);
    const explanationBox = root.querySelector<HTMLElement>('#practiceExplanation')!;
    const nextBtn = root.querySelector<HTMLButtonElement>('#practiceNextBtn')!;
    let answered = false;
    let correctNow = correctSoFar;

    root.querySelectorAll<HTMLButtonElement>('.option').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const chosen = Number(btn.dataset.i);
        const correct = chosen === item.answer;
        if (correct) correctNow += 1;

        root.querySelectorAll<HTMLButtonElement>('.option').forEach((b) => {
          const i = Number(b.dataset.i);
          b.disabled = true;
          if (i === item.answer) b.classList.add('option-correct');
          else if (i === chosen) b.classList.add('option-wrong');
          else b.classList.add('option-dim');
        });
        explanationBox.hidden = false;
        explanationBox.innerHTML = `
          <div class="explanation-head ${correct ? 'is-correct' : 'is-wrong'}">${correct ? 'أحسنت' : 'خطأ شائع — راجع وأكمل'}</div>
          <p class="explanation-text">${escapeHtml(item.explanation)}</p>`;
        root.querySelector<HTMLElement>('.exam-bar-fill')!.style.width = `${((index + 1) / total) * 100}%`;
        nextBtn.hidden = false;
        nextBtn.focus();
      });
    });

    nextBtn.addEventListener('click', () => {
      if (index + 1 < total) {
        renderPractice(index + 1, correctNow);
      } else {
        const score = Math.round((correctNow / total) * 100);
        void markLessonComplete(lesson.id, score).then(() => renderDone(score));
      }
    });
  };

  /* ───────── المرحلة 3: الختم ───────── */
  const renderDone = (score: number) => {
    void getProgressMap().then((map) => {
      const best = map[lesson.id]?.bestScore ?? score;
      const nextLesson = nextLessonAfter(lesson.id)?.lesson ?? null;
      const plan = planFor();

      root.innerHTML = shell(`
      <div class="done-wrap">
        <article class="done-document">
          <div class="done-seal">${sealSVG(110, 'onPaper')}</div>
          <h1 class="done-title">أُتقنت</h1>
          <p class="done-sub">الدرس ${globalIndex} — «${escapeHtml(lesson.title)}»</p>
          <div class="done-score" dir="ltr">${score}<small>%</small></div>
          <p class="done-best">أدق محاولة هذه: ${score}% · أفضل درجة لك على الإطلاق: <b>${best}%</b></p>
          <p class="done-note">رفدت ردهة التكرار المتباعد بـ <b>${cardsForLesson(lesson.id).length} بطاقة</b> من هذا الدرس — ستطفو عليك قبل نسيانها بقليل.</p>
          <p class="done-note">ختم مكتب الفصل يُثبت إتمامك. سجلك الأكاديمي يزداد سطرًا، وهمتك تشتد — هذه طريقتك أنت للتخرج.</p>
          <p class="done-fluid">وضع الوقت السائل: <b>${escapeHtml(plan.label)} — ${plan.minutes} دقيقة</b> · كل ${plan.objectives.length} أهداف بقيت معك.</p>
          ${
            plan.deepTasks.length
              ? `<section class="done-deep"><h2>ورشة الإنتاج — أكمِلها الآن</h2><ul>${plan.deepTasks.map((task) => `<li>${escapeHtml(task)}</li>`).join('')}</ul></section>`
              : ''
          }
          <div class="done-actions">
            ${nextLesson ? `<button id="nextLessonBtn" class="btn btn-primary btn-xl">الدرس التالي: ${escapeHtml(nextLesson.title.slice(0, 46))}${nextLesson.title.length > 46 ? '…' : ''}</button>` : '<p class="done-unit-complete">ختمت خط الرحلة كاملاً — مبروك يا طالب طَلَاقَة.</p>'}
            <button id="backToClassroomBtn2" class="btn btn-ghost">العودة إلى خط الرحلة</button>
          </div>
        </article>
      </div>`);

      wireBack(root);
      root.querySelector('#backToClassroomBtn2')!.addEventListener('click', () => go('classroom'));
      root.querySelector('#nextLessonBtn')?.addEventListener('click', () => {
        if (nextLesson) {
          // go يعيد الدخول ويقرأ currentLessonId من جديد — لا closure متصلبة على الدرس القديم
          session.currentLessonId = nextLesson.id;
          go('lesson');
        }
      });
    });
  };

  // نضمن تحميل الإعدادات قبل أول رسم: مدة الجلسة الافتراضية من مكتب شؤون الطلاب
  root.innerHTML = shell('<p class="review-empty-sub">جارٍ تجهيز جلستك حسب وقتك…</p>');
  void SettingsEngine.load()
    .then((settings) => {
      minutes = settings.academic.defaultSessionMinutes;
      renderStudy();
    })
    .catch(() => renderStudy());
}

registerScreen('lesson', renderLesson);
