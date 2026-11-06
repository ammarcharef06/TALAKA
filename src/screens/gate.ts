import { go, registerScreen } from '../router';
import { getCurrentStudent, importStudentFile } from '../store/db';
import { sealSVG } from '../ui/seal';
import { escapeHtml, toast } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';

function renderGate(root: HTMLElement): void {
  root.innerHTML = `
<main class="screen gate-screen">
  <div class="gate-watermark" aria-hidden="true">ط</div>

  <div class="gate-inner">
    <div class="gate-seal">${sealSVG(132, 'onPaper')}</div>

    <h1 class="academy-wordmark">طَلَاقَة</h1>
    <div class="academy-latin" dir="ltr">T A L A Q A</div>

    <div class="gate-divider" aria-hidden="true"><span class="gd-line"></span><span class="gd-diamond">◆</span><span class="gd-line"></span></div>

    <p class="academy-tagline">أكاديمية العرب السيادية للغة الإنجليزية</p>
    <p class="academy-mission">توأم رقمي لمؤسسة عريقة — من الصفر المطلق إلى <span class="gold-strong">C2</span><br/>
    بلا خادم، بلا حساب، بلا تكلفة — لغتك تعمل لك، في جيبك، وفي وقتك.</p>

    <div id="returningPanel" class="returning-panel" hidden></div>

    <div class="gate-actions">
      <button id="enterBtn" class="btn btn-primary btn-xl">ادخل بوابة الأكاديمية</button>
      <button id="importBtn" class="btn btn-ghost">استعادة بطاقة طالب — من ملف JSON</button>
      <button id="verifyCertBtn" class="btn btn-ghost">التحقق من شهادة — من ملف JSON</button>
      <button id="aboutBtn" class="btn btn-ghost">عن «طَلَاقَة» — وثيقة التأسيس</button>
      <input type="file" id="importFile" accept="application/json,.json" hidden />
    </div>

    <p class="gate-note">كل بياناتك محفوظة على جهازك وحده، ولا تغادر طَلَاقَة أبداً.</p>
  </div>

  <footer class="gate-foot">
    <span>مؤسسة مجانية للأبد</span><i>◆</i><span>تعمل بلا إنترنت بعد أول زيارة</span><i>◆</i><span>تُوزَّع كنسخة مستقلة عبر GitHub Pages وCloudflare Pages وIPFS</span>
  </footer>

  <dialog id="aboutDialog" class="about-dialog" aria-label="عن أكاديمية طلاقة">
    <div class="about-inner">
      <div class="about-head">${sealSVG(56, 'onDark')}<div><h2>وثيقة تأسيس طَلَاقَة</h2><p dir="ltr">TALAQA — Founding Charter</p></div></div>
      <ul class="about-list">
        <li><b>السيادة أولاً.</b> لا خادم للأكاديمية، ولا حساب، ولا تتبع، ولا إعلانات. تعمل من أي نسخة static تُرفع لأي ميرور، وحتى من قرصك الصلب.</li>
        <li><b>مجانية للأبد.</b> لا اشتراك ولا نسخة مدفوعة ولا «ترقية». العلم لا يُستأجر.</li>
        <li><b>رحلة كاملة.</b> من S0 (محو الأمية الإنجليزية) إلى C2 — فصل، مكتبة، مقهى محادثة، تكرار متباعد، وقاعات امتحانات، وشهادة تختم المسار.</li>
        <li><b>علاجٌ مُخصّص.</b> كل سؤال ودرس مصمم لعلاج أخطاء العرب الشائعة في النطق والقواعد والمفردات.</li>
        <li><b>لا بشر.</b> المعلمون والإداريون وزملاؤك في الفصل وكلاء ذكاء يعملون على جهازك (On-Device AI) — خصوصيتك لا تُمسّ ولا تُباع.</li>
        <li><b>مرونة مطلقة.</b> أنت من يحدد وقتك وجهدك — عشر دقائق أو ساعتان. الأكاديمية لا تُغلق أبوابها أبداً.</li>
      </ul>
      <p class="about-honest">الصراحة عهدٌ في هذه المؤسسة: النسخة الحالية تشمل <b>البوابة ومكتب القبول ومعاملة الالتحاق الكاملة</b> — وبقية الأجنحة تُفتتح مرحلة مرحلة، وتُعلن هنا أولاً.</p>
      <button class="btn btn-gold" id="closeAboutBtn">فهمتُ — عُد إلى البوابة</button>
    </div>
  </dialog>
</main>`;

  const enterBtn = root.querySelector<HTMLButtonElement>('#enterBtn')!;
  const returningPanel = root.querySelector<HTMLDivElement>('#returningPanel')!;

  // الزائر العائد؟
  void getCurrentStudent().then((student) => {
    if (!student) return;
    enterBtn.textContent = 'دخول مبنى الأكاديمية';
    returningPanel.hidden = false;
    const lvl = LEVEL_META[student.level];
    returningPanel.innerHTML = `
      <div class="returning-seal">◆</div>
      <div>
        <p class="returning-hi">أهلاً بعودتك، يا <b>${escapeHtml(student.name.trim().split(/\s+/)[0])}</b></p>
        <p class="returning-meta">رقمك الطالبي: <span dir="ltr">${escapeHtml(student.id)}</span> — المستوى: <b>${escapeHtml(student.level)}</b> · ${escapeHtml(lvl.ar)}</p>
      </div>`;
  });

  enterBtn.addEventListener('click', () => {
    void getCurrentStudent().then((student) => go(student ? 'building' : 'acceptance'));
  });

  const dialog = root.querySelector<HTMLDialogElement>('#aboutDialog')!;
  root.querySelector('#aboutBtn')!.addEventListener('click', () => dialog.showModal());
  root.querySelector('#closeAboutBtn')!.addEventListener('click', () => dialog.close());

  // استعادة الهوية من ملف البطاقة — السيادة تعني أنك تحمل هويتك معك
  const importBtn = root.querySelector<HTMLButtonElement>('#importBtn')!;
  const importFile = root.querySelector<HTMLInputElement>('#importFile')!;
  root.querySelector('#verifyCertBtn')!.addEventListener('click', () => go('verify'));
  importBtn.addEventListener('click', () => importFile.click());
  importFile.addEventListener('change', () => {
    const file = importFile.files?.[0];
    if (!file) return;
    void importStudentFile(file)
      .then((rec) => {
        toast(`أُعيدت بطاقتك بنجاح يا ${rec.name.trim().split(/\s+/)[0]} — أهلاً بعودتك`);
        go('building');
      })
      .catch((err: unknown) => {
        toast(err instanceof Error ? err.message : 'تعذر استيراد الملف — تحقق أنه ملف بطاقة طلاقة');
      })
      .finally(() => {
        importFile.value = '';
      });
  });
}

registerScreen('gate', renderGate);
