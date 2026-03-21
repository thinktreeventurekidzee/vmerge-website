export default function Footer() {
  return (
    <footer className="relative mt-20 text-slate-50 overflow-hidden">
      {/* Background gradient + texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-black" />
      <div className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top CTA strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-slate-800/80">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              yourBrand
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
              Data‑driven influencer discovery and collaborations for brands that
              want predictable growth across YouTube, Instagram, UGC and meme
              marketing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button className="rounded-full bg-emerald-400 text-slate-950 text-sm font-medium px-6 py-3 hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition">
              Book a strategy call
            </button>
            <button className="text-sm text-slate-300 hover:text-emerald-300 transition">
              Join as a creator
            </button>
          </div>
        </div>

        {/* Middle nav columns */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  YouTube marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  Instagram marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  UGC content studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  Meme marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">For brands</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/work" className="hover:text-emerald-300 transition">
                  Case studies
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-emerald-300 transition">
                  Pricing & packages
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-emerald-300 transition">
                  Our process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/about" className="hover:text-emerald-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-300 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Gurugram, India</li>
              <li>
                <a
                  href="mailto:hello@yourbrand.com"
                  className="hover:text-emerald-300 transition"
                >
                  hello@yourbrand.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="hover:text-emerald-300 transition"
                >
                  +91‑12345‑67890
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-5 text-slate-400">
              <a
                href="#"
                aria-label="YouTube"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition"
              >
                YT
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 yourBrand. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
