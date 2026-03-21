export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-emerald-400">
            About yourBrand
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50 leading-tight">
            A modern{" "}
            <span className="text-emerald-400">
              creator‑first influencer agency
            </span>{" "}
            built for measurable growth
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            Since 2021, yourBrand has helped digital‑first brands turn creator
            trust into predictable revenue across YouTube, Instagram, UGC and
            meme campaigns.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Operating out of India, yourBrand works as an embedded growth
              partner for D2C, fintech, SaaS and consumer brands. The team
              handles everything from strategy and creator shortlisting to
              contracts, go‑live and reporting.
            </p>

            <p>
              Our vetted network spans 10+ categories including Finance,
              Technology, Beauty, Gaming and Lifestyle, so campaigns feel native
              to each audience instead of forced ads.
            </p>

            <p>
              Every decision is backed by data: audience insights, funnel stage
              and performance benchmarks, helping you scale what works and cut
              what does not—fast.
            </p>

            {/* Mini stats strip */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-2xl font-semibold text-slate-50">120+</p>
                <p className="text-slate-400">brands partnered</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-50">5k+</p>
                <p className="text-slate-400">vetted creators</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-50">3.5x</p>
                <p className="text-slate-400">avg. ROAS on sprints</p>
              </div>
            </div>
          </div>

          {/* Right highlight cards */}
          <div className="grid gap-5">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="font-semibold text-slate-50 text-lg">
                Data‑driven creator matching
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Shortlists built on audience fit, past performance and category
                expertise—not just follower count.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="font-semibold text-slate-50 text-lg">
                Multi‑market, multi‑lingual
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Run campaigns in Hindi, English and regional languages to reach
                Bharat and metro audiences together.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="font-semibold text-slate-50 text-lg">
                Full‑funnel focus
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                From awareness spikes to conversions and LTV, campaigns are
                designed around your core business metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="font-semibold text-slate-50 text-lg">
                Reliable execution & support
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Clear SLAs, structured feedback loops and a campaigns team that
                lives inside your Slack or WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400">
            Trusted by fast‑growing brands • 1000+ creator relationships • Built
            for performance‑driven marketing teams
          </p>
        </div>
      </div>
    </section>
  );
}
