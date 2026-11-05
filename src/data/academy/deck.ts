/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — رزمة بطاقات المحطة الأولى (47 بطاقة)
   مشتقة حرفياً من دروس الوحدة: كل بطاقة مربوطة بدرسها
   ═══════════════════════════════════════════════════════════════ */
import type { Unit } from '../../types';

export interface DeckCard {
  id: string;
  lessonId: string;
  front: string; // السؤال بالعربية
  back: string; // الجواب بالإنجليزية (الوجه الأمامي عند القلب)
  example?: string; // جملة إنجليزية بصوت المتحدث
  note?: string; // ملاحظة عربية قصيرة
}

export const SRS_DECK: DeckCard[] = [
  /* ── الدرس 1: الأصوات ── */
  { id: 'c-l1-01', lessonId: 'l1-sounds', front: '«يفكر» بالإنجليزية؟', back: 'think', example: 'I think this is very good.', note: 'th مهموسة — طرف اللسان بين الأسنان' },
  { id: 'c-l1-02', lessonId: 'l1-sounds', front: '«هذا / هذه» بالمفرد؟', back: 'this', example: 'This is my book.', note: 'th مهتزة — مع اهتزاز الوترين' },
  { id: 'c-l1-03', lessonId: 'l1-sounds', front: '«ثلاثة» بالإنجليزية؟', back: 'three', example: 'I have three cats.', note: 'thr — الثلاثة الحاسمة: th + r' },
  { id: 'c-l1-04', lessonId: 'l1-sounds', front: '«أم» بالإنجليزية؟', back: 'mother', example: 'My mother lives in Cairo.', note: 'th مهتزة — تذكّر ذ العربية' },
  { id: 'c-l1-05', lessonId: 'l1-sounds', front: '«أب» بالإنجليزية؟', back: 'father', example: 'My father is a doctor.', note: 'th مهتزة مع اهتزاز' },
  { id: 'c-l1-06', lessonId: 'l1-sounds', front: '«جداً» بالإنجليزية؟', back: 'very', example: 'This is very good.', note: 'v — بأسنان على الشفة مع اهتزاز' },
  { id: 'c-l1-07', lessonId: 'l1-sounds', front: '«خمسة» بالإنجليزية؟', back: 'five', example: 'Five students are here.', note: 'f مهموسة — احتكاك بلا اهتزاز' },
  { id: 'c-l1-08', lessonId: 'l1-sounds', front: '«خروف» بالإنجليزية؟', back: 'sheep', example: 'The sheep is white.', note: 'sheep (خاروف) ≠ ship (سفينة)' },

  /* ── الدرس 2: أنا ── */
  { id: 'c-l2-01', lessonId: 'l2-im', front: '«اسمي …» بالإنجليزية؟', back: 'My name is …', example: 'My name is Omar.', note: 'صيغة رسمية ولبقة للتعريف' },
  { id: 'c-l2-02', lessonId: 'l2-im', front: 'فعل الكينونة مع «أنا»؟', back: 'am', example: 'I am a student.', note: 'am — مع أنا فقط، دائماً' },
  { id: 'c-l2-03', lessonId: 'l2-im', front: 'اختصار «I am»؟', back: "I'm", example: "I'm from Egypt.", note: 'تُنطق بكلمة واحدة في الكلام الطبيعي' },
  { id: 'c-l2-04', lessonId: 'l2-im', front: '«تشرفنا» بالإنجليزية؟', back: 'Nice to meet you.', example: 'Nice to meet you too.', note: 'الرد المثالي: Nice to meet you too.' },
  { id: 'c-l2-05', lessonId: 'l2-im', front: '«أنا ٢٤ سنة» بالإنجليزية؟', back: "I'm 24 years old.", example: "I'm 27 years old.", note: "I'm … years old — الصيغة المعتمدة" },
  { id: 'c-l2-06', lessonId: 'l2-im', front: '«أنا من مصر» بالإنجليزية؟', back: "I'm from Egypt.", example: "I'm from Cairo.", note: 'from = من — لا تستخدم in مع البلدان في التعريف' },
  { id: 'c-l2-07', lessonId: 'l2-im', front: '«أنا طالب» بأداة النكرة؟', back: "I'm a student.", example: "I'm a student at Talaqa.", note: 'a student — أداة النكرة قبل المهنة' },
  { id: 'c-l2-08', lessonId: 'l2-im', front: '«أنا طالبة في جامعة» بالإنجليزية؟', back: "I'm a university student.", example: "I'm a university student in Cairo.", note: 'a university — تبدأ بصوت «يو» الساكن' },

  /* ── الدرس 3: الأرقام ── */
  { id: 'c-l3-01', lessonId: 'l3-numbers', front: 'الرقم 11؟', back: 'eleven', note: 'لا نمط لها — احفظها كما تسمعها' },
  { id: 'c-l3-02', lessonId: 'l3-numbers', front: 'الرقم 12؟', back: 'twelve', note: 'twelve ≠ twenty (12 ≠ 20)' },
  { id: 'c-l3-03', lessonId: 'l3-numbers', front: 'الرقم 13؟', back: 'thirteen', note: 'thir + teen — احذر thirtY = 30' },
  { id: 'c-l3-04', lessonId: 'l3-numbers', front: 'الرقم 15؟', back: 'fifteen', note: 'fif + teen — احذر fifTY = 50' },
  { id: 'c-l3-05', lessonId: 'l3-numbers', front: 'الرقم 17؟', back: 'seventeen', note: 'seven + teen' },
  { id: 'c-l3-06', lessonId: 'l3-numbers', front: 'الرقم 20؟', back: 'twenty', note: 'twenty — t-w-e-n-t-y' },
  { id: 'c-l3-07', lessonId: 'l3-numbers', front: 'الرقم 30؟', back: 'thirty', note: 'thirty = 30 — بعكس thirteen = 13' },
  { id: 'c-l3-08', lessonId: 'l3-numbers', front: 'الرقم 50؟', back: 'fifty', note: 'fifty ≠ fifteen — الفرق قلب النهاية' },

  /* ── الدرس 4: التحية ── */
  { id: 'c-l4-01', lessonId: 'l4-greetings', front: '«صباح الخير» بالإنجليزية؟', back: 'Good morning', example: 'Good morning, class.', note: 'من الفجر حتى الظهر' },
  { id: 'c-l4-02', lessonId: 'l4-greetings', front: '«طاب يومك» (ظهراً)؟', back: 'Good afternoon', example: 'Good afternoon, sir.', note: 'من الظهر حتى الغروب' },
  { id: 'c-l4-03', lessonId: 'l4-greetings', front: '«مساء الخير» — تحية المساء؟', back: 'Good evening', example: 'Good evening, everyone.', note: 'تحية المساء فقط — ليست وداعاً' },
  { id: 'c-l4-04', lessonId: 'l4-greetings', front: '«وداعاً» بالإنجليزية؟', back: 'Goodbye', example: 'Goodbye. See you tomorrow.', note: 'Bye هو الأكثر حميمية' },
  { id: 'c-l4-05', lessonId: 'l4-greetings', front: '«أراك لاحقاً» بالإنجليزية؟', back: 'See you later', example: 'See you later, friend.', note: 'الأكثر ودية مع المقربين' },
  { id: 'c-l4-06', lessonId: 'l4-greetings', front: '«كيف حالك؟» — وما الرد؟', back: "How are you? — I'm fine, thanks.", example: "How are you? I'm fine, thanks.", note: 'الرد المثالي، وأضف And you?' },
  { id: 'c-l4-07', lessonId: 'l4-greetings', front: '«تصبح على خير» — ومتى تقال؟', back: 'Good night', example: 'Good night. See you tomorrow.', note: 'تقال عند الانصراف ليلاً فقط — ليست تحية' },
  { id: 'c-l4-08', lessonId: 'l4-greetings', front: '«أنا بخير شكراً» بالإنجليزية؟', back: "I'm fine, thanks.", example: "I'm fine, thanks. And you?", note: 'الرد القياسي على How are you?' },

  /* ── الدرس 5: المهنة ── */
  { id: 'c-l5-01', lessonId: 'l5-job', front: '«ما مهنتك؟» بالإنجليزية؟', back: 'What do you do?', example: 'What do you do for a living?', note: 'السؤال الذهبي للقائك الأول' },
  { id: 'c-l5-02', lessonId: 'l5-job', front: '«أنا طبيب» بالإنجليزية؟', back: "I'm a doctor.", example: "I'm a doctor at a hospital.", note: 'doctor — صوت ساكن ⇒ a' },
  { id: 'c-l5-03', lessonId: 'l5-job', front: '«أنا مهندس» بالإنجليزية؟', back: "I'm an engineer.", example: "I'm an engineer at a startup.", note: 'engineer — صوت علة ⇒ an' },
  { id: 'c-l5-04', lessonId: 'l5-job', front: '«أنا محاسب» بالإنجليزية؟', back: "I'm an accountant.", example: "I'm an accountant at a bank.", note: 'accountant — صوت علة ⇒ an' },
  { id: 'c-l5-05', lessonId: 'l5-job', front: '«أنا معلم» بالإنجليزية؟', back: "I'm a teacher.", example: "I'm a teacher at Talaqa.", note: 'teacher — صوت ساكن ⇒ a' },
  { id: 'c-l5-06', lessonId: 'l5-job', front: 'أي أداة تأتي قبل «engineer»؟', back: 'an', note: 'an قبل صوت العلة — العبرة بالصوت لا بالحرف' },
  { id: 'c-l5-07', lessonId: 'l5-job', front: 'أي أداة تأتي قبل «doctor»؟', back: 'a', note: 'a قبل الصوت الساكن' },
  { id: 'c-l5-08', lessonId: 'l5-job', front: 'القاعدة: متى نقول an ومتى a؟', back: 'an قبل صوت علة، a قبل ساكن', note: 'العبرة بالنطق لا بالحرف الأول المكتوب' },

  /* ── الدرس 6: حوار البوابة ── */
  { id: 'c-l6-01', lessonId: 'l6-dialogue', front: '«أهلاً بك في أكاديمية طَلَاقَة» بالإنجليزية؟', back: 'Welcome to Talaqa Academy.', example: 'Welcome to Talaqa Academy.', note: 'تحية الاستقبال — كما ستسمعها دائماً' },
  { id: 'c-l6-02', lessonId: 'l6-dialogue', front: 'عمر يرد على سؤال مهنته بالأكاديمية بـ؟', back: "I'm an engineer.", example: "I'm an engineer. I work at a software company.", note: 'بصوت علة ⇒ an engineer' },
  { id: 'c-l6-03', lessonId: 'l6-dialogue', front: 'متى يبدأ اختبار عمر؟', back: 'Tomorrow at ten.', example: 'Your placement test starts tomorrow at ten.', note: 'جملة تحمل معلومة كاملة — احفظها كما هي' },
  { id: 'c-l6-04', lessonId: 'l6-dialogue', front: 'رد عمر على التعارف؟', back: "My name is Omar. I'm from Egypt.", example: "My name is Omar. I'm from Egypt.", note: 'التحية + الاسم + البلد — سلاحك الأول' },
  { id: 'c-l6-05', lessonId: 'l6-dialogue', front: '«شركة برمجيات» بالإنجليزية؟', back: 'a software company', example: "I work at a software company.", note: 'software — لا تجمع «softwares»' },
  { id: 'c-l6-06', lessonId: 'l6-dialogue', front: 'كم عمر عمر في الحوار؟', back: '27', example: "I'm 27 years old.", note: 'I\'m 27 years old — لاحظ صيغة العمر' },
  { id: 'c-l6-07', lessonId: 'l6-dialogue', front: 'ماذا تقول قبل مغادرة الأكاديمية صباحاً؟', back: 'Goodbye / See you tomorrow', example: 'See you tomorrow at ten.', note: 'الودّع المناسب لكل سياق' },
  { id: 'c-l6-08', lessonId: 'l6-dialogue', front: 'رد مكتب القبول لما يسألك: What do you do?', back: "I'm a student.", example: "I'm a student. I study at Talaqa.", note: 'أثناء رحلتك — أنت طالب الآن' },
];

