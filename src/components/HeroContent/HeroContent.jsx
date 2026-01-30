import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import heroVideo from '../../assets/videos/hero-update.mp4'
import './HeroContent.css'

gsap.registerPlugin(ScrollTrigger)

function HeroContent() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return
 

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero-content-section">
      {/* Text Content Section */}
      <div ref={contentRef} className="hero-content">
        <div className="hero-content-left">
          <h1 className="hero-heading">
            Haccbox: Custom Packaging Solutions for Export & Laboratory Standards
          </h1>
        </div>
        <div className="hero-content-right">
          <p className="hero-description">
            Connecting producers and customers with high-quality custom packaging solutions. 
            We specialize in carton box packaging for the furniture industry, meeting export 
            and laboratory standards with safe, durable, and environmentally friendly materials.
          </p>
          <Link to="#work" className="hero-learn-more">
            <span className="material-symbols-outlined">chevron_right</span>
            Learn more
          </Link>
        </div>
      </div>

      {/* Video Section */}
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
    </section>
  )
}

export default HeroContent
