"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleScroll = () => {
      if (!mediaQuery.matches && window.scrollY < window.innerHeight * 1.2) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-end overflow-hidden pb-12 sm:pb-16 pt-32">
      {/* Background Photography with smooth entrance scale and subtle scroll parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="relative w-full h-full will-change-transform"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(0, ${scrollY * 0.2}px, 0) scale(${isLoaded ? 1 : 1.12})`,
            transition: prefersReducedMotion
              ? "none"
              : "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src="/images/hero_skater.jpg"
            alt="Inline speed skaters navigating banked curves in competitive speed skating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[1.05] brightness-[0.94]"
          />
        </div>
        {/* Subtle cinematic gradient for high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="animate-hero-reveal font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
          BRILLIANT SPEED<br />
          <span className="text-white/90 font-light tracking-normal">SKATING ACADEMY</span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="animate-hero-reveal animate-delay-1 text-sm sm:text-lg text-white/85 font-normal max-w-xl mx-auto mb-8 leading-relaxed tracking-wide">
          Build confidence, discipline and speed.
        </p>

        {/* Action Buttons: About Us (Primary) + Explore Training (Secondary) */}
        <div className="animate-hero-reveal animate-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8">
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium tracking-wide hover:bg-white/90 hover:shadow-md transition-all duration-200 active:scale-98"
          >
            <span>About Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </Link>

          <Link
            href="/training"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 group"
          >
            <span>Explore Training</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Understated Location & Contact Tag */}
        <div className="animate-hero-reveal animate-delay-3 flex items-center justify-center gap-4 text-[11px] sm:text-xs text-white/70 tracking-wider">
          <span>HYDERABAD, TELANGANA</span>
          <span className="text-white/30">•</span>
          <a
            href={SITE_CONFIG.phoneLink}
            className="hover:text-white transition-colors"
          >
            {SITE_CONFIG.phoneDisplay}
          </a>
        </div>

      </div>

      {/* Bobbing Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center mt-8">
        <a
          href="#about"
          className="text-white/50 hover:text-white transition-colors p-1"
          aria-label="Scroll to explore"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
