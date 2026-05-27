import { notFound } from "next/navigation";
import { getProduct, getRelated, products } from "@/lib/products";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import EnquireButton from "@/components/EnquireButton";
import Link from "next/link";
import { getProductImageUrl, getProductVideoUrl, getProductPngUrl } from "@/lib/utils/drive";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title}${product.titleAccent || ""}${product.titleAfter || ""} — Wallantq`,
    description: product.deck,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(slug, 3);
  const mainImage = getProductImageUrl(product);
  const pngImage = getProductPngUrl(product);
  const videoSrc = getProductVideoUrl(product);
  // Only include valid (non-empty) image URLs — products with no driveImageId show only video
  const images = mainImage ? [mainImage] : [];
  const productTitle = `${product.title}${product.titleAccent || ""}${product.titleAfter || ""}`;

  return (
    <>
      {/* ── 50/50 split ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          paddingTop: 100, // topbar height offset
          background: "var(--bg)",
        }}
      >
        {/* Gallery — sticky */}
        <ProductGallery
          images={images}
          videoSrc={videoSrc}
          posterSrc={mainImage}
          pngSrc={pngImage}
          productTitle={productTitle}
        />

        {/* Info panel */}
        <div
          style={{
            padding: "clamp(18px, 2vw, 28px) clamp(40px, 5vw, 80px) clamp(40px, 5vw, 72px)",
            display: "flex",
            flexDirection: "column",
            gap: 36,
            background: "var(--bg)",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--fg-2)",
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Link href="/collection" style={{ color: "var(--fg-2)", textDecoration: "none" }}>
              Collection
            </Link>
            <span style={{ color: "var(--line)" }}>·</span>
            <span>{product.category}</span>
            {product.theme && (
              <>
                <span style={{ color: "var(--line)" }}>·</span>
                <span>{product.theme}</span>
              </>
            )}
            <span style={{ color: "var(--line)" }}>·</span>
            <span style={{ color: "var(--accent)" }}>
              {product.titleAccent || product.title}
            </span>
          </div>

          {/* Title block */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              {product.num} · Limited · Made-to-order · Customizable
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
              }}
            >
              {product.title}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {product.titleAccent}
              </em>
              {product.titleAfter}
            </h1>
          </div>

          <p
            style={{
              color: "var(--fg-2)",
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 500,
            }}
          >
            {product.deck}
          </p>

          {/* Specs — 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid var(--line)",
            }}
          >
            {[
              { k: "Material", v: product.material },
              { k: "Dimensions", v: product.dimensions },
              { k: "Weight", v: product.weight },
              { k: "Finish", v: product.finish },
            ].map((spec, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid var(--line)",
                  borderRight: i % 2 === 0 ? "1px solid var(--line)" : undefined,
                  paddingRight: i % 2 === 0 ? 24 : 0,
                  paddingLeft: i % 2 === 1 ? 24 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--fg-2)",
                    marginBottom: 8,
                  }}
                >
                  {spec.k}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "var(--fg)",
                    lineHeight: 1.2,
                  }}
                >
                  {spec.v}
                </div>
              </div>
            ))}
          </div>

          {/* Visual DNA — Optional metadata from Excel */}
          {(product.theme || product.colorPalette || product.mood) && (
            <div style={{
              padding: "24px",
              background: "rgba(201,169,110,0.03)",
              border: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              gap: 20
            }}>
              {product.theme && (
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>Series Theme</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--fg)" }}>{product.theme}</div>
                </div>
              )}
              {product.colorPalette && (
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>Color Palette</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--fg)", lineHeight: 1.4 }}>{product.colorPalette}</div>
                </div>
              )}
              {product.mood && (
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>Mood & Feel</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--fg)" }}>{product.mood}</div>
                </div>
              )}
            </div>
          )}

          {/* Enquire row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              padding: "24px 0",
              borderBottom: "1px solid var(--line)",
              flexWrap: "wrap",
            }}
          >
            <div>
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
                Offered by private enquiry
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 32,
                  fontWeight: 300,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                ₹ on request
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <EnquireButton
                productName={productTitle}
                productNum={product.num}
                productImage={mainImage}
                productSlug={product.slug}
                label="Enquire about this piece"
              />
              <a
                href={`https://wa.me/916353726302?text=${encodeURIComponent(`Hi, I am interested in ${productTitle} SKU ${product.sku}. Please share price and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Extras 3-col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            {[
              { k: "Maker", v: product.maker },
              { k: "Lead time", v: product.leadTime },
              { k: "Delivery", v: "White-glove, complimentary" },
            ].map((extra, i) => (
              <div
                key={i}
                style={{
                  padding: "0",
                  borderRight: i < 2 ? "1px solid var(--line)" : undefined,
                  paddingRight: i < 2 ? 20 : 0,
                  paddingLeft: i > 0 ? 20 : 0,
                }}
              >
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
                  {extra.k}
                </div>
                <div style={{ fontSize: 14, color: "var(--fg)", lineHeight: 1.5 }}>{extra.v}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: 13,
              color: "var(--fg-2)",
              lineHeight: 1.65,
              borderTop: "1px solid var(--line)",
              paddingTop: 24,
            }}
          >
            Signed and documented. Arrives with a hand-written card, care instructions, and full provenance of materials. Pieces may vary subtly due to natural variation in production.
          </div>
        </div>
      </div>

      {/* ── Provenance ── */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          padding: "clamp(72px, 10vw, 120px) var(--pad)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--maxw)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "clamp(40px, 6vw, 80px)",
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
                Provenance
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
              }}
            >
              How this piece
              <br />
              came to be.
            </h3>
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {product.provenance.map((step, i) => (
              <li
                key={i}
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid var(--line)",
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 24,
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "var(--accent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h5
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "var(--fg)",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h5>
                  <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7, maxWidth: 540 }}>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
            <li style={{ borderTop: "1px solid var(--line)", padding: "0" }} />
          </ol>
        </div>
      </section>

      {/* ── Kindred pieces ── */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div
          className="shell"
          style={{ padding: "clamp(72px, 10vw, 120px) var(--pad)" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(40px, 6vw, 72px)",
            }}
          >
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
                  You may also consider
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(36px, 5vw, 72px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                }}
              >
                Kindred pieces.
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(40px, 5vw, 72px) clamp(24px, 3vw, 40px)",
            }}
          >
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
