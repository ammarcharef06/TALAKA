import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { showConfirm, escapeHtml } from '../ui/confirm';
import { session } from '../state';

const AGE_BANDS = ['أقل من 15', '15 – 17', '18 – 25', '26 – 35', '36 – 50', 'أكثر من 50'];
const GOALS = ['الدراسة والجامعة', 'العمل والمقابلات', 'السفر والهجرة', 'الحياة اليومية', 'شغف عام بالإنجليزية'];
const DAILY: { label: string; minutes: number }[] = [
  { label: '10 دقائق', minutes: 10 },
  { label: '20 دقيقة', minutes: 20 },
  { label: '30 دقيقة', minutes: 30 },
  { label: 'ساعة كاملة', minutes: 60 },
  { label: 'ساعتان أو أكثر', minutes: 120 },
];

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderAcceptance(root: HTMLElement): void {
  session.onboarding = null;
  session.result = null;

  root.innerHTML = `
<div class="screen acceptance-screen">
  <header class="topbar topbar-paper">
    <button id="backBtn" class="icon-btn" aria-label="عودة إلى البوابة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>مكتب القبول</b><small dir="ltr">ADMISSIONS OFFICE</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <div class="acceptance-body">
    <div class="agent-strip">
      <div class="agent-avatar">ر</div>
      <div class="agent-id"><b>الأستاذ راشد</b><small>مسؤول مكتب القبول — طَلَاقَة</small></div>
      <span class="agent-presence"><i></i>في المكتب</span>
    </div>
    <div id="chat" class="chat" aria-live="polite"></div>
  </div>

  <div id="composer" class="composer"></div>
</div>`;

  const chat = root.querySelector<HTMLElement>('#chat')!;
  const composer = root.querySelector<HTMLElement>('#composer')!;

  root.querySelector('#backBtn')!.addEventListener('click', () => {
    void showConfirm('الخروج من مكتب القبول يلغي طلب الالتحاق الحالي. متابعة؟', 'خروج').then((ok) => {
      if (ok) go('gate');
    });
  });

  const agentSay = async (text: string) => {
    const bubble = document.createElement('div');
    bubble.className = 'msg msg-agent';
    bubble.innerHTML = `<span class="msg-text"></span>`;
    chat.appendChild(bubble);
    scrollChat();
    const target = bubble.querySelector<HTMLElement>('.msg-text')!;
    if (reducedMotion()) {
      target.textContent = text;
      return;
    }
    target.classList.add('typing');
    // كتابة تدريجية سريعة ومحترمة
    const step = Math.max(1, Math.floor(text.length / 90));
    for (let i = 0; i < text.length; i += step) {
      target.textContent = text.slice(0, i + step);
      scrollChat();
      await wait(14);
    }
    target.textContent = text;
    target.classList.remove('typing');
  };

  const userSay = (text: string) => {
    const bubble = document.createElement('div');
    bubble.className = 'msg msg-user';
    bubble.textContent = text;
    chat.appendChild(bubble);
    scrollChat();
  };

  const scrollChat = () => {
    chat.scrollTop = chat.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
  };
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const setComposerChips = (options: string[], onPick: (v: string) => void) => {
    composer.innerHTML = `<div class="chips">${options.map((o) => `<button class="chip" data-v="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>`;
    composer.querySelectorAll<HTMLButtonElement>('.chip').forEach((btn) =>
      btn.addEventListener('click', () => onPick(btn.textContent ?? ''))
    );
  };

  const clearComposer = () => { composer.innerHTML = ''; };

  const setComposerInput = (placeholder: string, onSubmit: (v: string) => void) => {
    composer.innerHTML = `
      <form class="composer-form" id="composerForm">
        <input id="composerField" type="text" placeholder="${escapeHtml(placeholder)}" autocomplete="off" aria-label="${escapeHtml(placeholder)}"/>
        <button type="submit" class="btn btn-primary btn-composer">إرسال</button>
      </form>`;
    const form = composer.querySelector<HTMLFormElement>('#composerForm')!;
    const field = composer.querySelector<HTMLInputElement>('#composerField')!;
    field.focus();
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = field.value.trim();
      if (value.length < 2) {
        field.classList.add('field-error');
        return;
      }
      onSubmit(value);
    });
  };

  const begin = async () => {
    clearComposer();
    await wait(350);
    await agentSay('أهلاً بك في أكاديمية طَلَاقَة — أكاديمية العرب السيادية للغة الإنجليزية.');
    await wait(250);
    await agentSay('أنا الأستاذ راشد، مسؤول مكتب القبول. يسعدني لقاؤك، وأشكرك على اختيارك لنا.');
    await wait(250);
    await agentSay('قبل كل شيء — ما الاسم الكريم الذي تُفضّل أن يُسجَّل في ملفك الأكاديمي؟');

    const name = await new Promise<string>((resolve) => {
      setComposerInput('اكتب اسمك…', (v) => {
        userSay(v);
        clearComposer();
        resolve(v);
      });
    });

    const firstName = name.split(/\s+/)[0];
    await wait(300);
    await agentSay(`تشرفت بك يا ${escapeHtml(firstName)}. في أي فئة عمرية تقع؟`);
    const ageBand = await new Promise<string>((resolve) => {
      setComposerChips(AGE_BANDS, (v) => { userSay(v); clearComposer(); resolve(v); });
    });

    await wait(300);
    await agentSay('ممتاز. والآن — ما هدفك الأسمى من إتقان الإنجليزية؟');
    const goal = await new Promise<string>((resolve) => {
      setComposerChips(GOALS, (v) => { userSay(v); clearComposer(); resolve(v); });
    });

    await wait(300);
    await agentSay('أخيراً، وبكل مرونة: كم دقيقة تستطيع أن تمنح طَلَاقَة يومياً؟ الوقت ملكك، والجهد بيدك — ونحن هنا في أي وقت.');
    const daily = await new Promise<{ label: string; minutes: number }>((resolve) => {
      composer.innerHTML = `<div class="chips">${DAILY.map((d) => `<button class="chip" data-m="${d.minutes}">${escapeHtml(d.label)}</button>`).join('')}</div>`;
      composer.querySelectorAll<HTMLButtonElement>('.chip').forEach((btn) =>
        btn.addEventListener('click', () => {
          const minutes = Number(btn.dataset.m);
          const item = DAILY.find((d) => d.minutes === minutes)!;
          userSay(item.label);
          clearComposer();
          resolve(item);
        })
      );
    });

    session.onboarding = { name, ageBand, goal, dailyMinutes: daily.minutes };

    await wait(350);
    await agentSay('طلب الالتحاق الأولي مكتمل الشروط. بقي خطوة واحدة — وهي الأهم:');
    await wait(200);
    await agentSay('اختبار تحديد المستوى. لا وجود لراسب فيه، فهو تشخيص لا محاكمة. نحو ١٨ سؤالاً على ثلاثة أقسام: القواعد، المفردات، والقراءة — نحو ١٠ دقائق.');
    await wait(200);
    await agentSay(`بعدها أُعلن نتيجتك الرسمية، وأُسلّطك فوراً على مستواك الحقيقي يا ${escapeHtml(firstName)} — من S0 إلى C2. هل أنت مستعد؟`);

    composer.innerHTML = `<button id="startExamBtn" class="btn btn-primary btn-xl start-exam">أنا مستعد — ابدأ اختبار تحديد المستوى</button>`;
    scrollChat();
    composer.querySelector('#startExamBtn')!.addEventListener('click', () => go('exam'));
  };

  void begin();
}

registerScreen('acceptance', renderAcceptance);
