import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import customPrintingImage from '../../../../assets/gallery/galeri-03.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './CustomPrinting.css'

gsap.registerPlugin(ScrollTrigger)

function CustomPrinting() {
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
    <div className="custom-printing-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Quality Color, On Your Box.</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              We accept box printing to your design—with a focus on color quality. From logo and graphics to full-color print, we deliver sharp, consistent results on your packaging.
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
      <section ref={contentSectionRef} className="custom-printing-section">
        <div className="custom-printing-section-bg" aria-hidden="true">
          <img
            src={customPrintingImage}
            alt=""
            className="custom-printing-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="custom-printing-glass-card">
          <h2 className="custom-printing-title">Quality Color, On Your Box.</h2>
          <p className="custom-printing-intro">
            We take on box printing with an emphasis on <strong>color quality</strong>. Whether it’s spot color, full-color process, or brand-matched Pantone, we aim for accurate, vivid, and consistent print so your packaging looks professional and on-brand.
          </p>
          <p className="custom-printing-text">
            Our capability covers printing on carton and corrugated box—logos, graphics, text, and barcodes. We work to your artwork and specifications so the final result meets retail and export expectations.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CustomPrinting
