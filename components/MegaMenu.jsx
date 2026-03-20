"use client";

export default function MegaMenu({ open }) {
  return (
    <div
      className={`absolute top-12 left-0 w-[720px] bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-10 transition-all duration-300 ${
        open
          ? "opacity-100 translate-y-0 visible pointer-events-auto"
          : "opacity-0 translate-y-4 invisible pointer-events-none"
      }`}
    >
      {/* COLUMN 1 */}
      <div>
        <h3 className="text-blue-600 font-semibold mb-3">By Platform</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-black cursor-pointer">YouTube</li>
          <li className="hover:text-black cursor-pointer">Instagram</li>
          <li className="hover:text-black cursor-pointer">Twitter</li>
          <li className="hover:text-black cursor-pointer">LinkedIn</li>
        </ul>
      </div>

      {/* COLUMN 2 */}
      <div>
        <h3 className="text-blue-600 font-semibold mb-3">Use Case</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-black cursor-pointer">Celebrity Marketing</li>
          <li className="hover:text-black cursor-pointer">UGC Videos</li>
          <li className="hover:text-black cursor-pointer">Meme Marketing</li>
        </ul>
      </div>

      {/* COLUMN 3 */}
      <div>
        <h3 className="text-blue-600 font-semibold mb-3">Industry</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-black cursor-pointer">FinTech</li>
          <li className="hover:text-black cursor-pointer">eCommerce</li>
          <li className="hover:text-black cursor-pointer">Health</li>
        </ul>
      </div>
    </div>
  );
}