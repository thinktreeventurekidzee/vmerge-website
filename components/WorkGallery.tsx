const PROJECTS = [
  {
    title: "Fintech app launch sprint",
    tag: "YouTube · Finance",
    result: "2.9x ROAS · 1.4M+ views",
  },
  {
    title: "D2C skincare reels program",
    tag: "Instagram · D2C",
    result: "+18% new customers",
  },
  {
    title: "UGC bank for SaaS tool",
    tag: "UGC · SaaS",
    result: "60+ ad‑ready assets",
  },
  {
    title: "Meme burst for gaming brand",
    tag: "Memes · Gaming",
    result: "4.5M impressions in 7 days",
  },
];

export default function WorkGallery() {
  return (
    <section className="py-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-emerald-400">
            Our work
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Creator campaigns that look good and perform even better.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            A snapshot of launches, always‑on programs and UGC engines across
            fintech, D2C, SaaS and gaming brands.
          </p>
        </div>

        {/* gallery grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
            >
              {/* animated border glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-1px] bg-gradient-to-r from-emerald-500/40 via-sky-500/40 to-purple-500/30 blur-[2px]" />
              </div>

              {/* image placeholder with zoom */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.9)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.8)_0,_transparent_55%)]" />
                <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500" />
                <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.22em] text-slate-200">
                  Case study
                </p>
              </div>

              {/* content */}
              <div className="relative px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-400">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-emerald-200 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-300">{p.result}</p>
                <p className="mt-2 text-xs text-slate-400">
                  See the strategy, creator mix and content that made this
                  campaign work.
                </p>

                <button className="mt-4 inline-flex items-center text-xs font-medium text-emerald-300 group-hover:text-emerald-200">
                  View full case study
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* bottom link */}
        <div className="mt-10 text-center">
          <a
            href="/work"
            className="text-xs md:text-sm text-slate-300 hover:text-emerald-300 transition"
          >
            Explore all campaigns →
          </a>
        </div>
      </div>
    </section>
  );
}
