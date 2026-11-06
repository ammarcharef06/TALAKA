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

export const UNIT_02: Unit = {
  id: 'm1-working-sentences',
  order: 2,
  title: 'المحطة الثانية — الجمل العاملة (A1)',
  tagline: 'من الكلمات المفردة إلى جمل تعمل فعلاً: النفي، الأسئلة، العادات، والملكية — وحوار المقهى ختماً',
  forLevels: 'A1',
  lessons: [
    {
      id: 'l7-dont',
      order: 1,
      title: 'ليس هكذا — نفي الجملة بـ don\'t و doesn\'t',
      estMinutes: 10,
      objectives: [
        'نفي الجملة الخبرية بطريقتين حسب الفاعل',
        'الفرق الحاسم بين don\'t و doesn\'t',
        'تجنب فخ «I not» و«She don\'t»',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'القاعدة الذهبية: النفي في المضارع البسيط',
          body: 'المضارع البسيط يُنفى دائماً بفعل مساعد: «don\'t» مع I / you / we / they، و«doesn\'t» مع he / she / it. لا يوجد «I not» ولا «She not» ولا «She don\'t» — مطلقاً.',
        },
        {
          type: 'table',
          title: 'أمثلة إيجاب ← نفي',
          head: ['الجملة الإيجابية', 'الجملة المنفية'],
          rows: [
            ['I like coffee.', "I don't like coffee."],
            ['She works on Fridays.', "She doesn't work on Fridays."],
            ['They live in Cairo.', "They don't live in Cairo."],
            ['He speaks French.', "He doesn't speak French."],
          ],
        },
        {
          type: 'tip',
          title: 'أين يذهب الـ s؟',
          body: 'عنده ما كان الفعل يأخذ s (he/she/it: works/speaks)، فإن النفي يحبس الـ s داخل doesn\'t: «She doesn\'t work» وليس «She doesn\'t works».',
        },
      ],
      examples: [
        { text: "I don't like coffee.", note: 'don\'t مع I — لا نضيف s أبداً' },
        { text: "She doesn't work on Fridays.", note: 'doesn\'t مع she — الـ s انتقلت' },
        { text: "We don't watch TV in the morning.", note: 'don\'t مع we' },
        { text: "He doesn't speak Arabic.", note: 'doesn\'t مع he' },
      ],
      practice: [
        { id: 'l7q1', question: 'انفي الجملة: I like fish.', options: ['I don\'t like fish.', 'I not like fish.', 'I doesn\'t like fish.', 'I like don\'t fish.'], answer: 0, explanation: 'don\'t للمخاطبة I — القاعدة الثابتة.' },
        { id: 'l7q2', question: 'انفي الجملة: She works here.', options: ['She don\'t work here.', 'She doesn\'t works here.', 'She doesn\'t work here.', 'She not works here.'], answer: 2, explanation: 'doesn\'t + الفعل المجرد — الـ s تحوّلت إلى doesn\'t.' },
        { id: 'l7q3', question: 'انفي الجملة: We study English.', options: ['We don\'t study English.', 'We not study English.', 'We doesn\'t study English.', 'We study don\'t English.'], answer: 0, explanation: 'don\'t مع we — دائماً دون استثناء.' },
        { id: 'l7q4', question: 'انفي الجملة: He speaks French.', options: ['He don\'t speak French.', 'He doesn\'t speaks French.', 'He doesn\'t speak French.', 'He not speak French.'], answer: 2, explanation: 'he ⇒ doesn\'t + الفعل كما هو دون s.' },
        { id: 'l7q5', question: 'صواب أم خطأ: «I doesn\'t like it.»', options: ['صواب — تركيب صحيح', 'خطأ — الصواب: I don\'t like it', 'صواب لكنه رسمي جداً', 'خطأ — الصواب: I no like it'], answer: 1, explanation: 'doesn\'t مع he/she/it فقط؛ مع I نقول don\'t.' },
        { id: 'l7q6', question: 'انفي الجملة: They live in Cairo.', options: ['They don\'t live in Cairo.', 'They doesn\'t live in Cairo.', 'They not live in Cairo.', 'They no live in Cairo.'], answer: 0, explanation: 'don\'t مع they — هذا ثابت في المضارع البسيط.' },
      ],
    },
    {
      id: 'l8-dodoes',
      order: 2,
      title: 'الأسئلة الذهبية بـ Do و Does',
      estMinutes: 10,
      objectives: [
        'صياغة سؤال نعم/لا في المضارع البسيط',
        'الفرق بين Do و Does حسب الفاعل',
        'الرد الصحيح بفعل مساعد لا بإعادة الفعل',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'سؤال نعم/لا في المضارع البسيط',
          body: 'السؤال يبدأ بفعل مساعد: «Do» مع I / you / we / they، و«Does» مع he / she / it. الفعل نفسه يعود دائماً إلى المجرد: «Does he work?» وليس «Does he works?».',
        },
        {
          type: 'table',
          title: 'النمط بأمثلة',
          head: ['السؤال', 'الرد المعتاد'],
          rows: [
            ['Do you like football?', 'Yes, I do. / No, I don\'t.'],
            ['Does he live here?', 'Yes, he does. / No, he doesn\'t.'],
            ['Where do you live?', 'I live in Cairo.'],
            ['Does she speak Arabic?', 'Yes, she does.'],
          ],
        },
        {
          type: 'tip',
          title: 'لا تكرر الفعل في الرد',
          body: '«Do you like coffee?» جوابها «Yes, I do.» — ليس «Yes, I like.». الإنجليزية ترد بالفعل المساعد وحده، وهذا ما يورط العربي في كل محادثة.',
        },
      ],
      examples: [
        { text: 'Do you like football?', note: 'سؤال I/you/we/they يبدأ بـ Do' },
        { text: 'Does he work here?', note: 'he/she/it ⇒ Does' },
        { text: 'Where do you live?', note: 'أداة استفهام (Where) ثم Do ثم الفاعل' },
        { text: 'Yes, I do.', note: 'الرد بالفعل المساعد — لا إعادة للفعل' },
      ],
      practice: [
        { id: 'l8q1', question: 'اسأل: «هل تحب الشاي؟»', options: ['Do you like tea?', 'Does you like tea?', 'Are you like tea?', 'Do you likes tea?'], answer: 0, explanation: 'Do مع you — والفعل المجرد like.' },
        { id: 'l8q2', question: 'اسأل: «هل هو يعمل هنا؟»', options: ['Does he works here?', 'Does he work here?', 'Do he work here?', 'Is he work here?'], answer: 1, explanation: 'Does مع he — والفعل يبقى المجرد work.' },
        { id: 'l8q3', question: 'الرد الصحيح على Do you like Cairo؟', options: ['Yes, I am.', 'Yes, I do.', 'Yes, I like.', 'Yes, I Cairo.'], answer: 1, explanation: 'الإنجليزية ترد بالمساعد: Yes, I do. — لا «Yes, I like».' },
        { id: 'l8q4', question: '«أين تعيش؟» بالإنجليزية', options: ['Where you live?', 'Where are you live?', 'Where do you live?', 'Where lives you?'], answer: 2, explanation: 'Where + do + you + الفعل المجرد — الترتيب القياسي.' },
        { id: 'l8q5', question: 'اسأل: «هل هي تتكلم العربية؟»', options: ['Do she speak Arabic?', 'Does she speaks Arabic?', 'Is she speak Arabic?', 'Does she speak Arabic?'], answer: 3, explanation: 'Does مع she — الفعل المجرد speak.' },
        { id: 'l8q6', question: 'اسأل: «هل هم يدرسون؟»', options: ['Do they study?', 'Does they study?', 'Are they study?', 'Do they studies?'], answer: 0, explanation: 'Do مع they — والفعل study دون تصريف.' },
      ],
    },
    {
      id: 'l9-are',
      order: 3,
      title: 'اكتمال الكينونة: You are / We are / They are',
      estMinutes: 10,
      objectives: [
        'اكتمال تصريف فعل الكينونة (am/is/are)',
        'نفي am/is/are وتحويله للصيغة المختصرة',
        'الأسئلة بـ Are و Is',
      ],
      blocks: [
        {
          type: 'table',
          title: 'فعل الكينونة كاملاً',
          head: ['الفاعل', 'الفعل'],
          rows: [
            ['I', 'am'],
            ['you / we / they', 'are'],
            ['he / she / it', 'is'],
          ],
        },
        {
          type: 'rule',
          title: 'النفي المختصر',
          body: 'am not لا تختصر بشيء واحد — وإنما تكتب aren\'t مع he/she/it: «She isn\'t here.» و«They aren\'t here.».',
        },
        {
          type: 'table',
          title: 'الأسئلة بـ am/is/are',
          head: ['السؤال', 'المعنى'],
          rows: [
            ['Are you ready?', 'هل أنت جاهز؟'],
            ['Is he at home?', 'هل هو في البيت؟'],
            ['Are they students?', 'هل هم طلاب؟'],
            ['Am I late?', 'هل تأخرت؟'],
          ],
        },
        {
          type: 'tip',
          title: 'فخ العربي المعتاد',
          body: 'لا تقل «you\'re student» بلا a — الإنجليزية لا تسمح بمهنة معلقة: «you\'re a student» / «we\'re students».',
        },
      ],
      examples: [
        { text: 'We are students.', note: 'we ⇒ are' },
        { text: 'They are from Cairo.', note: 'they ⇒ are' },
        { text: "You're very kind.", note: 'اختصار you are = you\'re' },
        { text: "She isn't here.", note: 'نفي مختصر: isn\'t' },
      ],
      practice: [
        { id: 'l9q1', question: 'أكمل: We ___ students.', options: ['am', 'is', 'are', 'be'], answer: 2, explanation: 'we ⇒ are — لا am مع الجمع أبداً.' },
        { id: 'l9q2', question: 'انفي: They are here.', options: ['They isn\'t here.', 'They aren\'t here.', 'They don\'t are here.', 'They no here.'], answer: 1, explanation: 'they ⇒ aren\'t — النفي المختصر.' },
        { id: 'l9q3', question: 'اسأل: «هل أنت جاهز؟»', options: ['Is you ready?', 'Are you ready?', 'Do you ready?', 'Am you ready?'], answer: 1, explanation: 'are مع you — والأسئلة بـ are تبدأ بـ Are.' },
        { id: 'l9q4', question: 'أكمل: ___ they your friends?', options: ['Are', 'Is', 'Am', 'Do'], answer: 0, explanation: 'they ⇒ Are للسؤال.' },
        { id: 'l9q5', question: 'ترجم: «هم من القاهرة»', options: ['They is from Cairo.', 'They are from Cairo.', 'They am from Cairo.', 'They be from Cairo.'], answer: 1, explanation: 'they ⇒ are — دائماً مع الجمع.' },
        { id: 'l9q6', question: 'الاختصار لـ «is not» هو؟', options: ['don\'t', 'aren\'t', 'isn\'t', 'ans\'t'], answer: 2, explanation: 'is not ⇒ isn\'t — مثل doesn\'t/don\'t من don\'t/does منطقاً.' },
      ],
    },
    {
      id: 'l10-habits',
      order: 4,
      title: 'العادات الروتينية — المضارع البسيط الحقيقي',
      estMinutes: 12,
      objectives: [
        'التعبير عن العادات اليومية بجمل صحيحة',
        'ظروف التكرار (always/usually/sometimes/never) ومواقعها',
        'تصريف الفعل مع he/she/it (s/es)',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'متى نستخدم المضارع البسيط؟',
          body: 'للعادات والمهن والحقائق والروتين: أستيقظ، أشرب القهوة، أذاكر بعد العشاء — والجملة تتقبل ظرف تكرار في وسطها قبل الفعل دائماً.',
        },
        {
          type: 'table',
          title: 'ظروف التكرار ومواقعها في الجملة',
          head: ['الظرف', 'المعنى'],
          rows: [
            ['always', 'دائماً'],
            ['usually', 'عادةً'],
            ['sometimes', 'أحياناً'],
            ['rarely', 'نادراً'],
            ['never', 'أبداً'],
          ],
        },
        {
          type: 'rule',
          title: 'he/she/it — التصريف الإجباري',
          body: 'مع الغائب المفرد يضاف للفعل s (أو es إن انتهى بإلخ: watches/goes/does): She works، He goes، It rains — واحذره من فخ العربي: «he work» خطأ شائع.',
        },
      ],
      examples: [
        { text: 'I drink coffee every morning.', note: 'عادة يومية بـ «every»' },
        { text: 'She always studies after dinner.', note: 'always قبل الفعل' },
        { text: "He doesn't eat meat.", note: 'نفي الغائب — doesn\'t + الفعل المجرد' },
        { text: 'We usually walk to work.', note: 'usually في المنتصف' },
      ],
      practice: [
        { id: 'l10q1', question: 'أكمل: She ___ (always/study) after dinner.', options: ['study', 'studies', 'studying', 'is study'], answer: 1, explanation: 'she ⇒ الفعل + s: studies — والظرف always قبلها.' },
        { id: 'l10q2', question: 'أكمل: He ___ never late for class.', options: ['is', 'are', 'am', 'be'], answer: 0, explanation: 'he ⇒ is — والظرف never قبل الفعل المساعد هو الصحيح هنا (He is never late).' },
        { id: 'l10q3', question: 'اختر الترتيب الصحيح للجملة:', options: ['I always drink coffee in the morning.', 'Always I drink coffee morning.', 'I drink always coffee in morning.', 'Coffee always I drink morning.'], answer: 0, explanation: 'الظرف في المنتصف قبل الفعل، والجملة: فاعل + ظرف + فعل + مفعول.' },
        { id: 'l10q4', question: '«أنا لا أشرب القهوة أبداً» بالإنجليزية', options: ['I drink coffee never.', 'Never my coffee drink.', 'I never drink coffee.', 'I don\'t no drink coffee.'], answer: 2, explanation: 'never يكفي للنفي — لا يحتاج don\'t معه.' },
        { id: 'l10q5', question: 'أكمل: They ___ in Alexandria.', options: ['lives', 'live', 'liveing', 'are lives'], answer: 1, explanation: 'they ⇒ الفعل كما هو دون s.' },
        { id: 'l10q6', question: 'مع he/she/it في المضارع البسيط نضيف للفعل؟', options: ['ed', 'ing', 's / es', 'nothing'], answer: 2, explanation: 's/es مع الغائب المفرد — works/goes/watches.' },
      ],
    },
    {
      id: 'l11-mine',
      order: 5,
      title: 'مملكتك الخاصة — ضمائر الملكية و This is / These are',
      estMinutes: 10,
      objectives: [
        'صيغ الملكية: my / your / his / her / our / their / its',
        'This is للمفرد و These are للجمع',
        'سؤال الملكية وتطرقه مع aren\'t / isn\'t',
      ],
      blocks: [
        {
          type: 'table',
          title: 'ضمائر الملكية — تعلمها مرة واحدة للأبد',
          head: ['الفاعل', 'ملكيته'],
          rows: [
            ['I', 'my'], ['you', 'your'], ['he', 'his'], ['she', 'her'],
            ['it', 'its'], ['we', 'our'], ['they', 'their'],
          ],
        },
        {
          type: 'rule',
          title: 'This is مقابل These are',
          body: 'المفرد: «This is my phone». الجمع: «These are their books» — لاحظ: أداة الجمع These يصحبها are/our/wrong الفعل، كما أن This يصحبها الواحد دوماً.',
        },
        {
          type: 'tip',
          title: 'فخ it/its/it\'s',
          body: 'its = ملكية الشيء (The cat ate its food). it\'s = اختصار it is (It\'s late — it is late). العلامة الفارقة هي الفاصلة apostrophe.',
        },
      ],
      examples: [
        { text: 'This is my phone.', note: 'a monobook — this is + اسم مفرد' },
        { text: 'These are their books.', note: 'these are + جمع' },
        { text: 'Is this your car?', note: 'سؤال الملكية: Is this + your + اسم' },
        { text: "It's her bag, not mine.", note: 'my/your/her — الملكية قبل الاسم مباشرة' },
      ],
      practice: [
        { id: 'l11q1', question: 'أكمل: This is ___ book. (we)', options: ['my', 'our', 'their', 'your'], answer: 1, explanation: 'we ⇒ our — ملكيتنا نحن.' },
        { id: 'l11q2', question: 'انفي: This is my bag.', options: ['This aren\'t my bag.', 'This isn\'t my bag.', 'These isn\'t my bag.', 'This not my bag.'], answer: 1, explanation: 'this ⇒ isn\'t — النفي المختصر للمفرد.' },
        { id: 'l11q3', question: 'ترجم: «هذه كتبهم»', options: ['This is their books.', 'These are their books.', 'These is their books.', 'This are their books.'], answer: 1, explanation: 'جمع الكتب ⇒ these are + their.' },
        { id: 'l11q4', question: 'ملكية «she» (الغائب المؤنث)؟', options: ['his', 'her', 'its', 'their'], answer: 1, explanation: 'she ⇒ her — مثل he ⇒ his.' },
        { id: 'l11q5', question: 'اسأل: «هل هذه سيارتك؟»', options: ['Are this your car?', 'Is this your car?', 'Do this your car?', 'This is your car?'], answer: 1, explanation: 'this مفرد ⇒ is — والسؤال يبدأ بـ Is.' },
        { id: 'l11q6', question: '«Her bag is new» تعني؟', options: ['حقيبته جديدة.', 'حقيبتها جديدة.', 'حقيبتك جديدة.', 'حقيبتنا جديدة.'], answer: 1, explanation: 'her = «ها» للغائبة — مثل his = «ه» للمذكر.' },
      ],
    },
    {
      id: 'l12-cafe',
      order: 6,
      title: 'حوار المقهى — من الدخول إلى الدفع بثقة',
      estMinutes: 12,
      objectives: [
        'طلب شيء في مقهى بالإنجليزية بأدب',
        'فهم ردود النادل الأساسية والتفاعل معها',
        'إتمام مشهد كامل: دخول، طلب، دفع، مغادرة',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'كيف تستخدم هذا الدرس',
          body: 'العب الأدوار بصوت عالٍ: أولاً بوصفك الزبون، ثم بوصفك النادل. ثم استمع للحوار ثم مثّله كاملاً مع صديق. الهدف أن تصبح الجملة حركة تلقائية لا عملية ذهنية.',
        },
        {
          type: 'table',
          title: 'مفردات المقهى الذهبي',
          head: ['الإنجليزية', 'العربية'],
          rows: [
            ['A coffee, please.', 'قهوة من فضلك'],
            ['Anything else?', 'أي شيء آخر؟'],
            ['A sandwich / a cake', 'ساندويتش / كعكة'],
            ['How much is it?', 'بكم هذه؟'],
            ['That\'s 60 pounds.', 'المجموع ٦٠ جنيهاً'],
            ['You\'re welcome.', 'على الرحب والسعة'],
          ],
        },
      ],
      examples: [
        { text: 'Good morning.', note: 'تحية الدخول — صباح الخير' },
        { text: 'Hi! A coffee, please.', note: 'الطلب المهذب بـ please' },
        { text: 'Anything else?', note: 'سؤال النادل القياسي بعد طلبك' },
        { text: "Yes, a cheese sandwich, please.", note: '«نعم» + طلب آخر + please' },
        { text: "That's 60 pounds. Thank you.", note: 'السعر + الشكر' },
        { text: "You're welcome. Have a nice day.", note: 'على الرحب والسعة + طاب يومك' },
      ],
      practice: [
        { id: 'l12q1', question: 'ما أول شيء يريده الزبون؟', options: ['A tea', 'A coffee', 'A sandwich', 'A cake'], answer: 1, explanation: 'Hi! A coffee, please. — القهوة أولاً.' },
        { id: 'l12q2', question: 'هل طلب شيئاً بالإضافة للقهوة؟', options: ['لا، فقط القهوة', 'نعم، ساندويتش جبنة', 'نعم، كعكة', 'نعم، شاي'], answer: 1, explanation: 'Yes, a cheese sandwich, please.' },
        { id: 'l12q3', question: 'كم المجموع الكلي؟', options: ['20 pounds', '40 pounds', '60 pounds', '100 pounds'], answer: 2, explanation: "That's 60 pounds." },
        { id: 'l12q4', question: 'ماذا يقول النادل في الختام؟', options: ['Goodbye', 'Good night', 'Have a nice day', 'See you tomorrow'], answer: 2, explanation: 'Have a nice day = طاب يومك — تحية المغادرة الأكثر لطفاً.' },
        { id: 'l12q5', question: '«من فضلك» بالإنجليزية؟', options: ['Thank you', 'Please', 'Welcome', 'Sorry'], answer: 1, explanation: 'please — الكلمة التي تفتح كل الأبواب.' },
        { id: 'l12q6', question: '«على الرحب والسعة» بالإنجليزية؟', options: ['Thank you', 'Please', 'Good luck', "You're welcome"], answer: 3, explanation: "You're welcome = على الرحب والسعة / عفواً." },
      ],
    },
  ],
};

