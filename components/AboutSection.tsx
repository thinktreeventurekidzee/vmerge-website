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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16 sm:py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white">
            <BadgeCheck size={16} className="text-blue-700" />
            <span className="text-blue-700 font-medium">
              Trusted by growth-focused brands
            </span>
          </div>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Built for{" "}
            <span className="text-blue-700">
              structured, high-performance
            </span>{" "}
            campaign execution
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600">
            We design and execute creator-driven campaigns with a system-first approach.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-6 sm:space-y-8">

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                Built for brands that value execution clarity
              </h3>
              <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base">
                We combine creator discovery, campaign planning, and execution systems.
              </p>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-3 sm:p-4 rounded-xl text-center shadow-sm border border-slate-100"
                >
                  <p className="text-lg sm:text-2xl font-bold text-blue-700">
                    {item.value}
                  </p>
                  <p className="text-[10px] sm:text-sm text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-red-500 text-white px-5 sm:px-6 py-3 rounded-xl hover:bg-red-600 transition font-semibold shadow-md hover:shadow-lg"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>

          </motion.div>

          {/* RIGHT */}
          <div className="space-y-4 sm:space-y-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                {...fadeUp}
                className="p-4 sm:p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Icon size={20} className="text-blue-700 mt-1" />
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

        </div>

        {/* CTA BLOCK */}
        <motion.div
          {...fadeUp}
          className="mt-14 sm:mt-20 text-center bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg sm:text-xl md:text-3xl font-semibold leading-snug">
            Ready to build something impactful?
          </h3>

          <Link
            href="/contact"
            className="inline-block mt-5 sm:mt-6 bg-red-500 hover:bg-red-600 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold transition shadow-md"
          >
            Contact Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
}