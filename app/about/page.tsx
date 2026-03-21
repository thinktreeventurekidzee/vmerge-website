import AboutSection from "../../components/AboutSection";
import WorkGallery from "../../components/WorkGallery";
import ProcessSection from "../../components/ProcessSection";
import InfluencerNetwork from "../../components/InfluencerNetwork";
import LeadForm from "../../components/LeadForm";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-28 pb-16 grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            About yourBrand
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Creator-first influencer marketing
            <span className="text-emerald-400"> built for brands that scale.</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl">
            yourBrand connects high-intent creators with performance-focused brands,
            delivering measurable growth across YouTube, Instagram and UGC campaigns.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs text-slate-400">
            Why brands choose us
          </p>
        </div>
      </section>

      {/* SAFE TEST BLOCK */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center text-slate-400">
          About Page Working ✅
        </div>
      </section>

    </main>
  );
}