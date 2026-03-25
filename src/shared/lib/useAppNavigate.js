import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../config/locales/i18nContext'
import { ROUTE_SLUGS } from '../config/routes'

/**
 * Wrapper sobre useNavigate que:
 * - Traduce claves internas (page, sub) a slugs URL según el idioma activo
 * - Hace scroll al top en cada navegación
 */
export function useAppNavigate() {
  const { lang } = useTranslation()
  const navigate = useNavigate()
  const slugs = ROUTE_SLUGS[lang]

  return (page, sub = null) => {
    let path
    if (page === 'inicio') {
      path = '/'
    } else if (sub) {
      path = `/${slugs[page] ?? page}/${slugs[sub] ?? sub}`
    } else {
      path = `/${slugs[page] ?? page}`
    }
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
