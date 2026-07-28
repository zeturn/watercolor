
import { getListItemTextClasses } from './utils.js'
import './style.css'

const ListItemText = ({
  primary = '',
  secondary = '',
  inset = false,
  className = '',
  ...rest
}) => {
  const classes = getListItemTextClasses({ inset, className }).join(' ')
  return (
    <div class={classes} {...rest}>
      {primary && <p class="list-item-text-primary">{primary}</p>}
      {secondary && <p class="list-item-text-secondary">{secondary}</p>}
    </div>
  )
}

export default ListItemText 