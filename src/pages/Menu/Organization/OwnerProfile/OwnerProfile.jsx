import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ownerProfileImage from '../../../../assets/images/Organization/OwnerProfile/IMG_7624 4.webp'
import heroImageR1000590 from '../../../../assets/images/Organization/OwnerProfile/R1000590.webp'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './OwnerProfile.css'

gsap.registerPlugin(ScrollTrigger)

function OwnerProfile() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.ownerProfile || {}

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
    <div className="owner-profile-page page-hero-dark">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heading}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.description}</p>
          </div>
        </div>
        <div className="hero-video-grid">
          <div className="hero-video-card">
            <img
              src={heroImageR1000590}
              alt=""
              className="hero-video-card-video"
              loading="eager"
            />
          </div>
        </div>
        <div
          ref={scrollIndicatorRef}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      <section ref={contentSectionRef} className="owner-profile-section">
        <header className="owner-profile-about-header">
          <span className="owner-profile-about-prefix">_</span>
          <h2 className="owner-profile-about-heading">{p.aboutMainHeading}</h2>
        </header>
        <div className="owner-profile-about-layout">
          <div className="owner-profile-about-text">
            <p className="owner-profile-about-supporting">{p.aboutSupporting}</p>
            {(p.attribution || p.attributionRole) && (
              <p className="owner-profile-attribution">
                <strong>{p.attribution}</strong>
                {p.attributionRole && <><br />{p.attributionRole}</>}
              </p>
            )}
            <Link to="/contact-person" className="owner-profile-about-btn">
              {p.aboutCta}
            </Link>
          </div>
          <div className="owner-profile-about-image-wrap">
            <img
              src={ownerProfileImage}
              alt=""
              className="owner-profile-about-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerProfile
