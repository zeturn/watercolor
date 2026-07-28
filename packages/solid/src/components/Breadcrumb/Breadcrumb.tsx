import { createMemo } from 'solid-js'

import { useLocale } from '../../LocaleSolid'
import './style.css'
import { 
  processBreadcrumbItems,
  getBreadcrumbClasses,
  getBreadcrumbItemClasses,
  getBreadcrumbLinkClasses,
  handleBreadcrumbClick,
  shouldRenderAsLink
} from './utils.js'

export default function Breadcrumb({ 
  items = [], 
  separator = '/', 
  variant = 'default', 
  showHome = false, 
  homeIcon = '🏠', 
  maxItems = 0, 
  onItemClick 
}) {
  const { messages } = useLocale()
  // 处理 items 与截断逻辑
  const processed = createMemo(() => 
    processBreadcrumbItems(items, showHome, homeIcon, maxItems),
    [items, showHome, homeIcon, maxItems]
  )

  const handleClick = (e, item, idx) => {
    handleBreadcrumbClick(e, item, idx, processed.length, onItemClick)
  }

  const breadcrumbClasses = getBreadcrumbClasses(variant)

  return (
    <nav class={breadcrumbClasses} aria-label={messages.breadcrumb} role="navigation">
      <ol class="wc-breadcrumb-list">
        {processed.map((item, idx) => (
          <li key={idx} class={getBreadcrumbItemClasses(idx, processed.length)}>          
            {shouldRenderAsLink(idx, processed.length, item.disabled, item.isEllipsis) ? (
              item.href ? (
                <a
                  href={item.href}
                  class={getBreadcrumbLinkClasses(item.disabled)}
                  onClick={(e) => handleClick(e, item, idx)}
                >
                  {item.icon && <span class="wc-breadcrumb-icon" innerHTML={item.icon} />}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={(e) => handleClick(e, item, idx)}
                  class={getBreadcrumbLinkClasses(item.disabled)}
                >
                  {item.icon && <span class="wc-breadcrumb-icon" innerHTML={item.icon} />}
                  {item.label}
                </button>
              )
            ) : (
              <span class={getBreadcrumbLinkClasses(true)} aria-current="page">
                {item.icon && <span class="wc-breadcrumb-icon" innerHTML={item.icon} />}
                {item.label}
              </span>
            )}
            {idx < processed.length - 1 && (
              <span class="wc-breadcrumb-separator">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
