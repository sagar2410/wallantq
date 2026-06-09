// Wallantq Service Worker — cache-first for Hostinger assets + background prefetch
const CACHE_VERSION = 'wallantq-v4';
const ASSET_HOST = 'assets.wallantq.com';

// On install — take control immediately
self.addEventListener('install', () => self.skipWaiting());

// On activate — clear old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Cache-first for all assets (Sanity and R2)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch { return; }

  const isSanity = url.hostname === 'cdn.sanity.io';
  const isLegacy = url.hostname === ASSET_HOST;
  if (!isSanity && !isLegacy) return;

  const isImage = /\.(png|jpe?g|webp|avif)(\?.*)?$/i.test(url.pathname);
  const isVideo = /\.mp4(\?.*)?$/i.test(url.pathname);
  if (!isImage && !isVideo) return;

  // Let browser handle video Range requests natively
  if (isVideo && req.headers.get('range')) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const response = await fetch(req);
        const isOpaque = response.type === 'opaque';
        if ((response.ok && response.status === 200) || isOpaque) {
          cache.put(req, response.clone());
        }
        return response;
      } catch {
        return cached || new Response('', { status: 503 });
      }
    })
  );
});

// Background prefetch — called once after page load with all image URLs
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'PREFETCH_IMAGES') return;
  const urls = Array.isArray(event.data.urls) ? event.data.urls : [];
  if (!urls.length) return;

  // Stagger requests 400 ms apart so we don't flood the connection
  let i = 0;
  function next() {
    if (i >= urls.length) return;
    const url = urls[i++];
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(url);
      if (!cached) {
        fetch(url, { priority: 'low' }).then((res) => {
          if (res.ok && res.status === 200) cache.put(url, res);
        }).catch(() => {});
      }
    });
    setTimeout(next, 400);
  }
  // Start after a 3 s delay — let the page finish its own requests first
  setTimeout(next, 3000);
});
