"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
    import Link from "next/link";


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
    src: "/creator-4.jpeg",
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
  {
    src: "/creator-5.jpeg",
    title: "Creator Discovery",
    desc: "Find creators aligned with your audience.",
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // 🔥 Smart random (no repeat)
  const getNextIndex = (prev: number) => {
    let next;
    do {
      next = Math.floor(Math.random() * creatorImages.length);
    } while (next === prev);
    return next;
  };

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => getNextIndex(prev));
    }, 3500); // smoother timing

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
   <section className="relative min-h-screen flex items-center overflow-hidden">

  {/* BG */}
<div className="absolute inset-0">

  {/* Desktop BG */}
  <div
    className="hidden md:block w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-1.jpeg')" }}
  />

  {/* Mobile BG */}
  <div
    className="block md:hidden w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/mobile-pg.jpeg')" }} // agar jpeg hai toh .jpeg kar dena
  />

</div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center text-white">

    {/* LEFT */}
  <div className="pt-20 sm:pt-24 md:pt-0">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-5 sm:mb-6">
        Trusted by growth-focused brands
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Turn creator marketing into
        <span className="block text-indigo-400">
          {rotatingWords[wordIndex]}
        </span>
      </h1>

      {/* Text */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-200 max-w-xl">
        VMERG helps brands discover the right creators, launch campaigns faster,
        and scale performance through structured execution.
      </p>

      {/* CTA */}
   <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">

  <Link
    href="/contact"
    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition text-sm sm:text-base inline-block"
  >
    Start Campaign
  </Link>

  <Link
    href="/work"
    className="px-4 sm:px-6 py-2.5 sm:py-3 border border-white/30 rounded-xl hover:bg-white/10 transition text-sm sm:text-base inline-block"
  >
    View Work
  </Link>

</div>
      {/* Tags */}
      <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
        {["Strategy-led", "Creator-first", "Performance-driven"].map((tag) => (
          <span
            key={tag}
            className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs md:text-sm bg-white/10 rounded-full text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">

      <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] relative">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={creatorImages[currentImage].src}
              alt={creatorImages[currentImage].title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 text-white">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                {creatorImages[currentImage].title}
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm mt-1 sm:mt-2">
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