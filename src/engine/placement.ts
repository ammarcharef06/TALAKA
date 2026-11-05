/* ─────────────────────────────────────────────────────────────
   طَلَاقَة — محرك تحديد المستوى التكيفي (Adaptive Placement)
   نموذج احتمالي لوجستي (تقريب Elo/IRT) مع صفر اعتماد خارجي:
   يعمل offline بالكامل وبشكل حتمي مع عشوائية الشكل في الترتيب فقط.
   ───────────────────────────────────────────────────────────── */
import { ITEM_BANK, ITEMS_PER_SECTION } from '../data/items';
import type { Cefr, Confidence, Item, PlacementResult, SectionId } from '../types';

export const SECTION_NAMES: Record<SectionId, string> = {
  rules: 'القواعد',
  vocab: 'المفردات',
  reading: 'القراءة',
};

export const CEFR_ORDER: Cefr[] = ['S0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** مراكز التقدير فوق مقياس 0..100 */
export const LEVEL_META: Record<Cefr, { ar: string; en: string; advice: string }> = {
  S0: { ar: 'المستوى التأسيسي — محو الأمية', en: 'Literacy Zero', advice: 'ستبدأ من الحروف والأصوات والجمل الأولى. طلاقة تسلمك من الصفر المطلق، خطوة خطوة، بإيقاعك أنت.' },
  A1: { ar: 'مبتدئ', en: 'Elementary', advice: 'لديك بداية واعدة. سنبني أساسك في القواعد اليومية والمخاطبة والكلمات الـ800 الأكثر استعمالاً.' },
  A2: { ar: 'أساسي', en: 'Pre-Intermediate', advice: 'تحتك قاعدة مبكرة متينة. خطوتك القادمة: المحادثة اليومية وربط الجمل ومرونة الأزمنة الماضية.' },
  B1: { ar: 'متوسط', en: 'Intermediate', advice: 'أنت تتقن أساسيات التواصل. ستعمل الآن على الطلاقة الحقيقية، الربط، والأفكار المركّبة بثقة.' },
  B2: { ar: 'متوسط متقدم', en: 'Upper-Intermediate', advice: 'مستوى محترم جداً. سنشذّب أسلوبك، نوسع حصيلتك الأكاديمية، ونقترب من الإنجليزية المهنية.' },
  C1: { ar: 'متقدم', en: 'Advanced', advice: 'لغتك متماسكة. المتبقي صقل الأسلوب، دقة الاستخدام، والأداء في المواقف المعقدة رسمياً ولفظاً.' },
  C2: { ar: 'احترافي — طلقة تامة', en: 'Proficiency', advice: 'أنت عند مستوى التحدث المطلق. طلاقة ستدفعك لما بعد الإتقان: الدقة، الأسلوب، والبلاغة.' },
};

/** أسماء أخطاء العرب الشائعة كما تظهر للطالب في «تقرير أولويات العلاج» */
export const TAG_NAMES: Record<string, string> = {
  articles: 'أدوات التعريف: a / an / the',
  be: 'فعل الكينونة am / is / are',
  plural: 'جمع الأسماء المنتظم',
  'question-words': 'أدوات الاستفهام',
  'present-simple': 'المضارع البسيط',
  'third-person-s': 'إضافة s مع الغائب (he/she/it)',
  'there-be': 'تركيب there is / there are',
  modals: 'الأفعال الناقصة (can / could)',
  possessive: 'ضمائر الملكية',
  'past-simple': 'الماضي البسيط',
  'present-continuous': 'المضارع المستمر مقابل البسيط',
  'present-perfect': 'المضارع التام',
  comparatives: 'صيغ المقارنة',
  'some-any': 'some / any في النفي والاستفهام',
  'much-many': 'much مع غير المعدود وmany مع المعدود',
  future: 'المستقبل: will مقابل going to',
  'used-to': 'used to للعادات الماضية',
  passive: 'المبني للمجهول',
  'reported-speech': 'الكلام غير المباشر',
  conditionals: 'الجمل الشرطية الثلاثة',
  'relative-clauses': 'جمل الوصل (who / which / that)',
  prepositions: 'حروف الجر (at / on / in)',
  'past-perfect': 'الماضي التام',
  'so-such': 'so مقابل such',
  wish: 'wish + الماضي',
  'linking-words': 'أدوات الربط والتناقض',
  'gerund-infinitive': 'الـ gerund مقابل المصدر',
  'future-perfect': 'المستقبل التام',
  inversion: 'القلب بعد ظروف النفي',
  cleft: 'الجمل الانشقاقية للتركيز',
  subjunctive: 'صيغة الـ subjunctive الرسمية',
  'participle-clauses': 'جمل اسم الفاعل/المفعول',
  ellipsis: 'الحذف والتعويض (neither / so)',
  concession: 'التنازل المتقدم (much as …)',
  'false-friends': 'الكلمات المتشابهة شكلاً false friends',
  collocation: 'المتصاحبات اللفظية الطبيعية',
  'make-do': 'الخلط بين make و do',
  opposites: 'المتضادات الأساسية',
  synonym: 'المترادفات',
  synonyms: 'المترادفات',
  adjectives: 'الصفات الإنجليزية الشائعة',
  idioms: 'التعابير الاصطلاحية',
  phrasal: 'الأفعال المركبة',
  'phrasal-verbs': 'الأفعال المركبة',
  'word-choice': 'اختيار الكلمة الدقيقة',
  'advanced-vocab': 'المفردات المتقدمة',
  'formal-linkers': 'الروابط الرسمية (albeit …)',
  precision: 'الدقة في اختيار المفردة',
  context: 'قراءة السياق واستنتاج المعنى',
  scanning: 'المسح السريع للنصوص',
  inference: 'الاستنتاج من السياق',
  'cause-effect': 'السبب والنتيجة',
  numbers: 'الأرقام والحسابات في النص',
  gist: 'التقاط الفكرة العامة',
  'fact-vs-opinion': 'الفرق بين الحقيقة والرأي',
  detail: 'التقاط التفاصيل الدقيقة',
  'author-purpose': 'قصد الكاتب من النص',
  nuance: 'الفروق الدقيقة في المعنى',
  'critical-reading': 'القراءة النقدية',
  tone: 'نبرة الكاتب',
  subtext: 'ما بين السطور',
  'library-bookshop': 'library (استعارة) × bookshop (بيع)',
  'fabric-factory': 'fabric (قماش) × factory (مصنع)',
  'sensible-sensitive': 'sensible (عاقل) × sensitive (حساس)',
  'comprehensive-comprehensible': 'comprehensive (شامل) × comprehensible (مفهوم)',
  'actually-currently': 'actually (في الواقع) × currently (حالياً)',
  eventually: 'eventually (أخيراً) ≠ فوراً',
  pretend: 'pretend (يتظاهر) ≠ prepare (يستعد)',
  basics: 'المفردات الأساسية',
  family: 'مفردات العائلة',
  food: 'مفردات الطعام والوجبات',
  places: 'مفردات الأماكن',
};

export function tagName(tag: string): string {
  return TAG_NAMES[tag] ?? tag;
}

/** تحويل تقدير 0..100 إلى مستوى CEFR */
export function estimateToLevel(est: number): Cefr {
  if (est < 12) return 'S0';
  if (est < 25) return 'A1';
  if (est < 37) return 'A2';
  if (est < 52) return 'B1';
  if (est < 66) return 'B2';
  if (est < 82) return 'C1';
  return 'C2';
}

const SECTION_ORDER: SectionId[] = ['rules', 'vocab', 'reading'];
const START_ESTIMATE = 45; // تقدير مبدئي (B1) — خط الأساس الذهبي الوحيد

interface AnsweredItem {
  item: Item;
  chosen: number;
  correct: boolean;
}

export class PlacementEngine {
  private estimates: Record<SectionId, number> = { rules: START_ESTIMATE, vocab: START_ESTIMATE, reading: START_ESTIMATE };
  private answeredItems: AnsweredItem[] = [];

  get totalPlanned(): number {
    return ITEMS_PER_SECTION * SECTION_ORDER.length;
  }

  get answeredCount(): number {
    return this.answeredItems.length;
  }

  answeredIn(section: SectionId): number {
    return this.answeredItems.filter((a) => a.item.section === section).length;
  }

  get currentSection(): SectionId | null {
    for (const s of SECTION_ORDER) {
      if (this.answeredIn(s) < ITEMS_PER_SECTION) return s;
    }
    return null;
  }

  get currentSectionIndex(): number {
    const s = this.currentSection;
    return s ? SECTION_ORDER.indexOf(s) : SECTION_ORDER.length;
  }

  /** السؤال التالي الأنسب للطالب الآن */
  nextItem(): Item | null {
    const section = this.currentSection;
    if (!section) return null;
    const used = new Set(this.answeredItems.map((a) => a.item.id));
    const est = this.estimates[section];
    const pool = ITEM_BANK.filter((i) => i.section === section && !used.has(i.id));
    if (pool.length === 0) return null;
    pool.sort((a, b) => Math.abs(a.difficulty - est) - Math.abs(b.difficulty - est));
    const top = pool.slice(0, Math.min(3, pool.length));
    return top[Math.floor(Math.random() * top.length)];
  }

  /** تسجيل إجابة وتحديث التقدير الاحتمالي */
  answer(item: Item, chosen: number): { correct: boolean } {
    const correct = chosen === item.answer;
    const est = this.estimates[item.section];
    // احتمال النجاح المتوقع عند هذا التقدير وهذه الصعوبة (منحنى لوجستي، مقياس 25 نقطة)
    const expected = 1 / (1 + Math.pow(10, (item.difficulty - est) / 25));
    let next = est + 18 * ((correct ? 1 : 0) - expected);
    next = Math.max(0, Math.min(100, next));
    this.estimates[item.section] = next;
    this.answeredItems.push({ item, chosen, correct });
    return { correct };
  }

  isComplete(): boolean {
    return this.currentSection === null;
  }

  finish(): PlacementResult {
    const final = 0.4 * this.estimates.rules + 0.3 * this.estimates.vocab + 0.3 * this.estimates.reading;
    const level = estimateToLevel(final);

    const sectionLevels = SECTION_ORDER.map((s) => estimateToLevel(this.estimates[s]));
    const agreements = sectionLevels.filter((l) => l === level).length;
    let confidence: Confidence = agreements === 3 ? 'high' : agreements === 2 ? 'medium' : 'low';
    if (this.answeredItems.length < ITEMS_PER_SECTION * 3) confidence = 'low';

    const wrongTags = new Map<string, number>();
    for (const a of this.answeredItems) {
      if (a.correct) continue;
      for (const t of a.item.tags) wrongTags.set(t, (wrongTags.get(t) ?? 0) + 1);
    }
    const weakAreas = [...wrongTags.entries()]
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    return {
      level,
      confidence,
      finalEstimate: Math.round(final),
      sectionEstimates: { ...this.estimates },
      weakAreas,
      totalQuestions: this.answeredItems.length,
      correctCount: this.answeredItems.filter((a) => a.correct).length,
      estimatedAt: new Date().toISOString(),
    };
  }
}

export function confidenceLabel(c: Confidence): string {
  switch (c) {
    case 'high': return 'دقة التقدير: عالية — الأقسام الثلاثة متفقة';
    case 'medium': return 'دقة التقدير: متوسطة — يُنصح بإعادة الاختبار بعد شهر من الدراسة';
    case 'low': return 'دقة التقدير: منخفضة — أعد الاختبار بعد أسبوع بتركيز أعلى';
  }
}
