const cacheName = "KarasWebsite";

var filesToCache = [
    "./",
    "./index.html",
    "./bundle.css",
    "./global.css",
    "./bundle.js",
    "./components.css",
    "./profile.webp",
    "./vector.svg",
    "https://fonts.googleapis.com/css?family=Lato&display=swap"
];
self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.onactivate = function(event) {
    console.log("sw is up and running!");
};

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(thisCacheName) {
                    if (thisCacheName !== cacheName) {
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener("fetch", e => {
    e.respondWith(
        (async function() {
            const response = await caches.match(e.request);
            return response || fetch(e.request);
        })()
    );
});
