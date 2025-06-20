import React from 'react'

export default function Chip({
  label = '',
  avatar = '',
  deletable = false,
  disabled = false,
  clickable = false,
  variant = 'filled',
  size = 'md',
  color = 'default',
  deleteIcon = null,
  onClick,
  onDelete,
  children,
}) {
  const baseClasses = 'wc-chip inline-flex items-center gap-1 font-medium transition-all duration-200'
  const sizeClass = {
    sm: 'px-2 py-1 text-xs min-h-[24px]',
    md: 'px-3 py-1.5 text-sm min-h-[32px]',
    lg: 'px-4 py-2 text-base min-h-[40px]',
  }[size]

  const colorMap = (v) => {
    const filled = {
      default: 'bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
      primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
      secondary: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
      success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200',
      warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200',
      error: 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200',
    }
    const outlined = {
      default: 'bg-transparent border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
      primary: 'bg-transparent border border-primary-300 text-primary-700 dark:border-primary-600 dark:text-primary-300',
      secondary: 'bg-transparent border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
      success: 'bg-transparent border border-success-300 text-success-700 dark:border-success-600 dark:text-success-300',
      warning: 'bg-transparent border border-warning-300 text-warning-700 dark:border-warning-600 dark:text-warning-300',
      error: 'bg-transparent border border-error-300 text-error-700 dark:border-error-600 dark:text-error-300',
    }
    return variant === 'filled' ? filled[v] : outlined[v]
  }

  const interactive = clickable && !disabled ? 'cursor-pointer hover:opacity-80' : ''
  const disabledCls = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const handleClick = (e) => {
    if (clickable && !disabled) onClick?.(e)
  }
  const handleDelete = (e) => {
    e.stopPropagation()
    if (!disabled) onDelete?.(e)
  }

  return (
    <div
      className={`${baseClasses} ${sizeClass} ${colorMap(color)} ${interactive} ${disabledCls}`}
      onClick={handleClick}
    >
      {(children && children.avatar) || avatar ? (
        <div className="wc-chip-avatar flex-shrink-0 overflow-hidden rounded-full mr-1">
          {children && children.avatar ? (
            children.avatar
          ) : (
            <img src={avatar} alt="" className="w-full h-full object-cover rounded-full" />
          )}
        </div>
      ) : null}
      <span className="wc-chip-label truncate">{children?.label || label}</span>
      {(deletable || onDelete) && (
        <button
          type="button"
          onClick={handleDelete}
          className="wc-chip-delete flex-shrink-0 rounded-full transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10 ml-1"
          aria-label="删除"
        >
          {deleteIcon || (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}