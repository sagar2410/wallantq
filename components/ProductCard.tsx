"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { getProductImageUrl } from "@/lib/utils/drive";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false);
  const imgSrc = getProductImageUrl(product);
  const hasImage = !!imgSrc;
  const title = `${product.title}${product.titleAccent || ""}${product.titleAfter?.replace(".", "") || ""}`;

  return (
    <Link
      href={`/collection/${product.slug}`}
      style={{ display: "block", textDecoration: "none", color: "inherit" }}
    >
      {/* Image container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--stone)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ) : (
          /* Placeholder for products awaiting Drive upload */
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #1a1714 0%, #2a2420 60%, #1a1714 100%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300,
              color: "rgba(201,169,110,0.3)", letterSpacing: "0.1em",
            }}>{product.num}</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(240,236,228,0.2)",
            }}>image pending</span>
          </div>
        )}
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,11,9,0.28)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#f0ece4",
              borderBottom: "1px solid rgba(201,169,110,0.8)",
              paddingBottom: 4,
            }}
          >
            Enquire →
          </span>
        </div>

        {/* Num badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(240,236,228,0.8)",
            background: "rgba(13,11,9,0.45)",
            padding: "5px 9px",
            backdropFilter: "blur(6px)",
          }}
        >
          {product.num}
        </div>
      </div>

      {/* Card meta */}
      <div
        style={{
          marginTop: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--fg)",
              letterSpacing: "-0.01em",
            }}
          >
            {product.title}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{product.titleAccent}</em>
            {product.titleAfter?.replace(".", "")}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--fg-2)",
              marginTop: 6,
            }}
          >
            {product.material}
          </div>
        </div>
      </div>
    </Link>
  );
}
