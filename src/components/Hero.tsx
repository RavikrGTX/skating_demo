"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-end overflow-hidden pb-12 sm:pb-16 pt-32">
      {/* Background Photography (Approved by User) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_skater.jpg"
          alt="Inline speed skaters navigating banked curves in competitive speed skating"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter saturate-[1.05] brightness-[0.94]"
        />
        {/* Sleek, subtle cinematic gradient for editorial contrast without heavy darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Main Hero Content - Minimal, Sleek & Editorial */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Main Headline - Bold, Sleek, Clean */}
        <h1 className="animate-hero-reveal font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-4">
          FIND YOUR SPEED.<br />
          <span className="text-white/90 font-light tracking-normal">OWN YOUR RIDE.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="animate-hero-reveal animate-delay-1 text-sm sm:text-lg text-white/80 font-normal max-w-xl mx-auto mb-8 leading-relaxed tracking-wide">
          Building confidence, discipline and speed — one stride at a time.
        </p>

        {/* Minimal, Sleek & Clean Buttons */}
        <div className="animate-hero-reveal animate-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8">
          <a
            href="https://wa.me/919553393769?text=Hello%20Brilliant%20Speed%20Skating%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-200 shadow-sm hover:shadow active:scale-98"
          >
            <span>Enquire About Classes</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </a>

          <a
            href="#training"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
          >
            <span>Explore Training</span>
          </a>
        </div>

        {/* Understated Location & Contact Tag */}
        <div className="animate-hero-reveal animate-delay-3 flex items-center justify-center gap-4 text-[11px] sm:text-xs text-white/70 tracking-wider">
          <span>HYDERABAD, TELANGANA</span>
          <span className="text-white/30">•</span>
          <a
            href="tel:+919553393769"
            className="hover:text-white transition-colors"
          >
            +91 95533 93769
          </a>
        </div>

      </div>

      {/* Gentle Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center mt-8">
        <a
          href="#training"
          className="text-white/50 hover:text-white transition-colors p-1"
          aria-label="Scroll to explore"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
