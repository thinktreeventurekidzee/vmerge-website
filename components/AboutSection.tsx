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
    <section
      className="relative overflow-hidden 
      bg-gradient-to-br from-sky-50 via-blue-100/40 to-blue-50 
      py-20 md:py-28"
    >
      {/* 🌤️ SKY GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/40 px-4 py-2 text-sm font-semibold text-slate-700 bg-white/70 backdrop-blur-xl shadow-sm">
            <BadgeCheck size={16} />
            Trusted by growth-focused brands
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Built for structured, high-performance campaign execution
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We design and execute creator-driven campaigns with a system-first approach — 
            ensuring clarity in planning, speed in execution, and measurable business outcomes.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Built for brands that value execution clarity
              </h3>
              <p className="mt-3 text-slate-600">
                We combine creator discovery, campaign planning, and execution systems 
                to make collaborations faster, cleaner, and easier to manage.
              </p>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/70 backdrop-blur-xl border border-blue-200/40 p-5 rounded-xl shadow-sm text-center"
                >
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* RIGHT - FEATURES */}
          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                {...fadeUp}
                className="p-6 bg-white/70 backdrop-blur-xl rounded-xl border border-blue-200/40 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{title}</h4>
                    <p className="text-slate-600 mt-1 text-sm">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PILLARS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              className="p-6 bg-white/70 backdrop-blur-xl rounded-xl border border-blue-200/40 shadow-sm"
            >
              <Zap className="mb-3 text-blue-700" />
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="text-slate-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA BLOCK */}
        <motion.div
          {...fadeUp}
          className="mt-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to build something impactful?
          </h3>

          <a
            href="#contact"
            className="inline-block mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition"
          >
            Contact Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}