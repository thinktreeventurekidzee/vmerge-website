"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Video,
  Camera,
  Smartphone,
  Code,
  ShoppingCart,
  Target,
  BarChart3,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Influencer Marketing",
    icon: Users,
    desc: "Strategic creator partnerships to drive awareness, trust, and conversions.",
    note: "Creator sourcing & vetting • Campaign strategy & execution • Product seeding & gifting • Whitelisting & paid partnerships  ",
  },
  {
    id: "02",
    title: "UGC Content Creation",
    icon: Video,
    desc: "High-performing user-generated content built for ads and organic growth.",
    note: "UGC for paid ads (Meta, Google, TikTok) • Hook & script development • Multi-creator content pipeline • Performance testing & iteration",
  },
  {
    id: "03",
    title: "On-Site Video Production",
    icon: Camera,
    desc: "Premium brand shoots designed for storytelling and conversions.",
    note: "Product & lifestyle shoots • Founder & testimonial videos • Reels, ads & launch assets • Editing, motion graphics & short-form cuts",
  },
  {
    id: "04",
    title: "Social Media Management",
    icon: Smartphone,
    desc: "End-to-end social media growth with strategy and execution.",
    note: "Content strategy & planning • Creative content creation • Community management • Paid social creatives • Performance tracking & analytics",
  },
  {
    id: "05",
    title: "Website Development",
    icon: Code,
    desc: "Conversion-focused, high-performance websites for modern brands.",
    note: "Custom website design • Mobile-responsive development • SEO & performance optimization • Secure & scalable architecture ",
  },

  // 🔥 NEW TRENDING SERVICES (ADD VALUE)
  {
    id: "06",
    title: "Performance Marketing",
    icon: BarChart3,    
    desc: "Data-driven paid campaigns focused on ROI and scalable growth.",
    note: "Meta & Google Ads management • Funnel strategy & optimization • Creative testing & scaling • Conversion tracking & attribution",
  },
  {
    id: "07",
    title: "Brand Strategy & Positioning",
    icon: Target,
    desc: "Build a strong brand identity that connects and converts.",
    note: "Brand messaging & storytelling • Audience research • Positioning strategy • Go-to-market planning",
  },
  {
    id: "08",
    title: "Creator Commerce & Affiliate Growth",
    icon: ShoppingCart,
    desc: "Turn creators into revenue channels with scalable systems.",
    note: "Affiliate program setup • Creator storefronts • Commission tracking • Influencer-led sales funnels",
  },
];



export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#eaf4ff] py-16 sm:py-20 md:py-28">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-700 leading-tight">
            Services Designed For Growth
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-700">
            Everything you need to scale with creators.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className="p-[1px] rounded-2xl bg-transparent
                sm:group-hover:bg-gradient-to-br sm:group-hover:from-blue-500 sm:group-hover:to-cyan-400
                transition-all duration-300"
              >
                <div
                  className="rounded-2xl p-5 sm:p-6 bg-white shadow-sm
                  transition-all duration-300 sm:group-hover:shadow-2xl sm:group-hover:-translate-y-1"
                >
                  {/* ICON */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl mb-4
                    bg-blue-100 text-blue-600
                    sm:group-hover:bg-gradient-to-br sm:group-hover:from-blue-500 sm:group-hover:to-cyan-400 sm:group-hover:text-white transition"
                  >
                    <service.icon size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium sm:group-hover:translate-x-1 transition">
                    Learn more <ArrowRight size={16} />
                  </div>

                  {/* DETAILS */}
                  <div className="mt-4 sm:mt-0 sm:overflow-hidden sm:max-h-0 sm:group-hover:max-h-40 transition-all duration-500">
                    <div className="border-t border-slate-200 pt-4 mt-4">
                      <ul className="space-y-2 text-sm text-slate-600">
                        {service.note.split("•").map((feature, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <span>{feature.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
