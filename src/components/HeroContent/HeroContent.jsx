import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import heroVideo from '../../assets/videos/hero-update.mp4'
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
          <Link to="#work" className="hero-learn-more">
            <span className="material-symbols-outlined">chevron_right</span>
            {t.hero.learnMore}
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source 
            src={heroVideo} 
            type="video/mp4" 
          />
          {t.hero.videoUnsupported}
        </video>
        <div className="hero-overlay"></div>
      </div>
    </section>
  )
}

export default HeroContent
