import React, { useState } from 'react'

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

  const typeColorClasses = {
    success: 'bg-success-600 dark:bg-success-500 text-neutral-0',
    info: 'bg-info-600 dark:bg-info-500 text-neutral-0',
    warning: 'bg-warning-600 dark:bg-warning-500 text-neutral-0',
    error: 'bg-error-600 dark:bg-error-500 text-neutral-0',
  }

  const iconMap = {
    success: '✓',
    info: '📢',
    warning: '⚠',
    error: '✕',
  }

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  const handleAction = () => {
    onAction?.()
  }

  return (
    <div
      className={`wc-banner wc-banner--${type} wc-banner--${position} ${sticky ? 'wc-banner--sticky' : ''} ${typeColorClasses[type]}`}
      style={{ zIndex }}
    >
      <div className="wc-banner-content max-w-screen-lg mx-auto flex gap-4 py-4 px-5 items-center">
        {showIcon && (
          <div className="wc-banner-icon flex-shrink-0 w-6 h-6 flex items-center justify-center font-bold rounded-full bg-white/20">
            {iconMap[type]}
          </div>
        )}
        <div className="wc-banner-text flex-1 min-w-0">
          {title && <div className="wc-banner-title font-semibold text-base mb-1 leading-tight">{title}</div>}
          <div className="wc-banner-message text-sm leading-snug">{children || message}</div>
        </div>
        {(children && children.actions) || showDefaultAction ? (
          <div className="wc-banner-actions flex gap-2">
            {children && children.actions ? (
              children.actions
            ) : (
              <button
                onClick={handleAction}
                className="wc-banner-action-btn border border-white/30 bg-white/20 text-neutral-0 rounded-md text-sm font-medium px-4 py-2 hover:bg-white/30 transition"
              >
                {actionText}
              </button>
            )}
          </div>
        ) : null}
        {closable && (
          <button
            onClick={handleClose}
            className="wc-banner-close w-6 h-6 flex items-center justify-center rounded text-lg hover:bg-white/20 transition"
            aria-label="关闭"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}