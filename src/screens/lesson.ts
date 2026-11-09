import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { findLesson, allLessonsInOrder, nextLessonAfter } from '../data/academy/course';
import { cardsForLesson } from '../data/academy/deck';
import { markLessonComplete, getProgressMap, awardMistakePoints } from '../store/db';
import { session } from '../state';
import { escapeHtml, toast } from '../ui/confirm';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';
import { SettingsEngine } from '../engine/settings';
import { buildFluidPlan, FLUID_MODES, type FluidMinutes, type FluidPlan } from '../engine/timeFluid';
import { learnEnglishUnitsForLesson } from '../data/academy/learnEnglishMerge';
import type { LearnEnglishUnit } from '../data/learnEnglish/types';

const LETTERS = ['أ', 'ب', 'ج', 'د'];

function stageBadge(stage: string): string {
  const label = stage === 'S0' ? 'تأسيسي S0' : stage;
  return `<span class="le-stage le-stage-${stage.toLowerCase()}">${label}</span>`;
}

function vocabularyHtml(unit: LearnEnglishUnit, listen: (text: string) => string): string {
  if (unit.vocabulary.length === 0) return '';
  return `
    <div class="le-sub">
      <h3>المفردات <span class="le-count">${unit.vocabulary.length}</span></h3>
      <div class="le-vocab-grid">
        ${unit.vocabulary
          .map(
            (vocabulary) => `
          <article class="le-vocab">
            <div class="le-vocab-head"><b dir="ltr" lang="en">${escapeHtml(vocabulary.en)}</b><span>${escapeHtml(vocabulary.ar)}</span></div>
            ${vocabulary.pos ? `<small class="le-pos">${escapeHtml(vocabulary.pos)}</small>` : ''}
            <p class="le-ex-en" dir="ltr" lang="en">${escapeHtml(vocabulary.example.en)}</p>
            <p class="le-ex-ar">${escapeHtml(vocabulary.example.ar)}</p>
            ${
              vocabulary.collocations.length
                ? `<p class="le-colloc">${vocabulary.collocations
                    .map((collocation) => `${escapeHtml(collocation.en)} = ${escapeHtml(collocation.ar)}`)
                    .join(' · ')}</p>`
                : ''
            }
            ${listen(vocabulary.example.en)}
          </article>`
          )
          .join('')}
      </div>
    </div>`;
}

function sentencesHtml(unit: LearnEnglishUnit, listen: (text: string) => string): string {
  if (unit.sentences.length === 0) return '';
  return `
    <div class="le-sub">
      <h3>جمل الوحدة <span class="le-count">${unit.sentences.length}</span></h3>
      <ul class="le-sentences">
        ${unit.sentences
          .map(
            (sentence) => `
          <li>
            <p dir="ltr" lang="en">${escapeHtml(sentence.en)}</p>
            <p>${escapeHtml(sentence.ar)}</p>
            ${listen(sentence.en)}
          </li>`
          )
          .join('')}
      </ul>
    </div>`;
}

