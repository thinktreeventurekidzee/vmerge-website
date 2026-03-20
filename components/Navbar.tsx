"use client";

import { useState, useRef } from "react";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const timeoutRef = useRef(null);

  // Hover handlers
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b">
      
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm text-center py-1">
        Alert: Verify fake offers promising profits.
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">
          yourBrand<span className="text-blue-600">✔</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer font-medium hover:text-blue-600">
              Influencer Marketing <ChevronDown size={16} />
            </div>

            <MegaMenu open={open} />
          </div>

          <div className="hover:text-blue-600 cursor-pointer">Tools</div>
          <div className="hover:text-blue-600 cursor-pointer">Our Work</div>

          {/* ✅ About Link */}
          <Link href="/about">
            <div className="hover:text-blue-600 cursor-pointer">
              About
            </div>
          </Link>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
          Contact
        </button>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={28} />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-screen w-full z-50 transform transition-transform duration-500 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

          {/* Top */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
            <h1 className="text-xl font-semibold">yourBrand</h1>
            <X onClick={() => setMobileMenu(false)} className="cursor-pointer" />
          </div>

          {/* Menu */}
          <div className="flex flex-col px-8 py-10 space-y-8 text-lg">

            {/* Dropdown */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                <span>Influencer Marketing</span>
                <ChevronDown
                  className={`transition-transform ${
                    mobileDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-2 text-gray-400 ml-2">
                  <span>YouTube</span>
                  <span>Instagram</span>
                  <span>UGC Videos</span>
                  <span>Meme Marketing</span>
                </div>
              </div>
            </div>

            <div>Tools</div>
            <div>Our Work</div>

            {/* ✅ About Link (Mobile) */}
            <Link href="/about">
              <div className="cursor-pointer hover:text-white">
                About
              </div>
            </Link>

            {/* CTA */}
            <button className="mt-10 bg-white text-black py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}