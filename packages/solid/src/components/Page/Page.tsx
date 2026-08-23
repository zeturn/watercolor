import { Dynamic } from 'solid-js/web'
import PropTypes from 'prop-types'
import { PAGE_GUTTERS, PAGE_SIZES } from '../../composition.js'
import './style.css'

const Page = ({
  as: Component = 'div',
  size = 'lg',
  gutter = 'md',
  className = '',
  children,
  ...props
}) => (
  <Dynamic
    component={Component}
    class={['wc-page', className].filter(Boolean).join(' ')}
    data-size={size}
    data-gutter={gutter}
    {...props}
  >
    {children}
  </Dynamic>
)

Page.displayName = 'Page'
Page.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.oneOf(PAGE_SIZES),
  gutter: PropTypes.oneOf(PAGE_GUTTERS),
  className: PropTypes.string,
  children: PropTypes.node,
}
export default Page
