import React, { forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const sizes = { xs: 16, sm: 20, md: 24, lg: 32, xl: 48 }
let warnedAboutNames = false

/** Presentation only: applications supply the icon; no catalog is imported. */
const Icon = forwardRef(function Icon({
  component: Component,
  size = 24,
  color = 'currentColor',
  strokeWidth,
  label,
  decorative,
  title,
  className = '',
  style,
  children,
  html,
  library,
  name,
  variant,
  ...props
}, ref) {
  useEffect(() => {
    if ((name || library || variant) && !Component && !children && !html && !warnedAboutNames) {
      warnedAboutNames = true
      console.warn('[Watercolor Icon] library/name no longer loads icon packages. Import an icon explicitly and pass component={YourIcon}.')
    }
  }, [name, library, variant, Component, children, html])

  const dimension = sizes[size] ?? (typeof size === 'string' && /^\d+(?:\.\d+)?$/.test(size) ? Number(size) : size)
  const accessibleLabel = label ?? props['aria-label'] ?? title
  const hiddenValue = props['aria-hidden'] ?? (decorative ?? !(accessibleLabel || props['aria-labelledby']))
  const hidden = hiddenValue === true || hiddenValue === 'true'
  const shared = {
    ...props,
    ref,
    title,
    className: `wc-icon ${className}`.trim(),
    style: { width: dimension, height: dimension, color, ...style },
    'aria-label': accessibleLabel,
    'aria-hidden': hidden ? true : undefined,
    role: props.role ?? (hidden ? undefined : 'img'),
  }

  if (Component) {
    return <Component {...shared} width={dimension} height={dimension} color={color} {...(strokeWidth === undefined ? {} : { strokeWidth })} focusable={props.focusable ?? false}>{children}</Component>
  }
  if (html) return <span {...shared} dangerouslySetInnerHTML={{ __html: html }} />
  return <span {...shared}>{children}</span>
})

Icon.propTypes = {
  component: PropTypes.elementType,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  decorative: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  html: PropTypes.string,
  library: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
}

export default Icon
