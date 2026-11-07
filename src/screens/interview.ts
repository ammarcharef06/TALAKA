/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المقابلة: محرك حتمي بأسلوب المقهى
   المحاور يسأل (بصوت المتحدث + نص)، أنت تجيب (صوت أو كتابة)،
   المُقيّم يفحص الكلمات المفتاحية ويعطيك درجة ونصائح أداء.
   لا أحد يستمع إليك — التحليل كله على جهازك.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG } from '../ui/seal';
import { escapeHtml, toast } from '../ui/confirm';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';
import { getSpeechRecognitionCtor } from '../engine/voice';
import { SettingsEngine } from '../engine/settings';
import { scenarioById, type InterviewScenario } from '../data/career/scenarios';
import {
  buildInterviewResult,
  evaluateAnswer,
  type InterviewEvaluation,
  type InterviewQuestionEntry,
  type InterviewVerdict,
} from '../engine/interview';
import { getCurrentStudent, getInterviewBestMap, saveInterviewResult } from '../store/db';
import type { StudentRecord } from '../types';

interface RecognitionAlternative { transcript: string }
interface RecognitionResult { [index: number]: RecognitionAlternative; length: number }
interface RecognitionEvent { results: { [index: number]: RecognitionResult; length: number } }
interface RecognitionLike {
  lang: string; interimResults: boolean; maxAlternatives: number;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void; stop(): void; abort(): void;
}

interface InterviewContext {
  student: StudentRecord;
  scenario: InterviewScenario;
  startedAt: number;
  entries: InterviewQuestionEntry[];
  /** حارس ضد النقر المزدوج على «أنهِ المقابلة» — يمنع حفظ المحاولة مرتين */
  finished?: boolean;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m} دقيقة و ${String(s).padStart(2, '0')} ثانية`;
}

function verdictMeta(v: InterviewVerdict): { cls: string; label: string; note: string } {
  switch (v) {
    case 'strong':
      return { cls: 'eval-strong', label: 'إجابتك قوية', note: 'المحاور سيتذكر هذه الإجابة — هذه هي الطاقة المطلوبة في المقابلات الحقيقية.' };
    case 'partial':
      return { cls: 'eval-partial', label: 'إجابة جزئية', note: 'الفكرة موجودة — لكن كلمات المحاور المفتاحية لم تُرصد. راجع «نموذج الإجابة» وابن جملك حولها.' };
    default:
      return { cls: 'eval-weak', label: 'تحتاج عملاً', note: 'إجابتك بعيدة عن الموضوع — هذا التمرين صُنع لهذا. اقرأ نموذج الإجابة والنصائح، ثم أعد المحاولة.' };
  }
}

function topbar(titleAr: string, titleEn: string): string {
  return `
  <header class="topbar topbar-paper">
    <button id="interviewBackBtn" class="icon-btn" aria-label="عودة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>${escapeHtml(titleAr)}</b><small dir="ltr">${escapeHtml(titleEn)}</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>`;
}

function renderIntro(root: HTMLElement, student: StudentRecord, scenario: InterviewScenario): void {
  root.innerHTML = `
<div class="screen interview-screen">
  ${topbar(scenario.titleAr, 'JOB INTERVIEW')}
  <main class="interview-wrap">
    <article class="interview-intro">
      <span class="unit-kicker">مقابلة عمل محاكاة</span>
      <h1 class="interview-title" dir="ltr">${escapeHtml(scenario.title)}</h1>
      <p class="interview-role">الدور: <b>${escapeHtml(scenario.roleAr)}</b> · ${scenario.questions.length} أسئلة · النجاح من <b dir="ltr">${scenario.passScore}%</b></p>
      <div class="interview-howto">
        <h2>كيف تجري المقابلة؟</h2>
        <ol>
          <li>كل سؤال يقرؤه لك المحاور <b>بصوت المتحدث</b> — ويمكنك الضغط على «أعد السؤال» في أي وقت.</li>
          <li>أجب <b>بالإنجليزية</b> — بصوتك عبر الميكروفون (مع إذن المتصفح) أو بالكتابة.</li>
          <li>المُقيّم يلتقط الكلمات المفتاحية في إجابتك ويعطيك درجة — هذا تدريب لا امتحان، لا أحد يستمع إليك.</li>
          <li>بعد كل سؤال ترى نموذج الإجابة والنصائح — والأفضل أن تبني على فكرتك أنت.</li>
        </ol>
      </div>
      <p class="interview-honest">التقييم بالكلمات المفتاحية إرشادي — يقيس ما تقوله لا كيف تطبخه. المقابلة الحقيقية تقيس الاثنين.</p>
      <button id="startInterviewBtn" class="btn btn-gold btn-xl">ابدأ المقابلة — والله معك</button>
    </article>
  </main>
</div>`;

  root.querySelector('#interviewBackBtn')!.addEventListener('click', () => { stopSpeaking(); go('career'); });
  root.querySelector('#startInterviewBtn')!.addEventListener('click', () => {
    const ctx: InterviewContext = { student, scenario, startedAt: Date.now(), entries: [] };
    renderQuestion(root, ctx, 0);
  });
}

