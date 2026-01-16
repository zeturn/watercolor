import React from 'react'
import './style.css'

const FeedItem = ({ 
  item, 
  showAvatar = true, 
  variant = 'timeline', 
  color = 'var(--wc-primary-500)',
  dotSize = 12,
  lineWidth = 2,
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
      onClick={() => onItemClick && onItemClick(item)}
    >
      {showAvatar && item.avatar && (
        <div className="wc-feed-avatar">
          <img src={item.avatar} alt="avatar" />
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
  color = 'var(--wc-primary-500)',
  dotSize = 12,
  lineWidth = 2,
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