"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function CreatorsPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    social: "",
    niche: "",
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.social || !form.niche) {
      alert("Please fill all fields");
      return;
    }

    window.open("https://wa.me/918660783740");
  };
const categories = [
  {
    title: "Finance & Investing",
    creators: [
      { name: "Rachana Ranade", img: "/Rachana Ranade.jpeg" },
      { name: "Neha Nagar", img: "/Neha Nagar.jpeg" },
      { name: "Ankur Warikoo", img: "/Ankur Warikoo.jpeg" },
      { name: "Sharan Hegde", img: "/Sharan Hegde.jpeg" },
      { name: "Prakash Gaba", img: "/Prakash Gaba.jpeg" },
      { name: "Yashika Crypto", img: "/Yashika Crypto.jpeg" },
      { name: "Crypto Aman", img: "/Crypto Aman.jpeg" },
      { name: "Jeet Crypto", img: "/Jeet Crypto.jpeg" },
       // TRS podcast - business, finance, self-improvement[web:35][web:38]
    ],
  },
  {
    title: "Entertainment",
    creators: [
      { name: "Ashish Chanchlani", img: "/Ashish Chanchlani.jpeg" },
      { name: "Round2hell", img: "/Round2hell.jpeg" },
      { name: "Lakshay Chaudhary", img: "/Lakshay Chaudhary.jpeg" },
       { name: "Anubhav Singh Bassi", img: "/anubhav singh bassi.jpeg" },
        { name: "Carry Minati", img: "/carry.jpeg" },
         { name: "Sourav Joshi", img: "/sourav joshi.jpeg" },
          { name: "Triggered Insaan", img: "/triggered insaan.jpeg" },
        { name: "Bhuvan Bam", img: "/Bhuvan Bam.jpeg" },
    
    
    ],
  },
  {
    title: " Beauty &Lifestyle",
    creators: [
      { name: "Garima Chaurasia", img: "/garima.jpeg" },
      { name: "iam.savithri", img: "/iam.savithri.jpeg" },
      { name: "navyanoor_astrotarot", img: "/Navyanoor.jpeg" },
       { name: "Anushree", img: "/Anushree.jpeg" },
           { name: "Archanachandhoke", img: "/Archanachandhoke.jpeg" },
                 { name: "ddneelakandan", img: "/ddneelakandan.jpeg" },
                  { name: "Gracy Goswami", img: "/gracy-goswami.jpeg" }, 
                   { name: "Lavi yadav", img: "/Lavi yadav.jpeg" },
      { name: "Mythri Iyer", img: "/Mythri iyer.jpeg" },
      { name: "Vaishnavi", img: "/Vaishnavi.jpeg" },
     
    ],
  },
];
  return (
    <>
      <Navbar />

      <main className="bg-[#eaf4ff]">

       {/* HERO */}
<section className="py-20 sm:py-28 text-center px-4 sm:px-6">

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight"
  >
    1 Million+ Influencers <br className="hidden sm:block" />
    <span className="text-blue-600">
      Across India
    </span>
  </motion.h1>

  <p className="mt-4 sm:mt-6 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
    Join creators who are building their audience and monetizing content.
  </p>

</section>


{/* CREATOR SHOWCASE */}
<section className="py-20 sm:py-28 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900">
      Creators across categories
    </h2>

    <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
      From finance to fashion to tech — creators are growing with us.
    </p>

    <div className="mt-12 space-y-12">

      {categories.map((category) => (

        <div key={category.title}>

          {/* CATEGORY TITLE */}
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 border-l-4 border-blue-500 pl-4">
            {category.title}
          </h3>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

            {category.creators.map((creator, index) => (

              <div
                key={`${creator.name}-${index}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative h-[180px] sm:h-[220px] bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center overflow-hidden">

                  <img
                    src={creator.img}
                    alt={creator.name}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                </div>

                {/* NAME */}
                <div className="p-4 text-center">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                    {creator.name}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

        {/* FORM */}
        <section className="py-16 sm:py-20">

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Apply as a creator
            </h2>

            <p className="text-slate-600 mt-2">
              Start your journey with brands
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-5"
            >

              <input
                name="name"
                value={form.name}
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                name="social"
                value={form.social}
                placeholder="Instagram / YouTube / LinkedIn"
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <select
                name="niche"
                value={form.niche}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="">Select Niche</option>
                {["Fashion","Finance","Crypto","Tech","Fitness","Lifestyle"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                Apply Now →
              </button>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}