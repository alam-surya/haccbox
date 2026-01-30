import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import '../../../components/HeroContent/HeroContent.css'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

function Gallery() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const gallerySectionRef = useRef(null)
  const galleryItemsRef = useRef([])

  const scrollToContent = () => {
    gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const galleryPageModules = import.meta.glob('/src/assets/gallery/gallery-page/*.jpg', { eager: true })
  const galleryImages = Object.entries(galleryPageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod], index) => ({
      id: index + 1,
      src: mod.default,
      alt: `Gallery image ${index + 1}`
    }))

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
        const gallerySection = gallerySectionRef.current
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' })
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
    const gallerySection = gallerySectionRef.current
    if (!gallerySection) return

    gsap.fromTo(
      gallerySection,
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
          trigger: gallerySection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate gallery items with stagger
    galleryItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
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
              trigger: gallerySection,
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
    <div className="gallery-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Where Every Box Tells a Story—See Our Work in Action
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              Visual showcase of our packaging solutions. From boxes and finishes to real projects and deliveries.
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

      <section ref={gallerySectionRef} className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                ref={(el) => (galleryItemsRef.current[index] = el)}
                className="gallery-item"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
