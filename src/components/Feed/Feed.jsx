import React from 'react'

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
    '--feed-line-width': lineWidthValue,
    display: 'flex', 
    gap: 12, 
    position: 'relative'
  }

  return (
    <li 
      className={`wc-feed-item ${variant} ${hasChildren ? 'has-children' : ''}`} 
      style={feedItemStyles} 
      onClick={() => onItemClick && onItemClick(item)}
    >
      {showAvatar && item.avatar && (
        <div className="wc-feed-avatar" style={{ flexShrink: 0 }}>
          <img src={item.avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      )}
      <div className="wc-feed-content" style={{ flex: 1 }}>
        <div className="wc-feed-header" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <strong className="wc-feed-author" style={{ color: 'var(--color-text,#111827)' }}>{item.author}</strong>
          <span className="wc-feed-time" style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary,#6b7280)' }}>{item.time}</span>
        </div>
        <p className="wc-feed-text" style={{ margin: '4px 0 0', fontSize: '0.875rem', color: 'var(--color-text,#374151)' }}>{item.text}</p>
        {hasChildren && (
          <ul className="wc-feed-children" style={{ listStyle: 'none', margin: '12px 0 0 52px', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
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
    '--feed-line-width': lineWidthValue,
    listStyle: 'none', 
    padding: 0, 
    margin: 0, 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 16
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