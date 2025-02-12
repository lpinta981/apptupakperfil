self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/apptupakperfil/',
        '/apptupakperfil/index.html',
        '/apptupakperfil/manifest.json',
        'https://i.postimg.cc/zBPmbxNT/TRANSPARENTE-min.png'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});