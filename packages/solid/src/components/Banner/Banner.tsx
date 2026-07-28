import { createSignal } from 'solid-js'

import './style.css'
import { 
  getBannerClasses, 
  getBannerStyles,
  handleBannerClose,
  handleBannerAction
} from './utils.js'
import { useLocale } from '../../LocaleSolid.tsx'

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
  const [visible, setVisible] = createSignal(true)
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
  const hasCustomActions = children && Children.count(children) > 0

  return (
    <div
      class={bannerClasses}
      style={bannerStyles}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
    >
      <div class="wc-banner-content">
        {showIcon && (
          <div class="wc-banner-icon">
            <BannerIcon type={type} />
          </div>
        )}
        <div class="wc-banner-text">
          {title && <div class="wc-banner-title">{title}</div>}
          <div class="wc-banner-message">{message}</div>
        </div>
        {(hasCustomActions || showDefaultAction) && (
          <div class="wc-banner-actions">
            {hasCustomActions ? (
              children
            ) : (
              <button
                onClick={handleAction}
                class="wc-banner-action-btn"
              >
                {actionText}
              </button>
            )}
          </div>
        )}
        {closable && (
          <button
            onClick={handleClose}
            class="wc-banner-close"
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
