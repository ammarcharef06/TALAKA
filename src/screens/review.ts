import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { speakEnglish, stopSpeaking, speechSupported } from '../ui/speak';
import { SRS_DECK, type DeckCard } from '../data/academy/deck';
import { CAREER_DECK } from '../data/career/scenarios';
import { getAllSrsStates, getProgressMap, getPassedInterviewScenarios, recordReview } from '../store/db';
import { initialSrsState, gradeCard, QUALITY_LABELS, type ReviewQuality } from '../engine/srs';
import { escapeHtml } from '../ui/confirm';
import type { SrsState } from '../engine/srs';

interface SessionCard {
  card: DeckCard;
  state: SrsState;
  isNew: boolean;
}

// البطاقة تولد باكتمال درسها، وبطاقات المسار المهني بأول اجتياز لمقابلتها
function careerProgressMap(passed: string[]): Record<string, { completedAt: string; bestScore: number }> {
  const map: Record<string, { completedAt: string; bestScore: number }> = {};
  for (const scenarioId of passed) {
    map[`career-${scenarioId}`] = { completedAt: new Date().toISOString(), bestScore: 60 };
  }
  return map;
}

const ALL_DECK: DeckCard[] = [...SRS_DECK, ...CAREER_DECK];

function buildQueue(
  states: Record<string, SrsState>,
  progress: Record<string, { completedAt: string; bestScore: number }>,
  passedScenarios: string[]
): SessionCard[] {
  const now = Date.now();
  const combined = { ...progress, ...careerProgressMap(passedScenarios) };
  const born: SessionCard[] = ALL_DECK.filter((c) => combined[c.lessonId]).map((card) => {
    const state = states[card.id];
    if (!state) return { card, state: initialSrsState(), isNew: true };
    if (Date.parse(state.due) <= now) return { card, state, isNew: false };
    return null;
  }).filter((c): c is SessionCard => c !== null);
  // الجديدة أولاً ثم الأقدم استحقاقاً
  born.sort((a, b) => Number(b.isNew) - Number(a.isNew) || Date.parse(a.state.due) - Date.parse(b.state.due));
  return born.slice(0, 20);
}

