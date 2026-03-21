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
    alert("Form submitted!");
  };

  return (
    <section className="py-16 bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-emerald-400">
            Work with us
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Tell us about your next creator‑led campaign.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            Share a few details about your brand, budget and goals and our team
            will respond within 24 hours with next steps.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl mx-auto grid gap-4"
        >
          {/* name + email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-left">
              <label className="text-xs text-slate-300 mb-1 block">
                Full name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Gagan Pandey"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>
            <div className="text-left">
              <label className="text-xs text-slate-300 mb-1 block">
                Work email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* company + budget */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-left">
              <label className="text-xs text-slate-300 mb-1 block">
                Brand / company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Brand name"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>
            <div className="text-left">
              <label className="text-xs text-slate-300 mb-1 block">
                Monthly budget (optional)
              </label>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₹2–10L"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* message */}
          <div className="text-left">
            <label className="text-xs text-slate-300 mb-1 block">
              What are you looking to achieve?
            </label>
            <textarea
              name="message"
              placeholder="Share your goals, target platforms, timelines and anything else we should know."
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
            />
          </div>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-emerald-400 text-slate-950 py-2.5 px-6 rounded-full text-sm font-medium hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition"
            >
              Submit brief
            </button>
            <p className="text-[11px] text-slate-500 text-left sm:text-right">
              By submitting, you agree to be contacted by email or WhatsApp
              about your enquiry. No spam—ever.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
