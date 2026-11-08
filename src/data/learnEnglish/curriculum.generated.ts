/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — بيانات منهج Learn-English المولّدة
   ⚠️ ملف مولّد آلياً — لا تعدّله يدوياً.
   المصدر: Learn-English · commit 57b91e73cd679fc3b639f198fb4887f49ac942d0
   البصمة: ba1fb4702bb8bce9ceefabf540f1ff727c9407dc15b5c6a8dfb0ea3c7ec1fdef
   النطاق: S0–B1 فقط (B2–C2 يبقى على محتوى TALAQA)
   المولّد: tools/import/build-learn-english.mjs
   الحالة: ينتظر المراجعة البشرية — غير مدمج في الدروس.
   ═══════════════════════════════════════════════════════════════ */

import type { LearnEnglishSource, LearnEnglishUnit } from './types';

export const LEARN_ENGLISH_SOURCE: LearnEnglishSource = {
  "name": "Learn-English",
  "repository": "https://github.com/ammarcharef06/Learn-English",
  "commit": "57b91e73cd679fc3b639f198fb4887f49ac942d0",
  "commitDate": "2026-10-29T22:59:02+01:00",
  "dirty": false,
  "fingerprint": "ba1fb4702bb8bce9ceefabf540f1ff727c9407dc15b5c6a8dfb0ea3c7ec1fdef",
  "files": [
    {
      "path": "assets/js/data/curriculum-a1.js",
      "sha256": "f3a7d6ce8f7e8b2a61b12f1f1982d23ec3be72634904507bca4445557bf45f88",
      "bytes": 79685
    },
    {
      "path": "assets/js/data/curriculum-a2.js",
      "sha256": "dad32069c6211e5b2b4ecb6037d6fa858cbe0fd3f665ef7efe046f67ed44c26a",
      "bytes": 79919
    },
    {
      "path": "assets/js/data/curriculum-b1.js",
      "sha256": "eca3ec7ace954107e0372f41c49e1da280e6b76d68b29fa767c909853e323f22",
      "bytes": 87214
    },
    {
      "path": "assets/js/data/curriculum-advanced.js",
      "sha256": "dd380ad23b034fef67860f49c1b562e812f14675af82106e5a40aefcd2b38f6a",
      "bytes": 138769
    },
    {
      "path": "assets/js/data/readings.js",
      "sha256": "c3dba69d8e0dede26933846f82eaeb790d1f566c648ee1dc8aedd907ed3c4e35",
      "bytes": 48929
    },
    {
      "path": "assets/js/data/zero-words.js",
      "sha256": "543539bca3e549a4fb0ae9b08112966b99bb923d97e8c9a2ecbc5e12ea5d3156",
      "bytes": 22580
    }
  ]
};

export const LEARN_ENGLISH_UNITS: LearnEnglishUnit[] = [
  {
    "id": "le-s0-a1-foundation-people-body",
    "sourceId": "a1-foundation-people-body",
    "sourceLevel": "a1",
    "stage": "S0",
    "foundation": true,
    "deferred": false,
    "titleAr": "الأشخاص والجسم: الكلمات الأولى",
    "titleEn": "First Words: People and the Body",
    "icon": "👨‍👩‍👧",
    "goalAr": "أن يسمّي المتعلم أفراد العائلة والأشخاص وأجزاء الجسم الأساسية.",
    "grammar": [
      {
        "id": "le-s0-a1-foundation-people-body-g01",
        "titleAr": "استخدم this is للتعريف بشخص أو جزء من الجسم، وthese are للتعريف بأكثر من شخص.",
        "explainHtml": "<p>استخدم this is للتعريف بشخص أو جزء من الجسم، وthese are للتعريف بأكثر من شخص.</p>",
        "explainText": "استخدم this is للتعريف بشخص أو جزء من الجسم، وthese are للتعريف بأكثر من شخص.",
        "table": null,
        "examples": [
          {
            "id": "le-s0-a1-foundation-people-body-g01-e01",
            "en": "This is my mother.",
            "ar": "هذه أمي."
          }
        ],
        "tips": [
          "اقرأ المثال بصوت واضح، ثم استبدل الكلمة بكلمة أخرى من المجموعة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-s0-a1-foundation-people-body-v01",
        "en": "grandmother",
        "ar": "جدة",
        "pos": "noun",
        "emoji": "👵",
        "example": {
          "en": "My grandmother is here.",
          "ar": "جدتي هنا."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v02",
        "en": "grandfather",
        "ar": "جد",
        "pos": "noun",
        "emoji": "👴",
        "example": {
          "en": "My grandfather is here.",
          "ar": "جدي هنا."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v03",
        "en": "baby",
        "ar": "طفل صغير",
        "pos": "noun",
        "emoji": "👶",
        "example": {
          "en": "My baby is here.",
          "ar": "طفلي الصغير هنا."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v04",
        "en": "aunt",
        "ar": "عمة / خالة",
        "pos": "noun",
        "emoji": "👩‍🦰",
        "example": {
          "en": "My aunt is here.",
          "ar": "عمتي هنا."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v05",
        "en": "uncle",
        "ar": "عم / خال",
        "pos": "noun",
        "emoji": "👨‍🦱",
        "example": {
          "en": "My uncle is here.",
          "ar": "عمي هنا."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v06",
        "en": "head",
        "ar": "رأس",
        "pos": "noun",
        "emoji": "👤",
        "example": {
          "en": "I wash my head.",
          "ar": "أغسل رأسي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v07",
        "en": "eye",
        "ar": "عين",
        "pos": "noun",
        "emoji": "👁️",
        "example": {
          "en": "I wash my eye.",
          "ar": "أغسل عيني."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v08",
        "en": "ear",
        "ar": "أذن",
        "pos": "noun",
        "emoji": "👂",
        "example": {
          "en": "I wash my ear.",
          "ar": "أغسل أذني."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v09",
        "en": "nose",
        "ar": "أنف",
        "pos": "noun",
        "emoji": "👃",
        "example": {
          "en": "I wash my nose.",
          "ar": "أغسل أنفي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v10",
        "en": "mouth",
        "ar": "فم",
        "pos": "noun",
        "emoji": "👄",
        "example": {
          "en": "I wash my mouth.",
          "ar": "أغسل فمي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v11",
        "en": "hand",
        "ar": "يد",
        "pos": "noun",
        "emoji": "✋",
        "example": {
          "en": "I wash my hand.",
          "ar": "أغسل يدي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v12",
        "en": "foot",
        "ar": "قدم",
        "pos": "noun",
        "emoji": "🦶",
        "example": {
          "en": "I wash my foot.",
          "ar": "أغسل قدمي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v13",
        "en": "hair",
        "ar": "شعر",
        "pos": "noun",
        "emoji": "💇",
        "example": {
          "en": "I wash my hair.",
          "ar": "أغسل شعري."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v14",
        "en": "tooth",
        "ar": "سن",
        "pos": "noun",
        "emoji": "🦷",
        "example": {
          "en": "I brush my tooth.",
          "ar": "أنظف سني بالفرشاة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v15",
        "en": "face",
        "ar": "وجه",
        "pos": "noun",
        "emoji": "😊",
        "example": {
          "en": "I wash my face.",
          "ar": "أغسل وجهي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v16",
        "en": "arm",
        "ar": "ذراع",
        "pos": "noun",
        "emoji": "💪",
        "example": {
          "en": "I wash my arm.",
          "ar": "أغسل ذراعي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v17",
        "en": "leg",
        "ar": "ساق",
        "pos": "noun",
        "emoji": "🦵",
        "example": {
          "en": "I wash my leg.",
          "ar": "أغسل ساقي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v18",
        "en": "finger",
        "ar": "إصبع",
        "pos": "noun",
        "emoji": "☝️",
        "example": {
          "en": "I wash my finger.",
          "ar": "أغسل إصبعي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v19",
        "en": "heart",
        "ar": "قلب",
        "pos": "noun",
        "emoji": "❤️",
        "example": {
          "en": "The doctor checks my heart.",
          "ar": "يفحص الطبيب قلبي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-v20",
        "en": "doctor",
        "ar": "طبيب",
        "pos": "noun",
        "emoji": "🧑‍⚕️",
        "example": {
          "en": "The doctor helps me.",
          "ar": "الطبيب يساعدني."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-s0-a1-foundation-people-body-s01",
        "en": "My grandmother is here.",
        "ar": "جدتي هنا."
      },
      {
        "id": "le-s0-a1-foundation-people-body-s02",
        "en": "My grandfather is here.",
        "ar": "جدي هنا."
      },
      {
        "id": "le-s0-a1-foundation-people-body-s03",
        "en": "My baby is here.",
        "ar": "طفلي الصغير هنا."
      },
      {
        "id": "le-s0-a1-foundation-people-body-s04",
        "en": "My aunt is here.",
        "ar": "عمتي هنا."
      },
      {
        "id": "le-s0-a1-foundation-people-body-s05",
        "en": "My uncle is here.",
        "ar": "عمي هنا."
      },
      {
        "id": "le-s0-a1-foundation-people-body-s06",
        "en": "I wash my head.",
        "ar": "أغسل رأسي."
      }
    ],
    "dialogue": [],
    "phonetics": [
      {
        "id": "le-s0-a1-foundation-people-body-p01",
        "en": "mother",
        "ipa": "/ˈmʌðə/",
        "ar": "أم",
        "contrastPairs": [
          {
            "id": "le-s0-a1-foundation-people-body-p01-c-01",
            "en": "mother / brother",
            "ar": "انتبه إلى اختلاف الحركة الأولى بين الكلمتين."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-s0-a1-foundation-people-body-p01-s-01",
            "en": "This is my mother.",
            "ar": "اربط الكلمات في العبارة بسلاسة، مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-s0-a1-foundation-people-body-p01-i-01",
            "en": "This is my mother. ↘",
            "ar": "نبرة هادئة تهبط عند نهاية الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-s0-a1-foundation-people-body-l1-01",
        "incorrect": "This is my parents.",
        "corrected": "These are my parents.",
        "explanationAr": "استخدم صيغة الجمع these are عند الحديث عن الوالدين.",
        "practice": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-l1-02",
        "incorrect": "I happy.",
        "corrected": "I am happy.",
        "explanationAr": "لا تحذف فعل الكينونة am في جملة الوصف.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-s0-a1-foundation-people-body-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Read the word.",
          "ar": "اقرأ الكلمة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-s0-a1-foundation-people-body-a02",
        "term": "example",
        "meaningAr": "مثال",
        "example": {
          "en": "Read one example.",
          "ar": "اقرأ مثالاً واحداً."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-s0-a1-foundation-food-colors",
    "sourceId": "a1-foundation-food-colors",
    "sourceLevel": "a1",
    "stage": "S0",
    "foundation": true,
    "deferred": false,
    "titleAr": "الطعام والألوان: الكلمات الأولى",
    "titleEn": "First Words: Food and Colors",
    "icon": "🍎",
    "goalAr": "أن يسمّي المتعلم أطعمة ومشروبات وألواناً وأشكالاً أساسية.",
    "grammar": [
      {
        "id": "le-s0-a1-foundation-food-colors-g01",
        "titleAr": "استخدم I like مع الطعام، وضع اللون قبل الاسم عند وصف شيء.",
        "explainHtml": "<p>استخدم I like مع الطعام، وضع اللون قبل الاسم عند وصف شيء.</p>",
        "explainText": "استخدم I like مع الطعام، وضع اللون قبل الاسم عند وصف شيء.",
        "table": null,
        "examples": [
          {
            "id": "le-s0-a1-foundation-food-colors-g01-e01",
            "en": "I like bread and cheese.",
            "ar": "أحب الخبز والجبن."
          }
        ],
        "tips": [
          "اقرأ المثال بصوت واضح، ثم استبدل الكلمة بكلمة أخرى من المجموعة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-s0-a1-foundation-food-colors-v01",
        "en": "meat",
        "ar": "لحم",
        "pos": "noun",
        "emoji": "🍖",
        "example": {
          "en": "I like meat.",
          "ar": "أحب لحم."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v02",
        "en": "fish",
        "ar": "سمك",
        "pos": "noun",
        "emoji": "🐟",
        "example": {
          "en": "I like fish.",
          "ar": "أحب سمك."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v03",
        "en": "orange",
        "ar": "برتقالة",
        "pos": "noun",
        "emoji": "🍊",
        "example": {
          "en": "I like orange.",
          "ar": "أحب برتقالة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v04",
        "en": "sugar",
        "ar": "سكر",
        "pos": "noun",
        "emoji": "🍬",
        "example": {
          "en": "I like sugar.",
          "ar": "أحب سكر."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v05",
        "en": "yellow",
        "ar": "أصفر",
        "pos": "adjective",
        "emoji": "🟡",
        "example": {
          "en": "It is yellow.",
          "ar": "إنه أصفر."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v06",
        "en": "brown",
        "ar": "بني",
        "pos": "adjective",
        "emoji": "🟤",
        "example": {
          "en": "It is brown.",
          "ar": "إنه بني."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v07",
        "en": "purple",
        "ar": "بنفسجي",
        "pos": "adjective",
        "emoji": "🟣",
        "example": {
          "en": "It is purple.",
          "ar": "إنه بنفسجي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v08",
        "en": "pink",
        "ar": "وردي",
        "pos": "adjective",
        "emoji": "🌸",
        "example": {
          "en": "It is pink.",
          "ar": "إنه وردي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v09",
        "en": "grey",
        "ar": "رمادي",
        "pos": "adjective",
        "emoji": "🌫️",
        "example": {
          "en": "It is grey.",
          "ar": "إنه رمادي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v10",
        "en": "circle",
        "ar": "دائرة",
        "pos": "noun",
        "emoji": "⭕",
        "example": {
          "en": "I see a circle.",
          "ar": "أرى دائرة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v11",
        "en": "square",
        "ar": "مربع",
        "pos": "noun",
        "emoji": "⬜",
        "example": {
          "en": "I see a square.",
          "ar": "أرى مربع."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v12",
        "en": "triangle",
        "ar": "مثلث",
        "pos": "noun",
        "emoji": "🔺",
        "example": {
          "en": "I see a triangle.",
          "ar": "أرى مثلث."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-v13",
        "en": "star",
        "ar": "نجمة",
        "pos": "noun",
        "emoji": "⭐",
        "example": {
          "en": "I see a star.",
          "ar": "أرى نجمة."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-s0-a1-foundation-food-colors-s01",
        "en": "I like meat.",
        "ar": "أحب لحم."
      },
      {
        "id": "le-s0-a1-foundation-food-colors-s02",
        "en": "I like fish.",
        "ar": "أحب سمك."
      },
      {
        "id": "le-s0-a1-foundation-food-colors-s03",
        "en": "I like orange.",
        "ar": "أحب برتقالة."
      },
      {
        "id": "le-s0-a1-foundation-food-colors-s04",
        "en": "I like sugar.",
        "ar": "أحب سكر."
      },
      {
        "id": "le-s0-a1-foundation-food-colors-s05",
        "en": "It is yellow.",
        "ar": "إنه أصفر."
      },
      {
        "id": "le-s0-a1-foundation-food-colors-s06",
        "en": "It is brown.",
        "ar": "إنه بني."
      }
    ],
    "dialogue": [],
    "phonetics": [
      {
        "id": "le-s0-a1-foundation-food-colors-p01",
        "en": "fish",
        "ipa": "/fɪʃ/",
        "ar": "سمك",
        "contrastPairs": [
          {
            "id": "le-s0-a1-foundation-food-colors-p01-c-01",
            "en": "fan / van",
            "ar": "ميّز /f/ المهموس عن /v/ المجهور."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-s0-a1-foundation-food-colors-p01-s-01",
            "en": "I like bread and cheese.",
            "ar": "اربط الكلمات في العبارة بسلاسة، مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-s0-a1-foundation-food-colors-p01-i-01",
            "en": "I like bread and cheese. ↘",
            "ar": "نبرة هادئة تهبط عند نهاية الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-s0-a1-foundation-food-colors-l1-01",
        "incorrect": "I like the tea.",
        "corrected": "I like tea.",
        "explanationAr": "عند الحديث عن الشاي عموماً لا نحتاج عادةً إلى the.",
        "practice": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-l1-02",
        "incorrect": "I happy.",
        "corrected": "I am happy.",
        "explanationAr": "لا تحذف فعل الكينونة am في جملة الوصف.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-s0-a1-foundation-food-colors-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Read the word.",
          "ar": "اقرأ الكلمة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-s0-a1-foundation-food-colors-a02",
        "term": "example",
        "meaningAr": "مثال",
        "example": {
          "en": "Read one example.",
          "ar": "اقرأ مثالاً واحداً."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-s0-a1-foundation-animals",
    "sourceId": "a1-foundation-animals",
    "sourceLevel": "a1",
    "stage": "S0",
    "foundation": true,
    "deferred": false,
    "titleAr": "الحيوانات: الكلمات الأولى",
    "titleEn": "First Words: Animals",
    "icon": "🐾",
    "goalAr": "أن يسمّي المتعلم حيوانات مألوفة.",
    "grammar": [
      {
        "id": "le-s0-a1-foundation-animals-g01",
        "titleAr": "استخدم a قبل اسم الحيوان المفرد الذي يبدأ بصوت ساكن.",
        "explainHtml": "<p>استخدم a قبل اسم الحيوان المفرد الذي يبدأ بصوت ساكن.</p>",
        "explainText": "استخدم a قبل اسم الحيوان المفرد الذي يبدأ بصوت ساكن.",
        "table": null,
        "examples": [
          {
            "id": "le-s0-a1-foundation-animals-g01-e01",
            "en": "I see a cat.",
            "ar": "أرى قطة."
          }
        ],
        "tips": [
          "اقرأ المثال بصوت واضح، ثم استبدل الكلمة بكلمة أخرى من المجموعة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-s0-a1-foundation-animals-v01",
        "en": "dog",
        "ar": "كلب",
        "pos": "noun",
        "emoji": "🐶",
        "example": {
          "en": "I see a dog.",
          "ar": "أرى كلب."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v02",
        "en": "cat",
        "ar": "قطة",
        "pos": "noun",
        "emoji": "🐱",
        "example": {
          "en": "I see a cat.",
          "ar": "أرى قطة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v03",
        "en": "bird",
        "ar": "طائر",
        "pos": "noun",
        "emoji": "🐦",
        "example": {
          "en": "I see a bird.",
          "ar": "أرى طائر."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v04",
        "en": "cow",
        "ar": "بقرة",
        "pos": "noun",
        "emoji": "🐄",
        "example": {
          "en": "I see a cow.",
          "ar": "أرى بقرة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v05",
        "en": "horse",
        "ar": "حصان",
        "pos": "noun",
        "emoji": "🐴",
        "example": {
          "en": "I see a horse.",
          "ar": "أرى حصان."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v06",
        "en": "sheep",
        "ar": "خروف",
        "pos": "noun",
        "emoji": "🐑",
        "example": {
          "en": "I see a sheep.",
          "ar": "أرى خروف."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v07",
        "en": "goat",
        "ar": "عنزة",
        "pos": "noun",
        "emoji": "🐐",
        "example": {
          "en": "I see a goat.",
          "ar": "أرى عنزة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v08",
        "en": "rabbit",
        "ar": "أرنب",
        "pos": "noun",
        "emoji": "🐰",
        "example": {
          "en": "I see a rabbit.",
          "ar": "أرى أرنب."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v09",
        "en": "lion",
        "ar": "أسد",
        "pos": "noun",
        "emoji": "🦁",
        "example": {
          "en": "I see a lion.",
          "ar": "أرى أسد."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v10",
        "en": "elephant",
        "ar": "فيل",
        "pos": "noun",
        "emoji": "🐘",
        "example": {
          "en": "I see a elephant.",
          "ar": "أرى فيل."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v11",
        "en": "monkey",
        "ar": "قرد",
        "pos": "noun",
        "emoji": "🐵",
        "example": {
          "en": "I see a monkey.",
          "ar": "أرى قرد."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v12",
        "en": "snake",
        "ar": "ثعبان",
        "pos": "noun",
        "emoji": "🐍",
        "example": {
          "en": "I see a snake.",
          "ar": "أرى ثعبان."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v13",
        "en": "duck",
        "ar": "بطة",
        "pos": "noun",
        "emoji": "🦆",
        "example": {
          "en": "I see a duck.",
          "ar": "أرى بطة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v14",
        "en": "mouse",
        "ar": "فأر",
        "pos": "noun",
        "emoji": "🐭",
        "example": {
          "en": "I see a mouse.",
          "ar": "أرى فأر."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-animals-v15",
        "en": "animal",
        "ar": "حيوان",
        "pos": "noun",
        "emoji": "🐾",
        "example": {
          "en": "I see an animal.",
          "ar": "أرى حيواناً."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-s0-a1-foundation-animals-s01",
        "en": "I see a dog.",
        "ar": "أرى كلب."
      },
      {
        "id": "le-s0-a1-foundation-animals-s02",
        "en": "I see a cat.",
        "ar": "أرى قطة."
      },
      {
        "id": "le-s0-a1-foundation-animals-s03",
        "en": "I see a bird.",
        "ar": "أرى طائر."
      },
      {
        "id": "le-s0-a1-foundation-animals-s04",
        "en": "I see a cow.",
        "ar": "أرى بقرة."
      },
      {
        "id": "le-s0-a1-foundation-animals-s05",
        "en": "I see a horse.",
        "ar": "أرى حصان."
      },
      {
        "id": "le-s0-a1-foundation-animals-s06",
        "en": "I see a sheep.",
        "ar": "أرى خروف."
      }
    ],
    "dialogue": [],
    "phonetics": [
      {
        "id": "le-s0-a1-foundation-animals-p01",
        "en": "cat",
        "ipa": "/kæt/",
        "ar": "قطة",
        "contrastPairs": [
          {
            "id": "le-s0-a1-foundation-animals-p01-c-01",
            "en": "cat / cut",
            "ar": "ميّز /æ/ في cat عن /ʌ/ في cut."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-s0-a1-foundation-animals-p01-s-01",
            "en": "I see a cat.",
            "ar": "اربط الكلمات في العبارة بسلاسة، مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-s0-a1-foundation-animals-p01-i-01",
            "en": "I see a cat. ↘",
            "ar": "نبرة هادئة تهبط عند نهاية الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-s0-a1-foundation-animals-l1-01",
        "incorrect": "I have cat.",
        "corrected": "I have a cat.",
        "explanationAr": "يحتاج الاسم المفرد المعدود غالباً إلى a أو an.",
        "practice": []
      },
      {
        "id": "le-s0-a1-foundation-animals-l1-02",
        "incorrect": "I happy.",
        "corrected": "I am happy.",
        "explanationAr": "لا تحذف فعل الكينونة am في جملة الوصف.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-s0-a1-foundation-animals-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Read the word.",
          "ar": "اقرأ الكلمة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-s0-a1-foundation-animals-a02",
        "term": "example",
        "meaningAr": "مثال",
        "example": {
          "en": "Read one example.",
          "ar": "اقرأ مثالاً واحداً."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-s0-a1-foundation-school",
    "sourceId": "a1-foundation-school",
    "sourceLevel": "a1",
    "stage": "S0",
    "foundation": true,
    "deferred": false,
    "titleAr": "المدرسة: الكلمات الأولى",
    "titleEn": "First Words: School",
    "icon": "🏫",
    "goalAr": "أن يسمّي المتعلم أدوات وأشخاصاً وأعمالاً مدرسية أساسية.",
    "grammar": [
      {
        "id": "le-s0-a1-foundation-school-g01",
        "titleAr": "استخدم this is لتسمية شيء قريب، وmy لبيان أنه يخصك.",
        "explainHtml": "<p>استخدم this is لتسمية شيء قريب، وmy لبيان أنه يخصك.</p>",
        "explainText": "استخدم this is لتسمية شيء قريب، وmy لبيان أنه يخصك.",
        "table": null,
        "examples": [
          {
            "id": "le-s0-a1-foundation-school-g01-e01",
            "en": "This is my pen.",
            "ar": "هذا قلمي."
          }
        ],
        "tips": [
          "اقرأ المثال بصوت واضح، ثم استبدل الكلمة بكلمة أخرى من المجموعة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-s0-a1-foundation-school-v01",
        "en": "pen",
        "ar": "قلم",
        "pos": "noun",
        "emoji": "🖊️",
        "example": {
          "en": "This is my pen.",
          "ar": "هذا قلم."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v02",
        "en": "pencil",
        "ar": "قلم رصاص",
        "pos": "noun",
        "emoji": "✏️",
        "example": {
          "en": "This is my pencil.",
          "ar": "هذا قلم رصاص."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v03",
        "en": "bag",
        "ar": "حقيبة",
        "pos": "noun",
        "emoji": "🎒",
        "example": {
          "en": "This is my bag.",
          "ar": "هذا حقيبة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v04",
        "en": "notebook",
        "ar": "دفتر",
        "pos": "noun",
        "emoji": "🗒️",
        "example": {
          "en": "This is my notebook.",
          "ar": "هذا دفتر."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v05",
        "en": "ruler",
        "ar": "مسطرة",
        "pos": "noun",
        "emoji": "📐",
        "example": {
          "en": "This is my ruler.",
          "ar": "هذا مسطرة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v06",
        "en": "paper",
        "ar": "ورقة",
        "pos": "noun",
        "emoji": "📄",
        "example": {
          "en": "This is my paper.",
          "ar": "هذا ورقة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v07",
        "en": "lesson",
        "ar": "درس",
        "pos": "noun",
        "emoji": "📖",
        "example": {
          "en": "This is my lesson.",
          "ar": "هذا درس."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v08",
        "en": "homework",
        "ar": "واجب منزلي",
        "pos": "noun",
        "emoji": "📝",
        "example": {
          "en": "This is my homework.",
          "ar": "هذا واجب منزلي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v09",
        "en": "word",
        "ar": "كلمة",
        "pos": "noun",
        "emoji": "🔤",
        "example": {
          "en": "This is my word.",
          "ar": "هذا كلمة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-school-v10",
        "en": "question",
        "ar": "سؤال",
        "pos": "noun",
        "emoji": "❓",
        "example": {
          "en": "This is my question.",
          "ar": "هذا سؤال."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-s0-a1-foundation-school-s01",
        "en": "This is my pen.",
        "ar": "هذا قلم."
      },
      {
        "id": "le-s0-a1-foundation-school-s02",
        "en": "This is my pencil.",
        "ar": "هذا قلم رصاص."
      },
      {
        "id": "le-s0-a1-foundation-school-s03",
        "en": "This is my bag.",
        "ar": "هذا حقيبة."
      },
      {
        "id": "le-s0-a1-foundation-school-s04",
        "en": "This is my notebook.",
        "ar": "هذا دفتر."
      },
      {
        "id": "le-s0-a1-foundation-school-s05",
        "en": "This is my ruler.",
        "ar": "هذا مسطرة."
      },
      {
        "id": "le-s0-a1-foundation-school-s06",
        "en": "This is my paper.",
        "ar": "هذا ورقة."
      }
    ],
    "dialogue": [],
    "phonetics": [
      {
        "id": "le-s0-a1-foundation-school-p01",
        "en": "pen",
        "ipa": "/pen/",
        "ar": "قلم",
        "contrastPairs": [
          {
            "id": "le-s0-a1-foundation-school-p01-c-01",
            "en": "pen / pan",
            "ar": "ميّز /e/ القصيرة عن /æ/ في pan."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-s0-a1-foundation-school-p01-s-01",
            "en": "This is my pen.",
            "ar": "اربط الكلمات في العبارة بسلاسة، مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-s0-a1-foundation-school-p01-i-01",
            "en": "This is my pen. ↘",
            "ar": "نبرة هادئة تهبط عند نهاية الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-s0-a1-foundation-school-l1-01",
        "incorrect": "I in school.",
        "corrected": "I am at school.",
        "explanationAr": "تحتاج الجملة الإنجليزية إلى فعل، ونستخدم at school للحديث عن الوجود في المدرسة.",
        "practice": []
      },
      {
        "id": "le-s0-a1-foundation-school-l1-02",
        "incorrect": "I happy.",
        "corrected": "I am happy.",
        "explanationAr": "لا تحذف فعل الكينونة am في جملة الوصف.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-s0-a1-foundation-school-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Read the word.",
          "ar": "اقرأ الكلمة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-s0-a1-foundation-school-a02",
        "term": "example",
        "meaningAr": "مثال",
        "example": {
          "en": "Read one example.",
          "ar": "اقرأ مثالاً واحداً."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-s0-a1-foundation-home-verbs",
    "sourceId": "a1-foundation-home-verbs",
    "sourceLevel": "a1",
    "stage": "S0",
    "foundation": true,
    "deferred": false,
    "titleAr": "المنزل والأفعال اليومية: الكلمات الأولى",
    "titleEn": "First Words: Home and Everyday Verbs",
    "icon": "🏠",
    "goalAr": "أن يسمّي المتعلم أشياء المنزل ويستخدم أفعالاً يومية شائعة.",
    "grammar": [
      {
        "id": "le-s0-a1-foundation-home-verbs-g01",
        "titleAr": "ابدأ الجملة بضمير الفاعل ثم الفعل، واستخدم in أو on لوصف المكان.",
        "explainHtml": "<p>ابدأ الجملة بضمير الفاعل ثم الفعل، واستخدم in أو on لوصف المكان.</p>",
        "explainText": "ابدأ الجملة بضمير الفاعل ثم الفعل، واستخدم in أو on لوصف المكان.",
        "table": null,
        "examples": [
          {
            "id": "le-s0-a1-foundation-home-verbs-g01-e01",
            "en": "My book is on the table.",
            "ar": "كتابي على الطاولة."
          }
        ],
        "tips": [
          "اقرأ المثال بصوت واضح، ثم استبدل الكلمة بكلمة أخرى من المجموعة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-s0-a1-foundation-home-verbs-v01",
        "en": "sofa",
        "ar": "أريكة",
        "pos": "noun",
        "emoji": "🛋️",
        "example": {
          "en": "This is my sofa.",
          "ar": "هذا أريكة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v02",
        "en": "mirror",
        "ar": "مرآة",
        "pos": "noun",
        "emoji": "🪞",
        "example": {
          "en": "This is my mirror.",
          "ar": "هذا مرآة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v03",
        "en": "floor",
        "ar": "أرضية",
        "pos": "noun",
        "emoji": "🧱",
        "example": {
          "en": "This is my floor.",
          "ar": "هذا أرضية."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v04",
        "en": "go",
        "ar": "يذهب",
        "pos": "verb",
        "emoji": "🚶",
        "example": {
          "en": "I go to school.",
          "ar": "أذهب إلى المدرسة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v05",
        "en": "come",
        "ar": "يأتي",
        "pos": "verb",
        "emoji": "➡️",
        "example": {
          "en": "I come home at four.",
          "ar": "أعود إلى المنزل في الرابعة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v06",
        "en": "see",
        "ar": "يرى",
        "pos": "verb",
        "emoji": "👀",
        "example": {
          "en": "I see my friend.",
          "ar": "أرى صديقي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v07",
        "en": "read",
        "ar": "يقرأ",
        "pos": "verb",
        "emoji": "📖",
        "example": {
          "en": "I read every day.",
          "ar": "أقرأ كل يوم."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v08",
        "en": "write",
        "ar": "يكتب",
        "pos": "verb",
        "emoji": "✍️",
        "example": {
          "en": "I write a word.",
          "ar": "أكتب كلمة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v09",
        "en": "speak",
        "ar": "يتحدث",
        "pos": "verb",
        "emoji": "🗣️",
        "example": {
          "en": "I speak English.",
          "ar": "أتحدث الإنجليزية."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v10",
        "en": "listen",
        "ar": "يستمع",
        "pos": "verb",
        "emoji": "🎧",
        "example": {
          "en": "I listen to my teacher.",
          "ar": "أستمع إلى معلمي."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v11",
        "en": "wake",
        "ar": "يستيقظ",
        "pos": "verb",
        "emoji": "⏰",
        "example": {
          "en": "I wake up early.",
          "ar": "أستيقظ مبكراً."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v12",
        "en": "play",
        "ar": "يلعب",
        "pos": "verb",
        "emoji": "⚽",
        "example": {
          "en": "I play after school.",
          "ar": "ألعب بعد المدرسة."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v13",
        "en": "work",
        "ar": "يعمل",
        "pos": "verb",
        "emoji": "💼",
        "example": {
          "en": "I work every day.",
          "ar": "أعمل كل يوم."
        },
        "collocations": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-v14",
        "en": "study",
        "ar": "يدرس",
        "pos": "verb",
        "emoji": "📚",
        "example": {
          "en": "I study English.",
          "ar": "أدرس الإنجليزية."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-s0-a1-foundation-home-verbs-s01",
        "en": "This is my sofa.",
        "ar": "هذا أريكة."
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-s02",
        "en": "This is my mirror.",
        "ar": "هذا مرآة."
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-s03",
        "en": "This is my floor.",
        "ar": "هذا أرضية."
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-s04",
        "en": "I go to school.",
        "ar": "أذهب إلى المدرسة."
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-s05",
        "en": "I come home at four.",
        "ar": "أعود إلى المنزل في الرابعة."
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-s06",
        "en": "I see my friend.",
        "ar": "أرى صديقي."
      }
    ],
    "dialogue": [],
    "phonetics": [
      {
        "id": "le-s0-a1-foundation-home-verbs-p01",
        "en": "house",
        "ipa": "/haʊs/",
        "ar": "منزل",
        "contrastPairs": [
          {
            "id": "le-s0-a1-foundation-home-verbs-p01-c-01",
            "en": "house / horse",
            "ar": "انتبه إلى اختلاف الحركة في الكلمتين."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-s0-a1-foundation-home-verbs-p01-s-01",
            "en": "My book is on the table.",
            "ar": "اربط الكلمات في العبارة بسلاسة، مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-s0-a1-foundation-home-verbs-p01-i-01",
            "en": "My book is on the table. ↘",
            "ar": "نبرة هادئة تهبط عند نهاية الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-s0-a1-foundation-home-verbs-l1-01",
        "incorrect": "The book is in the table.",
        "corrected": "The book is on the table.",
        "explanationAr": "استخدم on عندما يكون الشيء فوق سطح الطاولة.",
        "practice": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-l1-02",
        "incorrect": "I happy.",
        "corrected": "I am happy.",
        "explanationAr": "لا تحذف فعل الكينونة am في جملة الوصف.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-s0-a1-foundation-home-verbs-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Read the word.",
          "ar": "اقرأ الكلمة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-s0-a1-foundation-home-verbs-a02",
        "term": "example",
        "meaningAr": "مثال",
        "example": {
          "en": "Read one example.",
          "ar": "اقرأ مثالاً واحداً."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u1",
    "sourceId": "a1u1",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "التحيات والتعريف بالنفس",
    "titleEn": "Greetings and Introductions",
    "icon": "👋",
    "goalAr": "أن يحيّي المتعلم الآخرين ويعرّف بنفسه ويقدّم صديقاً بجمل قصيرة.",
    "grammar": [
      {
        "id": "le-a1-a1u1-g01",
        "titleAr": "فعل الكينونة في المضارع",
        "explainHtml": "<p>فعل الكينونة فعل أساسي في الإنجليزية، ومعناه يكون أو يوجد. نستخدمه للتعريف بأنفسنا ووصف حالتنا والأشياء من حولنا.</p><ul><li>يتغير شكل الفعل حسب الضمير، والجدول يوضح الصيغ الثلاث.</li><li>الصيغة الأولى خاصة بالمتكلم المفرد، والثانية للمخاطب والجمع، والثالثة للغائب المفرد.</li><li>لا نحذف الفعل من الجملة كما نفعل في العربية.</li></ul>",
        "explainText": "فعل الكينونة فعل أساسي في الإنجليزية، ومعناه يكون أو يوجد. نستخدمه للتعريف بأنفسنا ووصف حالتنا والأشياء من حولنا.\n• يتغير شكل الفعل حسب الضمير، والجدول يوضح الصيغ الثلاث.\n• الصيغة الأولى خاصة بالمتكلم المفرد، والثانية للمخاطب والجمع، والثالثة للغائب المفرد.\n• لا نحذف الفعل من الجملة كما نفعل في العربية.",
        "table": {
          "headers": [
            "الضمير",
            "الفعل",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "am",
              "I am a student."
            ],
            [
              "You",
              "are",
              "You are my friend."
            ],
            [
              "He",
              "is",
              "He is a teacher."
            ],
            [
              "She",
              "is",
              "She is fine today."
            ],
            [
              "It",
              "is",
              "It is a book."
            ],
            [
              "We",
              "are",
              "We are in the class."
            ],
            [
              "They",
              "are",
              "They are from Egypt."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u1-g01-e01",
            "en": "I am a student.",
            "ar": "أنا طالب."
          },
          {
            "id": "le-a1-a1u1-g01-e02",
            "en": "You are my friend.",
            "ar": "أنت صديقي."
          },
          {
            "id": "le-a1-a1u1-g01-e03",
            "en": "He is a teacher.",
            "ar": "هو مدرّس."
          },
          {
            "id": "le-a1-a1u1-g01-e04",
            "en": "She is fine today.",
            "ar": "هي بخير اليوم."
          },
          {
            "id": "le-a1-a1u1-g01-e05",
            "en": "We are in the class.",
            "ar": "نحن في الصف."
          },
          {
            "id": "le-a1-a1u1-g01-e06",
            "en": "They are from Egypt.",
            "ar": "هم من مصر."
          }
        ],
        "tips": [
          "استخدم الصيغة الكاملة في الكتابة، والاختصار في الكلام اليومي.",
          "لا تنسَ الفعل في الجملة، فالعربية تسمح بحذفه والإنجليزية لا تسمح.",
          "اختر صيغة الفعل المناسبة للضمير قبل أن تكتب الجملة."
        ]
      },
      {
        "id": "le-a1-a1u1-g02",
        "titleAr": "ضمائر الفاعل",
        "explainHtml": "<p>ضمائر الفاعل كلمات صغيرة تحل محل الاسم وتأتي قبل الفعل. في العربية يكون الضمير مخفياً داخل الفعل غالباً، أما في الإنجليزية فيجب ذكره دائماً.</p><ul><li>للمتكلم ضمير واحد دائماً.</li><li>للمخاطب ضمير واحد للمفرد والجمع.</li><li>للغائب ضمير للمفرد المذكر وضمير للمفرد المؤنث وضمير لغير العاقل.</li></ul>",
        "explainText": "ضمائر الفاعل كلمات صغيرة تحل محل الاسم وتأتي قبل الفعل. في العربية يكون الضمير مخفياً داخل الفعل غالباً، أما في الإنجليزية فيجب ذكره دائماً.\n• للمتكلم ضمير واحد دائماً.\n• للمخاطب ضمير واحد للمفرد والجمع.\n• للغائب ضمير للمفرد المذكر وضمير للمفرد المؤنث وضمير لغير العاقل.",
        "table": {
          "headers": [
            "الضمير",
            "المعنى",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "المتكلم",
              "I am here."
            ],
            [
              "You",
              "المخاطب",
              "You are nice."
            ],
            [
              "He",
              "الغائب المذكر",
              "He is a doctor."
            ],
            [
              "She",
              "الغائبة",
              "She is happy."
            ],
            [
              "It",
              "غير العاقل",
              "It is cold."
            ],
            [
              "We",
              "المتكلمون",
              "We are friends."
            ],
            [
              "They",
              "الغائبون",
              "They are students."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u1-g02-e01",
            "en": "I am happy.",
            "ar": "أنا سعيد."
          },
          {
            "id": "le-a1-a1u1-g02-e02",
            "en": "You are a good friend.",
            "ar": "أنت صديق جيد."
          },
          {
            "id": "le-a1-a1u1-g02-e03",
            "en": "It is a small house.",
            "ar": "إنه منزل صغير."
          },
          {
            "id": "le-a1-a1u1-g02-e04",
            "en": "We are ready.",
            "ar": "نحن مستعدون."
          },
          {
            "id": "le-a1-a1u1-g02-e05",
            "en": "They are at home.",
            "ar": "هم في المنزل."
          }
        ],
        "tips": [
          "يأتي ضمير الفاعل قبل الفعل في الجملة دائماً.",
          "نستخدم ضمير غير العاقل للأشياء والحيوانات.",
          "لا نكرر الاسم والضمير معاً في الجملة نفسها."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u1-v01",
        "en": "hello",
        "ar": "مرحباً",
        "pos": "phrase",
        "emoji": "👋",
        "example": {
          "en": "Hello, my name is Ali.",
          "ar": "مرحباً، اسمي علي."
        },
        "collocations": [
          {
            "id": "le-a1-a1u1-v01-c01",
            "en": "say hello",
            "ar": "يلقي التحية",
            "example": {
              "en": "Please say hello to your teacher.",
              "ar": "ألقِ التحية على معلمك من فضلك."
            }
          }
        ]
      },
      {
        "id": "le-a1-a1u1-v02",
        "en": "goodbye",
        "ar": "إلى اللقاء",
        "pos": "phrase",
        "emoji": "🙋",
        "example": {
          "en": "Goodbye, see you tomorrow.",
          "ar": "إلى اللقاء، أراك غداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v03",
        "en": "name",
        "ar": "اسم",
        "pos": "noun",
        "emoji": "📛",
        "example": {
          "en": "My name is Sara.",
          "ar": "اسمي سارة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v04",
        "en": "friend",
        "ar": "صديق",
        "pos": "noun",
        "emoji": "🤝",
        "example": {
          "en": "Ali is my friend.",
          "ar": "علي صديقي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v05",
        "en": "teacher",
        "ar": "مدرّس",
        "pos": "noun",
        "emoji": "👨‍🏫",
        "example": {
          "en": "My teacher is very kind.",
          "ar": "مدرّسي لطيف جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v06",
        "en": "student",
        "ar": "طالب",
        "pos": "noun",
        "emoji": "🧑‍🎓",
        "example": {
          "en": "I am a student in this school.",
          "ar": "أنا طالب في هذه المدرسة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v07",
        "en": "school",
        "ar": "مدرسة",
        "pos": "noun",
        "emoji": "🏫",
        "example": {
          "en": "My school is near my house.",
          "ar": "مدرستي قريبة من منزلي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v08",
        "en": "fine",
        "ar": "بخير",
        "pos": "adjective",
        "emoji": "🙂",
        "example": {
          "en": "I am fine, thank you.",
          "ar": "أنا بخير، شكراً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v09",
        "en": "nice",
        "ar": "لطيف",
        "pos": "adjective",
        "emoji": "😊",
        "example": {
          "en": "It is nice to meet you.",
          "ar": "من اللطيف لقاؤك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v10",
        "en": "meet",
        "ar": "يلتقي",
        "pos": "verb",
        "emoji": "🤝",
        "example": {
          "en": "Nice to meet you.",
          "ar": "سعيد بلقائك."
        },
        "collocations": [
          {
            "id": "le-a1-a1u1-v10-c01",
            "en": "meet a friend",
            "ar": "يلتقي صديقاً"
          }
        ]
      },
      {
        "id": "le-a1-a1u1-v11",
        "en": "morning",
        "ar": "صباح",
        "pos": "noun",
        "emoji": "🌅",
        "example": {
          "en": "Good morning, everyone.",
          "ar": "صباح الخير للجميع."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v12",
        "en": "please",
        "ar": "من فضلك",
        "pos": "adverb",
        "emoji": "🙏",
        "example": {
          "en": "Please sit down.",
          "ar": "من فضلك اجلس."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v13",
        "en": "thanks",
        "ar": "شكراً",
        "pos": "phrase",
        "emoji": "🙏",
        "example": {
          "en": "Thanks for your help.",
          "ar": "شكراً على مساعدتك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v14",
        "en": "sorry",
        "ar": "آسف",
        "pos": "adjective",
        "emoji": "😔",
        "example": {
          "en": "I am sorry, I am late.",
          "ar": "أنا آسف، أنا متأخر."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v15",
        "en": "class",
        "ar": "صف",
        "pos": "noun",
        "emoji": "🪑",
        "example": {
          "en": "Our class is big and clean.",
          "ar": "صفنا كبير ونظيف."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u1-v16",
        "en": "country",
        "ar": "بلد",
        "pos": "noun",
        "emoji": "🌍",
        "example": {
          "en": "Egypt is a beautiful country.",
          "ar": "مصر بلد جميل."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u1-s01",
        "en": "Hello, my name is Omar.",
        "ar": "مرحباً، اسمي عمر."
      },
      {
        "id": "le-a1-a1u1-s02",
        "en": "Good morning, how are you?",
        "ar": "صباح الخير، كيف حالك؟"
      },
      {
        "id": "le-a1-a1u1-s03",
        "en": "I am fine, thank you.",
        "ar": "أنا بخير، شكراً."
      },
      {
        "id": "le-a1-a1u1-s04",
        "en": "Nice to meet you.",
        "ar": "سعيد بلقائك."
      },
      {
        "id": "le-a1-a1u1-s05",
        "en": "This is my friend Sara.",
        "ar": "هذه صديقتي سارة."
      },
      {
        "id": "le-a1-a1u1-s06",
        "en": "She is a student here.",
        "ar": "هي طالبة هنا."
      },
      {
        "id": "le-a1-a1u1-s07",
        "en": "He is my English teacher.",
        "ar": "هو مدرّس الإنجليزية."
      },
      {
        "id": "le-a1-a1u1-s08",
        "en": "We are from the same country.",
        "ar": "نحن من البلد نفسه."
      },
      {
        "id": "le-a1-a1u1-s09",
        "en": "Welcome to our class.",
        "ar": "أهلاً بك في صفنا."
      },
      {
        "id": "le-a1-a1u1-s10",
        "en": "Please sit down and listen.",
        "ar": "من فضلك اجلس واستمع."
      },
      {
        "id": "le-a1-a1u1-s11",
        "en": "Goodbye, see you tomorrow.",
        "ar": "إلى اللقاء، أراك غداً."
      },
      {
        "id": "le-a1-a1u1-s12",
        "en": "I am sorry, I am late.",
        "ar": "أنا آسف، أنا متأخر."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u1-d01",
        "who": "A",
        "en": "Hello! My name is Sara.",
        "ar": "مرحباً! اسمي سارة."
      },
      {
        "id": "le-a1-a1u1-d02",
        "who": "B",
        "en": "Hi, Sara. I am Omar.",
        "ar": "أهلاً سارة. أنا عمر."
      },
      {
        "id": "le-a1-a1u1-d03",
        "who": "A",
        "en": "Nice to meet you, Omar.",
        "ar": "سعيد بلقائك يا عمر."
      },
      {
        "id": "le-a1-a1u1-d04",
        "who": "B",
        "en": "Nice to meet you too.",
        "ar": "سعيد بلقائك أيضاً."
      },
      {
        "id": "le-a1-a1u1-d05",
        "who": "A",
        "en": "How are you today?",
        "ar": "كيف حالك اليوم؟"
      },
      {
        "id": "le-a1-a1u1-d06",
        "who": "B",
        "en": "I am fine, thank you.",
        "ar": "أنا بخير، شكراً."
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u1-p-hello",
        "sourceId": "hello",
        "en": "hello",
        "ipa": "/həˈləʊ/",
        "ar": "مرحباً",
        "contrastPairs": [
          {
            "id": "le-a1-a1u1-p-hello-c-01",
            "en": "he / hi",
            "ar": "ميّز /ɪ/ القصيرة عن /iː/ الطويلة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u1-p-hello-s-01",
            "en": "Nice to meet you.",
            "ar": "اربط الكلمات بسلاسة مع إبقاء كل كلمة واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u1-p-hello-i-01",
            "en": "How are you? ↗",
            "ar": "تنغيم صاعد في السؤال الودّي القصير."
          }
        ]
      },
      {
        "id": "le-a1-a1u1-p-name",
        "sourceId": "name",
        "en": "name",
        "ipa": "/neɪm/",
        "ar": "اسم",
        "contrastPairs": [
          {
            "id": "le-a1-a1u1-p-name-c-01",
            "en": "name / nine",
            "ar": "لاحظ اختلاف الحركة والنهاية /m/ و/n/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u1-p-name-s-01",
            "en": "My name is Ali.",
            "ar": "قد يضعف صوت is في الكلام المتصل، لكنه لا يُحذف."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u1-p-name-i-01",
            "en": "My name is Sara. ↘",
            "ar": "تنغيم هابط عند إكمال المعلومة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u1-l1-copula",
        "sourceId": "copula",
        "incorrect": "I student.",
        "corrected": "I am a student.",
        "pattern": "حذف فعل الكينونة",
        "explanationAr": "قد تُحذف الرابطة في العربية، لكن الإنجليزية تحتاج am/is/are، ويحتاج الاسم المفرد المعدود غالباً a/an.",
        "practice": []
      },
      {
        "id": "le-a1-a1u1-l1-subject",
        "sourceId": "subject",
        "incorrect": "My name, it is Ali.",
        "corrected": "My name is Ali.",
        "pattern": "تكرار الفاعل اسماً وضميراً",
        "explanationAr": "اذكر الفاعل مرة واحدة في الجملة الإنجليزية المحايدة.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u1-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u1-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u2",
    "sourceId": "a1u2",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "العائلة والأشخاص",
    "titleEn": "Family and People",
    "icon": "👨‍👩‍👧‍👦",
    "goalAr": "أن يتحدث المتعلم عن أفراد أسرته ويصف الأشخاص من حوله.",
    "grammar": [
      {
        "id": "le-a1-a1u2-g01",
        "titleAr": "صفات الملكية",
        "explainHtml": "<p>صفات الملكية كلمات صغيرة توضع قبل الاسم لتبين من يملك الشيء. تتغير حسب صاحب الملك لا حسب الشيء المملوك.</p><ul><li>لكل ضمير صفة ملكية واحدة.</li><li>تأتي الصفة قبل الاسم مباشرة.</li><li>لا تتغير الصفة إذا كان الاسم مفرداً أو جمعاً.</li></ul>",
        "explainText": "صفات الملكية كلمات صغيرة توضع قبل الاسم لتبين من يملك الشيء. تتغير حسب صاحب الملك لا حسب الشيء المملوك.\n• لكل ضمير صفة ملكية واحدة.\n• تأتي الصفة قبل الاسم مباشرة.\n• لا تتغير الصفة إذا كان الاسم مفرداً أو جمعاً.",
        "table": {
          "headers": [
            "الضمير",
            "صفة الملكية",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "my",
              "My father is a teacher."
            ],
            [
              "You",
              "your",
              "Your sister is nice."
            ],
            [
              "He",
              "his",
              "His brother is young."
            ],
            [
              "She",
              "her",
              "Her mother is a doctor."
            ],
            [
              "It",
              "its",
              "Its color is brown."
            ],
            [
              "We",
              "our",
              "Our family is big."
            ],
            [
              "They",
              "their",
              "Their son is a student."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u2-g01-e01",
            "en": "My mother is a doctor.",
            "ar": "أمي طبيبة."
          },
          {
            "id": "le-a1-a1u2-g01-e02",
            "en": "His brother is young.",
            "ar": "أخوه صغير."
          },
          {
            "id": "le-a1-a1u2-g01-e03",
            "en": "Her sister is my friend.",
            "ar": "أختها صديقتي."
          },
          {
            "id": "le-a1-a1u2-g01-e04",
            "en": "Our family is big.",
            "ar": "عائلتنا كبيرة."
          },
          {
            "id": "le-a1-a1u2-g01-e05",
            "en": "Their son is a student.",
            "ar": "ابنهم طالب."
          }
        ],
        "tips": [
          "ضع صفة الملكية قبل الاسم مباشرة.",
          "اختر الصفة حسب صاحب الشيء لا حسب الشيء نفسه.",
          "لا تضف أداة تعريف قبل صفة الملكية."
        ]
      },
      {
        "id": "le-a1-a1u2-g02",
        "titleAr": "التعبير عن الملكية",
        "explainHtml": "<p>نستخدم فعل الملكية للتحدث عما نملكه من أشياء أو أفراد. له صيغتان: صيغة مع المتكلم والمخاطب والجمع، وصيغة أخرى مع المفرد الغائب.</p><ul><li>الصيغة الأولى تبقى كما هي مع أربعة ضمائر.</li><li>الصيغة الثانية خاصة بالمفرد الغائب المذكر والمؤنث وغير العاقل.</li><li>يمكن إضافة كلمة قصيرة بعد الفعل لتأكيد المعنى في الكلام اليومي.</li></ul>",
        "explainText": "نستخدم فعل الملكية للتحدث عما نملكه من أشياء أو أفراد. له صيغتان: صيغة مع المتكلم والمخاطب والجمع، وصيغة أخرى مع المفرد الغائب.\n• الصيغة الأولى تبقى كما هي مع أربعة ضمائر.\n• الصيغة الثانية خاصة بالمفرد الغائب المذكر والمؤنث وغير العاقل.\n• يمكن إضافة كلمة قصيرة بعد الفعل لتأكيد المعنى في الكلام اليومي.",
        "table": {
          "headers": [
            "الضمير",
            "الفعل",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "have got",
              "I have got one brother."
            ],
            [
              "You",
              "have got",
              "You have got a big family."
            ],
            [
              "He",
              "has got",
              "He has got two sisters."
            ],
            [
              "She",
              "has got",
              "She has got a nice house."
            ],
            [
              "We",
              "have got",
              "We have got a small car."
            ],
            [
              "They",
              "have got",
              "They have got three children."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u2-g02-e01",
            "en": "I have got one brother.",
            "ar": "لدي أخ واحد."
          },
          {
            "id": "le-a1-a1u2-g02-e02",
            "en": "She has got a big family.",
            "ar": "لديها عائلة كبيرة."
          },
          {
            "id": "le-a1-a1u2-g02-e03",
            "en": "He has got two sisters.",
            "ar": "لديه أختان."
          },
          {
            "id": "le-a1-a1u2-g02-e04",
            "en": "We have got a small house.",
            "ar": "لدينا منزل صغير."
          },
          {
            "id": "le-a1-a1u2-g02-e05",
            "en": "They have got a new car.",
            "ar": "لديهم سيارة جديدة."
          }
        ],
        "tips": [
          "نضيف حرف السين إلى الفعل مع المفرد الغائب.",
          "تأتي كلمة الإضافة بعد الفعل مباشرة.",
          "نستطيع استخدام الفعل وحده دون كلمة الإضافة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u2-v01",
        "en": "family",
        "ar": "عائلة",
        "pos": "noun",
        "emoji": "👨‍👩‍👧‍👦",
        "example": {
          "en": "My family is small and happy.",
          "ar": "عائلتي صغيرة وسعيدة."
        },
        "collocations": [
          {
            "id": "le-a1-a1u2-v01-c01",
            "en": "close family",
            "ar": "عائلة مترابطة"
          }
        ]
      },
      {
        "id": "le-a1-a1u2-v02",
        "en": "mother",
        "ar": "أم",
        "pos": "noun",
        "emoji": "👩",
        "example": {
          "en": "My mother is a doctor.",
          "ar": "أمي طبيبة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v03",
        "en": "father",
        "ar": "أب",
        "pos": "noun",
        "emoji": "👨",
        "example": {
          "en": "My father works in a bank.",
          "ar": "أبي يعمل في مصرف."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v04",
        "en": "brother",
        "ar": "أخ",
        "pos": "noun",
        "emoji": "👦",
        "example": {
          "en": "My brother is ten years old.",
          "ar": "أخي عمره عشر سنوات."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v05",
        "en": "sister",
        "ar": "أخت",
        "pos": "noun",
        "emoji": "👧",
        "example": {
          "en": "My sister likes music.",
          "ar": "أختي تحب الموسيقى."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v06",
        "en": "parents",
        "ar": "والدان",
        "pos": "noun",
        "emoji": "👫",
        "example": {
          "en": "My parents live in Cairo.",
          "ar": "والداي يسكنان في القاهرة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v07",
        "en": "son",
        "ar": "ابن",
        "pos": "noun",
        "emoji": "🧒",
        "example": {
          "en": "My son is five years old.",
          "ar": "ابني عمره خمس سنوات."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v08",
        "en": "daughter",
        "ar": "ابنة",
        "pos": "noun",
        "emoji": "👧",
        "example": {
          "en": "Her daughter is at school.",
          "ar": "ابنتها في المدرسة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v09",
        "en": "husband",
        "ar": "زوج",
        "pos": "noun",
        "emoji": "🤵",
        "example": {
          "en": "Her husband is a teacher.",
          "ar": "زوجها مدرّس."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v10",
        "en": "wife",
        "ar": "زوجة",
        "pos": "noun",
        "emoji": "👰",
        "example": {
          "en": "My wife is from Algeria.",
          "ar": "زوجتي من الجزائر."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v11",
        "en": "boy",
        "ar": "صبي",
        "pos": "noun",
        "emoji": "👦",
        "example": {
          "en": "The boy is very young.",
          "ar": "الصبي صغير جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v12",
        "en": "girl",
        "ar": "فتاة",
        "pos": "noun",
        "emoji": "👧",
        "example": {
          "en": "The girl is my sister.",
          "ar": "الفتاة أختي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v13",
        "en": "man",
        "ar": "رجل",
        "pos": "noun",
        "emoji": "🧍‍♂️",
        "example": {
          "en": "The man is my uncle.",
          "ar": "الرجل عمي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v14",
        "en": "woman",
        "ar": "امرأة",
        "pos": "noun",
        "emoji": "🧍‍♀️",
        "example": {
          "en": "The woman is very kind.",
          "ar": "المرأة لطيفة جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v15",
        "en": "love",
        "ar": "يحب",
        "pos": "verb",
        "emoji": "❤️",
        "example": {
          "en": "I love my family.",
          "ar": "أحب عائلتي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v16",
        "en": "live",
        "ar": "يسكن",
        "pos": "verb",
        "emoji": "🏠",
        "example": {
          "en": "We live in a small city.",
          "ar": "نسكن في مدينة صغيرة."
        },
        "collocations": [
          {
            "id": "le-a1-a1u2-v16-c01",
            "en": "live with",
            "ar": "يعيش مع"
          }
        ]
      },
      {
        "id": "le-a1-a1u2-v17",
        "en": "young",
        "ar": "صغير السن",
        "pos": "adjective",
        "emoji": "🧒",
        "example": {
          "en": "My sister is young and happy.",
          "ar": "أختي صغيرة وسعيدة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u2-v18",
        "en": "old",
        "ar": "كبير السن",
        "pos": "adjective",
        "emoji": "👴",
        "example": {
          "en": "My grandfather is old.",
          "ar": "جدي كبير في السن."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u2-s01",
        "en": "This is my family photo.",
        "ar": "هذه صورة عائلتي."
      },
      {
        "id": "le-a1-a1u2-s02",
        "en": "My mother is a doctor.",
        "ar": "أمي طبيبة."
      },
      {
        "id": "le-a1-a1u2-s03",
        "en": "My father works in a bank.",
        "ar": "أبي يعمل في مصرف."
      },
      {
        "id": "le-a1-a1u2-s04",
        "en": "I have two brothers and one sister.",
        "ar": "لدي أخوان وأخت واحدة."
      },
      {
        "id": "le-a1-a1u2-s05",
        "en": "My sister is ten years old.",
        "ar": "أختي عمرها عشر سنوات."
      },
      {
        "id": "le-a1-a1u2-s06",
        "en": "We live in a small city.",
        "ar": "نسكن في مدينة صغيرة."
      },
      {
        "id": "le-a1-a1u2-s07",
        "en": "My grandparents live with us.",
        "ar": "جدّاي يسكنان معنا."
      },
      {
        "id": "le-a1-a1u2-s08",
        "en": "Their son is a young boy.",
        "ar": "ابنهم صبي صغير."
      },
      {
        "id": "le-a1-a1u2-s09",
        "en": "She loves her family very much.",
        "ar": "تحب عائلتها كثيراً."
      },
      {
        "id": "le-a1-a1u2-s10",
        "en": "My brother has a new bike.",
        "ar": "أخي لديه دراجة جديدة."
      },
      {
        "id": "le-a1-a1u2-s11",
        "en": "My parents are kind and happy.",
        "ar": "والداي طيبان وسعيدان."
      },
      {
        "id": "le-a1-a1u2-s12",
        "en": "Our family is not very big.",
        "ar": "عائلتنا ليست كبيرة جداً."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u2-d01",
        "who": "A",
        "en": "Who is this in the photo?",
        "ar": "من هذه في الصورة؟"
      },
      {
        "id": "le-a1-a1u2-d02",
        "who": "B",
        "en": "This is my mother.",
        "ar": "هذه أمي."
      },
      {
        "id": "le-a1-a1u2-d03",
        "who": "A",
        "en": "And who is the young boy?",
        "ar": "ومن هذا الصبي الصغير؟"
      },
      {
        "id": "le-a1-a1u2-d04",
        "who": "B",
        "en": "He is my brother Omar.",
        "ar": "إنه أخي عمر."
      },
      {
        "id": "le-a1-a1u2-d05",
        "who": "A",
        "en": "Do you have sisters?",
        "ar": "هل لديك أخوات؟"
      },
      {
        "id": "le-a1-a1u2-d06",
        "who": "B",
        "en": "Yes, I have one sister.",
        "ar": "نعم، لدي أخت واحدة."
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u2-p-family",
        "sourceId": "family",
        "en": "family",
        "ipa": "/ˈfæməli/",
        "ar": "عائلة",
        "contrastPairs": [
          {
            "id": "le-a1-a1u2-p-family-c-01",
            "en": "man / men",
            "ar": "ميّز /æ/ في man عن /e/ في men."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u2-p-family-s-01",
            "en": "My mother is kind.",
            "ar": "اربط mother is بخفة دون حذف is."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u2-p-family-i-01",
            "en": "Is she your sister? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      },
      {
        "id": "le-a1-a1u2-p-brother",
        "sourceId": "brother",
        "en": "brother",
        "ipa": "/ˈbrʌðə(r)/",
        "ar": "أخ",
        "contrastPairs": [
          {
            "id": "le-a1-a1u2-p-brother-c-01",
            "en": "three / tree",
            "ar": "ابدأ /θ/ بوضع اللسان قرب الأسنان ولا تستبدله بـ/t/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u2-p-brother-s-01",
            "en": "This is my brother.",
            "ar": "تجنب إدخال حركة بين this وis."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u2-p-brother-i-01",
            "en": "He is very kind. ↘",
            "ar": "تنغيم هابط في الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u2-l1-possessive",
        "sourceId": "possessive",
        "incorrect": "the my sister",
        "corrected": "my sister",
        "pattern": "جمع أداة التعريف وصفة الملكية",
        "explanationAr": "صفة الملكية my تحدد صاحب الاسم، فلا تسبقها the.",
        "practice": []
      },
      {
        "id": "le-a1-a1u2-l1-repeated-subject",
        "sourceId": "repeated-subject",
        "incorrect": "My father, he is a doctor.",
        "corrected": "My father is a doctor.",
        "pattern": "تكرار الفاعل",
        "explanationAr": "يكفي الاسم فاعلاً؛ لا تكرره بضمير he في الجملة المحايدة.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u2-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u2-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u3",
    "sourceId": "a1u3",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "الأرقام والوقت والأيام",
    "titleEn": "Numbers, Time and Days",
    "icon": "🔢",
    "goalAr": "أن يقرأ المتعلم الأرقام ويقول الوقت ويسأل عن الأيام.",
    "grammar": [
      {
        "id": "le-a1-a1u3-g01",
        "titleAr": "جمع الأسماء",
        "explainHtml": "<p>نعبّر عن الجمع في الإنجليزية بإضافة مقطع ثابت إلى نهاية الاسم، وبعض الأسماء لها جمع شاذ نحفظه كما هو.</p><ul><li>نضيف حرف السين إلى معظم الأسماء.</li><li>الأسماء المنتهية بأصوات قريبة من السين تأخذ مقطعاً أطول.</li><li>بعض الأسماء شاذة مثل رجل ورجال وطفل وأطفال.</li></ul>",
        "explainText": "نعبّر عن الجمع في الإنجليزية بإضافة مقطع ثابت إلى نهاية الاسم، وبعض الأسماء لها جمع شاذ نحفظه كما هو.\n• نضيف حرف السين إلى معظم الأسماء.\n• الأسماء المنتهية بأصوات قريبة من السين تأخذ مقطعاً أطول.\n• بعض الأسماء شاذة مثل رجل ورجال وطفل وأطفال.",
        "table": {
          "headers": [
            "المفرد",
            "الجمع",
            "مثال"
          ],
          "rows": [
            [
              "book",
              "books",
              "I have two books."
            ],
            [
              "box",
              "boxes",
              "There are three boxes."
            ],
            [
              "city",
              "cities",
              "We visit two cities."
            ],
            [
              "family",
              "families",
              "Two families live here."
            ],
            [
              "man",
              "men",
              "Two men are at the door."
            ],
            [
              "child",
              "children",
              "The children are at school."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u3-g01-e01",
            "en": "I have two brothers.",
            "ar": "لدي أخوان."
          },
          {
            "id": "le-a1-a1u3-g01-e02",
            "en": "There are three books on the desk.",
            "ar": "هناك ثلاثة كتب على المكتب."
          },
          {
            "id": "le-a1-a1u3-g01-e03",
            "en": "We visit two cities every year.",
            "ar": "نزور مدينتين كل سنة."
          },
          {
            "id": "le-a1-a1u3-g01-e04",
            "en": "The children are in the garden.",
            "ar": "الأطفال في الحديقة."
          },
          {
            "id": "le-a1-a1u3-g01-e05",
            "en": "Two men are at the door.",
            "ar": "رجلان عند الباب."
          },
          {
            "id": "le-a1-a1u3-g01-e06",
            "en": "I need five minutes.",
            "ar": "أحتاج خمس دقائق."
          }
        ],
        "tips": [
          "نضيف حرف السين إلى معظم الأسماء لجمعها.",
          "الأسماء المنتهية بأصوات السين تأخذ مقطعاً أطول.",
          "احفظ الأسماء الشاذة كما هي دون إضافة."
        ]
      },
      {
        "id": "le-a1-a1u3-g02",
        "titleAr": "حروف الجر للزمان",
        "explainHtml": "<p>نستخدم حروف جر مختلفة مع الزمن: حرف للساعة، وحرف للأيام والتواريخ، وحرف للشهور والفصول والفترات الطويلة.</p><ul><li>الحرف الأول مع الساعات واللحظات المحددة.</li><li>الحرف الثاني مع الأيام والتواريخ.</li><li>الحرف الثالث مع الشهور والفصول والسنوات.</li></ul>",
        "explainText": "نستخدم حروف جر مختلفة مع الزمن: حرف للساعة، وحرف للأيام والتواريخ، وحرف للشهور والفصول والفترات الطويلة.\n• الحرف الأول مع الساعات واللحظات المحددة.\n• الحرف الثاني مع الأيام والتواريخ.\n• الحرف الثالث مع الشهور والفصول والسنوات.",
        "table": {
          "headers": [
            "الحرف",
            "الاستخدام",
            "مثال"
          ],
          "rows": [
            [
              "at",
              "الساعة واللحظة",
              "The class starts at eight."
            ],
            [
              "on",
              "اليوم والتاريخ",
              "My birthday is on Monday."
            ],
            [
              "in",
              "الشهر والفصل والسنة",
              "It is cold in January."
            ],
            [
              "at",
              "أوقات اليوم",
              "I sleep at night."
            ],
            [
              "on",
              "أيام الأسبوع",
              "We play on Friday."
            ],
            [
              "in",
              "فترات طويلة",
              "We travel in summer."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u3-g02-e01",
            "en": "The class starts at eight.",
            "ar": "يبدأ الدرس في الساعة الثامنة."
          },
          {
            "id": "le-a1-a1u3-g02-e02",
            "en": "I get up at seven every day.",
            "ar": "أستيقظ في السابعة كل يوم."
          },
          {
            "id": "le-a1-a1u3-g02-e03",
            "en": "My birthday is on Monday.",
            "ar": "عيد ميلادي يوم الاثنين."
          },
          {
            "id": "le-a1-a1u3-g02-e04",
            "en": "It is very cold in January.",
            "ar": "الجو بارد جداً في يناير."
          },
          {
            "id": "le-a1-a1u3-g02-e05",
            "en": "We have a holiday in summer.",
            "ar": "لدينا عطلة في الصيف."
          }
        ],
        "tips": [
          "استخدم الحرف الأول مع الساعة.",
          "استخدم الحرف الثاني مع الأيام والتواريخ.",
          "استخدم الحرف الثالث مع الشهور والفصول والسنوات."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u3-v01",
        "en": "number",
        "ar": "رقم",
        "pos": "noun",
        "emoji": "🔢",
        "example": {
          "en": "My favourite number is seven.",
          "ar": "رقمي المفضل هو سبعة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v02",
        "en": "one",
        "ar": "واحد",
        "pos": "adjective",
        "emoji": "1️⃣",
        "example": {
          "en": "I have one sister.",
          "ar": "لدي أخت واحدة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v03",
        "en": "two",
        "ar": "اثنان",
        "pos": "adjective",
        "emoji": "2️⃣",
        "example": {
          "en": "I have two hands.",
          "ar": "لدي يدان."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v04",
        "en": "three",
        "ar": "ثلاثة",
        "pos": "adjective",
        "emoji": "3️⃣",
        "example": {
          "en": "There are three books on the desk.",
          "ar": "هناك ثلاثة كتب على المكتب."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v05",
        "en": "ten",
        "ar": "عشرة",
        "pos": "adjective",
        "emoji": "🔟",
        "example": {
          "en": "My brother is ten years old.",
          "ar": "أخي عمره عشر سنوات."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v06",
        "en": "time",
        "ar": "وقت",
        "pos": "noun",
        "emoji": "⏰",
        "example": {
          "en": "What time is it now?",
          "ar": "كم الساعة الآن؟"
        },
        "collocations": [
          {
            "id": "le-a1-a1u3-v06-c01",
            "en": "tell the time",
            "ar": "يقرأ الساعة"
          }
        ]
      },
      {
        "id": "le-a1-a1u3-v07",
        "en": "clock",
        "ar": "ساعة حائط",
        "pos": "noun",
        "emoji": "🕐",
        "example": {
          "en": "The clock is on the wall.",
          "ar": "الساعة على الحائط."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v08",
        "en": "hour",
        "ar": "ساعة زمنية",
        "pos": "noun",
        "emoji": "⏳",
        "example": {
          "en": "The film is two hours long.",
          "ar": "الفيلم مدته ساعتان."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v09",
        "en": "minute",
        "ar": "دقيقة",
        "pos": "noun",
        "emoji": "⏱️",
        "example": {
          "en": "Wait a minute, please.",
          "ar": "انتظر دقيقة من فضلك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v10",
        "en": "day",
        "ar": "يوم",
        "pos": "noun",
        "emoji": "📅",
        "example": {
          "en": "Sunday is my favourite day.",
          "ar": "الأحد يومي المفضل."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v11",
        "en": "week",
        "ar": "أسبوع",
        "pos": "noun",
        "emoji": "🗓️",
        "example": {
          "en": "There are seven days in a week.",
          "ar": "في الأسبوع سبعة أيام."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v12",
        "en": "month",
        "ar": "شهر",
        "pos": "noun",
        "emoji": "📆",
        "example": {
          "en": "January is the first month.",
          "ar": "يناير هو الشهر الأول."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v13",
        "en": "year",
        "ar": "سنة",
        "pos": "noun",
        "emoji": "🎉",
        "example": {
          "en": "The year has twelve months.",
          "ar": "في السنة اثنا عشر شهراً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v14",
        "en": "today",
        "ar": "اليوم",
        "pos": "adverb",
        "emoji": "📅",
        "example": {
          "en": "Today is Monday.",
          "ar": "اليوم هو الاثنين."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v15",
        "en": "tomorrow",
        "ar": "غداً",
        "pos": "adverb",
        "emoji": "⏭️",
        "example": {
          "en": "See you tomorrow morning.",
          "ar": "أراك صباح الغد."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u3-v16",
        "en": "night",
        "ar": "ليل",
        "pos": "noun",
        "emoji": "🌙",
        "example": {
          "en": "Good night, sleep well.",
          "ar": "تصبح على خير، نم جيداً."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u3-s01",
        "en": "What time is it now?",
        "ar": "كم الساعة الآن؟"
      },
      {
        "id": "le-a1-a1u3-s02",
        "en": "It is eight o'clock.",
        "ar": "إنها الساعة الثامنة."
      },
      {
        "id": "le-a1-a1u3-s03",
        "en": "I have three books and two pens.",
        "ar": "لدي ثلاثة كتب وقلمان."
      },
      {
        "id": "le-a1-a1u3-s04",
        "en": "There are seven days in a week.",
        "ar": "في الأسبوع سبعة أيام."
      },
      {
        "id": "le-a1-a1u3-s05",
        "en": "Today is Sunday, the first day.",
        "ar": "اليوم هو الأحد، اليوم الأول."
      },
      {
        "id": "le-a1-a1u3-s06",
        "en": "My birthday is on the tenth of May.",
        "ar": "عيد ميلادي في العاشر من مايو."
      },
      {
        "id": "le-a1-a1u3-s07",
        "en": "The class starts at nine in the morning.",
        "ar": "يبدأ الدرس في التاسعة صباحاً."
      },
      {
        "id": "le-a1-a1u3-s08",
        "en": "We have lunch at two o'clock.",
        "ar": "نتناول الغداء في الساعة الثانية."
      },
      {
        "id": "le-a1-a1u3-s09",
        "en": "See you tomorrow at the station.",
        "ar": "أراك غداً في المحطة."
      },
      {
        "id": "le-a1-a1u3-s10",
        "en": "I sleep eight hours every night.",
        "ar": "أنام ثماني ساعات كل ليلة."
      },
      {
        "id": "le-a1-a1u3-s11",
        "en": "The year has twelve months.",
        "ar": "في السنة اثنا عشر شهراً."
      },
      {
        "id": "le-a1-a1u3-s12",
        "en": "Wait a minute, please.",
        "ar": "انتظر دقيقة من فضلك."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u3-d01",
        "who": "A",
        "en": "Excuse me, what time is it?",
        "ar": "عفواً، كم الساعة؟"
      },
      {
        "id": "le-a1-a1u3-d02",
        "who": "B",
        "en": "It is ten o'clock.",
        "ar": "إنها الساعة العاشرة."
      },
      {
        "id": "le-a1-a1u3-d03",
        "who": "A",
        "en": "Thanks. What day is it today?",
        "ar": "شكراً. ما هو اليوم؟"
      },
      {
        "id": "le-a1-a1u3-d04",
        "who": "B",
        "en": "Today is Monday.",
        "ar": "اليوم هو الاثنين."
      },
      {
        "id": "le-a1-a1u3-d05",
        "who": "A",
        "en": "And when is our class?",
        "ar": "ومتى درسنا؟"
      },
      {
        "id": "le-a1-a1u3-d06",
        "who": "B",
        "en": "Our class is at eleven.",
        "ar": "درسنا في الساعة الحادية عشرة."
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u3-p-three",
        "sourceId": "three",
        "en": "three",
        "ipa": "/θriː/",
        "ar": "ثلاثة",
        "contrastPairs": [
          {
            "id": "le-a1-a1u3-p-three-c-01",
            "en": "three / tree",
            "ar": "ميّز /θ/ عن /t/ ولا تحوّل th إلى تاء."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u3-p-three-s-01",
            "en": "three o'clock",
            "ar": "اربط العدد بعبارة الوقت من دون وقفة طويلة."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u3-p-three-i-01",
            "en": "What time is it? ↘",
            "ar": "تنغيم هابط شائع في سؤال أداة الاستفهام."
          }
        ]
      },
      {
        "id": "le-a1-a1u3-p-day",
        "sourceId": "day",
        "en": "day",
        "ipa": "/deɪ/",
        "ar": "يوم",
        "contrastPairs": [
          {
            "id": "le-a1-a1u3-p-day-c-01",
            "en": "day / they",
            "ar": "ميّز /d/ عن /ð/ في بداية الكلمة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u3-p-day-s-01",
            "en": "on Monday at eight",
            "ar": "اربط on بـMonday مع إبقاء حرف الجر مسموعاً."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u3-p-day-i-01",
            "en": "Is it Friday today? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u3-l1-plural",
        "sourceId": "plural",
        "incorrect": "two book",
        "corrected": "two books",
        "pattern": "نسيان علامة الجمع",
        "explanationAr": "يأتي الاسم المعدود جمعاً بعد الأعداد الأكبر من واحد.",
        "practice": []
      },
      {
        "id": "le-a1-a1u3-l1-weekday-preposition",
        "sourceId": "weekday-preposition",
        "incorrect": "in Monday",
        "corrected": "on Monday",
        "pattern": "نقل حرف الجر حرفياً",
        "explanationAr": "تُستخدم on مع أيام الأسبوع، وat مع وقت الساعة المحدد مثل at six.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u3-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u3-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u4",
    "sourceId": "a1u4",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "الطعام والشراب",
    "titleEn": "Food and Drink",
    "icon": "🍽️",
    "goalAr": "أن يعبّر المتعلم عن احتياجاته الغذائية ويطلب الطعام بلباقة.",
    "grammar": [
      {
        "id": "le-a1-a1u4-g01",
        "titleAr": "المضارع البسيط",
        "explainHtml": "<p>نستخدم المضارع البسيط للعادات اليومية والحقائق الثابتة. لا يتغير الفعل إلا مع المفرد الغائب حيث نضيف إليه حرف السين.</p><ul><li>نستعمل الصيغة الأصلية مع المتكلم والمخاطب والجمع.</li><li>نضيف حرف السين مع المفرد الغائب المذكر والمؤنث.</li><li>بعد أفعال الإعجاب يأتي الفعل الثاني بمقطع ثابت في نهايته كما في الجدول.</li></ul>",
        "explainText": "نستخدم المضارع البسيط للعادات اليومية والحقائق الثابتة. لا يتغير الفعل إلا مع المفرد الغائب حيث نضيف إليه حرف السين.\n• نستعمل الصيغة الأصلية مع المتكلم والمخاطب والجمع.\n• نضيف حرف السين مع المفرد الغائب المذكر والمؤنث.\n• بعد أفعال الإعجاب يأتي الفعل الثاني بمقطع ثابت في نهايته كما في الجدول.",
        "table": {
          "headers": [
            "الضمير",
            "الفعل",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "eat",
              "I eat bread every morning."
            ],
            [
              "He",
              "eats",
              "He eats an apple after lunch."
            ],
            [
              "She",
              "drinks",
              "She drinks milk at night."
            ],
            [
              "We",
              "have",
              "We have dinner at eight."
            ],
            [
              "I",
              "like reading",
              "I like reading books."
            ],
            [
              "She",
              "likes drinking",
              "She likes drinking tea."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u4-g01-e01",
            "en": "I eat bread every morning.",
            "ar": "آكل الخبز كل صباح."
          },
          {
            "id": "le-a1-a1u4-g01-e02",
            "en": "She drinks milk at night.",
            "ar": "تشرب الحليب في الليل."
          },
          {
            "id": "le-a1-a1u4-g01-e03",
            "en": "He eats an apple after lunch.",
            "ar": "يأكل تفاحة بعد الغداء."
          },
          {
            "id": "le-a1-a1u4-g01-e04",
            "en": "We have dinner at eight.",
            "ar": "نتعشى في الثامنة."
          },
          {
            "id": "le-a1-a1u4-g01-e05",
            "en": "I like reading books.",
            "ar": "أحب قراءة الكتب."
          },
          {
            "id": "le-a1-a1u4-g01-e06",
            "en": "She likes drinking tea.",
            "ar": "تحب شرب الشاي."
          }
        ],
        "tips": [
          "نضيف حرف السين إلى الفعل مع المفرد الغائب.",
          "نستعمل هذا الزمن للعادات اليومية والحقائق.",
          "بعد فعل الإعجاب يأتي الفعل الثاني بمقطع ثابت في نهايته."
        ]
      },
      {
        "id": "le-a1-a1u4-g02",
        "titleAr": "التعبير عن الكمية",
        "explainHtml": "<p>نستخدم أداتي الكمية للتحدث عن كمية غير محددة. الأولى في الجمل المثبتة، والثانية في النفي والسؤال.</p><ul><li>تأتي الأولى مع الأسماء غير المعدودة ومع الجمع.</li><li>تأتي الثانية في النفي والسؤال.</li><li>نستخدم الأولى أيضاً في العرض والطلب المؤدب.</li></ul>",
        "explainText": "نستخدم أداتي الكمية للتحدث عن كمية غير محددة. الأولى في الجمل المثبتة، والثانية في النفي والسؤال.\n• تأتي الأولى مع الأسماء غير المعدودة ومع الجمع.\n• تأتي الثانية في النفي والسؤال.\n• نستخدم الأولى أيضاً في العرض والطلب المؤدب.",
        "table": {
          "headers": [
            "الكلمة",
            "الاستخدام",
            "مثال"
          ],
          "rows": [
            [
              "some",
              "في الإثبات",
              "I have some bread."
            ],
            [
              "any",
              "في النفي",
              "I do not have any milk."
            ],
            [
              "any",
              "في السؤال",
              "Do you have any water?"
            ],
            [
              "some",
              "في العرض والطلب",
              "Would you like some tea?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u4-g02-e01",
            "en": "I have some bread and cheese.",
            "ar": "لدي بعض الخبز والجبن."
          },
          {
            "id": "le-a1-a1u4-g02-e02",
            "en": "There is some milk in the fridge.",
            "ar": "هناك بعض الحليب في الثلاجة."
          },
          {
            "id": "le-a1-a1u4-g02-e03",
            "en": "I do not have any apples.",
            "ar": "ليس لدي أي تفاح."
          },
          {
            "id": "le-a1-a1u4-g02-e04",
            "en": "Do you have any water?",
            "ar": "هل لديك أي ماء؟"
          },
          {
            "id": "le-a1-a1u4-g02-e05",
            "en": "Would you like some tea?",
            "ar": "هل ترغب في بعض الشاي؟"
          }
        ],
        "tips": [
          "استخدم الكلمة الأولى في الجمل المثبتة.",
          "استخدم الكلمة الثانية في النفي والسؤال.",
          "استخدم الكلمة الأولى أيضاً في الطلب والعرض المؤدب."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u4-v01",
        "en": "food",
        "ar": "طعام",
        "pos": "noun",
        "emoji": "🍽️",
        "example": {
          "en": "I like healthy food.",
          "ar": "أحب الطعام الصحي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v02",
        "en": "water",
        "ar": "ماء",
        "pos": "noun",
        "emoji": "💧",
        "example": {
          "en": "I drink water every day.",
          "ar": "أشرب الماء كل يوم."
        },
        "collocations": [
          {
            "id": "le-a1-a1u4-v02-c01",
            "en": "a glass of water",
            "ar": "كوب من الماء"
          }
        ]
      },
      {
        "id": "le-a1-a1u4-v03",
        "en": "bread",
        "ar": "خبز",
        "pos": "noun",
        "emoji": "🍞",
        "example": {
          "en": "We buy fresh bread every morning.",
          "ar": "نشتري الخبز الطازج كل صباح."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v04",
        "en": "milk",
        "ar": "حليب",
        "pos": "noun",
        "emoji": "🥛",
        "example": {
          "en": "She drinks milk at night.",
          "ar": "تشرب الحليب في الليل."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v05",
        "en": "tea",
        "ar": "شاي",
        "pos": "noun",
        "emoji": "🍵",
        "example": {
          "en": "My father drinks tea after lunch.",
          "ar": "أبي يشرب الشاي بعد الغداء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v06",
        "en": "coffee",
        "ar": "قهوة",
        "pos": "noun",
        "emoji": "☕",
        "example": {
          "en": "I drink coffee in the morning.",
          "ar": "أشرب القهوة في الصباح."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v07",
        "en": "rice",
        "ar": "أرز",
        "pos": "noun",
        "emoji": "🍚",
        "example": {
          "en": "We eat rice with chicken.",
          "ar": "نأكل الأرز مع الدجاج."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v08",
        "en": "egg",
        "ar": "بيضة",
        "pos": "noun",
        "emoji": "🥚",
        "example": {
          "en": "I eat one egg for breakfast.",
          "ar": "آكل بيضة واحدة في الفطور."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v09",
        "en": "cheese",
        "ar": "جبن",
        "pos": "noun",
        "emoji": "🧀",
        "example": {
          "en": "This cheese is very good.",
          "ar": "هذا الجبن جيد جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v10",
        "en": "apple",
        "ar": "تفاحة",
        "pos": "noun",
        "emoji": "🍎",
        "example": {
          "en": "The apple is red and sweet.",
          "ar": "التفاحة حمراء وحلوة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v11",
        "en": "banana",
        "ar": "موزة",
        "pos": "noun",
        "emoji": "🍌",
        "example": {
          "en": "The banana is yellow.",
          "ar": "الموزة صفراء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v12",
        "en": "chicken",
        "ar": "دجاج",
        "pos": "noun",
        "emoji": "🍗",
        "example": {
          "en": "We have chicken for dinner.",
          "ar": "نتناول الدجاج في العشاء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v13",
        "en": "eat",
        "ar": "يأكل",
        "pos": "verb",
        "emoji": "🍽️",
        "example": {
          "en": "We eat dinner at eight.",
          "ar": "نتعشى في الثامنة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v14",
        "en": "drink",
        "ar": "يشرب",
        "pos": "verb",
        "emoji": "🥤",
        "example": {
          "en": "I drink a lot of water.",
          "ar": "أشرب كثيراً من الماء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v15",
        "en": "hungry",
        "ar": "جائع",
        "pos": "adjective",
        "emoji": "😋",
        "example": {
          "en": "I am hungry now.",
          "ar": "أنا جائع الآن."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u4-v16",
        "en": "breakfast",
        "ar": "فطور",
        "pos": "noun",
        "emoji": "🍳",
        "example": {
          "en": "I have breakfast at seven.",
          "ar": "أتناول الفطور في السابعة."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u4-s01",
        "en": "I am hungry and thirsty.",
        "ar": "أنا جائع وعطشان."
      },
      {
        "id": "le-a1-a1u4-s02",
        "en": "We eat breakfast at seven.",
        "ar": "نتناول الفطور في السابعة."
      },
      {
        "id": "le-a1-a1u4-s03",
        "en": "She drinks tea with milk.",
        "ar": "تشرب الشاي مع الحليب."
      },
      {
        "id": "le-a1-a1u4-s04",
        "en": "My father likes black coffee.",
        "ar": "أبي يحب القهوة السادة."
      },
      {
        "id": "le-a1-a1u4-s05",
        "en": "There is some bread on the table.",
        "ar": "هناك بعض الخبز على الطاولة."
      },
      {
        "id": "le-a1-a1u4-s06",
        "en": "I do not like cold coffee.",
        "ar": "لا أحب القهوة الباردة."
      },
      {
        "id": "le-a1-a1u4-s07",
        "en": "Would you like an apple?",
        "ar": "هل ترغب في تفاحة؟"
      },
      {
        "id": "le-a1-a1u4-s08",
        "en": "We have rice and chicken for dinner.",
        "ar": "نتناول الأرز والدجاج في العشاء."
      },
      {
        "id": "le-a1-a1u4-s09",
        "en": "He eats two eggs every morning.",
        "ar": "يأكل بيضتين كل صباح."
      },
      {
        "id": "le-a1-a1u4-s10",
        "en": "The water is cold and clean.",
        "ar": "الماء بارد ونظيف."
      },
      {
        "id": "le-a1-a1u4-s11",
        "en": "Please give me some water.",
        "ar": "أعطني بعض الماء من فضلك."
      },
      {
        "id": "le-a1-a1u4-s12",
        "en": "My sister does not eat cheese.",
        "ar": "أختي لا تأكل الجبن."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u4-d01",
        "who": "A",
        "en": "I am hungry. Are you hungry too?",
        "ar": "أنا جائع. هل أنت جائع أيضاً؟"
      },
      {
        "id": "le-a1-a1u4-d02",
        "who": "B",
        "en": "Yes, I am very hungry.",
        "ar": "نعم، أنا جائع جداً."
      },
      {
        "id": "le-a1-a1u4-d03",
        "who": "A",
        "en": "What would you like to eat?",
        "ar": "ماذا تحب أن تأكل؟"
      },
      {
        "id": "le-a1-a1u4-d04",
        "who": "B",
        "en": "I would like some rice and chicken.",
        "ar": "أريد بعض الأرز والدجاج."
      },
      {
        "id": "le-a1-a1u4-d05",
        "who": "A",
        "en": "Would you like some tea?",
        "ar": "هل ترغب في بعض الشاي؟"
      },
      {
        "id": "le-a1-a1u4-d06",
        "who": "B",
        "en": "No, thanks. I would like some water.",
        "ar": "لا، شكراً. أريد بعض الماء."
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u4-p-egg",
        "sourceId": "egg",
        "en": "egg",
        "ipa": "/eɡ/",
        "ar": "بيضة",
        "contrastPairs": [
          {
            "id": "le-a1-a1u4-p-egg-c-01",
            "en": "pen / pan",
            "ar": "ميّز /e/ في pen عن /æ/ في pan."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u4-p-egg-s-01",
            "en": "an apple",
            "ar": "اربط an بالكلمة التالية دون فصل مصطنع."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u4-p-egg-i-01",
            "en": "Would you like some tea? ↘",
            "ar": "غالباً ينخفض الصوت في العرض المهذب."
          }
        ]
      },
      {
        "id": "le-a1-a1u4-p-rice",
        "sourceId": "rice",
        "en": "rice",
        "ipa": "/raɪs/",
        "ar": "أرز",
        "contrastPairs": [
          {
            "id": "le-a1-a1u4-p-rice-c-01",
            "en": "rice / rise",
            "ar": "ميّز /s/ المهموسة عن /z/ المجهورة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u4-p-rice-s-01",
            "en": "I eat rice every day.",
            "ar": "حافظ على نهايات الكلمات عند وصل الجملة."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u4-p-rice-i-01",
            "en": "Tea or coffee? ↘↗",
            "ar": "قد يرتفع الصوت عند الخيار الأول ويهبط عند الأخير."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u4-l1-article",
        "sourceId": "article",
        "incorrect": "I eat apple.",
        "corrected": "I eat an apple.",
        "pattern": "حذف أداة التنكير",
        "explanationAr": "الاسم المفرد المعدود يحتاج عادةً a أو an إذا لم يكن محدداً.",
        "practice": []
      },
      {
        "id": "le-a1-a1u4-l1-uncountable",
        "sourceId": "uncountable",
        "incorrect": "two breads",
        "corrected": "two pieces of bread",
        "pattern": "جمع اسم غير معدود",
        "explanationAr": "bread غير معدود بهذا المعنى؛ استخدم وحدة مثل pieces of bread.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u4-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u4-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u5",
    "sourceId": "a1u5",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "المنزل والأشياء اليومية",
    "titleEn": "Home and Daily Things",
    "icon": "🏠",
    "goalAr": "أن يصف المتعلم منزله وأشيائه اليومية ومواقعها في المكان.",
    "grammar": [
      {
        "id": "le-a1-a1u5-g01",
        "titleAr": "التعبير عن الوجود وأدوات التعريف",
        "explainHtml": "<p>نستخدم صيغة الوجود للقول إن شيئاً موجود في مكان ما. نختار الصيغة حسب العدد، ونضع قبل الاسم أداة تنكير أو تعريف.</p><ul><li>صيغة للمفرد وصيغة للجمع.</li><li>نضع أداة التنكير قبل الاسم المفرد المذكور أول مرة.</li><li>نضع أداة التعريف عند الحديث عن شيء معروف أو مذكور سابقاً.</li></ul>",
        "explainText": "نستخدم صيغة الوجود للقول إن شيئاً موجود في مكان ما. نختار الصيغة حسب العدد، ونضع قبل الاسم أداة تنكير أو تعريف.\n• صيغة للمفرد وصيغة للجمع.\n• نضع أداة التنكير قبل الاسم المفرد المذكور أول مرة.\n• نضع أداة التعريف عند الحديث عن شيء معروف أو مذكور سابقاً.",
        "table": {
          "headers": [
            "الصيغة",
            "الاستخدام",
            "مثال"
          ],
          "rows": [
            [
              "There is",
              "شيء واحد",
              "There is a bed in my room."
            ],
            [
              "There are",
              "أشياء كثيرة",
              "There are two windows in my room."
            ],
            [
              "There is not",
              "نفي المفرد",
              "There is not a garden here."
            ],
            [
              "Is there",
              "السؤال عن المفرد",
              "Is there a table in the kitchen?"
            ],
            [
              "a",
              "قبل اسم مفرد يبدأ بحرف ساكن",
              "This is a chair."
            ],
            [
              "an",
              "قبل اسم مفرد يبدأ بحرف علة",
              "This is an old house."
            ],
            [
              "the",
              "لشيء معروف",
              "The house is very old."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u5-g01-e01",
            "en": "There is a bed in my room.",
            "ar": "هناك سرير في غرفتي."
          },
          {
            "id": "le-a1-a1u5-g01-e02",
            "en": "There are two windows in the kitchen.",
            "ar": "هناك نافذتان في المطبخ."
          },
          {
            "id": "le-a1-a1u5-g01-e03",
            "en": "Is there a bathroom near here?",
            "ar": "هل هناك حمام قريب من هنا؟"
          },
          {
            "id": "le-a1-a1u5-g01-e04",
            "en": "There are not any chairs in the garden.",
            "ar": "ليس هناك أي كراسي في الحديقة."
          },
          {
            "id": "le-a1-a1u5-g01-e05",
            "en": "This is an old house.",
            "ar": "هذا منزل قديم."
          },
          {
            "id": "le-a1-a1u5-g01-e06",
            "en": "The door is open.",
            "ar": "الباب مفتوح."
          }
        ],
        "tips": [
          "استخدم الصيغة الأولى مع المفرد والثانية مع الجمع.",
          "ضع أداة التنكير قبل الاسم المفرد المذكور أول مرة، وأداة التعريف عند إعادة ذكره.",
          "في النفي والسؤال استخدم أداة الكمية المناسبة مع الجمع."
        ]
      },
      {
        "id": "le-a1-a1u5-g02",
        "titleAr": "حروف الجر للمكان",
        "explainHtml": "<p>حروف الجر للمكان تبين موضع الشيء. نضعها قبل الاسم للدلالة على مكانه بدقة.</p><ul><li>حرف للداخل وحرف للملامسة السطحية.</li><li>حرف لما هو أسفل شيء آخر.</li><li>عبارات مركبة للجانب والخلف والأمام.</li></ul>",
        "explainText": "حروف الجر للمكان تبين موضع الشيء. نضعها قبل الاسم للدلالة على مكانه بدقة.\n• حرف للداخل وحرف للملامسة السطحية.\n• حرف لما هو أسفل شيء آخر.\n• عبارات مركبة للجانب والخلف والأمام.",
        "table": {
          "headers": [
            "الحرف",
            "الاستخدام",
            "مثال"
          ],
          "rows": [
            [
              "in",
              "داخل شيء",
              "The keys are in my bag."
            ],
            [
              "on",
              "على سطح",
              "The book is on the table."
            ],
            [
              "under",
              "تحت",
              "The cat is under the chair."
            ],
            [
              "next to",
              "بجانب",
              "The lamp is next to the bed."
            ],
            [
              "behind",
              "خلف",
              "The garden is behind the house."
            ],
            [
              "in front of",
              "أمام",
              "The car is in front of the door."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u5-g02-e01",
            "en": "The book is on the table.",
            "ar": "الكتاب على الطاولة."
          },
          {
            "id": "le-a1-a1u5-g02-e02",
            "en": "My phone is in my bag.",
            "ar": "هاتفي في حقيبتي."
          },
          {
            "id": "le-a1-a1u5-g02-e03",
            "en": "The cat is under the chair.",
            "ar": "القطة تحت الكرسي."
          },
          {
            "id": "le-a1-a1u5-g02-e04",
            "en": "The lamp is next to my bed.",
            "ar": "المصباح بجانب سريري."
          },
          {
            "id": "le-a1-a1u5-g02-e05",
            "en": "The garden is behind the house.",
            "ar": "الحديقة خلف المنزل."
          },
          {
            "id": "le-a1-a1u5-g02-e06",
            "en": "The car is in front of the door.",
            "ar": "السيارة أمام الباب."
          }
        ],
        "tips": [
          "استخدم الحرف الأول للداخل والحرف الثاني للملامسة السطحية.",
          "استخدم الحرف الثالث لما هو أسفل شيء آخر.",
          "استخدم العبارات المركبة للموضع الجانبي والخلفي والأمامي."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u5-v01",
        "en": "house",
        "ar": "منزل",
        "pos": "noun",
        "emoji": "🏠",
        "example": {
          "en": "Our house is big and clean.",
          "ar": "منزلنا كبير ونظيف."
        },
        "collocations": [
          {
            "id": "le-a1-a1u5-v01-c01",
            "en": "at home",
            "ar": "في المنزل"
          }
        ]
      },
      {
        "id": "le-a1-a1u5-v02",
        "en": "room",
        "ar": "غرفة",
        "pos": "noun",
        "emoji": "🚪",
        "example": {
          "en": "My room is small but nice.",
          "ar": "غرفتي صغيرة لكنها جميلة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v03",
        "en": "door",
        "ar": "باب",
        "pos": "noun",
        "emoji": "🚪",
        "example": {
          "en": "Please close the door.",
          "ar": "أغلق الباب من فضلك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v04",
        "en": "window",
        "ar": "نافذة",
        "pos": "noun",
        "emoji": "🪟",
        "example": {
          "en": "Open the window, please.",
          "ar": "افتح النافذة من فضلك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v05",
        "en": "table",
        "ar": "طاولة",
        "pos": "noun",
        "emoji": "🪑",
        "example": {
          "en": "The keys are on the table.",
          "ar": "المفاتيح على الطاولة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v06",
        "en": "chair",
        "ar": "كرسي",
        "pos": "noun",
        "emoji": "💺",
        "example": {
          "en": "This chair is very comfortable.",
          "ar": "هذا الكرسي مريح جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v07",
        "en": "bed",
        "ar": "سرير",
        "pos": "noun",
        "emoji": "🛏️",
        "example": {
          "en": "My bed is next to the window.",
          "ar": "سريري بجانب النافذة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v08",
        "en": "kitchen",
        "ar": "مطبخ",
        "pos": "noun",
        "emoji": "🍳",
        "example": {
          "en": "My mother is in the kitchen.",
          "ar": "أمي في المطبخ."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v09",
        "en": "bathroom",
        "ar": "حمام",
        "pos": "noun",
        "emoji": "🚿",
        "example": {
          "en": "The bathroom is next to my room.",
          "ar": "الحمام بجانب غرفتي."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v10",
        "en": "garden",
        "ar": "حديقة",
        "pos": "noun",
        "emoji": "🌳",
        "example": {
          "en": "We have a small garden.",
          "ar": "لدينا حديقة صغيرة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v11",
        "en": "key",
        "ar": "مفتاح",
        "pos": "noun",
        "emoji": "🔑",
        "example": {
          "en": "Where is my key?",
          "ar": "أين مفتاحي؟"
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v12",
        "en": "book",
        "ar": "كتاب",
        "pos": "noun",
        "emoji": "📖",
        "example": {
          "en": "This book is very interesting.",
          "ar": "هذا الكتاب ممتع جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v13",
        "en": "phone",
        "ar": "هاتف",
        "pos": "noun",
        "emoji": "📱",
        "example": {
          "en": "My phone is on the table.",
          "ar": "هاتفي على الطاولة."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v14",
        "en": "lamp",
        "ar": "مصباح",
        "pos": "noun",
        "emoji": "💡",
        "example": {
          "en": "Please turn on the lamp.",
          "ar": "أشعل المصباح من فضلك."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v15",
        "en": "clean",
        "ar": "ينظّف",
        "pos": "verb",
        "emoji": "🧹",
        "example": {
          "en": "I clean my room every day.",
          "ar": "أنظّف غرفتي كل يوم."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u5-v16",
        "en": "sleep",
        "ar": "ينام",
        "pos": "verb",
        "emoji": "😴",
        "example": {
          "en": "I sleep eight hours every night.",
          "ar": "أنام ثماني ساعات كل ليلة."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u5-s01",
        "en": "My house has three rooms.",
        "ar": "منزلي فيه ثلاث غرف."
      },
      {
        "id": "le-a1-a1u5-s02",
        "en": "There is a big window in my room.",
        "ar": "هناك نافذة كبيرة في غرفتي."
      },
      {
        "id": "le-a1-a1u5-s03",
        "en": "The kitchen is next to the bathroom.",
        "ar": "المطبخ بجانب الحمام."
      },
      {
        "id": "le-a1-a1u5-s04",
        "en": "My keys are on the table.",
        "ar": "مفاتيحي على الطاولة."
      },
      {
        "id": "le-a1-a1u5-s05",
        "en": "Please close the door.",
        "ar": "أغلق الباب من فضلك."
      },
      {
        "id": "le-a1-a1u5-s06",
        "en": "I clean my room every morning.",
        "ar": "أنظّف غرفتي كل صباح."
      },
      {
        "id": "le-a1-a1u5-s07",
        "en": "The cat is under the bed.",
        "ar": "القطة تحت السرير."
      },
      {
        "id": "le-a1-a1u5-s08",
        "en": "We have a small garden behind the house.",
        "ar": "لدينا حديقة صغيرة خلف المنزل."
      },
      {
        "id": "le-a1-a1u5-s09",
        "en": "My phone is in my bag.",
        "ar": "هاتفي في حقيبتي."
      },
      {
        "id": "le-a1-a1u5-s10",
        "en": "This chair is very comfortable.",
        "ar": "هذا الكرسي مريح جداً."
      },
      {
        "id": "le-a1-a1u5-s11",
        "en": "There are two lamps in the room.",
        "ar": "هناك مصباحان في الغرفة."
      },
      {
        "id": "le-a1-a1u5-s12",
        "en": "I sleep eight hours every night.",
        "ar": "أنام ثماني ساعات كل ليلة."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u5-d01",
        "who": "A",
        "en": "Where is my phone?",
        "ar": "أين هاتفي؟"
      },
      {
        "id": "le-a1-a1u5-d02",
        "who": "B",
        "en": "It is on the table.",
        "ar": "إنه على الطاولة."
      },
      {
        "id": "le-a1-a1u5-d03",
        "who": "A",
        "en": "And where are my keys?",
        "ar": "وأين مفاتيحي؟"
      },
      {
        "id": "le-a1-a1u5-d04",
        "who": "B",
        "en": "They are in your bag.",
        "ar": "إنها في حقيبتك."
      },
      {
        "id": "le-a1-a1u5-d05",
        "who": "A",
        "en": "Is there a lamp in my room?",
        "ar": "هل هناك مصباح في غرفتي؟"
      },
      {
        "id": "le-a1-a1u5-d06",
        "who": "B",
        "en": "Yes, there is a small lamp next to the bed.",
        "ar": "نعم، هناك مصباح صغير بجانب السرير."
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u5-p-room",
        "sourceId": "room",
        "en": "room",
        "ipa": "/ruːm/",
        "ar": "غرفة",
        "contrastPairs": [
          {
            "id": "le-a1-a1u5-p-room-c-01",
            "en": "room / broom",
            "ar": "لاحظ /r/ في مقابل مجموعة الأصوات /br/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u5-p-room-s-01",
            "en": "There is a lamp.",
            "ar": "اربط there is بسلاسة مع وضوح is."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u5-p-room-i-01",
            "en": "Is there a garden? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      },
      {
        "id": "le-a1-a1u5-p-chair",
        "sourceId": "chair",
        "en": "chair",
        "ipa": "/tʃeə(r)/",
        "ar": "كرسي",
        "contrastPairs": [
          {
            "id": "le-a1-a1u5-p-chair-c-01",
            "en": "chair / share",
            "ar": "ميّز الصوت المركب /tʃ/ عن /ʃ/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u5-p-chair-s-01",
            "en": "a chair in the room",
            "ar": "لا تضف حركة بين حرف الجر والاسم التالي."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u5-p-chair-i-01",
            "en": "The keys are on the table. ↘",
            "ar": "تنغيم هابط في وصف المكان."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u5-l1-existence",
        "sourceId": "existence",
        "incorrect": "In my room a bed.",
        "corrected": "There is a bed in my room.",
        "pattern": "نقل ترتيب الجملة الاسمية",
        "explanationAr": "استخدم There is/are لتقديم وجود الشيء، ثم اذكر مكانه.",
        "practice": []
      },
      {
        "id": "le-a1-a1u5-l1-place-preposition",
        "sourceId": "place-preposition",
        "incorrect": "The book is in the table.",
        "corrected": "The book is on the table.",
        "pattern": "الخلط بين حروف الجر المكانية",
        "explanationAr": "on لسطح الشيء، وin لما بداخله؛ اختر وفق العلاقة المكانية.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u5-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u5-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a1-a1u6",
    "sourceId": "a1u6",
    "sourceLevel": "a1",
    "stage": "A1",
    "foundation": false,
    "deferred": false,
    "titleAr": "الألوان والملابس والأماكن",
    "titleEn": "Colors, Clothes and Places",
    "icon": "🎨",
    "goalAr": "أن يصف المتعلم الألوان والملابس ويتحدث عن الأماكن من حوله.",
    "grammar": [
      {
        "id": "le-a1-a1u6-g01",
        "titleAr": "المضارع المستمر",
        "explainHtml": "<p>نستخدم المضارع المستمر للحديث عن حدث يجري في هذه اللحظة. نكوّن الجملة من فعل الكينونة ثم الفعل الأساسي مضافاً إليه مقطع ثابت في نهايته.</p><ul><li>نختار صيغة فعل الكينونة المناسبة للضمير.</li><li>نضيف المقطع الثابت إلى الفعل الأساسي.</li><li>نستخدم هذا الزمن مع الكلمات الدالة على اللحظة الحاضرة.</li></ul>",
        "explainText": "نستخدم المضارع المستمر للحديث عن حدث يجري في هذه اللحظة. نكوّن الجملة من فعل الكينونة ثم الفعل الأساسي مضافاً إليه مقطع ثابت في نهايته.\n• نختار صيغة فعل الكينونة المناسبة للضمير.\n• نضيف المقطع الثابت إلى الفعل الأساسي.\n• نستخدم هذا الزمن مع الكلمات الدالة على اللحظة الحاضرة.",
        "table": {
          "headers": [
            "الضمير",
            "الصيغة",
            "مثال"
          ],
          "rows": [
            [
              "I",
              "am wearing",
              "I am wearing a red shirt."
            ],
            [
              "You",
              "are wearing",
              "You are wearing new shoes."
            ],
            [
              "He",
              "is wearing",
              "He is wearing a black jacket."
            ],
            [
              "She",
              "is wearing",
              "She is wearing a beautiful dress."
            ],
            [
              "We",
              "are buying",
              "We are buying fruit now."
            ],
            [
              "They",
              "are playing",
              "They are playing in the park."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u6-g01-e01",
            "en": "I am wearing a red shirt.",
            "ar": "أنا أرتدي قميصاً أحمر."
          },
          {
            "id": "le-a1-a1u6-g01-e02",
            "en": "She is wearing a beautiful dress.",
            "ar": "هي ترتدي فستاناً جميلاً."
          },
          {
            "id": "le-a1-a1u6-g01-e03",
            "en": "They are playing in the park now.",
            "ar": "هم يلعبون في الحديقة الآن."
          },
          {
            "id": "le-a1-a1u6-g01-e04",
            "en": "We are buying bread now.",
            "ar": "نحن نشتري الخبز الآن."
          },
          {
            "id": "le-a1-a1u6-g01-e05",
            "en": "He is not working today.",
            "ar": "هو لا يعمل اليوم."
          },
          {
            "id": "le-a1-a1u6-g01-e06",
            "en": "What are you doing?",
            "ar": "ماذا تفعل؟"
          }
        ],
        "tips": [
          "ابدأ الجملة بضمير الفاعل ثم فعل الكينونة ثم الفعل الأساسي.",
          "لا تنسَ المقطع الثابت في نهاية الفعل الأساسي.",
          "استخدم هذا الزمن للأحداث الجارية الآن، لا للعادات."
        ]
      },
      {
        "id": "le-a1-a1u6-g02",
        "titleAr": "التعبير عن القدرة والطلب",
        "explainHtml": "<p>نستخدم هذا الفعل المساعد للحديث عن القدرة وإمكانية القيام بشيء، وكذلك للطلب المؤدب. يأتي بعده الفعل في صورته الأصلية دون أي إضافة.</p><ul><li>لا يتغير شكله مع الضمائر كلها.</li><li>يأتي بعده الفعل دون أي إضافة.</li><li>نضيف كلمة النفي بعده لنفي القدرة.</li></ul>",
        "explainText": "نستخدم هذا الفعل المساعد للحديث عن القدرة وإمكانية القيام بشيء، وكذلك للطلب المؤدب. يأتي بعده الفعل في صورته الأصلية دون أي إضافة.\n• لا يتغير شكله مع الضمائر كلها.\n• يأتي بعده الفعل دون أي إضافة.\n• نضيف كلمة النفي بعده لنفي القدرة.",
        "table": {
          "headers": [
            "الصيغة",
            "الاستخدام",
            "مثال"
          ],
          "rows": [
            [
              "can",
              "القدرة",
              "I can swim very well."
            ],
            [
              "can",
              "القدرة",
              "She can cook very well."
            ],
            [
              "can not",
              "عدم القدرة",
              "He can not come today."
            ],
            [
              "Can ...?",
              "السؤال",
              "Can you help me?"
            ],
            [
              "Can I ...?",
              "الطلب المؤدب",
              "Can I have some water?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a1-a1u6-g02-e01",
            "en": "I can speak three languages.",
            "ar": "أستطيع التحدث بثلاث لغات."
          },
          {
            "id": "le-a1-a1u6-g02-e02",
            "en": "She can cook very well.",
            "ar": "تستطيع الطبخ جيداً جداً."
          },
          {
            "id": "le-a1-a1u6-g02-e03",
            "en": "Can you help me, please?",
            "ar": "هل يمكنك مساعدتي من فضلك؟"
          },
          {
            "id": "le-a1-a1u6-g02-e04",
            "en": "Can I have this shirt, please?",
            "ar": "هل يمكنني أخذ هذا القميص من فضلك؟"
          },
          {
            "id": "le-a1-a1u6-g02-e05",
            "en": "He can not come today.",
            "ar": "لا يستطيع المجيء اليوم."
          }
        ],
        "tips": [
          "يبقى الفعل المساعد نفسه مع جميع الضمائر.",
          "يأتي الفعل بعده في صورته الأصلية دائماً.",
          "استخدمه للسؤال المؤدب والطلب في المتجر."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a1-a1u6-v01",
        "en": "color",
        "ar": "لون",
        "pos": "noun",
        "emoji": "🎨",
        "example": {
          "en": "Blue is my favourite color.",
          "ar": "الأزرق لوني المفضل."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v02",
        "en": "red",
        "ar": "أحمر",
        "pos": "adjective",
        "emoji": "🔴",
        "example": {
          "en": "My bag is red.",
          "ar": "حقيبتي حمراء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v03",
        "en": "blue",
        "ar": "أزرق",
        "pos": "adjective",
        "emoji": "🔵",
        "example": {
          "en": "The sky is blue today.",
          "ar": "السماء زرقاء اليوم."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v04",
        "en": "green",
        "ar": "أخضر",
        "pos": "adjective",
        "emoji": "🟢",
        "example": {
          "en": "The trees are green in spring.",
          "ar": "الأشجار خضراء في الربيع."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v05",
        "en": "black",
        "ar": "أسود",
        "pos": "adjective",
        "emoji": "⚫",
        "example": {
          "en": "He has a black car.",
          "ar": "لديه سيارة سوداء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v06",
        "en": "white",
        "ar": "أبيض",
        "pos": "adjective",
        "emoji": "⚪",
        "example": {
          "en": "My shirt is white.",
          "ar": "قميصي أبيض."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v07",
        "en": "shirt",
        "ar": "قميص",
        "pos": "noun",
        "emoji": "👕",
        "example": {
          "en": "This shirt is very nice.",
          "ar": "هذا القميص جميل جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v08",
        "en": "dress",
        "ar": "فستان",
        "pos": "noun",
        "emoji": "👗",
        "example": {
          "en": "Her dress is beautiful.",
          "ar": "فستانها جميل."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v09",
        "en": "shoes",
        "ar": "حذاء",
        "pos": "noun",
        "emoji": "👟",
        "example": {
          "en": "My shoes are new.",
          "ar": "حذائي جديد."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v10",
        "en": "jacket",
        "ar": "سترة",
        "pos": "noun",
        "emoji": "🧥",
        "example": {
          "en": "I wear a jacket in winter.",
          "ar": "أرتدي سترة في الشتاء."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v11",
        "en": "wear",
        "ar": "يرتدي",
        "pos": "verb",
        "emoji": "🧥",
        "example": {
          "en": "I wear a blue shirt to school.",
          "ar": "أرتدي قميصاً أزرق في المدرسة."
        },
        "collocations": [
          {
            "id": "le-a1-a1u6-v11-c01",
            "en": "wear a uniform",
            "ar": "يرتدي زياً موحداً"
          }
        ]
      },
      {
        "id": "le-a1-a1u6-v12",
        "en": "market",
        "ar": "سوق",
        "pos": "noun",
        "emoji": "🏬",
        "example": {
          "en": "We buy fruit at the market.",
          "ar": "نشتري الفاكهة من السوق."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v13",
        "en": "shop",
        "ar": "متجر",
        "pos": "noun",
        "emoji": "🏪",
        "example": {
          "en": "The shop is open now.",
          "ar": "المتجر مفتوح الآن."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v14",
        "en": "park",
        "ar": "منتزه",
        "pos": "noun",
        "emoji": "🌳",
        "example": {
          "en": "The children play in the park.",
          "ar": "الأطفال يلعبون في المنتزه."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v15",
        "en": "street",
        "ar": "شارع",
        "pos": "noun",
        "emoji": "🛣️",
        "example": {
          "en": "Our street is very quiet.",
          "ar": "شارعنا هادئ جداً."
        },
        "collocations": []
      },
      {
        "id": "le-a1-a1u6-v16",
        "en": "buy",
        "ar": "يشتري",
        "pos": "verb",
        "emoji": "🛒",
        "example": {
          "en": "I want to buy a new shirt.",
          "ar": "أريد شراء قميص جديد."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a1-a1u6-s01",
        "en": "My favourite color is blue.",
        "ar": "لوني المفضل هو الأزرق."
      },
      {
        "id": "le-a1-a1u6-s02",
        "en": "She is wearing a red dress today.",
        "ar": "هي ترتدي فستاناً أحمر اليوم."
      },
      {
        "id": "le-a1-a1u6-s03",
        "en": "These shoes are new and white.",
        "ar": "هذا الحذاء جديد وأبيض."
      },
      {
        "id": "le-a1-a1u6-s04",
        "en": "He is buying a black jacket.",
        "ar": "هو يشتري سترة سوداء."
      },
      {
        "id": "le-a1-a1u6-s05",
        "en": "We are going to the market now.",
        "ar": "نحن ذاهبون إلى السوق الآن."
      },
      {
        "id": "le-a1-a1u6-s06",
        "en": "The park is next to our street.",
        "ar": "المنتزه بجانب شارعنا."
      },
      {
        "id": "le-a1-a1u6-s07",
        "en": "Can you help me, please?",
        "ar": "هل يمكنك مساعدتي من فضلك؟"
      },
      {
        "id": "le-a1-a1u6-s08",
        "en": "I can wear this shirt to school.",
        "ar": "أستطيع ارتداء هذا القميص في المدرسة."
      },
      {
        "id": "le-a1-a1u6-s09",
        "en": "The shop is closed on Sunday.",
        "ar": "المتجر مغلق يوم الأحد."
      },
      {
        "id": "le-a1-a1u6-s10",
        "en": "I want to buy some bread.",
        "ar": "أريد شراء بعض الخبز."
      },
      {
        "id": "le-a1-a1u6-s11",
        "en": "Her dress is green and beautiful.",
        "ar": "فستانها أخضر وجميل."
      },
      {
        "id": "le-a1-a1u6-s12",
        "en": "They are playing in the park.",
        "ar": "هم يلعبون في المنتزه."
      }
    ],
    "dialogue": [
      {
        "id": "le-a1-a1u6-d01",
        "who": "A",
        "en": "Hello! Can I help you?",
        "ar": "مرحباً! هل يمكنني مساعدتك؟"
      },
      {
        "id": "le-a1-a1u6-d02",
        "who": "B",
        "en": "Yes, I want to buy a shirt.",
        "ar": "نعم، أريد شراء قميص."
      },
      {
        "id": "le-a1-a1u6-d03",
        "who": "A",
        "en": "What color would you like?",
        "ar": "ما اللون الذي تريده؟"
      },
      {
        "id": "le-a1-a1u6-d04",
        "who": "B",
        "en": "I would like a blue shirt, please.",
        "ar": "أريد قميصاً أزرق من فضلك."
      },
      {
        "id": "le-a1-a1u6-d05",
        "who": "A",
        "en": "Here you are. It is very nice.",
        "ar": "تفضل. إنه جميل جداً."
      },
      {
        "id": "le-a1-a1u6-d06",
        "who": "B",
        "en": "Thank you. How much is it?",
        "ar": "شكراً. كم ثمنه؟"
      }
    ],
    "phonetics": [
      {
        "id": "le-a1-a1u6-p-shirt",
        "sourceId": "shirt",
        "en": "shirt",
        "ipa": "/ʃɜːt/",
        "ar": "قميص",
        "contrastPairs": [
          {
            "id": "le-a1-a1u6-p-shirt-c-01",
            "en": "sheep / ship",
            "ar": "ميّز /iː/ الطويلة عن /ɪ/ القصيرة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u6-p-shirt-s-01",
            "en": "She is wearing a shirt.",
            "ar": "تُوصل she is وقد تختصر إلى she's في الحديث."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u6-p-shirt-i-01",
            "en": "What are you wearing? ↘",
            "ar": "تنغيم هابط شائع في سؤال أداة الاستفهام."
          }
        ]
      },
      {
        "id": "le-a1-a1u6-p-green",
        "sourceId": "green",
        "en": "green",
        "ipa": "/ɡriːn/",
        "ar": "أخضر",
        "contrastPairs": [
          {
            "id": "le-a1-a1u6-p-green-c-01",
            "en": "green / clean",
            "ar": "ميّز /ɡ/ المجهورة عن /k/ المهموسة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a1-a1u6-p-green-s-01",
            "en": "a green jacket",
            "ar": "اربط أداة التنكير بالصفة دون إضافة مقطع."
          }
        ],
        "intonation": [
          {
            "id": "le-a1-a1u6-p-green-i-01",
            "en": "Are they new shoes? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a1-a1u6-l1-adjective-order",
        "sourceId": "adjective-order",
        "incorrect": "a shirt blue",
        "corrected": "a blue shirt",
        "pattern": "وضع الصفة بعد الاسم",
        "explanationAr": "تأتي الصفة عادةً قبل الاسم في الإنجليزية.",
        "practice": []
      },
      {
        "id": "le-a1-a1u6-l1-clothing-article",
        "sourceId": "clothing-article",
        "incorrect": "I am wearing red jacket.",
        "corrected": "I am wearing a red jacket.",
        "pattern": "حذف أداة الاسم المفرد المعدود",
        "explanationAr": "أضف a/an قبل الصفة والاسم المفرد المعدود غير المحدد.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a1-a1u6-a01",
        "term": "word",
        "meaningAr": "كلمة",
        "example": {
          "en": "Write the new word.",
          "ar": "اكتب الكلمة الجديدة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a1-a1u6-a02",
        "term": "sentence",
        "meaningAr": "جملة",
        "example": {
          "en": "Read the sentence aloud.",
          "ar": "اقرأ الجملة بصوت مسموع."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u1",
    "sourceId": "a2u1",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "العمل والدراسة والروتين اليومي",
    "titleEn": "Work, Study and Daily Routine",
    "icon": "🎒",
    "goalAr": "أن يتحدث المتعلم عن عمله ودراسته وروتينه اليومي باستخدام المضارع البسيط والماضي البسيط.",
    "grammar": [
      {
        "id": "le-a2-a2u1-g01",
        "titleAr": "المضارع البسيط وظروف التكرار",
        "explainHtml": "<p>نستخدم <b>المضارع البسيط</b> للتحدث عن العادات والروتين اليومي والحقائق الثابتة.</p><ul><li>مع الضمائر أنا وأنت ونحن وهم يبقى الفعل في صورته الأساسية.</li><li>مع هو وهي يضاف حرف السين إلى نهاية الفعل.</li><li>ظروف التكرار مثل دائمًا وعادةً وغالبًا وأحيانًا ونادرًا تأتي قبل الفعل الأساسي.</li><li>مع فعل الكون تأتي هذه الظروف بعده مباشرة.</li></ul>",
        "explainText": "نستخدم المضارع البسيط للتحدث عن العادات والروتين اليومي والحقائق الثابتة.\n• مع الضمائر أنا وأنت ونحن وهم يبقى الفعل في صورته الأساسية.\n• مع هو وهي يضاف حرف السين إلى نهاية الفعل.\n• ظروف التكرار مثل دائمًا وعادةً وغالبًا وأحيانًا ونادرًا تأتي قبل الفعل الأساسي.\n• مع فعل الكون تأتي هذه الظروف بعده مباشرة.",
        "table": {
          "headers": [
            "الحالة",
            "المثال"
          ],
          "rows": [
            [
              "مع أنا وأنت ونحن وهم",
              "I start work at nine."
            ],
            [
              "مع هو وهي",
              "She starts work at nine."
            ],
            [
              "ظرف التكرار مع فعل عادي",
              "We usually take a break at eleven."
            ],
            [
              "ظرف التكرار مع فعل الكون",
              "He is always late on Mondays."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u1-g01-e01",
            "en": "I usually get up at six o'clock.",
            "ar": "عادةً أستيقظ في السادسة."
          },
          {
            "id": "le-a2-a2u1-g01-e02",
            "en": "She works in a small office near the station.",
            "ar": "تعمل في مكتب صغير قرب المحطة."
          },
          {
            "id": "le-a2-a2u1-g01-e03",
            "en": "We do not work on Fridays.",
            "ar": "لا نعمل أيام الجمعة."
          },
          {
            "id": "le-a2-a2u1-g01-e04",
            "en": "Does he study English every evening?",
            "ar": "هل يدرس الإنجليزية كل مساء؟"
          },
          {
            "id": "le-a2-a2u1-g01-e05",
            "en": "My brother is never late for meetings.",
            "ar": "أخي لا يتأخر أبدًا عن الاجتماعات."
          }
        ],
        "tips": [
          "ضع ظرف التكرار قبل الفعل الأساسي وليس بعده.",
          "لا تنسَ إضافة حرف السين إلى الفعل مع هو وهي.",
          "استخدم فعل المساعدة في السؤال والنفي مع أنا وأنت ونحن وهم."
        ]
      },
      {
        "id": "le-a2-a2u1-g02",
        "titleAr": "الماضي البسيط: الأفعال المنتظمة وغير المنتظمة",
        "explainHtml": "<p>نستخدم <b>الماضي البسيط</b> للحديث عن أفعال بدأت وانتهت في وقت ماضٍ محدد.</p><ul><li>الفعل المنتظم يأخذ نهاية الماضي المعروفة.</li><li>الفعل غير المنتظم له شكل خاص يجب حفظه.</li><li>في النفي والسؤال نستخدم فعل المساعدة في الماضي مع الفعل الأساسي.</li></ul>",
        "explainText": "نستخدم الماضي البسيط للحديث عن أفعال بدأت وانتهت في وقت ماضٍ محدد.\n• الفعل المنتظم يأخذ نهاية الماضي المعروفة.\n• الفعل غير المنتظم له شكل خاص يجب حفظه.\n• في النفي والسؤال نستخدم فعل المساعدة في الماضي مع الفعل الأساسي.",
        "table": {
          "headers": [
            "الفعل",
            "الماضي"
          ],
          "rows": [
            [
              "work",
              "worked"
            ],
            [
              "study",
              "studied"
            ],
            [
              "go",
              "went"
            ],
            [
              "see",
              "saw"
            ],
            [
              "buy",
              "bought"
            ],
            [
              "have",
              "had"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u1-g02-e01",
            "en": "I finished my assignment yesterday evening.",
            "ar": "أنهيت واجبي مساء أمس."
          },
          {
            "id": "le-a2-a2u1-g02-e02",
            "en": "She went to the market with her colleague.",
            "ar": "ذهبت إلى السوق مع زميلتها."
          },
          {
            "id": "le-a2-a2u1-g02-e03",
            "en": "We saw a good film last weekend.",
            "ar": "شاهدنا فيلمًا جيدًا نهاية الأسبوع الماضي."
          },
          {
            "id": "le-a2-a2u1-g02-e04",
            "en": "He did not attend the meeting on Monday.",
            "ar": "لم يحضر الاجتماع يوم الاثنين."
          },
          {
            "id": "le-a2-a2u1-g02-e05",
            "en": "Did you prepare the report last night?",
            "ar": "هل أعددت التقرير الليلة الماضية؟"
          },
          {
            "id": "le-a2-a2u1-g02-e06",
            "en": "They bought a new computer for the office.",
            "ar": "اشتروا حاسوبًا جديدًا للمكتب."
          }
        ],
        "tips": [
          "احفظ الأفعال الشاذة مثل ذهب ورأى واشترى لأنها لا تأخذ نهاية الماضي المنتظمة.",
          "بعد فعل المساعدة في النفي أو السؤال يبقى الفعل في صورته الأساسية.",
          "أضف ظرف زمان ماضٍ مثل أمس أو الأسبوع الماضي لتوضيح الزمن."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u1-v01",
        "en": "deadline",
        "ar": "موعد نهائي",
        "pos": "noun",
        "emoji": "⏰",
        "example": {
          "en": "The deadline for the report is Friday.",
          "ar": "الموعد النهائي للتقرير هو يوم الجمعة."
        },
        "collocations": [
          {
            "id": "le-a2-a2u1-v01-c01",
            "en": "meet a deadline",
            "ar": "يلتزم بموعد نهائي"
          }
        ]
      },
      {
        "id": "le-a2-a2u1-v02",
        "en": "meeting",
        "ar": "اجتماع",
        "pos": "noun",
        "emoji": "🗣️",
        "example": {
          "en": "Our team meeting starts at nine.",
          "ar": "يبدأ اجتماع فريقنا في التاسعة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v03",
        "en": "colleague",
        "ar": "زميل عمل",
        "pos": "noun",
        "emoji": "🤝",
        "example": {
          "en": "My colleague helped me with the project.",
          "ar": "ساعدني زميلي في المشروع."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v04",
        "en": "schedule",
        "ar": "جدول مواعيد",
        "pos": "noun",
        "emoji": "📅",
        "example": {
          "en": "My schedule is very busy this week.",
          "ar": "جدول مواعيدي مزدحم جدًا هذا الأسبوع."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v05",
        "en": "task",
        "ar": "مهمة",
        "pos": "noun",
        "emoji": "📌",
        "example": {
          "en": "This task is easy to finish today.",
          "ar": "هذه المهمة سهلة الإنجاز اليوم."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v06",
        "en": "attend",
        "ar": "يحضر",
        "pos": "verb",
        "emoji": "🙋",
        "example": {
          "en": "I attend an English class every Tuesday.",
          "ar": "أحضر درس إنجليزية كل ثلاثاء."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v07",
        "en": "prepare",
        "ar": "يُعِدّ",
        "pos": "verb",
        "emoji": "📝",
        "example": {
          "en": "I prepare my lessons the night before.",
          "ar": "أُعِدّ دروسي في الليلة السابقة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v08",
        "en": "organise",
        "ar": "ينظّم",
        "pos": "verb",
        "emoji": "🗂️",
        "example": {
          "en": "We organise a meeting every Monday.",
          "ar": "ننظّم اجتماعًا كل يوم اثنين."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v09",
        "en": "commute",
        "ar": "يتنقل بين المنزل والعمل",
        "pos": "verb",
        "emoji": "🚌",
        "example": {
          "en": "I commute to work by train.",
          "ar": "أتنقل إلى العمل بالقطار."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v10",
        "en": "routine",
        "ar": "روتين",
        "pos": "noun",
        "emoji": "🔁",
        "example": {
          "en": "My daily routine starts at six o'clock.",
          "ar": "يبدأ روتيني اليومي في السادسة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v11",
        "en": "alarm",
        "ar": "منبّه",
        "pos": "noun",
        "emoji": "⏱️",
        "example": {
          "en": "My alarm rings at half past six.",
          "ar": "يرنّ منبّهي في السادسة والنصف."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v12",
        "en": "take a break",
        "ar": "يأخذ استراحة",
        "pos": "phrase",
        "emoji": "☕",
        "example": {
          "en": "We take a break at eleven o'clock every day.",
          "ar": "نأخذ استراحة في الحادية عشرة كل يوم."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v13",
        "en": "assignment",
        "ar": "واجب دراسي",
        "pos": "noun",
        "emoji": "📚",
        "example": {
          "en": "I finished my assignment before midnight.",
          "ar": "أنهيت واجبي قبل منتصف الليل."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v14",
        "en": "lecturer",
        "ar": "محاضر",
        "pos": "noun",
        "emoji": "🧑‍🏫",
        "example": {
          "en": "The lecturer spoke about the final exam.",
          "ar": "تحدث المحاضر عن الامتحان النهائي."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v15",
        "en": "concentrate",
        "ar": "يركّز",
        "pos": "verb",
        "emoji": "🎯",
        "example": {
          "en": "I cannot concentrate with the television on.",
          "ar": "لا أستطيع التركيز والتلفاز مفتوح."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v16",
        "en": "improve",
        "ar": "يحسّن",
        "pos": "verb",
        "emoji": "📈",
        "example": {
          "en": "I want to improve my English quickly.",
          "ar": "أريد تحسين إنجليزيتي بسرعة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v17",
        "en": "wake up",
        "ar": "يستيقظ",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "I wake up at seven on weekdays.",
          "ar": "أستيقظ في السابعة أيام الأسبوع."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v18",
        "en": "meet up",
        "ar": "يلتقي بشخص في موعد متفق عليه",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "We meet up after class.",
          "ar": "نلتقي بعد الصف."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v19",
        "en": "grow up",
        "ar": "ينشأ أو يكبر",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "I hope to grow up healthy and happy.",
          "ar": "آمل أن أكبر بصحة وسعادة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u1-v20",
        "en": "clean up",
        "ar": "ينظف المكان أو يرتبه",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "I clean up my room every Saturday.",
          "ar": "أنظف غرفتي كل يوم سبت."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u1-s01",
        "en": "I usually start my working day at eight.",
        "ar": "عادةً أبدأ يوم عملي في الثامنة."
      },
      {
        "id": "le-a2-a2u1-s02",
        "en": "My colleague sent me the report this morning.",
        "ar": "أرسل لي زميلي التقرير هذا الصباح."
      },
      {
        "id": "le-a2-a2u1-s03",
        "en": "We do not work at the weekend.",
        "ar": "لا نعمل في نهاية الأسبوع."
      },
      {
        "id": "le-a2-a2u1-s04",
        "en": "She prepared everything before the deadline.",
        "ar": "أعدّت كل شيء قبل الموعد النهائي."
      },
      {
        "id": "le-a2-a2u1-s05",
        "en": "Did you finish your homework last night?",
        "ar": "هل أنهيت واجبك الليلة الماضية؟"
      },
      {
        "id": "le-a2-a2u1-s06",
        "en": "The lecturer explained the lesson very clearly.",
        "ar": "شرح المحاضر الدرس بوضوح شديد."
      },
      {
        "id": "le-a2-a2u1-s07",
        "en": "I commute to the office by bus every day.",
        "ar": "أنتقل إلى المكتب بالحافلة كل يوم."
      },
      {
        "id": "le-a2-a2u1-s08",
        "en": "He attended a long meeting yesterday afternoon.",
        "ar": "حضر اجتماعًا طويلًا بعد ظهر أمس."
      },
      {
        "id": "le-a2-a2u1-s09",
        "en": "My alarm rings at half past six.",
        "ar": "يرنّ منبّهي في السادسة والنصف."
      },
      {
        "id": "le-a2-a2u1-s10",
        "en": "They are going to change the schedule soon.",
        "ar": "سيغيّرون الجدول قريبًا."
      },
      {
        "id": "le-a2-a2u1-s11",
        "en": "I have improved my writing since September.",
        "ar": "تحسّنت كتابتي منذ سبتمبر."
      },
      {
        "id": "le-a2-a2u1-s12",
        "en": "We always take a short break at eleven.",
        "ar": "نأخذ دائمًا استراحة قصيرة في الحادية عشرة."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u1-d01",
        "who": "A",
        "en": "How was your weekend?",
        "ar": "كيف كانت نهاية أسبوعك؟"
      },
      {
        "id": "le-a2-a2u1-d02",
        "who": "B",
        "en": "It was busy but very interesting.",
        "ar": "كانت مزدحمة لكنها ممتعة جدًا."
      },
      {
        "id": "le-a2-a2u1-d03",
        "who": "A",
        "en": "What did you do on Saturday?",
        "ar": "ماذا فعلت يوم السبت؟"
      },
      {
        "id": "le-a2-a2u1-d04",
        "who": "B",
        "en": "I visited my colleague and helped him move.",
        "ar": "زرت زميلي وساعدته في الانتقال."
      },
      {
        "id": "le-a2-a2u1-d05",
        "who": "A",
        "en": "Did you finish your assignment too?",
        "ar": "هل أنهيت واجبك أيضًا؟"
      },
      {
        "id": "le-a2-a2u1-d06",
        "who": "B",
        "en": "Yes, I finished it on Sunday evening.",
        "ar": "نعم، أنهيته مساء الأحد."
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u1-p-deadline",
        "sourceId": "deadline",
        "en": "deadline",
        "ipa": "/ˈdedlaɪn/",
        "ar": "موعد نهائي",
        "contrastPairs": [
          {
            "id": "le-a2-a2u1-p-deadline-c-01",
            "en": "work / walk",
            "ar": "تدرّب على الحركة في work /ɜː/ مقابل walk /ɔː/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u1-p-deadline-s-01",
            "en": "take a break",
            "ar": "تُختزل أداة a غالباً إلى /ə/ في الكلام الطبيعي."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u1-p-deadline-i-01",
            "en": "When is the deadline? ↘",
            "ar": "تنغيم هابط شائع في سؤال أداة الاستفهام."
          }
        ]
      },
      {
        "id": "le-a2-a2u1-p-schedule",
        "sourceId": "schedule",
        "en": "schedule",
        "ipa": "/ˈʃedjuːl/ (UK), /ˈskedʒuːl/ (US)",
        "ar": "جدول مواعيد",
        "contrastPairs": [
          {
            "id": "le-a2-a2u1-p-schedule-c-01",
            "en": "she / see",
            "ar": "ميّز /ʃ/ عن /s/ في بداية الكلمة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u1-p-schedule-s-01",
            "en": "I usually start work at eight.",
            "ar": "قد يضعف صوت usually غير المنبور؛ حافظ على مقاطع الكلمة."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u1-p-schedule-i-01",
            "en": "I usually study after work. ↘",
            "ar": "هبوط النبرة في الجملة الخبرية."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u1-l1-third-person",
        "sourceId": "third-person",
        "incorrect": "She work every day.",
        "corrected": "She works every day.",
        "pattern": "إغفال علامة المفرد الغائب",
        "explanationAr": "في المضارع البسيط نضيف -s غالباً إلى الفعل مع he/she/it.",
        "practice": []
      },
      {
        "id": "le-a2-a2u1-l1-past-question",
        "sourceId": "past-question",
        "incorrect": "Did you went to work?",
        "corrected": "Did you go to work?",
        "pattern": "تكرار علامة الماضي",
        "explanationAr": "بعد did يعود الفعل إلى صورته الأساسية؛ did يحمل علامة الماضي.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u1-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u1-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u2",
    "sourceId": "a2u2",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "التسوق والمال",
    "titleEn": "Shopping and Money",
    "icon": "🛒",
    "goalAr": "أن يتسوّق المتعلم ويصف الأسعار والكميات ويقارن بين المنتجات بثقة.",
    "grammar": [
      {
        "id": "le-a2-a2u2-g01",
        "titleAr": "الأسماء المعدودة وغير المعدودة وأدوات الكمية",
        "explainHtml": "<p>تنقسم الأسماء في الإنجليزية إلى <b>معدودة</b> و<b>غير معدودة</b>.</p><ul><li>الاسم المعدود له مفرد وجمع ويمكن عدّه بالأرقام.</li><li>الاسم غير المعدود لا يُعدّ بالأرقام ولا يأخذ جمعًا.</li><li>نستخدم أداة استفهام خاصة بالعدد مع الاسم المعدود، وأداة كمية خاصة مع غير المعدود.</li><li>عبارة الكمية الكبيرة تصلح للنوعين معًا.</li></ul>",
        "explainText": "تنقسم الأسماء في الإنجليزية إلى معدودة وغير معدودة.\n• الاسم المعدود له مفرد وجمع ويمكن عدّه بالأرقام.\n• الاسم غير المعدود لا يُعدّ بالأرقام ولا يأخذ جمعًا.\n• نستخدم أداة استفهام خاصة بالعدد مع الاسم المعدود، وأداة كمية خاصة مع غير المعدود.\n• عبارة الكمية الكبيرة تصلح للنوعين معًا.",
        "table": {
          "headers": [
            "الحالة",
            "المثال"
          ],
          "rows": [
            [
              "اسم معدود",
              "There are many customers in the shop."
            ],
            [
              "اسم غير معدود",
              "We do not have much time today."
            ],
            [
              "كمية كبيرة مع النوعين",
              "She spends a lot of money on clothes."
            ],
            [
              "سؤال عن العدد",
              "How many receipts do you need?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u2-g01-e01",
            "en": "There are too many people in this shop.",
            "ar": "يوجد عدد كبير جدًا من الناس في هذا المتجر."
          },
          {
            "id": "le-a2-a2u2-g01-e02",
            "en": "I do not have much cash with me.",
            "ar": "ليس معي نقود كثيرة."
          },
          {
            "id": "le-a2-a2u2-g01-e03",
            "en": "We need a lot of time to compare prices.",
            "ar": "نحتاج وقتًا كثيرًا لمقارنة الأسعار."
          },
          {
            "id": "le-a2-a2u2-g01-e04",
            "en": "How much does this jacket cost?",
            "ar": "كم يكلّف هذا المعطف؟"
          },
          {
            "id": "le-a2-a2u2-g01-e05",
            "en": "She bought three bags and some fruit.",
            "ar": "اشترت ثلاث حقائب وبعض الفاكهة."
          }
        ],
        "tips": [
          "لا تستخدم أداة العدد مع الأسماء غير المعدودة.",
          "استخدم عبارة الكمية الكبيرة مع النوعين بأمان.",
          "اسأل عن السعر بعبارة خاصة، وعن العدد بعبارة تصلح للمعدود."
        ]
      },
      {
        "id": "le-a2-a2u2-g02",
        "titleAr": "صيغة المقارنة وصيغة التفضيل",
        "explainHtml": "<p>نستخدم <b>صيغة المقارنة</b> للمقارنة بين شيئين، و<b>صيغة التفضيل</b> للمقارنة بين شيء ومجموعة كاملة.</p><ul><li>الصفات القصيرة تأخذ نهاية خاصة في المقارنة ونهاية أخرى في التفضيل.</li><li>الصفات الطويلة تأخذ كلمة مساعدة قبلها.</li><li>بعد صيغة المقارنة نستخدم أداة الربط المناسبة.</li><li>بعض الصفات لها صيغ شاذة تُحفظ حفظًا.</li></ul>",
        "explainText": "نستخدم صيغة المقارنة للمقارنة بين شيئين، وصيغة التفضيل للمقارنة بين شيء ومجموعة كاملة.\n• الصفات القصيرة تأخذ نهاية خاصة في المقارنة ونهاية أخرى في التفضيل.\n• الصفات الطويلة تأخذ كلمة مساعدة قبلها.\n• بعد صيغة المقارنة نستخدم أداة الربط المناسبة.\n• بعض الصفات لها صيغ شاذة تُحفظ حفظًا.",
        "table": {
          "headers": [
            "الصفة",
            "المقارنة",
            "التفضيل"
          ],
          "rows": [
            [
              "cheap",
              "cheaper",
              "the cheapest"
            ],
            [
              "expensive",
              "more expensive",
              "the most expensive"
            ],
            [
              "good",
              "better",
              "the best"
            ],
            [
              "bad",
              "worse",
              "the worst"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u2-g02-e01",
            "en": "This shop is cheaper than the one near my house.",
            "ar": "هذا المتجر أرخص من المتجر القريب من بيتي."
          },
          {
            "id": "le-a2-a2u2-g02-e02",
            "en": "Gold is more expensive than silver.",
            "ar": "الذهب أغلى من الفضة."
          },
          {
            "id": "le-a2-a2u2-g02-e03",
            "en": "That was the best bargain of the day.",
            "ar": "كانت تلك أفضل صفقة في اليوم."
          },
          {
            "id": "le-a2-a2u2-g02-e04",
            "en": "My old wallet is worse than this new one.",
            "ar": "محفظتي القديمة أسوأ من هذه الجديدة."
          },
          {
            "id": "le-a2-a2u2-g02-e05",
            "en": "This is the cheapest coat in the shop.",
            "ar": "هذا أرخص معطف في المتجر."
          }
        ],
        "tips": [
          "أضف نهاية المقارنة إلى الصفات القصيرة، واستخدم الكلمة المساعدة مع الصفات الطويلة.",
          "لا تجمع بين الصيغتين معًا في الصفة نفسها.",
          "احفظ الصيغ الشاذة لأنها لا تتبع القاعدة العامة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u2-v01",
        "en": "discount",
        "ar": "خصم",
        "pos": "noun",
        "emoji": "🏷️",
        "example": {
          "en": "There is a big discount on shoes today.",
          "ar": "يوجد خصم كبير على الأحذية اليوم."
        },
        "collocations": [
          {
            "id": "le-a2-a2u2-v01-c01",
            "en": "get a discount",
            "ar": "يحصل على خصم"
          }
        ]
      },
      {
        "id": "le-a2-a2u2-v02",
        "en": "receipt",
        "ar": "إيصال",
        "pos": "noun",
        "emoji": "🧾",
        "example": {
          "en": "Please keep the receipt in your bag.",
          "ar": "من فضلك احتفظ بالإيصال في حقيبتك."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v03",
        "en": "refund",
        "ar": "استرداد المال",
        "pos": "noun",
        "emoji": "💸",
        "example": {
          "en": "I asked for a full refund yesterday.",
          "ar": "طلبت استرداد المال كاملًا أمس."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v04",
        "en": "bargain",
        "ar": "صفقة رابحة",
        "pos": "noun",
        "emoji": "🎁",
        "example": {
          "en": "This jacket was a real bargain.",
          "ar": "كان هذا المعطف صفقة رابحة حقًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v05",
        "en": "customer",
        "ar": "زبون",
        "pos": "noun",
        "emoji": "🧑‍💼",
        "example": {
          "en": "The customer paid in cash.",
          "ar": "دفع الزبون نقدًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v06",
        "en": "cash",
        "ar": "نقود سائلة",
        "pos": "noun",
        "emoji": "💵",
        "example": {
          "en": "I paid in cash at the market.",
          "ar": "دفعت نقدًا في السوق."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v07",
        "en": "afford",
        "ar": "يستطيع تحمّل التكلفة",
        "pos": "verb",
        "emoji": "🪙",
        "example": {
          "en": "We cannot afford a new car this year.",
          "ar": "لا نستطيع تحمّل تكلفة سيارة جديدة هذا العام."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v08",
        "en": "spend",
        "ar": "ينفق",
        "pos": "verb",
        "emoji": "🛍️",
        "example": {
          "en": "I spend too much money on coffee.",
          "ar": "أنفق مالًا كثيرًا جدًا على القهوة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v09",
        "en": "borrow",
        "ar": "يستعير",
        "pos": "verb",
        "emoji": "🤲",
        "example": {
          "en": "Can I borrow ten dollars from you?",
          "ar": "هل يمكنني استعارة عشرة دولارات منك؟"
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v10",
        "en": "lend",
        "ar": "يعير",
        "pos": "verb",
        "emoji": "🤝",
        "example": {
          "en": "My brother will lend me his bike.",
          "ar": "سيعيرني أخي دراجته."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v11",
        "en": "expensive",
        "ar": "غالي الثمن",
        "pos": "adjective",
        "emoji": "💎",
        "example": {
          "en": "This watch is too expensive for me.",
          "ar": "هذه الساعة غالية جدًا بالنسبة لي."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v12",
        "en": "cheap",
        "ar": "رخيص",
        "pos": "adjective",
        "emoji": "🪧",
        "example": {
          "en": "The vegetables are cheap in this market.",
          "ar": "الخضروات رخيصة في هذا السوق."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v13",
        "en": "queue",
        "ar": "طابور انتظار",
        "pos": "noun",
        "emoji": "🚶",
        "example": {
          "en": "There was a long queue outside the shop.",
          "ar": "كان هناك طابور طويل خارج المتجر."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v14",
        "en": "change",
        "ar": "الباقي من النقود",
        "pos": "noun",
        "emoji": "🪙",
        "example": {
          "en": "The assistant gave me the wrong change.",
          "ar": "أعطاني البائع الباقي الخطأ."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v15",
        "en": "price",
        "ar": "سعر",
        "pos": "noun",
        "emoji": "🔖",
        "example": {
          "en": "The price of bread went up again.",
          "ar": "ارتفع سعر الخبز مرة أخرى."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v16",
        "en": "bill",
        "ar": "فاتورة",
        "pos": "noun",
        "emoji": "📄",
        "example": {
          "en": "We paid the bill after dinner.",
          "ar": "دفعنا الفاتورة بعد العشاء."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v17",
        "en": "wallet",
        "ar": "محفظة",
        "pos": "noun",
        "emoji": "👛",
        "example": {
          "en": "I lost my wallet on the bus.",
          "ar": "فقدت محفظتي في الحافلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v18",
        "en": "eat out",
        "ar": "يتناول الطعام خارج المنزل",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "We eat out on Fridays.",
          "ar": "نتناول الطعام خارج المنزل أيام الجمعة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u2-v19",
        "en": "try on",
        "ar": "يجرب قطعة ملابس قبل شرائها",
        "pos": "phrase",
        "emoji": "💬",
        "example": {
          "en": "Can I try on this jacket?",
          "ar": "هل يمكنني تجربة هذه السترة؟"
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u2-s01",
        "en": "I paid the bill with my credit card.",
        "ar": "دفعت الفاتورة ببطاقتي البنكية."
      },
      {
        "id": "le-a2-a2u2-s02",
        "en": "This supermarket offers a discount every weekend.",
        "ar": "يمنح هذا المتجر خصمًا كل نهاية أسبوع."
      },
      {
        "id": "le-a2-a2u2-s03",
        "en": "The customer asked for a full refund.",
        "ar": "طلب الزبون استرداد المال كاملًا."
      },
      {
        "id": "le-a2-a2u2-s04",
        "en": "We cannot afford a new washing machine.",
        "ar": "لا نستطيع تحمّل تكلفة غسالة جديدة."
      },
      {
        "id": "le-a2-a2u2-s05",
        "en": "How much money did you spend yesterday?",
        "ar": "كم من المال أنفقت أمس؟"
      },
      {
        "id": "le-a2-a2u2-s06",
        "en": "There was a long queue at the entrance.",
        "ar": "كان هناك طابور طويل عند المدخل."
      },
      {
        "id": "le-a2-a2u2-s07",
        "en": "Please keep the receipt in your wallet.",
        "ar": "من فضلك احتفظ بالإيصال في محفظتك."
      },
      {
        "id": "le-a2-a2u2-s08",
        "en": "My brother borrowed ten dollars from me.",
        "ar": "استعار أخي عشرة دولارات مني."
      },
      {
        "id": "le-a2-a2u2-s09",
        "en": "This phone is more expensive than that one.",
        "ar": "هذا الهاتف أغلى من ذاك."
      },
      {
        "id": "le-a2-a2u2-s10",
        "en": "She is going to buy a cheaper laptop.",
        "ar": "ستشتري حاسوبًا محمولًا أرخص."
      },
      {
        "id": "le-a2-a2u2-s11",
        "en": "I have never found such a good bargain.",
        "ar": "لم أجد صفقة بهذه الجودة من قبل."
      },
      {
        "id": "le-a2-a2u2-s12",
        "en": "The price of vegetables has gone up again.",
        "ar": "ارتفع سعر الخضروات مرة أخرى."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u2-d01",
        "who": "A",
        "en": "Can I help you find something?",
        "ar": "هل أساعدك في العثور على شيء؟"
      },
      {
        "id": "le-a2-a2u2-d02",
        "who": "B",
        "en": "Yes, I am looking for a warm coat.",
        "ar": "نعم، أبحث عن معطف دافئ."
      },
      {
        "id": "le-a2-a2u2-d03",
        "who": "A",
        "en": "These coats are on sale this week.",
        "ar": "هذه المعاطف معروضة بخصم هذا الأسبوع."
      },
      {
        "id": "le-a2-a2u2-d04",
        "who": "B",
        "en": "How much does the blue one cost?",
        "ar": "كم يكلّف المعطف الأزرق؟"
      },
      {
        "id": "le-a2-a2u2-d05",
        "who": "A",
        "en": "It costs eighty dollars with the discount.",
        "ar": "يكلّف ثمانين دولارًا بعد الخصم."
      },
      {
        "id": "le-a2-a2u2-d06",
        "who": "B",
        "en": "Great, I will pay in cash.",
        "ar": "رائع، سأدفع نقدًا."
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u2-p-receipt",
        "sourceId": "receipt",
        "en": "receipt",
        "ipa": "/rɪˈsiːt/",
        "ar": "إيصال",
        "contrastPairs": [
          {
            "id": "le-a2-a2u2-p-receipt-c-01",
            "en": "price / prize",
            "ar": "ميّز /s/ المهموسة عن /z/ المجهورة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u2-p-receipt-s-01",
            "en": "How much is it?",
            "ar": "تُوصل الكلمات في سؤال السعر، مع بقاء much مسموعة."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u2-p-receipt-i-01",
            "en": "Could I have a receipt, please? ↘",
            "ar": "هبوط لطيف في نهاية الطلب المهذب."
          }
        ]
      },
      {
        "id": "le-a2-a2u2-p-cheap",
        "sourceId": "cheap",
        "en": "cheap",
        "ipa": "/tʃiːp/",
        "ar": "رخيص",
        "contrastPairs": [
          {
            "id": "le-a2-a2u2-p-cheap-c-01",
            "en": "cheap / sheep",
            "ar": "ميّز /tʃ/ المركب عن /ʃ/."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u2-p-cheap-s-01",
            "en": "a cheap pair of shoes",
            "ar": "حافظ على وضوح /p/ قبل بداية pair."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u2-p-cheap-i-01",
            "en": "Is this cheaper? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u2-l1-much-many",
        "sourceId": "much-many",
        "incorrect": "much customers",
        "corrected": "many customers",
        "pattern": "الخلط بين much وmany",
        "explanationAr": "استخدم many مع الأسماء المعدودة الجمع، وmuch مع الأسماء غير المعدودة.",
        "practice": []
      },
      {
        "id": "le-a2-a2u2-l1-lend-borrow",
        "sourceId": "lend-borrow",
        "incorrect": "Can you borrow me some money?",
        "corrected": "Can you lend me some money?",
        "pattern": "الخلط بين lend وborrow",
        "explanationAr": "lend يعني أن تعطي شيئاً مؤقتاً، وborrow يعني أن تأخذه مؤقتاً.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u2-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u2-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u3",
    "sourceId": "a2u3",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "السفر والمواصلات",
    "titleEn": "Travel and Transport",
    "icon": "✈️",
    "goalAr": "أن يخطط المتعلم لرحلة ويتحدث عن المواصلات والأماكن التي زارها.",
    "grammar": [
      {
        "id": "le-a2-a2u3-g01",
        "titleAr": "الماضي المستمر",
        "explainHtml": "<p>نستخدم <b>الماضي المستمر</b> لوصف فعل كان جاريًا في لحظة معينة في الماضي.</p><ul><li>يتكوّن من فعل الكون في الماضي مع الفعل مضافًا إليه نهاية خاصة.</li><li>غالبًا نستخدمه مع فعل ماضٍ قصير يقطعه، ونربط بينهما بأداة الربط المناسبة.</li><li>نستخدمه أيضًا لوصف الأجواء والخلفية في الحكاية.</li></ul>",
        "explainText": "نستخدم الماضي المستمر لوصف فعل كان جاريًا في لحظة معينة في الماضي.\n• يتكوّن من فعل الكون في الماضي مع الفعل مضافًا إليه نهاية خاصة.\n• غالبًا نستخدمه مع فعل ماضٍ قصير يقطعه، ونربط بينهما بأداة الربط المناسبة.\n• نستخدمه أيضًا لوصف الأجواء والخلفية في الحكاية.",
        "table": {
          "headers": [
            "الضمير",
            "الصيغة"
          ],
          "rows": [
            [
              "I, he, she, it",
              "was travelling"
            ],
            [
              "you, we, they",
              "were travelling"
            ],
            [
              "النفي",
              "was not waiting"
            ],
            [
              "السؤال",
              "Were you sleeping?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u3-g01-e01",
            "en": "I was waiting for the train when it started to rain.",
            "ar": "كنت أنتظر القطار عندما بدأ المطر."
          },
          {
            "id": "le-a2-a2u3-g01-e02",
            "en": "They were travelling to the coast all night.",
            "ar": "كانوا يسافرون إلى الساحل طوال الليل."
          },
          {
            "id": "le-a2-a2u3-g01-e03",
            "en": "She was reading the timetable when I called her.",
            "ar": "كانت تقرأ جدول المواعيد عندما هاتفتها."
          },
          {
            "id": "le-a2-a2u3-g01-e04",
            "en": "We were not sleeping when the plane landed.",
            "ar": "لم نكن نائمين عندما هبطت الطائرة."
          },
          {
            "id": "le-a2-a2u3-g01-e05",
            "en": "What were you doing at the station yesterday?",
            "ar": "ماذا كنت تفعل في المحطة أمس؟"
          }
        ],
        "tips": [
          "استخدم الماضي المستمر للفعل الطويل، والماضي البسيط للفعل القصير الذي يقطعه.",
          "انتبه إلى اختلاف فعل الكون في الماضي مع الضمائر المختلفة.",
          "لا تضع الفعل الأساسي في الماضي بعد فعل الكون في هذه الصيغة."
        ]
      },
      {
        "id": "le-a2-a2u3-g02",
        "titleAr": "حروف الجر للحركة والزمن",
        "explainHtml": "<p>تساعدنا <b>حروف الجر</b> على تحديد الاتجاه والزمن بدقة.</p><ul><li>بعضها يدل على الحركة نحو مكان أو إلى داخله أو عبره.</li><li>بعضها يدل على الزمن مثل الشهر والسنة وأجزاء اليوم.</li><li>الاختيار الصحيح يعتمد على نوع الكلمة التي تأتي بعد حرف الجر.</li></ul>",
        "explainText": "تساعدنا حروف الجر على تحديد الاتجاه والزمن بدقة.\n• بعضها يدل على الحركة نحو مكان أو إلى داخله أو عبره.\n• بعضها يدل على الزمن مثل الشهر والسنة وأجزاء اليوم.\n• الاختيار الصحيح يعتمد على نوع الكلمة التي تأتي بعد حرف الجر.",
        "table": {
          "headers": [
            "الاستخدام",
            "المثال"
          ],
          "rows": [
            [
              "الحركة إلى مكان",
              "We drove to the airport."
            ],
            [
              "الدخول إلى مكان",
              "She walked into the terminal."
            ],
            [
              "المرور عبر مكان",
              "The bus went through the tunnel."
            ],
            [
              "الزمن مع الشهر والسنة",
              "We travelled in July."
            ],
            [
              "الزمن مع اليوم والتاريخ",
              "The flight leaves on Monday."
            ],
            [
              "الزمن مع الساعة",
              "The train arrives at six."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u3-g02-e01",
            "en": "We walked through the old market in the evening.",
            "ar": "مشينا عبر السوق القديم في المساء."
          },
          {
            "id": "le-a2-a2u3-g02-e02",
            "en": "She flew to Berlin in August.",
            "ar": "سافرت جوًا إلى برلين في أغسطس."
          },
          {
            "id": "le-a2-a2u3-g02-e03",
            "en": "The bus stopped at the corner of the street.",
            "ar": "توقفت الحافلة عند زاوية الشارع."
          },
          {
            "id": "le-a2-a2u3-g02-e04",
            "en": "They arrived in Paris on Friday morning.",
            "ar": "وصلوا إلى باريس صباح يوم الجمعة."
          },
          {
            "id": "le-a2-a2u3-g02-e05",
            "en": "He jumped into the boat very quickly.",
            "ar": "قفز داخل القارب بسرعة كبيرة."
          }
        ],
        "tips": [
          "استخدم حرف الجر الزمني المناسب مع الساعة أو اليوم أو الشهر.",
          "لا تترجم حروف الجر حرفيًا من العربية إلى الإنجليزية.",
          "احفظ العبارات الشائعة مع حروف الجر كوحدة واحدة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u3-v01",
        "en": "luggage",
        "ar": "أمتعة",
        "pos": "noun",
        "emoji": "🧳",
        "example": {
          "en": "Our luggage was too heavy for the plane.",
          "ar": "كانت أمتعتنا ثقيلة جدًا على الطائرة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v02",
        "en": "passport",
        "ar": "جواز سفر",
        "pos": "noun",
        "emoji": "🛂",
        "example": {
          "en": "Show your passport at the airport gate.",
          "ar": "أظهر جواز سفرك عند بوابة المطار."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v03",
        "en": "departure",
        "ar": "مغادرة",
        "pos": "noun",
        "emoji": "🛫",
        "example": {
          "en": "The departure time is eight in the morning.",
          "ar": "وقت المغادرة هو الثامنة صباحًا."
        },
        "collocations": [
          {
            "id": "le-a2-a2u3-v03-c01",
            "en": "departure time",
            "ar": "وقت المغادرة"
          }
        ]
      },
      {
        "id": "le-a2-a2u3-v04",
        "en": "arrival",
        "ar": "وصول",
        "pos": "noun",
        "emoji": "🛬",
        "example": {
          "en": "Our arrival was delayed by two hours.",
          "ar": "تأخر وصولنا ساعتين."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v05",
        "en": "platform",
        "ar": "رصيف القطار",
        "pos": "noun",
        "emoji": "🚉",
        "example": {
          "en": "The train leaves from platform three.",
          "ar": "يغادر القطار من الرصيف الثالث."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v06",
        "en": "fare",
        "ar": "أجرة المواصلات",
        "pos": "noun",
        "emoji": "🎫",
        "example": {
          "en": "The bus fare is two dollars.",
          "ar": "أجرة الحافلة دولاران."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v07",
        "en": "reserve",
        "ar": "يحجز مسبقًا",
        "pos": "verb",
        "emoji": "📌",
        "example": {
          "en": "I want to reserve a seat by the window.",
          "ar": "أريد حجز مقعد بجانب النافذة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v08",
        "en": "delay",
        "ar": "تأخير",
        "pos": "noun",
        "emoji": "⌛",
        "example": {
          "en": "The delay lasted forty minutes.",
          "ar": "استمر التأخير أربعين دقيقة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v09",
        "en": "abroad",
        "ar": "في الخارج",
        "pos": "adverb",
        "emoji": "🌍",
        "example": {
          "en": "She works abroad for six months.",
          "ar": "تعمل في الخارج ستة أشهر."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v10",
        "en": "sightseeing",
        "ar": "زيارة المعالم",
        "pos": "noun",
        "emoji": "📷",
        "example": {
          "en": "We went sightseeing in the old city.",
          "ar": "ذهبنا لزيارة معالم المدينة القديمة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v11",
        "en": "guide",
        "ar": "مرشد سياحي",
        "pos": "noun",
        "emoji": "🧭",
        "example": {
          "en": "Our guide showed us the old castle.",
          "ar": "أرانا مرشدنا القلعة القديمة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v12",
        "en": "souvenir",
        "ar": "تذكار",
        "pos": "noun",
        "emoji": "🎀",
        "example": {
          "en": "I bought a small souvenir for my sister.",
          "ar": "اشتريت تذكارًا صغيرًا لأختي."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v13",
        "en": "destination",
        "ar": "وجهة",
        "pos": "noun",
        "emoji": "📍",
        "example": {
          "en": "Our final destination was Rome.",
          "ar": "كانت وجهتنا الأخيرة روما."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v14",
        "en": "board",
        "ar": "يصعد إلى الطائرة",
        "pos": "verb",
        "emoji": "🚪",
        "example": {
          "en": "We board the plane in twenty minutes.",
          "ar": "نصعد إلى الطائرة بعد عشرين دقيقة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v15",
        "en": "crowded",
        "ar": "مزدحم",
        "pos": "adjective",
        "emoji": "👥",
        "example": {
          "en": "The metro was very crowded this morning.",
          "ar": "كان المترو مزدحمًا جدًا هذا الصباح."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v16",
        "en": "journey",
        "ar": "رحلة",
        "pos": "noun",
        "emoji": "🧭",
        "example": {
          "en": "The journey took three hours by car.",
          "ar": "استغرقت الرحلة ثلاث ساعات بالسيارة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u3-v17",
        "en": "traffic",
        "ar": "حركة المرور",
        "pos": "noun",
        "emoji": "🚗",
        "example": {
          "en": "The traffic was terrible near the bridge.",
          "ar": "كانت حركة المرور سيئة قرب الجسر."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u3-s01",
        "en": "Our flight departs from the new terminal.",
        "ar": "تنطلق رحلتنا من الصالة الجديدة."
      },
      {
        "id": "le-a2-a2u3-s02",
        "en": "I reserved a seat next to the window.",
        "ar": "حجزت مقعدًا بجانب النافذة."
      },
      {
        "id": "le-a2-a2u3-s03",
        "en": "The train was late because of heavy snow.",
        "ar": "تأخر القطار بسبب الثلوج الكثيفة."
      },
      {
        "id": "le-a2-a2u3-s04",
        "en": "We left our luggage at the hotel reception.",
        "ar": "تركنا أمتعتنا في استقبال الفندق."
      },
      {
        "id": "le-a2-a2u3-s05",
        "en": "She showed her passport at the gate.",
        "ar": "أظهرت جواز سفرها عند البوابة."
      },
      {
        "id": "le-a2-a2u3-s06",
        "en": "How long does the journey take by car?",
        "ar": "كم تستغرق الرحلة بالسيارة؟"
      },
      {
        "id": "le-a2-a2u3-s07",
        "en": "They were waiting on platform four.",
        "ar": "كانوا ينتظرون على الرصيف الرابع."
      },
      {
        "id": "le-a2-a2u3-s08",
        "en": "I have never travelled abroad alone.",
        "ar": "لم أسافر إلى الخارج وحدي من قبل."
      },
      {
        "id": "le-a2-a2u3-s09",
        "en": "The traffic was terrible during the morning.",
        "ar": "كانت حركة المرور سيئة خلال الصباح."
      },
      {
        "id": "le-a2-a2u3-s10",
        "en": "We are going to visit three cities next month.",
        "ar": "سنزور ثلاث مدن الشهر القادم."
      },
      {
        "id": "le-a2-a2u3-s11",
        "en": "He bought a souvenir for his parents.",
        "ar": "اشترى تذكارًا لوالديه."
      },
      {
        "id": "le-a2-a2u3-s12",
        "en": "The delay lasted more than two hours.",
        "ar": "استمر التأخير أكثر من ساعتين."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u3-d01",
        "who": "A",
        "en": "Excuse me, where is platform six?",
        "ar": "عفوًا، أين الرصيف السادس؟"
      },
      {
        "id": "le-a2-a2u3-d02",
        "who": "B",
        "en": "Go through the main hall and turn left.",
        "ar": "اعبر القاعة الرئيسية ثم انعطف يسارًا."
      },
      {
        "id": "le-a2-a2u3-d03",
        "who": "A",
        "en": "Is the train to York delayed today?",
        "ar": "هل قطار يورك متأخر اليوم؟"
      },
      {
        "id": "le-a2-a2u3-d04",
        "who": "B",
        "en": "Yes, it is twenty minutes late.",
        "ar": "نعم، إنه متأخر عشرين دقيقة."
      },
      {
        "id": "le-a2-a2u3-d05",
        "who": "A",
        "en": "Thank you, I will wait near the cafe.",
        "ar": "شكرًا، سأنتظر قرب المقهى."
      },
      {
        "id": "le-a2-a2u3-d06",
        "who": "B",
        "en": "Have a good journey!",
        "ar": "أتمنى لك رحلة سعيدة!"
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u3-p-departure",
        "sourceId": "departure",
        "en": "departure",
        "ipa": "/dɪˈpɑːtʃə(r)/",
        "ar": "مغادرة",
        "contrastPairs": [
          {
            "id": "le-a2-a2u3-p-departure-c-01",
            "en": "ship / sheep",
            "ar": "ميّز /ɪ/ القصيرة عن /iː/ الطويلة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u3-p-departure-s-01",
            "en": "The train was leaving when I arrived.",
            "ar": "حافظ على نطق was الخفيف عند وصله بالفعل."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u3-p-departure-i-01",
            "en": "What time does the train depart? ↘",
            "ar": "تنغيم هابط في سؤال أداة الاستفهام."
          }
        ]
      },
      {
        "id": "le-a2-a2u3-p-journey",
        "sourceId": "journey",
        "en": "journey",
        "ipa": "/ˈdʒɜːni/",
        "ar": "رحلة",
        "contrastPairs": [
          {
            "id": "le-a2-a2u3-p-journey-c-01",
            "en": "journey / sherry",
            "ar": "ميّز /dʒ/ عن /ʃ/ في البداية."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u3-p-journey-s-01",
            "en": "We arrived at the station on time.",
            "ar": "لا تحذف at عند وصلها بالكلمات المحيطة."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u3-p-journey-i-01",
            "en": "Did you enjoy the journey? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u3-l1-did-base",
        "sourceId": "did-base",
        "incorrect": "We didn't took the train.",
        "corrected": "We didn't take the train.",
        "pattern": "إبقاء الفعل في الماضي بعد did",
        "explanationAr": "بعد didn't أو did يأتي الفعل بصورته الأساسية.",
        "practice": []
      },
      {
        "id": "le-a2-a2u3-l1-travel-preposition",
        "sourceId": "travel-preposition",
        "incorrect": "I arrived to the airport.",
        "corrected": "I arrived at the airport.",
        "pattern": "نقل حرف الجر مع فعل الوصول",
        "explanationAr": "نستخدم arrive at لمكان محدد، وarrive in مع مدينة أو بلد.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u3-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u3-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u4",
    "sourceId": "a2u4",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "الصحة والجسم والمشاعر",
    "titleEn": "Health, Body and Feelings",
    "icon": "🩺",
    "goalAr": "أن يصف المتعلم حالته الصحية ومشاعره ويقدّم النصيحة ويعبّر عن الالتزام.",
    "grammar": [
      {
        "id": "le-a2-a2u4-g01",
        "titleAr": "النصيحة والضرورة والالتزام",
        "explainHtml": "<p>نستخدم أفعالًا مساعدة للتعبير عن <b>النصيحة</b> و<b>الضرورة</b> و<b>الالتزام</b>.</p><ul><li>فعل النصيحة يعني أن من الأفضل فعل شيء ما.</li><li>فعل الإلزام القوي يعبّر عن قاعدة صارمة أو ضرورة شخصية.</li><li>عبارة الالتزام تدل على إلزام يأتي من الخارج مثل القانون أو العمل.</li><li>بعد هذه الأفعال يأتي الفعل في صورته الأساسية دائمًا.</li></ul>",
        "explainText": "نستخدم أفعالًا مساعدة للتعبير عن النصيحة والضرورة والالتزام.\n• فعل النصيحة يعني أن من الأفضل فعل شيء ما.\n• فعل الإلزام القوي يعبّر عن قاعدة صارمة أو ضرورة شخصية.\n• عبارة الالتزام تدل على إلزام يأتي من الخارج مثل القانون أو العمل.\n• بعد هذه الأفعال يأتي الفعل في صورته الأساسية دائمًا.",
        "table": {
          "headers": [
            "الاستخدام",
            "المثال"
          ],
          "rows": [
            [
              "النصيحة",
              "You should drink more water."
            ],
            [
              "الإلزام القوي",
              "You must take this medicine."
            ],
            [
              "الالتزام الخارجي",
              "I have to see the doctor today."
            ],
            [
              "النفي مع النصيحة",
              "You should not eat late at night."
            ],
            [
              "السؤال عن الالتزام",
              "Do you have to work on Sunday?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u4-g01-e01",
            "en": "You should see a doctor about that cough.",
            "ar": "ينبغي أن ترى طبيبًا بشأن تلك الكحة."
          },
          {
            "id": "le-a2-a2u4-g01-e02",
            "en": "Patients must take the medicine after meals.",
            "ar": "يجب على المرضى تناول الدواء بعد الطعام."
          },
          {
            "id": "le-a2-a2u4-g01-e03",
            "en": "I have to make an appointment this week.",
            "ar": "عليّ أن أحجز موعدًا هذا الأسبوع."
          },
          {
            "id": "le-a2-a2u4-g01-e04",
            "en": "She should not carry that heavy bag.",
            "ar": "لا ينبغي لها أن تحمل تلك الحقيبة الثقيلة."
          },
          {
            "id": "le-a2-a2u4-g01-e05",
            "en": "Do we have to pay for the treatment?",
            "ar": "هل علينا أن ندفع مقابل العلاج؟"
          }
        ],
        "tips": [
          "بعد الأفعال المساعدة الثلاثة يأتي الفعل الأساسي دون أي إضافة.",
          "استخدم فعل النصيحة للمشورة، وفعل الإلزام للقواعد الصارمة.",
          "استخدم عبارة الالتزام للقواعد الخارجية مثل قوانين العمل."
        ]
      },
      {
        "id": "le-a2-a2u4-g02",
        "titleAr": "ضمائر الملكية والضمائر الانعكاسية",
        "explainHtml": "<p>ضمائر الملكية تدل على أن شيئًا يخص شخصًا ما، والضمائر الانعكاسية ترجع إلى الفاعل نفسه.</p><ul><li>بعض ضمائر الملكية تأتي قبل الاسم، وبعضها يأتي وحدها.</li><li>الضمير الانعكاسي يعود على فاعل الجملة.</li><li>نستخدم العبارة الثابتة للتعبير عن الاعتناء بالنفس.</li></ul>",
        "explainText": "ضمائر الملكية تدل على أن شيئًا يخص شخصًا ما، والضمائر الانعكاسية ترجع إلى الفاعل نفسه.\n• بعض ضمائر الملكية تأتي قبل الاسم، وبعضها يأتي وحدها.\n• الضمير الانعكاسي يعود على فاعل الجملة.\n• نستخدم العبارة الثابتة للتعبير عن الاعتناء بالنفس.",
        "table": {
          "headers": [
            "الضمير",
            "الملكية مع اسم",
            "الملكية وحدها"
          ],
          "rows": [
            [
              "I",
              "my",
              "mine"
            ],
            [
              "you",
              "your",
              "yours"
            ],
            [
              "he",
              "his",
              "his"
            ],
            [
              "she",
              "her",
              "hers"
            ],
            [
              "we",
              "our",
              "ours"
            ],
            [
              "they",
              "their",
              "theirs"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u4-g02-e01",
            "en": "This is my appointment card and that is yours.",
            "ar": "هذه بطاقة موعدي وتلك بطاقتك."
          },
          {
            "id": "le-a2-a2u4-g02-e02",
            "en": "She hurt herself while she was running.",
            "ar": "أصابت نفسها أثناء الجري."
          },
          {
            "id": "le-a2-a2u4-g02-e03",
            "en": "We prepared ourselves for the long treatment.",
            "ar": "هيّأنا أنفسنا للعلاج الطويل."
          },
          {
            "id": "le-a2-a2u4-g02-e04",
            "en": "Their doctor is more experienced than ours.",
            "ar": "طبيبهم أكثر خبرة من طبيبنا."
          },
          {
            "id": "le-a2-a2u4-g02-e05",
            "en": "He looked after himself during the illness.",
            "ar": "اعتنى بنفسه أثناء المرض."
          }
        ],
        "tips": [
          "ضمير الملكية الذي يأتي وحده لا يحتاج إلى اسم بعده.",
          "تأكد من أن الضمير الانعكاسي يعود على فاعل الجملة نفسه.",
          "احفظ صيغة الجمع الانعكاسية لأنها تختلف عن صيغة المفرد."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u4-v01",
        "en": "headache",
        "ar": "صداع",
        "pos": "noun",
        "emoji": "🤕",
        "example": {
          "en": "I have a terrible headache today.",
          "ar": "عندي صداع شديد اليوم."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v02",
        "en": "medicine",
        "ar": "دواء",
        "pos": "noun",
        "emoji": "💊",
        "example": {
          "en": "Take this medicine after lunch.",
          "ar": "تناول هذا الدواء بعد الغداء."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v03",
        "en": "appointment",
        "ar": "موعد مع الطبيب",
        "pos": "noun",
        "emoji": "📆",
        "example": {
          "en": "I made an appointment with the dentist.",
          "ar": "حجزت موعدًا مع طبيب الأسنان."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v04",
        "en": "pharmacy",
        "ar": "صيدلية",
        "pos": "noun",
        "emoji": "🏥",
        "example": {
          "en": "The pharmacy is next to the bank.",
          "ar": "الصيدلية بجانب المصرف."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v05",
        "en": "symptom",
        "ar": "عَرَض مرضي",
        "pos": "noun",
        "emoji": "🌡️",
        "example": {
          "en": "A high temperature is a common symptom.",
          "ar": "ارتفاع الحرارة عَرَض شائع."
        },
        "collocations": [
          {
            "id": "le-a2-a2u4-v05-c01",
            "en": "common symptom",
            "ar": "عَرَض شائع"
          }
        ]
      },
      {
        "id": "le-a2-a2u4-v06",
        "en": "recover",
        "ar": "يتعافى",
        "pos": "verb",
        "emoji": "💪",
        "example": {
          "en": "She will recover from the flu soon.",
          "ar": "ستتعافى من الإنفلونزا قريبًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v07",
        "en": "injury",
        "ar": "إصابة جسدية",
        "pos": "noun",
        "emoji": "🩹",
        "example": {
          "en": "He got a small injury during the match.",
          "ar": "تعرّض لإصابة صغيرة خلال المباراة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v08",
        "en": "breathe",
        "ar": "يتنفس",
        "pos": "verb",
        "emoji": "🌬️",
        "example": {
          "en": "It is difficult to breathe in this heat.",
          "ar": "من الصعب التنفس في هذه الحرارة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v09",
        "en": "healthy",
        "ar": "صحي",
        "pos": "adjective",
        "emoji": "🥗",
        "example": {
          "en": "Eating vegetables keeps you healthy.",
          "ar": "أكل الخضروات يبقيك صحيحًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v10",
        "en": "exhausted",
        "ar": "منهك",
        "pos": "adjective",
        "emoji": "😩",
        "example": {
          "en": "I felt exhausted after the long trip.",
          "ar": "شعرت بالإنهاك بعد الرحلة الطويلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v11",
        "en": "nervous",
        "ar": "متوتر",
        "pos": "adjective",
        "emoji": "😰",
        "example": {
          "en": "She was nervous before the interview.",
          "ar": "كانت متوترة قبل المقابلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v12",
        "en": "confident",
        "ar": "واثق",
        "pos": "adjective",
        "emoji": "😌",
        "example": {
          "en": "He feels confident about the test.",
          "ar": "يشعر بالثقة بشأن الاختبار."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v13",
        "en": "lonely",
        "ar": "يشعر بالوحدة",
        "pos": "adjective",
        "emoji": "🥺",
        "example": {
          "en": "My grandfather feels lonely in winter.",
          "ar": "يشعر جدي بالوحدة في الشتاء."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v14",
        "en": "worried",
        "ar": "قلق",
        "pos": "adjective",
        "emoji": "😟",
        "example": {
          "en": "My parents were worried about my health.",
          "ar": "كان والداي قلقين على صحتي."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v15",
        "en": "treatment",
        "ar": "علاج",
        "pos": "noun",
        "emoji": "🩺",
        "example": {
          "en": "The treatment lasted three weeks.",
          "ar": "استمر العلاج ثلاثة أسابيع."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u4-v16",
        "en": "dizzy",
        "ar": "يشعر بدوار",
        "pos": "adjective",
        "emoji": "😵",
        "example": {
          "en": "I felt dizzy in the hot sun.",
          "ar": "شعرت بالدوار تحت الشمس الحارة."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u4-s01",
        "en": "I have a bad headache and a sore throat.",
        "ar": "عندي صداع شديد والتهاب في الحلق."
      },
      {
        "id": "le-a2-a2u4-s02",
        "en": "She made an appointment with the doctor.",
        "ar": "حجزت موعدًا مع الطبيب."
      },
      {
        "id": "le-a2-a2u4-s03",
        "en": "You should take this medicine twice a day.",
        "ar": "ينبغي أن تتناول هذا الدواء مرتين يوميًا."
      },
      {
        "id": "le-a2-a2u4-s04",
        "en": "He felt nervous before the medical test.",
        "ar": "شعر بالتوتر قبل الفحص الطبي."
      },
      {
        "id": "le-a2-a2u4-s05",
        "en": "We were waiting in the pharmacy for ten minutes.",
        "ar": "انتظرنا في الصيدلية عشر دقائق."
      },
      {
        "id": "le-a2-a2u4-s06",
        "en": "My sister recovered from the flu quickly.",
        "ar": "تعافت أختي من الإنفلونزا بسرعة."
      },
      {
        "id": "le-a2-a2u4-s07",
        "en": "They must wear masks inside the hospital.",
        "ar": "يجب عليهم وضع الكمامات داخل المستشفى."
      },
      {
        "id": "le-a2-a2u4-s08",
        "en": "I have never felt so exhausted before.",
        "ar": "لم أشعر بهذا الإنهاك من قبل."
      },
      {
        "id": "le-a2-a2u4-s09",
        "en": "The treatment will last about three weeks.",
        "ar": "سيستمر العلاج نحو ثلاثة أسابيع."
      },
      {
        "id": "le-a2-a2u4-s10",
        "en": "Do you have to pay for the check-up?",
        "ar": "هل عليك أن تدفع مقابل الفحص الشامل؟"
      },
      {
        "id": "le-a2-a2u4-s11",
        "en": "She was disappointed with the test results.",
        "ar": "كانت خائبة الأمل في نتائج الفحص."
      },
      {
        "id": "le-a2-a2u4-s12",
        "en": "He is going to see a specialist next week.",
        "ar": "سيزور طبيبًا مختصًا الأسبوع القادم."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u4-d01",
        "who": "A",
        "en": "You look tired today, what is wrong?",
        "ar": "تبدو متعبًا اليوم، ما الأمر؟"
      },
      {
        "id": "le-a2-a2u4-d02",
        "who": "B",
        "en": "I have a headache and a high temperature.",
        "ar": "عندي صداع ودرجة حرارة مرتفعة."
      },
      {
        "id": "le-a2-a2u4-d03",
        "who": "A",
        "en": "You should rest and drink hot drinks.",
        "ar": "ينبغي أن ترتاح وتشرب مشروبات ساخنة."
      },
      {
        "id": "le-a2-a2u4-d04",
        "who": "B",
        "en": "Do I have to see a doctor?",
        "ar": "هل عليّ أن أرى طبيبًا؟"
      },
      {
        "id": "le-a2-a2u4-d05",
        "who": "A",
        "en": "Yes, you must visit the clinic today.",
        "ar": "نعم، يجب أن تزور العيادة اليوم."
      },
      {
        "id": "le-a2-a2u4-d06",
        "who": "B",
        "en": "Thank you, I will make an appointment now.",
        "ar": "شكرًا، سأحجز موعدًا الآن."
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u4-p-medicine",
        "sourceId": "medicine",
        "en": "medicine",
        "ipa": "/ˈmedɪsən/",
        "ar": "دواء",
        "contrastPairs": [
          {
            "id": "le-a2-a2u4-p-medicine-c-01",
            "en": "breathe / breath",
            "ar": "breathe ينتهي بصوت /ð/ مجهور، وbreath بصوت /θ/ مهموس."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u4-p-medicine-s-01",
            "en": "You should see a doctor.",
            "ar": "قد تختصر should في الكلام المتصل، لكن لا تخلطها بـshouldn't."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u4-p-medicine-i-01",
            "en": "You should get some rest. ↘",
            "ar": "هبوط النبرة في نصيحة مباشرة."
          }
        ]
      },
      {
        "id": "le-a2-a2u4-p-nervous",
        "sourceId": "nervous",
        "en": "nervous",
        "ipa": "/ˈnɜːvəs/",
        "ar": "متوتر",
        "contrastPairs": [
          {
            "id": "le-a2-a2u4-p-nervous-c-01",
            "en": "very / wary",
            "ar": "انتبه لاختلاف الحركة الأولى وموقع النبر."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u4-p-nervous-s-01",
            "en": "I feel nervous about the appointment.",
            "ar": "اربط about بالكلمة التالية مع وضوح المقطع المنبور."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u4-p-nervous-i-01",
            "en": "Are you feeling better? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u4-l1-advice-count",
        "sourceId": "advice-count",
        "incorrect": "an advice",
        "corrected": "some advice",
        "pattern": "معاملة advice كاسم معدود",
        "explanationAr": "advice غير معدود؛ لا يسبقه a/an ولا يجمع عادةً، ويمكن قول a piece of advice.",
        "practice": []
      },
      {
        "id": "le-a2-a2u4-l1-modal-base",
        "sourceId": "modal-base",
        "incorrect": "You should to rest.",
        "corrected": "You should rest.",
        "pattern": "إضافة to بعد الفعل المساعد",
        "explanationAr": "يأتي الفعل بصورته الأساسية مباشرة بعد should وmust.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u4-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u4-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u5",
    "sourceId": "a2u5",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "الطقس والفصول والهوايات",
    "titleEn": "Weather, Seasons and Hobbies",
    "icon": "🌦️",
    "goalAr": "أن يتحدث المتعلم عن الطقس والفصول وهواياته وخططه المستقبلية.",
    "grammar": [
      {
        "id": "le-a2-a2u5-g01",
        "titleAr": "التعبير عن المستقبل: الصيغتان",
        "explainHtml": "<p>نتحدث عن المستقبل بطريقتين مختلفتين ولكل طريقة استخدام خاص.</p><ul><li>الصيغة الأولى نستخدمها للقرار اللحظي والتوقع والوعد.</li><li>الصيغة الثانية نستخدمها للخطة المسبقة والنية الواضحة.</li><li>الدليل الموجود في الجملة يساعدك على اختيار الصيغة الأنسب.</li></ul>",
        "explainText": "نتحدث عن المستقبل بطريقتين مختلفتين ولكل طريقة استخدام خاص.\n• الصيغة الأولى نستخدمها للقرار اللحظي والتوقع والوعد.\n• الصيغة الثانية نستخدمها للخطة المسبقة والنية الواضحة.\n• الدليل الموجود في الجملة يساعدك على اختيار الصيغة الأنسب.",
        "table": {
          "headers": [
            "الاستخدام",
            "المثال"
          ],
          "rows": [
            [
              "قرار لحظي",
              "It is cold, I will close the window."
            ],
            [
              "توقع",
              "It will rain tomorrow."
            ],
            [
              "خطة مسبقة",
              "We are going to go hiking on Saturday."
            ],
            [
              "نية واضحة",
              "She is going to learn photography."
            ],
            [
              "النفي",
              "I will not stay at home all weekend."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u5-g01-e01",
            "en": "Look at those clouds, it is going to rain.",
            "ar": "انظر إلى تلك السحب، إنها ستمطر."
          },
          {
            "id": "le-a2-a2u5-g01-e02",
            "en": "I will call you when the forecast changes.",
            "ar": "سأهاتفك عندما يتغير توقّع الطقس."
          },
          {
            "id": "le-a2-a2u5-g01-e03",
            "en": "We are going to plant flowers in the garden.",
            "ar": "سنزرع أزهارًا في الحديقة."
          },
          {
            "id": "le-a2-a2u5-g01-e04",
            "en": "They will visit us during the summer holiday.",
            "ar": "سيزوروننا خلال العطلة الصيفية."
          },
          {
            "id": "le-a2-a2u5-g01-e05",
            "en": "She is not going to buy a new camera.",
            "ar": "لن تشتري كاميرا جديدة."
          }
        ],
        "tips": [
          "استخدم الصيغة الأولى للقرار السريع والتوقع البسيط.",
          "استخدم الصيغة الثانية للخطة التي قررتها مسبقًا.",
          "ابحث عن الدليل الحاضر في الجملة قبل اختيار الصيغة."
        ]
      },
      {
        "id": "le-a2-a2u5-g02",
        "titleAr": "التعبير عن العادات الماضية",
        "explainHtml": "<p>نستخدم هذه الصيغة للحديث عن عادة أو حالة كانت موجودة في الماضي ثم توقفت.</p><ul><li>تأتي قبل الفعل في صورته الأساسية.</li><li>نفيها وسؤالها يشبهان الماضي البسيط.</li><li>لا نستخدمها مع الأحداث التي وقعت مرة واحدة فقط.</li></ul>",
        "explainText": "نستخدم هذه الصيغة للحديث عن عادة أو حالة كانت موجودة في الماضي ثم توقفت.\n• تأتي قبل الفعل في صورته الأساسية.\n• نفيها وسؤالها يشبهان الماضي البسيط.\n• لا نستخدمها مع الأحداث التي وقعت مرة واحدة فقط.",
        "table": {
          "headers": [
            "الاستخدام",
            "المثال"
          ],
          "rows": [
            [
              "عادة قديمة",
              "I used to play tennis every Sunday."
            ],
            [
              "حالة قديمة",
              "She used to live near the sea."
            ],
            [
              "النفي",
              "He did not use to like cold weather."
            ],
            [
              "السؤال",
              "Did you use to collect stamps?"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u5-g02-e01",
            "en": "I used to go hiking with my uncle.",
            "ar": "كنت أذهب للمشي الجبلي مع عمي."
          },
          {
            "id": "le-a2-a2u5-g02-e02",
            "en": "They used to spend every summer by the lake.",
            "ar": "كانوا يقضون كل صيف بجانب البحيرة."
          },
          {
            "id": "le-a2-a2u5-g02-e03",
            "en": "She did not use to enjoy gardening.",
            "ar": "لم تكن تستمتع بالبستنة."
          },
          {
            "id": "le-a2-a2u5-g02-e04",
            "en": "Did you use to collect old coins?",
            "ar": "هل كنت تجمع العملات القديمة؟"
          },
          {
            "id": "le-a2-a2u5-g02-e05",
            "en": "We used to watch the lightning from the window.",
            "ar": "كنا نشاهد البرق من النافذة."
          }
        ],
        "tips": [
          "بعد هذه الصيغة يأتي الفعل في صورته الأساسية دائمًا.",
          "في النفي والسؤال تُحذف النهاية الماضية من الصيغة نفسها.",
          "استخدمها للعادات المتكررة قديمًا لا لحدث وقع مرة واحدة."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u5-v01",
        "en": "forecast",
        "ar": "توقّع الطقس",
        "pos": "noun",
        "emoji": "📡",
        "example": {
          "en": "The forecast says rain for tomorrow.",
          "ar": "يقول توقّع الطقس إن غدًا ممطر."
        },
        "collocations": [
          {
            "id": "le-a2-a2u5-v01-c01",
            "en": "weather forecast",
            "ar": "نشرة الطقس"
          }
        ]
      },
      {
        "id": "le-a2-a2u5-v02",
        "en": "temperature",
        "ar": "درجة الحرارة",
        "pos": "noun",
        "emoji": "🌡️",
        "example": {
          "en": "The temperature dropped below zero last night.",
          "ar": "انخفضت درجة الحرارة تحت الصفر ليلة أمس."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v03",
        "en": "thunder",
        "ar": "رعد",
        "pos": "noun",
        "emoji": "⛈️",
        "example": {
          "en": "The thunder woke the whole village.",
          "ar": "أيقظ الرعد القرية كلها."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v04",
        "en": "lightning",
        "ar": "برق",
        "pos": "noun",
        "emoji": "⚡",
        "example": {
          "en": "Lightning hit the tall tree near the river.",
          "ar": "أصاب البرق الشجرة الطويلة قرب النهر."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v05",
        "en": "fog",
        "ar": "ضباب",
        "pos": "noun",
        "emoji": "🌫️",
        "example": {
          "en": "Thick fog covered the airport this morning.",
          "ar": "غطى الضباب الكثيف المطار هذا الصباح."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v06",
        "en": "shower",
        "ar": "زخة مطر",
        "pos": "noun",
        "emoji": "🌧️",
        "example": {
          "en": "A heavy shower started during the match.",
          "ar": "بدأت زخة مطر قوية خلال المباراة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v07",
        "en": "freezing",
        "ar": "متجمد البرودة",
        "pos": "adjective",
        "emoji": "🥶",
        "example": {
          "en": "It is freezing outside, wear a warm coat.",
          "ar": "الجو متجمد في الخارج، البس معطفًا دافئًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v08",
        "en": "mild",
        "ar": "معتدل",
        "pos": "adjective",
        "emoji": "🍃",
        "example": {
          "en": "The winter was mild this year.",
          "ar": "كان الشتاء معتدلًا هذا العام."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v09",
        "en": "hiking",
        "ar": "المشي الجبلي",
        "pos": "noun",
        "emoji": "🥾",
        "example": {
          "en": "We go hiking in the mountains every summer.",
          "ar": "نذهب للمشي الجبلي في الجبال كل صيف."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v10",
        "en": "gardening",
        "ar": "البستنة",
        "pos": "noun",
        "emoji": "🪴",
        "example": {
          "en": "My aunt enjoys gardening at weekends.",
          "ar": "تستمتع عمتي بالبستنة في نهاية الأسبوع."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v11",
        "en": "photography",
        "ar": "التصوير الفوتوغرافي",
        "pos": "noun",
        "emoji": "📸",
        "example": {
          "en": "Photography is his favourite hobby.",
          "ar": "التصوير الفوتوغرافي هوايته المفضلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v12",
        "en": "collect",
        "ar": "يجمع",
        "pos": "verb",
        "emoji": "🪙",
        "example": {
          "en": "I collect old coins from many countries.",
          "ar": "أجمع عملات قديمة من بلدان كثيرة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v13",
        "en": "painting",
        "ar": "الرسم",
        "pos": "noun",
        "emoji": "🎨",
        "example": {
          "en": "Painting helps me relax after work.",
          "ar": "يساعدني الرسم على الاسترخاء بعد العمل."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v14",
        "en": "season",
        "ar": "فصل من السنة",
        "pos": "noun",
        "emoji": "🗓️",
        "example": {
          "en": "Spring is my favourite season.",
          "ar": "الربيع فصلي المفضل."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v15",
        "en": "umbrella",
        "ar": "مظلة",
        "pos": "noun",
        "emoji": "☂️",
        "example": {
          "en": "Take an umbrella, it may rain later.",
          "ar": "خذ مظلة، فقد تمطر لاحقًا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v16",
        "en": "sunshine",
        "ar": "أشعة الشمس",
        "pos": "noun",
        "emoji": "☀️",
        "example": {
          "en": "The sunshine made everyone happy.",
          "ar": "جعلت أشعة الشمس الجميع سعداء."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u5-v17",
        "en": "cycling",
        "ar": "ركوب الدراجة",
        "pos": "noun",
        "emoji": "🚲",
        "example": {
          "en": "Cycling is good exercise for everyone.",
          "ar": "ركوب الدراجة تمرين جيد للجميع."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u5-s01",
        "en": "The forecast says it will be sunny tomorrow.",
        "ar": "يقول توقّع الطقس إن غدًا سيكون مشمسًا."
      },
      {
        "id": "le-a2-a2u5-s02",
        "en": "We are going to have a picnic this weekend.",
        "ar": "سنقيم نزهة في نهاية هذا الأسبوع."
      },
      {
        "id": "le-a2-a2u5-s03",
        "en": "It was freezing outside, so we stayed home.",
        "ar": "كان الجو متجمدًا في الخارج، لذلك بقينا في البيت."
      },
      {
        "id": "le-a2-a2u5-s04",
        "en": "My favourite season is spring because of the mild weather.",
        "ar": "فصلي المفضل هو الربيع بسبب الجو المعتدل."
      },
      {
        "id": "le-a2-a2u5-s05",
        "en": "Thunder and lightning frightened the little dog.",
        "ar": "أخاف الرعد والبرق الكلب الصغير."
      },
      {
        "id": "le-a2-a2u5-s06",
        "en": "She is going to take up photography next year.",
        "ar": "ستبدأ تعلم التصوير الفوتوغرافي العام القادم."
      },
      {
        "id": "le-a2-a2u5-s07",
        "en": "I used to go cycling every morning.",
        "ar": "كنت أذهب لركوب الدراجة كل صباح."
      },
      {
        "id": "le-a2-a2u5-s08",
        "en": "The temperature dropped quickly after the storm.",
        "ar": "انخفضت درجة الحرارة بسرعة بعد العاصفة."
      },
      {
        "id": "le-a2-a2u5-s09",
        "en": "Will you join our hiking group on Friday?",
        "ar": "هل ستنضم إلى مجموعة المشي الجبلي يوم الجمعة؟"
      },
      {
        "id": "le-a2-a2u5-s10",
        "en": "Thick fog covered the road this morning.",
        "ar": "غطى الضباب الكثيف الطريق هذا الصباح."
      },
      {
        "id": "le-a2-a2u5-s11",
        "en": "They have enjoyed gardening since they moved here.",
        "ar": "استمتعوا بالبستنة منذ أن انتقلوا إلى هنا."
      },
      {
        "id": "le-a2-a2u5-s12",
        "en": "Take an umbrella because a shower is coming.",
        "ar": "خذ مظلة لأن زخة مطر قادمة."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u5-d01",
        "who": "A",
        "en": "What is the weather like in your city?",
        "ar": "كيف الطقس في مدينتك؟"
      },
      {
        "id": "le-a2-a2u5-d02",
        "who": "B",
        "en": "It is mild in spring but freezing in winter.",
        "ar": "الجو معتدل في الربيع لكنه متجمد في الشتاء."
      },
      {
        "id": "le-a2-a2u5-d03",
        "who": "A",
        "en": "What do you usually do in cold weather?",
        "ar": "ماذا تفعل عادةً في الطقس البارد؟"
      },
      {
        "id": "le-a2-a2u5-d04",
        "who": "B",
        "en": "I stay at home and do some gardening inside.",
        "ar": "أبقى في البيت وأقوم ببعض البستنة في الداخل."
      },
      {
        "id": "le-a2-a2u5-d05",
        "who": "A",
        "en": "Are you going to join a hobby club?",
        "ar": "هل ستنضم إلى نادي هوايات؟"
      },
      {
        "id": "le-a2-a2u5-d06",
        "who": "B",
        "en": "Yes, I will start photography classes next month.",
        "ar": "نعم، سأبدأ دروس التصوير الشهر القادم."
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u5-p-weather",
        "sourceId": "weather",
        "en": "weather",
        "ipa": "/ˈweðə(r)/",
        "ar": "طقس",
        "contrastPairs": [
          {
            "id": "le-a2-a2u5-p-weather-c-01",
            "en": "weather / whether",
            "ar": "الكلمتان متطابقتان غالباً في النطق؛ يحدد السياق المعنى."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u5-p-weather-s-01",
            "en": "It is going to rain.",
            "ar": "غالباً تُختصر going to إلى gonna في الحديث غير الرسمي، لا في الكتابة الرسمية."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u5-p-weather-i-01",
            "en": "Will it rain tomorrow? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      },
      {
        "id": "le-a2-a2u5-p-thunder",
        "sourceId": "thunder",
        "en": "thunder",
        "ipa": "/ˈθʌndə(r)/",
        "ar": "رعد",
        "contrastPairs": [
          {
            "id": "le-a2-a2u5-p-thunder-c-01",
            "en": "thin / tin",
            "ar": "ميّز /θ/ عن /t/ في بداية الكلمة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u5-p-thunder-s-01",
            "en": "The forecast says it will be sunny.",
            "ar": "اربط says it دون إسقاط ضمير it."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u5-p-thunder-i-01",
            "en": "It may be windy this afternoon. ↘",
            "ar": "هبوط النبرة عند إكمال التوقع."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u5-l1-weather-spelling",
        "sourceId": "weather-spelling",
        "incorrect": "The whether is cold today.",
        "corrected": "The weather is cold today.",
        "pattern": "الخلط بين weather وwhether",
        "explanationAr": "weather تعني الطقس، أما whether فتُستخدم غالباً بمعنى ما إذا؛ وهما متطابقتان في النطق.",
        "practice": []
      },
      {
        "id": "le-a2-a2u5-l1-will-plan",
        "sourceId": "will-plan",
        "incorrect": "I will visit my friend yesterday.",
        "corrected": "I visited my friend yesterday.",
        "pattern": "عدم اتساق الزمن مع ظرفه",
        "explanationAr": "استخدم الماضي مع yesterday، ولا تجمعه مع will الدال على المستقبل.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u5-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u5-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-a2-a2u6",
    "sourceId": "a2u6",
    "sourceLevel": "a2",
    "stage": "A2",
    "foundation": false,
    "deferred": false,
    "titleAr": "التكنولوجيا والهاتف والإنترنت",
    "titleEn": "Technology, Phones and the Internet",
    "icon": "📱",
    "goalAr": "أن يستخدم المتعلم الهاتف والإنترنت ويتحدث عن تجاربه التقنية ويشرح الأسباب.",
    "grammar": [
      {
        "id": "le-a2-a2u6-g01",
        "titleAr": "المضارع التام للتجارب",
        "explainHtml": "<p>نستخدم <b>المضارع التام</b> للحديث عن تجارب حدثت في الماضي دون تحديد وقتها.</p><ul><li>يتكوّن من فعل المساعدة مع التصريف الثالث للفعل.</li><li>نستخدم أداتي السؤال والنفي للحديث عن التجارب.</li><li>لا نذكر وقتًا ماضيًا محددًا مع هذه الصيغة.</li><li>يمكن استخدامها مع كلمة منذ للدلالة على مدة مستمرة.</li></ul>",
        "explainText": "نستخدم المضارع التام للحديث عن تجارب حدثت في الماضي دون تحديد وقتها.\n• يتكوّن من فعل المساعدة مع التصريف الثالث للفعل.\n• نستخدم أداتي السؤال والنفي للحديث عن التجارب.\n• لا نذكر وقتًا ماضيًا محددًا مع هذه الصيغة.\n• يمكن استخدامها مع كلمة منذ للدلالة على مدة مستمرة.",
        "table": {
          "headers": [
            "الاستخدام",
            "المثال"
          ],
          "rows": [
            [
              "تجربة في السؤال",
              "Have you ever used this application?"
            ],
            [
              "تجربة منفية",
              "I have never shared my password."
            ],
            [
              "خبرة مكتسبة",
              "She has created three websites."
            ],
            [
              "مع كلمة منذ",
              "We have used this device since March."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u6-g01-e01",
            "en": "Have you ever downloaded a film online?",
            "ar": "هل حمّلت فيلمًا عبر الإنترنت من قبل؟"
          },
          {
            "id": "le-a2-a2u6-g01-e02",
            "en": "I have never forgotten my password before.",
            "ar": "لم أنسَ كلمة المرور من قبل أبدًا."
          },
          {
            "id": "le-a2-a2u6-g01-e03",
            "en": "She has uploaded all the photos already.",
            "ar": "لقد رفعت كل الصور بالفعل."
          },
          {
            "id": "le-a2-a2u6-g01-e04",
            "en": "We have used this website for two years.",
            "ar": "استخدمنا هذا الموقع لمدة سنتين."
          },
          {
            "id": "le-a2-a2u6-g01-e05",
            "en": "He has never broken his phone screen.",
            "ar": "لم يكسر شاشة هاتفه أبدًا."
          }
        ],
        "tips": [
          "استخدم التصريف الثالث للفعل بعد فعل المساعدة.",
          "لا تذكر زمنًا ماضيًا محددًا مع هذه الصيغة.",
          "أداتا السؤال والنفي مناسبتان للحديث عن التجارب."
        ]
      },
      {
        "id": "le-a2-a2u6-g02",
        "titleAr": "أدوات الربط: السبب والنتيجة والتناقض",
        "explainHtml": "<p>أدوات الربط توضح العلاقة بين <b>السبب</b> و<b>النتيجة</b> و<b>التناقض</b>.</p><ul><li>أداة السبب تشرح لماذا حدث الشيء.</li><li>أداة النتيجة تقدّم النتيجة المترتبة على السبب.</li><li>أداة التناقض تقارن بين فكرتين متعارضتين.</li></ul>",
        "explainText": "أدوات الربط توضح العلاقة بين السبب والنتيجة والتناقض.\n• أداة السبب تشرح لماذا حدث الشيء.\n• أداة النتيجة تقدّم النتيجة المترتبة على السبب.\n• أداة التناقض تقارن بين فكرتين متعارضتين.",
        "table": {
          "headers": [
            "الأداة",
            "الوظيفة",
            "المثال"
          ],
          "rows": [
            [
              "because",
              "السبب",
              "I updated the application because it was slow."
            ],
            [
              "so",
              "النتيجة",
              "The battery was empty, so I charged it."
            ],
            [
              "although",
              "التناقض",
              "Although the phone is old, it works well."
            ]
          ]
        },
        "examples": [
          {
            "id": "le-a2-a2u6-g02-e01",
            "en": "I turned off notifications because I needed to study.",
            "ar": "أوقفت الإشعارات لأنني كنت بحاجة إلى الدراسة."
          },
          {
            "id": "le-a2-a2u6-g02-e02",
            "en": "The wifi was weak, so we moved to another room.",
            "ar": "كانت الشبكة ضعيفة، لذلك انتقلنا إلى غرفة أخرى."
          },
          {
            "id": "le-a2-a2u6-g02-e03",
            "en": "Although she has a new laptop, she uses the old one.",
            "ar": "رغم أن لديها حاسوبًا محمولًا جديدًا، فإنها تستخدم القديم."
          },
          {
            "id": "le-a2-a2u6-g02-e04",
            "en": "He bought a new charger because his old one broke.",
            "ar": "اشترى شاحنًا جديدًا لأن شاحنه القديم تعطّل."
          },
          {
            "id": "le-a2-a2u6-g02-e05",
            "en": "The application is free, so everyone can download it.",
            "ar": "التطبيق مجاني، لذلك يمكن للجميع تنزيله."
          }
        ],
        "tips": [
          "أداة السبب تأتي قبل السبب، وأداة النتيجة تأتي قبل النتيجة.",
          "يمكن أن تأتي أداة التناقض في بداية الجملة أو في وسطها.",
          "ضع فاصلة قبل أداة النتيجة عندما تربط بين جملتين."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-a2-a2u6-v01",
        "en": "device",
        "ar": "جهاز",
        "pos": "noun",
        "emoji": "📲",
        "example": {
          "en": "This device charges in about one hour.",
          "ar": "يُشحن هذا الجهاز في نحو ساعة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v02",
        "en": "screen",
        "ar": "شاشة",
        "pos": "noun",
        "emoji": "🖥️",
        "example": {
          "en": "The screen of my phone is broken.",
          "ar": "شاشة هاتفي مكسورة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v03",
        "en": "charger",
        "ar": "شاحن",
        "pos": "noun",
        "emoji": "🔌",
        "example": {
          "en": "I forgot my charger at the office.",
          "ar": "نسيت شاحني في المكتب."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v04",
        "en": "battery",
        "ar": "بطارية",
        "pos": "noun",
        "emoji": "🔋",
        "example": {
          "en": "My battery dies very quickly.",
          "ar": "تنفد بطاريتي بسرعة كبيرة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v05",
        "en": "download",
        "ar": "ينزّل من الإنترنت",
        "pos": "verb",
        "emoji": "⬇️",
        "example": {
          "en": "I download podcasts before long trips.",
          "ar": "أنزّل ملفات صوتية قبل الرحلات الطويلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v06",
        "en": "upload",
        "ar": "يرفع إلى الإنترنت",
        "pos": "verb",
        "emoji": "⬆️",
        "example": {
          "en": "She will upload the photos tonight.",
          "ar": "سترفع الصور الليلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v07",
        "en": "password",
        "ar": "كلمة المرور",
        "pos": "noun",
        "emoji": "🔑",
        "example": {
          "en": "Never share your password with anyone.",
          "ar": "لا تشارك كلمة مرورك مع أي شخص."
        },
        "collocations": [
          {
            "id": "le-a2-a2u6-v07-c01",
            "en": "strong password",
            "ar": "كلمة مرور قوية"
          }
        ]
      },
      {
        "id": "le-a2-a2u6-v08",
        "en": "account",
        "ar": "حساب إلكتروني",
        "pos": "noun",
        "emoji": "👤",
        "example": {
          "en": "I created a new account yesterday.",
          "ar": "أنشأت حسابًا جديدًا أمس."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v09",
        "en": "message",
        "ar": "رسالة",
        "pos": "noun",
        "emoji": "✉️",
        "example": {
          "en": "He sent me a short message.",
          "ar": "أرسل لي رسالة قصيرة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v10",
        "en": "browse",
        "ar": "يتصفح",
        "pos": "verb",
        "emoji": "🔍",
        "example": {
          "en": "I browse the internet for new recipes.",
          "ar": "أتصفح الإنترنت بحثًا عن وصفات جديدة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v11",
        "en": "website",
        "ar": "موقع إلكتروني",
        "pos": "noun",
        "emoji": "🌐",
        "example": {
          "en": "This website has useful exercises.",
          "ar": "هذا الموقع فيه تمارين مفيدة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v12",
        "en": "keyboard",
        "ar": "لوحة مفاتيح",
        "pos": "noun",
        "emoji": "⌨️",
        "example": {
          "en": "My keyboard has a broken key.",
          "ar": "في لوحة مفاتيحي زر مكسور."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v13",
        "en": "headphones",
        "ar": "سماعات رأس",
        "pos": "noun",
        "emoji": "🎧",
        "example": {
          "en": "I listen to music with my headphones.",
          "ar": "أستمع إلى الموسيقى بسماعات رأسي."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v14",
        "en": "update",
        "ar": "يحدّث",
        "pos": "verb",
        "emoji": "🔄",
        "example": {
          "en": "Please update the application tonight.",
          "ar": "من فضلك حدّث التطبيق الليلة."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v15",
        "en": "connect",
        "ar": "يتصل بالشبكة",
        "pos": "verb",
        "emoji": "📶",
        "example": {
          "en": "I cannot connect to the internet here.",
          "ar": "لا أستطيع الاتصال بالإنترنت هنا."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v16",
        "en": "privacy",
        "ar": "الخصوصية",
        "pos": "noun",
        "emoji": "🔒",
        "example": {
          "en": "Privacy is important on social media.",
          "ar": "الخصوصية مهمة في وسائل التواصل."
        },
        "collocations": []
      },
      {
        "id": "le-a2-a2u6-v17",
        "en": "notification",
        "ar": "إشعار",
        "pos": "noun",
        "emoji": "🔔",
        "example": {
          "en": "I turned off every notification on my phone.",
          "ar": "أوقفت كل إشعار على هاتفي."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-a2-a2u6-s01",
        "en": "My phone battery dies very quickly these days.",
        "ar": "تنفد بطارية هاتفي بسرعة كبيرة هذه الأيام."
      },
      {
        "id": "le-a2-a2u6-s02",
        "en": "Have you ever changed your email password?",
        "ar": "هل غيّرت كلمة مرور بريدك من قبل؟"
      },
      {
        "id": "le-a2-a2u6-s03",
        "en": "She uploads her photos to a private website.",
        "ar": "ترفع صورها إلى موقع خاص."
      },
      {
        "id": "le-a2-a2u6-s04",
        "en": "I cannot connect to the internet in this room.",
        "ar": "لا أستطيع الاتصال بالإنترنت في هذه الغرفة."
      },
      {
        "id": "le-a2-a2u6-s05",
        "en": "He bought new headphones with a long cable.",
        "ar": "اشترى سماعات جديدة بسلك طويل."
      },
      {
        "id": "le-a2-a2u6-s06",
        "en": "We have used this device for three years.",
        "ar": "استخدمنا هذا الجهاز ثلاث سنوات."
      },
      {
        "id": "le-a2-a2u6-s07",
        "en": "The screen broke because the phone fell down.",
        "ar": "انكسرت الشاشة لأن الهاتف سقط."
      },
      {
        "id": "le-a2-a2u6-s08",
        "en": "Although the update was slow, it worked well.",
        "ar": "رغم أن التحديث كان بطيئًا، فقد عمل جيدًا."
      },
      {
        "id": "le-a2-a2u6-s09",
        "en": "I will download the application tomorrow morning.",
        "ar": "سأنزّل التطبيق صباح الغد."
      },
      {
        "id": "le-a2-a2u6-s10",
        "en": "They are going to create a new account today.",
        "ar": "سينشئون حسابًا جديدًا اليوم."
      },
      {
        "id": "le-a2-a2u6-s11",
        "en": "She never shares her private messages online.",
        "ar": "لا تشارك رسائلها الخاصة عبر الإنترنت أبدًا."
      },
      {
        "id": "le-a2-a2u6-s12",
        "en": "You should protect your privacy on social media.",
        "ar": "ينبغي أن تحمي خصوصيتك في وسائل التواصل."
      }
    ],
    "dialogue": [
      {
        "id": "le-a2-a2u6-d01",
        "who": "A",
        "en": "My phone is very slow today.",
        "ar": "هاتفي بطيء جدًا اليوم."
      },
      {
        "id": "le-a2-a2u6-d02",
        "who": "B",
        "en": "You should update the system, it helps a lot.",
        "ar": "ينبغي أن تحدّث النظام، فهو يساعد كثيرًا."
      },
      {
        "id": "le-a2-a2u6-d03",
        "who": "A",
        "en": "I have already downloaded the update.",
        "ar": "لقد نزّلت التحديث بالفعل."
      },
      {
        "id": "le-a2-a2u6-d04",
        "who": "B",
        "en": "Then restart the device and check the battery.",
        "ar": "إذن أعد تشغيل الجهاز وافحص البطارية."
      },
      {
        "id": "le-a2-a2u6-d05",
        "who": "A",
        "en": "Good idea, where can I find my password?",
        "ar": "فكرة جيدة، أين أجد كلمة المرور؟"
      },
      {
        "id": "le-a2-a2u6-d06",
        "who": "B",
        "en": "It is saved in your account settings.",
        "ar": "إنها محفوظة في إعدادات حسابك."
      }
    ],
    "phonetics": [
      {
        "id": "le-a2-a2u6-p-device",
        "sourceId": "device",
        "en": "device",
        "ipa": "/dɪˈvaɪs/",
        "ar": "جهاز",
        "contrastPairs": [
          {
            "id": "le-a2-a2u6-p-device-c-01",
            "en": "save / safe",
            "ar": "ميّز /v/ المجهورة في save عن /f/ المهموسة في safe."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u6-p-device-s-01",
            "en": "Have you updated the app?",
            "ar": "قد يختزل have في الكلام، مع إبقاء بنية المضارع التام."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u6-p-device-i-01",
            "en": "Have you ever used this app? ↗",
            "ar": "تنغيم صاعد في سؤال نعم/لا."
          }
        ]
      },
      {
        "id": "le-a2-a2u6-p-privacy",
        "sourceId": "privacy",
        "en": "privacy",
        "ipa": "/ˈprɪvəsi/",
        "ar": "خصوصية",
        "contrastPairs": [
          {
            "id": "le-a2-a2u6-p-privacy-c-01",
            "en": "fan / van",
            "ar": "ميّز /f/ المهموسة عن /v/ المجهورة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-a2-a2u6-p-privacy-s-01",
            "en": "I have already changed my password.",
            "ar": "اربط have already مع المحافظة على النبر في already."
          }
        ],
        "intonation": [
          {
            "id": "le-a2-a2u6-p-privacy-i-01",
            "en": "You should protect your account. ↘",
            "ar": "هبوط النبرة في النصيحة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-a2-a2u6-l1-present-perfect-time",
        "sourceId": "present-perfect-time",
        "incorrect": "I have downloaded it yesterday.",
        "corrected": "I downloaded it yesterday.",
        "pattern": "الجمع بين المضارع التام ووقت ماضٍ محدد",
        "explanationAr": "استخدم الماضي البسيط مع yesterday؛ المضارع التام لا يحدد وقتاً ماضياً منتهياً.",
        "practice": []
      },
      {
        "id": "le-a2-a2u6-l1-privacy-preposition",
        "sourceId": "privacy-preposition",
        "incorrect": "I depend in this app.",
        "corrected": "I depend on this app.",
        "pattern": "ترجمة حرف الجر حرفياً",
        "explanationAr": "الفعل depend يتطلب حرف الجر on في هذا المعنى.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-a2-a2u6-a01",
        "term": "question",
        "meaningAr": "سؤال",
        "example": {
          "en": "Write one question about the lesson.",
          "ar": "اكتب سؤالاً عن الدرس."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      },
      {
        "id": "le-a2-a2u6-a02",
        "term": "answer",
        "meaningAr": "إجابة",
        "example": {
          "en": "Give a short answer.",
          "ar": "أعطِ إجابة قصيرة."
        },
        "paraphrasing": [],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u1",
    "sourceId": "b1u1",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "العمل والمقابلات والاجتماعات",
    "titleEn": "Work, Interviews and Meetings",
    "icon": "💼",
    "goalAr": "أن تتحدث عن خبرتك العملية وتجيب بثقة في مقابلات العمل وتشارك بفاعلية في اجتماعات الفريق.",
    "grammar": [
      {
        "id": "le-b1-b1u1-g01",
        "titleAr": "المضارع التام مقابل الماضي البسيط",
        "explainHtml": "نستخدم المضارع التام عندما نتحدث عن حدث وقع في الماضي وما زال له أثر أو نتيجة في الوقت الحاضر، أو عندما لا نحدد وقت وقوعه. أما الماضي البسيط فنستخدمه عندما نذكر وقتاً محدداً انتهى في الماضي. القاعدة العملية بسيطة: إذا ذكرت الوقت المحدد فاستخدم الماضي البسيط، وإذا كانت النتيجة هي الأهم فاستخدم المضارع التام.",
        "explainText": "نستخدم المضارع التام عندما نتحدث عن حدث وقع في الماضي وما زال له أثر أو نتيجة في الوقت الحاضر، أو عندما لا نحدد وقت وقوعه. أما الماضي البسيط فنستخدمه عندما نذكر وقتاً محدداً انتهى في الماضي. القاعدة العملية بسيطة: إذا ذكرت الوقت المحدد فاستخدم الماضي البسيط، وإذا كانت النتيجة هي الأهم فاستخدم المضارع التام.",
        "table": {
          "headers": [
            "الزمن",
            "متى نستخدمه"
          ],
          "rows": [
            [
              "المضارع التام",
              "حدث في الماضي ونتيجته أو أثره ما زال ظاهراً الآن"
            ],
            [
              "المضارع التام",
              "حدث وقع في وقت غير محدد ولا يهمنا تحديده"
            ],
            [
              "الماضي البسيط",
              "حدث انتهى في الماضي مع ذكر وقت محدد"
            ],
            [
              "الماضي البسيط",
              "سؤال عن حدث وقع في وقت معروف ومنته"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u1-g01-e01",
            "en": "I have worked in this company for five years.",
            "ar": "أعمل في هذه الشركة منذ خمس سنوات."
          },
          {
            "id": "le-b1-b1u1-g01-e02",
            "en": "She has just finished the interview.",
            "ar": "لقد أنهت المقابلة للتو."
          },
          {
            "id": "le-b1-b1u1-g01-e03",
            "en": "We discussed the budget yesterday.",
            "ar": "ناقشنا الميزانية أمس."
          },
          {
            "id": "le-b1-b1u1-g01-e04",
            "en": "He has never attended a meeting like this one.",
            "ar": "لم يحضر اجتماعاً كهذا قط."
          },
          {
            "id": "le-b1-b1u1-g01-e05",
            "en": "Did you apply for that job last week?",
            "ar": "هل تقدمت بطلب لتلك الوظيفة الأسبوع الماضي؟"
          }
        ],
        "tips": [
          "لا تذكر وقتاً محدداً مع المضارع التام، فلا نستخدم معه أمس أو في العام الماضي.",
          "استخدم كلمة منذ مع المضارع التام للحديث عن مدة بدأت في الماضي وما زالت مستمرة.",
          "في المقابلات استخدم المضارع التام لوصف خبرتك المتراكمة حتى اليوم."
        ]
      },
      {
        "id": "le-b1-b1u1-g02",
        "titleAr": "الأسئلة الذيلية لتأكيد الكلام",
        "explainHtml": "السؤال الذي نضيفه في نهاية الجملة نسميه السؤال الذيلي، ونستخدمه لتأكيد الكلام أو لطلب موافقة المستمع. إذا كانت الجملة مثبتة جعلنا نهايتها منفية، وإذا كانت الجملة منفية جعلنا نهايتها مثبتة. نكرر الفعل المساعد نفسه الذي في الجملة، ونستخدم ضمير الفاعل المناسب.",
        "explainText": "السؤال الذي نضيفه في نهاية الجملة نسميه السؤال الذيلي، ونستخدمه لتأكيد الكلام أو لطلب موافقة المستمع. إذا كانت الجملة مثبتة جعلنا نهايتها منفية، وإذا كانت الجملة منفية جعلنا نهايتها مثبتة. نكرر الفعل المساعد نفسه الذي في الجملة، ونستخدم ضمير الفاعل المناسب.",
        "table": {
          "headers": [
            "نوع الجملة",
            "صيغة النهاية"
          ],
          "rows": [
            [
              "جملة مثبتة",
              "نهاية منفية"
            ],
            [
              "جملة منفية",
              "نهاية مثبتة"
            ],
            [
              "جملة فيها فعل مساعد",
              "نكرر الفعل المساعد نفسه"
            ],
            [
              "جملة بلا فعل مساعد",
              "نستخدم الفعل المساعد المناسب للزمن"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u1-g02-e01",
            "en": "You have sent the report, haven't you?",
            "ar": "لقد أرسلت التقرير، أليس كذلك؟"
          },
          {
            "id": "le-b1-b1u1-g02-e02",
            "en": "She isn't coming to the meeting, is she?",
            "ar": "إنها لن تحضر الاجتماع، أليس كذلك؟"
          },
          {
            "id": "le-b1-b1u1-g02-e03",
            "en": "They worked hard on the project, didn't they?",
            "ar": "لقد عملوا بجد في المشروع، أليس كذلك؟"
          },
          {
            "id": "le-b1-b1u1-g02-e04",
            "en": "We can start now, can't we?",
            "ar": "يمكننا أن نبدأ الآن، أليس كذلك؟"
          },
          {
            "id": "le-b1-b1u1-g02-e05",
            "en": "He doesn't know the client, does he?",
            "ar": "إنه لا يعرف العميل، أليس كذلك؟"
          }
        ],
        "tips": [
          "استخدم نبرة هابطة في نهاية السؤال الذيلي عندما تكون متأكداً وتنتظر موافقة المستمع.",
          "بعد جملة الأمر نستخدم صيغة مؤدبة في النهاية للطلب أو الدعوة.",
          "تأكد من أن الضمير في النهاية يعود على فاعل الجملة نفسها."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u1-v01",
        "en": "opportunity",
        "ar": "فرصة",
        "pos": "noun",
        "emoji": "🚪",
        "example": {
          "en": "This job is a great opportunity for me.",
          "ar": "هذه الوظيفة فرصة رائعة لي."
        },
        "collocations": [
          {
            "id": "le-b1-b1u1-v01-c01",
            "en": "a valuable opportunity",
            "ar": "فرصة قيّمة"
          }
        ]
      },
      {
        "id": "le-b1-b1u1-v02",
        "en": "interview",
        "ar": "مقابلة عمل",
        "pos": "noun",
        "emoji": "🎤",
        "example": {
          "en": "I have a job interview on Monday morning.",
          "ar": "لدي مقابلة عمل صباح يوم الاثنين."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v03",
        "en": "experience",
        "ar": "خبرة",
        "pos": "noun",
        "emoji": "📋",
        "example": {
          "en": "She has five years of experience in marketing.",
          "ar": "لديها خمس سنوات من الخبرة في التسويق."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v04",
        "en": "colleague",
        "ar": "زميل في العمل",
        "pos": "noun",
        "emoji": "👥",
        "example": {
          "en": "My colleague helped me finish the report.",
          "ar": "ساعدني زميلي في إنهاء التقرير."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v05",
        "en": "deadline",
        "ar": "موعد نهائي",
        "pos": "noun",
        "emoji": "⏰",
        "example": {
          "en": "We must meet the deadline for this project.",
          "ar": "علينا الالتزام بالموعد النهائي لهذا المشروع."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v06",
        "en": "responsibility",
        "ar": "مسؤولية",
        "pos": "noun",
        "emoji": "🧭",
        "example": {
          "en": "Looking after clients is my main responsibility.",
          "ar": "رعاية العملاء هي مسؤوليتي الأساسية."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v07",
        "en": "achieve",
        "ar": "يحقق",
        "pos": "verb",
        "emoji": "🎯",
        "example": {
          "en": "You can achieve your goals with hard work.",
          "ar": "يمكنك أن تحقق أهدافك بالعمل الجاد."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v08",
        "en": "apply",
        "ar": "يتقدم بطلب",
        "pos": "verb",
        "emoji": "📝",
        "example": {
          "en": "I decided to apply for a new position.",
          "ar": "قررت أن أتقدم بطلب لوظيفة جديدة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v09",
        "en": "skill",
        "ar": "مهارة",
        "pos": "noun",
        "emoji": "🛠️",
        "example": {
          "en": "Communication is an important skill at work.",
          "ar": "التواصل مهارة مهمة في العمل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v10",
        "en": "salary",
        "ar": "راتب",
        "pos": "noun",
        "emoji": "💰",
        "example": {
          "en": "The salary in this company is quite good.",
          "ar": "الراتب في هذه الشركة جيد جداً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v11",
        "en": "schedule",
        "ar": "جدول مواعيد",
        "pos": "noun",
        "emoji": "🗓️",
        "example": {
          "en": "My schedule is full of meetings today.",
          "ar": "جدول مواعيدي مليء بالاجتماعات اليوم."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v12",
        "en": "attend",
        "ar": "يحضر",
        "pos": "verb",
        "emoji": "🙋",
        "example": {
          "en": "All managers must attend the meeting on Friday.",
          "ar": "على جميع المديرين حضور اجتماع يوم الجمعة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v13",
        "en": "promote",
        "ar": "يرقي إلى منصب أعلى",
        "pos": "verb",
        "emoji": "📈",
        "example": {
          "en": "They decided to promote her to team leader.",
          "ar": "قرروا ترقيتها إلى قائدة فريق."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v14",
        "en": "confident",
        "ar": "واثق",
        "pos": "adjective",
        "emoji": "💪",
        "example": {
          "en": "She felt confident during the interview.",
          "ar": "شعرت بالثقة أثناء المقابلة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u1-v15",
        "en": "take on",
        "ar": "يتولى أو يتحمل",
        "pos": "phrase",
        "emoji": "🧱",
        "example": {
          "en": "He decided to take on more tasks this year.",
          "ar": "قرر أن يتولى مهام أكثر هذا العام."
        },
        "collocations": [
          {
            "id": "le-b1-b1u1-v15-c01",
            "en": "take on responsibility",
            "ar": "يتحمّل مسؤولية"
          }
        ]
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u1-s01",
        "en": "I have already sent my application to three companies.",
        "ar": "لقد أرسلت طلبي إلى ثلاث شركات بالفعل."
      },
      {
        "id": "le-b1-b1u1-s02",
        "en": "She has worked as a project manager since 2019.",
        "ar": "تعمل مديرة مشاريع منذ عام ألفين وتسعة عشر."
      },
      {
        "id": "le-b1-b1u1-s03",
        "en": "Did you attend the meeting about the new budget yesterday?",
        "ar": "هل حضرت اجتماع الميزانية الجديدة أمس؟"
      },
      {
        "id": "le-b1-b1u1-s04",
        "en": "My colleague and I prepared the report before the deadline.",
        "ar": "أعددت التقرير مع زميلي قبل الموعد النهائي."
      },
      {
        "id": "le-b1-b1u1-s05",
        "en": "He has never been late for an important interview.",
        "ar": "لم يتأخر قط عن مقابلة عمل مهمة."
      },
      {
        "id": "le-b1-b1u1-s06",
        "en": "We discussed the schedule and agreed on a new plan.",
        "ar": "ناقشنا الجدول واتفقنا على خطة جديدة."
      },
      {
        "id": "le-b1-b1u1-s07",
        "en": "If you want to achieve your goals, you must work hard.",
        "ar": "إذا أردت تحقيق أهدافك فعليك أن تعمل بجد."
      },
      {
        "id": "le-b1-b1u1-s08",
        "en": "The company offered him a better salary last month.",
        "ar": "عرضت عليه الشركة راتباً أفضل الشهر الماضي."
      },
      {
        "id": "le-b1-b1u1-s09",
        "en": "I am confident that we can finish this project on time.",
        "ar": "أنا واثق من أننا نستطيع إنهاء هذا المشروع في الوقت المحدد."
      },
      {
        "id": "le-b1-b1u1-s10",
        "en": "She applied for the job and got an interview immediately.",
        "ar": "تقدمت بطلب للوظيفة وحصلت على مقابلة فوراً."
      },
      {
        "id": "le-b1-b1u1-s11",
        "en": "Our team has completed every task on the list this week.",
        "ar": "أنجز فريقنا كل مهمة في القائمة هذا الأسبوع."
      },
      {
        "id": "le-b1-b1u1-s12",
        "en": "They promoted him because he took on extra responsibility.",
        "ar": "رقّوه لأنه تولى مسؤولية إضافية."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u1-d01",
        "who": "A",
        "en": "Good morning, please tell me about your experience.",
        "ar": "صباح الخير، حدثني عن خبرتك من فضلك."
      },
      {
        "id": "le-b1-b1u1-d02",
        "who": "B",
        "en": "I have worked in sales for six years.",
        "ar": "عملت في مجال المبيعات ست سنوات."
      },
      {
        "id": "le-b1-b1u1-d03",
        "who": "A",
        "en": "Why do you want to leave your current job?",
        "ar": "لماذا تريد ترك وظيفتك الحالية؟"
      },
      {
        "id": "le-b1-b1u1-d04",
        "who": "B",
        "en": "I am looking for a new challenge and a better salary.",
        "ar": "أبحث عن تحد جديد وراتب أفضل."
      },
      {
        "id": "le-b1-b1u1-d05",
        "who": "A",
        "en": "When can you start working with us?",
        "ar": "متى يمكنك أن تبدأ العمل معنا؟"
      },
      {
        "id": "le-b1-b1u1-d06",
        "who": "B",
        "en": "I can start at the beginning of next month.",
        "ar": "أستطيع أن أبدأ في بداية الشهر القادم."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u1-p-interview",
        "sourceId": "interview",
        "en": "interview",
        "ipa": "/ˈɪntəvjuː/",
        "ar": "مقابلة",
        "contrastPairs": [
          {
            "id": "le-b1-b1u1-p-interview-c-01",
            "en": "work / walk",
            "ar": "ميّز الحركة /ɜː/ في work عن /ɔː/ في walk."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u1-p-interview-s-01",
            "en": "I've worked here for five years.",
            "ar": "تُختزل I've إلى /aɪv/ مع بقاء have مساعدةً للمضارع التام."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u1-p-interview-i-01",
            "en": "I led a team of six. ↘ | Six? ↗",
            "ar": "هبوط في تقرير الخبرة، وصعود قصير لإظهار الاستيضاح أو طلب التأكيد."
          }
        ]
      },
      {
        "id": "le-b1-b1u1-p-responsibility",
        "sourceId": "responsibility",
        "en": "responsibility",
        "ipa": "/rɪˌspɒnsəˈbɪləti/",
        "ar": "مسؤولية",
        "contrastPairs": [
          {
            "id": "le-b1-b1u1-p-responsibility-c-01",
            "en": "ship / sheep",
            "ar": "ميّز /ɪ/ القصيرة عن /iː/ الطويلة في مقاطع الكلمة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u1-p-responsibility-s-01",
            "en": "take on responsibility",
            "ar": "يرتبط حرف الجر on بالفعل take مع إبقاء النبر على take وsponsibility."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u1-p-responsibility-i-01",
            "en": "Although the deadline was tight, we finished on time. ↗ ... ↘",
            "ar": "ارتفاع محدود في الجزء التمهيدي غير المكتمل، ثم هبوط عند النتيجة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u1-l1-experience-count",
        "sourceId": "experience-count",
        "incorrect": "I have many experiences in sales.",
        "corrected": "I have a lot of experience in sales.",
        "pattern": "جمع experience عند قصد الخبرة العامة",
        "explanationAr": "تُستعمل experience غالباً اسماً غير معدود للخبرة العامة؛ أما experiences فتشير إلى تجارب منفصلة.",
        "practice": []
      },
      {
        "id": "le-b1-b1u1-l1-apply-preposition",
        "sourceId": "apply-preposition",
        "incorrect": "I applied the job.",
        "corrected": "I applied for the job.",
        "pattern": "حذف حرف الجر بعد apply",
        "explanationAr": "نستخدم apply for عند التقدم لوظيفة أو فرصة.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u1-a-achieve",
        "sourceId": "achieve",
        "term": "achieve",
        "meaningAr": "يحقق أو ينجز",
        "example": {
          "en": "The team achieved its quarterly target.",
          "ar": "حقق الفريق هدفه الفصلي."
        },
        "paraphrasing": [
          {
            "original": "We reached our target.",
            "paraphrase": "We achieved our objective."
          }
        ],
        "idioms": [
          {
            "phrase": "go the extra mile",
            "meaningAr": "يبذل جهداً إضافياً"
          }
        ],
        "readingAnalysis": [
          {
            "term": "objective",
            "meaningAr": "هدف محدد تسعى جهة إلى تحقيقه"
          }
        ]
      },
      {
        "id": "le-b1-b1u1-a-evaluate",
        "sourceId": "evaluate",
        "term": "evaluate",
        "meaningAr": "يقيّم",
        "example": {
          "en": "The manager evaluated the proposal using clear criteria.",
          "ar": "قيّم المدير المقترح وفق معايير واضحة."
        },
        "paraphrasing": [
          {
            "original": "The manager looked carefully at the plan.",
            "paraphrase": "The manager evaluated the plan."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u2",
    "sourceId": "b1u2",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "الصحة النفسية والعادات اليومية",
    "titleEn": "Mental Health and Daily Habits",
    "icon": "🌿",
    "goalAr": "أن تصف عاداتك اليومية ومشاعرك وتتحدث عن خططك لتحسين صحتك النفسية وتوازنك في الحياة.",
    "grammar": [
      {
        "id": "le-b1-b1u2-g01",
        "titleAr": "المضارع التام المستمر",
        "explainHtml": "نستخدم المضارع التام المستمر للحديث عن فعل بدأ في الماضي وما زال مستمراً حتى اللحظة، ونركز فيه على المدة والاستمرارية أكثر من النتيجة. يتكون هذا الزمن من الفعل المساعد المناسب للفاعل، ثم كلمة الاستمرار التي تعني كان، ثم الفعل الأساسي مضافاً إليه النهاية المناسبة. نستخدم معه غالباً تعبيرات المدة مثل: لمدة ساعتين، ومنذ الصباح.",
        "explainText": "نستخدم المضارع التام المستمر للحديث عن فعل بدأ في الماضي وما زال مستمراً حتى اللحظة، ونركز فيه على المدة والاستمرارية أكثر من النتيجة. يتكون هذا الزمن من الفعل المساعد المناسب للفاعل، ثم كلمة الاستمرار التي تعني كان، ثم الفعل الأساسي مضافاً إليه النهاية المناسبة. نستخدم معه غالباً تعبيرات المدة مثل: لمدة ساعتين، ومنذ الصباح.",
        "table": {
          "headers": [
            "التركيب",
            "الاستخدام"
          ],
          "rows": [
            [
              "الفعل المساعد ثم كلمة الاستمرار ثم الفعل مع النهاية",
              "فعل بدأ في الماضي وما زال مستمراً"
            ],
            [
              "منذ ثم نقطة زمنية",
              "تحديد بداية الفعل المستمر"
            ],
            [
              "لمدة ثم مدة زمنية",
              "تحديد طول الفعل المستمر"
            ],
            [
              "السؤال بأداة الاستفهام ثم الفعل المساعد",
              "السؤال عن مدة استمرار الفعل"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u2-g01-e01",
            "en": "I have been reading about mental health all week.",
            "ar": "أقرأ عن الصحة النفسية طوال هذا الأسبوع."
          },
          {
            "id": "le-b1-b1u2-g01-e02",
            "en": "She has been working here since January.",
            "ar": "تعمل هنا منذ شهر يناير."
          },
          {
            "id": "le-b1-b1u2-g01-e03",
            "en": "They have been waiting for the doctor for an hour.",
            "ar": "ينتظرون الطبيب منذ ساعة."
          },
          {
            "id": "le-b1-b1u2-g01-e04",
            "en": "How long have you been learning English?",
            "ar": "منذ متى تتعلم الإنجليزية؟"
          },
          {
            "id": "le-b1-b1u2-g01-e05",
            "en": "He has not been sleeping well recently.",
            "ar": "لم يكن ينام جيداً في الآونة الأخيرة."
          }
        ],
        "tips": [
          "استخدم هذا الزمن عندما يكون استمرار الفعل هو المهم، لا نتيجته النهائية.",
          "لا تستخدمه مع الأفعال التي لا تدل على حركة أو استمرار، مثل أفعال المشاعر والمعرفة.",
          "لاحظ الفرق: المضارع التام يسأل عن النتيجة، والمضارع التام المستمر يسأل عن المدة."
        ]
      },
      {
        "id": "le-b1-b1u2-g02",
        "titleAr": "التعبير عن العادات القديمة والاعتياد الحالي",
        "explainHtml": "نستخدم صيغة الاعتياد في الماضي للحديث عن عادة أو حالة كانت موجودة في السابق ولم تعد الآن. أما عبارة الاعتياد في الحاضر فتتكون من الفعل يكون ثم كلمة معتاد ثم حرف الجر المناسب، ومعناها أن الأمر أصبح مألوفاً لك. الفرق مهم: الأولى تتحدث عن الماضي فقط، والثانية تصف حالة مستمرة في الحاضر.",
        "explainText": "نستخدم صيغة الاعتياد في الماضي للحديث عن عادة أو حالة كانت موجودة في السابق ولم تعد الآن. أما عبارة الاعتياد في الحاضر فتتكون من الفعل يكون ثم كلمة معتاد ثم حرف الجر المناسب، ومعناها أن الأمر أصبح مألوفاً لك. الفرق مهم: الأولى تتحدث عن الماضي فقط، والثانية تصف حالة مستمرة في الحاضر.",
        "table": {
          "headers": [
            "العبارة",
            "المعنى"
          ],
          "rows": [
            [
              "الاعتياد في الماضي",
              "عادة أو حالة كانت في السابق ولم تستمر"
            ],
            [
              "الاعتياد في الحاضر",
              "شيء أصبح مألوفاً لك الآن"
            ],
            [
              "نفي الاعتياد في الماضي",
              "أداة النفي ثم كلمة الاعتياد ثم الفعل الأصلي"
            ],
            [
              "بعد الاعتياد في الحاضر",
              "فعل مع النهاية المضافة أو اسم"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u2-g02-e01",
            "en": "I used to drink a lot of coffee, but now I prefer tea.",
            "ar": "كنت أشرب كثيراً من القهوة، لكنني أفضل الشاي الآن."
          },
          {
            "id": "le-b1-b1u2-g02-e02",
            "en": "She did not use to exercise in the morning.",
            "ar": "لم تكن تمارس الرياضة في الصباح."
          },
          {
            "id": "le-b1-b1u2-g02-e03",
            "en": "He is used to working long hours every day.",
            "ar": "لقد اعتاد العمل ساعات طويلة كل يوم."
          },
          {
            "id": "le-b1-b1u2-g02-e04",
            "en": "They are used to the cold weather in winter.",
            "ar": "لقد اعتادوا الطقس البارد في الشتاء."
          },
          {
            "id": "le-b1-b1u2-g02-e05",
            "en": "Did you use to live near the sea?",
            "ar": "هل كنت تعيش قرب البحر؟"
          }
        ],
        "tips": [
          "صيغة الاعتياد في الماضي تصف عادة متكررة أو حالة قديمة، ولا نستخدمها مع مدة محددة.",
          "بعد كلمة معتاد في الحاضر يأتي الفعل مع النهاية المضافة أو اسم، ولا يأتي الفعل في صيغته الأصلية.",
          "من الأخطاء الشائعة نسيان الفعل يكون مع عبارة الاعتياد في الحاضر."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u2-v01",
        "en": "stress",
        "ar": "ضغط نفسي",
        "pos": "noun",
        "emoji": "😰",
        "example": {
          "en": "Too much stress can affect your sleep.",
          "ar": "الضغط النفسي الشديد قد يؤثر في نومك."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v02",
        "en": "anxiety",
        "ar": "قلق",
        "pos": "noun",
        "emoji": "😟",
        "example": {
          "en": "Anxiety can stop you from sleeping well at night.",
          "ar": "القلق قد يمنعك من النوم جيداً في الليل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v03",
        "en": "habit",
        "ar": "عادة",
        "pos": "noun",
        "emoji": "🔁",
        "example": {
          "en": "Reading before bed is a good habit.",
          "ar": "القراءة قبل النوم عادة جيدة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v04",
        "en": "routine",
        "ar": "روتين يومي",
        "pos": "noun",
        "emoji": "⏳",
        "example": {
          "en": "A regular routine makes my day easier.",
          "ar": "الروتين المنتظم يجعل يومي أسهل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v05",
        "en": "improve",
        "ar": "يحسن",
        "pos": "verb",
        "emoji": "📈",
        "example": {
          "en": "Small habits can improve your mental health.",
          "ar": "العادات الصغيرة قد تحسن صحتك النفسية."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v06",
        "en": "balance",
        "ar": "توازن",
        "pos": "noun",
        "emoji": "⚖️",
        "example": {
          "en": "It is hard to find a balance between work and rest.",
          "ar": "من الصعب إيجاد توازن بين العمل والراحة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v07",
        "en": "motivated",
        "ar": "متحمس",
        "pos": "adjective",
        "emoji": "🔥",
        "example": {
          "en": "I feel motivated when I write a daily plan.",
          "ar": "أشعر بالحماس عندما أكتب خطة يومية."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v08",
        "en": "mood",
        "ar": "مزاج",
        "pos": "noun",
        "emoji": "🙂",
        "example": {
          "en": "Her mood improved after a long walk in the park.",
          "ar": "تحسن مزاجها بعد مشي طويل في الحديقة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v09",
        "en": "overcome",
        "ar": "يتغلب على",
        "pos": "verb",
        "emoji": "🧗",
        "example": {
          "en": "He managed to overcome his fear of speaking in public.",
          "ar": "تمكن من التغلب على خوفه من التحدث أمام الناس."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v10",
        "en": "aware",
        "ar": "مدرك",
        "pos": "adjective",
        "emoji": "👀",
        "example": {
          "en": "I try to be aware of my feelings during busy days.",
          "ar": "أحاول أن أكون مدركاً لمشاعري في الأيام المزدحمة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v11",
        "en": "meditation",
        "ar": "تأمل",
        "pos": "noun",
        "emoji": "🕯️",
        "example": {
          "en": "Meditation helps me calm down after a long day.",
          "ar": "يساعدني التأمل على الهدوء بعد يوم طويل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v12",
        "en": "suffer",
        "ar": "يعاني",
        "pos": "verb",
        "emoji": "😔",
        "example": {
          "en": "Many students suffer from stress before exams.",
          "ar": "يعاني كثير من الطلاب من الضغط النفسي قبل الامتحانات."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v13",
        "en": "reduce",
        "ar": "يقلل",
        "pos": "verb",
        "emoji": "📉",
        "example": {
          "en": "Walking every day can reduce stress and anxiety.",
          "ar": "المشي كل يوم قد يقلل الضغط والقلق."
        },
        "collocations": [
          {
            "id": "le-b1-b1u2-v13-c01",
            "en": "reduce stress",
            "ar": "يخفف التوتر"
          }
        ]
      },
      {
        "id": "le-b1-b1u2-v14",
        "en": "concentrate",
        "ar": "يركز",
        "pos": "verb",
        "emoji": "🎧",
        "example": {
          "en": "It is difficult to concentrate when you are tired.",
          "ar": "من الصعب أن تركز عندما تكون متعباً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u2-v15",
        "en": "give up",
        "ar": "يتخلى عن",
        "pos": "phrase",
        "emoji": "🚫",
        "example": {
          "en": "She decided to give up coffee late at night.",
          "ar": "قررت أن تتخلى عن القهوة في وقت متأخر من الليل."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u2-s01",
        "en": "I have been practicing meditation for twenty minutes every morning.",
        "ar": "أتدرب على التأمل عشرين دقيقة كل صباح."
      },
      {
        "id": "le-b1-b1u2-s02",
        "en": "She has been trying to reduce stress since last month.",
        "ar": "تحاول تقليل الضغط النفسي منذ الشهر الماضي."
      },
      {
        "id": "le-b1-b1u2-s03",
        "en": "He has not been sleeping well because of too much anxiety.",
        "ar": "لم يكن ينام جيداً بسبب كثرة القلق."
      },
      {
        "id": "le-b1-b1u2-s04",
        "en": "I used to eat fast food, but now I cook healthy meals.",
        "ar": "كنت آكل الوجبات السريعة، لكنني الآن أطبخ وجبات صحية."
      },
      {
        "id": "le-b1-b1u2-s05",
        "en": "They are used to waking up early for their new routine.",
        "ar": "لقد اعتادوا الاستيقاظ مبكراً من أجل روتينهم الجديد."
      },
      {
        "id": "le-b1-b1u2-s06",
        "en": "How long have you been working on this project?",
        "ar": "منذ متى تعمل على هذا المشروع؟"
      },
      {
        "id": "le-b1-b1u2-s07",
        "en": "A good habit can improve your mood and your energy.",
        "ar": "العادة الجيدة قد تحسن مزاجك وطاقتك."
      },
      {
        "id": "le-b1-b1u2-s08",
        "en": "We have been talking about mental health for two hours.",
        "ar": "نتحدث عن الصحة النفسية منذ ساعتين."
      },
      {
        "id": "le-b1-b1u2-s09",
        "en": "She did not use to enjoy sports when she was younger.",
        "ar": "لم تكن تحب الرياضة عندما كانت أصغر سناً."
      },
      {
        "id": "le-b1-b1u2-s10",
        "en": "Being aware of your feelings is the first step.",
        "ar": "إدراك مشاعرك هو الخطوة الأولى."
      },
      {
        "id": "le-b1-b1u2-s11",
        "en": "Many people suffer from stress at the end of the year.",
        "ar": "يعاني كثير من الناس من الضغط النفسي في نهاية العام."
      },
      {
        "id": "le-b1-b1u2-s12",
        "en": "He has been learning to concentrate during busy days.",
        "ar": "يتعلم كيف يركز في الأيام المزدحمة."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u2-d01",
        "who": "A",
        "en": "You look tired today. Have you been sleeping well?",
        "ar": "تبدو متعباً اليوم. هل تنام جيداً؟"
      },
      {
        "id": "le-b1-b1u2-d02",
        "who": "B",
        "en": "Not really. I have been working late every night.",
        "ar": "ليس تماماً. كنت أعمل حتى وقت متأخر كل ليلة."
      },
      {
        "id": "le-b1-b1u2-d03",
        "who": "A",
        "en": "You should find a balance between work and rest.",
        "ar": "ينبغي أن تجد توازناً بين العمل والراحة."
      },
      {
        "id": "le-b1-b1u2-d04",
        "who": "B",
        "en": "I know, and I want to improve my daily routine.",
        "ar": "أعرف ذلك، وأريد أن أحسن روتيني اليومي."
      },
      {
        "id": "le-b1-b1u2-d05",
        "who": "A",
        "en": "What about a short walk before bed?",
        "ar": "ما رأيك بنزهة قصيرة قبل النوم؟"
      },
      {
        "id": "le-b1-b1u2-d06",
        "who": "B",
        "en": "That sounds helpful. I will try it tonight.",
        "ar": "تبدو فكرة مفيدة. سأجربها الليلة."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u2-p-anxiety",
        "sourceId": "anxiety",
        "en": "anxiety",
        "ipa": "/æŋˈzaɪəti/",
        "ar": "قلق",
        "contrastPairs": [
          {
            "id": "le-b1-b1u2-p-anxiety-c-01",
            "en": "think / sink",
            "ar": "ميّز /θ/ عن /s/ ولا تستبدل th بسين."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u2-p-anxiety-s-01",
            "en": "I've been trying to sleep better.",
            "ar": "يُربط I've been في سلسلة خفيفة، ويقع النبر الرئيس على trying وbetter."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u2-p-anxiety-i-01",
            "en": "I've been feeling stressed lately. ↘ | Really? ↗",
            "ar": "هبوط عند الإفصاح، وصعود متعاطف عند الاستجابة."
          }
        ]
      },
      {
        "id": "le-b1-b1u2-p-overcome",
        "sourceId": "overcome",
        "en": "overcome",
        "ipa": "/ˌəʊvəˈkʌm/",
        "ar": "يتغلب على",
        "contrastPairs": [
          {
            "id": "le-b1-b1u2-p-overcome-c-01",
            "en": "full / fool",
            "ar": "انتبه إلى اختلاف /ʊ/ و/uː/ في المقاطع المنبورة وغير المنبورة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u2-p-overcome-s-01",
            "en": "a habit that is hard to give up",
            "ar": "اربط that is مع اختزال is إلى /əz/ دون محو الحد الفاصل."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u2-p-overcome-i-01",
            "en": "If I take a short walk, I feel calmer. ↗ ... ↘",
            "ar": "جزء الشرط يظل مفتوحاً بنبرة غير نهائية، ثم تهبط النبرة في النتيجة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u2-l1-advice-count",
        "sourceId": "advice-count",
        "incorrect": "She gave me an advice.",
        "corrected": "She gave me some advice.",
        "pattern": "معاملة advice كاسم معدود",
        "explanationAr": "advice اسم غير معدود؛ قل some advice أو a piece of advice.",
        "practice": []
      },
      {
        "id": "le-b1-b1u2-l1-habit-gerund",
        "sourceId": "habit-gerund",
        "incorrect": "I am used to wake up early.",
        "corrected": "I am used to waking up early.",
        "pattern": "استخدام المصدر بعد be used to",
        "explanationAr": "في be used to تكون to حرف جر، لذلك يتبعها اسم أو فعل منتهٍ بـ-ing.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u2-a-affect",
        "sourceId": "affect",
        "term": "affect",
        "meaningAr": "يؤثر في",
        "example": {
          "en": "Regular sleep can affect concentration.",
          "ar": "قد يؤثر النوم المنتظم في التركيز."
        },
        "paraphrasing": [
          {
            "original": "Stress changes how well I sleep.",
            "paraphrase": "Stress affects my sleep quality."
          }
        ],
        "idioms": [
          {
            "phrase": "burn the candle at both ends",
            "meaningAr": "يرهق نفسه بالعمل دون راحة كافية"
          }
        ],
        "readingAnalysis": [
          {
            "term": "factor",
            "meaningAr": "عامل يسهم في نتيجة أو ظاهرة"
          }
        ]
      },
      {
        "id": "le-b1-b1u2-a-maintain",
        "sourceId": "maintain",
        "term": "maintain",
        "meaningAr": "يحافظ على",
        "example": {
          "en": "A steady routine helps maintain well-being.",
          "ar": "يساعد الروتين الثابت على الحفاظ على العافية."
        },
        "paraphrasing": [
          {
            "original": "Keep a healthy balance.",
            "paraphrase": "Maintain a healthy balance."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u3",
    "sourceId": "b1u3",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "البيئة والمجتمع",
    "titleEn": "Environment and Society",
    "icon": "🌍",
    "goalAr": "أن تناقش قضايا البيئة والمجتمع وتقدم اقتراحات وتعبّر عن رأيك بأسلوب موضوعي ومترابط.",
    "grammar": [
      {
        "id": "le-b1-b1u3-g01",
        "titleAr": "المبني للمجهول",
        "explainHtml": "نستخدم المبني للمجهول عندما نريد التركيز على الحدث نفسه أو على من وقع عليه الفعل، لا على من قام به. نبنيه بوضع الفعل يكون في الزمن المناسب ثم التصريف الثالث للفعل الرئيسي. وإذا أردنا ذكر من قام بالفعل أضفنا حرف الجر المناسب ثم الفاعل في نهاية الجملة.",
        "explainText": "نستخدم المبني للمجهول عندما نريد التركيز على الحدث نفسه أو على من وقع عليه الفعل، لا على من قام به. نبنيه بوضع الفعل يكون في الزمن المناسب ثم التصريف الثالث للفعل الرئيسي. وإذا أردنا ذكر من قام بالفعل أضفنا حرف الجر المناسب ثم الفاعل في نهاية الجملة.",
        "table": {
          "headers": [
            "الحالة",
            "الصيغة"
          ],
          "rows": [
            [
              "المضارع البسيط",
              "الفعل يكون في المضارع ثم التصريف الثالث للفعل الرئيسي"
            ],
            [
              "الماضي البسيط",
              "الفعل يكون في الماضي ثم التصريف الثالث للفعل الرئيسي"
            ],
            [
              "ذكر من قام بالفعل",
              "حرف الجر المناسب ثم الفاعل في نهاية الجملة"
            ],
            [
              "عدم ذكر من قام بالفعل",
              "نحذف الفاعل إذا كان مجهولاً أو غير مهم"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u3-g01-e01",
            "en": "Plastic is recycled in many countries.",
            "ar": "يعاد تدوير البلاستيك في بلدان كثيرة."
          },
          {
            "id": "le-b1-b1u3-g01-e02",
            "en": "The new hospital was built last year.",
            "ar": "بني المستشفى الجديد في العام الماضي."
          },
          {
            "id": "le-b1-b1u3-g01-e03",
            "en": "Millions of trees have been cut down in this area.",
            "ar": "قطعت ملايين الأشجار في هذه المنطقة."
          },
          {
            "id": "le-b1-b1u3-g01-e04",
            "en": "The park will be cleaned by volunteers next Saturday.",
            "ar": "سينظف المتنزه على أيدي متطوعين السبت القادم."
          },
          {
            "id": "le-b1-b1u3-g01-e05",
            "en": "English is spoken all over the world.",
            "ar": "تتحدث الإنجليزية في كل أنحاء العالم."
          }
        ],
        "tips": [
          "لا تستخدم المبني للمجهول مع الأفعال اللازمة التي لا تحتاج إلى مفعول به.",
          "استخدم المبني للمجهول في الأخبار والتقارير عندما لا يكون الفاعل معروفاً.",
          "إذا كان من قام بالفعل مهماً فاذكره في نهاية الجملة بعد حرف الجر المناسب."
        ]
      },
      {
        "id": "le-b1-b1u3-g02",
        "titleAr": "أدوات الربط في الكتابة والكلام",
        "explainHtml": "تساعدنا أدوات الربط على تنظيم الأفكار وإظهار العلاقة بين الجمل. بعضها يعبر عن التناقض، وبعضها عن السبب والنتيجة، وبعضها عن الإضافة. انتبه إلى أن بعض الأدوات يتبعها اسم أو فعل مع النهاية المضافة، وبعضها يتبعه جملة كاملة. اختيار الأداة الصحيحة يجعل كلامك أكثر وضوحاً وإقناعاً.",
        "explainText": "تساعدنا أدوات الربط على تنظيم الأفكار وإظهار العلاقة بين الجمل. بعضها يعبر عن التناقض، وبعضها عن السبب والنتيجة، وبعضها عن الإضافة. انتبه إلى أن بعض الأدوات يتبعها اسم أو فعل مع النهاية المضافة، وبعضها يتبعه جملة كاملة. اختيار الأداة الصحيحة يجعل كلامك أكثر وضوحاً وإقناعاً.",
        "table": {
          "headers": [
            "نوع الأداة",
            "وظيفتها"
          ],
          "rows": [
            [
              "أداة التناقض",
              "تضيف فكرة مخالفة للفكرة السابقة"
            ],
            [
              "أداة النتيجة",
              "تقدم نتيجة لما ذكره المتحدث قبلاً"
            ],
            [
              "أداة السبب",
              "توضح سبب وقوع الحدث"
            ],
            [
              "أداة الإضافة",
              "تضيف فكرة جديدة إلى الفكرة السابقة"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u3-g02-e01",
            "en": "Although the weather was cold, we cleaned the beach.",
            "ar": "رغم أن الطقس كان بارداً فقد نظفنا الشاطئ."
          },
          {
            "id": "le-b1-b1u3-g02-e02",
            "en": "The city is noisy. However, I enjoy living here.",
            "ar": "المدينة صاخبة. ومع ذلك أستمتع بالعيش هنا."
          },
          {
            "id": "le-b1-b1u3-g02-e03",
            "en": "Public transport is cheap. Therefore, many people use it.",
            "ar": "النقل العام رخيص. لذلك يستخدمه كثير من الناس."
          },
          {
            "id": "le-b1-b1u3-g02-e04",
            "en": "Despite the heavy rain, the volunteers continued their work.",
            "ar": "رغم المطر الغزير واصل المتطوعون عملهم."
          },
          {
            "id": "le-b1-b1u3-g02-e05",
            "en": "He studied hard, so he passed the exam easily.",
            "ar": "درس بجد، لذلك نجح في الامتحان بسهولة."
          }
        ],
        "tips": [
          "بعد الأداة التي يتبعها اسم نستخدم الفعل مع النهاية المضافة، لا جملة كاملة.",
          "لا تجمع بين أداتين للتناقض في الجملة نفسها لتفادي الخطأ.",
          "استخدم أداة النتيجة في بداية الجملة الثانية لتوضح العلاقة بين الفكرتين."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u3-v01",
        "en": "environment",
        "ar": "البيئة",
        "pos": "noun",
        "emoji": "🌍",
        "example": {
          "en": "We must protect the environment for future generations.",
          "ar": "علينا حماية البيئة للأجيال القادمة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v02",
        "en": "pollution",
        "ar": "تلوث",
        "pos": "noun",
        "emoji": "🏭",
        "example": {
          "en": "Air pollution is a serious problem in big cities.",
          "ar": "تلوث الهواء مشكلة خطيرة في المدن الكبيرة."
        },
        "collocations": [
          {
            "id": "le-b1-b1u3-v02-c01",
            "en": "air pollution",
            "ar": "تلوث الهواء"
          }
        ]
      },
      {
        "id": "le-b1-b1u3-v03",
        "en": "recycle",
        "ar": "يعيد التدوير",
        "pos": "verb",
        "emoji": "♻️",
        "example": {
          "en": "We recycle paper and glass at home.",
          "ar": "نعيد تدوير الورق والزجاج في المنزل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v04",
        "en": "climate",
        "ar": "مناخ",
        "pos": "noun",
        "emoji": "🌡️",
        "example": {
          "en": "Climate change affects the whole planet.",
          "ar": "تغير المناخ يؤثر في الكوكب كله."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v05",
        "en": "waste",
        "ar": "يهدر",
        "pos": "verb",
        "emoji": "🗑️",
        "example": {
          "en": "Factories waste a lot of energy every day.",
          "ar": "تهدر المصانع كثيراً من الطاقة كل يوم."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v06",
        "en": "society",
        "ar": "مجتمع",
        "pos": "noun",
        "emoji": "🏙️",
        "example": {
          "en": "Every society needs clear rules to live in peace.",
          "ar": "كل مجتمع يحتاج قواعد واضحة ليعيش في سلام."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v07",
        "en": "community",
        "ar": "مجتمع محلي",
        "pos": "noun",
        "emoji": "🤝",
        "example": {
          "en": "Our community organized a day to clean the park.",
          "ar": "نظم مجتمعنا المحلي يوماً لتنظيف الحديقة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v08",
        "en": "volunteer",
        "ar": "يتطوع",
        "pos": "verb",
        "emoji": "🙌",
        "example": {
          "en": "Many students volunteer to help older people.",
          "ar": "يتطوع كثير من الطلاب لمساعدة كبار السن."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v09",
        "en": "damage",
        "ar": "يضر",
        "pos": "verb",
        "emoji": "💥",
        "example": {
          "en": "Plastic bags damage the ocean and sea animals.",
          "ar": "تضر الأكياس البلاستيكية بالمحيط وحيوانات البحر."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v10",
        "en": "government",
        "ar": "حكومة",
        "pos": "noun",
        "emoji": "🏛️",
        "example": {
          "en": "The government promised to build more bike lanes.",
          "ar": "وعدت الحكومة ببناء مزيد من مسارات الدراجات."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v11",
        "en": "public transport",
        "ar": "نقل عام",
        "pos": "phrase",
        "emoji": "🚌",
        "example": {
          "en": "Public transport is cheaper than driving a car.",
          "ar": "النقل العام أرخص من قيادة السيارة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v12",
        "en": "issue",
        "ar": "قضية",
        "pos": "noun",
        "emoji": "❗",
        "example": {
          "en": "Housing is an important issue in many cities.",
          "ar": "الإسكان قضية مهمة في مدن كثيرة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v13",
        "en": "however",
        "ar": "مع ذلك",
        "pos": "adverb",
        "emoji": "🔄",
        "example": {
          "en": "The plan is expensive; however, it may solve the problem.",
          "ar": "الخطة مكلفة؛ ومع ذلك قد تحل المشكلة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v14",
        "en": "despite",
        "ar": "رغم",
        "pos": "preposition",
        "emoji": "🌧️",
        "example": {
          "en": "Despite the rain, we cleaned the whole beach.",
          "ar": "رغم المطر نظفنا الشاطئ كله."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u3-v15",
        "en": "energy",
        "ar": "طاقة",
        "pos": "noun",
        "emoji": "🔋",
        "example": {
          "en": "Solar energy is clean and cheap.",
          "ar": "الطاقة الشمسية نظيفة ورخيصة."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u3-s01",
        "en": "Plastic bottles are recycled in many countries around the world.",
        "ar": "يعاد تدوير القوارير البلاستيكية في بلدان كثيرة حول العالم."
      },
      {
        "id": "le-b1-b1u3-s02",
        "en": "The new library was built with money from the government.",
        "ar": "بنيت المكتبة الجديدة بمال من الحكومة."
      },
      {
        "id": "le-b1-b1u3-s03",
        "en": "Millions of trees have been cut down in the last ten years.",
        "ar": "قطعت ملايين الأشجار في السنوات العشر الماضية."
      },
      {
        "id": "le-b1-b1u3-s04",
        "en": "Although the air is dirty, the city is trying to improve it.",
        "ar": "رغم أن الهواء ملوث فإن المدينة تحاول تحسينه."
      },
      {
        "id": "le-b1-b1u3-s05",
        "en": "Public transport is cheap; therefore, many people use it daily.",
        "ar": "النقل العام رخيص؛ لذلك يستخدمه كثير من الناس يومياً."
      },
      {
        "id": "le-b1-b1u3-s06",
        "en": "Despite the cold weather, volunteers cleaned the whole park.",
        "ar": "رغم الطقس البارد نظف المتطوعون الحديقة كلها."
      },
      {
        "id": "le-b1-b1u3-s07",
        "en": "Our community has organized a project to protect the river.",
        "ar": "نظم مجتمعنا المحلي مشروعاً لحماية النهر."
      },
      {
        "id": "le-b1-b1u3-s08",
        "en": "The government should spend more money on clean energy.",
        "ar": "على الحكومة أن تنفق مزيداً من المال على الطاقة النظيفة."
      },
      {
        "id": "le-b1-b1u3-s09",
        "en": "Climate change is an issue that affects every country.",
        "ar": "تغير المناخ قضية تؤثر في كل بلد."
      },
      {
        "id": "le-b1-b1u3-s10",
        "en": "We should not waste water, even in winter.",
        "ar": "لا ينبغي أن نهدر الماء حتى في الشتاء."
      },
      {
        "id": "le-b1-b1u3-s11",
        "en": "A healthy society depends on education and honest work.",
        "ar": "المجتمع السليم يعتمد على التعليم والعمل الجاد."
      },
      {
        "id": "le-b1-b1u3-s12",
        "en": "The problem of pollution will be discussed at the meeting.",
        "ar": "ستناقش مشكلة التلوث في الاجتماع."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u3-d01",
        "who": "A",
        "en": "Have you heard about the new recycling project?",
        "ar": "هل سمعت عن مشروع إعادة التدوير الجديد؟"
      },
      {
        "id": "le-b1-b1u3-d02",
        "who": "B",
        "en": "Yes, it was started by a group of students.",
        "ar": "نعم، بدأه مجموعة من الطلاب."
      },
      {
        "id": "le-b1-b1u3-d03",
        "who": "A",
        "en": "That is great. Our street needs more green spaces too.",
        "ar": "هذا رائع. يحتاج شارعنا إلى مساحات خضراء أكثر أيضاً."
      },
      {
        "id": "le-b1-b1u3-d04",
        "who": "B",
        "en": "I agree. However, the government must support such ideas.",
        "ar": "أوافق. ومع ذلك على الحكومة أن تدعم مثل هذه الأفكار."
      },
      {
        "id": "le-b1-b1u3-d05",
        "who": "A",
        "en": "Why don't we join the next volunteer day?",
        "ar": "لماذا لا نشارك في يوم التطوع القادم؟"
      },
      {
        "id": "le-b1-b1u3-d06",
        "who": "B",
        "en": "Good idea. I will invite our neighbors as well.",
        "ar": "فكرة جيدة. سأدعو جيراننا أيضاً."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u3-p-environment",
        "sourceId": "environment",
        "en": "environment",
        "ipa": "/ɪnˈvaɪrənmənt/",
        "ar": "البيئة",
        "contrastPairs": [
          {
            "id": "le-b1-b1u3-p-environment-c-01",
            "en": "vest / best",
            "ar": "ميّز /v/ المجهورة عن /b/ الإطباقية."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u3-p-environment-s-01",
            "en": "Plastic is recycled in many cities.",
            "ar": "تُوصل is recycled مع بقاء نهاية /z/ قبل /r/ واضحة."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u3-p-environment-i-01",
            "en": "We could improve recycling, couldn't we? ↘↗",
            "ar": "هبوط في الرأي ثم صعود السؤال الذيلي لطلب الاتفاق."
          }
        ]
      },
      {
        "id": "le-b1-b1u3-p-society",
        "sourceId": "society",
        "en": "society",
        "ipa": "/səˈsaɪəti/",
        "ar": "مجتمع",
        "contrastPairs": [
          {
            "id": "le-b1-b1u3-p-society-c-01",
            "en": "thin / tin",
            "ar": "ميّز /θ/ عن /t/ في كلمات البيئة الشائعة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u3-p-society-s-01",
            "en": "reduce waste and save energy",
            "ar": "اربط and بالكلمة التالية مع إبراز الفعلين المتوازيين."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u3-p-society-i-01",
            "en": "Although public transport is cheaper, it can be slow. ↗ ... ↘",
            "ar": "تنغيم غير نهائي في التنازل ثم هبوط عند الفكرة الرئيسة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u3-l1-despite-clause",
        "sourceId": "despite-clause",
        "incorrect": "Despite it was raining, we recycled.",
        "corrected": "Although it was raining, we recycled.",
        "pattern": "وضع جملة كاملة بعد despite",
        "explanationAr": "يتبع despite اسم أو تركيب اسمي؛ أما although فيتبعها فاعل وفعل.",
        "practice": []
      },
      {
        "id": "le-b1-b1u3-l1-damage-preposition",
        "sourceId": "damage-preposition",
        "incorrect": "Plastic damages to the ocean.",
        "corrected": "Plastic damages the ocean.",
        "pattern": "إضافة حرف جر بعد damage",
        "explanationAr": "damage فعل متعدٍ يأخذ المفعول مباشرة؛ الاسم damage قد يأتي بعده to في تراكيب أخرى.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u3-a-impact",
        "sourceId": "impact",
        "term": "impact",
        "meaningAr": "أثر أو تأثير",
        "example": {
          "en": "The report examines the impact of traffic on air quality.",
          "ar": "يدرس التقرير أثر حركة المرور في جودة الهواء."
        },
        "paraphrasing": [
          {
            "original": "Traffic affects air quality.",
            "paraphrase": "Traffic has an impact on air quality."
          }
        ],
        "idioms": [
          {
            "phrase": "make a difference",
            "meaningAr": "يحدث فرقاً أو أثراً"
          }
        ],
        "readingAnalysis": [
          {
            "term": "impact",
            "meaningAr": "نتيجة أو أثر ملحوظ لسبب ما"
          }
        ]
      },
      {
        "id": "le-b1-b1u3-a-approach",
        "sourceId": "approach",
        "term": "approach",
        "meaningAr": "نهج أو طريقة معالجة",
        "example": {
          "en": "The city adopted a new approach to waste reduction.",
          "ar": "اعتمدت المدينة نهجاً جديداً للحد من النفايات."
        },
        "paraphrasing": [
          {
            "original": "The city tried a new method.",
            "paraphrase": "The city adopted a new approach."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u4",
    "sourceId": "b1u4",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "الإعلام والأخبار والرأي",
    "titleEn": "Media, News and Opinion",
    "icon": "📰",
    "goalAr": "أن تتابع الأخبار وتنقل كلام الآخرين وتعبّر عن رأيك وتتحقق من مصداقية المصادر.",
    "grammar": [
      {
        "id": "le-b1-b1u4-g01",
        "titleAr": "الكلام المنقول",
        "explainHtml": "نستخدم الكلام المنقول لنقل ما قاله شخص آخر دون استخدام كلماته الحرفية. عند النقل نرجع الزمن خطوة واحدة إلى الوراء، ونغير الضمائر بحسب المعنى، ونغير تعبيرات الزمان والمكان إذا لزم الأمر. وإذا كان الفعل الناقل في الماضي وجب علينا إرجاع الزمن، أما إذا كان في المضارع فيبقى الزمن كما هو.",
        "explainText": "نستخدم الكلام المنقول لنقل ما قاله شخص آخر دون استخدام كلماته الحرفية. عند النقل نرجع الزمن خطوة واحدة إلى الوراء، ونغير الضمائر بحسب المعنى، ونغير تعبيرات الزمان والمكان إذا لزم الأمر. وإذا كان الفعل الناقل في الماضي وجب علينا إرجاع الزمن، أما إذا كان في المضارع فيبقى الزمن كما هو.",
        "table": {
          "headers": [
            "الزمن في الكلام الأصلي",
            "الزمن بعد النقل"
          ],
          "rows": [
            [
              "المضارع البسيط",
              "يصبح ماضياً بسيطاً"
            ],
            [
              "المضارع المستمر",
              "يصبح ماضياً مستمراً"
            ],
            [
              "الماضي البسيط",
              "يصبح ماضياً تاماً"
            ],
            [
              "المضارع التام",
              "يصبح ماضياً تاماً"
            ],
            [
              "صيغة المستقبل",
              "تصبح صيغة المستقبل في الماضي"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u4-g01-e01",
            "en": "She said that she was very tired.",
            "ar": "قالت إنها كانت متعبة جداً."
          },
          {
            "id": "le-b1-b1u4-g01-e02",
            "en": "He told me he had finished the article.",
            "ar": "أخبرني أنه أنهى المقال."
          },
          {
            "id": "le-b1-b1u4-g01-e03",
            "en": "They said they would send the photos later.",
            "ar": "قالوا إنهم سيرسلون الصور لاحقاً."
          },
          {
            "id": "le-b1-b1u4-g01-e04",
            "en": "The journalist asked if the story was true.",
            "ar": "سأل الصحفي إن كانت القصة صحيحة."
          },
          {
            "id": "le-b1-b1u4-g01-e05",
            "en": "She asked me where I had found that information.",
            "ar": "سألتني من أين حصلت على تلك المعلومة."
          }
        ],
        "tips": [
          "الضمائر تتغير بحسب المعنى، لا بحسب شكل الجملة الأصلية.",
          "إذا كان الفعل الناقل في المضارع فلا حاجة إلى إرجاع الزمن خطوة إلى الوراء.",
          "في الأسئلة المنقولة نحوّل السؤال إلى جملة عادية ونستخدم أداة الربط المناسبة."
        ]
      },
      {
        "id": "le-b1-b1u4-g02",
        "titleAr": "أفعال الترجيح والاستنتاج",
        "explainHtml": "نستخدم هذه الأفعال للتعبير عن درجة تأكدنا من معلومة ما. عندما نكون متأكدين تماماً نستخدم فعل التأكيد القوي، وعندما نستبعد شيئاً استبعاداً تاماً نستخدم فعل النفي القوي، وعندما نرجح احتمالاً نستخدم فعل الاحتمال. الفرق بينها هو درجة اليقين فقط، ويأتي بعدها الفعل في صيغته الأصلية.",
        "explainText": "نستخدم هذه الأفعال للتعبير عن درجة تأكدنا من معلومة ما. عندما نكون متأكدين تماماً نستخدم فعل التأكيد القوي، وعندما نستبعد شيئاً استبعاداً تاماً نستخدم فعل النفي القوي، وعندما نرجح احتمالاً نستخدم فعل الاحتمال. الفرق بينها هو درجة اليقين فقط، ويأتي بعدها الفعل في صيغته الأصلية.",
        "table": {
          "headers": [
            "درجة اليقين",
            "الأداة المناسبة"
          ],
          "rows": [
            [
              "متأكد تماماً",
              "فعل التأكيد القوي ثم الفعل في صيغته الأصلية"
            ],
            [
              "مستبعد تماماً",
              "فعل النفي القوي ثم الفعل في صيغته الأصلية"
            ],
            [
              "احتمال ممكن",
              "فعل الاحتمال ثم الفعل في صيغته الأصلية"
            ],
            [
              "حديث عن الماضي",
              "فعل الترجيح ثم صيغة تدل على اكتمال الحدث"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u4-g02-e01",
            "en": "You must be tired after such a long flight.",
            "ar": "لا بد أنك متعب بعد رحلة طويلة كهذه."
          },
          {
            "id": "le-b1-b1u4-g02-e02",
            "en": "She cannot be the writer of this article; she is only fifteen.",
            "ar": "لا يمكن أن تكون كاتبة هذا المقال؛ فهي في الخامسة عشرة فقط."
          },
          {
            "id": "le-b1-b1u4-g02-e03",
            "en": "He might be late because of the heavy traffic.",
            "ar": "قد يتأخر بسبب الزحام الشديد."
          },
          {
            "id": "le-b1-b1u4-g02-e04",
            "en": "This story must be true; three sources reported it.",
            "ar": "لا بد أن هذه القصة صحيحة؛ فقد نقلتها ثلاثة مصادر."
          },
          {
            "id": "le-b1-b1u4-g02-e05",
            "en": "They may not know about the new evidence.",
            "ar": "قد لا يعرفون بالأدلة الجديدة."
          }
        ],
        "tips": [
          "استخدم فعل النفي القوي عندما تكون المعلومة مستحيلة منطقياً.",
          "للحديث عن الماضي أضف صيغة تدل على اكتمال الحدث بعد فعل الترجيح.",
          "فعل الاحتمال يعبر عن احتمال حقيقي، فلا تستخدمه عندما تكون متأكداً."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u4-v01",
        "en": "opinion",
        "ar": "رأي",
        "pos": "noun",
        "emoji": "💭",
        "example": {
          "en": "In my opinion, the news is sometimes too dramatic.",
          "ar": "في رأيي أن الأخبار مبالغ فيها أحياناً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v02",
        "en": "headline",
        "ar": "عنوان رئيسي",
        "pos": "noun",
        "emoji": "📰",
        "example": {
          "en": "The headline on the front page was shocking.",
          "ar": "كان العنوان الرئيسي في الصفحة الأولى صادماً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v03",
        "en": "article",
        "ar": "مقال",
        "pos": "noun",
        "emoji": "📄",
        "example": {
          "en": "I read an interesting article about healthy eating.",
          "ar": "قرأت مقالاً شيقاً عن الأكل الصحي."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v04",
        "en": "journalist",
        "ar": "صحفي",
        "pos": "noun",
        "emoji": "🎙️",
        "example": {
          "en": "The journalist interviewed the mayor about the new hospital.",
          "ar": "قابل الصحفي رئيس البلدية للحديث عن المستشفى الجديد."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v05",
        "en": "source",
        "ar": "مصدر",
        "pos": "noun",
        "emoji": "🔎",
        "example": {
          "en": "Always check the source of the information you share.",
          "ar": "تحقق دائماً من مصدر المعلومة التي تنشرها."
        },
        "collocations": [
          {
            "id": "le-b1-b1u4-v05-c01",
            "en": "reliable source",
            "ar": "مصدر موثوق"
          }
        ]
      },
      {
        "id": "le-b1-b1u4-v06",
        "en": "reliable",
        "ar": "موثوق",
        "pos": "adjective",
        "emoji": "✅",
        "example": {
          "en": "This website is not always a reliable source of news.",
          "ar": "هذا الموقع ليس دائماً مصدراً موثوقاً للأخبار."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v07",
        "en": "broadcast",
        "ar": "يبث",
        "pos": "verb",
        "emoji": "📡",
        "example": {
          "en": "They broadcast the match live on television.",
          "ar": "بثوا المباراة مباشرة على التلفاز."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v08",
        "en": "audience",
        "ar": "جمهور المشاهدين",
        "pos": "noun",
        "emoji": "🎭",
        "example": {
          "en": "The audience asked many questions after the show.",
          "ar": "طرح الجمهور أسئلة كثيرة بعد البرنامج."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v09",
        "en": "advertise",
        "ar": "يعلن عن",
        "pos": "verb",
        "emoji": "📢",
        "example": {
          "en": "Companies advertise their products on social media.",
          "ar": "تعلن الشركات عن منتجاتها على وسائل التواصل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v10",
        "en": "influence",
        "ar": "يؤثر في",
        "pos": "verb",
        "emoji": "🌐",
        "example": {
          "en": "Social media can influence the way we think.",
          "ar": "قد تؤثر وسائل التواصل في طريقة تفكيرنا."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v11",
        "en": "actually",
        "ar": "في الحقيقة",
        "pos": "adverb",
        "emoji": "💡",
        "example": {
          "en": "I actually prefer reading the news online.",
          "ar": "أنا في الحقيقة أفضل قراءة الأخبار على الإنترنت."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v12",
        "en": "rumor",
        "ar": "شائعة",
        "pos": "noun",
        "emoji": "🗣️",
        "example": {
          "en": "The rumor about the factory closing was not true.",
          "ar": "كانت الشائعة عن إغلاق المصنع غير صحيحة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v13",
        "en": "convince",
        "ar": "يقنع",
        "pos": "verb",
        "emoji": "🤔",
        "example": {
          "en": "He tried to convince me with facts and numbers.",
          "ar": "حاول أن يقنعني بالوقائع والأرقام."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v14",
        "en": "comment",
        "ar": "تعليق",
        "pos": "noun",
        "emoji": "💬",
        "example": {
          "en": "She left a long comment under the video.",
          "ar": "كتبت تعليقاً طويلاً تحت الفيديو."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u4-v15",
        "en": "consider",
        "ar": "يعتبر أو يدرس",
        "pos": "verb",
        "emoji": "🧠",
        "example": {
          "en": "Please consider other opinions before you decide.",
          "ar": "خذ في الاعتبار آراء أخرى قبل أن تقرر."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u4-s01",
        "en": "The journalist said that the report had been written quickly.",
        "ar": "قال الصحفي إن التقرير قد كتب بسرعة."
      },
      {
        "id": "le-b1-b1u4-s02",
        "en": "She told me she would publish the article on Friday.",
        "ar": "أخبرتني أنها ستنشر المقال يوم الجمعة."
      },
      {
        "id": "le-b1-b1u4-s03",
        "en": "He asked me if I had read the headline that morning.",
        "ar": "سألني إن كنت قد قرأت العنوان الرئيسي في ذلك الصباح."
      },
      {
        "id": "le-b1-b1u4-s04",
        "en": "You must be joking; that story cannot be true.",
        "ar": "لا بد أنك تمزح؛ لا يمكن أن تكون تلك القصة صحيحة."
      },
      {
        "id": "le-b1-b1u4-s05",
        "en": "The audience might not agree with the speaker's opinion.",
        "ar": "قد لا يوافق الجمهور على رأي المتحدث."
      },
      {
        "id": "le-b1-b1u4-s06",
        "en": "Many people consider social media a reliable source of news.",
        "ar": "يعتبر كثير من الناس وسائل التواصل مصدراً موثوقاً للأخبار."
      },
      {
        "id": "le-b1-b1u4-s07",
        "en": "The interview was broadcast live on national television.",
        "ar": "بثت المقابلة مباشرة على التلفاز الوطني."
      },
      {
        "id": "le-b1-b1u4-s08",
        "en": "We should check the source before we share any comment.",
        "ar": "علينا التحقق من المصدر قبل نشر أي تعليق."
      },
      {
        "id": "le-b1-b1u4-s09",
        "en": "Although the article was long, it was actually very interesting.",
        "ar": "رغم أن المقال كان طويلاً فقد كان شيقاً جداً في الحقيقة."
      },
      {
        "id": "le-b1-b1u4-s10",
        "en": "Companies often advertise products that nobody really needs.",
        "ar": "تعلن الشركات غالباً عن منتجات لا يحتاجها أحد حقاً."
      },
      {
        "id": "le-b1-b1u4-s11",
        "en": "He might have forgotten to send the photos yesterday.",
        "ar": "قد يكون نسي إرسال الصور أمس."
      },
      {
        "id": "le-b1-b1u4-s12",
        "en": "In my opinion, everyone should compare at least two sources.",
        "ar": "في رأيي ينبغي أن يقارن كل شخص مصدرين على الأقل."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u4-d01",
        "who": "A",
        "en": "Did you see the headline about the new train line?",
        "ar": "هل رأيت العنوان الرئيسي عن خط القطار الجديد؟"
      },
      {
        "id": "le-b1-b1u4-d02",
        "who": "B",
        "en": "Yes, but I am not sure the story is reliable.",
        "ar": "نعم، لكنني لست متأكداً من أن الخبر موثوق."
      },
      {
        "id": "le-b1-b1u4-d03",
        "who": "A",
        "en": "Why do you say that? It was on the main news.",
        "ar": "لماذا تقول ذلك؟ لقد ظهر في نشرة الأخبار الرئيسية."
      },
      {
        "id": "le-b1-b1u4-d04",
        "who": "B",
        "en": "The journalist did not mention any clear source.",
        "ar": "لم يذكر الصحفي أي مصدر واضح."
      },
      {
        "id": "le-b1-b1u4-d05",
        "who": "A",
        "en": "Then I will check another website before I share it.",
        "ar": "إذن سأتحقق من موقع آخر قبل أن أنشره."
      },
      {
        "id": "le-b1-b1u4-d06",
        "who": "B",
        "en": "Good idea. Rumors spread very quickly online.",
        "ar": "فكرة جيدة. تنتشر الشائعات بسرعة كبيرة على الإنترنت."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u4-p-reliable",
        "sourceId": "reliable",
        "en": "reliable",
        "ipa": "/rɪˈlaɪəbəl/",
        "ar": "موثوق",
        "contrastPairs": [
          {
            "id": "le-b1-b1u4-p-reliable-c-01",
            "en": "source / resource",
            "ar": "قارن /s/ المهموسة في source مع /z/ المجهورة في resource."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u4-p-reliable-s-01",
            "en": "The article has been shared widely.",
            "ar": "تلتقي /z/ في has بنطق been مع بقاء النبر على shared وwidely."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u4-p-reliable-i-01",
            "en": "The source is reliable, isn't it? ↘↗",
            "ar": "هبوط في التقييم ثم صعود السؤال الذيلي لطلب التحقق."
          }
        ]
      },
      {
        "id": "le-b1-b1u4-p-actually",
        "sourceId": "actually",
        "en": "actually",
        "ipa": "/ˈæktʃuəli/",
        "ar": "في الواقع",
        "contrastPairs": [
          {
            "id": "le-b1-b1u4-p-actually-c-01",
            "en": "choose / shoes",
            "ar": "ميّز /tʃ/ عن /ʃ/ في نطق الكلمات المتقاربة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u4-p-actually-s-01",
            "en": "I actually agree with part of the report.",
            "ar": "اربط actually agree دون حذف الحركة الأولى في الكلمة المنبورة."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u4-p-actually-i-01",
            "en": "I see your point; however, the evidence is limited. ↘↗ ... ↘",
            "ar": "هبوط جزئي بعد الاعتراف، ثم ارتفاع عند الاستدراك وهبوط في الخلاصة."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u4-l1-actually-false-friend",
        "sourceId": "actually-false-friend",
        "incorrect": "Actually, I arrived at six.",
        "corrected": "In fact, I arrived at six.",
        "pattern": "استخدام actually بمعنى حالياً",
        "explanationAr": "actually تعني في الحقيقة/واقع الأمر، ولا تعني عادةً حالياً؛ استخدم currently للمعنى الزمني.",
        "practice": []
      },
      {
        "id": "le-b1-b1u4-l1-say-tell",
        "sourceId": "say-tell",
        "incorrect": "The journalist said me the story.",
        "corrected": "The journalist told me the story.",
        "pattern": "الخلط بين say وtell",
        "explanationAr": "tell يأخذ الشخص مباشرةً غالباً، أما say فيحتاج to قبل الشخص.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u4-a-evidence",
        "sourceId": "evidence",
        "term": "evidence",
        "meaningAr": "أدلة أو شواهد",
        "example": {
          "en": "The article provides evidence for its main claim.",
          "ar": "يقدم المقال أدلة على فكرته الرئيسة."
        },
        "paraphrasing": [
          {
            "original": "The report supports this idea with facts.",
            "paraphrase": "The report provides evidence for this claim."
          }
        ],
        "idioms": [
          {
            "phrase": "take something with a grain of salt",
            "meaningAr": "يتعامل مع معلومة بشيء من التحفظ"
          }
        ],
        "readingAnalysis": [
          {
            "term": "claim",
            "meaningAr": "الفكرة أو الادعاء الذي يسعى الكاتب إلى دعمه"
          }
        ]
      },
      {
        "id": "le-b1-b1u4-a-indicate",
        "sourceId": "indicate",
        "term": "indicate",
        "meaningAr": "يشير إلى أو يدل على",
        "example": {
          "en": "The survey indicates a change in public opinion.",
          "ar": "يشير الاستطلاع إلى تغير في الرأي العام."
        },
        "paraphrasing": [
          {
            "original": "The results show a change.",
            "paraphrase": "The results indicate a shift."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u5",
    "sourceId": "b1u5",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "التخطيط للمستقبل والدراسة",
    "titleEn": "Future Plans and Study",
    "icon": "🎓",
    "goalAr": "أن تخطط لمستقبلك الدراسي والمهني وتتحدث عن الشروط والاحتمالات والخطط البديلة بوضوح.",
    "grammar": [
      {
        "id": "le-b1-b1u5-g01",
        "titleAr": "الجملة الشرطية الأولى والثانية",
        "explainHtml": "نستخدم الجملة الشرطية الأولى للحديث عن موقف ممكن الحدوث في المستقبل، فيكون الشرط في المضارع البسيط والنتيجة في المستقبل. أما الجملة الشرطية الثانية فتستخدم لموقف خيالي أو غير محتمل في الحاضر، فيكون الشرط في الماضي البسيط والنتيجة بصيغة المستقبل في الماضي ثم الفعل في صيغته الأصلية.",
        "explainText": "نستخدم الجملة الشرطية الأولى للحديث عن موقف ممكن الحدوث في المستقبل، فيكون الشرط في المضارع البسيط والنتيجة في المستقبل. أما الجملة الشرطية الثانية فتستخدم لموقف خيالي أو غير محتمل في الحاضر، فيكون الشرط في الماضي البسيط والنتيجة بصيغة المستقبل في الماضي ثم الفعل في صيغته الأصلية.",
        "table": {
          "headers": [
            "نوع الشرط",
            "التركيب والمعنى"
          ],
          "rows": [
            [
              "الشرطية الأولى",
              "شرط في المضارع البسيط ونتيجة في المستقبل، لموقف ممكن"
            ],
            [
              "الشرطية الثانية",
              "شرط في الماضي البسيط ونتيجة في المستقبل من الماضي، لموقف خيالي"
            ],
            [
              "في الشرطية الثانية",
              "نستخدم صيغة الماضي مع جميع الضمائر في جملة الشرط"
            ],
            [
              "ترتيب الجملتين",
              "يمكن تقديم النتيجة على الشرط مع وضع فاصلة بينهما"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u5-g01-e01",
            "en": "If it rains tomorrow, we will study at home.",
            "ar": "إذا أمطرت غداً فسندرس في المنزل."
          },
          {
            "id": "le-b1-b1u5-g01-e02",
            "en": "If I had more free time, I would learn another language.",
            "ar": "لو كان لدي وقت فراغ أكثر لتعلمت لغة أخرى."
          },
          {
            "id": "le-b1-b1u5-g01-e03",
            "en": "She will pass the exam if she revises every day.",
            "ar": "ستنجح في الامتحان إذا راجعت دروسها كل يوم."
          },
          {
            "id": "le-b1-b1u5-g01-e04",
            "en": "If we lived near the university, we would save money.",
            "ar": "لو كنا نسكن قرب الجامعة لوفرنا المال."
          },
          {
            "id": "le-b1-b1u5-g01-e05",
            "en": "What would you study if you could choose again?",
            "ar": "ماذا كنت ستدرس لو استطعت الاختيار مرة أخرى؟"
          }
        ],
        "tips": [
          "لا تستخدم صيغة المستقبل بعد أداة الشرط في الجملة الشرطية الأولى.",
          "في الجملة الشرطية الثانية نستخدم صيغة الماضي مع جميع الضمائر حتى مع المفرد الغائب.",
          "إذا بدأت بجملة النتيجة فضع فاصلة بينها وبين جملة الشرط."
        ]
      },
      {
        "id": "le-b1-b1u5-g02",
        "titleAr": "الصيغة الاسمية للفعل والمصدر",
        "explainHtml": "بعض الأفعال يتبعها الفعل بصيغة اسمية تنتهي بنهاية تدل على الاسمية، وبعضها يتبعه الفعل في صيغته الأصلية، وبعضها يقبل الصيغتين. كما أن حروف الجر يتبعها الفعل بالصيغة الاسمية دائماً. حفظ الأفعال الشائعة مع الصيغة التي تتبعها يوفر عليك كثيراً من الأخطاء.",
        "explainText": "بعض الأفعال يتبعها الفعل بصيغة اسمية تنتهي بنهاية تدل على الاسمية، وبعضها يتبعه الفعل في صيغته الأصلية، وبعضها يقبل الصيغتين. كما أن حروف الجر يتبعها الفعل بالصيغة الاسمية دائماً. حفظ الأفعال الشائعة مع الصيغة التي تتبعها يوفر عليك كثيراً من الأخطاء.",
        "table": {
          "headers": [
            "الحالة",
            "الصيغة المطلوبة"
          ],
          "rows": [
            [
              "فعل يتبع بصيغة اسمية",
              "الفعل مع النهاية الدالة على الاسمية"
            ],
            [
              "فعل يتبع بمصدر",
              "الفعل في صيغته الأصلية"
            ],
            [
              "بعد حرف الجر",
              "الفعل مع النهاية الدالة على الاسمية دائماً"
            ],
            [
              "بعد بعض الصفات",
              "الفعل في صيغته الأصلية"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u5-g02-e01",
            "en": "I enjoy learning new languages.",
            "ar": "أستمتع بتعلم لغات جديدة."
          },
          {
            "id": "le-b1-b1u5-g02-e02",
            "en": "She decided to study abroad next year.",
            "ar": "قررت أن تدرس في الخارج العام القادم."
          },
          {
            "id": "le-b1-b1u5-g02-e03",
            "en": "He is good at solving difficult problems.",
            "ar": "إنه بارع في حل المشكلات الصعبة."
          },
          {
            "id": "le-b1-b1u5-g02-e04",
            "en": "They want to open their own business.",
            "ar": "يريدون أن يفتحوا مشروعهم الخاص."
          },
          {
            "id": "le-b1-b1u5-g02-e05",
            "en": "Thank you for helping me with my homework.",
            "ar": "شكراً لك على مساعدتي في واجبي."
          },
          {
            "id": "le-b1-b1u5-g02-e06",
            "en": "It is important to plan your future early.",
            "ar": "من المهم أن تخطط لمستقبلك مبكراً."
          }
        ],
        "tips": [
          "بعد حروف الجر استخدم الصيغة الاسمية دائماً، ولا تستخدم الفعل في صيغته الأصلية.",
          "احفظ الأفعال الشائعة مع الصيغة التي تتبعها، فهذا أسرع طريق إلى الإتقان.",
          "بعض الأفعال يتغير معناها بحسب الصيغة التي تتبعها، فانتبه إلى السياق."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u5-v01",
        "en": "decision",
        "ar": "قرار",
        "pos": "noun",
        "emoji": "🧩",
        "example": {
          "en": "Moving abroad was the biggest decision of my life.",
          "ar": "كان الانتقال إلى الخارج أكبر قرار في حياتي."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v02",
        "en": "goal",
        "ar": "هدف",
        "pos": "noun",
        "emoji": "🥅",
        "example": {
          "en": "My main goal is to speak English fluently.",
          "ar": "هدفي الأساسي أن أتحدث الإنجليزية بطلاقة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v03",
        "en": "career",
        "ar": "مسار مهني",
        "pos": "noun",
        "emoji": "🚀",
        "example": {
          "en": "She wants a career in computer science.",
          "ar": "تريد مساراً مهنياً في علوم الحاسوب."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v04",
        "en": "university",
        "ar": "جامعة",
        "pos": "noun",
        "emoji": "🎓",
        "example": {
          "en": "I plan to study economics at university next year.",
          "ar": "أخطط لدراسة الاقتصاد في الجامعة العام القادم."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v05",
        "en": "degree",
        "ar": "شهادة جامعية",
        "pos": "noun",
        "emoji": "📜",
        "example": {
          "en": "She is studying for a degree in engineering.",
          "ar": "تدرس لنيل شهادة جامعية في الهندسة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v06",
        "en": "course",
        "ar": "دورة تدريبية",
        "pos": "noun",
        "emoji": "📚",
        "example": {
          "en": "This online course takes six months to finish.",
          "ar": "تستغرق هذه الدورة على الإنترنت ستة أشهر لإنهائها."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v07",
        "en": "qualification",
        "ar": "مؤهل",
        "pos": "noun",
        "emoji": "🏅",
        "example": {
          "en": "You need a teaching qualification for this job.",
          "ar": "تحتاج إلى مؤهل في التعليم لهذه الوظيفة."
        },
        "collocations": [
          {
            "id": "le-b1-b1u5-v07-c01",
            "en": "academic qualification",
            "ar": "مؤهل أكاديمي"
          }
        ]
      },
      {
        "id": "le-b1-b1u5-v08",
        "en": "graduate",
        "ar": "يتخرج",
        "pos": "verb",
        "emoji": "🎉",
        "example": {
          "en": "He will graduate from university next summer.",
          "ar": "سيتخرج من الجامعة في الصيف القادم."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v09",
        "en": "register",
        "ar": "يسجل",
        "pos": "verb",
        "emoji": "✍️",
        "example": {
          "en": "You must register for the exam before Friday.",
          "ar": "عليك أن تسجل في الامتحان قبل يوم الجمعة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v10",
        "en": "afford",
        "ar": "يستطيع تحمل التكلفة",
        "pos": "verb",
        "emoji": "💸",
        "example": {
          "en": "We cannot afford a long holiday this year.",
          "ar": "لا نستطيع تحمل تكلفة عطلة طويلة هذا العام."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v11",
        "en": "prepare",
        "ar": "يستعد أو يحضر",
        "pos": "verb",
        "emoji": "🧰",
        "example": {
          "en": "It is wise to prepare for the interview early.",
          "ar": "من الحكمة أن تستعد للمقابلة مبكراً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v12",
        "en": "abroad",
        "ar": "في الخارج",
        "pos": "adverb",
        "emoji": "✈️",
        "example": {
          "en": "Many students want to study abroad for a year.",
          "ar": "يريد كثير من الطلاب الدراسة في الخارج لمدة سنة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v13",
        "en": "determined",
        "ar": "مصمم",
        "pos": "adjective",
        "emoji": "🔒",
        "example": {
          "en": "She is determined to finish her studies this year.",
          "ar": "إنها مصممة على إنهاء دراستها هذا العام."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v14",
        "en": "flexible",
        "ar": "مرن",
        "pos": "adjective",
        "emoji": "🔄",
        "example": {
          "en": "Online courses are flexible and fit around my job.",
          "ar": "الدورات على الإنترنت مرنة وتناسب وقتي مع العمل."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u5-v15",
        "en": "revise",
        "ar": "يراجع الدروس",
        "pos": "verb",
        "emoji": "📖",
        "example": {
          "en": "I need to revise my notes before the test.",
          "ar": "أحتاج إلى مراجعة ملاحظاتي قبل الاختبار."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u5-s01",
        "en": "If you revise every day, you will pass the final exam.",
        "ar": "إذا راجعت دروسك كل يوم فستنجح في الامتحان النهائي."
      },
      {
        "id": "le-b1-b1u5-s02",
        "en": "If I had more money, I would study at a foreign university.",
        "ar": "لو كان لدي مال أكثر لدرست في جامعة أجنبية."
      },
      {
        "id": "le-b1-b1u5-s03",
        "en": "She has decided to register for an online course in design.",
        "ar": "قررت أن تسجل في دورة على الإنترنت في التصميم."
      },
      {
        "id": "le-b1-b1u5-s04",
        "en": "We are determined to finish this project before the deadline.",
        "ar": "نحن مصممون على إنهاء هذا المشروع قبل الموعد النهائي."
      },
      {
        "id": "le-b1-b1u5-s05",
        "en": "If they offered me a scholarship, I would accept it immediately.",
        "ar": "لو عرضوا علي منحة دراسية لقبلتها فوراً."
      },
      {
        "id": "le-b1-b1u5-s06",
        "en": "He wants to graduate and find a good job abroad.",
        "ar": "يريد أن يتخرج ويجد عملاً جيداً في الخارج."
      },
      {
        "id": "le-b1-b1u5-s07",
        "en": "Do you think you can afford a course like this one?",
        "ar": "هل تعتقد أنك تستطيع تحمل تكلفة دورة كهذه؟"
      },
      {
        "id": "le-b1-b1u5-s08",
        "en": "Learning a new skill is easier when you have a clear goal.",
        "ar": "تعلم مهارة جديدة أسهل عندما يكون لديك هدف واضح."
      },
      {
        "id": "le-b1-b1u5-s09",
        "en": "I am used to preparing my lessons the night before.",
        "ar": "لقد اعتدت تحضير دروسي في الليلة السابقة."
      },
      {
        "id": "le-b1-b1u5-s10",
        "en": "What would you do if you failed the first exam?",
        "ar": "ماذا ستفعل لو رسبت في الامتحان الأول؟"
      },
      {
        "id": "le-b1-b1u5-s11",
        "en": "She is good at planning her time and meeting deadlines.",
        "ar": "إنها بارعة في تنظيم وقتها والالتزام بالمواعيد النهائية."
      },
      {
        "id": "le-b1-b1u5-s12",
        "en": "If we start early, we will have more time to prepare.",
        "ar": "إذا بدأنا مبكراً سيكون لدينا وقت أكثر للاستعداد."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u5-d01",
        "who": "A",
        "en": "Have you decided what you will study next year?",
        "ar": "هل قررت ماذا ستدرس العام القادم؟"
      },
      {
        "id": "le-b1-b1u5-d02",
        "who": "B",
        "en": "Yes, I want to study computer science abroad.",
        "ar": "نعم، أريد أن أدرس علوم الحاسوب في الخارج."
      },
      {
        "id": "le-b1-b1u5-d03",
        "who": "A",
        "en": "That sounds exciting. Can you afford the tuition fees?",
        "ar": "يبدو ذلك مشوقاً. هل تستطيع تحمل الرسوم الدراسية؟"
      },
      {
        "id": "le-b1-b1u5-d04",
        "who": "B",
        "en": "I have applied for a scholarship, and I am quite determined.",
        "ar": "تقدمت بطلب لمنحة دراسية، وأنا مصمم تماماً."
      },
      {
        "id": "le-b1-b1u5-d05",
        "who": "A",
        "en": "If you get it, will you live on campus?",
        "ar": "إذا حصلت عليها، هل ستعيش داخل الحرم الجامعي؟"
      },
      {
        "id": "le-b1-b1u5-d06",
        "who": "B",
        "en": "Probably yes, and I would share a flat with a friend.",
        "ar": "على الأرجح نعم، وسأشارك شقة مع صديق."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u5-p-qualification",
        "sourceId": "qualification",
        "en": "qualification",
        "ipa": "/ˌkwɒlɪfɪˈkeɪʃən/",
        "ar": "مؤهل",
        "contrastPairs": [
          {
            "id": "le-b1-b1u5-p-qualification-c-01",
            "en": "live / leave",
            "ar": "ميّز /ɪ/ القصيرة عن /iː/ الطويلة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u5-p-qualification-s-01",
            "en": "If I had more time, I would revise every day.",
            "ar": "اربط had more وwould revise مع وضوح أدوات الشرط."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u5-p-qualification-i-01",
            "en": "If I receive the scholarship, I'll accept it. ↗ ... ↘",
            "ar": "نبرة معلقة في الشرط وهبوط عند النتيجة."
          }
        ]
      },
      {
        "id": "le-b1-b1u5-p-determined",
        "sourceId": "determined",
        "en": "determined",
        "ipa": "/dɪˈtɜːmɪnd/",
        "ar": "مصمم",
        "contrastPairs": [
          {
            "id": "le-b1-b1u5-p-determined-c-01",
            "en": "degree / agree",
            "ar": "قارن النبر وبداية /dʒ/ في degree مع /ə/ في agree."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u5-p-determined-s-01",
            "en": "I plan to study abroad next year.",
            "ar": "قد يختزل to إلى /tə/ في الكلام المتصل."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u5-p-determined-i-01",
            "en": "I could study locally, or I could apply abroad. ↗ ... ↘",
            "ar": "ارتفاع عند الخيار الأول وهبوط عند الخيار الأخير."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u5-l1-study-preposition",
        "sourceId": "study-preposition",
        "incorrect": "I am studying in university.",
        "corrected": "I am studying at university.",
        "pattern": "اختيار حرف الجر مع المؤسسة",
        "explanationAr": "يشيع at university للحديث عن الدراسة الجامعية كمؤسسة؛ وقد يتغير الحرف حسب المقصود والمكان.",
        "practice": []
      },
      {
        "id": "le-b1-b1u5-l1-if-will",
        "sourceId": "if-will",
        "incorrect": "If I will pass, I will graduate.",
        "corrected": "If I pass, I will graduate.",
        "pattern": "استخدام will داخل شرط المستقبل",
        "explanationAr": "في الشرط الأول نستخدم المضارع البسيط في جملة if، ثم will في النتيجة.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u5-a-require",
        "sourceId": "require",
        "term": "require",
        "meaningAr": "يتطلب",
        "example": {
          "en": "The programme requires a recognised qualification.",
          "ar": "يتطلب البرنامج مؤهلاً معترفاً به."
        },
        "paraphrasing": [
          {
            "original": "You need a degree for this role.",
            "paraphrase": "This role requires a degree."
          }
        ],
        "idioms": [
          {
            "phrase": "keep your options open",
            "meaningAr": "يبقي خياراته مفتوحة"
          }
        ],
        "readingAnalysis": [
          {
            "term": "requirement",
            "meaningAr": "شرط أو مؤهل مطلوب"
          }
        ]
      },
      {
        "id": "le-b1-b1u5-a-benefit",
        "sourceId": "benefit",
        "term": "benefit",
        "meaningAr": "فائدة أو منفعة",
        "example": {
          "en": "The course offers practical benefits for new graduates.",
          "ar": "تقدم الدورة فوائد عملية للخريجين الجدد."
        },
        "paraphrasing": [
          {
            "original": "The course is useful for graduates.",
            "paraphrase": "Graduates benefit from the course."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  },
  {
    "id": "le-b1-b1u6",
    "sourceId": "b1u6",
    "sourceLevel": "b1",
    "stage": "B1",
    "foundation": false,
    "deferred": false,
    "titleAr": "العلاقات والتواصل وحل المشكلات",
    "titleEn": "Relationships, Communication and Problem Solving",
    "icon": "🤗",
    "goalAr": "أن تتحدث عن علاقاتك الاجتماعية وتصف المشكلات وتقترح حلولاً وتعتذر وتتفاوض بلباقة.",
    "grammar": [
      {
        "id": "le-b1-b1u6-g01",
        "titleAr": "الجملة الشرطية الثالثة",
        "explainHtml": "نستخدم الجملة الشرطية الثالثة للحديث عن موقف خيالي في الماضي لم يحدث، وغالباً ما نستخدمها للتعبير عن الأسف أو اللوم. تكون جملة الشرط في الماضي التام، وتكون جملة النتيجة بصيغة المستقبل في الماضي ثم التصريف الثالث للفعل الرئيسي. أي أن الشرط لم يتحقق، ولذلك لم تتحقق النتيجة.",
        "explainText": "نستخدم الجملة الشرطية الثالثة للحديث عن موقف خيالي في الماضي لم يحدث، وغالباً ما نستخدمها للتعبير عن الأسف أو اللوم. تكون جملة الشرط في الماضي التام، وتكون جملة النتيجة بصيغة المستقبل في الماضي ثم التصريف الثالث للفعل الرئيسي. أي أن الشرط لم يتحقق، ولذلك لم تتحقق النتيجة.",
        "table": {
          "headers": [
            "جزء الجملة",
            "التركيب"
          ],
          "rows": [
            [
              "جملة الشرط",
              "الفعل المساعد في الماضي ثم التصريف الثالث للفعل"
            ],
            [
              "جملة النتيجة",
              "صيغة المستقبل في الماضي ثم التصريف الثالث للفعل"
            ],
            [
              "المعنى",
              "شرط لم يتحقق في الماضي ونتيجة لم تحدث"
            ],
            [
              "الاستخدام الشائع",
              "التعبير عن الأسف أو نقد قرار قديم"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u6-g01-e01",
            "en": "If I had studied harder, I would have passed the exam.",
            "ar": "لو درست بجد أكثر لنجحت في الامتحان."
          },
          {
            "id": "le-b1-b1u6-g01-e02",
            "en": "If she had known the truth, she would have told us.",
            "ar": "لو عرفت الحقيقة لأخبرتنا."
          },
          {
            "id": "le-b1-b1u6-g01-e03",
            "en": "We would have arrived earlier if we had left on time.",
            "ar": "لو خرجنا في الوقت المحدد لوصلنا أبكر."
          },
          {
            "id": "le-b1-b1u6-g01-e04",
            "en": "If he had apologized, she would have forgiven him.",
            "ar": "لو اعتذر لسامحته."
          },
          {
            "id": "le-b1-b1u6-g01-e05",
            "en": "I would not have said that if I had been calmer.",
            "ar": "لم أكن لأقول ذلك لو كنت أكثر هدوءاً."
          }
        ],
        "tips": [
          "الشرط الثالث يتحدث عن الماضي دائماً، فلا تستخدمه للخطط المستقبلية.",
          "يمكن تقديم جملة النتيجة على جملة الشرط مع بقاء التركيب نفسه.",
          "نستخدم هذا الشرط كثيراً للتعبير عن الأسف على ما لم يحدث."
        ]
      },
      {
        "id": "le-b1-b1u6-g02",
        "titleAr": "الجمل الوصلية لوصف الأشخاص والأشياء",
        "explainHtml": "نستخدم الجملة الوصلية لإضافة معلومة عن اسم سبقها دون أن نبدأ جملة جديدة. نختار ضمير الوصل بحسب الاسم الذي نصفه: فضمير خاص بالعاقل، وضمير خاص بغير العاقل، وضمير يدل على الملكية. وإذا كانت المعلومة ضرورية لفهم الجملة فلا نضع فاصلة، وإذا كانت إضافة غير ضرورية وضعناها بين فاصلتين.",
        "explainText": "نستخدم الجملة الوصلية لإضافة معلومة عن اسم سبقها دون أن نبدأ جملة جديدة. نختار ضمير الوصل بحسب الاسم الذي نصفه: فضمير خاص بالعاقل، وضمير خاص بغير العاقل، وضمير يدل على الملكية. وإذا كانت المعلومة ضرورية لفهم الجملة فلا نضع فاصلة، وإذا كانت إضافة غير ضرورية وضعناها بين فاصلتين.",
        "table": {
          "headers": [
            "نوع الاسم",
            "ضمير الوصل المناسب"
          ],
          "rows": [
            [
              "اسم عاقل",
              "ضمير الوصل الخاص بالعاقل"
            ],
            [
              "اسم غير عاقل",
              "ضمير الوصل الخاص بغير العاقل"
            ],
            [
              "اسم يدل على الملكية",
              "ضمير الوصل الدال على الملكية"
            ],
            [
              "معلومة ضرورية",
              "بدون فاصلة لأنها تحدد الاسم"
            ],
            [
              "معلومة إضافية",
              "بين فاصلتين لأن الاسم معروف"
            ]
          ]
        },
        "examples": [
          {
            "id": "le-b1-b1u6-g02-e01",
            "en": "The friend who helped me yesterday is a doctor.",
            "ar": "الصديق الذي ساعدني أمس طبيب."
          },
          {
            "id": "le-b1-b1u6-g02-e02",
            "en": "This is the book which changed my opinion.",
            "ar": "هذا هو الكتاب الذي غير رأيي."
          },
          {
            "id": "le-b1-b1u6-g02-e03",
            "en": "She has a neighbour whose garden is full of flowers.",
            "ar": "لديها جار حديقته مليئة بالأزهار."
          },
          {
            "id": "le-b1-b1u6-g02-e04",
            "en": "The city where I grew up is near the sea.",
            "ar": "المدينة التي نشأت فيها قريبة من البحر."
          },
          {
            "id": "le-b1-b1u6-g02-e05",
            "en": "My brother, who lives in Cairo, is visiting us.",
            "ar": "أخي، الذي يعيش في القاهرة، يزورنا الآن."
          }
        ],
        "tips": [
          "استخدم ضمير الوصل الخاص بالعاقل مع الأشخاص، وضمير غير العاقل مع الأشياء.",
          "لا تكرر الفاعل أو المفعول بعد ضمير الوصل، فالجملة الوصلية تكفي عنه.",
          "الأفعال المركبة شائعة في الجمل الوصلية، مثل أن تتفق مع شخص أو أن تتطلع إلى شيء."
        ]
      }
    ],
    "vocabulary": [
      {
        "id": "le-b1-b1u6-v01",
        "en": "relationship",
        "ar": "علاقة",
        "pos": "noun",
        "emoji": "💞",
        "example": {
          "en": "A good relationship needs trust and honest talks.",
          "ar": "العلاقة الجيدة تحتاج إلى ثقة وحديث صادق."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v02",
        "en": "trust",
        "ar": "ثقة",
        "pos": "noun",
        "emoji": "🔐",
        "example": {
          "en": "Trust is the most important part of any friendship.",
          "ar": "الثقة أهم جزء في أي صداقة."
        },
        "collocations": [
          {
            "id": "le-b1-b1u6-v02-c01",
            "en": "build trust",
            "ar": "يبني الثقة"
          }
        ]
      },
      {
        "id": "le-b1-b1u6-v03",
        "en": "argue",
        "ar": "يتجادل",
        "pos": "verb",
        "emoji": "💥",
        "example": {
          "en": "They sometimes argue about small things at home.",
          "ar": "يتجادلان أحياناً حول أمور صغيرة في البيت."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v04",
        "en": "apologize",
        "ar": "يعتذر",
        "pos": "verb",
        "emoji": "🙏",
        "example": {
          "en": "He decided to apologize for his rude words.",
          "ar": "قرر أن يعتذر عن كلماته الجارحة."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v05",
        "en": "support",
        "ar": "يدعم",
        "pos": "verb",
        "emoji": "🫂",
        "example": {
          "en": "My friends always support me when I have problems.",
          "ar": "يساندني أصدقائي دائماً عندما أواجه مشكلات."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v06",
        "en": "honest",
        "ar": "صادق",
        "pos": "adjective",
        "emoji": "🔍",
        "example": {
          "en": "Please be honest with me about this problem.",
          "ar": "كن صادقاً معي في هذه المشكلة من فضلك."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v07",
        "en": "misunderstand",
        "ar": "يسيء الفهم",
        "pos": "verb",
        "emoji": "❓",
        "example": {
          "en": "People often misunderstand each other in text messages.",
          "ar": "كثيراً ما يسيء الناس فهم بعضهم في الرسائل النصية."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v08",
        "en": "forgive",
        "ar": "يسامح",
        "pos": "verb",
        "emoji": "🕊️",
        "example": {
          "en": "It is not easy to forgive a close friend.",
          "ar": "ليس سهلاً أن تسامح صديقاً مقرباً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v09",
        "en": "solve",
        "ar": "يحل",
        "pos": "verb",
        "emoji": "🧩",
        "example": {
          "en": "We need to solve this problem together.",
          "ar": "علينا أن نحل هذه المشكلة معاً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v10",
        "en": "compromise",
        "ar": "تسوية",
        "pos": "noun",
        "emoji": "⚖️",
        "example": {
          "en": "Every good friendship needs a little compromise.",
          "ar": "كل صداقة جيدة تحتاج إلى قليل من التسوية."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v11",
        "en": "get on with",
        "ar": "يتفق مع أو ينسجم مع",
        "pos": "phrase",
        "emoji": "😊",
        "example": {
          "en": "I get on with my sister very well.",
          "ar": "أنا منسجم مع أختي تماماً."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v12",
        "en": "look forward to",
        "ar": "يتطلع إلى",
        "pos": "phrase",
        "emoji": "🌟",
        "example": {
          "en": "I look forward to meeting your family.",
          "ar": "أتطلع إلى لقاء عائلتك."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v13",
        "en": "make up",
        "ar": "يتصالح",
        "pos": "phrase",
        "emoji": "💫",
        "example": {
          "en": "They had a fight but decided to make up.",
          "ar": "تخاصما لكنهما قررا أن يتصالحا."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v14",
        "en": "kindness",
        "ar": "لطف",
        "pos": "noun",
        "emoji": "💛",
        "example": {
          "en": "Thank you for your kindness during a hard week.",
          "ar": "شكراً لك على لطفك في أسبوع صعب."
        },
        "collocations": []
      },
      {
        "id": "le-b1-b1u6-v15",
        "en": "patient",
        "ar": "صبور",
        "pos": "adjective",
        "emoji": "🧘",
        "example": {
          "en": "You must be patient when you teach children.",
          "ar": "عليك أن تكون صبوراً عندما تعلم الأطفال."
        },
        "collocations": []
      }
    ],
    "sentences": [
      {
        "id": "le-b1-b1u6-s01",
        "en": "If I had apologized earlier, we would not have argued.",
        "ar": "لو اعتذرت مبكراً لما تجادلنا."
      },
      {
        "id": "le-b1-b1u6-s02",
        "en": "She would have forgiven him if he had told the truth.",
        "ar": "لو قال الحقيقة لسامحته."
      },
      {
        "id": "le-b1-b1u6-s03",
        "en": "The friend who always supports me is my old classmate.",
        "ar": "الصديق الذي يساندني دائماً هو زميلي القديم."
      },
      {
        "id": "le-b1-b1u6-s04",
        "en": "We need to solve this problem before it becomes bigger.",
        "ar": "علينا حل هذه المشكلة قبل أن تكبر."
      },
      {
        "id": "le-b1-b1u6-s05",
        "en": "They argued for an hour, but they made up in the end.",
        "ar": "تجادلا لمدة ساعة، لكنهما تصالحا في النهاية."
      },
      {
        "id": "le-b1-b1u6-s06",
        "en": "If you had listened carefully, you would have understood her.",
        "ar": "لو استمعت بتركيز لفهمتها."
      },
      {
        "id": "le-b1-b1u6-s07",
        "en": "A good relationship is built on trust and honest words.",
        "ar": "العلاقة الجيدة تبنى على الثقة والكلام الصادق."
      },
      {
        "id": "le-b1-b1u6-s08",
        "en": "I look forward to meeting your family next weekend.",
        "ar": "أتطلع إلى لقاء عائلتك في نهاية الأسبوع القادم."
      },
      {
        "id": "le-b1-b1u6-s09",
        "en": "He apologized for the mistake and promised to be careful.",
        "ar": "اعتذر عن الخطأ ووعد بأن يكون حريصاً."
      },
      {
        "id": "le-b1-b1u6-s10",
        "en": "It is not easy to forgive someone who lied to you.",
        "ar": "ليس سهلاً أن تسامح شخصاً كذب عليك."
      },
      {
        "id": "le-b1-b1u6-s11",
        "en": "We should talk calmly instead of arguing about small things.",
        "ar": "علينا أن نتحدث بهدوء بدلاً من الجدال حول أمور صغيرة."
      },
      {
        "id": "le-b1-b1u6-s12",
        "en": "If they had compromised, everyone would have been happier.",
        "ar": "لو توصلا إلى تسوية لكان الجميع أكثر سعادة."
      }
    ],
    "dialogue": [
      {
        "id": "le-b1-b1u6-d01",
        "who": "A",
        "en": "You look upset. What happened with your brother?",
        "ar": "تبدو منزعجاً. ماذا حدث مع أخيك؟"
      },
      {
        "id": "le-b1-b1u6-d02",
        "who": "B",
        "en": "We argued about money, and now we are not talking.",
        "ar": "تجادلنا بشأن المال، والآن لا نتحدث."
      },
      {
        "id": "le-b1-b1u6-d03",
        "who": "A",
        "en": "If I were you, I would apologize first.",
        "ar": "لو كنت مكانك لاعتذرت أولاً."
      },
      {
        "id": "le-b1-b1u6-d04",
        "who": "B",
        "en": "Maybe you are right. I was not very patient with him.",
        "ar": "ربما أنت محق. لم أكن صبوراً معه."
      },
      {
        "id": "le-b1-b1u6-d05",
        "who": "A",
        "en": "A short honest talk can solve most problems.",
        "ar": "حديث صادق قصير قد يحل معظم المشكلات."
      },
      {
        "id": "le-b1-b1u6-d06",
        "who": "B",
        "en": "I will call him tonight and try to make up.",
        "ar": "سأتصل به الليلة وأحاول أن أصالحه."
      }
    ],
    "phonetics": [
      {
        "id": "le-b1-b1u6-p-misunderstand",
        "sourceId": "misunderstand",
        "en": "misunderstand",
        "ipa": "/ˌmɪsʌndəˈstænd/",
        "ar": "يسيء الفهم",
        "contrastPairs": [
          {
            "id": "le-b1-b1u6-p-misunderstand-c-01",
            "en": "think / this",
            "ar": "ميّز /θ/ المهموسة عن /ð/ المجهورة."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u6-p-misunderstand-s-01",
            "en": "I should have listened more carefully.",
            "ar": "قد تُنطق should have باختزال خفيف، مع بقاء معنى الندم على الماضي."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u6-p-misunderstand-i-01",
            "en": "I understand how you feel, but we need a solution. ↘↗ ... ↘",
            "ar": "هبوط متعاطف ثم ارتفاع قبل الاستدراك وهبوط عند الاقتراح."
          }
        ]
      },
      {
        "id": "le-b1-b1u6-p-compromise",
        "sourceId": "compromise",
        "en": "compromise",
        "ipa": "/ˈkɒmprəmaɪz/",
        "ar": "حل وسط",
        "contrastPairs": [
          {
            "id": "le-b1-b1u6-p-compromise-c-01",
            "en": "advice / advise",
            "ar": "تمييز نهاية /s/ في الاسم advice عن /z/ في الفعل advise."
          }
        ],
        "connectedSpeech": [
          {
            "id": "le-b1-b1u6-p-compromise-s-01",
            "en": "Let's talk it through before we decide.",
            "ar": "اربط talk it مع تشديد النبر على through وdecide."
          }
        ],
        "intonation": [
          {
            "id": "le-b1-b1u6-p-compromise-i-01",
            "en": "Would you be willing to meet halfway? ↘↗",
            "ar": "هبوط مهذب يتبعه ارتفاع خفيف لفتح باب التفاوض."
          }
        ]
      }
    ],
    "l1Transfers": [
      {
        "id": "le-b1-b1u6-l1-apologize-preposition",
        "sourceId": "apologize-preposition",
        "incorrect": "I apologized from my friend.",
        "corrected": "I apologized to my friend.",
        "pattern": "نقل حرف الجر بعد الاعتذار",
        "explanationAr": "نستخدم apologize to للشخص وapologize for للخطأ أو الفعل.",
        "practice": []
      },
      {
        "id": "le-b1-b1u6-l1-look-forward-gerund",
        "sourceId": "look-forward-gerund",
        "incorrect": "I look forward to meet you.",
        "corrected": "I look forward to meeting you.",
        "pattern": "استخدام المصدر بعد to في تعبير ثابت",
        "explanationAr": "في look forward to تكون to حرف جر، لذلك يتبعها اسم أو فعل بـ-ing.",
        "practice": []
      }
    ],
    "academicFocus": [
      {
        "id": "le-b1-b1u6-a-resolve",
        "sourceId": "resolve",
        "term": "resolve",
        "meaningAr": "يحل أو يعالج (مشكلة)",
        "example": {
          "en": "The two colleagues resolved the disagreement calmly.",
          "ar": "حل الزميلان الخلاف بهدوء."
        },
        "paraphrasing": [
          {
            "original": "They found an answer to the problem.",
            "paraphrase": "They resolved the problem."
          }
        ],
        "idioms": [
          {
            "phrase": "clear the air",
            "meaningAr": "يضع حداً للتوتر بإجراء نقاش صريح"
          }
        ],
        "readingAnalysis": [
          {
            "term": "resolution",
            "meaningAr": "الطريقة أو النتيجة التي تنتهي بها المشكلة"
          }
        ]
      },
      {
        "id": "le-b1-b1u6-a-communicate",
        "sourceId": "communicate",
        "term": "communicate",
        "meaningAr": "يتواصل أو ينقل معنى",
        "example": {
          "en": "Clear language helps people communicate their needs.",
          "ar": "تساعد اللغة الواضحة الناس على التعبير عن احتياجاتهم."
        },
        "paraphrasing": [
          {
            "original": "They talked openly about the issue.",
            "paraphrase": "They communicated openly about the issue."
          }
        ],
        "idioms": [],
        "readingAnalysis": []
      }
    ]
  }
];
