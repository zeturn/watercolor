
import './style.css'
import { getBlockquoteClasses } from './utils.js'
import Card from '../Card/Card.tsx'

export default function Blockquote({ 
  cite = '', 
  children, 
  className = '',
  variant = 'default',
  noBorder = true,
  interactive = true,
  size = 'medium',
  color = 'default',
  ...rest
}) {
  // 如果是 card 形态，直接复用 Card 组件
  if (variant === 'card') {
    return (
      <Card
        variant="filled"
        color={color}
        size={size}
        interactive={interactive}
        noBorder={noBorder}
        class={className}
        {...rest}
      >
        <p class="quote-text">{children}</p>
        {cite && <footer class="quote-cite">— {cite}</footer>}
      </Card>
    )
  }

  const blockquoteClasses = getBlockquoteClasses(className, variant, noBorder, interactive, size, color)
  
  return (
    <blockquote class={blockquoteClasses} {...rest}>
      <p class="quote-text">{children}</p>
      {cite && <footer class="quote-cite">— {cite}</footer>}
    </blockquote>
  )
}