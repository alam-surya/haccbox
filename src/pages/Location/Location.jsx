import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/hero-video.mp4'
import './Location.css'

gsap.registerPlugin(ScrollTrigger)

function Location() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const marketingOfficeRef = useRef(null)
  const warehouseRef = useRef(null)

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
        const firstLocation = marketingOfficeRef.current
        if (firstLocation) {
          firstLocation.scrollIntoView({ behavior: 'smooth' })
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
    // Animate sections on scroll
    const sections = [
      { ref: marketingOfficeRef, delay: 0 },
      { ref: warehouseRef, delay: 0.1 }
    ]

    sections.forEach(({ ref, delay }) => {
      const element = ref.current
      if (!element) return

      gsap.fromTo(
        element,
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
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          delay
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Addresses for Google Maps embed
  const marketingOfficeAddress = "Ayodyapark D/06 Cangkiran Kota Semarang, Jawa Tengah, Indonesia"
  const warehouseAddress = "Jl. Lingkungan Industri Kecil (LIK) Gang 14 No 530, Kota Semarang, Jawa Tengah, Indonesia"
  
  // Google Maps embed URLs using place query (no API key needed for basic embed)
  // Using simple query format that works with addresses
  const marketingOfficeMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(marketingOfficeAddress)}&output=embed`
  const warehouseMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(warehouseAddress)}&output=embed`

  return (
    <div className="location-page">
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
          <h1 className="about-hero-title">Location</h1>
          <p className="about-hero-subtitle">
            visit us at our marketing office and production warehouse
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

      {/* Marketing Office Section */}
      <section ref={marketingOfficeRef} className="location-section">
        <div className="location-container">
          <h2 className="location-title">Marketing Office</h2>
          <p className="location-address">
            Ayodyapark D/06 Cangkiran<br />
            Kota Semarang, Jawa Tengah<br />
            Indonesia
          </p>
          <div className="map-container">
            <iframe
              src={marketingOfficeMapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marketing Office Location"
            />
          </div>
          <a 
            href="https://maps.app.goo.gl/aGaSDhaPd2W6bbnw9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="location-link"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Production Warehouse Section */}
      <section ref={warehouseRef} className="location-section">
        <div className="location-container">
          <h2 className="location-title">Production Warehouse</h2>
          <p className="location-address">
            Jl. Lingkungan Industri Kecil (LIK) Gang 14 No 530<br />
            Kota Semarang, Jawa Tengah<br />
            Indonesia
          </p>
          <div className="map-container">
            <iframe
              src={warehouseMapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Production Warehouse Location"
            />
          </div>
          <a 
            href="https://maps.app.goo.gl/9ZYo5BaNRpDPhZeR9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="location-link"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  )
}

export default Location

