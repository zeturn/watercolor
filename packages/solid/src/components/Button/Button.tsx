
import './style.css'
import {
  validVariants,
  getButtonClasses,
  handleButtonClick as utilHandleButtonClick
} from './utils.js'

const Button = ({
  children,
  variant = 'primary',
  buttonStyle = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  href = null,
  target = '_self',
  startIcon = null,
  endIcon = null,
  rounded = true,
  uppercase = false,
  ripple = true,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  className = '',
  style = {},
  ...props
}) => {
  // 构建CSS类名
  const buttonClasses = getButtonClasses({
    variant,
    buttonStyle,
    size,
    disabled,
    loading,
    fullWidth,
    uppercase,
    rounded
  }).concat(className).filter(Boolean).join(' ')

  // 构建内联样式
  const buttonStyles = {
    ...style
  }

  const handleClick = (event) => {
    utilHandleButtonClick({
      event,
      disabled,
      loading,
      href,
      target,
      onClick
    })
  }

  const handleMouseOver = (event) => {
    onMouseOver?.(event)
  }

  const handleMouseOut = (event) => {
    onMouseOut?.(event)
  }

  const handleFocus = (event) => {
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    onBlur?.(event)
  }

  const LoadingIcon = () => (
    <span class="wc-btn__loading">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
  )

  return (
    <button
      class={buttonClasses}
      disabled={disabled || loading}
      type={type}
      style={buttonStyles}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {loading && <LoadingIcon />}
      {startIcon && !loading && (
        <span class="wc-btn__start-icon">{startIcon}</span>
      )}
      <span class={`wc-btn__content ${loading ? 'opacity-0' : ''}`}>
        {children}
      </span>
      {endIcon && !loading && (
        <span class="wc-btn__end-icon">{endIcon}</span>
      )}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
