"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

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
        ${
          large
            ? "h-[38px] w-[38px] sm:h-[54px] sm:w-[54px] md:h-[64px] md:w-[64px] lg:h-[72px] lg:w-[72px] xl:h-[80px] xl:w-[80px]"
            : "h-[28px] w-[28px] sm:h-[42px] sm:w-[42px] md:h-[50px] md:w-[50px] lg:h-[58px] lg:w-[58px] xl:h-[64px] xl:w-[64px]"
        }
        ${active ? "scale-[1.04] opacity-100" : "scale-100 opacity-95"}
      `}
    >
      <div
        className={`
          flex h-full w-full items-center justify-center rounded-[12px] bg-white/95
          shadow-[0_10px_28px_rgba(2,6,23,0.18)]
          transition-all duration-500
          sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]
          ${
            large
              ? "p-[4px] sm:p-[6px] md:p-[7px] lg:p-[8px]"
              : "p-[3px] sm:p-[4px] md:p-[5px] lg:p-[6px]"
          }
          ${active ? "shadow-[0_14px_36px_rgba(2,6,23,0.22)]" : ""}
        `}
      >
        <div
          className={`
            flex items-center justify-center
            ${
              large
                ? "h-[26px] w-[26px] sm:h-[38px] sm:w-[38px] md:h-[46px] md:w-[46px] lg:h-[52px] lg:w-[52px] xl:h-[58px] xl:w-[58px]"
                : "h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px] xl:h-[48px] xl:w-[48px]"
            }
          `}
        >
          <img
            src={brand.img}
            alt={brand.name}
            className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/85 px-2 py-1 text-[8px] font-medium text-white opacity-0 blur-sm transition-all duration-300 sm:px-3 sm:text-[10px] md:text-[11px] group-hover:-bottom-9 group-hover:opacity-100 group-hover:blur-0">
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
    small: "h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5",
    medium: "h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8",
    large: "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14",
  };

  return (
    <div
      className={`
        absolute rounded-full border border-white/20 bg-white/10 backdrop-blur-md
        shadow-[0_10px_30px_rgba(255,255,255,0.08)]
        ${sizeMap[size]} ${className} animate-pulse
      `}
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
    { name: "olay", img: "/logo/oll.jpeg" },
  ];

  return (
    <>
     

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 py-16 text-center text-white sm:py-24">
          <h1 className="px-4 text-3xl font-bold sm:text-5xl">
            We Scale Brands Through Creators
          </h1>
          <p className="mt-3 px-4 text-sm text-white/80 sm:mt-4 sm:text-base">
            Structured Influencer Campaigns Designed For Real Growth.
          </p>
        </section>

        {/* WHY BRANDS CHOOSE */}
        <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 text-center sm:py-24">
          <h2 className="px-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Why Brands Choose <span className="text-blue-600">Vmerg</span>
          </h2>

          <p className="mt-3 px-4 text-slate-600">
            Built For Performance, Scale, and Clarity
          </p>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 md:grid-cols-3">
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
                <div className="flex h-20 items-center justify-center bg-blue-50 sm:h-24">
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

        {/* BRAND ORBIT - FULL VIEWPORT FIT */}
        <section className="bg-gradient-to-b from-slate-50 via-blue-50/60 to-white overflow-hidden">
          <div className="flex h-[100svh] min-h-[700px] flex-col">
            <div className="shrink-0 pt-6 sm:pt-8">
              <h2 className="px-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Brands We’ve Worked With
              </h2>

              <p className="mx-auto mt-3 max-w-xl px-4 text-center text-sm text-slate-600 sm:mt-4 sm:max-w-2xl sm:text-base">
                Trusted By Fast-Growing Startups and Industry Leaders
              </p>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center px-0 pb-4 pt-4 sm:px-4 sm:pb-6 sm:pt-6">
              <div
                className="
                  relative w-full max-w-[1400px]
                  aspect-[1180/860]
                  max-h-[calc(100svh-140px)]
                  sm:max-h-[calc(100svh-170px)]
                "
              >
                <div
                  className="
                    absolute inset-0 overflow-hidden
                    border border-blue-200/40
                    bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)]
                    shadow-[0_24px_70px_rgba(37,99,235,0.24)]
                    rounded-none sm:rounded-[2rem] lg:rounded-[2.4rem]
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_18%),radial-gradient(circle_at_18%_22%,rgba(147,197,253,0.12),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(191,219,254,0.10),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.14),transparent_26%)]" />

                  {/* bubbles */}
                  <FloatingBubble size="large" className="left-[7%] top-[14%] opacity-70" />
                  <FloatingBubble size="small" className="left-[16%] top-[24%] opacity-60" />
                  <FloatingBubble size="medium" className="left-[8%] bottom-[18%] opacity-70" />
                  <FloatingBubble size="small" className="left-[24%] bottom-[9%] opacity-60" />
                  <FloatingBubble size="large" className="right-[8%] top-[14%] opacity-70" />
                  <FloatingBubble size="small" className="right-[16%] top-[30%] opacity-60" />
                  <FloatingBubble size="medium" className="right-[8%] bottom-[15%] opacity-70" />
                  <FloatingBubble size="small" className="right-[24%] bottom-[10%] opacity-60" />
                  <FloatingBubble size="medium" className="left-[48%] top-[7%] opacity-60" />
                  <FloatingBubble size="small" className="left-[52%] bottom-[7%] opacity-60" />

                  {/* orbit path */}
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      viewBox="0 0 1180 860"
                      className="h-full w-full"
                      preserveAspectRatio="xMidYMid meet"
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
                            ? "rgba(255,255,255,0.50)"
                            : "rgba(255,255,255,0.18)"
                        }
                        strokeWidth="2"
                        strokeDasharray="2 14"
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>

                  {/* center logo */}
                  <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full sm:h-[110px] sm:w-[110px] md:h-[140px] md:w-[140px] lg:h-[180px] lg:w-[180px] xl:h-[210px] xl:w-[210px]"
                      onMouseEnter={() => setIsCenterHovered(true)}
                      onMouseLeave={() => setIsCenterHovered(false)}
                    >
                      <div
                        className={`pointer-events-none absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(147,197,253,0.16)_30%,rgba(59,130,246,0.10)_54%,transparent_72%)] blur-md sm:blur-xl lg:blur-2xl transition-all duration-700 ${
                          isCenterHovered
                            ? "scale-[1.05] sm:scale-[1.10] opacity-100"
                            : "scale-100 opacity-75"
                        }`}
                      />
                      <div
                        className={`pointer-events-none absolute inset-[23%] rounded-full border border-white/20 transition-all duration-700 ${
                          isCenterHovered
                            ? "scale-105 shadow-[0_0_18px_rgba(255,255,255,0.16),0_0_40px_rgba(96,165,250,0.18)] sm:shadow-[0_0_28px_rgba(255,255,255,0.20),0_0_60px_rgba(96,165,250,0.22)] lg:shadow-[0_0_32px_rgba(255,255,255,0.20),0_0_70px_rgba(96,165,250,0.22)]"
                            : "shadow-[0_0_10px_rgba(255,255,255,0.08),0_0_24px_rgba(96,165,250,0.12)] sm:shadow-[0_0_18px_rgba(255,255,255,0.10),0_0_40px_rgba(96,165,250,0.14)] lg:shadow-[0_0_18px_rgba(255,255,255,0.10),0_0_48px_rgba(96,165,250,0.14)]"
                        }`}
                      />
                      <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(2,6,23,0.28)] sm:h-[58px] sm:w-[58px] md:h-[72px] md:w-[72px] lg:h-[92px] lg:w-[92px] xl:h-[104px] xl:w-[104px]">
                        <img
                          src="/vmerg-logo.png"
                          alt="Vmerg Logo"
                          className="h-[34px] w-[34px] rounded-full object-cover sm:h-[40px] sm:w-[40px] md:h-[54px] md:w-[54px] lg:h-[68px] lg:w-[68px] xl:h-[80px] xl:w-[80px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* OUTER BIG BADGES */}
                  <div className="absolute left-[8%] top-[12%] z-10">
                    <BrandBadge brand={brands[0]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[26%] top-[5%] z-10">
                    <BrandBadge brand={brands[1]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute left-1/2 top-[3%] z-10 -translate-x-1/2">
                    <BrandBadge brand={brands[2]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[26%] top-[5%] z-10">
                    <BrandBadge brand={brands[3]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[8%] top-[12%] z-10">
                    <BrandBadge brand={brands[4]} large active={isCenterHovered} />
                  </div>

                  <div className="absolute right-[10%] top-[39%] z-10">
                    <BrandBadge brand={brands[5]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[8%] bottom-[14%] z-10">
                    <BrandBadge brand={brands[6]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute left-1/2 bottom-[4%] z-10 -translate-x-1/2">
                    <BrandBadge brand={brands[7]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[8%] bottom-[15%] z-10">
                    <BrandBadge brand={brands[8]} large active={isCenterHovered} />
                  </div>

                  <div className="absolute left-[6%] top-[41%] z-10">
                    <BrandBadge brand={brands[18]} large active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[21%] top-[42%] z-10">
                    <BrandBadge brand={brands[9]} large active={isCenterHovered} />
                  </div>

                  {/* INNER SMALL BADGES */}
                  <div className="absolute left-[30%] top-[25%] z-10">
                    <BrandBadge brand={brands[10]} active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[41%] top-[21%] z-10">
                    <BrandBadge brand={brands[11]} active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[41%] top-[21%] z-10">
                    <BrandBadge brand={brands[12]} active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[30%] top-[25%] z-10">
                    <BrandBadge brand={brands[13]} active={isCenterHovered} />
                  </div>

                  <div className="absolute right-[29%] bottom-[24%] z-10">
                    <BrandBadge brand={brands[14]} active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[41%] bottom-[20%] z-10">
                    <BrandBadge brand={brands[15]} active={isCenterHovered} />
                  </div>
                  <div className="absolute right-[41%] bottom-[20%] z-10">
                    <BrandBadge brand={brands[16]} active={isCenterHovered} />
                  </div>
                  <div className="absolute left-[29%] bottom-[24%] z-10">
                    <BrandBadge brand={brands[17]} active={isCenterHovered} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gradient-to-b from-sky-50 via-blue-50 to-white py-16 text-center sm:py-24">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-blue-600">Process</span>
          </h2>

          <p className="mt-4 px-4 text-slate-600">
            A Structured Approach To Scale Campaigns
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-8 px-4 sm:grid-cols-4">
            {["Plan", "Match", "Launch", "Scale"].map((step, i) => {
              const isHighlight = i === 2;

              return (
                <div key={step} className="group flex justify-center perspective-[800px]">
                  <div
                    className={`
                      relative h-[110px] w-[140px] sm:w-[160px]
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
                      <p className="text-sm font-semibold text-blue-600">0{i + 1}</p>
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
        <section className="bg-gradient-to-b from-white via-sky-50 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
                Partner With Us for Your Next Campaign
              </h2>

              <p className="mt-3 text-slate-600">
                Share your Goals — we’ll Craft a High-Performing Strategy.
              </p>
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-[2px] sm:mt-12">
              <div className="rounded-3xl bg-white p-5 sm:p-8">
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

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-600"
                  >
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