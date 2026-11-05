"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Reviews", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xs"
          : "bg-slate-950 border-b border-slate-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Academy Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          aria-label="Brilliant Speed Skating Academy"
        >
          <div className="relative h-10 w-10 rounded-[10px] overflow-hidden bg-white p-1 border border-slate-700 shrink-0">
            <Image
              src="/images/logo_final.jpg"
              alt="Brilliant Speed Skating Academy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-white text-sm sm:text-base tracking-tight">
            Brilliant Speed Skating
          </span>
        </Link>

        {/* Center / Right: Standard Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Phone & Solid Accent "Enquire" Button */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneLink}
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-500" strokeWidth={2} />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-all duration-150 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs"
          >
            Enquire
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 text-sm font-medium text-amber-500 px-3 py-2"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
