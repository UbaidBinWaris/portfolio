// Service Worker for lightweight asset caching without stale HTML shell issues.
const STATIC_CACHE = 'ubaid-portfolio-static-v4';

const PRECACHE_URLS = [
  '/manifest.json',
  '/favicon.ico',
  '/me.jpg',
  '/og-image.jpg',
];

function isCacheableStaticAsset(pathname) {
  return (
    pathname.startsWith('/_next/static/') ||
    pathname.startsWith('/images/') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.mjs') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.woff') ||
    pathname.endsWith('.woff2')
  );
}

globalThis.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {
        // Silent fail: SW should still install even if precache fails.
      })
  );

  globalThis.skipWaiting();
});

globalThis.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );

  globalThis.clients.claim();
});

globalThis.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);

  // Ignore third-party requests and API endpoints.
  if (requestUrl.origin !== globalThis.location.origin || requestUrl.pathname.startsWith('/api/')) {
    return;
  }

  // Never serve navigation requests from cache to avoid stale Next.js HTML/chunk mismatches.
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request));
    return;
  }

  if (!isCacheableStaticAsset(requestUrl.pathname)) {
    return;
  }

  // Stale-while-revalidate for static assets.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse?.status === 200 && networkResponse.type === 'basic') {
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }

          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});
