/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — السجل الأكاديمي (Transcript)
   سجل حيّ: الدروس، الاعتمادات، وامتحانات المستويات — على جهازك وحده.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml } from '../ui/confirm';
import { LEVEL_META } from '../engine/placement';
import { passedLevels } from '../engine/levelExam';
import { getAllLevelExamResults, getAllSrsStates, getCurrentStudent, getProgressMap } from '../store/db';
import { UNITS, allLessonsInOrder } from '../data/academy/course';
import { SRS_DECK, countDueCards } from '../data/academy/deck';
import type { LevelExamResult } from '../types';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('ar', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function examRows(results: LevelExamResult[]): string {
  if (results.length === 0) {
    return '<tr><td colspan="5" class="transcript-empty">لم تُسجّل امتحانات معتمدة بعد — قاعة الامتحانات تنتظرك.</td></tr>';
  }
  return [...results]
    .sort((a, b) => Date.parse(b.takenAt) - Date.parse(a.takenAt))
    .map(
      (r) => `
      <tr>
        <td><b dir="ltr">${escapeHtml(r.level)}</b></td>
        <td>${escapeHtml(formatDate(r.takenAt))}</td>
        <td dir="ltr">${r.correctCount}/${r.totalQuestions} · ${r.score}%</td>
        <td dir="ltr">${r.passMark}%</td>
        <td class="${r.passed ? 'transcript-pass' : 'transcript-fail'}">${r.passed ? 'معتمد' : 'لم يُجتز'}</td>
      </tr>`
    )
    .join('');
}

function unitRows(progress: Record<string, { bestScore: number }>): string {
  return UNITS.map((unit) => {
    const lessons = unit.lessons;
    const done = lessons.filter((l) => progress[l.id]);
    const avg = done.length ? Math.round(done.reduce((sum, l) => sum + progress[l.id].bestScore, 0) / done.length) : null;
    return `
      <tr>
        <td><b>المحطة ${unit.order}</b> — ${escapeHtml(unit.title)}</td>
        <td dir="ltr">${done.length}/${lessons.length}</td>
        <td dir="ltr">${avg === null ? '—' : `${avg}%`}</td>
      </tr>`;
  }).join('');
}

function renderTranscript(root: HTMLElement): void {
  void Promise.all([getCurrentStudent(), getProgressMap(), getAllLevelExamResults(), getAllSrsStates()]).then(
    ([student, progress, allResults, srsStates]) => {
      if (!student) {
        go('gate');
        return;
      }
      const results = allResults.filter((r) => r.studentId === student.id);
      const certified = passedLevels(results);
      const certifiedLevel = certified.length ? certified[certified.length - 1] : (student.certifiedLevel ?? null);
      const completed = allLessonsInOrder().filter(({ lesson }) => progress[lesson.id]).length;
      const totalLessons = allLessonsInOrder().length;
      const reviewed = Object.keys(srsStates).length;
      const due = countDueCards(srsStates, progress);
      const examsPassed = new Set(results.filter((r) => r.passed).map((r) => r.level)).size;

      root.innerHTML = `
<div class="screen transcript-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>السجل الأكاديمي</b><small dir="ltr">ACADEMIC TRANSCRIPT</small></div>
    <div class="spacer"></div>
    <button id="printTranscriptBtn" class="icon-btn" title="طباعة السجل" aria-label="طباعة السجل"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5"/><path d="M7 17H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-3"/><rect x="7" y="14" width="10" height="7"/></svg></button>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="result-wrap">
    <article class="result-document transcript-document" aria-label="السجل الأكاديمي لطالب طلاقة">
      <div class="doc-watermark" aria-hidden="true">ط</div>

      <header class="doc-head">
        ${sealSVG(64, 'onPaper')}
        <div class="doc-head-titles">
          <b>أَكَادِيمِيَّة طَلَاقَة</b>
          <small dir="ltr">TALAQA — THE SOVEREIGN ENGLISH ACADEMY FOR ARABS</small>
          <span class="doc-line">السِّجِل الأَكَادِيمِي — Academic Transcript</span>
        </div>
        <div class="doc-head-side"><span class="doc-conf">سجل حيّ<br/>LIVE RECORD</span></div>
      </header>

      <div class="doc-meta">
        <span>الطالب: <b>${escapeHtml(student.name)}</b></span>
        <span>رقم الطالب: <b dir="ltr">${escapeHtml(student.id)}</b></span>
        <span>الالتحاق: <b>${escapeHtml(formatDate(student.registeredAt))}</b></span>
      </div>

      <section class="transcript-summary" aria-label="ملخص السجل">
        <div><span>المستوى المبدئي</span><b dir="ltr">${escapeHtml(student.level)}</b></div>
        <div><span>المستوى المعتمد</span><b dir="ltr">${certifiedLevel ? escapeHtml(certifiedLevel) : '—'}</b></div>
        <div><span>الدروس المكتملة</span><b dir="ltr">${completed}/${totalLessons}</b></div>
        <div><span>الامتحانات المجتازة</span><b dir="ltr">${examsPassed}/2</b></div>
      </section>

      ${certifiedLevel ? `<p class="transcript-cert">◆ اعتماد حالي: <b dir="ltr">${escapeHtml(certifiedLevel)}</b> — ${escapeHtml(LEVEL_META[certifiedLevel].ar)} · مسجّل محلياً في هذا السجل.</p>` : '<p class="transcript-cert transcript-cert-none">◆ لا اعتماد مستوى بعد — اجتز امتحان A1 لتظهر أول شهادة في سجلك.</p>'}

      <section class="transcript-section" aria-label="محاضر الامتحانات">
        <h3>محاضر الامتحانات المعتمدة</h3>
        <table class="transcript-table">
          <thead><tr><th>المستوى</th><th>التاريخ</th><th>النتيجة</th><th>النجاح</th><th>الحالة</th></tr></thead>
          <tbody>${examRows(results)}</tbody>
        </table>
      </section>

      <section class="transcript-section" aria-label="السجل الدراسي">
        <h3>السجل الدراسي حسب المحطة</h3>
        <table class="transcript-table">
          <thead><tr><th>المحطة</th><th>الدروس</th><th>متوسط أفضل الدرجات</th></tr></thead>
          <tbody>${unitRows(progress)}</tbody>
        </table>
      </section>

      <section class="transcript-section" aria-label="ذاكرة المراجعة">
        <h3>ذاكرة المراجعة المتباعدة</h3>
        <p class="transcript-note">${SRS_DECK.length} بطاقة في الرزمة · ${reviewed} بطاقة راجعتها · ${due} بطاقة مستحقة الآن. المراجعة ليست اختيارية في طَلَاقَة — هي ما يحوّل الدرس إلى ملكية دائمة.</p>
      </section>

      <footer class="doc-foot"><span dir="ltr">TALAQA ACADEMY · REGISTRAR'S OFFICE</span><i>◆</i><span>سجل حيّ يُحدَّث مع كل درس وامتحان — على جهازك وحده</span></footer>
    </article>

    <div class="result-actions transcript-actions">
      <button id="backToBuildingBtn2" class="btn btn-primary btn-xl">العودة إلى المبنى</button>
      <button id="openExamHallBtn" class="btn btn-ghost">قاعة الامتحانات</button>
    </div>
  </main>
</div>`;

      root.querySelector('#printTranscriptBtn')!.addEventListener('click', () => window.print());
      root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));
      root.querySelector('#backToBuildingBtn2')!.addEventListener('click', () => go('building'));
      root.querySelector('#openExamHallBtn')!.addEventListener('click', () => go('examHall'));
    }
  );
}

registerScreen('transcript', renderTranscript);
