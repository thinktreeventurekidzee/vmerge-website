"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

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

      {/* TOP ALERT */}
      <div className="bg-cyan-50 border-b border-cyan-200 text-[11px] md:text-xs text-cyan-700 text-center py-1">
        ⚠️ Work only with verified influencer partners.
      </div>

      {/* NAVBAR */}
      <nav className={`transition-all duration-300 backdrop-blur-lg border-b ${
        scrolled ? "bg-white/90 shadow-md border-slate-200" : "bg-white/70 border-slate-100"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-slate-900">Vmerg</span>
            <span className="text-cyan-500 text-lg">✔</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center text-sm text-slate-700">

            {/* 🔥 MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setOpenDesktop(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setOpenDesktop(false);
                }, 200);
              }}
            >
              <button className="flex items-center gap-1 font-medium hover:text-cyan-600 transition">
                Services
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {openDesktop && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-[480px] bg-white border border-slate-200 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 z-50"
                  >

                    {/* TITLE */}
                    <p className="col-span-2 text-xs uppercase tracking-widest text-cyan-500 font-semibold">
                      Our Services
                    </p>

                    {/* CARDS */}
                    {[
                      {
                        title: "Influencer Discovery",
                        desc: "Find creators using smart filters and audience insights"
                      },
                      {
                        title: "Campaign Strategy",
                        desc: "Data-driven planning tailored to your brand goals"
                      },
                      {
                        title: "Campaign Execution",
                        desc: "End-to-end campaign management and delivery"
                      },
                      {
                        title: "UGC Content",
                        desc: "High-converting user-generated content for ads"
                      },
                      {
                        title: "Multi-lingual Campaigns",
                        desc: "Reach regional audiences across India effectively"
                      },
                      {
                        title: "Performance Tracking",
                        desc: "Track ROI, engagement and optimize campaigns"
                      }
                    ].map((item, i) => (
                      <Link href="#services" key={i}>
                        <div className="p-3 rounded-xl hover:bg-slate-100 hover:scale-[1.02] transition cursor-pointer">
                          <p className="font-semibold text-slate-800">{item.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                        </div>
                      </Link>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/work" className="hover:text-cyan-600 transition">
              Case Studies
            </Link>

            <Link href="/about" className="hover:text-cyan-600 transition">
              About
            </Link>

            <Link href="#process" className="hover:text-cyan-600 transition">
              Process
            </Link>
          </div>

          {/* CTA */}
          <Link href="#lead-form" className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow hover:scale-105 transition">
            Get Strategy 🚀
          </Link>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenu(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
        mobileMenu ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="h-full w-full bg-white text-slate-900">

          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
            <span className="text-lg font-semibold">Vmerg</span>
            <button onClick={() => setMobileMenu(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col px-8 py-8 space-y-6 text-base">

            <div>
              <button onClick={() => setOpenMobile(!openMobile)} className="flex items-center gap-1 font-medium">
                Services
                <ChevronDown size={14} />
              </button>

              {openMobile && (
                <div className="mt-3 space-y-2">
                  {["Influencer Discovery","Campaign Strategy","Campaign Execution","UGC Content","Multi-lingual Campaigns"].map((item, i) => (
                    <Link key={i} href="#services" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/work" onClick={() => setMobileMenu(false)}>Case Studies</Link>
            <Link href="/about" onClick={() => setMobileMenu(false)}>About</Link>
            <Link href="#process" onClick={() => setMobileMenu(false)}>Process</Link>

            <Link href="#lead-form" onClick={() => setMobileMenu(false)} className="mt-6 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-3 rounded-full text-center">
              Get Strategy 🚀
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}