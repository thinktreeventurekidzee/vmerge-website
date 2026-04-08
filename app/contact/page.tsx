"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `🎮 VMERG Contact Inquiry
📝 Name: ${form.name}
📧 Email: ${form.email}
🏢 Brand: ${form.brand}
💬 Message: ${form.message}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  // 🔥 GAMING-INSPIRED VMERG CONTACT INFO
  const contactItems = [
    {
      icon: "📧",
      title: "Email Us",
      value: "vmergmedia@gmail.com",
      desc: "Brand partnerships, campaign inquiries, creator collaborations",
    },
    {
      icon: "📱",
      title: "Phone / WhatsApp", 
      value: "+91 86607 83740",
      desc: "Direct line for campaign coordination & creator onboarding",
    },
    {
      icon: "📍",
      title: "HQ Location",
      value: "Gurugram, India",
      desc: "Remote execution for brands across India & global markets",
    },
    {
      icon: "🆔",
      title: "CIN",
      value: "U74999KA2021PTC153669",
      desc: "VMERG Media Private Limited - Legally registered entity",
    },
  ];

  return (
    <>
      <Navbar activeSection="/contact" />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-emerald-900/30">
        
        {/* 🔥 GAMING-STYLE BACKGROUND LAYERS */}
        <div className="absolute inset-0">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-emerald-900/40" />
          
          {/* Gaming glow effects */}
          <motion.div 
            className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-blue-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-grid-slate-800/30 [background-size:60px_60px]" />
          </div>
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-28 md:pb-32 md:pt-36 lg:px-8">
          
          {/* 🔥 GAMING HERO - POWERFUL & IMMERSIVE */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 max-w-4xl text-center text-white"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-bold uppercase tracking-wider text-white/90 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-ping" />
              Ready to Level Up Your Brand?
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Launch Your 
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Influencer Campaign
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto mt-12 max-w-2xl text-xl text-slate-300 md:text-2xl"
            >
              Connect with 10+ core video categories. Creators ready to drive your brand's growth.
            </motion.p>
          </motion.div>

          {/* 🔥 PROFESSIONAL GAMING GRID LAYOUT */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
            
            {/* LEFT: CONTACT INFO CARDS */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              {contactItems.map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-2xl border border-white/20 hover:bg-white/20 transition-all duration-500"
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-2xl font-black text-white shadow-lg">
                      {contact.icon}
                    </div>
                    
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="mb-2 text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="mb-1 text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent break-words">
                        {contact.value}
                      </p>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {contact.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT: CAMPAIGN FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative rounded-3xl bg-white/5 p-8 shadow-2xl backdrop-blur-2xl border border-white/20 md:p-12 lg:p-16"
            >
              {/* Form header */}
              <div className="mb-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="mx-auto mb-4 inline-flex h-4 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                />
                <h3 className="text-4xl font-black text-white md:text-5xl">
                  Start Your Campaign
                </h3>
                <p className="mt-4 text-xl text-slate-300 md:text-2xl">
                  Get instant WhatsApp response with campaign brief
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-white/20 px-6 py-5 text-xl text-white placeholder-slate-400 backdrop-blur-sm border border-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-white/20 px-6 py-5 text-xl text-white placeholder-slate-400 backdrop-blur-sm border border-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    name="brand"
                    placeholder="Brand / Company *"
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-white/20 px-6 py-5 text-xl text-white placeholder-slate-400 backdrop-blur-sm border border-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Campaign goals, budget, timeline, target audience..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-2xl bg-white/20 px-6 py-5 text-xl text-white placeholder-slate-400 backdrop-blur-sm border border-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-600 px-10 py-7 text-xl font-black text-white shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-3">
                    🚀 Launch Campaign Discussion
                  </span>
                </motion.button>
              </form>

              {/* VMerg footer branding */}
              <div className="mt-12 pt-8 border-t border-white/20 text-center">
                <p className="text-sm text-slate-400">
                  © 2021 VMERG Media Private Limited | 10+ Core Video Categories
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}