export const UNIT_03: Unit = {
  id: 'm2-past-future',
  order: 3,
  title: 'المحطة الثالثة — الزمن يتكلم (A2)',
  tagline: 'الماضي والمستقبل والمقارنة: تحكي ما حدث، تخطط لما سيأتي، وتختار الأفضل — وحوار رحلة ختماً',
  forLevels: 'A2',
  lessons: [
    {
      id: 'l13-past-ed',
      order: 1,
      title: 'البارحة — الماضي البسيط للأفعال المنتظمة',
      estMinutes: 11,
      objectives: [
        'تحويل الفعل المنتظم إلى الماضي بإضافة -ed',
        'إتقان قواعد الكتابة: lived / studied / stopped',
        'تمييز نطق -ed الثلاثة: /t/ و/d/ و/ɪd/',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'الماضي البسيط: فعلٌ انتهى في وقت محدد',
          body: 'الماضي البسيط يحكي فعلاً انتهى في وقت محدد: yesterday، last night، two days ago، in 2020. الأفعال المنتظمة تأخذ -ed: work ← worked. ولا نضع was/were قبل الفعل: لا «I was visit» بل «I visited».',
        },
        {
          type: 'table',
          title: 'من المضارع إلى الماضي',
          head: ['المضارع', 'الماضي'],
          rows: [
            ['work', 'worked'],
            ['live', 'lived'],
            ['study', 'studied'],
            ['stop', 'stopped'],
            ['watch', 'watched'],
          ],
        },
        {
          type: 'tip',
          title: 'قبل -ed: ثلاث قواعد كتابة',
          body: 'الفعل المنتهي بـ e يأخذ d فقط (live ← lived). والفعل المنتهي بحرف ساكن + y يقلبها إلى i (study ← studied). والمقطع القصير المشدد يضاعف الحرف الأخير (stop ← stopped).',
        },
        {
          type: 'tip',
          title: 'نطق -ed: ثلاثة أصوات لا صوت واحد',
          body: '/t/ بعد الأصوات المهموسة: worked, watched, stopped. /d/ بعد الأصوات المجهورة والعلل: lived, played, opened. /ɪd/ بعد t أو d فقط: visited, wanted, needed. لا تنطق -ed مقطعين في كل مرة.',
        },
      ],
      examples: [
        { text: 'I visited my uncle last Friday.', note: 'visited — /ɪd/ لأن الفعل ينتهي بـ t' },
        { text: 'She studied English for two hours.', note: 'studied — /d/ بعد صوت علة' },
        { text: 'We watched a film last night.', note: 'watched — /t/ بعد ch' },
        { text: 'They stopped at the station.', note: 'stopped — /t/ والحرف الأخير تضاعف' },
        { text: 'He lived in Cairo in 2020.', note: 'lived — /d/ وe موجودة أصلاً' },
        { text: 'I wanted to call you.', note: 'wanted — /ɪd/ لأن الفعل ينتهي بـ t' },
      ],
      practice: [
        { id: 'l13q1', question: 'ما ماضي الفعل work؟', options: ['workd', 'worked', 'workied', 'working'], answer: 1, explanation: 'work فعل منتظم: نضيف -ed مباشرة ← worked.' },
        { id: 'l13q2', question: 'ما ماضي الفعل study؟', options: ['studyed', 'studied', 'studed', 'study'], answer: 1, explanation: 'study ينتهي بساكن + y: نقلب y إلى i ثم نضيف ed ← studied.' },
        { id: 'l13q3', question: 'ما ماضي الفعل stop؟', options: ['stoped', 'stopped', 'stopt', 'stopping'], answer: 1, explanation: 'stop مقطع قصير مشدد: نضاعف p ثم نضيف ed ← stopped.' },
        { id: 'l13q4', question: 'أي كلمة ينتهي ماضيها بالصوت /ɪd/؟', options: ['worked', 'watched', 'visited', 'lived'], answer: 2, explanation: 'visited تنتهي بـ t، فتُنطق -ed مقطعاً كاملاً /ɪd/. أما worked وwatched فـ/t/ وlived فـ/d/.' },
        { id: 'l13q5', question: 'أي جملة صحيحة؟', options: ['I did visited my aunt yesterday.', 'I was visit my aunt yesterday.', 'I visited my aunt yesterday.', 'I visit my aunt yesterday.'], answer: 2, explanation: 'الماضي المنتظم لا يحتاج did ولا was: I visited. did تأتي مع الفعل المجرد في النفي والسؤال فقط.' },
        { id: 'l13q6', question: 'أكمل: They ___ TV last night.', options: ['watch', 'watched', 'watching', 'watches'], answer: 1, explanation: 'last night زمن ماضٍ محدد ← watched.' },
      ],
    },
    {
      id: 'l14-irregular',
      order: 2,
      title: 'ذهبتُ ورأيتُ وأكلتُ — الأفعال الشاذة',
      estMinutes: 11,
      objectives: [
        'حفظ أشهر الأفعال الشاذة في الماضي',
        'بناء النفي بـ didn\'t + الفعل المجرد',
        'تجنب فخ «I didn\'t went»',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'الشاذ لا يأخذ -ed — يتغير كاملاً',
          body: 'كثير من أفعال الإنجليزية الأكثر استخداماً شاذة: go ← went، see ← saw، eat ← ate. لا نضيف -ed لها. وفي النفي نستخدم didn\'t + الفعل المجرد: «I didn\'t go» وليس «I didn\'t went».',
        },
        {
          type: 'table',
          title: 'أفعال لا بد من حفظها',
          head: ['المضارع', 'الماضي'],
          rows: [
            ['go', 'went'],
            ['see', 'saw'],
            ['eat', 'ate'],
            ['have', 'had'],
            ['make', 'made'],
            ['come', 'came'],
            ['take', 'took'],
            ['buy', 'bought'],
          ],
        },
        {
          type: 'tip',
          title: 'بعد didn\'t يعود الفعل إلى أصله',
          body: 'didn\'t تحمل زمن الماضي بالفعل، لذا الفعل بعدها يبقى مجرداً: «She didn\'t come» لا «She didn\'t came». الخطأ نفسه في السؤال: «Did you see?» لا «Did you saw?».',
        },
      ],
      examples: [
        { text: 'I went to the market yesterday.', note: 'went = ماضي go' },
        { text: 'She saw her friend at the café.', note: 'saw = ماضي see' },
        { text: 'We ate fish for dinner.', note: 'ate = ماضي eat' },
        { text: 'He had a busy day.', note: 'had = ماضي have' },
        { text: 'They made a big cake.', note: 'made = ماضي make' },
        { text: "I didn't buy anything.", note: 'بعد didn\'t: buy مجردة' },
      ],
      practice: [
        { id: 'l14q1', question: 'ما ماضي الفعل go؟', options: ['goed', 'went', 'gone', 'going'], answer: 1, explanation: 'go شاذ: ماضيه went، وgone هي التصريف الثالث.' },
        { id: 'l14q2', question: 'ما ماضي الفعل see؟', options: ['seed', 'saw', 'seen', 'sawed'], answer: 1, explanation: 'see ← saw ← seen. الماضي البسيط هو saw.' },
        { id: 'l14q3', question: 'أكمل: I didn\'t ___ to school yesterday.', options: ['went', 'go', 'gone', 'going'], answer: 1, explanation: 'بعد didn\'t يأتي الفعل المجرد: didn\'t go.' },
        { id: 'l14q4', question: 'أكمل: She ___ a great time in Alexandria.', options: ['have', 'has', 'had', 'having'], answer: 2, explanation: 'الجملة في الماضي ← had (ماضي have).' },
        { id: 'l14q5', question: 'أي جملة نفي صحيحة؟', options: ["We didn't saw the film.", "We didn't see the film.", "We don't saw the film.", 'We not saw the film.'], answer: 1, explanation: 'didn\'t + see (الفعل المجرد) — لا saw بعد didn\'t.' },
        { id: 'l14q6', question: 'أكمل: He ___ a mistake in the exam.', options: ['make', 'made', 'makes', 'making'], answer: 1, explanation: 'الحدث انتهى في الماضي ← made (ماضي make).' },
      ],
    },
    {
      id: 'l15-did',
      order: 3,
      title: 'هل فعلتَ؟ — أسئلة الماضي بـ Did',
      estMinutes: 10,
      objectives: [
        'صياغة سؤال نعم/لا في الماضي',
        'صياغة أسئلة wh بالماضي',
        'الرد المختصر بـ did / didn\'t',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'السؤال في الماضي: Did + الفاعل + الفعل المجرد',
          body: 'نبدأ بـ Did ثم الفاعل ثم الفعل المجرد: «Did you visit Luxor?». الزمن كله في Did، فلا نعيده في الفعل. الرد المختصر: «Yes, I did» أو «No, I didn\'t».',
        },
        {
          type: 'table',
          title: 'أسئلة وردود جاهزة',
          head: ['السؤال', 'الرد'],
          rows: [
            ['Did you visit Luxor?', "Yes, I did. / No, I didn't."],
            ['Where did you stay?', 'We stayed in a small hotel.'],
            ['What did you eat?', 'I ate fish and rice.'],
            ['When did she arrive?', 'She arrived at nine.'],
          ],
        },
        {
          type: 'tip',
          title: 'الفخ: Did you saw?',
          body: 'بعد Did يبقى الفعل مجرداً دائماً: «Did you see him?» لا «Did you saw him?». وكذلك في السؤال بـ wh: «Where did you go?» لا «Where did you went?».',
        },
      ],
      examples: [
        { text: 'Did you go to Luxor last week?', note: 'Did + you + go' },
        { text: 'Yes, I did. It was wonderful.', note: 'رد مختصر بالمساعد did' },
        { text: 'Where did you stay?', note: 'wh + did + فاعل + فعل مجرد' },
        { text: 'We stayed in a small hotel.', note: 'الرد في الماضي: stayed' },
        { text: 'What did you eat there?', note: 'سؤال عن الطعام في الماضي' },
        { text: 'I ate fish and rice.', note: 'ate ماضي eat — شاذ' },
      ],
      practice: [
        { id: 'l15q1', question: 'أكمل: Did you ___ the museum?', options: ['visited', 'visit', 'visiting', 'visits'], answer: 1, explanation: 'بعد Did يأتي الفعل المجرد: Did you visit…؟' },
        { id: 'l15q2', question: 'أي سؤال صحيح؟', options: ['Did she called you?', 'Did she call you?', 'Did she calls you?', 'Does she called you?'], answer: 1, explanation: 'Did + الفاعل + الفعل المجرد: Did she call you?' },
        { id: 'l15q3', question: 'ما الرد الصحيح على: Did they arrive?', options: ['Yes, they are.', 'Yes, they did.', 'Yes, they do.', 'Yes, they arrived did.'], answer: 1, explanation: 'الرد المختصر يستخدم المساعد نفسه: Yes, they did.' },
        { id: 'l15q4', question: 'أكمل: Where did you ___ last weekend?', options: ['went', 'go', 'going', 'gone'], answer: 1, explanation: 'بعد did: الفعل المجرد go، حتى مع where.' },
        { id: 'l15q5', question: 'أي سؤال صحيح؟', options: ['Did you saw him?', 'Did you see him?', 'Did you seen him?', 'Do you saw him?'], answer: 1, explanation: 'Did + see — لا saw ولا seen بعد Did.' },
        { id: 'l15q6', question: 'أكمل: When ___ you start learning English?', options: ['do', 'did', 'are', 'was'], answer: 1, explanation: 'start فعل في الماضي (بدأت سابقاً) ← When did you start…?' },
      ],
    },
    {
      id: 'l16-future',
      order: 4,
      title: 'الغد — will أم going to؟',
      estMinutes: 11,
      objectives: [
        'الفرق بين will وbe going to',
        'التحدث عن الخطط والوعود والتوقعات',
        'تجنب فخ «I will going»',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'طريقتان للمستقبل — ولكلٍّ وظيفتها',
          body: 'will + الفعل المجرد: للقرار اللحظي، الوعد، والتوقع. be going to + الفعل المجرد: للخطة المسبقة أو الدليل المرئي. لا نقول «I will going»: إما «I will go» أو «I am going to go».',
        },
        {
          type: 'table',
          title: 'will أم going to؟',
          head: ['الموقف', 'الجملة'],
          rows: [
            ['وعد', "I'll help you."],
            ['خطة مسبقة', "I'm going to study tonight."],
            ['توقع/حقيقة مستقبلية', 'She will be 20 next year.'],
            ['دليل مرئي الآن', "Look! It's going to rain."],
          ],
        },
        {
          type: 'tip',
          title: 'لا تجمع will مع going',
          body: 'will لا تتبعها to: «I will help you» لا «I will to help». وgoing to تسبقها am/is/are: «She is going to travel». الجمع بينهما: «I will going» خطأ مزدوج.',
        },
      ],
      examples: [
        { text: "I'm going to visit my grandmother tomorrow.", note: 'خطة مسبقة ← going to' },
        { text: "Don't worry — I'll help you.", note: 'وعد لحظي ← will' },
        { text: "She's going to start a new job next month.", note: 'خطة مرتبة ← going to' },
        { text: "It's going to rain; look at the sky!", note: 'دليل مرئي ← going to' },
        { text: "I won't forget your birthday.", note: "won't = will not" },
        { text: 'Will you come to the party?', note: 'عرض/سؤال عن المستقبل بـ will' },
      ],
      practice: [
        { id: 'l16q1', question: 'أكمل: I ___ visit my grandmother tomorrow. (خطة مسبقة)', options: ['will', 'am going to', 'going to', 'will to'], answer: 1, explanation: 'الخطة المسبقة تأخذ am/is/are + going to + فعل مجرد.' },
        { id: 'l16q2', question: 'أكمل: Don\'t worry — I ___ help you. (وعد)', options: ['am going to', 'will', 'will to', 'going'], answer: 1, explanation: 'الوعد اللحظي يأخذ will + الفعل المجرد.' },
        { id: 'l16q3', question: 'أي جملة صحيحة؟', options: ['I will going to Cairo.', 'I am going to Cairo.', 'I will to Cairo.', 'I am go to Cairo.'], answer: 1, explanation: 'إما I will go to Cairo أو I am going to Cairo — لا نجمع will مع going.' },
        { id: 'l16q4', question: 'أكمل: Look at those clouds! It ___ rain.', options: ['will', 'is going to', 'goes to', 'going to'], answer: 1, explanation: 'دليل مرئي أمامك الآن ← is going to rain.' },
        { id: 'l16q5', question: 'أكمل: She ___ come tomorrow. (نفي)', options: ["don't", "won't", "isn't go", "not will"], answer: 1, explanation: "نفي will هو won't: She won't come tomorrow." },
        { id: 'l16q6', question: 'أكمل: ___ you going to travel next week?', options: ['Do', 'Are', 'Did', 'Will'], answer: 1, explanation: 'going to تحتاج فعل الكينونة: Are you going to travel…؟' },
      ],
    },
    {
      id: 'l17-compare',
      order: 5,
      title: 'أفضل من… — المقارنة والتفضيل',
      estMinutes: 11,
      objectives: [
        'المقارنة بين شيئين بـ -er / more',
        'التفضيل بـ the -est / the most',
        'تجنب فخ «more better»',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'المقارنة بين اثنين، والتفضيل بين الجميع',
          body: 'للمقارنة بين شيئين: الصفة القصيرة + er + than (bigger than)، والصفة الطويلة more + الصفة + than (more beautiful than). للتفضيل: the + est (the biggest) أو the most + الصفة (the most beautiful).',
        },
        {
          type: 'table',
          title: 'الدرجات الثلاث',
          head: ['الصفة', 'المقارنة / التفضيل'],
          rows: [
            ['big', 'bigger / the biggest'],
            ['easy', 'easier / the easiest'],
            ['beautiful', 'more beautiful / the most beautiful'],
            ['good', 'better / the best'],
            ['bad', 'worse / the worst'],
          ],
        },
        {
          type: 'tip',
          title: 'الفخ الأشهر: more better',
          body: 'لا تجمع more مع -er: «more better» و«more easier» خطأ. الصواب «better» و«easier» وحدها. وإذا كانت الصفة طويلة، استخدم more فقط: «more interesting».',
        },
      ],
      examples: [
        { text: 'Cairo is bigger than Alexandria.', note: 'big ← bigger + than' },
        { text: 'This book is more interesting than that one.', note: 'صفة طويلة ← more + صفة' },
        { text: 'She is the best teacher in the school.', note: 'good ← better ← the best' },
        { text: 'Today is hotter than yesterday.', note: 'hot ← hotter (تضعيف الحرف)' },
        { text: 'This is the most beautiful place I have seen.', note: 'صفة طويلة ← the most' },
        { text: 'My old phone was worse than this one.', note: 'bad ← worse ← the worst' },
      ],
      practice: [
        { id: 'l17q1', question: 'ما صيغة المقارنة من big؟', options: ['bigger', 'more big', 'biggest', 'biger'], answer: 0, explanation: 'big صفة قصيرة: نضاعف g ونضيف er ← bigger.' },
        { id: 'l17q2', question: 'أكمل: Cairo is ___ than Alexandria.', options: ['big', 'bigger', 'biggest', 'more big'], answer: 1, explanation: 'مقارنة بين مدينتين ← bigger than.' },
        { id: 'l17q3', question: 'ما صيغة التفضيل من good؟', options: ['gooder', 'better', 'best', 'most good'], answer: 2, explanation: 'good ← better ← the best. التفضيل هو best.' },
        { id: 'l17q4', question: 'أي عبارة صحيحة؟', options: ['more better', 'better than', 'more good', 'most better'], answer: 1, explanation: 'better هي المقارنة الصحيحة، وتتبعها than. لا more مع better.' },
        { id: 'l17q5', question: 'ما تفضيل الصفة beautiful؟', options: ['the most beautiful', 'the beautifulest', 'more beautiful', 'most beautiful than'], answer: 0, explanation: 'صفة طويلة: the most + الصفة ← the most beautiful.' },
        { id: 'l17q6', question: 'أكمل: This book is ___ than that one.', options: ['interesting', 'more interesting', 'most interesting', 'interestinger'], answer: 1, explanation: 'interesting صفة طويلة ← more interesting than.' },
      ],
    },
    {
      id: 'l18-trip',
      order: 6,
      title: 'حوار الرحلة — «كيف كانت رحلتك؟»',
      estMinutes: 12,
      objectives: [
        'استخدام الماضي والمستقبل والمقارنة في حوار واحد',
        'فهم حوار سفر كامل والإجابة عن أسئلته',
        'التحدث عن رحلة حقيقية بثقة',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'كيف تستخدم هذا الدرس',
          body: 'في هذا الحوار ستسمع الماضي (كيف كانت الرحلة)، والمقارنة (أجمل مكان)، والمستقبل (ما ستفعله السنة القادمة). اقرأ كل جملة بصوت مسموع، ثم أجب عن الأسئلة دون النظر إلى النص.',
        },
        {
          type: 'table',
          title: 'عبارات الرحلة الجاهزة',
          head: ['العبارة', 'المعنى'],
          rows: [
            ['How was your trip?', 'كيف كانت رحلتك؟'],
            ['It was amazing!', 'كانت رائعة!'],
            ['We went by train.', 'ذهبنا بالقطار.'],
            ["Next year I'm going to visit Aswan.", 'السنة القادمة سأزور أسوان.'],
          ],
        },
      ],
      examples: [
        { text: 'Layla: Hi Omar! How was your trip to Luxor?', note: 'سؤال عن رحلة في الماضي' },
        { text: 'Omar: It was amazing! We went by train.', note: 'was + went — ماضٍ بسيط' },
        { text: 'Layla: What did you see there?', note: 'سؤال ماضٍ بـ did' },
        { text: 'Omar: We saw Karnak Temple and the Valley of the Kings.', note: 'saw = ماضي see' },
        { text: 'Layla: Which place was the most beautiful?', note: 'تفضيل: the most beautiful' },
        { text: "Omar: Karnak, I think. Next year I'm going to visit Aswan.", note: 'مستقبل بخطة مسبقة' },
        { text: 'Layla: Aswan is quieter than Luxor. You will love it.', note: 'مقارنة: quieter than' },
      ],
      practice: [
        { id: 'l18q1', question: 'إلى أين سافر عمر؟', options: ['Aswan', 'Luxor', 'Cairo', 'Alexandria'], answer: 1, explanation: 'السؤال: How was your trip to Luxor? — الرحلة كانت إلى الأقصر.' },
        { id: 'l18q2', question: 'كيف كانت الرحلة؟', options: ['سيئة', 'عادية', 'رائعة', 'متعبة'], answer: 2, explanation: 'It was amazing! = كانت رائعة.' },
        { id: 'l18q3', question: 'كيف سافر عمر؟', options: ['بالطائرة', 'بالسيارة', 'بالقطار', 'بالسفينة'], answer: 2, explanation: 'We went by train = سافرنا بالقطار.' },
        { id: 'l18q4', question: 'ماذا زار عمر في الأقصر؟', options: ['المتحف المصري', 'معبد الكرنك ووادي الملوك', 'برج القاهرة', 'مكتبة الإسكندرية'], answer: 1, explanation: 'We saw Karnak Temple and the Valley of the Kings.' },
        { id: 'l18q5', question: 'ماذا سيفعل عمر السنة القادمة؟', options: ['سيزور أسوان', 'سيسافر إلى الأقصر', 'سيشتري سيارة', 'سيتعلم الفرنسية'], answer: 0, explanation: "Next year I'm going to visit Aswan." },
        { id: 'l18q6', question: 'أي مدينة أهدأ حسب ليلى؟', options: ['الأقصر', 'القاهرة', 'أسوان', 'الإسكندرية'], answer: 2, explanation: 'Aswan is quieter than Luxor = أسوان أهدأ من الأقصر.' },
      ],
    },
  ],
};

