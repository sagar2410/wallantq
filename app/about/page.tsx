import Link from "next/link";
import Footer from "@/components/Footer";
import EnquireButton from "@/components/EnquireButton";

export const metadata = {
  title: "About Us — Wallantq",
  description:
    "Wallantq Gallery Private Limited — a private atelier for heirloom wall art, curated and shipped from our studio in Surat, India.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "#0a0907",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://drive.google.com/thumbnail?id=1lflDkjhiKbgMX0bUbNBytnzKZvGoZXvL&sz=w2000-h2000"
          alt="Wallantq atelier"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.3) 0%, rgba(13,11,9,0.85) 100%)",
          }}
        />
        <div
          className="shell"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "clamp(120px,16vw,180px) var(--pad) clamp(56px,8vw,96px)",
          }}
        >
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
              Est. 2019 · Surat, India
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(52px, 7.5vw, 120px)",
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              color: "#f0ece4",
              maxWidth: 900,
            }}
          >
            A studio built on
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>quiet</em> obsessions.
          </h1>
        </div>
      </section>

      {/* ── Mission ── */}
      <section
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="shell about-2col"
          style={{
            gap: "clamp(48px, 8vw, 120px)",
            padding: "clamp(72px, 10vw, 140px) var(--pad)",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
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
                Who we are
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: 32,
              }}
            >
              We don't sell art.
              <br />
              We{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>place</em> it.
            </h2>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Wallantq Gallery Private Limited is an atelier for premium wall art, wall hangings, and installation art — founded in 2019 and operating from our studio in Surat, Gujarat.
            </p>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Every piece in our catalogue is individually sourced, documented, and photographed before it leaves our hands. We do not stock mass-produced work. We do not run sales. We keep a private catalogue — and we update it when something is worth adding.
            </p>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.8 }}>
              If a piece speaks to you, write to us. We'll tell you its story, who made it, and whether it belongs in your room.
            </p>
          </div>

          {/* Right: image */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              background: "var(--stone)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://drive.google.com/thumbnail?id=1aTXvDaA1RipD3zSM2cdNxkq6H125bT8T&sz=w2000-h2000"
              alt="Wallantq studio"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
        <div
          className="shell"
          style={{ padding: "clamp(72px, 10vw, 120px) var(--pad)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
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
              What we stand for
            </span>
          </div>

          <div className="about-3col">
            {[
              {
                num: "01",
                title: "Premium, not popular",
                body: "We curate for the room, not for the algorithm. Every piece is chosen because it answers a specific need — for light, for scale, for quiet. If it doesn't, it doesn't make the catalogue.",
              },
              {
                num: "02",
                title: "Private by design",
                body: "There is no public storefront, no add-to-cart. You enquire, we respond — personally. This is deliberate. The right piece for the right home deserves a conversation, not a transaction.",
              },
              {
                num: "03",
                title: "Signed and documented",
                body: "Every piece arrives with full provenance — who made it, what materials were used, and when it was completed. Art without a story is decoration. We deal in the other kind.",
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "clamp(40px, 5vw, 64px) clamp(28px, 4vw, 48px)",
                  borderRight: i < 2 ? "1px solid var(--line)" : undefined,
                  borderTop: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    color: "var(--accent)",
                    marginBottom: 24,
                  }}
                >
                  Nº {p.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    color: "var(--fg)",
                    lineHeight: 1.15,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company info ── */}
      <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
        <div
          className="shell about-2col"
          style={{
            gap: "clamp(48px, 8vw, 120px)",
            padding: "clamp(72px, 10vw, 120px) var(--pad)",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
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
                The studio
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 4.5vw, 60px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: 40,
              }}
            >
              Registered, documented,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>accountable</em>.
            </h2>

            <div style={{ display: "grid", gap: 20 }}>
              {[
                { label: "Legal name", value: "Wallantq Gallery Private Limited" },
                { label: "Founded", value: "2019, Surat, Gujarat" },
                { label: "Studio", value: "Surat, Gujarat, India" },
                { label: "Enquiries", value: "By appointment — write to us at info@wallantq.com" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, borderBottom: "1px solid var(--line)", paddingBottom: 20 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--fg-2)",
                      paddingTop: 3,
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ color: "var(--fg)", fontSize: 15, lineHeight: 1.6 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              background: "var(--stone)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://drive.google.com/thumbnail?id=1Md2WXXnw3l1RuH4DC1jQkgMQ-OqoV6BJ&sz=w2000-h2000"
              alt="Wallantq gallery"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "var(--bg-2)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="shell"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "clamp(72px, 10vw, 120px) var(--pad)",
          }}
        >
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "var(--fg)",
              maxWidth: 800,
              marginBottom: 48,
            }}
          >
            "If it stops you, it belongs. If you walk past it, it doesn't."
          </blockquote>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/collection" className="btn-primary">
              View the collection <span style={{ fontSize: 14 }}>→</span>
            </Link>
            <EnquireButton label="Write to us" ghost />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
