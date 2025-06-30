
// sw.js - Service Worker básico

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('urgencias-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/icono.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
