/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'sp-s-app';

const assetsUrl = ['index.html'];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(assetsUrl);
});

self.addEventListener('activate', async () => {
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter((name) => name !== CACHE_NAME)
      .map((name) => caches.delete(name)),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === location.origin)
    event.respondWith(cacheFirst(event.request));
  else event.respondWith(networkFirst(event.request));
});

const cacheFirst = async (req) => {
  const cached = await caches.match(req);
  if (cached) return cached;
  return await fetch(req);
};

const networkFirst = async (req) => {
  const cache = await caches.open(CACHE_NAME);
  try {
    const data = await fetch(req);
    await cache.put(req, data.clone());
    return data;
  } catch (error) {
    return caches.match(req);
  }
};
