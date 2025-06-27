import React, { useContext } from 'react'
import './style.css'
import { ListContext } from './List'
import { getListItemIconClasses } from './utils.js'

const ListItemIcon = ({ children, className = '', ...rest }) => {
  const { dense } = useContext(ListContext)

  const iconClasses = [
    'wc-list-item-icon inline-flex items-center justify-center flex-shrink-0',
    dense ? 'w-4 h-4 mr-4 text-base' : 'w-5 h-5 mr-4 text-lg',
    'text-neutral-600 dark:text-neutral-400',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={iconClasses} {...rest}>
      {children}
    </div>
  )
}

export default ListItemIcon