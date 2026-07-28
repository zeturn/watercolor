// Button 组件工具函数（与 React/Vue/Svelte 保持同一契约）

export const validVariants = [
  'primary', 'secondary', 'filled', 'outlined', 'text',
  'success', 'warning', 'error', 'info', 'purple', 'orange', 'cyan', 'pink',
]

export const validStyles = ['default', 'outlined', 'filled']
export const validSizes = ['xs', 'sm', 'md', 'lg', 'xl']
export const validTypes = ['button', 'submit', 'reset']
export const validRounded = ['none', 'sm', 'md', 'lg', 'full']

export function getSafeVariant(variant: string): string {
  return validVariants.includes(variant) ? variant : 'primary'
}

export interface ButtonClassOptions {
  variant: string
  buttonStyle?: string
  size: string
  disabled: boolean
  loading: boolean
  fullWidth: boolean
  uppercase: boolean
  rounded: boolean | string
}

export function getButtonClasses(props: ButtonClassOptions): string[] {
  const { variant, size, disabled, loading, fullWidth, uppercase, rounded, buttonStyle = 'default' } = props
  const classes = ['wc-btn']
  classes.push(`wc-btn--style-${buttonStyle}`)
  classes.push(`wc-btn--${getSafeVariant(variant)}`)
  classes.push(`wc-btn--${size}`)
  if (disabled || loading) classes.push('wc-btn--disabled')
  if (loading) classes.push('wc-btn--loading')
  if (fullWidth) classes.push('wc-btn--full-width')
  if (uppercase) classes.push('wc-btn--uppercase')
  if (rounded === false || rounded === 'none') classes.push('wc-btn--rounded-none')
  else if (typeof rounded === 'string') classes.push(`wc-btn--rounded-${rounded}`)
  else classes.push('wc-btn--rounded')
  return classes
}

export function handleButtonClick({
  event,
  disabled,
  loading,
  href,
  target,
  onClick,
}: {
  event: MouseEvent
  disabled: boolean
  loading: boolean
  href: string
  target: string
  onClick?: (event: MouseEvent) => void
}): void {
  if (!disabled && !loading) {
    if (href) window.open(href, target)
    onClick?.(event)
  }
}
