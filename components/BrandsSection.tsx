"use client";

import { motion } from "framer-motion";
import { useTheme } from "../app/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function BrandsSection() {
  const { themeClasses } = useTheme();

  const brands = [
    "D2C Brands",
    "Fintech Startups",
    "EdTech Platforms",
    "Consumer Apps",
    "Gaming Brands",
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${themeClasses.sectionGlow}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* 💎 MAIN CARD */}
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12 lg:p-14">

          {/* 🔝 HEADER */}
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">

            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600">
              Trusted growth partner
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
              Brands scaling with{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
                Vmerg
              </span>
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 max-w-3xl mx-auto text-slate-600">
              We help ambitious brands build creator-led growth systems — from
              strategy to execution and performance scaling.
            </p>
          </motion.div>

          {/* 🧩 BRAND PILLS */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="h-[64px] rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:border-cyan-400 hover:-translate-y-1 transition-all">
                  <span className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition">
                    {brand}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LOWER CONTENT */}
          <motion.div
            {...fadeUp}
            className="mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-start"
          >
            <div className="rounded-[1.75rem] border border-slate-200 bg-white/70 backdrop-blur-lg p-6 md:p-8">

              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-cyan-600">
                What brands value
              </p>

              <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Strategy, execution and creator fit in one system
              </h3>

              <p className="mt-4 text-sm md:text-base leading-8 text-slate-600">
                Vmerg supports brands with structured planning, better execution
                and performance-driven campaigns.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "24×7", label: "Support flow" },
                { value: "Multi", label: "Category coverage" },
                { value: "India+", label: "Regional reach" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-6 text-center shadow-sm"
                >
                  <p className="text-2xl md:text-3xl font-black text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TRUST LINE */}
          <motion.p
            {...fadeUp}
            className="mt-12 text-sm md:text-base text-center max-w-3xl mx-auto leading-7 text-slate-500"
          >
            Working with creators across India, Vmerg helps brands launch
            multilingual campaigns with stronger reach and better engagement.
          </motion.p>

        </div>
      </div>
    </section>
  );
}