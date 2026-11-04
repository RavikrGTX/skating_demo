"use client";

import { useEffect, useRef, useState } from "react";

export default function TrackCurveLine({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [dashOffset, setDashOffset] = useState(1000);
  const [totalLength, setTotalLength] = useState(1000);
  const [dotPos, setDotPos] = useState({ x: 24, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDashOffset(0);
      return;
    }

    const path = pathRef.current;
    if (path) {
      const len = path.getTotalLength();
      setTotalLength(len);
      setDashOffset(len);
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && pathRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const winH = window.innerHeight;

            // Start drawing when top of section is at 80% viewport, finish when bottom reaches 40%
            const start = winH * 0.8;
            const end = winH * 0.2;
            const total = (rect.height + (start - end));
            const current = start - rect.top;

            const progress = Math.min(Math.max(current / total, 0), 1);

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
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block absolute -left-8 top-8 bottom-8 w-12 pointer-events-none select-none z-10"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 48 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="trackGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Track Line Curve */}
        <path
          ref={pathRef}
          d="M 24,0 C 4,150 44,280 18,420 C 4,520 36,560 24,600"
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={totalLength}
          strokeDashoffset={dashOffset}
          style={{
            transition: "stroke-dashoffset 0.15s ease-out",
          }}
        />

        {/* Amber Racing Tip Dot */}
        {isVisible && (
          <g transform={`translate(${dotPos.x}, ${dotPos.y})`}>
            <circle
              r="6"
              fill="#f59e0b"
              opacity="0.3"
              className="animate-ping"
            />
            <circle
              r="3.5"
              fill="#f59e0b"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

