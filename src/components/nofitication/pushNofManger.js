"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "@/app/action";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setIsSupported(true);
    }
  }, []);

  async function subscribeToPush() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setSubscription(true);
        await subscribeUser({});
      }
    } catch (error) {
      console.error("Error subscribing to notifications:", error);
    }
  }

  async function unsubscribeFromPush() {
    try {
      setSubscription(null);
      await unsubscribeUser();
    } catch (error) {
      console.error("Error unsubscribing from notifications:", error);
    }
  }

  async function sendTestNotification() {
    if (subscription) {
      try {
        await sendNotification(message);
        setMessage("");
      } catch (error) {
        console.error("Error sending test notification:", error);
      }
    }
  }

  if (!isSupported) {
    return <p>Notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <h3>Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendTestNotification}>Send Test</button>
        </>
      ) : (
        <>
          <p>You are not subscribed to notifications.</p>
          <button onClick={subscribeToPush}>Subscribe</button>
        </>
      )}
    </div>
  );
}
