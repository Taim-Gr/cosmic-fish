"use client";

import { useState, useEffect } from "react";
import "./installPrompt.css";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);

    const checkStandalone = () => {
      const isStandaloneMode = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      const isFullscreen = window.matchMedia(
        "(display-mode: fullscreen)"
      ).matches;
      const isMinimalUI = window.matchMedia(
        "(display-mode: minimal-ui)"
      ).matches;
      setIsStandalone(isStandaloneMode || isFullscreen || isMinimalUI);
    };

    checkStandalone();

    window
      .matchMedia("(display-mode: standalone)")
      .addEventListener("change", checkStandalone);
    window
      .matchMedia("(display-mode: fullscreen)")
      .addEventListener("change", checkStandalone);
    window
      .matchMedia("(display-mode: minimal-ui)")
      .addEventListener("change", checkStandalone);

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    return () => {
      window
        .matchMedia("(display-mode: standalone)")
        .removeEventListener("change", checkStandalone);
      window
        .matchMedia("(display-mode: fullscreen)")
        .removeEventListener("change", checkStandalone);
      window
        .matchMedia("(display-mode: minimal-ui)")
        .removeEventListener("change", checkStandalone);
      window.removeEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
      });
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      }
      setDeferredPrompt(null);
    }
  };

  if (isStandalone) {
    return null;
  }

  if (!deferredPrompt && !isIOS) {
    return null;
  }

  return (
    <div className="install-prompt">
      {!isIOS && deferredPrompt && (
        <>
          <h3>Install App</h3>
          <button onClick={handleInstallClick} className="install-button">
            Add to Home Screen
          </button>
        </>
      )}
      {isIOS && !isStandalone && (
        <>
          <h3>Install App</h3>
          <p>
            To install this app on your iOS device, tap the share button
            <span role="img" aria-label="share icon">
              {" "}
              ⎋{" "}
            </span>
            and then &ldquo;Add to Home Screen&rdquo;
            <span role="img" aria-label="plus icon">
              {" "}
              ➕{" "}
            </span>
            .
          </p>
        </>
      )}
    </div>
  );
}

export default InstallPrompt;
