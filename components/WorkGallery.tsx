import Link from "next/link";

const PROJECTS = [
  {
    title: "Fintech App Launch Campaign",
    category: "YouTube · Finance",
    outcome: "2.9x ROAS · 1.4M+ views",
    summary:
      "Executed a creator-led launch strategy with finance educators and trusted niche voices to drive high-intent user acquisition.",
  },
  {
    title: "D2C Skincare Growth Program",
    category: "Instagram · D2C",
    outcome: "+18% new customers",
    summary:
      "Scaled acquisition using reels, creator whitelisting and repeat collaborations with micro-influencers in beauty and lifestyle.",
  },
  {
    title: "UGC Content Engine for SaaS",
    category: "UGC · SaaS",
    outcome: "60+ ad-ready assets",
    summary:
      "Built a repeatable UGC pipeline to produce conversion-focused content for paid campaigns, landing pages and testing.",
  },
  {
    title: "Gaming Brand Meme Campaign",
    category: "Memes · Gaming",
    outcome: "4.5M impressions in 7 days",
    summary:
      "Used meme pages, trend-native creative and fast execution to drive mass awareness during a high-attention product push.",
  },
];

export default function WorkGallery() {
  return (
    <section className="bg-slate-950 py-14 sm:py-16 md:py-24">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-white leading-tight">
              Campaigns built for measurable outcomes
            </h2>

            <p className="mt-3 sm:mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">
              A few examples of how we help brands use creators, UGC and
              performance-led execution to generate awareness, acquisition and growth.
            </p>

            <Link
              href="/work"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full 
              border border-white/15 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold 
              text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore all work →
            </Link>

          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl sm:rounded-3xl border border-white/10 
                bg-white/5 p-4 sm:p-6 
                transition duration-300 
                sm:hover:-translate-y-1 sm:hover:border-cyan-400/40 sm:hover:bg-white/[0.07]"
              >

                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-2 sm:mt-3 text-base sm:text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-emerald-300">
                  {project.outcome}
                </p>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 text-slate-300">
                  {project.summary}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}