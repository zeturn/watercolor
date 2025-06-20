import React from 'react'

const Card = ({
  children,
  title = '',
  variant = 'default',
  padding = 'md',
  header,
  footer,
  className = '',
  ...props
}) => {
  const baseClasses = 'wc-card'
  
  const variantClasses = {
    default: '',
    elevated: 'shadow-hover'
  }
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={cardClasses} {...props}>
      {(title || header) && (
        <div className="wc-card-header mb-4">
          {header || (
            title && (
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
              </h3>
            )
          )}
        </div>
      )}
      
      <div className="wc-card-content">
        {children}
      </div>
      
      {footer && (
        <div className="wc-card-footer mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          {footer}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export default Card 