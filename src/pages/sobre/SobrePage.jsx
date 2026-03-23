import { useState } from 'react'
import { Footer } from '../../widgets/footer/Footer'
import { useScrollReveal } from '../../shared/lib/useScrollReveal'
import { t } from '../../shared/config/locales'

const ts = t.sobre

function SubNav({ active, onChange }) {
  return (
    <div className="subnav">
      <div className="subnav-inner">
        {Object.entries(ts.subnav).map(([key, label]) => (
          <span key={key} className={`snav-link${active === key ? ' active' : ''}`} onClick={() => onChange(key)}>{label}</span>
        ))}
      </div>
    </div>
  )
}

function Firma() {
  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{ts.firma.kicker}</div>
          <h1 className="pg-title">{ts.firma.heading}<br /><em>{ts.firma['heading.italic']}</em></h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="col2 reveal">
            <div>
              <span className="eyebrow">{ts.firma.historyEyebrow}</span>
              <h2 className="display" style={{ fontSize: 'clamp(34px,4vw,50px)', marginTop: 18 }}>
                {ts.firma.historyHeading}<br /><em>{ts.firma['historyHeading.italic']}</em>
              </h2>
            </div>
            <div>
              <p className="body-copy" style={{ fontSize: 15, marginBottom: 18 }}>{ts.firma.historyBody1}</p>
              <p className="body-copy" style={{ fontSize: 15 }}>{ts.firma.historyBody2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section s-alt">
        <div className="wrap">
          <div className="col2 reveal">
            <div>
              <span className="eyebrow">{ts.firma.legalEyebrow}</span>
              <h2 className="display" style={{ fontSize: 'clamp(30px,4vw,46px)', marginTop: 16 }}>
                {ts.firma.legalHeading}<br /><em>{ts.firma['legalHeading.italic']}</em>
              </h2>
              <p className="body-copy" style={{ marginTop: 18, marginBottom: 28 }}>{ts.firma.legalBody}</p>
              <div className="gpill"><div className="gpill-dot" />{ts.firma.legalPill}</div>
            </div>
            <div className="vlist reveal d1">
              {ts.firma.items.map(item => (
                <div key={item.title} className="vitem">
                  <div className="v-num">·</div>
                  <div><div className="v-title">{item.title}</div><div className="v-body">{item.body}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Equipo() {
  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{ts.equipo.kicker}</div>
          <h1 className="pg-title">{ts.equipo.heading}<br /><em>{ts.equipo['heading.italic']}</em></h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <p className="body-copy reveal" style={{ fontSize: 16, maxWidth: 600, marginBottom: 60 }}>
            {ts.equipo.intro}
          </p>
          <div className="g4">
            {ts.equipo.members.map((m, i) => (
              <div key={m.initials} className={`tc reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className="t-mono">{m.initials}</div>
                <div className="t-name">{m.name}</div>
                <div className="t-role">{m.role}</div>
                <div className="t-certs">{m.certs}</div>
                <div className="t-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Mision() {
  return (
    <>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{ts.mision.kicker}</div>
          <h1 className="pg-title">{ts.mision.heading}<br /><em>{ts.mision['heading.italic']}</em></h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="g2" style={{ marginBottom: 64 }}>
            <div className="card reveal" style={{ border: '1px solid var(--border)', padding: '48px 44px' }}>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>{ts.mision.missionEyebrow}</span>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, color: 'var(--black)', lineHeight: 1.35 }}>
                {ts.mision.missionText}
              </p>
            </div>
            <div style={{ background: 'var(--blue)', padding: '48px 44px' }} className="reveal d1">
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex', color: 'rgba(230,223,197,.55)' }}>{ts.mision.visionEyebrow}</span>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.35 }}>
                {ts.mision.visionText}
              </p>
            </div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>{ts.mision.valuesLabel}</div>
          <div className="vlist reveal">
            {ts.mision.values.map(v => (
              <div key={v.num} className="vitem">
                <div className="v-num">{v.num}</div>
                <div><div className="v-title">{v.title}</div><div className="v-body">{v.body}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function SobrePage({ initialSub }) {
  const [active, setActive] = useState(initialSub ?? 'firma')
  useScrollReveal()

  const subMap = { firma: <Firma />, equipo: <Equipo />, mision: <Mision /> }

  return (
    <div>
      <SubNav active={active} onChange={setActive} />
      {subMap[active]}
      <Footer variant="mini" />
    </div>
  )
}