function renderQuestion(root: HTMLElement, ctx: InterviewContext, index: number): void {
  const q = ctx.scenario.questions[index];
  const progress = ctx.scenario.questions.map((_, i) => {
    const e = ctx.entries[i];
    const cls = e ? `interview-dot interview-dot-${e.verdict}` : 'interview-dot';
    return `<span class="${cls}" aria-hidden="true"></span>`;
  }).join('');

  root.innerHTML = `
<div class="screen interview-screen">
  ${topbar(ctx.scenario.titleAr, `QUESTION ${index + 1} / ${ctx.scenario.questions.length}`)}
  <main class="interview-wrap">
    <div class="interview-progress" role="progressbar" aria-valuenow="${index + 1}" aria-valuemin="1" aria-valuemax="${ctx.scenario.questions.length}">${progress}</div>

    <section class="interviewer-block">
      <div class="interviewer-avatar" aria-hidden="true">${sealSVG(52, 'onPaper')}</div>
      <div class="interviewer-bubble">
        <p class="interviewer-label">المحاور المحترف</p>
        <p class="interviewer-question" dir="ltr">${escapeHtml(q.question)}</p>
        <button id="repeatQuestionBtn" class="interviewer-repeat" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
          أعد السؤال
        </button>
      </div>
    </section>

    <section class="answer-pane" aria-label="إجابتك">
      <label class="answer-label" for="answerInput">إجابتك — اكتب أو تحدث بالإنجليزية</label>
      <textarea id="answerInput" class="answer-input" rows="6" dir="ltr" placeholder="مثال: I have three years of experience…" spellcheck="false"></textarea>
      <div class="answer-foot">
        <span class="answer-wordcount" id="wordCount" dir="ltr">0 words</span>
        <button id="micBtn" class="mic-btn" type="button" ${speechSupported() ? '' : 'hidden'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 19v3"/></svg>
          <span id="micLabel">تحدث</span>
        </button>
      </div>
      <div class="answer-actions">
        <button id="submitAnswerBtn" class="btn btn-gold btn-xl" disabled>سلّم الإجابة</button>
        <button id="skipQuestionBtn" class="btn btn-ghost">تخطَّ هذا السؤال</button>
      </div>
    </section>
  </main>
</div>`;

  if (speechSupported()) speakEnglish(q.question);

  const back = root.querySelector('#interviewBackBtn')!;
  back.addEventListener('click', () => { stopSpeaking(); go('career'); });
  root.querySelector('#repeatQuestionBtn')!.addEventListener('click', () => speakEnglish(q.question));

  const input = root.querySelector<HTMLTextAreaElement>('#answerInput')!;
  const wordCountEl = root.querySelector<HTMLElement>('#wordCount')!;
  const submitBtn = root.querySelector<HTMLButtonElement>('#submitAnswerBtn')!;
  const skipBtn = root.querySelector<HTMLButtonElement>('#skipQuestionBtn')!;
  const micBtn = root.querySelector<HTMLButtonElement>('#micBtn')!;
  const micLabel = root.querySelector<HTMLElement>('#micLabel')!;

  const updateCount = () => {
    const words = input.value.trim().split(/\s+/).filter(Boolean).length;
    wordCountEl.textContent = `${words} word${words === 1 ? '' : 's'}`;
    submitBtn.disabled = input.value.trim().length < 2;
  };
  input.addEventListener('input', updateCount);

  /* ── الميكروفون (نفس نمط المقهى) ── */
  const SR = getSpeechRecognitionCtor();
  let recognition: RecognitionLike | null = null;
  let listening = false;
  micBtn.addEventListener('click', () => {
    if (!SR || listening) return;
    try {
      const Ctor = SR as unknown as { new (): RecognitionLike };
      recognition = new Ctor();
      recognition.lang = SettingsEngine.recognitionLang();
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognition.onresult = (event) => {
        const alt = event.results[0]?.[0]?.transcript ?? '';
        listening = false;
        micBtn.classList.remove('mic-listening');
        micLabel.textContent = 'تحدث';
        if (alt) {
          input.value = (input.value.trim() ? input.value.trim() + ' ' : '') + alt;
          updateCount();
        }
      };
      recognition.onerror = () => {
        listening = false;
        micBtn.classList.remove('mic-listening');
        micLabel.textContent = 'تحدث';
        toast('لم أسمعك بوضوح — حاول مرة أخرى أو اكتب');
      };
      recognition.onend = () => {
        listening = false;
        micBtn.classList.remove('mic-listening');
        micLabel.textContent = 'تحدث';
      };
      recognition.start();
      listening = true;
      micBtn.classList.add('mic-listening');
      micLabel.textContent = 'يستمع…';
    } catch {
      toast('تعذر فتح الميكروفون — يمكنك الكتابة دائماً');
    }
  });

  const finish = (answer: string) => {
    const evaluation = evaluateAnswer(q, answer);
    const entry: InterviewQuestionEntry = {
      questionId: q.id,
      order: q.order,
      question: q.question,
      answer: answer.trim(),
      score: evaluation.score,
      verdict: evaluation.verdict,
      wordCount: evaluation.wordCount,
    };
    ctx.entries.push(entry);
    stopSpeaking();
    renderEvaluation(root, ctx, index, entry, evaluation);
  };

  submitBtn.addEventListener('click', () => finish(input.value));
  skipBtn.addEventListener('click', () => finish(''));
}

