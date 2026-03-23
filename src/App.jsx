import { useState } from 'react'
import { Header } from './widgets/header/Header'
import { LandingPage } from './pages/landing/LandingPage'
import { SobrePage } from './pages/sobre/SobrePage'
import { EnfoquePage } from './pages/enfoque/EnfoquePage'
import { ClientesPage } from './pages/clientes/ClientesPage'
import { PerspectivasPage } from './pages/perspectivas/PerspectivasPage'
import { GovernancePage } from './pages/governance/GovernancePage'
import { ContactoPage } from './pages/contacto/ContactoPage'

function App() {
  const [nav, setNav] = useState({ page: 'inicio', sub: null })

  const navigate = (page, sub = null) => {
    setNav({ page, sub })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages = {
    inicio: <LandingPage navigate={navigate} />,
    sobre: <SobrePage initialSub={nav.sub} navigate={navigate} />,
    enfoque: <EnfoquePage initialSub={nav.sub} navigate={navigate} />,
    clientes: <ClientesPage navigate={navigate} />,
    perspectivas: <PerspectivasPage navigate={navigate} />,
    governance: <GovernancePage navigate={navigate} />,
    contacto: <ContactoPage navigate={navigate} />,
  }

  return (
    <>
      <Header navigate={navigate} />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        {pages[nav.page] ?? pages.inicio}
      </main>
    </>
  )
}

export default App
