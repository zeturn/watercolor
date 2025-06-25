import React, { useRef } from 'react'

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

  const handleFiles = (files) => {
    if (validateFiles(files)) {
      onChange && onChange(files)
    }
  }

  const handleInputChange = (e) => {
    handleFiles(e.target.files)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }

  const triggerSelect = () => {
    inputRef.current?.click()
  }

  const baseWrapperStyle = {
    cursor: 'pointer',
    ...style,
  }

  const variantStyles = {
    block: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      border: '2px dashed var(--color-border,#d1d5db)',
      borderRadius: 8,
      background: 'var(--wc-neutral-50,#f9fafb)',
      textAlign: 'center',
    },
    button: {
      display: 'inline-flex',
      padding: '8px 16px',
      borderRadius: 6,
      background: 'var(--color-primary,#3b82f6)',
      color: '#fff',
      border: 'none',
      fontWeight: 500,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      display: 'inline-flex',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--color-border,#d1d5db)',
      borderRadius: '50%',
      background: 'var(--wc-neutral-50,#f9fafb)',
      fontSize: 18,
    },
  }

  const wrapperStyle = { ...baseWrapperStyle, ...variantStyles[variant] }

  const renderContent = () => {
    switch (variant) {
      case 'button':
        return label
      case 'icon':
        return '⬆️'
      default:
        return <strong>{label}</strong>
    }
  }

  return (
    <label
      className={`wc-file-input-wrapper variant-${variant} ${className}`}
      style={wrapperStyle}
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