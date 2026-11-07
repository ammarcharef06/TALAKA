/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك الوقت السائل (Time-Fluid)
   يضغط الدرس أو يمدده إلى 10 / 20 / 60 دقيقة دون فقدان أي هدف تعليمي.
   المحرك حتمي بالكامل: لا LLM، لا اتصال خارجي، لا توليد نصوص جديدة.
   ═══════════════════════════════════════════════════════════════ */
import type { Lesson, LessonBlock, LessonExample, PracticeItem, SessionMinutes } from '../types';

export type FluidMinutes = SessionMinutes;

export interface FluidPhase {
  id: 'study' | 'examples' | 'practice' | 'deep' | 'review';
  title: string;
  minutes: number;
  description: string;
}

export interface FluidCoverage {
  objective: string;
  blockTitle: string | null;
  exampleText: string | null;
  practiceId: string | null;
}

export interface FluidPlan {
  minutes: FluidMinutes;
  label: string;
  summary: string;
  objectives: string[];
  phases: FluidPhase[];
  blocks: LessonBlock[];
  examples: LessonExample[];
  practice: PracticeItem[];
  deepTasks: string[];
  coverage: FluidCoverage[];
  allObjectivesPreserved: true;
}

export const FLUID_MODES: { minutes: FluidMinutes; short: string; label: string; description: string }[] = [
  { minutes: 10, short: '10 دقائق', label: 'جلسة خاطفة', description: 'الأهداف كاملة، شرح مركّز، وتدريب سريع.' },
  { minutes: 20, short: '20 دقيقة', label: 'جلسة متوازنة', description: 'كل كتل الدرس وأمثلته وتدريبه في جلسة واحدة.' },
  { minutes: 60, short: '60 دقيقة', label: 'جلسة معمّقة', description: 'الدرس كاملاً + ورشة إنتاج ومراجعة ذاتية.' },
];

const PHASES: Record<FluidMinutes, FluidPhase[]> = {
  10: [
    { id: 'study', title: 'الخريطة السريعة', minutes: 4, description: 'اقرأ كتل الدرس المختارة — كل هدف له موضع هنا.' },
    { id: 'examples', title: 'استمع وردّد', minutes: 2, description: 'أمثلة قصيرة بصوت عالٍ.' },
    { id: 'practice', title: 'تدريب مركّز', minutes: 3, description: 'أسئلة تغطي الأهداف نفسها.' },
    { id: 'review', title: 'ختم الجلسة', minutes: 1, description: 'راجع الأهداف في سطر واحد.' },
  ],
  20: [
    { id: 'study', title: 'الدراسة الكاملة', minutes: 8, description: 'كل كتل الشرح والجداول.' },
    { id: 'examples', title: 'الأمثلة والنطق', minutes: 4, description: 'كل الأمثلة، مع الاستماع والترديد.' },
    { id: 'practice', title: 'التدريب الكامل', minutes: 7, description: 'كل أسئلة الدرس.' },
    { id: 'review', title: 'ختم الجلسة', minutes: 1, description: 'راجع الأهداف وأخطاءك.' },
  ],
  60: [
    { id: 'study', title: 'الدراسة المتأنية', minutes: 15, description: 'كل كتل الدرس، بلا اختصار.' },
    { id: 'examples', title: 'الأمثلة والنطق', minutes: 10, description: 'كل الأمثلة، مرتين: استماع ثم ترديد.' },
    { id: 'practice', title: 'التدريب الكامل', minutes: 20, description: 'كل الأسئلة، وراجع شرح كل خطأ.' },
    { id: 'deep', title: 'ورشة الإنتاج', minutes: 10, description: 'حوّل المعرفة إلى إنتاج لغوي أصلي.' },
    { id: 'review', title: 'المراجعة الذاتية', minutes: 5, description: 'علّم نفسك: ماذا أتقنت؟ وما بقي؟' },
  ],
};

