import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/hero-update.mp4'
import companyImage from '../../assets/images/company.webp'
import { useLanguage } from '../../context/LanguageContext'
import './HeroContent.css'

gsap.registerPlugin(ScrollTrigger)

function HeroContent() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero-content-section">
      {/* Text Content Section */}
      <div ref={contentRef} className="hero-content">
        <div className="hero-content-left">
          <h1 className="hero-heading">
            {t.hero.heading}
          </h1>
        </div>
        <div className="hero-content-right">
          <p className="hero-description">
            {t.hero.description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-video-container">
        <img
          src={companyImage}
          alt="Company"
          className="hero-video"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="hero-overlay"></div>
      </div>


    </section>
  )
}

export default HeroContent
