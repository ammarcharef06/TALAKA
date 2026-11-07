/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — رزمة بطاقات المنهاج (263 بطاقة)
   مشتقة حرفياً من دروس المحطات السبع: كل بطاقة مربوطة بدرسها
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

  /* ── الدرس 13: الماضي المنتظم ── */
  { id: 'c-l13-01', lessonId: 'l13-past-ed', front: 'ما ماضي الفعل work؟', back: 'worked', example: 'I worked late yesterday.', note: 'فعل منتظم: + ed' },
  { id: 'c-l13-02', lessonId: 'l13-past-ed', front: 'ما ماضي الفعل study؟', back: 'studied', example: 'She studied English for two hours.', note: 'ساكن + y ← y تصبح i' },
  { id: 'c-l13-03', lessonId: 'l13-past-ed', front: 'ما ماضي الفعل stop؟', back: 'stopped', example: 'They stopped at the station.', note: 'مقطع قصير مشدد ← نضاعف الحرف' },
  { id: 'c-l13-04', lessonId: 'l13-past-ed', front: 'أي نهاية -ed تُنطق /ɪd/؟', back: 'بعد t أو d فقط', example: 'visited / wanted / needed', note: 'أما worked فـ/t/ وlived فـ/d/' },
  { id: 'c-l13-05', lessonId: 'l13-past-ed', front: 'صحح: I did visited my aunt.', back: 'I visited my aunt.', example: 'I visited my aunt yesterday.', note: 'الماضي المنتظم لا يحتاج did' },
  { id: 'c-l13-06', lessonId: 'l13-past-ed', front: 'أكمل: They ___ TV last night.', back: 'watched', example: 'They watched TV last night.', note: 'last night ← ماضٍ بسيط' },

  /* ── الدرس 14: الأفعال الشاذة ── */
  { id: 'c-l14-01', lessonId: 'l14-irregular', front: 'ما ماضي الفعل go؟', back: 'went', example: 'I went to the market yesterday.', note: 'go ← went ← gone' },
  { id: 'c-l14-02', lessonId: 'l14-irregular', front: 'ما ماضي الفعل see؟', back: 'saw', example: 'She saw her friend at the café.', note: 'see ← saw ← seen' },
  { id: 'c-l14-03', lessonId: 'l14-irregular', front: 'أكمل: I didn\'t ___ to school.', back: 'go', example: "I didn't go to school yesterday.", note: 'بعد didn\'t: الفعل المجرد' },
  { id: 'c-l14-04', lessonId: 'l14-irregular', front: 'ما ماضي الفعل have؟', back: 'had', example: 'He had a busy day.', note: 'have ← had' },
  { id: 'c-l14-05', lessonId: 'l14-irregular', front: 'ما ماضي الفعل make؟', back: 'made', example: 'They made a big cake.', note: 'make ← made' },
  { id: 'c-l14-06', lessonId: 'l14-irregular', front: 'صحح: We didn\'t saw the film.', back: "We didn't see the film.", example: "We didn't see the film.", note: 'didn\'t + see — لا saw' },

  /* ── الدرس 15: أسئلة الماضي ── */
  { id: 'c-l15-01', lessonId: 'l15-did', front: 'اسأل: «هل زرت المتحف؟»', back: 'Did you visit the museum?', example: 'Did you visit the museum yesterday?', note: 'Did + فاعل + فعل مجرد' },
  { id: 'c-l15-02', lessonId: 'l15-did', front: 'اسأل: «هل اتصلت بك؟»', back: 'Did she call you?', example: 'Did she call you last night?', note: 'لا Did she called' },
  { id: 'c-l15-03', lessonId: 'l15-did', front: 'الرد المختصر على: Did they arrive?', back: 'Yes, they did.', example: 'Yes, they did. They arrived at nine.', note: 'الرد بالمساعد did' },
  { id: 'c-l15-04', lessonId: 'l15-did', front: 'اسأل: «أين ذهبت؟»', back: 'Where did you go?', example: 'Where did you go last weekend?', note: 'wh + did + فاعل + فعل مجرد' },
  { id: 'c-l15-05', lessonId: 'l15-did', front: 'صحح: Did you saw him?', back: 'Did you see him?', example: 'Did you see him at the party?', note: 'بعد Did: see لا saw' },
  { id: 'c-l15-06', lessonId: 'l15-did', front: 'أكمل: When ___ you start?', back: 'did', example: 'When did you start learning English?', note: 'السؤال في الماضي يبدأ بـ did' },

  /* ── الدرس 16: المستقبل ── */
  { id: 'c-l16-01', lessonId: 'l16-future', front: 'عبّر عن خطة: «سأزور جدتي غداً»', back: "I'm going to visit my grandmother tomorrow.", example: "I'm going to visit my grandmother tomorrow.", note: 'خطة مسبقة ← going to' },
  { id: 'c-l16-02', lessonId: 'l16-future', front: 'عبّر عن وعد: «سأساعدك»', back: "I'll help you.", example: "Don't worry — I'll help you.", note: 'وعد لحظي ← will' },
  { id: 'c-l16-03', lessonId: 'l16-future', front: 'صحح: I will going to Cairo.', back: 'I am going to Cairo. / I will go to Cairo.', example: "I'm going to Cairo next week.", note: 'لا نجمع will مع going' },
  { id: 'c-l16-04', lessonId: 'l16-future', front: 'انظر للسحب — ماذا تقول؟', back: "It's going to rain.", example: "Look at those clouds! It's going to rain.", note: 'دليل مرئي ← going to' },
  { id: 'c-l16-05', lessonId: 'l16-future', front: 'انفِ: She will come tomorrow.', back: "She won't come tomorrow.", example: "She won't come tomorrow.", note: "won't = will not" },
  { id: 'c-l16-06', lessonId: 'l16-future', front: 'اسأل: «هل ستسافر الأسبوع القادم؟»', back: 'Are you going to travel next week?', example: 'Are you going to travel next week?', note: 'going to تحتاج are' },

  /* ── الدرس 17: المقارنة والتفضيل ── */
  { id: 'c-l17-01', lessonId: 'l17-compare', front: 'ما مقارنة big؟', back: 'bigger', example: 'Cairo is bigger than Alexandria.', note: 'نضاعف g ثم نضيف er' },
  { id: 'c-l17-02', lessonId: 'l17-compare', front: 'أكمل: Cairo is ___ than Alexandria.', back: 'bigger', example: 'Cairo is bigger than Alexandria.', note: 'مقارنة بين مدينتين' },
  { id: 'c-l17-03', lessonId: 'l17-compare', front: 'ما تفضيل good؟', back: 'the best', example: 'She is the best teacher in the school.', note: 'good ← better ← the best' },
  { id: 'c-l17-04', lessonId: 'l17-compare', front: 'صحح: This is more better.', back: 'This is better.', example: 'This phone is better than mine.', note: 'لا more مع better' },
  { id: 'c-l17-05', lessonId: 'l17-compare', front: 'ما تفضيل beautiful؟', back: 'the most beautiful', example: 'This is the most beautiful place I have seen.', note: 'صفة طويلة ← the most' },
  { id: 'c-l17-06', lessonId: 'l17-compare', front: 'ما مقارنة bad؟', back: 'worse', example: 'My old phone was worse than this one.', note: 'bad ← worse ← the worst' },

  /* ── الدرس 18: حوار الرحلة ── */
  { id: 'c-l18-01', lessonId: 'l18-trip', front: 'إلى أين سافر عمر؟', back: 'Luxor', example: 'How was your trip to Luxor?', note: 'من نص الحوار' },
  { id: 'c-l18-02', lessonId: 'l18-trip', front: 'كيف كانت رحلة عمر؟', back: 'It was amazing!', example: 'It was amazing! We went by train.', note: 'was + went — ماضٍ بسيط' },
  { id: 'c-l18-03', lessonId: 'l18-trip', front: 'كيف سافر عمر إلى الأقصر؟', back: 'by train', example: 'We went by train.', note: 'by + وسيلة النقل' },
  { id: 'c-l18-04', lessonId: 'l18-trip', front: 'ماذا زار عمر هناك؟', back: 'Karnak Temple and the Valley of the Kings', example: 'We saw Karnak Temple and the Valley of the Kings.', note: 'saw = ماضي see' },
  { id: 'c-l18-05', lessonId: 'l18-trip', front: 'ماذا سيفعل عمر السنة القادمة؟', back: "He's going to visit Aswan.", example: "Next year I'm going to visit Aswan.", note: 'خطة مستقبلية ← going to' },
  { id: 'c-l18-06', lessonId: 'l18-trip', front: 'أي مدينة أهدأ: الأقصر أم أسوان؟', back: 'Aswan', example: 'Aswan is quieter than Luxor.', note: 'quiet ← quieter' },

  /* ── الدرس 19: المضارع التام ── */
  { id: 'c-l19-01', lessonId: 'l19-perfect', front: 'تركيب المضارع التام؟', back: 'have / has + التصريف الثالث', example: 'I have visited Luxor twice.', note: 'he/she/it تأخذ has' },
  { id: 'c-l19-02', lessonId: 'l19-perfect', front: 'التصريف الثالث لـ go؟', back: 'gone', example: 'He has gone home.', note: 'لا تقل has went' },
  { id: 'c-l19-03', lessonId: 'l19-perfect', front: '«هل زرت أسوان من قبل؟» بالإنجليزية؟', back: 'Have you ever been to Aswan?', example: 'Have you ever been to Aswan?', note: 'have been to = زرت' },
  { id: 'c-l19-04', lessonId: 'l19-perfect', front: 'أين نضع already وyet؟', back: 'already في الإثبات، yet في النفي والسؤال', example: "We have already eaten. They haven't left yet.", note: 'كلاهما مع المضارع التام' },
  { id: 'c-l19-05', lessonId: 'l19-perfect', front: 'صحح: I have finished yesterday.', back: 'I finished yesterday.', example: 'I finished yesterday.', note: 'زمن محدد ⇒ ماضٍ بسيط' },
  { id: 'c-l19-06', lessonId: 'l19-perfect', front: '«فقدت مفاتيحي» (والنتيجة الآن)؟', back: 'I have lost my keys.', example: "I have lost my keys, so I can't open the door.", note: 'نتيجة مستمرة الآن' },

  /* ── الدرس 20: used to ── */
  { id: 'c-l20-01', lessonId: 'l20-used-to', front: 'تركيب used to؟', back: 'used to + الفعل المجرد', example: 'I used to live in Cairo.', note: 'عادة أو حالة ماضية انتهت' },
  { id: 'c-l20-02', lessonId: 'l20-used-to', front: 'انفِ: She used to drink coffee.', back: "She didn't use to drink coffee.", example: "She didn't use to drink coffee.", note: 'didn\'t use to — بلا d' },
  { id: 'c-l20-03', lessonId: 'l20-used-to', front: 'اسأل: «هل كنت تلعب التنس؟»', back: 'Did you use to play tennis?', example: 'Did you use to play tennis?', note: 'بعد Did: use to' },
  { id: 'c-l20-04', lessonId: 'l20-used-to', front: 'الفرق: used to مقابل be used to؟', back: 'used to + مجرد = كنت أفعل، be used to + -ing = معتاد على', example: 'I used to walk. / I am used to walking.', note: 'ماضٍ انتهى مقابل حاضر مستمر' },
  { id: 'c-l20-05', lessonId: 'l20-used-to', front: '«كان يوجد متجر صغير هنا»؟', back: 'There used to be a small shop here.', example: 'There used to be a small shop here.', note: 'used to be = كان يوجد' },
  { id: 'c-l20-06', lessonId: 'l20-used-to', front: 'صحح: I used to playing tennis.', back: 'I used to play tennis.', example: 'I used to play tennis every Friday.', note: 'بعد used to فعل مجرد' },

  /* ── الدرس 21: الشرط ── */
  { id: 'c-l21-01', lessonId: 'l21-conditionals', front: 'تركيب الشرط الأول؟', back: 'If + مضارع بسيط, will + فعل مجرد', example: 'If it rains, we will stay home.', note: 'احتمال واقعي' },
  { id: 'c-l21-02', lessonId: 'l21-conditionals', front: 'تركيب الشرط الثاني؟', back: 'If + ماضٍ بسيط, would + فعل مجرد', example: 'If I were rich, I would travel.', note: 'خيال أو غير محتمل الآن' },
  { id: 'c-l21-03', lessonId: 'l21-conditionals', front: 'صحح: If I will see him, I will tell him.', back: 'If I see him, I will tell him.', example: 'If I see him, I will tell him.', note: 'لا will بعد if' },
  { id: 'c-l21-04', lessonId: 'l21-conditionals', front: '«لو كنت مكانك لاعتذرت»؟', back: 'If I were you, I would apologize.', example: 'If I were you, I would apologize.', note: 'were مع كل الضمائر في النصيحة' },
  { id: 'c-l21-05', lessonId: 'l21-conditionals', front: 'أكمل: She would come if you ___ her.', back: 'asked', example: 'She would come if you asked her.', note: 'would + مجرد، if + ماضٍ' },
  { id: 'c-l21-06', lessonId: 'l21-conditionals', front: '«إذا ذاكرت ستنجح»؟', back: 'If you study, you will pass.', example: 'If you study hard, you will pass.', note: 'شرط أول واقعي' },

  /* ── الدرس 22: المبني للمجهول ── */
  { id: 'c-l22-01', lessonId: 'l22-passive', front: 'تركيب المبني للمجهول؟', back: 'be + التصريف الثالث', example: 'English is spoken here.', note: 'be يتصرف، والفعل يبقى تصريفاً ثالثاً' },
  { id: 'c-l22-02', lessonId: 'l22-passive', front: '«تُبنى الأهرامات…» بالمجهول؟', back: 'The pyramids were built long ago.', example: 'The pyramids were built long ago.', note: 'ماضٍ مجهول: were + built' },
  { id: 'c-l22-03', lessonId: 'l22-passive', front: 'صحح: The letter was wrote by Sara.', back: 'The letter was written by Sara.', example: 'The letter was written by Sara.', note: 'written لا wrote' },
  { id: 'c-l22-04', lessonId: 'l22-passive', front: 'حوّل: They clean the office every day.', back: 'The office is cleaned every day.', example: 'The office is cleaned every day.', note: 'مضارع مجهول: is + cleaned' },
  { id: 'c-l22-05', lessonId: 'l22-passive', front: '«ستُعلن النتائج غداً»؟', back: 'The results will be announced tomorrow.', example: 'The results will be announced tomorrow.', note: 'will be + التصريف الثالث' },
  { id: 'c-l22-06', lessonId: 'l22-passive', front: 'متى نستخدم by؟', back: 'عندما يكون الفاعل مهماً: written by Naguib Mahfouz', example: 'The novel was written by Naguib Mahfouz.', note: 'وإن لم يكن مهماً نحذفه' },

  /* ── الدرس 23: جمل الوصل ── */
  { id: 'c-l23-01', lessonId: 'l23-relative', front: 'الواصلة للأشخاص؟', back: 'who', example: 'The woman who lives next door is a teacher.' },
  { id: 'c-l23-02', lessonId: 'l23-relative', front: 'الواصلة للأشياء؟', back: 'which / that', example: 'This is the book which I told you about.' },
  { id: 'c-l23-03', lessonId: 'l23-relative', front: 'الواصلة للأماكن؟', back: 'where', example: 'The café where we met is closed.' },
  { id: 'c-l23-04', lessonId: 'l23-relative', front: 'الواصلة للملكية؟', back: 'whose', example: 'The girl whose bag was stolen called the police.' },
  { id: 'c-l23-05', lessonId: 'l23-relative', front: 'صحح: The man which helped me was kind.', back: 'The man who helped me was kind.', example: 'The man who helped me was kind.', note: 'الأشخاص ⇒ who' },
  { id: 'c-l23-06', lessonId: 'l23-relative', front: 'صحح: The book which I bought it was expensive.', back: 'The book which I bought was expensive.', example: 'The book which I bought was expensive.', note: 'لا نكرر it بعد which' },

  /* ── الدرس 24: حوار المقابلة ── */
  { id: 'c-l24-01', lessonId: 'l24-interview', front: '«حدّثني عن نفسك» بالإنجليزية؟', back: 'Tell me about yourself.', example: 'Tell me about yourself.', note: 'افتتاحية المقابلة الكلاسيكية' },
  { id: 'c-l24-02', lessonId: 'l24-interview', front: '«عملت معلماً لثلاث سنوات»؟', back: 'I have worked as a teacher for three years.', example: 'I have worked as a teacher for three years.', note: 'مضارع تام + for' },
  { id: 'c-l24-03', lessonId: 'l24-interview', front: '«كنت أعمل في المبيعات»؟', back: 'I used to work in sales.', example: 'I used to work in sales, but I wanted to teach.', note: 'used to + مجرد' },
  { id: 'c-l24-04', lessonId: 'l24-interview', front: '«لماذا تريد هذه الوظيفة؟» وأجب بشرط', back: 'If I get this job, I will help students.', example: 'If I get this job, I will help students who need confidence.', note: 'شرط أول + who' },
  { id: 'c-l24-05', lessonId: 'l24-interview', front: '«ما نقاط قوتك؟» — بداية مناسبة؟', back: 'I am good at … / I am a person who …', example: 'I am a person who learns quickly.', note: 'استخدم who لوصف نفسك' },
  { id: 'c-l24-06', lessonId: 'l24-interview', front: '«قُبل طلبك» بالمجهول؟', back: 'Your application was accepted.', example: 'Your application was accepted. Welcome to Talaqa.', note: 'was + accepted' },

  /* ── الدرس 25: الشرط الثالث والندم ── */
  { id: 'c-l25-01', lessonId: 'l25-third-wish', front: 'تركيب الشرط الثالث؟', back: 'If + had + التصريف الثالث, would have + التصريف الثالث', example: 'If I had studied, I would have passed.', note: 'ماضٍ مستحيل التغيير' },
  { id: 'c-l25-02', lessonId: 'l25-third-wish', front: 'أكمل: If you had studied, you ___ the exam.', back: 'would have passed', example: 'If you had studied, you would have passed the exam.', note: 'النتيجة: would have + pp' },
  { id: 'c-l25-03', lessonId: 'l25-third-wish', front: 'صحح: If I would have known…', back: 'If I had known…', example: 'If I had known, I would have helped.', note: 'لا would بعد if' },
  { id: 'c-l25-04', lessonId: 'l25-third-wish', front: '«أتمنى لو كنت ذاكرت أكثر»؟', back: 'I wish I had studied more.', example: 'I wish I had studied more.', note: 'wish + had + pp = ندم' },
  { id: 'c-l25-05', lessonId: 'l25-third-wish', front: '«أتمنى لو لم أقل ذلك»؟', back: "I wish I hadn't said that.", example: "I wish I hadn't said that.", note: 'ندم على فعل حدث' },
  { id: 'c-l25-06', lessonId: 'l25-third-wish', front: 'أكمل: She would have come if you ___ her.', back: 'had invited', example: 'She would have come if you had invited her.', note: 'if + had + pp' },

  /* ── الدرس 26: الكلام غير المباشر ── */
  { id: 'c-l26-01', lessonId: 'l26-reported', front: 'انقل: "I am tired."', back: 'He said he was tired.', example: 'He said he was tired.', note: 'am ← was' },
  { id: 'c-l26-02', lessonId: 'l26-reported', front: 'انقل: "I will call you."', back: 'She said she would call me.', example: 'She said she would call me.', note: 'will ← would' },
  { id: 'c-l26-03', lessonId: 'l26-reported', front: 'say أم tell مع الشخص؟', back: 'tell + شخص: He told me… / say بلا شخص: He said…', example: 'He told me he was busy.', note: 'لا تقل He said me' },
  { id: 'c-l26-04', lessonId: 'l26-reported', front: 'انقل السؤال: "Where do you live?"', back: 'He asked where I lived.', example: 'He asked where I lived.', note: 'ترتيب جملة عادي بلا did' },
  { id: 'c-l26-05', lessonId: 'l26-reported', front: 'انقل: "We have finished."', back: 'They said they had finished.', example: 'They said they had finished the project.', note: 'present perfect ← past perfect' },
  { id: 'c-l26-06', lessonId: 'l26-reported', front: 'انقل: "Are you ready?"', back: 'She asked me if I was ready.', example: 'She asked me if I was ready.', note: 'asked if + جملة' },

  /* ── الدرس 27: المجهول المتقدم ── */
  { id: 'c-l27-01', lessonId: 'l27-passive-advanced', front: 'المضارع التام المجهول؟', back: 'has/have been + التصريف الثالث', example: 'The report has been finished.', note: 'has been finished' },
  { id: 'c-l27-02', lessonId: 'l27-passive-advanced', front: 'أكمل: This must ___ before Friday.', back: 'be done', example: 'This must be done before Friday.', note: 'must be + pp' },
  { id: 'c-l27-03', lessonId: 'l27-passive-advanced', front: 'المستقبل المجهول؟', back: 'will be + التصريف الثالث', example: 'The bridge will be opened next year.' },
  { id: 'c-l27-04', lessonId: 'l27-passive-advanced', front: 'صحح: The work has been did.', back: 'The work has been done.', example: 'The work has been done.', note: 'بعد been: done لا did' },
  { id: 'c-l27-05', lessonId: 'l27-passive-advanced', front: 'حوّل: They have solved the problem.', back: 'The problem has been solved.', example: 'The problem has been solved.', note: 'has been + solved' },
  { id: 'c-l27-06', lessonId: 'l27-passive-advanced', front: 'الماضي التام المجهول؟', back: 'had been + التصريف الثالث', example: 'The flight had been cancelled before we arrived.' },

  /* ── الدرس 28: المستقبل التام ── */
  { id: 'c-l28-01', lessonId: 'l28-future-perfect', front: 'تركيب المستقبل التام؟', back: 'will have + التصريف الثالث', example: 'By 2030, she will have worked here for ten years.', note: 'ينتهي قبل موعد مستقبلي' },
  { id: 'c-l28-02', lessonId: 'l28-future-perfect', front: 'تركيب المستقبل المستمر؟', back: 'will be + -ing', example: 'This time tomorrow, I will be flying to Paris.', note: 'يجري في لحظة مستقبلية' },
  { id: 'c-l28-03', lessonId: 'l28-future-perfect', front: 'أكمل: By the time you arrive, we ___ dinner.', back: 'will have finished', example: 'By the time you arrive, we will have finished dinner.', note: 'انتهاء قبل الوصول' },
  { id: 'c-l28-04', lessonId: 'l28-future-perfect', front: 'صحح: He will worked here by 2030.', back: 'He will have worked here by 2030.', example: 'He will have worked here by 2030.', note: 'will have + pp' },
  { id: 'c-l28-05', lessonId: 'l28-future-perfect', front: 'أكمل: Don\'t call at 8 — I ___ dinner.', back: 'will be having', example: "Don't call at 8 — I will be having dinner." },
  { id: 'c-l28-06', lessonId: 'l28-future-perfect', front: '«بحلول الشهر القادم سيكونون أكملوا المشروع»؟', back: 'By next month, they will have completed the project.', example: 'By next month, they will have completed the project.', note: 'by + موعد' },

  /* ── الدرس 29: الوصل غير المحدد ── */
  { id: 'c-l29-01', lessonId: 'l29-relative-nondefining', front: 'كيف نعرف الجملة غير المحددة؟', back: 'بين فاصلتين، ومعلومتها إضافية', example: 'My brother, who lives in Paris, is a lawyer.', note: 'يمكن حذفها دون تغيير المعنى الأساسي' },
  { id: 'c-l29-02', lessonId: 'l29-relative-nondefining', front: 'الواصلة للشخص في جملة غير محددة؟', back: 'who', example: 'My father, who works in Cairo, is a doctor.', note: 'لا that بين فاصلتين' },
  { id: 'c-l29-03', lessonId: 'l29-relative-nondefining', front: 'الواصلة للشيء في جملة غير محددة؟', back: 'which', example: 'The book, which was published in 2020, became a bestseller.' },
  { id: 'c-l29-04', lessonId: 'l29-relative-nondefining', front: 'الواصلة للملكية؟', back: 'whose', example: 'Mr. Ali, whose company is huge, is retiring.' },
  { id: 'c-l29-05', lessonId: 'l29-relative-nondefining', front: 'صحح: My father, that works in Cairo, is a doctor.', back: 'My father, who works in Cairo, is a doctor.', example: 'My father, who works in Cairo, is a doctor.', note: 'الجملة غير المحددة لا تأخذ that' },
  { id: 'c-l29-06', lessonId: 'l29-relative-nondefining', front: 'ما الفرق: My sister who lives in Cairo… / My sister, who lives in Cairo,…؟', back: 'الأولى تحدد أي أخت، والثانية معلومة إضافية', example: 'My sister, who lives in Cairo, is a doctor.', note: 'الفواصل تغيّر المعنى' },

  /* ── الدرس 30: حوار الندوة ── */
  { id: 'c-l30-01', lessonId: 'l30-seminar', front: 'عن أي مشروع تتحدث الندوة؟', back: 'the solar project', example: 'Today we will discuss the solar project.', note: 'مشروع الطاقة الشمسية' },
  { id: 'c-l30-02', lessonId: 'l30-seminar', front: '«لو بدأنا أبكر لجمعنا بيانات أكثر»؟', back: 'If we had started earlier, we would have collected more data.', example: 'If we had started earlier, we would have collected more data.', note: 'شرط ثالث' },
  { id: 'c-l30-03', lessonId: 'l30-seminar', front: '«تم تسليم التقرير الأول»؟', back: 'The first report has been submitted.', example: 'The first report has been submitted to the ministry.', note: 'مجهول تام' },
  { id: 'c-l30-04', lessonId: 'l30-seminar', front: '«بحلول يونيو سنكون أكملنا المرحلة الثانية»؟', back: 'By next June, we will have completed phase two.', example: 'By next June, we will have completed phase two.', note: 'مستقبل تام' },
  { id: 'c-l30-05', lessonId: 'l30-seminar', front: '«قالت الأستاذة إن النتائج ستُنشر في سبتمبر»؟', back: 'The professor said the results would be published in September.', example: 'The professor said the results would be published in September.', note: 'will ← would في الكلام غير المباشر' },
  { id: 'c-l30-06', lessonId: 'l30-seminar', front: '«النتائج، التي تبدو واعدة، ستُعرض في المؤتمر»؟', back: 'The findings, which are very promising, will be presented at the conference.', example: 'The findings, which are very promising, will be presented at the conference.', note: 'وصل غير محدد + مجهول مستقبلي' },

  /* ── الدرس 31: القلب ── */
  { id: 'c-l31-01', lessonId: 'l31-inversion', front: '«نادراً ما رأيت مثل هذا المنظر»؟', back: 'Never have I seen such a view.', example: 'Never have I seen such a view.', note: 'Never + have + I' },
  { id: 'c-l31-02', lessonId: 'l31-inversion', front: 'أكمل: Rarely ___ complain.', back: 'does she', example: 'Rarely does she complain.', note: 'قلب: does + she' },
  { id: 'c-l31-03', lessonId: 'l31-inversion', front: 'أكمل: Not only ___ the race…', back: 'did he win', example: 'Not only did he win, but he also broke the record.', note: 'Not only + did + he + win' },
  { id: 'c-l31-04', lessonId: 'l31-inversion', front: 'أكمل: So loudly ___ that the police arrived.', back: 'did he shout', example: 'So loudly did he shout that the police arrived.', note: 'So + ظرف + did + فاعل' },
  { id: 'c-l31-05', lessonId: 'l31-inversion', front: 'أكمل: Hardly ___ arrived when it started.', back: 'had I', example: 'Hardly had I arrived when it started to rain.', note: 'Hardly + had + I … when' },
  { id: 'c-l31-06', lessonId: 'l31-inversion', front: 'صحح: Never I have seen such a view.', back: 'Never have I seen such a view.', example: 'Never have I seen such a view.', note: 'المساعد قبل الفاعل' },

  /* ── الدرس 32: التركيز ── */
  { id: 'c-l32-01', lessonId: 'l32-cleft', front: '«توم هو الذي كسر النافذة»؟', back: 'It was Tom who broke the window.', example: 'It was Tom who broke the window.', note: 'it-cleft' },
  { id: 'c-l32-02', lessonId: 'l32-cleft', front: '«ما أحتاجه هو مزيد من الوقت»؟', back: 'What I need is more time.', example: 'What I need is more time.', note: 'wh-cleft' },
  { id: 'c-l32-03', lessonId: 'l32-cleft', front: 'أكمل: It was in Cairo ___ we met.', back: 'that', example: 'It was in Cairo that we met.', note: 'it-cleft للمكان' },
  { id: 'c-l32-04', lessonId: 'l32-cleft', front: '«كل ما أريده فرصة»؟', back: 'All I want is a chance.', example: 'All I want is a chance.', note: 'all-cleft' },
  { id: 'c-l32-05', lessonId: 'l32-cleft', front: 'صحح: It was Tom which broke the window.', back: 'It was Tom who broke the window.', example: 'It was Tom who broke the window.', note: 'للأشخاص who' },
  { id: 'c-l32-06', lessonId: 'l32-cleft', front: 'ما نوع: What she said was surprising؟', back: 'wh-cleft', example: 'What she said was surprising.', note: 'تركيز على القول' },

  /* ── الدرس 33: الصيغة الرسمية ── */
  { id: 'c-l33-01', lessonId: 'l33-subjunctive', front: '«اقترح الطبيب أن يستريح»؟', back: 'The doctor suggested that he rest.', example: 'The doctor suggested that he rest.', note: 'rest بلا s' },
  { id: 'c-l33-02', lessonId: 'l33-subjunctive', front: 'أكمل: It is essential that she ___ on time.', back: 'be', example: 'It is essential that she be on time.', note: 'subjunctive: be' },
  { id: 'c-l33-03', lessonId: 'l33-subjunctive', front: 'أكمل: They insisted that he ___ the truth.', back: 'tell', example: 'They insisted that he tell the truth.', note: 'tell بلا s' },
  { id: 'c-l33-04', lessonId: 'l33-subjunctive', front: 'صحح: She suggested him to rest.', back: 'She suggested that he rest.', example: 'She suggested that he rest.', note: 'suggest لا تأخذ to' },
  { id: 'c-l33-05', lessonId: 'l33-subjunctive', front: '«من الضروري أن يكون الجميع حاضرين»؟', back: 'It is important that everyone be present.', example: 'It is important that everyone be present.' },
  { id: 'c-l33-06', lessonId: 'l33-subjunctive', front: 'انفِ: The judge demanded that he leave.', back: 'The judge demanded that he not leave.', example: 'The judge demanded that he not leave the country.', note: 'not + فعل مجرد' },

  /* ── الدرس 34: شبه الجمل ── */
  { id: 'c-l34-01', lessonId: 'l34-participle', front: 'أكمل: ___ from the window, the scene was magnificent.', back: 'Seen', example: 'Seen from the window, the scene was magnificent.', note: 'المشهد يُرى ⇒ -ed' },
  { id: 'c-l34-02', lessonId: 'l34-participle', front: 'أكمل: ___ home, I saw an old friend.', back: 'Walking', example: 'Walking home, I saw an old friend.', note: 'أنا أمشي ⇒ -ing' },
  { id: 'c-l34-03', lessonId: 'l34-participle', front: 'أكمل: ___ the report, she went home.', back: 'Having finished', example: 'Having finished the report, she went home.' },
  { id: 'c-l34-04', lessonId: 'l34-participle', front: 'صحح: Walking home, the rain started.', back: 'Walking home, I got caught in the rain.', example: 'Walking home, I got caught in the rain.', note: 'فاعل واحد للجملتين' },
  { id: 'c-l34-05', lessonId: 'l34-participle', front: 'أكمل: The man ___ by the door is my uncle.', back: 'standing', example: 'The man standing by the door is my uncle.', note: 'اسم + -ing' },
  { id: 'c-l34-06', lessonId: 'l34-participle', front: 'أكمل: ___ by the news, he said nothing.', back: 'Surprised', example: 'Surprised by the news, he said nothing.', note: 'هو فُوجئ ⇒ -ed' },

  /* ── الدرس 35: الحذف والربط ── */
  { id: 'c-l35-01', lessonId: 'l35-ellipsis-linkers', front: 'أكمل: I don\'t like coffee and ___ does my brother.', back: 'neither', example: "I don't like coffee and neither does my brother.", note: 'neither + مساعد + فاعل' },
  { id: 'c-l35-02', lessonId: 'l35-ellipsis-linkers', front: 'أكمل: She can speak French, and ___ can I.', back: 'so', example: 'She can speak French, and so can I.', note: 'so + can + I' },
  { id: 'c-l35-03', lessonId: 'l35-ellipsis-linkers', front: '«نجح، وإن بصعوبة»؟', back: 'He passed, albeit with difficulty.', example: 'He passed, albeit with difficulty.', note: 'albeit = although' },
  { id: 'c-l35-04', lessonId: 'l35-ellipsis-linkers', front: '«الخطة مكلفة؛ ومع ذلك فهي ضرورية»؟', back: 'The plan is expensive; nevertheless, it is necessary.', example: 'The plan is expensive; nevertheless, it is necessary.', note: 'nevertheless = however' },
  { id: 'c-l35-05', lessonId: 'l35-ellipsis-linkers', front: 'أكمل: ___ the north is cold, the south is warm.', back: 'Whereas', example: 'Whereas the north is cold, the south is warm.', note: 'whereas للمقارنة المتضادة' },
  { id: 'c-l35-06', lessonId: 'l35-ellipsis-linkers', front: 'صحح: neither he does.', back: 'neither does he', example: 'I was tired, and neither did he want to go.', note: 'ترتيب السؤال بعد neither' },

  /* ── الدرس 36: ندوة الأرشيف ── */
  { id: 'c-l36-01', lessonId: 'l36-archive-seminar', front: '«نادراً ما رأينا اهتماماً كهذا»؟', back: 'Rarely have we seen such interest.', example: 'Rarely have we seen such public interest in the archive.', note: 'قلب بعد Rarely' },
  { id: 'c-l36-02', lessonId: 'l36-archive-seminar', front: '«ما يقلقني هو المراسلات المفقودة»؟', back: 'What concerns me is the missing correspondence.', example: 'What concerns me is the missing correspondence.', note: 'wh-cleft' },
  { id: 'c-l36-03', lessonId: 'l36-archive-seminar', front: '«الوزارة هي التي قيّدت الوصول»؟', back: 'It was the ministry that restricted access.', example: 'It was the ministry that restricted access last year.', note: 'it-cleft' },
  { id: 'c-l36-04', lessonId: 'l36-archive-seminar', front: '«أوصت اللجنة بالإفراج عن الملفات»؟', back: 'The committee recommended that the files be released.', example: 'The committee recommended that the files be released.', note: 'subjunctive: be released' },
  { id: 'c-l36-05', lessonId: 'l36-archive-seminar', front: '«بعد فحص الوثائق، أستطيع تأكيد الفجوات»؟', back: 'Having examined the documents, I can confirm the gaps.', example: 'Having examined the documents, I can confirm the gaps.', note: 'شبه جملة: Having examined' },
  { id: 'c-l36-06', lessonId: 'l36-archive-seminar', front: '«لن ننشر الفهرس فحسب، بل سنحمي الأسماء الحساسة أيضاً»؟', back: 'Not only will we publish the index, but we will also protect sensitive names.', example: 'Not only will we publish the index, but we will also protect sensitive names.', note: 'قلب بعد Not only' },

  /* ── الدرس 37: القلب الشرطي ── */
  { id: 'c-l37-01', lessonId: 'l37-inversion-c2', front: '«لو كنت عرفت أبكر لفعلت» (بالقلب)؟', back: 'Had I known earlier, I would have acted.', example: 'Had I known earlier, I would have acted.', note: 'Had + I + pp = If I had known' },
  { id: 'c-l37-02', lessonId: 'l37-inversion-c2', front: 'أكمل: Were she ___ the job, she would accept.', back: 'to offer', example: 'Were she to offer the job, she would accept.', note: 'Were + she + to + فعل' },
  { id: 'c-l37-03', lessonId: 'l37-inversion-c2', front: '«إذا احتجت مساعدة فاتصل» (رسمي)؟', back: 'Should you require assistance, please call.', example: 'Should you require assistance, please call.', note: 'Should + you + فعل' },
  { id: 'c-l37-04', lessonId: 'l37-inversion-c2', front: '«لا تغادر تحت أي ظرف» (بالقلب)؟', back: 'Under no circumstances should you leave.', example: 'Under no circumstances should you leave.', note: 'ظرف سلبي + قلب' },
  { id: 'c-l37-05', lessonId: 'l37-inversion-c2', front: '«لم نرَ قبلها مثل هذه الشجاعة»؟', back: 'Never before had we seen such courage.', example: 'Never before had we seen such courage.', note: 'Never before + had + we' },
  { id: 'c-l37-06', lessonId: 'l37-inversion-c2', front: 'صحح: Had I have known…', back: 'Had I known…', example: 'Had I known, I would have acted.', note: 'لا have بعد Had' },

  /* ── الدرس 38: التركيز البلاغي ── */
  { id: 'c-l38-01', lessonId: 'l38-cleft-c2', front: '«أنا المسؤول» (رسمي)؟', back: 'It is I who am responsible.', example: 'It is I who am responsible.', note: 'It is I who + am' },
  { id: 'c-l38-02', lessonId: 'l38-cleft-c2', front: '«ما يحتاجه الآن هو راحة»؟', back: 'What he needs now is a good rest.', example: 'What he needs now is a good rest.', note: 'wh-cleft' },
  { id: 'c-l38-03', lessonId: 'l38-cleft-c2', front: '«لم نصل حتى منتصف الليل» (بالتركيز)؟', back: 'It was not until midnight that we arrived.', example: 'It was not until midnight that we arrived.', note: 'not until … that' },
  { id: 'c-l38-04', lessonId: 'l38-cleft-c2', front: '«كل ما يهم هو الحقيقة»؟', back: 'All that matters is the truth.', example: 'All that matters is the truth.', note: 'all-cleft' },
  { id: 'c-l38-05', lessonId: 'l38-cleft-c2', front: 'صحح: What he needs are rest.', back: 'What he needs is rest.', example: 'What he needs is rest.', note: 'What he needs مفرد' },
  { id: 'c-l38-06', lessonId: 'l38-cleft-c2', front: '«الأرشيف هو الذي قدّم الدليل»؟', back: 'It was the archive that provided the evidence.', example: 'It was the archive that provided the evidence.', note: 'it-cleft لشيء' },

  /* ── الدرس 39: التنازل الرسمي ── */
  { id: 'c-l39-01', lessonId: 'l39-concession', front: '«رغم محاولاته لم يقنعهم» (Much as)؟', back: 'Much as he tried, he could not persuade them.', example: 'Much as he tried, he could not persuade them.', note: 'Much as = Although' },
  { id: 'c-l39-02', lessonId: 'l39-concession', front: '«رغم المطر استمرت المباراة» (رسمي)؟', back: 'Notwithstanding the rain, the match continued.', example: 'Notwithstanding the rain, the match continued.', note: 'Notwithstanding + اسم' },
  { id: 'c-l39-03', lessonId: 'l39-concession', front: '«نجح وإن بصعوبة» (C2)؟', back: 'He passed, albeit narrowly.', example: 'He passed, albeit narrowly.', note: 'albeit + ظرف' },
  { id: 'c-l39-04', lessonId: 'l39-concession', front: '«بينما الشمال بارد، الجنوب دافئ»؟', back: 'Whereas the north is cold, the south is warm.', example: 'Whereas the north is cold, the south is warm.', note: 'whereas للمقارنة' },
  { id: 'c-l39-05', lessonId: 'l39-concession', front: '«مهما حاولت بجد فشلت»؟', back: 'However hard she tried, she failed.', example: 'However hard she tried, she failed.', note: 'However + صفة' },
  { id: 'c-l39-06', lessonId: 'l39-concession', front: 'صحح: Notwithstanding of the rain…', back: 'Notwithstanding the rain…', example: 'Notwithstanding the rain, we continued.', note: 'بلا of' },

  /* ── الدرس 40: الحذف الرسمي ── */
  { id: 'c-l40-01', lessonId: 'l40-ellipsis-c2', front: 'أكمل: She can play the piano, and so ___ I.', back: 'can', example: 'She can play the piano, and so can I.', note: 'so + can + I' },
  { id: 'c-l40-02', lessonId: 'l40-ellipsis-c2', front: 'أكمل: He didn\'t attend, and neither ___ she.', back: 'did', example: "He didn't attend, and neither did she.", note: 'neither + did + she' },
  { id: 'c-l40-03', lessonId: 'l40-ellipsis-c2', front: '«قد أتأخر؛ فإن كان كذلك ابدأ بدوني»؟', back: 'I may be late; if so, start without me.', example: 'I may be late; if so, start without me.', note: 'if so' },
  { id: 'c-l40-04', lessonId: 'l40-ellipsis-c2', front: 'أكمل: I\'ll take the blue ___.', back: 'one', example: "I'll take the blue one.", note: 'one تعوّض الاسم' },
  { id: 'c-l40-05', lessonId: 'l40-ellipsis-c2', front: '«طلبوا مني المغادرة ففعلت»؟', back: 'They asked me to leave, and I did so.', example: 'They asked me to leave, and I did so.', note: 'did so' },
  { id: 'c-l40-06', lessonId: 'l40-ellipsis-c2', front: 'صحح: neither she did.', back: 'neither did she', example: 'He was not ready, and neither did she want to wait.', note: 'مساعد + فاعل' },

  /* ── الدرس 41: دقة المفردة ── */
  { id: 'c-l41-01', lessonId: 'l41-lexical-precision', front: 'perspicacious = ؟', back: 'نافذ البصيرة / ثاقب الفهم', example: 'She is a perspicacious critic.', note: 'ليست مجرد «ذكي»' },
  { id: 'c-l41-02', lessonId: 'l41-lexical-precision', front: 'fastidious = ؟', back: 'شديد الدقة والتدقيق', example: 'He pays fastidious attention to detail.', note: 'دقة متناهية' },
  { id: 'c-l41-03', lessonId: 'l41-lexical-precision', front: 'ennui = ؟', back: 'ملل وجودي عميق', example: 'A sense of ennui settled over the room.', note: 'أعمق من الملل العادي' },
  { id: 'c-l41-04', lessonId: 'l41-lexical-precision', front: 'sycophant = ؟', back: 'متملق انتهازي', example: 'The minister was surrounded by sycophants.', note: 'ليس مجرد مؤيد' },
  { id: 'c-l41-05', lessonId: 'l41-lexical-precision', front: 'peremptory = ؟', back: 'حاسم آمر لا يقبل النقاش', example: 'His peremptory refusal ended all discussion.', note: 'رفض قطعي' },
  { id: 'c-l41-06', lessonId: 'l41-lexical-precision', front: 'lucid وcandid = ؟', back: 'واضح وصريح', example: 'Her candid and lucid argument convinced us.', note: 'دقة الوصف' },

  /* ── الدرس 42: المناقشة النهائية ── */
  { id: 'c-l42-01', lessonId: 'l42-viva', front: '«لو تلقينا البيانات أبكر لكنا راجعناها»؟', back: 'Had we received the data earlier, we could have reviewed it.', example: 'Had we received the data earlier, we could have reviewed it.', note: 'قلب شرطي' },
  { id: 'c-l42-02', lessonId: 'l42-viva', front: '«ما تُظهره دراستي هو علاقة بين الوصول والثقة»؟', back: 'What my study shows is a clear link between access and trust.', example: 'What my study shows is a clear link between access and trust.', note: 'wh-cleft' },
  { id: 'c-l42-03', lessonId: 'l42-viva', front: '«رغم إعجابي بالمنهج، العينة صغيرة»؟', back: 'Much as I admire the method, the sample is small.', example: 'Much as I admire the method, the sample is small.', note: 'Much as' },
  { id: 'c-l42-04', lessonId: 'l42-viva', front: '«رغم الحجم، النتائج متسقة»؟', back: 'Notwithstanding the size, the findings are consistent.', example: 'Notwithstanding the size, the findings are consistent.', note: 'Notwithstanding + اسم' },
  { id: 'c-l42-05', lessonId: 'l42-viva', front: '«الأرشيف هو الذي يقدم أقوى دليل»؟', back: 'It is the archive that provides the strongest evidence.', example: 'It is the archive that provides the strongest evidence.', note: 'it-cleft' },
  { id: 'c-l42-06', lessonId: 'l42-viva', front: '«الأرشيف ناقص، وكذلك السجل»؟', back: 'The archive is incomplete, and so is the record.', example: 'The archive is incomplete, and so is the record.', note: 'حذف: so is the record' },
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
export function countDueCardsIn(
  deck: DeckCard[],
  states: Record<string, { due: string; reps: number }>,
  progress: Record<string, unknown>,
  now: number = Date.now()
): number {
  let n = 0;
  for (const card of deck) {
    if (!progress[card.lessonId]) continue; // لا تولد إلا باكتمال درسها
    const s = states[card.id];
    if (!s || Date.parse(s.due) <= now) n += 1;
  }
  return n;
}

/** عدّاد بطاقات المنهاج وحدها (للتوافق مع الواجهات القديمة) */
export function countDueCards(
  states: Record<string, { due: string; reps: number }>,
  progress: Record<string, unknown>,
  now: number = Date.now()
): number {
  return countDueCardsIn(SRS_DECK, states, progress, now);
}
