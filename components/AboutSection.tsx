"use client";

import {
  Play,
  MessageCircle,
  Users,
  Globe,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const features = [
  {
    icon: Users,
    title: "Creator Network Depth",
    desc: "Access niche-fit creators across beauty, finance, gaming, tech, lifestyle and short-form content ecosystems.",
  },
  {
    icon: Globe,
    title: "Market-Ready Strategy",
    desc: "Campaign structures designed for brand fit, audience match, regional nuance and scalable rollout.",
  },
  {
    icon: MessageCircle,
    title: "Execution Clarity",
    desc: "Fast communication, cleaner approvals and tighter campaign coordination from briefing to delivery.",
  },
  {
    icon: Play,
    title: "Performance Focus",
    desc: "Every campaign is optimized around reach, engagement, conversions and measurable business outcomes.",
  },
];

const metrics = [
  { value: "50+", label: "Brand partners" },
  { value: "10+", label: "Active categories" },
  { value: "2x", label: "Faster campaign momentum" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rounded-[2rem] border border-slate-200 shadow-xl bg-white/80 backdrop-blur-xl p-8 md:p-12 lg:p-14">

          {/* HEADER */}
          <motion.div {...fadeUp} className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-cyan-50 text-cyan-700 border border-cyan-200">
              <BadgeCheck size={16} />
              Trusted by growth-focused brands
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
              Why brands trust{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
                Vmerg
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We build creator-led campaigns with stronger audience fit, cleaner
              execution and sharper performance focus.
            </p>
          </motion.div>

          {/* MAIN GRID */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Users size={24} className="text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Creator relationships that scale
              </h3>

              <p className="mt-3 text-slate-600">
                Structured influencer marketing with better execution and growth.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {metrics.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-xl font-bold text-slate-900">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FEATURES */}
            <div className="space-y-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-cyan-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* BOTTOM STRIP */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {["Strategy-first", "Creator-led execution", "Measurable growth"].map((item) => (
              <div key={item} className="p-5 border border-slate-200 rounded-2xl bg-white">
                <p className="font-semibold text-slate-900">{item}</p>
                <p className="text-sm text-slate-600 mt-2">
                  High-quality execution with performance-driven results.
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}