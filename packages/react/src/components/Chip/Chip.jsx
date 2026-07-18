import React from 'react'
import { useLocale } from '../../LocaleReact'
import './style.css'
import { getChipClasses, handleChipClick, handleChipDelete, getDefaultDeleteIconPath } from './utils.jsx'

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
  className = '',
  ...rest
}) {
  const { messages } = useLocale()
  const chipClasses = getChipClasses({
    size,
    variant,
    color,
    clickable,
    disabled,
    className
  })

  const handleClick = (e) => {
    handleChipClick(e, clickable, disabled, onClick)
  }

  const handleDelete = (e) => {
    handleChipDelete(e, disabled, onDelete)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick(event)
    }
  }

  return (
    <div
      className={chipClasses}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable && !disabled ? 0 : undefined}
      aria-disabled={clickable ? disabled : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {(children && children.avatar) || avatar ? (
        <div className="wc-chip-avatar">
          {children && children.avatar ? (
            children.avatar
          ) : (
            <img src={avatar} alt="" className="wc-chip-avatar-image" />
          )}
        </div>
      ) : null}
      <span className="wc-chip-label">{children?.label || label}</span>
      {deletable && (
        <button
          type="button"
          onClick={handleDelete}
          className="wc-chip-delete"
          aria-label={messages.removeItem(typeof label === 'string' ? label : undefined)}
        >
          {deleteIcon || (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="wc-chip-delete-icon" aria-hidden="true">
              <path fillRule="evenodd" d={getDefaultDeleteIconPath()} clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}
