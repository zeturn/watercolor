
import PropTypes from 'prop-types'
import {
  COMPOSITION_ALIGNS,
  COMPOSITION_GAPS,
  INLINE_JUSTIFY,
} from '../../composition.js'
import './style.css'

const Inline = ({
  as: Component = 'div',
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = true,
  className = '',
  children,
  ...props
}) => (
  <Component
    class={['wc-inline', className].filter(Boolean).join(' ')}
    data-gap={gap}
    data-align={align}
    data-justify={justify}
    data-wrap={String(wrap)}
    {...props}
  >
    {children}
  </Component>
)

Inline.displayName = 'Inline'
Inline.propTypes = {
  as: PropTypes.elementType,
  gap: PropTypes.oneOf(COMPOSITION_GAPS),
  align: PropTypes.oneOf(COMPOSITION_ALIGNS),
  justify: PropTypes.oneOf(INLINE_JUSTIFY),
  wrap: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}
export default Inline
