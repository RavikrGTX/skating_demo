"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] text-slate-700 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading text-2xl font-black tracking-tight text-slate-950">
                  BRILLIANT
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <p className="text-xs font-bold tracking-[0.22em] text-slate-500 uppercase mb-4">
                Speed Skating Academy
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
                “Building confidence, discipline and speed — one stride at a time.”
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-slate-950 transition-colors">
                  About Academy
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-slate-950 transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-slate-950 transition-colors">
                  Parent Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-950 transition-colors">
                  Contact &amp; Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Action (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Inquiries
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Call or message our coordinators for current batch availability.
              </p>
              <a
                href="tel:+919553393769"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-950 hover:text-amber-600 transition-colors mb-4"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 95533 93769</span>
              </a>
            </div>

            <div>
              <a
                href="https://wa.me/919553393769?text=Hello%20Brilliant%20Speed%20Skating%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Brilliant Speed Skating Academy. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
