/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — المكتبة المتدرّجة: نصوص حقيقية من S0 إلى C2
   كل نص مكتوب لحمله في مستواه: مفرداته وتراكيبه وطور شرحه
   تتبع CEFR بدقة، والمسرد والشرح بالفصحى العربية.
   المحتوى أصلي — لا نصوص منقولة، لا اقتباسات من مؤلفين، ولا أسماء حقيقية.
   ═══════════════════════════════════════════════════════════════ */
import type { Cefr } from '../../types';

export interface ReaderVocab {
  /** الكلمة أو العبارة الإنجليزية كما ترد في النص */
  term: string;
  /** المعنى بالعربية الفصحى */
  meaning: string;
}

export interface ReaderQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  answer: number;
  /** لماذا هذه الإجابة — بالعربية */
  explanation: string;
}

export interface Reader {
  id: string;
  /** الترتيب داخل المستوى */
  order: number;
  level: Cefr;
  /** العنوان بالإنجليزية */
  title: string;
  /** العنوان بالعربية */
  titleAr: string;
  /** وسم الموضوع بالعربية */
  topic: string;
  /** ملخص عربي لما سيقرأه الطالب */
  summary: string;
  estMinutes: number;
  /** فقرات النص الإنجليزي */
  paragraphs: string[];
  vocab: ReaderVocab[];
  questions: ReaderQuestion[];
}

