"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

type BrandType = {
  name: string;
  img: string;
};

function BrandBadge({
  brand,
  large,
  active,
}: {
  brand: BrandType;
  large?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`
        group relative flex items-center justify-center
        ${large ? "h-[76px] w-[124px]" : "h-[64px] w-[104px]"}
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${active ? "scale-[1.04] opacity-100" : "scale-100 opacity-95"}
      `}
    >
      <img
        src={brand.img}
        alt={brand.name}
        className={`
          w-auto object-contain
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          drop-shadow-[0_10px_24px_rgba(2,6,23,0.30)]
          ${large ? "h-[78px]" : "h-[76px]"}
          ${
            active
              ? "[filter:brightness(1.1)_saturate(1.08)_drop-shadow(0_0_10px_rgba(255,255,255,0.16))_drop-shadow(0_0_24px_rgba(96,165,250,0.22))]"
              : ""
          }
          group-hover:scale-105
        `}
      />

      <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/75 px-3 py-1 text-[11px] font-medium text-white opacity-0 blur-sm transition-all duration-300 group-hover:-bottom-11 group-hover:opacity-100 group-hover:blur-0">
        {brand.name}
      </div>
    </div>
  );
}

function FloatingBubble({
  className = "",
  size = "small",
}: {
  className?: string;
  size?: "small" | "medium" | "large";
}) {
  const sizeMap = {
    small: "h-4 w-4 sm:h-5 sm:w-5",
    medium: "h-8 w-8 sm:h-10 sm:w-10",
    large: "h-14 w-14 sm:h-16 sm:w-16",
  };

  return (
    <div
      className={`absolute rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(255,255,255,0.08)] ${sizeMap[size]} ${className} animate-pulse`}
    >
      <div className="absolute inset-[18%] rounded-full bg-white/20 blur-[2px]" />
    </div>
  );
}