/** بطاقات درس معين — للإشعار «وُلدت بطاقات جديدة» */
export function cardsForLesson(lessonId: string): DeckCard[] {
  return SRS_DECK.filter((c) => c.lessonId === lessonId);
}

/** نزاهة الرزمة: تطابق كل lessonId مع وحدة حقيقية */
export function deckIntegrityCheck(unit: Unit): { ok: boolean; problems: string[] } {
  const problems: string[] = [];
  const ids = new Set<string>();
  const lessonIds = new Set(unit.lessons.map((l) => l.id));
  for (const card of SRS_DECK) {
    if (ids.has(card.id)) problems.push(`معرف مكرر: ${card.id}`);
    ids.add(card.id);
    if (!lessonIds.has(card.lessonId)) problems.push(`درس غير موجود: ${card.lessonId} للبطاقة ${card.id}`);
    if (!card.front.trim() || !card.back.trim()) problems.push(`بطاقة فارغة: ${card.id}`);
  }
  return { ok: problems.length === 0, problems };
}

/** البطاقات «المولودة» باكتمال درسها ولها الآن حاجة للمراجعة */
export function countDueCards(
  states: Record<string, { due: string; reps: number }>,
  progress: Record<string, unknown>,
  now: number = Date.now()
): number {
  let n = 0;
  for (const card of SRS_DECK) {
    if (!progress[card.lessonId]) continue; // لا تولد إلا باكتمال درسها
    const s = states[card.id];
    if (!s || Date.parse(s.due) <= now) n += 1;
  }
  return n;
}
