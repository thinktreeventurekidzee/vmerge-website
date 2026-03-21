export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-xs tracking-[0.25em] uppercase text-emerald-400">
          Process
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
          How we run creator‑led campaigns end‑to‑end.
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          A simple three‑step framework designed for growth teams that need
          transparency, speed and performance.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs font-semibold text-emerald-300">
              01
            </div>
            <h3 className="text-lg font-semibold">Strategy & mapping</h3>
            <p className="mt-3 text-sm text-slate-300">
              Deep‑dive into your offer, audience and goals, then design the
              right platform mix, creator profiles and campaign structure.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs font-semibold text-emerald-300">
              02
            </div>
            <h3 className="text-lg font-semibold">Creator outreach & launch</h3>
            <p className="mt-3 text-sm text-slate-300">
              Shortlisting, outreach, negotiations, briefs, content reviews and
              go‑live—all handled by our campaigns team with clear timelines.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs font-semibold text-emerald-300">
              03
            </div>
            <h3 className="text-lg font-semibold">Reporting & scale</h3>
            <p className="mt-3 text-sm text-slate-300">
              Track views, clicks, sign‑ups and revenue in clean dashboards,
              then double down on winning creators, angles and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
