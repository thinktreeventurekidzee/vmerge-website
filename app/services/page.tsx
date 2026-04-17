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
    <section className="relative overflow-hidden bg-[#eaf4ff] py-16 sm:py-20 md:py-28">

      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-sky-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
            Services designed for growth
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-700">
            Everything you need to scale with creators.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((service) => (
            <div key={service.id} className="group">

              <div className="p-[1px] rounded-2xl bg-transparent 
              sm:group-hover:bg-gradient-to-br sm:group-hover:from-yellow-400 sm:group-hover:to-orange-400
              transition-all duration-300">

                <div className="rounded-2xl p-5 sm:p-6 bg-white shadow-sm
                transition-all duration-300 sm:group-hover:shadow-2xl sm:group-hover:-translate-y-1">

                  {/* ICON */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl mb-4
                  bg-yellow-100 text-yellow-600
                  sm:group-hover:bg-gradient-to-br sm:group-hover:from-yellow-400 sm:group-hover:to-orange-400 sm:group-hover:text-white transition">
                    <service.icon size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-yellow-500 text-sm font-medium sm:group-hover:translate-x-1 transition">
                    Learn more <ArrowRight size={16} />
                  </div>

                  {/* 🔥 MOBILE FIX (always visible) */}
                  <div className="mt-4 sm:mt-0 sm:overflow-hidden sm:max-h-0 sm:group-hover:max-h-40 transition-all duration-500">

                    <div className="border-t border-slate-200 pt-4 mt-4">

                      <ul className="space-y-2 text-sm text-slate-600">
                        {service.note.split("•").map((feature, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-yellow-500">✔</span>
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
        <div className="mt-12 sm:mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}