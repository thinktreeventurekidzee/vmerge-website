"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const rotatingWords = [
  "MEASURABLE GROWTH",
  "BETTER ROAS",
  "FASTER LAUNCHES",
];

const heroImages = [
  "/Rachana Ranade.jpeg",
  "/Neha Nagar.jpeg",
  "/Ankur Warikoo.jpeg",
  "/Prakash Gaba.jpeg",
  "/Financebyankita.jpeg",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // TEXT ROTATION
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  // IMAGE ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-start pt-24 bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 overflow-hidden text-white">

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/10 to-transparent z-0"></div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="max-w-2xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Influencer Marketing That Drives
            <span className="block text-yellow-400 uppercase mt-3">
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-white/80">
            VMERG helps brands discover creators, execute campaigns, and scale
            performance with measurable ROI.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Start Campaign
            </Link>

            <Link
              href="/work"
              className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* RIGHT - CIRCULAR STACK */}
      <div className="relative h-[420px] w-full flex items-center justify-center">

  {heroImages.map((img, i) => {
    const total = heroImages.length;
    const position =
      (i - currentIndex + total) % total;

    // Only show 3 images (center + 2 behind)
    if (position > 2) return null;

    return (
      <div
        key={i}
        className={`absolute transition-all duration-700 ease-in-out

        ${
          position === 0
            ? "z-30 scale-110 opacity-100 translate-x-0"
            : position === 1
            ? "z-20 scale-95 opacity-40 translate-x-20 blur-sm"
            : "z-10 scale-90 opacity-20 -translate-x-20 blur-md"
        }
        `}
      >
        {/* 💎 CARD */}
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-white/30">

          <img
            src={img}
            alt="creator"
            className="w-[240px] sm:w-[300px] lg:w-[360px]
            h-[200px] sm:h-[240px] lg:h-[260px]
            object-contain rounded-xl"
          />

        </div>
      </div>
    );
  })}

</div>

      </div>
    </section>
  );
}