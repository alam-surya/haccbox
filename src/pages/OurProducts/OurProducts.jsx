import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/retro-hero.mp4'
import './OurProducts.css'

gsap.registerPlugin(ScrollTrigger)

function OurProducts() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentRef = useRef(null)

  // Scroll indicator setup
  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current

    if (scrollIndicator) {
      // Animate scroll indicator
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

      // Smooth scroll on click
      const handleScrollClick = () => {
        const contentSection = contentRef.current
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
    // Animate content section on scroll
    const content = contentRef.current
    if (!content) return

    gsap.fromTo(
      content,
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
          trigger: content,
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
    <div className="our-products-page">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
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
            <source 
              src={heroVideo} 
              type="video/mp4" 
            />
            {/* Fallback if video doesn't load */}
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">Our Products</h1>
          <p className="about-hero-subtitle">
            premium packaging solutions designed for excellence and protection
          </p>
        </div>
        <div 
          ref={scrollIndicatorRef}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="products-content">
        <div className="products-content-container">
          {/* <h2 className="products-content-title">Products Coming Soon</h2>
          <p className="products-content-text">
            We are currently preparing our product catalog. Check back soon for detailed information about our packaging solutions.
          </p> */}
        </div>
      </section>
    </div>
  )
}

export default OurProducts

