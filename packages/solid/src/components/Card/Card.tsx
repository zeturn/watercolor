
import './style.css'
import { getCardClasses } from './utils.js'

const Card = ({
  children,
  title = '',
  variant = 'minimal',
  color = 'default',
  size = 'medium',
  interactive = false,
  noBorder = true,
  className = '',
  header = null,
  footer = null,
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  ...props
}) => {
  const isInteractive = interactive || Boolean(onClick)
  const cardClasses = getCardClasses(className, variant, color, size, isInteractive, noBorder)

  const handleClick = (e) => {
    if (isInteractive && onClick) {
      onClick(e)
    }
  }

  const handleKeyDown = (event) => {
    onKeyDown?.(event)
    if (!onClick || event.defaultPrevented || !['Enter', ' '].includes(event.key)) return
    event.preventDefault()
    onClick(event)
  }

  return (
    <div
      class={cardClasses}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {header && (
        <div class="wc-card-header">
          {header}
        </div>
      )}

      {title && (
        <div class="wc-card-header">
          <h3 class="wc-card__title">{title}</h3>
        </div>
      )}

      <div class="wc-card-content">
        {children}
      </div>

      {footer && (
        <div class="wc-card-footer">
          {footer}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export default Card
