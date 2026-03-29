"use client";

import { motion } from "framer-motion";
import LeadForm from "../../components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pb-24 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg uppercase tracking-[0.3em] text-emerald-400 font-black mb-6"
          >
            Get In Touch
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid gap-12 lg:grid-cols-[1.4fr,1fr] items-start"
          >
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] bg-gradient-to-r from-slate-100 via-white to-slate-200 text-transparent bg-clip-text mb-8 tracking-tight"
              >
                Let's plan your next{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text drop-shadow-2xl">
                  creator-led campaign
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium mb-10"
              >
                Share details about your brand or creator profile. Our team responds within{" "}
                <span className="text-white font-black">24 hours</span> with strategy, pricing and execution plan.
              </motion.p>

              {/* Enhanced intent pills */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-2xl border-2 border-emerald-400/40 bg-emerald-400/10 backdrop-blur-sm text-emerald-300 font-semibold text-lg shadow-lg hover:border-emerald-400/70 hover:bg-emerald-400/20 transition-all duration-300"
                >
                  Brand → Running Campaigns
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-2xl border-2 border-slate-700/60 bg-slate-800/50 backdrop-blur-sm text-slate-300 font-semibold text-lg shadow-lg hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300"
                >
                  Creator → Collaborations
                </motion.span>
              </motion.div>

              {/* Enhanced contact info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-4 text-lg md:text-xl"
              >
                <p className="font-black text-2xl text-slate-100 tracking-tight">Talk directly?</p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-slate-400 font-medium mb-2">Email</p>
                    <a href="mailto:hello@vmerg.com" className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text hover:underline transition-all duration-300">
                      hello@vmerg.com
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium mb-2">WhatsApp / Call</p>
                    <a href="tel:+911234567890" className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text hover:underline transition-all duration-300">
                      +91-12345-67890
                    </a>
                  </div>
                </div>
                <p className="text-slate-500 text-lg mt-4">
                  📍 Gurugram, India · Mon–Sat · 10AM–7PM IST
                </p>
              </motion.div>
            </div>

            {/* Enhanced info card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-4xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-3xl p-8 md:p-10 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-black mb-8"
              >
                What to include
              </motion.p>
              <ul className="space-y-4 text-lg text-slate-200 font-medium">
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black text-xl mt-0.5">•</span>
                  Brand/channel name + website
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black text-xl mt-0.5">•</span>
                  Monthly budget or campaign target
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black text-xl mt-0.5">•</span>
                  Platforms (YouTube, Instagram, UGC, memes)
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black text-xl mt-0.5">•</span>
                  Timeline + goals (sales, installs, UGC)
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Form section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl"
        >
          <div className="max-w-4xl mx-auto px-6 py-20 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-slate-100 to-slate-200 text-transparent bg-clip-text tracking-tight"
            >
              Tell us about your campaign
            </motion.h2>
            
            <LeadForm />
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg md:text-xl text-slate-400 text-center max-w-2xl mx-auto leading-relaxed font-medium"
            >
              By submitting, you agree to be contacted by our campaigns team via email or WhatsApp. 
              We respect your privacy.
            </motion.p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}