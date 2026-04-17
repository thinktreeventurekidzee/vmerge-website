"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/* ✅ FIX: projects defined properly */
const projects = [
  {
    title: "Fintech App Launch Campaign",
    category: "YouTube",
    image: "/creator-1.jpeg",
    stat: "2.9x ROAS • 1.4M+ views",
    desc: "Creator-led finance campaign driving high-intent users & installs.",
  },
  {
    title: "D2C Skincare Growth",
    category: "Instagram",
    image: "/creator-2.jpeg",
    stat: "+18% new customers",
    desc: "UGC reels + micro influencers scaling consistent brand growth.",
  },
  {
    title: "SaaS UGC Engine",
    category: "UGC",
    image: "/creator-3.jpeg",
    stat: "60+ creatives delivered",
    desc: "Built repeatable content pipeline for ads & landing pages.",
  },
  {
    title: "Gaming Meme Campaign",
    category: "Meme",
    image: "/hero.jpeg",
    stat: "4.5M reach in 7 days",
    desc: "Trend-based meme marketing for fast viral awareness.",
  },
];

const categories = ["All", "YouTube", "Instagram", "UGC", "Meme"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  /* ✅ FIXED FILTER */
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#eaf4ff] overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-sky-300/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          <div>
            <p className="inline-block bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              SELECTED WORK
            </p>

            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              <span className="text-yellow-400">
                Campaigns built for
              </span>{" "}
              <span className="text-slate-900">
                measurable outcomes
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 max-w-xl">
              We help brands scale using creators, UGC and performance-driven strategies.
            </p>

            {/* FILTER */}
            <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 flex-wrap">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition
                  ${
                    active === item
                      ? "bg-yellow-400 text-black shadow scale-105"
                      : "bg-white border text-slate-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="p-[2px] rounded-3xl bg-gradient-to-br from-yellow-400 via-blue-400 to-purple-500 shadow-2xl">
              <div className="rounded-3xl overflow-hidden bg-white">
                <Image
                  src="/hero.jpeg"
                  alt="campaign"
                  width={700}
                  height={450}
                  className="w-full h-56 sm:h-72 md:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-yellow-400 px-3 sm:px-4 py-1 sm:py-2 rounded-xl shadow text-xs sm:text-sm font-semibold">
              🚀 High ROI Campaign
            </div>
          </motion.div>

        </div>

        {/* GRID */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {filtered.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="group rounded-3xl"
            >

              <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-yellow-400 via-blue-400 to-purple-500">

                <div className="rounded-3xl overflow-hidden bg-white shadow-sm group-hover:shadow-xl transition">

                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-40 sm:h-52 md:h-60 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-yellow-500 text-xs sm:text-sm font-semibold mt-1">
                      {item.stat}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}