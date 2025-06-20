import React from 'react'

const Feature = ({
  title = 'Awesome Feature',
  description = 'Feature description goes here.',
  icon = '', // string (html/emoji) or ReactNode
  iconSize = 48,
  align = 'left', // left | center
  bgColor = '',
  reverse = false,
  ctaLabel = '',
  ctaHref = '#',
  onClick,
  onCtaClick,
  children,
  className = '',
  style = {},
}) => {
  const cardStyles = {
    display: 'flex',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    gap: '16px',
    padding: '16px',
    border: '1px solid var(--color-border,#e5e7eb)',
    borderRadius: '8px',
    background: 'var(--color-gray-50,#f9fafb)',
    cursor: 'pointer',
    flexDirection: reverse ? 'row-reverse' : 'row',
    ...(bgColor ? { background: bgColor } : {}),
    ...style,
  }

  const iconWrapperStyle = {
    flexShrink: 0,
    width: typeof iconSize === 'number' ? `${iconSize}px` : iconSize,
    height: typeof iconSize === 'number' ? `${iconSize}px` : iconSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'var(--color-primary,#3b82f6)',
  }

  return (
    <div className={`wc-feature-card ${className}`} style={cardStyles} onClick={onClick}>
      {icon && (
        <div style={iconWrapperStyle} className="wc-feature-icon">
          {typeof icon === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: icon }} />
          ) : (
            icon
          )}
        </div>
      )}
      <div className="wc-feature-content" style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text,#111827)' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary,#6b7280)', lineHeight: 1.5 }}>
          {children || description}
        </p>
        {ctaLabel && (
          <a
            href={ctaHref}
            style={{ display: 'inline-block', marginTop: 12, color: 'var(--color-primary,#3b82f6)', fontWeight: 500, textDecoration: 'underline', fontSize: '0.875rem' }}
            onClick={(e) => {
              e.stopPropagation()
              onCtaClick && onCtaClick(e)
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  )
}

Feature.displayName = 'Feature'

export default Feature 