export const UNIT_04: Unit = {
  id: 'm3-bridge-b1',
  order: 4,
  title: 'المحطة الرابعة — لغة الحياة (B1)',
  tagline: 'الخبرة، العادات الماضية، الشرط، المبني للمجهول، وجمل الوصل — ثم مقابلة عمل حقيقية ختماً',
  forLevels: 'B1',
  lessons: [
    {
      id: 'l19-perfect',
      order: 1,
      title: 'الخبرة والنتيجة — المضارع التام',
      estMinutes: 12,
      objectives: [
        'بناء المضارع التام: have/has + التصريف الثالث',
        'التحدث عن خبرات الحياة ونتائجها المستمرة',
        'التمييز بينه وبين الماضي البسيط مع الزمن المحدد',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'ماضٍ يلامس الحاضر',
          body: 'المضارع التام يربط الماضي بالحاضر: خبرة في حياتك أو نتيجة مستمرة الآن. التكوين: have/has + التصريف الثالث (visited / gone / eaten). ولا نستخدمه مع زمن ماضٍ محدد: لا «I have visited yesterday» بل «I visited yesterday».',
        },
        {
          type: 'table',
          title: 'أشهر التصريفات الثالثة',
          head: ['المصدر', 'التصريف الثالث'],
          rows: [
            ['go', 'gone'],
            ['see', 'seen'],
            ['eat', 'eaten'],
            ['write', 'written'],
            ['do', 'done'],
            ['be', 'been'],
            ['take', 'taken'],
            ['have', 'had'],
          ],
        },
        {
          type: 'tip',
          title: 'ever / never / just / already / yet',
          body: 'Have you ever been to Aswan? (خبرة في حياتك) · I have never eaten sushi. · She has just arrived. · We have already finished. · They haven\'t left yet. هذه الكلمات تسكن مع المضارع التام.',
        },
        {
          type: 'tip',
          title: 'الفخ: I have went',
          body: 'بعد have/has يأتي التصريف الثالث لا الماضي: «He has gone home» لا «He has went home». وإذا ذكرت الزمن بدقة (yesterday, last week, in 2020) انتقل إلى الماضي البسيط.',
        },
      ],
      examples: [
        { text: 'I have visited Luxor twice.', note: 'خبرة في الحياة — لا زمن محدد' },
        { text: 'She has just finished her homework.', note: 'just + المضارع التام' },
        { text: 'Have you ever been to Aswan?', note: 'ever في السؤال عن الخبرة' },
        { text: 'We have already eaten, thanks.', note: 'already في الإثبات' },
        { text: "They haven't arrived yet.", note: 'yet في النفي' },
        { text: 'I visited Luxor in 2020.', note: 'زمن محدد ⇒ ماضٍ بسيط' },
      ],
      practice: [
        { id: 'l19q1', question: 'أكمل: She ___ visited London twice.', options: ['have', 'has', 'is', 'did'], answer: 1, explanation: 'she مفرد غائب ⇒ has + التصريف الثالث.' },
        { id: 'l19q2', question: 'أكمل: Have you ever ___ to Aswan?', options: ['go', 'went', 'been', 'being'], answer: 2, explanation: 'have been to = زرت/ذهبت إلى (خبرة). لا نستخدم went بعد have.' },
        { id: 'l19q3', question: 'أي جملة صحيحة؟', options: ['I have finished my homework.', 'I have finished my homework yesterday.', 'I has finished my homework.', 'I have finish my homework.'], answer: 0, explanation: 'المضارع التام بلا زمن ماضٍ محدد، وI تأخذ have، وبعده التصريف الثالث finished.' },
        { id: 'l19q4', question: 'أكمل: We ___ already eaten.', options: ['have', 'has', 'are', 'did'], answer: 0, explanation: 'we تأخذ have، وalready علامة المضارع التام.' },
        { id: 'l19q5', question: 'صحح: He has went home.', options: ['He has go home.', 'He has gone home.', 'He have gone home.', 'He did gone home.'], answer: 1, explanation: 'التصريف الثالث لـ go هو gone، وhe تأخذ has.' },
        { id: 'l19q6', question: 'أكمل: I ___ my keys, so I can\'t open the door.', options: ['lose', 'lost', 'have lost', 'had lost'], answer: 2, explanation: 'النتيجة مستمرة الآن (لا أستطيع فتح الباب) ⇒ المضارع التام have lost.' },
      ],
    },
    {
      id: 'l20-used-to',
      order: 2,
      title: '«كنت أفعل» — used to والعادات الماضية',
      estMinutes: 11,
      objectives: [
        'التعبير عن عادة أو حالة ماضية بـ used to',
        'النفي والسؤال: didn\'t use to / Did you use to؟',
        'التمييز بين used to وbe used to + -ing',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'عادة لم تستمر',
          body: 'used to + الفعل المجرد = عادة أو حالة في الماضي لم تستمر. «I used to smoke» = كنت أدخن (ثم توقفت). النفي: didn\'t use to. السؤال: Did you use to…? ولا نقول «I used to smoking».',
        },
        {
          type: 'table',
          title: 'النمط كاملاً',
          head: ['الجملة', 'المعنى'],
          rows: [
            ['I used to live in Cairo.', 'كنت أعيش في القاهرة'],
            ['She used to walk to school.', 'كانت تمشي إلى المدرسة'],
            ["They didn't use to have a car.", 'لم يكن لديهم سيارة'],
            ['Did you use to play football?', 'هل كنت تلعب كرة القدم؟'],
          ],
        },
        {
          type: 'tip',
          title: 'لا تخلط بين الصيغتين',
          body: 'used to + فعل مجرد = كنت أفعل (ماضٍ). be used to + -ing = معتاد على (حاضر). «I used to wake up early» ≠ «I am used to waking up early». الأولى عادة انتهت، والثانية عادة مستمرة.',
        },
      ],
      examples: [
        { text: 'I used to live in Alexandria when I was a child.', note: 'حالة ماضية انتهت' },
        { text: 'She used to walk to school every day.', note: 'عادة ماضية' },
        { text: "They didn't use to have a car.", note: 'النفي: didn\'t use to' },
        { text: 'Did you use to play tennis?', note: 'السؤال: Did … use to' },
        { text: 'There used to be a small shop here.', note: 'used to be = كان يوجد' },
        { text: 'I am used to working late now.', note: 'be used to + -ing = معتاد على (حاضر)' },
      ],
      practice: [
        { id: 'l20q1', question: 'أكمل: I ___ live in Alexandria when I was a child.', options: ['used to', 'use to', 'am used to', 'used'], answer: 0, explanation: 'حالة ماضية انتهت ⇒ used to + فعل مجرد.' },
        { id: 'l20q2', question: 'أكمل: She ___ use to drink coffee.', options: ["doesn't", "didn't", "isn't", "wasn't"], answer: 1, explanation: 'نفي العادة الماضية: didn\'t use to (بلا d في use).' },
        { id: 'l20q3', question: 'أي جملة صحيحة؟', options: ['I used to playing tennis.', 'I used to play tennis.', 'I use to played tennis.', 'I am used to play tennis.'], answer: 1, explanation: 'used to + الفعل المجرد: used to play.' },
        { id: 'l20q4', question: 'ماذا تعني: I am used to working late؟', options: ['كنت أعمل متأخراً ثم توقفت', 'أنا معتاد على العمل متأخراً الآن', 'سأعمل متأخراً غداً', 'لا أحب العمل متأخراً'], answer: 1, explanation: 'be used to + -ing = معتاد على شيء في الحاضر.' },
        { id: 'l20q5', question: 'أي سؤال صحيح عن عادة ماضية؟', options: ['Did you used to have a bike?', 'Did you use to have a bike?', 'Do you used to have a bike?', 'Are you use to have a bike?'], answer: 1, explanation: 'بعد Did يعود الفعل إلى use: Did you use to…؟' },
        { id: 'l20q6', question: 'أكمل: There ___ a small shop here years ago.', options: ['used to be', 'use to be', 'used to was', 'used be'], answer: 0, explanation: 'used to + be = كان يوجد في الماضي.' },
      ],
    },
    {
      id: 'l21-conditionals',
      order: 3,
      title: 'لو… — الشرط الأول والثاني',
      estMinutes: 12,
      objectives: [
        'الشرط الأول: احتمال واقعي في المستقبل',
        'الشرط الثاني: خيال أو احتمال غير واقعي الآن',
        'تجنب will / would بعد if',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'شرطان — عالمان مختلفان',
          body: 'الشرط الأول (واقعي محتمل): If + مضارع بسيط, will + فعل مجرد. الشرط الثاني (خيالي أو غير محتمل الآن): If + ماضٍ بسيط, would + فعل مجرد. لا نضع will أو would بعد if.',
        },
        {
          type: 'table',
          title: 'الشرطان جنباً إلى جنب',
          head: ['الشرط', 'المثال'],
          rows: [
            ['الأول — احتمال', 'If it rains, we will stay home.'],
            ['الأول — احتمال', 'If you study, you will pass.'],
            ['الثاني — خيال', 'If I were rich, I would travel the world.'],
            ['الثاني — خيال', 'She would come if you asked her.'],
          ],
        },
        {
          type: 'tip',
          title: 'الفخ: If I will…',
          body: 'بعد if لا نستخدم will في الشرط الأول: «If I see him, I will tell him» لا «If I will see him». وفي الثاني لا نستخدم would بعد if: «If I had time, I would help» لا «If I would have time».',
        },
        {
          type: 'tip',
          title: 'If I were you…',
          body: 'في النصيحة نستخدم were مع كل الضمائر: «If I were you, I would apologize» = لو كنت مكانك لاعتذرت. وهي من أشهر تراكيب B1.',
        },
      ],
      examples: [
        { text: 'If it rains tomorrow, we will stay home.', note: 'شرط أول واقعي' },
        { text: 'If you study hard, you will pass the exam.', note: 'If + مضارع, will + مجرد' },
        { text: 'If I were rich, I would travel the world.', note: 'شرط ثانٍ خيالي' },
        { text: 'She would come if you asked her.', note: 'would + مجرد، if + ماضٍ' },
        { text: 'If I were you, I would apologize.', note: 'نصيحة بـ were' },
        { text: 'I will call you if I see him.', note: 'الشرط يمكن أن يأتي في النهاية' },
      ],
      practice: [
        { id: 'l21q1', question: 'أكمل: If it ___ tomorrow, we will stay home.', options: ['will rain', 'rains', 'rained', 'would rain'], answer: 1, explanation: 'الشرط الأول: if + مضارع بسيط (rains)، والنتيجة will + مجرد.' },
        { id: 'l21q2', question: 'أكمل: If I ___ rich, I would travel the world.', options: ['am', 'were', 'will be', 'be'], answer: 1, explanation: 'الشرط الثاني الخيالي: if + ماضٍ بسيط، ومع I نستخدم were في هذا التركيب.' },
        { id: 'l21q3', question: 'صحح: If I will see him, I will tell him.', options: ['If I see him, I will tell him.', 'If I would see him, I will tell him.', 'If I saw him, I will tell him.', 'If I will saw him, I tell him.'], answer: 0, explanation: 'لا will بعد if في الشرط الأول: If I see him.' },
        { id: 'l21q4', question: 'أكمل: She would come if you ___ her.', options: ['ask', 'asked', 'will ask', 'would ask'], answer: 1, explanation: 'الشرط الثاني: would + مجرد، وif + ماضٍ بسيط (asked).' },
        { id: 'l21q5', question: 'أكمل: If you study hard, you ___ pass.', options: ['would', 'will', 'are', 'did'], answer: 1, explanation: 'شرط أول واقعي ⇒ will + فعل مجرد.' },
        { id: 'l21q6', question: 'أكمل: If I were you, I ___ apologize.', options: ['will', 'would', 'am', 'do'], answer: 1, explanation: 'النصيحة بـ If I were you تأخذ would + فعل مجرد.' },
      ],
    },
    {
      id: 'l22-passive',
      order: 4,
      title: 'المبني للمجهول — عندما يهمنا الحدث',
      estMinutes: 12,
      objectives: [
        'بناء المبني للمجهول: be + التصريف الثالث',
        'استخدامه في المضارع والماضي',
        'تجنب فخ «was wrote»',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'الحدث أولاً، والفاعل إن لزم',
          body: 'المبني للمجهول: be (am/is/are/was/were) + التصريف الثالث. المضارع: English is spoken here. الماضي: The book was written in 1990. الفاعل يأتي بعد by إن كان مهماً: The letter was written by Sara.',
        },
        {
          type: 'table',
          title: 'من المعلوم إلى المجهول',
          head: ['المعلوم', 'المجهول'],
          rows: [
            ['They clean the office every day.', 'The office is cleaned every day.'],
            ['Someone built the pyramids long ago.', 'The pyramids were built long ago.'],
            ['Naguib Mahfouz wrote the novel.', 'The novel was written by Naguib Mahfouz.'],
            ['They will announce the results tomorrow.', 'The results will be announced tomorrow.'],
          ],
        },
        {
          type: 'tip',
          title: 'لا تنسَ be ولا تحوّل الفعل إلى ماضٍ',
          body: '«The book written» ناقصة — تحتاج was. و«was wrote» خطأ لأن wrote ماضٍ وليس تصريفاً ثالثاً؛ الصواب «was written». القاعدة: be يتصرف، والفعل يبقى تصريفاً ثالثاً.',
        },
      ],
      examples: [
        { text: 'English is spoken all over the world.', note: 'مضارع مجهول: is + spoken' },
        { text: 'The pyramids were built thousands of years ago.', note: 'ماضٍ مجهول: were + built' },
        { text: 'The novel was written by Naguib Mahfouz.', note: 'by + الفاعل' },
        { text: 'The office is cleaned every day.', note: 'from active: They clean…' },
        { text: 'The results will be announced tomorrow.', note: 'مستقبل مجهول: will be + announced' },
        { text: 'Arabic is spoken in Egypt.', note: 'حقيقة عامة' },
      ],
      practice: [
        { id: 'l22q1', question: 'أكمل: English ___ all over the world.', options: ['speaks', 'is spoken', 'is speaking', 'spoken'], answer: 1, explanation: 'مضارع مجهول: is + التصريف الثالث spoken.' },
        { id: 'l22q2', question: 'أكمل: The pyramids ___ thousands of years ago.', options: ['built', 'were built', 'are built', 'was built'], answer: 1, explanation: 'جمع + ماضٍ ⇒ were built.' },
        { id: 'l22q3', question: 'أكمل: The book was ___ by Naguib Mahfouz.', options: ['write', 'wrote', 'written', 'writing'], answer: 2, explanation: 'بعد was في المجهول: التصريف الثالث written.' },
        { id: 'l22q4', question: 'صحح: The letter was wrote by Sara.', options: ['The letter was write by Sara.', 'The letter was written by Sara.', 'The letter wrote by Sara.', 'The letter is wrote by Sara.'], answer: 1, explanation: 'was + written (التصريف الثالث) — لا wrote.' },
        { id: 'l22q5', question: 'حوّل: They clean the office every day.', options: ['The office cleans every day.', 'The office is cleaned every day.', 'The office was clean every day.', 'The office is cleaning every day.'], answer: 1, explanation: 'المضارع المجهول: is + cleaned.' },
        { id: 'l22q6', question: 'أكمل: The results ___ tomorrow.', options: ['will announce', 'will be announced', 'are announce', 'announced'], answer: 1, explanation: 'مستقبل مجهول: will be + announced.' },
      ],
    },
    {
      id: 'l23-relative',
      order: 5,
      title: 'الذي… — جمل الوصل',
      estMinutes: 11,
      objectives: [
        'استخدام who / which / that / where / whose',
        'وصل جملتين بجملة واصلة طبيعية',
        'تجنب تكرار الضمير بعد الواصلة',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'واصلة واحدة تختصر جملتين',
          body: 'who للأشخاص، which/that للأشياء، where للأماكن، whose للملكية. الجملة الواصلة تأتي بعد الاسم مباشرة: The man who lives next door is a doctor.',
        },
        {
          type: 'table',
          title: 'الواصلة المناسبة',
          head: ['الاسم', 'الواصلة'],
          rows: [
            ['a man / a teacher', 'who'],
            ['a book / a car', 'which / that'],
            ['a city / a café', 'where'],
            ['a girl / her bag', 'whose'],
          ],
        },
        {
          type: 'tip',
          title: 'لا تكرر الضمير',
          body: '«The book which I bought it» خطأ — الضمير it مكرر لأن which يقوم مقامه. الصواب: «The book which I bought». وكذلك لا تخلط who للأشياء أو which للأشخاص.',
        },
      ],
      examples: [
        { text: 'The woman who lives next door is a teacher.', note: 'who للشخص' },
        { text: 'This is the book which I told you about.', note: 'which للشيء' },
        { text: 'The café where we met is closed now.', note: 'where للمكان' },
        { text: 'The girl whose bag was stolen called the police.', note: 'whose للملكية' },
        { text: 'That is the house that we bought last year.', note: 'that للشيء' },
        { text: 'People who learn languages live longer.', note: 'who للجمع' },
      ],
      practice: [
        { id: 'l23q1', question: 'أكمل: The woman ___ lives next door is a teacher.', options: ['which', 'who', 'where', 'whose'], answer: 1, explanation: 'الاسم شخص (woman) ⇒ who.' },
        { id: 'l23q2', question: 'أكمل: This is the book ___ I told you about.', options: ['who', 'which', 'where', 'whose'], answer: 1, explanation: 'الاسم شيء (book) ⇒ which/that.' },
        { id: 'l23q3', question: 'أكمل: The café ___ we met is closed.', options: ['which', 'who', 'where', 'whose'], answer: 2, explanation: 'الاسم مكان (café) ⇒ where.' },
        { id: 'l23q4', question: 'صحح: The man which helped me was kind.', options: ['The man who helped me was kind.', 'The man where helped me was kind.', 'The man whose helped me was kind.', 'The man which help me was kind.'], answer: 0, explanation: 'الأشخاص يأخذون who لا which.' },
        { id: 'l23q5', question: 'أكمل: The girl ___ bag was stolen called the police.', options: ['who', 'which', 'where', 'whose'], answer: 3, explanation: 'الملكية (حقيبتها) ⇒ whose.' },
        { id: 'l23q6', question: 'صحح: The book which I bought it was expensive.', options: ['The book which I bought was expensive.', 'The book who I bought was expensive.', 'The book which I bought it expensive.', 'The book where I bought was expensive.'], answer: 0, explanation: 'لا نكرر it بعد which؛ الواصلة تقوم مقام المفعول.' },
      ],
    },
    {
      id: 'l24-interview',
      order: 6,
      title: 'حوار المقابلة — «Tell me about yourself»',
      estMinutes: 13,
      objectives: [
        'استخدام تراكيب B1 في مقابلة عمل حقيقية',
        'فهم أسئلة الخبرة والعادات والخطط',
        'الإجابة بثقة عن النفس والمهارات',
      ],
      blocks: [
        {
          type: 'rule',
          title: 'كيف تستخدم هذا الدرس',
          body: 'هذه أول مقابلة عمل في طَلَاقَة. ستسمع المضارع التام (الخبرة)، وused to (ما كنت تفعله)، والشرط (خططك)، وجمل الوصل (وصف نفسك). اقرأ الحوار بصوت مسموع، ثم أجب عن الأسئلة دون النظر.',
        },
        {
          type: 'table',
          title: 'عبارات المقابلة الجاهزة',
          head: ['السؤال', 'بداية الإجابة'],
          rows: [
            ['Tell me about yourself.', 'I have worked as a … for … years.'],
            ['What did you use to do?', 'I used to work in …'],
            ['Why do you want this job?', 'If I get this job, I will …'],
            ['What are your strengths?', 'I am good at … / I am a person who …'],
          ],
        },
      ],
      examples: [
        { text: 'Nadia: Good morning, Omar. Tell me about yourself.', note: 'افتتاحية المقابلة الكلاسيكية' },
        { text: "Omar: I have worked as a teacher for three years.", note: 'خبرة بالمضارع التام + for' },
        { text: 'Nadia: What did you use to do before that?', note: 'عادة/عمل في الماضي' },
        { text: 'Omar: I used to work in sales, but I wanted to teach.', note: 'used to + مجرد' },
        { text: 'Nadia: Why do you want this job?', note: 'سؤال الدافع' },
        { text: 'Omar: If I get this job, I will help students who need confidence.', note: 'شرط أول + جملة وصل' },
        { text: 'Nadia: Your application was accepted. Welcome to Talaqa.', note: 'مبني للمجهول' },
      ],
      practice: [
        { id: 'l24q1', question: 'كم سنة عمل عمر معلماً؟', options: ['سنتان', 'ثلاث سنوات', 'خمس سنوات', 'عشر سنوات'], answer: 1, explanation: 'I have worked as a teacher for three years.' },
        { id: 'l24q2', question: 'ماذا كان يعمل قبل التعليم؟', options: ['في المبيعات', 'في الطب', 'في الهندسة', 'في السياحة'], answer: 0, explanation: 'I used to work in sales.' },
        { id: 'l24q3', question: 'ماذا سيفعل عمر إذا حصل على الوظيفة؟', options: ['سيسافر', 'سيساعد الطلاب الذين يحتاجون الثقة', 'سيترك العمل', 'سيفتح مقهى'], answer: 1, explanation: 'If I get this job, I will help students who need confidence.' },
        { id: 'l24q4', question: 'ماذا حدث لطلب عمر في النهاية؟', options: ['رُفض', 'قُبل', 'أُجّل', 'ضاع'], answer: 1, explanation: 'Your application was accepted = قُبل طلبك (مبني للمجهول).' },
        { id: 'l24q5', question: 'أي تركيب استخدمه عمر للحديث عن خبرته؟', options: ['الماضي البسيط فقط', 'المضارع التام: have worked', 'المستقبل will', 'الأمر'], answer: 1, explanation: 'I have worked as a teacher… = مضارع تام للخبرة.' },
        { id: 'l24q6', question: 'أي جملة وصل صحيحة في الحوار؟', options: ['students which need confidence', 'students who need confidence', 'students where need confidence', 'students whose need confidence'], answer: 1, explanation: 'الأشخاص (students) يأخذون who.' },
      ],
    },
  ],
};

