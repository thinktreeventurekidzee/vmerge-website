import AboutSection from "@/components/AboutSection";
import WorkGallery from "@/components/WorkGallery";
import ProcessSection from "@/components/ProcessSection";
import LeadForm from "@/components/LeadForm";

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-indigo-500/5" />
      <div className="relative z-10">
        <AboutSection />
        <ProcessSection />
        <WorkGallery />
        <LeadForm />
      </div>
    </main>
  );
}