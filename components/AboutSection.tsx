"use client";

import {
  Users,
  Globe,
  ArrowUpRight,
  BadgeCheck,
  LineChart,
  Zap,
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
  { value: "50+", label: "Brand collaborations" },
  { value: "10+", label: "Content categories" },
  { value: "2x", label: "Faster execution" },
];

const pillars = [
  {
    title: "Strategy-first approach",
    desc: "Every campaign begins with a clear plan aligned to business goals and audience intent.",
  },
  {
    title: "Execution clarity",
    desc: "Structured workflows ensure smoother communication and faster delivery cycles.",
  },
  {
    title: "Measured outcomes",
    desc: "Campaign performance is tracked through engagement quality and business impact.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-100/40 to-blue-50 py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm bg-white/70">
            <BadgeCheck size={16} />
            Trusted by growth-focused brands
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Built for structured, high-performance campaign execution
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600">
            We design and execute creator-driven campaigns with a system-first approach.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-8">

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Built for brands that value execution clarity
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                We combine creator discovery, campaign planning, and execution systems.
              </p>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {metrics.map((item) => (
                <div key={item.label} className="bg-white p-4 rounded-xl text-center">
                  <p className="text-xl sm:text-2xl font-bold">{item.value}</p>
                  <p className="text-xs sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            {/* ✅ CTA FIX */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>

          </motion.div>

          {/* RIGHT */}
          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} {...fadeUp} className="p-5 bg-white rounded-xl">
                <div className="flex gap-4">
                  <Icon />
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA BLOCK */}
        <motion.div {...fadeUp} className="mt-20 text-center bg-slate-900 text-white p-8 rounded-2xl">

          <h3 className="text-xl sm:text-2xl md:text-3xl">
            Ready to build something impactful?
          </h3>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl"
          >
            Contact Now
          </Link>

        </motion.div>

      </div>
    </section>
  );
}