"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
    desc: "Find and partner with the right creators who match your brand.",
    note: "50K+ creators • Smart matching • Full execution • Regional experts",
  },
  {
    id: "02",
    title: "UGC Content Creation",
    icon: Video,
    desc: "Produce authentic content for ads and social media.",
    note: "High ROI • Scripted content • Multi-platform • Performance insights",
  },
  {
    id: "03",
    title: "On-Site Video Shoots",
    icon: Camera,
    desc: "Professional shoots for creators and brands.",
    note: "4K setup • Expert crew • Fast delivery • Creative direction",
  },
  {
    id: "04",
    title: "Social Media Management",
    icon: Smartphone,
    desc: "Strategy, posting, and engagement.",
    note: "AI content • Funnels • Monitoring • Growth tracking",
  },
  {
    id: "05",
    title: "Website Development",
    icon: Code,
    desc: "Modern websites optimized for conversions.",
    note: "Next.js • Mobile-first • SEO • E-commerce ready",
  },
];

export default function ServicesSection() {
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
            Everything you need to scale with creators.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">

              {/* OUTER BORDER */}
              <div className="p-[1px] rounded-2xl bg-transparent 
              group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-purple-400
              transition-all duration-300">

                {/* CARD */}
                <div className="rounded-2xl p-6 bg-white/80 backdrop-blur-xl 
                transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4
                  bg-slate-100 text-slate-600
                  group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-purple-400 group-hover:text-white transition">
                    <service.icon />
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
                  <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition">
                    Explore <ArrowRight size={16} />
                  </div>

                  {/* HOVER EXPAND */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">

                    <div className="border-t border-slate-200/50 pt-4 mt-4">

                      <ul className="space-y-2 text-sm text-slate-600">
                        {service.note.split("•").map((feature, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-500">✔</span>
                            <span>{feature.trim()}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          ))}

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