"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface VideoSlide {
  src: string;
  poster: string;
}

interface Props {
  videos: VideoSlide[];
}

export default function HeroVideo({ videos }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const indexRef = useRef(0);
  const preloadedRef = useRef<Set<string>>(new Set());

  const sharedStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
    transform: "scale(1.04)",
    animation: "heroDrift 18s ease-in-out infinite alternate",
  };

  // Preload a video URL in the background — only metadata first to warm DNS/TCP,
  // then full preload after a delay so it doesn't compete with the current video.
  const preloadVideo = useCallback((src: string) => {
    if (!src || preloadedRef.current.has(src)) return;
    preloadedRef.current.add(src);
    const v = document.createElement("video");
    v.src = src;
    v.preload = "metadata"; // just headers first — very small
    v.muted = true;
    v.load();
    // Upgrade to full preload after 10 s (current video is likely done buffering by then)
    const t = setTimeout(() => { v.preload = "auto"; }, 10_000);
    setTimeout(() => { clearTimeout(t); v.src = ""; }, 45_000);
  }, []);

  // Load and play the video at a given index
  const loadAndPlay = useCallback((index: number) => {
    const v = videoRef.current;
    if (!v || !videos[index]?.src) return;
    setVideoReady(false);
    v.src = videos[index].src;
    v.load();
    v.play().catch(() => {});
  }, [videos]);

  // Initial load
  useEffect(() => {
    if (!videos.length) return;
    loadAndPlay(0);
    // Preload the next video only after current one is playing (handled in onCanPlay below)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When a video ends, crossfade to the next
  const handleEnded = useCallback(() => {
    if (videos.length <= 1) return;
    const next = (indexRef.current + 1) % videos.length;
    indexRef.current = next;
    setVideoReady(false);

    setTimeout(() => {
      setCurrentIndex(next);
      loadAndPlay(next);
      // Preload the one after next
      const afterNext = (next + 1) % videos.length;
      preloadVideo(videos[afterNext].src);
    }, 600);
  }, [videos, loadAndPlay, preloadVideo]);

  if (!videos.length) return null;

  return (
    <>
      {/* Poster image — fades in as soon as it loads */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={`poster-${currentIndex}`}
        src={videos[currentIndex].poster}
        alt=""
        aria-hidden
        onLoad={() => setPosterLoaded(true)}
        style={{
          ...sharedStyle,
          filter: "brightness(0.8) saturate(0.96)",
          opacity: posterLoaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* Art shimmer — visible only while video is buffering */}
      {!videoReady && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "linear-gradient(135deg, rgba(201,169,110,0.04) 0%, rgba(201,169,110,0.10) 40%, rgba(201,169,110,0.04) 100%)",
            backgroundSize: "200% 200%",
            animation: "shimmerSlide 2.4s ease-in-out infinite",
          }}
        />
      )}

      {/* Video — fades in once it can play */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster={videos[currentIndex].poster}
        aria-hidden
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onCanPlay={() => {
          setVideoReady(true);
          // Start background-preloading the next video now that current one is ready
          if (videos.length > 1) {
            const next = (indexRef.current + 1) % videos.length;
            preloadVideo(videos[next].src);
          }
        }}
        onEnded={handleEnded}
        onError={() => setVideoReady(false)}
        style={{
          ...sharedStyle,
          zIndex: 0,
          opacity: videoReady ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
          filter: "brightness(0.94) saturate(1.02) contrast(1.03)",
        }}
      />

      {/* Slide counter */}
      <div
        className="mob-hide"
        style={{
          position: "absolute",
          top: "clamp(90px, 12vh, 150px)",
          right: "var(--pad)",
          zIndex: 2,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(240,236,228,0.5)",
        }}
      >
        {String(currentIndex + 1).padStart(3, "0")} / {String(videos.length).padStart(2, "0")}
      </div>
    </>
  );
}
