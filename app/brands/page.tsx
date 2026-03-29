"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BrandsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead:", form);
    // Replace alert with better UX
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
    submitBtn.innerText = 'Sending...';
    setTimeout(() => {
      submitBtn.innerText = 'Get Free Strategy 🚀';
      alert("Submitted successfully! We'll reach out within 24 hours 🚀");
    }, 1500);
  };

  return (
    <div className="relative px-6 md:px-12 py-16 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* 🔥 HERO - Enhanced with staggered animation */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10 mb-24"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30 mb-8"
        >
          <span className="text-sm font-medium text-cyan-300 tracking-wide uppercase">
            Scale with Creators
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-slate-100 via-white to-slate-200 text-transparent bg-clip-text mb-8"
        >
          Scale Your Brand with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-2xl">
            Influencer Campaigns
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          At <span className="font-black bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">Vmerg</span>, we help brands launch, scale and{" "}
          <span className="text-white font-black">dominate</span> with creator-first strategies backed by real data & execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="mt-12"
        >
          <Link
            href="#lead-form"
            className="group relative inline-flex items-center px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Start Your Campaign 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 transform -translate-x-4 group-hover:translate-x-4 transition-transform duration-500" />
          </Link>
        </motion.div>
      </motion.section>

      {/* 💡 WHY VMERG - Staggered grid animation */}
      <section className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text text-transparent mb-4 tracking-tight"
        >
          Why Brands Choose Vmerg
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto text-center mb-20 leading-relaxed"
        >
          Precision. Performance. Results.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Creator Match",
              desc: "AI-powered influencer discovery matching audience, niche & engagement metrics with surgical precision.",
              icon: "🎯"
            },
            {
              title: "End-to-End Execution", 
              desc: "From strategy to final delivery — we handle outreach, contracts, content and performance.",
              icon: "⚡"
            },
            {
              title: "Performance Tracking",
              desc: "Real-time dashboards with ROI metrics, attribution tracking and predictive analytics.",
              icon: "📈"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl hover:border-white/20 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl" />
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-2xl"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ PROCESS - Timeline style */}
      <section className="mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text text-transparent mb-4 tracking-tight">
            How We Make It Happen
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Vertical line connector */}
          <div className="absolute left-1/2 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-indigo-500/30 hidden md:block" />
          
          {["Strategy", "Creator Match", "Execution", "Growth"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-500"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
                <h3 className="font-black text-xl text-white mb-2 tracking-tight">{step}</h3>
                <p className="text-sm text-slate-400">Perfect execution at every step</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📊 CASE STUDY - Glassmorphism card */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text text-transparent mb-12 tracking-tight">
          Proven Results
        </h2>

        <motion.div 
          whileHover={{ scale: 1.02, y: -10 }}
          className="p-12 md:p-20 border border-white/15 bg-white/10 backdrop-blur-3xl rounded-4xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5" />
          <div className="relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-4"
            >
              Health & Wellness D2C
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-black text-white mb-8"
            >
              3M+ Reach • 120K+ Engagement
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text mb-8"
            >
              10 Days 🚀
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              From zero to viral. Complete campaign strategy, execution and scaling.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* 🔥 LEAD FORM - Enhanced glassmorphism */}
      <section id="lead-form" className="mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-3xl border border-white/15 rounded-4xl shadow-2xl p-10 md:p-16 max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-indigo-500/3 rounded-4xl" />
          <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-5xl font-black bg-gradient-to-r from-slate-100 via-white to-slate-200 text-transparent bg-clip-text mb-6 tracking-tight"
            >
              Ready to Scale? 🚀
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-12 leading-relaxed font-medium"
            >
              Tell us about your brand. Get your custom strategy in 24 hours.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-4">
                <input
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-5 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent transition-all duration-300 text-lg font-medium"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-5 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent transition-all duration-300 text-lg font-medium"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
                <input
                  name="brand"
                  placeholder="Brand Name *"
                  value={form.brand}
                  onChange={handleChange}
                  required
                  className="w-full p-5 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent transition-all duration-300 text-lg font-medium"
                />
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  className="w-full p-5 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent appearance-none bg-no-repeat bg-right pr-12"
                >
                  <option value="">Select Budget Range</option>
                  <option value="50k-1L">₹50K - ₹1L</option>
                  <option value="1L-5L">₹1L - ₹5L</option>
                  <option value="5L+">₹5L+</option>
                </select>
              </motion.div>

              <motion.button
                id="submit-btn"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300"
              >
                Get Your Free Strategy Now 🚀
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}