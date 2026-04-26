"use client";
import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      let hasRefreshed = false;

      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // Force a background update check on every page load.
          registration.update().catch(() => {});
        })
        .catch(() => {
          // Silent in production.
        });

      const handleControllerChange = () => {
        if (hasRefreshed) {
          return;
        }

        hasRefreshed = true;
        globalThis.location.reload();
      };

      navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

      return () => {
        navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
      };
    }

    return undefined;
  }, []);

  return null;
}
