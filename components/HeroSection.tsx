"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-slate-900 py-28 px-6 overflow-hidden">
      
      {/* 🌈 Soft Gradient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-80 w-80 bg-cyan-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-6rem] right-[-3rem] h-96 w-96 bg-indigo-200/40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* 🔥 LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.3em] uppercase text-cyan-600 font-medium"
          >
            Creator-first • Performance-driven
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl md:text-6xl font-bold leading-tight"
          >
            Build brands that{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
              people trust
            </span>{" "}
            with creators.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-slate-600 text-base max-w-lg leading-relaxed"
          >
            We help modern brands scale with high-performing influencer
            campaigns — from strategy to execution across YouTube, Instagram,
            UGC & creator ecosystems.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium shadow-md hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,211,238,0.4)] transition-all">
              Start Your Campaign 🚀
            </button>

            <button className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-all">
              View Case Studies →
            </button>
          </motion.div>
        </div>

        {/* 🚀 RIGHT SIDE */}
        <div className="relative h-[360px] md:h-[400px]">

          {/* Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-0 left-6 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-lg"
          >
            <p className="text-xs text-slate-500">Campaign Reach</p>
            <p className="text-2xl font-semibold text-slate-900">10M+</p>
            <p className="text-xs text-cyan-600 mt-1">Last 90 days</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-24 right-0 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-lg"
          >
            <p className="text-xs text-slate-500">Creator Network</p>
            <p className="text-2xl font-semibold text-slate-900">5K+</p>
            <p className="text-xs text-slate-500 mt-1">Verified creators</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-4 left-16 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-lg"
          >
            <p className="text-xs text-slate-500">Brands</p>
            <p className="text-2xl font-semibold text-slate-900">120+</p>
            <p className="text-xs text-indigo-600 mt-1">
              D2C • Fintech • SaaS
            </p>
          </motion.div>

          {/* subtle glow */}
          <div className="absolute -bottom-6 right-10 h-40 w-40 bg-cyan-300/40 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}