export const READER_LEVELS: Cefr[] = ['S0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** الحدود المرجعية لعدد الكلمات لكل مستوى (تُفحص آلياً في الاختبارات) */
export const WORD_BANDS: Record<Cefr, [number, number]> = {
  S0: [50, 120],
  A1: [90, 170],
  A2: [140, 240],
  B1: [200, 320],
  B2: [260, 400],
  C1: [330, 500],
  C2: [400, 600],
};

export function wordCount(reader: Reader): number {
  return reader.paragraphs.join(' ').trim().split(/\s+/).length;
}

export const READERS: Reader[] = [
  /* ─────────── S0 ─────────── */
  {
    id: 's0-hello-salma',
    order: 1,
    level: 'S0',
    title: 'Hello, I Am Salma',
    titleAr: 'مرحباً، أنا سلمى',
    topic: 'التعارف والوصف',
    summary: 'نص تعارف بسيط: الاسم، البلد، العمل، والمفضّلات — جمل قصيرة جداً بمفردات أساسية.',
    estMinutes: 4,
    paragraphs: [
      'Hello. My name is Salma. I am from Cairo, in Egypt. I am a student. I study English at Talaqa.',
      'My brother is Omar. He is a doctor. My mother is a teacher. She teaches Arabic.',
      'My favorite color is green. My favorite food is koshari. I have one cat. His name is Simba. He is very lazy.',
      'I like English. English is fun. My new friends are kind. Every day is a good day.',
    ],
    vocab: [
      { term: 'student', meaning: 'طالب / طالبة' },
      { term: 'doctor', meaning: 'طبيب / طبيبة' },
      { term: 'teacher', meaning: 'معلّم / معلمة' },
      { term: 'favorite', meaning: 'المفضّل' },
      { term: 'lazy', meaning: 'كسول' },
      { term: 'kind', meaning: 'لطيف / كريم' },
    ],
    questions: [
      { id: 'q1', question: 'Where is Salma from?', options: ['Alexandria', 'Cairo', 'London', 'Dubai'], answer: 1, explanation: 'She says: I am from Cairo, in Egypt. — من الجملة الأولى.' },
      { id: 'q2', question: 'What does her brother Omar do?', options: ['He is a teacher', 'He is a student', 'He is a doctor', 'He is a driver'], answer: 2, explanation: 'He is a doctor. — وأمها معلمة تتقابل لأن الوظيفتين مختلفتان.' },
      { id: 'q3', question: 'What is Salma’s favorite food?', options: ['bread', 'fish and chips', 'koshary', 'salad'], answer: 2, explanation: 'My favorite food is koshari. — لاحظ استخدام koshari كما هو دون تعريب.' },
      { id: 'q4', question: 'What is her cat’s name?', options: ['Simba', 'Omar', 'Max', 'Simsy'], answer: 0, explanation: 'I have one cat. His name is Simba. — الهاء في «his» يعود على القط.' },
    ],
  },
  {
    id: 's0-my-day',
    order: 2,
    level: 'S0',
    title: 'My Day',
    titleAr: 'يومي',
    topic: 'روتين الصباح والمساء',
    summary: 'روتين يومي بسيط بالزمن الحاضر البسيط — وأنت بالطبع تعمل أشياءً أكثر من هذا، لكن النص يبدأ من هنا.',
    estMinutes: 4,
    paragraphs: [
      'In the morning, I wake up at six o’clock. I wash my face and I drink tea. I eat bread and cheese for breakfast.',
      'At half past seven, I go to work. I work in a shop. I help the customers. I speak Arabic and English.',
      'In the evening, I go home. I watch TV with my family. We eat dinner at eight. At ten, I sleep.',
      'My day is simple, and I like it.',
    ],
    vocab: [
      { term: 'wake up', meaning: 'يستيقظ' },
      { term: 'wash', meaning: 'يغسل' },
      { term: 'half past', meaning: '… ونصف (الساعة)' },
      { term: 'customer', meaning: 'زبون' },
      { term: 'evening', meaning: 'المساء' },
      { term: 'sleep', meaning: 'ينام' },
    ],
    questions: [
      { id: 'q1', question: 'When does the writer wake up?', options: ['at five o’clock', 'at six o’clock', 'at seven o’clock', 'at ten o’clock'], answer: 1, explanation: 'I wake up at six o’clock. — الجملة الأولى هي الجواب.' },
      { id: 'q2', question: 'Where does the writer work?', options: ['in a school', 'in a shop', 'in a hospital', 'at home'], answer: 1, explanation: 'I work in a shop. — والواجب ليس في المدرسة ولا المستشفى.' },
      { id: 'q3', question: 'What does the writer drink for breakfast?', options: ['coffee', 'milk', 'tea', 'juice'], answer: 2, explanation: 'I drink tea. — لا يوجد في النص أي ذكر لقهوة أو حليب.' },
      { id: 'q4', question: 'At what time does the family eat dinner?', options: ['at seven', 'at eight', 'at nine', 'at ten'], answer: 1, explanation: 'We eat dinner at eight. — ثم ينام عند العاشرة.' },
    ],
  },

  /* ─────────── A1 ─────────── */
  {
    id: 'a1-at-the-market',
    order: 1,
    level: 'A1',
    title: 'At the Market',
    titleAr: 'في السوق',
    topic: 'التسوق والأسعار',
    summary: 'سارة تشتري فواكه من السوق — الأرقام، الأسعار، و«بكم؟» — كل ما تحتاجه لتفاوض بسيط بالإنجليزية.',
    estMinutes: 6,
    paragraphs: [
      'Sara goes to the market every Friday. The market in her neighborhood is big and busy. There are many shops on both sides of the street.',
      'She wants to buy apples, oranges and bananas. The apples are twenty pounds a kilo. The oranges are fifteen. She asks the seller, “How much are the bananas?” He says, “Ten pounds.”',
      'Sara buys two kilos of apples and one kilo of bananas. She gives the seller a hundred-pound note. He gives her back sixty pounds.',
      'Sara says thank you and carries the bag home. She is happy because the fruit is fresh.',
    ],
    vocab: [
      { term: 'neighborhood', meaning: 'الحيّ السكني' },
      { term: 'a kilo', meaning: 'كيلو (واحد)' },
      { term: 'How much?', meaning: 'بكم؟' },
      { term: 'note', meaning: 'ورقة نقدية' },
      { term: 'back', meaning: 'الباقي (من المال)' },
      { term: 'fresh', meaning: 'طازج' },
    ],
    questions: [
      { id: 'q1', question: 'What does Sara go to the market for?', options: ['clothes', 'fruit', 'bread', 'meat'], answer: 1, explanation: 'She buys apples, oranges and bananas — كلها فواكه.' },
      { id: 'q2', question: 'How much are the oranges a kilo?', options: ['five pounds', 'ten pounds', 'fifteen pounds', 'twenty pounds'], answer: 2, explanation: 'The oranges are fifteen. — التفاح بعشرين، والموز بعشرة.' },
      { id: 'q3', question: 'How much fruit does Sara buy?', options: ['1 kg of apples', '2 kg of apples and 1 kg of bananas', '3 kg of bananas', '2 kg of oranges'], answer: 1, explanation: 'two kilos of apples and one kilo of bananas — موز وحده موز فقط.' },
      { id: 'q4', question: 'How much money does she get back?', options: ['twenty pounds', 'thirty pounds', 'fifty pounds', 'sixty pounds'], answer: 3, explanation: 'She gave 100 and the fruit cost 40 (2×20) — فالباقي 60 جنيهاً كما في النص.' },
    ],
  },
  {
    id: 'a1-postcard-london',
    order: 2,
    level: 'A1',
    title: 'A Postcard from London',
    titleAr: 'بطاقة بريدية من لندن',
    topic: 'السفر والرحلات',
    summary: 'رسالة ليزله من لندن: السياحة، المتحف المجاني، نهر التايمز، والشوق للبيت — بنبرة دافئة وبسيطة.',
    estMinutes: 6,
    paragraphs: [
      'Dear Karim, I am writing to you from London! I am visiting my aunt here. London is very big and very green. There are a lot of parks.',
      'On my first day, I visited the science museum. The museum was free, and I stayed for three hours. On my second day, I went to the river and watched the boats. The weather was cold, but the sun was shining.',
      'I tried fish and chips in a small restaurant near the hotel. It was okay, but I prefer koshari! I also took a lot of photos of the famous clock tower.',
      'I will be back home on Sunday. I miss you and the family. See you soon, Layla.',
    ],
    vocab: [
      { term: 'aunt', meaning: 'خالة أو عمة' },
      { term: 'park', meaning: 'حديقة عامة' },
      { term: 'weather', meaning: 'الطقس' },
      { term: 'river', meaning: 'نهر' },
      { term: 'miss', meaning: 'أشتاق إلى' },
      { term: 'See you soon', meaning: 'أراك قريباً' },
    ],
    questions: [
      { id: 'q1', question: 'Who is Layla visiting in London?', options: ['her friend', 'her aunt', 'her teacher', 'her cousin'], answer: 1, explanation: 'I am visiting my aunt here. — صديقتها غير مذكورة.' },
      { id: 'q2', question: 'What was free in London?', options: ['the parks', 'the river', 'the museum', 'the fish and chips'], answer: 2, explanation: 'The museum was free. — لاحظ was للزمن الماضي مع «free».' },
      { id: 'q3', question: 'How does Layla describe the weather?', options: ['hot', 'rainy', 'windy', 'cold'], answer: 3, explanation: 'The weather was cold — لكن الشمس كانت مشرقة أيضاً.' },
      { id: 'q4', question: 'Which does Layla prefer?', options: ['fish and chips', 'koshari', 'both', 'neither'], answer: 1, explanation: 'I prefer koshari! — واضحة وصريحة.' },
      { id: 'q5', question: 'When will Layla be back home?', options: ['on Friday', 'on Saturday', 'on Sunday', 'on Monday'], answer: 2, explanation: 'I will be back home on Sunday. — «will» تدل على المستقبل.' },
    ],
  },

  /* ─────────── A2 ─────────── */
  {
    id: 'a2-lost-passport',
    order: 1,
    level: 'A2',
    title: 'The Lost Passport',
    titleAr: 'جواز السفر المفقود',
    topic: 'قصة مغامرة في المطار',
    summary: 'أحمد يفقد جواز سفره في المطار — الماضي البسيط في قصة كاملة: القلق، الحلول، والنهاية السعيدة بفارق ساعة.',
    estMinutes: 8,
    paragraphs: [
      'Ahmed was at the airport. He had to fly to Dubai for work that afternoon. He looked in his bag, but his passport was not there. He looked in his pockets, one by one. Still nothing.',
      'He felt very nervous. He went to the help desk and spoke to an officer. The officer asked, “When did you see the passport last?” Ahmed said, “I think it was in a cafe yesterday.”',
      'The officer was kind. He told Ahmed to send an email to the cafe. Ahmed sent the email and waited. After an hour, the cafe called. They had found the passport!',
      'Ahmed ran back to the cafe and got it. He was late for his flight, but he was very happy. He promised himself one thing: from now on, important documents sleep in his bag, not in his jacket.',
    ],
    vocab: [
      { term: 'passport', meaning: 'جواز السفر' },
      { term: 'pocket', meaning: 'جيب' },
      { term: 'nervous', meaning: 'متوتر / عصبي' },
      { term: 'help desk', meaning: 'مكتب المساعدة والاستعلامات' },
      { term: 'found', meaning: 'وجد (الفعل الماضي من find)' },
    ],
    questions: [
      { id: 'q1', question: 'Why was Ahmed at the airport?', options: ['to see his friend off', 'to fly to Dubai for work', 'to catch a morning flight home', 'to meet his family'], answer: 1, explanation: 'He had to fly to Dubai for work. — «had to» = كان عليه أن.' },
      { id: 'q2', question: 'What was Ahmed’s relationship to the officer at the help desk?', options: ['the officer was angry at him', 'the officer was his friend', 'the officer was kind to him', 'the officer was a tourist'], answer: 2, explanation: 'The officer was kind. — ولم يغضب منه قط.' },
      { id: 'q3', question: 'Where did Ahmed see the passport last, in his memory?', options: ['in a taxi', 'in a hotel room', 'in his bag', 'in a cafe'], answer: 3, explanation: 'I think it was in a cafe yesterday. — جملة أحمد نفسه.' },
      { id: 'q4', question: 'How did the cafe tell Ahmed about the passport?', options: ['by letter', 'by email', 'by phone call', 'by messenger'], answer: 2, explanation: 'After an hour, the cafe called. — مكالمته الهاتفية تحديداً.' },
      { id: 'q5', question: 'What did Ahmed promise himself at the end?', options: ['to buy a new bag', 'to never fly again', 'to keep important documents in his bag', 'to check his pockets more often'], answer: 2, explanation: 'important documents sleep in his bag, not in his jacket — يلخص الدرس حرفياً.' },
    ],
  },
  {
    id: 'a2-old-city-walk',
    order: 2,
    level: 'A2',
    title: 'Walking in the Old City',
    titleAr: 'المشي في المدينة القديمة',
    topic: 'التجول والمقارنات',
    summary: 'رانيا وأصدقاؤها في سوق المدينة القديمة — المقارنة والتفضيل، «going to» للمستقبل، وسرّ حبها للمحلات القديمة.',
    estMinutes: 8,
    paragraphs: [
      'Last Saturday, Rania went walking in the old city with her friends for the whole afternoon. The old city is much older than the new one, and its streets are narrower too, with shops squeezed shoulder to shoulder.',
      'They walked from one shop to another, slowly, in the warm afternoon sun. Some shops sell perfume, others sell gold, and a few sell old books. Rania thinks the bookshops are the best places in the city, because the smell of old paper is wonderful.',
      'They drank tea in a small cafe. The waiter was old and kind. He told them a long story about the city — about the merchants, the maps and the kings. Rania took many photos of the old doors and the brass lamps.',
      'Next time, she is going to bring her camera, because her phone is not good enough for the old streets.',
    ],
    vocab: [
      { term: 'older than', meaning: 'أقدم من' },
      { term: 'narrower', meaning: 'أضيق' },
      { term: 'perfume', meaning: 'عِطر' },
      { term: 'is going to', meaning: 'ستفعل / سيفعل (مستقبل مُخطط)' },
      { term: 'waiter', meaning: 'نادل (عامل المقهى)' },
      { term: 'smell', meaning: 'رائحة' },
    ],
    questions: [
      { id: 'q1', question: 'What is different about the old city’s streets?', options: ['they are wider', 'they are cleaner', 'they are narrower', 'they are shorter'], answer: 2, explanation: 'its streets are narrower too. — لاحظ صيغة المقارنة «narrower» من narrow.' },
      { id: 'q2', question: 'Why does Rania love the bookshops?', options: ['they are cheap', 'the smell of old paper is wonderful', 'they sell maps', 'the owners are librarians'], answer: 1, explanation: 'because the smell of old paper is wonderful — السبب مذكور حرفياً.' },
      { id: 'q3', question: 'What did they drink at the cafe?', options: ['coffee', 'juice', 'tea', 'water'], answer: 2, explanation: 'They drank tea in a small cafe. — الفعل drank هو الماضي من drink.' },
      { id: 'q4', question: 'What will Rania bring next time?', options: ['a guidebook', 'a camera', 'money for lunch', 'her sister'], answer: 1, explanation: 'she is going to bring her camera. — بنية «going to» للمخطط المستقبلي.' },
    ],
  },

  /* ─────────── B1 ─────────── */
  {
    id: 'b1-the-train-driver',
    order: 1,
    level: 'B1',
    title: 'The Train Driver',
    titleAr: 'سائق القطار',
    topic: 'سيرة ذاتية وقصص أمواج',
    summary: 'محمود يقود قطار القاهرة-الإسكندرية منذ 21 سنة — «used to»، المضارع التام، ويوم لا يُنسى في العاصفة.',
    estMinutes: 10,
    paragraphs: [
      'Mahmoud has driven the Cairo–Alexandria train for twenty-one years now, through every season and every hour. He started the job when he was twenty-five, and he still loves every minute of it.',
      'He used to be afraid of the speed, but now the train feels like home. He knows every station by heart, and he can tell the time by the sun when the clock in the cabin is broken.',
      'Every morning, he checks the engine before the journey. He says that driving is not about speed. It is about reading the rails, the weather and the people.',
      'Mahmoud has met thousands of passengers. Some of them are students going to university, and some are families going to the beach. He waves at the children on the platform every day — and most of them wave back.',
      'Last winter, there was a storm on the line. The train had to stop for an hour. Mahmoud walked through the carriages and told the passengers stories. When it was time to move, everybody clapped. He will never forget that day.',
      'One day, he will retire. He is going to teach his son to drive the same line. He says, “A train is a promise. It arrives.”',
    ],
    vocab: [
      { term: 'has driven', meaning: 'يقود / قاد (مضارع تام)' },
      { term: 'used to', meaning: 'كان يعتاد أن (ثم توقف)' },
      { term: 'cabin', meaning: 'كابينة السائق' },
      { term: 'passengers', meaning: 'ركاب' },
      { term: 'carriage', meaning: 'عربة القطار' },
      { term: 'a promise', meaning: 'وَعد' },
    ],
    questions: [
      { id: 'q1', question: 'How long has Mahmoud driven the train?', options: ['five years', 'eleven years', 'twenty-one years', 'thirty years'], answer: 2, explanation: 'for twenty-one years — «has driven … for» صيغة المضارع التام للمدة.' },
      { id: 'q2', question: 'How did Mahmoud feel about speed when he started?', options: ['he loved it', 'he used to be afraid of it', 'he hated the job', 'he never thought about it'], answer: 1, explanation: 'He used to be afraid of the speed — الآن لا.' },
      { id: 'q3', question: 'What does Mahmoud check every morning?', options: ['the weather only', 'the passengers’ tickets', 'the engine', 'the timetable'], answer: 2, explanation: 'he checks the engine before the journey — فحص المحرك أساسي عنده.' },
      { id: 'q4', question: 'What happened during the storm last winter?', options: ['the train crashed', 'the train stopped and he told stories', 'the passengers got angry', 'the train went faster'], answer: 1, explanation: 'The train had to stop… he told the passengers stories… everybody clapped.' },
      { id: 'q5', question: 'What does Mahmoud want to do when he retires?', options: ['open a café', 'travel the world', 'teach his son the same line', 'write a book'], answer: 2, explanation: 'He is going to teach his son to drive the same line.' },
    ],
  },
  {
    id: 'b1-learning-online',
    order: 2,
    level: 'B1',
    title: 'Learning English Online — What Actually Works',
    titleAr: 'تعلّم الإنجليزية عبر الإنترنت — ما ينجح فعلاً',
    topic: 'كيف يتعلم الدماغ',
    summary: 'لماذا «شاهدنا آلاف الفيديوهات» لا تكفي؟ بحث واضح: التدرّب يضيف ما لا يضيفه المشاهدة — مع قصة منى الممرضة.',
    estMinutes: 9,
    paragraphs: [
      'Thousands of people say the same thing: “I have watched English videos for years, but I still cannot actually speak.” Watching is not the same as speaking.',
      'Research is clear about one thing above all others: you improve what you practise. If you practise reading, you improve reading. If you want to speak, you must speak — even to yourself, even badly.',
      'Thirty minutes a day, every day, beats three hours on Friday. Your brain needs the repetition, not the drama. Choose one small thing — one lesson, ten new words, two minutes of shadowing — and do it daily.',
      'Mona, a nurse from Mansoura, tried this for exactly six months. She spent ten minutes before sleep repeating the sentences she heard on her commute. She never studied grammar. When she met an English speaker at the hospital, she spoke for ten minutes without stopping — and could not believe her own voice.',
      'Finally, stop looking for the perfect app. There is no app that can make you fluent while you are asleep. Apps are tools; the work is yours. Pick a clear goal, test yourself often, and forgive yourself when you fail. Fluency is a habit, not an event.',
    ],
    vocab: [
      { term: 'fluent', meaning: 'طليق (في اللغة)' },
      { term: 'shadowing', meaning: 'المحاكاة — تكرار الكلام فور سماعه' },
      { term: 'commute', meaning: 'رحلة الذهاب اليومية للعمل' },
      { term: 'goal', meaning: 'هدف' },
      { term: 'repetition', meaning: 'التكرار' },
      { term: 'tool', meaning: 'أداة' },
    ],
    questions: [
      { id: 'q1', question: 'Why do many people fail to speak English despite watching for years?', options: ['they lack intelligence', 'watching is not the same as speaking', 'the videos are too easy', 'apps are too expensive'], answer: 1, explanation: 'Watching is not the same as speaking — الجملة الحاسمة في النص.' },
      { id: 'q2', question: 'What does research say about improving a skill?', options: ['you improve at what you study', 'you improve at what you read about', 'you improve what you practise', 'you improve what you buy'], answer: 2, explanation: 'you improve what you practise — نظرية النص كله ترتكز على هذه الجملة.' },
      { id: 'q3', question: 'Why is thirty minutes daily better than three hours on Friday?', options: ['because Friday is busy', 'because the brain needs repetition', 'because apps give discounts', 'because teachers are unavailable'], answer: 1, explanation: 'Your brain needs the repetition, not the drama.' },
      { id: 'q4', question: 'What is “shadowing” as described in the text?', options: ['reading shadowed copies of books', 'repeating sentences right after hearing them', 'writing in a dark room', 'listening to grammar courses'], answer: 1, explanation: 'repeating the sentences she heard on her commute — تعريف عملي من تطبيق الكلمة.' },
      { id: 'q5', question: 'What is the text’s final advice?', options: ['buy a better app', 'wait for the perfect course', 'fluency is a habit, not an event', 'never forgive yourself after failure'], answer: 2, explanation: 'Fluency is a habit, not an event — خاتمة النص ولبه.' },
    ],
  },

  /* ─────────── B2 ─────────── */
  {
    id: 'b2-the-last-lighthouse',
    order: 1,
    level: 'B2',
    title: 'The Last Lighthouse',
    titleAr: 'آخر منارة',
    topic: 'قصة تاريخية على جزيرة فيلة',
    summary: 'حارس منارة في الإسكندرية القديمة يواجه الاستغناء عنه — قصة عن الضمير والمسؤولية، بمبني للمجهول وشروط كاملة.',
    estMinutes: 12,
    paragraphs: [
      'The great lighthouse on Pharos Island was built in the time of the early Ptolemies, around the third century before Christ, and for many centuries it was considered one of the seven wonders of the ancient world. Although earthquakes destroyed it long ago, its story still survives in books.',
      'A young keeper named Yusuf was sent there to keep the lamp burning each night. He had never seen the sea before, and he thought the job would be simple. Within a week, he understood why only the most patient men were chosen for it. The first night he climbed the stairs, one step at a time, counting them aloud for courage.',
      'If the light had failed even once, a ship would have lost its way. Yusuf checked the wick, the oil and the glass every single evening, without exception. He learned the smell of the oil, the heat of the lamp, the exact minute when the glass turned golden. The locals, who had sailed those waters for generations, told him the light was not a lamp at all — it was a promise.',
      'When the government announced that it would replace him with an automatic machine, Yusuf argued that a machine could not choose to stay. In the end, the machine arrived anyway, humming with perfect punctuality and no tenderness, and Yusuf was reassigned to the archive.',
      'Some promises, he decided, are kept in silence. Whether anything is truly kept is, of course, a question for the future — one that sailors still argue about at the harbour when the wind shifts.',
    ],
    vocab: [
      { term: 'lighthouse', meaning: 'منارة' },
      { term: 'keeper', meaning: 'حارس المنارة' },
      { term: 'wick', meaning: 'فتيل' },
      { term: 'generation', meaning: 'جيل' },
      { term: 'automatic', meaning: 'آلي / أوتوماتيكي' },
      { term: 'reassigned', meaning: 'نُقل في العمل إلى مكان آخر' },
    ],
    questions: [
      { id: 'q1', question: 'Why was the Pharos lighthouse important in the ancient world?', options: ['it was the tallest building', 'it was considered a wonder', 'it had a golden dome', 'it was a royal palace'], answer: 1, explanation: 'it was considered one of the wonders of the ancient world — خبر تاريخي يورده النص.' },
      { id: 'q2', question: 'What kind of man was sent to keep the lamp?', options: ['only strong men', 'only experienced sailors', 'only patient men', 'only rich men'], answer: 2, explanation: 'why only the most patient men were chosen for it — استنتاج يوسف نفسه.' },
      { id: 'q3', question: 'What would have happened if the light had failed?', options: ['a storm would have come', 'a ship would have lost its way', 'Yusuf would have been fired', 'the machine would have broken'], answer: 1, explanation: 'If the light had failed even once, a ship would have lost its way — شرط ثالث كامل.' },
      { id: 'q4', question: 'What did the locals think the light really was?', options: ['a lamp', 'a star', 'a promise', 'a warning'], answer: 2, explanation: 'it was not a lamp at all — it was a promise — هذا لب القصة.' },
      { id: 'q5', question: 'What is the role of the machine at the end?', options: ['it deepens the story’s irony', 'it solves every problem', 'it replaces courage with speed', 'it is praised by the locals'], answer: 0, explanation: 'Yusuf يُستبدل بآلة «لا تختار البقاء» — مفارقة قصدها الكاتب.' },
    ],
  },
  {
    id: 'b2-night-city',
    order: 2,
    level: 'B2',
    title: 'The City That Sleeps Less',
    titleAr: 'المدينة التي تنام أقل',
    topic: 'المجتمع الحديث وورديات الليل',
    summary: 'لماذا يعمل ثلث العالم بعد منتصف الليل؟ — مناطق زمنية، ضوء كهربائي، وآلات لا تنتعب، مع قصة حسن الحارس ووالدته.',
    estMinutes: 10,
    paragraphs: [
      'Why do modern cities work all night? The answer has changed. Not long ago, night work meant only bread bakers, doctors and those who lit the lamps. Today, thousands of jobs exist because of three forces: global time zones, electric light and machines that never tire.',
      'Call centres handle calls from London while Egypt sleeps. Trucks are unloaded between midnight and dawn so shops can open full by morning. Even culture has moved: concerts begin after dark, and online creators publish when their audience is awake, not when the sun is. In short, the night has become a workplace like any other — just with fewer witnesses and lower light.',
      'Take Hassan, a 32-year-old security guard. He sleeps from 7 a.m. to 1 p.m., and his mother never gets used to it. “He is awake at my midnight,” she says with a laugh. “The world has too many clocks now, and none of them agrees with mine anymore.”',
      'The costs are rarely discussed. Studies have shown that night work can damage sleep and family life, and societies that treat midnight as “normal daytime” often underestimate the price. Nobody chooses to eat dinner at 3 a.m. forever without a reason — and nobody should have to.',
      'Perhaps the real question is not “who works at night?” but “why is night work growing?” Until cities decide their own rhythms instead of importing them, the night shift will keep expanding — quietly, and mostly without thanks. The day will keep shrinking, and nobody will officially object at the meetings where this is decided.',
    ],
    vocab: [
      { term: 'time zone', meaning: 'منطقة زمنية' },
      { term: 'publish', meaning: 'ينشر' },
      { term: 'shift', meaning: 'وردية عمل' },
      { term: 'estimate', meaning: 'يقدّر / يُثمّن' },
      { term: 'rhythm', meaning: 'إيقاع / نظم' },
      { term: 'security guard', meaning: 'حارس أمني' },
    ],
    questions: [
      { id: 'q1', question: 'What three forces made night work possible today?', options: ['tax breaks, remote work and AI', 'time zones, electric light and untiring machines', 'longer holidays, faster trains and cheaper electricity', 'democracy, trade and satellites'], answer: 1, explanation: 'النص يذكرها حرفياً: global time zones, electric light and machines that never tire.' },
      { id: 'q2', question: 'Why do London call centres matter to Egyptian workers?', options: ['same language', 'they need Arabic speakers', 'their night is London’s day', 'they pay in pounds'], answer: 2, explanation: 'London تعتمد على مصر وهي تنام — النص يستعمل هذا المنطق.' },
      { id: 'q3', question: 'How does Hassan’s mother describe the situation?', options: ['she enjoys the quiet', 'the world has too many clocks now', 'her son needs more coffee', 'London is too far'], answer: 1, explanation: '“The world has too many clocks now.” — أجمل جملة في النص.' },
      { id: 'q4', question: 'What is one hidden cost of the night economy?', options: ['higher electricity bills', 'damage to sleep and family life', 'more traffic', 'less tourism'], answer: 1, explanation: 'Studies have shown that night work can damage sleep and family life.' },
      { id: 'q5', question: 'What does the author think cities should do?', options: ['ban night work completely', 'import more foreign rhythms', 'decide their own rhythms', 'build more shopping malls'], answer: 2, explanation: 'Until cities decide their own rhythms instead of importing them…' },
    ],
  },

  /* ─────────── C1 ─────────── */
  {
    id: 'c1-the-archive',
    order: 1,
    level: 'C1',
    title: 'The Archive',
    titleAr: 'الأرشيف',
    topic: 'الذاكرة والأمانة التاريخية',
    summary: 'ليلى ترث علبة صفيح صغيرة من والدها — التذاكر القديمة والوصل الإيجاري 1962 أدت جميعاً إلى دكان خياط لم يعد موجوداً. قصة عن من يرث الذاكرة.',
    estMinutes: 14,
    paragraphs: [
      'In a drawer her father kept before he died, Layla found a tin box: railway tickets, a rent receipt from 1962, a photograph of a stranger in Alexandria, and a letter that begins, “If you are reading this, you have already decided to ask.”',
      'What she did next could not have been predicted. She spent a year learning her grandfather’s handwriting better than the scribes of his own era had. Much as she tried to finish quickly, each document opened three more questions — a date that would not settle, a name nobody remembered, a sum of money that made no sense until she found the rent receipt upside down under a photograph of Alexandria.',
      'It was only when she reached the tenth file that a pattern emerged: every receipt, every ticket, every address led back to the same tailor’s shop in the old district. Not until then did she understand that her family had lived and survived — quietly, stubbornly, with scissors and buttons and a great deal of patience — inside a building that no longer exists.',
      'She digitised nothing. She insisted the originals be kept in acid-free folders and handled with cotton gloves, “because,” as she put it, “the paper outlived its authors, and deserves the same courtesy.” At the neighbourhood museum, children now pass the tailor’s drawer every Saturday, and none of them knows it — yet.',
      'Some evenings she sits in the museum after closing and reads the letter aloud, once. Not for memory now — for company. “You decided to ask,” she tells the silence, and the silence, at least, never files an objection. Perhaps that is the highest praise an archive can receive: to be read, and not merely stored.',
      'Whether memory belongs to the living or the dead is a question archivists ask themselves daily. Layla concluded something simpler: an archive is not a container of facts; it is an engine of questions. Whoever inherits it inherits the duty — not of remembering, but of asking.',
    ],
    vocab: [
      { term: 'inherit', meaning: 'يرث' },
      { term: 'archive', meaning: 'أرشيف — مجموعة موثقة من الوثائق' },
      { term: 'digitise', meaning: 'يُرَقمن (ينقل إلى صيغة رقمية)' },
      { term: 'outlive', meaning: 'يعيش أطول من شخص أو شيء آخر' },
      { term: 'courtesy', meaning: 'مجاملة / احترام' },
      { term: 'acid-free', meaning: 'خالٍ من الأحماض (لحماية الورق)' },
    ],
    questions: [
      { id: 'q1', question: 'What was inside the tin box Layla found?', options: ['money and jewelry', 'tickets, a receipt, a photograph and a letter', 'old passports', 'school reports'], answer: 1, explanation: 'التفصيل مذكور تاماً في الفقرة الأولى — كل الأربعة.' },
      { id: 'q2', question: 'Why did Layla refuse to digitise the archive?', options: ['she was afraid of computers', 'she thought originals deserve courtesy', 'the museum did not allow it', 'she wanted to sell them'], answer: 1, explanation: '“because the paper outlived its authors, and deserves the same courtesy” — جملة ليلى نفسها.' },
      { id: 'q3', question: 'Where did all the documents lead back to?', options: ['Alexandria', 'a government office', 'a tailor’s shop in the old district', 'the museum archive'], answer: 2, explanation: 'every receipt, every ticket, every address led back to the same tailor’s shop — جملة مفتاحية بـ «Not until then».' },
      { id: 'q4', question: 'What does Layla tell the silence each evening?', options: ['“Forgive me”', '“Where are you?”', '“You decided to ask”', '“I remember you”'], answer: 2, explanation: 'تختم النص بهذه الجملة: “You decided to ask” she tells the silence.' },
      { id: 'q5', question: 'What does Layla finally conclude about archives?', options: ['they preserve exact history', 'they are engines of questions', 'they belong to governments', 'they should be digitised'], answer: 1, explanation: 'an archive is … an engine of questions — خلاصة المقال ولبه.' },
      { id: 'q6', question: 'Which grammatical move opens the turning point of the story?', options: ['“It was only when she reached the tenth file…”', '“Much as she tried to finish”', '“Not until then did she understand”', 'all of the above'], answer: 3, explanation: 'كلها أدوات C1/C2 في النص: تركيز بـ «It was…», تنازل بـ «Much as», وقلب بـ «Not until then did…».' },
    ],
  },
  {
    id: 'c1-a-defense-of-boredom',
    order: 2,
    level: 'C1',
    title: 'In Praise of Boredom',
    titleAr: 'دفاع عن الملل',
    topic: 'علم النفس والانتباه',
    summary: 'لماذا «لم أعد أحتمل دقيقة فارغة»؟ تحليل الملل السلبي مقابل الملل النشط، وتجربة عملية بالهاتف المغلق في الدرج.',
    estMinutes: 13,
    paragraphs: [
      'Few experiences frighten the modern mind more reliably than an empty minute. The average phone is checked dozens of times a day, not because anything new appears, but because stillness has become itchy — a feeling to be scratched out rather than inhabited.',
      'Yet boredom, it turns out, is not a lack to be filled; it is a pressure to be minded. Psychologists distinguish between two kinds: the passive boredom of waiting, which soothes itself, and the active boredom of wanting — the state in which a person knows that nothing interesting is happening, yet demands that something should.',
      'It is in the second kind that the imagination sets to work. Writing, drawing, planning, worrying, dreaming — all begin where entertainment ends. History is full of inventions whose makers admit they were, at the crucial moment, thoroughly bored — and usually glad of it afterwards.',
      'Take the experiment. Leave the phone in a drawer after dinner. Wash the dishes without audio. Walk to the corner shop without a podcast. By the third day, your mind will complain like a cat deprived of a favourite chair. By the fourth, it will find you something astonishing: your own unfinished thoughts, waiting exactly where you left them.',
      'None of this excuses an empty calendar; meaning is still required. What is required, however, is the willingness to remain unstimulated long enough for a thought to develop. Perhaps the discipline of our age is not focus but tolerance: the ability to sit with nothing for ten minutes without reaching for the nearest bright rectangle.',
      'One warning before you begin. You will probably fail the first few times — the phone will win, the chair will remain empty, the episode will go unwatched, and you will be proud of how much television you did not watch. That is not the point; the failure is itself the sensation you have forgotten how to have. And if you find the experiment intolerable, congratulations: you have just discovered your next project.',
    ],
    vocab: [
      { term: 'scarcely', meaning: 'نادراً / بالكاد (مطابقة معfew)' },
      { term: 'soothe', meaning: 'يهدّئ' },
      { term: 'deprive', meaning: 'يحرم' },
      { term: 'rectangle', meaning: 'مستطيل' },
      { term: 'tolerance', meaning: 'تحمّل' },
      { term: 'unstimulated', meaning: 'بلا محفزات' },
    ],
    questions: [
      { id: 'q1', question: 'According to the text, why do people check their phones dozens of times a day?', options: ['because new things happen constantly', 'because stillness has become “itchy”', 'because they are addicted in a clinical sense', 'because they are bored by the news'], answer: 1, explanation: 'not because anything new appears, but because stillness has become itchy — تشخيص دقيق للمشاعر كما يقول المؤلف.' },
      { id: 'q2', question: 'What is “active boredom”?', options: ['boredom during sports', 'boredom that soothes itself', 'boredom of wanting something to happen', 'boredom caused by loud music'], answer: 2, explanation: 'the state in which a person knows that nothing interesting is happening, yet demands that something should — هذا هو النوع الذي ينشّط الخيال.' },
      { id: 'q3', question: 'Where does imagination begin, according to the text?', options: ['where entertainment begins', 'where entertainment ends', 'where novelty is highest', 'where apps are cheapest'], answer: 1, explanation: 'all begin where entertainment ends — جواب صريح في النص.' },
      { id: 'q4', question: 'What happens on the fourth day of the phone-drawer experiment?', options: ['the subject gives up', 'a breakthrough is reported in studies', 'the mind finds unfinished thoughts waiting', 'nothing — it is simply too long'], answer: 2, explanation: 'By the fourth, it will find you … your own unfinished thoughts.' },
      { id: 'q5', question: 'Why does the author call tolerance “the discipline of our age”?', options: ['because discipline is old-fashioned', 'because sitting with nothing is now rare and demanding', 'because everyone lacks patience', 'because focus is impossible now'], answer: 1, explanation: 'the ability to sit with nothing for ten minutes without reaching for the nearest bright rectangle — تحوّلت من عادي إلى إنجاز.' },
      { id: 'q6', question: 'What is the author’s final “warning” really?', options: ['a medical caution', 'permission to quit', 'an invitation: failure is the point', 'a joke about cats'], answer: 2, explanation: 'the failure is itself the sensation you have forgotten how to have — الفشل نفسه هو التمرين.' },
    ],
  },

  /* ─────────── C2 ─────────── */
  {
    id: 'c2-the-translators-dilemma',
    order: 1,
    level: 'C2',
    title: 'The Translator’s Dilemma',
    titleAr: 'معضلة المترجم',
    topic: 'اللغة والخيانة والوفاء',
    summary: '«الوفاء» أجمل نذر وأكثره عدولية يحتاج للمترجم — مراجعة لمبدأ الترجمة الحرفي مقابل الحيّ، ولماذا يبقى المترجم ضيفاً دائماً لا مالكاً للنص.',
    estMinutes: 16,
    paragraphs: [
      'Faithfulness is the translator’s most honourable and most useless vow. Every professional learns it early: the literal word and the living sentence are rarely on speaking terms, and no ceremony, however solemn — royal, academic, or ministerial — can reconcile them.',
      'Consider a single line: “The report was delivered late.” Rendered literally into Arabic, it convicts a delivery; in context, it convicts neither. The honest translator must decide whether the text accuses, apologises, or merely remarks — and must decide without the comfort of a meeting with the author, without a vote, and without mercy.',
      'Much as theory pretends otherwise, translation is not transfer but settlement. The source text makes a claim; the target language insists on evidence; the culture hosting the result demands a jury. Between these three, meaning survives only because someone accepts the violence of choosing one register and wounding all the others — and calls it Tuesday.',
      'Take the Arabic phrase “على عينها” in a love poem. A glossary offers “on her eye”; a poet offers “with all her love in it”; a literalist offers a giggle. All three are dictionary-adjacent, and only one is poetry — which is why translators, far from being invisible, might better be called permanent hosts at a wedding where neither side speaks, yet both families insist on feasting.',
      'Were she to judge the matter from the summit of absolute fidelity, the machine would win every argument and lose every reader; were he to judge from the wreckage of adaptation, the author would win nothing and lose everything. Between those extremes stands the translator, who must ship on Friday and deserves, at the very least, a chair at the feast.',
      'Hence the small scandals of every literary decade: the landmark novel that loses its humour in French, the proverb that mutates in English, the mother in one language who dies — literally, politely — in another. Each loss is real, each mourned by someone, and each is also the price of admission. Perfect translation is not an aspiration; it is an infinite closer miss, and the closer the miss, the more invisible its tax.',
      'What, then, is the vow worth keeping? Rendered honestly rather than literally, the translator’s oath reads: “I will not lie about what the text did to me.” Everything else — fidelity, voice, beauty — is commentary, and must be argued for, line by line, in the open.',
    ],
    vocab: [
      { term: 'vow', meaning: 'نذر / عهد رسمي' },
      { term: 'settlement', meaning: 'تسوية / تسوية نزاع' },
      { term: 'register', meaning: 'مستوى اللفظ (رسمي/أدبي/عامي)' },
      { term: 'tax', meaning: 'ضريبة / كلفة خفية' },
      { term: 'dictionary-adjacent', meaning: 'قريب من المعجم لكنه ليس الشعر' },
      { term: 'literalist', meaning: 'حرفيّ — من يتمسك بالترجمة الحرفية' },
    ],
    questions: [
      { id: 'q1', question: 'How does the essay characterize “faithfulness”?', options: ['as the perfect ideal', 'as honourable but useless', 'as impossible to attempt', 'as a legal principle'], answer: 1, explanation: 'the literal word and the living sentence are rarely on speaking terms — الوفاء أجمل وأقرب للشلل.' },
      { id: 'q2', question: 'Why is “The report was delivered late” hard to translate?', options: ['because Arabic lacks that construction', 'because context determines whose fault it is', 'because “delivered” has no equivalent', 'because the author forbade it'], answer: 1, explanation: 'in context, it convicts neither — الجملة لا تدل على المتهم بذاتها.' },
      { id: 'q3', question: 'What does the author mean by “translation is not transfer but settlement”?', options: ['files are settled in customs', 'translators negotiate a treaty between three powers', 'translation requires payment', 'theories settle scores'], answer: 1, explanation: 'النص يسمي الثلاثة: النص المصدر، اللغة المضيفة، الجمهور — والترتيب حل توافقي بينهم.' },
      { id: 'q4', question: 'Which rendering of “على عينها” is called “the only poetry”?', options: ['on her eye', 'with all her love in it', 'without hesitation', 'with one eye closed'], answer: 1, explanation: 'A glossary offers “on her eye”; a poet offers “with all her love in it” … only one is poetry.' },
      { id: 'q5', question: 'Where does perfect translation leave the translator?', options: ['rewarded publicly', 'invisible at the feast', 'somewhere between summit and wreckage, shipping on Friday', 'without a chair at the feast'], answer: 2, explanation: 'Between those extremes stands the translator, who must ship on Friday.' },
      { id: 'q6', question: 'What is the one vow worth keeping?', options: ['never change a word', 'translate poetry as prose', 'I will not lie about what the text did to me', 'always choose the literal rendering'], answer: 2, explanation: 'حرفياً — خاتمة النص وتعريفه الجديد لمعنى «الوفاء».' },
    ],
  },
  {
    id: 'c2-notes-on-attention',
    order: 2,
    level: 'C2',
    title: 'Notes on Attention, or: Who Is Listening?',
    titleAr: 'ملاحظات على الانتباه، أو: من يستمع؟',
    topic: 'الانتباه والاقتصاد الحديث',
    summary: 'انتباه الإنسان أصبح عملة نادرة تباع في مزادات — تحليل أزمة «الجَلَبة» التي تُعوَّض عن الفهم، مع «صوم أسبوعي» اقتراح للحل.',
    estMinutes: 15,
    paragraphs: [
      'If the twentieth century was the century of the image, ours is the century of the glance. Everything competes for the same three seconds; everything wins the same forgetting. Our attention has not merely shortened — it has been privatised, auctioned, sliced, and sold back to us as “engagement,” one scroll, one swipe, one refresh at a time — quietly, constantly, and with our full permission, whether or not we notice the signature.',
      'Much as we resent the architects of this economy, we have consented to its architecture. Every day we sign the treaty: scroll to see, swipe to be seen, refresh to matter. Rarely does any of us ask by whom the whole arrangement was drafted — let alone whether it is anyone’s interest that we remain distracted.',
      'Public discourse has suffered most visibly. Where once a nation’s argument was measured in paragraphs, it is now measured in breaks. Much of what circulates is not persuasion but percussion; not thought but tempo. Whilst no generation lacked its demagogues, none had such cheap loudspeakers — and the listener, tired from the noise, mistakes exhaustion for agreement.',
      'Notwithstanding these diagnoses, complaint alone is not a position. Paying attention remains the only unpaid currency; nobody can be paid to watch your mind. What is scarce now is not expression but uptake — the courtesy of receiving one another’s meaning before issuing a counter-meaning.',
      'One remedy suggests itself: a weekly fast from the feeds, followed by a truly attentive hour with one text — a page, an essay, a poem — finished without interruption. Were every reader to keep it, the algorithms would starve; were nobody to keep it, the feast would continue, exactly as advertised.',
      'Institutions are not exempt from this diagnosis. Editorial boards trim essays to headlines; ministries answer memes instead of questions; even universities now measure thinking in clicks and applause. When every participant is polling the room, nobody is listening long enough for a difficult truth to form — and the loudest answer wins, which is rarely the quietest question.',
      'Ask yourself, then, the only question this essay cannot answer for you: when — if ever — did you last finish something difficult, not because you had to, but because you had decided to? The answer will tell you more about your attention than any metric — and less about your worth than you fear, which is precisely the point worth keeping.',
    ],
    vocab: [
      { term: 'engagement', meaning: 'التفاعل / الاندماج (مصطلح المنصات)' },
      { term: 'demagogue', meaning: 'متملّق الجماهير، مُؤجّج العواطف' },
      { term: 'uptake', meaning: 'استيعاب / تلقٍّ — استقبال معنى الآخرين' },
      { term: 'metric', meaning: 'مقياس / معيار قياس رقمي' },
      { term: 'sovereign', meaning: 'سيادي / مُطلق القرار' },
      { term: 'notwithstanding', meaning: 'رغم ذلك / بغض النظر عن' },
    ],
    questions: [
      { id: 'q1', question: 'How does the text characterize our attention today?', options: ['sharper than ever', 'shortened and privatised as “engagement”', 'abundant but wasted', 'medically cured'], answer: 1, explanation: 'it has been privatised, auctioned, sliced, and sold back to us as “engagement” — تشخيص الخلاصة.' },
      { id: 'q2', question: 'What is the “treaty” we sign daily, according to the text?', options: ['subscription terms', 'privacy policy', 'scroll to see, swipe to be seen, refresh to matter', 'end-user agreement'], answer: 2, explanation: 'صيغتها الثلاثية هي العقد الحقيقي وراء شاشة الهاتف.' },
      { id: 'q3', question: 'Why do exhausted listeners mistake exhaustion for agreement?', options: ['they agree with everything', 'they cannot process arguments anymore, so noise wins', 'they are polite', 'they read the arguments carefully'], answer: 1, explanation: 'the listener, tired from the noise, mistakes exhaustion for agreement — نص حرفي.' },
      { id: 'q4', question: 'What does the author say is scarce now — not expression?', options: ['talent', 'money', 'time', 'uptake'], answer: 3, explanation: 'What is scarce now is not expression but uptake — التلقي المهذّب لمعنى الآخر.' },
      { id: 'q5', question: 'What would happen “were every reader to keep” the weekly fast?', options: ['publishers would adapt', 'the algorithms would starve', 'poems would trend again', 'nothing — habits never change'], answer: 1, explanation: 'were every reader to keep it, the algorithms would starve — شرط ثانٍ كامل.' },
      { id: 'q6', question: 'What does the closing question reveal?', options: ['whether you are intelligent', 'your relationship to voluntary, difficult finishing', 'your reading speed', 'your agreement with the author'], answer: 1, explanation: 'its purpose is self-knowledge about chosen difficulty — لا تقدير للذات.' },
    ],
  },

];

export function getReadersByLevel(level: Cefr): Reader[] {
  return READERS.filter((r) => r.level === level).sort((a, b) => a.order - b.order);
}
