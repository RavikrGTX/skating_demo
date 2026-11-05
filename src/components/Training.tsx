"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";
import Reveal from "./Reveal";

export default function Training() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    let ticking = false;

    const updateScrollProgress = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!mediaQuery.matches && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // 0 when section enters bottom of screen, 1 when it leaves top of screen
            const totalDistance = windowHeight + rect.height;
            const currentDistance = windowHeight - rect.top;
            const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Multi-layer parallax calculations
  // Background drifts downward (-35px to +35px) and slowly zooms
  const bgTranslateY = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * -50;
  const bgScale = prefersReducedMotion ? 1 : 1.08 - scrollProgress * 0.05;

  // Foreground card floats at counter-speed (+16px to -16px) for authentic 3D spatial depth
  const cardTranslateY = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * 22;

  return (
    <section
      id="training"
      className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/70 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead Header with CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <Reveal direction="up" delay={0}>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                COACHING &amp; PATHWAYS
              </p>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
                Training Built for Every Speed.
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={120}>
            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0"
            >
              <span>Explore Training Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>

        {/* Scenic Background Container with multi-plane scroll animation */}
        <Reveal direction="up" delay={150}>
          <div
            ref={containerRef}
            className="group/track relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-lg flex items-end p-4 sm:p-8 lg:p-10 transition-shadow duration-500 hover:shadow-2xl"
          >
            {/* Background Action Photography with continuous scroll parallax & zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div
                className="relative w-full h-full will-change-transform"
                style={{
                  transform: `translate3d(0, ${bgTranslateY}px, 0) scale(${bgScale})`,
                  transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.4, 1)",
                }}
              >
                <Image
                  src="/images/hero_skater_3.jpg"
                  alt="Inline speed skaters in training rhythm on track"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-center filter saturate-[1.08] brightness-[0.98]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-black/20" />
            </div>

            {/* Top-Right Floating Ambient Pill with live radar pulse */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-xs font-semibold text-slate-900 shadow-md transition-all duration-300 hover:bg-white hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>Hyderabad Training Circuits</span>
            </div>

            {/* Floating Info Card with Counter-Parallax Depth */}
            <div
              className="relative z-10 w-full max-w-2xl bg-white/98 backdrop-blur-sm rounded-3xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.22)] border border-white/90 will-change-transform transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.28)]"
              style={{
                transform: `translate3d(0, ${cardTranslateY}px, 0)`,
                transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.4, 1)",
              }}
            >
              <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                
                {/* Left Side: Text + Level Chips + CTAs */}
                <div className="sm:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Heading */}
                    <Reveal direction="up" delay={90}>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-tight mb-2">
                        Ready to Hit the Track?
                      </h3>
                    </Reveal>

                    {/* One Short Line (max 8 words) */}
                    <Reveal direction="up" delay={180}>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
                        Beginner to racer. Expert coaches.
                      </p>
                    </Reveal>

                    {/* Level Chips with interactive hover lift */}
                    <Reveal direction="up" delay={270}>
                      <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] font-medium text-slate-700">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 hover:-translate-y-0.5 hover:bg-slate-200/80 transition-all duration-200 cursor-default">
                          Beginner
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 hover:-translate-y-0.5 hover:bg-slate-200/80 transition-all duration-200 cursor-default">
                          Intermediate
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 font-semibold hover:-translate-y-0.5 hover:bg-amber-100 transition-all duration-200 cursor-default shadow-2xs">
                          Competitive
                        </span>
                      </div>
                    </Reveal>
                  </div>

                  {/* Clean Action Buttons */}
                  <Reveal direction="up" delay={360}>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </a>

                      <Link
                        href="/training"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold tracking-wide transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                      >
                        <span>Curriculum</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                      </Link>

                      <a
                        href={SITE_CONFIG.phoneLink}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-slate-700 hover:text-slate-950 text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-500" />
                        <span>Call</span>
                      </a>
                    </div>
                  </Reveal>
                </div>

                {/* Right Side: Skaters Image with glass caption */}
                <div className="sm:col-span-5">
                  <Reveal direction="left" delay={180} className="h-full">
                    <div className="group/img relative aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-100 shadow-inner h-full min-h-[180px] sm:min-h-[220px]">
                      <Image
                        src="/images/skating_achievements2.jpg"
                        alt="Skaters celebrating at a skating competition"
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover/img:scale-106"
                      />
                      {/* Tiny glass caption on image */}
                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-[10px] font-medium tracking-wide text-white shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Our Skaters</span>
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
