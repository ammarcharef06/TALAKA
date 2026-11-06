/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — قاعة الامتحانات المعتمدة
   A1 بعد المحطتين الأولى والثانية، A2 بعد الثالثة واجتياز A1،
   وB1 بعد الرابعة واجتياز A2. الاعتماد محلي، بلا خادم.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG } from '../ui/seal';
import { escapeHtml, showConfirm, toast } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';
import {
  EXAM_LEVELS,
  LEVEL_EXAM_CONFIG,
  examAvailability,
  examQuestionCount,
  passedLevels,
  type ExamAvailability,
} from '../engine/levelExam';
import { getAllLevelExamResults, getCurrentStudent, getProgressMap, clearAllStudents } from '../store/db';
import type { ExamLevel, LevelExamResult } from '../types';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function examCard(a: ExamAvailability, lastResult: LevelExamResult | null): string {
  const config = LEVEL_EXAM_CONFIG[a.level];
  const meta = LEVEL_META[a.level];
  const statusText =
    a.status === 'passed'
      ? `معتمد — أفضل درجة ${a.bestScore}%${lastResult ? ` · آخر محاولة ${formatDate(lastResult.takenAt)}` : ''}`
      : a.status === 'failed'
        ? `لم تُجتز بعد — أفضل محاولة ${a.bestScore}% · النجاح من ${config.passMark}%`
        : a.status === 'available'
          ? 'متاح الآن — لم تُجرِّب بعد'
          : (a.reason ?? 'مغلق');
  const action =
    a.status === 'passed'
      ? 'أعد الامتحان للتحسين'
      : a.status === 'failed'
        ? 'أعد المحاولة'
        : a.status === 'available'
          ? 'ابدأ الامتحان'
          : 'أكمل المنهج أولاً';

  return `
  <article class="level-exam-card status-${a.status}">
    <div class="level-exam-head">
      <span class="level-exam-code" dir="ltr">${a.level}</span>
      <div class="level-exam-title">
        <h2>${escapeHtml(meta.ar)}</h2>
        <p dir="ltr">${escapeHtml(meta.en)}</p>
      </div>
      <span class="level-exam-badge">${a.status === 'passed' ? 'معتمد ✓' : a.status === 'locked' ? 'مغلق' : a.status === 'failed' ? 'لم يُجتز' : 'متاح'}</span>
    </div>
    <p class="level-exam-desc">${escapeHtml(meta.advice)}</p>
    <dl class="level-exam-facts">
      <div><dt>الأسئلة</dt><dd>${examQuestionCount(a.level)}</dd></div>
      <div><dt>المدة</dt><dd>${Math.round(config.timeLimitSec / 60)} دقيقة</dd></div>
      <div><dt>درجة النجاح</dt><dd>${config.passMark}%</dd></div>
      <div><dt>المنهج المطلوب</dt><dd>${a.lessonsDone}/${a.lessonsTotal}</dd></div>
    </dl>
    <p class="level-exam-status">${escapeHtml(statusText)}</p>
    <div class="level-exam-actions">
      <button class="btn ${a.status === 'locked' ? 'btn-ghost' : 'btn-gold'} level-exam-btn" data-level="${a.level}" ${a.status === 'locked' ? 'disabled' : ''}>${action}</button>
      ${a.status === 'passed' ? '<button class="btn btn-ghost btn-small" data-transcript="1">السجل الأكاديمي</button>' : ''}
    </div>
  </article>`;
}

