"use client";

import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-slate-50/80 to-white backdrop-blur-xl text-slate-800 overflow-hidden shadow-2xl">
      {/* 🌈 SUBTLE AURORA (LIGHT VERSION) */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="aurora-bg w-full h-full opacity-30" 
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(6,78,124,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(34,197,94,0.15) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
            animation: 'auroraShift 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 🔝 TOP - Vmerg Branding */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-200/50">
          <div>
            <h3 className="text-4xl font-black bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              vmerg
            </h3>
            <p className="text-lg text-slate-700 max-w-lg leading-relaxed font-medium">
              End-to-End Influencer Marketing Solutions | Bangalore-based | 
              10+ Categories | 24/7 Support | CIN: U74999KA2021PTC153669
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+918660783740"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-xl hover:from-emerald-400 hover:to-cyan-400 hover:shadow-emerald-500/50 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              Contact Sales
            </a>
            <a 
              href="mailto:careers@vmerg.com?subject=Job%20Application"
              className="px-8 py-4 rounded-2xl border-2 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 font-semibold text-sm transition-all duration-300 shadow-lg"
            >
              Apply for Jobs
            </a>
          </div>
        </div>

        {/* 🧩 LINKS - Vmerg Structure */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 text-sm">
          
          {/* Services - 10+ Categories */}
          <div>
            <h4 className="font-bold text-xl mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              10+ Categories
            </h4>
            <ul className="space-y-3 text-slate-600">
              {["Beauty", "Gaming", "Finance", "Comedy", "Tech"].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-2 p-2 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 font-medium cursor-pointer transition-all duration-200"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-slate-900">Company</h4>
            <ul className="space-y-3 text-slate-600">
              {[
                "About Us", 
                "Blog", 
                "Careers", 
                "FAQ", 
                "Contact"
              ].map((item) => (
                <li
                  key={item}
                  className="group hover:text-emerald-600 cursor-pointer transition duration-200 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Real Vmerg Details */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-slate-900">Contact Us</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-emerald-500" />
                +91 86607 83740
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <a href="https://wa.me/916362621090" className="font-mono hover:text-emerald-600">916362621090</a>
              </li>
              <li className="flex items-center gap-2">
                ✉️ <a href="mailto:vinay@vmerg.com" className="hover:text-emerald-600 font-medium">vinay@vmerg.com</a>
              </li>
              <li><span className="font-mono text-xs">Bangalore, India</span></li>
            </ul>
          </div>

          {/* Social - Real Handles */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-slate-900">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: "https://www.instagram.com/vmerg_", icon: "📱", label: "Instagram" },
                { href: "https://twitter.com/vmerg_", icon: "🐦", label: "Twitter" },
                { href: "https://www.linkedin.com/company/vmerg", icon: "💼", label: "LinkedIn" },
                { href: "https://www.facebook.com/vmerg", icon: "📘", label: "Facebook" }
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-200 shadow-sm hover:scale-105 hover:shadow-emerald-500/25 hover:from-emerald-50 hover:to-cyan-50 hover:border-emerald-400 transition-all duration-300 font-semibold"
                  aria-label={label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ⚡ BOTTOM - Legal & Tagline */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-slate-200/50 pt-8 text-sm text-slate-500 bg-gradient-to-r from-white/50 to-slate-50/50 backdrop-blur-sm rounded-3xl p-6 -mx-6 -mb-6 mt-8">
          <div className="flex flex-wrap items-center gap-6 text-center lg:text-left">
            <p className="font-semibold text-slate-700">
              © 2026 Vmerg Media Private Limited. All rights reserved.
            </p>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-mono">
              CIN: U74999KA2021PTC153669
            </span>
          </div>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-end">
            <span className="hover:text-emerald-600 cursor-pointer transition font-medium">
              Privacy Policy
            </span>
            <span className="hover:text-emerald-600 cursor-pointer transition font-medium">
              Terms of Service
            </span>
            <blockquote className="italic text-emerald-600 font-semibold text-xs max-w-md hidden md:block">
              "Care for your product via a #share! Spike up the #likes!"
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes auroraShift {
          0% { transform: translateX(-20%) translateY(-20%) scale(1); }
          100% { transform: translateX(20%) translateY(20%) scale(1.1); }
        }
        .aurora-bg {
          filter: blur(120px);
        }
      `}</style>
    </footer>
  );
}