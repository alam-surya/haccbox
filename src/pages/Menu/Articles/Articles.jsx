import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../../context/LanguageContext'
import artikel1 from '../../../assets/images/Articles/artikel-1.webp'
import artikel2 from '../../../assets/images/Articles/artikel-2.webp'
import './Articles.css'

gsap.registerPlugin(ScrollTrigger)

const MEDIUM_URL = 'https://medium.com/@haccbox'

const IMAGE_MAP = {
  'artikel-1': artikel1,
  'artikel-2': artikel2
}

function toBodyBlocks(article) {
  if (!article) return []

  if (Array.isArray(article.bodyBlocks)) return article.bodyBlocks

  if (typeof article.body === 'string') {
    return article.body
      .split(/\n\n+/)
      .filter(Boolean)
      .map((text) => ({ type: 'paragraph', text }))
  }

  if (Array.isArray(article.body)) {
    return article.body
      .filter(Boolean)
      .map((item) => (typeof item === 'string' ? { type: 'paragraph', text: item } : item))
  }

  return []
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
  const bodyBlocks = toBodyBlocks(article)

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
                <div className="articles-article-body">
                  {bodyBlocks.map((block, i) => {
                    if (block?.type === 'image' && IMAGE_MAP[block.image]) {
                      return (
                        <figure key={`image-${i}`} className="articles-article-image-block">
                          <img
                            src={IMAGE_MAP[block.image]}
                            alt={block.alt || article.title}
                            className="articles-article-inline-image"
                            loading="lazy"
                          />
                        </figure>
                      )
                    }

                    if (block?.type === 'heading' && block.text) {
                      return (
                        <h3 key={`heading-${i}`} className="articles-article-subheading">
                          {block.text}
                        </h3>
                      )
                    }

                    if (block?.type === 'list' && Array.isArray(block.items) && block.items.length) {
                      return (
                        <ul key={`list-${i}`} className="articles-article-list">
                          {block.items.map((item, itemIndex) => (
                            <li key={`list-${i}-item-${itemIndex}`}>{item}</li>
                          ))}
                        </ul>
                      )
                    }

                    const text = typeof block === 'string' ? block : block?.text
                    if (!text) return null

                    return (
                      <p key={`para-${i}`} className="articles-article-para">
                        {text}
                      </p>
                    )
                  })}
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
