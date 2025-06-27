import React, { useState } from 'react'
import './style.css'
import { 
  getBannerClasses, 
  getBannerIcon, 
  getBannerStyles,
  handleBannerClose,
  handleBannerAction
} from './utils.js'

/**
 * Banner 组件 (React 版)
 * @param {Object} props
 */
export default function Banner({
  type = 'info',
  position = 'top',
  title = '',
  message = '',
  closable = true,
  showIcon = true,
  showDefaultAction = false,
  actionText = '立即行动',
  sticky = true,
  zIndex = 1000,
  onClose,
  onAction,
  children,
}) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const bannerClasses = getBannerClasses(type, position, sticky)
  const bannerStyles = getBannerStyles(zIndex)
  const iconContent = getBannerIcon(type)

  const handleClose = () => {
    handleBannerClose(setVisible, onClose)
  }

  const handleAction = () => {
    handleBannerAction(onAction)
  }

  // 检查是否有自定义的操作按钮内容
  const hasCustomActions = children && React.Children.count(children) > 0

  return (
    <div
      className={bannerClasses}
      style={bannerStyles}
    >
      <div className="wc-banner-content">
        {showIcon && (
          <div className="wc-banner-icon">
            {iconContent}
          </div>
        )}
        <div className="wc-banner-text">
          {title && <div className="wc-banner-title">{title}</div>}
          <div className="wc-banner-message">{message}</div>
        </div>
        {(hasCustomActions || showDefaultAction) && (
          <div className="wc-banner-actions">
            {hasCustomActions ? (
              children
            ) : (
              <button
                onClick={handleAction}
                className="wc-banner-action-btn"
              >
                {actionText}
              </button>
            )}
          </div>
        )}
        {closable && (
          <button
            onClick={handleClose}
            className="wc-banner-close"
            aria-label="关闭"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}