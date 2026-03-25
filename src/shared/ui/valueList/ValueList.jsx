export function ValueList({ items, delay }) {
  return (
    <div className={`vlist reveal${delay ? ` d${delay}` : ''}`}>
      {items.map(item => (
        <div key={item.num ?? item.title} className="vitem">
          <div className="v-num">{item.num ?? '·'}</div>
          <div>
            <div className="v-title">{item.title}</div>
            <div className="v-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
