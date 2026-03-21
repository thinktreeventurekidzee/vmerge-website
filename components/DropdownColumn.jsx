// components/DropdownColumn.jsx
import Link from "next/link";

const badgeStyles = {
  New: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40",
  Hot: "bg-rose-500/15 text-rose-300 border border-rose-400/40",
  Beta: "bg-sky-500/15 text-sky-300 border border-sky-400/40",
};

export default function DropdownColumn({ title, subtitle, links }) {
  return (
    <div className="min-w-[200px] max-w-xs">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        )}
      </div>

      <ul className="space-y-2">
        {links?.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-900/80 transition-colors"
            >
              <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-[10px] text-slate-400 group-hover:border-emerald-400 group-hover:text-emerald-300 transition-colors">
                ●
              </span>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-100 group-hover:text-emerald-200 transition-colors">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={
                        "text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide " +
                        badgeStyles[item.badge]
                      }
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
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
