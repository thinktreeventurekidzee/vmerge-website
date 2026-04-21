"use client";

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

  const brands = [
    { name: "Bear House", img: "/logo/Bear House LOGO.jpeg" },
    { name: "British Biologicals", img: "/logo/Britishbiological LOGO.jpeg" },
    { name: "Kotak", img: "/logo/Kotak Mahindra BANK LOGO.jpeg" },
    { name: "Bybit", img: "/logo/bybit LOGO.jpeg" },
    { name: "CoinSwitch", img: "/logo/CoinSwitch LOGO.jpeg" },
    { name: "Fast&Up", img: "/logo/Fast&up LOGO.jpeg" },
    { name: "Masai", img: "/logo/Masai School.jpeg" },
    { name: "Oziva", img: "/logo/Oziva LOGO.jpeg" },
    { name: "Porter", img: "/logo/PORTER LOGO.jpeg" },
    { name: "Snitch", img: "/logo/Snitch LOGO.jpeg" },
    { name: "Uniqlo", img: "/logo/Uniqlo LOGO.jpeg" },
    { name: "Unocoin", img: "/logo/Unocoin LOGO.jpeg" },
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <section className="py-20 sm:py-28 text-center text-white bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400">
          <h1 className="text-3xl sm:text-5xl font-bold">
            We scale brands through creators
          </h1>
          <p className="mt-4 text-white/80">
            Structured influencer campaigns designed for real growth.
          </p>
        </section>

        {/* WHY BRANDS */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50 to-white text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Why brands choose <span className="text-blue-600">Vmerg</span>
          </h2>

          <p className="mt-3 text-slate-600">
            Built for performance, scale, and clarity
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

            {[
              {
                icon: "🚀",
                title: "Access to high-performing creators",
                desc: "We connect you with creators that actually drive results.",
              },
              {
                icon: "⚙️",
                title: "Structured campaign execution",
                desc: "End-to-end systems for planning and delivery.",
              },
              {
                icon: "📈",
                title: "Performance-driven results",
                desc: "Focused on ROI and measurable growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white/80 border shadow-md hover:shadow-xl transition hover:-translate-y-2"
              >

                <div className="h-24 flex items-center justify-center bg-blue-50">
                  <div className="text-3xl">{item.icon}</div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* BRANDS */}
        <section className="py-20 text-center">

          <h2 className="text-3xl font-semibold text-slate-900">
            Brands we’ve worked with
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">

            {brands.map((b, i) => (
              <div
                key={b.name}
                className={`w-[110px] h-[110px] bg-white rounded-xl shadow-md flex items-center justify-center
                ${i % 2 ? "translate-y-4" : ""}`}
              >
                <img src={b.img} className="w-[80px] object-contain" />
              </div>
            ))}

          </div>

        </section>

        {/* OUR PROCESS */}
        <section className="py-20 sm:py-28 bg-sky-50 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our <span className="text-blue-600">Process</span>
          </h2>

          <p className="mt-3 text-slate-600">
            A structured approach to scale campaigns
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">

            {["Plan", "Match", "Launch", "Scale"].map((step, i) => (
              <div
                key={step}
                className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
              >
                <p className="text-blue-600 text-sm font-semibold">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mt-2">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </section>

      {/* FORM (UNCHANGED) */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50 to-white">

          <div className="max-w-5xl mx-auto px-4">

            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                Partner with us for your next campaign
              </h2>

              <p className="mt-3 text-slate-600">
                Share your goals — we’ll craft a high-performing strategy.
              </p>
            </div>

            <div className="mt-12 rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400">
              <div className="bg-white rounded-3xl p-6 sm:p-8">

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Full Name" onChange={handleChange} className="input-new" />
                    <input name="email" placeholder="Work Email" onChange={handleChange} className="input-new" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="brand" placeholder="Brand Name" onChange={handleChange} className="input-new" />
                    <input name="website" placeholder="Website / App Link" onChange={handleChange} className="input-new" />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your campaign..."
                    onChange={handleChange}
                    className="input-new h-28"
                  />

                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition hover:scale-105">
                    Get Campaign Strategy →
                  </button>

                </form>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}