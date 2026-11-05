import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MessageCircle,
  Sun,
  Sunset,
  Play,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG, VIDEOS } from "@/lib/site";
import LevelsSection from "@/components/training/LevelsSection";
import VideoPlayer from "@/components/training/VideoPlayer";
import GalleryLightbox from "@/components/training/GalleryLightbox";

export const metadata: Metadata = {
  title: "Skating Training in Hyderabad | Brilliant Speed Skating Academy",
  description:
    "Professional inline speed skating classes for all levels in Hyderabad. Beginner to competitive racing squad with certified coaches.",
  openGraph: {
    title: "Skating Training in Hyderabad | Brilliant Speed Skating Academy",
    description: "Train. Improve. Race. Classes for every level in Hyderabad.",
    images: ["/images/hero_skater_3.jpg"],
  },
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Consistent Global Navbar */}
      <Navbar />

      {/* 3.1 Page Hero */}
      <section className="relative min-h-[75vh] sm:min-h-[82vh] w-full flex flex-col justify-end overflow-hidden pb-14 sm:pb-20 pt-36 sm:pt-44">
        {/* Full-width rounded image background with slow entrance zoom and dark gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero_skater_3.jpg"
            alt="Inline speed skaters training in Hyderabad circuit"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[1.05] brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <Reveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>TRAINING</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
              Train. Improve. Race.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-sm sm:text-lg text-white/85 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
              Classes for every level in Hyderabad.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/90 hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
              </a>

              <a
                href="#videos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white" />
                <span>Watch Videos</span>
              </a>

              {/* CTA to About Us Page */}
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 group"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3.2 Levels Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                PROGRESSIVE CURRICULUM
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
                Training Built for Every Speed.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm sm:text-base text-slate-600 max-w-sm font-normal">
                Structured pathways from first stride to national championship circuits.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0"
              >
                <span>About Academy &amp; Coaches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Levels Component with SVG track line */}
        <LevelsSection />
      </section>

      {/* 3.3 Videos Section (Main Feature) */}
      <section id="videos" className="py-20 sm:py-28 bg-white border-y border-slate-200/70 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="mb-10 sm:mb-14 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                WATCH
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
                See Us in Action.
              </h2>
            </div>
          </Reveal>

          {/* Privacy-Friendly YouTube Lite Facade */}
          <VideoPlayer videos={VIDEOS} />
        </div>
      </section>

      {/* 3.4 Photo Gallery */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal direction="up">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
              GALLERY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
              Moments on Wheels.
            </h2>
          </div>
        </Reveal>

        {/* Masonry Photo Grid with Accessible Lightbox */}
        <GalleryLightbox />
      </section>

      {/* 3.5 Batches Section */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="mb-10 max-w-xl text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                SCHEDULE
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
                Pick Your Batch.
              </h2>
            </div>
          </Reveal>

          {/* 2 Simple Batch Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mb-8">
            {/* Morning Batch */}
            <Reveal direction="up" delay={50}>
              <div className="h-full bg-[#FAFCFD] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600 shrink-0">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-950 mb-1">
                    Morning Batch
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    Fresh start. Cool air.
                  </p>
                  {/* TODO: add real timings (e.g., 6:00 AM - 7:30 AM) */}
                </div>
              </div>
            </Reveal>

            {/* Evening Batch */}
            <Reveal direction="up" delay={150}>
              <div className="h-full bg-[#FAFCFD] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/70 flex items-center justify-center text-sky-600 shrink-0">
                  <Sunset className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-950 mb-1">
                    Evening Batch
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    After school. Great energy.
                  </p>
                  {/* TODO: add real timings (e.g., 5:30 PM - 7:00 PM) */}
                </div>
              </div>
            </Reveal>
          </div>

          {/* About Us Academy Quick Callout */}
          <Reveal direction="up" delay={200}>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Want to learn about our championship records and certified coaching faculty?
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-amber-600 uppercase tracking-wider transition-colors shrink-0"
              >
                <span>Read About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3.6 Final Call to Action */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal direction="up">
          <div className="rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 block mb-2">
                START TODAY
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                Ready to Skate?
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-medium">
                Message us today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/90 hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-slate-700" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-white/90 text-xs sm:text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Consistent Global Footer */}
      <Footer />
    </main>
  );
}
