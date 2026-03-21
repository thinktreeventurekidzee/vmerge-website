"use client";

import { useState } from "react";

const influencers = [
  { name: "Rahul Sharma", followers: "1.2M", category: "Finance" },
  { name: "Anjali Verma", followers: "850K", category: "Lifestyle" },
  { name: "Amit Singh", followers: "2M", category: "Tech" },
  { name: "Neha Gupta", followers: "500K", category: "Finance" },
];

const categories = ["All", "Finance", "Tech", "Lifestyle"];

export default function InfluencerNetwork() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? influencers
      : influencers.filter((inf) => inf.category === filter);

  return (
    <section className="py-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-emerald-400">
            Creator network
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Tap into a vetted network of high‑intent creators.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            From finance and tech to lifestyle, yourBrand connects you with
            creators your audience already trusts.
          </p>
        </div>

        {/* filter pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm border transition ${
                  active
                    ? "bg-emerald-400 text-slate-950 border-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.5)]"
                    : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-emerald-400 hover:text-emerald-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {filteredData.map((inf, index) => (
            <div
              key={index}
              className="relative bg-slate-900/70 border border-slate-800 rounded-2xl px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.7)] hover:border-emerald-400/70 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(52,211,153,0.45)] transition"
            >
              {/* avatar placeholder */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400/40 via-slate-900 to-sky-500/40 border border-slate-700 flex items-center justify-center text-xs font-semibold text-slate-50 mb-4">
                {inf.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="text-sm font-semibold text-slate-50">
                {inf.name}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {inf.followers} followers
              </p>
              <p className="mt-1 inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700 px-2 py-0.5 text-[11px] text-emerald-300">
                {inf.category}
              </p>

              <p className="mt-3 text-xs text-slate-400">
                Works with brands in{" "}
                <span className="text-slate-200">D2C, fintech and apps.</span>
              </p>
            </div>
          ))}
        </div>

        {/* bottom caption */}
        <p className="mt-8 text-center text-xs md:text-sm text-slate-500">
          This is a glimpse of our network. Full access includes 5k+ vetted
          creators, detailed audience data and performance history.
        </p>
      </div>
    </section>
  );
}
