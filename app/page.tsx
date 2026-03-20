import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BrandsSection from '../components/BrandsSection'
import ServicesSection from '../components/ServicesSection'
import WorkGallery from '../components/WorkGallery'
import ProcessSection from '../components/ProcessSection'
import LeadForm from '../components/LeadForm'
import InfluencerNetwork from '../components/InfluencerNetwork'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <WorkGallery />
      <ProcessSection />
      <InfluencerNetwork />
      <LeadForm />
    </>
  )
}