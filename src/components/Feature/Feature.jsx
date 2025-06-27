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

  return (
    <div 
      className={cardClasses} 
      style={cardStyles}
      onClick={(e) => handleFeatureClick(e, false, onClick)}
    >
      {icon && (
        <div className={iconClasses}>
          {renderIcon(icon)}
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