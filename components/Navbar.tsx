"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Video,
  Globe,
  Users,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => (
  <img
    src="/vmerg-logo.png"
    alt="vmerg logo"
    className="h-[52px] sm:h-[62px] md:h-[70px] lg:h-[78px]"
  />
);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      {
        name: "Services",
        href: "/services",
        dropdown: [
          { title: "Influencer Marketing", desc: "Find creators", icon: Megaphone },
          { title: "UGC Content", desc: "Authentic ads", icon: Video },
          { title: "Video Shoots", desc: "Professional shoots", icon: Video },
          { title: "Social Media", desc: "Growth strategy", icon: Users },
          { title: "Website Development ", desc: "High converting sites", icon: Globe },
        ],
      },
      { name: "Brands", href: "/brands" },
      { name: "Creators", href: "/creators" },
      { name: "Contact", href: "/contact" },
      { name: "About Us", href: "/about" },
    ],
    []
  );

  useEffect(() => {
    navItems.forEach((item) => router.prefetch(item.href));
  }, [router, navItems]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  useEffect(() => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
    setDesktopHover(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* 🔥 SYNCED NAVBAR */}
      <nav className="relative overflow-visible border-b border-white/30">

        {/* gradient (same as footer) */}
        <div className="absolute inset-0 animate-gradient-sync" />

        {/* glass layer */}
        <div className="absolute inset-0 glass-sync sync-shadow-top" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto flex h-[72px] items-center justify-between px-4 sm:h-[80px] lg:h-[88px]">

          <Link href="/">
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDesktopHover(item.name)}
                onMouseLeave={() => setDesktopHover(null)}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-1 text-[15px] transition-all duration-300
                    ${
                      isActive(item.href)
                        ? "text-blue-900 font-semibold"
                        : "text-black/80 hover:text-black hover:font-semibold"
                    }
                  `}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition ${
                        desktopHover === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* DROPDOWN */}
                {item.dropdown && pathname !== "/services" && (
                  <div
                    className={`absolute left-1/2 top-full z-[999]
                      -translate-x-1/2 mt-5 w-[320px]
                      transition-all duration-300 ease-out
                      ${
                        desktopHover === item.name
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                      }
                    `}
                  >
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-indigo-500/30 blur-xl" />

                    <div className="relative rounded-2xl border border-white/40 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-3">

                      {item.dropdown.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <Link
                            key={i}
                            href="/services"
                            className="group flex gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:scale-[1.03]"
                          >
                            <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-white">
                              <Icon size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold">{d.title}</p>
                              <p className="text-xs opacity-70 group-hover:opacity-100">
                                {d.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 rounded-xl bg-gradient-to-r from-black to-slate-800 px-4 py-2 text-white shadow-lg hover:scale-105 transition"
            >
              Get Strategy
            </Link>
          </div>

          {/* MOBILE BTN */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50
        bg-[linear-gradient(180deg,#6ca4ec,#8abdf0)]
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${mobileMenu ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/30">
          <Logo />
          <button onClick={() => setMobileMenu(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="p-5 space-y-4">

          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.name} className="bg-white/60 rounded-xl backdrop-blur-md">

                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between p-4 font-semibold"
                  >
                    {item.name}
                    <ChevronDown className={`${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="px-4 pb-4 space-y-2">
                      {item.dropdown.map((d, i) => (
                        <Link
                          key={i}
                          href="/services"
                          onClick={() => setMobileMenu(false)}
                          className="block bg-white/80 p-3 rounded-lg"
                        >
                          <p className="text-sm font-semibold">{d.title}</p>
                          <p className="text-xs">{d.desc}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block bg-white/70 p-4 rounded-xl font-semibold"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}