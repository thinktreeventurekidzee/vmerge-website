"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Influencer Discovery",
    desc: "Access a large dataset of macro, micro, nano and regional influencers across India with filters on audience, views and engagement.",
    note: "Find the right creators for your exact target audience.",
  },
  {
    id: "02",
    title: "Campaign Strategy & Planning",
    desc: "We design data-driven influencer strategies tailored to your brand goals, audience and platform mix.",
    note: "Includes content angles, creator mix and campaign roadmap.",
  },
  {
    id: "03",
    title: "End-to-End Campaign Execution",
    desc: "From outreach and negotiation to content approvals and go-live — we handle everything.",
    note: "One team managing your entire campaign.",
  },
  {
    id: "04",
    title: "Multi-Lingual Campaigns",
    desc: "Reach diverse audiences across India using regional language creators and localized campaigns.",
    note: "Perfect for pan-India and Bharat-focused brands.",
  },
  {
    id: "05",
    title: "24×7 Campaign Support",
    desc: "Dedicated support via WhatsApp, calls and email to ensure smooth campaign execution.",
    note: "We stay with you throughout the campaign lifecycle.",
  },
  {
    id: "06",
    title: "Performance Tracking & Scaling",
    desc: "Track views, engagement, installs and revenue with actionable insights.",
    note: "We optimize and scale what works best.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">

      {/* 🌈 aurora bg */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔝 HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-cyan-600 font-semibold">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-slate-900">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              Influencer Marketing Solutions
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            From strategy to execution, Vmerg helps brands launch, manage and scale
            influencer campaigns across YouTube, Instagram and regional creators.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="group relative p-6 rounded-2xl border border-slate-200 bg-white cursor-pointer overflow-hidden transition duration-300 hover:shadow-xl hover:border-cyan-400"
            >

              {/* ✨ glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-200/30 via-indigo-200/30 to-purple-200/30 blur-xl" />

              {/* 🧠 CONTENT */}
              <div className="relative z-10">

                <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                  {service.id}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {service.desc}
                </p>

                {/* 🔽 EXPAND ANIMATION */}
                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-xs text-slate-500 border-t pt-4">
                        {service.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* 🎮 ICON DOT (GAME EFFECT) */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 group-hover:bg-indigo-500 group-hover:scale-125 transition duration-300" />

            </div>
          ))}

        </div>

        {/* 💰 CTA */}
        <div className="mt-20 text-center">
          <a
            href="#lead-form"
            className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-full text-sm font-medium shadow hover:scale-105 transition"
          >
            Start Your Campaign 🚀
          </a>

          <p className="mt-3 text-sm text-slate-500">
            Share your goals, budget and timeline — our team will connect within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
}