import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        pop: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        primary: "#0f172a", // slate-900
        accent: "#6366f1",  // indigo-500
      },
    },
  },
  plugins: [],
};

export default config;