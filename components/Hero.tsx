"use client";

import { Play, MessageCircle, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* 🔥 HERO HEADER */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Scale Your Brand with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              Influencer Campaigns
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We help brands grow globally with creator-first strategies,
            combining deep insights with performance-driven campaigns.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
              <Play size={18} />
              Watch Work
            </button>

            <div className="flex items-center gap-2 text-cyan-600 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
              Live Support
            </div>

          </div>
        </div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition">

            <div className="h-64 bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <Users size={50} className="text-cyan-600" />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Global Creator Network
              </h3>

              <p className="text-slate-600 text-sm mt-2">
                Access thousands of creators across niches and markets,
                enabling scalable influencer campaigns.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <p className="text-lg font-bold text-cyan-600">500+</p>
                  <p className="text-xs text-slate-500">Creators</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-indigo-600">50+</p>
                  <p className="text-xs text-slate-500">Brands</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">10M+</p>
                  <p className="text-xs text-slate-500">Reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">

            {[
              {
                icon: Users,
                title: "Smart Creator Discovery",
                desc: "Find creators using data-driven filters and insights",
              },
              {
                icon: Globe,
                title: "Cross-Border Campaigns",
                desc: "Launch campaigns across multiple regions",
              },
              {
                icon: MessageCircle,
                title: "Real-Time Support",
                desc: "Fast communication and campaign updates",
              },
              {
                icon: Play,
                title: "Performance Tracking",
                desc: "Track ROI and engagement metrics",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:border-cyan-400 hover:scale-[1.02] transition"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-cyan-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{title}</h4>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}