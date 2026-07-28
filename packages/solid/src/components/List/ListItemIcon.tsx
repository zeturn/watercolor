
import { getListItemIconClasses } from './utils.js'
import './style.css'

const ListItemIcon = ({ children, position = 'start', className = '', ...rest }) => {
  const classes = getListItemIconClasses({ position, className }).join(' ')
  return (
    <span class={classes} {...rest}>
      {children}
    </span>
  )
}

export default ListItemIcon 