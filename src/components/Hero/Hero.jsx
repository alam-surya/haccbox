import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/retro-hero.mp4'
import LogoLoop from '../LogoLoop/LogoLoop'
import hbLogo from '../../assets/images/hb-logo.webp'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Create logo array - repeat hb-logo multiple times for seamless loop
  const logoLogos = Array.from({ length: 10 }, (_, index) => ({
    src: hbLogo,
    alt: `Haccbox Logo ${index + 1}`,
    title: 'Haccbox'
  }))

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const scrollIndicator = scrollIndicatorRef.current

    if (!hero || !scrollIndicator) return

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
      const nextSection = document.querySelector('.category-section') || document.querySelector('#contact')
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
      
      {/* Logo Loop positioned below video */}
      {/* <div className="hero-logo-loop">
        <LogoLoop
          logos={logoLogos}
          speed={80}
          direction="left"
          logoHeight={isMobile ? 80 : 120}
          gap={isMobile ? 60 : 80}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#000000"
          scaleOnHover={false}
          ariaLabel="Haccbox logos"
        />
      </div> */}
      
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

