import { getComponent, buildTypographyClasses, lineHeightMap } from './utils'
import './style.css'

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
  const Component = getComponent(variant, component)
  const classes = buildTypographyClasses(variant, color, align, gutterBottom, noWrap, className)
  
  const mergedStyle = { 
    lineHeight: lineHeightMap[variant], 
    ...style 
  }

  return (
    <Component class={classes} style={mergedStyle} {...rest}>
      {children}
    </Component>
  )
}

Typography.displayName = 'Typography'
export default Typography
