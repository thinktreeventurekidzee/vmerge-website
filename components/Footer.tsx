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
  Globe,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Creators", href: "/creators" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/vmerg_/",
  },
  {
    label: "Twitter",
    icon: <Twitter size={18} />,
    link: "https://x.com/vmerg_",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
    link: "https://www.linkedin.com/company/vmerg/",
  },
  {
    label: "Facebook",
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/people/Vmerg/100075742935785/",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden sm:mt-24">
      <div className="absolute inset-0 animate-gradient-sync" />
      <div className="absolute inset-0 glass-sync sync-shadow-bottom" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 text-[#0b1a3a] sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:gap-12 sm:text-left lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-3 sm:items-start sm:space-y-4"
          >
            <div className="flex items-center justify-center sm:justify-start">
              <img
                src="/vmerg-logo.png"
                alt="Vmerg logo"
                className="h-[72px] w-auto object-contain transition duration-300 hover:scale-105 sm:h-[86px]"
              />
            </div>

            <p className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
              End-To-End Influencer Marketing Solutions
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-slate-800 sm:text-base">
              Performance-Driven Influencer Marketing Platform Helping Brands
              Grow Through Creators, Strategy, And Data-Backed Campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h4 className="mb-4 text-base font-semibold text-[#0b1a3a]">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-800 sm:text-[15px]">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block transition hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-base font-semibold text-[#0b1a3a]">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-800 sm:text-[15px]">
              <a
                href="https://wa.me/918660783740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 transition hover:text-blue-700 sm:justify-start"
              >
                <Phone size={16} className="shrink-0 text-blue-700" />
                <span>+91 86607 83740</span>
              </a>

              <a
                href="mailto:vinay@vmerg.com"
                className="flex items-center justify-center gap-3 transition hover:text-blue-700 sm:justify-start"
              >
                <Mail size={16} className="shrink-0 text-blue-700" />
                <span className="break-all">vinay@vmerg.com</span>
              </a>

              <a
                href="https://vmerg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 transition hover:text-blue-700 sm:justify-start"
              >
                <Globe size={16} className="shrink-0 text-blue-700" />
                <span className="break-all">www.vmerg.com</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-slate-700 sm:justify-start">
                <MapPin size={16} className="shrink-0 text-blue-700" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="mb-4 text-base font-semibold text-[#0b1a3a]">
              Follow Us
            </h4>

            <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/55 bg-white/65 shadow-md transition duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-6 text-center text-sm text-slate-700 md:mt-14 md:flex-row md:text-left">
          <p>© 2026 Vmerg Media Pvt Ltd. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-end">
            <Link
              href="/privacy-policy"
              className="transition hover:text-blue-700"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-blue-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}