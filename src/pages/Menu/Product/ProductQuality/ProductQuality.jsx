import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import qualityImage from '../../../../assets/gallery/galeri-02.webp'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
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
    <div className="product-quality-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heading}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.description}</p>
            <button type="button" className="hero-learn-more" onClick={scrollToContent}>
              <span className="material-symbols-outlined">chevron_right</span>
              {p.seeMore}
            </button>
          </div>
        </div>
        <div className="hero-video-container">
          <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
            {p.videoUnsupported}
          </video>
          <div className="hero-overlay" />
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="product-quality-section">
        <div className="product-quality-section-bg" aria-hidden="true">
          <img
            src={qualityImage}
            alt=""
            className="product-quality-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="product-quality-glass-card">
          <h2 className="product-quality-title">{p.title}</h2>
          <p className="product-quality-intro">{p.intro}</p>
          <div className="product-quality-list">
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">{p.cartonQuality}</h3>
              <p className="product-quality-item-text">{p.cartonQualityText}</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">{p.foamQuality}</h3>
              <p className="product-quality-item-text">{p.foamQualityText}</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">{p.edgeProtector}</h3>
              <p className="product-quality-item-text">{p.edgeProtectorText}</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">{p.honeycombThickness}</h3>
              <p className="product-quality-item-text">{p.honeycombThicknessText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductQuality
