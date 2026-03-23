import en from './en/common.json'
import es from './es/common.json'

let path = window.location.pathname.replace(/\/+$/, '') || '/'

if (path !== '/' && path !== '/es') {
  window.history.replaceState({}, '', '/')
  path = '/'
}

export const t = path === '/es' ? es : en
