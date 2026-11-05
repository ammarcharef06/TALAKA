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

  /* ── الدرس 7: don't / doesn't ── */
  { id: 'c-l7-01', lessonId: 'l7-dont', front: 'انفي: I like fish.', back: "I don't like fish.", example: "I don't like fish.", note: "don't مع I/you/we/they" },
  { id: 'c-l7-02', lessonId: 'l7-dont', front: 'انفي: She works here.', back: "She doesn't work here.", example: "She doesn't work on Fridays.", note: "doesn't مع he/she/it — والفعل يعود للمجرد" },
  { id: 'c-l7-03', lessonId: 'l7-dont', front: 'انفي: He speaks French.', back: "He doesn't speak French.", example: "He doesn't speak French." },
  { id: 'c-l7-04', lessonId: 'l7-dont', front: 'انفي: They live in Cairo.', back: "They don't live in Cairo.", example: "They don't live here." },
  { id: 'c-l7-05', lessonId: 'l7-dont', front: 'مع أي فاعل يأتي doesn\'t؟', back: 'he / she / it', note: 'والـ s تختفي مع doesn\'t — She doesn\'t work' },
  { id: 'c-l7-06', lessonId: 'l7-dont', front: '«لا أحب القهوة» بالإنجليزية؟', back: "I don't like coffee.", example: "I don't like coffee." },
  { id: 'c-l7-07', lessonId: 'l7-dont', front: '«هي لا تعمل يوم الجمعة» بالإنجليزية؟', back: "She doesn't work on Fridays.", example: "She doesn't work on Fridays." },
  { id: 'c-l7-08', lessonId: 'l7-dont', front: 'الفخ: «She don\'t» أم «She doesn\'t»؟', back: "She doesn't", note: 'doesn\'t يحبس الـ s — دائماً في الغائب المفرد' },

  /* ── الدرس 8: Do / Does ── */
  { id: 'c-l8-01', lessonId: 'l8-dodoes', front: '«هل تحب الشاي؟» بالإنجليزية؟', back: 'Do you like tea?', example: 'Do you like tea?' },
  { id: 'c-l8-02', lessonId: 'l8-dodoes', front: 'الرد الصحيح على Do you like Cairo؟', back: 'Yes, I do.', example: 'Do you like Cairo? Yes, I do.', note: 'الإنجليزية ترد بالمساعد — لا تعيد الفعل' },
  { id: 'c-l8-03', lessonId: 'l8-dodoes', front: '«هل هو يعمل هنا؟» (سؤال)', back: 'Does he work here?', example: 'Does he work here?', note: 'Does مع he/she/it — والفعل مجرد' },
  { id: 'c-l8-04', lessonId: 'l8-dodoes', front: '«أين تعيش؟» بالإنجليزية؟', back: 'Where do you live?', example: 'Where do you live?' },
  { id: 'c-l8-05', lessonId: 'l8-dodoes', front: 'مع أي فاعل يبدأ السؤال بـ Does؟', back: 'he / she / it' },
  { id: 'c-l8-06', lessonId: 'l8-dodoes', front: 'الرد السلبي على سؤالك بـ Do؟', back: "No, I don't.", example: 'No, I don\'t like it.' },

  /* ── الدرس 9: اكتمال الكينونة ── */
  { id: 'c-l9-01', lessonId: 'l9-are', front: '«نحن طلاب» بالإنجليزية؟', back: 'We are students.', example: 'We are students at Talaqa.' },
  { id: 'c-l9-02', lessonId: 'l9-are', front: '«هم من القاهرة» بالإنجليزية؟', back: 'They are from Cairo.', example: 'They are from Cairo.' },
  { id: 'c-l9-03', lessonId: 'l9-are', front: 'انفي: They are here.', back: "They aren't here.", example: "They aren't here yet." },
  { id: 'c-l9-04', lessonId: 'l9-are', front: 'اسأل: «هل أنت جاهز؟»', back: 'Are you ready?', example: 'Are you ready to start?' },
  { id: 'c-l9-05', lessonId: 'l9-are', front: '«هي ليست هنا» بالإنجليزية؟', back: "She isn't here.", example: "She isn't at home today." },
  { id: 'c-l9-06', lessonId: 'l9-are', front: 'اختصار «you are»؟', back: "You're", example: "You're very kind.", note: "you're (أنت) ≠ your (ملكك)" },

  /* ── الدرس 10: العادات ── */
  { id: 'c-l10-01', lessonId: 'l10-habits', front: '«دائماً» بالإنجليزية؟', back: 'always', example: 'She always studies after dinner.' },
  { id: 'c-l10-02', lessonId: 'l10-habits', front: '«عادةً» بالإنجليزية؟', back: 'usually', example: 'We usually walk to work.' },
  { id: 'c-l10-03', lessonId: 'l10-habits', front: '«أحياناً» / «نادراً» / «أبداً»؟', back: 'sometimes / rarely / never', note: 'never يكفي للنفي — لا تكتب don\'t never' },
  { id: 'c-l10-04', lessonId: 'l10-habits', front: '«هي تذاكر دائماً بعد العشاء» بالإنجليزية؟', back: 'She always studies after dinner.', example: 'She always studies after dinner.' },
  { id: 'c-l10-05', lessonId: 'l10-habits', front: 'التصريف مع he/she/it في المضارع البسيط؟', back: 's / es', note: 'works / goes / watches — ومع doesn\'t يعود للمجرد' },
  { id: 'c-l10-06', lessonId: 'l10-habits', front: '«أنا لا أشرب القهوة أبداً» بالإنجليزية؟', back: 'I never drink coffee.', example: 'I never drink coffee at night.' },

  /* ── الدرس 11: الملكية و This/These ── */
  { id: 'c-l11-01', lessonId: 'l11-mine', front: 'ملكية we؟', back: 'our', example: 'This is our house.' },
  { id: 'c-l11-02', lessonId: 'l11-mine', front: 'ملكية she (الغائب المؤنث)؟', back: 'her', example: "It's her bag." },
  { id: 'c-l11-03', lessonId: 'l11-mine', front: '«هذا هاتفي» بالإنجليزية؟', back: 'This is my phone.', example: 'This is my phone, not yours.' },
  { id: 'c-l11-04', lessonId: 'l11-mine', front: '«هذه كتبهم» بالإنجليزية؟', back: 'These are their books.', example: 'These are their books.', note: 'جمع ⇒ these are' },
  { id: 'c-l11-05', lessonId: 'l11-mine', front: '«هذه ليست حقيبتها» بالإنجليزية؟', back: "This isn't her bag.", example: "This isn't her bag." },
  { id: 'c-l11-06', lessonId: 'l11-mine', front: 'الفرق: its مقابل it\'s؟', back: "its = ملكية الشيء، it's = اختصار it is", note: 'العلامة الفارقة هي الفاصلة — it\'s = it is' },

  /* ── الدرس 12: حوار المقهى ── */
  { id: 'c-l12-01', lessonId: 'l12-cafe', front: 'اطلب قهوة بأدب بالإنجليزية؟', back: 'A coffee, please.', example: 'Hi! A coffee, please.' },
  { id: 'c-l12-02', lessonId: 'l12-cafe', front: '«أي شيء آخر؟» بالإنجليزية؟', back: 'Anything else?', example: 'Anything else?' },
  { id: 'c-l12-03', lessonId: 'l12-cafe', front: '«على الرحب والسعة» بالإنجليزية؟', back: "You're welcome.", example: "You're welcome. Have a nice day." },
  { id: 'c-l12-04', lessonId: 'l12-cafe', front: '«لا مشكلة» بالإنجليزية؟', back: 'No problem', example: 'No problem. Anything else?' },
  { id: 'c-l12-05', lessonId: 'l12-cafe', front: '«طاب يومك» عند المغادرة؟', back: 'Have a nice day', example: 'Have a nice day!' },
  { id: 'c-l12-06', lessonId: 'l12-cafe', front: 'كيف تسأل عن السعر؟', back: 'How much is it?', example: 'How much is it, please?' },
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
export function deckIntegrityCheck(units: Unit[]): { ok: boolean; problems: string[] } {
  const problems: string[] = [];
  const ids = new Set<string>();
  const lessonIds = new Set(units.flatMap((u) => u.lessons.map((l) => l.id)));
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
