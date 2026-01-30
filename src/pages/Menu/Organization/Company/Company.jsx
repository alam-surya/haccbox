import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import companyImage from '../../../../assets/images/company.webp'
import logoImage from '../../../../assets/images/logo.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './Company.css'

gsap.registerPlugin(ScrollTrigger)

function Company() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
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
    <div className="company-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Our Company: Growth, Milestones, and Commitment to Quality
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              From our founding to today, we have built a company focused on reliable custom packaging
              and export-ready solutions. Discover our journey, key milestones, and the values that
              drive us to deliver quality and trust to every partner.
            </p>
            <button type="button" className="hero-learn-more" onClick={scrollToContent}>
              <span className="material-symbols-outlined">chevron_right</span>
              See more
            </button>
          </div>
        </div>
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
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay" />
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
        <div className="company-section-bg" aria-hidden="true">
          <img
            src={companyImage}
            alt=""
            className="company-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="company-glass-card">
          <img src={logoImage} alt="Haccbox" className="company-card-logo" />
          <h2 className="company-title">Our Journey</h2>
          <p className="company-intro">
            <strong>Haccbox</strong> is the brand identity of <strong>CV. Cahaya Abadi Habsoro</strong>—a trusted name in quality packaging and distribution, serving producers and customers with custom solutions.
          </p>
          <p className="company-text">
            <strong>Cahaya Abadi</strong> markets and distributes high-quality carton box packaging for the furniture industry. We are part of the <strong>Mitra Persada Carton Box</strong> group, in the industry since 2012.
          </p>
          <p className="company-text">
            In <strong>2021</strong>, Cahaya Abadi was established to bridge producers and customers with custom packaging that meets export and lab standards, plus complementary solutions like styrofoam for optimal shipping protection.
          </p>
          <p className="company-text">
            We keep innovating with safe, durable, and eco-friendly packaging. In <strong>2025</strong>, we launched <strong>Haccbox</strong> as our new brand to deliver customizable packaging design and more precise, professional service.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Company
