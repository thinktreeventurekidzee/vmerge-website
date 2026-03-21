import React from "react";

const services = [
  {
    id: "01 · Discovery",
    title: "Influencer discovery",
    desc: "Find the right creators across YouTube, Instagram and niche categories using our curated, manually-vetted database.",
    note: "Ideal when you know the audience, but need the perfect faces.",
  },
  {
    id: "02 · Strategy",
    title: "Campaign strategy & planning",
    desc: "Data-driven campaign structures, hooks and messaging tailored to your offer.",
    note: "Includes creator mix, content angles and projections.",
  },
  {
    id: "03 · Execution",
    title: "Campaign execution",
    desc: "End-to-end management from outreach to go-live on creator channels.",
    note: "You get one point of contact.",
  },
  {
    id: "04 · UGC Studio",
    title: "UGC content creation",
    desc: "High-quality creator-shot content for ads, landing pages and organic.",
    note: "Includes raw + edited files.",
  },
  {
    id: "05 · Scale",
    title: "Multi-lingual campaigns",
    desc: "Reach diverse audiences across India with regional creators.",
    note: "Perfect for Bharat-first brands.",
  },
  {
    id: "06 · Reporting",
    title: "Performance tracking",
    desc: "Track views, clicks, installs and revenue with real dashboards.",
    note: "We optimize based on insights.",
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-emerald-400">
          Our Services
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
          Scalable{" "}
          <span className="text-emerald-400">
            influencer marketing solutions
          </span>{" "}
          for modern brands
        </h1>

        <p className="mt-4 text-slate-300 text-lg">
          From creator discovery to performance reporting, we run end-to-end campaigns.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/60 
            hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] 
            transition duration-300"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              {service.id}
            </p>

            <h3 className="mt-3 text-lg font-semibold group-hover:text-emerald-400 transition">
              {service.title}
            </h3>

            <p className="text-sm text-slate-300 mt-2">
              {service.desc}
            </p>

            <p className="mt-3 text-xs text-slate-500">
              {service.note}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <button className="bg-emerald-400 text-slate-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-emerald-300 hover:scale-105 transition">
          Start your campaign
        </button>

        <p className="mt-3 text-xs md:text-sm text-slate-500">
          Share your goals and budget — we’ll respond within 24 hours.
        </p>
      </div>
    </section>
  );
}