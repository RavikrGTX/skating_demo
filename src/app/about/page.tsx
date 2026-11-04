import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Zap,
  Trophy,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowUpRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG, IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Brilliant Speed Skating Academy Hyderabad",
  description:
    "Learn about Brilliant Speed Skating Academy in Hyderabad. Professional inline speed skating coaching, championship pathways, and certified trainers.",
};

const STATS = [
  { value: "500+", label: "Athletes Trained" },
  { value: "15+", label: "Championship Medals" },
  { value: "8+ Years", label: "Coaching Excellence" },
  { value: "100%", label: "Safety & Form Focus" },
];

const PILLARS = [
  {
    tag: "[ 01 / TECHNIQUE ]",
    label: "Aerodynamics",
    title: "Precision Stride Mechanics",
    desc: "Speed begins with posture. We train skaters in deliberate push angles, core stability, and high-velocity cadence.",
    image: IMAGES.skateWheels,
    alt: "Precision inline skate wheels and frame setup",
    icon: Compass,
    accent: "amber",
  },
  {
    tag: "[ 02 / VELOCITY ]",
    label: "Paceline Drills",
    title: "Track & Curve Dynamics",
    desc: "Mastering banked curves, corner acceleration, and drafting strategies without losing forward momentum.",
    image: IMAGES.curveRace,
    alt: "Inline speed skaters taking banked curves",
    icon: Zap,
    accent: "sky",
  },
  {
    tag: "[ 03 / MINDSET ]",
    label: "Champions",
    title: "Resilience & Sportsmanship",
    desc: "Building fearless young athletes who thrive under competition pressure and embrace healthy athletic discipline.",
    image: IMAGES.teamTrack,
    alt: "Athletes training on track with coach",
    icon: Trophy,
    accent: "emerald",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      {/* Consistent Global Navbar */}
      <Navbar />

      {/* Hero Section for About Page */}
      <section className="relative min-h-[75vh] sm:min-h-[82vh] w-full flex flex-col justify-end overflow-hidden pb-14 sm:pb-20 pt-36 sm:pt-44">
        {/* Cinematic Background Image with dark gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero}
            alt="Inline speed skaters in Hyderabad racing at high velocity"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[1.05] brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          {/* Antigravity-Style Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>About The Academy</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            ENGINEERED FOR SPEED.<br />
            <span className="text-white/85 font-light tracking-normal">
              BUILT FOR CHAMPIONS.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-white/80 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
            Hyderabad&apos;s dedicated speed skating academy shaping confidence, athletic discipline, and podium medalists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/90 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Enquire About Classes</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
            </a>

            <a
              href="#pillars"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
            >
              <span>Our Pillars</span>
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-lg">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left p-2">
              <div className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: The Core Pillars (Bento Grid) */}
      <section id="pillars" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                FOUNDATIONS OF EXCELLENCE
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
                How We Train Skaters.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-sm font-normal">
              Structured progressive coaching from first balance to competitive racing.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} direction="up" delay={idx * 100}>
                <div className="group h-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                          {pillar.tag}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider">
                          {pillar.label}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Fixed Aspect Photo with smooth zoom */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Section 2: Proven Championship Record */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Visual Grid of Achievements */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <Reveal direction="up" delay={0} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={IMAGES.achievements1}
                  alt="Brilliant Speed Skating Academy trophy and medal achievements"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-amber-300">
                  District &amp; State Medals
                </div>
              </Reveal>

              <Reveal direction="up" delay={120} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md mt-6 sm:mt-10">
                <Image
                  src="/images/skating_achievements2.jpg"
                  alt="Student skaters celebrating podium victory"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white">
                  Our Champions
                </div>
              </Reveal>
            </div>

            {/* Description & Accreditations */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal direction="left" delay={150}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-4">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Podium Track Record</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-4">
                  Nurturing State &amp; National Medalists.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  Our skaters regularly compete and win in Telangana state circuits, district meets, and national competitions. We don&apos;t just teach skating—we instill athletic discipline and competitive spirit.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Age-appropriate training pathways (Ages 4 to Adults)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Safety-first gear protocols with zero compromises</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated training tracks &amp; banked curves in Hyderabad</span>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-slate-800 hover:shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Talk to a Coach on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Training Schedules & Hyderabad Circuits */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal direction="up">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 block mb-3">
                TRAINING VENUES &amp; TIMINGS
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Join Our Next Batch in Hyderabad.
              </h2>
              <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed mb-8">
                Sessions take place at dedicated skating circuits across Hyderabad. Both morning and evening batches available for beginners, intermediate, and racing athletes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading text-sm font-bold text-white">Daily Batches</div>
                    <div className="text-xs text-white/70 mt-0.5">{SITE_CONFIG.timing}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading text-sm font-bold text-white">Location</div>
                    <div className="text-xs text-white/70 mt-0.5">{SITE_CONFIG.city}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/90 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-slate-700" />
                  <span>Enquire For Batch Details</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/15"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Consistent Global Footer */}
      <Footer />
    </main>
  );
}

