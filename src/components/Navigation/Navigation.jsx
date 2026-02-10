import { useState } from 'react'
import NavDropdown from '../NavDropdown/NavDropdown'
import { useLanguage } from '../../context/LanguageContext'
import logo from '../../assets/images/logo.webp'
import './Navigation.css'

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

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
          type="button"
          className="logo-link"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <img src={logo} alt="Haccbox" className="logo-image" />
        </button>
        <button
          type="button"
          className="navigation-lang-btn"
          onClick={() => setLanguage((lang) => (lang === 'id' ? 'en' : 'id'))}
          aria-label={language === 'id' ? t.nav.ariaSwitchEn : t.nav.ariaSwitchId}
          title={language === 'id' ? t.nav.switchToEn : t.nav.switchToId}
        >
          <span className="navigation-lang-icon"><GlobeIcon /></span>
          <span className="navigation-lang-label">
            {language === 'id' ? t.nav.switchToEn : t.nav.switchToId}
          </span>
        </button>
      </nav>
      
      <NavDropdown isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navigation

