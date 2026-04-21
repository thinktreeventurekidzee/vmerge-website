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
            Execute powerful influencer campaigns across formats that drive awareness, engagement, and conversions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition"
              >

                {/* ICON */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full 
                bg-white shadow-md flex items-center justify-center
                group-hover:bg-blue-600 transition duration-300">

                  <Icon
                    size={24}
                    className="text-blue-700 group-hover:text-white transition"
                  />
                </div>

                {/* TEXT */}
                <p className="mt-4 text-xs sm:text-sm font-medium text-slate-700 max-w-[140px]">
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