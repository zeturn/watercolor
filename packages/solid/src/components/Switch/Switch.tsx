import { useId } from '../../useId'

import { useLocale } from '../../LocaleSolid'
import './style.css' // 引入组件样式

const Switch = ({
  checked = false,
  onChange,
  label = '',
  description = '',
  disabled = false,
  required = false,
  color = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const { messages } = useLocale()
  const labelId = useId()
  const inputId = `${labelId}-input`

  const validColors = ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeColor = validColors.includes(color) ? color : 'primary'
  const validSizes = ['sm', 'md', 'lg']
  const safeSize = validSizes.includes(size) ? size : 'md'

  const switchClasses = [
    'wc-switch',
    `wc-switch--${safeColor}`,
    safeSize !== 'md' && `wc-switch--${safeSize}`,
    disabled && 'wc-switch--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleInputChange = (e) => {
    if (disabled || !onChange) return
    onChange(e.target.checked)
  }

  return (
    <div class="wc-switch-wrapper">
      {/* Label */}
      {label && (
        <label id={labelId} htmlFor={inputId} class="wc-switch__label">
          {label}
          {required && <span class="wc-switch__required">*</span>}
        </label>
      )}

      {/* Switch & Description */}
      <div class="wc-switch__container">
        <label class={switchClasses} aria-disabled={disabled}>
          <input
            type="checkbox"
            id={inputId}
            class="wc-switch__input"
            checked={checked}
            disabled={disabled}
            aria-labelledby={label ? labelId : undefined}
            aria-label={label ? undefined : messages.switchControl}
            aria-checked={checked}
            required={required}
            role="switch"
            onChange={handleInputChange}
            {...props}
          />
          <span class="wc-switch__track">
            <span class="wc-switch__thumb" />
          </span>
        </label>

        {description && (
          <span class="wc-switch__description">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

Switch.displayName = 'Switch'

export default Switch
