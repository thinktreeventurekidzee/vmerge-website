"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ================= ANIMATION ================= */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { value: "5000+", label: "Creators" },
  { value: "500+", label: "Brands" },
  { value: "100+", label: "Categories" },
  { value: "2x", label: "Faster execution" },
];

export default function AboutPage() {
  return (
    <main className="relative bg-gradient-to-b from-blue-50 via-sky-50 to-white text-slate-900 overflow-hidden">

      {/* 🌊 SOFT BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full pointer-events-none" />

      {/* ================= HERO ================= */}
      <motion.section
        {...fadeUp}
        className="max-w-5xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          We help brands grow through{" "}
          <span className="text-blue-700">creator-led marketing</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          VMERG connects brands with the right creators and executes campaigns
          with clarity, speed, and measurable impact.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition"
          >
            Start a campaign
          </Link>
        </motion.div>
      </motion.section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-white py-20">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Most campaigns fail because of
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "No clear strategy",
              "Wrong creator selection",
              "Unstructured execution",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <p className="text-slate-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-20 bg-slate-50">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            We solve this with a structured system
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Strategy",
                desc: "Campaigns designed around clear business goals.",
              },
              {
                title: "Creators",
                desc: "Matched creators aligned with your audience.",
              },
              {
                title: "Execution",
                desc: "Fast workflows that deliver consistent results.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PROOF ================= */}
      <section className="py-20 bg-white">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Trusted by growing brands
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl font-bold text-blue-700">
                  {item.value}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-slate-50">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            How it works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {["Plan", "Match", "Execute", "Scale"].map((step) => (
              <motion.div
                key={step}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <p className="font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to scale with creator-led campaigns?
          </h2>

          <p className="mt-4 text-slate-300">
            Let’s build campaigns that are structured, scalable, and impactful.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Talk to us
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}