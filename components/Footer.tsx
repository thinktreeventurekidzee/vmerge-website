"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-24 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 animate-footer-gradient"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-[#0b1a3a]">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-center sm:text-left">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start"
          >

            <div className="inline-block">
              <div className="h-[3px] w-16 sm:w-20 bg-red-500 mb-1 rounded-full"></div>
              <div className="text-2xl sm:text-3xl font-bold tracking-wide text-[#1e3a8a]">
                vmerg
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xs">
              Performance-driven influencer marketing platform helping brands
              scale through creators and data-backed campaigns.
            </p>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-[#0b1a3a]">
              Company
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {["About", "Services", "Work", "Creators"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-yellow-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-[#0b1a3a]">
              Contact
            </h4>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700">

              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Phone size={14} className="text-yellow-400" />
                <span>+91 86607 83740</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Mail size={14} className="text-yellow-400" />
                <span className="break-all">vmergmedia@gmail.com</span>
              </div>

              <div>Bengaluru, India</div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-[#0b1a3a]">
              Follow Us
            </h4>

            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap">

              {[ 
                { icon: <Instagram size={16} />, link: "https://www.instagram.com/vmerg_/" },
                { icon: <Twitter size={16} />, link: "https://x.com/vmerg_" },
                { icon: <Linkedin size={16} />, link: "https://www.linkedin.com/company/vmerg/" },
                { icon: <Facebook size={16} />, link: "https://www.facebook.com/people/Vmerg/100075742935785/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white shadow-md 
                  hover:bg-yellow-400 hover:text-black 
                  transition hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 sm:mt-16 border-t border-blue-200 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700 text-center md:text-left">

          <p>
            © 2026 Vmerg Media Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">

            <Link href="/privacy-policy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-400 transition">
              Terms
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}