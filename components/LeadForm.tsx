"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "86607 83740";

const budgetOptions = [
  "Below ₹50K",
  "₹50K - ₹1L",
  "₹1L - ₹5L",
  "₹5L+",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = useMemo(() => {
    const text = [
      "Hello Vmerg, I want to discuss an influencer marketing campaign.",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Company: ${form.company || "-"}`,
      `Budget: ${form.budget || "-"}`,
      `Goal: ${form.message || "-"}`,
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappMessage, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-sky-50 to-white overflow-hidden"
    >

      {/* 🌊 BACKGROUND GLOW */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Start your next{" "}
            <span className="text-blue-700">high-performing campaign</span>
          </h2>

          <p className="text-slate-600 text-lg">
            Tell us your goal and we’ll build a creator strategy for your brand.
          </p>

          <div className="space-y-3 text-sm text-slate-600">
            <p>✔ Strategy-first planning</p>
            <p>✔ Faster execution</p>
            <p>✔ Direct WhatsApp connect</p>
          </div>

          {/* TRUST */}
          <div className="bg-white/60 backdrop-blur border border-white/40 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-700">
              💬 We usually reply within minutes after submission.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative backdrop-blur-xl bg-white/60 border border-white/40 p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 
                outline-none transition-all duration-200"
              />

              <input
                name="email"
                placeholder="Business email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 
                outline-none transition-all duration-200"
              />
            </div>

            {/* COMPANY + BUDGET */}
            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 
                outline-none transition-all"
              />

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100 
                outline-none transition-all text-slate-700"
              >
                <option value="">Select budget</option>
                {budgetOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>

            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="What do you want to achieve? (sales, awareness...)"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-100 
              outline-none transition-all h-28"
            />

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 
              hover:from-red-600 hover:to-red-700 
              text-white py-3 rounded-xl font-semibold 
              shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Submit & Continue
              <ArrowUpRight size={16} />
            </motion.button>

            {/* NOTE */}
            <p className="text-xs text-slate-500 text-center">
              ⚡ Takes less than 30 minutes • No spam
            </p>

            {/* SUCCESS */}
            {submitted && (
              <div className="bg-green-50 border border-green-200 p-3 rounded-xl text-sm text-green-700 text-center">
                WhatsApp opened with your details 🚀
              </div>
            )}

          </form>

        </motion.div>

      </div>
    </section>
  );
}