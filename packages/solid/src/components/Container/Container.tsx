
import './style.css'
import { getTailwindContainerClasses } from './utils.js'

export function Container({
  maxWidth = 'lg',
  fluid = false,
  fixed = false,
  className = '',
  children,
}) {
  const containerClasses = getTailwindContainerClasses({
    maxWidth,
    fluid,
    fixed,
    className
  }).join(' ')

  return <div class={containerClasses}>{children}</div>
}

export default Container