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

  const featuredBrands = [
    "Flipkart","Samsung","Puma","boAt","Snapdeal","Sebamed"
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="bg-[#0B1120] text-white py-28 px-6 text-center">
          <h1 className="text-5xl font-bold">
            We scale brands through creators
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Structured influencer campaigns designed for real business growth.
          </p>
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
              <div key={item} className="p-6 bg-sky-50 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= BRANDS ================= */}
       {/* ================= BRANDS ================= */}
<section className="py-24 bg-white text-center">

  <h2 className="text-3xl font-semibold text-slate-900">
    Brands we’ve worked with
  </h2>

  <p className="mt-4 text-slate-600 max-w-xl mx-auto">
    Trusted by leading brands across industries.
  </p>

  {/* GRID */}
  <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 items-center max-w-5xl mx-auto">

    {[
      { name: "Flipkart", file: "flipkart.svg" },
      { name: "Tata Cliq", file: "tatacliq.svg" },
      { name: "boAt", file: "boat.svg" },
      { name: "Samsung", file: "samsung.svg" },
      { name: "Go Colors", file: "gocolors.svg" },
      { name: "Snapdeal", file: "snapdeal.svg" },
      { name: "Sebamed", file: "sebamed.svg" },
      { name: "Puma", file: "puma.svg" },
    ].map((brand) => (
      <div
        key={brand.name}
        className="flex items-center justify-center group"
      >

        {/* 👉 SVG (ADD LATER) */}
        <img
          src={`/brands/${brand.file}`}
          alt={brand.name}
          className="h-8 object-contain opacity-60 group-hover:opacity-100 transition"
          onError={(e: any) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* 👉 FALLBACK TEXT */}
        <span className="text-slate-500 group-hover:text-slate-900 transition text-sm font-medium">
          {brand.name}
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
            {["Plan","Match","Launch","Scale"].map((step) => (
              <div key={step} className="p-6 bg-white rounded-xl">
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CATEGORY DISCOVERY (BOTTOM SEO) ================= */}
        <section className="py-28 bg-slate-50 border-t">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Explore creators across categories
              </h2>
              <p className="mt-4 text-slate-600">
                Discover creators across industries and locations for your campaigns.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {[
                {
                  title: "Finance & Crypto",
                  items: ["Stock Influencers","Crypto Influencers","Trading Experts","Finance YouTubers"],
                },
                {
                  title: "Fashion & Beauty",
                  items: ["Fashion Influencers","Makeup Artists","Lifestyle Creators","Models"],
                },
                {
                  title: "Tech & Gaming",
                  items: ["Tech Creators","AI Influencers","Gaming Streamers","Developers"],
                },
                {
                  title: "Entertainment",
                  items: ["Comedy Creators","Meme Pages","YouTube Creators","Actors"],
                },
                {
                  title: "Travel & Food",
                  items: ["Travel Influencers","Food Bloggers","Vloggers","Cafe Reviewers"],
                },
                {
                  title: "Location Based",
                  items: ["Delhi","Mumbai","Bangalore","Lucknow","Hyderabad"],
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
                        className="text-sm text-slate-600 hover:text-sky-600 cursor-pointer"
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
      <p className="text-xs tracking-[0.25em] uppercase text-sky-500/80">
        Brand collaboration
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-slate-900">
        Partner with us for your next campaign
      </h2>

      <p className="text-slate-600 mt-3 text-sm md:text-base">
        Tell us about your brand and campaign goals. We’ll build a tailored
        creator strategy aligned with your business objectives.
      </p>
    </div>

    {/* FORM CARD */}
    <div className="mt-14 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="input"
          />

          <input
            name="email"
            placeholder="Work Email"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="brand"
            placeholder="Brand Name"
            onChange={handleChange}
            className="input"
          />

          <input
            name="website"
            placeholder="Website / App Link"
            onChange={handleChange}
            className="input"
          />
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
            <option>Sales / Conversions</option>
            <option>App Installs</option>
            <option>Content Creation</option>
          </select>
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Brief about your campaign (target audience, timeline, expectations...)"
          onChange={handleChange}
          className="input h-28"
        />

        {/* CTA */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-md transition">
          Get Campaign Strategy →
        </button>

        {/* TRUST LINE */}
        <p className="text-xs text-slate-500 text-center">
          ⚡ We usually respond within a few hours • No spam
        </p>

      </form>

    </div>

  </div>
</section>
      </main>
    </>
  );
}