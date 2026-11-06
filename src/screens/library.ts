/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المكتبة المتدرّجة
   نصوص إنجليزية حقيقية بمستويات CEFR — من S0 إلى C2 —
   بمسرد عربي وأسئلة فهم بشرح عربي، ونطق للمستمع.
   التقدّم يُحفظ على جهازك وحده. لا خادم ولا حساب.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml, toast } from '../ui/confirm';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';
import { LEVEL_META } from '../engine/placement';
import { READERS, READER_LEVELS, getReadersByLevel, wordCount, type Reader } from '../data/library/readers';
import { getLibraryProgressMap, markReaderComplete } from '../store/db';
import type { Cefr } from '../types';

type Progress = Record<string, { completedAt: string; bestScore: number }>;

let currentFilter: Cefr | 'all' = 'all';

function levelBadge(level: Cefr): string {
  const meta = LEVEL_META[level];
  return `<span class="lib-level" dir="ltr" title="${escapeHtml(meta.ar)}">${escapeHtml(level)}</span>`;
}

function readerCard(reader: Reader, progress: Progress): string {
  const done = progress[reader.id];
  const wc = wordCount(reader);
  return `
  <article class="lib-card${done ? ' lib-card-done' : ''}">
    <div class="lib-card-top">${levelBadge(reader.level)}<span class="lib-topic">${escapeHtml(reader.topic)}</span></div>
    <h2 class="lib-title" dir="ltr">${escapeHtml(reader.title)}</h2>
    <p class="lib-title-ar">${escapeHtml(reader.titleAr)}</p>
    <p class="lib-summary">${escapeHtml(reader.summary)}</p>
    <div class="lib-meta" dir="rtl">
      <span><b dir="ltr">${wc}</b> كلمة</span>
      <span>·</span>
      <span><b dir="ltr">${reader.estMinutes}</b> دقائق</span>
      <span>·</span>
      <span>مسرد <b dir="ltr">${reader.vocab.length}</b></span>
    </div>
    <div class="lib-card-foot">
      ${done
        ? `<span class="lib-done-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4.5 4.5L19 8"/></svg>مقروءة — أفضل نتيجة <b dir="ltr">${done.bestScore}%</b></span>`
        : '<span class="lib-not-read">لم تُقرأ بعد</span>'}
      <button class="btn btn-gold lib-open-btn" data-reader="${escapeHtml(reader.id)}">اقرأ النص</button>
    </div>
  </article>`;
}

function renderHeroStats(progress: Progress): string {
  const doneCount = READERS.filter((r) => progress[r.id]).length;
  const highCount = READERS.filter((r) => (progress[r.id]?.bestScore ?? 0) >= 60).length;
  const pct = Math.round((doneCount / READERS.length) * 100);
  return `
    <div class="lib-stats" aria-live="polite">
      <div class="lib-stat"><b dir="ltr">${doneCount}</b><span>من ${READERS.length} نصوصاً قُرئت</span></div>
      <div class="lib-stat"><b dir="ltr">${highCount}</b><span>اجترت أسئلة فهمها بنجاح</span></div>
      <div class="lib-stat lib-stat-bar"><span class="lib-stat-label" dir="ltr">${pct}%</span><span class="lib-bar"><span class="lib-bar-fill" style="width:${pct}%"></span></span></div>
    </div>`;
}

