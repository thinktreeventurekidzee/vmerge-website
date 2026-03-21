"use client";

import { useTheme } from "../app/context/ThemeContext";
import clsx from "clsx";
import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const { theme } = useTheme();

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

      {/* Navbar */}
      <nav
        className={clsx(
          "transition-all duration-500 backdrop-blur-md border-b",

          // 🌿 Soothing (dark elegant)
          theme === "soothing" &&
            "bg-slate-900/70 border-slate-800 text-slate-100",

          // 🌸 Flower (light pink premium)
          theme === "flower" &&
            "bg-rose-200/80 border-rose-300 text-slate-900",

          // ⚡ Neon (light cyan modern)
          theme === "neon" &&
            "bg-cyan-200/80 border-cyan-300 text-slate-900"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3.5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span
              className={clsx(
                "text-xl md:text-2xl font-semibold",
                theme === "soothing" ? "text-white" : "text-slate-900"
              )}
            >
              yourBrand
            </span>
            <span className="text-emerald-400 text-lg">✔</span>
          </Link>

          {/* Desktop menu */}
          <div
            className={clsx(
              "hidden md:flex gap-6 items-center text-sm",
              theme === "soothing" ? "text-slate-200" : "text-slate-800"
            )}
          >
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 font-medium hover:opacity-80 transition">
                Influencer marketing
                <ChevronDown size={14} />
              </button>

              <MegaMenu open={open} />
            </div>

            <Link href="#tools" className="hover:opacity-80 transition">
              Tools
            </Link>

            <Link href="/work" className="hover:opacity-80 transition">
              Our work
            </Link>

            <Link href="/about" className="hover:opacity-80 transition">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={clsx(
              "hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium transition",

              theme === "soothing" &&
                "bg-emerald-400 text-slate-950 hover:bg-emerald-300",

              theme === "flower" &&
                "bg-rose-500 text-white hover:bg-rose-400",

              theme === "neon" &&
                "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
            )}
          >
            Contact
          </Link>

          {/* Mobile menu button */}
          <button
            className={clsx(
              "md:hidden",
              theme === "soothing" ? "text-white" : "text-slate-900"
            )}
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-400 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full bg-slate-950 text-slate-50">

          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
            <span className="text-lg font-semibold">yourBrand</span>
            <button onClick={() => setMobileMenu(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col px-8 py-8 space-y-7 text-base">
            <Link href="#tools">Tools</Link>
            <Link href="/work">Our work</Link>
            <Link href="/about">About</Link>

            <Link
              href="/contact"
              className="mt-6 bg-emerald-400 text-slate-950 py-3 rounded-full text-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}