import React from 'react'
import './style.css'
import { 
  getFeatureCardClasses,
  getFeatureIconClasses,
  getFeatureContentClasses,
  getFeatureTitleClasses,
  getFeatureDescriptionClasses,
  handleFeatureClick,
  handleCtaClick,
  renderIcon
} from './utils.js'

const Feature = ({
  title = 'Awesome Feature',
  description = 'Feature description goes here.',
  icon = '',
  iconSize = 48,
  size = 'md',
  align = 'left',
  background = 'default',
  variant = 'default',
  bgColor = '',
  reverse = false,
  vertical = false,
  ctaLabel = '',
  ctaHref = '#',
  onClick,
  onCtaClick,
  children,
  className = '',
  style = {},
}) => {
  const cardClasses = getFeatureCardClasses({
    align,
    size,
    background,
    reverse,
    vertical,
    clickable: !!onClick,
    disabled: false,
    className
  }).join(' ')

  const iconClasses = getFeatureIconClasses(iconSize).join(' ')
  const contentClasses = getFeatureContentClasses(align).join(' ')
  const titleClasses = getFeatureTitleClasses(size).join(' ')
  const descriptionClasses = getFeatureDescriptionClasses(size).join(' ')

  const cardStyles = {
    ...(bgColor ? { background: bgColor } : {}),
    ...style
  }

  const iconDimension = typeof iconSize === 'number' ? `${iconSize}px` : iconSize
  const interactiveProps = onClick ? {
    role: 'button',
    tabIndex: 0,
    onKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onClick(event)
      }
    }
  } : {}

  return (
    <div
      className={`${cardClasses} ${variant !== 'default' ? `wc-feature-card--${variant}` : ''}`}
      style={cardStyles}
      onClick={(e) => handleFeatureClick(e, false, onClick)}
      {...interactiveProps}
    >
      {icon && (
        <div className={iconClasses} style={{ width: iconDimension, height: iconDimension }}>
          {typeof icon === 'string' ? (
            <span
              className="wc-feature-icon__inner"
              // icon is developer-provided (emoji/svg/html string). Rendering as HTML
              // keeps parity with Vue's v-html behavior.
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ) : (
            renderIcon(icon)
          )}
        </div>
      )}
      <div className={contentClasses}>
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>
          {children || description}
        </p>
        {ctaLabel && (
          <a
            href={ctaHref}
            className="wc-feature-cta"
            onClick={(e) => handleCtaClick(e, onCtaClick)}
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
