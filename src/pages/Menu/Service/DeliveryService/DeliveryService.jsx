import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import deliveryServiceImage from '../../../../assets/gallery/galeri-03.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './DeliveryService.css'

gsap.registerPlugin(ScrollTrigger)

function DeliveryService() {
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
    <div className="delivery-service-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">From City to Country. From Island to World.</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              We deliver within the city, out of town, inter-island, and internationally. Our fleet supports your packaging from warehouse to destination.
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
      <section ref={contentSectionRef} className="delivery-service-section">
        <div className="delivery-service-section-bg" aria-hidden="true">
          <img
            src={deliveryServiceImage}
            alt=""
            className="delivery-service-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="delivery-service-glass-card">
          <h2 className="delivery-service-title">From City to Country. From Island to World.</h2>
          <p className="delivery-service-intro">
            We offer delivery coverage at different scales: <strong>in-city</strong> for local runs, <strong>out-of-town</strong> for nearby regions, <strong>inter-island</strong> for domestic island-to-island, and <strong>international</strong> for export and overseas shipments. Each tier is set up to match your volume, timeline, and destination.
          </p>
          <p className="delivery-service-text">
            Our fleet includes trucks and vehicles suited to carton and packaging loads—from small vans for in-city and out-of-town to larger trucks for inter-island and port-bound international cargo. We work with trusted partners where needed so your goods reach the end customer safely and on time.
          </p>
        </div>
      </section>
    </div>
  )
}

export default DeliveryService
