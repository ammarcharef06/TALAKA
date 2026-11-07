/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المسار المهني: سيناريوهات المقابلات
   4 مسارات مهنية مقابلة حقيقية بالأسئلة الشائعة — المحتوى أصلي
   ومتسق مع مبادئ المشروع: الإنجليزية موضوع التعلم، والفصحى العربية للشرح.
   الألفاظ المهنية هنا لا تنتهي عند المقابلة — بل تولد بطاقات مراجعة في الردهة.
   ═══════════════════════════════════════════════════════════════ */
import type { DeckCard } from '../academy/deck';

export interface InterviewTerm {
  /** المصطلح الإنجليزي المهني */
  term: string;
  /** معناه بالعربية الفصحى */
  meaning: string;
  /** جملة إنجليزية تشبه سياقه المهني */
  example: string;
}

export interface InterviewQuestion {
  id: string;
  /** ترتيب السؤال داخل المقابلة */
  order: number;
  /** ما يقوله المحاور — بالإنجليزية */
  question: string;
  /** ما يقيسه السؤال فعلياً — بالعربية */
  intentAr: string;
  /** كلمات وعبارات مفتاحية تُحسب من إجابتك */
  keywords: string[];
  /** نموذج إجابة مهنية بالإنجليزية */
  modelAnswer: string;
  /** لمحة عربية لهذا النموذج — ليفهم الطالب وليس ليُقلّد حرفياً */
  modelAnswerAr: string;
  /** نصائح نطق وأداء بالعربية */
  tipsAr: string[];
  /** ألفاظ مهنية تتولد منها بطاقات مراجعة عند اجتياز المقابلة */
  terms: InterviewTerm[];
}

export interface InterviewScenario {
  id: 'dev' | 'sales' | 'support' | 'admin';
  order: number;
  /** الاسم بالإنجليزية */
  title: string;
  /** الاسم بالعربية */
  titleAr: string;
  /** المسمى الوظيفي بالعربية */
  roleAr: string;
  /** أسطر وصف المقابلة */
  desc: string;
  estMinutes: number;
  /** درجة النجاح المطلوبة للانتقال/توليد البطاقات */
  passScore: number;
  questions: InterviewQuestion[];
}