function renderEvaluation(root: HTMLElement, ctx: InterviewContext, index: number, entry: InterviewQuestionEntry, evaluation: InterviewEvaluation): void {
  const q = ctx.scenario.questions[index];
  const v = verdictMeta(entry.verdict);
  const isLast = index + 1 === ctx.scenario.questions.length;

  const hitsHtml = evaluation.hits.map((k) => `<span class="eval-chip eval-chip-hit" dir="ltr">${escapeHtml(k)}</span>`).join(' ');
  const missedHtml = evaluation.missed.map((k) => `<span class="eval-chip eval-chip-miss" dir="ltr">${escapeHtml(k)}</span>`).join(' ');

  root.innerHTML = `
<div class="screen interview-screen">
  ${topbar(ctx.scenario.titleAr, `QUESTION ${index + 1} / ${ctx.scenario.questions.length} — FEEDBACK`)}
  <main class="interview-wrap">
    <section class="eval-card ${v.cls}" aria-label="نتيجة السؤال">
      <div class="eval-head">
        <div class="eval-score"><b dir="ltr">${entry.score}</b><span dir="ltr">/100</span></div>
        <div>
          <p class="eval-verdict">${escapeHtml(v.label)}</p>
          <p class="eval-wordcount" dir="ltr">${entry.wordCount} words</p>
        </div>
        <div class="eval-question-mini" dir="ltr">${escapeHtml(q.question)}</div>
      </div>
      <p class="eval-note">${escapeHtml(v.note)}</p>

      <div class="eval-chips-block">
        <span class="eval-chips-label">الكلمات التي رصدناها في إجابتك:</span>
        <div class="eval-chips">${hitsHtml || '<span class="eval-chip eval-chip-empty">لم نرصد كلمات مفتاحية — التمرين موجود لهذا بالضبط</span>'}</div>
      </div>
      <div class="eval-chips-block">
        <span class="eval-chips-label">كلمات مفتاحية لم تُذكر:</span>
        <div class="eval-chips">${missedHtml || '<span class="eval-chip eval-chip-hit" dir="ltr">كل الكلمات رُصدت — ممتاز</span>'}</div>
      </div>

      <details class="eval-model">
        <summary>نموذج الإجابة والنصائح</summary>
        <p class="eval-model-text" dir="ltr">${escapeHtml(q.modelAnswer)}</p>
        <p class="eval-model-ar">${escapeHtml(q.modelAnswerAr)}</p>
        <ul class="eval-tips">${q.tipsAr.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
      </details>

      <button id="nextQuestionBtn" class="btn btn-gold btn-xl">${isLast ? 'أنهِ المقابلة واطلع المحضر' : 'السؤال التالي ←'}</button>
    </section>
  </main>
</div>`;

  root.querySelector('#interviewBackBtn')!.addEventListener('click', () => { stopSpeaking(); go('career'); });
  root.querySelector('#nextQuestionBtn')!.addEventListener('click', (ev) => {
    if (isLast) {
      (ev.currentTarget as HTMLButtonElement).disabled = true;
      finishInterview(root, ctx);
    } else renderQuestion(root, ctx, index + 1);
  });
}

function finishInterview(root: HTMLElement, ctx: InterviewContext): void {
  if (ctx.finished) return;
  ctx.finished = true;
  const durationSeconds = Math.round((Date.now() - ctx.startedAt) / 1000);
  const result = buildInterviewResult(ctx.student.id, ctx.scenario.id, ctx.scenario, ctx.entries, durationSeconds);
  const passed = result.passed;
  const termsCount = ctx.scenario.questions.reduce((sum, q) => sum + q.terms.length, 0);

  void saveInterviewResult(result)
    .then(() => {
      if (passed) toast(`اجتزت المقابلة — ${termsCount} بطاقة مهنية وُلدت في ردهة التكرار المتباعد`);
      else toast('سُجِّلت نتيجتك — كل محاولة تُحسب نقاطاً في التمرين');
      return getInterviewBestMap();
    })
    .then((best) => renderReport(root, ctx, result, best[ctx.scenario.id]))
    .catch(() => {
      toast('تعذر حفظ المحضر على هذا الجهاز — نتيجتك معروضة الآن');
      renderReport(root, ctx, result);
    });
}

