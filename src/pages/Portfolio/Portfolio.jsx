import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/retro-hero.mp4'
import satuImage from '../../assets/images/satu.png'
import './Portfolio.css'

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const rootRef = useRef(null)
  const listElementRef = useRef(null)
  const mediaContainerRef = useRef(null)
  const rowsRef = useRef([])

  const clients = [
    { name: 'Pacomeubelun', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Haus', category: 'Homeware, Packaging', image: satuImage },
    { name: 'Manutti', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Diamond Collection', category: 'Exclusive Teak Furniture, Packaging', image: satuImage },
    { name: 'Carlton Furniture', category: 'Welbeck Manor Collection, Packaging', image: satuImage },
    { name: 'Chelsea home & leisure ltd london', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Palecek', category: 'Furniture, Packaging', image: satuImage },
    { name: 'The loom collection', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Antique Furniture', category: 'Furniture, Packaging', image: satuImage },
    { name: 'BL Box Living', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Coco republic', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Frontgate', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Kave Home', category: 'Furniture, Packaging', image: satuImage },
    { name: 'Four hands', category: 'Furniture, Packaging', image: satuImage },
    { name: 'tikamoon', category: 'Furniture, Packaging', image: satuImage }
  ]

  // Store image URLs
  const mediasUrl = clients.map(client => client.image)

  // Scroll indicator setup
  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current

    if (scrollIndicator) {
      // Animate scroll indicator
      gsap.set(scrollIndicator, { opacity: 0, y: -10 })
      
      const indicatorTl = gsap.timeline({ delay: 1 })
      indicatorTl.to(scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .to(scrollIndicator, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Smooth scroll on click
      const handleScrollClick = () => {
        const clientListSection = rootRef.current
        if (clientListSection) {
          clientListSection.scrollIntoView({ behavior: 'smooth' })
        }
      }

      scrollIndicator.addEventListener('click', handleScrollClick)

      return () => {
        indicatorTl.kill()
        scrollIndicator.removeEventListener('click', handleScrollClick)
      }
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const listElement = listElementRef.current
    const mediaContainer = mediaContainerRef.current

    if (!root || !listElement || !mediaContainer) return

    // Set initial position for media container
    gsap.set(mediaContainer, { yPercent: -50 })

    // yTo is attached to the y property of media-container
    const yTo = gsap.quickTo(mediaContainer, 'y', {
      duration: 0.5,
      ease: 'power4'
    })

    const handleListMouseEnter = () => {
      mediaContainer.classList.add('on')
    }

    const handleListMouseLeave = () => {
      mediaContainer.classList.remove('on')
      // Empty the content of media-container
      Array.from(mediaContainer.children).forEach(el => {
        el.remove()
      })
    }

    const handleListMouseMove = (e) => {
      yTo(e.clientY + window.scrollY)
    }

    const createMedia = (index) => {
      const div = document.createElement('div')
      const image = document.createElement('img')

      image.src = mediasUrl[index]
      image.alt = clients[index].name
      div.appendChild(image)
      mediaContainer.appendChild(div)

      gsap.to([div, image], {
        y: 0,
        duration: 0.6,
        ease: 'expo.inOut'
      })

      // Limit to 20 children
      if (mediaContainer.children.length > 20) {
        mediaContainer.children[0].remove()
      }
    }

    // Add event listeners
    listElement.addEventListener('mouseenter', handleListMouseEnter)
    listElement.addEventListener('mouseleave', handleListMouseLeave)
    listElement.addEventListener('mousemove', handleListMouseMove)

    // Add hover handlers for each row
    rowsRef.current.forEach((row, index) => {
      if (row) {
        row.addEventListener('mouseenter', () => {
          createMedia(index)
        })
      }
    })

    // Cleanup
    return () => {
      listElement.removeEventListener('mouseenter', handleListMouseEnter)
      listElement.removeEventListener('mouseleave', handleListMouseLeave)
      listElement.removeEventListener('mousemove', handleListMouseMove)
    }
  }, [])

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source 
              src={heroVideo} 
              type="video/mp4" 
            />
            {/* Fallback if video doesn't load */}
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">Portfolio</h1>
          <p className="about-hero-subtitle">
            showcasing our trusted partners and successful packaging solutions
          </p>
        </div>
        <div 
          ref={scrollIndicatorRef}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Client List Section */}
      <section className="mwg_effect030" ref={rootRef}>
        <ul ref={listElementRef}>
          {clients.map((client, index) => (
            <li
              key={client.name}
              ref={(el) => (rowsRef.current[index] = el)}
            >
              <span>{client.name}</span>
              <span>{client.category}</span>
              <span>See project</span>
            </li>
          ))}
        </ul>

        {/* Hidden images for preloading */}
        <div className="medias" aria-hidden="true">
          {clients.map((client, index) => (
            <img key={index} src={client.image} alt="" />
          ))}
        </div>

        <div className="media-container" ref={mediaContainerRef}></div>
      </section>
    </div>
  )
}

export default Portfolio

