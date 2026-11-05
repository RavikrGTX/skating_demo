import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Admissions | Brilliant Speed Skating Academy Hyderabad",
  description:
    "Speed skating coaching in Hyderabad for ages 4 to 18. Morning and evening batches. Book a free trial class or contact our coaches directly.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F9] text-slate-900 flex flex-col pb-20 sm:pb-0">
      {/* Standard Header with Scroll-Activated Blur */}
      <Navbar />

      {/* Hero Section: Full-Bleed Real Photo with Directional Gradient */}
      <section className="relative w-full overflow-hidden bg-[#0B1220] py-20 sm:py-28 lg:py-36 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center border-b border-[#E4E7EC]">
        {/* Speed Skating Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/curve_race.jpg"
            alt="Inline speed skaters navigating banked curves in competitive training"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
          {/* Directional scrim: dark on left behind text, clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/80 to-transparent sm:via-[#0B1220]/65 sm:to-transparent" />
        </div>

        {/* Hero Content (Left-Aligned in 12-Column Grid) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[62ch]">
            <p className="text-sm font-medium text-slate-300 mb-3 tracking-wide">
              Contact and admissions
            </p>

            <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4">
              Speed skating coaching in Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-[1.6] mb-8 font-normal">
              Batches for beginners to competitive skaters, {siteConfig.ageRange.toLowerCase()}. Call or WhatsApp us to book a free trial session.
            </p>

            {/* CTAs: Solid Accent Button + Outline WhatsApp */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="h-12 px-6 inline-flex items-center justify-center rounded-[10px] bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-all duration-150 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
              >
                Book a trial
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/25 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all duration-150 backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slim Stats Strip (Real Academy Metrics) */}
      <section className="bg-white border-b border-[#E4E7EC] py-6 shadow-[0_1px_3px_rgba(16,24,40,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E4E7EC]">
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`py-3 md:py-0 ${idx % 2 === 1 ? "pl-4 md:pl-6" : "pr-4 md:px-6"}`}
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section: 12-Column Grid for Form and Contact Details */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Stronger Form Card */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column (5 cols): Structured Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Direct Contact */}
            <div className="bg-white rounded-[14px] border border-[#E4E7EC] p-6 sm:p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-slate-900">
                    Direct contact
                  </h2>
                  <p className="text-xs text-slate-500">Coach consultations and inquiries</p>
                </div>
              </div>

              {/* Bold Phone Display */}
              <div className="p-4 rounded-[10px] bg-slate-50 border border-slate-100 mb-4">
                <span className="block text-xs font-medium text-slate-500 mb-1">
                  Primary academy phone
                </span>
                <a
                  href={siteConfig.phoneLink}
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-amber-600 transition-colors block"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              {/* Action Rows */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={siteConfig.phoneLink}
                  className="h-11 px-4 rounded-[8px] border border-[#E4E7EC] bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-500" strokeWidth={1.75} />
                    <span>Call academy coordinator</span>
                  </span>
                  <span className="text-xs font-semibold text-amber-600">Call</span>
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-4 rounded-[8px] border border-[#E4E7EC] bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
                    <span>Message on WhatsApp</span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">Chat</span>
                </a>
              </div>

              {/* Location Strip */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>{siteConfig.address} (Banked rinks across Hyderabad)</span>
              </div>
            </div>

            {/* Card 2: Training Batches with Neutral Badges */}
            <div className="bg-white rounded-[14px] border border-[#E4E7EC] p-6 sm:p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
                  <Clock className="w-5 h-5 text-slate-700" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-slate-900">
                    Training batches
                  </h2>
                  <p className="text-xs text-slate-500">Regular training schedule</p>
                </div>
              </div>

              <div className="divide-y divide-[#E4E7EC]">
                {siteConfig.batches.map((batch) => (
                  <div key={batch.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-slate-900">
                        {batch.name}
                      </h3>
                      {/* Soft Neutral Badge (Not Orange) */}
                      <span className="inline-flex items-center px-2.5 py-1 rounded-[6px] bg-slate-100 text-slate-800 text-xs font-semibold tracking-tight shrink-0">
                        {batch.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {batch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Refined Deep Navy Contrast Panel: Trial Day Guide */}
        <div className="mt-12 lg:mt-16 bg-[#0B1220] text-white rounded-[14px] p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-[0_8px_28px_rgba(11,18,32,0.18)]">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              What to expect on your trial session
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We guide every new skater through basic balance, posture, and equipment sizing before they begin training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6 border-t border-white/10">
            {/* Column 1: What to Bring */}
            <div>
              <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-4">
                What to bring
              </h3>
              <ul className="space-y-3">
                {siteConfig.trialGuide.whatToBring.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: What We Assess */}
            <div className="md:border-l md:border-white/10 md:pl-12">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
                What we assess on track
              </h3>
              <ul className="space-y-3">
                {siteConfig.trialGuide.whatWeProvide.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar (Call & WhatsApp) */}
      <aside
        aria-label="Quick contact actions"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E4E7EC] px-4 py-3 sm:hidden flex gap-3 shadow-[0_-2px_8px_rgba(16,24,40,0.06)]"
      >
        <a
          href={siteConfig.phoneLink}
          className="flex-1 h-12 inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#E4E7EC] bg-white text-slate-900 text-sm font-semibold active:bg-slate-50 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-600" strokeWidth={2} />
          <span>Call</span>
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 inline-flex items-center justify-center gap-2 rounded-[10px] bg-amber-600 text-white text-sm font-semibold active:bg-amber-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} />
          <span>WhatsApp</span>
        </a>
      </aside>

      {/* Standard Brand Footer */}
      <Footer />
    </main>
  );
}
