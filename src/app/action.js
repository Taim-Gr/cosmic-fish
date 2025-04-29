"use server";

import webpush from "web-push";

// Validate environment variables
if (
  !process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ||
  !process.env.VAPID_PRIVATE_KEY
) {
  throw new Error(
    "Missing VAPID keys. Please set NEXT_PUBLIC_VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY environment variables."
  );
}

// Initialize web-push with VAPID details
webpush.setVapidDetails(
  process.env.NOTIFICATION_EMAIL || "mailto:your-email@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// In-memory storage (replace with database in production)
const subscriptions = new Map();

export async function subscribeUser(sub) {
  try {
    // Store subscription with a unique identifier
    const subscriptionId = crypto.randomUUID();
    subscriptions.set(subscriptionId, sub);

    return {
      success: true,
      subscriptionId,
    };
  } catch (error) {
    console.error("Error subscribing user:", error);
    return {
      success: false,
      error: "Failed to subscribe user",
    };
  }
}

export async function unsubscribeUser(subscriptionId) {
  try {
    if (!subscriptions.has(subscriptionId)) {
      return {
        success: false,
        error: "Subscription not found",
      };
    }

    subscriptions.delete(subscriptionId);
    return { success: true };
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return {
      success: false,
      error: "Failed to unsubscribe user",
    };
  }
}

export async function sendNotification(message, subscriptionId) {
  try {
    const subscription = subscriptions.get(subscriptionId);

    if (!subscription) {
      return {
        success: false,
        error: "No subscription found",
      };
    }

    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Cosmic Fishing",
        body: message,
        icon: "/icons/android-chrome-192x192.png",
        badge: "/icons/android-chrome-192x192.png",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
        },
        actions: [
          {
            action: "explore",
            title: "Go to the site",
          },
        ],
      })
    );

    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);

    // If the subscription is no longer valid, remove it
    if (error.statusCode === 410) {
      subscriptions.delete(subscriptionId);
    }

    return {
      success: false,
      error: "Failed to send notification",
    };
  }
}
