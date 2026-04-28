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
            : "h-[44px] w-[44px] md:h-[64px] md:w-[64px] lg:h-[70px] lg:w-[70px]"
        }
        ${active ? "scale-[1.04] opacity-100" : "scale-100 opacity-95"}
      `}
    >
      <div
        className={`
          flex h-full w-full items-center justify-center rounded-[14px] bg-white/95
          shadow-[0_10px_28px_rgba(2,6,23,0.18)]
          transition-all duration-500
          md:rounded-[20px] lg:rounded-[22px]
          ${large ? "p-[6px] md:p-[8px] lg:p-[10px]" : "p-[5px] md:p-[6px] lg:p-[8px]"}
          ${active ? "shadow-[0_14px_36px_rgba(2,6,23,0.22)]" : ""}
        `}
      >
        <div
          className={`
            flex items-center justify-center
            ${
              large
                ? "h-[38px] w-[38px] md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px]"
                : "h-[30px] w-[30px] md:h-[46px] md:w-[46px] lg:h-[52px] lg:w-[52px]"
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

      <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-medium text-white opacity-0 blur-sm transition-all duration-300 group-hover:-bottom-9 group-hover:opacity-100 group-hover:blur-0 md:block">
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
    small: "h-3 w-3 md:h-5 md:w-5",
    medium: "h-6 w-6 md:h-9 md:w-9 lg:h-10 lg:w-10",
    large: "h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16",
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

  return (
    <>
      <Navbar />

      <main className="mt-[88px]">
        <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/60 to-white py-10 text-center sm:py-14 md:py-16">
          <h2 className="px-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Brands we’ve worked with
          </h2>

          <p className="mx-auto mt-3 max-w-xl px-4 text-sm text-slate-600 sm:mt-4 sm:max-w-2xl sm:text-base">
            Trusted by fast-growing startups and industry leaders
          </p>

          {/* Mobile Layout */}
          <div className="mt-8 px-4 md:hidden">
            <div className="rounded-[28px] bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)] px-4 py-8 shadow-[0_24px_70px_rgba(37,99,235,0.24)]">
              <div className="mx-auto mb-8 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(2,6,23,0.28)]">
                <img
                  src="/vmerg-logo.png"
                  alt="Vmerg Logo"
                  className="h-[58px] w-[58px] rounded-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 xs:grid-cols-3">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start gap-2"
                  >
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[18px] bg-white p-3 shadow-[0_10px_24px_rgba(2,6,23,0.20)]">
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="text-center text-[11px] font-medium leading-tight text-white/90">
                      {brand.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Orbit Layout */}
          <div className="mx-auto mt-10 hidden w-full max-w-[100vw] px-0 md:block">
            <div className="relative mx-auto w-full">
              <div
                className="
                  relative w-full min-h-[820px] overflow-hidden
                  rounded-[2rem] border border-blue-200/40
                  bg-[radial-gradient(circle_at_center,#2f6df6_0%,#1f49d8_24%,#1533ab_50%,#0b1d69_78%,#071448_100%)]
                  shadow-[0_24px_70px_rgba(37,99,235,0.24)]
                  lg:min-h-[860px] lg:rounded-[2.4rem]
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

                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="relative flex h-[160px] w-[160px] items-center justify-center rounded-full lg:h-[210px] lg:w-[210px]"
                    onMouseEnter={() => setIsCenterHovered(true)}
                    onMouseLeave={() => setIsCenterHovered(false)}
                  >
                    <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(2,6,23,0.28)] lg:h-[104px] lg:w-[104px]">
                      <img
                        src="/vmerg-logo.png"
                        alt="Vmerg Logo"
                        className="h-[60px] w-[60px] rounded-full object-cover lg:h-[80px] lg:w-[80px]"
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
                <div className="absolute left-1/2 top-[2%] z-10 -translate-x-1/2">
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