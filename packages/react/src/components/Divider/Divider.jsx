import React from 'react'
import './style.css'
import { getDividerClasses } from './utils.js'

const Divider = ({
  variant = 'solid',
  orientation = 'horizontal',
  className = '',
  children = '',
  flexItem = false,
  ...props
}) => {
  const dividerClasses = getDividerClasses({
    variant,
    orientation,
    flexItem,
    className
  })

  // 如果有 children，使用 flex 布局来居中文字
  if (children) {
    return (
      <div className={`${dividerClasses} wc-divider--with-text`} {...props}>
        <span className="wc-divider__text">{children}</span>
      </div>
    )
  }

  return <hr className={dividerClasses} {...props} />
}

Divider.displayName = 'Divider'

export default Divider
