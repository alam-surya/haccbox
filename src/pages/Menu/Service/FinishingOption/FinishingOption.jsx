import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage1 from '../../../../assets/images/Service/FinishingOption/IMG_0379 4.webp'
import heroImage2 from '../../../../assets/images/Service/FinishingOption/IMG_8460 3.webp'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './FinishingOption.css'

gsap.registerPlugin(ScrollTrigger)

function FinishingOption() {
  const sectionRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.finishingOption || {}

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current
    if (!scrollIndicator) return
    gsap.set(scrollIndicator, { opacity: 0, y: -10 })
    const indicatorTl = gsap.timeline({ delay: 1 })
    indicatorTl
      .to(scrollIndicator, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(scrollIndicator, { y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' })
    scrollIndicator.addEventListener('click', scrollToContent)
    return () => {
      indicatorTl.kill()
      scrollIndicator.removeEventListener('click', scrollToContent)
    }
  }, [])

  useEffect(() => {
    const contentSection = contentSectionRef.current
    if (!contentSection) return
    gsap.fromTo(
      contentSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: contentSection, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    )
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }, [])

  return (
    <div className="finishing-option-page page-hero-dark">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heading}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.description}</p>
          </div>
        </div>
        <div className="hero-video-grid">
          <div className="hero-video-card">
            <img src={heroImage1} alt="" className="hero-video-card-video" loading="eager" />
          </div>
          <div className="hero-video-card">
            <img src={heroImage2} alt="" className="hero-video-card-video" loading="eager" />
          </div>
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="finishing-option-section">
        <header className="finishing-option-about-header">
          <span className="finishing-option-about-prefix">_</span>
          <h2 className="finishing-option-about-heading">{p.aboutMainHeading}</h2>
        </header>
        <div className="finishing-option-about-layout">
          <div className="finishing-option-about-text">
            <p className="finishing-option-about-supporting">{p.aboutSupporting}</p>
            <Link to="/contact-person" className="finishing-option-about-btn">
              {p.aboutCta}
            </Link>
          </div>
        </div>

        <section className="finishing-option-specs-section">
          <div className="finishing-option-specs-grid">
            <div className="finishing-option-spec-card">
              <div className="finishing-option-spec-image-wrap">
                <img src={heroImage2} alt="" className="finishing-option-spec-image" loading="lazy" />
              </div>
              <div className="finishing-option-spec-content">
                <h3 className="finishing-option-spec-title">{p.glue}</h3>
                <p className="finishing-option-spec-text">{p.glueText}</p>
              </div>
            </div>
            <div className="finishing-option-spec-card">
              <div className="finishing-option-spec-image-wrap">
                <img src={heroImage1} alt="" className="finishing-option-spec-image" loading="lazy" />
              </div>
              <div className="finishing-option-spec-content">
                <h3 className="finishing-option-spec-title">{p.staples}</h3>
                <p className="finishing-option-spec-text">{p.staplesText}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default FinishingOption
