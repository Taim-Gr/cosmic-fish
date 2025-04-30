"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Register the service worker
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            console.log("Service Worker update found!");

            newWorker.addEventListener("statechange", () => {
              console.log("Service Worker state changed:", newWorker.state);

              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // New content is available, show update prompt
                if (
                  window.confirm("New version available! Click OK to update.")
                ) {
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });

      // Handle controller change
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        console.log("Service Worker controller changed");
      });
    }
  }, []);

  return null;
}
