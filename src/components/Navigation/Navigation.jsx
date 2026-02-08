import { useState } from 'react'
import NavDropdown from '../NavDropdown/NavDropdown'
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
          type="button"
          className="logo-link"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <img src={logo} alt="Haccbox" className="logo-image" />
        </button>
      </nav>
      
      <NavDropdown isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navigation

