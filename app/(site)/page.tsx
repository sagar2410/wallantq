import Link from "next/link";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import HeroVideo from "@/components/HeroVideo";
import EnquireButton from "@/components/EnquireButton";
import TrustBadges from "@/components/TrustBadges";
import Reveal from "@/components/Reveal";
import { getProductImageUrl, getProductVideoUrl } from "@/lib/utils/drive";
import { getSanityProducts } from "@/lib/utils/sanity";
import { getSiteSettings } from "@/lib/utils/siteSettings";
import type { Product } from "@/lib/products";

export default async function HomePage() {
  const products = await getSanityProducts();
  const siteSettings = await getSiteSettings();

  const getProductSafe = (slug: string) => {
    return products.find((p) => p.slug === slug);
  };

  // Curate featured items (must have at least 5 to prevent crash in grid lookup)
  let featured = siteSettings.featuredProducts || [];
  if (featured.length < 5) {
    const featuredFlagProducts = products.filter((p) => p.featured && !featured.some((f) => f.slug === p.slug));
    featured = [...featured, ...featuredFlagProducts];
  }
  if (featured.length < 5) {
    const backupSlugs = ["wanxmf05", "wmnxmf22", "wmnxmf27_sq", "wmnxmf39", "winxmf01"];
    const backupProducts = backupSlugs
      .map((slug) => getProductSafe(slug))
      .filter((p): p is Product => !!p && !featured.some((f) => f.slug === p.slug));
    featured = [...featured, ...backupProducts];
  }
  featured = featured.slice(0, 5);

  // Curate new arrivals (must have at least 4 for full grid display)
  let newArrivals = products.filter((p) => p.newArrival);
  if (newArrivals.length < 4) {
    const backupSlugs = ["wmnxmf27", "wmnxmf16", "wmnxmf02", "wmnxmf05"];
    const backupProducts = backupSlugs
      .map((slug) => getProductSafe(slug))
      .filter((p): p is Product => !!p && !newArrivals.some((na) => na.slug === p.slug));
    newArrivals = [...newArrivals, ...backupProducts].slice(0, 4);
  }

  const heroVideos = products.map((p) => ({
    src: getProductVideoUrl(p) ?? "",
    poster: getProductImageUrl(p),
  }));

  return (
    <>
      {/* ══ HERO ══ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: 600,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <HeroVideo videos={heroVideos} />

        {/* Strong bottom gradient for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.45) 0%, rgba(13,11,9,0.1) 30%, rgba(13,11,9,0.7) 60%, rgba(13,11,9,0.97) 100%)",
            zIndex: 1,
          }}
        />
        {/* Left-side gradient for text column */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(13,11,9,0.82) 0%, rgba(13,11,9,0.4) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />



        {/* Hero text */}
        <div
          className="hero-bottom shell"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left: headline + CTA */}
          <div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(58px, 8vw, 130px)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "#f0ece4",
                marginBottom: 28,
                textShadow: "0 2px 32px rgba(0,0,0,0.7)",
              }}
            >
              {siteSettings.heroHeadlinePre.trim()}
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{siteSettings.heroHeadlineAccent.trim()}</em>
              <br />
              {siteSettings.heroHeadlinePost.trim()}
            </h1>
            <div className="hero-cta">
              <Link href="/collection" className="btn-primary">
                Discover the collection <span style={{ fontSize: 14 }}>→</span>
              </Link>
            </div>
          </div>

          {/* Right: description + stats (hidden on mobile) */}
          <div style={{ paddingBottom: 8 }}>
            <p
              className="hero-desc-text"
              style={{
                color: "rgba(240,236,228,0.82)",
                fontSize: "clamp(14px, 1.2vw, 17px)",
                lineHeight: 1.7,
                maxWidth: 440,
                marginBottom: 40,
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              {siteSettings.heroDescription}
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,0.55)",
              }}
            >
              {siteSettings.heroSubNote}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(240,236,228,0.5)",
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, rgba(201,169,110,0.7), transparent)",
            }}
          />
        </div>
      </section>

      {/* ══ TRUST BADGES ══ */}
      <TrustBadges items={siteSettings.trustBadges} />

      {/* ══ FEATURED COLLECTION ══ */}
      <section style={{ background: "var(--bg)", padding: "clamp(64px, 10vw, 160px) 0" }}>
        <div className="shell">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "clamp(40px, 6vw, 96px)",
                gap: 24,
                borderBottom: "1px solid var(--line)",
                paddingBottom: "clamp(28px, 4vw, 48px)",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
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
                    {siteSettings.featuredEyebrow}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(36px, 5.5vw, 80px)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                  }}
                >
                  {siteSettings.featuredHeadlinePre.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  {" "}
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{siteSettings.featuredHeadlineAccent.trim()}</em>
                  {siteSettings.featuredHeadlinePost.trim()}
                </h2>
              </div>
              <Link href="/collection" className="btn-ghost">
                View all {products.length} pieces <span style={{ fontSize: 13 }}>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Asymmetric grid */}
          <div className="grid-feat">
            <Reveal delay={0} style={{ gridColumn: "1 / span 5" }}>
              <ProductCard product={featured[0]} />
            </Reveal>
            <Reveal delay={120} style={{ gridColumn: "6 / span 4", marginTop: "clamp(60px, 8vw, 100px)" }}>
              <ProductCard product={featured[1]} />
            </Reveal>
            <Reveal delay={220} style={{ gridColumn: "10 / span 3", marginTop: "clamp(20px, 3vw, 36px)" }}>
              <ProductCard product={featured[2]} />
            </Reveal>
            <Reveal delay={80} style={{ gridColumn: "2 / span 4", marginTop: "clamp(32px, 4vw, 56px)" }}>
              <ProductCard product={featured[3]} />
            </Reveal>
            <Reveal delay={180} style={{ gridColumn: "7 / span 5" }}>
              <ProductCard product={featured[4]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ NEW ARRIVALS ══ */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "clamp(56px, 9vw, 130px) 0",
        }}
      >
        <div className="shell">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "clamp(36px, 5vw, 72px)",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
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
                    {siteSettings.newArrivalsEyebrow}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(34px, 5vw, 72px)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                  }}
                >
                  {siteSettings.newArrivalsHeadlinePre.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  {" "}
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{siteSettings.newArrivalsHeadlineAccent.trim()}</em>
                  {siteSettings.newArrivalsHeadlinePost.trim()}
                </h2>
              </div>
              <Link href="/collection" className="btn-ghost">
                Full collection <span style={{ fontSize: 13 }}>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid-4g">
            {newArrivals.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} direction="up">
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      zIndex: 3,
                      background: "var(--accent)",
                      color: "#0d0b09",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 8,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                    }}
                  >
                    New
                  </div>
                  <ProductCard product={p} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY SPLIT ══ */}
      <section
        className="grid-2"
        style={{ minHeight: "60vh", borderTop: "1px solid var(--line)" }}
      >
        <Reveal
          direction="left"
          threshold={0.1}
          className="philosophy-img-wrap"
          style={{ position: "relative", minHeight: 480, overflow: "hidden" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getProductImageUrl(getProductSafe("wanxmf05"))}
            alt="Dune Sovereigns"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,11,9,0.15)" }} />
        </Reveal>

        <div
          style={{
            padding: "clamp(56px, 8vw, 130px) clamp(32px, 5vw, 96px)",
            background: "var(--bg-2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Reveal direction="up" delay={100}>
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
                {siteSettings.philosophyEyebrow}
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 4.5vw, 64px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: 28,
              }}
            >
              {siteSettings.philosophyHeadingPre.split("\n").map((line, idx) => (
                <span key={idx}>
                  {idx > 0 && <br />}
                  {line}
                </span>
              ))}
              {" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{siteSettings.philosophyHeadingAccent.trim()}</em>
              {siteSettings.philosophyHeadingPost.startsWith(".") || siteSettings.philosophyHeadingPost.startsWith(",") ? "" : " "}
              {siteSettings.philosophyHeadingPost.split("\n").map((line, idx) => (
                <span key={idx}>
                  {idx > 0 && <br />}
                  {line}
                </span>
              ))}
            </h3>
            {siteSettings.philosophyBody.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  color: "var(--fg-2)",
                  fontSize: 16,
                  lineHeight: 1.75,
                  maxWidth: 480,
                  marginBottom: index === siteSettings.philosophyBody.length - 1 ? 40 : 20
                }}
              >
                {paragraph}
              </p>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: 20,
                color: "var(--fg-2)",
              }}
            >
              <span style={{ width: 36, height: 1, background: "var(--fg-2)", display: "block", flexShrink: 0 }} />
              {siteSettings.philosophyAttribution}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ VALUES — 4 columns ══ */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div className="grid-4 values-grid" style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
          {siteSettings.values.map((v, i) => (
            <Reveal key={i} delay={i * 100} direction="up">
              <div
                style={{
                  padding: "clamp(32px, 5vw, 80px) clamp(20px, 3vw, 48px)",
                  borderRight: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  {v.num}
                </div>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    color: "var(--fg)",
                    marginBottom: 12,
                    lineHeight: 1.1,
                  }}
                >
                  {v.title}
                </h4>
                <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7 }}>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ PERSONALISED DESIGN ══ */}
      <section
        style={{
          position: "relative",
          background: "var(--bg)",
          borderTop: "1px solid var(--line)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getProductImageUrl(getProductSafe("wmnxmf05"))}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.07 }}
          />
        </div>
        <div
          className="shell"
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(64px, 10vw, 160px) var(--pad)",
          }}
        >
          <div className="grid-2" style={{ gap: "clamp(40px, 7vw, 120px)", alignItems: "center" }}>
            <Reveal direction="left">
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
                    {siteSettings.bespokeEyebrow}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(38px, 5.5vw, 80px)",
                    lineHeight: 0.96,
                    letterSpacing: "-0.025em",
                    color: "var(--fg)",
                  }}
                >
                  {siteSettings.bespokeHeadlinePre.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  {" "}
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{siteSettings.bespokeHeadlineAccent.trim()}</em>
                  {" "}
                  {siteSettings.bespokeHeadlinePost.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div>
                <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  {siteSettings.bespokeBody1}
                </p>
                <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                  {siteSettings.bespokeBody2}
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary">
                    Start a conversation <span style={{ fontSize: 14 }}>→</span>
                  </Link>
                  <Link href="/contact" className="btn-ghost">
                    Contact us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED EDITORIAL ══ */}
      <Reveal direction="scale" threshold={0.08}>
        <section style={{ position: "relative", height: "60vh", minHeight: 360, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getProductImageUrl(getProductSafe("winxmf02"))}
            alt="Wallantq editorial"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(13,11,9,0.62)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(22px, 4vw, 60px)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: "#f0ece4",
                textAlign: "center",
                maxWidth: 860,
                padding: "0 var(--pad)",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              "
              {siteSettings.editorialQuotePre.split("\n").map((line, idx) => (
                <span key={idx}>
                  {idx > 0 && <br />}
                  {line}
                </span>
              ))}
              {" "}
              <em style={{ color: "var(--accent)" }}>{siteSettings.editorialQuoteAccent.trim()}</em>
              ."
            </blockquote>
          </div>
        </section>
      </Reveal>

      {/* ══ CTA BAND ══ */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div
          className="shell"
          style={{ padding: "clamp(56px, 9vw, 140px) var(--pad)" }}
        >
          <div className="grid-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
            <Reveal direction="left">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
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
                    {siteSettings.ctaEyebrow}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(32px, 4.5vw, 68px)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                  }}
                >
                  {siteSettings.ctaHeadingPre.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  {siteSettings.ctaHeadingPost ? "\n" : ""}
                  {siteSettings.ctaHeadingPost.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div>
                <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
                  {siteSettings.ctaBody}
                </p>
                <EnquireButton label="Open private enquiry" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
