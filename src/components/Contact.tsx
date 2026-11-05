"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2">
            Contact and admissions
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-3">
            Skating admissions in Hyderabad
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Reach out for batch timings, equipment guidance, or to book a trial session for your child.
          </p>
        </div>

        {/* Clean Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          
          {/* Card 1: WhatsApp Inquiries */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  WhatsApp chat
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Fastest way to get current fee structure and batch availability.
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-6">
                {siteConfig.phoneDisplay}
              </p>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 inline-flex items-center justify-center px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Card 2: Direct Phone Call */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Phone call
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Speak directly with coaching staff about skater evaluation.
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-6">
                {siteConfig.phoneDisplay}
              </p>
            </div>

            <a
              href={siteConfig.phoneLink}
              className="h-11 inline-flex items-center justify-center px-4 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Call now
            </a>
          </div>

          {/* Card 3: Location & Sessions */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Academy location
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {siteConfig.address}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 mb-4">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Morning and evening batches</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="h-11 inline-flex items-center justify-center px-4 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              View batches &amp; trial form
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
