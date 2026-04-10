"use client";

import { useState } from "react";
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
    title: "Influencer Marketing",
    icon: Users,
    desc: "Find and partner with creators aligned to your audience and campaign goals.",
  },
  {
    title: "UGC Content",
    icon: Video,
    desc: "High-converting user-generated content for ads and social media.",
  },
  {
    title: "Video Production",
    icon: Camera,
    desc: "Professional shoots with full production and editing.",
  },
  {
    title: "Social Management",
    icon: Smartphone,
    desc: "Strategy, content planning, posting, and engagement.",
  },
  {
    title: "Website Development",
    icon: Code,
    desc: "Modern websites optimized for performance and conversions.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-100/40 to-blue-50 py-20 md:py-28"
    >
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
                key={index}
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
                <p className="mt-2 text-slate-600 text-sm">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium">
                  Learn more <ArrowRight size={16} />
                </div>
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