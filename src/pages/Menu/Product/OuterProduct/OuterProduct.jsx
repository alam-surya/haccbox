import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../../../assets/videos/hero-update.mp4'
import lShapeImg from '../../../../assets/images/Product/OuterProduct/L Shape.webp'
import boxA1Img from '../../../../assets/images/Product/OuterProduct/Box A1.webp'
import boxMiringImg from '../../../../assets/images/Product/OuterProduct/Box Miring.webp'
import dieCutImg from '../../../../assets/images/Product/OuterProduct/Die Cut.webp'
import emptyBoxImg from '../../../../assets/images/Product/OuterProduct/Empty Box.webp'
import bottomImg from '../../../../assets/images/Product/OuterProduct/Bottom.webp'
import topBottomImg from '../../../../assets/images/Product/OuterProduct/Top Bottom.webp'
import '../../../../components/HeroContent/HeroContent.css'
import './OuterProduct.css'

gsap.registerPlugin(ScrollTrigger)

const PRODUCTS = [
  {
    id: 'l-shape',
    name: 'L Shape',
    description: 'L-shaped rigid box for display or partition. Ideal for retail presentation and modular layouts.',
    image: lShapeImg
  },
  {
    id: 'box-a1',
    name: 'Box A1',
    description: 'Classic A1 style box for retail and shipping. Durable construction for safe transport.',
    image: boxA1Img
  },
  {
    id: 'box-miring',
    name: 'Box Miring',
    description: 'Slanted-top box for distinctive presentation. Adds visual interest to shelf and counter displays.',
    image: boxMiringImg
  },
  {
    id: 'die-cut',
    name: 'Die Cut',
    description: 'Custom die-cut window or shape for visibility. Showcase your product while keeping it protected.',
    image: dieCutImg
  },
  {
    id: 'empty-box',
    name: 'Empty Box',
    description: 'Flat-packed empty box for assembly. Cost-effective and easy to store until use.',
    image: emptyBoxImg
  },
  {
    id: 'bottom',
    name: 'Bottom',
    description: 'Bottom-only base for trays or inserts. Versatile base unit for layered packaging.',
    image: bottomImg
  },
  {
    id: 'top-bottom',
    name: 'Top Bottom',
    description: 'Separate top and bottom for easy access. Perfect for reusable or frequently opened packaging.',
    image: topBottomImg
  }
]

function OuterProduct() {
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
    <div className="outer-product-page">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">Shapes That Protect: Outer Packaging Built for Export</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">
              Explore our product range and packaging solutions tailored for the furniture industry and export standards.
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
      <section ref={contentSectionRef} className="outer-product-section">
        <div className="outer-product-container">
          <h2 className="outer-product-title">Outer Product</h2>
          <p className="outer-product-intro">Box and empty types for display, shipping, and custom packaging. Choose from our range of shapes and styles.</p>
          <div className="outer-product-cards">
            {PRODUCTS.map((product, index) => (
              <article key={product.id} className="outer-product-card">
                <div className="outer-product-card-left">
                  <span className="outer-product-card-number">{index + 1}</span>
                  <h3 className="outer-product-card-title">{product.name}</h3>
                </div>
                <div className="outer-product-card-right">
                  <p className="outer-product-card-description">{product.description}</p>
                  <div className="outer-product-card-visual">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="outer-product-card-image"
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

export default OuterProduct
