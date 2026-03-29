import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandsSection from "../components/BrandsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorkGallery from "../components/WorkGallery";
import ProcessSection from "../components/ProcessSection";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900 overflow-x-hidden">
        <Hero />
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