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
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: ResolvedTheme;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme-preference";

/* 🔥 Get system theme safely */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  /* 🔥 INITIAL LOAD (SSR SAFE) */
  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;

    const initialTheme: Theme =
      saved === "light" || saved === "dark" || saved === "system"
        ? saved
        : "system";

    setThemeState(initialTheme);

    const final =
      initialTheme === "system" ? getSystemTheme() : initialTheme;

    setResolvedTheme(final);
  }, []);

  /* 🔥 SYSTEM THEME LISTENER */
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      if (theme === "system") {
        setResolvedTheme(media.matches ? "dark" : "light");
      }
    };

    handler();

    media.addEventListener?.("change", handler);
    media.addListener?.(handler); // fallback

    return () => {
      media.removeEventListener?.("change", handler);
      media.removeListener?.(handler);
    };
  }, [theme, mounted]);

  /* 🔥 APPLY THEME */
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const root = document.documentElement;

    const finalTheme =
      theme === "system" ? getSystemTheme() : theme;

    setResolvedTheme(finalTheme);

    // Apply classes
    root.classList.remove("light", "dark");
    root.classList.add(finalTheme);

    root.setAttribute("data-theme", finalTheme);

    // Save preference
    localStorage.setItem(STORAGE_KEY, theme);

    // 🔥 Smooth transition (no jank)
    root.style.transition = "background-color 0.25s ease, color 0.25s ease";

    return () => {
      root.style.transition = "";
    };
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      mounted,
    }),
    [theme, resolvedTheme, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/* 🔥 HOOK */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}