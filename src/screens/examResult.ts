/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محضر نتيجة الامتحان المعتمد
   وثيقة رسمية: الدرجة، حدود النجاح، تفصيل الأقسام، وأولويات العلاج.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { session } from '../state';
import { sealSVG } from '../ui/seal';
import { escapeHtml } from '../ui/confirm';
import { LEVEL_META, SECTION_NAMES, tagName } from '../engine/placement';
import { LEVEL_EXAM_CONFIG } from '../engine/levelExam';
import { getCurrentStudent } from '../store/db';
import type { ExamLevel, SectionId } from '../types';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m === 0 ? `${s} ثانية` : `${m} دقيقة${s ? ` و${s} ثانية` : ''}`;
}

function renderExamResult(root: HTMLElement): void {
  const result = session.levelExamResult;
  if (!result) {
    go('examHall');
    return;
  }

  const meta = LEVEL_META[result.level];
  const config = LEVEL_EXAM_CONFIG[result.level];
  const sectionRows = (['rules', 'vocab', 'reading'] as SectionId[])
    .map((s) => {
      const score = result.sectionScores[s];
      const pct = score.total === 0 ? 0 : Math.round((score.correct / score.total) * 100);
      return `
      <div class="section-row exam-section-row">
        <span class="section-row-name">${SECTION_NAMES[s]}</span>
        <div class="section-bar"><i style="width:${pct}%"></i></div>
        <span class="section-row-level" dir="ltr">${score.correct}/${score.total}</span>
      </div>`;
    })
    .join('');
  const weakBlock = result.weakAreas.length
    ? `<ul class="weak-list">${result.weakAreas
        .map(
          (w) =>
            `<li><span class="weak-tag">${escapeHtml(tagName(w.tag))}</span><span class="weak-count">${w.count === 1 ? 'ظهر مرة' : `تكرر ${w.count} مرات`}</span></li>`
        )
        .join('')}</ul>`
    : `<p class="no-weak">لا أخطاء تُذكر — ورقة نظيفة تماماً.</p>`;

  root.innerHTML = `
<div class="screen exam-result-screen">
  <header class="topbar topbar-paper">
    <button id="backToExamHallBtn" class="icon-btn" aria-label="عودة إلى قاعة الامتحانات"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>محضر الامتحان المعتمد ${escapeHtml(result.level)}</b><small dir="ltr">OFFICIAL EXAMINATION RECORD</small></div>
    <div class="spacer"></div>
    <button id="printExamResultBtn" class="icon-btn" title="طباعة المحضر" aria-label="طباعة المحضر"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5"/><path d="M7 17H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-3"/><rect x="7" y="14" width="10" height="7"/></svg></button>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="result-wrap">
    <article class="result-document exam-result-document" aria-label="محضر امتحان ${escapeHtml(result.level)} المعتمد">
      <div class="doc-watermark" aria-hidden="true">ط</div>

      <header class="doc-head">
        ${sealSVG(64, 'onPaper')}
        <div class="doc-head-titles">
          <b>أَكَادِيمِيَّة طَلَاقَة</b>
          <small dir="ltr">TALAQA — THE SOVEREIGN ENGLISH ACADEMY FOR ARABS</small>
          <span class="doc-line">مَحْضَر امْتِحَان مُسْتَوَى مُعْتَمَد — Certified Level Examination</span>
        </div>
        <div class="doc-head-side"><span class="doc-conf">رسمي<br/>CONFIDENTIAL</span></div>
      </header>

      <div class="doc-meta">
        <span>الطالب: <b id="examStudentName">…</b></span>
        <span>التاريخ: <b>${escapeHtml(formatDate(result.takenAt))}</b></span>
        <span>المدة: <b>${escapeHtml(formatDuration(result.durationSeconds))}</b></span>
      </div>

      <div class="doc-verdict exam-verdict ${result.passed ? 'is-pass' : 'is-fail'}">
        <div class="doc-level-block">
          <span class="doc-level-code" dir="ltr">${escapeHtml(result.level)}</span>
          <span class="doc-level-ar">${escapeHtml(meta.ar)}</span>
          <span class="doc-level-en" dir="ltr">${escapeHtml(meta.en)}</span>
        </div>
        <div class="exam-verdict-center">
          <span class="exam-big-score" dir="ltr">${result.score}<small>%</small></span>
          <span class="exam-pass-line">النجاح من ${config.passMark}% · ${result.correctCount} من ${result.totalQuestions} صحيحة</span>
        </div>
        <div class="exam-stamp ${result.passed ? 'stamp-pass' : 'stamp-fail'}">${result.passed ? 'اجتزت' : 'لم تُجتز'}</div>
      </div>

      <p class="exam-decision ${result.passed ? 'decision-pass' : 'decision-fail'}">
        ${result.passed
          ? `اعتُمد مستواك <b dir="ltr">${escapeHtml(result.level)}</b> وسُجّل في سجلك الأكاديمي. ${result.level === 'B2' ? 'أتممت مستوى B2 — المحطة التالية C1 قيد البناء.' : result.level === 'B1' ? 'أتممت مستوى B1 — المحطة التالية B2 قيد البناء.' : result.level === 'A2' ? 'أتممت المسار التأسيسي A2 — المحطة التالية B1 قيد البناء.' : 'يمكنك الآن متابعة المحطة الثالثة A2 والاستعداد لامتحانها.'}`
          : `لم تُجتز هذه المرة. راجع أولويات العلاج أدناه، ثم أعد الامتحان — لا قيد على عدد المحاولات.`}
      </p>

      <section class="doc-sections" aria-label="تفصيل الأداء حسب القسم">
        <h3>تفصيل الأداء حسب القسم</h3>
        ${sectionRows}
      </section>

      <section class="doc-weak" aria-label="أولويات العلاج">
        <h3>أولويات العلاج — الأخطاء التي ظهرت في ورقتك</h3>
        ${weakBlock}
      </section>

      <section class="doc-plan">
        <h3>ملاحظة مؤسسية</h3>
        <p>هذا الاعتماد محلي على جهازك، مسجّل في سجلك الأكاديمي. الشهادة الموقعة رقمياً وشبكة التحقق الخارجية مرحلة لاحقة معلنة — لا نمنح وثيقة نعتبرها نهائية قبل أن تصبح قابلة للتحقق.</p>
      </section>

      <footer class="doc-foot"><span dir="ltr">TALAQA ACADEMY · EXAMINATIONS BOARD</span><i>◆</i><span>الامتحان ليس عقاباً — بل لحظة تصبح فيها المعرفة ملكك رسمياً</span></footer>
    </article>

    <div class="result-actions">
      <button id="backToHallBtn" class="btn btn-primary btn-xl">العودة إلى قاعة الامتحانات</button>
      <div class="exam-result-actions-row">
        ${result.passed ? '<button id="openTranscriptBtn" class="btn btn-gold">افتح السجل الأكاديمي</button>' : ''}
        <button id="retakeExamBtn" class="btn btn-ghost">${result.passed ? 'أعد الامتحان للتحسين' : 'أعد المحاولة الآن'}</button>
      </div>
    </div>
  </main>
</div>`;

  const nameEl = root.querySelector<HTMLElement>('#examStudentName');
  void getCurrentStudent().then((student) => {
    if (nameEl && student) nameEl.textContent = student.name;
  });

  const back = () => go('examHall');
  root.querySelector('#backToExamHallBtn')!.addEventListener('click', back);
  root.querySelector('#backToHallBtn')!.addEventListener('click', back);
  root.querySelector('#printExamResultBtn')!.addEventListener('click', () => window.print());
  root.querySelector('#openTranscriptBtn')?.addEventListener('click', () => go('transcript'));
  root.querySelector('#retakeExamBtn')!.addEventListener('click', () => {
    session.pendingExamLevel = result.level as ExamLevel;
    go('levelExam');
  });
}

registerScreen('examResult', renderExamResult);
