"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type Theme = "soothing" | "flower" | "neon";

type ThemeClasses = {
  pageBg: string;
  sectionGlow: string;
  heroText: string;
  gradientText: string;
  card: string;
  input: string;
  button: string;
  badge: string;
  mutedText: string;
  heading: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeClasses: ThemeClasses;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const themeMap: Record<Theme, ThemeClasses> = {
  soothing: {
    pageBg:
      "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50",
    sectionGlow:
      "from-cyan-500/10 via-transparent to-indigo-500/10",
    heroText:
      "bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent",
    gradientText:
      "bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent",
    card:
      "border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300",
    input:
      "border border-white/15 bg-white/5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/30",
    button:
      "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300",
    badge:
      "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    mutedText: "text-slate-300",
    heading: "text-white",
  },
  flower: {
    pageBg:
      "bg-gradient-to-br from-rose-950 via-fuchsia-950 to-slate-950 text-rose-50",
    sectionGlow:
      "from-pink-500/10 via-transparent to-fuchsia-500/10",
    heroText:
      "bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-100 bg-clip-text text-transparent",
    gradientText:
      "bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent",
    card:
      "border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-pink-300/20 transition-all duration-300",
    input:
      "border border-white/15 bg-white/5 text-white placeholder:text-rose-200/60 focus:ring-2 focus:ring-pink-400/40 focus:border-pink-400/30",
    button:
      "bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white hover:scale-[1.02] hover:shadow-pink-500/20 transition-all duration-300",
    badge:
      "border border-pink-400/30 bg-pink-400/10 text-pink-200",
    mutedText: "text-rose-100/80",
    heading: "text-white",
  },
  neon: {
    pageBg:
      "bg-gradient-to-br from-black via-slate-950 to-black text-green-50",
    sectionGlow:
      "from-emerald-400/10 via-transparent to-cyan-400/10",
    heroText:
      "bg-gradient-to-r from-green-100 via-emerald-200 to-cyan-100 bg-clip-text text-transparent",
    gradientText:
      "bg-gradient-to-r from-emerald-400 via-lime-300 to-cyan-400 bg-clip-text text-transparent",
    card:
      "border border-emerald-400/15 bg-white/[0.03] backdrop-blur-2xl hover:bg-white/[0.06] hover:border-emerald-300/30 transition-all duration-300",
    input:
      "border border-emerald-300/15 bg-white/[0.03] text-white placeholder:text-emerald-100/50 focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400/30",
    button:
      "bg-gradient-to-r from-emerald-500 via-green-400 to-cyan-500 text-black font-semibold hover:scale-[1.02] hover:shadow-emerald-400/20 transition-all duration-300",
    badge:
      "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    mutedText: "text-slate-300",
    heading: "text-white",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("soothing");

  const themeClasses = useMemo(() => themeMap[theme], [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}