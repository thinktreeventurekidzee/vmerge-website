"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ServicesPage() {
  const { themeClasses } = useTheme();

  const allServices = [
    {
      name: "Beauty Influencers",
      icon: "💄",
      description:
        "Premium beauty creators for makeup, skincare and fashion campaigns with high trust and strong visual storytelling.",
      stats: "15K+ Creators",
      href: "#beauty",
    },
    {
      name: "Gaming Creators",
      icon: "🎮",
      description:
        "Esports streamers and gaming influencers built for authentic audience engagement and youth-focused launches.",
      stats: "8K+ Gamers",
      href: "#gaming",
    },
    {
      name: "Finance Experts",
      icon: "💰",
      description:
        "FinTech creators, stock educators and investment voices with credibility-driven communities.",
      stats: "5K+ Experts",
      href: "#finance",
    },
    {
      name: "Tech Reviews",
      icon: "💻",
      description:
        "Gadget reviewers and tech YouTubers who influence buying decisions through product-first content.",
      stats: "12K+ Techies",
      href: "#tech",
    },
    {
      name: "Health & Fitness",
      icon: "🏋️",
      description:
        "Fitness trainers, wellness experts and healthy lifestyle creators with loyal niche audiences.",
      stats: "10K+ Trainers",
      href: "#health",
    },
    {
      name: "Comedy Content",
      icon: "😂",
      description:
        "Viral comedians and entertainment creators who drive reach, shares and strong engagement spikes.",
      stats: "7K+ Comedians",
      href: "#comedy",
    },
    {
      name: "Education Channels",
      icon: "🎓",
      description:
        "Subject experts and educational creators across business, skills, exam prep and professional learning.",
      stats: "9K+ Educators",
      href: "#education",
    },
    {
      name: "Food & Travel Vlogs",
      icon: "🌍",
      description:
        "Lifestyle, food and travel storytellers for destination, hospitality and experience-led campaigns.",
      stats: "11K+ Vloggers",
      href: "#vlogs",
    },
    {
      name: "Short Form Experts",
      icon: "📱",
      description:
        "Reels, Shorts and viral content specialists focused on fast attention, trends and shareability.",
      stats: "20K+ Creators",
      href: "#shorts",
    },
    {
      name: "Enterprise Solutions",
      icon: "🏢",
      description:
        "Custom creator strategies for BFSI, FMCG, D2C and global brands requiring scale, compliance and reporting.",
      stats: "Custom",
      href: "#enterprise",
    },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className={`relative overflow-hidden min-h-screen ${themeClasses.pageBg}`}>
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${themeClasses.sectionGlow}`}
        />
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" />
      </div>

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl ${themeClasses.badge}`}
          >
            Creator Categories & Campaign Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] ${themeClasses.heroText}`}
          >
            10+ Influencer Categories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-6 text-base md:text-lg leading-8 max-w-3xl mx-auto ${themeClasses.mutedText}`}
          >
            Discover the right creators across every niche. From beauty and gaming
            to fintech and enterprise campaigns, we help brands scale with
            performance-focused influencer partnerships.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, i) => (
            <motion.button
              key={service.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => scrollToSection(service.href)}
              className={`group rounded-3xl p-6 md:p-7 text-left shadow-xl ${themeClasses.card}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${themeClasses.badge}`}>
                  {service.stats}
                </div>
              </div>

              <h3 className={`mt-6 text-xl font-semibold tracking-tight ${themeClasses.heading}`}>
                {service.name}
              </h3>

              <p className={`mt-3 text-sm md:text-base leading-7 ${themeClasses.mutedText}`}>
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className={`text-sm font-medium ${themeClasses.gradientText}`}>
                  Explore category
                </span>
                <span className="text-lg text-white/70 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      <section className="pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8 md:space-y-10">
          {allServices.map((service, i) => (
            <motion.section
              key={service.name}
              id={service.href.replace("#", "")}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.03 }}
              className={`rounded-[2rem] p-8 md:p-12 shadow-2xl scroll-mt-28 ${themeClasses.card}`}
            >
              <div className="grid lg:grid-cols-[120px_1fr] gap-6 md:gap-8 items-start">
                <div className="text-5xl md:text-6xl">{service.icon}</div>

                <div>
                  <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${themeClasses.badge}`}>
                    {service.stats}
                  </div>

                  <h2 className={`mt-4 text-2xl md:text-4xl font-black tracking-tight ${themeClasses.heroText}`}>
                    {service.name}
                  </h2>

                  <p className={`mt-4 text-sm md:text-base leading-8 max-w-3xl ${themeClasses.mutedText}`}>
                    {service.description} We match brands with creator profiles that
                    align with audience quality, content style, campaign goals and
                    platform behavior to improve overall performance.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-3 gap-4">
                    {[
                      "Audience-fit shortlisting",
                      "Campaign strategy support",
                      "Performance-led execution",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            {...fadeUp}
            className={`rounded-[2rem] p-10 md:p-14 shadow-2xl ${themeClasses.card}`}
          >
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${themeClasses.heroText}`}>
              Ready to launch your campaign?
            </h2>

            <p className={`mt-4 text-sm md:text-base leading-7 max-w-2xl mx-auto ${themeClasses.mutedText}`}>
              Tell us your goals and target audience. We’ll connect your brand with
              the right creators across the right category.
            </p>

            <a
              href="#lead-form"
              className={`inline-flex items-center justify-center mt-8 px-8 py-4 rounded-full text-sm md:text-base shadow-xl ${themeClasses.button}`}
            >
              Start Campaign 🚀
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}