function renderReview(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen review-screen">
  <header class="topbar">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>ردهة التكرار المتباعد</b><small dir="ltr">SPACED REPETITION HALL</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onDark')}
  </header>
  <main class="review-wrap" id="reviewWrap"></main>
</div>`;

  const wrap = root.querySelector<HTMLElement>('#reviewWrap')!;
  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => {
    stopSpeaking();
    go('building');
  });

  void Promise.all([getAllSrsStates(), getProgressMap(), getPassedInterviewScenarios()]).then(([states, progress, passed]) => {
    const queue = buildQueue(states, progress, passed);
    const mastered = Object.values(states).filter((s) => s.reps >= 3).length;
    const nextDue = Object.values(states)
      .map((s) => Date.parse(s.due))
      .filter((t) => t > Date.now())
      .sort((a, b) => a - b)[0];

    if (queue.length === 0) {
      const born = ALL_DECK.filter((c) => ({ ...progress, ...careerProgressMap(passed) })[c.lessonId]).length;
      const nextDate = nextDue ? new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long' }).format(new Date(nextDue)) : null;
      wrap.innerHTML = `
        <div class="review-empty">
          ${sealSVG(84, 'onPaper')}
          <h1>كل بطاقاتك راجعة</h1>
          <p class="review-empty-sub">لا توجد بطاقة مستحقة الآن — وقد «أتممت» ${born} بطاقة مولودة من دروسك ومقابلاتك، و${mastered} منها وصلت حد الإتقان (3+ مراجعة).</p>
          <p class="review-empty-note">${nextDate ? `القادمة تطفو على السطح في <b>${escapeHtml(nextDate)}</b> — دماغك يعمل في الخلفية حتى وأنت نائم.` : 'أتمم دروساً جديدة لتوليد بطاقاتك — كل درس يُسقط بذوره في الردهة.'}</p>
          <button id="backToClassroomBtn" class="btn btn-primary">إلى فصولي — لأولَّد بطاقات جديدة</button>
          <button id="backToBuilding2Btn" class="btn btn-ghost">العودة إلى المبنى</button>
        </div>`;
      wrap.querySelector('#backToClassroomBtn')!.addEventListener('click', () => go('classroom'));
      wrap.querySelector('#backToBuilding2Btn')!.addEventListener('click', () => go('building'));
      return;
    }

    let index = 0;
    let goodCount = 0;

    const renderCard = () => {
      const item = queue[index];
      const { card, isNew } = item;
      wrap.innerHTML = `
        <div class="review-progress"><span class="section-chip">${isNew ? 'بطاقة جديدة' : 'مراجعة'}</span><span class="exam-counter">البطاقة ${index + 1} من ${queue.length}</span></div>
        <div class="exam-bar"><div class="exam-bar-fill" style="width:${(index / queue.length) * 100}%"></div></div>

        <article class="srs-card" id="srsCard" aria-live="polite">
          <div class="srs-front">
            <p class="srs-kicker">ترجم إلى الإنجليزية</p>
            <p class="srs-question">${escapeHtml(card.front)}</p>
            <button id="revealBtn" class="btn btn-primary srs-reveal">أظهر الجواب</button>
          </div>
          <div class="srs-back" hidden>
            <p class="srs-answer" dir="auto">${escapeHtml(card.back)}</p>
            ${card.example ? `<p class="srs-example" dir="ltr" lang="en">${escapeHtml(card.example)}</p>` : ''}
            ${card.note ? `<p class="srs-note">${escapeHtml(card.note)}</p>` : ''}
            ${card.example && speechSupported() ? `<button id="srsListenBtn" class="listen-btn srs-listen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H3v6h3.5L11 19Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg><span>استمع</span></button>` : ''}
            <div class="srs-grades" role="group" aria-label="قيّم ذاكرتك">
              ${([1, 3, 4, 5] as ReviewQuality[])
                .map(
                  (q) => `
                <button class="srs-grade grade-q${q}" data-q="${q}"><b>${QUALITY_LABELS[q].label}</b><small>${QUALITY_LABELS[q].hint}</small></button>`
                )
                .join('')}
            </div>
          </div>
        </article>`;

      wrap.querySelector('#srsListenBtn')?.addEventListener('click', () => speakEnglish(card.example ?? card.back));
      wrap.querySelector('#revealBtn')!.addEventListener('click', () => {
        wrap.querySelector<HTMLElement>('.srs-front')!.hidden = true;
        wrap.querySelector<HTMLElement>('.srs-back')!.hidden = false;
      });
      wrap.querySelectorAll<HTMLButtonElement>('.srs-grade').forEach((btn) => {
        btn.addEventListener('click', () => {
          const quality = Number(btn.dataset.q) as ReviewQuality;
          const { state, retained } = gradeCard(item.state, quality);
          if (retained) goodCount += 1;
          void recordReview(card.id, state).then(() => {
            index += 1;
            if (index < queue.length) {
              renderCard();
            } else {
              renderSessionEnd(goodCount, queue.length);
            }
          });
        });
      });
    };

    const renderSessionEnd = (good: number, total: number) => {
      const pct = Math.round((good / total) * 100);
      wrap.innerHTML = `
        <div class="review-empty">
          ${sealSVG(84, 'onPaper')}
          <h1>ختمت دفعة اليوم</h1>
          <div class="done-score" dir="ltr">${pct}<small>%</small></div>
          <p class="review-empty-sub">${good} من ${total} بطاقة عرفتها. دماغك نسخ هذه المعرفة في ذاكرتك طويلة المدى — وهذا هو الهدف.</p>
          <p class="review-empty-note">بطاقاتك ستطفو قبل نسيانها بقليل — تاريخ استحقاقها ينبثق تلقائياً. لا شيء عليك إلا أن تعود غداً.</p>
          <button id="reviewToBuildingBtn" class="btn btn-primary">العودة إلى المبنى</button>
          <button id="reviewToClassroomBtn" class="btn btn-ghost">إلى الفصل — لأولّد بطاقات جديدة</button>
        </div>`;
      wrap.querySelector('#reviewToBuildingBtn')!.addEventListener('click', () => go('building'));
      wrap.querySelector('#reviewToClassroomBtn')!.addEventListener('click', () => go('classroom'));
    };

    renderCard();
  });
}

registerScreen('review', renderReview);
