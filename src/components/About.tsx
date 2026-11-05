"use client";

import Image from "next/image";
import Link from "next/link";
import { Compass, Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>About The Academy</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
                Speed. Discipline. Precision.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm sm:text-base text-slate-600 max-w-sm font-normal">
                Skating training for every level in Hyderabad.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0"
              >
                <span>Full Academy Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 01: Precision Stride */}
          <Reveal direction="up" delay={80} className="lg:col-span-7">
            <div className="group h-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    01 / Foundation
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                    Precision Stride
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Form comes first.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              {/* Image Container with hover zoom */}
              <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-slate-100 mt-4">
                <Image
                  src={IMAGES.skateWheels}
                  alt="Precision inline skate wheels and frame setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Reveal>

          {/* Card 02: Curve & Speed */}
          <Reveal direction="up" delay={160} className="lg:col-span-5">
            <div className="group h-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
                      02 / Conditioning
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                      Curve &amp; Speed
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 font-medium">
                      Faster. Stronger. Safer.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200/70 flex items-center justify-center text-sky-600 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Image Container with hover zoom */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mt-4">
                <Image
                  src={IMAGES.curveRace}
                  alt="Inline speed skaters racing into a track curve"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Reveal>

          {/* Card 03: Wide Ethos Card */}
          <Reveal direction="up" delay={240} className="lg:col-span-12">
            <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Photo on left */}
                <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={IMAGES.achievements1}
                    alt="Brilliant Speed Skating Academy championship achievements and medals"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Text on right */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      03 / Ethos
                    </span>
                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-slate-950 mt-1 mb-2">
                      Confidence. Resilience. Sportsmanship.
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">
                      Skating that builds champions.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium">
                      Hyderabad Training Circuits
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider"
                      >
                        <span>About Academy</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/training"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-wider group/link"
                      >
                        <span>View Training</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
