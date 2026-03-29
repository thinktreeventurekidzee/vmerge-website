"use client";

export default function TrustSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 HEADER */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
            Brands & Creators
          </span>
        </h2>

        <p className="mt-4 text-slate-600 text-lg">
          Delivering real, measurable growth through influencer marketing
        </p>

        {/* 📊 STATS (UPGRADED CARDS) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "500+", label: "Campaigns Executed" },
            { value: "10M+", label: "Reach Generated" },
            { value: "200+", label: "Creators Network" },
            { value: "50+", label: "Brand Partners" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p className="text-2xl md:text-3xl font-bold text-cyan-600">
                {item.value}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* 📊 CASE STUDY (UPGRADED) */}
        <div className="mt-16 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 shadow-lg max-w-3xl mx-auto">

          <p className="text-sm text-cyan-600 font-medium">
            Case Study
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mt-2">
            Beauty Brand Campaign
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Helped a D2C beauty brand achieve{" "}
            <span className="font-bold text-slate-900">
              3M+ reach in 7 days
            </span>{" "}
            through targeted influencer collaborations and performance-driven execution.
          </p>

        </div>

      </div>

    </section>
  );
}