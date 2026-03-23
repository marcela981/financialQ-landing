import { useState } from 'react'
import { Footer } from '../../widgets/footer/Footer'
import { Button } from '../../shared/ui/button/Button'
import { useScrollReveal } from '../../shared/lib/useScrollReveal'
import { t } from '../../shared/config/locales'

const tp = t.perspectivas

const TABS = [
  { key: 'todos', label: tp.tabs.all },
  { key: 'ensayo', label: tp.tabs.ensayo },
  { key: 'tecnica', label: tp.tabs.tecnica },
  { key: 'carta', label: tp.tabs.carta },
]

function InsightCard({ item }) {
  if (item.featured) {
    return (
      <div className="il">
        <div className="i-tag bl">{item.tag}</div>
        <div className="i-ttl" style={{ fontSize: 29, color: 'var(--ivory)' }}>{item.title}</div>
        <div className="i-body" style={{ color: 'rgba(230,223,197,.52)' }}>{item.body}</div>
        <div className="i-meta" style={{ color: 'rgba(230,223,197,.3)' }}>{item.meta}</div>
        <div className="i-arr"><svg viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" /></svg></div>
      </div>
    )
  }
  return (
    <div className="ic">
      <div className="i-tag lgt">{item.tag}</div>
      <div className="i-ttl">{item.title}</div>
      <div className="i-body">{item.body}</div>
      <div className="i-meta">{item.meta}</div>
      <div className="i-arr"><svg viewBox="0 0 12 12"><path d="M1 6h10M6 1l5 5-5 5" /></svg></div>
    </div>
  )
}

export function PerspectivasPage() {
  const [filter, setFilter] = useState('todos')
  useScrollReveal()

  const visible = filter === 'todos' ? tp.insights : tp.insights.filter(i => i.cat === filter)
  const featured = visible.find(i => i.featured)
  const rest = visible.filter(i => !i.featured)
  const rows = []
  if (featured) rows.push([featured, ...rest.slice(0, 2)])
  const remaining = featured ? rest.slice(2) : rest
  for (let i = 0; i < remaining.length; i += 3) {
    rows.push(remaining.slice(i, i + 3))
  }

  return (
    <div>
      <div className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pg-kicker">{tp.kicker}</div>
          <h1 className="pg-title">{tp.heading}<br /><em>{tp['heading.italic']}</em></h1>
        </div>
      </div>

      <section className="section s-wht">
        <div className="wrap">
          <div className="ctabs">
            {TABS.map(tab => (
              <div
                key={tab.key}
                className={`ctab${filter === tab.key ? ' active' : ''}`}
                onClick={() => setFilter(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div id="insights-grid">
            {rows.map((row, ri) => {
              const isFirstWithFeatured = ri === 0 && row[0]?.featured
              const gridClass = isFirstWithFeatured ? 'g53' : 'g3'
              return (
                <div key={ri} className={`${gridClass} reveal`} style={{ marginBottom: ri < rows.length - 1 ? 1 : 0 }}>
                  {row.map(item => (
                    <InsightCard key={item.title} item={item} />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section s-alt">
        <div className="wrap">
          <div className="cta-blk reveal">
            <h2>{tp.newsletter.heading}<br /><em>{tp.newsletter['heading.italic']}</em></h2>
            <div className="cta-side">
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input
                  className="finput"
                  type="email"
                  placeholder={tp.newsletter.placeholder}
                  style={{ width: 220, padding: '14px 16px', borderRadius: 5, border: '1.5px solid rgba(230,223,197,.3)', background: 'rgba(255,255,255,.08)', color: 'var(--ivory)', fontSize: 13 }}
                />
                <Button variant="ivory">{tp.newsletter.btn}</Button>
              </div>
              <div className="cta-note">{tp.newsletter.note}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" />
    </div>
  )
}
