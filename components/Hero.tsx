"use client";

import { Play, Phone, MessageCircle, Users, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 to-blue-300 overflow-hidden">

      {/* 🌈 LIGHT AURORA BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 🔝 HEADER */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Leading The Way In{" "}
            <span className="bg-gradient-to-r bg-pink-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Creator Partnerships
            </span>
          </h2>

          <p className="text-lg md:text-xl from-pink-500 leading-relaxed">
            We help brands grow globally with creator-first strategies,
            combining deep market insights with performance-driven campaigns.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition">
              <Play size={18} />
              Watch Work
            </button>

            <div className="flex items-center gap-2 text-cyan-600 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
              Live Support
            </div>
          </div>
        </div>

        {/* 🧩 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD */}
          <div className="bg-slate-400 border-slate-200 rounded-3xl shadow-md p-6 hover:shadow-xl transition">

            <div className="h-64 bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <Users size={50} className="text-cyan-600" />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Global Leadership
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Building creator ecosystems across multiple markets with
                consistent growth strategies.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <p className="text-lg font-bold text-cyan-600">50+</p>
                  <p className="text-xs text-slate-500">Partners</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-indigo-600">10+</p>
                  <p className="text-xs text-slate-500">Markets</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">2X</p>
                  <p className="text-xs text-slate-500">Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">

            {[
              {
                icon: Users,
                title: "Global Network",
                desc: "Strong creator ecosystem across multiple countries",
              },
              {
                icon: Globe,
                title: "Cross-Border Strategy",
                desc: "Campaigns designed for international scale",
              },
              {
                icon: MessageCircle,
                title: "Real-Time Support",
                desc: "Fast communication via chat & calls",
              },
              {
                icon: Play,
                title: "Performance Driven",
                desc: "Focused on ROI & measurable growth",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 transition"
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

            {/* TESTIMONIAL */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-50 to-indigo-50 border border-slate-200">
              <p className="italic text-slate-700">
                “They helped us scale globally with the right creators and
                strategy.”
              </p>
              <p className="text-sm text-slate-500 mt-3">
                — Brand Partner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🌈 AURORA STYLE */}
      <style jsx>{`
        .aurora-bg {
          background:
            radial-gradient(circle at 20% 80%, rgba(34,211,238,0.25), transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(99,102,241,0.25), transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 60%);
          background-size: 200% 200%;
          animation: auroraShift 18s ease-in-out infinite;
        }

        @keyframes auroraShift {
          0% { transform: translate(-10%, -10%); }
          50% { transform: translate(10%, 10%); }
          100% { transform: translate(-10%, -10%); }
        }
      `}</style>
    </section>
  );
}