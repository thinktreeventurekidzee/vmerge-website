"use client";

import {
  MessageCircle,
  Users,
  Globe,
  ArrowUpRight,
  BadgeCheck,
  LineChart,
  Star,
  Zap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

const staggerWrap = {
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, amount: 0.12 },
};

const features = [
  {
    icon: Users,
    title: "Strong creator network",
    desc: "We connect brands with niche-fit creators across beauty, finance, gaming, tech, lifestyle and regional content segments.",
  },
  {
    icon: Globe,
    title: "Campaigns built for market fit",
    desc: "Every collaboration is planned around brand goals, audience match, platform relevance and practical execution.",
  },
  {
    icon: MessageCircle,
    title: "Fast and clear coordination",
    desc: "From first outreach to approvals and delivery, communication stays simple, timely and action-focused.",
  },
  {
    icon: LineChart,
    title: "Results-led execution",
    desc: "We focus on reach, engagement, response quality and campaign momentum that supports real business growth.",
  },
];

const metrics = [
  { value: "50+", label: "Brand connections" },
  { value: "10+", label: "Content categories" },
  { value: "2x", label: "Faster campaign flow" },
];

const pillars = [
  {
    title: "Strategy-first planning",
    desc: "Clear campaign direction before outreach, so every collaboration starts with a better brief and stronger purpose.",
  },
  {
    title: "Creator-led execution",
    desc: "A structured workflow that keeps creator communication, timelines and approvals clean and manageable.",
  },
  {
    title: "Measured business impact",
    desc: "Campaign decisions shaped around visibility, response quality and outcomes that support brand growth.",
  },
];

export default function AboutSection() {
  return (
    <>
      <style jsx>{`
        @keyframes dot-burst {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.4) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
        .dot-burst-1 { animation: dot-burst 4s ease-in-out infinite 0s; }
        .dot-burst-2 { animation: dot-burst 4s ease-in-out infinite 1s; }
        .dot-burst-3 { animation: dot-burst 4s ease-in-out infinite 2s; }
        .dot-burst-4 { animation: dot-burst 4s ease-in-out infinite 3s; }
      `}</style>

      <section
        aria-labelledby="about-section-title"
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-16 sm:py-20 md:py-24 lg:py-28"
      >
        {/* Color dot bursting background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(34,197,94,0.06),transparent_50%)]" />
          {/* Animated bursting dots */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full dot-burst-1 blur-sm"
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-60 right-20 w-3 h-3 bg-purple-400 rounded-full dot-burst-2 blur-sm"
            animate={{ scale: [0, 1.3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-40 left-1/3 w-5 h-5 bg-emerald-400 rounded-full dot-burst-3 blur-sm"
            animate={{ scale: [0, 1.8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-4 h-4 bg-amber-400 rounded-full dot-burst-4 blur-sm"
            animate={{ scale: [0, 1.6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 md:p-12 lg:p-16">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-200/80 bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 text-sm font-semibold text-cyan-800 shadow-lg backdrop-blur-md">
                <BadgeCheck size={16} className="shrink-0" />
                Trusted by growth-focused brands
              </div>

              <h2
                id="about-section-title"
                className="mt-8 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.02em] text-slate-950 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 bg-clip-text sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              >
                Why brands choose Vmerg for creator-led growth
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
                We help brands run influencer campaigns with better creator fit,
                smoother execution and clearer business intent. Our approach is
                designed to reduce confusion, improve coordination and deliver
                campaigns that feel professional from planning to results.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              {/* Left - Animated metrics + CTA */}
              <motion.div
                {...fadeUp}
                className="group relative rounded-[28px] border border-slate-200/70 bg-gradient-to-br from-white/90 via-slate-50/70 to-cyan-50/50 p-8 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 lg:p-10"
              >
                {/* Floating icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 h-24 w-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 text-white"
                >
                  <Users size={32} />
                </motion.div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 ring-2 ring-cyan-200/70 shadow-lg">
                  <Users size={24} />
                </div>

                <h3 className="mt-8 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                  Built for brands that want dependable execution
                </h3>

                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-700">
                  We combine creator discovery, campaign coordination and
                  communication structure so your collaborations move faster and
                  feel easier to manage across every stage.
                </p>

                {/* Animated metrics */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {metrics.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * i }}
                      className="group rounded-2xl border border-slate-200/50 bg-white/80 p-5 text-center shadow-md backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                    >
                      <motion.p 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
                      >
                        {item.value}
                      </motion.p>
                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="group relative inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:from-cyan-600 hover:to-blue-600 hover:shadow-cyan-500/40 hover:shadow-2xl active:scale-[0.98]"
                  >
                    <span>Start a conversation</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  <p className="text-sm leading-6 text-slate-600 sm:text-base">
                    Clear communication, faster coordination and brand-focused
                    campaign planning.
                  </p>
                </div>
              </motion.div>

              {/* Right - Staggered animated features */}
              <motion.div
                variants={staggerWrap}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.12 }}
                className="space-y-5 lg:space-y-6"
              >
                {features.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group relative rounded-[24px] border border-slate-200/60 bg-gradient-to-r from-white/95 to-slate-50/80 p-6 shadow-lg backdrop-blur-xl hover:border-cyan-200/60 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:shadow-cyan-500/20 transition-all duration-500 sm:p-8"
                  >
                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute -top-3 -right-4 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Sparkles size={24} className="text-cyan-400 drop-shadow-lg" />
                    </motion.div>

                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 ring-2 ring-cyan-200/70 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-400"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={22} />
                      </motion.div>

                      <div className="min-w-0 flex-1 pt-1">
                        <h4 className="text-lg font-black leading-6 text-slate-950 group-hover:text-cyan-700 sm:text-xl transition-colors duration-300">
                          {title}
                        </h4>
                        <p className="mt-2 text-base leading-7 text-slate-700 sm:text-lg group-hover:text-slate-800">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pillars - Animated burst section */}
            <motion.div
              variants={staggerWrap}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 lg:gap-8"
            >
              {pillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group relative rounded-[26px] border border-slate-200/50 bg-gradient-to-br from-slate-50/80 to-white p-8 shadow-lg backdrop-blur-xl hover:shadow-[0_25px_50px_rgba(15,23,42,0.12)] hover:shadow-cyan-400/10 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Burst effect on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-[26px] opacity-0 group-hover:opacity-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 blur-xl -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700 ring-2 ring-emerald-200/70 shadow-lg">
                      <Zap size={24} />
                    </div>
                    
                    <p className="text-xl font-black text-slate-950 group-hover:text-slate-900 mb-3">
                      {item.title}
                    </p>
                    <p className="text-lg leading-8 text-slate-700 group-hover:text-slate-800">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}