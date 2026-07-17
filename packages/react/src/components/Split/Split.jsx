import React from 'react'
import PropTypes from 'prop-types'
import {
  COMPOSITION_ALIGNS,
  COMPOSITION_GAPS,
  SPLIT_COLLAPSE,
  SPLIT_RATIOS,
} from '../../composition.js'
import './style.css'

const Split = ({
  as: Component = 'div',
  ratio = 'equal',
  gap = 'xl',
  align = 'stretch',
  collapse = 'md',
  className = '',
  children,
  ...props
}) => (
  <Component
    className={['wc-split', className].filter(Boolean).join(' ')}
    data-ratio={ratio}
    data-gap={gap}
    data-align={align}
    data-collapse={collapse}
    {...props}
  >
    {children}
  </Component>
)

Split.displayName = 'Split'
Split.propTypes = {
  as: PropTypes.elementType,
  ratio: PropTypes.oneOf(SPLIT_RATIOS),
  gap: PropTypes.oneOf(COMPOSITION_GAPS),
  align: PropTypes.oneOf(COMPOSITION_ALIGNS),
  collapse: PropTypes.oneOf(SPLIT_COLLAPSE),
  className: PropTypes.string,
  children: PropTypes.node,
}
export default Split
