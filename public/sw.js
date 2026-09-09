// Retire the old portfolio cache so navigation and unhashed images cannot stay stale.
globalThis.addEventListener("install", () => globalThis.skipWaiting());
globalThis.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("ubaid-portfolio"))
          .map((key) => caches.delete(key)),
      );
      await globalThis.registration.unregister();
    })(),
  );
});
