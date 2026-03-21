// app/work/page.tsx
import Navbar from "../../components/Navbar";

type CaseStudy = {
  id: string;
  brand: string;
  title: string;
  result: string;
  platform: string;
  industry: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-yt",
    brand: "FinTechCo",
    title: "Driving high‑intent app installs via YouTube creators",
    result: "3.2x ROAS · 1.1M+ views",
    platform: "YouTube",
    industry: "Finance",
  },
  {
    id: "d2c-ig",
    brand: "GlowD2C",
    title: "Scaling D2C skincare with Instagram reels",
    result: "18% lift in new customers",
    platform: "Instagram",
    industry: "Beauty",
  },
  {
    id: "saas-ugc",
    brand: "SaaSFlow",
    title: "UGC ads that cut CAC for a B2B tool",
    result: "27% lower CAC vs meta benchmarks",
    platform: "UGC",
    industry: "SaaS",
  },
  {
    id: "meme-campaign",
    brand: "PlayMore",
    title: "Meme‑led launch for a gaming platform",
    result: "4.5M impressions in 7 days",
    platform: "Meme",
    industry: "Gaming",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-slate-50">
        {/* Hero */}
        <section className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-emerald-400">
                Our Work
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                Creator campaigns that{" "}
                <span className="text-emerald-400">move real numbers.</span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-slate-300">
                A snapshot of how yourBrand partners with brands across finance,
                D2C, SaaS and consumer apps to deliver measurable growth using
                influencers and UGC.
              </p>
            </div>

            {/* Filter pills (static for now, can wire later) */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="px-4 py-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 cursor-default">
                All
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-700 text-slate-300">
                YouTube
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-700 text-slate-300">
                Instagram
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-700 text-slate-300">
                UGC
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-700 text-slate-300">
                Meme marketing
              </span>
            </div>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="uppercase tracking-[0.18em]">
                      {cs.platform}
                    </span>
                    <span>{cs.industry}</span>
                  </div>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold">
                    {cs.brand}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{cs.title}</p>
                  <p className="mt-4 text-sm font-medium text-emerald-400">
                    {cs.result}
                  </p>
                </div>
                <button className="mt-6 w-fit text-xs md:text-sm text-emerald-400 group-hover:underline">
                  View full case study →
                </button>
              </article>
            ))}
          </div>

          {/* Process strip */}
          <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 to-slate-900/60 px-6 py-8 md:px-10 md:py-10">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">
              How we work
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-3 text-sm md:text-base">
              <div>
                <h4 className="font-semibold">01 · Strategy</h4>
                <p className="mt-2 text-slate-300">
                  Deep‑dive into your offer, audience and goals to design the
                  right creator mix and campaign structure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">02 · Execution</h4>
                <p className="mt-2 text-slate-300">
                  Shortlisting, outreach, briefs, approvals and posting—managed
                  by our campaigns team.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">03 · Scale</h4>
                <p className="mt-2 text-slate-300">
                  Double down on top performers, test new angles and expand into
                  more creators and platforms.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-xl md:text-2xl font-semibold">
              Want your next campaign to be the next case study?
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Share your goals and we&apos;ll send a tailored influencer plan
              within 24 hours.
            </p>
            <button className="mt-6 bg-emerald-400 text-slate-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-emerald-300 hover:scale-105 transition">
              Book a strategy call
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
