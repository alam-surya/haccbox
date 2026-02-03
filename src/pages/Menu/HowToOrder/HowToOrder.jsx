import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import { useLanguage } from '../../../context/LanguageContext'
import '../../../components/HeroContent/HeroContent.css'
import './HowToOrder.css'

gsap.registerPlugin(ScrollTrigger)

function HowToOrder() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.howToOrder || {}

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
    <div className="how-to-order-page">
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

      <section ref={contentSectionRef} className="how-to-order-section">
        <div className="how-to-order-container">
          <h2 className="how-to-order-title">{p.title}</h2>
          <p className="how-to-order-intro">{p.intro}</p>
          <ol className="how-to-order-steps">
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">01</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step1Title}</h3>
                <p className="how-to-order-step-text">{p.step1Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">02</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step2Title}</h3>
                <p className="how-to-order-step-text">{p.step2Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">03</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step3Title}</h3>
                <p className="how-to-order-step-text">{p.step3Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">04</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step4Title}</h3>
                <p className="how-to-order-step-text">{p.step4Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">05</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step5Title}</h3>
                <p className="how-to-order-step-text">{p.step5Text}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default HowToOrder
