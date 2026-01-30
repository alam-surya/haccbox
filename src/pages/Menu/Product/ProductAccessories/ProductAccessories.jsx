import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import hexaWrapImg from '../../../../assets/images/Product/ProductAccessories/Hexa Wrap.webp'
import honeycombBoardImg from '../../../../assets/images/Product/ProductAccessories/Honeycomb Board.webp'
import honeycombCoreImg from '../../../../assets/images/Product/ProductAccessories/Honeycomb Core.webp'
import paperCoreImg from '../../../../assets/images/Product/ProductAccessories/Paper Core.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './ProductAccessories.css'

gsap.registerPlugin(ScrollTrigger)

const PRODUCTS = [
  {
    id: 'hexa-wrap',
    name: 'Hexa Wrap',
    description: 'Hexagonal wrap for cushioning and protection around products. Ideal as an outer complement to boxes for fragile or irregular items.',
    image: hexaWrapImg
  },
  {
    id: 'honeycomb-board',
    name: 'Honeycomb Board',
    description: 'Lightweight honeycomb board for internal reinforcement and void fill. Complements box structure with strength without extra weight.',
    image: honeycombBoardImg
  },
  {
    id: 'honeycomb-core',
    name: 'Honeycomb Core',
    description: 'Honeycomb core material for panels and inserts. Used alongside boxes to add rigidity and protection in shipping and display.',
    image: honeycombCoreImg
  },
  {
    id: 'paper-core',
    name: 'Paper Core',
    description: 'Paper core for tubes, rolls, and structural support. A versatile accessory outside the box for wrapping and core applications.',
    image: paperCoreImg
  }
]

function ProductAccessories() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
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
    <div className="product-accessories-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Every Detail Counts: Accessories That Complete the Box</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              Complementary products outside the box: wraps, boards, cores, and supports that complete your packaging solution.
            </p>
            <button type="button" className="hero-learn-more" onClick={scrollToContent}>
              <span className="material-symbols-outlined">chevron_right</span>
              See more
            </button>
          </div>
        </div>
        <div className="hero-video-container">
          <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay" />
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="product-accessories-section">
        <div className="product-accessories-container">
          <h2 className="product-accessories-title">Product Accessories</h2>
          <p className="product-accessories-intro">Complementary products outside the box: wraps, boards, cores, and supports for complete packaging.</p>
          <div className="product-accessories-cards">
            {PRODUCTS.map((product, index) => (
              <article key={product.id} className="product-accessories-card">
                <div className="product-accessories-card-left">
                  <span className="product-accessories-card-number">{index + 1}</span>
                  <h3 className="product-accessories-card-title">{product.name}</h3>
                </div>
                <div className="product-accessories-card-right">
                  <p className="product-accessories-card-description">{product.description}</p>
                  <div className="product-accessories-card-visual">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-accessories-card-image"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductAccessories
