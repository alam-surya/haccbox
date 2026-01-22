import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import satuImage from '../../assets/images/satu.png'
import './Portfolio.css'

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
  const rootRef = useRef(null)
  const listElementRef = useRef(null)
  const mediaContainerRef = useRef(null)
  const rowsRef = useRef([])
  const carouselContainerRef = useRef(null)
  const carouselCardsRef = useRef([])

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

  // Carousel images - 7 cards using satu.png
  const carouselImages = Array(7).fill(satuImage)

  // Carousel Observer setup
  useEffect(() => {
    const container = carouselContainerRef.current
    if (!container) return

    // Wait for cards to be rendered
    const cards = container.querySelectorAll('.card')
    if (cards.length === 0) return

    const half = container.clientWidth / 2
    const wrap = gsap.utils.wrap(-half, 0)
    
    const xTo = gsap.quickTo(container, 'x', {
      duration: 0.5,
      ease: 'power3',
      modifiers: {
        x: gsap.utils.unitize(wrap)
      }
    })

    const rotateTo = gsap.quickTo(cards, 'rotation', {
      duration: 1,
      ease: 'power3'
    })

    let total = 0

    const observer = gsap.Observer.create({
      target: container,
      type: 'touch,pointer',
      onDrag: (self) => {
        total += self.deltaX
        xTo(total)

        const screenWidth = window.innerWidth
        const normalizedDelta = (self.deltaX / screenWidth) * 100
        rotateTo(-normalizedDelta)
      },
      onRelease: () => {
        rotateTo(0)
      },
      onStop: () => {
        rotateTo(0)
      }
    })

    return () => {
      observer.kill()
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

  // Drag icon SVG
  const DragIcon = () => (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 6h8M8 12h8M8 18h8" strokeLinecap="round"/>
    </svg>
  )

  return (
    <div className="portfolio-page">
      {/* Carousel Section */}
      <section className="mwg_effect028">
        <div className="header">
          <div className="top">
            <p>
              At Haccbox we believe that quality packaging has the power to protect and elevate your products, 
              which is why we are dedicated to providing custom packaging solutions that meet export and laboratory standards.
            </p>
          </div>
          <div className="drag">
            <DragIcon />
            <p>Drag the carousel to explore</p>
          </div>
        </div>
        <div className="container" ref={carouselContainerRef}>
          {carouselImages.map((image, index) => (
            <div key={`card-${index}`} className="card" ref={(el) => (carouselCardsRef.current[index] = el)}>
              <img src={image} alt={`Portfolio ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {carouselImages.map((image, index) => (
            <div key={`card-dup-${index}`} className="card" ref={(el) => (carouselCardsRef.current[index + 7] = el)}>
              <img src={image} alt={`Portfolio ${index + 1}`} />
            </div>
          ))}
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

