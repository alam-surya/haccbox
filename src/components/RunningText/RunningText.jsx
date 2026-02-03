import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hbLogo from '../../assets/images/hb-logo.webp'
import { useLanguage } from '../../context/LanguageContext'
import './RunningText.css'

gsap.registerPlugin(ScrollTrigger)

function RunningText() {
  const { t } = useLanguage()
  const pinHeightRef = useRef(null)
  const containerRef = useRef(null)
  const sentence1Ref = useRef(null)

  useEffect(() => {
    const sentence1 = sentence1Ref.current
    const pinHeight = pinHeightRef.current
    const container = containerRef.current

    if (!sentence1 || !pinHeight || !container) return

    ScrollTrigger.create({
      trigger: pinHeight,
      start: 'top top',
      end: 'bottom bottom',
      pin: container,
    })

    document.fonts.ready.then(() => {
      // Detect if mobile/responsive view
      const isMobile = window.innerWidth <= 768
      const duration = isMobile ? 20 : 18 // Slower on mobile, but still slower on desktop
      
      gsap.to(sentence1, {
        x: -sentence1.clientWidth / 2,
        ease: 'none',
        duration: duration,
        repeat: -1,
      })
    })

    gsap.to(sentence1, {
      yPercent: '-=100',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: pinHeight,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="mwg_effect024">
      <div className="pin-height" ref={pinHeightRef}>
        <div className="container" ref={containerRef}>
          <div className="sentences">
            <div className="sentence sentence1">
              <p ref={sentence1Ref}>
                <span> {t.runningText.professional} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.disciplined} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.growing} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.professional} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.disciplined} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.growing} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.professional} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.disciplined} </span>
                <img className="glyph" src={hbLogo} alt="" />
                <span> {t.runningText.growing} </span>
                <img className="glyph" src={hbLogo} alt="" />
              </p>
            </div>
          </div>
          <div className="texts">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default RunningText

