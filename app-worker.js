const cacheName = "app-" + "ea8f44e69e76fcdfb8193135be1d500044af1900";

self.addEventListener("install", event => {
  console.log("installing app worker ea8f44e69e76fcdfb8193135be1d500044af1900");
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        "/goapp-github-pages",
        "/goapp-github-pages/app.css",
        "/goapp-github-pages/app.js",
        "/goapp-github-pages/manifest.json",
        "/goapp-github-pages/wasm_exec.js",
        "/goapp-github-pages/web/app.wasm",
        "https://storage.googleapis.com/murlok-github/icon-192.png",
        "https://storage.googleapis.com/murlok-github/icon-512.png",
        
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  console.log("app worker ea8f44e69e76fcdfb8193135be1d500044af1900 is activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
