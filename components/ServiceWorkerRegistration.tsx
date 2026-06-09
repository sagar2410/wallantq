"use client";
import { useEffect } from "react";
import { getProductImageUrl } from "@/lib/utils/drive";
import { getSanityProducts } from "@/lib/utils/sanity";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const aboutImageIds = [
      "1lflDkjhiKbgMX0bUbNBytnzKZvGoZXvL",
      "1aTXvDaA1RipD3zSM2cdNxkq6H125bT8T",
      "1Md2WXXnw3l1RuH4DC1jQkgMQ-OqoV6BJ",
    ];
    const aboutUrls = aboutImageIds.map((id) => `https://drive.google.com/thumbnail?id=${id}&sz=w2000-h2000`);

    getSanityProducts().then((products) => {
      const productUrls = products.map(getProductImageUrl).filter(Boolean);
      const urls = [...productUrls, ...aboutUrls];

      navigator.serviceWorker.register("/sw.js").then((reg) => {
        const sendPrefetch = (sw: ServiceWorker) => {
          sw.postMessage({ type: "PREFETCH_IMAGES", urls });
        };

        // If SW is already active, send immediately (repeat visits)
        if (reg.active) {
          sendPrefetch(reg.active);
          return;
        }

        // First install — wait for the SW to activate then prefetch
        const installing = reg.installing || reg.waiting;
        if (installing) {
          installing.addEventListener("statechange", function handler() {
            if (this.state === "activated") {
              sendPrefetch(this as ServiceWorker);
              this.removeEventListener("statechange", handler);
            }
          });
        }
      }).catch(() => {});
    });
  }, []);

  return null;
}
