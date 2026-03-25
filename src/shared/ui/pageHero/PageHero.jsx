export function PageHero({ kicker, heading, headingItalic }) {
  return (
    <div className="pg-hero">
      <div className="pg-hero-bg" />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="pg-kicker">{kicker}</div>
        <h1 className="pg-title">
          {heading}
          {headingItalic && <><br /><em>{headingItalic}</em></>}
        </h1>
      </div>
    </div>
  )
}
