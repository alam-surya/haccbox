import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import qualityImage from '../../../../assets/gallery/galeri-02.webp'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './ProductQuality.css'

gsap.registerPlugin(ScrollTrigger)

function ProductQuality() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.productQuality || {}

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
    <div className="product-quality-page page-hero-dark">
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
          {[1, 2, 3].map((i) => (
            <div key={i} className="hero-video-card">
              <video className="hero-video-card-video" autoPlay loop muted playsInline preload="auto">
                <source src={heroVideo} type="video/mp4" />
                {p.videoUnsupported}
              </video>
            </div>
          ))}
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="product-quality-section">
        <header className="product-quality-about-header">
          <span className="product-quality-about-prefix">_</span>
          <h2 className="product-quality-about-heading">{p.aboutMainHeading}</h2>
        </header>
        <div className="product-quality-about-layout">
          <div className="product-quality-about-text">
            <p className="product-quality-about-supporting">{p.aboutSupporting}</p>
            <Link to="/contact-person" className="product-quality-about-btn">
              {p.aboutCta}
            </Link>
          </div>
          <div className="product-quality-about-image-wrap">
            <img
              src={qualityImage}
              alt=""
              className="product-quality-about-image"
              loading="lazy"
            />
          </div>
        </div>

        <section className="product-quality-specs-section">
          <div className="product-quality-specs-grid">
            <div className="product-quality-spec-card">
              <h3 className="product-quality-spec-title">{p.cartonQuality}</h3>
              <p className="product-quality-spec-text">{p.cartonQualityText}</p>
            </div>
            <div className="product-quality-spec-card">
              <h3 className="product-quality-spec-title">{p.foamQuality}</h3>
              <p className="product-quality-spec-text">{p.foamQualityText}</p>
            </div>
            <div className="product-quality-spec-card">
              <h3 className="product-quality-spec-title">{p.edgeProtector}</h3>
              <p className="product-quality-spec-text">{p.edgeProtectorText}</p>
            </div>
            <div className="product-quality-spec-card">
              <h3 className="product-quality-spec-title">{p.honeycombThickness}</h3>
              <p className="product-quality-spec-text">{p.honeycombThicknessText}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default ProductQuality
