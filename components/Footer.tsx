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
    <footer className="relative mt-24 overflow-hidden">

      {/* 🔵 ANIMATED BG */}
      <div className="absolute inset-0 animate-footer-gradient"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-[#0b1a3a]">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 🔥 LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >

            {/* CUSTOM LOGO */}
            <div className="inline-block">
              <div className="h-[3px] w-20 bg-red-500 mb-1 rounded-full"></div>

              <div className="text-3xl font-bold tracking-wide text-[#1e3a8a]">
                vmerg
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              Performance-driven influencer marketing platform helping brands
              scale through creators and data-backed campaigns.
            </p>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-4 text-[#0b1a3a]">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-slate-700">
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
            <h4 className="font-semibold mb-4 text-[#0b1a3a]">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-700">

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400" />
                <span>+91 86607 83740</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400" />
                <span>vmergmedia@gmail.com</span>
              </div>

              <div>Bengaluru, India</div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-4 text-[#0b1a3a]">
              Follow Us
            </h4>

            <div className="flex gap-4">

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
                  className="p-3 rounded-xl bg-white shadow-md 
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
        <div className="mt-16 border-t border-blue-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-700">

          <p>
            © 2026 Vmerg Media Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">

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