/* ═══════════════════════════════════════════════════════════════
   طَلَاقَة — محرك مطابقة النطق (Voice matching)
   بلا استدعاء سحابي: مطابقة رمادية مع قائمة عبارات مقبولة
   strong = فهمك بوضوح · weak = سمعك تقريباً (يكفي بعد التلميح)
   ═══════════════════════════════════════════════════════════════ */

export type VoiceMatch = 'strong' | 'weak' | 'miss';

/** تطبيع النص: أحرف صغيرة، إزالة علامات الترقيم والأقواس العربية والإنجليزيات */
export function normalizeUtterance(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u060C\u061B\u061F,;:!?.()\[\]{}«»"'’‘–—_\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  const norm = normalizeUtterance(text);
  return norm ? norm.split(' ') : [];
}

/** مسافة تعديل واحدة على الأكثر — تتسامح مع حرف ناقص/زائد/مقلوب */
function isWithinOneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i += 1;
      j += 1;
      continue;
    }
    edits += 1;
    if (edits > 1) return false;
    if (a.length > b.length) i += 1;
    else if (b.length > a.length) j += 1;
    else {
      i += 1;
      j += 1;
    }
  }
  if (i < a.length || j < b.length) edits += 1;
  return edits <= 1;
}

/** هل يحتوي النطق على أيٍّ من الكلمات المقبولة؟ */
export function matchUtterance(utterance: string, keywords: string[]): VoiceMatch {
  const norm = normalizeUtterance(utterance);
  if (!norm) return 'miss';
  const tokens = tokenize(utterance);
  let weak = false;

  for (const keyword of keywords) {
    const kw = normalizeUtterance(keyword);
    if (!kw) continue;

    // عبارة من كلمتين أو أكثر: يجب أن ترد كاملة
    if (kw.includes(' ')) {
      if (norm.includes(kw)) return 'strong';
      continue;
    }

    for (const token of tokens) {
      if (token === kw) return 'strong';
      // اشتقاق بسيط: thanks / thank، sandwiches / sandwich
      if (kw.length >= 4 && token.startsWith(kw)) return 'strong';
      // خطأ نطق محتمل بحرف واحد: cofee / coffee
      if (kw.length >= 4 && isWithinOneEdit(token, kw)) weak = true;
    }
  }

  return weak ? 'weak' : 'miss';
}

export const VOICE_SUPPORTED: boolean =
  typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

/** نسخة متوافقة مع كل المتصفحات من منشئ SpeechRecognition */
export function getSpeechRecognitionCtor(): (new () => unknown) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as Record<string, unknown>;
  const ctor = (w.SpeechRecognition ?? w.webkitSpeechRecognition) as (new () => unknown) | undefined;
  return typeof ctor === 'function' ? ctor : null;
}
