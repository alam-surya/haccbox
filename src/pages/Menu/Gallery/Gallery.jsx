import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

function Gallery() {
  const gallerySectionRef = useRef(null)
  const galleryItemsRef = useRef([])
  const { t } = useLanguage()
  const p = t.pages?.gallery || {}

  const galleryImageModules = import.meta.glob(
    ['/src/assets/images/Gallery/*.webp', '/src/assets/images/Gallery/*.jpg', '/src/assets/images/Gallery/*.jpeg'],
    { eager: true }
  )
  const galleryImages = Object.entries(galleryImageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod], index) => ({
      id: index + 1,
      src: mod.default,
      alt: `Gallery image ${index + 1}`
    }))

  useEffect(() => {
    const gallerySection = gallerySectionRef.current
    if (!gallerySection) return

    gsap.fromTo(
      gallerySection,
      { opacity: 0, y: 50 },
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

    galleryItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
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

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
    <div className="gallery-page">
      <section ref={gallerySectionRef} className="gallery-section">
        <div className="gallery-container">
          <h1 className="gallery-heading">{p.heading}</h1>
          <p className="gallery-intro">{p.description}</p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                ref={(el) => (galleryItemsRef.current[index] = el)}
                className="gallery-item"
              >
                <img
                  src={image.src}
                  alt={`${p.imageAlt} ${index + 1}`}
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
