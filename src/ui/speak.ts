/* طَلَاقَة — الاستماع الصوتي عبر Web Speech API (بلا تكلفة، يعمل محلياً، بلا مفاتيح) */
import { SettingsEngine } from '../engine/settings';

/** نطق نص بلغة المتحدث: عربي للشرح، إنجليزي للحوار */
export function speakText(text: string): void {
  if (!speechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // جملة جديدة تلغي السابقة — لا تراكم
  const utterance = new SpeechSynthesisUtterance(text);
  const isArabic = /[\u0600-\u06FF]/.test(text);
  const voice = SettingsEngine.tts();
  utterance.lang = isArabic ? 'ar-SA' : voice.lang;
  utterance.rate = isArabic ? 0.98 : voice.rate;
  utterance.pitch = 1;
  synth.speak(utterance);
}

/** نطق جملة إنجليزية بصوت المتحدث — السرعة واللهجة من مكتب شؤون الطلاب */
export function speakEnglish(text: string): void {
  if (!speechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // جملة جديدة تلغي السابقة — لا تراكم
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = SettingsEngine.tts();
  utterance.lang = voice.lang;
  utterance.rate = voice.rate;
  utterance.pitch = 1;
  synth.speak(utterance);
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
