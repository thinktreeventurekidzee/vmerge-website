"use client";

import DropdownColumn from "./DropdownColumn";

type MegaMenuProps = {
  open: boolean;
};

export default function MegaMenu({ open }: MegaMenuProps) {
  return (
    <div
      className={`absolute left-1/2 top-full mt-4 w-[820px] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-3xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-[0_32px_120px_rgba(15,23,42,0.95)] px-6 py-6 md:px-8 md:py-7 grid md:grid-cols-[2fr,1.5fr] gap-8 transition-all duration-200 ${
        open
          ? "opacity-100 translate-y-0 visible pointer-events-auto"
          : "opacity-0 translate-y-2 invisible pointer-events-none"
      }`}
    >
      {/* left: columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <DropdownColumn
          title="By platform"
          subtitle="Meet your audience where they already hang out."
          links={[
            {
              label: "YouTube creator sprints",
              href: "/services",
              description: "Long‑form and integrations for high‑intent traffic.",
            },
            {
              label: "Instagram & Shorts",
              href: "/services",
              description: "Reels and short‑form bursts for launches.",
            },
            {
              label: "UGC content studio",
              href: "/services#ugc",
              description: "Creator‑shot ads for paid and landing pages.",
              badge: "Hot",
            },
            {
              label: "Meme marketing pods",
              href: "/services",
              description: "Native meme pages for youth audiences.",
            },
          ]}
        />

        <DropdownColumn
          title="Use cases"
          subtitle="Built for growth and brand teams."
          links={[
            {
              label: "App installs & sign‑ups",
              href: "/work",
              description: "Fintech, SaaS and consumer apps.",
            },
            {
              label: "D2C new customer growth",
              href: "/work",
              description: "Awareness + conversions for online stores.",
            },
            {
              label: "Product launches",
              href: "/work",
              description: "High‑impact multi‑creator launches.",
            },
            {
              label: "Always‑on programs",
              href: "/services",
              description: "Retainers with monthly creator pods.",
              badge: "New",
            },
          ]}
        />
      </div>

      {/* right: highlight card */}
      <div className="hidden md:flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-400">
            Recommended for
          </p>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">
            Growth teams spending ₹2L–₹50L / month on performance.
          </h3>
          <p className="mt-2 text-xs text-slate-400">
            See how brands like yours use yourBrand for predictable,
            creator‑led acquisition across multiple platforms.
          </p>
        </div>

        <button className="mt-4 w-fit rounded-full border border-emerald-400/70 bg-emerald-400/10 px-4 py-2 text-[11px] font-medium text-emerald-200 hover:bg-emerald-400/20 transition">
          View case studies →
        </button>
      </div>
    </div>
  );
}
