export default function ProcessSection(): JSX.Element {
  return (
    <section
      id="process"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* 🌈 subtle aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}
        <p className="text-xs tracking-[0.25em] uppercase text-cyan-600 font-semibold">
          Process
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          How we launch and scale{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
            influencer campaigns
          </span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A structured, end-to-end workflow designed to help brands move fast,
          stay in control, and achieve measurable growth.
        </p>

        {/* STEPS */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* STEP 1 */}
          <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 text-left shadow-sm hover:shadow-lg hover:border-cyan-400 transition">

            <div className="mb-4 flex items-center gap-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold">
                01
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Strategy & Planning
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We understand your brand, goals, and audience — then design the
              right influencer strategy across YouTube and Instagram.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 text-left shadow-sm hover:shadow-lg hover:border-indigo-400 transition">

            <div className="mb-4 flex items-center gap-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                02
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Creator Selection & Launch
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We shortlist the right creators, manage outreach, handle content,
              and launch campaigns smoothly with full coordination.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 text-left shadow-sm hover:shadow-lg hover:border-purple-400 transition">

            <div className="mb-4 flex items-center gap-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
                03
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Optimization & Scaling
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We track performance, analyze results, and scale campaigns using
              top-performing creators and strategies.
            </p>
          </div>

        </div>

        {/* 💬 PROCESS LINE */}
        <div className="mt-14">
          <p className="text-sm text-slate-500">
            Talk to expert → Strategy → Influencers → Launch → Scale
          </p>
        </div>
      </div>
    </section>
  );
}