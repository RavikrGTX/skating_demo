"use client";

import Image from "next/image";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

export default function Training() {
  return (
    <section id="training" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
            Coaching &amp; Pathways
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
            Training Built for Every Speed.
          </h2>
        </div>

        {/* Scenic Background Container with Floating Card (Matching Reference Layout) */}
        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-md flex items-end p-5 sm:p-8 lg:p-10">
          
          {/* Background Action Photography */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_skater_3.jpg"
              alt="Inline speed skaters in training rhythm"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center filter saturate-[1.08] brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-black/20" />
          </div>

          {/* Top-Right Ambient Badge */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/50 text-xs font-semibold text-slate-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Hyderabad Training Circuits</span>
          </div>

          {/* Floating Info Card (Direct Match to User's Reference Layout) */}
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/80">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Text & CTAs */}
              <div className="sm:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-tight mb-2.5">
                    Ready to Step on the Track?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    From first-time balance to competitive sprint racing, our certified academy coaches guide you through progressive stride mechanics, curve handling, and race endurance in Hyderabad.
                  </p>

                  {/* Level Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] font-medium text-slate-700">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">Beginners</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">Intermediate</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 font-semibold">Competitive</span>
                  </div>
                </div>

                {/* Clean Sleek Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                  <a
                    href="https://wa.me/919553393769?text=Hello%20Brilliant%20Speed%20Skating%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20joining%20a%20training%20program."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire Online</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="tel:+919553393769"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-slate-700 hover:text-slate-950 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>+91 95533 93769</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Inset Athlete Photo (Matching Reference Inset Photo) */}
              <div className="sm:col-span-5 relative aspect-[4/5] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-100 shadow-inner min-h-[190px]">
                <Image
                  src="/images/athlete_portrait.jpg"
                  alt="Speed skater athlete focused on competitive race form"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
