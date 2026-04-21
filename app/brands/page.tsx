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

  // 🔥 BRAND LOGOS DATA (MATCH WITH /public/logo)
  const brands = [
    { name: "Bear House", img: "/logo/Bear House LOGO.jpeg" },

  { name: "British Biologicals", img: "/logo/Britishbiological LOGO.jpeg" },
  { name: "Kotak Mahindra", img: "/logo/Kotak Mahindra BANK LOGO.jpeg" },
    { name: "Bybit", img: "/logo/bybit LOGO.jpeg" },
    { name: "CoinSwitch", img: "/logo/CoinSwitch LOGO.jpeg" },
    { name: "Density Exchange", img: "/logo/Density Exchange.jpeg" },
    { name: "Divine Talk", img: "/logo/Divine Talk LOGO.jpeg" },
    { name: "Fast&Up", img: "/logo/Fast&up LOGO.jpeg" },

    { name: "KuKu FM", img: "/logo/KuKuFM LOGO.jpeg" },
    { name: "Lenomm", img: "/logo/lenonn LOGO.jpeg" },
    { name: "Masai School", img: "/logo/Masai School.jpeg" },
    { name: "Oziva", img: "/logo/Oziva LOGO.jpeg" },
    { name: "Porter", img: "/logo/PORTER LOGO.jpeg" },
    { name: "Precize", img: "/logo/Precize LOGO.jpeg" },
    { name: "Skydo", img: "/logo/Skydo LOGO.jpeg" },
    { name: "Snitch", img: "/logo/Snitch LOGO.jpeg" },
    { name: "Uniqlo", img: "/logo/Uniqlo LOGO.jpeg" },
    { name: "Unocoin", img: "/logo/Unocoin LOGO.jpeg" },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 text-center text-white bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 overflow-hidden">

          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-30 blur-[120px] rounded-full" />

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              We scale brands through creators
            </h1>

            <p className="mt-4 sm:mt-6 text-white/80 max-w-xl mx-auto text-base sm:text-lg">
              Structured influencer campaigns designed for real business growth.
            </p>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Why brands choose us
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6">
            {[
              "Access to high-performing creators",
              "Structured campaign execution",
              "Performance-driven results",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-400/10 shadow-lg hover:scale-[1.03] hover:shadow-xl transition"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 mb-3 mx-auto"></div>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 BRANDS WITH LOGOS */}
        <section className="py-16 sm:py-24 bg-white text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Brands we’ve worked with
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by leading brands across industries.
          </p>
          <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">

    {brands.map((brand) => (
      <div
        key={brand.name}
        className="group flex items-center justify-center 
        h-[80px] sm:h-[100px] 
        rounded-2xl bg-white/80 backdrop-blur-md
        border border-slate-200 
        shadow-sm hover:shadow-lg 
        transition-all duration-300 hover:scale-[1.05]"
      >

        <img
          src={brand.img}
          alt={brand.name}
          className="max-h-10 sm:max-h-12 md:max-h-14 
          object-contain 
          transition duration-300 group-hover:scale-105"
        />

      </div>
    ))}

  </div>

</div>
         

          
        </section>

        {/* PROCESS */}
        <section className="py-16 sm:py-24 bg-sky-50 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Our process
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4 sm:px-6">
            {["Plan", "Match", "Launch", "Scale"].map((step) => (
              <div
                key={step}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-400/10 shadow-lg hover:scale-[1.05] transition"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50 to-white">

          <div className="max-w-5xl mx-auto px-4 sm:px-6">

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