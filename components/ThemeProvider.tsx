"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react"; // ✅ ADD THIS

const ThemeContext = createContext<any>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const vmerg = {
    name: "Vmerg",
    tagline: "End-to-End Influencer Marketing Powerhouse",
    founded: "2021",
    cin: "U74999KA2021PTC153669",
    contacts: {
      phone: "+91 86607 83740",
      whatsapp: "916362621090",
      email: "vinay@vmerg.com",
    },
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

//
// 🔥 BRAND COMPONENTS (UPDATED)
//

export function VmergLogo({ size = "lg" }: { size?: string }) {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
    <div
      className={`font-black tracking-tight bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent ${
        sizes[size as keyof typeof sizes] || sizes.lg
      }`}
    >
      Vmerg
    </div>
  );
}

export function VmergTagline() {
  return (
    <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
      End-to-End Influencer Marketing | 10+ Categories | 24/7 Global Operations
    </p>
  );
}

export function VmergContactRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md">

      {/* 📞 PHONE */}
      <a
        href="tel:+918660783740"
        className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 transition"
      >
        <Phone size={18} className="text-cyan-600" />
        +91 86607 83740
      </a>

      {/* 💬 WHATSAPP */}
      <a
        href="https://wa.me/916362621090"
        className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 hover:text-green-600 transition"
      >
        <MessageCircle size={18} className="text-green-500" />
        WhatsApp
      </a>

      {/* 📧 EMAIL */}
      <a
        href="mailto:vinay@vmerg.com"
        className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition"
      >
        <Mail size={18} className="text-indigo-500" />
        vinay@vmerg.com
      </a>

    </div>
  );
}