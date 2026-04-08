"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Video, 
  Camera, 
  Smartphone, 
  Code 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Influencer Marketing",
    icon: Users,
    desc: "Find and partner with the right creators who match your brand, audience, and goals. We handle discovery, outreach, negotiation, and campaign management across YouTube, Instagram, and regional platforms.",
    note: "50K+ verified creators • Smart niche/audience matching • Full campaign execution from brief to results • Regional language specialists.",
  },
  {
    id: "02",
    title: "UGC Content Creation",
    icon: Video,
    desc: "Produce authentic user-generated content for ads, social posts, and product stories. We source creators, develop concepts, and deliver scroll-stopping videos/reels that convert.",
    note: "High-ROI ad content • Scripted authentic execution • Multi-platform formats • Detailed performance reporting with competitor insights.",
  },
  {
    id: "03",
    title: "On-Site Video Shoots",
    icon: Camera,
    desc: "Professional on-location shoots for creators, products, and brand campaigns. Full production from location scouting, equipment, crew, to final edits and delivery.",
    note: "4K cinema-grade equipment • Experienced DOPs and crew • Product/creator/location versatility • Fast turnaround delivery.",
  },
  {
    id: "04",
    title: "Social Media Management",
    icon: Smartphone,
    desc: "Complete social media strategy, content planning, posting, engagement, and growth. Platform-specific calendars, trend monitoring, and community management across all channels.",
    note: "AI-assisted content creation • Custom funnels and scheduling • 24/7 engagement monitoring • Performance optimization and reporting.",
  },
  {
    id: "05",
    title: "Website Development",
    icon: Code,
    desc: "Build fast, modern websites optimized for conversions, SEO, and brand trust. Full-stack development from design, development, to deployment and ongoing maintenance.",
    note: "Next.js/React + modern stacks • Mobile-first responsive • Performance optimized • E-commerce and booking ready.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 py-20 md:py-28 lg:py-32"
    >
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/20 blur-3xl animate-pulse" />
        <div className="absolute right-10 top-2/3 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/25 to-teal-200/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/15 blur-[100px] animate-pulse delay-2000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-5xl text-center md:mb-24 lg:mb-28">
          <span className="mx-auto inline-flex max-w-max items-center gap-2.5 rounded-2xl border-2 border-gradient-to-r from-cyan-400/80 via-emerald-400/60 to-blue-400/80 bg-white/95 px-6 py-3 text-sm font-black uppercase tracking-widest text-slate-900 shadow-2xl backdrop-blur-xl">
            <Sparkles className="h-4 w-4 shrink-0 animate-spin-slow" />
            Full-Service Creator Agency
          </span>

          <h2 className="mt-8 bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 bg-clip-text text-4xl font-black tracking-[-0.04em] text-transparent drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl">
            Everything brands need for creator-led growth
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-700 md:text-2xl md:leading-10">
            From influencer discovery and UGC production to professional shoots, social management, and full websites—we handle every digital touchpoint with strategy, execution, and results.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <ul className="grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <li key={service.id} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  className={`group relative h-full w-full overflow-hidden rounded-3xl border-2 bg-gradient-to-b from-white/95 via-white to-slate-50/80 p-8 text-left shadow-xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 md:p-10 lg:p-12 ${
                    isActive
                      ? "border-cyan-400/80 ring-4 ring-cyan-500/20 shadow-[0_35px_100px_rgba(6,182,212,0.25)] scale-[1.02] translate-y-[-8px]"
                      : "border-slate-200/70 hover:border-gradient-to-r hover:from-cyan-400/60 hover:to-emerald-400/50 hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] hover:translate-y-[-4px] hover:scale-[1.01]"
                  }`}
                >
                  {/* Animated top gradient bar */}
                  <motion.div 
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 shadow-lg"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Service icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      isActive 
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/40 ring-2 ring-cyan-400/50" 
                        : "bg-gradient-to-br from-slate-900 to-slate-800 shadow-slate-900/30 ring-2 ring-slate-200/50 hover:from-cyan-500 hover:to-emerald-500 hover:shadow-cyan-500/40 hover:ring-cyan-400/40"
                    }`}>
                      <service.icon className={`h-8 w-8 ${isActive ? "text-white" : "text-white"}`} />
                    </div>

                    <motion.span
                      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white shadow-lg shadow-cyan-500/40 ring-1 ring-cyan-400/50"
                          : "border bg-white/80 text-slate-700 shadow-sm ring-1 ring-slate-200/50 backdrop-blur group-hover:bg-gradient-to-r group-hover:from-cyan-500/90 group-hover:to-emerald-500/90 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/40 group-hover:ring-cyan-400/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Explore →
                    </motion.span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <motion.h3 
                      className="mb-6 text-2xl font-black leading-tight tracking-tight text-slate-950 transition-all duration-500 group-hover:text-cyan-700 lg:text-3xl"
                      animate={isActive ? { scale: 1.05 } : {}}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p 
                      className="mb-8 text-lg leading-8 text-slate-700 transition-all duration-500 lg:text-xl"
                      animate={isActive ? { color: "#475569" } : {}}
                    >
                      {service.desc}
                    </motion.p>

                    {/* Animated learn more */}
                    <motion.div 
                      className="mb-8 flex items-center gap-3 text-base font-semibold text-slate-600 transition-all duration-500 group-hover:text-cyan-700 lg:text-lg"
                      whileHover={{ x: 8 }}
                    >
                      <span>Learn how we deliver</span>
                      <ArrowRight className="h-5 w-5 shrink-0 transition-all duration-300" />
                    </motion.div>

                    {/* Expandable note */}
                    <motion.div
                      className={`overflow-hidden transition-all duration-700 ${
                        isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                      initial={false}
                      animate={{ height: isActive ? "auto" : 0 }}
                    >
                      <div className="border-t border-slate-200/50 pt-8">
                        <p className="text-base leading-7 text-slate-600 [&>span]:inline-block [&>span]:mr-2 [&>span]:h-5 [&>span]:w-5 [&>span]:rounded-full [&>span]:bg-emerald-100 [&>span]:p-1 [&>span]:text-emerald-700">
                          {service.note.split("•").map((feature, i) => (
                            <span key={i}>✓ {feature.trim()}</span>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated glow orb */}
                  <motion.div 
                    className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-xl transition-all duration-700 group-hover:bg-cyan-400/30"
                    animate={isActive ? { scale: 1.4, opacity: 0.4 } : { scale: 1, opacity: 0.1 }}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Enhanced CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-24 max-w-4xl text-center md:mt-32"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border-2 border-slate-200/70 bg-gradient-to-br from-white via-white/90 to-emerald-50/70 p-10 shadow-2xl backdrop-blur-2xl md:p-16 lg:p-20">
            <div className="mx-auto mb-8 max-w-2xl">
              <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
                Ready to build your next campaign?
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-slate-700 md:text-2xl">
                Share your goals and budget. Get a custom strategy with creator recommendations, content plan, and timeline within 48 hours.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6 sm:flex-row sm:gap-8">
              <Link
                href="/contact"
                className="group relative mx-auto inline-flex h-16 w-full max-w-md items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 px-8 py-4 text-lg font-black text-white shadow-2xl shadow-slate-950/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-slate-950/50 hover:shadow-3xl md:h-20 md:px-10 md:text-xl sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-2" />
              </Link>

              <Link
                href="/brands"
                className="mx-auto inline-flex h-16 w-full max-w-md items-center justify-center rounded-3xl border-2 border-slate-300/70 bg-white/90 px-8 py-4 text-lg font-black text-slate-900 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-gradient-to-r hover:from-cyan-400/70 hover:to-emerald-400/60 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 hover:shadow-2xl hover:shadow-cyan-500/30 hover:shadow-xl md:h-20 md:px-10 md:text-xl sm:w-auto"
              >
                See Brand Case Studies
              </Link>
            </div>

            <p className="mt-8 text-base font-semibold text-slate-600 md:text-lg">
              Trusted by 50+ DTC brands • 2x faster campaign delivery • Response in 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}