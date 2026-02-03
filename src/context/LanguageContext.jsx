import { createContext, useContext, useState, useEffect } from 'react'
import { translations, STORAGE_KEY } from '../translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'id' || stored === 'en') return stored
    } catch (_) {}
    return 'id'
  })

  const setLanguage = (value) => {
    setLanguageState((prev) => {
      const next = typeof value === 'function' ? value(prev) : value
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch (_) {}
      return next
    })
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = translations[language] ?? translations.id

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
