"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number; // milliseconds
  duration?: number; // seconds
  className?: string;
  as?: ElementType;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className = "",
  as: Component = "div",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return "translate3d(0, 24px, 0)";
      case "left":
        return "translate3d(24px, 0, 0)";
      case "right":
        return "translate3d(-24px, 0, 0)";
      case "none":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}

