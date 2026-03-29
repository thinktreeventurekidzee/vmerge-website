import Hero from "../components/Hero";
import BrandsSection from "../components/BrandsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorkGallery from "../components/WorkGallery";
import ProcessSection from "../components/ProcessSection";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
import TrustSection from "../components/TrustSection";


export default function Home() {
  return (
    <>
      <main className="bg-white text-slate-900 overflow-x-hidden">
        <Hero />
        <TrustSection />
        <BrandsSection />
        <AboutSection />
        <ServicesSection />
        <WorkGallery />
        <ProcessSection />
        <section id="lead-form">
          <LeadForm />
        </section>
      </main>

      <Footer />
    </>
  );
}