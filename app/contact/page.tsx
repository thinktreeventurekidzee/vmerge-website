"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `VMERG Campaign Inquiry
Name: ${form.name}
Email: ${form.email}
Brand: ${form.brand}
Message: ${form.message}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white">

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24">

          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0b1a3a] leading-tight">
              Start your next{" "}
              <span className="text-yellow-400">
                creator campaign
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600">
              Share your goals, and we’ll help you plan, launch, and scale your campaigns.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">

            {/* LEFT INFO */}
            <div className="space-y-4 sm:space-y-6">

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Mail className="text-yellow-400" size={20} />
                  <div>
                    <h3 className="text-[#0b1a3a] font-semibold text-sm sm:text-base">
                      Email
                    </h3>
                    <p className="text-[#0b1a3a] font-medium text-sm sm:text-base">
                      vmergmedia@gmail.com
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      For brand campaigns and collaborations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <Phone className="text-yellow-400" size={20} />
                  <div>
                    <h3 className="text-[#0b1a3a] font-semibold text-sm sm:text-base">
                      WhatsApp
                    </h3>
                    <p className="text-[#0b1a3a] font-medium text-sm sm:text-base">
                      +91 86607 83740
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Quick response for campaigns
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <MapPin className="text-yellow-400" size={20} />
                  <div>
                    <h3 className="text-[#0b1a3a] font-semibold text-sm sm:text-base">
                      Location
                    </h3>
                    <p className="text-[#0b1a3a] font-medium text-sm sm:text-base">
                      Bengaluru, India
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Operating across India
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* FORM */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-blue-100">

              <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#0b1a3a]">
                Start Campaign Discussion
              </h2>

              <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4">

                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-new"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="input-new"
                  required
                />

                <input
                  name="brand"
                  placeholder="Brand / Company"
                  value={form.brand}
                  onChange={handleChange}
                  className="input-new"
                  required
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Campaign details..."
                  value={form.message}
                  onChange={handleChange}
                  className="input-new h-28"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 
                  text-white py-3 rounded-xl font-semibold 
                  transition hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Continue on WhatsApp →
                </button>

              </form>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}