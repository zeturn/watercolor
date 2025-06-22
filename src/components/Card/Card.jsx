import React from 'react'
import { getCardClasses, getCardStyles, handleCardClick } from './utils.js'
import './style.css'

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  fullWidth = false,
  hover = false,
  clickable = false,
  disabled = false,
  elevation = 0,
  borderRadius = 'md',
  title = null,
  subtitle = null,
  header = null,
  footer = null,
  media = null,
  className = '',
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const cardClasses = getCardClasses({
    variant,
    padding,
    borderRadius,
    fullWidth,
    hover,
    clickable,
    disabled,
    elevation,
    className
  }).join(' ')

  const cardStyles = getCardStyles(style)

  const handleClick = (e) => {
    handleCardClick(e, disabled, clickable, onClick)
  }

  return (
    <div
      className={cardClasses}
      style={cardStyles}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {media && (
        <div className="wc-card__media">
          {media}
        </div>
      )}
      
      {header && (
        <div className="wc-card__header">
          {header}
        </div>
      )}
      
      {(title || subtitle) && (
        <div className="wc-card__title-section">
          {title && (
            <h3 className="wc-card__title">{title}</h3>
          )}
          {subtitle && (
            <p className="wc-card__subtitle">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className="wc-card__content">
        {children}
      </div>
      
      {footer && (
        <div className="wc-card__footer">
          {footer}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export default Card 