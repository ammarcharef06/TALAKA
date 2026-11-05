import { go, registerScreen } from '../router';
import { getCurrentStudent, clearAllStudents, exportStudentFile, getProgressMap, getAllSrsStates } from '../store/db';
import { sealSVG, initialsOf } from '../ui/seal';
import { showConfirm, toast } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';
import { UNITS } from '../data/academy/course';
import { countDueCards } from '../data/academy/deck';
import type { StudentRecord } from '../types';

interface Hall {
  id: string;
  icon: string;
  name: string;
  desc: string;
}

const HALLS: Hall[] = [
  { id: 'classroom', name: 'الفصل الافتراضي', desc: 'المحطتان الأولى والثانية — اثنا عشر درساً من الحروف حتى حوار المقهى وثقة الحديث', icon: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14Z"/><path d="M6.5 11.5v4.8c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.8"/><path d="M21.5 9.5V15"/>' },
  { id: 'review', name: 'ردهة التكرار المتباعد', desc: 'بطاقات تُعيد لك معرفتك قبل نسيانها — بلا ضغط ولا نقاط، فقط تذكير في موعده', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>' },
  { id: 'library', name: 'المكتبة', desc: 'كتب ومنهج متدرج من S0 إلى C2 — تقرأ في أي ساعة تشاء', icon: '<path d="M4 6a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M19 14H6a2 2 0 0 0-2 2"/>' },
  { id: 'cafe', name: 'مقهى طَلَاقَة', desc: 'أول حوار صوتي حقيقي مع «بسام» — تحدث بميكروفونك أو اكتب، واختم الصورة في سجلك', icon: '<path d="M4 10h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M17 11h2.2a2.3 2.3 0 0 1 0 4.6H17"/><path d="M7.5 6.5c1-1 1-2 0-3M11.5 6.5c1-1 1-2 0-3"/>' },
  { id: 'exam', name: 'قاعة الاختبارات', desc: 'امتحانات مشددة للانتقال بين المستويات — من A1 حتى C2', icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>' },
  { id: 'transcript', name: 'السجل الأكاديمي', desc: 'Transcript كامل بدرجاتك — وثيقتك الرسمية للجامعة والمهنة', icon: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9.5 8h5M9.5 12h5"/>' },
  { id: 'career', name: 'المسار المهني — Career Hub', desc: 'تدريب مكثف على مقابلات العمل بالإنجليزية حتى التوقيع', icon: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>' },
  { id: 'clinic', name: 'عيادة أخطاء العرب', desc: 'جلسات مركزة على أكثر أخطاء العرب تكراراً — نطقاً وقواعد وأسلوباً', icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>' },
  { id: 'mirror', name: 'بوابة النسخ اللامركزية', desc: 'طلاقة تعيش على GitHub Pages وCloudflare Pages وIPFS — تنزيل نسخة كاملة من الأكاديمية', icon: '<circle cx="5" cy="12" r="2.4"/><circle cx="12" cy="5" r="2.4"/><circle cx="19" cy="12" r="2.4"/><circle cx="12" cy="19" r="2.4"/><path d="M7.3 10.9 9.7 7.1M14.3 7.1l2.4 3.8M16.7 13.1 14.3 16.9M9.7 16.9l-2.4-3.8"/>' },
];

function hallIcon(paths: string): string {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

function renderBuilding(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen building-screen">
  <header class="topbar">
    <div class="topbar-brand">${sealSVG(38, 'onDark')}<div class="topbar-titles"><b>طَلَاقَة</b><small dir="ltr">TALAQA ACADEMY</small></div></div>
    <div class="spacer"></div>
    <div id="studentChip" class="student-chip" hidden></div>
    <button id="exportBtn" class="icon-btn" title="تنزيل ملف بطاقتي (سيادتك أنت)" aria-label="تنزيل ملف بطاقتي"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/></svg></button>
    <button id="switchBtn" class="icon-btn" title="طالب آخر / مسح هذا الجهاز" aria-label="طالب آخر"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 20a5.2 5.2 0 0 1 5-4"/></svg></button>
  </header>

  <section class="building-hero">
    <h1 class="building-title">مبنى الأكاديمية</h1>
    <p class="building-sub">اختر جناحاً. الأجنحة تُفتتح حين يكتمل بناؤها —<br/>واليوم، <b>المقهى</b> يفتح أبوابه لصوتك، والفصل وردهة المراجعة ينتظرانك.</p>
  </section>

  <section class="halls-grid" id="hallsGrid" aria-label="أجنحة الأكاديمية"></section>

  <footer class="building-foot">طَلَاقَة ملك لمن يملك نسخة منها ◆ لا يُغلق بابها أبداً ◆ لا تحتاج إذناً للعلم</footer>
</div>`;

  const grid = root.querySelector<HTMLElement>('#hallsGrid')!;
  const chip = root.querySelector<HTMLElement>('#studentChip')!;

  void getCurrentStudent().then((student) => {
    if (!student) {
      go('gate');
      return;
    }
    chip.hidden = false;
    chip.innerHTML = `
      <span class="chip-avatar">${initialsOf(student.name)}</span>
      <span class="chip-meta"><b>${escapeHtmlLocal(student.name)}</b><i dir="ltr">${escapeHtmlLocal(student.id)}</i></span>
      <span class="lvl-badge">${escapeHtmlLocal(student.level)}</span>`;

    grid.innerHTML = HALLS.map((h) => {
      if (h.id === 'exam') return examHallCard(student);
      if (h.id === 'classroom') return classroomHallCard();
      if (h.id === 'review') return reviewHallCard();
      if (h.id === 'cafe') return cafeHallCard();
      return `
      <button class="hall hall-locked" data-hall="${h.id}" aria-disabled="true">
        <span class="hall-icon">${hallIcon(h.icon)}</span>
        <span class="hall-name">${h.name}</span>
        <span class="hall-desc">${h.desc}</span>
        <span class="hall-status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="1.6"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>يُفتتح قريباً</span>
      </button>`;
    }).join('');

    grid.querySelectorAll<HTMLButtonElement>('.hall-locked').forEach((btn) => {
      btn.addEventListener('click', () => toast('هذا الجناح يُفتتح حين يكتمل المسار التأسيسي — أنت أولى به حين يُفتح'));
    });
    grid.querySelector<HTMLButtonElement>('#retakeBtn')?.addEventListener('click', () => {
      void showConfirm('إعادة تحديد المستوى تمحو تسجيلك الحالي وتبدأ كطالب جديد. متابعة؟', 'امسح وابدأ من جديد').then((ok) => {
        if (ok) void clearAllStudents().then(() => go('gate'));
      });
    });
    grid.querySelector<HTMLButtonElement>('#enterClassroomBtn')?.addEventListener('click', () => go('classroom'));
    grid.querySelector<HTMLButtonElement>('#enterReviewBtn')?.addEventListener('click', () => go('review'));
    grid.querySelector<HTMLButtonElement>('#enterCafeBtn')?.addEventListener('click', () => go('cafe'));

    // عدّاد إتمام الوحدة الأولى + عدد البطاقات المستحقة
    void Promise.all([getProgressMap(), getAllSrsStates()]).then(([map, states]) => {
      const el = grid.querySelector<HTMLElement>('#classroomProgress');
      if (el) {
        const done = UNITS.flatMap((u) => u.lessons).filter((l) => map[l.id]).length;
      const total = UNITS.flatMap((u) => u.lessons).length;
        el.textContent = done === 0 ? 'لم تبدأ بعد — الباب مفتوح' : `أتممت ${done} من ${total} دروس`;
      }
      const reviewEl = grid.querySelector<HTMLElement>('#reviewDue');
      if (reviewEl) {
        const due = countDueCards(states, map);
        reviewEl.textContent = due === 0 ? 'لا توجد بطاقات مستحقة الآن' : `${due} بطاقة تنتظرك اليوم`;
      }
      const cafeEl = grid.querySelector<HTMLElement>('#cafeDone');
      if (cafeEl) {
        const scene = map['scene-cafe-1'];
        cafeEl.textContent = scene
          ? `أفضل محاولة ${scene.bestScore}% — أعد الحوار متى شئت`
          : 'صورة واحدة متاحة اليوم — بانتظار صوتك';
      }
    });
  });

  root.querySelector('#exportBtn')!.addEventListener('click', () => {
    void getCurrentStudent().then((s) => {
      if (s) exportStudentFile(s);
    });
  });
  root.querySelector('#switchBtn')!.addEventListener('click', () => {
    void showConfirm('سيتم مسح بيانات هذا الجهاز (بطاقة الطالب ومستواه). يُنصح بتنزيل ملف بطاقتك أولاً. مسح؟', 'مسح وابدأ كطالب جديد').then((ok) => {
      if (ok) void clearAllStudents().then(() => go('gate'));
    });
  });
}

function examHallCard(student: StudentRecord): string {
  const meta = LEVEL_META[student.level];
  return `
  <div class="hall hall-open" role="group" aria-label="قاعة الاختبارات">
    <span class="hall-icon hall-icon-open">${hallIcon(HALLS.find((h) => h.id === 'exam')!.icon)}</span>
    <span class="hall-name">قاعة الاختبارات</span>
    <span class="hall-desc">اختبار تحديد المستوى — أُنجز بتاريخ ${formatDate(student.estimatedAt)}</span>
    <span class="hall-complete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4.5 4.5L19 8"/></svg>مكتمل — مستواك: <b>${escapeHtmlLocal(student.level)}</b> · ${escapeHtmlLocal(meta.ar.split('—')[0].trim())}</span>
    <button id="retakeBtn" class="btn btn-ghost btn-small">إعادة تحديد المستوى من الصفر</button>
  </div>`;
}

function classroomHallCard(): string {
  return `
  <div class="hall hall-open" role="group" aria-label="الفصل الافتراضي">
    <span class="hall-icon hall-icon-open">${hallIcon(HALLS.find((h) => h.id === 'classroom')!.icon)}</span>
    <span class="hall-name">الفصل الافتراضي</span>
    <span class="hall-desc">المحطتان الأولى والثانية — اثنا عشر درساً: من «انطق أولاً» حتى نفي الأسئلة وحوار المقهى كاملاً</span>
    <span class="hall-complete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span id="classroomProgress">جارٍ حساب التقدم…</span></span>
    <button id="enterClassroomBtn" class="btn btn-gold hall-enter-btn">دخول الفصل — ابدأ التعلم</button>
  </div>`;
}

function reviewHallCard(): string {
  return `
  <div class="hall hall-open" role="group" aria-label="ردهة التكرار المتباعد">
    <span class="hall-icon hall-icon-open">${hallIcon(HALLS.find((h) => h.id === 'review')!.icon)}</span>
    <span class="hall-name">ردهة التكرار المتباعد</span>
    <span class="hall-desc">بطاقات مولّدة من دروسك — تعاد لك قبل نسيانها بدقائق، بخوارزمية SM-2 الحقيقية</span>
    <span class="hall-complete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4.5 4.5L19 8"/></svg><span id="reviewDue">جارٍ حساب استحقاقاتك…</span></span>
    <button id="enterReviewBtn" class="btn btn-gold hall-enter-btn">ادخل الردهة — ذاكرتك أولاً</button>
  </div>`;
}

function cafeHallCard(): string {
  return `
  <div class="hall hall-open" role="group" aria-label="مقهى طَلَاقَة">
    <span class="hall-icon hall-icon-open">${hallIcon(HALLS.find((h) => h.id === 'cafe')!.icon)}</span>
    <span class="hall-name">مقهى طَلَاقَة</span>
    <span class="hall-desc">أول حوار صوتي حقيقي: اطلب من «بسام» قهوة وساندويتشاً، وادفع — بميكروفونك أو بلوحة المفاتيح</span>
    <span class="hall-complete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg><span id="cafeDone">جارٍ فتح المقهى…</span></span>
    <button id="enterCafeBtn" class="btn btn-gold hall-enter-btn">ادخل المقهى — تحدث الآن</button>
  </div>`;
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function escapeHtmlLocal(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] as string));
}

registerScreen('building', renderBuilding);
