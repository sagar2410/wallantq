"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";
import SearchModal from "./SearchModal";

export default function TopBar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileNavOpen]);

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { href: "/", label: "Atelier" },
    { href: "/collection", label: "Collection" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    // Journal hidden until content is ready
  ];

  return (
    <>
      <header
        className="topbar-header"
        style={{
          background: scrolled ? "rgba(13,11,9,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(42,39,36,0.8)" : "1px solid transparent",
        }}
      >
        <div
          className="topbar-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: "18px var(--pad)",
            maxWidth: "var(--maxw)",
            margin: "0 auto",
          }}
        >
          {/* ── Left nav (desktop) ── */}
          <nav className="desk-nav" style={{ alignItems: "center", gap: "clamp(20px,3vw,40px)" }}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: isActive(href) ? "var(--accent)" : "var(--fg)",
                  borderBottom: isActive(href) ? "1px solid var(--accent)" : "none",
                  paddingBottom: isActive(href) ? "3px" : "0",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Mobile hamburger (left) ── */}
          <button
            className="mob-nav-btn"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--fg)",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
          </button>

          {/* ── Logo — center ── */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/assets/logo/icon.png"
              alt="Wallantq icon"
              width={20}
              height={38}
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(18px, 1.8vw, 28px)",
                letterSpacing: "0.06em",
                fontWeight: 400,
                color: "var(--fg)",
                whiteSpace: "nowrap",
              }}
            >
              Wallantq
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(14px, 1.2vw, 20px)",
                  letterSpacing: "0.12em",
                  fontWeight: 300,
                  color: "var(--fg-2)",
                  marginLeft: 6,
                  fontStyle: "italic",
                }}
              >
                Gallery
              </span>
            </span>
          </Link>

          {/* ── Right actions (desktop) ── */}
          <div
            className="desk-actions"
            style={{
              alignItems: "center",
              gap: "clamp(16px,2.5vw,36px)",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--fg-2)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search
            </button>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--fg)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
            >
              Enquire
            </button>
            <Link
              href="https://www.instagram.com/wallantq"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid rgba(240,236,228,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-2)",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-2)";
                e.currentTarget.style.borderColor = "rgba(240,236,228,0.2)";
              }}
              aria-label="Instagram @wallantq"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </Link>
          </div>

          {/* ── Mobile right: search + enquire icons ── */}
          <div
            className="mob-nav-btn"
            style={{
              justifyContent: "flex-end",
              gap: 16,
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-2)",
                padding: 0,
                display: "flex",
              }}
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ══ MOBILE NAV OVERLAY ══ */}
      {mobileNavOpen && (
        <div className="mobile-nav-overlay">
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px var(--pad)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            >
              <Image src="/assets/logo/icon.png" alt="Wallantq" width={18} height={34} style={{ objectFit: "contain" }} />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 22,
                  letterSpacing: "0.06em",
                  color: "var(--fg)",
                }}
              >
                Wallantq
              </span>
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg)",
                fontSize: 28,
                lineHeight: 1,
                padding: 4,
              }}
            >
              ×
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ padding: "40px var(--pad)", display: "flex", flexDirection: "column", gap: 0 }}>
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileNavOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(40px, 10vw, 60px)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: isActive(href) ? "var(--accent)" : "var(--fg)",
                  textDecoration: "none",
                  lineHeight: 1.2,
                  borderBottom: "1px solid var(--line)",
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: 0,
                  animation: `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms forwards`,
                }}
              >
                {label}
                <span style={{ fontSize: 24, color: "var(--accent)" }}>→</span>
              </Link>
            ))}
          </nav>

          {/* Bottom actions */}
          <div style={{ padding: "0 var(--pad) 48px", marginTop: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
            <button
              onClick={() => { setMobileNavOpen(false); setTimeout(() => setModalOpen(true), 100); }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "18px" }}
            >
              Private enquiry <span style={{ fontSize: 14 }}>→</span>
            </button>
            <Link
              href="https://www.instagram.com/wallantq"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px",
                border: "1px solid var(--line)",
                color: "var(--fg-2)",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @wallantq
            </Link>
          </div>
        </div>
      )}

      <EnquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName="General Enquiry"
        productNum=""
        productImage=""
      />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
