/* Chronos 2 — offline support.
   The page itself comes from the network when you're online (so updates show up right away)
   and from this device when you're not. Icons and other files are served from this device first. */
const CACHE = 'chronos2-v6';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-v3.svg',
  './icons/icon-192-v3.png',
  './icons/icon-512-v3.png',
  './icons/icon-maskable-512-v3.png',
  './icons/apple-touch-icon-v3.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(url => cache.add(new Request(url, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('chronos2-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type === 'cache-page' && typeof data.url === 'string') {
    const url = new URL(data.url);
    if (url.origin === self.location.origin) {
      event.waitUntil(caches.open(CACHE).then(c => c.add(new Request(url.href, { cache: 'reload' }))).catch(() => {}));
    }
  }
});

const withTimeout = (p, ms) => Promise.race([p, new Promise(res => setTimeout(() => res(null), ms))]);

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const network = fetch(req, req.mode === 'navigate' ? { cache: 'no-cache' } : undefined).then(res => {
      if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
      return res;
    }).catch(() => null);

    if (req.mode === 'navigate') {
      const fresh = await withTimeout(network, 3000);
      if (fresh) return fresh;
      const page = await cache.match(req, { ignoreSearch: true }) || await cache.match('./', { ignoreSearch: true }) || await cache.match('./index.html', { ignoreSearch: true });
      if (page) { event.waitUntil(network); return page; }
      const late = await network;
      if (late) return late;
      return new Response('Offline', { status: 503, statusText: 'Offline', headers: { 'Content-Type': 'text/plain' } });
    }

    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) { event.waitUntil(network); return cached; }
    const res = await network;
    return res || new Response('', { status: 504, statusText: 'Offline' });
  })());
});
