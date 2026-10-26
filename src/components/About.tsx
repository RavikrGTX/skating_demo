"use client";

import Image from "next/image";
import { Compass, Zap, Trophy, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>About The Academy</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1]">
              Shaping Speed, Discipline &amp; Precision on Wheels.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Based in Hyderabad, Brilliant Speed Skating Academy provides structured athletic training for inline skaters of all stages — from foundational balance to competitive racing.
          </p>
        </div>

        {/* Inspired Bento Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 01: Technical Mastery (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">01 / Foundation</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                  Precision Stride Mechanics
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
                <Compass className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              Speed begins with form. We train skaters in aerodynamic posture, deliberate push angles, core balance, and high-velocity wheel control.
            </p>

            {/* Visual Photo Container */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/skate_detail.jpg"
                alt="High performance inline speed skating chassis and wheel setup"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-semibold tracking-wide bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  Chassis alignment &amp; cadence control
                </span>
                <span className="hidden sm:inline-block text-white/75 text-[11px] uppercase tracking-wider">
                  Road &amp; Track Setups
                </span>
              </div>
            </div>
          </div>

          {/* Card 02: Track & Race Conditioning (Right - 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-sky-50/70 to-white rounded-3xl p-7 sm:p-9 border border-sky-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">02 / Conditioning</span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                    Track &amp; Curve Dynamics
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-sky-100/70 border border-sky-200 flex items-center justify-center text-sky-700">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Navigating banked curves, paceline drafting, and sustained sprint endurance require disciplined conditioning and circuit drills.
              </p>
            </div>

            {/* Circuit stats highlight widget */}
            <div className="space-y-3 pt-6 border-t border-sky-100/80">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-sky-100/60 shadow-2xs">
                <span className="text-xs font-semibold text-slate-700">Banked Curve Acceleration</span>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Sprint Form</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-sky-100/60 shadow-2xs">
                <span className="text-xs font-semibold text-slate-700">Cardio &amp; Muscle Endurance</span>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Interval Drills</span>
              </div>
            </div>
          </div>

          {/* Card 03: Competitive Athlete Mindset (Full Width Span - 12 cols) */}
          <div className="lg:col-span-12 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo on left */}
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/athlete_portrait.jpg"
                  alt="Competitive inline speed skaters during race warmup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text content on right */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">03 / Ethos</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Championship Spirit</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-4xl font-bold text-slate-950 mb-4">
                    Building Confidence, Resilience &amp; Sportsmanship.
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                    Speed skating teaches young athletes focus under pressure, physical courage, and the determination to improve with every practice lap. Our community supports skaters to challenge their own limits and embrace healthy competition.
                  </p>
                </div>

                {/* Bottom Academy Location Anchor */}
                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">Training Grounds:</span> Dedicated Skating Rinks &amp; Circuits across Hyderabad
                  </div>
                  <a
                    href="#training"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-wider"
                  >
                    <span>View Training Modules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
