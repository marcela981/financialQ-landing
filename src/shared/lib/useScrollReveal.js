import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const trigger = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add('in')
        }
      })
    }
    const timeout = setTimeout(trigger, 80)
    window.addEventListener('scroll', trigger)
    window.addEventListener('resize', trigger)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', trigger)
      window.removeEventListener('resize', trigger)
    }
  }, [])
}
