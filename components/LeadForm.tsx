"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Thanks! We'll reach out within 24 hours.");
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* 🌈 subtle aurora */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-bg w-full h-full opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* 🔝 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-cyan-600 font-semibold">
            Start your campaign
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Let’s build your next{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
              influencer campaign
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Share your brand goals and budget. Our team will connect within 24 hours
            with a tailored influencer strategy.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-3xl mx-auto grid gap-5"
        >
          {/* name + email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Gagan Pandey"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
              />
            </div>
          </div>

          {/* company + budget */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Brand / Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your brand name"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Monthly Budget
              </label>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₹1L – ₹10L"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
              />
            </div>
          </div>

          {/* message */}
          <div>
            <label className="text-xs text-slate-500 mb-1 block">
              Campaign Goal
            </label>
            <textarea
              name="message"
              placeholder="What are you trying to achieve? (Brand awareness, sales, app installs, etc.)"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 resize-none transition"
            />
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-3 px-8 rounded-full text-sm font-medium shadow hover:scale-105 transition"
            >
              Get Strategy Plan 🚀
            </button>

            <p className="text-xs text-slate-500">
              We typically respond within 24 hours. You may also be contacted via
              WhatsApp for faster communication.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}