"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Training", href: "#training" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-4 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram + Title */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-heading font-black text-amber-400 text-sm tracking-tighter transition-transform duration-200 group-hover:scale-105">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
              {SITE_CONFIG.shortName.toUpperCase()}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-white/80 uppercase -mt-0.5">
              {SITE_CONFIG.subtitle}
            </span>
          </div>
        </Link>

        {/* Center: Floating Glass Pill Navigation (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 sm:gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium tracking-wide shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Phone link & White Enquire Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE_CONFIG.phoneLink}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call</span>
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white text-slate-900 font-medium text-xs tracking-wide hover:bg-white/90 hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>Enquire</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
          <nav className="flex flex-col gap-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between px-2">
              <a
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 py-2"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
