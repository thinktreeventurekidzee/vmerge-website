"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      {
        name: "Services",
        href: "/services",
        dropdown: [
          { title: "Influencer Marketing", desc: "Find and partner with creators" },
          { title: "UGC Content Creation", desc: "Authentic content for ads" },
          { title: "On-Site Video Shoots", desc: "Professional shoots" },
          { title: "Social Media Management", desc: "Strategy & posting" },
          { title: "Website Development", desc: "High-converting websites" },
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
    navItems.forEach((item) => router.prefetch(item.href));
  }, [router, navItems]);

  // 🔥 LOCK SCROLL ON MOBILE MENU
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* NAV */}
    <nav className="animate-gradient-sync shadow-md backdrop-blur-md">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Image
              src="/vmerge.jpeg"
              alt="logo"
              width={100}
              height={40}
              className="w-[90px] sm:w-[110px] h-auto"
            />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            {navItems.map((item) => (
              <div key={item.name} className="relative group">

                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-300
                  ${
                    isActive(item.href)
                      ? "text-blue-500 scale-110"
                      : "text-black hover:text-blue-900 hover:scale-110"
                  }`}
                >
                  {item.name}
                </Link>

                {/* DROPDOWN */}
                {item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 
                  w-[90vw] max-w-[520px] opacity-0 invisible translate-y-4 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                  transition-all duration-500">

                    <div className="bg-gradient-to-br from-blue-100 via-sky-100 to-blue-50 
                    rounded-2xl shadow-xl p-4 sm:p-5 border border-blue-200">

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                        {item.dropdown.map((d, i) => (
                          <Link
                            key={i}
                            href="/services"
                            className="p-3 rounded-xl transition 
                            hover:bg-blue-500 hover:scale-105 hover:shadow-md"
                          >
                            <p className="font-semibold text-sm text-black">
                              {d.title}
                            </p>
                            <p className="text-xs text-slate-600 mt-1">
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

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-3 lg:ml-4 px-5 py-2.5 rounded-xl 
              bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
              text-white font-semibold shadow-lg 
              hover:scale-110 hover:shadow-xl transition"
            >
              Get Strategy
            </Link>

          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-black"
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 top-[60px] bg-sky-100 px-6 py-8 md:hidden 
        transform transition-all duration-300
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="space-y-5">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="block text-lg font-medium text-black hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="block mt-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
            text-white py-3 text-center rounded-xl font-semibold"
          >
            Get Strategy →
          </Link>

        </div>

      </div>

    </header>
  );
}