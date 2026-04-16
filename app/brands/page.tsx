"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function BrandsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.open("https://wa.me/918660783740");
  };

  return (
    <>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="relative py-32 px-6 text-center text-white bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 overflow-hidden">
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-30 blur-[120px] rounded-full" />

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold">
              We scale brands through creators
            </h1>
            <p className="mt-6 text-white/80 max-w-xl mx-auto text-lg">
              Structured influencer campaigns designed for real business growth.
            </p>
          </div>
        </section>

        {/* ================= AUTHORITY ================= */}
        <section className="py-24 bg-white text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why brands choose us
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Access to high-performing creators",
              "Structured campaign execution",
              "Performance-driven results",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-400/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 mb-3 mx-auto"></div>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= BRANDS ================= */}
      <section className="py-24 bg-white text-center">

  <h2 className="text-3xl font-semibold text-slate-900">
    Brands we’ve worked with
  </h2>

  <p className="mt-4 text-slate-600">
    Trusted by leading brands across industries.
  </p>

  <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

    {[
      "Flipkart",
      "Tata Cliq",
      "boAt",
      "Samsung",
      "Go Colors",
      "Snapdeal",
      "Sebamed",
      "Puma",
    ].map((brand) => (
      <div
        key={brand}
        className="flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-md hover:shadow-xl hover:scale-[1.05] transition"
      >
        <span className="text-slate-700 font-semibold text-sm">
          {brand}
        </span>
      </div>
    ))}

  </div>
</section>  

        {/* ================= PROCESS ================= */}
        <section className="py-24 bg-sky-50 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Our process
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Plan", "Match", "Launch", "Scale"].map((step) => (
              <div
                key={step}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-400/10 border border-white/30 backdrop-blur-xl shadow-lg hover:scale-[1.05] transition-all duration-300"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CATEGORY ================= */}
        <section className="py-28 bg-slate-50 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Explore creators across categories
              </h2>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Finance & Crypto",
                  items: ["Stock Influencers","Crypto Influencers","Trading Experts"],
                },
                {
                  title: "Fashion & Beauty",
                  items: ["Fashion Influencers","Makeup Artists","Models"],
                },
              ].map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-semibold text-slate-900 mb-4">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1 rounded-full bg-white shadow-sm text-slate-600 hover:bg-sky-100 hover:text-sky-600 transition cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FORM ================= */}
       <section className="py-28 bg-gradient-to-b from-white via-sky-50 to-white">

  <div className="max-w-5xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
        Partner with us for your next campaign
      </h2>
      <p className="mt-3 text-slate-600">
        Share your goals — we’ll craft a high-performing influencer strategy.
      </p>
    </div>

    {/* FORM CARD */}
    <div className="mt-14 bg-gradient-to-br from-white/70 via-white/50 to-white/30 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-xl">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
          <input name="email" placeholder="Work Email" onChange={handleChange} className="input" />
        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="brand" placeholder="Brand Name" onChange={handleChange} className="input" />
          <input name="website" placeholder="Website / App Link" onChange={handleChange} className="input" />
        </div>

        {/* ROW 3 */}
        <div className="grid md:grid-cols-2 gap-4">
          <select name="budget" onChange={handleChange} className="input">
            <option>Campaign Budget</option>
            <option>₹50K - ₹1L</option>
            <option>₹1L - ₹5L</option>
            <option>₹5L - ₹10L</option>
            <option>₹10L+</option>
          </select>

          <select name="goal" onChange={handleChange} className="input">
            <option>Campaign Goal</option>
            <option>Brand Awareness</option>
            <option>Sales</option>
            <option>App Installs</option>
            <option>Content Creation</option>
          </select>
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Tell us about your campaign..."
          onChange={handleChange}
          className="input h-28"
        />

        {/* CTA */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-md transition">
          Get Campaign Strategy →
        </button>

        <p className="text-xs text-center text-slate-500">
          ⚡ Quick response • No spam
        </p>

      </form>
    </div>
  </div>
</section>
            

      </main>
    </>
  );
}