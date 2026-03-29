"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext<any>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");

  const vmerg = {
    name: "vmerg",
    tagline: "End-to-End Influencer Marketing Powerhouse",
    founded: "2021",
    cin: "U74999KA2021PTC153669",
    contacts: {
      phone: "+91 86607 83740",
      whatsapp: "916362621090",
      email: "vinay@vmerg.com"
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, vmerg }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Simple Components (No Context Dependency)
export function VmergLogo({ size = "lg" }: { size?: string }) {
  const sizes = { sm: "text-2xl", md: "text-3xl", lg: "text-4xl" };
  return (
    <div className={`font-black bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent ${sizes[size as keyof typeof sizes] || sizes.lg} tracking-tight`}>
      vmerg <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">2021</span>
    </div>
  );
}

export function VmergTagline() {
  return (
    <p className="text-lg font-semibold text-slate-700 max-w-2xl mx-auto leading-relaxed">
      End-to-End Influencer Marketing | 10+ Categories | 24/7 Global Operations | Bangalore
    </p>
  );
}

export function VmergContactRow() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-lg">
      <a href="tel:+918660783740" className="flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-600">
        📞 +91 86607 83740
      </a>
      <a href="https://wa.me/916362621090" className="flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-500">
        💬 WhatsApp
      </a>
      <a href="mailto:vinay@vmerg.com" className="font-semibold text-slate-700 hover:text-emerald-600">
        vinay@vmerg.com
      </a>
    </div>
  );
}