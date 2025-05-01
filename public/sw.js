const cacheName = "cosmic-fish-v1";
const assets = [
  "/",
  "/manifest.json",

  // Videos
  "/videos/earthmoving.webm",

  // Images
  "/images/001-01.svg",

  "/images/002-01.svg",
  "/images/anchor.svg",
  "/images/boat.svg",
  "/images/coin_11280638.svg",
  "/images/crown_6941697.svg",
  "/images/rocket.svg",
  "/images/star-badge_11173836.svg",
  "/images/up-arrow_11019649.svg",

  // Icons
  "/icons/android-144x144.png",
  "/icons/android-192x192.png",
  "/icons/android-36x36.png",
  "/icons/android-48x48.png",
  "/icons/android-72x72.png",
  "/icons/android-96x96.png",
  "/icons/android-chrome-192x192.png",
  "/icons/android-chrome-512x512.png",
  "/icons/android-chrome-maskable-192x192.png",
  "/icons/android-chrome-maskable-512x512.png",

  // Fonts
  "/fonts/AirStrike/airstrike.ttf",
  "/fonts/Press_Start_2P/PressStart2P-Regular.ttf",
];

self.addEventListener("install", (event) => {
  console.log("[SW] Install event");
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("[SW] Caching assets...");
        return cache.addAll(assets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error("[SW] Cache error:", err);
      })
  );
});
self.addEventListener("activate", (event) => {
  event.awaitUntil(
    caches.keys().then((cashKeys) => {
      return Promise.all(
        cashKeys
          .filter((key) => key !== cacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("api-game.bloque.app")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => response)
        .catch((error) => {
          return new Response(
            JSON.stringify({
              error: "You are offline",
              data: null,
              offline: true,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(cacheName).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }

          return Promise.reject(error);
        });
    })
  );
});