function renderReport(root: HTMLElement, ctx: InterviewContext, result: ReturnType<typeof buildInterviewResult>, best?: { bestScore: number; attempts: number; passed: boolean }): void {
  const passed = result.passed;
  const rows = result.perQuestion
    .map(
      (e) => `
      <tr>
        <td dir="ltr">${e.order}</td>
        <td dir="ltr" class="report-q">${escapeHtml(e.question)}</td>
        <td dir="ltr">${e.score}%</td>
        <td>${e.verdict === 'strong' ? 'قوية' : e.verdict === 'partial' ? 'جزئية' : 'ضعيفة'}</td>
      </tr>`
    )
    .join('');

  root.innerHTML = `
<div class="screen interview-screen">
  ${topbar('محضر المقابلة', 'INTERVIEW REPORT')}
  <main class="interview-wrap">
    <article class="report-document ${passed ? 'report-passed' : 'report-failed'}" aria-label="محضر المقابلة">
      <header class="report-head">
        ${sealSVG(56, 'onPaper')}
        <div>
          <b>محضر المقابلة — ${escapeHtml(ctx.scenario.titleAr)}</b>
          <small dir="ltr">${escapeHtml(ctx.scenario.title)}</small>
        </div>
        <div class="report-stamp">${passed ? 'اجتاز' : 'لم يُجتز'}</div>
      </header>
      <div class="report-meta">
        <span>المرشح: <b>${escapeHtml(ctx.student.name)}</b></span>
        <span>المدة: <b>${escapeHtml(formatDuration(result.durationSeconds))}</b></span>
        <span>التاريخ: <b>${escapeHtml(new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(result.takenAt)))}</b></span>
        <span>أفضل نتيجة: <b dir="ltr">${best ? best.bestScore : result.score}%</b>${best ? ` · المحاولات <b dir="ltr">${best.attempts}</b>` : ''}</span>
      </div>
      <div class="report-score"><b dir="ltr">${result.score}</b><span dir="ltr">/100</span></div>
      <h3 class="report-section-title">درجات الأسئلة</h3>
      <table class="transcript-table">
        <thead><tr><th>#</th><th>السؤال</th><th>الدرجة</th><th>التقييم</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      ${passed
        ? `<p class="report-note report-note-pass">اجتزت المقابلة — بطاقات الألفاظ المهنية وُلدت في ردهة التكرار المتباعد. راجعها غداً، وستجد نفسك تتحدث بطلاقة مهنية في المقابلة الحقيقية.</p>`
        : `<p class="report-note report-note-fail">النجاح من ${ctx.scenario.passScore}% — راجع نموذج الإجابة والنصائح لكل سؤال، ثم أعد المحاولة. لا حد لعدد المحاولات.</p>`}
      <p class="cert-honest">هذا المحضر محفوظ محلياً في جهازك — التقييم إرشادي بالكلمات المفتاحية ولا يحل محل حكم محاور حقيقي.</p>
    </article>
    <div class="result-actions">
      <button id="retryInterviewBtn" class="btn btn-gold btn-xl">أعد المحاولة</button>
      <button id="backToCareerBtn" class="btn btn-primary">المسار المهني</button>
      <button id="printReportBtn" class="btn btn-ghost">طباعة المحضر</button>
    </div>
  </main>
</div>`;

  root.querySelector('#interviewBackBtn')!.addEventListener('click', () => { stopSpeaking(); go('career'); });
  root.querySelector('#retryInterviewBtn')!.addEventListener('click', () => renderIntro(root, ctx.student, ctx.scenario));
  root.querySelector('#backToCareerBtn')!.addEventListener('click', () => { stopSpeaking(); go('career'); });
  root.querySelector('#printReportBtn')!.addEventListener('click', () => window.print());
}

function renderInterview(root: HTMLElement): void {
  const scenario = session.careerScenarioId ? scenarioById(session.careerScenarioId) : undefined;
  if (!scenario) {
    go('career');
    return;
  }
  root.innerHTML = `<div class="screen interview-screen"><main class="interview-wrap"><p class="review-empty-sub">جارٍ تجهيز المقابلة…</p></main></div>`;
  void getCurrentStudent().then((student) => {
    if (!student) {
      go('gate');
      return;
    }
    renderIntro(root, student, scenario);
  });
}

registerScreen('interview', renderInterview);
