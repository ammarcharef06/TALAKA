/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المحطة الأولى: «أول خطواتك» (S0 → A1)
   محتوى مكتوب ومعاير يدوياً: الفصحى العربية للشرح، إنجليزية حقيقية للتطبيق
   ═══════════════════════════════════════════════════════════════ */
import type { Unit } from '../../types';

export const UNIT_01: Unit = {
  id: 'm0-first-steps',
  order: 1,
  title: 'المحطة الأولى — أول خطواتك',
  tagline: 'من الحروف المفقودة في العربية… حتى أول حوار كامل تخوضه بإنجليزية حقيقية',
  forLevels: 'S0 و A1',
  lessons: [
    /* ─────────────────── الدرس 1: الأصوات ─────────────────── */
    {
      id: 'l1-sounds',
      order: 1,
      title: 'الإنجليزية لا تُكتب كما تُنطق… لكنها تُنطق كما تكتبها',
      estMinutes: 12,
      objectives: [
        'التمييز بين أربع عائلات صوتية تُربك العربي',
        'نطق th/ش vs ch/th بشكل صحيح من اليوم الأول',
        'تمييز الكلمات المتشابهة شكلاً بالسماع',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'الصوت /θ/ و /ð/ — «اسم ه» المفقود',
          body: 'تضع طرف لسانك بين أسنانك الأمامية وتدفع الهواء (أو مع اهتزاز الوترين للصوت الثاني). الصوت الأول كما في think، والثاني كما في this. تذكّر: هما قريبان من «ث» و«ذ» الفصيحتين — المشكلة فقط أن بعض اللهجات العربية تُبدلها تاء ودالاً.',
        },
        {
          type: 'table',
          title: 'العائلة الأولى: th المهموسة وth المهتزّة',
          head: ['/θ/ مهموسة — كما في think', '/ð/ مهتزة — كما في this'],
          rows: [
            ['think — يفكر', 'this — هذا / هذه'],
            ['three — ثلاثة', 'that — ذلك'],
            ['thank you — شكراً', 'mother / father — أم / أب'],
            ['bath — حوض الاستحمام', 'the — أداة التعريف «ال»'],
          ],
        },
        {
          type: 'table',
          title: 'العائلة الثانية: v مقابل f',
          head: ['v — بأسنان على الشفة مع اهتزاز', 'f — انفتاح الشفة مع احتكاك فقط'],
          rows: [
            ['very — جداً — تنطق مع اهتزاز', 'ferry — عبّارة'],
            ['village — قرية', 'five — خمسة'],
            ['view — منظر', 'few — قليل'],
            ['vest — صديري', 'fast — سريع'],
          ],
        },
        {
          type: 'rule',
          title: 'العائلة الثالثة: ch /tʃ/ مقابل sh /ʃ/',
          body: 'ch تُنطق «تش» كما في cheap (رخيص)، وsh تُنطق «ش» كما في sheep (خروف). الكلمتان تتقابلان في كل حرف ما عدا الصوت الأول — تغيير واحد في الصوت يغيّر المعنى تماماً.',
        },
        {
          type: 'tip',
          title: 'لماذا نبدأ بالأصوات؟',
          body: 'لأن دماغك العربي سيعوّض كل صوت مجهول بأقرب صوت عربي — وهذا ما يثبّت «فخ النطق» للأبد. اليوم تلتقط العادات الصحيحة قبل أن تتثبت الخاطئة.',
        },
      ],
      examples: [
        { text: 'I think this is very good.', note: 'لاحظ think (/θ/) و this (/ð/) و very (v) في جملة واحدة' },
        { text: 'My mother and father live in a village.', note: 'mother و father: th مهموسة مع اهتزاز' },
        { text: 'Thank you for the three views.', note: 'thank + three: /θ/ مهموسة في كلتيهما' },
        { text: 'The sheep is on the ship.', note: 'sheep (خروف) مقابل ship (سفينة) — الصوت /ʃ/ فقط هو الفيصل' },
      ],
      practice: [
        { id: 'l1q1', question: 'قل بالإنجليزية: «هذا»', options: ['dish', 'this', 'these', 'those'], answer: 1, explanation: 'this = هذا/هذه بالمفرد — these وthose للجمع البعيد والقريب.' },
        { id: 'l1q2', question: 'قل بالإنجليزية: «شكراً»', options: ['thank you', 'fine thanks', 'please', 'welcome'], answer: 0, explanation: 'thank you = شكراً. والرد على الشكر: You\'re welcome.' },
        { id: 'l1q3', question: 'اختر الكلمة التي تُنطق بصوت v (اهتزاز مع الأسنان على الشفة):', options: ['ferry', 'very', 'fairy', 'fat'], answer: 1, explanation: 'very تبدأ بصوت /v/. fairy وferry تبدآن بصوت /f/.' },
        { id: 'l1q4', question: 'اختر الكلمة التي تُنطق بصوت th مهموسة مثل think:', options: ['this', 'mother', 'three', 'that'], answer: 2, explanation: 'three تبدأ بـ /θ/ مهموسة — كما في think و thank.' },
        { id: 'l1q5', question: 'اختر الكلمة التي تُنطق th مع اهتزاز مثل this:', options: ['think', 'three', 'father', 'thick'], answer: 2, explanation: 'father: th مهموسة مع اهتزاز (/ð/) — مثل mother وthis وthat.' },
        { id: 'l1q6', question: '«الخروف» بالإنجليزية هو:', options: ['chip', 'ship', 'sheep', 'shop'], answer: 2, explanation: 'sheep = خروف (e مزدوجة ⇒ /iː/ طويلة). chip = رقاقة/شريحة.' },
      ],
    },

    /* ─────────────────── الدرس 2: أنا ─────────────────── */
    {
      id: 'l2-im',
      order: 2,
      title: '«أنا» — أقوى كلمة في الإنجليزية',
      estMinutes: 10,
      objectives: [
        'استخدام I am و I\'m مع الاسم والعمر والجنسية والمهنة',
        'الفرق بين My name is و I am',
        'الاختصار I\'m كما ينطقه المتحدث الأصلي',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'البناء الأساسي: I am',
          body: '«أنا» في الإنجليزية = I am دائماً — لا تتغير. am هي الفعل «أكون» مربوطة بضمير «أنا» فقط. وفي الحديث والكتابة العادية نختصرها I\'m بكلمة واحدة متصلة.',
        },
        {
          type: 'table',
          title: 'أربع جمل تكفي للتعريف الكامل',
          head: ['الإنجليزية', 'العربية'],
          rows: [
            ['My name is Omar.', 'اسمي عمر.'],
            ['I am 24 years old.', 'عمري 24 سنة.'],
            ['I am from Egypt.', 'أنا من مصر.'],
            ['I am a student.', 'أنا طالب.'],
          ],
        },
        {
          type: 'tip',
          title: 'My name is أم I am؟',
          body: 'كلاهما صحيح للتعريف. «My name is…» رسمية أكثر قليلاً، و«I am…» أسرع وأكثر طبيعية. في أول لقاء استخدم أيهما — ولا تقل «My name is…» ثم تكررها بأدب زائد.',
        },
        {
          type: 'tip',
          title: 'المشكلة الكلاسيكية: «I has / I is»',
          body: 'العربي يقول «أنا عنده» فتجد من يترجمها I has — وهذا خطأ. مع الفاعل «أنا» لا يأتي إلا am فقط، وبدون استثناء.',
        },
      ],
      examples: [
        { text: 'My name is Omar. I am 24 years old.', note: 'التعريف الأكمل في سطر واحد' },
        { text: "I'm from Egypt.", note: 'اختصار I am إلى I\'m — ننطقها بكلمة واحدة' },
        { text: "I'm a student at Talaqa Academy.", note: 'a student — أداة النكرة قبل المهنة' },
        { text: 'Nice to meet you.', note: 'تشرفنا — تقابل ردها: Nice to meet you too.' },
      ],
      practice: [
        { id: 'l2q1', question: 'أكمل: ___ name is Layla.', options: ['My', 'His', 'Her', 'Your'], answer: 0, explanation: 'My name is = اسمي. (His لمذكر الغائب، Her لمؤنث الغائب، Your للمخاطب).' },
        { id: 'l2q2', question: 'أكمل: I ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 0, explanation: 'مع «أنا» يأتي am فقط — لا is ولا are، دائماً.' },
        { id: 'l2q3', question: 'أكمل: I\'m ___ Egypt.', options: ['from', 'in', 'to', 'of'], answer: 0, explanation: 'from = من (بلد/مدينة). I\'m from Egypt = أنا من مصر.' },
        { id: 'l2q4', question: 'الرد المثالي لمن يقول لك: Nice to meet you.', options: ['Please.', 'Thank you.', 'Nice to meet you too.', 'Good morning.'], answer: 2, explanation: 'Nice to meet you too = وأنا أكثر تسرني معرفتك.' },
        { id: 'l2q5', question: 'ترجم: «عمري 24 سنة»', options: ['I\'m 24 years old.', 'I have 24 years.', 'I 24 age.', 'Years I\'m 24.'], answer: 0, explanation: 'I\'m … years old هي الصيغة المعتمدة — «I have 24 years» ترجمة حرفية وهذا خطأ شائع.' },
        { id: 'l2q6', question: 'ترجم: «أنا طالب جامعي»', options: ['I\'m a university student.', 'I\'m an university student.', 'I\'m university student.', 'I student university.'], answer: 0, explanation: 'a university — الكلمة تبدأ بصوت ساكن /j/ (يو)، لذا «a» وليس «an».' },
      ],
    },

    /* ─────────────────── الدرس 3: الأرقام ─────────────────── */
    {
      id: 'l3-numbers',
      order: 3,
      title: 'الأرقام 1 إلى 20 — والفخ الرقمي الأشهر',
      estMinutes: 10,
      objectives: [
        'قراءة وكتابة الأرقام من 1 إلى 20',
        'التفريق بين teen و ty (fifteen و fifty)',
        'تنفيذ حساب ذهني على طريقة أهل اللغة',
      ],
      blocks: [
        {
          type: 'table',
          title: 'الأرقام 1 – 10',
          head: ['الرقم', 'الإنجليزية'],
          rows: [
            ['1', 'one'], ['2', 'two'], ['3', 'three'], ['4', 'four'], ['5', 'five'],
            ['6', 'six'], ['7', 'seven'], ['8', 'eight'], ['9', 'nine'], ['10', 'ten'],
          ],
        },
        {
          type: 'table',
          title: 'الأرقام 11 – 20 (نمط الـteens)',
          head: ['الرقم', 'الإنجليزية'],
          rows: [
            ['11', 'eleven'], ['12', 'twelve'], ['13', 'thirteen'], ['14', 'fourteen'], ['15', 'fifteen'],
            ['16', 'sixteen'], ['17', 'seventeen'], ['18', 'eighteen'], ['19', 'nineteen'], ['20', 'twenty'],
          ],
        },
        {
          type: 'tip',
          title: 'الفخ الأشهر: fifteen ≠ fifty',
          body: 'fifteen = 15 وتنتهي بـ/tiːn/ — النهاية «teen» مثل «مراهق». fifty = 50 وتنتهي بـ/ti/. تلعثم بسيط في نهاية الكلمة يغيّر العمر والسعر 500 مرة.',
        },
        {
          type: 'tip',
          title: 'hear it first',
          body: 'الأرقام تُكتسب بالاستماع: استمع لكل مثال بصوت المتحدث مرتين، ثم قلها أنت. الأرقام تنطقها بالتكرار وليس بالقراءة الصامتة.',
        },
      ],
      examples: [
        { text: 'one, two, three — four, five, six', note: 'قلها بإيقاع ثابت بصوت عالٍ' },
        { text: 'seven, eight, nine, ten', note: 'eight تنطق /eɪt/ — بلا w' },
        { text: 'eleven, twelve, thirteen', note: 'الثلاثة الفذة: لا تشبه أي نمط' },
        { text: 'I am twenty-four years old.', note: 'تركيب العمر: I am + الرقم + years old' },
      ],
      practice: [
        { id: 'l3q1', question: 'اكتب بالإنجليزية: 17', options: ['seventeen', 'sixteen', 'eighteen', 'seven'], answer: 0, explanation: 'seventeen = 17. القاعدة: رقم من الآحاد + teen.' },
        { id: 'l3q2', question: 'اكتب بالإنجليزية: 13', options: ['thirtteen', 'thirteen', 'thirty', 'threeteen'], answer: 1, explanation: 'thirteen = 13 — كن حذراً: thirtY = 30!' },
        { id: 'l3q3', question: 'اكتب بالإنجليزية: 50', options: ['fifteen', 'fifty', 'fivety', 'five'], answer: 1, explanation: 'fifty = 50. fifteen = 15. الفرق ثورة نطقية كاملة.' },
        { id: 'l3q4', question: 'two + four = ؟ (بالأرقام الإنجليزية)', options: ['four', 'five', 'six', 'eight'], answer: 2, explanation: 'two (2) + four (4) = six (6).' },
        { id: 'l3q5', question: 'twelve + three = ؟', options: ['fourteen', 'thirteen', 'fifteen', 'sixteen'], answer: 2, explanation: 'twelve (12) + three (3) = fifteen (15).' },
        { id: 'l3q6', question: 'اكتب بالإنجليزية: 20', options: ['twelve', 'twenty', 'twoteen', 'two'], answer: 1, explanation: 'twenty = 20 — تكتب t-w-e-n-t-y وتنطق /ˈtwɛnti/.' },
      ],
    },

    /* ─────────────────── الدرس 4: التحية ─────────────────── */
    {
      id: 'l4-greetings',
      order: 4,
      title: 'مرحبا… وداعاً — اسلحتك الاجتماعية الكاملة',
      estMinutes: 10,
      objectives: [
        'تحية الوقت (صباحاً / ظهراً / مساءً)',
        'الفارق بين Good evening و Good night',
        'التحية والمغادرة بلباقة في كل السياقات',
      ],
      blocks: [
        {
          type: 'table',
          title: 'تحية الوقت الذهبي',
          head: ['الإنجليزية', 'متى نقولها'],
          rows: [
            ['Good morning', 'من الفجر حتى الظهر — صباح الخير'],
            ['Good afternoon', 'من الظهر حتى الغروب تقريباً — طاب يومك'],
            ['Good evening', 'بعد الغروب — مساء الخير (تحية فقط)'],
          ],
        },
        {
          type: 'table',
          title: 'التحية المحايدة والوداع',
          head: ['الإنجليزية', 'الاستعمال'],
          rows: [
            ['Hello / Hi', 'في أي وقت — مرحباً (Hi أكثر حميمية)'],
            ['How are you?', 'كيف حالك؟ — والرد: I\'m fine, thanks.'],
            ['Goodbye / Bye', 'مع السلامة — محايدة لأي وقت'],
            ['See you later', 'أراك لاحقاً — ودية للمقربين'],
            ['Good night', 'تصبح على خير — وداع وآداب النوم فقط، وليست تحية'],
          ],
        },
        {
          type: 'tip',
          title: 'الفخ الثقافي: Good night ليست تحية المساء',
          body: '«تصبح على خير» تقال فقط عند الانصراف وهو ليل. إن دخلت حفلة تقول Good evening، أما Good night فيقولها من يغادر الحفلة. الخلط بينهما يراه الأجنبي كالطفل الذي يودع وهو يدخل.',
        },
      ],
      examples: [
        { text: 'Good morning, class. Welcome back.', note: 'تحية المعلم الصباحية' },
        { text: 'Good afternoon. How are you today?', note: 'تحية الظهر — غالباً في بيئات العمل' },
        { text: "I'm fine, thanks. And you?", note: 'الرد الكامل + سؤال بالمقابل — أدب المحادثة' },
        { text: 'Good night. See you tomorrow.', note: 'الوداع الليلي — ليس تحية الليل' },
      ],
      practice: [
        { id: 'l4q1', question: 'دخلت صباحاً — تقول؟', options: ['Good afternoon', 'Good evening', 'Good morning', 'Good night'], answer: 2, explanation: 'Good morning من الفجر حتى الظهر.' },
        { id: 'l4q2', question: 'التحية بعد الغروب؟', options: ['Good afternoon', 'Good evening', 'Good morning', 'Good night'], answer: 1, explanation: 'Good evening = مساء الخير — تحية المساء (وليست وداعاً).' },
        { id: 'l4q3', question: '«وداعاً» — أيها تنطق أكثر؟', options: ['Goodbye', 'Welcome', 'Please', 'Hello'], answer: 0, explanation: 'Goodbye / Bye — والإنجليزية الحميمية: See you later.' },
        { id: 'l4q4', question: 'سألك أحدهم How are you؟ فتجيب:', options: ['I\'m fine, thanks.', 'Goodbye.', 'My name is Sara.', 'Good morning.'], answer: 0, explanation: 'I\'m fine, thanks = أنا بخير شكراً — والإضافة الأكثر لباقة: And you?' },
        { id: 'l4q5', question: 'الساعة 11 مساءً وتغادر منزلك المضيف — تقول:', options: ['Good morning', 'Good afternoon', 'Good night', 'Hello'], answer: 2, explanation: 'Good night تقال عند الانصراف ليلاً — وهي ليست تحية.' },
        { id: 'l4q6', question: '«أراك لاحقاً» بالإنجليزية؟', options: ['Welcome back', 'How are you', 'See you later', 'Please'], answer: 2, explanation: 'See you later = أراك لاحقاً — أكثرها ودية مع العائلة والأصدقاء.' },
      ],
    },

    /* ─────────────────── الدرس 5: المهنة ─────────────────── */
    {
      id: 'l5-job',
      order: 5,
      title: '«ما مهنتك؟» — سؤال كل لقاء أول',
      estMinutes: 10,
      objectives: [
        'طرح سؤال المهنة والإجابة عليه',
        'أدوات النكرة a/an قبل المهن (مراجعة ذهبية)',
        'التعريف بمهنتك بجمل بسيطة ثقة',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'السؤال الذهبي: What do you do?',
          body: 'في الواقع يسأل الناس دائماً «What do you do?» (ماذا تفعل/ما مهنتك؟) أو «What do you do for a living?». ويمكن أيضاً: «What\'s your job?» — لكنها أكثر مباشرة.',
        },
        {
          type: 'table',
          title: 'أجيب بنفس البناء: I\'m a / I\'m an',
          head: ['المهنة', 'بالأداة'],
          rows: [
            ['student — طالب', 'I\'m a student.'],
            ['teacher — معلم', 'I\'m a teacher.'],
            ['doctor — طبيب', 'I\'m a doctor.'],
            ['engineer — مهندس', 'I\'m an engineer.'],
            ['accountant — محاسب', 'I\'m an accountant.'],
            ['designer — مصمم', 'I\'m a designer.'],
          ],
        },
        {
          type: 'rule',
          title: 'a أم an؟ القاعدة الذهبية (قبل المهنة بثانية)',
          body: 'a قبل الكلمات التي تبدأ بصوت ساكن (student, teacher, doctor, designer)، و an قبل الكلمات التي تبدأ بصوت علة (engineer /e/، accountant /ə/، artist /ɑː/). العبرة بالصوت وليس بالحرف المكتوب.',
        },
        {
          type: 'tip',
          title: 'ذلك الخطأ المتكرر: «I engineer»',
          body: 'المباشر: لا مهنة بلا «a/an» — فالإنجليزية لا تحب مهنة معلّقة بلا أداة. «I am engineer» خطأ حتى لو المعنى واضح؛ الصحيح «I am an engineer».',
        },
      ],
      examples: [
        { text: 'What do you do?', note: 'ماذا تعمل؟ — السؤال الذهبي للقائك الأول' },
        { text: "I'm a software engineer.", note: 'an/a + مهنة — مهنتك جزء من هويتك الجديدة' },
        { text: "I'm an English teacher at Talaqa.", note: 'a + teacher — صوت t ساكن' },
        { text: 'Nice to meet you, Omar.', note: 'الرد المثالي بعد المهنة — يُنهي اللقاء الأول بروعة' },
      ],
      practice: [
        { id: 'l5q1', question: 'ترجم: «أنا طبيب»', options: ['I\'m a doctor.', 'I\'m an doctor.', 'I\'m doctor.', 'I a doctor.'], answer: 0, explanation: 'doctor تبدأ بصوت ساكن (د) ⇒ a doctor. قاعدة a/an تُدار بالصوت لا بالحرف.' },
        { id: 'l5q2', question: 'أكمل: I\'m ___ engineer.', options: ['a', 'an', 'the', 'nothing'], answer: 1, explanation: 'engineer تبدأ بصوت علة /e/ ⇒ an engineer.' },
        { id: 'l5q3', question: '"What do you do?" — ماذا يسألك؟', options: ['أين أنت؟', 'ما مهنتك؟', 'ماذا فعلت؟', 'كيف حالك؟'], answer: 1, explanation: 'What do you do? = ما مهنتك؟ — السؤال الاجتماعي المعتمد.' },
        { id: 'l5q4', question: 'انت محاسب — قلها كاملة بالإنجليزية:', options: ['I\'m a accountant.', 'I\'m an accountant.', 'I\'m accountant.', 'I\'m the accountant.'], answer: 1, explanation: 'accountant تبدأ بصوت علة (الهمزة/الشوا ʌ/æ) ⇒ an accountant.' },
        { id: 'l5q5', question: 'ترجم: «أنا طالبة»', options: ['I\'m a student.', 'I\'m the student.', 'I\'m an student.', 'I\'m student.'], answer: 0, explanation: 'student تبدأ بصوت ساكن /s/ ⇒ a student. والأداة لا تُترجم «حرفياً».' },
        { id: 'l5q6', question: 'ترجم: «أنا معلمة»', options: ['I\'m a teacher.', 'I\'m the teacher.', 'I\'m an teacher.', 'I\'m teacher.'], answer: 0, explanation: 'teacher تبدأ بصوت ساكن /t/ ⇒ a teacher.' },
      ],
    },

    /* ─────────────────── الدرس 6: حوار البوابة ─────────────────── */
    {
      id: 'l6-dialogue',
      order: 6,
      title: 'حوار البوابة — المقابلة الأولى كاملة',
      estMinutes: 12,
      objectives: [
        'فهم حوار تعارف كامل في سياق أكاديمي واقعي',
        'استرجاع كل ما سبقته الدروس في سياق واحد',
        'الجرأة الأولى: أنت وعمر تتقاسمان نفس الحوار',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'كيف تستخدم هذا الدرس',
          body: 'اقرأ الحوار ببطء، استمع إليه بصوت المتحدث مرتين أو ثلاثاً، حاول أن تمثّل دور عمر مع زميل أو صديق بصوت عالٍ. ثم اختبر فهمك في التمرين — وإذا نجحت بخمسة من ستة فأنت أهل للحوار الحقيقي.',
        },
      ],
      examples: [
        { text: 'Good morning. Welcome to Talaqa Academy.', note: 'تحية مكتب الاستقبال — كما ستسمعها في اختبارك ومحادثتك الحقيقية' },
        { text: "Hi. My name is Omar. I'm from Egypt.", note: 'التحية + الاسم + البلد — سلاحك الأول' },
        { text: "I'm an engineer. I work at a software company.", note: 'المهنة + التفاصيل — an engineer صوت علة' },
        { text: "I'm 27 years old.", note: 'العمر بصيغة I\'m … years old' },
        { text: 'Welcome aboard. Your placement test starts tomorrow at ten.', note: 'welcome aboard = أهلاً بك على متن الأكاديمية' },
      ],
      practice: [
        { id: 'l6q1', question: 'أين تدور هذه المحادثة؟', options: ['في مطار', 'في أكاديمية طلاقة', 'في فندق', 'في سوق'], answer: 1, explanation: 'Good morning. Welcome to Talaqa Academy — مكان المحادثة الأكاديمية.' },
        { id: 'l6q2', question: 'مهنة عمر؟', options: ['He is a doctor', 'He is a teacher', 'He is an engineer', 'He is a lawyer'], answer: 2, explanation: "I'm an engineer — بصوت علة، لذا an engineer." },
        { id: 'l6q3', question: 'من أين عمر؟', options: ['Morocco', 'Egypt', 'Algeria', 'Jordan'], answer: 1, explanation: "I'm from Egypt — صريح في الحوار." },
        { id: 'l6q4', question: 'كم عمر عمر؟', options: ['17', '20', '24', '27'], answer: 3, explanation: "I'm 27 years old." },
        { id: 'l6q5', question: 'رد عمر على سؤال مهنته كان:', options: ['I\'m fine, thanks', 'I\'m an engineer', 'My name is Omar', 'Good morning'], answer: 1, explanation: "What do you do? → I'm an engineer." },
        { id: 'l6q6', question: 'متى يبدأ الاختبار؟', options: ['Today at nine', 'Tomorrow at ten', 'Next week', 'On Sunday'], answer: 1, explanation: 'Your placement test starts tomorrow at ten.' },
      ],
    },
  ],
};

export const UNITS: Unit[] = [UNIT_01];

/** مرجعية سريعة: البحث عن درس بمعرفه */
export function findLesson(id: string): { unit: Unit; lesson: Unit['lessons'][number] } | null {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return null;
}

/** الدروس مفتوحة بحسب إتمام ما قبلها — الترتيب هو القانون */
export function lessonAvailability(
  lessons: Unit['lessons'],
  progress: Record<string, { completedAt: string; bestScore: number }>
): Record<string, 'completed' | 'current' | 'locked'> {
  const state: Record<string, 'completed' | 'current' | 'locked'> = {};
  let opened = false;
  for (const lesson of [...lessons].sort((a, b) => a.order - b.order)) {
    if (progress[lesson.id]) {
      state[lesson.id] = 'completed';
    } else if (!opened) {
      state[lesson.id] = 'current';
      opened = true;
    } else {
      state[lesson.id] = 'locked';
    }
  }
  return state;
}
