"use client";

import { useEffect } from "react";

export default function ServiceWorkerInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the service worker registration logic
      import("@/workers/action.js").catch(console.error);
    }
  }, []);

  return null;
}