function renderExamHall(root: HTMLElement): void {
  root.innerHTML = `
<div class="screen exam-hall-screen">
  <header class="topbar">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>قاعة الامتحانات</b><small dir="ltr">CERTIFIED EXAMINATIONS</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onDark')}
  </header>

  <section class="exam-hall-hero">
    <span class="unit-kicker">لا اعتماد بلا امتحان</span>
    <h1 class="exam-hall-title">قاعة الامتحانات المعتمدة</h1>
    <p class="exam-hall-sub">هنا يتحول ما تعلمته إلى مستوى موثّق في سجلك. أسئلة مسحوبة من بنك المعايرة، خيارات مخلوطة، ولا تصحيح قبل التسليم.</p>
  </section>

  <main class="exam-hall-wrap">
    <div id="certBanner" class="cert-banner" hidden></div>
    <section id="levelExamGrid" class="level-exam-grid" aria-label="امتحانات المستويات المعتمدة"></section>

    <section class="exam-placement" aria-label="اختبار تحديد المستوى">
      <div class="exam-placement-head">
        <span class="unit-kicker">مكتب القبول</span>
        <h2>اختبار تحديد المستوى</h2>
        <p>هو تقدير أولي لا اعتماد. أعِده فقط إذا تغيّر مستواك تغيراً جوهرياً — إعادته تمحو تسجيلك وتقدمك الحالي.</p>
      </div>
      <div id="placementInfo" class="exam-placement-info"></div>
      <button id="retakePlacementBtn" class="btn btn-ghost btn-small">إعادة تحديد المستوى من الصفر</button>
    </section>

    <p class="exam-hall-note">◆ الاعتماد الحالي محلي على هذا الجهاز، ويُسجَّل في السجل الأكاديمي. الشهادة الموقعة رقمياً مرحلة لاحقة.</p>
  </main>

  <footer class="building-foot">قاعة الامتحانات: «الامتحان ليس عقاباً — بل لحظة تصبح فيها المعرفة ملكك رسمياً»</footer>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));

  const grid = root.querySelector<HTMLElement>('#levelExamGrid')!;
  const certBanner = root.querySelector<HTMLElement>('#certBanner')!;
  const placementInfo = root.querySelector<HTMLElement>('#placementInfo')!;

  void Promise.all([getCurrentStudent(), getProgressMap(), getAllLevelExamResults()]).then(([student, progress, allResults]) => {
    if (!student) {
      go('gate');
      return;
    }
    const results = allResults.filter((r) => r.studentId === student.id);
    const certified = passedLevels(results);
    const certifiedLevel = certified.length ? certified[certified.length - 1] : student.certifiedLevel;
    const availabilities = EXAM_LEVELS.map((level) => examAvailability(level, progress, results));

    if (certifiedLevel) {
      certBanner.hidden = false;
      certBanner.innerHTML = `
        <span class="cert-banner-seal">${sealSVG(44, 'onDark')}</span>
        <div><b>اعتمادك الحالي: <span dir="ltr">${escapeHtml(certifiedLevel)}</span></b>
        <small>مسجّل في سجلك الأكاديمي — ${escapeHtml(student.name)} · ${escapeHtml(student.id)}</small></div>
        <button id="goTranscriptBtn" class="btn btn-gold btn-small">افتح السجل الأكاديمي</button>`;
      certBanner.querySelector('#goTranscriptBtn')!.addEventListener('click', () => go('transcript'));
    }

    grid.innerHTML = availabilities
      .map((a) => examCard(a, results.filter((r) => r.level === a.level).sort((x, y) => Date.parse(y.takenAt) - Date.parse(x.takenAt))[0] ?? null))
      .join('');

    grid.querySelectorAll<HTMLButtonElement>('.level-exam-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const level = btn.dataset.level as ExamLevel;
        const availability = availabilities.find((a) => a.level === level);
        if (!availability || availability.status === 'locked') return;
        session.pendingExamLevel = level;
        go('levelExam');
      });
    });
    grid.querySelectorAll<HTMLButtonElement>('[data-transcript]').forEach((btn) => {
      btn.addEventListener('click', () => go('transcript'));
    });

    const meta = LEVEL_META[student.level];
    placementInfo.innerHTML = `
      <div><span class="placement-level" dir="ltr">${escapeHtml(student.level)}</span><span>${escapeHtml(meta.ar)}</span></div>
      <div class="placement-meta">أُجري في ${formatDate(student.estimatedAt)} · التقدير ${student.finalEstimate}/100</div>`;
  });

  root.querySelector('#retakePlacementBtn')!.addEventListener('click', () => {
    void showConfirm('إعادة تحديد المستوى تمحو تسجيلك وكل تقدمك وامتحاناتك على هذا الجهاز. نزّل بطاقتك أولاً إن أردت العودة. متابعة؟', 'امسح وابدأ من جديد').then((ok) => {
      if (ok) {
        void clearAllStudents().then(() => {
          toast('بدأت صفحة جديدة — بوابة الأكاديمية تنتظرك');
          go('gate');
        });
      }
    });
  });
}

registerScreen('examHall', renderExamHall);
