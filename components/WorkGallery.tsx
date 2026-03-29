const PROJECTS = [
  {
    title: "Fintech App Launch Campaign",
    tag: "YouTube · Finance",
    result: "2.9x ROAS · 1.4M+ views",
    desc: "Executed a full-scale influencer launch with finance creators targeting high-intent users.",
  },
  {
    title: "D2C Skincare Growth Program",
    tag: "Instagram · D2C",
    result: "+18% new customers",
    desc: "Scaled customer acquisition using reels and micro-influencer collaborations.",
  },
  {
    title: "UGC Content Engine for SaaS",
    tag: "UGC · SaaS",
    result: "60+ ad-ready assets",
    desc: "Built a UGC pipeline to generate high-converting ad creatives.",
  },
  {
    title: "Gaming Brand Meme Campaign",
    tag: "Memes · Gaming",
    result: "4.5M impressions in 7 days",
    desc: "Leveraged meme pages and viral content for rapid brand awareness.",
  },
];

export default function WorkGallery() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* 🌈 subtle aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔝 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-cyan-600 font-semibold">
            Case Studies
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Campaigns that{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              drive real results
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            A snapshot of how Vmerg helps brands scale using influencer-led
            growth strategies across multiple industries.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-cyan-400 transition"
            >
              {/* TAG */}
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-600 font-semibold">
                {p.tag}
              </p>

              {/* TITLE */}
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition">
                {p.title}
              </h3>

              {/* RESULT */}
              <p className="mt-2 text-sm font-medium text-indigo-600">
                {p.result}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>

              {/* CTA */}
              <button className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600 group-hover:text-indigo-600 transition">
                View full case study
                <span className="ml-1 group-hover:translate-x-1 transition">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* 🔗 FOOTER LINK */}
        <div className="mt-12 text-center">
          <a
            href="/work"
            className="text-sm text-slate-600 hover:text-cyan-600 transition"
          >
            Explore all campaigns →
          </a>
        </div>
      </div>
    </section>
  );
}