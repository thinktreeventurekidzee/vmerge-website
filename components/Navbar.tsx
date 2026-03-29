"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* 🔝 TOP ALERT */}
      <div className="bg-cyan-50 border-b border-cyan-200 text-xs text-cyan-700 text-center py-1">
        ⚠️ Work only with verified influencer partners.
      </div>

      {/* 🔥 NAVBAR */}
      <nav
        className={`transition-all duration-300 backdrop-blur-lg border-b ${
          scrolled
            ? "bg-white/95 shadow-md border-slate-200"
            : "bg-white/80 border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* ✅ LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Vmerg
            </span>
            <span className="text-cyan-500 text-lg">✔</span>
          </Link>

          {/* ✅ DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-900">

            {/* HOME */}
            <Link href="/" className="flex items-center gap-1 hover:text-cyan-600 transition">
              <Home size={18} />
              <span>Home</span>
            </Link>

            {/* 🔥 SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setOpenDesktop(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setOpenDesktop(false);
                }, 150);
              }}
            >
              <button className="flex items-center gap-1 hover:text-cyan-600 transition">
                Services <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {openDesktop && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-[480px] bg-white border border-slate-200 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 z-50"
                  >
                    <p className="col-span-2 text-xs uppercase tracking-widest text-cyan-500 font-semibold">
                      Our Services
                    </p>

                    {[
                      "Influencer Discovery",
                      "Campaign Strategy",
                      "Campaign Execution",
                      "UGC Content",
                      "Multi-lingual Campaigns",
                      "Performance Tracking",
                    ].map((item, i) => (
                      <Link href="#services" key={i}>
                        <div className="p-3 rounded-xl hover:bg-slate-100 transition cursor-pointer">
                          <p className="font-semibold text-slate-800">
                            {item}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NORMAL LINKS */}
            <Link href="/work" className="hover:text-cyan-600 transition">
              Case Studies
            </Link>

            <Link href="/about" className="hover:text-cyan-600 transition">
              About
            </Link>

            <Link href="#process" className="hover:text-cyan-600 transition">
              Process
            </Link>

            {/* 🔥 MAIN CTA LINKS (FIXED VISIBILITY) */}
            <Link
              href="/brands"
              className="px-4 py-2 rounded-full font-semibold text-slate-900 bg-white border border-slate-200 shadow-sm hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-all duration-300"
            >
              For Brands
            </Link>

            <Link
              href="/creators"
              className="px-4 py-2 rounded-full font-semibold text-slate-900 bg-white border border-slate-200 shadow-sm hover:bg-indigo-500 hover:text-white hover:shadow-lg transition-all duration-300"
            >
              For Creators
            </Link>

            {/* 🔥 FINAL CTA */}
            <Link
              href="#lead-form"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow hover:scale-105 transition"
            >
              Get Strategy 🚀
            </Link>
          </div>

          {/* 📱 MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMobileMenu(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full bg-white text-slate-900">

          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="text-lg font-semibold">Vmerg</span>
            <button onClick={() => setMobileMenu(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col px-8 py-8 space-y-6">

            <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>
            <Link href="/brands" onClick={() => setMobileMenu(false)}>For Brands</Link>
            <Link href="/creators" onClick={() => setMobileMenu(false)}>For Creators</Link>

            <Link href="/work" onClick={() => setMobileMenu(false)}>Case Studies</Link>
            <Link href="/about" onClick={() => setMobileMenu(false)}>About</Link>

            <Link
              href="#lead-form"
              onClick={() => setMobileMenu(false)}
              className="mt-6 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-3 rounded-full text-center"
            >
              Get Strategy 🚀
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}