"use client";

import { useEffect, useState } from "react";

export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stops = [20, 50, 80];

  return (
    <div className="fixed left-6 top-0 h-full hidden lg:flex items-center z-50">

      {/* LINE */}
      <div className="relative w-[6px] h-[75vh] rounded-full bg-slate-200 overflow-hidden">

        {/* PROGRESS LINE */}
        <div
          className="absolute top-0 left-0 w-full 
          bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700
          transition-all duration-300 ease-out
          shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          style={{ height: `${progress}%` }}
        >

          {/* 🔥 FLOWING ENERGY EFFECT */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="energy-flow" />
          </div>

        </div>

        {/* STOPS */}
        {stops.map((stop, i) => {
          const isActive = progress >= stop;

          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${stop}%` }}
            >
              <div
                className={`
                w-[14px] h-[14px] rounded-full border-2 transition-all duration-300

                ${
                  isActive
                    ? "bg-blue-600 border-blue-700 scale-110 active-dot"
                    : "bg-white border-blue-300"
                }
                `}
              />
            </div>
          );
        })}

      </div>

    </div>
  );
}