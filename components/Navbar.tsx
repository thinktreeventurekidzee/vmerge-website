"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Work", href: "/work" },
      { name: "About", href: "/about" },
    ],
    []
  );

  const targetItems = useMemo(
    () => [
      {
        name: "For Brands",
        href: "/brands",
        desc: "Launch campaigns",
      },
      {
        name: "For Creators",
        href: "/creators",
        desc: "Collaborate & earn",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    [...navItems, ...targetItems].forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router, navItems, targetItems]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Image
              src="/vmerge.jpeg"
              alt="Vmerg"
              width={110}
              height={40}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            {/* MAIN LINKS */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-inter text-sm transition ${
                  isActive(item.href)
                    ? "text-indigo-600"
                    : "text-slate-800 hover:text-indigo-500"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* 🔥 TARGET LINKS (UPGRADED) */}
            <div className="flex items-center gap-3 ml-6 border-l pl-6">

              {targetItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group px-4 py-2 rounded-xl text-sm font-inter font-medium transition ${
                    i === 0
                      ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item.name}
                  <span className="block text-[11px] text-slate-500 group-hover:text-slate-700">
                    {item.desc}
                  </span>
                </Link>
              ))}

            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-6 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-inter text-sm hover:bg-slate-800 transition"
            >
              Get Strategy
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col px-6 pt-24">

          {/* MAIN LINKS */}
          <div className="space-y-6 text-center">
            {[...navItems].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`block text-xl font-pop ${
                  isActive(item.href)
                    ? "text-indigo-600"
                    : "text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🔥 TARGET BLOCKS */}
          <div className="mt-10 space-y-4">

            {targetItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`block p-4 rounded-xl text-center border ${
                  i === 0
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-slate-100"
                }`}
              >
                <p className="font-pop text-lg text-slate-900">
                  {item.name}
                </p>
                <p className="text-sm font-inter text-slate-600">
                  {item.desc}
                </p>
              </Link>
            ))}

          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="mt-10 bg-slate-900 text-white py-3 rounded-xl text-center font-inter"
          >
            Get Strategy →
          </Link>

        </div>
      )}
    </header>
  );
}