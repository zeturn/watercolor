import React from 'react'
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
      className={`wc-feed-item ${variant} ${hasChildren ? 'has-children' : ''}`} 
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
        <div className="wc-feed-avatar">
          <img src={item.avatar} alt={item.author || ''} />
        </div>
      )}
      <div className="wc-feed-content">
        <div className="wc-feed-header">
          <strong className="wc-feed-author">{item.author}</strong>
          <span className="wc-feed-time">{item.time}</span>
        </div>
        <p className="wc-feed-text">{item.text}</p>
        {hasChildren && (
          <ul className="wc-feed-children">
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
    <ul className={`wc-feed-list ${variant} ${className}`} style={feedListStyles}>
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
