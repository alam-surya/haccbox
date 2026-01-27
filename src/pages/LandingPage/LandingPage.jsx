import Hero from '../../components/Hero/Hero'
import HeroContent from '../../components/HeroContent/HeroContent'
import CertificationSection from '../../components/CertificationSection/CertificationSection'
import CategorySection from '../../components/CategorySection/CategorySection'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <HeroContent />
      <CertificationSection />
      <CategorySection />
    </div>
  )
}

export default LandingPage

