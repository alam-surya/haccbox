import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage1 from '../../../../assets/images/Service/DeliveryService/IMG_0162.webp'
import heroImage2 from '../../../../assets/images/Service/DeliveryService/IMG_0169.webp'
import heroImage3 from '../../../../assets/images/Service/DeliveryService/IMG_0168.webp'
import deliveryServiceImage from '../../../../assets/images/Service/DeliveryService/Delivery Service.webp'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './DeliveryService.css'

gsap.registerPlugin(ScrollTrigger)

function DeliveryService() {
  const sectionRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.deliveryService || {}

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
    <div className="delivery-service-page page-hero-dark">
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
          <div className="hero-video-card">
            <img src={heroImage1} alt="" className="hero-video-card-video" loading="eager" />
          </div>
          <div className="hero-video-card">
            <img src={heroImage2} alt="" className="hero-video-card-video" loading="eager" />
          </div>
          <div className="hero-video-card">
            <img src={heroImage3} alt="" className="hero-video-card-video" loading="eager" />
          </div>
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="delivery-service-section">
        <header className="delivery-service-about-header">
          <span className="delivery-service-about-prefix">_</span>
          <h2 className="delivery-service-about-heading">{p.aboutMainHeading}</h2>
        </header>
        <div className="delivery-service-about-layout">
          <div className="delivery-service-about-text">
            <p className="delivery-service-about-supporting">{p.aboutSupporting}</p>
            <Link to="/contact-person" className="delivery-service-about-btn">
              {p.aboutCta}
            </Link>
          </div>
          <div className="delivery-service-about-image-wrap">
            <img
              src={deliveryServiceImage}
              alt=""
              className="delivery-service-about-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeliveryService
