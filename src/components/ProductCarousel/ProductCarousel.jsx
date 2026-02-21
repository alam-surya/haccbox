import { useEffect, useRef } from 'react'
import './ProductCarousel.css'

function ProductCarousel({ images, alt, draggable = true }) {
  const scrollRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const handlePointerDown = (e) => {
    if (!draggable) return
    isDraggingRef.current = true
    startXRef.current = e.clientX
    scrollLeftRef.current = scrollRef.current.scrollLeft
  }

  const handlePointerMove = (e) => {
    if (!draggable || !isDraggingRef.current) return
    e.preventDefault()
    const walk = (e.clientX - startXRef.current) * 1.2
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  useEffect(() => {
    if (!draggable) return
    const el = scrollRef.current
    if (!el || images.length <= 1) return
    el.addEventListener('pointerdown', handlePointerDown)
    el.addEventListener('pointermove', handlePointerMove, { passive: false })
    el.addEventListener('pointerup', handlePointerUp)
    el.addEventListener('pointerleave', handlePointerUp)
    return () => {
      el.removeEventListener('pointerdown', handlePointerDown)
      el.removeEventListener('pointermove', handlePointerMove)
      el.removeEventListener('pointerup', handlePointerUp)
      el.removeEventListener('pointerleave', handlePointerUp)
    }
  }, [images.length, draggable])

  return (
    <div
      ref={scrollRef}
      className="product-carousel"
      data-draggable={draggable}
      role="region"
      aria-label={`Carousel: ${images.length} images`}
    >
      <div className="product-carousel-track">
        {images.map((src, i) => (
          <div key={i} className="product-carousel-slide">
            <img src={src} alt={`${alt} ${i + 1}`} className="product-carousel-image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
