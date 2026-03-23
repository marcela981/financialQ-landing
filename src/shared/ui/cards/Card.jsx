import './Card.css'

/**
 * Generic card container.
 * @param {{ variant?: 'default'|'white'|'dark'|'blue', className?: string, style?: object, children: React.ReactNode }} props
 */
export function Card({ variant = 'default', className, style, children, ...rest }) {
  const variantClass = {
    default: 'card',
    white: 'card-wht',
    dark: 'card-dk',
    blue: 'card-bl',
  }[variant] ?? 'card'

  const cls = className ? `${variantClass} ${className}` : variantClass
  return (
    <div className={cls} style={style} {...rest}>
      {children}
    </div>
  )
}
