"use client";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const actions = [
    {
      label: "WhatsApp",
      detail: "+91 63537 26302",
      href: "https://wa.me/916353726302",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      ),
      cta: "WhatsApp Now",
    },
    {
      label: "Call",
      detail: "+91 63537 26302",
      href: "tel:+916353726302",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16h1z"/>
        </svg>
      ),
      cta: "Call Now",
    },
    {
      label: "Email",
      detail: "info@wallantq.com",
      href: "mailto:info@wallantq.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 7l10 7 10-7"/>
        </svg>
      ),
      cta: "Email Us",
    },
    {
      label: "Instagram",
      detail: "@wallantq",
      href: "https://www.instagram.com/wallantq",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      ),
      cta: "Follow Us",
    },
  ];

  return (
    <>
      {/* ── Header ── */}
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "clamp(120px, 16vw, 180px)",
          paddingBottom: "clamp(48px, 6vw, 72px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="shell">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Get in touch
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(52px, 7.5vw, 116px)",
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              color: "var(--fg)",
              marginBottom: 32,
            }}
          >
            Write to
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>the studio</em>.
          </h1>
          <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
            We answer from our studio inbox — never a bot, never a template. If you have a question about a piece, a wall, or just want to say hello, we read everything.
          </p>
        </div>
      </section>

      {/* ── Quick action buttons ── */}
      <section style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
        <div className="shell" style={{ padding: "clamp(36px, 5vw, 56px) var(--pad)" }}>
          <div className="contact-actions">
            {actions.map((a, i) => (
              <a
                key={a.label}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  padding: "clamp(20px, 3vw, 32px) clamp(16px, 2vw, 28px)",
                  borderRight: i < 3 ? "1px solid var(--line)" : undefined,
                  textDecoration: "none",
                  color: "var(--fg)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,110,0.05)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
              >
                <span style={{ color: "var(--accent)" }}>{a.icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 9,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--fg-2)",
                      marginBottom: 4,
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--fg)",
                      marginBottom: 8,
                    }}
                  >
                    {a.detail}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {a.cta} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main: form + hours ── */}
      <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
        <div
          className="shell contact-layout"
          style={{
            padding: "clamp(56px, 9vw, 120px) var(--pad)",
            alignItems: "start",
          }}
        >
          {/* Left: form */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--fg-2)",
                marginBottom: 40,
              }}
            >
              Send us a message
            </div>
            <ContactForm />
          </div>

          {/* Right: hours + note */}
          <div style={{ paddingTop: 50 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--fg-2)",
                marginBottom: 40,
              }}
            >
              Studio hours
            </div>

            <div style={{ display: "grid", gap: 0 }}>
              {[
                { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM IST" },
                { day: "Sunday", time: "Closed" },
              ].map(({ day, time }) => (
                <div
                  key={day}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    padding: "20px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 400,
                      color: "var(--fg)",
                    }}
                  >
                    {day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: time === "Closed" ? "var(--fg-2)" : "var(--accent)",
                      alignSelf: "center",
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: "32px", background: "var(--bg-2)", border: "1px solid var(--line)" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Response time
              </div>
              <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.8 }}>
                We respond to all enquiries within{" "}
                <strong style={{ color: "var(--fg)", fontWeight: 500 }}>24 hours</strong>{" "}
                during studio hours. For urgent enquiries, WhatsApp is fastest.
              </p>
              <div style={{ marginTop: 20, borderTop: "1px solid var(--line)", paddingTop: 20 }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--fg-2)",
                    marginBottom: 8,
                  }}
                >
                  Studio
                </div>
                <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7 }}>
                  Wallantq Gallery Private Limited
                  <br />
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