export const UNITS: Unit[] = [UNIT_01, UNIT_02, UNIT_03, UNIT_04];

/** مرجعية سريعة: البحث عن درس بمعرفه */
export function findLesson(id: string): { unit: Unit; lesson: Unit['lessons'][number] } | null {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return null;
}

/** كل دروس المنهاج قيد الترتيب الزمني — المحطة الأولى ثم الثانية */
export function allLessonsInOrder(): { unit: Unit; lesson: Unit['lessons'][number] }[] {
  return UNITS.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })));
}

/** توفر الدروب عبر المنهاج كله: يُفتح الدرس فقط بإتمام ما قبله — بما فيها حد المستويات */
export function curriculumAvailability(progress: Record<string, { completedAt: string; bestScore: number }>): Record<string, 'completed' | 'current' | 'locked'> {
  const state: Record<string, 'completed' | 'current' | 'locked'> = {};
  let opened = false;
  for (const { lesson } of allLessonsInOrder()) {
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

/** الدرس التالي بعد معرف درس ما — عبر المحطات كلها */
export function nextLessonAfter(id: string): { unit: Unit; lesson: Unit['lessons'][number] } | null {
  const all = allLessonsInOrder();
  const idx = all.findIndex((x) => x.lesson.id === id);
  return idx >= 0 && idx + 1 < all.length ? all[idx + 1] : null;
}
