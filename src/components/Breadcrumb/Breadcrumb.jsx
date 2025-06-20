import React from 'react'

export default function Breadcrumb({ items = [], separator = '/', variant = 'default', showHome = false, homeIcon = '🏠', maxItems = 0, onItemClick }) {
  // 处理 items 与截断逻辑
  const processed = React.useMemo(() => {
    let list = [...items]
    if (showHome && list.length && list[0].label !== '首页') {
      list.unshift({ label: '首页', icon: homeIcon, href: '/' })
    }
    if (maxItems > 0 && list.length > maxItems) {
      const ellipsisIndex = Math.max(1, maxItems - 2)
      list = [...list.slice(0, ellipsisIndex), { label: '...', disabled: true, isEllipsis: true }, ...list.slice(-1)]
    }
    return list
  }, [items, showHome, homeIcon, maxItems])

  const handleClick = (e, item, idx) => {
    if (item.disabled || item.isEllipsis || idx === processed.length - 1) {
      e.preventDefault()
      return
    }
    onItemClick?.(e, item, idx)
  }

  return (
    <nav className={`wc-breadcrumb wc-breadcrumb--${variant}`} aria-label="面包屑导航" role="navigation">
      <ol className="wc-breadcrumb-list flex flex-wrap items-center gap-1">
        {processed.map((item, idx) => (
          <li key={idx} className={`wc-breadcrumb-item flex items-center gap-1 ${idx === processed.length - 1 ? 'wc-breadcrumb-item--current' : ''}`}>          
            {idx !== processed.length - 1 && !item.disabled && !item.isEllipsis ? (
              item.href ? (
                <a
                  href={item.href}
                  className={`wc-breadcrumb-link ${item.disabled ? 'wc-breadcrumb-link--disabled' : ''}`}
                  onClick={(e) => handleClick(e, item, idx)}
                >
                  {item.icon && <span className="wc-breadcrumb-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={(e) => handleClick(e, item, idx)}
                  className={`wc-breadcrumb-link ${item.disabled ? 'wc-breadcrumb-link--disabled' : ''}`}
                >
                  {item.icon && <span className="wc-breadcrumb-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />}
                  {item.label}
                </button>
              )
            ) : (
              <span className="wc-breadcrumb-link wc-breadcrumb-link--disabled" aria-current="page">
                {item.icon && <span className="wc-breadcrumb-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />}
                {item.label}
              </span>
            )}
            {idx < processed.length - 1 && (
              <span className="wc-breadcrumb-separator select-none mx-1">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}