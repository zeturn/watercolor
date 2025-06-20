import React from 'react'

const Grid = ({
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing = 0,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes = []

  if (container) {
    classes.push('flex', 'flex-wrap')

    const directionMap = {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse'
    }
    classes.push(directionMap[direction])

    const justifyMap = {
      'flex-start': 'justify-start',
      'center': 'justify-center',
      'flex-end': 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly'
    }
    classes.push(justifyMap[justifyContent])

    const alignMap = {
      'flex-start': 'items-start',
      'center': 'items-center',
      'flex-end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline'
    }
    classes.push(alignMap[alignItems])

    if (spacing > 0) {
      const spacingValue = spacing.toString()
      if (['1', '2', '3', '4', '5', '6', '8', '10', '12'].includes(spacingValue)) {
        classes.push(`gap-${spacingValue}`)
      } else {
        classes.push(`gap-${Math.floor(spacing / 4)}`)
      }
    }
  }

  if (item) {
    classes.push('flex-shrink-0')
    const breakpoints = { xs: '', sm: 'sm:', md: 'md:', lg: 'lg:', xl: 'xl:' }

    Object.entries(breakpoints).forEach(([bp, prefix]) => {
      const value = { xs, sm, md, lg, xl }[bp]
      if (value !== undefined) {
        if (value === 'auto') {
          classes.push(`${prefix}flex-auto`)
        } else if (value === true) {
          classes.push(`${prefix}flex-1`)
        } else {
          const width = Math.round((value / 12) * 100)
          classes.push(`${prefix}w-${width === 100 ? 'full' : width === 50 ? '1/2' : width === 25 ? '1/4' : width === 75 ? '3/4' : `[${width}%]`}`)
        }
      }
    })
  }

  return (
    <div className={[...classes, className].filter(Boolean).join(' ')} style={style} {...props}>
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'

export default Grid