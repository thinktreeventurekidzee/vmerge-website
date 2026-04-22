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
      <div className="absolute inset-0 animate-gradient-sync"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-[#0b1a3a]">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-center sm:text-left">

          {/* LOGO + INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start -mt-2"
          >

            {/* LOGO */}
            <div className="flex items-center justify-center sm:justify-start">
              <img
                src="/vmerg-logo.png"
                alt="vmerg logo"
                className="
                  h-[80px] sm:h-[90px]
                  w-auto object-contain
                  transition duration-300
                  hover:scale-105
                "
              />
            </div>

            {/* TAGLINE */}
            <p className="text-sm sm:text-base font-semibold text-slate-900 tracking-wide">
              End-to-end influencer marketing solutions
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-sm">
              Performance-driven influencer marketing platform helping brands
              scale through creators and data-backed campaigns.
            </p>

          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-4 text-[#0b1a3a] text-base">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-800">
              {["About", "Services", "Brands", "Creators"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-black transition"
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
            <h4 className="font-semibold mb-4 text-[#0b1a3a] text-base">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-800">

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={16} className="text-blue-700" />
                <span>+91 86607 83740</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Mail size={16} className="text-blue-700" />
                <span className="break-all">vmergmedia@gmail.com</span>
              </div>

              <div className="text-slate-700">
                Bengaluru, India
              </div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-4 text-[#0b1a3a] text-base">
              Follow Us
            </h4>

            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">

              {[
                { icon: <Instagram size={18} />, link: "https://www.instagram.com/vmerg_/" },
                { icon: <Twitter size={18} />, link: "https://x.com/vmerg_" },
                { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/vmerg/" },
                { icon: <Facebook size={18} />, link: "https://www.facebook.com/people/Vmerg/100075742935785/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-xl bg-white shadow-md
                    hover:bg-blue-600 hover:text-white
                    transition duration-300
                    hover:scale-110
                    hover:shadow-lg
                  "
                >
                  {item.icon}
                </a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-blue-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-700 text-center md:text-left">

          <p>
            © 2026 Vmerg Media Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy-policy" className="hover:text-blue-700 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-blue-700 transition">
              Terms
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}