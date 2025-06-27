import React, { useContext } from 'react'
import './style.css'
import { ListContext } from './List'
import { getListItemTextClasses } from './utils.js'

const ListItemText = ({
  primary = '',
  secondary = '',
  inset = false,
  disableTypography = false,
  children,
  className = '',
  ...rest
}) => {
  const { dense } = useContext(ListContext)

  const primaryClasses = [
    'text-neutral-900 dark:text-neutral-100',
    !disableTypography && (dense ? 'text-sm font-medium' : 'text-base font-medium'),
    inset && 'ml-14',
    className
  ].filter(Boolean).join(' ')

  const secondaryClasses = [
    'text-neutral-600 dark:text-neutral-400 mt-1',
    !disableTypography && (dense ? 'text-xs' : 'text-sm'),
    inset && 'ml-14'
  ].filter(Boolean).join(' ')

  return (
    <div className="flex-1 min-w-0" {...rest}>
      <div className={primaryClasses}>
        {children || primary}
      </div>
      {(secondary || null) && (
        <div className={secondaryClasses}>{secondary}</div>
      )}
    </div>
  )
}

export default ListItemText