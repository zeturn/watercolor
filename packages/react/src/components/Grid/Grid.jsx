import './style.css'
import { formatGridProps, getGridClasses } from './utils.js'

const Grid = ({
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing = 0,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  className = '',
  style = {},
  children,
  ...props
}) => {
  const gridProps = formatGridProps({
    container,
    item,
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
    direction,
    justifyContent,
    alignItems,
    className
  })
  const classes = getGridClasses(gridProps)

  return (
    <div className={classes.filter(Boolean).join(' ')} style={style} {...props}>
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'

export default Grid
