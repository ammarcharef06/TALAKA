/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك إعدادات مكتب شؤون الطلاب
   يفصل منطق القراءة/الحفظ/التطبيق عن واجهة المستخدم.
   كل شيء محلي: IndexedDB على هذا الجهاز وحده، بلا خادم ولا حساب.
   ═══════════════════════════════════════════════════════════════ */
import type {
  AppSettings,
  AvatarKind,
  CertificateNameMode,
  FontScale,
  PinCredential,
  SessionMinutes,
  SettingsRecord,
  SpeechAccent,
  ThemeMode,
  TtsSpeed,
} from '../types';
import { getSettingsRecord, saveSettingsRecord } from '../store/db';

const PIN_ITERATIONS = 120_000;
const PIN_PATTERN = /^\d{4}$/;
const SESSION_VALUES: SessionMinutes[] = [10, 20, 60];
const TTS_VALUES: TtsSpeed[] = ['slow', 'normal', 'fast'];
const ACCENT_VALUES: SpeechAccent[] = ['american', 'british'];
const THEME_VALUES: ThemeMode[] = ['light', 'dark', 'system'];
const FONT_VALUES: FontScale[] = ['normal', 'large', 'xlarge'];
const NAME_VALUES: CertificateNameMode[] = ['full', 'first'];
const AVATAR_VALUES: AvatarKind[] = ['initials', 'seal'];

const TTS_RATES: Record<TtsSpeed, number> = { slow: 0.7, normal: 1, fast: 1.28 };
const TTS_LANGS: Record<SpeechAccent, string> = { american: 'en-US', british: 'en-GB' };

function nowIso(): string {
  return new Date().toISOString();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function pickEnum<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

function pickSession(value: unknown): SessionMinutes {
  const n = Number(value);
  return SESSION_VALUES.includes(n as SessionMinutes) ? (n as SessionMinutes) : 20;
}

function pickInt(value: unknown, fallback: number, min: number, max: number): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function pickText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function pickBool(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function pickPin(value: unknown): PinCredential | null {
  if (!isRecord(value)) return null;
  const salt = typeof value.salt === 'string' ? value.salt : '';
  const hash = typeof value.hash === 'string' ? value.hash : '';
  const iterations = Number(value.iterations);
  if (!salt || !hash || !Number.isFinite(iterations) || iterations < 10_000) return null;
  return { salt, hash, iterations: Math.round(iterations) };
}

/** كائن الإعدادات الافتراضي — يُطبَّق تلقائياً على أي طالب جديد */
export function defaultSettings(): AppSettings {
  return {
    version: 1,
    academic: {
      defaultSessionMinutes: 20,
      srsDailyCap: 20,
      ttsSpeed: 'normal',
      accent: 'american',
    },
    profile: {
      displayName: '',
      initials: '',
      avatar: 'initials',
      pin: null,
      theme: 'system',
    },
    publicIdentity: {
      nameMode: 'full',
      showStudentId: true,
      showSignature: true,
      showDetailedGrades: true,
    },
    accessibility: {
      fontScale: 'normal',
      highContrast: false,
      reducedMotion: false,
    },
    updatedAt: nowIso(),
  };
}

/** يدمج أي إعدادات قديمة/ناقصة مع الافتراضي ويقص القيم غير الصالحة */
export function normalizeSettings(raw: unknown): AppSettings {
  const base = defaultSettings();
  if (!isRecord(raw)) return base;

  const academic = isRecord(raw.academic) ? raw.academic : {};
  const profile = isRecord(raw.profile) ? raw.profile : {};
  const publicIdentity = isRecord(raw.publicIdentity) ? raw.publicIdentity : {};
  const accessibility = isRecord(raw.accessibility) ? raw.accessibility : {};

  return {
    version: 1,
    academic: {
      defaultSessionMinutes: pickSession(academic.defaultSessionMinutes),
      srsDailyCap: pickInt(academic.srsDailyCap, base.academic.srsDailyCap, 5, 100),
      ttsSpeed: pickEnum(academic.ttsSpeed, TTS_VALUES, base.academic.ttsSpeed),
      accent: pickEnum(academic.accent, ACCENT_VALUES, base.academic.accent),
    },
    profile: {
      displayName: pickText(profile.displayName, 80),
      initials: pickText(profile.initials, 2),
      avatar: pickEnum(profile.avatar, AVATAR_VALUES, base.profile.avatar),
      pin: pickPin(profile.pin),
      theme: pickEnum(profile.theme, THEME_VALUES, base.profile.theme),
    },
    publicIdentity: {
      nameMode: pickEnum(publicIdentity.nameMode, NAME_VALUES, base.publicIdentity.nameMode),
      showStudentId: pickBool(publicIdentity.showStudentId, base.publicIdentity.showStudentId),
      showSignature: pickBool(publicIdentity.showSignature, base.publicIdentity.showSignature),
      showDetailedGrades: pickBool(publicIdentity.showDetailedGrades, base.publicIdentity.showDetailedGrades),
    },
    accessibility: {
      fontScale: pickEnum(accessibility.fontScale, FONT_VALUES, base.accessibility.fontScale),
      highContrast: pickBool(accessibility.highContrast, base.accessibility.highContrast),
      reducedMotion: pickBool(accessibility.reducedMotion, base.accessibility.reducedMotion),
    },
    updatedAt: typeof raw.updatedAt === 'string' && raw.updatedAt ? raw.updatedAt : nowIso(),
  };
}

export function initialsFromName(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 'ط';
  if (words.length === 1) return Array.from(words[0]).slice(0, 2).join('');
  return words
    .slice(0, 2)
    .map((word) => Array.from(word)[0] ?? '')
    .join('');
}

/** الاسم العام في الشهادة والسيرة — يخفي ما بعد الاسم الأول عند الطلب */
export function publicNameFor(fullName: string, settings: AppSettings): string {
  const clean = fullName.trim().replace(/\s+/g, ' ');
  if (!clean) return '';
  if (settings.publicIdentity.nameMode === 'full') return clean;
  return clean.split(' ')[0] ?? clean;
}

export function ttsConfigFor(settings: AppSettings): { lang: string; rate: number } {
  return {
    lang: TTS_LANGS[settings.academic.accent],
    rate: TTS_RATES[settings.academic.ttsSpeed],
  };
}

export function recognitionLangFor(settings: AppSettings): string {
  return TTS_LANGS[settings.academic.accent];
}

/* ── PIN محلي: PBKDF2-SHA-256 مع ملح عشوائي — لا يُخزَّن الرمز نفسه ── */

function bytesToHex(bytes: Uint8Array): string {
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex: string): Uint8Array<ArrayBuffer> {
  const clean = hex.length % 2 === 0 ? hex : `0${hex}`;
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i += 1) out[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  return out;
}

async function derivePin(pin: string, salt: Uint8Array<ArrayBuffer>, iterations: number): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    key,
    256
  );
  return bytesToHex(new Uint8Array(bits));
}

