import React, { useState } from 'react'
import './style.css'

const UploadIcon = ({ className = '' }) => (
  <span className={className} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 16V4m0 0L7 9m5-5 5 5" /><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></svg>
  </span>
)

const FileInput = ({
  multiple = false,
  variant = 'block',
  accept = '',
  label = '选择文件',
  description = '或拖放到这里',
  disabled = false,
  onChange,
  onInvalid,
  className = '',
  style = {}
}) => {
  const [dragActive, setDragActive] = useState(false)

  const validateFiles = (files) => {
    if (!accept) return true
    const acceptList = accept.split(',').map((rule) => rule.trim().toLowerCase())
    const invalids = [...files].filter((file) => !acceptList.some((rule) => {
      if (rule.startsWith('.')) return file.name.toLowerCase().endsWith(rule)
      if (rule.endsWith('/*')) return file.type.toLowerCase().startsWith(rule.slice(0, -1))
      return file.type.toLowerCase() === rule
    }))
    if (invalids.length) {
      onInvalid?.(invalids)
      return false
    }
    return true
  }

  const handleInputChange = (event) => {
    if (disabled) return
    const files = event.target.files
    if (validateFiles(files)) onChange?.(files)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setDragActive(false)
    if (disabled) return
    const files = event.dataTransfer.files
    if (validateFiles(files)) onChange?.(files)
  }

  return (
    <label
      className={[
        'wc-file-input-wrapper',
        `variant-${variant}`,
        dragActive && 'drag-active',
        disabled && 'wc-file-input-wrapper--disabled',
        className
      ].filter(Boolean).join(' ')}
      style={style}
      onDragEnter={(event) => { event.preventDefault(); if (!disabled) setDragActive(true) }}
      onDragOver={(event) => { event.preventDefault(); if (!disabled) setDragActive(true) }}
      onDragLeave={(event) => { event.preventDefault(); setDragActive(false) }}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="wc-file-input"
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        aria-label={label}
        onChange={handleInputChange}
      />

      {variant === 'block' && (
        <>
          <UploadIcon className="wc-file-input__upload-icon" />
          <span className="wc-file-input-content">
            <strong className="wc-file-input-content__title">{label}</strong>
            {description && <span className="wc-file-input-content__subtitle">{description}</span>}
          </span>
        </>
      )}
      {variant === 'button' && <span className="wc-file-button"><span className="wc-file-input__inline-icon" aria-hidden="true">＋</span>{label}</span>}
      {variant === 'icon' && <UploadIcon className="wc-file-icon" />}
    </label>
  )
}

FileInput.displayName = 'FileInput'
export default FileInput
