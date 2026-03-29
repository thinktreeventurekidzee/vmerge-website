"use client";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* 🌈 subtle aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          End-to-End{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
            Influencer Marketing
          </span>{" "}
          for Modern Brands
        </h2>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Vmerg is a full-service influencer marketing agency helping brands
          across India scale through YouTube and Instagram creators. From
          strategy and influencer selection to campaign execution and 24×7
          support — we manage everything.
        </p>

        {/* 🔥 STATS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-2xl font-bold text-cyan-600">120+</p>
            <p className="text-sm text-slate-500">Brands Served</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-indigo-600">5000+</p>
            <p className="text-sm text-slate-500">Creators Network</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-purple-600">24×7</p>
            <p className="text-sm text-slate-500">Campaign Support</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-cyan-600">Pan India</p>
            <p className="text-sm text-slate-500">Regional Reach</p>
          </div>
        </div>

        {/* 🧩 FEATURES */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">

          {[
            {
              title: "Creator Discovery & Selection",
              desc: "Access a large dataset of macro, micro, nano and regional influencers across India.",
            },
            {
              title: "Multi-Lingual Campaigns",
              desc: "Target audiences across states with regional language creators and localized strategies.",
            },
            {
              title: "End-to-End Execution",
              desc: "From planning to launch — we handle complete campaign execution with performance tracking.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 transition"
            >
              <h4 className="font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 💬 PROCESS */}
        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-sm text-slate-500">
            Talk to expert → Design strategy → Choose influencers → Launch campaign
          </p>
        </div>
      </div>
    </section>
  );
}