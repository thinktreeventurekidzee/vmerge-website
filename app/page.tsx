"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

import WorkGallery from "@/components/WorkGallery";
import AboutSection from "@/components/AboutSection";

import ProcessSection from "@/components/ProcessSection";


const ContactSection = () => (
  <section
    id="contact"
    className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24 text-white"
  >
    {/* BG GLOW */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_40%)]" />

    <div className="mx-auto max-w-4xl px-6 text-center">
      <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-pop tracking-tight">
        Ready to launch your campaign?
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-lg font-inter text-slate-300">
        Share your goals and get a structured influencer strategy within 24 hours.
      </p>

      {/* FORM */}
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-slate-400 font-inter outline-none focus:border-indigo-400"
          />

          <input
            type="text"
            placeholder="Campaign goals / budget"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-slate-400 font-inter outline-none focus:border-indigo-400"
          />

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-inter text-white transition hover:opacity-90"
          >
            Get Your Strategy →
          </button>

        </div>
      </div>
    </div>
  </section>
);

const SECTIONS = [
  "home",
  "services",
  "trust",
  "work",
  "about",
  "contact",
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY + 120;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i];
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollY) {
          setActiveSection(sectionId);
          return;
        }
      }

      setActiveSection("home");
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">

      <HeroSection />
      <ServicesSection />

      <WorkGallery />
      <ProcessSection />
      <AboutSection />
      

    </div>
  );
}