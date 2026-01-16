import React from 'react'
import './style.css'

export const CardActions = ({
  children,
  disableSpacing = false,
  disablePadding = false,
  justifyContent = 'flex-start',
  className = '',
  ...props
}) => {
  const justifyMap = {
    'flex-start': 'wc-justify-start',
    'center': 'wc-justify-center',
    'flex-end': 'wc-justify-end',
    'space-between': 'wc-justify-between',
    'space-around': 'wc-justify-around'
  }

  const classes = [
    'wc-card-actions',
    'wc-flex',
    'wc-items-center',
    !disablePadding && 'wc-padding-2',
    !disableSpacing && 'wc-gap-2',
    justifyMap[justifyContent],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

CardActions.displayName = 'CardActions'

export default CardActions
