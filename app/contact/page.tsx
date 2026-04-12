"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CreatorsPage() {
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    niche: "",
    followers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Creator Application - VMerg Media
Name: ${form.name}
Instagram: ${form.instagram}
Niche: ${form.niche}
Followers: ${form.followers}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  const perks = [
    "₹50K+ monthly payouts",
    "Weekly payments",
    "500+ trusted brands",
    "Content creation support",
    "Performance analytics",
    "24hr creator support",
  ];

  const niches = [
    "Beauty",
    "Fashion",
    "Finance",
    "Crypto",
    "Fitness",
    "Lifestyle",
    "Tech",
    "Food",
  ];

  // 🔥 FIXED IMAGE MAPPING
  const creators = [
    { name: "Sushmita Sen", img: "/sushmita.jpeg" },
    { name: "Garima Chaurasia", img: "/Garima chaurasi.jpeg" },
    { name: "Rachana Ranade", img: "/Rachana Ranade.jpeg" },
    { name: "Neha Nagar", img: "/Neha Nagar.jpeg" },
    { name: "iam.savithri", img: "/iam.savithri.jpeg" },
    { name: "Yashika Crypto", img: "/Yashika Crypto.jpeg" },
    { name: "financebyankita", img: "/Financebyankita.jpeg" },
    { name: "Ashish Chanchlani", img: "/Ashish Chanchlani.jpeg" },
    { name: "Round2hell", img: "/Round2hell.jpeg" },
    { name: "Dhruv Rathee", img: "/Dhruv Rathee.jpeg" },
    { name: "Ankur Warikoo", img: "/Ankur Warikoo.jpeg" },
    { name: "Sharan Hegde", img: "/Sharan Hegde.jpeg" },
    { name: "Lakshay Chaudhary", img: "/Lakshay Chaudhary.jpeg" },
    { name: "Crypto Aman", img: "/Crypto Aman.jpeg" },
    { name: "Jeet Crypto", img: "/Jeet Crypto.jpeg" },
    { name: "Markets With Mack", img: "/Markets With Mack.jpeg" },
    { name: "Budhil Vyas", img: "/Budhil Vyas.jpeg" },
    { name: "threestocks", img: "/threestocks.jpeg" },
    { name: "Prakash Gaba", img: "/Prakash Gaba.jpeg" },
    { name: "Hold with Priyanka", img: "/Hold with Priyanka.jpeg" },
    { name: "smit_thakkarrr", img: "/smit_thakkarrr.jpeg" },
    { name: "Wealth in Whiteboard", img: "/Wealth in Whiteboard.jpeg" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50">

        <section className="max-w-7xl mx-auto px-4 pt-24 pb-24">

          {/* TOP */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-16 lg:grid-cols-[1.2fr_1fr]"
          >
            {/* LEFT */}
            <motion.div variants={itemVariants} className="space-y-8">
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm font-bold text-purple-700">
                For Creators
              </span>

              <h1 className="text-4xl md:text-6xl font-black">
                Join 10K+ Creators
              </h1>

              <p className="text-slate-600 text-lg">
                Get paid by 500+ brands. Weekly payouts.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk) => (
                  <div key={perk} className="bg-white p-4 rounded-xl shadow">
                    {perk}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-xl space-y-4"
            >
              <h3 className="text-xl font-bold text-center">Apply Now</h3>

              <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <input name="instagram" placeholder="@instagram" onChange={handleChange} className="w-full p-3 border rounded-lg" />

              <select name="niche" onChange={handleChange} className="w-full p-3 border rounded-lg">
                <option>Select Niche</option>
                {niches.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <input name="followers" placeholder="Followers" onChange={handleChange} className="w-full p-3 border rounded-lg" />

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl">
                Join Now
              </button>
            </motion.form>
          </motion.div>

          {/* 🔥 CREATOR SHOWCASE */}
          <div className="mt-24">

            <h2 className="text-3xl md:text-4xl font-black text-center mb-6">
              Creators Powering Brand Growth
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {creators.map((creator, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >

                  <div className="relative">
                    <img
                      src={creator.img}
                      alt={creator.name}
                      className="w-full h-56 object-cover"
                    />

                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                      Creator
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-slate-900">
                      {creator.name}
                    </h3>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>
      </main>
    </>
  );
}