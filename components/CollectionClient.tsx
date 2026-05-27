"use client";

import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function CollectionClient({ products }: { products: Product[] }) {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div
        className="shell grid-3g"
        style={{
          padding: "clamp(48px, 7vw, 96px) var(--pad)",
          gap: "clamp(32px, 5vw, 64px) clamp(16px, 3vw, 32px)",
        }}
      >
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 100} direction="up">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
