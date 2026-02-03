import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import sampleVideo from '../../../../assets/videos/sample.mp4'
import sample2Video from '../../../../assets/videos/sample2.mp4'
import sample3Video from '../../../../assets/videos/sample3.mp4'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import './OrganizationCulture.css'

gsap.registerPlugin(ScrollTrigger)

function OrganizationCulture() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const carouselVideoRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  const p = t.pages?.organizationCulture || {}
  const VALUE_CARDS = [
    { id: 'professional', title: p.professional, description: p.professionalDesc, video: sampleVideo },
    { id: 'disciplined', title: p.disciplined, description: p.disciplinedDesc, video: sample2Video },
    { id: 'growing', title: p.growing, description: p.growingDesc, video: sample3Video }
  ]

  const goToSlide = (index) => {
    setCurrentSlide((index + VALUE_CARDS.length) % VALUE_CARDS.length)
  }
  const goPrev = () => goToSlide(currentSlide - 1)
  const goNext = () => goToSlide(currentSlide + 1)

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
    <div className="organization-culture-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
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
            {p.videoUnsupported}
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

      <section ref={contentSectionRef} className="organization-culture-section">
        <div className="organization-culture-section-bg" aria-hidden="true" />
        <div className="organization-culture-header">
         
          <h2 className="organization-culture-title">{p.title}</h2>
          <p className="organization-culture-intro">{p.intro}</p>
        </div>
        <div className="organization-culture-carousel-wrapper">
          <div className="organization-culture-carousel-card">
            <div className="organization-culture-carousel-video-col">
              <video
                ref={carouselVideoRef}
                key={currentSlide}
                className="organization-culture-carousel-video"
                src={VALUE_CARDS[currentSlide].video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                {p.videoUnsupported}
              </video>
            </div>
            <div className="organization-culture-carousel-content-col">
              <h3 className="organization-culture-carousel-title">
                {VALUE_CARDS[currentSlide].title}
              </h3>
              <p className="organization-culture-carousel-description">
                {VALUE_CARDS[currentSlide].description}
              </p>
              <div className="organization-culture-carousel-footer">
                <div className="organization-culture-carousel-nav">
                  <button
                    type="button"
                    className="organization-culture-carousel-btn organization-culture-carousel-btn-prev"
                    aria-label="Previous slide"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      goPrev()
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="organization-culture-carousel-btn organization-culture-carousel-btn-next"
                    aria-label="Next slide"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      goNext()
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrganizationCulture
