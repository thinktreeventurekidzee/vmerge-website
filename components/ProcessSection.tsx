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
    <section
      id="process"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
    >

      {/* BG GLOW */}
      <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-2xl">

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-blue-700">
            Process
          </p>

          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            A simple path from idea to execution
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            A structured approach designed for clarity, speed and measurable outcomes.
          </p>

        </motion.div>

        {/* STEPS */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-lg transition"
            >

              <div className="flex items-start gap-3">

                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-700 text-white text-xs sm:text-sm font-semibold shrink-0">
                  {step.number}
                </div>

                <h3 className="text-sm sm:text-lg font-semibold text-blue-700 leading-snug">
                  {step.title}
                </h3>

              </div>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}