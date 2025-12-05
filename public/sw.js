// Service Worker for PWA functionality
const CACHE_NAME = 'ubaid-portfolio-v2';
const ALLOWED_ORIGINS = ['https://uabidbinwaris.dev', 'https://www.uabidbinwaris.dev'];
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/me.jpg',
  '/og-image.jpg',
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch((err) => {
          console.error('Cache addAll failed:', err);
        });
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Security: Only cache same-origin or allowed origins
  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isAllowedOrigin = ALLOWED_ORIGINS.includes(requestUrl.origin);

  if (!isSameOrigin && !isAllowedOrigin) {
    // Don't cache third-party requests
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - validate before returning
        if (response) {
          // Check if response is still valid (not corrupted)
          if (response.ok || response.type === 'opaque') {
            return response;
          }
        }
        
        return fetch(event.request).then(
          (response) => {
            // Check if valid response
            if (!response || response.status !== 200 || 
                (response.type !== 'basic' && response.type !== 'cors')) {
              return response;
            }

            // Don't cache API responses or dynamic content
            if (requestUrl.pathname.startsWith('/api/')) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              })
              .catch((err) => {
                console.error('Cache put failed:', err);
              });

            return response;
          }
        ).catch((err) => {
          console.error('Fetch failed:', err);
          // Return cached version if fetch fails
          return caches.match(event.request);
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  return self.clients.claim();
});
