/**
 * Icon 工具函数和预设
 */

export type IconLibrary = 'lucide' | 'heroicons' | 'tabler' | 'phosphor' | 'feather' | 'html'
export type IconVariant = 'outline' | 'solid' | 'mini'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string

export interface IconConfig {
  library: IconLibrary
  name: string
  variant?: IconVariant
  size?: IconSize
  color?: string
  strokeWidth?: number
  className?: string
}

/**
 * 常用图标预设 - Lucide Icons
 */
export const LUCIDE_ICONS = {
  // 基础图标
  heart: 'heart',
  star: 'star',
  user: 'user',
  home: 'home',
  search: 'search',
  menu: 'menu',
  close: 'x',
  check: 'check',
  plus: 'plus',
  minus: 'minus',
  
  // 箭头图标
  arrowUp: 'arrow-up',
  arrowDown: 'arrow-down',
  arrowLeft: 'arrow-left',
  arrowRight: 'arrow-right',
  chevronUp: 'chevron-up',
  chevronDown: 'chevron-down',
  chevronLeft: 'chevron-left',
  chevronRight: 'chevron-right',
  
  // 状态图标
  info: 'info',
  warning: 'alert-triangle',
  error: 'alert-circle',
  success: 'check-circle',
  help: 'help-circle',
  
  // 操作图标
  edit: 'edit',
  delete: 'trash-2',
  copy: 'copy',
  download: 'download',
  upload: 'upload',
  share: 'share',
  save: 'save',
  print: 'printer',
  
  // 媒体图标
  play: 'play',
  pause: 'pause',
  stop: 'square',
  volume: 'volume-2',
  volumeOff: 'volume-x',
  
  // 通信图标
  mail: 'mail',
  phone: 'phone',
  message: 'message-circle',
  
  // 设置图标
  settings: 'settings',
  gear: 'cog',
  lock: 'lock',
  unlock: 'unlock',
  
  // 文件图标
  file: 'file',
  folder: 'folder',
  image: 'image',
  video: 'video',
  
  // 社交图标
  github: 'github',
  twitter: 'twitter',
  facebook: 'facebook',
  linkedin: 'linkedin',
  
  // 加载图标
  loader: 'loader',
  refresh: 'refresh-cw',
  
  // 导航图标
  external: 'external-link',
  link: 'link',
  bookmark: 'bookmark',
  
  // 购物图标
  cart: 'shopping-cart',
  bag: 'shopping-bag',
  credit: 'credit-card',
  
  // 时间图标
  clock: 'clock',
  calendar: 'calendar',
  
  // 位置图标
  map: 'map',
  location: 'map-pin',
  
  // 天气图标
  sun: 'sun',
  moon: 'moon',
  cloud: 'cloud',
  
  // 工具图标
  tool: 'wrench',
  filter: 'filter',
  sort: 'arrow-up-down'
} as const

/**
 * 常用图标预设 - Heroicons
 */
export const HEROICONS = {
  // 基础图标
  heart: 'heart',
  star: 'star',
  user: 'user-circle',
  home: 'home',
  search: 'magnifying-glass',
  menu: 'bars-3',
  close: 'x-mark',
  check: 'check',
  plus: 'plus',
  minus: 'minus',
  
  // 箭头图标
  arrowUp: 'arrow-up',
  arrowDown: 'arrow-down',
  arrowLeft: 'arrow-left',
  arrowRight: 'arrow-right',
  chevronUp: 'chevron-up',
  chevronDown: 'chevron-down',
  chevronLeft: 'chevron-left',
  chevronRight: 'chevron-right',
  
  // 状态图标
  info: 'information-circle',
  warning: 'exclamation-triangle',
  error: 'x-circle',
  success: 'check-circle',
  
  // 操作图标
  edit: 'pencil',
  delete: 'trash',
  copy: 'document-duplicate',
  download: 'arrow-down-tray',
  upload: 'arrow-up-tray',
  share: 'share',
  
  // 设置图标
  settings: 'cog-6-tooth',
  lock: 'lock-closed',
  unlock: 'lock-open'
} as const

/**
 * 常用图标预设 - Feather Icons
 */
