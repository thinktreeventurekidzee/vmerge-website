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
      title: "Share Your Campaign Goal",
      description:
        "Tell us Your Category, Your Audience, Your Budget and Your Campaign Objective so we can define success clearly.",
    },
    {
      number: "02",
      title: "We Plan and Match Creators",
      description:
        "We Design The Strategy, Shortlist Creators And Align Content, Timelines And Execution.",
    },
    {
      number: "03",
      title: "Launch and Optimize",
      description:
        "We Execute Campaigns, Track Performance and Scale What Works Best.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
    >
      {/* BG GLOW */}
      <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-200/30 blur-3xl rounded-full" />

      {/* 🔥 CENTERED CONTAINER */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">

        {/* HEADER */}
        <motion.div {...fadeUp} className="max-w-2xl text-center">

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-blue-700">
            Process
          </p>

          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            A simple Path From Idea To Execution
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            A structured Approach Designed For Clarity, Speed And Measurable Outcomes.
          </p>

        </motion.div>

        {/* STEPS */}
        <div className="mt-10 sm:mt-14 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="flex flex-col items-center gap-3">

                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-700 text-white text-xs sm:text-sm font-semibold">
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