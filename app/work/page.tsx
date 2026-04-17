"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Fintech App Launch Campaign",
    category: "YouTube",
    image: "/creator-1.jpeg",
    stat: "2.9x ROAS • 1.4M+ views",
    desc: "Creator-led finance campaign driving high-intent users & installs.",
  },
  {
  title: "YouTube Shorts Growth Engine",
  category: "YouTube",
  image: "/creator-1.jpeg",
  stat: "10M+ short views generated",
  desc: "High-velocity YouTube Shorts strategy to drive massive reach and funnel traffic to long-form content.",
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
  {
    title: "EdTech Lead Generation",
    category: "YouTube",
    image: "/creator-1.jpeg",
    stat: "35% CPL drop",
    desc: "Optimized funnel with educational creators & paid ads.",
  },
  {
    title: "E-commerce Scaling",
    category: "Instagram",
    image: "/creator-2.jpeg",
    stat: "3x revenue growth",
    desc: "Performance creatives + retargeting strategy execution.",
  },{
  title: "Instagram Reels Growth",
  category: "Instagram",
  image: "/creator-2.jpeg",
  stat: "5M+ reach generated",
  desc: "Trend-driven reels strategy to maximize organic growth & engagement.",
},
{
  title: "Personal Brand Building",
  category: "Instagram",
  image: "/creator-1.jpeg",
  stat: "3x profile growth",
  desc: "Positioning creators & founders for authority and audience trust.",
},
{
  title: "Instagram Sales Funnel",
  category: "Instagram",
  image: "/creator-3.jpeg",
  stat: "+40% conversions",
  desc: "Content + DM funnel to turn followers into paying customers.",
},
{
  title: "Creator Whitelisting Ads",
  category: "Instagram",
  image: "/hero.jpeg",
  stat: "2.5x ROAS",
  desc: "Running ads using creator content for higher performance.",
} ,
{
  title: "Conversion-Focused UGC",
  category: "UGC",
  image: "/creator-1.jpeg",
  stat: "3.2x ad performance",
  desc: "UGC creatives optimized for ads, clicks, and conversions.",
},
{
  title: "Product Demo UGC",
  category: "UGC",
  image: "/creator-2.jpeg",
  stat: "+28% engagement",
  desc: "Clear product demos that build trust and improve conversions.",
},
{
  title: "Relatable Meme Marketing",
  category: "Meme",
  image: "/hero.jpeg",
  stat: "2M+ organic reach",
  desc: "Viral relatable memes designed for maximum shares.",
},
{
  title: "Niche Meme Campaigns",
  category: "Meme",
  image: "/creator-3.jpeg",
  stat: "High audience targeting",
  desc: "Finance, tech & startup meme pages for precise audience reach.",
}
];

const categories = ["All", "YouTube", "Instagram", "UGC", "Meme"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-24 bg-[#eaf4ff] overflow-hidden">

      {/* 🔥 SOFT PREMIUM BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-300/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
              SELECTED WORK
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight">
              <span className="text-yellow-400">
                Campaigns built for
              </span>{" "}
              <span className="text-slate-900">
                measurable outcomes
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              We help brands scale using creators, UGC and performance-driven
              strategies. Each campaign is optimized for growth, engagement,
              and real ROI.
            </p>

            {/* FILTER */}
            <div className="mt-8 flex gap-3 flex-wrap">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    active === item
                      ? "bg-yellow-400 text-black shadow-lg scale-105"
                      : "bg-white border text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            className="relative"
          >
            <div className="p-[2px] rounded-[30px] bg-gradient-to-br from-yellow-400 via-blue-400 to-purple-500 shadow-2xl">
              <div className="rounded-[28px] overflow-hidden bg-white">
                <Image
                  src="/hero.jpeg"
                  alt="campaign"
                  width={700}
                  height={450}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-yellow-400 px-4 py-2 rounded-xl shadow font-semibold">
              🚀 High ROI Campaign
            </div>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative rounded-3xl"
            >

              {/* 🔥 MULTI COLOR BORDER */}
              <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-yellow-400 via-blue-400 to-purple-500 group-hover:from-yellow-300 group-hover:to-pink-400 transition">

                <div className="rounded-3xl overflow-hidden bg-white shadow-sm group-hover:shadow-2xl transition">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                    {/* CATEGORY */}
                    <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs rounded-full shadow">
                      {item.category}
                    </span>

                    {/* HOVER TEXT */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                      <p className="text-sm font-semibold">
                        View Case Study →
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-yellow-500 text-sm font-semibold mt-1">
                      {item.stat}
                    </p>

                    <p className="text-sm text-slate-600 mt-2">
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