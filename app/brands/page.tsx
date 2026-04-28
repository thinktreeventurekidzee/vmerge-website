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
            ? "h-[52px] w-[52px] md:h-[78px] md:w-[78px] lg:h-[84px] lg:w-[84px]"
            : "h-[42px] w-[42px] md:h-[64px] md:w-[64px] lg:h-[70px] lg:w-[70px]"
        }
        ${active ? "scale-[1.04] opacity-100" : "scale-100 opacity-95"}
      `}
    >
      <div
        className={`
          flex h-full w-full items-center justify-center rounded-[14px] bg-white/95
          shadow-[0_10px_28px_rgba(2,6,23,0.18)]
          transition-all duration-500
          sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px]
          ${
            large
              ? "p-[5px] md:p-[8px] lg:p-[10px]"
              : "p-[4px] md:p-[6px] lg:p-[8px]"
          }
          ${active ? "shadow-[0_14px_36px_rgba(2,6,23,0.22)]" : ""}
        `}
      >
        <div
          className={`
            flex items-center justify-center
            ${
              large
                ? "h-[36px] w-[36px] md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px]"
                : "h-[28px] w-[28px] md:h-[46px] md:w-[46px] lg:h-[52px] lg:w-[52px]"
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

      <div className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-medium text-white opacity-0 blur-sm transition-all duration-300 group-hover:-bottom-9 group-hover:opacity-100 group-hover:blur-0 md:block">
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
    medium: "h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-10 lg:w-10",
    large: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16",
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
  const [isCenterHovered, setIsCenterHovered] = useState(false);

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
    { name: "Olay", img: "/logo/oll.jpeg" },
  ];

  const mobileHeroBrands = [
    { brand: brands[0], cls: "left-[4%] top-[10%]" },
    { brand: brands[1], cls: "left-[28%] top-[2%]" },
    { brand: brands[2], cls: "right-[28%] top-[2%]" },
    { brand: brands[3], cls: "right-[4%] top-[10%]" },
    { brand: brands[4], cls: "right-[2%] top-[36%]" },
    { brand: brands[5], cls: "right-[8%] bottom-[18%]" },
    { brand: brands[6], cls: "left-1/2 bottom-[2%] -translate-x-1/2" },
    { brand: brands[7], cls: "left-[8%] bottom-[18%]" },
    { brand: brands[8], cls: "left-[2%] top-[36%]" },
    { brand: brands[9], cls: "left-[18%] top-[58%]" },
    { brand: brands[10], cls: "right-[18%] top-[58%]" },
    { brand: brands[11], cls: "left-[20%] top-[22%]" },
  ];

  const mobileRemainingBrands = brands.slice(12);

  return (
    <>
      <Navbar />

      <main className="mt-[88px]">
        <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/60 to-white pt-10 pb-16 text-center sm:pt-16">
          <h2 className="px-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Brands we’ve worked with
          </h2>

          <p className="mx-auto mt-3 max-w-xl px-4 text-sm text-slate-600 sm:mt-4 sm:max-w-2xl sm:text-base">
            Trusted by fast-growing startups and industry leaders
          </p>

          {/* Mobile Layout */}
          <div className="mt-8 px-4 md:hidden">
            <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)] px-4 pb-6 pt-8 shadow-[0_24px_70px_rgba(37,99,235,0.24)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.14),transparent_16%),radial-gradient(circle_at_18%_20%,rgba(191,219,254,0.10),transparent_20%),radial-gradient(circle_at_82%_22%,rgba(191,219,254,0.08),transparent_20%),radial-gradient(circle_at_50%_78%,rgba(59,130,246,0.16),transparent_24%)]" />

              <div className="absolute left-[10%] top-[14%] h-3 w-3 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute right-[12%] top-[16%] h-4 w-4 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute left-[14%] bottom-[28%] h-2.5 w-2.5 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute right-[18%] bottom-[22%] h-3 w-3 rounded-full bg-white/20 blur-[1px]" />

              <div className="relative mx-auto h-[420px] w-full max-w-[360px]">
                <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full">
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
                    <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(2,6,23,0.30)]">
                      <img
                        src="/vmerg-logo.png"
                        alt="Vmerg Logo"
                        className="h-[54px] w-[54px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {mobileHeroBrands.map((item, index) => (
                  <div key={index} className={`absolute z-10 ${item.cls}`}>
                    <div className="group flex flex-col items-center gap-1">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-white/15 bg-white/95 p-2 shadow-[0_10px_24px_rgba(2,6,23,0.22)] backdrop-blur-sm transition-transform duration-300 active:scale-95">
                        <img
                          src={item.brand.img}
                          alt={item.brand.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="max-w-[64px] text-center text-[10px] font-medium leading-[1.1] text-white/88">
                        {item.brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-3">
                <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                  More partners
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {mobileRemainingBrands.map((brand, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-[0_8px_18px_rgba(2,6,23,0.18)]">
                        <img
                          src={brand.img}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <p className="text-left text-xs font-medium leading-snug text-white/90">
                        {brand.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="mx-auto mt-8 hidden w-full max-w-[100vw] px-0 sm:mt-10 md:block">
            <div className="relative mx-auto w-full">
              <div
                className="
                  relative w-full
                  min-h-[720px] md:min-h-[820px] lg:min-h-[860px]
                  overflow-hidden
                  border border-blue-200/40
                  bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)]
                  shadow-[0_24px_70px_rgba(37,99,235,0.24)]
                  rounded-[2rem] lg:rounded-[2.4rem]
                "
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_18%),radial-gradient(circle_at_18%_22%,rgba(147,197,253,0.12),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(191,219,254,0.10),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.14),transparent_26%)]" />

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

                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full md:h-[160px] md:w-[160px] lg:h-[210px] lg:w-[210px]"
                    onMouseEnter={() => setIsCenterHovered(true)}
                    onMouseLeave={() => setIsCenterHovered(false)}
                  >
                    <div
                      className={`pointer-events-none absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(147,197,253,0.16)_30%,rgba(59,130,246,0.10)_54%,transparent_72%)] blur-xl transition-all duration-700 ${
                        isCenterHovered ? "scale-[1.08] opacity-100" : "scale-100 opacity-75"
                      }`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-[23%] rounded-full border border-white/20 transition-all duration-700 ${
                        isCenterHovered
                          ? "scale-105 shadow-[0_0_28px_rgba(255,255,255,0.20),0_0_60px_rgba(96,165,250,0.22)]"
                          : "shadow-[0_0_18px_rgba(255,255,255,0.10),0_0_40px_rgba(96,165,250,0.14)]"
                      }`}
                    />
                    <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(2,6,23,0.28)] md:h-[80px] md:w-[80px] lg:h-[104px] lg:w-[104px]">
                      <img
                        src="/vmerg-logo.png"
                        alt="Vmerg Logo"
                        className="h-[46px] w-[46px] rounded-full object-cover md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute left-[6%] top-[14%] z-10">
                  <BrandBadge brand={brands[0]} large active={isCenterHovered} />
                </div>
                <div className="absolute left-[24%] top-[4%] z-10">
                  <BrandBadge brand={brands[1]} large active={isCenterHovered} />
                </div>
                <div className="absolute left-1/2 top-[1.5%] z-10 -translate-x-1/2">
                  <BrandBadge brand={brands[2]} large active={isCenterHovered} />
                </div>
                <div className="absolute right-[24%] top-[4%] z-10">
                  <BrandBadge brand={brands[3]} large active={isCenterHovered} />
                </div>
                <div className="absolute right-[6%] top-[14%] z-10">
                  <BrandBadge brand={brands[4]} large active={isCenterHovered} />
                </div>

                <div className="absolute right-[12%] top-[40%] z-10">
                  <BrandBadge brand={brands[5]} large active={isCenterHovered} />
                </div>
                <div className="absolute right-[10%] bottom-[12%] z-10">
                  <BrandBadge brand={brands[6]} large active={isCenterHovered} />
                </div>
                <div className="absolute left-1/2 bottom-[2%] z-10 -translate-x-1/2">
                  <BrandBadge brand={brands[7]} large active={isCenterHovered} />
                </div>
                <div className="absolute left-[16%] bottom-[12%] z-10">
                  <BrandBadge brand={brands[8]} large active={isCenterHovered} />
                </div>

                <div className="absolute left-[2%] top-[44%] z-10">
                  <BrandBadge brand={brands[18]} large active={isCenterHovered} />
                </div>
                <div className="absolute left-[21%] top-[43%] z-10">
                  <BrandBadge brand={brands[9]} large active={isCenterHovered} />
                </div>

                <div className="absolute left-[29%] top-[27%] z-10">
                  <BrandBadge brand={brands[10]} active={isCenterHovered} />
                </div>
                <div className="absolute left-[40%] top-[22%] z-10">
                  <BrandBadge brand={brands[11]} active={isCenterHovered} />
                </div>
                <div className="absolute right-[40%] top-[22%] z-10">
                  <BrandBadge brand={brands[12]} active={isCenterHovered} />
                </div>
                <div className="absolute right-[29%] top-[27%] z-10">
                  <BrandBadge brand={brands[13]} active={isCenterHovered} />
                </div>

                <div className="absolute right-[28%] bottom-[27%] z-10">
                  <BrandBadge brand={brands[14]} active={isCenterHovered} />
                </div>
                <div className="absolute left-[40%] bottom-[20%] z-10">
                  <BrandBadge brand={brands[15]} active={isCenterHovered} />
                </div>
                <div className="absolute right-[40%] bottom-[20%] z-10">
                  <BrandBadge brand={brands[16]} active={isCenterHovered} />
                </div>
                <div className="absolute left-[28%] bottom-[27%] z-10">
                  <BrandBadge brand={brands[17]} active={isCenterHovered} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}