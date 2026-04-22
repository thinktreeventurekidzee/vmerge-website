"use client";

import { useEffect, useMemo, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Influencer Discovery",
    desc: "Identify and shortlist influencers who align with the brand’s target audience, niche, and campaign objectives.",
    img: "/section/a1.jpeg",
  },
  {
    id: "02",
    title: "Creator Matchmaking",
    desc: "Connect brands with the most suitable creators to ensure authentic collaborations and impactful storytelling.",
    img: "/section/a2.jpeg",
  },
  {
    id: "03",
    title: "Campaign Management",
    desc: "Plan, execute, and coordinate influencer campaigns from briefing and content creation to publishing.",
    img: "/section/a3.jpeg",
  },
  {
    id: "04",
    title: "Performance Tracking",
    desc: "Monitor campaign performance through insights, engagement metrics, and detailed reporting to measure results.",
    img: "/section/a4.jpeg",
  },
];

export default function ProcessTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const stepIds = useMemo(() => steps.map((s) => `step-${s.id}`), []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = stepIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (!elements.length) return;

      const trigger = window.innerHeight * 0.45;
      let current = 0;

      elements.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= trigger) current = i;
      });

      setActiveIndex(current);

      const first = elements[0].offsetTop;
      const last = elements[elements.length - 1].offsetTop;

      const scrollY = window.scrollY + window.innerHeight * 0.4;
      const total = last - first;
      const currentProgress = scrollY - first;

      const percent = Math.max(
        0,
        Math.min(100, (currentProgress / total) * 100)
      );

      setProgress(percent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [stepIds]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8f6ef] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
            How we execute campaigns
          </h2>
        </div>

        <div className="relative">

     {/* 🔵 TIMELINE */}
<div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block h-full">

  {/* OUTER PIPE */}
  <div className="relative w-[10px] h-full bg-slate-200 rounded-full flex justify-center">

    {/* INNER BLUE LINE */}
    <div
      className="absolute top-0 w-[4px] rounded-full transition-all duration-500
      bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800
      shadow-[0_0_20px_rgba(59,130,246,0.6)]"
      style={{ height: `${progress}%` }}
    />

  </div>
</div>

          {/* STEPS */}
          <div className="space-y-28">

            {steps.map((step, index) => {
              const isActive = index <= activeIndex;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={step.id}
                  id={`step-${step.id}`}
                  className="relative grid md:grid-cols-[1fr_80px_1fr] gap-10 items-center"
                >

                  {/* LEFT */}
                  <div className="hidden md:block">
                    {!reverse ? (
                      <ContentCard step={step} isActive={isActive} />
                    ) : (
                      <ImageCard step={step} isActive={isActive} align="right" />
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex justify-center">
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">

                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                            : "bg-slate-300"
                        }`}
                      />

                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="hidden md:block">
                    {reverse ? (
                      <ContentCard step={step} isActive={isActive} />
                    ) : (
                      <ImageCard step={step} isActive={isActive} />
                    )}
                  </div>

                   {/* MOBILE */}
                  <div className="md:hidden">
                    <ContentCard step={step} isActive={isActive} />
                    <ImageCard step={step} isActive={isActive} />
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

function ContentCard({ step, isActive }: any) {
  return (
    <div className={`group relative max-w-md transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-60 translate-y-4"}`}>

      <div className="absolute inset-0 rounded-2xl bg-white border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all" />

      <div className="relative p-6">

        {/* STEP */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold shadow-md">
            {step.id}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Step {step.id}
          </p>
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold text-slate-900">
          {step.title}
        </h3>

        <div className="mt-2 w-12 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />

        <p className="mt-4 text-slate-600 leading-relaxed">
          {step.desc}
        </p>

      </div>
    </div>
  );
}

function ImageCard({ step, isActive, align = "left" }: any) {
  return (
    <div className={`group relative max-w-md ${align === "right" ? "ml-auto" : ""}`}>

   <img
  src={step.img}
  alt={step.title}
  className="
    w-full 
    h-auto 
    max-h-[300px]
    object-contain   // 🔥 IMPORTANT (no cut)
    rounded-2xl
    transition-all duration-500
    group-hover:scale-[1.05]   // sirf thoda zoom
  "
/>

      {/* overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

    </div>
  );
}