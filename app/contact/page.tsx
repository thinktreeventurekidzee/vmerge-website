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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
   

      <main className="min-h-dvh bg-gradient-to-br from-sky-100 via-blue-50 to-white">
        <section className="mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
          {/* HEADING */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
            <h1 className="text-3xl font-bold leading-tight text-[#0b1a3a] sm:text-4xl md:text-5xl lg:text-6xl">
              Start Your Next{" "}
              <span className="text-blue-600">Creator Campaign</span>
              
            </h1>

            <p className="mt-4 text-sm text-slate-600 sm:mt-5 sm:text-base md:text-lg">
              Share your Goals, And We’ll Help You Plan, Launch, And Scale Your
              Campaigns.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            {/* LEFT INFO */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Mail className="text-blue-600" size={18} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#0b1a3a] sm:text-base">
                      Email
                    </h3>

                    <a
                      href="mailto:vmergmedia@gmail.com"
                      className="mt-1 block break-all text-sm font-medium text-[#0b1a3a] transition hover:text-blue-600 sm:text-base"
                    >
                      vmergmedia@gmail.com
                    </a>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      For Brand Campaigns And Collaborations
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Phone className="text-blue-600" size={18} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#0b1a3a] sm:text-base">
                      WhatsApp
                    </h3>

                    <a
                      href="https://wa.me/918660783740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-[#0b1a3a] transition hover:text-blue-600 sm:text-base"
                    >
                      +91 86607 83740
                    </a>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Quick Response For Campaigns
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <MapPin className="text-blue-600" size={18} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#0b1a3a] sm:text-base">
                      Location
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#0b1a3a] sm:text-base">
                      Bengaluru, India
                    </p>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Operating Across India
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-5 sm:p-6">
                <h3 className="text-base font-semibold text-[#0b1a3a] sm:text-lg">
                  Best for Brands Looking To
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Launch Creator Campaigns",
                    "Drive App Installs",
                    "Scale Awareness",
                    "Boost Conversions",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl sm:p-7 lg:p-8">
              <h2 className="text-center text-xl font-semibold text-[#0b1a3a] sm:text-2xl">
                Start Campaign Discussion
              </h2>

              <p className="mt-2 text-center text-sm text-slate-500 sm:text-base">
                Fill in your details and continue directly on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                </div>

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
                  rows={5}
                  placeholder="Campaign details..."
                  value={form.message}
                  onChange={handleChange}
                  className="input-new min-h-[140px] resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-500 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-red-600 hover:shadow-lg sm:text-base"
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