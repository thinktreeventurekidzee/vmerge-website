"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const rotatingWords = [
  "MEASURABLE GROWTH",
  "BETTER ROAS",
  "FASTER LAUNCHES",
];

const heroImages = [
  "/creator-1.jpeg",
  "/creator-3.jpeg",
  "/creator-5.jpeg",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // text rotate
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  // image rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 overflow-hidden text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">

<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight md:whitespace-nowrap">
  Influencer Marketing That Drives
  <span className="block text-yellow-500 uppercase mt-2">
    {rotatingWords[wordIndex]}
  </span>
</h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            VMERG helps brands discover creators, execute campaigns, and scale
            performance with measurable ROI.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-xl font-semibold text-center hover:scale-105 transition"
            >
              Start Campaign
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-6 py-3 border border-white/40 rounded-xl text-center hover:bg-white/10 transition"
            >
              View Work
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[240px] sm:h-[300px] lg:h-[380px] w-full flex justify-center lg:justify-end">

          {heroImages.map((img, i) => {
            const position =
              (i - currentIndex + heroImages.length) %
              heroImages.length;

            return (
              <img
                key={i}
                src={img}
                alt="creator"
                className={`absolute w-[220px] sm:w-[280px] lg:w-[340px] 
                h-[150px] sm:h-[190px] lg:h-[220px] 
                object-cover rounded-2xl shadow-2xl transition-all duration-700

                ${
                  position === 0
                    ? "z-30 opacity-100 scale-100 translate-x-0 rotate-0"
                    : position === 1
                    ? "z-20 opacity-60 scale-95 translate-x-6 sm:translate-x-10 rotate-6 blur-[1px]"
                    : "z-10 opacity-40 scale-90 translate-x-12 sm:translate-x-20 rotate-12 blur-[2px]"
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