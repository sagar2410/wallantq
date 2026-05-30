"use client";

export default function Marquee() {
  const items = [
    "Premium Handcrafted Dimensional Wood Relief",
    "Hand-painted with protective PU coat",
    "Complimentary shipping across India",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--accent)",
        overflow: "hidden",
        padding: "10px 0",
      }}
    >
      <div className="marquee-track" style={{ whiteSpace: "nowrap", display: "flex" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 32,
              padding: "0 32px",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#0d0b09",
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ color: "rgba(13,11,9,0.5)", fontSize: 8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
