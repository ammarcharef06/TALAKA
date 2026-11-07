/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — مكتب شؤون الطلاب (الإعدادات)
   أربعة أقسام: الأكاديمية والوقت السائل · الملف والخصوصية ·
   الهوية العامة والاعتماد · الوصول وإدارة الجهاز.
   كل شيء محلي في IndexedDB — بلا خادم، بلا حساب، بلا تتبع.
   ═══════════════════════════════════════════════════════════════ */
import { go, registerScreen } from '../router';
import { sealSVG } from '../ui/seal';
import { escapeHtml, showConfirm, toast } from '../ui/confirm';
import { promptPin } from '../ui/pin';
import { speakEnglish } from '../ui/speak';
import { SettingsEngine, initialsFromName } from '../engine/settings';
import {
  clearAllStudents,
  exportAllDataFile,
  getCurrentStudent,
  getDataFootprint,
  getStorageEstimate,
  importAllData,
} from '../store/db';
import { session } from '../state';
import type {
  AppSettings,
  AvatarKind,
  CertificateNameMode,
  FontScale,
  SessionMinutes,
  SpeechAccent,
  StudentRecord,
  ThemeMode,
  TtsSpeed,
} from '../types';

const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: 'فاتح' },
  { value: 'dark', label: 'داكن' },
  { value: 'system', label: 'يتبع النظام' },
];

const FONT_OPTIONS: { value: FontScale; label: string }[] = [
  { value: 'normal', label: 'عادي' },
  { value: 'large', label: 'كبير' },
  { value: 'xlarge', label: 'كبير جداً' },
];

const SESSION_OPTIONS: { value: SessionMinutes; label: string }[] = [
  { value: 10, label: '10 دقائق' },
  { value: 20, label: '20 دقيقة' },
  { value: 60, label: '60 دقيقة' },
];

const TTS_OPTIONS: { value: TtsSpeed; label: string }[] = [
  { value: 'slow', label: 'بطيء' },
  { value: 'normal', label: 'عادي' },
  { value: 'fast', label: 'سريع' },
];

const ACCENT_OPTIONS: { value: SpeechAccent; label: string }[] = [
  { value: 'american', label: 'أمريكي' },
  { value: 'british', label: 'بريطاني' },
];

const NAME_OPTIONS: { value: CertificateNameMode; label: string }[] = [
  { value: 'full', label: 'الاسم الكامل' },
  { value: 'first', label: 'الاسم الأول فقط' },
];

const AVATAR_OPTIONS: { value: AvatarKind; label: string }[] = [
  { value: 'initials', label: 'الأحرف الأولى' },
  { value: 'seal', label: 'ختم الأكاديمية' },
];

function segmented(name: string, options: { value: string | number; label: string }[], current: string | number): string {
  return `<div class="segmented" data-setting="${name}" role="group">
    ${options
      .map(
        (option) =>
          `<button type="button" class="segmented-btn${String(option.value) === String(current) ? ' is-active' : ''}" data-value="${option.value}" aria-pressed="${String(option.value) === String(current)}">${escapeHtml(option.label)}</button>`
      )
      .join('')}
  </div>`;
}

function toggle(name: string, checked: boolean): string {
  return `<label class="switch">
    <input type="checkbox" data-toggle="${name}" ${checked ? 'checked' : ''} />
    <span class="switch-track" aria-hidden="true"></span>
  </label>`;
}

function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 بايت';
  const units = ['بايت', 'ك.ب', 'م.ب', 'ج.ب'];
  const index = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

function avatarHtml(settings: AppSettings, student: StudentRecord): string {
  if (settings.profile.avatar === 'seal') return sealSVG(54, 'onPaper');
  const initials = settings.profile.initials || initialsFromName(settings.profile.displayName || student.name);
  return `<span class="avatar-initials">${escapeHtml(initials)}</span>`;
}

