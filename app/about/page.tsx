// app/about/page.tsx
import React from "react";
import AboutSection from "../../components/AboutSection";
import WorkGallery from "../../components/WorkGallery";
import ProcessSection from "../../components/ProcessSection";
import InfluencerNetwork from "../../components/InfluencerNetwork";
import LeadForm from "../../components/LeadForm";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top hero */}
      <section className="max-w-6xl mx-auto px-4 pt-28 pb-16 grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            About yourBrand
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Creator-first influencer marketing
            <span className="text-emerald-400"> built for brands that scale.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl">
            yourBrand connects high-intent creators with performance-focused brands,
            delivering measurable growth across YouTube, Instagram and UGC campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-emerald-400 text-slate-950 text-sm font-medium hover:bg-emerald-300 transition">
              Book strategy call
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-700 text-sm font-medium hover:border-emerald-400 hover:text-emerald-300 transition">
              Join as a creator
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-sm md:text-base">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">120+</p>
              <p className="text-slate-400">brands onboarded</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold">3.5x</p>
              <p className="text-slate-400">avg. campaign ROAS</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold">5k+</p>
              <p className="text-slate-400">vetted creators</p>
            </div>
          </div>
        </div>

        {/* Side card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-7 shadow-[0_0_60px_rgba(16,185,129,0.18)]">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
            Why brands choose us
          </p>
          <ul className="mt-5 space-y-4 text-sm text-slate-200">
            <li>• Data-backed creator discovery with category and audience fit.</li>
            <li>• End‑to‑end campaign strategy, scripting and reporting.</li>
            <li>• UGC, meme marketing and always‑on creator programs.</li>
            <li>• Transparent pricing, clear deliverables and real-time tracking.</li>
          </ul>
        </div>
      </section>

      {/* Story / philosophy */}
      <section className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Built by operators who understand both brands and creators.
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base">
              Started in 2021, yourBrand was created to fix the messy, spreadsheet‑only
              way most influencer campaigns were run. Today we operate as an embedded
              growth partner for D2C, fintech and consumer brands across India.
            </p>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Every campaign is planned around one core metric—profitable customer
              acquisition—while keeping creator relationships long‑term and fair.
            </p>
          </div>
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <div className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs">
                01
              </span>
              <div>
                <h3 className="font-medium">Category‑specialist pods</h3>
                <p className="text-slate-400">
                  Dedicated pods for Finance, Tech, Lifestyle and Gaming so your
                  brand speaks the language of the audience.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs">
                02
              </span>
              <div>
                <h3 className="font-medium">Transparent reporting</h3>
                <p className="text-slate-400">
                  Live dashboards tracking views, clicks, sign‑ups and revenue—not
                  just vanity metrics.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs">
                03
              </span>
              <div>
                <h3 className="font-medium">Creator‑friendly workflows</h3>
                <p className="text-slate-400">
                  Clear briefs, predictable payouts and feedback loops to keep
                  creators motivated for repeat collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You can reuse existing sections to keep it consistent */}
      <section className="border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-6xl mx-auto px-4 py-14 space-y-12">
          {/* If you already have these components wired, just render them */}
          <AboutSection/>
          <ProcessSection />
          <InfluencerNetwork />
          <WorkGallery />
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
