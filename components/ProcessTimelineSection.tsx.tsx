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

  const [activeDesktop, setActiveDesktop] = useState(0);

  const [desktopLine, setDesktopLine] = useState({
    top: 0,
    height: 0,
    progress: 0,
  });

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
      if (!isDesktop) return;

      const validDots = desktopDotRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (validDots.length < 2) return;

      const first = validDots[0];
      const last = validDots[validDots.length - 1];

      const top = getCenterInSection(first, section);
      const bottom = getCenterInSection(last, section);
      const height = Math.max(0, bottom - top);

      setDesktopLine((prev) => ({ ...prev, top, height }));
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const validDots = desktopDotRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

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

      setDesktopLine((prev) => ({
        ...prev,
        progress: accumulated,
      }));
      setActiveDesktop(current);
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

          {/* MOBILE STACKED CARDS */}
          <div className="space-y-5 md:hidden">
            {steps.map((step) => (
              <article
                key={step.id}
                className="mobile-process-card group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-400" />

                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 mobile-shine" />

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 ring-1 ring-blue-100 transition-colors duration-300">
                      Step {step.id}
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300">
                      Process
                    </span>
                  </div>

                  <h3 className="text-[1.02rem] font-bold leading-snug text-slate-900 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[0.92rem] leading-7 text-slate-600 transition-colors duration-300">
                    {step.desc}
                  </p>

                  <div className="mobile-image-shell mt-4 rounded-[16px] border border-slate-200 bg-slate-50">
                    <img
                      src={step.img}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      className="mobile-process-image h-full w-full object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
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

        @keyframes shineMove {
          0% {
            transform: translateX(-140%) skewX(-12deg);
          }
          100% {
            transform: translateX(340%) skewX(-12deg);
          }
        }

        .mobile-process-card {
          transition:
            transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 240ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 240ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-image-shell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 190px;
          max-height: 190px;
          overflow: hidden;
          padding: 8px;
        }

        .mobile-process-image {
          display: block;
          max-width: 100%;
          max-height: 174px;
          width: auto;
          height: auto;
          object-fit: contain;
          will-change: transform;
          transform: translateZ(0);
          transition: transform 500ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .mobile-process-card:hover {
            transform: translateY(-6px);
            border-color: rgba(96, 165, 250, 0.55);
            box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
          }

          .mobile-process-card:hover .mobile-process-image {
            transform: scale(1.03);
          }

          .mobile-process-card:hover .mobile-shine {
            opacity: 1;
            animation: shineMove 850ms ease;
          }

          .mobile-process-card:hover h3 {
            color: #1d4ed8;
          }
        }

        @media (hover: none), (pointer: coarse) {
          .mobile-process-card:active {
            transform: scale(0.985);
            border-color: rgba(59, 130, 246, 0.35);
            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
          }

          .mobile-process-card:active .mobile-process-image {
            transform: scale(1.02);
          }

          .mobile-process-card:active h3 {
            color: #1d4ed8;
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