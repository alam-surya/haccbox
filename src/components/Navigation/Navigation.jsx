import { useState } from 'react'
import NavDropdown from '../NavDropdown/NavDropdown'
import logo from '../../assets/images/logo.webp'
import { useLanguage } from '../../context/LanguageContext'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
          {t.nav.menu}
        </button>
        
        <a href="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Haccbox" className="logo-image" />
        </a>
        
        <button
          type="button"
          className="contact-button language-button"
          onClick={() => {
            setLanguage((lang) => (lang === 'id' ? 'en' : 'id'))
            closeMenu()
          }}
          aria-label={language === 'id' ? t.nav.ariaSwitchEn : t.nav.ariaSwitchId}
        >
          {language === 'id' ? t.nav.switchToEn : t.nav.switchToId}
        </button>
      </nav>
      
      <NavDropdown isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navigation

