import Navbar from "../../components/Navbar";
import AboutSection from "../../components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <AboutSection />
      </div>
    </>
  );
}