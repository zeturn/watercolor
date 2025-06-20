import React from 'react'

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
  const getCardClasses = () => {
    const classes = ['wc-card']
    
    // Variant classes
    classes.push(`wc-card--${variant}`)
    
    // Padding classes
    classes.push(`wc-card--padding-${padding}`)
    
    // Border radius classes
    classes.push(`wc-card--radius-${borderRadius}`)
    
    // State classes
    if (fullWidth) classes.push('wc-card--full-width')
    if (hover) classes.push('wc-card--hover')
    if (clickable) classes.push('wc-card--clickable')
    if (disabled) classes.push('wc-card--disabled')
    if (elevation > 0) classes.push(`wc-card--elevation-${elevation}`)
    
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const getCardStyles = () => {
    const styles = { ...style }
    
    // Use CSS variables for theming
    styles.backgroundColor = 'var(--wc-neutral-0)'
    styles.border = '1px solid var(--wc-neutral-200)'
    styles.color = 'var(--wc-neutral-900)'
    
    return styles
  }

  const handleClick = (e) => {
    if (!disabled && clickable && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={getCardClasses()}
      style={getCardStyles()}
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