export const FEATHER_ICONS = {
  // 基础图标
  heart: 'heart',
  star: 'star',
  user: 'user',
  home: 'home',
  search: 'search',
  menu: 'menu',
  close: 'x',
  check: 'check',
  plus: 'plus',
  minus: 'minus',
  
  // 箭头图标
  arrowUp: 'arrow-up',
  arrowDown: 'arrow-down',
  arrowLeft: 'arrow-left',
  arrowRight: 'arrow-right',
  chevronUp: 'chevron-up',
  chevronDown: 'chevron-down',
  chevronLeft: 'chevron-left',
  chevronRight: 'chevron-right',
  
  // 状态图标
  info: 'info',
  warning: 'alert-triangle',
  error: 'alert-circle',
  success: 'check-circle',
  help: 'help-circle',
  
  // 操作图标
  edit: 'edit',
  delete: 'trash-2',
  copy: 'copy',
  download: 'download',
  upload: 'upload',
  share: 'share',
  save: 'save',
  print: 'printer',
  
  // 媒体图标
  play: 'play',
  pause: 'pause',
  stop: 'square',
  volume: 'volume-2',
  volumeOff: 'volume-x',
  
  // 通信图标
  mail: 'mail',
  phone: 'phone',
  message: 'message-circle',
  
  // 设置图标
  settings: 'settings',
  lock: 'lock',
  
  // 文件图标
  file: 'file',
  folder: 'folder',
  image: 'image',
  video: 'video',
  
  // 社交图标
  github: 'github',
  twitter: 'twitter',
  facebook: 'facebook',
  
  // 加载图标
  loader: 'loader',
  refresh: 'refresh-cw',
  
  // 导航图标
  external: 'external-link',
  link: 'link',
  bookmark: 'bookmark',
  
  // 购物图标
  cart: 'shopping-cart',
  bag: 'shopping-bag',
  
  // 时间图标
  clock: 'clock',
  calendar: 'calendar',
  
  // 位置图标
  map: 'map',
  location: 'map-pin',
  
  // 天气图标
  sun: 'sun',
  moon: 'moon',
  cloud: 'cloud'
} as const

/**
 * 创建图标配置
 */
export function createIconConfig(config: Partial<IconConfig> & { name: string }): IconConfig {
  return {
    library: 'lucide',
    variant: 'outline',
    size: 'md',
    color: 'currentColor',
    strokeWidth: 2,
    ...config
  }
}

/**
 * 获取图标名称（支持预设）
 */
export function getIconName(iconKey: string, library: IconLibrary = 'lucide'): string {
  switch (library) {
    case 'lucide':
      return LUCIDE_ICONS[iconKey as keyof typeof LUCIDE_ICONS] || iconKey
    case 'heroicons':
      return HEROICONS[iconKey as keyof typeof HEROICONS] || iconKey
    case 'feather':
      return FEATHER_ICONS[iconKey as keyof typeof FEATHER_ICONS] || iconKey
    default:
      return iconKey
  }
}

/**
 * 图标尺寸映射
 */
export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48
} as const

/**
 * 获取图标尺寸
 */
export function getIconSize(size: IconSize): number | string {
  if (typeof size === 'string' && size in ICON_SIZES) {
    return ICON_SIZES[size as keyof typeof ICON_SIZES]
  }
  return size
}

/**
 * 创建预设图标
 */
export function createPresetIcon(
  iconKey: keyof typeof LUCIDE_ICONS,
  options: Partial<Omit<IconConfig, 'name'>> = {}
): IconConfig {
  return createIconConfig({
    name: LUCIDE_ICONS[iconKey],
    ...options
  })
}

/**
 * 常用图标组合
 */
export const ICON_PRESETS = {
  // 状态图标
  loading: createPresetIcon('loader', { className: 'wc-icon--spinning' }),
  success: createPresetIcon('success', { color: 'var(--wc-success-500)' }),
  warning: createPresetIcon('warning', { color: 'var(--wc-warning-500)' }),
  error: createPresetIcon('error', { color: 'var(--wc-error-500)' }),
  info: createPresetIcon('info', { color: 'var(--wc-info-500)' }),
  
  // 操作图标
  close: createPresetIcon('close', { className: 'wc-icon--clickable' }),
  menu: createPresetIcon('menu', { className: 'wc-icon--clickable' }),
  search: createPresetIcon('search', { className: 'wc-icon--clickable' }),
  
  // 导航图标
  back: createPresetIcon('arrowLeft', { className: 'wc-icon--clickable' }),
  forward: createPresetIcon('arrowRight', { className: 'wc-icon--clickable' }),
  up: createPresetIcon('chevronUp', { className: 'wc-icon--clickable' }),
  down: createPresetIcon('chevronDown', { className: 'wc-icon--clickable' })
} as const

/**
 * 图标主题配置
 */
export const ICON_THEMES = {
  light: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
    muted: '#9ca3af'
  },
  dark: {
    primary: '#60a5fa',
    secondary: '#9ca3af',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#22d3ee',
    muted: '#6b7280'
  }
} as const

/**
 * 获取主题颜色
 */
export function getThemeColor(color: string, theme: 'light' | 'dark' = 'light'): string {
  return ICON_THEMES[theme][color as keyof typeof ICON_THEMES.light] || color
} 