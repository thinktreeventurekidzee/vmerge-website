"use client";

import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 px-4">

      {/* 🌈 FLOATING BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 via-indigo-200/20 to-purple-200/30 blur-3xl animate-pulse" />
      </div>

      {/* 💎 FLOATING CARD */}
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl px-6 py-16 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)]">

        {/* 🔝 TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-200">
          
          <div>
            <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-4">
              Vmerg
            </h3>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              End-to-End Influencer Marketing Solutions | Bangalore | 10+ Categories | 24/7 Support
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+918660783740"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md hover:scale-105 transition"
            >
              Contact Sales
            </a>

            <a 
              href="mailto:careers@vmerg.com"
              className="px-8 py-3 rounded-xl border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 transition"
            >
              Apply for Jobs
            </a>
          </div>

        </div>

        {/* 🧩 LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 text-sm">

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">
              Categories
            </h4>

            <ul className="space-y-3 text-slate-600">
              {["Beauty", "Gaming", "Finance", "Comedy", "Tech"].map((item) => (
                <li key={item} className="hover:text-cyan-600 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">
              Company
            </h4>

            <ul className="space-y-3 text-slate-600">
              {["About", "Blog", "Careers", "FAQ", "Contact"].map((item) => (
                <li key={item} className="hover:text-cyan-600 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-600">

              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-500" />
                +91 86607 83740
              </li>

              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-green-500" />
                <a href="https://wa.me/916362621090" className="hover:text-green-600">
                  WhatsApp
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-500" />
                <a href="mailto:vinay@vmerg.com" className="hover:text-indigo-600">
                  vinay@vmerg.com
                </a>
              </li>

              <li className="text-xs text-slate-500">
                Bangalore, India
              </li>

            </ul>
          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">
              Connect
            </h4>

            <div className="grid grid-cols-2 gap-3">

              {[
                { href: "https://www.instagram.com/vmerg_", icon: Instagram },
                { href: "https://twitter.com/vmerg_", icon: Twitter },
                { href: "https://www.linkedin.com/company/vmerg", icon: Linkedin },
                { href: "https://www.facebook.com/vmerg", icon: Facebook },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm hover:scale-105 hover:border-cyan-400 hover:bg-cyan-50 transition"
                >
                  <Icon className="w-5 h-5 text-slate-600 hover:text-cyan-600" />
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* ⚡ BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
          
          <p>© 2026 Vmerg Media Private Limited</p>

          <div className="flex gap-6">
            <span className="hover:text-cyan-600 cursor-pointer">Privacy</span>
            <span className="hover:text-cyan-600 cursor-pointer">Terms</span>
          </div>

        </div>

      </div>

      {/* 🌈 AURORA ANIMATION */}
      <style jsx>{`
        .aurora-bg {
          filter: blur(120px);
        }
      `}</style>

    </footer>
  );
}