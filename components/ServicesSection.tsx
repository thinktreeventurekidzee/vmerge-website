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
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">

      {/* BG BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-sky-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-purple-300/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Services designed for growth
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            Scale your brand with strategy, creators, and execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >

                {/* OUTER */}
                <div
                  className={`p-[1px] rounded-xl sm:rounded-2xl transition-all duration-300
                  ${
                    isActive
                      ? `bg-gradient-to-br ${service.color}`
                      : "bg-transparent sm:group-hover:bg-gradient-to-br sm:group-hover:from-sky-200 sm:group-hover:to-purple-200"
                  }`}
                >

                  {/* INNER */}
                  <div
                    className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-white shadow-xl"
                        : "bg-white/80 backdrop-blur-md"
                    }`}
                  >

                    {/* ICON */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl mb-3 sm:mb-4
                      ${
                        isActive
                          ? `bg-gradient-to-br ${service.color} text-white`
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <service.icon size={20} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-base sm:text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* CTA */}
                    <div
                      className={`mt-3 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium transition
                      ${isActive ? "text-slate-900" : "text-sky-600"}
                      sm:group-hover:translate-x-1`}
                    >
                      Learn more <ArrowRight size={14} />
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-20 md:mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full
            bg-gradient-to-r from-blue-900 to-blue-700 text-white
            hover:scale-105 transition shadow-lg"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}