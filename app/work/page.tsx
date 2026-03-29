"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useTheme } from "../context/ThemeContext";

type CaseStudy = {
  id: string;
  brand: string;
  title: string;
  result: string;
  platform: string;
  industry: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-yt",
    brand: "Fintech App",
    title: "Driving high-intent app installs via YouTube creators",
    result: "3.2x ROAS · 1.1M+ views",
    platform: "YouTube",
    industry: "Finance",
  },
  {
    id: "d2c-ig",
    brand: "Skincare Brand",
    title: "Scaling D2C growth using Instagram reels",
    result: "+18% new customers",
    platform: "Instagram",
    industry: "Beauty",
  },
  {
    id: "saas-ugc",
    brand: "SaaS Tool",
    title: "UGC ads reducing CAC for B2B product",
    result: "27% lower CAC",
    platform: "UGC",
    industry: "SaaS",
  },
  {
    id: "meme-campaign",
    brand: "Gaming Platform",
    title: "Meme-led viral launch campaign",
    result: "4.5M impressions in 7 days",
    platform: "Meme",
    industry: "Gaming",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function WorkPage() {
  const { themeClasses } = useTheme();

  return (
    <>
      <Navbar />

      <main className={`relative min-h-screen overflow-hidden ${themeClasses.pageBg}`}>
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${themeClasses.sectionGlow}`}
          />
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" />
        </div>

        {/* HERO */}
        <section className="pt-32 pb-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl ${themeClasses.badge}`}
              >
                Case Studies
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`mt-6 text-4xl md:text-6xl font-black leading-[1.05] tracking-tight ${themeClasses.heroText}`}
              >
                Campaigns that{" "}
                <span className={themeClasses.gradientText}>
                  drive real growth
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`mt-5 text-base md:text-lg leading-8 max-w-2xl ${themeClasses.mutedText}`}
              >
                See how Vmerg helps brands across fintech, D2C, SaaS and gaming
                scale using influencer marketing and creator-led campaigns with
                measurable business outcomes.
              </motion.p>
            </div>

            {/* FILTERS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3 text-sm"
            >
              {["All", "YouTube", "Instagram", "UGC", "Meme"].map((item, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                    i === 0
                      ? `${themeClasses.badge}`
                      : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs, index) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group p-7 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between ${themeClasses.card}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className={`uppercase tracking-[0.18em] font-semibold ${themeClasses.gradientText}`}>
                      {cs.platform}
                    </span>
                    <span className={themeClasses.mutedText}>{cs.industry}</span>
                  </div>

                  <h3 className={`mt-4 text-xl md:text-2xl font-bold tracking-tight ${themeClasses.heading}`}>
                    {cs.brand}
                  </h3>

                  <p className={`mt-3 text-sm md:text-base leading-7 ${themeClasses.mutedText}`}>
                    {cs.title}
                  </p>

                  <div className="mt-6">
                    <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${themeClasses.badge}`}>
                      {cs.result}
                    </span>
                  </div>
                </div>

                <button className={`mt-8 w-fit text-sm font-medium transition ${themeClasses.gradientText}`}>
                  View full case study →
                </button>
              </motion.article>
            ))}
          </div>

          {/* PROCESS STRIP */}
          <motion.div
            {...fadeUp}
            className={`mt-20 rounded-[2rem] px-6 py-10 md:px-10 md:py-12 shadow-2xl ${themeClasses.card}`}
          >
            <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${themeClasses.gradientText}`}>
              How we work
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className={`font-semibold ${themeClasses.heading}`}>
                  01 · Strategy
                </h4>
                <p className={`mt-2 leading-7 ${themeClasses.mutedText}`}>
                  Understanding your goals, audience and designing the right
                  creator mix for stronger campaign-market fit.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className={`font-semibold ${themeClasses.heading}`}>
                  02 · Execution
                </h4>
                <p className={`mt-2 leading-7 ${themeClasses.mutedText}`}>
                  Managing creators, content, coordination, approvals and launch
                  timelines with smoother campaign operations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className={`font-semibold ${themeClasses.heading}`}>
                  03 · Scale
                </h4>
                <p className={`mt-2 leading-7 ${themeClasses.mutedText}`}>
                  Tracking performance, learning from results and scaling the
                  formats that deliver stronger growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="mt-20 text-center"
          >
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${themeClasses.heroText}`}>
              Want your campaign to be our next case study?
            </h2>

            <p className={`mt-4 text-sm md:text-base max-w-2xl mx-auto leading-7 ${themeClasses.mutedText}`}>
              Share your goals and we’ll design a custom influencer strategy for
              your brand with the right creators, platforms and content approach.
            </p>

            <Link
              href="/#lead-form"
              className={`inline-flex items-center justify-center mt-8 px-8 py-4 rounded-full text-sm md:text-base shadow-xl ${themeClasses.button}`}
            >
              Get Strategy Plan 🚀
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}