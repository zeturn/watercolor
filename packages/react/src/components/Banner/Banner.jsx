import React, { useState } from 'react'
import './style.css'
import { 
  getBannerClasses, 
  getBannerStyles,
  handleBannerClose,
  handleBannerAction
} from './utils.js'
import { useLocale } from '../../LocaleReact.tsx'

const BannerIcon = ({ type }) => {
  const detail = type === 'success'
    ? <path d="m6.8 10.1 2.1 2.1 4.4-4.6" />
    : type === 'info'
      ? <><path d="M10 9v4" /><path d="M10 6.5h.01" /></>
      : type === 'warning'
        ? <><path d="M10 6.5v4.2" /><path d="M10 13.5h.01" /></>
        : <><path d="m7.5 7.5 5 5" /><path d="m12.5 7.5-5 5" /></>

  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" />
      {detail}
    </svg>
  )
}

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
  const { messages } = useLocale()
  if (!visible) return null

  const bannerClasses = getBannerClasses(type, position, sticky)
  const bannerStyles = getBannerStyles(zIndex)
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
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
    >
      <div className="wc-banner-content">
        {showIcon && (
          <div className="wc-banner-icon">
            <BannerIcon type={type} />
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
            aria-label={messages.close}
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 8 8M14 6l-8 8" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
