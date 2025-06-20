import React from 'react'

/**
 * Paradox – 显示悖论文本
 * Props
 *  content  string  悖论文本
 *  tooltip  string  悬停提示
 */
export default function Paradox({ content = '这句话是假。', tooltip = '若此句为真，则为假；若此句为假，则为真。', className = '' }) {
  return (
    <blockquote className={`wc-paradox ${className}`.trim()} title={tooltip}>
      {content}
    </blockquote>
  )
}