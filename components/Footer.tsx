"use client";

import Image from "next/image";
import { Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">

      {/* 🔥 GRADIENT BG (WIX STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7aa7d9] via-[#a9c7d0] to-[#b8d8b8]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-slate-900">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
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
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a href="/about" className="hover:text-black">About</a></li>
              <li><a href="/services" className="hover:text-black">Services</a></li>
              <li><a href="/work" className="hover:text-black">Work</a></li>
              <li><a href="/creators" className="hover:text-black">Creators</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Contact</h4>

            <div className="space-y-3 text-sm text-slate-700">

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 86607 83740</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>vmergmedia@gmail.com</span>
              </div>

              <div>Bengaluru, India</div>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Follow Us</h4>

            <div className="flex gap-3">

              <a href="https://www.instagram.com/vmerg_/" target="_blank"
                className="p-2 rounded-lg bg-white/40 hover:bg-pink-500 hover:text-white transition">
                <Instagram size={18} />
              </a>

              <a href="https://x.com/vmerg_" target="_blank"
                className="p-2 rounded-lg bg-white/40 hover:bg-black hover:text-white transition">
                <Twitter size={18} />
              </a>

              <a href="https://www.linkedin.com/company/vmerg/" target="_blank"
                className="p-2 rounded-lg bg-white/40 hover:bg-blue-600 hover:text-white transition">
                <Linkedin size={18} />
              </a>

              <a href="https://www.facebook.com/people/Vmerg/100075742935785/" target="_blank"
                className="p-2 rounded-lg bg-white/40 hover:bg-blue-500 hover:text-white transition">
                <Facebook size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-700">

          <p>© 2026 Vmerg Media Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}