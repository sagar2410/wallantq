"use client";
import { useEffect } from "react";
import { getProductImageUrl } from "@/lib/utils/drive";
import { getSanityProducts } from "@/lib/utils/sanity";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    getSanityProducts().then((products) => {
      const urls = products.map(getProductImageUrl).filter(Boolean);

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
