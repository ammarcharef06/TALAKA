/* طَلَاقَة — الاستماع الصوتي عبر Web Speech API (بلا تكلفة، يعمل محلياً، بلا مفاتيح) */

/** نطق نص بلغة المتحدث: عربي للشرح، إنجليزي للحوار */
export function speakText(text: string): void {
  if (!speechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // جملة جديدة تلغي السابقة — لا تراكم
  const utterance = new SpeechSynthesisUtterance(text);
  const isArabic = /[\u0600-\u06FF]/.test(text);
  utterance.lang = isArabic ? 'ar-SA' : 'en-US';
  utterance.rate = isArabic ? 0.98 : 0.92;
  utterance.pitch = 1;
  synth.speak(utterance);
}

/** نطق جملة إنجليزية بصوت المتحدث */
export function speakEnglish(text: string): void {
  if (!speechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // جملة جديدة تلغي السابقة — لا تراكم
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.92;
  utterance.pitch = 1;
  synth.speak(utterance);
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
