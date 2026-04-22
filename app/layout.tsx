import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline"; // ✅ ADD THIS

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vmerg - Influencer Marketing Platform",
    template: "%s | Vmerg",
  },
  description:
    "Turn creator partnerships into measurable brand growth.",
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
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">

        <ThemeProvider>

          {/* ✅ TIMELINE ADD HERE */}
          <ScrollTimeline />

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN */}
          <main className="flex-1 pt-[72px] md:pt-[88px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}