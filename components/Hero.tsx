"use client";

import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-28 flex flex-col md:flex-row items-center justify-between gap-14">
        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-400">
            Creator‑first. Performance‑driven.
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-50">
            India’s leading{" "}
            <span className="text-emerald-400">
              influencer marketing partner
            </span>{" "}
            for modern brands.
          </h1>

          <p className="text-slate-300 text-sm md:text-base">
            yourBrand connects growth‑focused brands with high‑intent creators
            across YouTube, Instagram, UGC and meme pages—so every campaign is
            built to move real business metrics, not just views.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-emerald-400 text-slate-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition">
              Book a strategy call
            </button>

            <button className="flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-full text-sm text-slate-200 hover:border-emerald-400 hover:bg-slate-900/60 transition">
              <Play size={16} className="fill-slate-200" />
              Watch how it works
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-xs md:text-sm text-slate-300">
            <div>
              <p className="text-xl md:text-2xl font-semibold text-slate-50">
                120+
              </p>
              <p className="text-slate-400">brands partnered</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold text-slate-50">
                5k+
              </p>
              <p className="text-slate-400">vetted creators</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold text-slate-50">
                3.5x
              </p>
              <p className="text-slate-400">avg. campaign ROAS</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-10 md:mt-0">
          {/* main card */}
          <div className="w-[320px] md:w-[420px] bg-slate-900/80 border border-slate-800 rounded-3xl shadow-[0_20px_80px_rgba(15,23,42,0.9)] overflow-hidden">
            <div className="relative h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80"
                alt="Creators collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-slate-900/0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/15 backdrop-blur-md p-4 rounded-full border border-white/30 hover:scale-110 transition transform cursor-pointer">
                  <Play size={28} className="text-white fill-white" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">
                Live campaign snapshot
              </p>
              <h3 className="font-semibold text-lg text-slate-50">
                27 creators · 3 platforms · 2.9x ROAS
              </h3>
              <p className="text-slate-400 text-sm">
                Coordinated YouTube + reels + UGC sprint for a fintech app
                targeting tier‑1 and tier‑2 audiences.
              </p>
            </div>
          </div>

          {/* floating cards */}
          <div className="absolute -left-16 top-10 w-[180px] bg-slate-900/80 backdrop-blur-md shadow-xl rounded-xl p-3 border border-slate-800 hidden md:block">
            <p className="text-xs text-slate-400">Trending creator</p>
            <p className="text-sm font-semibold text-slate-50">
              @creator_handle
            </p>
            <p className="text-xs text-emerald-300 mt-1">+1.4M views · Finance</p>
          </div>

          <div className="absolute -right-10 bottom-10 w-[190px] bg-slate-900/80 backdrop-blur-md shadow-xl rounded-xl p-3 border border-slate-800 hidden md:block">
            <p className="text-xs text-slate-400">Last campaign</p>
            <p className="text-sm font-semibold text-slate-50">
              +120% engagement
            </p>
            <p className="text-xs text-slate-400 mt-1">
              38 creators · 4.7M impressions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
