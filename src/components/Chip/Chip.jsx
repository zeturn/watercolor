import React from 'react'
import './style.css'
import { getTailwindChipClasses, handleChipClick, handleChipDelete, getDefaultDeleteIcon } from './utils.jsx'

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
  const chipClasses = getTailwindChipClasses({
    size,
    variant,
    color,
    clickable,
    disabled
  })

  const handleClick = (e) => {
    handleChipClick(e, clickable, disabled, onClick)
  }

  const handleDelete = (e) => {
    handleChipDelete(e, disabled, onDelete)
  }

  return (
    <div
      className={chipClasses}
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
          {deleteIcon || getDefaultDeleteIcon()}
        </button>
      )}
    </div>
  )
}