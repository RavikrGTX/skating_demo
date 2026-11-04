"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrackCurveLine from "./TrackCurveLine";

const LEVELS = [
  {
    number: "01 / BEGINNER",
    name: "Beginner",
    line: "Balance and basics",
    image: "/images/skate_wheels.jpg",
    alt: "Speed skate wheels for beginners balance training",
    isCompetitive: false,
  },
  {
    number: "02 / INTERMEDIATE",
    name: "Intermediate",
    line: "Turns and rhythm",
    image: "/images/team_track.jpg",
    alt: "Intermediate skaters practicing track turns and rhythm",
    isCompetitive: false,
  },
  {
    number: "03 / COMPETITIVE",
    name: "Competitive",
    line: "Speed and racing",
    image: "/images/curve_race.jpg",
    alt: "Competitive skaters in high velocity race pack",
    isCompetitive: true,
  },
];

export default function LevelsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="relative">
      {/* Decorative SVG Track Line (only on desktop) */}
      <TrackCurveLine containerRef={containerRef} />

      {/* 3 Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {LEVELS.map((level, idx) => (
          <Reveal key={level.name} direction="up" delay={idx * 100}>
            <div
              className={`group h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                level.isCompetitive ? "ring-1 ring-amber-400/50" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    {level.number}
                  </span>
                  {level.isCompetitive && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                      Race Squad
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-950 mb-1">
                  {level.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6">
                  {level.line}
                </p>
              </div>

              {/* Fixed Aspect Image with Slow Zoom */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={level.image}
                  alt={level.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-[1200ms] ease-out"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