const DEEP_TASKS = [
  'أعد شرح كل قاعدة بصوتك دون النظر إلى النص.',
  'اكتب ثلاث جمل أصلية تستخدم أمثلة الدرس.',
  'راجع بطاقات هذا الدرس في ردهة التكرار المتباعد.',
  'علّم الدرس لشخص آخر في دقيقتين — الشرح اختبار الفهم.',
  'أعد الأسئلة التي أخطأت فيها وفسّر سبب الخطأ.',
];

function uniqueBy<T>(items: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const k = key(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/** خريطة تغطية حتمية: كل هدف يُربط بكتلة ومثال وسؤال (حسب ترتيبه) */
function buildCoverage(lesson: Lesson): FluidCoverage[] {
  return lesson.objectives.map((objective, index) => {
    const block = lesson.blocks.length ? lesson.blocks[index % lesson.blocks.length] : null;
    const example = lesson.examples.length ? lesson.examples[index % lesson.examples.length] : null;
    const practice = lesson.practice.length ? lesson.practice[index % lesson.practice.length] : null;
    return {
      objective,
      blockTitle: block ? (block.type === 'table' ? (block.title ?? 'جدول الدرس') : block.title) : null,
      exampleText: example?.text ?? null,
      practiceId: practice?.id ?? null,
    };
  });
}

function selectBlocks(lesson: Lesson, coverage: FluidCoverage[], minutes: FluidMinutes): LessonBlock[] {
  if (minutes !== 10) return [...lesson.blocks];
  const titles = new Set(coverage.map((c) => c.blockTitle).filter((t): t is string => Boolean(t)));
  const selected = lesson.blocks.filter((block) => {
    const title = block.type === 'table' ? (block.title ?? 'جدول الدرس') : block.title;
    return titles.has(title);
  });
  // ضمان وجود كتلة واحدة على الأقل حتى لو كانت العناوين متطابقة
  return selected.length ? selected : lesson.blocks.slice(0, 1);
}

function selectExamples(lesson: Lesson, coverage: FluidCoverage[], minutes: FluidMinutes): LessonExample[] {
  if (minutes !== 10) return [...lesson.examples];
  const texts = new Set(coverage.map((c) => c.exampleText).filter((t): t is string => Boolean(t)));
  const selected = uniqueBy(
    lesson.examples.filter((example) => texts.has(example.text)),
    (example) => example.text
  );
  return selected.length ? selected : lesson.examples.slice(0, 2);
}

function selectPractice(lesson: Lesson, coverage: FluidCoverage[], minutes: FluidMinutes): PracticeItem[] {
  if (minutes !== 10) return [...lesson.practice];
  const ids = new Set(coverage.map((c) => c.practiceId).filter((id): id is string => Boolean(id)));
  const selected = lesson.practice.filter((item) => ids.has(item.id));
  return selected.length ? selected : lesson.practice.slice(0, 3);
}

/** يبني خطة جلسة كاملة من درس ثابت — كل هدف تعليمي محفوظ في كل الأوضاع */
export function buildFluidPlan(lesson: Lesson, minutes: FluidMinutes): FluidPlan {
  const resolved: FluidMinutes = FLUID_MODES.some((item) => item.minutes === minutes) ? minutes : 20;
  const mode = FLUID_MODES.find((item) => item.minutes === resolved) ?? FLUID_MODES[1];
  const coverage = buildCoverage(lesson);
  return {
    minutes: resolved,
    label: mode.label,
    summary: mode.description,
    objectives: [...lesson.objectives],
    phases: PHASES[resolved].map((phase) => ({ ...phase })),
    blocks: selectBlocks(lesson, coverage, resolved),
    examples: selectExamples(lesson, coverage, resolved),
    practice: selectPractice(lesson, coverage, resolved),
    deepTasks: resolved === 60 ? [...DEEP_TASKS] : [],
    coverage,
    allObjectivesPreserved: true,
  };
}

export function planMinutes(plan: FluidPlan): number {
  return plan.phases.reduce((sum, phase) => sum + phase.minutes, 0);
}
