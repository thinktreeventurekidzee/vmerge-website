"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


// ✅ LOGO COMPONENT (FIXED PATH + SIZE)
const Logo = () => {
  return (
    <img
      src="/vmerg-logo.png"
      alt="vmerg logo"
      className="h-[70px] sm:h-[80px] w-auto object-contain scale-110"
    />
  );
};
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

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* NAV */}
      <nav className="animate-gradient-sync shadow-md backdrop-blur-md">

        {/* ✅ COMPACT HEIGHT */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">

            {navItems.map((item) => (
              <div key={item.name} className="relative group">

                <Link
                  href={item.href}
                  className={`text-base font-semibold transition-all duration-300
                  ${
                    isActive(item.href)
                      ? "text-black scale-125"
                      : "text-black hover:scale-110"
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {item.dropdown.map((d, i) => (
                          <Link
                            key={i}
                            href="/services"
                            className="p-3 rounded-xl transition 
                            hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-md"
                          >
                            <p className="font-semibold text-sm">
                              {d.title}
                            </p>
                            <p className="text-xs mt-1 opacity-80">
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
              className="ml-4 px-5 py-2.5 rounded-xl 
              bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-600 
              text-white font-semibold shadow-lg 
              hover:scale-110 hover:shadow-xl transition"
            >
              Get Strategy
            </Link>

          </div>

          {/* MOBILE BUTTON (BIGGER ICON) */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-black"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 top-[56px] bg-sky-100 px-6 py-8 md:hidden 
        transform transition-all duration-300
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="space-y-6">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="block text-xl font-semibold text-black hover:text-blue-600 transition"
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