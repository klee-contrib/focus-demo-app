const CACHE_NAME = 'FOCUS-DOC-v1';

const filesToCache = [
    '/focus-demo-app/app/sw/',
    '/focus-demo-app/app/sw/app.js',
    '/focus-demo-app/app/sw/toCache.js'
];

self.addEventListener('install', e => {
  console.log('install');
  e.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => {console.log('cache', cache); return cache;})
          .then(cache => cache.addAll(filesToCache))
          .catch(err => console.error('err', err))
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
