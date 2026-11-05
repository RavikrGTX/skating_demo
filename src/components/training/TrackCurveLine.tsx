"use client";

import { useEffect, useRef, useState } from "react";

export default function TrackCurveLine({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [dashOffset, setDashOffset] = useState(1200);
  const [totalLength, setTotalLength] = useState(1200);
  const [dotPos, setDotPos] = useState({ x: 20, y: 40 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDashOffset(0);
      setIsVisible(true);
      return;
    }

    const path = pathRef.current;
    if (path) {
      try {
        const len = path.getTotalLength();
        setTotalLength(len);
        setDashOffset(len);
      } catch {
        // Fallback if SVG geometry is pending
      }
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && pathRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const winH = window.innerHeight;

            const start = winH * 0.85;
            const end = winH * 0.15;
            const total = rect.height + (start - end);
            const current = start - rect.top;

            const progress = Math.min(Math.max(current / total, 0), 1);

            try {
              const len = pathRef.current.getTotalLength();
              const offset = len * (1 - progress);
              setDashOffset(offset);

              if (progress > 0.02) {
                setIsVisible(true);
                const point = pathRef.current.getPointAtLength(len * progress);
                setDotPos({ x: point.x, y: point.y });
              } else {
                setIsVisible(false);
              }
            } catch {
              // Ignore any calculation issues
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute inset-0 -top-6 -bottom-6 pointer-events-none overflow-visible z-0 opacity-80"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background Guide Line */}
        <path
          d="M 20 80 C 250 20, 400 320, 680 180 C 820 100, 920 280, 980 200"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />

        {/* Dynamic Animated Racing Line */}
        <path
          ref={pathRef}
          d="M 20 80 C 250 20, 400 320, 680 180 C 820 100, 920 280, 980 200"
          stroke="url(#trackGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            strokeDasharray: totalLength,
            strokeDashoffset: dashOffset,
            transition: "stroke-dashoffset 0.12s ease-out",
          }}
        />

        {/* Racing Head Dot */}
        {isVisible && (
          <g transform={`translate(${dotPos.x}, ${dotPos.y})`}>
            <circle r="8" fill="#F59E0B" fillOpacity="0.25" className="animate-ping" />
            <circle r="4.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
}

