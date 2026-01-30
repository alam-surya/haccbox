import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import '../../../components/HeroContent/HeroContent.css'
import './Guarantee.css'

gsap.registerPlugin(ScrollTrigger)

function Guarantee() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)

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
    <div className="guarantee-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Quality You Can Trust: Our Commitment, Guaranteed
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              We stand behind every box we make. From materials to delivery, our guarantee covers quality, consistency, and your peace of mind.
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

      <section ref={contentSectionRef} className="guarantee-section">
        <div className="guarantee-container">
          <h2 className="guarantee-title">Our Guarantee</h2>
          <p className="guarantee-intro">
            We back every order with clear commitments. Below are the three pillars of our guarantee: flexible ordering, fair returns, and consistent quality.
          </p>
          <div className="guarantee-points">
            <article className="guarantee-point">
              <span className="guarantee-point-number">01</span>
              <h3 className="guarantee-point-title">No Minimal Order</h3>
              <p className="guarantee-point-text">
                Order the quantity you need: no minimum. Whether you need a small batch for a trial or a large run for export, we accommodate your volume without forcing you to over-order.
              </p>
            </article>
            <article className="guarantee-point">
              <span className="guarantee-point-number">02</span>
              <h3 className="guarantee-point-title">Product Reject Returned</h3>
              <p className="guarantee-point-text">
                If products do not meet agreed specifications or are defective, we take them back. We handle reject returns fairly and work with you to correct the issue or replace the order.
              </p>
            </article>
            <article className="guarantee-point">
              <span className="guarantee-point-number">03</span>
              <h3 className="guarantee-point-title">Product Quality</h3>
              <p className="guarantee-point-text">
                We commit to materials and workmanship that meet export and laboratory standards. Carton, foam, edge protector, and honeycomb specifications are controlled so you receive consistent, reliable packaging.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guarantee
