import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { UNITS, lessonAvailability } from '../data/academy/course';
import { getProgressMap } from '../store/db';
import { session } from '../state';
import { toast } from '../ui/confirm';
import type { LessonProgress } from '../types';

const RTL_STATE = {
  completed: { label: 'مكتمل', icon: '<path d="M5 13l4.5 4.5L19 8"/>' },
  locked: { label: 'مقفل', icon: '<rect x="5" y="11" width="14" height="9" rx="1.6"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>' },
} as const;

function renderClassroom(root: HTMLElement): void {
  const unit = UNITS[0];
  const totalLessons = unit.lessons.length;

  root.innerHTML = `
<div class="screen classroom-screen">
  <header class="topbar">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>الفصل الافتراضي</b><small dir="ltr">THE CLASSROOM</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onDark')}
  </header>

  <section class="classroom-hero">
    <span class="unit-kicker">الوحدة ${unit.order} — ${unit.forLevels}</span>
    <h1 class="unit-title">${unit.title}</h1>
    <p class="unit-tagline">${unit.tagline}</p>
    <div class="unit-progress" aria-label="تقدم الوحدة">
      <div class="unit-progress-bar"><i id="unitProgressFill" style="width:0%"></i></div>
      <span id="unitProgressText" class="unit-progress-text">٠ / ${totalLessons}</span>
    </div>
  </section>

  <main class="journey" id="journey" aria-label="دروس الوحدة"></main>

  <footer class="building-foot">شعار الفصل: «الخطأ مادة التعلم — والإصرار مادة النجاح»</footer>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));

  const journey = root.querySelector<HTMLElement>('#journey')!;
  const fill = root.querySelector<HTMLElement>('#unitProgressFill')!;
  const progressText = root.querySelector<HTMLElement>('#unitProgressText')!;

  void getProgressMap().then((map) => {
    const progress: Record<string, LessonProgress> = {};
    for (const [k, v] of Object.entries(map)) progress[k] = { lessonId: k, ...v };

    const states = lessonAvailability(unit.lessons, progress);
    const completedCount = unit.lessons.filter((l) => progress[l.id]).length;
    fill.style.width = `${(completedCount / totalLessons) * 100}%`;
    progressText.textContent = `${completedCount} / ${totalLessons} دروس أُتقنت`;

    journey.innerHTML = [...unit.lessons]
      .sort((a, b) => a.order - b.order)
      .map((lesson) => {
        const state = states[lesson.id];
        const best = progress[lesson.id]?.bestScore;
        const node =
          state === 'completed'
            ? `<span class="journey-node node-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${RTL_STATE.completed.icon}</svg></span>`
            : state === 'current'
              ? `<span class="journey-node node-current">${lesson.order}</span>`
              : `<span class="journey-node node-locked"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${RTL_STATE.locked.icon}</svg></span>`;

        return `
      <button class="journey-item state-${state}" data-lesson="${lesson.id}" ${state === 'locked' ? 'aria-disabled="true"' : ''}>
        ${node}
        <span class="journey-body">
          <span class="journey-title">الدرس ${lesson.order} — ${lesson.title}</span>
          <span class="journey-meta">${lesson.estMinutes} دقائق · ${lesson.practice.length} أسئلة تدريب
            ${best !== undefined ? ` · أفضل درجة: <b>${best}%</b>` : ''}
          </span>
        </span>
        ${state === 'locked' ? '<span class="journey-lock-note">أكمل ما قبله أولاً</span>' : '<span class="journey-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></span>'}
      </button>`;
      })
      .join('');

    journey.querySelectorAll<HTMLButtonElement>('.journey-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.lesson!;
        if (btn.classList.contains('state-locked')) {
          toast('أكمل الدروس السابقة أولاً — الترتيب هنا احترام للعقل');
          return;
        }
        session.currentLessonId = id;
        go('lesson');
      });
    });
  });
}

registerScreen('classroom', renderClassroom);
