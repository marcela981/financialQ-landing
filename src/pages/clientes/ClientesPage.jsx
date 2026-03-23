import { Footer } from '../../widgets/footer/Footer'
import { Button } from '../../shared/ui/button/Button'
import { useScrollReveal } from '../../shared/lib/useScrollReveal'
import { t } from '../../shared/config/locales'

const tc = t.clientes

const PROFILE_ICONS = [
  <svg key="0" className="cc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="12" width="32" height="22" rx="1" /><path d="M14 12V9a6 6 0 0 1 12 0v3" /><circle cx="20" cy="23" r="3.5" />
  </svg>,
  <svg key="1" className="cc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="16" /><path d="M20 4a16 16 0 0 1 0 32M4 20h32" /><path d="M9 12c5 3.5 9 5 11 5s6-1.5 11-5M9 28c5-3.5 9-5 11-5s6 1.5 11 5" />
  </svg>,
  <svg key="2" className="cc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 34L20 6l14 28" /><path d="M11 24h18" />
  </svg>,
  <svg key="3" className="cc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 4v10M4 20h10M26 20h10M20 26v10" /><circle cx="20" cy="20" r="7" />
  </svg>,
]

export function ClientesPage({ navigate }) {
  useScrollReveal()

  return (
    <div>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{tc.kicker}</div>
          <h1 className="pg-title">{tc.heading}<br /><em>{tc['heading.italic']}</em></h1>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="col2 reveal" style={{ marginBottom: 60 }}>
            <p className="body-copy" style={{ fontSize: 16 }}>{tc.body1}</p>
            <p className="body-copy" style={{ fontSize: 16 }}>{tc.body2}</p>
          </div>
          <div className="g2">
            {tc.profiles.map((p, i) => (
              <div key={i} className={`cc reveal${i > 0 ? ` d${i}` : ''}`}>
                {PROFILE_ICONS[i]}
                <div className="cc-title">{p.title}</div>
                <div className="cc-body">{p.body}</div>
                <ul className="cc-list">
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section s-alt">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 56px' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>{tc.onboarding.eyebrow}</span>
            <h2 className="display" style={{ fontSize: 'clamp(32px,4vw,48px)', marginTop: 12 }}>
              {tc.onboarding.heading}<br /><em>{tc.onboarding['heading.italic']}</em>
            </h2>
          </div>
          <div className="sgrid">
            {tc.onboarding.steps.map((step, i) => (
              <div key={i} className={`sc reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className="sc-num">{step.num}</div>
                <div className="sc-title">{step.title}</div>
                <div className="sc-body">{step.body}</div>
              </div>
            ))}
          </div>
          <div className="cta-blk reveal" style={{ marginTop: 64 }}>
            <h2>{tc.cta.heading}<br /><em>{tc.cta['heading.italic']}</em></h2>
            <div className="cta-side">
              <Button variant="ivory" onClick={() => navigate('contacto')}>{tc.cta.btn}</Button>
              <div className="cta-note">{tc.cta.note}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" />
    </div>
  )
}
