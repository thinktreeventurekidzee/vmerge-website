"use client";

import { useTheme } from "../app/context/ThemeContext";
import clsx from "clsx";

type Theme = "soothing" | "flower" | "neon";

export default function AboutSection(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    setTheme((prev: Theme) =>
      prev === "soothing" ? "flower" : prev === "flower" ? "neon" : "soothing"
    );
  };

  const themeClasses: Record<Theme, string> = {
    soothing:
      "from-slate-950 via-slate-900 to-emerald-600/70 text-slate-50",

    flower:
      "from-rose-800 via-pink-800 to-amber-500/60 text-white",

    neon:
      "from-slate-900 via-emerald-600 to-cyan-400 text-white",
  };

  const accentText: Record<Theme, string> = {
    soothing: "text-emerald-300",
    flower: "text-rose-200",
    neon: "text-cyan-300",
  };

  return (
    <section
      className={clsx(
        "relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500",
        "bg-gradient-to-br",
        themeClasses[theme]
      )}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* container */}
      <div className="relative w-full max-w-6xl mx-auto px-6 text-center">

        {/* theme toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={nextTheme}
            className="px-4 py-2 rounded-full border text-xs uppercase tracking-wider hover:scale-105 transition"
          >
            Theme: {theme}
          </button>
        </div>

        {/* heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          A{" "}
          <span className={clsx("font-semibold", accentText[theme])}>
            creator-first influencer agency
          </span>{" "}
          built for measurable growth
        </h2>

        {/* subtext */}
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          Since 2021, yourBrand has helped digital-first brands turn creator
          trust into predictable revenue across YouTube, Instagram and UGC campaigns.
        </p>

        {/* stats */}
        <div className="mt-10 grid grid-cols-3 gap-6 text-sm md:text-base">
          <div>
            <p className="text-2xl font-semibold text-white">120+</p>
            <p className="text-slate-400">brands partnered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">5k+</p>
            <p className="text-slate-400">creators</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">3.5x</p>
            <p className="text-slate-400">avg ROAS</p>
          </div>
        </div>

      </div>
    </section>
  );
}