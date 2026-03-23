import './Button.css'

/**
 * @param {{ variant?: 'solid'|'ghost'|'ivory', onClick?: Function, children: React.ReactNode, style?: object, className?: string }} props
 */
export function Button({ variant = 'solid', onClick, children, style, className }) {
  const base = `btn-${variant}`
  const cls = className ? `${base} ${className}` : base
  return (
    <div className={cls} onClick={onClick} style={style}>
      {children}
    </div>
  )
}
