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
  { name: "Bear House", img: "/logo/bear-house.jpeg" },
  { name: "British Biologicals", img: "/logo/british-biologicals.jpeg" },
  { name: "Kotak", img: "/logo/kotak.jpeg" },
  { name: "Bybit", img: "/logo/bybit.jpeg" },
  { name: "CoinSwitch", img: "/logo/coinswitch.jpeg" },
  { name: "Fast&Up", img: "/logo/fastup.jpeg" },
  { name: "Masai", img: "/logo/masai.jpeg" },
  { name: "Oziva", img: "/logo/oziva.jpeg" }, // 👈 fixed
  { name: "Porter", img: "/logo/porter.jpeg" },
  { name: "Snitch", img: "/logo/snitch.jpeg" },
  { name: "Uniqlo", img: "/logo/uniqlo.jpeg" },
  { name: "Unocoin", img: "/logo/unocoin.jpeg" },
  { name: "Density Exchange", img: "/logo/densityexchange.jpeg" },
  { name: "Devine Talk", img: "/logo/devinetalk.jpeg" },
  { name: "Kuku FM", img: "/logo/kukufm.jpeg" },
  { name: "Lemon", img: "/logo/lemon.jpeg" },
  { name: "Precise", img: "/logo/precise.jpeg" },
  { name: "Skydo", img: "/logo/skydo.jpeg" },
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
<section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white text-center">

  {/* HEADING */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
    Brands we’ve worked with
  </h2>

  <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
    Trusted by fast-growing startups and industry leaders
  </p>

 {/* GRID */}
<div className="mt-20 max-w-6xl mx-auto px-4">

  {(() => {
    const chunkSize = 5; // per row (lg screens)
    const rows = [];

    for (let i = 0; i < brands.length; i += chunkSize) {
      rows.push(brands.slice(i, i + chunkSize));
    }

    return rows.map((row, rowIndex) => (
      <div
        key={rowIndex}
       className="flex justify-center gap-10 md:gap-12 mb-16 md:mb-20"
      >
        {row.map((b, i) => (
          <div
            key={b.name}
            className={`flex items-center justify-center ${
              (rowIndex + i) % 2 === 0 ? "md:translate-y-4" : ""
            }`}
          >

            <div
              className="
              group relative
              px-5 py-4
              rounded-xl
              bg-white

              shadow-[0_18px_30px_rgba(0,0,0,0.12),-10px_10px_20px_rgba(0,0,0,0.08)]
              hover:shadow-[0_28px_60px_rgba(0,0,0,0.18),-14px_14px_30px_rgba(0,0,0,0.12)]

              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:scale-110
              "
            >

              {/* reflection */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-40 pointer-events-none" />

              {/* LOGO */}
              <img
                src={b.img}
                alt={b.name}
                className="h-[70px] sm:h-[80px] md:h-[90px] w-auto object-contain transition duration-500 group-hover:scale-110"
              />

            </div>

          </div>
        ))}
      </div>
    ));
  })()}

</div>

      

</section>

{/* OUR PROCESS */}
<section className="py-20 sm:py-28 bg-gradient-to-b from-sky-50 via-blue-50 to-white text-center">

  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
    Our <span className="text-blue-600">Process</span>
  </h2>

  <p className="mt-4 text-slate-600">
    A structured approach to scale campaigns
  </p>

  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-4">

    {["Plan", "Match", "Launch", "Scale"].map((step, i) => {

      const isHighlight = i === 2;

      return (
        <div key={step} className="group perspective-[800px] flex justify-center">

          <div
            className={`
            relative w-[160px] h-[110px]
            transform-style-preserve-3d
            transition-all duration-500

            ${
              isHighlight
                ? "scale-110 -translate-y-2"
                : "group-hover:-translate-y-2"
            }

            group-hover:rotate-x-6 group-hover:-rotate-y-6
            `}
          >

            {/* 🔥 FRONT FACE */}
            <div className="absolute inset-0 bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center z-10">

              <p className="text-blue-600 text-sm font-semibold">
                0{i + 1}
              </p>

              <h3 className={`mt-1 font-semibold ${
                isHighlight ? "text-blue-700" : "text-slate-900"
              }`}>
                {step}
              </h3>

            </div>

            {/* 🔥 TOP FACE */}
            <div className="
              absolute inset-0 
              bg-slate-200 rounded-xl
              transform -translate-y-[12px] skew-x-[-20deg]
              opacity-80
            " />

            {/* 🔥 SIDE FACE */}
            <div className="
              absolute inset-0 
              bg-slate-300 rounded-xl
              transform translate-x-[12px] skew-y-[-20deg]
              opacity-80
            " />

          </div>

        </div>
      );
    })}

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