"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

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

      <main className="bg-gradient-to-br from-white via-purple-50 to-blue-50">

        {/* HERO */}
        <section className="py-28 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Turn your content into{" "}
            <span className="text-purple-600">income</span>
          </motion.h1>

          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Join creators earning through brand collaborations.
          </p>
        </section>

        {/* WHY JOIN */}
        <section className="py-24 text-center">
          <motion.h2 className="text-4xl font-bold text-purple-600">
            Why creators choose us
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {[
              "Consistent brand deals",
              "Fast payouts",
              "Growth support",
            ].map((item) => (
              <div
                key={item}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-20 text-center bg-white">
          <h2 className="text-3xl font-semibold">
            Brands our creators worked with
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["Zomato","Cred","Nykaa","Boat","Meesho","Groww"].map((brand) => (
              <div key={brand} className="px-6 py-3 bg-slate-100 rounded-xl font-medium">
                {brand}
              </div>
            ))}
          </div>
        </section>
{/* ================= CREATOR SHOWCASE ================= */}
<section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">

  {/* BG GLOW */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full" />
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600">
      Creators across categories
    </h2>

    <p className="text-center text-slate-600 mt-4 max-w-xl mx-auto">
      Join creators from different niches working with top brands
    </p>

    <div className="mt-20 space-y-20">

      {[
        {
          title: "Finance & Investing",
          creators: [
            { name: "Rachana Ranade", img: "/Rachana Ranade.jpeg" },
            { name: "Neha Nagar", img: "/Neha Nagar.jpeg" },
            { name: "Ankur Warikoo", img: "/Ankur Warikoo.jpeg" },
            { name: "Prakash Gaba", img: "/Prakash Gaba.jpeg" },
            { name: "Wealth in Whiteboard", img: "/Wealth in Whiteboard.jpeg" },
          ],
        },
        {
          title: "Crypto",
          creators: [
            { name: "Yashika Crypto", img: "/Yashika Crypto.jpeg" },
            { name: "Crypto Aman", img: "/Crypto Aman.jpeg" },
            { name: "Jeet Crypto", img: "/Jeet Crypto.jpeg" },
            { name: "Markets With Mack", img: "/Markets With Mack.jpeg" },
          ],
        },
        {
          title: "Tech & Education",
          creators: [
            { name: "Dhruv Rathee", img: "/Dhruv Rathee.jpeg" },
            { name: "Sharan Hegde", img: "/Sharan Hegde.jpeg" },
            { name: "Budhil Vyas", img: "/Budhil Vyas.jpeg" },
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
          title: "Lifestyle & Others",
          creators: [
            { name: "Garima Chaurasia", img: "/Garima chaurasia.jpeg" },
            { name: "iam.savithri", img: "/iam.savithri.jpeg" },
            { name: "smit_thakkarrr", img: "/smit_thakkarrr.jpeg" },
            { name: "Hold with Priyanka", img: "/Hold with Priyanka.jpeg" },
          ],
        },
      ].map((category) => (

        <div key={category.title}>

          {/* CATEGORY TITLE */}
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">
            {category.title}
          </h3>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {category.creators.map((creator) => (

              <div
                key={creator.name}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >

                {/* GRADIENT BORDER */}
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500">

                  <div className="rounded-2xl overflow-hidden bg-white">

                    {/* IMAGE */}
                    <div className="relative overflow-hidden">
                      <img
                        src={creator.img}
                        alt={creator.name}
                        className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                      {/* BADGE */}
                      <div className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-black/70 text-white">
                        Creator
                      </div>

                      {/* NAME ON HOVER */}
                      <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                        {creator.name}
                      </div>
                    </div>

                    {/* NAME */}
                    <div className="p-3 text-center">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {creator.name}
                      </h4>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
       

        {/* PROCESS */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-semibold">
            How it works
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Apply","Get Approved","Get Deals","Earn"].map((step) => (
              <div key={step} className="p-6 bg-white rounded-xl shadow hover:shadow-xl">
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* FORM (KEEP PREMIUM) */}
        <section className="py-28">

          <div className="max-w-3xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-semibold">
              Apply as a creator
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-10 bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-5"
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
                {niches.map((n) => <option key={n}>{n}</option>)}
              </select>

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl">
                Apply →
              </button>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}