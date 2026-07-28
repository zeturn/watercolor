import { useContext } from 'solid-js'

import { ListContext } from './List.tsx'
import { getListItemClasses } from './utils.js'
import './style.css'

/**
 * React 版本的 ListItem
 */
const ListItem = ({
  children,
  button = false,
  disabled = false,
  divider = false,
  selected = false,
  disableGutters = false,
  multiselect = false,
  component: ComponentProp,
  className = '',
  ...rest
}) => {
  const { dense } = useContext(ListContext) || { dense: false }

  const itemClasses = getListItemClasses({
    button,
    disabled,
    divider,
    dense,
    selected,
    disableGutters,
    multiselect,
    className
  }).join(' ')

  const Component = ComponentProp || (button ? 'button' : 'div')

  return (
    <Component
      role="listitem"
      class={itemClasses}
      disabled={button && disabled}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default ListItem 