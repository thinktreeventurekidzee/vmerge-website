"use client";

export default function BrandsSection() {
  const brands = [
    "D2C Brands",
    "Fintech Startups",
    "EdTech Platforms",
    "Consumer Apps",
    "Gaming Brands",
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* 🌈 subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* 🔝 HEADER */}
        <p className="text-xs font-semibold tracking-[0.25em] text-cyan-600 uppercase">
          Trusted Influencer Marketing Partner
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Brands scaling with{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
            Vmerg
          </span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Vmerg provides end-to-end influencer marketing solutions — from
          strategy and creator selection to campaign execution and 24×7 support.
          We help brands launch, scale, and dominate across YouTube and Instagram.
        </p>

        {/* 🧩 BRAND TYPES */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group flex items-center justify-center"
            >
              <div className="w-[130px] h-[45px] rounded-xl border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:border-cyan-400 transition">
                <span className="text-xs font-medium text-slate-600 group-hover:text-cyan-600 transition">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 💎 TRUST LINE */}
        <p className="mt-10 text-sm text-slate-500 max-w-xl mx-auto">
          Working with macro, micro, nano and large creators across India —
          enabling brands to reach regional audiences with multi-lingual campaigns.
        </p>
      </div>
    </section>
  );
}