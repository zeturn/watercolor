import React, { useState } from 'react'
import './style.css'
import { 
  getAvatarClasses, 
  getAvatarStyles, 
  generateAvatarText,
  handleImageError,
  handleImageLoad
} from './utils.js'

const Avatar = ({
  src = '',
  alt = '',
  size = 'md',
  variant = 'circular',
  color = 'default',
  children = '',
  className = '',
  ...props
}) => {
  const [imgError, setImgError] = useState(false)

  const avatarClasses = getAvatarClasses({ 
    size, 
    variant, 
    color, 
    src, 
    imgError 
  }).concat(className).filter(Boolean).join(' ')

  const avatarStyles = getAvatarStyles(size)
  const avatarText = generateAvatarText(children)

  const onImageError = () => handleImageError(setImgError)
  const onImageLoad = () => handleImageLoad(setImgError)

  return (
    <div className={avatarClasses} style={avatarStyles} {...props}>
      {src && !imgError ? (
        <img 
          src={src} 
          alt={alt} 
          role="img"
          onError={onImageError} 
          onLoad={onImageLoad} 
        />
      ) : children ? (
        <span className="wc-avatar-text">
          {avatarText}
        </span>
      ) : null}
    </div>
  )
}

Avatar.displayName = 'Avatar'

export default Avatar 