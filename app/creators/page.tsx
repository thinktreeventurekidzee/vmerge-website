"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreatorsPage() {
  const params = useSearchParams();
  const type = params.get("type");

  const [form, setForm] = useState({
    name: "",
    email: "",
    social: "",
    niche: "",
    followers: "",
  });

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const handles = [
    "@instagram",
    "youtube channel link",
    "twitter / x handle",
    "linkedin profile",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % handles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.open("https://wa.me/918660783740");
  };

  const data: any = {
    growing: {
      title: "Growing Creators 🚀",
      desc: "Start monetizing your audience and land your first brand deals.",
      benefits: ["Brand deals", "Growth guidance", "Fast scaling"],
    },
    established: {
      title: "Established Creators 💼",
      desc: "Scale your influence with premium partnerships.",
      benefits: ["High payouts", "Long-term deals", "Priority access"],
    },
    niche: {
      title: "Niche Experts 🎯",
      desc: "Monetize your expertise with targeted campaigns.",
      benefits: ["Authority deals", "Premium positioning", "Consistent work"],
    },
  };

  const niches = ["Fashion","Finance","Crypto","Tech","Fitness","Lifestyle"];

  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-white via-purple-50 to-blue-50">

        {/* ================= DETAIL PAGE ================= */}
        {type && data[type] ? (
          <section className="py-24 px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold"
            >
              {data[type].title}
            </motion.h1>

            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              {data[type].desc}
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data[type].benefits.map((b: string, i: number) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow hover:shadow-xl transition"
                >
                  {b}
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <Link href="/creators" className="text-purple-600 font-medium">
                ← Back
              </Link>
            </div>

          </section>
        ) : (
          <>
            {/* ================= HERO ================= */}
            <section className="py-24 text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Turn your content into <span className="text-purple-600">income</span>
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                Join creators earning through brand collaborations.
              </p>
            </section>

            {/* ================= WHO ================= */}
            <section className="py-20 text-center">
              <h2 className="text-3xl font-semibold">
                Built for creators who want to grow & earn
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {[
                  { title: "Growing creators", sub: "5K–100K", type: "growing" },
                  { title: "Established creators", sub: "100K+", type: "established" },
                  { title: "Niche experts", sub: "Specialized", type: "niche" },
                ].map((item) => (
                  <Link key={item.type} href={`/creators?type=${item.type}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-white shadow hover:shadow-xl transition cursor-pointer"
                    >
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ================= EARNING ================= */}
            <section className="py-20 text-center">
              <h2 className="text-3xl font-semibold">
                Real earning opportunities
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {[
                  "₹50K – ₹2L / month",
                  "Weekly payouts",
                  "Long-term deals",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* ================= PROCESS (FIXED) ================= */}
            <section className="py-20 text-center">
              <h2 className="text-3xl font-semibold">
                How it works
              </h2>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
                {["Apply","Get Approved","Get Deals","Earn"].map((step) => (
                  <div
                    key={step}   // ✅ FIXED HERE
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </section>

            {/* ================= FORM ================= */}
            <section className="py-24">
              <div className="max-w-3xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-semibold">
                  Apply as a creator
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-5"
                >
                  <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
                  <input name="email" placeholder="Email" onChange={handleChange} className="input" />

                  <input
                    name="social"
                    placeholder={handles[placeholderIndex]}
                    onChange={handleChange}
                    className="input"
                  />

                  <select name="niche" onChange={handleChange} className="input">
                    <option>Select your niche</option>
                    {niches.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>

                  <select name="followers" onChange={handleChange} className="input">
                    <option>Follower range</option>
                    <option>5K – 20K</option>
                    <option>20K – 100K</option>
                    <option>100K+</option>
                  </select>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                    Apply & Start Earning →
                  </button>
                </form>

              </div>
            </section>
          </>
        )}

      </main>
    </>
  );
}