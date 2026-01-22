import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/retro-hero.mp4'
import sampleVideo from '../../assets/videos/sample-retro.mp4'
import sample2Video from '../../assets/videos/sample2-retro.mp4'
import sample3Video from '../../assets/videos/sample3-retro.mp4'
import ownerImage from '../../assets/images/owner.webp'
import professionalismImage from '../../assets/images/professionalism.png'
import disciplineImage from '../../assets/images/discipline.png'
import developmentImage from '../../assets/images/development.png'
import './AboutUs.css'

gsap.registerPlugin(ScrollTrigger)

function AboutUs() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const trustRef = useRef(null)
  const directorRef = useRef(null)

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
        const storySection = storyRef.current
        if (storySection) {
          storySection.scrollIntoView({ behavior: 'smooth' })
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
      { ref: storyRef, delay: 0 },
      { ref: valuesRef, delay: 0.1 },
      { ref: trustRef, delay: 0.2 },
      { ref: directorRef, delay: 0.3 }
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

  return (
    <div className="about-us-page">
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
          <h1 className="about-hero-title">[About Us]</h1>
          <p className="about-hero-subtitle">
            connecting producers and customers with custom packaging solutions
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

      {/* Story Section */}
      <section ref={storyRef} className="about-story">
        <div className="about-story-container">
          <h2 className="about-story-title">The Amazing Story</h2>
          <div className="about-story-content">
            <p className="about-story-text">
              Haccbox is a company specializing in marketing and distribution of high-quality carton box packaging, 
              particularly for the furniture industry. We are part of the Mitra Persada Carton Box group, established 
              in 2012, and Haccbox was founded in 2021 to connect producers and customers with custom packaging 
              solutions meeting export and laboratory standards.
            </p>
            <p className="about-story-text">
              We produce packaging complements like styrofoam for optimal product protection during shipping, and are 
              committed to innovation, offering safe, durable, and environmentally friendly packaging. In 2025, we 
              introduced "Haccbox" as a new brand identity to strengthen our commitment to providing customizable 
              packaging designs to meet industry needs more precisely and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="about-values">
        <div className="about-values-container">
          <h2 className="about-values-title">Our Values</h2>
          <p className="about-values-subtitle">
            We build a strong organizational culture with three main pillars
          </p>
          <div className="about-values-grid">
            {/* Professionalism */}
            <div className="about-value-card">
              <div className="about-value-video-container">
                <img
                  className="about-value-video"
                  src={professionalismImage}
                  alt="Professionalism"
                  loading="lazy"
                />
                <div className="about-value-overlay"></div>
              </div>
              <div className="about-value-content">
                <h3 className="about-value-title">Professionalism</h3>
                <p className="about-value-text">
                  We operate every aspect of business with the highest standards, transparency, and strong cooperation, 
                  ensuring products meet industry expectations.
                </p>
              </div>
            </div>

            {/* Discipline */}
            <div className="about-value-card">
              <div className="about-value-video-container">
                <img
                  className="about-value-video"
                  src={disciplineImage}
                  alt="Discipline"
                  loading="lazy"
                />
                <div className="about-value-overlay"></div>
              </div>
              <div className="about-value-content">
                <h3 className="about-value-title">Discipline</h3>
                <p className="about-value-text">
                  With a culture of discipline, we maintain timeliness, production precision, and compliance with 
                  export standards and laboratory testing.
                </p>
              </div>
            </div>

            {/* Development */}
            <div className="about-value-card">
              <div className="about-value-video-container">
                <img
                  className="about-value-video"
                  src={developmentImage}
                  alt="Development"
                  loading="lazy"
                />
                <div className="about-value-overlay"></div>
              </div>
              <div className="about-value-content">
                <h3 className="about-value-title">Development</h3>
                <p className="about-value-text">
                  As the industry evolves, we continuously innovate in technology, materials, and business strategies 
                  to deliver better packaging solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Director Section */}
<section ref={directorRef} className="about-director">
            <div className="about-director-container">
              <div className="about-director-media">
                <img
                  className="about-director-image"
                  src={ownerImage}
                  alt="Moh Akhim Bayu Habsoro"
                  loading="lazy"
                />
              </div>
              <div className="about-director-signature">
                <p className="about-director-intro">
                  "We are more than just a packaging provider. We are a <strong>strategic partner</strong> who understands{' '}
                  your business needs. With experience and high commitment to quality, we present packaging solutions that{' '}
                  are <strong>safe, innovative, and export-standard</strong>, ensuring your every product is maximally protected."
                </p>
                <p className="about-director-name">Moh Akhim Bayu Habsoro, S.E. MBA</p>
                <p className="about-director-title">President Director</p>
              </div>
            </div>
          </section>

      {/* Why Trust Us Section */}
      <section ref={trustRef} className="about-trust">
        <div className="about-trust-container">
          <h2 className="about-trust-title">Why Should You Trust Us?</h2>

          

          <div className="about-trust-grid">
            <div className="about-trust-card">
              <h3 className="about-trust-card-title">Guaranteed Quality</h3>
              <p className="about-trust-card-text">
                Our products have passed laboratory tests and use high-quality materials, including FSC-certified 
                packaging that is environmentally friendly.
              </p>
            </div>
            <div className="about-trust-card">
              <h3 className="about-trust-card-title">Custom Packaging</h3>
              <p className="about-trust-card-text">
                We understand that every industry has unique needs, which is why we provide custom packaging solutions 
                designed specifically for your business, especially in the furniture sector.
              </p>
            </div>
            <div className="about-trust-card">
              <h3 className="about-trust-card-title">Professional & On Time</h3>
              <p className="about-trust-card-text">
                With a culture of high discipline and professionalism, we ensure timely production and delivery, so 
                your business runs smoothly without obstacles.
              </p>
            </div>
          </div>


          
        </div>
      </section>
    </div>
  )
}

export default AboutUs

