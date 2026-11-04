"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  spanClass: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/hero_skater.jpg",
    alt: "Speed skaters leaning into banked curve on track",
    caption: "Banked Curve Velocity",
    spanClass: "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/10]",
  },
  {
    src: "/images/skating_achievements2.jpg",
    alt: "Junior skaters celebrating medal victories",
    caption: "Podium Champions",
    spanClass: "col-span-1 aspect-[4/3] md:aspect-[4/5]",
  },
  {
    src: "/images/skate_wheels.jpg",
    alt: "Close-up of competition inline speed skate wheels",
    caption: "Chassis Alignment",
    spanClass: "col-span-1 aspect-[4/3] md:aspect-[4/5]",
  },
  {
    src: "/images/kids_skating_class.jpg",
    alt: "Junior skaters training rhythm in outdoor park",
    caption: "Morning Practice",
    spanClass: "col-span-1 md:col-span-2 aspect-[16/9]",
  },
  {
    src: "/images/curve_race.jpg",
    alt: "Skaters navigating curve during paceline sprint",
    caption: "Sprint Paceline",
    spanClass: "col-span-1 aspect-[4/3] md:aspect-square",
  },
  {
    src: "/images/skating_achievments1.jpeg",
    alt: "State and district championship medals and trophies",
    caption: "Medal Record",
    spanClass: "col-span-1 aspect-[4/3] md:aspect-square",
  },
];

export default function GalleryLightbox() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const isOpen = selectedIndex !== null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! + 1) % GALLERY_IMAGES.length));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose, handleNext, handlePrev]);

  return (
    <div>
      {/* Masonry / Bento Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.src}
            className={`group relative rounded-2xl overflow-hidden bg-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 ${img.spanClass}`}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View enlarged photo: ${img.caption}`}
              className="relative w-full h-full block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Bottom Caption pill on hover */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="font-semibold tracking-wide bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {img.caption}
                </span>
                <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && selectedIndex !== null && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-200"
          onClick={(e) => {
            if (e.target === modalRef.current) handleClose();
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close Lightbox (Esc)"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Image (Left arrow)"
            className="absolute left-2 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center animate-scaleIn">
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center text-white/80 text-xs sm:text-sm font-medium">
              {GALLERY_IMAGES[selectedIndex].caption} ({selectedIndex + 1} of{" "}
              {GALLERY_IMAGES.length})
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image (Right arrow)"
            className="absolute right-2 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

