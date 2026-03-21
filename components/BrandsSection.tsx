export default function BrandsSection() {
  const brands = [
    "BrandOne",
    "FinTechCo",
    "GlowD2C",
    "SaaSFlow",
    "PlayMore",
  ];

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      {/* soft gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-emerald-400 uppercase">
          Trusted by brands that care about creator‑led growth
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-50">
          Brands that bet on creators, bet on yourBrand.
        </h2>

        <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
          D2C, fintech and consumer apps use{" "}
          <span className="font-medium text-emerald-400">yourBrand</span> for
          always‑on influencer programs, launch bursts and UGC content engines.
        </p>

        {/* Logos row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="relative group flex items-center justify-center"
            >
              {/* shiny hover border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative w-[120px] h-[40px] rounded-xl border border-slate-800 bg-slate-900/70 flex items-center justify-center overflow-hidden">
                {/* sheen effect */}
                <div className="pointer-events-none absolute -left-20 top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-0 group-hover:translate-x-[160px] transition-transform duration-700 ease-out" />
                <span className="text-xs font-medium tracking-wide text-slate-300 group-hover:text-slate-50 transition-colors">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Join 120+ growth‑focused brands that trust our influencer hunting and
          campaign ops team.
        </p>
      </div>
    </section>
  );
}
