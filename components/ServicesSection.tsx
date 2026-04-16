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
    desc: "Find and partner with creators aligned to your audience.",
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "UGC Content",
    icon: Video,
    desc: "High-converting content for ads and social media.",
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Video Production",
    icon: Camera,
    desc: "Professional shoots with editing & direction.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    title: "Social Management",
    icon: Smartphone,
    desc: "Strategy, posting, and engagement.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Website Development",
    icon: Code,
    desc: "Modern high-performance websites.",
    color: "from-orange-400 to-amber-500",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">

      {/* 🌈 SOFT BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Services designed for growth
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Scale your brand with strategy, creators, and execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                {/* OUTER GRADIENT BORDER */}
                <div
                  className={`p-[1px] rounded-2xl transition-all duration-300
                  ${isActive
                      ? `bg-gradient-to-br ${service.color}`
                      : "bg-transparent group-hover:bg-gradient-to-br group-hover:from-sky-200 group-hover:to-purple-200"
                    }`}
                >

                  {/* INNER CARD */}
                  <div
                    className={`rounded-2xl p-6 h-full transition-all duration-300
                    ${isActive
                        ? "bg-white shadow-xl"
                        : "bg-white/70 backdrop-blur-md"
                      }`}
                  >

                    {/* ICON */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4
                      ${isActive
                          ? `bg-gradient-to-br ${service.color} text-white`
                          : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      <service.icon />
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
                    <div
                      className={`mt-5 flex items-center gap-2 text-sm font-medium transition
                      ${isActive ? "text-slate-900" : "text-sky-600"}
                      group-hover:translate-x-1`}
                    >
                      Learn more <ArrowRight size={16} />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full
            bg-gradient-to-r from-slate-900 to-slate-700 text-white
            hover:scale-105 transition shadow-lg"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}