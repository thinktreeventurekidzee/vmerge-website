"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `VMERG Campaign Inquiry
Name: ${form.name}
Email: ${form.email}
Brand: ${form.brand}
Message: ${form.message}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  const contactItems = [
    {
      icon: "📧",
      title: "Email",
      value: "vmergmedia@gmail.com",
      desc: "For brand campaigns and creator collaborations",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+91 86607 83740",
      desc: "Quick response for campaign discussions",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bengaluru, India",
      desc: "Operating across India & global markets",
    },
    {
      icon: "🆔",
      title: "Company ID",
      value: "U74999KA2021PTC153669",
      desc: "VMERG Media Private Limited",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/40 to-purple-900/30">

        {/* BG GLOW */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">

          {/* HERO */}
          <div className="text-center text-white max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-pop leading-tight">
              Start your next
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                creator campaign
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 font-inter">
              Share your goals, and we’ll help you plan, launch, and scale your influencer campaigns with clarity and speed.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT INFO */}
            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition"
                >
                  <div className="flex gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-pop text-lg">
                        {item.title}
                      </h3>
                      <p className="text-white font-semibold">
                        {item.value}
                      </p>
                      <p className="text-slate-300 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl">

              <h2 className="text-2xl font-pop text-white text-center">
                Start Campaign Discussion
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-slate-400 border border-white/30 focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-slate-400 border border-white/30 focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <input
                  name="brand"
                  placeholder="Brand / Company"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-slate-400 border border-white/30 focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Campaign details..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-slate-400 border border-white/30 focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-inter hover:opacity-90 transition"
                >
                  Continue on WhatsApp →
                </button>

              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}