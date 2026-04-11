"use client";

import Image from "next/image";
import { Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <>
      {/* RAIN EFFECT */}
      <style jsx global>{`
        .footer-rain {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 70% 60%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 90% 20%, rgba(255,255,255,0.5), transparent);
          background-size: 300px 200px;
          animation: rainMove 6s linear infinite;
        }

        @keyframes rainMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 200px; }
        }
      `}</style>

      <footer className="relative mt-20 overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/Footer-1.jpeg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-[2px]" />

        {/* Rain */}
        <div className="absolute inset-0 opacity-40">
          <div className="footer-rain" />
        </div>

        {/* CONTENT */}
        <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 text-white transition ${isVisible ? "opacity-100" : "opacity-0"}`}>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-6">

              {/* LOGO */}
              <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-blue-300/30 shadow-[0_12px_35px_rgba(59,130,246,0.35)] backdrop-blur-xl hover:scale-105 transition-all duration-300">
                <Image 
                  src="/vmerge.jpeg" 
                  alt="Vmerg" 
                  width={110} 
                  height={40} 
                  className="object-contain"
                />
              </div>

              <p className="text-slate-200 max-w-md leading-relaxed">
                Scale your brand with performance-driven influencer campaigns.
                From creator discovery to execution, we manage everything end-to-end.
              </p>

              {/* CTA */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:+918660783740"
                  className="px-5 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
                >
                  Contact Sales
                </a>

                <a
                  href="https://wa.me/918660783740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-10">

              <div>
                <h4 className="text-lg mb-4">Quick Links</h4>
                <ul className="space-y-3 text-slate-300">
                  {["About","Services","Work","Brands","Creators"].map((item)=>(
                    <li key={item}>
                      <a href={`/${item.toLowerCase()}`} className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg mb-4">Contact</h4>

                <div className="space-y-4 text-slate-300">

                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>+91 86607 83740</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>vmergmedia@gmail.com</span>
                  </div>

                  <div>Bengaluru, India</div>

                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-16 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-slate-400 text-sm">
              © 2026 Vmerg Media Pvt Ltd. All rights reserved.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">

              <a href="https://www.instagram.com/vmerg_/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-pink-500 hover:scale-110 transition">
                <Instagram size={18} />
              </a>

              <a href="https://x.com/vmerg_" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-black hover:scale-110 transition">
                <Twitter size={18} />
              </a>

              <a href="https://www.linkedin.com/company/vmerg/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 hover:scale-110 transition">
                <Linkedin size={18} />
              </a>

              <a href="https://www.facebook.com/people/Vmerg/100075742935785/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-500 hover:scale-110 transition">
                <Facebook size={18} />
              </a>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
}