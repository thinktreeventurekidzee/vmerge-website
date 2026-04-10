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

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/40 pt-28 pb-24 px-6">

        {/* 🔥 BACKGROUND BLOBS */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-8">

            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-inter shadow-sm">
              <div className="h-2 w-2 bg-indigo-500 rounded-full" />
              Brands Only
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-pop leading-tight bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Scale your brand with creator-led campaigns
            </h1>

            <p className="text-lg font-inter text-slate-600 max-w-xl">
              Launch faster, reach the right audience, and drive measurable results.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-xl text-center shadow-md"
                >
                  <p className="font-pop text-xl text-slate-900">{item.value}</p>
                  <p className="text-sm font-inter text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div {...fadeUp}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-2xl p-8 shadow-2xl space-y-5"
            >
              <h2 className="text-2xl font-pop text-slate-900 text-center">
                Start your campaign
              </h2>

              <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full text-sm font-inter text-indigo-700">
                <div className="h-2 w-2 bg-indigo-500 rounded-full" />
                Launch Campaign
              </div>

              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border bg-white/80 font-inter focus:ring-2 focus:ring-indigo-500"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Work Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border bg-white/80 font-inter focus:ring-2 focus:ring-indigo-500"
                required
              />

              <input
                name="brand"
                placeholder="Brand Name"
                value={form.brand}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border bg-white/80 font-inter focus:ring-2 focus:ring-indigo-500"
                required
              />

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border bg-white/80 font-inter"
                required
              >
                <option value="">Select Budget</option>
                <option>₹50K - ₹1L</option>
                <option>₹1L - ₹5L</option>
                <option>₹5L+</option>
              </select>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-inter hover:opacity-90 transition shadow-lg"
              >
                Continue on WhatsApp →
              </button>
            </form>
          </motion.div>

        </section>
      </main>
    </>
  );
}