"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  return (
    <img
      src="/vmerg-logo.png"
      alt="vmerg logo"
      className="h-[52px] w-auto object-contain sm:h-[62px] md:h-[70px] lg:h-[78px]"
    />
  );
};

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  useEffect(() => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="animate-gradient-sync border-b border-black/5 bg-sky-200/90 shadow-md backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-[80px] sm:px-6 lg:h-[88px] lg:px-8">
          <Link
            href="/"
            onClick={() => setMobileMenu(false)}
            className="flex shrink-0 items-center"
          >
            <Logo />
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 lg:text-base ${
                    isActive(item.href)
                      ? "scale-105 text-black"
                      : "text-black/85 hover:scale-105 hover:text-black"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} className="mt-[1px]" />}
                </Link>

                {item.dropdown && pathname !== "/services" && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[92vw] max-w-[560px] -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100">
                    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 via-sky-100 to-blue-50 p-4 shadow-2xl lg:p-5">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {item.dropdown.map((d, i) => (
                          <Link
                            key={i}
                            href="/services"
                            className="rounded-xl p-3 transition duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:text-white hover:shadow-md"
                          >
                            <p className="text-sm font-semibold">{d.title}</p>
                            <p className="mt-1 text-xs opacity-80">{d.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-black to-gray-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl lg:px-5 lg:text-base"
            >
              Get Strategy
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu((prev) => !prev)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-black transition hover:bg-white/40 md:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenu
            ? "pointer-events-auto visible bg-black/30 opacity-100"
            : "pointer-events-none invisible bg-black/0 opacity-0"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      <div
        className={`fixed right-0 top-[72px] z-50 h-[calc(100dvh-72px)] w-full max-w-sm overflow-y-auto border-l border-blue-200 bg-sky-100 px-5 py-6 shadow-2xl transition-transform duration-300 sm:top-[80px] sm:h-[calc(100dvh-80px)] sm:px-6 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-2">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-blue-200/70 bg-white/40"
                >
                  <button
                    onClick={() =>
                      setMobileServicesOpen((prev) => !prev)
                    }
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-lg font-semibold text-black"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-2 px-4 pb-4">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenu(false)}
                          className={`block rounded-xl px-3 py-3 text-base font-medium transition ${
                            isActive("/services")
                              ? "bg-blue-500 text-white"
                              : "bg-white/70 text-black hover:bg-white"
                          }`}
                        >
                          All Services
                        </Link>

                        {item.dropdown.map((d, i) => (
                          <Link
                            key={i}
                            href="/services"
                            onClick={() => setMobileMenu(false)}
                            className="block rounded-xl bg-white/70 px-3 py-3 transition hover:bg-white"
                          >
                            <p className="text-sm font-semibold text-black">
                              {d.title}
                            </p>
                            <p className="mt-1 text-xs text-black/65">
                              {d.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`block rounded-2xl px-4 py-4 text-lg font-semibold transition ${
                  isActive(item.href)
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white/50 text-black hover:bg-white/80"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="mt-4 block rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 px-4 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:scale-[1.01]"
          >
            Get Strategy →
          </Link>
        </div>
      </div>
    </header>
  );
}