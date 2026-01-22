import { useState } from 'react'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import logo from '../../assets/images/logo.webp'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className="navigation">
        <button 
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          MENU
        </button>
        
        <a href="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Haccbox" className="logo-image" />
        </a>
        
        <a 
          href="#contact" 
          className="contact-button"
          onClick={closeMenu}
        >
          ID/EN
        </a>
      </nav>
      
      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navigation