export async function hashPin(pin: string): Promise<PinCredential> {
  if (!PIN_PATTERN.test(pin)) throw new Error('رمز PIN يجب أن يكون 4 أرقام');
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePin(pin, salt, PIN_ITERATIONS);
  return { salt: bytesToHex(salt), hash, iterations: PIN_ITERATIONS };
}

export async function verifyPinCredential(pin: string, credential: PinCredential): Promise<boolean> {
  if (!PIN_PATTERN.test(pin)) return false;
  try {
    const hash = await derivePin(pin, hexToBytes(credential.salt), credential.iterations);
    if (hash.length !== credential.hash.length) return false;
    let diff = 0;
    for (let i = 0; i < hash.length; i += 1) diff |= hash.charCodeAt(i) ^ credential.hash.charCodeAt(i);
    return diff === 0;
  } catch {
    return false;
  }
}

/* ── التطبيق على الواجهة ── */

let cache: AppSettings | null = null;
let loadPromise: Promise<AppSettings> | null = null;
let writeChain: Promise<void> = Promise.resolve();
let systemQuery: MediaQueryList | null = null;
let systemHandler: (() => void) | null = null;

function resolvedTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'system') return mode;
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function bindSystemTheme(mode: ThemeMode): void {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  if (systemQuery && systemHandler) systemQuery.removeEventListener('change', systemHandler);
  systemQuery = null;
  systemHandler = null;
  if (mode !== 'system') return;
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    if (typeof document !== 'undefined') document.documentElement.dataset.theme = query.matches ? 'dark' : 'light';
  };
  query.addEventListener('change', handler);
  systemQuery = query;
  systemHandler = handler;
}

