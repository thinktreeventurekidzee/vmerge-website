import Link from "next/link";

const badgeStyles: Record<string, string> = {
  New: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50",
  Hot: "bg-rose-50 text-rose-700 ring-1 ring-rose-200/50",
  Beta: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/50",
};

type LinkItem = {
  label: string;
  href: string;
  badge?: "New" | "Hot" | "Beta";
  description?: string;
};

type DropdownColumnProps = {
  title: string;
  subtitle?: string;
  links: LinkItem[];
};

export default function DropdownColumn({
  title,
  subtitle,
  links,
}: DropdownColumnProps) {
  return (
    <div className="w-full sm:min-w-[240px] sm:max-w-sm">

      {/* HEADER */}
      <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-500">
          {title}
        </p>

        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium leading-5">
            {subtitle}
          </p>
        )}
      </div>

      {/* LINKS */}
      <ul className="space-y-1.5 sm:space-y-2">
        {links?.map((item, index) => (
          <li key={`${item.href}-${index}`}>
            <Link
              href={item.href}
              className="group flex items-start gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 
              hover:bg-slate-50/70 active:bg-slate-100 
              focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 
              transition-all duration-200"
            >

              {/* Indicator */}
              <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center 
              rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white 
              text-[9px] sm:text-[11px] font-bold shadow-sm ring-1 ring-white/30 
              group-hover:scale-105 transition">
                →
              </div>

              <div className="flex-1 min-w-0">

                {/* TITLE */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-semibold text-slate-900 
                  group-hover:text-slate-950 leading-5 sm:leading-6 transition-colors">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span
                      className={`text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full 
                      font-semibold uppercase tracking-[0.05em] ring-1 shadow-sm 
                      h-5 sm:h-6 flex items-center ${
                        badgeStyles[item.badge]
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* DESC */}
                {item.description && (
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-5 
                  group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                )}
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}