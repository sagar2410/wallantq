"use client";

import { useEffect, useState } from "react";

const COOKIE = "wq_intro";
const TTL_H  = 24;

function seen() {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith(`${COOKIE}=`));
}
function markSeen() {
  const exp = new Date(Date.now() + TTL_H * 3_600_000).toUTCString();
  document.cookie = `${COOKIE}=1; expires=${exp}; path=/; SameSite=Lax`;
}

export default function PageLoader() {
  const [show,    setShow]    = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [gone,    setGone]    = useState(false);

  useEffect(() => {
    if (seen()) { setGone(true); return; }
    markSeen();
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const dismiss = () => {
      setFadeOut(true);
      setTimeout(() => setGone(true), 700);
    };
    // Wait at least 2.4s (bar duration) before dismissing
    const min = setTimeout(() => {
      if (document.readyState === "complete") {
        dismiss();
      } else {
        window.addEventListener("load", dismiss, { once: true });
      }
    }, 2400);
    // Hard cap
    const cap = setTimeout(dismiss, 4000);
    return () => { clearTimeout(min); clearTimeout(cap); };
  }, [show]);

  if (!show || gone) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#0a0907",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 32,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 36,
          fontWeight: 300,
          letterSpacing: "0.18em",
          color: "rgba(240,236,228,0.95)",
          lineHeight: 1,
        }}>
          Wallantq
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: "0.42em",
          color: "rgba(201,169,110,0.9)",
          fontStyle: "italic",
        }}>
          Gallery
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: 180,
        height: 1,
        background: "rgba(201,169,110,0.15)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,169,110,0.85)",
          transformOrigin: "left center",
          animation: "loaderProgress 2.2s cubic-bezier(0.4,0,0.6,1) forwards",
        }} />
      </div>
    </div>
  );
}
