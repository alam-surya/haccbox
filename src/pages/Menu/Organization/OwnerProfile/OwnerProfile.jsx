import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import ownerProfileImage from '../../../../assets/images/OwnerProfile.webp'
import logoImage from '../../../../assets/images/logo.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './OwnerProfile.css'

gsap.registerPlugin(ScrollTrigger)

function OwnerProfile() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current
    if (!scrollIndicator) return

    gsap.set(scrollIndicator, { opacity: 0, y: -10 })
    const indicatorTl = gsap.timeline({ delay: 1 })
    indicatorTl
      .to(scrollIndicator, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(scrollIndicator, { y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' })
    scrollIndicator.addEventListener('click', scrollToContent)
    return () => {
      indicatorTl.kill()
      scrollIndicator.removeEventListener('click', scrollToContent)
    }
  }, [])

  useEffect(() => {
    const contentSection = contentSectionRef.current
    if (!contentSection) return
    gsap.fromTo(
      contentSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: contentSection, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="owner-profile-page">
      <section ref={sectionRef} className="hero-content-section">
        <div ref={contentRef} className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Meet the Leadership Behind Haccbox
            </h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              The people who guide our vision and daily operations. Get to know the faces behind
              Haccbox: their experience, values, and commitment to delivering quality packaging
              solutions and lasting partnerships.
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

      <section ref={contentSectionRef} className="owner-profile-section">
        <div className="owner-profile-section-bg" aria-hidden="true">
          <img
            src={ownerProfileImage}
            alt=""
            className="owner-profile-section-bg-image"
            loading="lazy"
          />
        </div>
        <div className="owner-profile-glass-card">
          <img src={logoImage} alt="Haccbox" className="owner-profile-card-logo" />
          <h2 className="owner-profile-title">Owner Profile</h2>
          <p className="owner-profile-intro">
            We build a strong organisational culture on three pillars: <strong>Professionalism</strong>, <strong>Discipline</strong>, and <strong>Growing</strong>, ensuring sustainable, valuable business for our customers, especially in the furniture industry.
          </p>
          <p className="owner-profile-text">
            We run every aspect of our business to the highest standards, with transparency and strong collaboration, so our products meet industry expectations. Through a culture of discipline, we keep to timelines, production precision, and compliance with export and laboratory testing standards.
          </p>
          <p className="owner-profile-text">
            As the industry evolves, we keep innovating in technology, materials, and strategy to deliver better packaging solutions. Through these three pillars, Cahaya Abadi is committed to being an adaptive, progressive partner, delivering high-quality, sustainable packaging.
          </p>
          <p className="owner-profile-attribution">
            <strong>Moh Akhim Bayu Habsoro, S.E. MBA</strong><br />
            President Director
          </p>
        </div>
      </section>
    </div>
  )
}

export default OwnerProfile
