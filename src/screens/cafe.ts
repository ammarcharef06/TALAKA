/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — مقهى طَلَاقَة: «بسام الباريستا»
   أول حوار صوتي حقيقي بين المتعلم والمؤسسة (مع بديل نصي كامل)
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { speakText, stopSpeaking, speechSupported } from '../ui/speak';
import { showConfirm, escapeHtml, toast } from '../ui/confirm';
import { getSpeechRecognitionCtor, matchUtterance } from '../engine/voice';
import { markLessonComplete, getProgressMap } from '../store/db';

const SCENE_ID = 'scene-cafe-1';
const MAX_ATTEMPTS_BEFORE_HINT = 2;

interface SceneTurn {
  id: string;
  agent: string; // ما يقوله بسام في بداية الجولة (قد يكون فارغاً إذا سبق أن طرح سؤاله)
  expectAny: string[]; // كلمات مقبولة للنجاح (أيٍّ منها يكفي)
  agentGood: string; // رد بسام عند نجاحك — وهو نفسه مدخل الجولة التالية
  hint: string; // جملة مقترحة تظهر بعد محاولتين خاطئتين
}

const SCENE: SceneTurn[] = [
  {
    id: 't1',
    agent: 'Good morning! Welcome to Talaqa Café. What can I get for you today?',
    expectAny: ['coffee', 'tea', 'cappuccino', 'latte', 'espresso', 'sandwich'],
    agentGood: 'A coffee, coming right up! Would you like anything else?',
    hint: 'جرّب أن تقول: «A coffee, please.»',
  },
  {
    id: 't2',
    agent: '',
    expectAny: ['sandwich', 'cake', 'nothing', 'no', 'croissant', 'muffin'],
    agentGood: "Noted. That'll be 60 pounds, please.",
    hint: "جرّب: «A cheese sandwich, please.» — أو «That's all, thanks.»",
  },
  {
    id: 't3',
    agent: '',
    expectAny: ['here', 'thank', 'okay', 'sure', 'cash', 'card', 'take', 'yes'],
    agentGood: 'Thank you! Your order will be ready in a moment — have a wonderful day.',
    hint: 'جرّب: «Here you go.» أو «Thank you.»',
  },
];

interface RecognitionAlternative {
  transcript: string;
}
interface RecognitionResult {
  [index: number]: RecognitionAlternative;
  length: number;
}
interface RecognitionEvent {
  results: {
    [index: number]: RecognitionResult;
    length: number;
  };
}
interface RecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface TranscriptLine {
  who: 'you' | 'bassam';
  text: string;
}

function renderCafe(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen cafe-screen">
  <header class="topbar">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>مقهى طَلَاقَة</b><small dir="ltr">THE TALAQA CAFÉ</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onDark')}
  </header>

  <section class="cafe-hero">
    <span class="unit-kicker">مقهى طَلَاقَة — تحت إدارة «بسام»</span>
    <h1 class="cafe-title">تحدث بثقة — كما تتحدث في الحياة</h1>
    <p class="cafe-sub">مكان آمن بالكامل لتتعثر فيه بلا خجل: بسام يسمعك، يفهمك، ويصبر عليك حتى تنطق الجملة كاملة بثقة.</p>
  </section>

  <main class="cafe-menu" id="cafeMenu" aria-label="صور الحوار المتاحة"></main>

  <footer class="building-foot">شعار المقهى: «كل خطأ في الطلب أفضل من صمتٍ كامل»</footer>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => {
    stopSpeaking();
    go('building');
  });

  const menu = root.querySelector<HTMLElement>('#cafeMenu')!;

  void getProgressMap().then((progress) => {
    const scenes: { id: string; icon: string; title: string; desc: string; available: boolean }[] = [
      { id: SCENE_ID, icon: '<path d="M4 10h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M17 11h2.2a2.3 2.3 0 0 1 0 4.6H17"/><path d="M7.5 6.5c1-1 1-2 0-3M11.5 6.5c1-1 1-2 0-3"/>', title: 'صورة ١ — أول طلب', desc: 'ادخل المقهى، اطلب قهوة وساندويتش جبنة، وادفع — حوار كامل بصوتك', available: true },
      { id: 'scene-interview', icon: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>', title: 'صورة ٢ — مقابلة العمل', desc: '«Tell me about yourself» — بسام باعتباره مدير توظيف لا يستسلم', available: false },
      { id: 'scene-airport', icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>', title: 'صورة ٣ — المطار', desc: '«May I see your passport, please?» — مشهد المطار كاملاً من الصفر', available: false },
    ];

    menu.innerHTML = scenes
      .map((s) => {
        const done = progress[s.id];
        if (!s.available) {
          return `
        <button class="cafe-scene cafe-scene-locked" data-scene="${s.id}" aria-disabled="true">
          <span class="cafe-scene-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span>
          <span class="cafe-scene-body">
            <span class="cafe-scene-title">${s.title}</span>
            <span class="cafe-scene-desc">${s.desc}</span>
          </span>
          <span class="hall-status">تُفتتح قريباً</span>
        </button>`;
        }
        return `
      <button class="cafe-scene cafe-scene-open" data-scene="${s.id}">
        <span class="cafe-scene-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span>
        <span class="cafe-scene-body">
          <span class="cafe-scene-title">${s.title}</span>
          <span class="cafe-scene-desc">${s.desc}</span>
          ${done ? `<span class="cafe-scene-done">أُتممت — أفضل محاولة ${done.bestScore}%</span>` : '<span class="cafe-scene-new">جديدة — بانتظارك</span>'}
        </span>
        <span class="cafe-scene-cta">تحدث الآن</span>
      </button>`;
      })
      .join('');

    menu.querySelectorAll<HTMLButtonElement>('.cafe-scene').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('cafe-scene-locked')) {
          toast('هذه الصورة تُفتتح بعد إتقان الصورة الأولى — خطوة خطوة');
          return;
        }
        renderScene(root);
      });
    });
  });
}

