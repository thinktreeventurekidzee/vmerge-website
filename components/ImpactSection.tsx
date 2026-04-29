"use client";

import {
  Share2,
  Gift,
  CalendarCheck,
  Users,
  Package,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Reach & Frequency Campaigns",
  },
  {
    icon: Gift,
    title: "Product Sampling",
  },
  {
    icon: CalendarCheck,
    title: "Online & Offline Events",
  },
  {
    icon: Users,
    title: "Affiliate & Conversion Campaigns",
  },
  {
    icon: Package,
    title: "Unboxing",
  },
  {
    icon: Lightbulb,
    title: "Product Placement",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Driving Impact Using{" "}
            <span className="text-blue-700">Multiple Approaches</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Execute Powerful Influencer Campaigns Across Formats That Drive
            Awareness, Engagement, And Conversions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group flex flex-col items-center text-center
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-2 hover:scale-[1.04]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full
                    bg-white shadow-md flex items-center justify-center
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:bg-blue-600
                    group-hover:scale-110
                    group-hover:shadow-[0_18px_35px_rgba(37,99,235,0.22)]
                  "
                >
                  <Icon
                    size={24}
                    className="
                      text-blue-700 transition-all duration-500
                      group-hover:text-white group-hover:scale-110 group-hover:rotate-3
                    "
                  />
                </div>

                {/* TEXT */}
                <p
                  className="
                    mt-4 text-xs sm:text-sm font-medium text-slate-700 max-w-[140px]
                    transition-all duration-500
                    group-hover:text-slate-900 group-hover:translate-y-1
                  "
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}