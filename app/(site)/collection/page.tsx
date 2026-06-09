import Footer from "@/components/Footer";
import CollectionClient from "@/components/CollectionClient";
import { getSanityProducts } from "@/lib/utils/sanity";

export const metadata = {
  title: "Collection — Wallantq",
  description: "Every piece currently in rotation at our studio.",
};

export default async function CollectionPage() {
  const products = await getSanityProducts();

  return (
    <>
      {/* ── Header ── */}
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "clamp(120px, 16vw, 180px)",
          paddingBottom: "clamp(40px, 6vw, 72px)",
          paddingLeft: "var(--pad)",
          paddingRight: "var(--pad)",
          borderBottom: "1px solid var(--line)",
          maxWidth: "var(--maxw)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
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
            The catalogue · New Collection 2026
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(56px, 8vw, 120px)",
            lineHeight: 0.94,
            letterSpacing: "-0.025em",
            color: "var(--fg)",
            marginBottom: 36,
          }}
        >
          Considered
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>quiet</em> things.
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
          }}
        >
          <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
            A living archive of every piece currently in rotation at our studio. Each one is sourced, photographed, and shipped directly from our private atelier.
          </p>
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--fg-2)",
              flexShrink: 0,
            }}
          >
            Showing {products.length} of {products.length}
          </div>
        </div>
      </section>

      <CollectionClient products={products} />

      {/* Commission CTA */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}>
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            padding: "clamp(72px, 10vw, 120px) var(--pad)",
          }}
        >
          <div>
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
                Didn't find it?
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
              }}
            >
              Commission a
              <br />
              piece of your own.
            </h3>
          </div>
          <div>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.75, maxWidth: 440, marginBottom: 40 }}>
              Our studio accepts a small number of private commissions each season. Describe what you imagine, and we'll return with suggestions and an honest timeline.
            </p>
            <a
              href={`https://wa.me/916353726302?text=${encodeURIComponent("Hello Wallantq — I'd like to enquire about starting a private commission.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <span>Start a commission</span>
              <span style={{ fontSize: 14 }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
