"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const creatorImages = [
  {
    src: "/creator-1.jpeg",
    title: "Creator Discovery",
    desc: "Find creators that truly match your brand.",
  },
  {
    src: "/creator-2.jpeg",
    title: "Campaign Execution", 
    desc: "Launch faster with structured influencer workflows.",
  },
  {
    src: "/creator-3.jpeg",
    title: "Performance Growth",
    desc: "Turn creator campaigns into measurable outcomes.",
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Rotating words
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    
    // Images one by one
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % creatorImages.length);
    }, 3200);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const rotatingWords = [
    "measurable growth",
    "better ROAS",
    "faster launches",
  ];

  return (
    <section className="relative overflow-hidden min-h-[92vh] pt-12 pb-16 bg-white">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0, filter: "blur(14px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-b.jpeg')" }}
      />

      {/* Premium overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/82 to-white/15 lg:from-white/95 lg:via-white/72 lg:to-transparent" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_30%)]" />

      {/* Ambient animated beam */}
      <motion.div
        initial={{ x: "-20%", opacity: 0.2 }}
        animate={{ x: "20%", opacity: 0.35 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 z-[2] h-full w-[40%] bg-gradient-to-r from-cyan-200/10 via-white/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div className="pt-6 lg:pt-14">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/85 backdrop-blur-md px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm"
          >
            <BadgeCheck size={16} />
            Trusted by modern brands for high-performance creator campaigns
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-slate-950"
          >
            Turn creator marketing into{" "}
            <span className="relative inline-block min-w-[220px] sm:min-w-[320px] align-bottom">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-slate-700"
          >
            <span className="font-semibold text-slate-950">VMERG</span> helps brands discover the right creators, launch campaigns faster, and scale performance with strategy, execution, and optimization in one place.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/brands"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-white font-semibold shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/30"
            >
              Start Your Campaign
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="/work"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-6 py-3.5 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
            >
              See Our Work
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600"
          >
            <span className="rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-slate-200">
              Strategy-led
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-slate-200">
              Creator-first
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-slate-200">
              Performance-focused
            </span>
          </motion.div>
        </div>

        {/* Right - ONE BY ONE IMAGE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center py-10 lg:py-0"
        >
          {/* Mobile */}
          <div className="flex w-full max-w-[300px] flex-col gap-4 lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-xl backdrop-blur-sm"
              >
                <Image
                  src={creatorImages[currentImage].src}
                  alt={creatorImages[currentImage].title}
                  width={300}
                  height={220}
                  className="h-[180px] w-full object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop */}
          <div className="relative hidden h-[380px] w-[400px] lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateY: 15 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 z-10 overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_32px_100px_rgba(15,23,42,0.25)] backdrop-blur-xl"
              >
                <Image
                  src={creatorImages[currentImage].src}
                  alt={creatorImages[currentImage].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{creatorImages[currentImage].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed max-w-md">
                    {creatorImages[currentImage].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
              {creatorImages.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1 }}
                  animate={{ scale: currentImage === i ? 1.4 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`h-3 w-3 rounded-full transition-all duration-500 ${
                    currentImage === i 
                      ? "bg-slate-900 shadow-lg shadow-slate-900/50" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}