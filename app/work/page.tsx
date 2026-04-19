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
    title: "EdTech Explainer Rollout",
    category: "YouTube",
    image: "/creator-2.jpeg",
    stat: "920K+ educational views",
    desc: "Long-form and short-form YouTube creator integrations built for trust and consideration.",
  },

  {
    title: "D2C Skincare Growth",
    category: "Instagram",
    image: "/creator-2.jpeg",
    stat: "+18% new customers",
    desc: "UGC reels + micro influencers scaling consistent brand growth.",
  },
  {
    title: "Fashion Drop Awareness Burst",
    category: "Instagram",
    image: "/creator-3.jpeg",
    stat: "6.1M impressions",
    desc: "Reels, story mentions, and creator seeding for rapid social buzz.",
  },

  {
    title: "SaaS UGC Engine",
    category: "UGC",
    image: "/creator-3.jpeg",
    stat: "60+ creatives delivered",
    desc: "Built repeatable content pipeline for ads & landing pages.",
  },
  {
    title: "Beauty Testimonial Studio",
    category: "UGC",
    image: "/hero.jpeg",
    stat: "40+ ad-ready videos",
    desc: "Creator-shot testimonials, hooks, demos, and retention-focused edits for paid media.",
  },

  {
    title: "Gaming Meme Campaign",
    category: "Meme",
    image: "/hero.jpeg",
    stat: "4.5M reach in 7 days",
    desc: "Trend-based meme marketing for fast viral awareness.",
  },
  {
    title: "Gen Z Pop-Culture Meme Drop",
    category: "Meme",
    image: "/creator-1.jpeg",
    stat: "310K shares",
    desc: "Topical meme pages and creator-led humor content built around trending conversations.",
  },

  {
    title: "B2B Founder Brand Sprint",
    category: "LinkedIn",
    image: "/creator-1.jpeg",
    stat: "3.2x profile engagement",
    desc: "Thought-leadership content and creator-style personal branding for founders and B2B teams.",
  },
  {
    title: "SaaS Decision-Maker Outreach",
    category: "LinkedIn",
    image: "/creator-2.jpeg",
    stat: "185 SQLs influenced",
    desc: "LinkedIn creator collaborations and authority content designed for high-value audiences.",
  },

  {
    title: "Youth Product AR Launch",
    category: "Snapchat",
    image: "/creator-3.jpeg",
    stat: "1.1M lens plays",
    desc: "Snap-first creator push with vertical storytelling and youth-focused awareness activations.",
  },
  {
    title: "Campus Buzz Creator Push",
    category: "Snapchat",
    image: "/hero.jpeg",
    stat: "780K unique reach",
    desc: "Short-form creator content targeting student communities and regional engagement pockets.",
  },

  {
    title: "Performance Creative Lab",
    category: "Performance",
    image: "/creator-1.jpeg",
    stat: "27% lower CAC",
    desc: "UGC-style ad creatives tested across funnels to improve click-through and conversion rates.",
  },
  {
    title: "Retargeting Content Stack",
    category: "Performance",
    image: "/creator-2.jpeg",
    stat: "3.4x return on ad spend",
    desc: "Built creator assets for prospecting, retargeting, and landing page conversion journeys.",
  },

  {
    title: "Creator Discovery & Vetting",
    category: "Strategy",
    image: "/creator-3.jpeg",
    stat: "150+ creators shortlisted",
    desc: "Audience-fit creator sourcing, quality screening, and campaign-ready matchmaking.",
  },
  {
    title: "Full Funnel Campaign Planning",
    category: "Strategy",
    image: "/hero.jpeg",
    stat: "Cross-platform rollout",
    desc: "Campaign strategy, content briefs, creator coordination, reporting, and outcome tracking.",
  },
];

const categories = [
  "All",
  "YouTube",
  "Instagram",
  "UGC",
  "Meme",
  "LinkedIn",
  "Snapchat",
  "Performance",
  "Strategy",
];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#eaf4ff] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-sky-300/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <p className="inline-block bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              SELECTED WORK
            </p>

            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              <span className="text-yellow-400">Campaigns built for</span>{" "}
              <span className="text-slate-900">measurable outcomes</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 max-w-xl">
              We help brands scale using creators, UGC, platform-native storytelling,
              and performance-driven strategies.
            </p>

            <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 flex-wrap">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
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
              High ROI Campaigns
            </div>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="group rounded-3xl"
            >
              <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-yellow-400 via-blue-400 to-purple-500">
                <div className="rounded-3xl overflow-hidden bg-white shadow-sm group-hover:shadow-xl transition">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-40 sm:h-52 md:h-60 object-cover"
                  />

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