/** يطبّق الإعدادات على جذر الصفحة: المظهر، حجم الخط، التباين، الحركة */
export function applySettings(settings: AppSettings): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.dataset.theme = resolvedTheme(settings.profile.theme);
  root.dataset.themeMode = settings.profile.theme;
  root.dataset.fontScale = settings.accessibility.fontScale;
  root.dataset.contrast = settings.accessibility.highContrast ? 'high' : 'normal';
  root.dataset.motion = settings.accessibility.reducedMotion ? 'reduced' : 'normal';
  bindSystemTheme(settings.profile.theme);
}

/** يحفظ نسخة مطبَّعة ثم يحدّث الذاكرة والواجهة — لا يُستدعى إلا داخل طابور الكتابة */
async function persistNow(next: AppSettings): Promise<AppSettings> {
  const normalized = normalizeSettings({ ...next, updatedAt: nowIso() });
  await saveSettingsRecord(normalized);
  cache = normalized;
  applySettings(normalized);
  return normalized;
}

/** طابور كتابة واحد: نقرات متتابعة لا تتسابق على نفس السجل */
function enqueueWrite<T>(task: () => Promise<T>): Promise<T> {
  const run = writeChain.then(task, task);
  writeChain = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

export const SettingsEngine = {
  defaults: defaultSettings,
  normalize: normalizeSettings,

  /** يقرأ من IndexedDB، وينشئ الافتراضي تلقائياً إن لم يوجد */
  async load(): Promise<AppSettings> {
    if (cache) return cache;
    if (loadPromise) return loadPromise;
    loadPromise = (async () => {
      let stored: SettingsRecord | null = null;
      try {
        stored = await getSettingsRecord();
      } catch {
        stored = null;
      }
      const next = normalizeSettings(stored ?? defaultSettings());
      cache = next;
      applySettings(next);
      if (!stored) {
        try {
          await saveSettingsRecord(next);
        } catch {
          // التخزين قد يكون معطلاً — الإعدادات تعمل في الذاكرة حتى إعادة التحميل
        }
      }
      return next;
    })().finally(() => {
      loadPromise = null;
    });
    return loadPromise;
  },

  async save(next: AppSettings): Promise<AppSettings> {
    return enqueueWrite(() => persistNow(next));
  },

  async update(mutator: (draft: AppSettings) => void): Promise<AppSettings> {
    return enqueueWrite(async () => {
      const base = cache ?? (await SettingsEngine.load());
      const draft = normalizeSettings(base);
      mutator(draft);
      return persistNow(draft);
    });
  },

  async reset(): Promise<AppSettings> {
    return SettingsEngine.save(defaultSettings());
  },

  /** يمسح الذاكرة المؤقتة — بعد استيراد/مسح البيانات */
  invalidate(): void {
    cache = null;
    loadPromise = null;
  },

  current(): AppSettings {
    return cache ?? defaultSettings();
  },

  apply: applySettings,

  displayName(fallback: string): string {
    return cache?.profile.displayName.trim() || fallback;
  },

  initials(fallbackName: string): string {
    const fromSettings = cache?.profile.initials.trim();
    if (fromSettings) return fromSettings;
    return initialsFromName(cache?.profile.displayName.trim() || fallbackName);
  },

  publicName(fullName: string, settings: AppSettings = SettingsEngine.current()): string {
    return publicNameFor(fullName, settings);
  },

  tts(settings: AppSettings = SettingsEngine.current()): { lang: string; rate: number } {
    return ttsConfigFor(settings);
  },

  recognitionLang(settings: AppSettings = SettingsEngine.current()): string {
    return recognitionLangFor(settings);
  },

  srsCap(): number {
    return SettingsEngine.current().academic.srsDailyCap;
  },

  hasPin(): boolean {
    return Boolean(SettingsEngine.current().profile.pin);
  },

  async setPin(pin: string): Promise<AppSettings> {
    const credential = await hashPin(pin);
    return SettingsEngine.update((draft) => {
      draft.profile.pin = credential;
    });
  },

  async clearPin(): Promise<AppSettings> {
    return SettingsEngine.update((draft) => {
      draft.profile.pin = null;
    });
  },

  async verifyPin(pin: string): Promise<boolean> {
    const credential = SettingsEngine.current().profile.pin;
    if (!credential) return false;
    return verifyPinCredential(pin, credential);
  },
};
