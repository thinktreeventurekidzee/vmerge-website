"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

type BrandType = {
  name: string;
  img: string;
};

function BrandBadge({
  brand,
  large = false,
  active = false,
}: {
  brand: BrandType;
  large?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`
        group relative flex items-center justify-center
        transition-all duration-500 ease-out
        ${large ? "h-[88px] w-[88px]" : "h-[70px] w-[70px]"}
        ${active ? "scale-105 opacity-100" : "scale-100 opacity-95"}
      `}
    >
      <div
        className={`
          flex items-center justify-center rounded-[22px] bg-white/95
          shadow-[0_10px_30px_rgba(2,6,23,0.18)]
          transition-all duration-500
          ${large ? "h-[88px] w-[88px]" : "h-[70px] w-[70px]"}
          ${active ? "shadow-[0_16px_40px_rgba(2,6,23,0.24)]" : ""}
        `}
      >
        <img
          src={brand.img}
          alt={brand.name}
          className={`
            w-auto object-contain transition-all duration-500
            ${large ? "h-[46px] max-w-[52px]" : "h-[36px] max-w-[42px]"}
            ${active ? "scale-105" : ""}
          `}
        />
      </div>

      <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-white opacity-0 blur-sm transition-all duration-300 group-hover:-bottom-11 group-hover:opacity-100 group-hover:blur-0">
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

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 py-20 text-center text-white sm:py-28">
          <h1 className="text-3xl font-bold sm:text-5xl">
            We scale brands through creators
          </h1>
          <p className="mt-4 text-white/80">
            Structured influencer campaigns designed for real growth.
          </p>
        </section>

        {/* WHY BRANDS */}
        <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 text-center sm:py-28">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Why brands choose <span className="text-blue-600">Vmerg</span>
          </h2>

          <p className="mt-3 text-slate-600">
            Built for performance, scale, and clarity
          </p>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
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
                className="group rounded-2xl border bg-white/80 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-24 items-center justify-center bg-blue-50">
                  <div className="text-3xl">{item.icon}</div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS */}
        <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/60 to-white py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Brands we’ve worked with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Trusted by fast-growing startups and industry leaders
          </p>

          <div className="mx-auto mt-16 max-w-7xl px-4">
            <div className="relative mx-auto h-[860px] w-full max-w-[1180px] overflow-hidden rounded-[2.4rem] border border-blue-200/40 bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)] shadow-[0_35px_100px_rgba(37,99,235,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_18%),radial-gradient(circle_at_18%_22%,rgba(147,197,253,0.12),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(191,219,254,0.10),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.14),transparent_26%)]" />

              <FloatingBubble size="large" className="left-[8%] top-[14%]" />
              <FloatingBubble size="small" className="left-[18%] top-[24%]" />
              <FloatingBubble size="medium" className="left-[9%] bottom-[20%]" />
              <FloatingBubble size="small" className="left-[26%] bottom-[10%]" />
              <FloatingBubble size="large" className="right-[9%] top-[13%]" />
              <FloatingBubble size="small" className="right-[18%] top-[30%]" />
              <FloatingBubble size="medium" className="right-[10%] bottom-[16%]" />
              <FloatingBubble size="small" className="right-[26%] bottom-[12%]" />
              <FloatingBubble size="medium" className="left-[48%] top-[8%]" />
              <FloatingBubble size="small" className="left-[52%] bottom-[8%]" />

              <div className="pointer-events-none absolute inset-0">
                <svg
                  viewBox="0 0 1180 860"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M592 430
                       C 640 412, 676 420, 702 452
                       C 728 484, 726 534, 686 566
                       C 632 610, 552 620, 476 592
                       C 396 562, 344 494, 346 414
                       C 348 306, 446 224, 584 214
                       C 742 202, 866 296, 900 422
                       C 940 582, 822 712, 618 736
                       C 402 760, 196 648, 154 456
                       C 112 252, 260 96, 514 80
                       C 818 60, 1046 234, 1060 458"
                    fill="none"
                    stroke={
                      isCenterHovered
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(255,255,255,0.24)"
                    }
                    strokeWidth="2.2"
                    strokeDasharray="2 14"
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
              </div>

              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="relative flex h-[240px] w-[240px] items-center justify-center rounded-full"
                  onMouseEnter={() => setIsCenterHovered(true)}
                  onMouseLeave={() => setIsCenterHovered(false)}
                >
                  <div
                    className={`pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.30)_0%,rgba(147,197,253,0.22)_28%,rgba(59,130,246,0.12)_52%,transparent_72%)] blur-2xl transition-all duration-700 ${
                      isCenterHovered
                        ? "scale-[1.18] opacity-100"
                        : "scale-100 opacity-80"
                    }`}
                  />

                  <div
                    className={`pointer-events-none absolute inset-[24%] rounded-full border border-white/20 transition-all duration-700 ${
                      isCenterHovered
                        ? "scale-110 shadow-[0_0_60px_rgba(255,255,255,0.24),0_0_120px_rgba(96,165,250,0.30)]"
                        : "shadow-[0_0_32px_rgba(255,255,255,0.12),0_0_72px_rgba(96,165,250,0.16)]"
                    }`}
                  />

                  <div className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full bg-white shadow-[0_20px_50px_rgba(2,6,23,0.36)] transition-all duration-500">
                    <img
                      src="/vmerg-logo.png"
                      alt="Vmerg Logo"
                      className="h-[88px] w-[88px] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Outer ring */}
              <div className="absolute left-[10%] top-[14%] z-10 hidden sm:block">
                <BrandBadge brand={brands[0]} large active={isCenterHovered} />
              </div>
              <div className="absolute left-[28%] top-[6%] z-10 hidden sm:block">
                <BrandBadge brand={brands[1]} large active={isCenterHovered} />
              </div>
              <div className="absolute left-1/2 top-[4%] z-10 hidden -translate-x-1/2 sm:block">
                <BrandBadge brand={brands[2]} large active={isCenterHovered} />
              </div>
              <div className="absolute right-[28%] top-[6%] z-10 hidden sm:block">
                <BrandBadge brand={brands[3]} large active={isCenterHovered} />
              </div>
              <div className="absolute right-[10%] top-[14%] z-10 hidden sm:block">
                <BrandBadge brand={brands[4]} large active={isCenterHovered} />
              </div>
              <div className="absolute right-[6%] top-[39%] z-10 hidden sm:block">
                <BrandBadge brand={brands[5]} large active={isCenterHovered} />
              </div>
              <div className="absolute right-[12%] bottom-[14%] z-10 hidden sm:block">
                <BrandBadge brand={brands[6]} large active={isCenterHovered} />
              </div>
              <div className="absolute left-1/2 bottom-[4%] z-10 hidden -translate-x-1/2 sm:block">
                <BrandBadge brand={brands[7]} large active={isCenterHovered} />
              </div>
              <div className="absolute left-[12%] bottom-[14%] z-10 hidden sm:block">
                <BrandBadge brand={brands[8]} large active={isCenterHovered} />
              </div>
              <div className="absolute left-[6%] top-[39%] z-10 hidden sm:block">
                <BrandBadge brand={brands[9]} large active={isCenterHovered} />
              </div>

              {/* Middle ring */}
              <div className="absolute left-[22%] top-[24%] z-10 hidden md:block">
                <BrandBadge brand={brands[10]} active={isCenterHovered} />
              </div>
              <div className="absolute left-[36%] top-[18%] z-10 hidden md:block">
                <BrandBadge brand={brands[11]} active={isCenterHovered} />
              </div>
              <div className="absolute right-[36%] top-[18%] z-10 hidden md:block">
                <BrandBadge brand={brands[12]} active={isCenterHovered} />
              </div>
              <div className="absolute right-[22%] top-[24%] z-10 hidden md:block">
                <BrandBadge brand={brands[13]} active={isCenterHovered} />
              </div>
              <div className="absolute right-[20%] bottom-[24%] z-10 hidden md:block">
                <BrandBadge brand={brands[14]} active={isCenterHovered} />
              </div>
              <div className="absolute left-[36%] bottom-[16%] z-10 hidden md:block">
                <BrandBadge brand={brands[15]} active={isCenterHovered} />
              </div>
              <div className="absolute right-[36%] bottom-[16%] z-10 hidden md:block">
                <BrandBadge brand={brands[16]} active={isCenterHovered} />
              </div>
              <div className="absolute left-[20%] bottom-[24%] z-10 hidden md:block">
                <BrandBadge brand={brands[17]} active={isCenterHovered} />
              </div>

              {/* Mobile fallback */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:hidden">
                <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
                      <img
                        src="/vmerg-logo.png"
                        alt="Vmerg Logo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {brands.slice(0, 9).map((b) => (
                      <div
                        key={b.name}
                        className="group flex items-center justify-center rounded-xl bg-white/95 px-3 py-3 shadow-sm transition hover:-translate-y-1"
                      >
                        <img
                          src={b.img}
                          alt={b.name}
                          className="h-10 w-auto object-contain transition group-hover:scale-105"
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
        <section className="bg-gradient-to-b from-sky-50 via-blue-50 to-white py-20 text-center sm:py-28">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-blue-600">Process</span>
          </h2>

          <p className="mt-4 text-slate-600">
            A structured approach to scale campaigns
          </p>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-12 px-4 md:grid-cols-4">
            {["Plan", "Match", "Launch", "Scale"].map((step, i) => {
              const isHighlight = i === 2;

              return (
                <div
                  key={step}
                  className="group flex justify-center perspective-[800px]"
                >
                  <div
                    className={`
                      relative h-[110px] w-[160px]
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
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                      <p className="text-sm font-semibold text-blue-600">
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

                    <div className="absolute inset-0 -translate-y-[12px] skew-x-[-20deg] rounded-xl bg-slate-200 opacity-80" />
                    <div className="absolute inset-0 translate-x-[12px] skew-y-[-20deg] rounded-xl bg-slate-300 opacity-80" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FORM */}
        <section className="bg-gradient-to-b from-white via-sky-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
                Partner with us for your next campaign
              </h2>

              <p className="mt-3 text-slate-600">
                Share your goals — we’ll craft a high-performing strategy.
              </p>
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-[2px]">
              <div className="rounded-3xl bg-white p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

                  <button className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-600">
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