export default function BrandsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    website: "",
    message: "",
  });

  const [isCenterHovered, setIsCenterHovered] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open("https://wa.me/918660783740", "_blank");
  };

  const brands: BrandType[] = [
    { name: "Bear House", img: "/logo/bear-house.jpeg" },
    { name: "British Biologicals", img: "/logo/british-biologicals.jpeg" },
    { name: "Kotak", img: "/logo/kotak.jpeg" },
    { name: "Bybit", img: "/logo/bybit.jpeg" },
    { name: "CoinSwitch", img: "/logo/coinswitch.jpeg" },
    { name: "Fast&Up", img: "/logo/fastup.jpeg" },
    { name: "Masai", img: "/logo/masai.jpeg" },
    { name: "Oziva", img: "/logo/oziva.jpeg" },
    { name: "Porter", img: "/logo/porter.jpeg" },
    { name: "Snitch", img: "/logo/snitch.jpeg" },
    { name: "Uniqlo", img: "/logo/uniqlo.jpeg" },
    { name: "Unocoin", img: "/logo/unocoin.jpeg" },
    { name: "Density Exchange", img: "/logo/densityexchange.jpeg" },
    { name: "Devine Talk", img: "/logo/devinetalk.jpeg" },
    { name: "Kuku FM", img: "/logo/kukufm.jpeg" },
    { name: "Lemon", img: "/logo/lemon.jpeg" },
    { name: "Precise", img: "/logo/precise.jpeg" },
    { name: "Skydo", img: "/logo/skydo.jpeg" },
  ];

  const orbitBrandClass = (extra = "") =>
    `absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
     ${
       isCenterHovered
         ? "scale-[1.08] opacity-100 [filter:brightness(1.12)_saturate(1.12)_drop-shadow(0_0_16px_rgba(255,255,255,0.14))_drop-shadow(0_0_26px_rgba(96,165,250,0.20))]"
         : "scale-100 opacity-95"
     } ${extra}`;

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="py-20 sm:py-28 text-center text-white bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400">
          <h1 className="text-3xl sm:text-5xl font-bold">
            We scale brands through creators
          </h1>
          <p className="mt-4 text-white/80">
            Structured influencer campaigns designed for real growth.
          </p>
        </section>

        {/* WHY BRANDS */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50 to-white text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Why brands choose <span className="text-blue-600">Vmerg</span>
          </h2>

          <p className="mt-3 text-slate-600">
            Built for performance, scale, and clarity
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                icon: "🚀",
                title: "Access to high-performing creators",
                desc: "We connect you with creators that actually drive results.",
              },
              {
                icon: "⚙️",
                title: "Structured campaign execution",
                desc: "End-to-end systems for planning and delivery.",
              },
              {
                icon: "📈",
                title: "Performance-driven results",
                desc: "Focused on ROI and measurable growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white/80 border shadow-md hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="h-24 flex items-center justify-center bg-blue-50">
                  <div className="text-3xl">{item.icon}</div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS - ORBIT */}
        <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white text-center overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Brands we’ve worked with
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Trusted by fast-growing startups and industry leaders
          </p>

          <div className="mt-16 max-w-7xl mx-auto px-4">
            <div className="relative mx-auto h-[900px] w-full max-w-[1180px] overflow-hidden rounded-[2.4rem] border border-blue-200/40 bg-[radial-gradient(circle_at_center,#1d4ed8_0%,#1d4ed8_22%,#1e3a8a_54%,#0b1f4f_90%)] shadow-[0_35px_100px_rgba(30,64,175,0.4)]">
              {/* ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_18%_22%,rgba(147,197,253,0.13),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(191,219,254,0.12),transparent_26%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.18),transparent_30%)]" />

              {/* scattered bubbles */}
              <FloatingBubble size="large" className="left-[8%] top-[14%]" />
              <FloatingBubble size="small" className="left-[10%] top-[24%]" />
              <FloatingBubble size="medium" className="left-[9%] bottom-[20%]" />
              <FloatingBubble size="small" className="left-[26%] bottom-[10%]" />
              <FloatingBubble size="large" className="right-[9%] top-[13%]" />
              <FloatingBubble size="small" className="right-[18%] top-[30%]" />
              <FloatingBubble size="medium" className="right-[10%] bottom-[16%]" />
              <FloatingBubble size="small" className="right-[26%] bottom-[12%]" />
              <FloatingBubble size="medium" className="top-[8%] left-[48%]" />
              <FloatingBubble size="small" className="bottom-[8%] left-[52%]" />

              {/* spiral dotted path */}
              <div className="pointer-events-none absolute inset-0">
                <svg
                  viewBox="0 0 1180 900"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M592 450
                       C 640 430, 675 440, 702 475
                       C 730 512, 724 564, 676 598
                       C 614 642, 528 644, 451 601
                       C 372 557, 331 470, 350 384
                       C 373 278, 479 199, 611 200
                       C 763 202, 874 307, 898 440
                       C 930 616, 797 754, 589 768
                       C 370 783, 183 636, 149 442
                       C 109 214, 287 68, 546 59
                       C 835 49, 1059 236, 1069 473"
                    fill="none"
                    strokeWidth="2.2"
                    strokeDasharray="2 12"
                    strokeLinecap="round"
                    className={`transition-all duration-1000 ${
                      isCenterHovered
                        ? "stroke-[rgba(255,236,184,0.55)] drop-shadow-[0_0_10px_rgba(251,191,36,0.16)]"
                        : "stroke-[rgba(255,255,255,0.26)]"
                    }`}
                  />
                </svg>
              </div>

              {/* center sun hub */}
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div
                  onMouseEnter={() => setIsCenterHovered(true)}
                  onMouseLeave={() => setIsCenterHovered(false)}
                  className="group relative flex h-[220px] w-[220px] items-center justify-center rounded-full"
                >
                  {/* slow outer lumination */}
                  <div
                    className={`
                      pointer-events-none absolute inset-[8%] rounded-full blur-2xl
                      transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                        isCenterHovered
                          ? "scale-[1.18] opacity-100"
                          : "scale-100 opacity-70"
                      }
                      bg-[radial-gradient(circle,rgba(255,255,255,0.34)_0%,rgba(147,197,253,0.22)_28%,rgba(59,130,246,0.14)_48%,transparent_72%)]
                    `}
                  />

                  {/* sun ring */}
                  <div
                    className={`
                      pointer-events-none absolute inset-[20%] rounded-full border border-white/20
                      transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                        isCenterHovered
                          ? "scale-110 shadow-[0_0_40px_rgba(255,255,255,0.24),0_0_100px_rgba(96,165,250,0.34)]"
                          : "scale-100 shadow-[0_0_24px_rgba(255,255,255,0.12),0_0_60px_rgba(96,165,250,0.18)]"
                      }
                    `}
                  />

                  {/* center logo */}
                  <div
                    className={`
                      relative flex h-[116px] w-[116px] items-center justify-center rounded-full bg-white
                      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                        isCenterHovered
                          ? "scale-[1.05] shadow-[0_18px_50px_rgba(2,6,23,0.42),0_0_30px_rgba(255,255,255,0.20)]"
                          : "scale-100 shadow-[0_18px_44px_rgba(2,6,23,0.34)]"
                      }
                    `}
                  >
                    <img
                      src="/vmerg-logo.png"
                      alt="Vmerg Logo"
                      className="h-[92px] w-[92px] rounded-full object-cover"
                    />
                  </div>

                  
                </div>
              </div>

              {/* logos on orbit – bigger, spaced, no overlap */}
              <div className={orbitBrandClass("left-[14%] top-[10%] hidden sm:block")}>
                <BrandBadge brand={brands[0]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[33%] top-[6%] hidden sm:block")}>
                <BrandBadge brand={brands[1]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[56%] top-[7%] hidden sm:block")}>
                <BrandBadge brand={brands[2]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[13%] top-[16%] hidden sm:block")}>
                <BrandBadge brand={brands[3]} large active={isCenterHovered} />
              </div>

              <div className={orbitBrandClass("right-[11%] top-[38%] hidden sm:block")}>
                <BrandBadge brand={brands[4]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[18%] bottom-[15%] hidden sm:block")}>
                <BrandBadge brand={brands[5]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[55%] bottom-[7%] hidden sm:block")}>
                <BrandBadge brand={brands[6]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[34%] bottom-[7%] hidden sm:block")}>
                <BrandBadge brand={brands[7]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[14%] bottom-[15%] hidden sm:block")}>
                <BrandBadge brand={brands[8]} large active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[6%] top-[38%] hidden sm:block")}>
                <BrandBadge brand={brands[9]} large active={isCenterHovered} />
              </div>

              <div className={orbitBrandClass("left-[22%] top-[26%] hidden md:block")}>
                <BrandBadge brand={brands[10]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[38%] top-[22%] hidden md:block")}>
                <BrandBadge brand={brands[11]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[29%] top-[24%] hidden md:block")}>
                <BrandBadge brand={brands[12]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[27%] bottom-[26%] hidden md:block")}>
                <BrandBadge brand={brands[13]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[40%] bottom-[23%] hidden md:block")}>
                <BrandBadge brand={brands[14]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("left-[27%] bottom-[30%] hidden md:block")}>
                <BrandBadge brand={brands[15]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[38%] bottom-[17%] hidden md:block")}>
                <BrandBadge brand={brands[16]} active={isCenterHovered} />
              </div>
              <div className={orbitBrandClass("right-[38%] top-[40%] hidden md:block")}>
                <BrandBadge brand={brands[17]} active={isCenterHovered} />
              </div>

              {/* mobile fallback */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:hidden">
                <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white shadow-lg">
                      <img
                        src="/vmerg-logo.png"
                        alt="Vmerg Logo"
                        className="h-12 w-12 rounded-[1rem] object-contain"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {brands.slice(0, 9).map((b) => (
                      <div
                        key={b.name}
                        className="group flex items-center justify-center rounded-[1.35rem] bg-white px-3 py-3 shadow-[0_14px_30px_rgba(15,23,42,0.24)] transition hover:-translate-y-1"
                      >
                        <img
                          src={b.img}
                          alt={b.name}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-sky-50 via-blue-50 to-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our <span className="text-blue-600">Process</span>
          </h2>

          <p className="mt-4 text-slate-600">
            A structured approach to scale campaigns
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-4">
            {["Plan", "Match", "Launch", "Scale"].map((step, i) => {
              const isHighlight = i === 2;

              return (
                <div
                  key={step}
                  className="group perspective-[800px] flex justify-center"
                >
                  <div
                    className={`
                      relative w-[160px] h-[110px]
                      transform-style-preserve-3d
                      transition-all duration-500
                      ${
                        isHighlight
                          ? "scale-110 -translate-y-2"
                          : "group-hover:-translate-y-2"
                      }
                      group-hover:rotate-x-6 group-hover:-rotate-y-6
                    `}
                  >
                    <div className="absolute inset-0 bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center z-10">
                      <p className="text-blue-600 text-sm font-semibold">
                        0{i + 1}
                      </p>

                      <h3
                        className={`mt-1 font-semibold ${
                          isHighlight ? "text-blue-700" : "text-slate-900"
                        }`}
                      >
                        {step}
                      </h3>
                    </div>

                    <div className="absolute inset-0 bg-slate-200 rounded-xl transform -translate-y-[12px] skew-x-[-20deg] opacity-80" />
                    <div className="absolute inset-0 bg-slate-300 rounded-xl transform translate-x-[12px] skew-y-[-20deg] opacity-80" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FORM */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                Partner with us for your next campaign
              </h2>

              <p className="mt-3 text-slate-600">
                Share your goals — we’ll craft a high-performing strategy.
              </p>
            </div>

            <div className="mt-12 rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400">
              <div className="bg-white rounded-3xl p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="input-new"
                    />
                    <input
                      name="email"
                      placeholder="Work Email"
                      value={form.email}
                      onChange={handleChange}
                      className="input-new"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="brand"
                      placeholder="Brand Name"
                      value={form.brand}
                      onChange={handleChange}
                      className="input-new"
                    />
                    <input
                      name="website"
                      placeholder="Website / App Link"
                      value={form.website}
                      onChange={handleChange}
                      className="input-new"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your campaign..."
                    value={form.message}
                    onChange={handleChange}
                    className="input-new h-28"
                  />

                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition hover:scale-105">
                    Get Campaign Strategy →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}