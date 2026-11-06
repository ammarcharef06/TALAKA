/* طَلَاقَة — Service Worker: السيادة أولاً
   استراتيجية:
   - التنقل (HTML): network-first مع رجوع للنسخة المخزنة (تعمل بلا إنترنت بعد أول زيارة)
   - الأصول الثابتة (JS/CSS/fonts/svg): cache-first مع تحديث في الخلفية
   - لا طلبات خارجية إطلاقاً
*/
const CACHE = 'talaqa-v14';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => undefined));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // صفر اتصال خارجي

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) => {
      const fetching = fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || fetching;
    })
  );
});
