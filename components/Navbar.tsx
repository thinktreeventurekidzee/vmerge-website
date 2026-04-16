"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },

      {
        name: "Services",
        href: "/services",
        dropdown: [
          {
            title: "Influencer Marketing",
            desc: "Find and partner with creators",
          },
          {
            title: "UGC Content Creation",
            desc: "Authentic content for ads",
          },
          {
            title: "On-Site Video Shoots",
            desc: "Professional shoots",
          },
          {
            title: "Social Media Management",
            desc: "Strategy & posting",
          },
          {
            title: "Website Development",
            desc: "High-converting websites",
          },
        ],
      },

      { name: "Work", href: "/work" },
      { name: "About", href: "/about" },
      { name: "Brands", href: "/brands" },
      { name: "Creators", href: "/creators" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router, navItems]);

  const isActive = (href: string) => {
    if (activeSection) return activeSection === href;
    return pathname === href;
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/95 shadow-sm"
            : "border-transparent bg-gradient-to-b from-white/90 to-white/60"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenu(false)}
            >
              <Image
                src="/vmerge.jpeg"
                alt="Vmerg"
                width={110}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">

                  {/* MAIN LINK */}
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className={`group relative py-2 text-sm font-semibold transition-all ${
                      isActive(item.href)
                        ? "text-indigo-600"
                        : "text-slate-900 hover:text-indigo-500"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-indigo-500 transition-all duration-300 ${
                        isActive(item.href)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* 🔥 SERVICES DROPDOWN */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full mt-4 w-[520px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

                      <div className="bg-white rounded-2xl shadow-xl p-5 border border-slate-200">

                        <div className="grid grid-cols-2 gap-4">

                          {item.dropdown.map((d, i) => (
                            <Link
                              key={i}
                              href="/services"
                              className="p-3 rounded-xl hover:bg-indigo-50 transition cursor-pointer"
                            >
                              <p className="font-semibold text-sm text-slate-900">
                                {d.title}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                {d.desc}
                              </p>
                            </Link>
                          ))}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* BUTTON */}
              <Link
                href="/contact"
                className="ml-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.05] hover:shadow-lg"
              >
                Get Strategy
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[70px] z-40 bg-white md:hidden">
          <div className="space-y-4 px-6 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`block text-lg font-semibold ${
                  isActive(item.href)
                    ? "text-indigo-600"
                    : "text-slate-900 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-6 block rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white"
            >
              Get Strategy →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}