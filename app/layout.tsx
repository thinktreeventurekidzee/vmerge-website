import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">

        {/* Navbar (Global) */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer (Global) */}
        <Footer />

      </body>
    </html>
  );
}