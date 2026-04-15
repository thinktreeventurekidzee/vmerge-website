import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vmerg - Influencer Marketing Platform",
    template: "%s | Vmerg",
  },
  description:
    "Turn creator partnerships into measurable brand growth. Scale influencer campaigns with verified creators and data-driven strategies.",
  keywords: [
    "influencer marketing",
    "creator partnerships",
    "brand campaigns",
    "influencer strategy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-[100dvh] bg-slate-50 text-slate-900 antialiased font-[var(--font-inter)]">
        <ThemeProvider>

          {/* 🔥 GLOBAL NAVBAR */}
          <Navbar />

          {/* 🔥 MAIN CONTENT */}
          <main className="pt-[72px] md:pt-[88px]">
            <div className="max-w-7xl mx-auto px-6">
              {children}
            </div>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}