"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductImageUrl } from "@/lib/utils/drive";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? products.filter((p) => {
        const q = query.toLowerCase();
        const fullTitle = `${p.title}${p.titleAccent ?? ""}${p.titleAfter ?? ""}`.toLowerCase();
        return (
          fullTitle.includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sub.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.finish.toLowerCase().includes(q) ||
          p.num.toLowerCase().includes(q)
        );
      })
    : products.slice(0, 6); // show first 6 as suggestions when empty

  useEffect(() => {
    if (!open) { setQuery(""); return; }
    setTimeout(() => inputRef.current?.focus(), 60);
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(7,6,5,0.85)",
        backdropFilter: "blur(16px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(80px,12vw,140px) var(--pad) 40px",
        animation: "fadeIn 0.2s ease",
        overflowY: "auto",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(42,39,36,0.8)",
          border: "1px solid var(--line)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          color: "var(--fg-2)",
          lineHeight: 1,
          transition: "color 0.2s",
          zIndex: 201,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
      >
        ×
      </button>

      {/* Search input */}
      <div style={{ width: "min(720px, 100%)", marginBottom: 48 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 20,
          }}
        >
          Search the collection
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderBottom: "1px solid var(--accent)",
            paddingBottom: 12,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--accent)", flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Mandala art, landscape, blue…"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 300,
              color: "var(--fg)",
              caretColor: "var(--accent)",
              letterSpacing: "-0.01em",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-2)",
                fontSize: 20,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          )}
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "var(--fg-2)",
            marginTop: 12,
          }}
        >
          {query ? `${results.length} result${results.length !== 1 ? "s" : ""}` : "Showing all pieces — type to filter"}
        </div>
      </div>

      {/* Results grid */}
      <div
        style={{
          width: "min(1100px, 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "clamp(20px, 3vw, 36px)",
        }}
      >
        {results.map((p) => (
          <Link
            key={p.slug}
            href={`/collection/${p.slug}`}
            onClick={onClose}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--line)")}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--stone)", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getProductImageUrl(p)}
                  alt={`${p.title}${p.titleAccent ?? ""}${p.titleAfter ?? ""}`}
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              {/* Info */}
              <div style={{ padding: "14px 16px" }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 8,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 6,
                  }}
                >
                  {p.num} · {p.category}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 17,
                    fontWeight: 400,
                    color: "var(--fg)",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                  {p.titleAccent && <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{p.titleAccent}</em>}
                  {p.titleAfter}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 28,
            fontWeight: 300,
            color: "var(--fg-2)",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          No pieces match <em style={{ color: "var(--fg)", fontStyle: "italic" }}>"{query}"</em>
        </div>
      )}
    </div>
  );
}
