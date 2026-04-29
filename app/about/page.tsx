"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true, amount: 0.15 },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#f5f9ff] to-white text-slate-900">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-[12%] right-[-8%] h-72 w-72 rounded-full bg-sky-100/25 blur-3xl" />
        <div className="absolute bottom-[10%] left-[12%] h-64 w-64 rounded-full bg-cyan-100/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.82),rgba(239,246,255,0.68),rgba(255,255,255,1))]" />
      </div>

      {/* HERO */}
      <section className="relative px-4 pt-28 pb-18 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-blue-100/70 bg-white/80 px-6 py-14 text-center shadow-[0_18px_50px_rgba(30,64,175,0.07)] backdrop-blur-md sm:px-10 md:px-16 md:py-20"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(239,246,255,0.76),rgba(255,255,255,0.94))]" />

            <div className="relative z-10">
              <p className="mb-5 inline-flex rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                Creator-Led Growth
              </p>

              <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-6xl md:text-7xl">
                About <span className="text-blue-700">Vmerg</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                We Help Brands Grow Through Powerful Creator-Led Campaigns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <motion.section
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-6xl px-4 pb-20"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <motion.div
            variants={fadeUp}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Founded in 2021, Vmerg is an Influencer Marketing and Brand
                Partnership Company Dedicated To Helping Brands Grow Through
                Impactful Digital Collaborations.
              </p>

              <p>
                At Vmerg, We Believe Influencer Marketing is More Than Just
                Promotions—it is about creating genuine relationships between
                brands and their audiences.
              </p>

              <p>
                Vmerg Was Founded By{" "}
                <a
                  href="https://www.linkedin.com/in/vinay-kumar-mishra-vmerg?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
                >
                  Vinay Kumar Mishra
                </a>
                .
              </p>

              <p>
                With a Strong Focus On Innovation, Collaboration, And Growth,
                Vmerg continues to Build Meaningful Partnerships.
              </p>
            </div>
          </motion.div>

          {/* Right visual box */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[1.75rem] border border-blue-200/30 bg-[linear-gradient(135deg,#081225_0%,#0f1f46_35%,#17357a_68%,#2563eb_100%)] p-8 shadow-[0_18px_45px_rgba(37,99,235,0.18)] sm:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.04))]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-blue-100/90">
                  Silent Creativity
                </p>
                <h3 className="mt-5 max-w-sm text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Purposeful ideas.
                  <span className="block bg-gradient-to-r from-blue-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    Meaningful growth.
                  </span>
                </h3>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-blue-100/55">
                    Insight
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Deep market understanding
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-blue-100/55">
                    Strategy
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Thoughtful Campaign Planning
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-blue-100/55">
                    Trust
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Transparent Brand Relationships
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-blue-100/55">
                    Results
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Performance That Matters
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MISSION + VISION */}
      <motion.section
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-6xl px-4 pb-24"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            The Direction We Follow
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl md:text-5xl">
            Driven By Purpose, Built For Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-[1.75rem] border border-blue-100/80 bg-[linear-gradient(180deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] p-8 shadow-[0_10px_30px_rgba(37,99,235,0.05)] sm:p-10"
          >
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                Our Mission
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                Creating Campaigns That Truly Perform
              </h3>
            </div>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Our mission is to help brands grow by connecting them with the
              right influencers and building campaigns that deliver measurable,
              performance-driven results.
              <br />
              <br />
              We focus on creating authentic partnerships between brands and
              creators, executing high-performing ROI-focused campaigns, and
              leveraging data along with creativity to maximize impact.
              <br />
              <br />
              Our goal is to provide transparent, reliable, and scalable
              marketing solutions that drive real business growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-[1.75rem] border border-blue-100/80 bg-[linear-gradient(180deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] p-8 shadow-[0_10px_30px_rgba(37,99,235,0.05)] sm:p-10"
          >
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                Our Vision
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                Redefining How Brands Connect With People
              </h3>
            </div>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              To become a leading influencer marketing agency that transforms
              how brands connect with their audiences through authentic,
              impactful, and data-driven creator collaborations.
              <br />
              <br />
              We envision a future where marketing is built on trust,
              creativity, and meaningful digital relationships that deliver
              long-term value and sustainable growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-blue-100/80 bg-white px-6 py-14 text-center shadow-[0_16px_45px_rgba(15,23,42,0.06)] sm:px-10 sm:py-18"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,246,255,0.75),rgba(255,255,255,0.98))]" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Is Your Brand Feeling Bland?
              </p>

              <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-6xl md:text-7xl">
                <span>LET’S</span>{" "}
                <span className="text-blue-600">TALK</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                We Craft High-Performing Campaigns That Actually Drive Results.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.22)] transition-all duration-300 hover:scale-[1.03] hover:bg-blue-700"
              >
                Start A Conversation
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}