import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import './HowToOrder.css'

gsap.registerPlugin(ScrollTrigger)

function HowToOrder() {
  const contentSectionRef = useRef(null)
  const { t } = useLanguage()
  const p = t.pages?.howToOrder || {}

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
    <div className="how-to-order-page">
      <section ref={contentSectionRef} className="how-to-order-section">
        <div className="how-to-order-container">
          <h1 className="how-to-order-heading">{p.heading}</h1>
          <p className="how-to-order-intro">{p.description}</p>
          <ol className="how-to-order-steps">
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">01</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step1Title}</h3>
                <p className="how-to-order-step-text">{p.step1Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">02</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step2Title}</h3>
                <p className="how-to-order-step-text">{p.step2Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">03</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step3Title}</h3>
                <p className="how-to-order-step-text">{p.step3Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">04</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step4Title}</h3>
                <p className="how-to-order-step-text">{p.step4Text}</p>
              </div>
            </li>
            <li className="how-to-order-step">
              <span className="how-to-order-step-number">05</span>
              <div className="how-to-order-step-content">
                <h3 className="how-to-order-step-title">{p.step5Title}</h3>
                <p className="how-to-order-step-text">{p.step5Text}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default HowToOrder
