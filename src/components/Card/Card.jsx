import React from 'react'
import { getCardClasses } from './utils.js'
import './style.css'

const Card = ({
  children,
  title = '',
  variant = 'filled',
  color = 'default',
  size = 'medium',
  interactive = true,
  noBorder = true,
  className = '',
  header = null,
  footer = null,
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const cardClasses = getCardClasses(className, variant, color, size, interactive, noBorder)

  const handleClick = (e) => {
    if (interactive && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={cardClasses}
      style={style}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {header && (
        <div className="wc-card-header">
          {header}
        </div>
      )}
      
      {title && (
        <div className="wc-card-header">
          <h3 className="wc-card__title">{title}</h3>
        </div>
      )}
      
      <div className="wc-card-content">
        {children}
      </div>
      
      {footer && (
        <div className="wc-card-footer">
          {footer}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export default Card 