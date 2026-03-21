import AboutSection from "@/components/AboutSection";
import WorkGallery from "@/components/WorkGallery";
import ProcessSection from "@/components/ProcessSection";

import LeadForm from "@/components/LeadForm";

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <AboutSection />
      <ProcessSection />
      <WorkGallery />
     
      <LeadForm />
    </main>
  );
}