import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import finishingOptionImage from '../../../../assets/gallery/galeri-03.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './FinishingOption.css'

gsap.registerPlugin(ScrollTrigger)

function FinishingOption() {
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
    <div className="finishing-option-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Glue, Staples, or Stitching—Finish It Your Way.</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              We offer two finishing options for your box: glue or staples and stitching. Choose the one that fits your product and handling needs.
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
      <section ref={contentSectionRef} className="finishing-option-section">
        <div className="finishing-option-section-bg" aria-hidden="true">
          <img
            src={finishingOptionImage}
            alt=""
            className="finishing-option-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="finishing-option-glass-card">
          <h2 className="finishing-option-title">Glue, Staples, or Stitching.</h2>
          <p className="finishing-option-intro">
            We offer two main finishing options for your box so you can match strength, appearance, and handling to your product and logistics.
          </p>
          <div className="finishing-option-list">
            <div className="finishing-option-item">
              <h3 className="finishing-option-item-title">Glue</h3>
              <p className="finishing-option-item-text">Glue finishing bonds the box panels for a clean, seamless look. Suited for retail and display packaging where a smooth finish is preferred.</p>
            </div>
            <div className="finishing-option-item">
              <h3 className="finishing-option-item-title">Staples or Stitching</h3>
              <p className="finishing-option-item-text">Staples or stitching gives a strong, durable closure. Ideal for heavier loads, shipping, and reuse where extra hold is needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FinishingOption
