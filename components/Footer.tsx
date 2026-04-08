"use client";

import Image from "next/image";
import { Phone, MessageCircle, Mail, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;600;700;800;900&display=swap');
        
        .footer-gradient-shift {
          animation: gradientShift 8s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg) brightness(1); }
          50% { filter: hue-rotate(10deg) brightness(1.1); }
        }
        
        .footer-neon-glow {
          background: radial-gradient(circle at 20% 80%, rgba(99,102,241,0.3), transparent 50%);
          animation: neonPulse 3s ease-in-out infinite;
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .footer-rain {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(160,196,255,0.8), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(95,165,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 30px, rgba(160,196,255,0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(95,165,255,0.8), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(160,196,255,0.8), transparent);
          background-size: 200px 120px;
          animation: rain 0.4s linear infinite;
        }
        @keyframes rain {
          from { background-position: 0 0; }
          to { background-position: 0 120px; }
        }
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-pop { font-family: 'Poppins', sans-serif; font-weight: 800; }
      `}</style>

      <footer className="relative mt-20 border-t border-slate-200/50 overflow-hidden">
        {/* BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90 footer-gradient-shift"
          style={{ backgroundImage: "url('/Footer-1.jpeg')" }}
        />
        
        {/* OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
        
        {/* GLOW */}
        <div className="absolute inset-0 z-[2] footer-neon-glow" />
        
        {/* RAIN */}
        <div className="absolute inset-0 z-[3] overflow-hidden">
          <div className="footer-rain" />
        </div>
        
        {/* SPINNER */}
        <div className="absolute top-4 right-4 z-[20] w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />

        {/* CONTENT */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <div className="group bg-white/70 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/90 hover:shadow-3xl hover:scale-105 hover:rotate-[-3deg] transition-all duration-500">
                    <Image src="/vmerge.jpeg" alt="Vmerg" width={110} height={40} />
                  </div>
                </div>
                <p className="font-inter text-slate-800 max-w-md mx-auto lg:mx-0 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-xl font-medium text-lg">
                  Scale your brand with performance-driven influencer campaigns. We handle creator discovery, execution and optimization. 🚀
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a href="tel:+918660783740" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 rounded-2xl hover:from-indigo-600 hover:to-purple-600 shadow-2xl hover:shadow-3xl hover:scale-105 hover:rotate-[1deg] transition-all duration-300 font-semibold backdrop-blur-md border border-slate-200/20 animate-pulse">
                    <Phone size={18} /> Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://wa.me/918660783740" target="_blank" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 text-emerald-800 px-6 py-4 rounded-2xl border-2 border-emerald-200/50 hover:bg-emerald-400/40 hover:border-emerald-300 hover:scale-105 hover:shadow-emerald-500/25 shadow-lg transition-all duration-300 font-semibold backdrop-blur-md">
                    <MessageCircle size={18} /> WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center lg:text-left">
                <div>
                  <h4 className="font-pop mb-6 text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quick Links</h4>
                  <ul className="space-y-3 text-sm">
                    {["About","Services","Work","Brands","Creators"].map((item,i)=>(
                      <li key={i} className="group">
                        <a href={`/${item.toLowerCase()}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105 px-2 py-1 rounded-lg backdrop-blur-sm bg-white/50 hover:shadow-md">
                          {item} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-pop mb-6 text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="group flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl backdrop-blur-md bg-white/40 hover:bg-white/70 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:animate-bounce"><Phone size={18} className="text-white" /></div>
                      <a href="tel:+918660783740" className="font-semibold text-slate-800 hover:text-indigo-600">+91 86607 83740</a>
                    </li>
                    <li className="group flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl backdrop-blur-md bg-white/40 hover:bg-white/70 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"><Mail size={18} className="text-white" /></div>
                      <a href="mailto:vmergmedia@gmail.com" className="font-semibold text-slate-800 hover:text-indigo-600">vmergmedia@gmail.com</a>
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3 p-3 text-slate-700 font-semibold backdrop-blur-md bg-white/60 rounded-xl shadow-sm">📍 Vmerg Media Pvt Ltd, Bengaluru, India</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/20 grid gap-10 md:grid-cols-3 text-center md:text-left">
              <div className="space-y-4">
                <h4 className="font-pop text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Categories</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                  {["Beauty","Tech","Finance","Gaming","Lifestyle"].map(c=>(
                    <span key={c} className="group px-4 py-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 border border-indigo-200/40 rounded-full text-indigo-800 font-semibold hover:from-indigo-500/40 hover:to-purple-500/40 hover:border-indigo-300 hover:scale-110 hover:shadow-lg transition-all duration-300 backdrop-blur-md">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-pop text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Follow Us</h4>
                <div className="flex justify-center md:justify-start gap-4">
                  {[
                    {href:"https://www.instagram.com/vmerg_/",icon:Instagram,color:"from-pink-500 via-red-400 to-yellow-400"},
                    {href:"https://x.com/vmerg_",icon:Twitter,color:"from-slate-800 via-blue-500 to-black"},
                    {href:"https://www.linkedin.com/company/vmerg/",icon:Linkedin,color:"from-blue-400 via-blue-500 to-blue-700"},
                    {href:"#",icon:Facebook,color:"from-blue-500 via-blue-600 to-indigo-600"}
                  ].map(({href,icon:Icon,color},i)=>(
                    <a key={i} href={href} target="_blank" className="group relative">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-2xl hover:shadow-3xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse backdrop-blur-xl border-2 border-white/20 hover:border-white/40`}>
                        <Icon size={20} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="group bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-emerald-500/20 backdrop-blur-xl p-6 rounded-2xl border border-emerald-200/40 shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 hover:rotate-1 transition-all duration-500">
                <h4 className="font-pop text-lg bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-3">Quick Campaign Setup</h4>
                <p className="text-emerald-900/90 text-sm mb-4 font-medium">Start your campaign planning instantly.</p>
                <a href="https://wa.me/918660783740" target="_blank" className="inline-flex items-center gap-2 text-emerald-800 font-black text-lg group-hover:text-emerald-700 transition-colors hover:translate-x-2">
                  Start Now → <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between text-sm text-slate-700/80 gap-4 backdrop-blur-md bg-white/30 rounded-xl px-6 py-4 shadow-lg">
              <p className="font-inter font-bold animate-pulse">© 2026 Vmerg Media Pvt Ltd. All rights powered. ⚡</p>
              <div className="flex gap-6">
                <a href="#" className="group hover:text-indigo-600 font-semibold transition-all hover:underline underline-offset-4 hover:scale-105">Privacy</a>
                <a href="#" className="group hover:text-indigo-600 font-semibold transition-all hover:underline underline-offset-4 hover:scale-105">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}