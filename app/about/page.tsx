"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Creators Activated" },
  { value: "50+", label: "Brand Collaborations" },
  { value: "10+", label: "Core Video Categories" },
  { value: "24/7", label: "Campaign Support" },
];

const values = [
  {
    title: "Strategy First",
    desc: "We don’t just connect brands with creators. We build campaign strategies designed for reach, engagement, and measurable outcomes.",
  },
  {
    title: "Creator Network",
    desc: "Our ecosystem includes creators across multiple niches, helping brands scale with the right voice, audience fit, and content style.",
  },
  {
    title: "Execution Speed",
    desc: "From onboarding to campaign rollout, our process is optimized for faster communication, smoother execution, and stronger delivery.",
  },
  {
    title: "Performance Focus",
    desc: "Every collaboration is planned with business goals in mind, whether the target is awareness, conversions, launches, or long-term brand recall.",
  },
];

const highlights = [
  "Influencer marketing campaigns tailored to brand goals",
  "Multi-category creator network across key digital segments",
  "Fast onboarding and WhatsApp-first communication workflow",
  "Professional execution for Indian and global campaigns",
];

export default function AboutPage() {
  return (
    <>
      <Navbar activeSection="/about" />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-emerald-50/70">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-[-6rem] top-40 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
          </div>
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
          {/* hero */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-[0.24em] text-emerald-700 shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                About VMERG
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-7xl">
                Building creator-led
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  brand growth systems
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                VMERG helps brands scale through high-performing influencer marketing campaigns.
                We combine strategy, creator partnerships, and fast execution to turn campaigns
                into measurable business growth.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/85 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.15)] backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-100">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-400">
                    Campaign Engine
                  </p>
                  <div className="mt-5 space-y-4 font-mono text-sm md:text-base">
                    <div className="text-slate-300">
                      <span className="text-cyan-400">const</span>{" "}
                      brandGrowth = {"{"}
                    </div>
                    <div className="pl-4 text-slate-300">
                      strategy: <span className="text-emerald-400">"tailored"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      creators: <span className="text-emerald-400">"verified network"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      execution: <span className="text-emerald-400">"fast & scalable"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      outcome: <span className="text-emerald-400">"ROI focused"</span>
                    </div>
                    <div className="text-slate-300">{"}"}</div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4"
                    >
                      <div className="text-2xl font-black text-slate-900">{item.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* stats */}
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-[1.75rem] border border-emerald-100/80 bg-white/80 p-7 shadow-lg shadow-emerald-100/40 backdrop-blur"
              >
                <div className="text-4xl font-black tracking-[-0.04em] text-slate-900">
                  {item.value}
                </div>
                <p className="mt-2 text-base text-slate-600">{item.label}</p>
              </div>
            ))}
          </motion.section>

          {/* story + mission */}
          <section className="mt-16 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[2rem] border border-slate-100 bg-white/85 p-8 shadow-xl backdrop-blur-xl md:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                Our story
              </p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
                A modern bridge between brands and creators
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                VMERG was built to simplify influencer marketing for ambitious brands.
                Instead of fragmented outreach and unclear execution, we provide a more
                structured approach to discovering creators, planning collaborations,
                and delivering campaigns with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="rounded-[2rem] border border-slate-100 bg-slate-900 p-8 shadow-xl md:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
                Our mission
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Make creator marketing scalable, creative, and performance-driven
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We aim to help brands grow with campaigns that feel authentic to audiences
                and effective for business goals. Our focus is on combining creator fit,
                content quality, and execution speed into one reliable system.
              </p>
            </motion.div>
          </section>

          {/* values */}
          <section className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mb-8 max-w-2xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                Why brands work with us
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
                Built for clarity, speed, and campaign performance
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.35 + i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-black text-white shadow-md">
                      0{i + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 p-8 text-white shadow-2xl md:p-12"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Let’s build together
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">
                  Ready to scale with creator-led campaigns?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                  We help brands move from idea to execution with creator partnerships
                  that are structured, scalable, and growth-focused.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-900 shadow-lg transition hover:scale-[1.03]"
              >
                Talk to us
              </a>
            </div>
          </motion.section>
        </section>
      </main>
    </>
  );
}