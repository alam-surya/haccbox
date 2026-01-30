import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import sampleVideo from '../../../../assets/videos/sample.mp4'
import sample2Video from '../../../../assets/videos/sample2.mp4'
import sample3Video from '../../../../assets/videos/sample3.mp4'
import '../../../../components/HeroContent/HeroContent.css'
import './OrganizationCulture.css'

gsap.registerPlugin(ScrollTrigger)

const VALUE_CARDS = [
  {
    id: 'professional',
    title: 'Professional',
    description: 'We run every aspect of our business to the highest standards, with transparency and strong collaboration, so our products meet industry expectations.',
    video: sampleVideo
  },
  {
    id: 'disciplined',
    title: 'Disciplined',
    description: 'Through a culture of discipline, we keep to timelines, production precision, and full compliance with export and laboratory testing standards.',
    video: sample2Video
  },
  {
    id: 'growing',
    title: 'Growing',
    description: 'As the industry evolves, we keep innovating in technology, materials, and strategy to deliver better packaging solutions.',
    video: sample3Video
  }
]

function OrganizationCulture() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const carouselVideoRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="organization-culture-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Our Culture: Values, Beliefs, and How We Work
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              The principles that guide our team every day. We believe in quality, transparency,
              and long-term partnerships. Here is how we turn those values into action—in the way
              we collaborate, serve customers, and grow together.
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

      <section ref={contentSectionRef} className="organization-culture-section">
        <div className="organization-culture-section-bg" aria-hidden="true" />
        <div className="organization-culture-header">
         
          <h2 className="organization-culture-title">Organization Culture</h2>
          <p className="organization-culture-intro">
            Our values and how we care for our people reflect the health of our company. We stand on three pillars: <strong>Professional</strong>, <strong>Disciplined</strong>, and <strong>Growing</strong>.
          </p>
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
                Your browser does not support the video tag.
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
