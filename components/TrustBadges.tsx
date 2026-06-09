import Reveal from "./Reveal";

const badges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v4h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Free Shipping",
    sub: "Complimentary within India",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "7 Day Guarantee",
    sub: "Money back, no questions",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Your Vision, Our Creation",
    sub: "Fully customizable",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "100% Secure",
    sub: "Private & secure enquiry",
  },
];

export default function TrustBadges({ items }: { items?: { title: string; sub: string }[] }) {
  const activeBadges = (items && items.length > 0)
    ? items.map((item, idx) => ({
        ...item,
        icon: badges[idx]?.icon || badges[0].icon
      }))
    : badges;

  return (
    <section
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="trust-grid" style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        {activeBadges.map((b, i) => (
          <Reveal key={b.title} delay={i * 80} direction="up">
            <div
              className="trust-cell"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "clamp(20px, 3.5vw, 40px) clamp(16px, 3vw, 40px)",
                borderRight: i < activeBadges.length - 1 ? "1px solid var(--line)" : undefined,
                height: "100%",
              }}
            >
              <div style={{ color: "var(--accent)", flexShrink: 0 }}>{b.icon}</div>
              <div>
                <div
                  className="trust-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(14px, 1.5vw, 18px)",
                    fontWeight: 500,
                    color: "var(--fg)",
                    marginBottom: 2,
                    lineHeight: 1.2,
                  }}
                >
                  {b.title}
                </div>
                <div
                  className="trust-sub"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: "var(--fg-2)",
                    lineHeight: 1.4,
                  }}
                >
                  {b.sub}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
