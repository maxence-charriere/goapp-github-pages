const cacheName = "app-" + "c185f1f154ee1c0eb6f8ad36faa0c3c8bd874bab";

self.addEventListener("install", event => {
  console.log("installing app worker c185f1f154ee1c0eb6f8ad36faa0c3c8bd874bab");
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        "/",
        "/app.css",
        "/app.js",
        "/manifest.json",
        "/wasm_exec.js",
        "/web/app.wasm",
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
  console.log("app worker c185f1f154ee1c0eb6f8ad36faa0c3c8bd874bab is activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
