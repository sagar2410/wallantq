"use client";

import { useState } from "react";

type Status = "idle" | "sent";

interface ContactFormProps {
  studioPhone?: string;
}

export default function ContactForm({ studioPhone = "+91 63537 26302" }: ContactFormProps) {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi, I'm reaching out via the Wallantq Gallery website.`,
      ``,
      `Name: ${name}`,
      email   ? `Email: ${email}`   : null,
      phone   ? `Phone: ${phone}`   : null,
      ``,
      `Message: ${message}`,
    ].filter((l): l is string => l !== null).join("\n");

    const whatsappNumber = studioPhone.replace(/\D/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`, "_blank");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div style={{ display: "grid", gap: 24 }}>
        <div
          style={{
            padding: "28px 24px",
            border: "1px solid var(--accent)",
            background: "rgba(201,169,110,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 12,
            }}
          >
            WhatsApp opened ✦
          </div>
          <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7 }}>
            Your message has been prepared in WhatsApp. We respond within 24 hours, Monday – Saturday.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--fg-2)",
            textAlign: "left",
            padding: 0,
          }}
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 28 }}>
      {/* Row: name + phone */}
      <div className="about-form-row">
        <Field label="Your name *">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            style={inputStyle}
          />
        </Field>
        <Field label="Phone number">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            style={inputStyle}
          />
        </Field>
      </div>

      <Field label="Email address">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={inputStyle}
        />
      </Field>

      <Field label="Your message *">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for, which piece caught your eye, or simply say hello."
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </Field>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.6 }}>
          Tapping send opens WhatsApp with your message pre-filled.
          <br />
          We respond within 24 hours, Monday – Saturday.
        </p>
        <button type="submit" className="btn-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <label
        style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 9,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--fg-2)",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  border: "none",
  borderBottom: "1px solid var(--line)",
  padding: "12px 0",
  background: "transparent",
  fontFamily: "'Inter', -apple-system, sans-serif",
  fontSize: 15,
  color: "var(--fg)",
  outline: "none",
  width: "100%",
  caretColor: "var(--accent)",
  transition: "border-color 0.2s",
};
