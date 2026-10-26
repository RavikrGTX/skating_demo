"use client";

import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 block mb-3">
            Contact &amp; Admissions
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-4">
            Start Your Skating Journey in Hyderabad.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about age batches, beginner gear requirements, or training schedules? Reach out directly via WhatsApp or phone.
          </p>
        </div>

        {/* Clean Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          
          {/* Card 1: WhatsApp Inquiries */}
          <div className="rounded-3xl p-7 sm:p-8 bg-[#FAFCFD] border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 mb-6">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-950 mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fastest response for fee details, batch timings &amp; admissions.
              </p>
              <div className="text-sm font-semibold text-slate-900 mb-6">
                +91 95533 93769
              </div>
            </div>

            <a
              href="https://wa.me/919553393769?text=Hello%20Brilliant%20Speed%20Skating%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20joining%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase transition-all active:scale-98"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Direct Phone Call */}
          <div className="rounded-3xl p-7 sm:p-8 bg-[#FAFCFD] border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-950 mb-1">
                Direct Phone Call
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Speak directly with academy coordinators and coaches.
              </p>
              <div className="text-sm font-semibold text-slate-900 mb-6">
                +91 95533 93769
              </div>
            </div>

            <a
              href="tel:+919553393769"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-semibold tracking-wider uppercase transition-all active:scale-98"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call +91 95533 93769</span>
            </a>
          </div>

          {/* Card 3: Location & Sessions */}
          <div className="rounded-3xl p-7 sm:p-8 bg-[#FAFCFD] border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-950 mb-1">
                Academy Base
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Dedicated training rinks and road circuits.
              </p>
              <div className="text-sm font-semibold text-slate-900 mb-2">
                Hyderabad, Telangana, India
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Morning &amp; Evening Batches</span>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Weekend &amp; Weekday Sessions
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
