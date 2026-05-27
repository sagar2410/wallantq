"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const initialTransform =
    direction === "up" ? "translateY(56px)" :
    direction === "left" ? "translateX(-56px)" :
    direction === "right" ? "translateX(56px)" :
    direction === "scale" ? "scale(0.92)" :
    "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: mounted && visible ? 1 : 0,
        transform: mounted && visible ? "none" : initialTransform,
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