export const INTERVIEW_SCENARIOS: InterviewScenario[] = [
  /* ─────────── مطور برمجيات ─────────── */
  {
    id: 'dev',
    order: 1,
    title: 'Software Developer Interview',
    titleAr: 'مقابلة مطور برمجيات',
    roleAr: 'مطور برمجيات',
    desc: 'من التعريف بنفسك حتى أصعب خطأ في حياتك — الأسئلة الثمانية التي تُسأل في كل مقابلة تقنية.',
    estMinutes: 20,
    passScore: 60,
    questions: [
      {
        id: 'dev-q1',
        order: 1,
        question: 'Tell me about yourself.',
        intentAr: 'كيف تقدم «نسختك» المهنية في أقل من دقيقتين — بدقة وهوية لا بسرد سيرة كاملة.',
        keywords: ['experience', 'developer', 'front-end', 'applications', 'build', 'learn'],
        modelAnswer: "I'm a front-end developer with three years of experience building web applications. I specialise in TypeScript and React, and I care deeply about clean, tested code. In my last role I led the checkout revamp and cut load time by forty percent. I learn fast, I ship carefully, and I'm looking for a team where craft really matters.",
        modelAnswerAr: 'اسم + تخصص + سنوات خبرة ← ما تفعله اليوم ← إنجاز واحد محدد (40% تحسين مثلاً) ← ما تبحث عنه. نموذج يعطيك 80% من المقدمات.',
        tipsAr: ['اربط شخصيتك بالدور — لا تعدد الهوايات.', 'إن لم يكن لديك إنجاز رقم، استخدم أي نتيجة محددة (أطلقت ميزة، أصلحت خطأ…).'],
        terms: [
          { term: 'tech stack', meaning: 'مجموعة الأدوات واللغات المستخدمة في المشروع', example: 'Our tech stack is TypeScript and React.' },
          { term: 'front-end', meaning: 'الواجهة الأمامية — ما يراه المستخدم', example: 'I build front-end interfaces that users love.' },
          { term: 'load time', meaning: 'زمن التحميل', example: 'We cut the load time by forty percent.' },
        ],
      },
      {
        id: 'dev-q2',
        order: 2,
        question: 'Tell me about a project you are proud of.',
        intentAr: 'هل تفهم ما تبني؟ هل تملك قراراً هندسياً حقيقياً تستطيع الدفاع عنه؟',
        keywords: ['project', 'challenge', 'team', 'shipped', 'offline', 'faster'],
        modelAnswer: "The project I'm proudest of is a course dashboard my team shipped for students. I owned the progress-tracking feature: I designed the data model, argued for local-first storage, and wrote every line with tests. The challenge was making it work offline, but we got there — and students finished their courses thirty percent faster.",
        modelAnswerAr: 'اختر مشروعاً واحداً فقط: المشكلة → قرارك أنت → التحدي → النتيجة. اللفظ «I owned» هو قلب الجواب.',
        tipsAr: ['لا تقل «كان مشروعاً كبيراً» — قل ماذا بنيت أنت فيه.', 'رقم واحد فقط يكفي كدح.'],
        terms: [
          { term: 'data model', meaning: 'نموذج البيانات — كيف تُخزَّن المعلومات في النظام', example: 'I designed the data model for the dashboard.' },
          { term: 'local-first', meaning: 'التخزين المحلي أولاً قبل أي خادم', example: 'We chose local-first storage for offline use.' },
          { term: 'offline-first', meaning: 'يعمل دون إنترنت أولاً', example: 'The app is offline-first by design.' },
        ],
      },
      {
        id: 'dev-q3',
        order: 3,
        question: 'Describe a difficult bug you fixed and how.',
        intentAr: 'هل تشخص بتسلسل منطقي أم تخمن وتصلح الأشياء عشوائياً؟',
        keywords: ['reproduce', 'logs', 'fixed', 'regression test', 'verified', 'test account'],
        modelAnswer: "A payment was failing for one in a hundred users, and only on mobile. I reproduced it locally with a test account, then checked the logs and found a timezone mismatch between the device and the server. I fixed the comparison, added a regression test, and verified it on three real devices. The bug never came back.",
        modelAnswerAr: 'النمط: تكاثرت الخطأ ← الفحص ← السبب الجذري ← الحل ← الاختبار الانحداري. هذا هو الجواب الأمثل تقنياً.',
        tipsAr: ['الكلمة «reproduced» وحدها تؤثر في المحاورين التقنيين.', 'اختتم دائماً بـ«لم يعد الخطأ — وتُضيفت له اختبار».'],
        terms: [
          { term: 'root cause', meaning: 'السبب الجذري الحقيقي للخطأ', example: 'We found the root cause after two hours.' },
          { term: 'reproduce', meaning: 'إعادة إنتاج الخطأ على جهازك', example: 'First, I reproduced the bug locally.' },
          { term: 'regression test', meaning: 'اختبار انحداري يمنع عودة الخطأ', example: 'I added a regression test for this case.' },
        ],
      },
      {
        id: 'dev-q4',
        order: 4,
        question: 'How do you stay up to date with technology?',
        intentAr: 'هل تكتفي بما تعرفه، أم تتعلم باستمرار وبموقف استباقي؟',
        keywords: ['read', 'learn', 'side project', 'follow', 'engineering blogs', 'ask'],
        modelAnswer: "I read one deep technical article a week, and I build side projects to force myself through unfamiliar tools. I follow two engineering blogs and a podcast on my commute, and I ask my teammates why they did things differently — that's underrated. Last year that habit is how I learned IndexedDB well enough to ship an offline vault.",
        modelAnswerAr: 'نموذج متواضع بلا ادعاء: عادة صغيرة + مشروع جانبي + سؤال الزملاء. لا تقل «أتابع كل شيء».',
        tipsAr: ['إجابة محددة واحدة أصدق من قائمة عادات عامة.', 'لا تبالغ: «أسبوعياً» أقوى من «يومياً وأنا لا أنام».'],
        terms: [
          { term: 'side project', meaning: 'مشروع جانبي للتعلم الذاتي', example: 'I built a side project to learn IndexedDB.' },
          { term: 'engineering blog', meaning: 'مدونة هندسية معمقة', example: 'I read engineering blogs every week.' },
          { term: 'unfamiliar', meaning: 'غير مألوف — تقنية لم تستخدمها من قبل', example: 'It forced me through unfamiliar tools.' },
        ],
      },
      {
        id: 'dev-q5',
        order: 5,
        question: 'Tell me about a time you disagreed with a teammate.',
        intentAr: 'هل تسكت لحفظ سلام الفريق، أم تدير الخلاف باحترام وتحصل على قرار صائب؟',
        keywords: ['disagreed', 'data', 'team', 'refactor', 'shipped', 'documented'],
        modelAnswer: "I disagreed with a teammate about rewriting a module before we understood the existing one. I said so, with data: we had a deadline and the module had zero tests. We agreed to write characterization tests first, then refactor together. It shipped on time, and we documented the new boundaries for the next person.",
        modelAnswerAr: 'تهذيب الخلاف = احترام + بيانات + حل مشترك. «with data» هي الكلمة السحرية.',
        tipsAr: ['لا تهاجم زميلك — اختلف مع الفكرة.', 'اختم بقرار الفريق لا بتقدير من كان «محق».'],
        terms: [
          { term: 'characterization test', meaning: 'اختبارات تُسجِّل السلوك الحالي قبل تعديله', example: 'We wrote characterization tests before touching it.' },
          { term: 'boundaries', meaning: 'حدود الوحدة/الموديول البرمجي', example: 'We documented the new boundaries.' },
          { term: 'compromise', meaning: 'حل وسط مقبول', example: 'We reached a reasonable compromise.' },
        ],
      },
      {
        id: 'dev-q6',
        order: 6,
        question: 'How do you handle code review feedback?',
        intentAr: 'هل ترى المراجعة هجمة شخصية — أم هدية تجعل الكود أفضل؟',
        keywords: ['feedback', 'comments', 'ask', 'better', 'push back', 'reasoning'],
        modelAnswer: "I treat review comments as free teaching. I read every one, ask questions when I don't understand, and push fixes the same day when they're right. Occasionally I'll push back — with reasoning, not ego. Most feedback makes the code better and makes me sharper.",
        modelAnswerAr: 'العمل بملاحظات المراجعة = أقرأها ← أطرح الأسئلة ← أصلح فوراً ← أرُد بمنطق عند الحاجة. هذا أقوى جواب على الإطلاق.',
        tipsAr: ['«Push back with reasoning, not ego» — جملة تحفظها على ظهر قلب.', 'لا تقل «أنا لا أحب المراجعات».'],
        terms: [
          { term: 'code review', meaning: 'مراجعة الشيفرة — تفقد زميل للتغييرات', example: 'Every PR goes through code review.' },
          { term: 'push back', meaning: 'يعترض باحترام وسبب مقنع', example: "I'll push back — with reasoning, not ego." },
          { term: 'pull request', meaning: 'طلب دمج التغييرات للفحص', example: 'I fix feedback in the same pull request.' },
        ],
      },
      {
        id: 'dev-q7',
        order: 7,
        question: 'Why do you want to join us?',
        intentAr: 'هل درست الشركة، أم تبحث عن أي فرصة بلا تمييز؟',
        keywords: ['product', 'problem', 'add value', 'shipped', 'engineering posts', 'craft'],
        modelAnswer: "I picked you deliberately. Your product solves a real problem for students, and I can already see where I add value — I shipped a feature like yours before. I read your engineering posts, and the bar here is higher than average, which is exactly what I want. I don't want a warm chair; I want a hard, honest craft table.",
        modelAnswerAr: 'محددة عن المنتج + فيم تضيف أنت ← حرفة عالية → رغبة في صعوبة لا راحة. هذا يرفعك فوراً عن المرشحين.',
        tipsAr: ['اعرف عن الشركة شيئاً حقيقياً قبل المقابلة — ولو صفحة واحدة.', '«لا أريد كرسي دافئاً» صلابة مرحب بها في الثقافة التقنية.'],
        terms: [
          { term: 'deliberately', meaning: 'عن قصد — باختيار واعٍ', example: 'I picked you deliberately.' },
          { term: 'craft', meaning: 'حرفة — دقة وإتقان', example: 'I want a hard, honest craft table.' },
          { term: 'add value', meaning: 'يضيف قيمة حقيقية', example: 'I can already see where I add value.' },
        ],
      },
      {
        id: 'dev-q8',
        order: 8,
        question: 'Where do you see yourself in five years?',
        intentAr: 'هل تخطط، أم تطفو؟ — وما علاقتك بالنمو المهني في شرك هذه فقط أو غيرها؟',
        keywords: ['senior', 'mentor', 'code', 'performance', 'lead', 'architecture'],
        modelAnswer: "In five years I want to be a senior engineer who mentors others while staying close to the code. I want to go one level deeper in one area — performance or offline architecture — and still write every review with a beginner's curiosity. If there's a lead role where I can shield juniors from chaos, I'll take it with both hands.",
        modelAnswerAr: 'طوّر نفسك + ساعد غيرك + ابقَ قرب الكود ← سطر واحد عن دور محتمل. لا تقل «مدير» قبل أن تتعلم.',
        tipsAr: ['اربط طموحك بخدمة الفريق لا فقط بترقيتك.', 'قل «أتعمق في مجال» — لا تحفظ كل شيء.'],
        terms: [
          { term: 'senior engineer', meaning: 'مهندس أول — خبرة + قيادة تقنية', example: 'I want to be a senior engineer who mentors others.' },
          { term: 'mentor', meaning: 'موجِّه بشخص أكثر خبرة', example: 'I enjoy and want to mentor juniors.' },
          { term: 'offline architecture', meaning: 'معمارية العمل بلا إنترنت', example: 'Offline architecture is my next deep dive.' },
        ],
      },
    ],
  },

  /* ─────────── مبيعات ─────────── */
  {
    id: 'sales',
    order: 2,
    title: 'Sales Representative Interview',
    titleAr: 'مقابلة مندوب مبيعات',
    roleAr: 'مندوب مبيعات',
    desc: 'من «بع لي هذا القلم» حتى إدارة الاعتراضات — أسئلة تُقاس فيها بالكلمة والموقف والنتيجة.',
    estMinutes: 20,
    passScore: 60,
    questions: [
      {
        id: 'sales-q1',
        order: 1,
        question: 'Tell me about yourself.',
        intentAr: 'هل تبدو «بائعاً بالفطرة» — أم «بائعاً يستطيع قيادة عميل نحو قرار»؟',
        keywords: ['sales', 'pipeline', 'qualify', 'exceeded', 'quota', 'consultant'],
        modelAnswer: "I've spent four years in B2B sales, mostly in software subscriptions. I love the pipeline — the hunt, the qualify, the close. Last year I exceeded my annual quota by twenty-two percent, and my renewal rate stayed above ninety. I sell like a consultant, not a closer, and I want to sell something I believe in — which is why I'm here.",
        modelAnswerAr: 'سنوات + مجال ← ما تحبه في المبيعات ← رقم نتيجة واحدة ← نمط بيع «مستشار» لا «مغلف».',
        tipsAr: ['رقم واحد فقط — «تجاوزت بنسبة 22%» أقوى من حكايات.', 'اللفظ «consultant» يرفعك فوق «بائع».'],
        terms: [
          { term: 'quota', meaning: 'الحصة البيعية — الهدف الفردي للمندوب', example: 'I exceeded my annual quota.' },
          { term: 'pipeline', meaning: 'خط سير الصفقات — من الاتصال الأول للإغلاق', example: 'I love the pipeline — hunt, qualify, close.' },
          { term: 'renewal rate', meaning: 'نسبة تجديد العقود', example: 'My renewal rate stayed above ninety.' },
        ],
      },
      {
        id: 'sales-q2',
        order: 2,
        question: 'Sell me this pen.',
        intentAr: 'هل تفهم بنية البيع (سؤال ← احتياج ← عرض ← إغلاق) — أم تقفز للسعر فوراً؟',
        keywords: ['ask', 'notes', 'paper', 'costs', 'writes', 'decision'],
        modelAnswer: "Before I tell you anything, may I ask how you take notes today? ... That's what I thought — most people lose ideas because the pen skips or dies halfway. This one writes on any paper, costs less than a coffee, and never leaks in your pocket. For a decision this small, I'd simply get two and stop thinking about it.",
        modelAnswerAr: 'لا تبيع الكاتب — اسأل أولاً (كيف تدون الآن؟)، اكشف الألم (القلق/الشاي/الجيب)، ضع الحل، أغلق بجاذبية خفيفة.',
        tipsAr: ['اسأل سؤالاً واحداً على الأقل — الصمت في المبيعات قوة.', 'اختم بإغلاق هادئ «خذ اثنين» لا «لماذا لا تشتري؟».'],
        terms: [
          { term: 'discovery question', meaning: 'سؤال الاكتشاف — يسبق أي عرض', example: 'May I ask how you take notes today?' },
          { term: 'closing', meaning: 'الإغلاق — إنهاء البيع باتفاق واضح', example: 'For a decision this small, I\'d simply get two.' },
          { term: 'pain point', meaning: 'نقطة الألم — ما يؤلم العميل اليوم', example: 'Most people lose ideas when the pen dies.' },
        ],
      },
      {
        id: 'sales-q3',
        order: 3,
        question: 'Tell me about a time you exceeded a target.',
        intentAr: 'هل تملك قصة فائزة تذكرة الشهادة الجامعية أم حكاية حظ؟',
        keywords: ['target', 'pipeline', 'closed', 'percent', 'contracts', 'discipline'],
        modelAnswer: "Two quarters ago my target was eighty new contracts. I was at fifty with four weeks left — so I rebuilt my pipeline: I dropped the weakest thirty leads and doubled calls to the top forty. I closed thirty-five of them. I finished at a hundred and fourteen — one hundred and forty-two percent of target — but the real win was the disqualification discipline.",
        modelAnswerAr: 'وصف الواقع ← التشخيص ← الإجراء الجريء (تسريح المرشحين الضعفاء) ← النتيجة بالأرقام ← الدرس الحقيقي.',
        tipsAr: ['التسريح (disqualification) أنفع من الاستبسال — حكمه يثبت خبرتك.', 'اختم بالدرس لا بالرقم.'],
        terms: [
          { term: 'qualification', meaning: 'تأهيل المرشح — هل هو جاهز للشراء؟', example: 'I doubled down on qualified leads.' },
          { term: 'disqualification', meaning: 'تسريح المرشح غير الجاد للتركيز', example: 'The disqualification discipline was the real win.' },
          { term: 'conversion rate', meaning: 'نسبة الإغلاق — من مرشح إلى عميل', example: 'My conversion rate jumped after qualifying harder.' },
        ],
      },
      {
        id: 'sales-q4',
        order: 4,
        question: 'How do you handle the objection “it’s too expensive”?',
        intentAr: 'هل تخفض السعر بغباء — أم تفهم أن «غالٍ» تعني «القيمة غير واضحة بعد»؟',
        keywords: ['price', 'compare', 'cost', 'math', 'budget', 'margin'],
        modelAnswer: "First I agree with them out loud — price is the only honest objection. Then I ask: compared to what? Compared to the cost of missing targets or the time your team loses manually. I show the math: the tool costs less than one lost deal per quarter — everything else is margin. If the budget genuinely doesn't exist, I say so and leave gracefully — a bad-fit deal is worse than a lost month.",
        modelAnswerAr: 'اعترف ← اسأل «مقارنة بماذا؟» ← اعرض الحسبة ← على ميزانية غير موجودة فعلاً — كن صادقاً واخرج بأدب.',
        tipsAr: ['«Compared to what?» — السؤال الذي يربك كل من يقول «غالي».', 'إنهاء اللقاء بأدب أرقى نضجاً من تخفيض عمياء.'],
        terms: [
          { term: 'objection', meaning: 'اعتراض العميل — مثل «غالي»', example: 'The objection “it’s too expensive” is common.' },
          { term: 'value', meaning: 'القيمة — ما يحصل عليه العميل مقابل السعر', example: 'The tool costs less than one lost deal.' },
          { term: 'ROI', meaning: 'العائد على الاستثمار', example: 'Let me show you the ROI in plain math.' },
        ],
      },
      {
        id: 'sales-q5',
        order: 5,
        question: 'Describe a lost deal and what you learned.',
        intentAr: 'هل تقرر مسؤوليتك — أم تلوم المنتج والسعر والتوقيت والظلام؟',
        keywords: ['lost', 'honest', 'learned', 'prospect', 'committee', 'procurement'],
        modelAnswer: "I lost a deal to a competitor we were better than on paper. I asked the prospect honestly why — and the answer stung: I'd talked at them for two calls and never asked about their approval process. The champion inside went cold because procurement never trusted us. I learned to sell the buying committee, not the buyer — and to ask about procurement in the first ten minutes.",
        modelAnswerAr: 'الاعتراف بالخطأ ← سؤال «لماذا خسرات الصفقة؟» ← الجرح الصادق ← الدرس (لجنة الشراء لا المشتري وحده). نموذج الإتقان.',
        tipsAr: ['صاحب المقابلة يريد أن يرى «جراحك التي التأمت» — لا حكاية حظ.', 'اللفظ «approval process» يبين نضجاً مؤسسياً متقدماً.'],
        terms: [
          { term: 'buying committee', meaning: 'لجنة الشراء — كل من له حق الاعتراض', example: "I learned to sell the buying committee, not the buyer." },
          { term: 'procurement', meaning: 'إدارة المشتريات — تصديق العقود والمطابقة', example: 'Procurement never trusted us.' },
          { term: 'champion', meaning: 'الحليف الداخلي — من يدافع عنك داخل العميل', example: 'The champion inside went cold.' },
        ],
      },
      {
        id: 'sales-q6',
        order: 6,
        question: 'How do you prioritise your leads?',
        intentAr: 'هل ترد على آخر بريد وارد — أم تفرز بالـfit والتوقيت والألم؟',
        keywords: ['lead', 'fit', 'timing', 'pain', 'trigger', 'pipeline'],
        modelAnswer: "I score every lead on three things: fit, timing and pain. Fit first — wrong industry, I disqualify immediately. Pain next — have they felt the problem recently? Timing last — is there a trigger this quarter? Every lead gets a score in the CRM, and I review it weekly. The eighty leads in my pipeline are not equal, and I don't pretend they are.",
        modelAnswerAr: 'فرز بثلاثة معايير: الملاءمة، الألم، التوقيت ← مراجعة أسبوعية ← لا تُظهر مرحلة «كل العملاء مهمون».',
        tipsAr: ['قول «لا» للمرشح الخطأ مهارة لا سلبية.', 'اللفظ «trigger» — مثل «انتهى عقدهم المنافس» — يرفع مستوى إجابتك.'],
        terms: [
          { term: 'lead scoring', meaning: 'تقييم المرشح بالأرقام', example: 'I score every lead on three things.' },
          { term: 'trigger', meaning: 'محفز الشراء — حدث يسرّع القرار', example: 'A new CFO is often a trigger.' },
          { term: 'fit', meaning: 'الملاءمة — هل العميل مناسب أصلاً؟', example: 'Fit first — wrong industry, disqualify.' },
        ],
      },
      {
        id: 'sales-q7',
        order: 7,
        question: 'Why sales — and why us?',
        intentAr: 'هل تحب «النتيجة» أم تحب الناس فقط — ولماذا تبيع بالذات لنا؟',
        keywords: ['sales', 'scoreboard', 'product', 'believe', 'discovery', 'craft'],
        modelAnswer: "I love that sales is the only role where every day has a scoreboard. And why you specifically — I use this product myself. I believe in it, which is a luxury most candidates don't have. Your team published how you run discovery calls, and I want to learn from people who respect the craft instead of just hitting quota.",
        modelAnswerAr: 'أحب أن يوم المبيعات له لوحة نتائج ← والدليل أنني مستخدم للمنتج ← واعجبني منشورك عن discovery — أريد التعلم من محترفيه.',
        tipsAr: ['استخدم المنتج لو كان متاحاً — أصدق نوع تميز في أي مقابلة.', 'قل « أحب أن يوم المبيعات لوحة نتائج» — صوتك سيتغير.'],
        terms: [
          { term: 'scoreboard', meaning: 'لوحة النتائج — مؤشر الأداء اليومي', example: 'Sales is the only role with a daily scoreboard.' },
          { term: 'discovery call', meaning: 'مكالمة الاكتشاف — الأولى مع المرشح', example: 'I respect teams who publish how they run discovery calls.' },
          { term: 'craft', meaning: 'الحرفة — إتقان المهنة', example: 'People who respect the craft, not just quota.' },
        ],
      },
      {
        id: 'sales-q8',
        order: 8,
        question: 'Where do you see yourself in five years?',
        intentAr: 'هل تريد أن تبقى بائعاً — أم تتسلق نحو قيادة الفريق؟',
        keywords: ['AE', 'enterprise', 'mentor', 'cohort', 'mastery', 'leadership'],
        modelAnswer: "In five years I want to be a top-performing AE closing enterprise deals — or, if the team needs it, the AE who mentors the next cohort. I don't want to manage people before I've mastered the craft on the ground. Mastery first, leadership second — and either way, I'd rather build something here than keep hopping.",
        modelAnswerAr: 'قائد صفقات أول ← أو مرشد الجيل القادم ← «إتقان ثم قيادة» ← «أريد بناء شيء هنا لا قفز مستمر».',
        tipsAr: ['لا تضع إدارة الناس كفرض عاجل — قد ينفر المحاور.', 'جملة «إتقان أولاً، ثم قيادة» تؤخذ عنك.'],
        terms: [
          { term: 'AE', meaning: 'مندوب مبيعات مؤسسات — Account Executive', example: 'In five years I want to be a top AE.' },
          { term: 'enterprise deals', meaning: 'صفقات المؤسسات الكبيرة', example: 'Closing enterprise deals is my next level.' },
          { term: 'cohort', meaning: 'دفعة — الجيل الجديد من المرشحين/العاملين', example: 'I would mentor the next cohort.' },
        ],
      },
    ],
  },

  /* ─────────── خدمة عملاء ─────────── */
  {
    id: 'support',
    order: 3,
    title: 'Customer Service Interview',
    titleAr: 'مقابلة خدمة عملاء',
    roleAr: 'موظف خدمة عملاء',
    desc: 'العميل غاضب منذ 5 دقائق — كيف تتصرف؟ أسئلة تُقاس فيها في الهدوء والحل والتحويل.',
    estMinutes: 20,
    passScore: 60,
    questions: [
      {
        id: 'support-q1',
        order: 1,
        question: 'Tell me about yourself.',
        intentAr: 'هل تفهم أن خدمة العملاء مهارة نضج — أم تنتظر «فرصة تصب فيها أول قدميك»؟',
        keywords: ['customer', 'support', 'calm', 'listen', 'resolve', 'CSAT'],
        modelAnswer: "I've worked in customer support for two years, mostly on technical accounts. My edge is calmness under angry customers — I listen first, I never argue, and I fix it right the first time. I resolved ninety-four percent of my tickets on first contact, and my CSAT stayed at four point eight out of five. I choose this work, I don't settle for it.",
        modelAnswerAr: 'سنوات + ما يميزك (هدوء أمام الغضب) ← رقمين (94% أول اتصال + 4.8/5) ← «أختار هذا العمل».',
        tipsAr: ['CSAT أول كلمة يطلب منك المعرفة بها — إن كنت في المجال.', 'التأكيد «أختار لا أستقر» يرفع سقف إجابتك.'],
        terms: [
          { term: 'CSAT', meaning: 'رضا العميل — Customer Satisfaction Score', example: 'My CSAT stayed at four point eight out of five.' },
          { term: 'first contact resolution', meaning: 'حل المشكلة من أول اتصال', example: 'I resolve most tickets on first contact.' },
          { term: 'ticket', meaning: 'بطاقة دعم — البلاغ العميل يُفتح عليه', example: 'I handled forty tickets a day.' },
        ],
      },
      {
        id: 'support-q2',
        order: 2,
        question: 'A customer is furious — walk me through your approach.',
        intentAr: 'هل تنخفض للنبرة، أم ترفعها — أم تحوّلها إلى بروتوكول؟',
        keywords: ['understand', 'paraphrase', 'apologize', 'fix', 'escalate', 'handoff'],
        modelAnswer: "First I let them empty the clip — no interrupting, not one word. Then I say I understand, and mean it: paraphrase the problem in my own words so they know I heard it. I apologize once, clearly, without theatre, and I move to a fix: what happened, what I can do right now, and by when. If the fix is beyond me, I escalate with a warm handoff — never a cold transfer.",
        modelAnswerAr: 'اسمع حتى النهاية ← أعد صياغة ← اعتذار مرة فقط بدون مسرح ← (حدث/ماذا أفعل/متى) ← تصعيد بالتسليم الدافئ لا النقل البارد.',
        tipsAr: ['«Empty the clip» — لا تقاطع المتذمر مهما طالت الجمل.', 'الاعتذار بلا مسرحة — كلمة «sorry» مرة واحدة فقط.'],
        terms: [
          { term: 'paraphrase', meaning: 'إعادة صياغة المشكلة للتحقق من الفهم', example: 'I paraphrase the problem to show I heard it.' },
          { term: 'escalate', meaning: 'يصعّد المشكلة لجهة أعلى', example: 'If the fix is beyond me, I escalate.' },
          { term: 'warm handoff', meaning: 'تسليم دافئ — نقل مع سياق القصة كاملة', example: 'Warm handoffs, never cold transfers.' },
        ],
      },
      {
        id: 'support-q3',
        order: 3,
        question: 'Tell me about a time you turned an unhappy customer happy.',
        intentAr: 'هل تملك حكاية تحويل حقيقية — أم مجرد كلام «أنا أحب العملاء»؟',
        keywords: ['damaged', 'cancel', 'warranty', 'replacement', 'called', 'believed'],
        modelAnswer: "A customer received a damaged laptop, was already on their third email, and was about to cancel. I called instead of writing: I let them vent, then checked the warranty, arranged a replacement within 48 hours, and called them two days after delivery. They didn't cancel — they upgraded the plan and wrote a review. The fix wasn't the refund; the fix was being believed.",
        modelAnswerAr: 'واقعة محددة (هاتف بدل إيميل) ← تنفيس ← الاستبدال خلال 48 ساعة ← اتصال شكر ← الدرس: «كن يُصدَّق، لا فقط تعويض».',
        tipsAr: ['«The fix was being believed» — جملة تبقى في ذهن المحاور.', 'اتصل ولا تكتب — بالهاتف يُرى إنسان خلف الشركة.'],
        terms: [
          { term: 'churn', meaning: 'فقدان العميل — إلغاء الاشتراك', example: "They were about to churn." },
          { term: 'replacement', meaning: 'الاستبدال — بدل التوصيل الخاطئ/المعيب', example: 'I arranged a replacement within 48 hours.' },
          { term: 'retention', meaning: 'الاحتفاظ بالعميل', example: 'The fix was making them feel believed.' },
        ],
      },
      {
        id: 'support-q4',
        order: 4,
        question: 'How do you handle a question when you don’t know the answer?',
        intentAr: 'هل تكذب على العميل، أم تقول «لا أعلم» بأثر رجعي صادق؟',
        keywords: ['know', 'check', 'playbook', 'ask', 'find', 'answer'],
        modelAnswer: "I say it plainly: 'I don't know the answer to that, and I don't want to guess with your account.' Then I check the playbook, ask the senior person on shift, or find the owner of the process. Within one working day I come back with an answer and a note in the customer's file — never silence, never a guess.",
        modelAnswerAr: 'الفورية: «لا أعرف، ولا أريد أن أخمن» ← افحص/اسأل ← عد بإجابة خلال يوم عمل ← سجل ملاحظة. لا صمت ولا تخمين.',
        tipsAr: ['اللفظ «I don\'t want to guess with your account» — أمنة مهنية حقيقية.', 'العميل يسامحك على الجهل، ولا يسامحك على الكذب.'],
        terms: [
          { term: "I don't know", meaning: 'أنا لا أعرف — إجابة مهنية مقبولة', example: "I don't want to guess with your account." },
          { term: 'playbook', meaning: 'دليل الحل الجاهز للأسئلة الشائعة', example: 'I check the playbook first.' },
          { term: 'follow up', meaning: 'يرد بإجابة لاحقة — لا يترك الطلب مفتوحاً', example: 'I follow up within one working day.' },
        ],
      },
      {
        id: 'support-q5',
        order: 5,
        question: 'Describe a stressful day and how you coped.',
        intentAr: 'تحت الضغط: هل تنهار، أم تُقسم وتطلب المساعدة وتصمد؟',
        keywords: ['outage', 'queue', 'sprints', 'colleagues', 'VIP', 'calm'],
        modelAnswer: "The day the outage took half the product down, the queue jumped from forty to four hundred. I flagged the fire-folder, took the oldest fifty while two colleagues took VIP accounts, and worked in forty-minute sprints. Three of us ate lunch at our desks. At six, the queue was cleared — I learned that calm is a system, not a personality.",
        modelAnswerAr: 'الحدث ← التقسيم حسب الأولوية (VIP) ← سباقات 40 دقيقة ← أكل على المكتب ← الدرس: الهدوء نظام وليس شخصية.',
        tipsAr: ['لفظ «queue jumped from forty to four hundred» — رقم واحد يحكي القصة.', 'اطلب المساعدة — لا بطل وحده في العاصفة.'],
        terms: [
          { term: 'outage', meaning: 'انقطاع الخدمة — توقف كلي/جزئي', example: 'The outage took half the product down.' },
          { term: 'queue', meaning: 'طابور البلاغات — الرسائل بانتظار الرد', example: 'The queue jumped from forty to four hundred.' },
          { term: 'triage', meaning: 'فرز حسب الأولوية', example: 'We triaged by customer tier and age.' },
        ],
      },
      {
        id: 'support-q6',
        order: 6,
        question: 'How do you handle the same question fifty times a day?',
        intentAr: 'هل تجيب بنفس السؤال بنفس النبرة — أم تبني أداة تكسر التكرار؟',
        keywords: ['saved-reply', 'library', 'tagged', 'system', 'resolution', 'repetition'],
        modelAnswer: "I built a saved-reply library: fifty answers, approved by the team, for the top twenty ticket types. I tagged them so the system surfaces the right one in two clicks. First-contact resolution on those types went from 60 to 85, and new agents onboard a week faster. Repetition isn't the enemy — unrecorded repetition is.",
        modelAnswerAr: 'بناء مكتبة الردود الجاهزة ← وسم ذكي ← ارتفاع الحلول من 60% لـ85% ← الدرس: «التكرار غير الموثق هو العدو».',
        tipsAr: ['اللفظ «saved-reply library» أساسي في أدوار الدعم الحديثة.', 'قدم النتيجة — لا تصف النية فقط.'],
        terms: [
          { term: 'saved replies', meaning: 'مكتبة الردود الجاهزة', example: 'I built a saved-reply library for our top tickets.' },
          { term: 'knowledge base', meaning: 'قاعدة المعرفة — المراجع الداخلية', example: 'The knowledge base answers eighty percent of setup.' },
          { term: 'onboarding', meaning: 'الالتحاق — تأهيل الموظف الجديد', example: 'New agents onboard a week faster.' },
        ],
      },
      {
        id: 'support-q7',
        order: 7,
        question: 'Why customer service — and why us?',
        intentAr: 'هل تفضل «التعامل مع الناس» وتفتح أي شركة — أم اخترت لسبب حقيقي؟',
        keywords: ['moment', 'mission', 'help', 'empathy', 'company', 'compassion'],
        modelAnswer: "I like the moment a frustrated user goes quiet and just says 'thank you.' That's the whole job for me. I picked you because your mission is helping small businesses run better, and I want first-row seats for that — plus your support team writes about empathy metrics, and I've never seen a company measure compassion before. That matters to me.",
        modelAnswerAr: 'أحب «اللحظة التي يهدأ فيها الزبون ويقول شكراً» ← اخترتكم لأن رسالتكم تساعد المشاريع الصغيرة ← وقياسكم للتعاطف موجود — نادراً وحقيقية.',
        tipsAr: ['«The moment the customer goes quiet and says thank you» — جملة لا تُنسى.', 'ابحث عن مصطلح خاص بالشركة — empathy metrics مثلاً — واذكره.'],
        terms: [
          { term: 'empathy metrics', meaning: 'مقاييس التعاطف — قياس نية العميل لا فقط السرعة', example: 'Your support team measures empathy metrics.' },
          { term: 'mission', meaning: 'الرسالة — ما تبني الشركة لأجله', example: 'Your mission is helping small businesses.' },
          { term: 'small businesses', meaning: 'المشاريع الصغيرة', example: 'Helping small businesses run better.' },
        ],
      },
      {
        id: 'support-q8',
        order: 8,
        question: 'Where do you see yourself in five years?',
        intentAr: 'هل تريد التخصص والجودة — أم الإدارة بسرعة (والجواب الصدق أفضل)؟',
        keywords: ['senior', 'quality', 'coach', 'playbooks', 'team-lead', 'craft'],
        modelAnswer: "In five years I want to be a senior support specialist who owns quality — writing the playbooks, coaching new agents, and being the calm escalation point everyone trusts. If there's a team-lead role on the way, I'll take it — but only after the craft is unquestionably mine. Manage from the ground up, not from the ceiling down.",
        modelAnswerAr: 'متخصص أول يملك الجودة ← كتابة الأدلة وتأهيل الجدد ← نقطة التصعيد الهادئة ← «القيادة من الأرض لا من السقف».',
        tipsAr: ['عبارة «senior specialist who owns quality» تشير لاتجاه لا يعني بالضرورة إدارة.', 'قلها ببطء — المسموع في المقابلات ليس الكلمات بل الثقة.'],
        terms: [
          { term: 'senior specialist', meaning: 'متخصص أول — خبرة مرجعية', example: 'I want to own quality as a senior specialist.' },
          { term: 'playbook', meaning: 'دليل الحل — خطة المواجهة الموثقة', example: 'I want to write the playbooks.' },
          { term: 'escalation point', meaning: 'نقطة التصعيد — من يُحال إليه أعقد الحالات', example: "The calm escalation point everyone trusts." },
        ],
      },
    ],
  },

  /* ─────────── وظيفة إدارية ─────────── */
  {
    id: 'admin',
    order: 4,
    title: 'Administrative Officer Interview',
    titleAr: 'مقابلة موظف إداري',
    roleAr: 'موظف إداري / تنفيذي',
    desc: 'تنظيم يوم عمل متعدد، ومواعيد نهائية متزامنة، وسرية — الأسئلة الثمانية للإدارة المكتبية.',
    estMinutes: 20,
    passScore: 60,
    questions: [
      {
        id: 'admin-q1',
        order: 1,
        question: 'Tell me about yourself.',
        intentAr: 'هل تقدم نفسك كـ«العمود الفقري الهادئ» للمكتب — أم مجرد «ناسخ ومتابعي بريد»؟',
        keywords: ['administrative', 'officer', 'calendars', 'documents', 'minutes', 'systems'],
        modelAnswer: "I've worked as an administrative officer for three years, supporting a director and two senior managers. My specialty is invisible order: calendars that never clash, documents nobody chases, and minutes everyone reads. I reduced our meeting-prep time by a third and our average response time to 1 hour. I thrive on systems, not firefighting.",
        modelAnswerAr: 'سنوات + مؤيدين ← «الترتيب الخفي» (جداول بلا تعارض، محاضر تُقرأ) ← رقمين ← «أعيش على الأنظمة لا إطفاء الحرائق».',
        tipsAr: ['لفظ «invisible order» من بين أرقى ما يُقال في الإدارة.', 'رقم واحد — لا قائمة خدمات كاملة.'],
        terms: [
          { term: 'invisible order', meaning: 'الترتيب الخفي — تشغيل سلس بلا ضجيج', example: 'My specialty is invisible order.' },
          { term: 'meeting minutes', meaning: 'محاضر الاجتماعات', example: 'Minutes that everyone reads.' },
          { term: 'operations', meaning: 'العمليات — سير العمل اليومي للمؤسسة', example: 'I support the operations team end-to-end.' },
        ],
      },
      {
        id: 'admin-q2',
        order: 2,
        question: 'How do you organize your workday?',
        intentAr: 'هل تعيش في البريد الوارد — أم تملك نظاماً أسبوعياً يسبق البريد؟',
        keywords: ['plan', 'calendar', 'priorities', 'timebox', 'list', 'review'],
        modelAnswer: "I plan the day before it starts. I check the calendar, flag three priorities in the morning, and timebox deep work before noon. Every task lands in one list — nothing lives in my head. I review my week every Friday: what was delegated, what's waiting, and what must move on Monday morning.",
        modelAnswerAr: 'قبل اليوم يخطط ← 3 أولويات صباحاً ← عميق قبل الظهر ← قائمة واحدة لا شيء في ذهن ← مراجعة أسبوعية يوم الجمعة.',
        tipsAr: ['«Timebox» لفظ مهم في الإدارة الحديثة.', 'اللا قائمة واحدة — لا تعتمد على الذاكرة.'],
        terms: [
          { term: 'timeboxing', meaning: 'حصر المهام في نوافذ زمنية محددة', example: 'I timebox deep work before noon.' },
          { term: 'deep work', meaning: 'العمل العميق — تركيز بلا مقاطعة', example: 'I protect deep work before noon.' },
          { term: 'prioritise', meaning: 'يرتب حسب الأولوية', example: 'I flag three priorities every morning.' },
        ],
      },
      {
        id: 'admin-q3',
        order: 3,
        question: 'Tell me about a time you managed multiple deadlines.',
        intentAr: 'هل تسقط المواعيد في جزء منها — أم لا تسقط منها شيئاً أصلاً؟',
        keywords: ['deliverables', 'milestones', 'director', 'delegated', 'shipped', 'week'],
        modelAnswer: "Three months ago I had three deliverables in one week: a board pack, a vendor contract, and an audit file. I broke each into milestones on Tuesday, spoke to the director about the board pack needing his review early, and delegated the contract first draft. All three shipped on time — and he said the board pack was the cleanest he'd seen that quarter.",
        modelAnswerAr: '3 مهام أسبوع واحد ← تقسيم لمراحل ← طلب مبكر لمراجعة المدير ← تفويض ← تسليم بلا تأخير ← ثناء المدير «الأنظف في الربع».',
        tipsAr: ['الاطلب من المدير مراجعة مبكرة — هذا نضج تنظيمي لا ضعف.', 'اللفظ «delegated» لا تجنب العمل — قيمة مضافة للفريق.'],
        terms: [
          { term: 'board pack', meaning: 'حزمة مجالس الإدارة — مستندات الجلسة', example: 'The board pack was clean this time.' },
          { term: 'vendor contract', meaning: 'عقد المورد', example: 'I managed the vendor contract end-to-end.' },
          { term: 'audit file', meaning: 'ملفات التدقيق المطابقة', example: 'The audit file went to the auditors on time.' },
        ],
      },
      {
        id: 'admin-q4',
        order: 4,
        question: 'Describe a complex document you had to prepare.',
        intentAr: 'هل تكتب بلا أخطاء — أم تستطيع بناء وثيقة يراجعها الشركاء بدقة؟',
        keywords: ['report', 'cross-checked', 'checklist', 'reviews', 'sign-off', 'findings'],
        modelAnswer: "I prepared the quarterly compliance report for a regulator — 40 pages, every number cross-checked against three systems. I built a checklist, marked each figure to its source, and ran two independent reviews before sign-off. Zero findings, zero queries. The regulator said it was the most complete file they had received that year.",
        modelAnswerAr: 'وثيقة 40 صفحة للجهة التنظيمية ← قائمة تحقق + كل رقم مصدر ← مراجعتان مستقلتان ← «صفر ملاحظات» ← شهادة المدقق.',
        tipsAr: ['لفظ «cross-checked» — المطابقة التبادلية — تبهر المراجعين الماليين والإداريين.', 'قلها ببطء: «zero findings».'],
        terms: [
          { term: 'compliance report', meaning: 'تقرير الامتثال — مراجع للجهة التنظيمية', example: 'I delivered the compliance report with zero findings.' },
          { term: 'cross-check', meaning: 'مراجعة تبادلية — مطابقة الأرقام من مصادر متعددة', example: 'Every figure was cross-checked against source.' },
          { term: 'sign-off', meaning: 'الاعتماد النهائي — التوقيع على الاكتمال', example: 'I ran two reviews before sign-off.' },
        ],
      },
      {
        id: 'admin-q5',
        order: 5,
        question: 'How do you handle confidential information?',
        intentAr: 'هل تكرت السرية بجدية — أم «أنا لا أتكلم عن الشغل» ولا فعل شيء؟',
        keywords: ['confidential', 'share', 'lock', 'document', 'escalate', 'manager'],
        modelAnswer: "I treat confidential data as radioactive: I don't share it in open chats, I lock my screen every time I stand up, and I confirm who really needs each document before sending it. I've never forwarded a file 'just in case' — I ask, every time. If someone pushes me for information I shouldn't share, I say no politely and escalate to my manager.",
        modelAnswerAr: 'بيانات = إشعاع ← لا تحوّل دون إذن مشبك ← اسأل دائماً ← «لا» مهذبة + تصعيد للمدير. أمن جزء من المنصب لا فضل منه.',
        tipsAr: ['قول «أنا لا أحوّل الملف حتى أتأكد» أصدق من أي وعد.', 'اللفظ «radioactive» تعبير قوي مؤثر.'],
        terms: [
          { term: 'confidential data', meaning: 'بيانات سرية — لا يجوز تداولها', example: 'Confidential data stays off open channels.' },
          { term: 'discretion', meaning: 'التحفظ — إخفاء ما يجب إخفاؤه', example: 'Discretion is non-negotiable in this role.' },
          { term: 'need-to-know', meaning: 'على أساس الحاجة للمعرفة فقط', example: 'Every document goes on a need-to-know basis.' },
        ],
      },
      {
        id: 'admin-q6',
        order: 6,
        question: 'Tell me about a time you improved a process.',
        intentAr: 'هل تكتفي بالوضع القائم — أم ترى الثغرات وتغلقها؟',
        keywords: ['expense', 'flow', 'bottleneck', 'approval', 'cycle', 'numbers'],
        modelAnswer: "Expense claims were taking twelve days from submission to payment — everyone hated it. I mapped the flow, found the bottleneck was a two-person approval chain, and convinced finance to pilot a one-click approval for amounts under 5000. The cycle dropped from twelve days to four. Nobody expected an admin to redesign finance — but the numbers spoke.",
        modelAnswerAr: 'مشكلة: 12 يوم ← رسم تدفق العمل ← عنق الزجاجة (توقيعَين) ← تجربة موافقة بنقرة واحدة للمبالغ الصغيرة ← 12 ← 4 أيام ← «الأرقام تتحدث».',
        tipsAr: ['قلها بابتسامة: «لا أحد يتوقع من إداري أن يعيد تصميم التمويل».', 'قدّم الأثر بالأرقام — لا بالنوايا.'],
        terms: [
          { term: 'bottleneck', meaning: 'عنق الزجاجة — نقطة الاختناق', example: 'The bottleneck was a two-person approval chain.' },
          { term: 'approval chain', meaning: 'سلسلة التصديق', example: 'Finance re-engineered the approval chain.' },
          { term: 'cycle time', meaning: 'زمن الدورة — من الطلب إلى الإنجاز', example: 'The cycle time dropped from twelve days to four.' },
        ],
      },
      {
        id: 'admin-q7',
        order: 7,
        question: 'Why us — and why this role?',
        intentAr: 'هل قرأت الموقع — أم «أنا أريد وظيفة فقط»؟',
        keywords: ['report', 'operations', 'thread', 'documents', 'follow-ups', 'grow'],
        modelAnswer: "I read your annual report cover to cover — twice. Your operations are growing 30 percent a year, and at that speed someone has to hold the thread: meetings, minutes, documents, follow-ups, without dropping a single one. That's me. I want to be the reason a director never says 'where is that file?' — and to grow with you as operations matures.",
        modelAnswerAr: 'قرأت التقرير السنوي مرتين ← العمليات تنمو 30% سنوياً ← «من يحمل الخيط؟» أنا ← «السبب في أن لا يسأل المدير عن ملف».',
        tipsAr: ['«من يحمل الخيط؟» — جملة صائبة لدور الإداري تماماً.', 'اذكر نمواً محدداً لو الشركة تعلنه.'],
        terms: [
          { term: 'annual report', meaning: 'التقرير السنوي للشركة', example: 'I read your annual report cover to cover.' },
          { term: 'operations', meaning: 'العمليات — سير العمل اليومي المؤسسي', example: 'Your operations are growing thirty percent.' },
          { term: 'follow-up', meaning: 'المتابعة — التأكد من تنفيذ المطلوب', example: 'Meetings, minutes, follow-ups — without dropping any.' },
        ],
      },
      {
        id: 'admin-q8',
        order: 8,
        question: 'Where do you see yourself in five years?',
        intentAr: 'هل تظل «مساعداً» — أم تملك زمام عمليات تتطور وتكتب أدواتها؟',
        keywords: ['operations', 'manager', 'coordinators', 'systems', 'inside out', 'scales'],
        modelAnswer: "In five years I want to be an operations manager running a team of three coordinators. I want to know this company inside out — its systems, its people, its bottlenecks — and to be the person who keeps the whole machine oiled as it scales. I don't want to leave before I understand what we could become.",
        modelAnswerAr: 'مدير عمليات يقود 3 منسقين ← اعرف الشركة من الداخل والخارج ← «المُحافظ على زيت المحرك» أثناء النمو.',
        tipsAr: ['اللفظ «inside out» — من الداخل والخارج — أثر قوي.', 'لا تضع مغادرة محسوبة في جدولك — عندهم أول مرة.'],
        terms: [
          { term: 'operations manager', meaning: 'مدير العمليات — يقود سير العمل اليومي', example: 'I want to run a team of three coordinators.' },
          { term: 'inside out', meaning: 'من الداخل والخارج — معرفة شاملة', example: 'I want to know this company inside out.' },
          { term: 'scalable', meaning: 'قابل للتوسع — يسير بنفس الجودة مع النمو', example: 'Keep the machine oiled as it scales.' },
        ],
      },
    ],
  },
];

/** كل الألفاظ المهنية كبطاقات SRS — تولد عند اجتياز مقابلة مسارها */
export const CAREER_DECK: DeckCard[] = INTERVIEW_SCENARIOS.flatMap((scenario) =>
  scenario.questions.flatMap((q) =>
    q.terms.map((t, i) => ({
      id: `cc-${scenario.id}-${q.order}-${i + 1}`,
      lessonId: `career-${scenario.id}`,
      front: `«${t.meaning}» — كيف تقولها بالإنجليزية؟`,
      back: t.term,
      example: t.example,
      note: `من ${scenario.titleAr} — السؤال ${q.order}`,
    }))
  )
);

export const SCENARIO_IDS = INTERVIEW_SCENARIOS.map((s) => s.id);

export function scenarioById(id: string): InterviewScenario | undefined {
  return INTERVIEW_SCENARIOS.find((s) => s.id === id);
}
