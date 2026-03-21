import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">

        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}