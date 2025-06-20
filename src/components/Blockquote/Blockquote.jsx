import React from 'react'

export default function Blockquote({ cite = '', children }) {
  return (
    <blockquote className="wc-blockquote bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 p-6 rounded-lg border-l-4 border-primary-500">
      <p className="quote-text m-0 text-base leading-relaxed">{children}</p>
      {cite && <footer className="quote-cite mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-right">— {cite}</footer>}
    </blockquote>
  )
}