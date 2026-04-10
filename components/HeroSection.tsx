"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = [
  "measurable growth",
  "better ROAS",
  "faster launches",
];

const creatorImages = [
  {
    src: "/creator-1.jpeg",
    title: "Creator Discovery",
    desc: "Find creators aligned with your audience.",
  },
  {
    src: "/creator-2.jpeg",
    title: "Campaign Execution",
    desc: "Structured workflows for faster launches.",
  },
  {
    src: "/creator-3.jpeg",
    title: "Performance Scaling",
    desc: "Turn campaigns into real outcomes.",
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % creatorImages.length);
    }, 3200);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🌄 BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-1.jpeg')" }}
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT */}
        <div>

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            <BadgeCheck size={16} />
            Trusted by growth-focused brands
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn creator marketing into
            <span className="block text-indigo-400">
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          {/* TEXT */}
          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            VMERG helps brands discover the right creators, launch campaigns faster,
            and scale performance through structured execution.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition">
              Start Campaign
            </button>

            <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
              View Work
            </button>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Strategy-led", "Creator-first", "Performance-driven"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="hidden lg:flex justify-center">
          <div className="w-[420px] h-[380px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={creatorImages[currentImage].src}
                  alt={creatorImages[currentImage].title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">
                    {creatorImages[currentImage].title}
                  </h3>
                  <p className="text-sm mt-2">
                    {creatorImages[currentImage].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}