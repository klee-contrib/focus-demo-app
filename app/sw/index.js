const CACHE_NAME = 'FOCUS-DOC-v1';

const filesToCache = [
    './',
    '/focus-demo-app.js',
    './focus-demo-app.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(filesToCache))
  );
});



self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if(response){
        return response;
      }
      return fetch(e.request);
    })
  )
});
