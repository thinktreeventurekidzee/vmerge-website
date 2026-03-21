// app/contact/page.tsx
"use client";

import LeadForm from "../../components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-10 text-center md:text-left">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-emerald-400">
          Contact yourBrand
        </p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Let’s plan your next{" "}
              <span className="text-emerald-400">creator-led campaign.</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl">
              Share a few details about your brand or creator profile and the team
              will get back within 24 hours with ideas, pricing and next steps.
            </p>

            {/* Intent pills */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="px-4 py-2 rounded-full border border-emerald-400/60 bg-emerald-400/10">
                I&apos;m a brand → looking to run campaigns
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-700">
                I&apos;m a creator → looking for collaborations
              </span>
            </div>

            {/* Direct contact */}
            <div className="mt-8 space-y-2 text-sm md:text-base text-slate-300">
              <p className="font-medium text-slate-100">Prefer talking directly?</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@yourbrand.com"
                  className="text-emerald-400 hover:underline"
                >
                  hello@yourbrand.com
                </a>
              </p>
              <p>
                WhatsApp / Call:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-emerald-400 hover:underline"
                >
                  +91‑12345‑67890
                </a>
              </p>
              <p className="text-slate-500 text-xs md:text-sm">
                Office: Gurugram, India · Mon–Sat · 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>

          {/* Quick info card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              What to include
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Brand / channel name and website link.</li>
              <li>• Monthly marketing budget or target per campaign.</li>
              <li>• Platforms you want to focus on (YT, IG, UGC, memes).</li>
              <li>• Timeline and key goals (installs, sign‑ups, sales, UGC bank).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Tell us about your campaign.
          </h2>
          {/* Reuse your existing LeadForm so data handling stays consistent */}
          <LeadForm />
          <p className="mt-3 text-xs md:text-sm text-slate-500 text-center md:text-left">
            By submitting this form you agree to be contacted by our campaigns team
            over email or WhatsApp regarding your query.
          </p>
        </div>
      </section>
    </main>
  );
}
