"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const t = (s: string) => s;

interface Props {
  images: string[];
  videoSrc?: string;
  posterSrc?: string;
  pngSrc?: string;
  productTitle: string;
}

export default function ProductGallery({ images, videoSrc, posterSrc, pngSrc, productTitle }: Props) {
  const [active, setActive] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const allMedia = [...images, ...(videoSrc ? ["__video__"] : [])];
  const videoPosterSrc = posterSrc || images.at(0) || undefined;

  const handleScroll = () => {
    if (sliderRef.current) {
      const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
      if (index !== active) setActive(index);
    }
  };

  const scrollTo = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (allMedia.at(active) === "__video__" && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, [active, allMedia]);

  // Lock body scroll when fullscreen gallery is active
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  return (
    <div
      className="product-gallery"
      style={{
        zIndex: isFullscreen ? 1100 : undefined,
      }}
    >
      {/* Slider Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          background: "#141210",
        }}
      >
        {allMedia.map((src, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 100%",
              height: "100%",
              position: "relative",
              scrollSnapAlign: "start",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {src === "__video__" ? (
              <video
                ref={i === active ? videoRef : null}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={videoPosterSrc}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div
                onClick={() => setIsFullscreen(true)}
                style={{ cursor: "zoom-in", width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  src={src}
                  alt={productTitle}
                  fill
                  priority={i === 0}
                  sizes="50vw"
                  style={{ objectFit: "contain" }}
                />
                {/* Full screen hint icon */}
                <div style={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  background: "rgba(10,9,7,0.4)",
                  backdropFilter: "blur(10px)",
                  padding: "8px 12px",
                  borderRadius: 4,
                  color: "var(--fg-2)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  pointerEvents: "none",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  {t("Click to expand")}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation & Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Indicators */}
        <div style={{ display: "flex", gap: 8 }}>
          {allMedia.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background: i === active ? "var(--accent)" : "var(--line)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0
              }}
            />
          ))}
        </div>

        {/* Info */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "var(--fg-2)",
          textTransform: "uppercase"
        }}>
          {active + 1} / {allMedia.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,9,7,0.98)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: 40
          }}
        >
          <div style={{ position: "absolute", top: 32, left: 32, zIndex: 1001 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 4
            }}>{t("High-Fidelity View")}</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              color: "var(--fg)",
              fontWeight: 300
            }}>{productTitle}</div>
          </div>

          <div style={{ position: "absolute", top: 32, right: 32, zIndex: 1001 }}>
            <button
              onClick={() => setIsFullscreen(false)}
              style={{
                background: "none",
                border: "1px solid var(--line)",
                color: "var(--fg)",
                padding: "12px 24px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer"
              }}
            >
              {t("Close")}
            </button>
          </div>

          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={pngSrc || allMedia.at(active) || ""}
              alt={productTitle}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
