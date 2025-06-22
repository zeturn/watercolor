import React from 'react'
import { getBlockquoteClasses } from './utils.js'
import './style.css'

export default function Blockquote({ cite = '', children, className = '' }) {
  const blockquoteClasses = getBlockquoteClasses(className)
  
  return (
    <blockquote className={blockquoteClasses}>
      <p className="quote-text">{children}</p>
      {cite && <footer className="quote-cite">— {cite}</footer>}
    </blockquote>
  )
}