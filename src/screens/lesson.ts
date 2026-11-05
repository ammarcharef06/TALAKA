import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { findLesson, UNITS } from '../data/academy/course';
import { markLessonComplete, getProgressMap } from '../store/db';
import { session } from '../state';
import { escapeHtml } from '../ui/confirm';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';

const LETTERS = ['أ', 'ب', 'ج', 'د'];

function renderLesson(root: HTMLElement): void {
  const found = session.currentLessonId ? findLesson(session.currentLessonId) : null;
  if (!found) {
    go('classroom');
    return;
  }
  const { lesson } = found;

  const shell = (body: string) => `
<div class="screen lesson-screen">
  <header class="topbar topbar-paper">
    <button id="backToClassroomBtn" class="icon-btn" aria-label="عودة إلى الفصل"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الدرس ${lesson.order} من ${UNITS[0].lessons.length}</b><small dir="ltr">LESSON ${lesson.order}</small></div>
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

  /* ───────── المرحلة 1: الدراسة ───────── */
  const renderStudy = () => {
    const blocks = lesson.blocks
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
        <span class="lesson-kicker">الدرس ${lesson.order}</span>
        <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>
        <div class="lesson-objectives">
          <h2>بعد هذا الدرس ستتقن:</h2>
          <ul>${lesson.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
        </div>
      </header>

      ${blocks}

      <section class="lesson-block block-examples">
        <h2 class="block-title">الأمثلة — استمع وردد بصوت عالٍ</h2>
        <ul class="examples-list">
          ${lesson.examples
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

      <button id="startPracticeBtn" class="btn btn-primary btn-xl lesson-cta">فهمت واستمعت — ابدأ التدريب (${lesson.practice.length} أسئلة)</button>
    </article>`);

    wireBack(root);
    root.querySelectorAll<HTMLButtonElement>('.listen-btn').forEach((btn) => {
      btn.addEventListener('click', () => speakEnglish(btn.dataset.say ?? ''));
    });
    root.querySelector('#startPracticeBtn')!.addEventListener('click', () => {
      stopSpeaking();
      renderPractice(0);
    });
  };

  /* ───────── المرحلة 2: التدريب ───────── */
  const renderPractice = (index: number, correctSoFar = 0) => {
    const item = lesson.practice[index];
    const total = lesson.practice.length;

    root.innerHTML = shell(`
    <div class="practice-wrap">
      <div class="practice-meta"><span class="section-chip">التدريب التقويمي</span><span class="exam-counter">السؤال ${index + 1} من ${total}</span></div>
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
      const nextLesson = UNITS[0].lessons
        .filter((l) => l.order > lesson.order)
        .sort((a, b) => a.order - b.order)[0];

      root.innerHTML = shell(`
      <div class="done-wrap">
        <article class="done-document">
          <div class="done-seal">${sealSVG(110, 'onPaper')}</div>
          <h1 class="done-title">أُتقنت</h1>
          <p class="done-sub">الدرس ${lesson.order} — «${escapeHtml(lesson.title)}»</p>
          <div class="done-score" dir="ltr">${score}<small>%</small></div>
          <p class="done-best">أدق محاولة هذه: ${score}% · أفضل درجة لك على الإطلاق: <b>${best}%</b></p>
          <p class="done-note">ختم مكتب الفصل يُثبت إتمامك. سجلك الأكاديمي يزداد سطرًا، وهمتك تشتد — هذه طريقتك أنت للتخرج.</p>
          <div class="done-actions">
            ${nextLesson ? `<button id="nextLessonBtn" class="btn btn-primary btn-xl">الدرس التالي: ${escapeHtml(nextLesson.title.slice(0, 46))}${nextLesson.title.length > 46 ? '…' : ''}</button>` : '<p class="done-unit-complete">ختمت الوحدة الأولى كاملة — مبروك يا طالب طَلَاقَة.</p>'}
            <button id="backToClassroomBtn2" class="btn btn-ghost">العودة إلى خط الرحلة</button>
          </div>
        </article>
      </div>`);

      wireBack(root);
      root.querySelector('#backToClassroomBtn2')!.addEventListener('click', () => go('classroom'));
      root.querySelector('#nextLessonBtn')?.addEventListener('click', () => {
        if (nextLesson) {
          session.currentLessonId = nextLesson.id;
          renderStudy();
        }
      });
    });
  };

  renderStudy();
}

registerScreen('lesson', renderLesson);
