import en from './en/common.json'
import es from './es/common.json'

// Static export para compatibilidad con imports existentes.
// Lee la preferencia de idioma desde localStorage (sin modificar el historial del navegador).
const lang = localStorage.getItem('lang') === 'es' ? 'es' : 'en'
export const t = lang === 'es' ? es : en
