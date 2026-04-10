"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Creators Activated" },
  { value: "50+", label: "Brand Collaborations" },
  { value: "10+", label: "Content Categories" },
  { value: "24/7", label: "Campaign Support" },
];

const values = [
  {
    title: "Strategy First",
    desc: "Every campaign starts with a clear strategy aligned to your business goals, ensuring direction, clarity, and measurable outcomes.",
  },
  {
    title: "Curated Creator Network",
    desc: "We connect brands with creators who genuinely match their audience, tone, and campaign intent.",
  },
  {
    title: "Fast Execution",
    desc: "Our workflow is optimized for speed, reducing delays and enabling smoother campaign launches.",
  },
  {
    title: "Performance Driven",
    desc: "We focus on outcomes—engagement, reach, and conversions that contribute to real growth.",
  },
];

const highlights = [
  "Campaign strategies aligned with business goals",
  "Curated creator network across key niches",
  "Fast onboarding with streamlined communication",
  "Execution focused on real performance metrics",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50/70">

        {/* BG */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute right-[-6rem] top-40 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">

          {/* HERO */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-inter text-indigo-600 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                About VMERG
              </span>

              <h1 className="mt-6 text-5xl font-pop leading-tight text-slate-900 md:text-7xl">
                Building creator-led
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  brand growth systems
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl font-inter">
                VMERG helps brands grow through structured, creator-led marketing.
                We combine strategy, curated creator partnerships, and fast execution
                to turn campaigns into measurable business outcomes.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border bg-white/80 px-4 py-3 text-sm font-inter text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border bg-white/90 p-6 shadow-xl backdrop-blur">

                <div className="rounded-xl bg-slate-900 p-6 text-slate-100">
                  <p className="text-sm uppercase tracking-widest text-indigo-400">
                    Campaign Engine
                  </p>

                  <div className="mt-5 space-y-3 font-mono text-sm">
                    <div>strategy: "tailored"</div>
                    <div>creators: "verified network"</div>
                    <div>execution: "fast & scalable"</div>
                    <div>outcome: "ROI focused"</div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((item) => (
                    <div key={item.label} className="bg-slate-50 p-4 rounded-xl text-center">
                      <p className="font-pop text-xl">{item.value}</p>
                      <p className="text-sm text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>

          {/* STATS */}
          <section className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm">
                <p className="text-3xl font-pop text-slate-900">{item.value}</p>
                <p className="text-sm font-inter text-slate-600 mt-2">{item.label}</p>
              </div>
            ))}
          </section>

          {/* STORY + MISSION */}
          <section className="mt-16 grid gap-8 lg:grid-cols-2">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-pop text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600 font-inter leading-7">
                VMERG was created to simplify influencer marketing for growing brands.
                Instead of scattered outreach and inconsistent execution, we offer a
                structured system to discover creators, plan campaigns, and deliver
                results with clarity and confidence.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-pop">Our Mission</h2>
              <p className="mt-4 text-slate-300 font-inter leading-7">
                Our mission is to make creator marketing scalable, reliable, and
                performance-driven by aligning the right creators, content, and
                execution strategy for real business impact.
              </p>
            </div>

          </section>

          {/* VALUES */}
          <section className="mt-16">
            <h2 className="text-3xl font-pop text-slate-900 mb-8">
              Why brands work with us
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <h3 className="font-pop text-xl text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 font-inter">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-gradient-to-r from-slate-900 to-indigo-900 p-10 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-pop">
              Ready to scale with creator-led campaigns?
            </h2>
            <p className="mt-4 text-slate-300 font-inter">
              From idea to execution, we help you launch campaigns that are structured, scalable, and built for growth.
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-inter hover:scale-105 transition"
            >
              Talk to us
            </a>
          </section>

        </section>
      </main>
    </>
  );
}