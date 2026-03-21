"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-slate-50 py-28 px-6 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-2rem] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-400"
          >
            Creator‑first. Performance‑driven.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-4xl md:text-6xl font-semibold leading-tight"
          >
            Scale your brand
            <br />
            with{" "}
            <span className="text-emerald-400">
              high‑intent creator campaigns.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-slate-300 text-sm md:text-base max-w-xl"
          >
            yourBrand works as an embedded growth partner—planning, executing
            and scaling influencer campaigns across YouTube, Instagram, UGC and
            meme pages for digital‑first brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 rounded-full bg-emerald-400 text-slate-950 text-sm font-medium hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition">
              Book a strategy call
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-700 text-sm text-slate-200 hover:border-emerald-400 hover:bg-slate-900/60 transition">
              View case studies
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE – floating stats */}
        <div className="relative h-[320px] md:h-[340px]">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-0 left-6 bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-xs text-slate-400">Campaign reach</p>
            <p className="text-2xl font-semibold text-slate-50">10M+</p>
            <p className="text-xs text-emerald-300 mt-1">Last 90 days</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="absolute top-20 right-0 bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-xs text-slate-400">Creator network</p>
            <p className="text-2xl font-semibold text-slate-50">5k+</p>
            <p className="text-xs text-slate-400 mt-1">Vetted influencers</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-4 left-16 bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-xs text-slate-400">Brands we partner with</p>
            <p className="text-2xl font-semibold text-slate-50">120+</p>
            <p className="text-xs text-emerald-300 mt-1">Across D2C, fintech, SaaS</p>
          </motion.div>

          {/* subtle glow */}
          <div className="pointer-events-none absolute -bottom-4 right-8 h-32 w-32 rounded-full bg-emerald-500/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
