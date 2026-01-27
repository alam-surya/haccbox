import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/hero-video.mp4'
import './SocialMedia.css'

gsap.registerPlugin(ScrollTrigger)

function SocialMedia() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const socialMediaSectionRef = useRef(null)
  const socialCardsRef = useRef([])

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
        const socialSection = socialMediaSectionRef.current
        if (socialSection) {
          socialSection.scrollIntoView({ behavior: 'smooth' })
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
    // Animate social media section on scroll
    const socialSection = socialMediaSectionRef.current
    if (!socialSection) return

    gsap.fromTo(
      socialSection,
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
          trigger: socialSection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

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
              trigger: socialSection,
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

  return (
    <div className="social-media-page">
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
          <h1 className="about-hero-title">Social Media</h1>
          <p className="about-hero-subtitle">
            connect with us on our social media platforms
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

      {/* Social Media Links Section */}
      <section ref={socialMediaSectionRef} className="social-media-section">
        <div className="social-media-container">
          <div className="social-media-grid">
            {socialMediaLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                ref={(el) => (socialCardsRef.current[index] = el)}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <h3 className="social-platform">{social.platform}</h3>
                <p className="social-action">Visit Profile</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialMedia



