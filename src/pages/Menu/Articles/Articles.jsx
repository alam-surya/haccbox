import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import heroVideo from '../../../assets/videos/hero-update.mp4'
import '../../../components/HeroContent/HeroContent.css'
import '../../../components/PageHeroDark/PageHeroDark.css'
import './Articles.css'

import galeri01 from '../../../assets/gallery/galeri-01.webp'

gsap.registerPlugin(ScrollTrigger)
import galeri02 from '../../../assets/gallery/galeri-02.webp'
import galeri03 from '../../../assets/gallery/galeri-03.webp'

const MEDIUM_URL = 'https://akhimbayu.medium.com/'

const IMAGE_MAP = {
  'galeri-01': galeri01,
  'galeri-02': galeri02,
  'galeri-03': galeri03
}

function Articles() {
  const contentSectionRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const articlesMainRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { t } = useLanguage()
  const p = t.pages?.articles || {}
  const featured = p.featured || []

  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current
    if (!scrollIndicator) return
    gsap.set(scrollIndicator, { opacity: 0, y: -10 })
    const indicatorTl = gsap.timeline({ delay: 1 })
    indicatorTl
      .to(scrollIndicator, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(scrollIndicator, { y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' })
    const handleScrollClick = () => contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    scrollIndicator.addEventListener('click', handleScrollClick)
    return () => {
      indicatorTl.kill()
      scrollIndicator.removeEventListener('click', handleScrollClick)
    }
  }, [])

  const article = featured[selectedIndex]
  const readTimeLabel = p.readTimeLabel || 'min read'

  useEffect(() => {
    const main = articlesMainRef.current
    if (main) main.scrollTop = 0
  }, [selectedIndex])

  return (
    <div className="articles-page page-hero-dark">
      <section className="hero-content-section">
        <div className="hero-content">
          <div className="hero-content-left">
            <h1 className="hero-heading">{p.heading}</h1>
          </div>
          <div className="hero-content-right">
            <p className="hero-description">{p.description}</p>
          </div>
        </div>
        <div className="hero-video-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="hero-video-card">
              <video className="hero-video-card-video" autoPlay loop muted playsInline preload="auto">
                <source src={heroVideo} type="video/mp4" />
                {p.videoUnsupported}
              </video>
            </div>
          ))}
        </div>
        <div ref={scrollIndicatorRef} className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      <section ref={contentSectionRef} className="articles-section">
        <div className="articles-layout">
          <nav className="articles-nav" aria-label={p.featuredTitle}>
            <ul className="articles-nav-list">
              {featured.map((item, index) => (
                <li key={index} className="articles-nav-item">
                  <button
                    type="button"
                    className={`articles-nav-link ${selectedIndex === index ? 'articles-nav-link--active' : ''}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div ref={articlesMainRef} className="articles-main">
            {article && (
              <article className="articles-article">
                <h2 className="articles-article-title">{article.title}</h2>
                <p className="articles-article-meta">
                  {article.date}
                  {typeof article.readMinutes === 'number' && (
                    <>
                      {' · '}
                      {article.readMinutes} {readTimeLabel}
                    </>
                  )}
                </p>
                {IMAGE_MAP[article.image] && (
                  <div className="articles-article-hero">
                    <img
                      src={IMAGE_MAP[article.image]}
                      alt={article.title}
                      className="articles-article-image"
                    />
                  </div>
                )}
                <div className="articles-article-body">
                  {(typeof article.body === 'string'
                    ? article.body.split(/\n\n+/).filter(Boolean)
                    : Array.isArray(article.body)
                      ? article.body
                      : [article.body].filter(Boolean)
                  ).map((para, i) => (
                    <p key={i} className="articles-article-para">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            )}

            <div className="articles-cta-wrap">
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="articles-view-all"
              >
                {p.viewAllLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articles