function dialogueHtml(unit: LearnEnglishUnit, listen: (text: string) => string): string {
  if (unit.dialogue.length === 0) {
    return unit.foundation
      ? `<div class="le-sub"><h3>الحوار</h3><p class="le-empty">لا يوجد حوار في مصدر S0 التأسيسي — يُبنى داخل طَلَاقة عند الحاجة، ولا ننسب للمصدر ما ليس فيه.</p></div>`
      : '';
  }
  return `
    <div class="le-sub">
      <h3>الحوار <span class="le-count">${unit.dialogue.length}</span></h3>
      <div class="le-dialogue">
        ${unit.dialogue
          .map(
            (line) => `
          <div class="le-line">
            <span class="le-who">${escapeHtml(line.who)}</span>
            <div>
              <p dir="ltr" lang="en">${escapeHtml(line.en)}</p>
              <p>${escapeHtml(line.ar)}</p>
              ${listen(line.en)}
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>`;
}

function phoneticsHtml(unit: LearnEnglishUnit, listen: (text: string) => string): string {
  if (unit.phonetics.length === 0) return '';
  return `
    <div class="le-sub">
      <h3>الصوتيات <span class="le-count">${unit.phonetics.length}</span></h3>
      <div class="le-phonetics">
        ${unit.phonetics
          .map(
            (phonetic) => `
          <article class="le-phonetic">
            <div class="le-phonetic-head"><b dir="ltr" lang="en">${escapeHtml(phonetic.en)}</b><span dir="ltr">${escapeHtml(phonetic.ipa)}</span><span>${escapeHtml(phonetic.ar)}</span></div>
            ${listen(phonetic.en)}
            ${phonetic.contrastPairs
              .map((pair) => `<p class="le-pair"><b>تمييز:</b> <span dir="ltr" lang="en">${escapeHtml(pair.en)}</span> — ${escapeHtml(pair.ar)}</p>`)
              .join('')}
            ${phonetic.connectedSpeech
              .map((pair) => `<p class="le-pair"><b>وصل:</b> <span dir="ltr" lang="en">${escapeHtml(pair.en)}</span> — ${escapeHtml(pair.ar)}</p>`)
              .join('')}
            ${phonetic.intonation
              .map((pair) => `<p class="le-pair"><b>تنغيم:</b> <span dir="ltr" lang="en">${escapeHtml(pair.en)}</span> — ${escapeHtml(pair.ar)}</p>`)
              .join('')}
          </article>`
          )
          .join('')}
      </div>
    </div>`;
}

function transfersHtml(unit: LearnEnglishUnit): string {
  if (unit.l1Transfers.length === 0) return '';
  return `
    <div class="le-sub">
      <h3>أخطاء العرب المستهدفة <span class="le-count">${unit.l1Transfers.length}</span></h3>
      <div class="le-transfers">
        ${unit.l1Transfers
          .map(
            (transfer) => `
          <article class="le-transfer">
            <p class="le-wrong" dir="ltr" lang="en">✗ ${escapeHtml(transfer.incorrect)}</p>
            <p class="le-right" dir="ltr" lang="en">✓ ${escapeHtml(transfer.corrected)}</p>
            <p>${escapeHtml(transfer.explanationAr)}</p>
          </article>`
          )
          .join('')}
      </div>
    </div>`;
}

function academicHtml(unit: LearnEnglishUnit): string {
  if (unit.academicFocus.length === 0) return '';
  return `
    <div class="le-sub">
      <h3>المهارات الأكاديمية <span class="le-count">${unit.academicFocus.length}</span></h3>
      <div class="le-academic">
        ${unit.academicFocus
          .map(
            (term) => `
          <article class="le-term">
            <div class="le-term-head"><b dir="ltr" lang="en">${escapeHtml(term.term)}</b><span>${escapeHtml(term.meaningAr)}</span></div>
            <p dir="ltr" lang="en">${escapeHtml(term.example.en)}</p>
            <p>${escapeHtml(term.example.ar)}</p>
            ${term.paraphrasing
              .map((pair) => `<p class="le-pair"><b>إعادة صياغة:</b> <span dir="ltr" lang="en">${escapeHtml(pair.original)} → ${escapeHtml(pair.paraphrase)}</span></p>`)
              .join('')}
            ${term.idioms.map((idiom) => `<p class="le-pair"><b>تعبير:</b> <span dir="ltr" lang="en">${escapeHtml(idiom.phrase)}</span> — ${escapeHtml(idiom.meaningAr)}</p>`).join('')}
            ${term.readingAnalysis.map((row) => `<p class="le-pair"><b>تحليل:</b> <span dir="ltr" lang="en">${escapeHtml(row.term)}</span> — ${escapeHtml(row.meaningAr)}</p>`).join('')}
          </article>`
          )
          .join('')}
      </div>
    </div>`;
}

function enrichmentHtml(lessonId: string, listen: (text: string) => string): string {
  const units = learnEnglishUnitsForLesson(lessonId);
  if (units.length === 0) return '';
  return `
    <section class="lesson-enrichment" aria-label="إثراء Learn-English المدمج">
      <header class="le-head">
        <span class="le-kicker">إثراء مدمج · LEARN-ENGLISH</span>
        <h2>محتوى S0–B1 المدمج</h2>
        <p>اعتمد المالك أوراق المراجعة في 2026-11-08. هذا الإثراء يُكثّف الدرس ولا يلغي شيئاً منه، ولا يدخل في ميزانية الوقت السريع — افتح ما تشاء منه.</p>
      </header>
      ${units
        .map(
          (unit, index) => `
        <details class="le-unit" ${index === 0 ? 'open' : ''}>
          <summary>
            <span class="le-summary-title">${stageBadge(unit.stage)} ${escapeHtml(unit.titleAr)}</span>
            <small dir="ltr" lang="en">${escapeHtml(unit.titleEn)}</small>
          </summary>
          <div class="le-body">
            <p class="le-goal">${escapeHtml(unit.goalAr)}</p>
            ${
              unit.grammar.length
                ? `<div class="le-sub"><h3>قواعد الوحدة</h3><ul class="le-grammar-list">${unit.grammar
                    .map((grammar) => `<li><b>${escapeHtml(grammar.titleAr)}</b></li>`)
                    .join('')}</ul><p class="le-note">الشرح الكامل والجداول مدمجة أعلاه في كتل الدرس.</p></div>`
                : ''
            }
            ${vocabularyHtml(unit, listen)}
            ${sentencesHtml(unit, listen)}
            ${dialogueHtml(unit, listen)}
            ${phoneticsHtml(unit, listen)}
            ${transfersHtml(unit)}
            ${academicHtml(unit)}
          </div>
        </details>`
        )
        .join('')}
    </section>`;
}

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

    const enrichment = enrichmentHtml(lesson.id, listenButton);

    root.innerHTML = shell(`
    <article class="lesson-document">
      <header class="lesson-head">
        <span class="lesson-kicker">الدرس ${globalIndex}</span>
        ${lesson.learnEnglish ? `<span class="le-lesson-badge">${lesson.learnEnglish.foundation ? 'تأسيسي S0' : lesson.learnEnglish.stages.join(' · ')} · إثراء Learn-English</span>` : ''}
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

      ${enrichment}

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
          <p class="explanation-text">${escapeHtml(item.explanation)}</p>
          ${correct ? '' : '<p class="points-award" id="practicePoints" aria-live="polite">جارٍ حساب نقاط المحاولة…</p>'}`;
        if (!correct) {
          const pointsLine = explanationBox.querySelector<HTMLElement>('#practicePoints');
          void awardMistakePoints()
            .then((result) => {
              if (!pointsLine) return;
              pointsLine.textContent =
                result.awarded > 0
                  ? `+${result.awarded} نقطة على المحاولة — رصيد اليوم ${result.dailyPoints} من ${result.dailyCap}`
                  : `بلغت سقف نقاط اليوم (${result.dailyCap}) — غداً رصيد جديد. المهم أنك حاولت.`;
              pointsLine.classList.toggle('points-capped', result.capped && result.awarded === 0);
            })
            .catch(() => {
              pointsLine?.remove();
            });
        }
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
