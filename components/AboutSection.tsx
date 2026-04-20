"use client";

import {
  Users,
  Globe,
  ArrowUpRight,
  BadgeCheck,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const features = [
  {
    icon: Users,
    title: "Structured creator matching",
    desc: "We align brands with creators based on audience relevance, content fit, and campaign intent.",
  },
  {
    icon: Globe,
    title: "System-driven execution",
    desc: "Every campaign follows a clear workflow for approvals, timelines, and delivery coordination.",
  },
  {
    icon: LineChart,
    title: "Performance-focused delivery",
    desc: "Execution is optimized around engagement quality, reach efficiency, and measurable outcomes.",
  },
];

const metrics = [
  { value: "500+", label: "Brand collaborations" },
  { value: "100+", label: "Content categories" },
  { value: "2x", label: "Faster execution" },
];

export default function AboutSection() {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div {...fadeUp}>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 py-1.5 text-xs sm:text-sm bg-white">
            <BadgeCheck size={14} className="text-blue-700" />
            <span className="text-blue-700 font-medium">
              Trusted by growth-focused brands
            </span>
          </div>

          {/* 🔥 FULL WIDTH HEADING */}
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl">
            Built for{" "}
            <span className="text-blue-700">
              structured, high-performance
            </span>{" "}
            campaign execution
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            We design and execute creator-driven campaigns with a system-first approach.
          </p>
        </motion.div>

        {/* METRICS */}
        <motion.div
          {...fadeUp}
          className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-md"
        >
          {metrics.map((item) => (
            <div
              key={item.label}
              className="bg-white p-3 rounded-xl text-center shadow-sm border border-slate-100"
            >
              <p className="text-lg font-bold text-blue-700">
                {item.value}
              </p>
              <p className="text-xs text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* FEATURES (VERTICAL STACK) */}
        <div className="mt-10 space-y-4 max-w-3xl">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-3 items-start">
                <Icon size={18} className="text-blue-700 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition font-semibold shadow-md"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}