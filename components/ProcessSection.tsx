"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Share your campaign goal",
      description:
        "Tell us your category, audience, budget and campaign objective so we can define success clearly.",
    },
    {
      number: "02",
      title: "We plan and match creators",
      description:
        "We design the strategy, shortlist creators and align content, timelines and execution.",
    },
    {
      number: "03",
      title: "Launch and optimize",
      description:
        "We execute campaigns, track performance and scale what works best.",
    },
  ];

  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-sky-50 to-white">

      {/* soft bg glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Process
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            A simple path from idea to execution
          </h2>

          <p className="mt-4 text-slate-600">
            A structured approach designed for clarity, speed and measurable outcomes.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              {...fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white text-sm font-semibold">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

              </div>

              <p className="mt-4 text-sm text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}