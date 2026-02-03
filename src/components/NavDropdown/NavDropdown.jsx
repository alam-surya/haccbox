import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import './NavDropdown.css'

const ICONS = {
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  box: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  tool: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  list: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  image: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  chevronRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function NavDropdown({ isOpen, onClose }) {
  const navigate = useNavigate()
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const { t } = useLanguage()
  const menuGroups = t.menu.groups

  const handleItemClick = (path) => {
    navigate(path)
    onClose()
  }

  const handleParentToggle = (e, iconKey) => {
    e.stopPropagation()
    setOpenSubmenu((prev) => (prev === iconKey ? null : iconKey))
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="nav-dropdown-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="nav-dropdown" role="dialog" aria-label="Navigation menu">
        <nav className="nav-dropdown-list">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="nav-dropdown-group">
              {groupIndex > 0 && <div className="nav-dropdown-divider" />}
              {group.map((item) =>
                item.children ? (
                  <div key={item.icon} className="nav-dropdown-item-parent-wrapper">
                    <button
                      type="button"
                      className="nav-dropdown-item-parent"
                      onClick={(e) => handleParentToggle(e, item.icon)}
                      aria-expanded={openSubmenu === item.icon}
                      aria-haspopup="true"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <span className="nav-dropdown-icon">{ICONS[item.icon]}</span>
                      <span className="nav-dropdown-label">{item.label}</span>
                      <span className="nav-dropdown-chevron">{ICONS.chevronRight}</span>
                    </button>
                    {openSubmenu === item.icon && (
                      <div className="nav-dropdown-submenu">
                        {item.children.map((sub) => (
                          <button
                            key={sub.path}
                            type="button"
                            className="nav-dropdown-subitem"
                            onClick={() => handleItemClick(sub.path)}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.path}
                    type="button"
                    className="nav-dropdown-item"
                    onClick={() => handleItemClick(item.path)}
                    aria-label={item.label}
                    title={item.label}
                  >
                    <span className="nav-dropdown-icon">{ICONS[item.icon]}</span>
                    <span className="nav-dropdown-label">{item.label}</span>
                  </button>
                )
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}

export default NavDropdown
