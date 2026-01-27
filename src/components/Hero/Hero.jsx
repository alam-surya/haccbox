import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import videoPrimary from '../../assets/videos/video-primary.mp4'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const scrollIndicator = scrollIndicatorRef.current
    const text = textRef.current

    if (!hero || !scrollIndicator) return

    // Animate text on mount
    if (text) {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.5
        }
      )
    }

    // Animate scroll indicator
    gsap.set(scrollIndicator, { opacity: 0, y: -10 })
    
    const indicatorTl = gsap.timeline({ delay: 2 })
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
      const nextSection = document.querySelector('.hero-content-section') || document.querySelector('.category-section')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    scrollIndicator.addEventListener('click', handleScrollClick)

    return () => {
      indicatorTl.kill()
      scrollIndicator.removeEventListener('click', handleScrollClick)
    }
  }, [])

  return (
    <section ref={heroRef} className="hero">
      {/* Video Background */}
      <div className="hero-video-background">
        <video
          ref={videoRef}
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source 
            src={videoPrimary} 
            type="video/mp4" 
          />
          {/* Fallback if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Text Content - Bottom Left */}
      <div ref={textRef} className="hero-text-content">
        <h1 className="hero-main-text">
          Building<br />
          next-generation<br />
          packaging solutions
        </h1>
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
  )
}

export default Hero
