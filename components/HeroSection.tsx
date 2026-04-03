"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-white lg:bg-transparent pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24">

      {/* ✅ BACKGROUND IMAGE (DESKTOP ONLY) */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-b.jpeg')",
        }}
      />

      {/* ✅ LEFT SIDE GRADIENT (TEXT CLEAR) */}
      <div className="hidden lg:block absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* ✅ CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">

        {/* 🔥 LEFT */}
        <div>

          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800"
          >
            <BadgeCheck size={16} />
            Trusted by growth-focused brands
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-950"
          >
            Turn creator partnerships into measurable brand growth
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-700 max-w-xl"
          >
            <span className="font-semibold text-slate-900">VERGE</span> helps brands scale campaigns with better creator fit and stronger results.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="/brands"
              className="bg-slate-950 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition"
            >
              Start Campaign <ArrowUpRight size={16} />
            </a>

            <a
              href="/work"
              className="border px-6 py-3 rounded-full hover:bg-slate-50 transition"
            >
              View Work
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-10 grid grid-cols-3 gap-4 border-t pt-6"
          >
            <div>
              <p className="text-xl font-bold">50+</p>
              <p className="text-sm text-slate-600">Brands</p>
            </div>
            <div>
              <p className="text-xl font-bold">10+</p>
              <p className="text-sm text-slate-600">Categories</p>
            </div>
            <div>
              <p className="text-xl font-bold">2x</p>
              <p className="text-sm text-slate-600">Growth</p>
            </div>
          </motion.div>

        </div>

        {/* 🔥 RIGHT SIDE IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex justify-center"
        >

          <div className="relative w-[340px] sm:w-[420px] h-[280px] sm:h-[320px]">

            {/* BACK LEFT */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -4 }}
              className="absolute top-6 left-0 w-[200px] sm:w-[260px] rounded-2xl overflow-hidden shadow-xl border bg-white"
            >
              <Image src="/creator-1.jpeg" alt="" width={300} height={200} className="h-[160px] sm:h-[180px] object-cover" />
            </motion.div>

            {/* BACK RIGHT */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 4 }}
              className="absolute top-0 right-0 w-[200px] sm:w-[260px] rounded-2xl overflow-hidden shadow-xl border bg-white"
            >
              <Image src="/creator-2.jpeg" alt="" width={300} height={200} className="h-[160px] sm:h-[180px] object-cover" />
            </motion.div>

            {/* FRONT */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] sm:w-[300px] rounded-3xl overflow-hidden shadow-2xl border bg-white z-10"
            >
              <Image src="/creator-3.jpeg" alt="" width={400} height={250} className="h-[200px] sm:h-[220px] object-cover" />
            </motion.div>

          </div>

          {/* FLOATING TAGS */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-[-10px] right-5 bg-white px-4 py-2 rounded-xl shadow border text-sm font-semibold"
          >
            🚀 High Growth
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-[-10px] left-5 bg-white px-4 py-2 rounded-xl shadow border text-sm font-semibold"
          >
            🎯 Creator Match
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}