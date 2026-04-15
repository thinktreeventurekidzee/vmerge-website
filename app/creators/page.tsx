"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function CreatorsPage() {
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

  const niches = ["Fashion","Finance","Crypto","Tech","Fitness","Lifestyle"];

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-28 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Turn your content into <span className="text-purple-600">income</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Join creators earning through brand collaborations.
          </p>
        </section>

        {/* ================= WHO THIS IS FOR ================= */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-semibold">
            Built for creators who want to grow & earn
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Growing creators (5K–100K)",
              "Established creators",
              "Niche experts",
            ].map((item) => (
              <div key={item} className="p-6 bg-purple-50 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= EARNING ================= */}
        <section className="py-24 bg-slate-50 text-center">
          <h2 className="text-3xl font-semibold">
            Real earning opportunities
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "₹50K – ₹2L / month",
              "Weekly payouts",
              "Long-term deals",
            ].map((item) => (
              <div key={item} className="p-6 bg-white rounded-xl shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CREATOR SHOWCASE ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl text-center font-semibold">
              Creators across categories
            </h2>

            <div className="mt-16 space-y-16">

              {[
                {
                  title: "Finance & Investing",
                  creators: [
                    { name: "Rachana Ranade", img: "/Rachana Ranade.jpeg" },
                    { name: "Neha Nagar", img: "/Neha Nagar.jpeg" },
                    { name: "Ankur Warikoo", img: "/Ankur Warikoo.jpeg" },
                    { name: "Prakash Gaba", img: "/Prakash Gaba.jpeg" },
                  ],
                },
                {
                  title: "Crypto",
                  creators: [
                    { name: "Crypto Aman", img: "/Crypto Aman.jpeg" },
                    { name: "Jeet Crypto", img: "/Jeet Crypto.jpeg" },
                    { name: "Markets With Mack", img: "/Markets With Mack.jpeg" },
                  ],
                },
                {
                  title: "Entertainment",
                  creators: [
                    { name: "Ashish Chanchlani", img: "/Ashish Chanchlani.jpeg" },
                    { name: "Round2hell", img: "/Round2hell.jpeg" },
                    { name: "Lakshay Chaudhary", img: "/Lakshay Chaudhary.jpeg" },
                  ],
                },
                {
                  title: "Lifestyle",
                  creators: [
                    { name: "Garima Chaurasia", img: "/Garima chaurasia.jpeg" },
                    { name: "iam.savithri", img: "/iam.savithri.jpeg" },
                  ],
                },
              ].map((cat) => (
                <div key={cat.title}>

                  <h3 className="text-xl font-semibold mb-6">
                    {cat.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                    {cat.creators.map((c) => (
                      <div
                        key={c.name}
                        className="group rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                      >
                        <img
                          src={c.img}
                          alt={c.name}
                          className="h-40 w-full object-cover"
                        />

                        <div className="p-3 text-center text-sm font-semibold">
                          {c.name}
                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-24 bg-purple-50 text-center">
          <h2 className="text-3xl font-semibold">
            How it works
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Apply","Get Approved","Get Deals","Earn"].map((step) => (
              <div key={step} className="p-6 bg-white rounded-xl">
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* ================= FORM ================= */}
        <section className="py-28 bg-gradient-to-b from-white via-purple-50 to-white">

          <div className="max-w-3xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-semibold">
              Apply as a creator
            </h2>

            <p className="text-slate-600 mt-2">
              Start getting brand deals and earning
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-5 border border-white/40"
            >

              <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />

              <input name="email" placeholder="Email address" onChange={handleChange} className="input" />

              <input
                name="social"
                placeholder={handles[placeholderIndex]}
                onChange={handleChange}
                className="input"
              />

              <select name="niche" onChange={handleChange} className="input">
                <option>Select your niche</option>
                {niches.map((n) => <option key={n}>{n}</option>)}
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

              <p className="text-xs text-slate-500">
                Takes less than 30 seconds • Quick approval
              </p>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}