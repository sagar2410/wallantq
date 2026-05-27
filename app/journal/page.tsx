import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Journal — Wallantq",
  description: "Stories, observations, and notes from the Wallantq studio.",
};

export default function JournalPage() {
  return (
    <>
      <section
        style={{
          padding: "clamp(60px,8vw,100px) var(--pad)",
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--fg-2)",
          }}
        >
          The journal · Studio notes
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(52px, 7vw, 112px)",
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            margin: "20px 0 40px",
          }}
        >
          Words from
          <br />
          the{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>studio</em>.
        </h1>
        <p style={{ color: "var(--fg-2)", maxWidth: 520, fontSize: 16, lineHeight: 1.7 }}>
          A quiet record of what we notice — the light in a room, the weight of a material, the particular quality of a maker's hand. Updated when something is worth saying.
        </p>
      </section>

      {/* Coming soon placeholder */}
      <section
        style={{
          padding: "clamp(80px,12vw,160px) var(--pad)",
          textAlign: "center",
          background: "var(--bg-2)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--fg-2)",
            marginBottom: 32,
          }}
        >
          First entry — coming soon
        </div>
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            lineHeight: 1.2,
            maxWidth: 800,
            margin: "0 auto 40px",
            letterSpacing: "-0.01em",
          }}
        >
          "We write when we have something worth saying.
          <br />
          Not before."
        </blockquote>
        <Link
          href="/collection"
          className="btn-underline"
        >
          View the collection <span>→</span>
        </Link>
      </section>

      <Footer />
    </>
  );
}