function renderList(root: HTMLElement, progress: Progress): void {
  const visible = currentFilter === 'all' ? READERS : getReadersByLevel(currentFilter);
  const chips = ['all', ...READER_LEVELS] as const;

  root.innerHTML = `
<div class="screen library-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>مكتبة طَلَاقَة</b><small dir="ltr">GRADED LIBRARY</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="lib-wrap">
    <section class="lib-hero">
      <span class="unit-kicker">اقرأ بمستواك — من S0 إلى C2</span>
      <h1>المكتبة المتدرّجة</h1>
      <p>نصوص إنجليزية حقيقية مختارة ومكتوبة لكل مستوى CEFR، مع مسرد عربي وأسئلة فهم بشرح عربي. كل نص يضعك — ولا يرميك — في حدود مستواك.</p>
      ${renderHeroStats(progress)}
    </section>

    <div class="lib-chips" role="group" aria-label="تصفية حسب المستوى">
      ${chips.map((lvl) => {
        const count = lvl === 'all' ? READERS.length : getReadersByLevel(lvl).length;
        const active = currentFilter === lvl;
        const label = lvl === 'all' ? 'الكل' : lvl;
        return `<button class="lib-chip${active ? ' lib-chip-active' : ''}" data-level="${lvl}" aria-pressed="${active}">${escapeHtml(label)}<span dir="ltr">${count}</span></button>`;
      }).join('')}
    </div>

    <section class="lib-grid" id="libGrid">
      ${visible.map((r) => readerCard(r, progress)).join('')}
    </section>

    <p class="exam-hall-note">◆ كل نص يُقرأ بكاملك — لا «قصّ ولصق» ولا جوجل أثناء القراءة. بعد الانتهاء سلّم إجاباتك وستُحفظ نتيجتك هنا.</p>
  </main>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => { stopSpeaking(); go('building'); });
  root.querySelectorAll<HTMLButtonElement>('.lib-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.level as Cefr | 'all';
      renderList(root, progress);
    });
  });
  root.querySelectorAll<HTMLButtonElement>('.lib-open-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const reader = READERS.find((r) => r.id === btn.dataset.reader);
      if (reader) renderReader(root, reader, progress);
    });
  });
}

function renderReader(root: HTMLElement, reader: Reader, progress: Progress): void {
  const wc = wordCount(reader);
  const done = progress[reader.id];
  const listenBtn = speechSupported()
    ? `<button id="listenBtn" class="btn btn-ghost lib-listen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>استمع للنص</button>`
    : '';

  root.innerHTML = `
<div class="screen library-screen">
  <header class="topbar topbar-paper">
    <button id="backToLibraryBtn" class="icon-btn" aria-label="عودة إلى المكتبة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>${escapeHtml(reader.titleAr)}</b><small dir="ltr">${escapeHtml(reader.level)} · ${wc} WORDS</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="lib-wrap">
    <article class="lib-doc" aria-label="النص">
      <div class="lib-doc-head">
        ${levelBadge(reader.level)}
        <span class="lib-topic">${escapeHtml(reader.topic)}</span>
        <span class="lib-meta-inline"><b dir="ltr">${reader.estMinutes}</b> دقائق · مسرد <b dir="ltr">${reader.vocab.length}</b></span>
        ${done ? `<span class="lib-done-mark lib-done-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4.5 4.5L19 8"/></svg>أفضل نتيجة <b dir="ltr">${done.bestScore}%</b></span>` : ''}
      </div>
      <h1 class="lib-doc-title" dir="ltr">${escapeHtml(reader.title)}</h1>
      ${reader.paragraphs.map((p) => `<p class="lib-paragraph" dir="ltr">${escapeHtml(p)}</p>`).join('')}
      ${listenBtn ? `<div class="lib-listen-row">${listenBtn}</div>` : ''}
    </article>

    <section class="lib-vocab" aria-label="المسرد">
      <button id="vocabToggle" class="lib-vocab-toggle" aria-expanded="false">
        <span>المسرد — الكلمات الصعبة بمعناها العربي</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div id="vocabPanel" class="lib-vocab-panel" hidden>
        <dl class="lib-vocab-list">
          ${reader.vocab.map((v) => `<div class="lib-vocab-item"><dt dir="ltr">${escapeHtml(v.term)}</dt><dd>${escapeHtml(v.meaning)}</dd></div>`).join('')}
        </dl>
      </div>
    </section>

    <section class="lib-quiz" id="libQuiz" aria-label="أسئلة الفهم">
      <h2 class="lib-quiz-title">أسئلة الفهم</h2>
      <p class="lib-quiz-sub">أجب بفهمك من النص — بلا ترجمة وبلا جوجل. تُحفظ نتيجتك بعد التسليم.</p>
      <div id="quizQuestions"></div>
      <div id="quizFeedback" class="lib-quiz-feedback" hidden></div>
      <div class="lib-quiz-actions">
        <button id="submitQuizBtn" class="btn btn-gold btn-xl" disabled>سلّم الإجابات</button>
        <button id="retryQuizBtn" class="btn btn-ghost" hidden>حاول مرة أخرى</button>
      </div>
    </section>
  </main>
</div>`;

  root.querySelector('#backToLibraryBtn')!.addEventListener('click', () => {
    stopSpeaking();
    renderList(root, progress);
  });

  if (listenBtn) {
    root.querySelector('#listenBtn')!.addEventListener('click', () => {
      speakEnglish(reader.paragraphs.join(' '));
    });
  }

  const vocabToggle = root.querySelector<HTMLButtonElement>('#vocabToggle')!;
  const vocabPanel = root.querySelector<HTMLElement>('#vocabPanel')!;
  vocabToggle.addEventListener('click', () => {
    const expanded = vocabToggle.getAttribute('aria-expanded') === 'true';
    vocabToggle.setAttribute('aria-expanded', String(!expanded));
    vocabPanel.hidden = expanded;
  });

  /* ── منطق أسئلة الفهم ── */
  const quizQuestions = root.querySelector<HTMLElement>('#quizQuestions')!;
  const submitBtn = root.querySelector<HTMLButtonElement>('#submitQuizBtn')!;
  const retryBtn = root.querySelector<HTMLButtonElement>('#retryQuizBtn')!;
  const feedback = root.querySelector<HTMLElement>('#quizFeedback')!;
  const selected = new Map<string, number>();

  const renderQuestions = (answered: boolean) => {
    quizQuestions.innerHTML = reader.questions.map((q, qi) => `
      <fieldset class="lib-q" data-qid="${escapeHtml(q.id)}">
        <legend class="lib-q-legend"><span dir="ltr">${qi + 1}.</span> <span dir="ltr">${escapeHtml(q.question)}</span></legend>
        ${q.options.map((opt, oi) => `
          <button type="button" class="lib-option" data-oi="${oi}" ${answered ? 'disabled' : ''}>
            <span class="lib-option-mark">${['A', 'B', 'C', 'D'][oi]}</span>
            <span class="lib-option-text" dir="ltr">${escapeHtml(opt)}</span>
          </button>`).join('')}
        <p class="lib-q-explain" hidden>${answered ? `<b>الشرح:</b> ${escapeHtml(q.explanation)}` : ''}</p>
      </fieldset>`).join('');

    quizQuestions.querySelectorAll<HTMLElement>('.lib-q').forEach((fs) => {
      const qid = fs.dataset.qid!;
      fs.querySelectorAll<HTMLButtonElement>('.lib-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          selected.set(qid, Number(btn.dataset.oi));
          fs.querySelectorAll('.lib-option').forEach((b) => b.classList.toggle('lib-option-selected', b === btn));
          submitBtn.disabled = selected.size < reader.questions.length;
        });
      });
    });
  };

  renderQuestions(false);

  submitBtn.addEventListener('click', () => {
    const total = reader.questions.length;
    const correct = reader.questions.filter((q) => selected.get(q.id) === q.answer).length;
    const pct = Math.round((correct / total) * 100);

    renderQuestions(true);
    quizQuestions.querySelectorAll<HTMLElement>('.lib-q').forEach((fs) => {
      const qid = fs.dataset.qid!;
      const q = reader.questions.find((x) => x.id === qid)!;
      const chosen = selected.get(qid);
      fs.querySelectorAll<HTMLButtonElement>('.lib-option').forEach((btn) => {
        const oi = Number(btn.dataset.oi);
        if (oi === q.answer) btn.classList.add('lib-option-correct');
        else if (oi === chosen) btn.classList.add('lib-option-wrong');
      });
      const explain = fs.querySelector<HTMLElement>('.lib-q-explain')!;
      explain.hidden = false;
    });

    feedback.innerHTML = `
      <div class="lib-result ${pct >= 60 ? 'lib-result-pass' : 'lib-result-fail'}">
        <b dir="ltr">${pct}%</b>
        <span>${pct >= 60
          ? `أجبت صحيحاً عن ${correct} من ${total} — أحسنت! أُضيفت القراءة إلى سجلك.`
          : `أجبت صحيحاً عن ${correct} من ${total} — راجع النص وحاول مرة أخرى. القراءة تُبنى بالتراكم.`}</span>
      </div>`;
    feedback.hidden = false;
    submitBtn.hidden = true;
    retryBtn.hidden = false;
    stopSpeaking();

    void markReaderComplete(reader.id, pct).then(() => {
      progress[reader.id] = { completedAt: new Date().toISOString(), bestScore: Math.max(progress[reader.id]?.bestScore ?? 0, pct) };
      toast(pct >= 60 ? 'أُضيف النص إلى سجلك' : 'سُجّلت نتيجتك — عُد إلى النص وحاول مجدداً');
    });
  });

  retryBtn.addEventListener('click', () => {
    selected.clear();
    quizQuestions.querySelectorAll('.lib-option-selected, .lib-option-correct, .lib-option-wrong').forEach((b) => {
      b.classList.remove('lib-option-selected', 'lib-option-correct', 'lib-option-wrong');
    });
    feedback.hidden = true;
    feedback.innerHTML = '';
    submitBtn.hidden = false;
    submitBtn.disabled = true;
    retryBtn.hidden = true;
    renderQuestions(false);
  });
}

function renderLibrary(root: HTMLElement): void {
  root.innerHTML = `<div class="screen library-screen"><main class="lib-wrap"><p class="review-empty-sub">جارٍ فتح المكتبة…</p></main></div>`;
  void getLibraryProgressMap()
    .then((progress) => renderList(root, progress))
    .catch(() => renderList(root, {}));
}

registerScreen('library', renderLibrary);
