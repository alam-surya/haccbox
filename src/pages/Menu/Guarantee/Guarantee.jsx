import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import './Guarantee.css'

gsap.registerPlugin(ScrollTrigger)

function Guarantee() {
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.guarantee || {}

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
        scrollTrigger: {
          trigger: contentSection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
    <div className="guarantee-page">
      <section ref={contentSectionRef} className="guarantee-section">
        <div className="guarantee-container">
          <h1 className="guarantee-title">{p.heading}</h1>
          <p className="guarantee-intro">{p.description}</p>
          <div className="guarantee-points">
            <article className="guarantee-point">
              <span className="guarantee-point-number">01</span>
              <h3 className="guarantee-point-title">{p.noMinimalOrder}</h3>
              <p className="guarantee-point-text">{p.noMinimalOrderText}</p>
            </article>
            <article className="guarantee-point">
              <span className="guarantee-point-number">02</span>
              <h3 className="guarantee-point-title">{p.productRejectReturned}</h3>
              <p className="guarantee-point-text">{p.productRejectReturnedText}</p>
            </article>
            <article className="guarantee-point">
              <span className="guarantee-point-number">03</span>
              <h3 className="guarantee-point-title">{p.productQuality}</h3>
              <p className="guarantee-point-text">{p.productQualityText}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guarantee
