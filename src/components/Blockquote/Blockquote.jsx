import React from 'react'
import { getBlockquoteClasses } from './utils.js'
import './style.css'

export default function Blockquote({ 
  cite = '', 
  children, 
  className = '',
  variant = 'default',
  noBorder = true,
  interactive = true,
  size = 'medium',
  color = 'default'
}) {
  const blockquoteClasses = getBlockquoteClasses(className, variant, noBorder, interactive, size, color)
  
  return (
    <blockquote className={blockquoteClasses}>
      <p className="quote-text">{children}</p>
      {cite && <footer className="quote-cite">— {cite}</footer>}
    </blockquote>
  )
}