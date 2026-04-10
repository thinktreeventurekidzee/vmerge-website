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
  Code,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Influencer Marketing",
    icon: Users,
    desc: "Find and partner with the right creators who match your brand, audience, and goals.",
    note: "50K+ verified creators • Smart niche matching • Full campaign execution • Regional specialists",
  },
  {
    id: "02",
    title: "UGC Content Creation",
    icon: Video,
    desc: "Produce authentic user-generated content for ads and social media.",
    note: "High-ROI ad content • Scripted execution • Multi-platform formats • Performance insights",
  },
  {
    id: "03",
    title: "On-Site Video Shoots",
    icon: Camera,
    desc: "Professional shoots for creators, products, and brand campaigns.",
    note: "4K equipment • Expert crew • Versatile shoots • Fast delivery",
  },
  {
    id: "04",
    title: "Social Media Management",
    icon: Smartphone,
    desc: "Complete strategy, content planning, posting, and engagement.",
    note: "AI-assisted content • Custom funnels • 24/7 monitoring • Growth tracking",
  },
  {
    id: "05",
    title: "Website Development",
    icon: Code,
    desc: "Build fast, modern websites optimized for conversions.",
    note: "Next.js stack • Mobile-first • SEO optimized • E-commerce ready",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-100/40 to-blue-50 py-20 md:py-28">
      
      {/* BG GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
            Services designed for growth
          </h2>

          <p className="mt-4 text-lg text-slate-700">
            Everything you need to scale with creators—from strategy to execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <div
                key={service.id}
                onClick={() => setActive(isActive ? null : index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300
                bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-sm
                hover:shadow-md hover:-translate-y-1
                ${isActive ? "ring-2 ring-blue-400" : ""}`}
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <service.icon className="text-blue-600" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium">
                  Explore <ArrowRight size={16} />
                </div>

                {/* EXPAND FIXED */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-200/50 pt-4 mt-4">

                    <ul className="space-y-2 text-sm text-slate-600">
                      {service.note.split("•").map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="mt-[3px] text-emerald-600 text-xs">✔</span>
                          <span>{feature.trim()}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}