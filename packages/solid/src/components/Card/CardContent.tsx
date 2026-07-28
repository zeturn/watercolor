
import './style.css'

export const CardContent = ({
  children,
  disablePadding = false,
  padding = 'normal',
  className = '',
  ...props
}) => {
  const paddingMap = {
    'none': '',
    'dense': 'wc-padding-dense',
    'normal': 'wc-padding-normal',
    'comfortable': 'wc-padding-comfortable'
  }

  const classes = [
    'wc-card-content',
    !disablePadding && paddingMap[padding],
    className
  ].filter(Boolean).join(' ')

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}

CardContent.displayName = 'CardContent'

export default CardContent
