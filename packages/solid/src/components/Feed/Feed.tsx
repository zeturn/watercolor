import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import './style.css'

const FeedItem = ({ 
  item, 
  showAvatar = true, 
  variant = 'timeline', 
  color = 'var(--wc-accent)',
  dotSize = 8,
  lineWidth = 1,
  onItemClick 
}) => {
  const hasChildren = Array.isArray(item.children) && item.children.length
  
  const dotSizeValue = typeof dotSize === 'number' ? `${dotSize}px` : dotSize
  const lineWidthValue = typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth
  
  const feedItemStyles = {
    '--feed-color': color,
    '--feed-dot-size': dotSizeValue,
    '--feed-line-width': lineWidthValue
  }

  return (
    <li 
      class={`wc-feed-item ${variant} ${hasChildren ? 'has-children' : ''}`} 
      style={feedItemStyles} 
      tabIndex={onItemClick ? 0 : undefined}
      onClick={(event) => {
        event.stopPropagation()
        if (onItemClick) onItemClick(item)
      }}
      onKeyDown={(event) => {
        if (onItemClick && (event.key === 'Enter' || event.key === ' ')) {
          event.stopPropagation()
          event.preventDefault()
          onItemClick(item)
        }
      }}
    >
      {showAvatar && item.avatar && (
        <div class="wc-feed-avatar">
          <img src={item.avatar} alt={item.author || ''} />
        </div>
      )}
      <div class="wc-feed-content">
        <div class="wc-feed-header">
          <strong class="wc-feed-author">{item.author}</strong>
          <span class="wc-feed-time">{item.time}</span>
        </div>
        <p class="wc-feed-text">{item.text}</p>
        {hasChildren && (
          <ul class="wc-feed-children">
            {item.children.map((child) => (
              <FeedItem 
                key={child.id || child.time} 
                item={child} 
                showAvatar={showAvatar} 
                variant={variant} 
                color={color}
                dotSize={dotSize}
                lineWidth={lineWidth}
                onItemClick={onItemClick} 
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

const Feed = ({ 
  items = [], 
  variant = 'timeline', 
  showAvatar = true, 
  color = 'var(--wc-accent)',
  dotSize = 8,
  lineWidth = 1,
  onItemClick, 
  className = '' 
}) => {
  const lineWidthValue = typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth
  
  const feedListStyles = {
    '--feed-color': color,
    '--feed-line-width': lineWidthValue
  }

  return (
    <ul class={`wc-feed-list ${variant} ${className}`} style={feedListStyles}>
      {items.map((item) => (
        <FeedItem 
          key={item.id || item.time} 
          item={item} 
          variant={variant} 
          showAvatar={showAvatar} 
          color={color}
          dotSize={dotSize}
          lineWidth={lineWidth}
          onItemClick={onItemClick} 
        />
      ))}
    </ul>
  )
}

Feed.displayName = 'Feed'

export default Feed
