/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — صانع السيرة الذاتية (CV Builder)
   يقرأ بياناتك بالإنجليزية (labels بالعربية + أمثلة إنجليزية)،
   ويعرض سيرة إنجليزية احترافية بصيغة متعارف عليها — جاهزة للطباعة كـPDF.
   لا خادم، لا ترجمة آلية — كل شيء في جهازك وحده.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml, showConfirm, toast } from '../ui/confirm';
import { getCvProfile, saveCvProfile } from '../store/db';
import type { CvEducation, CvExperience, CvProfile } from '../types';

type Template = 'classic' | 'modern';
let template: Template = 'classic';

const SUGGESTED_SKILLS = ['TypeScript', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Docker', 'Python', 'Communication', 'Teamwork', 'Problem Solving', 'Leadership', 'Excel', 'Presentation'];

const SUMMARY_PRESETS = [
  'Front-end developer with three years of experience building fast, tested web applications. I care about clean code, measurable impact, and calm teams.',
  'Sales professional who consistently exceeded quotas by focusing on discovery and value. I sell consultatively — and I close with discipline.',
  'Customer service specialist — calm under pressure, first-contact resolution, and empathy backed by metrics.',
];

const TITLE_SUGGESTIONS = ['Software Developer', 'Sales Representative', 'Customer Service Officer', 'Administrative Officer', 'Frontend Developer', 'Account Manager', 'Operations Coordinator'];
const CITY_SUGGESTIONS = ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Riyadh', 'Jeddah', 'Dubai', 'Amman', 'Casablanca', 'Baghdad'];

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function blankExperience(): CvExperience {
  return { id: uid(), company: '', role: '', period: '', achievements: [] };
}
function blankEducation(): CvEducation {
  return { id: uid(), school: '', degree: '', year: '' };
}

function defaultProfile(): CvProfile {
  return {
    version: 1,
    id: 'cv',
    name: '',
    title: '',
    email: '',
    phone: '',
    city: '',
    summary: '',
    languages: ['Arabic (native)', 'English (professional)'],
    experiences: [blankExperience()],
    education: [blankEducation()],
    skills: ['Communication', 'Teamwork', 'Problem Solving'],
    updatedAt: new Date().toISOString(),
  };
}

function chipList(items: string[], cls: string): string {
  return items.map((t) => `<span class="${cls}" dir="ltr">${escapeHtml(t)}</span>`).join('');
}

function renderCvPreview(profile: CvProfile): string {
  const exp = profile.experiences.filter((e) => e.company || e.role);
  const edu = profile.education.filter((e) => e.school || e.degree);
  const bullets = (lines: string[]) =>
    lines.filter(Boolean).length === 0
      ? ''
      : `<ul class="cv-bullets">${lines.filter((l) => l.trim()).map((l) => `<li dir="ltr">${escapeHtml(l.trim())}</li>`).join('')}</ul>`;

  const contact = [profile.email, profile.phone, profile.city].filter(Boolean).map((s) => `<span dir="ltr">${escapeHtml(s)}</span>`).join(' · ');

  const experienceHtml = exp.length
    ? exp.map((e) => `
      <div class="cv-entry">
        <div class="cv-entry-head"><b dir="ltr">${escapeHtml(e.role || 'Role')} — ${escapeHtml(e.company || 'Company')}</b><span dir="ltr">${escapeHtml(e.period)}</span></div>
        ${bullets(e.achievements)}
      </div>`).join('')
    : '';

  const educationHtml = edu.length
    ? edu.map((e) => `
      <div class="cv-entry">
        <div class="cv-entry-head"><b dir="ltr">${escapeHtml(e.degree || 'Degree')} — ${escapeHtml(e.school || 'School')}</b><span dir="ltr">${escapeHtml(e.year)}</span></div>
      </div>`).join('')
    : '';

  if (template === 'modern') {
    return `
    <article class="cv-doc cv-modern" aria-label="السيرة الذاتية — معاينة">
      <aside class="cv-side">
        <h1 class="cv-name" dir="ltr">${escapeHtml(profile.name || 'Your Name')}</h1>
        <p class="cv-title" dir="ltr">${escapeHtml(profile.title || 'Professional Title')}</p>
        <div class="cv-side-block"><h2>Contact</h2><p class="cv-side-text" dir="ltr">${[profile.email, profile.phone, profile.city].filter(Boolean).map((s) => `<span>${escapeHtml(s)}</span>`).join('<br/>')}</p></div>
        <div class="cv-side-block"><h2>Skills</h2><div class="cv-chips cv-chips-dark">${chipList(profile.skills, 'cv-chip')}</div></div>
        <div class="cv-side-block"><h2>Languages</h2><p class="cv-side-text" dir="ltr">${profile.languages.map((l) => `<span>${escapeHtml(l)}</span>`).join('<br/>')}</p></div>
      </aside>
      <div class="cv-main">
        ${profile.summary.trim() ? `<section class="cv-section"><h2>Profile</h2><p dir="ltr" class="cv-summary">${escapeHtml(profile.summary)}</p></section>` : ''}
        ${experienceHtml ? `<section class="cv-section"><h2>Experience</h2>${experienceHtml}</section>` : ''}
        ${educationHtml ? `<section class="cv-section"><h2>Education</h2>${educationHtml}</section>` : ''}
      </div>
    </article>`;
  }

  return `
  <article class="cv-doc cv-classic" aria-label="السيرة الذاتية — معاينة">
    <header class="cv-header">
      <h1 class="cv-name" dir="ltr">${escapeHtml(profile.name || 'Your Name')}</h1>
      <p class="cv-title" dir="ltr">${escapeHtml(profile.title || 'Professional Title')}</p>
      <p class="cv-contact">${contact}</p>
    </header>
    ${profile.summary.trim() ? `<section class="cv-section"><h2>Profile</h2><p dir="ltr" class="cv-summary">${escapeHtml(profile.summary)}</p></section>` : ''}
    ${experienceHtml ? `<section class="cv-section"><h2>Experience</h2>${experienceHtml}</section>` : ''}
    ${educationHtml ? `<section class="cv-section"><h2>Education</h2>${educationHtml}</section>` : ''}
    ${profile.skills.length ? `<section class="cv-section"><h2>Skills</h2><div class="cv-chips">${chipList(profile.skills, 'cv-chip')}</div></section>` : ''}
    ${profile.languages.length ? `<section class="cv-section"><h2>Languages</h2><p class="cv-summary" dir="ltr">${escapeHtml(profile.languages.join(' · '))}</p></section>` : ''}
  </article>`;
}

function renderCvScreen(root: HTMLElement): void {
  let profile = defaultProfile();
  let saveTimer: number | undefined;
  const saveSoon = () => {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      void saveCvProfile({ ...profile, updatedAt: new Date().toISOString() });
    }, 600);
  };

  root.innerHTML = `<div class="screen cv-screen"><main class="cv-wrap"><p class="review-empty-sub">جارٍ فتح صانع السيرة…</p></main></div>`;

  void getCvProfile().then((saved) => {
    if (saved) profile = { ...saved, id: 'cv', version: 1 };
    render();
  });

  const render = () => {
    const suggestedSkills = SUGGESTED_SKILLS.map((s) => {
      const on = profile.skills.includes(s);
      return `<button type="button" class="cv-skill-chip${on ? ' cv-skill-on' : ''}" data-skill="${escapeHtml(s)}" dir="ltr">${escapeHtml(s)}</button>`;
    }).join('');

    root.innerHTML = `
<div class="screen cv-screen">
  <header class="topbar topbar-paper">
    <button id="backToCareerBtn" class="icon-btn" aria-label="عودة إلى المسار المهني"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>صانع السيرة الذاتية</b><small dir="ltr">CV BUILDER</small></div>
    <div class="spacer"></div>
    ${sealSVG(34, 'onPaper')}
  </header>

  <main class="cv-wrap">
    <section class="cv-honest">السيرة بالإنجليزية لأن جهة التوظيف تقرؤها بالإنجليزية — اكتب بالإنجليزية (مع تلميحات عربية وأفكار إنجليزية)، ولا توجد ترجمة آلية بلا إنترنت.</section>

    <div class="cv-columns">
      <form class="cv-form" id="cvForm" aria-label="بيانات السيرة">
        <fieldset class="cv-fieldset">
          <legend>البيانات الأساسية</legend>
          <div class="cv-grid-2">
            <label class="cv-label">الاسم الكامل (بالإنجليزية)<input class="cv-input" dir="ltr" id="f-name" value="${escapeHtml(profile.name)}" placeholder="Sara Ahmed Hassan" autocomplete="off"/></label>
            <label class="cv-label">المسمى المهني (بالإنجليزية)<input class="cv-input" dir="ltr" id="f-title" value="${escapeHtml(profile.title)}" list="titleList" placeholder="Software Developer" autocomplete="off"/><datalist id="titleList">${TITLE_SUGGESTIONS.map((t) => `<option value="${escapeHtml(t)}"></option>`).join('')}</datalist></label>
            <label class="cv-label">البريد (بالإنجليزية)<input class="cv-input" dir="ltr" id="f-email" type="email" value="${escapeHtml(profile.email)}" placeholder="you@example.com" autocomplete="off"/></label>
            <label class="cv-label">الهاتف (أرقام دولية)<input class="cv-input" dir="ltr" id="f-phone" value="${escapeHtml(profile.phone)}" placeholder="+20 100 123 4567" autocomplete="off"/></label>
            <label class="cv-label">المدينة (بالإنجليزية)<input class="cv-input" dir="ltr" id="f-city" value="${escapeHtml(profile.city)}" list="cityList" placeholder="Cairo" autocomplete="off"/><datalist id="cityList">${CITY_SUGGESTIONS.map((t) => `<option value="${escapeHtml(t)}"></option>`).join('')}</datalist></label>
          </div>
        </fieldset>

        <fieldset class="cv-fieldset">
          <legend>النبذة المهنية (Profile)</legend>
          <textarea class="cv-input cv-textarea" dir="ltr" id="f-summary" rows="3" placeholder="A short English paragraph about you…">${escapeHtml(profile.summary)}</textarea>
          <div class="cv-presets">
            <span class="cv-presets-label">قوالب جاهزة:</span>
            ${SUMMARY_PRESETS.map((p) => `<button type="button" class="cv-preset" data-preset="${escapeHtml(p)}">${escapeHtml(p.slice(0, 42))}…</button>`).join('')}
          </div>
        </fieldset>

        <fieldset class="cv-fieldset">
          <legend>الخبرات (حتى 4) — إنجاز لكل سطر</legend>
          <div id="expContainer"></div>
          <button type="button" id="addExpBtn" class="btn btn-ghost btn-small">+ أضف خبرة</button>
        </fieldset>

        <fieldset class="cv-fieldset">
          <legend>التعليم (حتى 2)</legend>
          <div id="eduContainer"></div>
          <button type="button" id="addEduBtn" class="btn btn-ghost btn-small">+ أضف تعليماً</button>
        </fieldset>

        <fieldset class="cv-fieldset">
          <legend>المهارات</legend>
          <div class="cv-skill-grid">${suggestedSkills}</div>
          <div class="cv-skill-add">
            <input class="cv-input" dir="ltr" id="skillCustom" placeholder="Custom skill…" autocomplete="off"/>
            <button type="button" id="addSkillBtn" class="btn btn-ghost btn-small">أضف</button>
          </div>
        </fieldset>

        <fieldset class="cv-fieldset">
          <legend>اللغات</legend>
          <label class="cv-label">اكتب اللغات مفصولة بفاصلة<input class="cv-input" dir="ltr" id="f-languages" value="${escapeHtml(profile.languages.join(', '))}" placeholder="Arabic (native), English (professional), French" autocomplete="off"/></label>
        </fieldset>

        <div class="cv-actions">
          <button type="button" id="saveCvBtn" class="btn btn-primary">احفظ في جهازك</button>
          <button type="button" id="printCvBtn" class="btn btn-gold">اطبع / احفظ PDF</button>
          <button type="button" id="exportCvBtn" class="btn btn-ghost">تصدير JSON</button>
          <button type="button" id="clearCvBtn" class="btn btn-ghost">مسح النموذج</button>
        </div>
      </form>

      <aside class="cv-preview-pane" aria-label="المعاينة الحية">
        <div class="cv-preview-toolbar">
          <span class="cv-preview-label">المعاينة — كما ستراها جهة التوظيف</span>
          <div class="cv-template-toggle">
            <button type="button" class="btn btn-ghost btn-small ${template === 'classic' ? 'cv-template-active' : ''}" data-template="classic">كلاسيكي</button>
            <button type="button" class="btn btn-ghost btn-small ${template === 'modern' ? 'cv-template-active' : ''}" data-template="modern">عصري</button>
          </div>
        </div>
        <div id="cvPreview">${renderCvPreview(profile)}</div>
      </aside>
    </div>
  </main>
</div>`;

    wireForm();
  };

  const renderPreviewOnly = () => {
    const el = root.querySelector('#cvPreview');
    if (el) el.innerHTML = renderCvPreview(profile);
  };

  const renderExperiences = () => {
    const box = root.querySelector<HTMLElement>('#expContainer')!;
    box.innerHTML = profile.experiences.map((e, i) => `
      <div class="cv-entry-form" data-index="${i}">
        <div class="cv-entry-form-head">
          <span class="cv-entry-num">${i + 1}</span>
          ${profile.experiences.length > 1 ? `<button type="button" class="cv-remove-entry" data-index="${i}" aria-label="احذف هذه الخبرة">×</button>` : ''}
        </div>
        <div class="cv-grid-2">
          <input class="cv-input cv-exp-field" dir="ltr" data-field="company" data-index="${i}" value="${escapeHtml(e.company)}" placeholder="Company" autocomplete="off"/>
          <input class="cv-input cv-exp-field" dir="ltr" data-field="role" data-index="${i}" value="${escapeHtml(e.role)}" placeholder="Software Developer" autocomplete="off"/>
        </div>
        <input class="cv-input cv-exp-field" dir="ltr" data-field="period" data-index="${i}" value="${escapeHtml(e.period)}" placeholder="2021 — 2024" autocomplete="off"/>
        <textarea class="cv-input cv-textarea cv-exp-ach" dir="ltr" data-index="${i}" rows="3" placeholder="Led the checkout revamp — cut load time by 40%&#10;Improved test coverage from 55% to 80%">${escapeHtml(e.achievements.join('\n'))}</textarea>
      </div>`).join('');

    box.querySelectorAll<HTMLInputElement>('.cv-exp-field').forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        const i = Number(inputEl.dataset.index);
        const field = inputEl.dataset.field as 'company' | 'role' | 'period';
        profile.experiences[i][field] = inputEl.value;
        renderPreviewOnly();
        saveSoon();
      });
    });
    box.querySelectorAll<HTMLTextAreaElement>('.cv-exp-ach').forEach((ta) => {
      ta.addEventListener('input', () => {
        const i = Number(ta.dataset.index);
        profile.experiences[i].achievements = ta.value.split('\n').map((s) => s.trim()).filter(Boolean).slice(0, 5);
        renderPreviewOnly();
        saveSoon();
      });
    });
    box.querySelectorAll<HTMLButtonElement>('.cv-remove-entry').forEach((btn) => {
      btn.addEventListener('click', () => {
        profile.experiences.splice(Number(btn.dataset.index), 1);
        renderExperiences();
        renderPreviewOnly();
        saveSoon();
      });
    });
  };

  const renderEducation = () => {
    const box = root.querySelector<HTMLElement>('#eduContainer')!;
    box.innerHTML = profile.education.map((e, i) => `
      <div class="cv-entry-form" data-index="${i}">
        <div class="cv-entry-form-head">
          <span class="cv-entry-num">${i + 1}</span>
          ${profile.education.length > 1 ? `<button type="button" class="cv-remove-entry" data-index="${i}" aria-label="احذف هذا التعليم">×</button>` : ''}
        </div>
        <div class="cv-grid-2">
          <input class="cv-input cv-edu-field" dir="ltr" data-field="school" data-index="${i}" value="${escapeHtml(e.school)}" placeholder="University of Cairo" autocomplete="off"/>
          <input class="cv-input cv-edu-field" dir="ltr" data-field="degree" data-index="${i}" value="${escapeHtml(e.degree)}" placeholder="BSc Computer Science" autocomplete="off"/>
        </div>
        <input class="cv-input cv-edu-field" dir="ltr" data-field="year" data-index="${i}" value="${escapeHtml(e.year)}" placeholder="2017 — 2021" autocomplete="off"/>
      </div>`).join('');

    box.querySelectorAll<HTMLInputElement>('.cv-edu-field').forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        const i = Number(inputEl.dataset.index);
        const field = inputEl.dataset.field as 'school' | 'degree' | 'year';
        profile.education[i][field] = inputEl.value;
        renderPreviewOnly();
        saveSoon();
      });
    });
    box.querySelectorAll<HTMLButtonElement>('.cv-remove-entry').forEach((btn) => {
      btn.addEventListener('click', () => {
        profile.education.splice(Number(btn.dataset.index), 1);
        renderEducation();
        renderPreviewOnly();
        saveSoon();
      });
    });
  };

  const wireForm = () => {
    root.querySelector('#backToCareerBtn')!.addEventListener('click', () => go('career'));

    const bind = (id: string, fn: (v: string) => void) => {
      const el = root.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
      if (!el) return;
      el.addEventListener('input', () => { fn(el.value); renderPreviewOnly(); saveSoon(); });
    };
    bind('f-name', (v) => { profile.name = v; });
    bind('f-title', (v) => { profile.title = v; });
    bind('f-email', (v) => { profile.email = v; });
    bind('f-phone', (v) => { profile.phone = v; });
    bind('f-city', (v) => { profile.city = v; });
    bind('f-summary', (v) => { profile.summary = v; });
    bind('f-languages', (v) => { profile.languages = v.split(',').map((s) => s.trim()).filter(Boolean).slice(0, 8); });

    root.querySelectorAll<HTMLButtonElement>('.cv-preset').forEach((btn) => {
      btn.addEventListener('click', () => {
        profile.summary = profile.summary.trim() ? `${profile.summary.trim()} ${btn.dataset.preset}` : (btn.dataset.preset ?? '');
        const ta = root.querySelector<HTMLTextAreaElement>('#f-summary')!;
        ta.value = profile.summary;
        renderPreviewOnly();
        saveSoon();
      });
    });

    root.querySelectorAll<HTMLButtonElement>('.cv-skill-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const s = btn.dataset.skill!;
        profile.skills = profile.skills.includes(s) ? profile.skills.filter((x) => x !== s) : [...profile.skills, s].slice(0, 24);
        btn.classList.toggle('cv-skill-on');
        renderPreviewOnly();
        saveSoon();
      });
    });
    const addSkill = () => {
      const input = root.querySelector<HTMLInputElement>('#skillCustom')!;
      const v = input.value.trim();
      if (v && !profile.skills.includes(v)) {
        profile.skills = [...profile.skills, v].slice(0, 24);
        input.value = '';
        btnRebuildSkills();
        renderPreviewOnly();
        saveSoon();
      }
    };
    const btnRebuildSkills = () => {
      const container = root.querySelector<HTMLElement>('.cv-skill-grid')!;
      container.innerHTML = SUGGESTED_SKILLS.map((s) => {
        const on = profile.skills.includes(s);
        return `<button type="button" class="cv-skill-chip${on ? ' cv-skill-on' : ''}" data-skill="${escapeHtml(s)}" dir="ltr">${escapeHtml(s)}</button>`;
      }).join('');
      container.querySelectorAll<HTMLButtonElement>('.cv-skill-chip').forEach((btn) => {
        btn.addEventListener('click', () => {
          const s = btn.dataset.skill!;
          profile.skills = profile.skills.includes(s) ? profile.skills.filter((x) => x !== s) : [...profile.skills, s].slice(0, 24);
          btn.classList.toggle('cv-skill-on');
          renderPreviewOnly();
          saveSoon();
        });
      });
    };
    root.querySelector('#addSkillBtn')!.addEventListener('click', addSkill);
    root.querySelector<HTMLInputElement>('#skillCustom')!.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); addSkill(); }
    });

    renderExperiences();
    renderEducation();
    root.querySelector('#addExpBtn')!.addEventListener('click', () => {
      if (profile.experiences.length >= 4) { toast('الحد الأقصى 4 خبرات'); return; }
      profile.experiences.push(blankExperience());
      renderExperiences();
      saveSoon();
    });
    root.querySelector('#addEduBtn')!.addEventListener('click', () => {
      if (profile.education.length >= 2) { toast('الحد الأقصى تعليمان'); return; }
      profile.education.push(blankEducation());
      renderEducation();
      saveSoon();
    });

    root.querySelector('#saveCvBtn')!.addEventListener('click', () => {
      void saveCvProfile({ ...profile, updatedAt: new Date().toISOString() }).then(() => toast('حُفظت سيرتك في جهازك'));
    });
    root.querySelector('#printCvBtn')!.addEventListener('click', () => window.print());
    root.querySelector('#exportCvBtn')!.addEventListener('click', () => {
      const body = JSON.stringify({ exportedBy: 'talaqa', exportedAt: new Date().toISOString(), cv: { ...profile, updatedAt: new Date().toISOString() } }, null, 2);
      const blob = new Blob([body], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `talaqa-cv-${(profile.name || 'profile').trim().replace(/\s+/g, '-').toLowerCase()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast('حُفظ ملف JSON لسيرتك');
    });
    root.querySelector('#clearCvBtn')!.addEventListener('click', () => {
      void showConfirm('سيتم مسح بيانات السيرة المحفوظة على هذا الجهاز. متابعة؟', 'مسح وابدأ من جديد').then((ok) => {
        if (!ok) return;
        profile = defaultProfile();
        void saveCvProfile(profile).then(() => { render(); toast('تم مسح السيرة — ابدأ صفحة بيضاء'); });
      });
    });
    root.querySelectorAll<HTMLButtonElement>('[data-template]').forEach((btn) => {
      btn.addEventListener('click', () => {
        template = btn.dataset.template as Template;
        render();
      });
    });
  };
}

registerScreen('cv', renderCvScreen);
