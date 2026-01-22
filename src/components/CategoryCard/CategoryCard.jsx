import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

function CategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (isHovered && videoRef.current && !videoLoaded) {
      videoRef.current.load()
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
      })
    }
  }, [isHovered, videoLoaded])

  // Handle time update to limit video duration to 10 seconds
  const handleImageTimeUpdate = (e) => {
    const video = e.target
    if (video && video.currentTime >= 10) {
      video.currentTime = 0
      video.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }

  const handleVideoTimeUpdate = (e) => {
    const video = e.target
    if (video && video.currentTime >= 10) {
      video.currentTime = 0
      video.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="category-card-wrapper">
      <h2 className="category-name category-name-duplicate">{category.name}</h2>
      <Link
        to={category.link}
        className="category-card"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="category-media">
          {category.image && (
            <video
              ref={imageRef}
              src={category.image}
              className={`category-image ${isHovered && videoLoaded ? 'hidden' : ''}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={handleImageTimeUpdate}
            >
              <source src={category.image} type="video/mp4" />
            </video>
          )}
          {category.video && category.video !== category.image && (
            <video
              ref={videoRef}
              className={`category-video ${isHovered && videoLoaded ? 'visible' : ''}`}
              muted
              playsInline
              preload="none"
              onTimeUpdate={handleVideoTimeUpdate}
            >
              <source src={category.video} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="category-content">
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard

