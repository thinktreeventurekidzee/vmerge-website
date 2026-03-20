"use client";

import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 bg-gradient-to-br from-white via-gray-50 to-gray-100">

      {/* LEFT SIDE */}
      <div className="max-w-xl space-y-6">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          India’s Leading{" "}
          <span className="text-blue-600">Influencer Marketing</span> Platform
        </h1>

        <p className="text-gray-600 text-lg">
          Connect brands with top creators across YouTube, Instagram, and more.
          Scale your campaigns with data-driven influencer marketing.
        </p>

        {/* CTA */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Get Started
          </button>

          <button className="flex items-center gap-2 border px-6 py-3 rounded-full hover:bg-gray-100 transition">
            <Play size={16} /> Explore
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-12 md:mt-0 relative">

        {/* MAIN CARD */}
        <div className="w-[320px] md:w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

          {/* IMAGE / VIDEO */}
          <div className="relative h-[240px]">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="preview"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:scale-110 transition cursor-pointer">
                <Play size={28} className="text-white" />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 space-y-2">
            <h3 className="font-semibold text-lg">
              Campaign with Top Creators
            </h3>
            <p className="text-gray-500 text-sm">
              Boost engagement with trending influencers.
            </p>
          </div>
        </div>

        {/* FLOATING CARD 1 */}
        <div className="absolute -left-16 top-10 w-[180px] bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-3 hidden md:block">
          <p className="text-sm font-semibold">🔥 Trending Creator</p>
          <p className="text-xs text-gray-500">@creator_name</p>
        </div>

        {/* FLOATING CARD 2 */}
        <div className="absolute -right-10 bottom-10 w-[180px] bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-3 hidden md:block">
          <p className="text-sm font-semibold">📈 +120% Engagement</p>
          <p className="text-xs text-gray-500">Last Campaign</p>
        </div>

        {/* GLOW EFFECT */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  );
}