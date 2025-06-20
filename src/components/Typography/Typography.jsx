import React from 'react'

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span'
}

const variantClassMap = {
  h1: 'text-6xl font-light tracking-tight',
  h2: 'text-5xl font-light tracking-tight',
  h3: 'text-4xl font-normal',
  h4: 'text-3xl font-normal',
  h5: 'text-2xl font-normal',
  h6: 'text-xl font-medium',
  subtitle1: 'text-base font-normal',
  subtitle2: 'text-sm font-medium',
  body1: 'text-base font-normal',
  body2: 'text-sm font-normal',
  caption: 'text-xs font-normal',
  overline: 'text-xs font-medium uppercase tracking-wide',
  button: 'text-sm font-medium uppercase tracking-wide'
}

const colorClassMap = {
  inherit: 'text-inherit',
  primary: 'text-primary-600 dark:text-primary-400',
  secondary: 'text-neutral-600 dark:text-neutral-400',
  success: 'text-success-600 dark:text-success-400',
  warning: 'text-warning-600 dark:text-warning-400',
  error: 'text-error-600 dark:text-error-400',
  textPrimary: 'text-neutral-900 dark:text-neutral-100',
  textSecondary: 'text-neutral-600 dark:text-neutral-400',
  textDisabled: 'text-neutral-400 dark:text-neutral-600'
}

const alignClassMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify'
}

const Typography = ({
  variant = 'body1',
  component,
  color = 'inherit',
  align = 'inherit',
  gutterBottom = false,
  noWrap = false,
  children,
  className = '',
  style = {},
  ...rest
}) => {
  const Component = component || variantMap[variant] || 'p'

  const classes = [
    variantClassMap[variant],
    colorClassMap[color],
    align !== 'inherit' ? alignClassMap[align] : null,
    gutterBottom ? 'mb-4' : null,
    noWrap ? 'truncate' : null,
    className
  ]
    .filter(Boolean)
    .join(' ')

  // custom inline line-height adjustments similar to Vue version
  const lineHeightMap = {
    h1: '1.2', h2: '1.2', h3: '1.3', h4: '1.3', h5: '1.4', h6: '1.4',
    subtitle1: '1.5', subtitle2: '1.5', body1: '1.6', body2: '1.6',
    caption: '1.4', overline: '1.4', button: '1.4'
  }

  const mergedStyle = { lineHeight: lineHeightMap[variant], ...style }

  return (
    <Component className={classes} style={mergedStyle} {...rest}>
      {children}
    </Component>
  )
}

Typography.displayName = 'Typography'
export default Typography