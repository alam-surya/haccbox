import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import '../../../components/HeroContent/HeroContent.css'
import './HowToOrder.css'

gsap.registerPlugin(ScrollTrigger)

function HowToOrder() {
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
    <div className="how-to-order-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              From Inquiry to Delivery: Simple Steps to Your Custom Packaging
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              Tell us your needs, get a quote, confirm your order, and we handle the rest. We keep the process clear and straightforward so you can focus on your business.
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

      <section ref={contentSectionRef} className="how-to-order-section">
        <div className="how-to-order-container">
          <h2 className="how-to-order-title">How To Order</h2>
          <p className="how-to-order-intro">
            Follow these steps to place your custom packaging order. We keep the process simple and stay in touch at every stage.
          </p>
          <ol className="how-to-order-steps">
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">01</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">Contact us by email or phone</h3>
                <p className="how-to-order-step-text">
                  Reach out using the email address and phone number listed on this site. We will respond promptly and guide you through the next steps.
                </p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">02</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">Tell us the model or material you need</h3>
                <p className="how-to-order-step-text">
                  Share the type of packaging you need: box model, dimensions, or material (e.g. carton, foam, honeycomb). The more detail you provide, the better we can match your requirements.
                </p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">03</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">Specify quantity and timeline</h3>
                <p className="how-to-order-step-text">
                  Let us know how many units you need and when you need them. We will confirm feasibility and propose a production and delivery schedule.
                </p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">04</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">Request a sample to minimise errors</h3>
                <p className="how-to-order-step-text">
                  Before starting a full order, we can send you a sample of what you need. This helps align on design, material, and finish and reduces the risk of misunderstandings.
                </p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">05</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">Stay in touch: email, phone, or in person</h3>
                <p className="how-to-order-step-text">
                  We communicate via email or our company number so you can reach us easily. We are also happy to arrange face-to-face meetings when that works better for you.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default HowToOrder
