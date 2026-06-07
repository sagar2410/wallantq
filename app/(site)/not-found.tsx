"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 var(--pad)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 24,
        }}
      >
        Nº 404
      </div>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(40px, 6vw, 88px)",
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
        }}
      >
        This piece has
        <br />
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>moved on</em>.
      </h1>
      <p style={{ color: "var(--fg-2)", maxWidth: 400, marginBottom: 40 }}>
        The page you're looking for doesn't exist — or the piece has already found its home.
      </p>
      <Link href="/collection" className="btn-underline">
        Return to the collection <span>→</span>
      </Link>
    </div>
  );
}
