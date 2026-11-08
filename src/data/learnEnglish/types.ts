/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — أنواع بيانات Learn-English المستخرجة
   هذه الأنواع تصف مخرجات tools/import/learn-english.mjs المطبّعة.
   البيانات المولّدة في curriculum.generated.ts وreadings.generated.ts
   لا تُعدّل يدوياً؛ أعد التوليد من content/learn-english/*.json.
   ═══════════════════════════════════════════════════════════════ */

export type LearnEnglishStage = 'S0' | 'A1' | 'A2' | 'B1';

export interface LearnEnglishSourceFile {
  path: string;
  sha256: string;
  bytes: number;
}

export interface LearnEnglishSource {
  name: string;
  repository: string;
  commit: string;
  commitDate: string;
  dirty: boolean;
  fingerprint: string;
  files: LearnEnglishSourceFile[];
}

export interface LearnEnglishExample {
  id: string;
  en: string;
  ar: string;
}

export interface LearnEnglishBilingual {
  en: string;
  ar: string;
}

export interface LearnEnglishTable {
  headers: string[];
  rows: string[][];
}

export interface LearnEnglishGrammar {
  id: string;
  titleAr: string;
  explainHtml: string;
  explainText: string;
  table: LearnEnglishTable | null;
  examples: LearnEnglishExample[];
  tips: string[];
}

export interface LearnEnglishCollocation {
  id: string;
  en: string;
  ar: string;
  example?: LearnEnglishBilingual;
}

export interface LearnEnglishVocabulary {
  id: string;
  en: string;
  ar: string;
  pos?: string;
  emoji?: string;
  example: LearnEnglishBilingual;
  collocations: LearnEnglishCollocation[];
}

export interface LearnEnglishSentence {
  id: string;
  en: string;
  ar: string;
}

export interface LearnEnglishDialogueLine {
  id: string;
  who: string;
  en: string;
  ar: string;
}

export interface LearnEnglishPhoneticPair {
  id: string;
  en: string;
  ar: string;
}

export interface LearnEnglishPhonetics {
  id: string;
  sourceId?: string;
  en: string;
  ipa: string;
  ar: string;
  contrastPairs: LearnEnglishPhoneticPair[];
  connectedSpeech: LearnEnglishPhoneticPair[];
  intonation: LearnEnglishPhoneticPair[];
}

export interface LearnEnglishTransfer {
  id: string;
  sourceId?: string;
  incorrect: string;
  corrected: string;
  pattern?: string;
  explanationAr: string;
  practice: unknown[];
}

export interface LearnEnglishParaphrase {
  original: string;
  paraphrase: string;
}

export interface LearnEnglishIdiom {
  phrase: string;
  meaningAr: string;
}

export interface LearnEnglishReadingTerm {
  term: string;
  meaningAr: string;
}

export interface LearnEnglishAcademicTerm {
  id: string;
  sourceId?: string;
  term: string;
  meaningAr: string;
  example: LearnEnglishBilingual;
  paraphrasing: LearnEnglishParaphrase[];
  idioms: LearnEnglishIdiom[];
  readingAnalysis: LearnEnglishReadingTerm[];
}

export interface LearnEnglishUnit {
  id: string;
  sourceId: string;
  sourceLevel: string;
  stage: LearnEnglishStage;
  foundation: boolean;
  deferred: boolean;
  titleAr: string;
  titleEn: string;
  icon?: string;
  goalAr: string;
  grammar: LearnEnglishGrammar[];
  vocabulary: LearnEnglishVocabulary[];
  sentences: LearnEnglishSentence[];
  dialogue: LearnEnglishDialogueLine[];
  phonetics: LearnEnglishPhonetics[];
  l1Transfers: LearnEnglishTransfer[];
  academicFocus: LearnEnglishAcademicTerm[];
}

export interface LearnEnglishReadingWord {
  id: string;
  en: string;
  ar: string;
}

export interface LearnEnglishReadingQuestion {
  id: string;
  question: string;
  questionAr: string;
  options: string[];
  answer: number;
  explanationAr: string;
}

export interface LearnEnglishReading {
  id: string;
  sourceId: string;
  sourceLevel: string;
  stage: LearnEnglishStage;
  foundation: boolean;
  title: string;
  titleAr: string;
  emoji?: string;
  text: string;
  textAr: string;
  wordCount: number;
  words: LearnEnglishReadingWord[];
  questions: LearnEnglishReadingQuestion[];
}
