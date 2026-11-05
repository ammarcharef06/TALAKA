import rulesJson from './items/rules.json';
import vocabJson from './items/vocab.json';
import readingJson from './items/reading.json';
import type { Cefr, Item, SectionId } from '../types';

interface RawItem {
  id: string;
  cefr: string;
  difficulty: number;
  tags: string[];
  question: string;
  passage?: string;
  options: string[];
  answer: number;
  explanation: string;
}
interface RawFile {
  section: string;
  items: RawItem[];
}

function normalize(section: SectionId, raw: RawFile): Item[] {
  return raw.items.map((r) => ({
    id: r.id,
    section,
    cefr: r.cefr as Cefr,
    difficulty: r.difficulty,
    tags: r.tags,
    question: r.question,
    ...(r.passage ? { passage: r.passage } : {}),
    options: r.options as Item['options'],
    answer: r.answer,
    explanation: r.explanation,
  }));
}

export const ITEM_BANK: Item[] = [
  ...normalize('rules', rulesJson as unknown as RawFile),
  ...normalize('vocab', vocabJson as unknown as RawFile),
  ...normalize('reading', readingJson as unknown as RawFile),
];

export const ITEMS_PER_SECTION = 6;
export const TOTAL_QUESTIONS = ITEMS_PER_SECTION * 3;
