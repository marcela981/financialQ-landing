export function SubNav({ items, active, onChange }) {
  return (
    <div className="subnav">
      <div className="subnav-inner">
        {Object.entries(items).map(([key, label]) => (
          <span
            key={key}
            className={`snav-link${active === key ? ' active' : ''}`}
            onClick={() => onChange(key)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
