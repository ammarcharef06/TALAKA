/* طَلَاقَة — موجّه بسيط بين الشاشات (AA: كل شاشة تعرض، والتنقل صريح) */
export type ScreenName = 'gate' | 'acceptance' | 'exam' | 'result' | 'card' | 'building' | 'classroom' | 'lesson' | 'review' | 'cafe';

type Renderer = (root: HTMLElement) => void;
const renderers = new Map<ScreenName, Renderer>();

export function registerScreen(name: ScreenName, renderer: Renderer): void {
  renderers.set(name, renderer);
}

export function go(name: ScreenName): void {
  const root = document.getElementById('app');
  if (!root) return;
  const renderer = renderers.get(name);
  if (!renderer) throw new Error(`شاشة غير مسجلة: ${name}`);
  window.scrollTo(0, 0);
  root.classList.remove('screen-enter');
  renderer(root);
  // إعادة تشغيل أنميشن الدخول بلطف
  requestAnimationFrame(() => root.classList.add('screen-enter'));
}
