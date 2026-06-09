"use client";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  email?: string;
  phone?: string;
}

export default function Footer({ email = "info@wallantq.com", phone = "+91 63537 26302" }: FooterProps) {
  return (
    <footer
      style={{
        background: "#1e2330",
        color: "#f0ece4",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* ── Main grid ── */}
      <div
        className="footer-grid"
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          padding: "clamp(56px,8vw,96px) var(--pad) clamp(48px,6vw,72px)",
          display: "grid",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >


        {/* ── Social ── */}
        <div>
          <h5
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#f0ece4",
              marginBottom: 20,
              letterSpacing: "0.01em",
            }}
          >
            Follow Us
          </h5>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                href: "https://www.instagram.com/wallantq",
                label: "@wallantq",
                platform: "Instagram",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
              {
                href: "https://www.facebook.com/wallantq",
                label: "Wallantq Gallery",
                platform: "Facebook",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/company/wallantq",
                label: "Wallantq Gallery",
                platform: "LinkedIn",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
            ].map(({ href, label, platform, icon }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(240,236,228,0.65)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent, #c9a96e)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.65)")}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Company info ── */}
        <div>
          <h5
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#f0ece4",
              marginBottom: 8,
              letterSpacing: "0.01em",
            }}
          >
            Wallantq Gallery Private Limited
          </h5>
          <p
            style={{
              color: "rgba(240,236,228,0.6)",
              fontSize: 13,
              lineHeight: 1.7,
              marginBottom: 20,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Gujarat, India
          </p>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            <a
              href={`mailto:${email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "rgba(240,236,228,0.7)",
                textDecoration: "none",
                fontSize: 13,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent, #c9a96e)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.7)")}
            >
              <svg width="15" height="12" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="1" width="18" height="14" rx="1"/>
                <path d="M1 3l9 6 9-6"/>
              </svg>
              {email}
            </a>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "rgba(240,236,228,0.7)",
                textDecoration: "none",
                fontSize: 13,
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent, #c9a96e)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.7)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {phone}
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "18px var(--pad)",
          maxWidth: "var(--maxw)",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(240,236,228,0.5)",
            margin: 0,
            textAlign: "center",
          }}
        >
          Wallantq Gallery Private Limited © 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
