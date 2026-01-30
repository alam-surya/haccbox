import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import customPackagingImage from '../../../../assets/gallery/galeri-03.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './CustomPackaging.css'

gsap.registerPlugin(ScrollTrigger)

function CustomPackaging() {
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
    <div className="custom-packaging-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Your Product, Your Packaging.</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              We customize packaging to your specifications—shape, size, structure, and finish. From L-shape and box styles to die-cut and empty box, we deliver solutions that fit your product and brand.
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
      <section ref={contentSectionRef} className="custom-packaging-section">
        <div className="custom-packaging-section-bg" aria-hidden="true">
          <img
            src={customPackagingImage}
            alt=""
            className="custom-packaging-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="custom-packaging-glass-card">
          <h2 className="custom-packaging-title">Your Product, Your Packaging.</h2>
          <p className="custom-packaging-intro">
            We tailor packaging to your needs. Our capability covers a range of box and empty types—from <strong>L-shape</strong> and <strong>Box A1</strong> to <strong>slanted-top</strong>, <strong>die-cut</strong>, <strong>empty box</strong>, <strong>bottom</strong>, and <strong>top-bottom</strong>—so you get the right structure, size, and finish for your product and industry.
          </p>
          <p className="custom-packaging-text">
            Custom dimensions, materials, and printing can be combined with these formats. We work to export and lab standards so your packaging is reliable for shipping and display.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CustomPackaging
