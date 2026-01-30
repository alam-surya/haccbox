import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import qualityImage from '../../../../assets/gallery/galeri-02.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './ProductQuality.css'

gsap.registerPlugin(ScrollTrigger)

function ProductQuality() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)

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
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="product-quality-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Built to Last—Quality You Can Measure</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              Our commitment to quality in every material and specification. From carton grade to foam, edge protectors, and honeycomb board—we ensure consistent standards for your packaging.
            </p>
            <button type="button" className="hero-learn-more" onClick={scrollToContent}>
              <span className="material-symbols-outlined">chevron_right</span>
              See more
            </button>
          </div>
        </div>
        <div className="hero-video-container">
          <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
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
          <h2 className="product-quality-title">Product Quality</h2>
          <p className="product-quality-intro">
            We maintain strict quality standards across materials and dimensions. Below are the key specifications we apply to deliver reliable, export-ready packaging.
          </p>
          <div className="product-quality-list">
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">Carton Quality</h3>
              <p className="product-quality-item-text">Carton grade and grammage are selected to meet strength and print requirements. We use quality board suitable for furniture and export shipping.</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">Foam Quality</h3>
              <p className="product-quality-item-text">Foam density and type are specified for cushioning and protection. We supply foam that meets durability and safety standards for your products.</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">Edge Protector Thickness</h3>
              <p className="product-quality-item-text">Edge protector thickness is chosen to protect corners and edges during handling and transport. Consistent thickness ensures reliable protection.</p>
            </div>
            <div className="product-quality-item">
              <h3 className="product-quality-item-title">Honeycomb Board Thickness</h3>
              <p className="product-quality-item-text">Honeycomb board thickness is specified for rigidity and void fill. We use honeycomb that meets the required thickness for structural support and protection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductQuality
