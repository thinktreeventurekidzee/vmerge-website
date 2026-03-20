export default function Footer() {
  return (
    <footer className="relative mt-20 text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#000]"></div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/10">
          
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              yourBrand
            </h3>
            <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
              Data-driven influencer discovery and collaborations for brands that
              want predictable growth across YouTube, Instagram and UGC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <button className="rounded-full bg-white text-black text-sm font-medium px-6 py-3 hover:bg-gray-200 transition">
              Book a Strategy Call
            </button>
            <button className="text-sm text-gray-300 hover:text-white transition">
              Join as a Creator
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">YouTube Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">UGC Content</a></li>
              <li><a href="#" className="hover:text-white transition">Meme Marketing</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">For Brands</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Process</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Gurugram, India</li>
              <li><a href="#" className="hover:text-white transition">hello@yourbrand.com</a></li>
              <li><a href="#" className="hover:text-white transition">+91-12345-67890</a></li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              <span className="hover:text-white cursor-pointer">YT</span>
              <span className="hover:text-white cursor-pointer">IG</span>
              <span className="hover:text-white cursor-pointer">IN</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 yourBrand. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}