function renderSettings(root: HTMLElement): void {
  root.innerHTML = `<div class="screen settings-screen"><main class="settings-wrap"><p class="review-empty-sub">جارٍ فتح مكتب شؤون الطلاب…</p></main></div>`;

  void Promise.all([SettingsEngine.load(), getCurrentStudent()])
    .then(async ([loaded, student]) => {
      if (!student) {
        go('gate');
        return;
      }
      let settings = loaded;
      if (!settings.profile.displayName.trim()) {
        settings = await SettingsEngine.update((draft) => {
          draft.profile.displayName = student.name;
          draft.profile.initials = initialsFromName(student.name);
        });
      }
      paint(root, student, settings);
    })
    .catch(() => {
      root.innerHTML = `<div class="screen settings-screen"><main class="settings-wrap"><article class="review-empty"><h1>تعذر فتح الإعدادات</h1><p class="review-empty-sub">لم نستطع الوصول إلى التخزين المحلي. جرّب إعادة تحميل الصفحة.</p><button id="settingsBackBtn" class="btn btn-primary">العودة إلى المبنى</button></article></main></div>`;
      root.querySelector('#settingsBackBtn')?.addEventListener('click', () => go('building'));
    });
}

function paint(root: HTMLElement, student: StudentRecord, initial: AppSettings): void {
  let settings = initial;
  let saveTimer: number | undefined;
  const savedLabel = () => root.querySelector<HTMLElement>('#settingsSaved');

  const markSaving = () => {
    const el = savedLabel();
    if (el) {
      el.textContent = 'جارٍ الحفظ…';
      el.classList.remove('is-saved');
    }
  };
  const markSaved = () => {
    const el = savedLabel();
    if (el) {
      el.textContent = 'محفوظ على جهازك';
      el.classList.add('is-saved');
    }
  };

  const persist = async (mutator: (draft: AppSettings) => void, quiet = false): Promise<AppSettings | null> => {
    markSaving();
    try {
      settings = await SettingsEngine.update(mutator);
      markSaved();
      if (!quiet) toast('حُفظت الإعدادات على جهازك');
      return settings;
    } catch {
      toast('تعذر حفظ الإعدادات — تحقق من مساحة التخزين');
      return null;
    }
  };

  const persistSoon = (mutator: (draft: AppSettings) => void) => {
    window.clearTimeout(saveTimer);
    markSaving();
    saveTimer = window.setTimeout(() => {
      void persist(mutator, true);
    }, 450);
  };

  root.innerHTML = `
<div class="screen settings-screen">
  <header class="topbar topbar-paper">
    <button id="backToBuildingBtn" class="icon-btn" aria-label="عودة إلى المبنى"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
    <div class="topbar-titles"><b>مكتب شؤون الطلاب</b><small dir="ltr">STUDENT AFFAIRS OFFICE</small></div>
    <div class="spacer"></div>
    <span id="settingsSaved" class="settings-saved is-saved">محفوظ على جهازك</span>
    ${sealSVG(34, 'onPaper')}
  </header>

  <section class="settings-hero">
    <span class="unit-kicker">مكتب شؤون الطلاب</span>
    <h1 class="settings-title">إعداداتك — على جهازك وحدك</h1>
    <p class="settings-sub">أربعة أقسام تضبط إيقاع تعلّمك، خصوصيتك، هويتك العامة، ووصولك. لا خادم، لا حساب، ولا شيء يغادر هذا الجهاز.</p>
  </section>

  <main class="settings-wrap">
    <nav class="settings-tabs" role="tablist" aria-label="أقسام الإعدادات">
      <button class="settings-tab is-active" role="tab" aria-selected="true" data-tab="academic"><span>01</span>الأكاديمية والوقت</button>
      <button class="settings-tab" role="tab" aria-selected="false" data-tab="profile"><span>02</span>الملف والخصوصية</button>
      <button class="settings-tab" role="tab" aria-selected="false" data-tab="public"><span>03</span>الهوية العامة</button>
      <button class="settings-tab" role="tab" aria-selected="false" data-tab="access"><span>04</span>الوصول والجهاز</button>
    </nav>

    <section class="settings-panel" data-panel="academic" role="tabpanel" aria-label="الأكاديمية والوقت السائل">
      <div class="settings-panel-head">
        <h2>الإعدادات الأكاديمية والوقت السائل</h2>
        <p>هذه الإعدادات تُطبَّق تلقائياً في الفصل والردهة — ويمكنك تغيير وقت الجلسة داخل الدرس نفسه.</p>
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>الوقت الافتراضي للجلسة</b><small>الوقت الذي يفتح به الدرس: 10 دقائق مركّزة، 20 متوازنة، أو 60 معمّقة.</small></div>
        ${segmented('sessionMinutes', SESSION_OPTIONS, settings.academic.defaultSessionMinutes)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>سقف مراجعة SRS اليومي</b><small>أقصى عدد بطاقات مستحقة في الجلسة الواحدة — سقف يمنع الإرهاق، لا يمنع التعلم.</small></div>
        <div class="settings-range">
          <input id="srsCap" type="range" min="5" max="60" step="5" value="${settings.academic.srsDailyCap}" aria-label="سقف بطاقات المراجعة اليومي" />
          <output id="srsCapOut">${settings.academic.srsDailyCap} بطاقة</output>
        </div>
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>سرعة النطق (TTS)</b><small>تُطبَّق على كل صوت إنجليزي في الدروس والمكتبة والمقهى والمقابلات.</small></div>
        ${segmented('ttsSpeed', TTS_OPTIONS, settings.academic.ttsSpeed)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>اللهجة</b><small>أمريكي أو بريطاني — للاستماع وللتعرف على الكلام عند توفره.</small></div>
        ${segmented('accent', ACCENT_OPTIONS, settings.academic.accent)}
      </div>

      <div class="settings-voice-test">
        <button id="testVoiceBtn" class="btn btn-ghost">اختبر الصوت الآن</button>
        <span id="voiceStatus">سيُنطق: «This is your Talaqa voice.»</span>
      </div>

      <p class="settings-note"><b>الوقت السائل:</b> كل هدف تعليمي يبقى محفوظاً في الأوضاع الثلاثة. ما يتقلّص هو كثافة الشرح وعدد التمارين، لا الأهداف.</p>
    </section>

    <section class="settings-panel" data-panel="profile" role="tabpanel" aria-label="الملف الشخصي والخصوصية" hidden>
      <div class="settings-panel-head">
        <h2>الملف الشخصي والخصوصية</h2>
        <p>اسمك الخاص يظهر في التطبيق والترحيب. الشهادة الرسمية تُبنى من بطاقة الطالب، لا من هذا الاسم.</p>
      </div>

      <div class="settings-profile-card">
        <div class="avatar-preview" id="avatarPreview">${avatarHtml(settings, student)}</div>
        <div class="settings-profile-fields">
          <label class="settings-label">الاسم الذي يظهر في التطبيق
            <input id="displayNameInput" class="settings-input" value="${escapeHtml(settings.profile.displayName)}" maxlength="80" autocomplete="off" />
          </label>
          <label class="settings-label">الأحرف الأولى (حرفان)
            <input id="initialsInput" class="settings-input" value="${escapeHtml(settings.profile.initials)}" maxlength="2" autocomplete="off" />
          </label>
          ${segmented('avatar', AVATAR_OPTIONS, settings.profile.avatar)}
        </div>
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>المظهر</b><small>فاتح أو داكن أو يتبع نظام جهازك تلقائياً.</small></div>
        ${segmented('theme', THEME_OPTIONS, settings.profile.theme)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>قفل الجلسة (PIN)</b><small>أربعة أرقام محلية تمنع فتح المبنى عند استخدام الجهاز من أكثر من شخص.</small></div>
        <div class="settings-pin-box">
          <span id="pinStatus" class="settings-pin-status ${settings.profile.pin ? 'is-on' : ''}">${settings.profile.pin ? 'مفعّل' : 'غير مفعّل'}</span>
          <button id="pinManageBtn" class="btn btn-ghost btn-small">${settings.profile.pin ? 'تغيير الرمز' : 'تعيين رمز'}</button>
          <button id="pinRemoveBtn" class="btn btn-ghost btn-small" ${settings.profile.pin ? '' : 'hidden'}>إزالة</button>
        </div>
      </div>

      <div class="settings-lock-row">
        <button id="lockNowBtn" class="btn btn-primary" ${settings.profile.pin ? '' : 'hidden'}>اقفل الجلسة الآن</button>
        <span class="settings-hint">يعود بك إلى البوابة ويطلب الرمز عند الدخول.</span>
      </div>

      <p class="settings-note">القفل المحلي يحمي شاشة الدخول من الاستخدام المشترك، لكنه ليس تشفيراً لقاعدة البيانات — من يملك الجهاز يملك ملفاته. لا نبيع وهم «أمان مطلق».</p>
    </section>

    <section class="settings-panel" data-panel="public" role="tabpanel" aria-label="الهوية العامة والاعتماد" hidden>
      <div class="settings-panel-head">
        <h2>الهوية العامة والاعتماد</h2>
        <p>تحكّم في ما يراه الآخرون عند عرض الشهادة أو السيرة أو السجل. الملف الموقّع نفسه يبقى كاملاً.</p>
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>الاسم في الشهادة والسيرة</b><small>الاسم الكامل أو الاسم الأول فقط — لخصوصية أكبر عند المشاركة.</small></div>
        ${segmented('nameMode', NAME_OPTIONS, settings.publicIdentity.nameMode)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>رقم الطالب</b><small>إظهار رقم الطالب في الشهادة والسجل الأكاديمي.</small></div>
        ${toggle('showStudentId', settings.publicIdentity.showStudentId)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>التوقيع الرقمي (ECDSA)</b><small>إظهار بصمة المفتاح وخوارزمية التوقيع في عرض الشهادة.</small></div>
        ${toggle('showSignature', settings.publicIdentity.showSignature)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>الدرجات التفصيلية في السجل</b><small>إظهار جدول محاضر الامتحانات ومتوسطات المحطات في السجل الأكاديمي.</small></div>
        ${toggle('showDetailedGrades', settings.publicIdentity.showDetailedGrades)}
      </div>

      <p class="settings-note"><b>مهم:</b> هذه الخيارات تخفي العرض فقط. ملف الشهادة الموقّع يبقى كما هو، ويمكن التحقق منه من ملفه الأصلي. من يملك ملف الشهادة يرى ما فيه — لا نعد بسرية لا يستطيع التطبيق ضمانها.</p>
    </section>

    <section class="settings-panel" data-panel="access" role="tabpanel" aria-label="الوصول وإدارة الجهاز" hidden>
      <div class="settings-panel-head">
        <h2>الوصول وإدارة الجهاز</h2>
        <p>اجعل القراءة أسهل، وأدر نسختك المحلية بوعي — بما فيها حقك في التصدير والمسح الكامل.</p>
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>حجم الخط</b><small>يكبّر كل الواجهة مع الحفاظ على اتجاه RTL وعدم كسر التخطيط.</small></div>
        ${segmented('fontScale', FONT_OPTIONS, settings.accessibility.fontScale)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>التباين العالي</b><small>حدود ونصوص أوضح للقراءة في الإضاءة الصعبة.</small></div>
        ${toggle('highContrast', settings.accessibility.highContrast)}
      </div>

      <div class="settings-row">
        <div class="settings-row-copy"><b>تقليل الحركة</b><small>إيقاف الأنميشن — أسرع على الأجهزة الضعيفة وأريح بصرياً.</small></div>
        ${toggle('reducedMotion', settings.accessibility.reducedMotion)}
      </div>

      <div class="settings-storage">
        <div class="settings-storage-head">
          <div class="settings-row-copy"><b>حجم البيانات على هذا الجهاز</b><small id="storageText">جارٍ حساب المساحة…</small></div>
          <span id="storageFootprint" class="settings-storage-footprint">—</span>
        </div>
        <div class="storage-bar" aria-hidden="true"><i id="storageFill"></i></div>
        <p id="storageQuota" class="settings-hint">المتصفح يحدد المساحة المتاحة — لا نطلب أكثر مما يحتاجه جهازك.</p>
      </div>

      <div class="settings-data-actions">
        <button id="exportAllBtn" class="btn btn-primary">تصدير كل بياناتك (JSON)</button>
        <button id="importAllBtn" class="btn btn-ghost">استيراد نسخة احتياطية</button>
        <input type="file" id="importAllFile" accept="application/json,.json" hidden />
        <button id="eraseAllBtn" class="btn btn-danger">مسح جميع البيانات نهائياً</button>
      </div>

      <p class="settings-note"><b>الصدق في التصدير:</b> الملف يشمل الطالب والتقدم والبطاقات والامتحانات والشهادات والمكتبة والمسار المهني والإعدادات. لا يشمل مفتاح التوقيع الخاص — فهو غير قابل للتصدير ويبقى على هذا الجهاز؛ الشهادات الصادرة تبقى قابلة للتحقق من ملفاتها.</p>
    </section>

    <p class="settings-honest">مكتب شؤون الطلاب يعمل محلياً بالكامل: لا يرسل اسمك ولا رمزك ولا درجاتك إلى أي خادم. ما تراه هنا هو ما في جهازك — لا أكثر.</p>
  </main>
</div>`;

  root.querySelector('#backToBuildingBtn')!.addEventListener('click', () => go('building'));

  /* ── التبويبات ── */
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('.settings-tab')];
  const panels = [...root.querySelectorAll<HTMLElement>('.settings-panel')];
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== id;
      });
    });
  });

  /* ── أزرار الاختيار ── */
  root.querySelectorAll<HTMLElement>('.segmented').forEach((group) => {
    const name = group.dataset.setting ?? '';
    group.querySelectorAll<HTMLButtonElement>('.segmented-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.dataset.value ?? '';
        group.querySelectorAll<HTMLButtonElement>('.segmented-btn').forEach((item) => {
          const active = item === button;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        if (name === 'sessionMinutes') {
          void persist((draft) => {
            draft.academic.defaultSessionMinutes = Number(value) as SessionMinutes;
          }, true);
        } else if (name === 'ttsSpeed') {
          void persist((draft) => {
            draft.academic.ttsSpeed = value as TtsSpeed;
          }, true);
        } else if (name === 'accent') {
          void persist((draft) => {
            draft.academic.accent = value as SpeechAccent;
          }, true);
        } else if (name === 'theme') {
          void persist((draft) => {
            draft.profile.theme = value as ThemeMode;
          }, true);
        } else if (name === 'fontScale') {
          void persist((draft) => {
            draft.accessibility.fontScale = value as FontScale;
          }, true);
        } else if (name === 'nameMode') {
          void persist((draft) => {
            draft.publicIdentity.nameMode = value as CertificateNameMode;
          }, true);
        } else if (name === 'avatar') {
          settings = SettingsEngine.normalize({
            ...settings,
            profile: { ...settings.profile, avatar: value as AvatarKind },
          });
          const preview = root.querySelector<HTMLElement>('#avatarPreview');
          if (preview) preview.innerHTML = avatarHtml(settings, student);
          void persist((draft) => {
            draft.profile.avatar = value as AvatarKind;
          }, true);
        }
      });
    });
  });

  /* ── المفاتيح ── */
  root.querySelectorAll<HTMLInputElement>('[data-toggle]').forEach((input) => {
    input.addEventListener('change', () => {
      const name = input.dataset.toggle ?? '';
      const checked = input.checked;
      if (name === 'showStudentId') {
        void persist((draft) => { draft.publicIdentity.showStudentId = checked; }, true);
      } else if (name === 'showSignature') {
        void persist((draft) => { draft.publicIdentity.showSignature = checked; }, true);
      } else if (name === 'showDetailedGrades') {
        void persist((draft) => { draft.publicIdentity.showDetailedGrades = checked; }, true);
      } else if (name === 'highContrast') {
        void persist((draft) => { draft.accessibility.highContrast = checked; }, true);
      } else if (name === 'reducedMotion') {
        void persist((draft) => { draft.accessibility.reducedMotion = checked; }, true);
      }
    });
  });

  /* ── سقف المراجعة ── */
  const capInput = root.querySelector<HTMLInputElement>('#srsCap')!;
  const capOut = root.querySelector<HTMLOutputElement>('#srsCapOut')!;
  capInput.addEventListener('input', () => {
    capOut.textContent = `${capInput.value} بطاقة`;
  });
  capInput.addEventListener('change', () => {
    const value = Number(capInput.value);
    void persist((draft) => { draft.academic.srsDailyCap = value; }, true);
  });

  /* ── الصوت ── */
  root.querySelector('#testVoiceBtn')!.addEventListener('click', () => {
    speakEnglish('This is your Talaqa voice. Listen carefully.');
    const status = root.querySelector<HTMLElement>('#voiceStatus');
    if (status) status.textContent = 'استمع… إن لم تسمع صوتاً، فمتصفحك قد يمنع النطق حتى أول تفاعل.';
  });

  /* ── الاسم والأحرف الأولى ── */
  const nameInput = root.querySelector<HTMLInputElement>('#displayNameInput')!;
  const initialsInput = root.querySelector<HTMLInputElement>('#initialsInput')!;
  const refreshAvatar = () => {
    const preview = root.querySelector<HTMLElement>('#avatarPreview');
    if (preview) preview.innerHTML = avatarHtml(settings, student);
  };
  // الأحرف الأولى تتبع الاسم تلقائياً ما لم يكتبها الطالب بنفسه
  let initialsTouched = Boolean(
    settings.profile.initials.trim() && settings.profile.initials !== initialsFromName(settings.profile.displayName)
  );
  nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    const autoInitials = initialsFromName(value);
    if (!initialsTouched) initialsInput.value = autoInitials;
    settings = SettingsEngine.normalize({
      ...settings,
      profile: { ...settings.profile, displayName: value, initials: initialsTouched ? settings.profile.initials : autoInitials },
    });
    refreshAvatar();
    persistSoon((draft) => {
      draft.profile.displayName = value;
      if (!initialsTouched) draft.profile.initials = autoInitials;
    });
  });
  initialsInput.addEventListener('input', () => {
    initialsTouched = true;
    const value = initialsInput.value.slice(0, 2);
    settings = SettingsEngine.normalize({ ...settings, profile: { ...settings.profile, initials: value } });
    refreshAvatar();
    persistSoon((draft) => { draft.profile.initials = value; });
  });

  /* ── PIN ── */
  const updatePinUi = () => {
    const hasPin = Boolean(settings.profile.pin);
    const status = root.querySelector<HTMLElement>('#pinStatus');
    const manage = root.querySelector<HTMLButtonElement>('#pinManageBtn');
    const remove = root.querySelector<HTMLButtonElement>('#pinRemoveBtn');
    const lock = root.querySelector<HTMLButtonElement>('#lockNowBtn');
    if (status) {
      status.textContent = hasPin ? 'مفعّل' : 'غير مفعّل';
      status.classList.toggle('is-on', hasPin);
    }
    if (manage) manage.textContent = hasPin ? 'تغيير الرمز' : 'تعيين رمز';
    if (remove) remove.hidden = !hasPin;
    if (lock) lock.hidden = !hasPin;
  };

  root.querySelector('#pinManageBtn')!.addEventListener('click', () => {
    const hasPin = Boolean(settings.profile.pin);
    void promptPin(
      hasPin ? 'تغيير رمز PIN' : 'تعيين رمز PIN',
      'أدخل أربعة أرقام لحماية الدخول إلى هذا الجهاز. لن نستطيع استعادته إن نسيته — يمكنك إزالته من هنا بعد الدخول.',
      { confirm: true, submitLabel: hasPin ? 'حفظ الرمز الجديد' : 'تعيين الرمز' }
    ).then((pin) => {
      if (!pin) return;
      void SettingsEngine.setPin(pin)
        .then((next) => {
          settings = next;
          updatePinUi();
          toast('فُعّل قفل الجلسة — الرمز محفوظ محلياً');
        })
        .catch(() => toast('تعذر تعيين الرمز'));
    });
  });

  root.querySelector('#pinRemoveBtn')!.addEventListener('click', () => {
    void showConfirm('إزالة قفل PIN تعني أن أي شخص يستخدم هذا الجهاز يستطيع فتح المبنى. متابعة؟', 'أزل القفل').then((ok) => {
      if (!ok) return;
      void SettingsEngine.clearPin().then((next) => {
        settings = next;
        updatePinUi();
        toast('أُزيل قفل الجلسة');
      });
    });
  });

  root.querySelector('#lockNowBtn')!.addEventListener('click', () => {
    session.unlocked = false;
    go('gate');
  });

  /* ── البيانات ── */
  const refreshStorage = async () => {
    const [estimate, footprint] = await Promise.all([
      getStorageEstimate().catch(() => null),
      getDataFootprint().catch(() => 0),
    ]);
    const usage = estimate?.usage ?? footprint;
    const quota = estimate?.quota ?? 0;
    const fill = root.querySelector<HTMLElement>('#storageFill');
    const text = root.querySelector<HTMLElement>('#storageText');
    const quotaText = root.querySelector<HTMLElement>('#storageQuota');
    const footprintText = root.querySelector<HTMLElement>('#storageFootprint');
    const pct = quota > 0 ? Math.min(100, Math.max(1, (usage / quota) * 100)) : 0;
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${formatBytes(usage)} مستخدمة من ${formatBytes(quota)} متاحة للمتصفح`;
    if (quotaText) quotaText.textContent = quota > 0 ? `بيانات طَلَاقة وحدها تقارب ${formatBytes(footprint)} — والمساحة المتبقية يحددها المتصفح.` : 'المتصفح لا يفصح عن الحصة المتاحة — لكن بياناتك محفوظة محلياً.';
    if (footprintText) footprintText.textContent = formatBytes(footprint);
  };
  void refreshStorage();

  root.querySelector('#exportAllBtn')!.addEventListener('click', () => {
    void exportAllDataFile()
      .then(() => toast('حُفظت نسخة كاملة من بياناتك — احتفظ بها في مكان آمن'))
      .catch(() => toast('تعذر تصدير البيانات — تحقق من مساحة التخزين'));
  });

  const importInput = root.querySelector<HTMLInputElement>('#importAllFile')!;
  root.querySelector('#importAllBtn')!.addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', () => {
    const file = importInput.files?.[0];
    if (!file) return;
    void showConfirm('سيُستبدل كل ما في هذا الجهاز ببيانات الملف. إن كانت لديك بيانات لم تصدّرها، ألغِ الآن وصدّرها أولاً. متابعة؟', 'استورد واستبدل').then(async (ok) => {
      if (!ok) {
        importInput.value = '';
        return;
      }
      try {
        await importAllData(file);
        SettingsEngine.invalidate();
        await SettingsEngine.load();
        session.unlocked = false;
        toast('استُعيدت النسخة — سيعود التطبيق إلى البوابة');
        go('gate');
      } catch (err: unknown) {
        toast(err instanceof Error ? err.message : 'تعذر استيراد النسخة');
      } finally {
        importInput.value = '';
      }
    });
  });

  root.querySelector('#eraseAllBtn')!.addEventListener('click', () => {
    void showConfirm('سيُمسح كل شيء: الطالب، التقدم، البطاقات، الامتحانات، الشهادات، المكتبة، المسار المهني، والإعدادات. لا يمكن التراجع. متابعة؟', 'امسح كل شيء').then((ok) => {
      if (!ok) return;
      void showConfirm('تأكيد أخير: هل صدّرت نسخة احتياطية؟ بعد المسح لا توجد نسخة على هذا الجهاز. امسح نهائياً؟', 'أمسح نهائياً').then(async (final) => {
        if (!final) return;
        try {
          await clearAllStudents();
          SettingsEngine.invalidate();
          await SettingsEngine.reset();
          session.unlocked = false;
          toast('مُسحت كل البيانات من هذا الجهاز');
          go('gate');
        } catch {
          toast('تعذر مسح البيانات — جرّب من إعدادات المتصفح');
        }
      });
    });
  });
}

registerScreen('settings', renderSettings);
