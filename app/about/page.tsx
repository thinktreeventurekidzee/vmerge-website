"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-sky-50 to-white text-slate-900">

      {/* HERO */}
      <section className="text-center pt-28 pb-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About <span className="text-blue-700">Vmerg</span>
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We help brands grow through powerful creator-led campaigns.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-4 pb-16 space-y-6 text-slate-600">

        <p>
          Founded in 2021, Vmerg is an influencer marketing and brand partnership company dedicated to helping brands grow through impactful digital collaborations.
        </p>

        <p>
          At Vmerg, we believe influencer marketing is more than just promotions—it is about creating genuine relationships between brands and their audiences.
        </p>

        <p>
          Vmerg was founded by <strong>Vinay Kumar Mishra</strong>.
        </p>

        <p>
          With a strong focus on innovation, collaboration, and growth, Vmerg continues to build meaningful partnerships.
        </p>

      </section>

      {/* ✅ VISION + MISSION FIXED */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* MISSION */}
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-blue-700 font-semibold text-lg">
            Our Mission
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            Our mission is to help brands grow by connecting them with the right influencers and building campaigns that deliver measurable, performance-driven results.

            <br /><br />

            We focus on creating authentic partnerships between brands and creators, executing high-performing ROI-focused campaigns, and leveraging data along with creativity to maximize impact.

            <br /><br />

            Our goal is to provide transparent, reliable, and scalable marketing solutions that drive real business growth.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-blue-700 font-semibold text-lg">
            Our Vision
          </h3>

          <p className="mt-3 text-sm text-slate-600">
            To become a leading influencer marketing agency that transforms how brands connect with their audiences through authentic, impactful, and data-driven creator collaborations.

            <br /><br />

            We envision a future where marketing is built on trust, creativity, and meaningful digital relationships that deliver long-term value and sustainable growth.
          </p>
        </div>

      </section>

{/* CTA */}
<section className="py-24 sm:py-32 bg-white text-center">

  <div className="max-w-5xl mx-auto px-4">

    {/* TOP TEXT */}
    <p className="text-sm sm:text-base text-slate-500 tracking-widest uppercase">
      Is your brand feeling bland?
    </p>

    {/* MAIN HEADING */}
    <h2 className="
      mt-4 
      text-4xl sm:text-6xl md:text-7xl 
      font-extrabold 
      leading-tight
      tracking-tight
    ">
      <span className="text-slate-900">LET’S</span>{" "}
      <span className="text-blue-600">TALK</span>
    </h2>

    {/* SUBTEXT */}
    <p className="mt-4 text-slate-600 max-w-xl mx-auto">
      We craft high-performing campaigns that actually drive results.
    </p>

    {/* BUTTON */}
    <Link
      href="/contact"
      className="
      inline-block mt-8
      bg-blue-600 hover:bg-blue-700
      text-white
      px-8 py-4
      rounded-xl
      font-semibold
      transition-all duration-300
      hover:scale-105
      shadow-lg
      hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]
      "
    >
      Start a Conversation →
    </Link>

  </div>

</section>



    </main>
  );
}