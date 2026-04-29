"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Influencer Discovery 🔎",
    desc: "Identify and shortlist influencers who align with the brand’s target audience, niche, and campaign objectives.",
    img: "/section/a1.jpeg",
  },
  {
    id: "02",
    title: "Creator Matchmaking 🤝",
    desc: "Connect brands with the most suitable creators to ensure authentic collaborations and impactful storytelling.",
    img: "/section/a2.jpeg",
  },
  {
    id: "03",
    title: "Campaign Management 📋",
    desc: "Plan, execute, and coordinate influencer campaigns from briefing and content creation to publishing.",
    img: "/section/a3.jpeg",
  },
  {
    id: "04",
    title: "Performance Tracking 📊",
    desc: "Monitor campaign performance through insights, engagement metrics, and detailed reporting to measure results.",
    img: "/section/a4.jpeg",
  },
];

export default function ZigzagTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const desktopDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileDotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeDesktop, setActiveDesktop] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);

  const [desktopLine, setDesktopLine] = useState({
    top: 0,
    height: 0,
    progress: 0,
  });

  const [mobileLine, setMobileLine] = useState({
    top: 0,
    height: 0,
    progress: 0,
  });

  const mobileRailLeft = 20;
  const mobileCardPaddingLeft = 52;
  const mobileLineTopOffset = 178;
  const mobileGlowNudgeX = 0.2;

  useEffect(() => {
    const getCenterInSection = (el: HTMLElement, section: HTMLElement) => {
      const elRect = el.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      return elRect.top - sectionRect.top + elRect.height / 2;
    };

    const calculateMetrics = () => {
      const section = sectionRef.current;
      if (!section) return;

      const isDesktop = window.innerWidth >= 768;
      const refs = isDesktop ? desktopDotRefs.current : mobileDotRefs.current;
      const validDots = refs.filter(Boolean) as HTMLDivElement[];

      if (validDots.length < 2) return;

      const first = validDots[0];
      const last = validDots[validDots.length - 1];

      const top = getCenterInSection(first, section);
      const bottom = getCenterInSection(last, section);
      const height = Math.max(0, bottom - top);

      if (isDesktop) {
        setDesktopLine((prev) => ({ ...prev, top, height }));
      } else {
        setMobileLine((prev) => ({ ...prev, top, height }));
      }
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const isDesktop = window.innerWidth >= 768;
      const refs = isDesktop ? desktopDotRefs.current : mobileDotRefs.current;
      const validDots = refs.filter(Boolean) as HTMLDivElement[];
      if (validDots.length === 0) return;

      const triggerY = window.innerHeight * 0.5;

      let current = 0;
      validDots.forEach((dot, i) => {
        const center = dot.getBoundingClientRect().top + dot.offsetHeight / 2;
        if (center <= triggerY) current = i;
      });

      const segmentHeights = validDots.map((dot, i) => {
        if (i === validDots.length - 1) return 0;
        const currentCenter =
          dot.getBoundingClientRect().top + dot.offsetHeight / 2;
        const nextCenter =
          validDots[i + 1].getBoundingClientRect().top +
          validDots[i + 1].offsetHeight / 2;
        return nextCenter - currentCenter;
      });

      let accumulated = 0;
      for (let i = 0; i < segmentHeights.length; i++) {
        if (i < current) {
          accumulated += segmentHeights[i];
        } else if (i === current) {
          const currentCenter =
            validDots[i].getBoundingClientRect().top +
            validDots[i].offsetHeight / 2;

          const partial = Math.min(
            Math.max(triggerY - currentCenter, 0),
            segmentHeights[i]
          );

          accumulated += partial;
          break;
        }
      }

      const clampedProgress = accumulated;

      if (isDesktop) {
        setDesktopLine((prev) => ({ ...prev, progress: clampedProgress }));
        setActiveDesktop(current);
      } else {
        setMobileLine((prev) => ({ ...prev, progress: clampedProgress }));
        setActiveMobile(current);
      }
    };

    const syncAll = () => {
      calculateMetrics();
      handleScroll();
    };

    syncAll();

    const resizeObserver = new ResizeObserver(() => {
      syncAll();
    });

    if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    desktopDotRefs.current.forEach((el) => el && resizeObserver.observe(el));
    mobileDotRefs.current.forEach((el) => el && resizeObserver.observe(el));

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncAll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncAll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline-section"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8f6ef] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 md:text-sm">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            How we Execute Campaigns
          </h2>
        </div>

        <div className="relative">
          {/* DESKTOP CENTER LINE */}
          <div
            className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block"
            style={{
              top: `${desktopLine.top - 248}px`,
              height: `${desktopLine.height + 4}px`,
            }}
          >
            <div className="relative h-full w-[10px] overflow-hidden rounded-full bg-slate-200">
              <div
                className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 rounded-full transition-[height] duration-150 ease-out"
                style={{
                  height: `${Math.max(
                    0,
                    Math.min(desktopLine.progress, desktopLine.height)
                  )}px`,
                  background:
                    "linear-gradient(to bottom, #60a5fa, #3b82f6, #1d4ed8)",
                  boxShadow: "0 0 18px rgba(59,130,246,0.75)",
                }}
              />
              <div
                className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400/80 blur-[2px] transition-all duration-150"
                style={{
                  top: `${Math.max(
                    -2,
                    Math.min(desktopLine.progress - 6, desktopLine.height + 2)
                  )}px`,
                  opacity: desktopLine.progress > 0 ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* MOBILE LEFT RAIL */}
          <div
            className="pointer-events-none absolute md:hidden"
            style={{
              left: mobileRailLeft,
              top: mobileLine.top - mobileLineTopOffset,
              height: mobileLine.height,
            }}
          >
            <div className="relative h-full w-[8px] overflow-hidden rounded-full bg-slate-200">
              <div
                className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 rounded-full transition-[height] duration-150 ease-out"
                style={{
                  height: Math.max(
                    0,
                    Math.min(mobileLine.progress, mobileLine.height)
                  ),
                  background:
                    "linear-gradient(to bottom, #60a5fa, #3b82f6, #1d4ed8)",
                  boxShadow: "0 0 16px rgba(59,130,246,0.7)",
                }}
              />
              <div
                className="absolute h-4 w-4 rounded-full bg-blue-400/80 blur-[2px] transition-all duration-150"
                style={{
                  left: "50%",
                  top: Math.max(
                    -2,
                    Math.min(mobileLine.progress - 8, mobileLine.height - 10)
                  ),
                  transform: `translateX(calc(-50% + ${mobileGlowNudgeX}px))`,
                  opacity: mobileLine.progress > 0 ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* DESKTOP STEPS */}
          <div className="hidden space-y-28 md:block">
            {steps.map((step, index) => {
              const reverse = index % 2 !== 0;
              const isActive = index <= activeDesktop;
              const isCurrent = index === activeDesktop;

              return (
                <div
                  key={step.id}
                  className="relative grid items-center gap-10 md:grid-cols-[1fr_80px_1fr]"
                >
                  <div className="hidden md:block">
                    {!reverse ? (
                      <Content step={step} isActive={isActive} />
                    ) : (
                      <ImageCard
                        step={step}
                        align="right"
                        isActive={isActive}
                      />
                    )}
                  </div>

                  <div
                    className="hidden justify-center md:flex"
                    ref={(el) => {
                      desktopDotRefs.current[index] = el;
                    }}
                  >
                    <Dot isActive={isActive} isCurrent={isCurrent} />
                  </div>

                  <div className="hidden md:block">
                    {reverse ? (
                      <Content step={step} isActive={isActive} />
                    ) : (
                      <ImageCard
                        step={step}
                        align="left"
                        isActive={isActive}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE STEPS */}
          <div className="space-y-8 md:hidden">
            {steps.map((step, index) => {
              const isActive = index <= activeMobile;
              const isCurrent = index === activeMobile;

              return (
                <div
                  key={step.id}
                  className="relative"
                  style={{ paddingLeft: mobileCardPaddingLeft }}
                >
                  <div
                    ref={(el) => {
                      mobileDotRefs.current[index] = el;
                    }}
                    className="absolute top-6 z-10 -translate-x-1/2"
                    style={{ left: mobileRailLeft + 4 }}
                  >
                    <Dot isActive={isActive} isCurrent={isCurrent} small />
                  </div>

                  <div
                    className={`rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-70"
                    }`}
                  >
                    <h3 className="text-lg font-bold leading-snug text-blue-700 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                      {step.desc}
                    </p>

                    <div className="mt-5 overflow-hidden rounded-2xl">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="h-auto w-full object-contain transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(59, 130, 246, 0),
              0 0 0 rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 12px rgba(59, 130, 246, 0.55),
              0 0 28px rgba(59, 130, 246, 0.35);
          }
        }
      `}</style>
    </section>
  );
}

function Dot({
  isActive,
  isCurrent,
  small = false,
}: {
  isActive: boolean;
  isCurrent?: boolean;
  small?: boolean;
}) {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <div
        className={[
          small ? "h-7 w-7" : "h-8 w-8",
          "flex items-center justify-center rounded-full border-2 transition-all duration-300",
          isActive
            ? "scale-110 border-blue-500 bg-blue-100"
            : "scale-100 border-slate-300 bg-white",
          isCurrent ? "shadow-[0_0_24px_rgba(59,130,246,0.45)]" : "",
        ].join(" ")}
        style={{
          animation: isCurrent ? "pulseGlow 1.6s ease-in-out infinite" : "none",
        }}
      >
        <div
          className={[
            small ? "h-3 w-3" : "h-3.5 w-3.5",
            "rounded-full transition-all duration-300",
            isActive
              ? "bg-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              : "bg-transparent",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

function Content({
  step,
  isActive,
}: {
  step: (typeof steps)[number];
  isActive: boolean;
}) {
  return (
    <div
      className={`max-w-md transition-all duration-500 ${
        isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-60"
      }`}
    >
      <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-bold text-blue-700 md:text-2xl">
          {step.title}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-900">{step.desc}</p>
      </div>
    </div>
  );
}

function ImageCard({
  step,
  align = "left",
  isActive,
}: {
  step: (typeof steps)[number];
  align?: "left" | "right";
  isActive: boolean;
}) {
  return (
    <div
      className={`group transition-all duration-500 ${
        align === "right" ? "ml-auto" : ""
      } ${
        isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-70"
      }`}
    >
      <img
        src={step.img}
        alt={step.title}
        className="h-auto max-h-[300px] w-full rounded-2xl object-contain shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-[1.05]"
      />
    </div>
  );
}