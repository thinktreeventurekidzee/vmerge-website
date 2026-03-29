"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ FIXED: Changed from "@/context/ThemeContext"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function CreatorsPage() {
  const { themeClasses } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    niche: "",
    followers: "",
    platform: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Application submitted 🚀");
  };

  return (
    <main className={`relative overflow-hidden min-h-screen ${themeClasses.pageBg}`}>
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${themeClasses.sectionGlow}`}
        />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-16 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" />
      </div>

      <div className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl ${themeClasses.badge}`}
          >
            Creator Growth Network
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className={`mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight ${themeClasses.heroText}`}
          >
            Work with Top Brands &{" "}
            <span className={themeClasses.gradientText}>
              Grow Your Influence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className={`mt-6 text-base md:text-lg max-w-2xl mx-auto leading-8 ${themeClasses.mutedText}`}
          >
            Join <span className="font-semibold text-white">Vmerg</span> and unlock
            high-paying collaborations, consistent campaigns, and long-term creator
            growth with a professional campaign team.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#join-form"
            className={`inline-flex items-center mt-8 px-8 py-3.5 rounded-full text-sm md:text-base shadow-xl ${themeClasses.button}`}
          >
            Join as Creator 🚀
          </motion.a>
        </section>

        {/* BENEFITS */}
        <section className="mt-20 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-8 text-left">
          {[
            {
              title: "Top Brand Deals",
              desc: "Collaborate with strong consumer brands across lifestyle, tech, beauty, finance and more.",
            },
            {
              title: "Consistent Income",
              desc: "Get access to recurring paid campaigns and long-term partnership opportunities.",
            },
            {
              title: "Fast Payments",
              desc: "Enjoy transparent communication, smooth workflow handling and timely payout support.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`rounded-3xl p-7 md:p-8 shadow-lg ${themeClasses.card}`}
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${themeClasses.badge}`}>
                Benefit {i + 1}
              </div>
              <h3 className={`mt-5 text-xl font-semibold tracking-tight ${themeClasses.heading}`}>
                {item.title}
              </h3>
              <p className={`mt-3 text-sm md:text-base leading-7 ${themeClasses.mutedText}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* PROCESS */}
        <motion.section {...fadeUp} className="mt-20 md:mt-24 text-center">
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${themeClasses.heroText}`}>
            How It Works
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-5 md:gap-6 text-left">
            {["Apply", "Get Verified", "Receive Campaigns", "Get Paid"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl p-6 ${themeClasses.card}`}
                >
                  <p className={`text-sm font-bold ${themeClasses.gradientText}`}>
                    Step {i + 1}
                  </p>
                  <h3 className={`mt-2 text-lg font-semibold ${themeClasses.heading}`}>
                    {step}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${themeClasses.mutedText}`}>
                    A smooth creator onboarding flow built for faster campaign readiness.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* TRUST */}
        <motion.section {...fadeUp} className="mt-20 md:mt-24 text-center">
          <div className={`rounded-3xl p-10 md:p-12 shadow-xl ${themeClasses.card}`}>
            <h2 className={`text-2xl md:text-3xl font-black tracking-tight ${themeClasses.heroText}`}>
              Trusted by 1000+ Creators
            </h2>
            <p className={`mt-4 text-sm md:text-base max-w-2xl mx-auto leading-7 ${themeClasses.mutedText}`}>
              Build your influence with structured brand collaborations, clearer campaign communication, and better growth opportunities.
            </p>
          </div>
        </motion.section>

        {/* FORM */}
        <section id="join-form" className="mt-24 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-[2rem] border p-10 md:p-14 text-center shadow-2xl ${themeClasses.card}`}
          >
            <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${themeClasses.heroText}`}>
              Apply as Creator 🚀
            </h2>

            <p className={`mt-4 text-sm md:text-base max-w-xl mx-auto leading-7 ${themeClasses.mutedText}`}>
              Share your basic profile details and we'll review your fit for upcoming collaborations.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid gap-4 max-w-xl mx-auto"
            >
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`p-4 rounded-2xl outline-none transition-all duration-300 ${themeClasses.input}`}
              />

              <input
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={`p-4 rounded-2xl outline-none transition-all duration-300 ${themeClasses.input}`}
              />

              <input
                name="niche"
                placeholder="Your Niche"
                value={form.niche}
                onChange={handleChange}
                className={`p-4 rounded-2xl outline-none transition-all duration-300 ${themeClasses.input}`}
              />

              <input
                name="followers"
                placeholder="Follower Count"
                value={form.followers}
                onChange={handleChange}
                className={`p-4 rounded-2xl outline-none transition-all duration-300 ${themeClasses.input}`}
              />

              <select
                name="platform"
                value={form.platform}
                onChange={handleChange}
                className={`p-4 rounded-2xl outline-none transition-all duration-300 ${themeClasses.input}`}
              >
                <option value="">Platform</option>
                <option>Instagram</option>
                <option>YouTube</option>
                <option>Both</option>
              </select>

              <button
                type="submit"
                className={`mt-4 py-4 rounded-full text-sm md:text-base shadow-xl ${themeClasses.button}`}
              >
                Submit 🚀
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </main>
  );
}