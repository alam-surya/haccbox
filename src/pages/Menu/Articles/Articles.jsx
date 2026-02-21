import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import galeri01 from '../../../assets/gallery/galeri-01.webp'
import galeri02 from '../../../assets/gallery/galeri-02.webp'
import galeri03 from '../../../assets/gallery/galeri-03.webp'
import './Articles.css'

gsap.registerPlugin(ScrollTrigger)

const MEDIUM_URL = 'https://akhimbayu.medium.com/'

const IMAGE_MAP = {
  'galeri-01': galeri01,
  'galeri-02': galeri02,
  'galeri-03': galeri03
}

function Articles() {
  const contentSectionRef = useRef(null)
  const articlesMainRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { t } = useLanguage()
  const p = t.pages?.articles || {}
  const featured = p.featured || []

  const article = featured[selectedIndex]
  const readTimeLabel = p.readTimeLabel || 'min read'

  useEffect(() => {
    const main = articlesMainRef.current
    if (main) main.scrollTop = 0
  }, [selectedIndex])

  return (
    <div className="articles-page">
      <section ref={contentSectionRef} className="articles-section">
        <div className="articles-layout">
          <h1 className="articles-heading">{p.heading}</h1>
          <p className="articles-intro">{p.description}</p>
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
