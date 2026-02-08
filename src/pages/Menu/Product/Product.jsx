import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import { useLanguage } from '../../../context/LanguageContext'
import '../../../components/HeroContent/HeroContent.css'
import '../../../components/PageHeroDark/PageHeroDark.css'
import './Product.css'

gsap.registerPlugin(ScrollTrigger)

function Product() {
  const heroRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.product || {}
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)

  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current

    if (scrollIndicator) {
      gsap.set(scrollIndicator, { opacity: 0, y: -10 })
      
      const indicatorTl = gsap.timeline({ delay: 1 })
      indicatorTl.to(scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .to(scrollIndicator, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      const handleScrollClick = () => {
        const contentSection = contentSectionRef.current
        if (contentSection) {
          contentSection.scrollIntoView({ behavior: 'smooth' })
        }
      }

      scrollIndicator.addEventListener('click', handleScrollClick)

      return () => {
        indicatorTl.kill()
        scrollIndicator.removeEventListener('click', handleScrollClick)
      }
    }
  }, [])

  useEffect(() => {
    const contentSection = contentSectionRef.current
    if (!contentSection) return

    gsap.fromTo(
      contentSection,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentSection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="product-page page-hero-dark">
      <section ref={heroRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heroTitle}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.heroSubtitle}</p>
          </div>
        </div>
        <div className="hero-video-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="hero-video-card">
              <video className="hero-video-card-video" autoPlay loop muted playsInline preload="auto">
                <source src={heroVideo} type="video/mp4" />
                {p.videoUnsupported}
              </video>
            </div>
          ))}
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

      <section ref={contentSectionRef} className="product-section">
        <div className="product-container">
          <h2 className="product-title">{p.title}</h2>
          <p className="product-text">
            {p.text}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Product
