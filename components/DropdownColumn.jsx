import Link from "next/link";

const badgeStyles = {
  New: "bg-cyan-100 text-cyan-600",
  Hot: "bg-rose-100 text-rose-600",
  Beta: "bg-indigo-100 text-indigo-600",
};

export default function DropdownColumn({ title, subtitle, links }) {
  return (
    <div className="min-w-[220px] max-w-xs">

      {/* HEADER */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        )}
      </div>

      {/* LINKS */}
      <ul className="space-y-2">
        {links?.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-cyan-50 transition"
            >
              {/* icon dot */}
              <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-cyan-100 text-[10px] text-cyan-600">
                ●
              </span>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-800 group-hover:text-cyan-600 transition">
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
                  <p className="mt-1 text-xs text-slate-500">
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