import { useState } from 'react'
import { Footer } from '../../widgets/footer/Footer'
import { Button } from '../../shared/ui/button/Button'
import { Card } from '../../shared/ui/cards/Card'
import { useScrollReveal } from '../../shared/lib/useScrollReveal'
import { t } from '../../shared/config/locales'

const te = t.enfoque

function SubNav({ active, onChange }) {
  return (
    <div className="subnav">
      <div className="subnav-inner">
        {Object.entries(te.subnav).map(([key, label]) => (
          <span key={key} className={`snav-link${active === key ? ' active' : ''}`} onClick={() => onChange(key)}>{label}</span>
        ))}
      </div>
    </div>
  )
}

function Filosofia() {
  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{te.filosofia.kicker}</div>
          <h1 className="pg-title">{te.filosofia.heading}<br /><em>{te.filosofia['heading.italic']}</em></h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="col2 reveal">
            <div>
              <p className="body-copy" style={{ fontSize: 16, marginBottom: 16 }}>{te.filosofia.intro}</p>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 130, fontWeight: 300, color: 'rgba(59,76,157,.07)', lineHeight: 1, letterSpacing: '-.05em', marginTop: 16 }}>5</div>
            </div>
            <div className="vlist">
              {te.filosofia.convicciones.map((c, i) => (
                <div key={c.num} className={`vitem reveal${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}>
                  <div className="v-num">{c.num}</div>
                  <div><div className="v-title">{c.title}</div><div className="v-body">{c.body}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Framework() {
  return (
    <>
      <section className="section s-dk" style={{ paddingTop: 'calc(var(--gap) + 24px)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 60% at 80% 20%,rgba(59,76,157,.2) 0%,transparent 65%),repeating-linear-gradient(0deg,transparent,transparent 71px,rgba(255,255,255,.02) 71px,rgba(255,255,255,.02) 72px)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow lt" style={{ marginBottom: 20, display: 'flex' }}>{te.framework.eyebrow}</span>
          <h1 className="display lt" style={{ fontSize: 'clamp(40px,6vw,76px)' }}>
            {te.framework.heading}<br /><span style={{ color: 'rgba(230,223,197,.35)' }}>{te.framework['heading.sup']}</span>
          </h1>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,.35)', fontSize: 16, maxWidth: 560, marginTop: 22 }}>
            {te.framework.body}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="g2">
            {te.framework.pillars.map((p, i) => (
              <Card key={p.num} className={`reveal${i > 0 ? ` d${i}` : ''}`} style={{ padding: '52px 44px' }}>
                <div className="pnum">{p.num}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--black)', marginBottom: 12 }}>{p.title}</h3>
                <p className="body-copy">{p.body}</p>
                <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--border)', fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>{p.deliverables.label}</div>
                <ul className="cc-list">
                  {p.deliverables.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Riesgo() {
  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{te.riesgo.kicker}</div>
          <h1 className="pg-title">{te.riesgo.heading}<br /><em>{te.riesgo['heading.italic']}</em></h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="col2 reveal" style={{ marginBottom: 56 }}>
            <p className="body-copy" style={{ fontSize: 15 }}>{te.riesgo.body1}</p>
            <p className="body-copy" style={{ fontSize: 15 }}>{te.riesgo.body2}</p>
          </div>
          <div className="g3">
            {te.riesgo.dimensions.map((d, i) => (
              <Card key={d.num} className={`reveal${i > 0 ? ` d${i % 4}` : ''}`}>
                <div className="pnum" style={{ fontSize: 52 }}>{d.num}</div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--black)', marginBottom: 9 }}>{d.title}</h4>
                <p className="body-copy" style={{ fontSize: 13.5 }}>{d.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function EnfoquePage({ initialSub }) {
  const [active, setActive] = useState(initialSub ?? 'filosofia')
  useScrollReveal()

  const subMap = { filosofia: <Filosofia />, framework: <Framework />, riesgo: <Riesgo /> }

  return (
    <div>
      <SubNav active={active} onChange={setActive} />
      {subMap[active]}
      <Footer variant="mini" />
    </div>
  )
}
