/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — رزمة بطاقات المنهاج (155 بطاقة)
   مشتقة حرفياً من دروس المحطات الأربع: كل بطاقة مربوطة بدرسها
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
