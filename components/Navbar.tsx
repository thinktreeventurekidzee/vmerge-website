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
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router, navItems]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* 🔵 SKY BLUE NAVBAR */}
      <nav className="bg-gradient-to-r from-sky-200 via-blue-200 to-sky-100 shadow-sm">

        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Image
              src="/vmerge.jpeg"
              alt="logo"
              width={110}
              height={40}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <div key={item.name} className="relative group">

                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-300
                  ${isActive(item.href)
                    ? "text-yellow-500 scale-110"
                    : "text-black hover:text-yellow-400 hover:scale-110"
                  }`}
                >
                  {item.name}
                </Link>

                {/* 🔽 SMOOTH DROPDOWN */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-4 w-[520px] opacity-0 invisible translate-y-4 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                  transition-all duration-500 ease-out">

                    <div className="bg-gradient-to-br from-blue-100 via-sky-100 to-blue-50 
                    rounded-2xl shadow-xl p-5 border border-blue-200">

                      <div className="grid grid-cols-2 gap-4">

                        {item.dropdown.map((d, i) => (
                          <Link
                            key={i}
                            href="/services"
                            className="p-3 rounded-xl transition-all duration-300 
                            hover:bg-yellow-300 hover:scale-105 hover:shadow-md"
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

            {/* 🔵 3 SHADE BLUE CTA */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl 
              bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
              text-white font-semibold shadow-lg 
              hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              Get Strategy
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-black"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[70px] bg-sky-100 p-6 md:hidden">

          <div className="space-y-4">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block text-lg text-black hover:text-yellow-500 transition"
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
      )}

    </header>
  );
}