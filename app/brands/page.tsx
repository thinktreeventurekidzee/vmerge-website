"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function BrandsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Brand Campaign Inquiry
Name: ${form.name}
Email: ${form.email}
Brand: ${form.brand}
Budget: ${form.budget}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  const stats = [
    { value: "3.8x", label: "Avg ROI" },
    { value: "500+", label: "Brands" },
    { value: "10K+", label: "Creators" },
  ];

  const brands = [
    "CoinSwitch","Probo","Kotak Mahindra Bank","Bybit","Density Exchange",
    "Lemonn","Unocoin","OZiva","Fast&Up","British Biological","Masai School",
    "Master AI","Uniqlo","Snitch","Beer House","Rapido","Porter","Skydo",
    "KukuFM","Poxpo","DivineTalk","Haanaa","Precize"
  ];

  const loopBrands = [...brands, ...brands];

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/40 pt-24 pb-24 px-6">

        {/* 🔥 HERO SECTION */}
        <section className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* BG BLOBS */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />
          </div>

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-8">

            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow">
              ● Brands Only
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
              Scale your brand with creator-led campaigns
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Launch faster, reach the right audience, and drive measurable results.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/60 backdrop-blur-xl border border-white/40 p-5 rounded-2xl text-center shadow-md hover:shadow-xl transition hover:-translate-y-1"
                >
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* FORM */}
          <motion.div {...fadeUp}>
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 md:p-10 shadow-2xl space-y-5 hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] transition"
            >

              {/* glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />

              <h2 className="text-2xl font-bold text-center text-slate-900">
                Start your campaign
              </h2>

              <div className="space-y-4">

                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />

                <input
                  name="brand"
                  placeholder="Brand Name"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                >
                  <option value="">Select Budget</option>
                  <option>₹50K - ₹1L</option>
                  <option>₹1L - ₹5L</option>
                  <option>₹5L+</option>
                </select>

              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg"
              >
                Continue on WhatsApp →
              </button>

              <p className="text-xs text-center text-slate-500">
                Trusted by 500+ brands • Fast onboarding
              </p>

            </form>
          </motion.div>

        </section>

        {/* 🔥 MOVING BRANDS */}
        <section className="mt-24 overflow-hidden">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Brands VMERG Has Worked With
          </h2>

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {loopBrands.map((brand, i) => (
              <div key={i} className="group min-w-[200px]">

                <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

                  <div className="relative h-24 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl overflow-hidden group-hover:bg-white transition">

                    <span className="font-semibold text-slate-800 text-sm text-center px-4 group-hover:scale-110 transition">
                      {brand}
                    </span>

                  </div>

                </div>

              </div>
            ))}
          </motion.div>

        </section>

      </main>
    </>
  );
}