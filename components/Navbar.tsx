"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 160);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top alert bar */}
      <div className="bg-amber-500/10 border-b border-amber-400/30 text-[11px] md:text-xs text-amber-200 text-center py-1 backdrop-blur">
        Alert: Verify fake offers promising profits.
      </div>

      {/* Main navbar */}
      <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-semibold text-slate-50">
              yourBrand
            </span>
            <span className="text-emerald-400 text-lg">✔</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 items-center text-sm text-slate-200">
            {/* Dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 font-medium hover:text-emerald-300 transition">
                Influencer marketing
                <ChevronDown size={14} className="mt-[1px]" />
              </button>

              {/* Mega menu panel */}
              <MegaMenu open={open} />
            </div>

            <Link
              href="#tools"
              className="hover:text-emerald-300 transition cursor-pointer"
            >
              Tools
            </Link>

            <Link
              href="/work"
              className="hover:text-emerald-300 transition cursor-pointer"
            >
              Our work
            </Link>

            <Link
              href="/about"
              className="hover:text-emerald-300 transition cursor-pointer"
            >
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-emerald-400 text-slate-950 px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-300 hover:shadow-[0_0_26px_rgba(52,211,153,0.6)] transition"
          >
            Contact
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-100"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-400 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full bg-slate-950 text-slate-50">
          {/* top row */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
            <span className="text-lg font-semibold">yourBrand</span>
            <button
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* links */}
          <div className="flex flex-col px-8 py-8 space-y-7 text-base">
            {/* dropdown group */}
            <div>
              <button
                className="w-full flex justify-between items-center"
                onClick={() => setMobileDropdown((v) => !v)}
              >
                <span>Influencer marketing</span>
                <ChevronDown
                  className={`transition-transform ${
                    mobileDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-2 text-sm text-slate-400 ml-1">
                  <span>YouTube sprints</span>
                  <span>Instagram & reels</span>
                  <span>UGC content studio</span>
                  <span>Meme marketing pods</span>
                </div>
              </div>
            </div>

            <Link href="#tools" onClick={() => setMobileMenu(false)}>
              Tools
            </Link>

            <Link href="/work" onClick={() => setMobileMenu(false)}>
              Our work
            </Link>

            <Link href="/about" onClick={() => setMobileMenu(false)}>
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-6 bg-emerald-400 text-slate-950 py-3 rounded-full text-center text-sm font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
