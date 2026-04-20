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
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    social: "",
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

    if (!form.name || !form.email || !form.social || !form.niche) {
      setErrors({
        name: !form.name ? "Required" : "",
        email: !form.email ? "Required" : "",
        social: !form.social ? "Required" : "",
      });
      return;
    }

    window.open("https://wa.me/918660783740");

    setForm({
      name: "",
      email: "",
      social: "",
      niche: "",
    });

    setErrors({
      name: "",
      email: "",
      social: "",
    });
  };

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
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Across India
            </span>
          </motion.h1>

          <p className="mt-4 sm:mt-6 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Join creators who are building their audience and monetizing content.
          </p>

          {/* MARQUEE */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
            <div className="flex gap-6 sm:gap-10 w-max animate-marquee">
              {[...[ 
                "Fashion / Lifestyle","Travel","Food","Beauty","Fitness",
                "Tech","Edutech","Parenting","Finance","Gaming"
              ],
              ...[ 
                "Fashion / Lifestyle","Travel","Food","Beauty","Fitness",
                "Tech","Edutech","Parenting","Finance","Gaming"
              ]].map((item, i) => (
                <span
                  key={i}
                  className="text-sm sm:text-lg font-semibold whitespace-nowrap 
                  bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 
                  bg-clip-text text-transparent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* CREATOR SHOWCASE */}
        <section className="py-20 sm:py-28 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900">
              Creators across categories
            </h2>

            <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              From finance to fashion to tech — creators are growing, building,
              and monetizing their content with us.
            </p>

            <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">

              {[
               {
  title: "Finance & Investing",
  creators: [
    { name: "Rachana Ranade", img: "/Rachana Ranade.jpeg" },
    { name: "Neha Nagar", img: "/Neha Nagar.jpeg" },
    { name: "Ankur Warikoo", img: "/Ankur Warikoo.jpeg" },
    { name: "Prakash Gaba", img: "/Prakash Gaba.jpeg" },
    { name: "Finance by Ankita", img: "/Financebyankita.jpeg" },
    { name: "Markets with M", img: "/Markets with M.jpeg" },
    { name: "Wealth in Whiteboard", img: "/Wealth in Whiteboard.jpeg" },
    { name: "Threestock", img: "/Threestock.jpeg" },
  ],
},
{
  title: "Crypto",
  creators: [
    { name: "Yashika Crypto", img: "/Yashika Crypto.jpeg" },
    { name: "Crypto Aman", img: "/Crypto Aman.jpeg" },
    { name: "Jeet Crypto", img: "/Jeet Crypto.jpeg" },
    { name: "Lakshay Chaudhary", img: "/Lakshay Chaudhary.jpeg" },
  ],
},
{
  title: "Tech & Education",
  creators: [
    { name: "Dhruv Rathee", img: "/Dhruv Rathee.jpeg" },
    { name: "Sharan Hegde", img: "/Sharan Hegde.jpeg" },
    { name: "Navya Noor", img: "/Navyanoor.jpeg" },
    { name: "Smit Thakkar", img: "/Smit Thakkar.jpeg" },
  ],
},
{
  title: "Entertainment",
  creators: [
    { name: "Ashish Chanchlani", img: "/Ashish Chanchlani.jpeg" },
    { name: "Round2hell", img: "/Round2hell.jpeg" },
  ],
},
{
  title: "Lifestyle",
  creators: [
    { name: "Garima chaurasia", img: "/Garima chaurasia.jpeg" },
    { name: "iam.savithri", img: "/iam.savithri.jpeg" },
    { name: "Hold with Priya", img: "/Hold with Priya.jpeg" },
    { name: "Bhagyashree", img: "/Bhagyashree Th.jpeg" },
    { name: "Budhil Vyas", img: "/Budhil Vyass.jpeg" },
  ],
},
              ].map((category) => (

                <div key={category.title}>

                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 sm:mb-6 border-l-4 border-yellow-400 pl-3 sm:pl-4">
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

                    {category.creators.map((creator) => (

                      <div
                        key={creator.name}
                        className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
                      >
                        <img
                          src={creator.img}
                          alt={creator.name}
                          className="w-full h-32 sm:h-44 object-cover group-hover:scale-110 transition duration-500"
                        />

                        <div className="p-2 sm:p-3 text-center text-sm sm:text-base font-medium">
                          {creator.name}
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

            <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base">
              Start your journey with brands
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 sm:mt-8 bg-white p-5 sm:p-8 rounded-3xl shadow-xl space-y-4 sm:space-y-5"
            >

              <input
                name="name"
                value={form.name}
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-yellow-300"
              />

              <input
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-yellow-300"
              />

              <input
                name="social"
                value={form.social}
                placeholder={handles[placeholderIndex]}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-yellow-300"
              />

              <select
                name="niche"
                value={form.niche}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-yellow-300"
              >
                <option value="">Select Niche</option>
                {["Fashion","Finance","Crypto","Tech","Fitness","Lifestyle"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <button className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold">
                Apply Now →
              </button>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}