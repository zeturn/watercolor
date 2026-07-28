// Typography 组件配置映射

// HTML 元素映射
export const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span'
}

// 变体样式类映射
export const variantClassMap = {
  h1: 'wc-typography--h1',
  h2: 'wc-typography--h2',
  h3: 'wc-typography--h3',
  h4: 'wc-typography--h4',
  h5: 'wc-typography--h5',
  h6: 'wc-typography--h6',
  subtitle1: 'wc-typography--subtitle1',
  subtitle2: 'wc-typography--subtitle2',
  body1: 'wc-typography--body1',
  body2: 'wc-typography--body2',
  caption: 'wc-typography--caption',
  overline: 'wc-typography--overline',
  button: 'wc-typography--button'
}

// 颜色样式类映射
export const colorClassMap = {
  inherit: 'wc-typography--color-inherit',
  primary: 'wc-typography--color-primary',
  secondary: 'wc-typography--color-secondary',
  success: 'wc-typography--color-success',
  warning: 'wc-typography--color-warning',
  error: 'wc-typography--color-error',
  textPrimary: 'wc-typography--color-text-primary',
  textSecondary: 'wc-typography--color-text-secondary',
  textDisabled: 'wc-typography--color-text-disabled'
}

// 对齐样式类映射
export const alignClassMap = {
  left: 'wc-typography--align-left',
  center: 'wc-typography--align-center',
  right: 'wc-typography--align-right',
  justify: 'wc-typography--align-justify'
}

// 行高映射
export const lineHeightMap = {
  h1: '1.2',
  h2: '1.2',
  h3: '1.3',
  h4: '1.3',
  h5: '1.4',
  h6: '1.4',
  subtitle1: '1.5',
  subtitle2: '1.5',
  body1: '1.6',
  body2: '1.6',
  caption: '1.4',
  overline: '1.4',
  button: '1.4'
}

// 获取组件对应的HTML元素
export function getComponent(variant, customComponent) {
  return customComponent || variantMap[variant] || 'p'
}

// 构建Typography类名
export function buildTypographyClasses(variant, color, align, gutterBottom, noWrap, className = '') {
  const classes = [
    'wc-typography',
    variantClassMap[variant],
    colorClassMap[color],
    align !== 'inherit' ? alignClassMap[align] : null,
    gutterBottom ? 'wc-typography--gutter-bottom' : null,
    noWrap ? 'wc-typography--no-wrap' : null,
    className
  ]
    .filter(Boolean)
    .join(' ')
  
  return classes
}
