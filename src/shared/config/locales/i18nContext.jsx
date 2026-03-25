import { createContext, useContext, useState } from 'react'
import en from './en/common.json'
import es from './es/common.json'

const TRANSLATIONS = { en, es }

const I18nContext = createContext(null)

function detectLang() {
  return localStorage.getItem('lang') === 'es' ? 'es' : 'en'
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

  const setLanguage = (newLang) => {
    localStorage.setItem('lang', newLang)
    setLang(newLang)
  }

  return (
    <I18nContext.Provider value={{ t: TRANSLATIONS[lang], lang, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

/**
 * Hook para acceder a traducciones y cambiar idioma en runtime.
 * Uso: const { t, lang, setLanguage } = useTranslation()
 */
export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider')
  return ctx
}
