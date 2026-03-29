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
      <body className="bg-white text-slate-900 antialiased">
        <ThemeProvider>
          
          {/* ✅ GLOBAL NAVBAR */}
          <Navbar />

          {/* ✅ MAIN CONTENT (prevents overlap with fixed navbar) */}
          <main className="pt-20">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}