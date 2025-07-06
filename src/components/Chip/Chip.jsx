import React from 'react'
import './style.css'
import { getChipClasses, handleChipClick, handleChipDelete, getDefaultDeleteIcon } from './utils.jsx'

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
  const chipClasses = getChipClasses({
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
        <div className="wc-chip-avatar">
          {children && children.avatar ? (
            children.avatar
          ) : (
            <img src={avatar} alt="" className="w-full h-full object-cover rounded-full" />
          )}
        </div>
      ) : null}
      <span className="wc-chip-label">{children?.label || label}</span>
      {deletable && (
        <button
          type="button"
          onClick={handleDelete}
          className="wc-chip-delete"
          aria-label="删除"
        >
          {deleteIcon || getDefaultDeleteIcon()}
        </button>
      )}
    </div>
  )
}