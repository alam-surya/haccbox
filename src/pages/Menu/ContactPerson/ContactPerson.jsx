import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import './ContactPerson.css'

gsap.registerPlugin(ScrollTrigger)

function ContactPerson() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const marketingOfficeRef = useRef(null)
  const warehouseRef = useRef(null)
  const socialMediaSectionRef = useRef(null)
  const socialCardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    // Animate sections on scroll
    const sections = [
      { ref: marketingOfficeRef, delay: 0 },
      { ref: warehouseRef, delay: 0.1 },
      { ref: socialMediaSectionRef, delay: 0.2 }
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

    // Animate cards with stagger
    socialCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: socialMediaSectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Addresses for Google Maps embed
  const marketingOfficeAddress = "Ayodyapark D/06 Cangkiran Kota Semarang, Jawa Tengah, Indonesia"
  const warehouseAddress = "Jl. Lingkungan Industri Kecil (LIK) Gang 14 No 530, Kota Semarang, Jawa Tengah, Indonesia"
  
  // Google Maps embed URLs using place query (no API key needed for basic embed)
  const marketingOfficeMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(marketingOfficeAddress)}&output=embed`
  const warehouseMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(warehouseAddress)}&output=embed`

  const socialMediaLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/haccbox?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@haccbox',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      )
    }
  ]

  const handleScrollToLocations = () => {
    const firstLocation = marketingOfficeRef.current
    if (firstLocation) {
      firstLocation.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="contact-person-page">
      {/* Hero Section - HeroContent style */}
      <section ref={sectionRef} className="contact-hero-section">
        {/* Text Content Section */}
        <div ref={contentRef} className="contact-hero-content">
          <div className="contact-hero-left">
            <h1 className="contact-hero-heading">
              Talk to our team: fast, clear, and reliable support.
            </h1>
          </div>
          <div className="contact-hero-right">
            <p className="contact-hero-description">
              Get expert guidance on your packaging needs, shipping specifications, and custom solutions. 
              Our team responds quickly to help you find the right carton box packaging that meets your 
              export and laboratory standards.
            </p>
            <button 
              onClick={handleScrollToLocations}
              className="contact-hero-cta"
            >
              <span className="material-symbols-outlined">chevron_right</span>
              View Our Locations
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="contact-hero-video-container">
          <video
            ref={videoRef}
            className="contact-hero-video"
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
            Your browser does not support the video tag.
          </video>
          <div className="contact-hero-overlay"></div>
        </div>
      </section>

      {/* Marketing Office Section */}
      <section ref={marketingOfficeRef} className="contact-location-section">
        <div className="contact-location-container">
          <h2 className="contact-location-title">Marketing Office</h2>
          <p className="contact-location-address">
            Ayodyapark D/06 Cangkiran<br />
            Kota Semarang, Jawa Tengah<br />
            Indonesia
          </p>
          <div className="contact-map-container">
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
            className="contact-location-link"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Production Warehouse Section */}
      <section ref={warehouseRef} className="contact-location-section">
        <div className="contact-location-container">
          <h2 className="contact-location-title">Production Warehouse</h2>
          <p className="contact-location-address">
            Jl. Lingkungan Industri Kecil (LIK) Gang 14 No 530<br />
            Kota Semarang, Jawa Tengah<br />
            Indonesia
          </p>
          <div className="contact-map-container">
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
            className="contact-location-link"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section ref={socialMediaSectionRef} className="contact-social-media-section">
        <div className="contact-social-media-container">
          <div className="contact-social-media-grid">
            {socialMediaLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-card"
                ref={(el) => (socialCardsRef.current[index] = el)}
              >
                <div className="contact-social-icon">
                  {social.icon}
                </div>
                <h3 className="contact-social-platform">{social.platform}</h3>
                <p className="contact-social-action">Visit Profile</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPerson
