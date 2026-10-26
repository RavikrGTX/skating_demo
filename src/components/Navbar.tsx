"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Wordmark (Reference Left) */}
        <Link href="/" className="group flex items-center gap-2.5 text-white">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-heading font-black text-amber-400 text-sm tracking-tighter">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
              BRILLIANT
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-white/80 uppercase -mt-0.5">
              Speed Skating Academy
            </span>
          </div>
        </Link>

        {/* Center Floating Pill Navigation (Reference Center Pill) */}
        <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium tracking-wide shadow-lg">
          <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Hyderabad, Telangana
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <a
            href="tel:+919553393769"
            className="hover:text-white transition-colors"
          >
            +91 95533 93769
          </a>
        </nav>

        {/* Right CTA / Contact (Reference Right) */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919553393769"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call</span>
          </a>

          <a
            href="https://wa.me/919553393769?text=Hello%20Brilliant%20Speed%20Skating%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white text-slate-900 font-medium text-xs tracking-wide hover:bg-white/90 transition-all duration-200 shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </header>
  );
}
