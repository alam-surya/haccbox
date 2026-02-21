import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fotoUtama from '../../../../assets/images/Organization/Company/foto-utama.webp'
import img0112 from '../../../../assets/images/Organization/Company/IMG_0112 2.webp'
import companyImage from '../../../../assets/images/Organization/Company/cahaya-abadi-update.png'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './Company.css'

gsap.registerPlugin(ScrollTrigger)

function Company() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const c = t.pages?.company || {}

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
    <div className="company-page page-hero-dark">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              {c.heading}
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              {c.description}
            </p>
          </div>
        </div>
        <div className="hero-video-grid">
          <div className="hero-video-card">
            <img
              src={fotoUtama}
              alt=""
              className="hero-video-card-video"
              loading="eager"
            />
          </div>
          <div className="hero-video-card">
            <img
              src={img0112}
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

      <section ref={contentSectionRef} className="company-section">
        <header className="company-about-header">
          <span className="company-about-prefix">_</span>
          <h2 className="company-about-heading">{c.aboutMainHeading}</h2>
        </header>
        <div className="company-about-layout">
          <div className="company-about-text">
            <p className="company-about-supporting">{c.aboutSupporting}</p>
            <Link to="/contact-person" className="company-about-btn">
              {c.aboutCta}
            </Link>
          </div>
          <div className="company-about-image-wrap">
            <img
              src={companyImage}
              alt=""
              className="company-about-image"
              loading="lazy"
            />
          </div>
        </div>

        <section className="company-history-section">
          <div className="company-history-grid">
            <div className="company-history-card">
              <h3 className="company-history-title">{c.milestone2012}</h3>
              <p className="company-history-text">{c.milestone2012Text}</p>
            </div>
            <div className="company-history-card">
              <h3 className="company-history-title">{c.milestone2021}</h3>
              <p className="company-history-text">{c.milestone2021Text}</p>
            </div>
            <div className="company-history-card">
              <h3 className="company-history-title">{c.milestone2025}</h3>
              <p className="company-history-text">{c.milestone2025Text}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Company
