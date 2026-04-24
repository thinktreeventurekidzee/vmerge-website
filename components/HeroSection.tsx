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
  "/gracy-goswami.jpeg",
  "/Ankur Warikoo.jpeg",
  "/Businessman Tushar.jpeg",
  "/Sushmita Sen.jpeg",
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
    <section className="relative w-full min-h-screen flex items-center lg:items-start pt-20 lg:pt-28 
    bg-gradient-to-br from-blue-600 via-blue-400 to-blue-100 overflow-hidden text-white">

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-white/10 to-transparent z-0"></div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 
      grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

          <h1 className="font-bold leading-tight 
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl">

            Influencer Marketing That Drives

            <span className="block text-yellow-300 uppercase mt-3 
            text-lg sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-500">
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-md mx-auto lg:mx-0">
            VMERG helps brands discover creators, execute campaigns, and scale
            performance with measurable ROI.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-5 py-3 sm:px-6 sm:py-3 
              bg-white text-black rounded-xl font-semibold 
              hover:scale-105 transition duration-300 shadow-lg"
            >
              Start Campaign
            </Link>
          </div>
        </div>

        {/* RIGHT - IMAGE STACK */}
        <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] 
        w-full flex items-center justify-center">

          {heroImages.map((img, i) => {
            const total = heroImages.length;
            const position = (i - currentIndex + total) % total;

            if (position > 2) return null;

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-in-out

                ${
                  position === 0
                    ? "z-30 scale-105 sm:scale-110 opacity-100 translate-x-0"
                    : position === 1
                    ? "z-20 scale-90 opacity-40 translate-x-10 sm:translate-x-16 blur-sm"
                    : "z-10 scale-85 opacity-20 -translate-x-10 sm:-translate-x-16 blur-md"
                }
                `}
              >
                <div className="bg-white/90 backdrop-blur-md 
                p-2 sm:p-3 rounded-2xl shadow-xl border border-white/30">

                  <img
                    src={img}
                    alt="creator"
                    className="
                    w-[180px] sm:w-[240px] md:w-[280px] lg:w-[340px]
                    h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px]
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