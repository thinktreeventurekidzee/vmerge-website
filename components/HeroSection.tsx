"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const rotatingWords = [
  "measurable growth",
  "better ROAS",
  "faster launches",
];

// 🔥 Right side images
const heroImages = [
  "/creator-1.jpeg",
  "/creator-3.jpeg",
  "/creator-5.jpeg",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // rotating text
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(wordInterval);
  }, []);

  // image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 overflow-hidden text-white">

      {/* LEFT CONTENT */}
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Influencer Marketing That Drives
            <span className="block text-yellow-300 mt-2">
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            VMERG helps brands discover creators, execute campaigns, and scale
            performance with measurable ROI.
          </p>

          <div className="mt-8 flex gap-4">
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

        {/* 🔥 RIGHT SIDE STACKED IMAGES */}
        <div className="hidden lg:flex justify-end relative h-[420px] w-full">

          {heroImages.map((img, i) => {
            const position =
              (i - currentIndex + heroImages.length) %
              heroImages.length;

            return (
              <img
                key={i}
                src={img}
                className={`absolute w-[360px] h-[240px] object-cover rounded-2xl shadow-2xl transition-all duration-700

                ${
                  position === 0
                    ? "z-30 opacity-100 scale-100 translate-x-0 rotate-0"
                    : position === 1
                    ? "z-20 opacity-50 scale-95 translate-x-10 rotate-6 blur-[1px]"
                    : "z-10 opacity-30 scale-90 translate-x-20 rotate-12 blur-[2px]"
                }
                `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}