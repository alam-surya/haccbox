import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import './MenuOverlay.css'

function MenuOverlay({ isOpen, onClose }) {
  const navigate = useNavigate()
  const overlayRef = useRef(null)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])
  const closeButtonRef = useRef(null)

  const menuItems = ['Location', 'QnA', 'Social Media', 'Article']

  useEffect(() => {
    const overlay = overlayRef.current
    const menu = menuRef.current
    const items = menuItemsRef.current
    const closeButton = closeButtonRef.current

    if (!overlay || !menu) return

    if (isOpen) {
      // Open animation
      gsap.set(overlay, { display: 'block' })
      gsap.set(items, { opacity: 0, y: 20 })
      gsap.set(closeButton, { opacity: 0, y: -10 })

      const tl = gsap.timeline()
      
      tl.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to(menu, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.2')
      .to(closeButton, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3')
      .to(items, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.2')
    } else {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { display: 'none' })
        }
      })

      tl.to(items, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      })
      .to(closeButton, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in'
      }, '-=0.2')
      .to(menu, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.2')
      .to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      }, '-=0.2')
    }
  }, [isOpen])

  const handleItemClick = (item) => {
    onClose()
    // Handle navigation
    if (item === 'Location') {
      navigate('/location')
    } else if (item === 'QnA') {
      navigate('/qna')
    } else if (item === 'Social Media') {
      navigate('/social-media')
    }
    // Handle other items here if needed
  }

  const handleClose = () => {
    onClose()
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div 
      ref={overlayRef}
      className={`menu-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <nav 
        ref={menuRef}
        className="menu-nav"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          ref={closeButtonRef}
          className="menu-close-button"
          onClick={handleClose}
          aria-label="Close menu"
        >
          CLOSE
        </button>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={item} className="menu-item">
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="menu-link"
                ref={(el) => (menuItemsRef.current[index] = el)}
                onClick={(e) => {
                  e.preventDefault()
                  handleItemClick(item)
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuOverlay

