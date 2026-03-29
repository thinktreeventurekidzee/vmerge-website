import Navbar from "../../components/Navbar";
import Link from "next/link";

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
    brand: "Fintech App",
    title: "Driving high-intent app installs via YouTube creators",
    result: "3.2x ROAS · 1.1M+ views",
    platform: "YouTube",
    industry: "Finance",
  },
  {
    id: "d2c-ig",
    brand: "Skincare Brand",
    title: "Scaling D2C growth using Instagram reels",
    result: "+18% new customers",
    platform: "Instagram",
    industry: "Beauty",
  },
  {
    id: "saas-ugc",
    brand: "SaaS Tool",
    title: "UGC ads reducing CAC for B2B product",
    result: "27% lower CAC",
    platform: "UGC",
    industry: "SaaS",
  },
  {
    id: "meme-campaign",
    brand: "Gaming Platform",
    title: "Meme-led viral launch campaign",
    result: "4.5M impressions in 7 days",
    platform: "Meme",
    industry: "Gaming",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900">

        {/* 🔝 HERO */}
        <section className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 font-semibold">
                Case Studies
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Campaigns that{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
                  drive real growth
                </span>
              </h1>

              <p className="mt-4 text-slate-600">
                See how Vmerg helps brands across fintech, D2C, SaaS and gaming
                scale using influencer marketing and creator-led campaigns.
              </p>
            </div>

            {/* FILTERS */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["All", "YouTube", "Instagram", "UGC", "Meme"].map((item, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full border ${
                    i === 0
                      ? "bg-cyan-100 text-cyan-700 border-cyan-300"
                      : "border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-600"
                  } transition cursor-pointer`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 🧩 CASE STUDIES */}
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">

            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-cyan-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="uppercase tracking-[0.18em] text-cyan-600 font-semibold">
                      {cs.platform}
                    </span>
                    <span>{cs.industry}</span>
                  </div>

                  <h3 className="mt-3 text-lg md:text-xl font-semibold">
                    {cs.brand}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {cs.title}
                  </p>

                  <p className="mt-4 text-sm font-medium text-indigo-600">
                    {cs.result}
                  </p>
                </div>

                <button className="mt-6 w-fit text-sm text-cyan-600 group-hover:text-indigo-600 transition">
                  View full case study →
                </button>
              </article>
            ))}
          </div>

          {/* 💎 PROCESS STRIP */}
          <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 to-indigo-50 px-6 py-10 md:px-10">

            <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 font-semibold">
              How we work
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm">

              <div>
                <h4 className="font-semibold text-slate-900">01 · Strategy</h4>
                <p className="mt-2 text-slate-600">
                  Understanding your goals, audience and designing the right influencer mix.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">02 · Execution</h4>
                <p className="mt-2 text-slate-600">
                  Managing creators, content, approvals and campaign launch.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">03 · Scale</h4>
                <p className="mt-2 text-slate-600">
                  Optimizing performance and scaling high-performing campaigns.
                </p>
              </div>

            </div>
          </div>

          {/* 💰 CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Want your campaign to be our next case study?
            </h2>

            <p className="mt-3 text-slate-600">
              Share your goals and we’ll design a custom influencer strategy for your brand.
            </p>

            <Link
              href="/#lead-form"
              className="inline-block mt-6 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-full text-sm font-medium shadow hover:scale-105 transition"
            >
              Get Strategy Plan 🚀
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}