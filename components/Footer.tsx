"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-indigo-200 to-pink-200 animate-gradient opacity-90" />

      {/* 🔵 Glow Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-sky-400 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-pink-400 opacity-30 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-slate-900">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Image
              src="/vmerge.jpeg"
              alt="Vmerg"
              width={120}
              height={40}
              className="object-contain"
            />

            <p className="text-sm text-slate-700 leading-relaxed">
              Performance-driven influencer marketing platform helping brands
              scale through creators and data-backed campaigns.
            </p>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-slate-900">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-slate-700">
              {["About", "Services", "Work", "Creators"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-slate-900">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-700">

              <div className="flex items-center gap-3 hover:translate-x-1 transition">
                <Phone size={16} />
                <span>+91 86607 83740</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-1 transition">
                <Mail size={16} />
                <span>vmergmedia@gmail.com</span>
              </div>

              <div className="hover:translate-x-1 transition">
                Bengaluru, India
              </div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-slate-900">
              Follow Us
            </h4>

            <div className="flex gap-4">

              {[ 
                { icon: <Instagram size={18} />, link: "https://www.instagram.com/vmerg_/", color: "hover:bg-pink-500" },
                { icon: <Twitter size={18} />, link: "https://x.com/vmerg_", color: "hover:bg-black" },
                { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/vmerg/", color: "hover:bg-blue-600" },
                { icon: <Facebook size={18} />, link: "https://www.facebook.com/people/Vmerg/100075742935785/", color: "hover:bg-blue-500" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className={`p-3 rounded-xl bg-white/50 backdrop-blur-md transition transform hover:scale-110 hover:-translate-y-1 ${item.color} hover:text-white shadow-md`}
                >
                  {item.icon}
                </a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-700">

          <p className="text-center md:text-left">
            © 2026 Vmerg Media Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="relative group">
              Privacy Policy
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group">
              Terms
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
            </a>
          </div>

        </div>

      </div>

      {/* 🔥 Gradient Animation CSS */}
      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 10s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </footer>
  );
}