/* ═══════════ صورة المحادثة نفسها ═══════════ */
function renderScene(root: HTMLElement): void {
  let turnIndex = 0;
  let attempts = 0;
  let cleanTurns = 0; // turns answered without ever seeing the hint or failing
  let helpedTurns = 0; // turns that needed the hint / multiple attempts
  const transcript: TranscriptLine[] = [];
  let listening = false;
  let recognition: RecognitionLike | null = null;
  let textMode = false;
  let currentHintRevealed = false;

  const SR = getSpeechRecognitionCtor();
  if (!SR) textMode = true;

  root.innerHTML = `
<div class="screen scene-screen">
  <header class="topbar">
    <button id="exitSceneBtn" class="icon-btn" aria-label="إنهاء الحوار"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <div class="topbar-titles"><b>مقهى طَلَاقَة — الصورة الأولى</b><small dir="ltr">SCENE 1 — CAFÉ</small></div>
    <div class="spacer"></div>
    <div class="barista-chip"><span class="barista-avatar">ب</span><span class="barista-id"><b>بسام</b><small>الباريستا</small></span></div>
  </header>

  <main class="scene-wrap">
    <div class="chat scene-chat" id="sceneChat" aria-live="polite"></div>
    <div class="hint-box" id="hintBox" hidden></div>
  </main>

  <footer class="scene-foot">
    <p class="scene-note" id="sceneNote">بسام يستمع إليك — خذ نفسًا وتحدث براحتك.</p>
    <div class="scene-actions">
      <button id="micBtn" class="mic-btn" aria-label="تحدث الآن"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg><span id="micLabel">تحدث</span></button>
      <button id="textModeBtn" class="btn btn-ghost btn-small">اكتب بدل الحديث</button>
    </div>
    <form class="composer-form scene-textform" id="textForm" hidden>
      <input id="sceneTextInput" type="text" placeholder="اكتب ردك بالإنجليزية…" autocomplete="off" aria-label="اكتب ردك" dir="auto"/>
      <button type="submit" class="btn btn-primary">أرسل</button>
    </form>
  </footer>
</div>`;

  const chat = root.querySelector<HTMLElement>('#sceneChat')!;
  const hintBox = root.querySelector<HTMLElement>('#hintBox')!;
  const micBtn = root.querySelector<HTMLButtonElement>('#micBtn')!;
  const micLabel = root.querySelector<HTMLElement>('#micLabel')!;
  const textModeBtn = root.querySelector<HTMLButtonElement>('#textModeBtn')!;
  const textForm = root.querySelector<HTMLFormElement>('#textForm')!;
  const textInput = root.querySelector<HTMLInputElement>('#sceneTextInput')!;
  const sceneNote = root.querySelector<HTMLElement>('#sceneNote')!;

  root.querySelector('#exitSceneBtn')!.addEventListener('click', () => {
    stopSpeaking();
    recognition?.abort();
    void showConfirm('إنهاء الحوار الآن يضيع تقدمك في هذه الصورة. خروج؟', 'إنهاء الحوار').then((ok) => {
      if (ok) go('cafe');
    });
  });

  const scrollChat = () => {
    chat.scrollTop = chat.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
  };

  const addBubble = (who: 'you' | 'bassam', text: string) => {
    const div = document.createElement('div');
    div.className = who === 'you' ? 'msg msg-user' : 'msg msg-agent';
    div.dir = 'ltr';
    div.textContent = text;
    chat.appendChild(div);
    transcript.push({ who, text });
    scrollChat();
  };

  const speak = (text: string) => {
    if (speechSupported()) speakText(text);
  };

  const currentTurn = (): SceneTurn | null => SCENE[turnIndex] ?? null;

  const enableTextFallback = (reason?: string) => {
    textMode = true;
    micBtn.classList.toggle('mic-btn-disabled', Boolean(reason));
    micLabel.textContent = reason ?? 'اكتب';
    sceneNote.textContent = reason ? `الميكروفون غير متاح — ${reason}. يمكنك الكتابة بدلاً منه.` : 'وضع الكتابة مفعّل — اكتب ردك بالإنجليزية.';
    textForm.hidden = false;
    micBtn.disabled = Boolean(reason);
    if (reason) {
      textModeBtn.textContent = 'الميكروفون متوقف';
      textModeBtn.disabled = true;
    } else {
      textModeBtn.textContent = 'العودة إلى الميكروفون';
      textModeBtn.disabled = false;
      textInput.focus();
    }
  };

  const returnToVoice = () => {
    if (!SR) return;
    textMode = false;
    textForm.hidden = true;
    micBtn.disabled = false;
    micBtn.classList.remove('mic-btn-disabled');
    micLabel.textContent = 'تحدث';
    textModeBtn.textContent = 'اكتب بدل الحديث';
    sceneNote.textContent = 'وضع الصوت مفعّل — اضغط زر التحدث وقل ردك.';
  };

  const showHint = () => {
    currentHintRevealed = true;
    const turn = currentTurn();
    if (!turn) return;
    hintBox.hidden = false;
    hintBox.innerHTML = `<span class="hint-label">بسام يلمح لك:</span> ${escapeHtml(turn.hint)}`;
    sceneNote.textContent = 'اقرأ الجملة، حاول نطقها، ثم تحدث.';
  };

  const processInput = (utterance: string) => {
    const turn = currentTurn();
    if (!turn) return;
    const text = utterance.trim();
    if (text.length < 1) return;

    addBubble('you', text);
    const verdict = matchUtterance(text, turn.expectAny);
    const passed = verdict === 'strong' || (currentHintRevealed && verdict === 'weak');

    if (passed) {
      const wasClean = attempts === 0 && !currentHintRevealed;
      if (wasClean) cleanTurns += 1;
      else helpedTurns += 1;
      attempts = 0;
      currentHintRevealed = false;
      hintBox.hidden = true;
      addBubble('bassam', turn.agentGood);
      speak(turn.agentGood);
      turnIndex += 1;
      sceneNote.textContent = 'بسام يرد عليك الآن…';
      advance();
    } else {
      attempts += 1;
      const soft =
        attempts === 1
          ? verdict === 'weak'
            ? 'سمعتك… تقريباً. قلها بوضوح أكثر.'
            : 'ما فهمت ماذا تريد — هل تكرر؟'
          : 'ما زالت غامضة عليّ. خذ وقتك…';
      addBubble('bassam', soft);
      speak(soft);
      if (attempts >= MAX_ATTEMPTS_BEFORE_HINT) showHint();
      sceneNote.textContent = listening ? 'بسام ينتظر — تحدث مرة أخرى.' : 'حاول مرة أخرى، أو اكتب لو احتجت.';
    }
  };

  const advance = () => {
    const turn = currentTurn();
    if (!turn) {
      finishScene();
      return;
    }
    attempts = 0;
    currentHintRevealed = false;
    hintBox.hidden = true;
    if (turn.agent) {
      addBubble('bassam', turn.agent);
      speak(turn.agent);
    }
    sceneNote.textContent = 'بسام ينتظر ردك…';
  };

  const finishScene = () => {
    recognition?.abort();
    listening = false;
    const total = SCENE.length;
    const clean = cleanTurns;
    const score = Math.round((clean / total) * 100);

    root.innerHTML = `
<div class="screen scene-screen">
  <header class="topbar">
    <button id="backToCafeBtn" class="icon-btn" aria-label="عودة إلى المقهى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>سجل الحوار — الصورة الأولى</b><small dir="ltr">TRANSCRIPT</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="scene-wrap">
    <article class="scene-done">
      <div class="done-seal">${sealSVG(96, 'onPaper')}</div>
      <h1 class="done-title">ختمت الحوار</h1>
      <p class="done-sub">الصورة الأولى — أول طلب في مقهى طَلَاقَة</p>
      <div class="done-score" dir="ltr">${score}<small>%</small></div>
      <p class="done-best">${clean} من ${total} جولات بثقة كاملة${helpedTurns > 0 ? ` · و${helpedTurns} جولة احتاجت تلميحاً (وهذا طبيعي في المرة الأولى)` : ''}.</p>
      <section class="scene-transcript" aria-label="نص المحادثة">
        <h2>نص المحادثة</h2>
        ${transcript
          .map(
            (line) => `
          <div class="transcript-line ${line.who === 'you' ? 'transcript-you' : 'transcript-bassam'}">
            <span class="transcript-who">${line.who === 'you' ? 'أنت' : 'بسام'}</span>
            <p>${escapeHtml(line.text)}</p>
          </div>`
          )
          .join('')}
      </section>
      <div class="done-actions">
        <button id="saveSceneBtn" class="btn btn-gold btn-xl">سجّل هذا الحوار في سجلك الأكاديمي</button>
        <div class="done-actions-row">
          <button id="retrySceneBtn" class="btn btn-ghost">أعد الحوار من الصفر</button>
          <button id="backToBuildingBtn2" class="btn btn-ghost">العودة إلى المبنى</button>
        </div>
      </div>
    </article>
  </main>
</div>`;

    root.querySelector('#backToCafeBtn')!.addEventListener('click', () => {
      stopSpeaking();
      go('cafe');
    });
    root.querySelector('#retrySceneBtn')!.addEventListener('click', () => {
      stopSpeaking();
      renderScene(root);
    });
    root.querySelector('#backToBuildingBtn2')!.addEventListener('click', () => {
      stopSpeaking();
      go('building');
    });
    root.querySelector('#saveSceneBtn')!.addEventListener('click', () => {
      stopSpeaking();
      void markLessonComplete(SCENE_ID, score).then(() => {
        toast('حُفظ الحوار في سجلك الأكاديمي — أهلاً بك في زبائن المقهى الدائمين');
        renderCafe(root);
      });
    });
  };

  // تشغيل المايكروفون / رفضه
  const startListening = () => {
    if (textMode) {
      if (!SR) {
        textInput.focus();
        return;
      }
      returnToVoice();
    }
    if (!SR) {
      enableTextFallback('متصفحك لا يدعم تحويل الكلام');
      return;
    }
    if (listening) return;
    try {
      const Ctor = SR as unknown as { new (): RecognitionLike };
      recognition = new Ctor();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;
      recognition.onresult = (event) => {
        const alts = event.results[0];
        if (!alts) return;
        let best = '';
        for (let i = 0; i < Math.min(alts.length, 5); i++) {
          const alt = alts[i]?.transcript;
          if (alt) {
            best = alt;
            break;
          }
        }
        listening = false;
        micBtn.classList.remove('mic-listening');
        micLabel.textContent = 'تحدث';
        if (best) processInput(best);
      };
      recognition.onerror = (event) => {
        listening = false;
        micBtn.classList.remove('mic-listening');
        micLabel.textContent = 'تحدث';
        if (event.error === 'not-allowed' || event.error === 'service-not-available' || event.error === 'audio-capture') {
          enableTextFallback(event.error === 'not-allowed' ? 'رُفض إذن الميكروفون' : 'خدمة تحويل الكلام غير متاحة');
        } else {
          sceneNote.textContent = 'لم أسمع شيئاً بوضوح — حاول مرة أخرى أو اكتب.';
        }
      };
      recognition.onend = () => {
        listening = false;
        micBtn.classList.remove('mic-listening');
        if (!textMode) micLabel.textContent = 'تحدث';
      };
      recognition.start();
      listening = true;
      micBtn.classList.add('mic-listening');
      micLabel.textContent = 'يستمع…';
      sceneNote.textContent = 'قلت؟ تكلم الآن — بسام منصت لك.';
    } catch {
      enableTextFallback('تعذر فتح الميكروفون');
    }
  };

  micBtn.addEventListener('click', () => startListening());
  textModeBtn.addEventListener('click', () => {
    if (textMode) returnToVoice();
    else enableTextFallback();
  });
  textForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = textInput.value.trim();
    if (!v) return;
    textInput.value = '';
    recognition?.abort();
    processInput(v);
  });

  if (!SR) enableTextFallback('متصفحك لا يدعم تحويل الكلام');

  // بسام يفتح المشهد
  window.setTimeout(() => {
    const turn = currentTurn();
    if (turn?.agent) {
      addBubble('bassam', turn.agent);
      speak(turn.agent);
      sceneNote.textContent = textMode ? 'بسام ينتظر ردك — اكتب ردك بالإنجليزية أدناه.' : 'بسام ينتظر ردك — اضغط زر التحدث أو اكتب.';
    }
  }, 350);
}

registerScreen('cafe', renderCafe);
