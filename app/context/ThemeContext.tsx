"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // 🔥 Load saved theme safely (no hydration mismatch)
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) setThemeState(saved);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selected: Theme) => {
      const finalTheme =
        selected === "system"
          ? media.matches
            ? "dark"
            : "light"
          : selected;

      setResolvedTheme(finalTheme);

      // ✅ Tailwind class
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(finalTheme);

      // ✅ data attribute (optional)
      document.documentElement.setAttribute("data-theme", finalTheme);
    };

    applyTheme(theme);

    const listener = () => {
      if (theme === "system") applyTheme("system");
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [theme]);

  // 🔥 Smooth transition (mobile optimized)
  useEffect(() => {
    const root = document.documentElement;

    root.style.transition =
      "background-color 0.25s ease, color 0.25s ease";

    return () => {
      root.style.transition = "";
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
    }),
    [theme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
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