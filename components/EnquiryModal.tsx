"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const t = (s: string) => s;

interface Props {
  open: boolean;
  onClose: () => void;
  productName: string;
  productNum: string;
  productImage: string;
  productSlug?: string;
}

interface Errors {
  name?: string;
  contact?: string;
}

export default function EnquiryModal({ open, onClose, productName, productNum, productImage, productSlug }: Props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function validate(): boolean {
    const e: Errors = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!contact.trim()) e.contact = "Please enter your phone or email";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSend() {
    if (!validate()) return;
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://wallantq.com";
    const productUrl = productSlug ? `${baseUrl}/collection/${productSlug}` : null;
    const msg = encodeURIComponent(
      `Hello Wallantq 👋\n\n` +
      `I'd like to enquire about *"${productName}"*${productNum ? ` (${productNum})` : ""}.\n` +
      (productUrl ? `\n🖼️ *View piece:* ${productUrl}\n` : "") +
      `\n👤 Name: ${name}` +
      `\n🏙️ City: ${city || "—"}` +
      `\n📞 Contact: ${contact}` +
      (note ? `\n\n💬 Note: ${note}` : "")
    );
    window.open(`https://wa.me/916353726302?text=${msg}`, "_blank");
    onClose();
    setName(""); setCity(""); setContact(""); setNote(""); setErrors({});
  }

  function handleClose() {
    onClose();
    setErrors({});
  }

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) handleClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(7,6,5,0.82)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        style={{
          width: "min(900px, 100%)",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0d0b09",
          border: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          position: "relative",
          animation: "rise 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(42,39,36,0.8)",
            border: "1px solid var(--line)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            color: "var(--fg-2)",
            zIndex: 2,
            lineHeight: 1,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-2)"; }}
        >
          ×
        </button>

        {/* Left: product image */}
        <div style={{ position: "relative", minHeight: 420, background: "#141210", overflow: "hidden" }}>
          {productImage ? (
            <Image src={productImage} alt={productName} fill style={{ objectFit: "cover", opacity: 0.85 }} />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #1a1714 0%, #0d0b09 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Image
                src="/assets/logo/icon-white.png"
                alt="Wallantq Icon"
                width={70}
                height={133}
                style={{ objectFit: "contain" }}
              />
              <Image
                src="/assets/logo/wordmark-white.png"
                alt="Wallantq Wordmark"
                width={120}
                height={30}
                style={{ objectFit: "contain", opacity: 0.85 }}
              />
            </div>
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,11,9,0.7) 0%, transparent 60%)" }} />
          {productNum && (
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {productNum}
            </div>
          )}
        </div>

        {/* Right: WhatsApp form */}
        <div style={{ padding: "clamp(28px,4vw,44px)", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Header */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
              }}
            >
              {/* WhatsApp pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.35)",
                  borderRadius: 999,
                  padding: "4px 12px",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zm-8.475 18.3h-.005c-1.774-.001-3.513-.474-5.031-1.37l-.361-.214-3.741.977.999-3.648-.235-.374C2.62 15.23 2.103 13.59 2.104 11.893c.003-5.45 4.46-9.887 9.943-9.887 2.655.001 5.15 1.03 7.025 2.902 1.875 1.87 2.909 4.354 2.908 6.994-.003 5.451-4.461 9.887-9.943 9.887z"/>
                </svg>
                <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "#25D366" }}>
                  {t("WhatsApp enquiry")}
                </span>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 2.8vw, 34px)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "var(--fg)",
              }}
            >
              {t("Write to")}{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("the owner")}</em>
              <br />
              {t("about this piece.")}
            </h3>
          </div>

          {/* Product ref */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: 12,
              border: "1px solid var(--line)",
              background: "var(--bg-2)",
            }}
          >
            {productImage && (
              <div style={{ width: 48, height: 48, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                <Image src={productImage} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            )}
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-2)", marginBottom: 3 }}>
                {t("Enquiring about")}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, fontWeight: 400, color: "var(--fg)" }}>
                {productName}
              </div>
            </div>
          </div>

          {/* Fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <Field label="Your name *" error={errors.name}>
                <input
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                  placeholder="Full name"
                  style={{ ...inputStyle, borderBottomColor: errors.name ? "#e05050" : undefined }}
                />
              </Field>
            </div>
            <div>
              <Field label="City">
                <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Mumbai" style={inputStyle} />
              </Field>
            </div>
          </div>

          <Field label="Phone number *" error={errors.contact}>
            <input
              value={contact}
              onChange={(e) => { setContact(e.target.value); if (errors.contact) setErrors((p) => ({ ...p, contact: undefined })); }}
              placeholder="+91 98765 43210"
              style={{ ...inputStyle, borderBottomColor: errors.contact ? "#e05050" : undefined }}
            />
          </Field>

          <Field label="Your note">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Is there a wall in mind? A particular tone? Anything you tell us, we read."
              style={{ ...inputStyle, minHeight: 68, resize: "vertical" }}
            />
          </Field>

          {/* Send */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              onClick={handleSend}
              style={{
                width: "100%",
                padding: "16px",
                background: "#25D366",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5b")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zm-8.475 18.3h-.005c-1.774-.001-3.513-.474-5.031-1.37l-.361-.214-3.741.977.999-3.648-.235-.374C2.62 15.23 2.103 13.59 2.104 11.893c.003-5.45 4.46-9.887 9.943-9.887 2.655.001 5.15 1.03 7.025 2.902 1.875 1.87 2.909 4.354 2.908 6.994-.003 5.451-4.461 9.887-9.943 9.887z"/>
              </svg>
              Send on WhatsApp →
            </button>
            <p style={{ fontSize: 11, color: "var(--fg-2)", textAlign: "center", lineHeight: 1.5 }}>
              {t("Opens WhatsApp with your message pre-filled. We reply within 24 hours.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: error ? "#e05050" : "var(--fg-2)" }}>
        {label}
      </label>
      {children}
      {error && (
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#e05050" }}>{error}</span>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  border: "none",
  borderBottom: "1px solid var(--line)",
  padding: "10px 0",
  background: "transparent",
  fontFamily: "'Inter', -apple-system, sans-serif",
  fontSize: 14,
  color: "var(--fg)",
  outline: "none",
  width: "100%",
  caretColor: "var(--accent)",
};
