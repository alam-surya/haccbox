import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage1 from '../../../../assets/images/Product/OuterProduct/bottom/R1009581-2.webp'
import heroImage2 from '../../../../assets/images/Product/OuterProduct/die-cut/R1009468.webp'
import heroImage3 from '../../../../assets/images/Product/OuterProduct/box-a1/R1009605-2.webp'
import ProductCarousel from '../../../../components/ProductCarousel/ProductCarousel'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../components/HeroContent/HeroContent.css'
import '../../../../components/PageHeroDark/PageHeroDark.css'
import './OuterProduct.css'

gsap.registerPlugin(ScrollTrigger)

const PRODUCT_IDS = ['l-shape', 'box-a1', 'box-miring', 'die-cut', 'empty-box', 'bottom', 'top-bottom']

const outerProductImageModules = import.meta.glob(
  '/src/assets/images/Product/OuterProduct/*/*.webp',
  { eager: true }
)

function getImagesByProductId(productId) {
  const prefix = `/src/assets/images/Product/OuterProduct/${productId}/`
  return Object.entries(outerProductImageModules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default)
}

function OuterProduct() {
  const sectionRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.outerProduct || {}
  const products = useMemo(
    () =>
      (p.products || []).map((item, i) => ({
        id: PRODUCT_IDS[i],
        name: item.name,
        description: item.description,
        images: getImagesByProductId(PRODUCT_IDS[i])
      })),
    [p.products]
  )

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
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }, [])

  return (
    <div className="outer-product-page page-hero-dark">
      <section ref={sectionRef} className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heading}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.description}</p>
          </div>
        </div>
        <div className="hero-video-grid">
          <div className="hero-video-card">
            <img src={heroImage1} alt="" className="hero-video-card-video" loading="eager" />
          </div>
          <div className="hero-video-card">
            <img src={heroImage2} alt="" className="hero-video-card-video" loading="eager" />
          </div>
          <div className="hero-video-card">
            <img src={heroImage3} alt="" className="hero-video-card-video" loading="eager" />
          </div>
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>
      <section ref={contentSectionRef} className="outer-product-section">
        <div className="outer-product-container">
          <h2 className="outer-product-title">{p.title}</h2>
          <p className="outer-product-intro">{p.intro}</p>
          <div className="outer-product-cards">
            {products.map((product, index) => (
              <article key={product.id} className="outer-product-card">
                <div className="outer-product-card-left">
                  <span className="outer-product-card-number">{index + 1}</span>
                  <h3 className="outer-product-card-title">{product.name}</h3>
                </div>
                <div className="outer-product-card-right">
                  <p className="outer-product-card-description">{product.description}</p>
                  <div className="outer-product-card-visual">
                    <ProductCarousel images={product.images} alt={product.name} draggable={false} />
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
