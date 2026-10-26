"use client";

import Image from "next/image";

const testimonials = [
  {
    author: "Srinivas Rao",
    role: "Parent of 8-Year-Old Skater",
    quote:
      "My son was scared of falling on his first day. The coaches were very patient and taught him step-by-step balance. Now he loves skating and goes to the track with a big smile.",
  },
  {
    author: "Rajesh",
    role: "Parent of Junior Skater",
    quote:
      "The coaches focus on safety and good basics first — proper helmet, knee pads, and correct balance. It has made my daughter active, confident, and very disciplined.",
  },
  {
    author: "Aditya",
    role: "Speed Skating Student, Hyderabad",
    quote:
      "The morning practice sessions in Hyderabad are fun and challenging. Learning how to turn smoothly and pick up speed has helped me a lot. The coaches are always encouraging.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FBF7F0] text-slate-900 border-t border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and 3 Stacked Simple Testimonials */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Heading - Elegant & Clean */}
            <div className="mb-10 sm:mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 block mb-2">
                Words from Families
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.08]">
                What Parents &amp;<br />Skaters Say
              </h2>
            </div>

            {/* Testimonials List */}
            <div className="space-y-8 sm:space-y-10">
              {testimonials.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm font-bold text-slate-950 tracking-tight">
                      {item.author}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Real Photo of Kids Skating Class */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-xl border border-white/60">
              <Image
                src="/images/kids_skating_class.jpg"
                alt="Kids learning inline skating with coaches and parents in skating academy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              
              {/* Bottom Inset Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <div className="bg-black/55 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="font-semibold">Junior Skaters &amp; Beginners Training</span>
                  <span className="text-white/70 ml-2">• Hyderabad</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
