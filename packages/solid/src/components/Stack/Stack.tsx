import { Dynamic } from 'solid-js/web'
import PropTypes from 'prop-types'
import { COMPOSITION_ALIGNS, COMPOSITION_GAPS } from '../../composition.js'
import './style.css'

const Stack = ({
  as: Component = 'div',
  gap = 'md',
  align = 'stretch',
  className = '',
  children,
  ...props
}) => (
  <Dynamic
    component={Component}
    class={['wc-stack', className].filter(Boolean).join(' ')}
    data-gap={gap}
    data-align={align}
    {...props}
  >
    {children}
  </Dynamic>
)

Stack.displayName = 'Stack'
Stack.propTypes = {
  as: PropTypes.elementType,
  gap: PropTypes.oneOf(COMPOSITION_GAPS),
  align: PropTypes.oneOf(COMPOSITION_ALIGNS),
  className: PropTypes.string,
  children: PropTypes.node,
}
export default Stack
