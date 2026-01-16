import React, { useRef } from 'react'
import './style.css'
import { getFileInputClasses } from './utils.js'

const FileInput = ({
  multiple = false,
  variant = 'block', // block | button | icon
  accept = '',
  label = '选择文件',
  onChange,
  onInvalid,
  className = '',
  style = {},
}) => {
  const inputRef = useRef(null)

  const validateFiles = (files) => {
    if (!accept) return true
    const acceptList = accept.split(',').map((a) => a.trim())
    const invalids = [...files].filter((file) => {
      return !acceptList.some((rule) => {
        if (rule.startsWith('.')) return file.name.endsWith(rule)
        return file.type === rule
      })
    })
    if (invalids.length) {
      onInvalid && onInvalid(invalids)
      return false
    }
    return true
  }

  const handleInputChange = (e) => {
    const files = e.target.files
    if (validateFiles(files)) onChange && onChange(files)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (validateFiles(files)) onChange && onChange(files)
  }

  const triggerSelect = () => {
    inputRef.current?.click()
  }

  const baseWrapperStyle = {
    cursor: 'pointer',
  }

  const wrapperStyle = baseWrapperStyle

  const renderContent = () => {
    switch (variant) {
      case 'button':
        return <span className="wc-file-button">{label}</span>
      case 'icon':
        return <span className="wc-file-icon">⬆️</span>
      default:
        return <strong className="wc-file-input-content__title">{label}</strong>
    }
  }

  return (
    <label
      className={`wc-file-input-wrapper variant-${variant} ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={variant !== 'block' ? triggerSelect : undefined}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
      {variant === 'block' ? (
        <div className="wc-file-input-content">{renderContent()}</div>
      ) : (
        renderContent()
      )}
    </label>
  )
}

FileInput.displayName = 'FileInput'

export default FileInput 