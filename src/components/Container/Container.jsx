import React from 'react'
import { getTailwindContainerClasses } from './utils.js'
import './style.css'

export function Container({
  maxWidth = 'lg',
  fluid = false,
  fixed = false,
  className = '',
  children,
}) {
  const containerClasses = getTailwindContainerClasses({
    maxWidth,
    fluid,
    fixed,
    className
  }).join(' ')

  return <div className={containerClasses}>{children}</div>
}

export default Container