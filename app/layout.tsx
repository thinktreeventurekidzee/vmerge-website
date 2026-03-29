import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            {/* GLOBAL BACKGROUND */}
            <div className="fixed inset-0 -z-10">
              <div className="aurora-bg h-full w-full opacity-30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_30%)]" />
            </div>

            {/* GLOBAL NAVBAR */}
            <Navbar />

            {/* MAIN CONTENT */}
            <main className="pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}