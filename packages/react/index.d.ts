import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  CSSProperties,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react'
import type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
  ResolvedThemeMode,
  ThemeApplyResult,
  ThemeLoadResult,
  ThemeMode,
  ThemeSnapshot,
  ThemeStorage,
  WatercolorThemeConfig,
} from '@zeturn/watercolor-core'

type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
type HtmlComponentProps<T extends HTMLElement = HTMLElement> = HTMLAttributes<T> & { className?: string; style?: CSSProperties; children?: ReactNode }
type PolymorphicComponent<TDefault extends ElementType, OwnProps> = <T extends ElementType = TDefault>(props: PolymorphicProps<T, OwnProps>) => ReactElement | null
type PolymorphicProps<T extends ElementType, OwnProps> = OwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps | 'as'> & { as?: T }
type CompositionBaseProps = { children?: ReactNode; className?: string }

export type ComponentSize = 'sm' | 'md' | 'lg'
export type ButtonSize = 'xs' | ComponentSize | 'xl'
export type ComponentColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type FieldVariant = 'filled' | 'outlined' | 'standard'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ComponentColor | 'filled' | 'outlined' | 'text' | 'purple' | 'orange' | 'cyan' | 'pink'
  buttonStyle?: 'default' | 'outlined' | 'filled'
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  href?: string | null
  target?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  rounded?: boolean | string
  uppercase?: boolean
  ripple?: boolean
}

export interface FabProps extends Omit<ButtonProps, 'variant'> { variant?: 'circular' | 'extended'; color?: ComponentColor | 'default'; label?: ReactNode; icon?: ReactNode }
export interface IconButtonProps extends Omit<ButtonProps, 'variant' | 'buttonStyle' | 'fullWidth'> { color?: ComponentColor | 'default'; edge?: boolean | 'start' | 'end'; icon?: ReactNode }

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'value'> {
  value?: string | number | readonly string[]
  readonly?: boolean
  size?: ComponentSize
  variant?: FieldVariant
  color?: ComponentColor
  error?: boolean | ReactNode
  helperText?: ReactNode
  label?: ReactNode
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  fullWidth?: boolean
  multiline?: boolean
  rows?: number
}

export interface TextFieldProps extends Omit<InputProps, 'error'> {
  error?: ReactNode
  maxRows?: number
  minRows?: number
}

export type SelectValue = string | number | readonly (string | number)[]
export interface SelectOption<Value extends string | number = string | number> {
  value: Value
  label?: ReactNode
  disabled?: boolean
  [key: string]: unknown
}
export interface SelectChangeEvent<Value extends SelectValue = SelectValue> {
  target: { name: string; value: Value }
}
export interface SelectProps<Value extends SelectValue = SelectValue> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur' | 'color'> {
  value?: Value
  onChange?: (event: SelectChangeEvent<Value>) => void
  options?: readonly SelectOption[]
  placeholder?: ReactNode
  label?: ReactNode
  helperText?: ReactNode
  error?: boolean
  errorMessage?: ReactNode
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  clearable?: boolean
  fullWidth?: boolean
  size?: ComponentSize
  variant?: FieldVariant
  color?: ComponentColor
  maxHeight?: number
  name?: string
  onSearch?: (query: string) => void
  renderOption?: (option: SelectOption) => ReactNode
  renderValue?: (option: SelectOption) => ReactNode
}

export interface CheckboxChangeEvent<Value = string | number | boolean> {
  target: { name?: string; value: Value; checked: boolean }
  preventDefault: () => void
  stopPropagation: () => void
}
export interface CheckboxProps<Value = string | number | boolean> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'value' | 'onChange'> {
  value?: Value
  onChange?: (event: CheckboxChangeEvent<Value>) => void
  indeterminate?: boolean
  size?: ComponentSize
  color?: ComponentColor
  label?: ReactNode
  labelPlacement?: 'start' | 'end'
}

export interface RadioProps<Value = string | number | boolean> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'value' | 'onChange'> {
  value: Value
  onChange?: (value: Value) => void
  label?: ReactNode
  size?: ComponentSize
  color?: ComponentColor
}
export interface RadioGroupProps<Value = string | number | boolean> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Value
  onChange?: (value: Value) => void
  name?: string
  disabled?: boolean
  label?: ReactNode
  row?: boolean
  required?: boolean
  error?: ReactNode
  helperText?: ReactNode
  size?: ComponentSize
  color?: ComponentColor
}

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'onChange'> {
  onChange?: (checked: boolean) => void
  label?: ReactNode
  description?: ReactNode
  size?: ComponentSize
  color?: ComponentColor | 'purple' | 'orange' | 'cyan' | 'pink'
}

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  visible?: boolean
  open?: boolean
  title?: ReactNode
  size?: ComponentSize | 'xl'
  maxWidth?: ComponentSize | 'xl' | string | null
  closable?: boolean
  showCloseButton?: boolean
  maskClosable?: boolean
  closeOnOverlay?: boolean
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
  centered?: boolean
  fullWidth?: boolean
  fullScreen?: boolean
  position?: 'top' | 'center' | 'bottom'
  scroll?: 'paper' | 'body'
  lockScroll?: boolean
  zIndex?: number
  showOverlay?: boolean
  onClose?: () => void
  header?: ReactNode
  footer?: ReactNode
}

export interface MenuItem {
  key?: string | number
  label?: ReactNode
  icon?: ReactNode
  disabled?: boolean
  divider?: boolean
  [key: string]: unknown
}
export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  items?: readonly MenuItem[]
  triggerText?: ReactNode
  placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  size?: ComponentSize
  variant?: 'default' | 'card'
  disabled?: boolean
  trigger?: 'click' | 'hover'
  illustration?: string
  illustrationAlt?: string
  cardTitle?: ReactNode
  cardDescription?: ReactNode
  onSelect?: (item: MenuItem, index: number) => void
  onOpen?: () => void
  onClose?: () => void
  triggerContent?: ReactNode
  menuContent?: ReactNode
}

export interface TabItem {
  key?: string | number
  title: ReactNode
  disabled?: boolean
  [key: string]: unknown
}
export interface TabsRenderState { activeTab?: TabItem; activeIndex: number }
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  tabs?: readonly TabItem[]
  activeIndex?: number
  onChange?: (index: number, tab: TabItem) => void
  variant?: 'default' | 'pills' | 'underline'
  children?: ReactNode | ((state: TabsRenderState) => ReactNode)
}

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize
  stickyHeader?: boolean
  dense?: boolean
  hover?: boolean
  striped?: boolean
}
export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hover?: boolean
  selected?: boolean
  clickable?: boolean
}
export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'>, Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  component?: 'td' | 'th'
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  padding?: 'normal' | 'none' | 'checkbox'
  size?: 'small' | 'medium'
  sortDirection?: false | 'asc' | 'desc'
  variant?: 'head' | 'body' | 'footer'
}

export interface AccordionItem { key?: string | number; title?: ReactNode; content?: ReactNode; disabled?: boolean; [key: string]: unknown }
export interface AccordionProps extends HtmlComponentProps<HTMLDivElement> { items?: readonly AccordionItem[]; multiple?: boolean; variant?: 'default' | 'bordered' | 'separated'; onToggle?: (key: string | number, expanded: boolean) => void }
export interface AlertProps extends HtmlComponentProps<HTMLDivElement> { type?: 'success' | 'warning' | 'error' | 'info'; severity?: 'success' | 'warning' | 'error' | 'info'; variant?: 'filled' | 'outlined' | 'standard'; title?: ReactNode; message?: ReactNode; closable?: boolean; onClose?: () => void; icon?: ReactNode; action?: ReactNode }
export interface AppBarProps extends HtmlComponentProps<HTMLElement> { position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative'; color?: string; elevation?: number; variant?: 'elevation' | 'outlined' | 'minimal' }
export interface AutocompleteProps<Value = unknown> extends Omit<SelectProps, 'value' | 'onChange' | 'onSearch'> { value?: Value | Value[] | null; onChange?: (value: Value | Value[] | null) => void; readonly?: boolean; freeSolo?: boolean; minSearchLength?: number; noOptionsText?: ReactNode; onInputChange?: (value: string) => void; filterOptions?: (options: readonly SelectOption[], query: string) => readonly SelectOption[]; renderInput?: (props: Record<string, unknown>) => ReactNode; getOptionLabel?: (option: Value | SelectOption) => string; getOptionValue?: (option: Value | SelectOption) => string | number }
export interface AvatarProps extends HtmlComponentProps<HTMLDivElement> { src?: string; alt?: string; size?: ComponentSize | 'xs' | 'xl' | number; variant?: 'circular' | 'rounded' | 'square'; color?: ComponentColor | 'default'; children?: ReactNode }
export interface BadgeProps extends HtmlComponentProps<HTMLSpanElement> { variant?: ComponentColor | 'primary' | 'default'; size?: ComponentSize; dot?: boolean; children?: ReactNode }
export interface BannerProps extends HtmlComponentProps<HTMLDivElement> { type?: 'info' | 'success' | 'warning' | 'error'; title?: ReactNode; message?: ReactNode; closable?: boolean; onClose?: () => void; sticky?: boolean; zIndex?: number; icon?: ReactNode; actions?: ReactNode }
export interface BlockquoteProps extends HtmlComponentProps<HTMLElement> { cite?: ReactNode; variant?: 'default' | 'minimal' | 'card'; noBorder?: boolean; interactive?: boolean; size?: ComponentSize | 'medium'; color?: ComponentColor | 'default' }
export interface BoxProps<T extends ElementType = 'div'> extends PolymorphicProps<T, { children?: ReactNode; className?: string; style?: CSSProperties; p?: unknown; pt?: unknown; pr?: unknown; pb?: unknown; pl?: unknown; px?: unknown; py?: unknown; m?: unknown; mt?: unknown; mr?: unknown; mb?: unknown; ml?: unknown; mx?: unknown; my?: unknown; display?: CSSProperties['display']; flexDirection?: CSSProperties['flexDirection']; justifyContent?: CSSProperties['justifyContent']; alignItems?: CSSProperties['alignItems']; flexWrap?: CSSProperties['flexWrap']; gap?: CSSProperties['gap']; bgcolor?: string; color?: string; border?: string | number; borderRadius?: string | number; width?: CSSProperties['width']; height?: CSSProperties['height']; minWidth?: CSSProperties['minWidth']; minHeight?: CSSProperties['minHeight']; maxWidth?: CSSProperties['maxWidth']; maxHeight?: CSSProperties['maxHeight'] }> { component?: T }
export interface BreadcrumbItem { label?: ReactNode; href?: string; icon?: ReactNode; disabled?: boolean; current?: boolean; [key: string]: unknown }
export interface BreadcrumbProps extends Omit<HtmlComponentProps<HTMLElement>, 'onClick'> { items?: readonly BreadcrumbItem[]; separator?: ReactNode; variant?: 'default' | 'compact'; showHome?: boolean; homeIcon?: ReactNode; maxItems?: number; onItemClick?: (item: BreadcrumbItem, index: number) => void }
export interface CardProps extends HtmlComponentProps<HTMLDivElement> { title?: ReactNode; variant?: 'minimal' | 'default' | 'outlined' | 'elevated'; color?: ComponentColor | 'default'; size?: ComponentSize | 'medium'; interactive?: boolean; noBorder?: boolean; header?: ReactNode; footer?: ReactNode }
export interface CardActionsProps extends HtmlComponentProps<HTMLDivElement> { disableSpacing?: boolean; disablePadding?: boolean; justifyContent?: CSSProperties['justifyContent'] }
export interface CardContentProps extends HtmlComponentProps<HTMLDivElement> { disablePadding?: boolean; padding?: 'none' | 'compact' | 'normal' | 'comfortable' }
export interface ChipProps extends HtmlComponentProps<HTMLDivElement> { label?: ReactNode; avatar?: ReactNode; deletable?: boolean; disabled?: boolean; clickable?: boolean; variant?: 'filled' | 'outlined' | 'minimal'; size?: ComponentSize; color?: ComponentColor | 'default'; deleteIcon?: ReactNode; onDelete?: () => void }
export interface CircularProgressProps extends HtmlComponentProps<HTMLDivElement> { value?: number; size?: number | string; thickness?: number; variant?: 'determinate' | 'indeterminate'; color?: ComponentColor | 'inherit'; showValue?: boolean; overlay?: boolean; centered?: boolean; inline?: boolean }
export interface ColorPickerProps extends Omit<HtmlComponentProps<HTMLDivElement>, 'onChange'> { value?: string; onChange?: (value: string) => void; size?: ComponentSize; shape?: 'circle' | 'square' | 'rounded'; disabled?: boolean }
export interface CodeBlockProps extends Omit<HtmlComponentProps<HTMLElement>, 'title' | 'onCopy'> { code?: string; language?: string; title?: ReactNode; showLanguage?: boolean; showLineNumbers?: boolean; showCopyButton?: boolean; diff?: boolean; wrap?: boolean; maxHeight?: string | number; onCopy?: (code: string) => void }
export interface ContainerProps extends HtmlComponentProps<HTMLDivElement> { maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | string; fluid?: boolean; fixed?: boolean }
export interface CopyProps extends HtmlComponentProps<HTMLButtonElement> { text?: string; value?: string; copied?: boolean; error?: boolean; label?: ReactNode; copiedLabel?: ReactNode; errorLabel?: ReactNode; onCopy?: (value: string) => void; icon?: ReactNode }
export interface DatePickerProps extends Omit<HtmlComponentProps<HTMLDivElement>, 'onChange'> { value?: Date | string | null; onChange?: (value: Date) => void; placeholder?: string; disabled?: boolean; size?: ComponentSize; variant?: 'default' | FieldVariant; format?: string; showToday?: boolean; minDate?: Date | string | null; maxDate?: Date | string | null }
export interface DividerProps extends HtmlComponentProps<HTMLHRElement> { variant?: 'solid' | 'dashed' | 'dotted'; orientation?: 'horizontal' | 'vertical'; flexItem?: boolean }
export interface FeatureProps extends HtmlComponentProps<HTMLDivElement> { title?: ReactNode; description?: ReactNode; icon?: ReactNode; iconSize?: number; size?: ComponentSize; align?: 'left' | 'center' | 'right'; background?: string; variant?: 'default' | 'minimal' | 'card'; bgColor?: string; reverse?: boolean; vertical?: boolean; ctaLabel?: ReactNode; ctaHref?: string; onCtaClick?: (event: unknown) => void }
export interface FeedItem { title?: ReactNode; description?: ReactNode; avatar?: ReactNode; time?: ReactNode; children?: FeedItem[]; [key: string]: unknown }
export interface FeedProps extends Omit<HtmlComponentProps<HTMLDivElement>, 'onClick'> { item?: FeedItem; items?: readonly FeedItem[]; showAvatar?: boolean; variant?: 'timeline' | 'list'; color?: string; dotSize?: number; lineWidth?: number; onItemClick?: (item: FeedItem) => void }
export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> { onChange?: (files: FileList | File[]) => void; onInvalid?: (files: FileList | File[]) => void; label?: ReactNode; helperText?: ReactNode; accept?: string; multiple?: boolean; className?: string }
export interface FormControlProps extends HtmlComponentProps<HTMLDivElement> { disabled?: boolean; error?: boolean; required?: boolean; variant?: FieldVariant; size?: ComponentSize; fullWidth?: boolean; margin?: 'none' | 'dense' | 'normal' }
export interface FormControlLabelProps extends HtmlComponentProps<HTMLLabelElement> { label?: ReactNode; labelPlacement?: 'start' | 'end' | 'top' | 'bottom'; disabled?: boolean; required?: boolean; checked?: boolean; value?: unknown; control?: ReactNode; onChange?: (...args: unknown[]) => void }
export interface FormGroupProps extends HtmlComponentProps<HTMLDivElement> { row?: boolean; spacing?: 'compact' | 'normal' | 'comfortable' }
export interface FormHelperTextProps extends HtmlComponentProps<HTMLParagraphElement> { disabled?: boolean; error?: boolean; filled?: boolean; focused?: boolean; margin?: 'none' | 'dense' | 'normal'; required?: boolean; variant?: FieldVariant; id?: string; size?: ComponentSize }
export interface GridProps extends HtmlComponentProps<HTMLDivElement> { container?: boolean; item?: boolean; xs?: number | boolean; sm?: number | boolean; md?: number | boolean; lg?: number | boolean; xl?: number | boolean; spacing?: number | string; direction?: CSSProperties['flexDirection']; justifyContent?: CSSProperties['justifyContent']; alignItems?: CSSProperties['alignItems'] }
export interface HoverCardProps extends HtmlComponentProps<HTMLDivElement> { triggerText?: ReactNode; cardData?: Record<string, unknown>; variant?: 'default' | 'outlined' | 'filled' | 'minimal'; size?: ComponentSize; cardSize?: ComponentSize | 'xl'; position?: FloatingPlacement; delay?: number; hideDelay?: number; showArrow?: boolean; disabled?: boolean; onShow?: () => void; onHide?: () => void; onAction?: (...args: unknown[]) => void; card?: ReactNode }
export interface IconProps extends HtmlComponentProps<HTMLSpanElement> { name?: string; size?: number | string; color?: string; children?: ReactNode }
export interface ImageGalleryImage { src: string; alt?: string; title?: ReactNode; description?: ReactNode; [key: string]: unknown }
export interface ImageGalleryProps extends HtmlComponentProps<HTMLDivElement> { images?: readonly ImageGalleryImage[]; title?: ReactNode; layout?: 'grid' | 'masonry' | 'carousel'; size?: ComponentSize | 'xl'; columns?: number; gap?: number; showInfo?: boolean; showCount?: boolean; showDownload?: boolean; showPagination?: boolean; itemsPerPage?: number; lazyLoad?: boolean; loading?: boolean; onSelect?: (image: ImageGalleryImage, index: number) => void; onDownload?: (image: ImageGalleryImage) => void; onLightboxOpen?: (event: unknown) => void; onLightboxClose?: () => void }
export interface ListProps extends HtmlComponentProps<HTMLUListElement> { dense?: boolean; disablePadding?: boolean; nav?: boolean; subheader?: ReactNode }
export interface ListItemProps<T extends ElementType = 'li'> extends PolymorphicProps<T, { children?: ReactNode; className?: string; button?: boolean; disabled?: boolean; divider?: boolean; selected?: boolean; disableGutters?: boolean; multiselect?: boolean }> { component?: T }
export interface ListItemIconProps extends HtmlComponentProps<HTMLSpanElement> { position?: 'start' | 'end' }
export interface ListItemTextProps extends HtmlComponentProps<HTMLSpanElement> { primary?: ReactNode; secondary?: ReactNode; inset?: boolean }
export interface NumberAnimationProps extends HtmlComponentProps<HTMLSpanElement> { active?: boolean; duration?: number; from?: number; to?: number; locale?: string; precision?: number; showSeparator?: boolean; prefix?: ReactNode; suffix?: ReactNode; separator?: string; formatter?: (value: number) => ReactNode; easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | string; onFinish?: () => void }
export interface PaginationProps extends Omit<HtmlComponentProps<HTMLElement>, 'onChange'> { value?: number; page?: number; onChange?: (page: number) => void; total?: number; pageSize?: number; siblingCount?: number; boundaryCount?: number; size?: ComponentSize | 'xl' }
export interface PaperProps<T extends ElementType = 'div'> extends PolymorphicProps<T, { children?: ReactNode; className?: string; style?: CSSProperties; variant?: 'elevation' | 'outlined' | 'minimal'; elevation?: number; square?: boolean; hoverable?: boolean; clickable?: boolean; color?: ComponentColor | 'default'; size?: ComponentSize | null; shape?: string | null; gradient?: boolean; frosted?: boolean; textured?: boolean }> { component?: T }
export interface PopoverProps extends HtmlComponentProps<HTMLDivElement> { open?: boolean; onOpenChange?: (open: boolean) => void; triggerText?: ReactNode; trigger?: ReactNode; placement?: FloatingPlacement; offset?: number }
export interface PricingPlan { title?: ReactNode; price?: ReactNode; features?: readonly ReactNode[]; highlighted?: boolean; [key: string]: unknown }
export interface PricingTableProps extends HtmlComponentProps<HTMLDivElement> { plans?: readonly PricingPlan[]; columns?: number }
export interface ProgressProps extends HtmlComponentProps<HTMLDivElement> { value?: number; label?: ReactNode; showPercent?: boolean; color?: ComponentColor; size?: ComponentSize; animated?: boolean }
export interface RatingProps extends Omit<HtmlComponentProps<HTMLDivElement>, 'onChange'> { value?: number; max?: number; readOnly?: boolean; onChange?: (value: number) => void; ariaLabel?: string }
export interface SkeletonProps<T extends ElementType = 'div'> extends PolymorphicProps<T, { children?: ReactNode; className?: string; style?: CSSProperties; animation?: false | 'pulse' | 'wave'; height?: number | string; width?: number | string; variant?: 'text' | 'rectangular' | 'rounded' | 'circular' }> { component?: T }
export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'defaultValue'> { value?: number; defaultValue?: number; min?: number; max?: number; step?: number; label?: ReactNode; valueLabelDisplay?: 'off' | 'auto' | 'on'; onChange?: (value: number) => void; className?: string; style?: CSSProperties }
export interface SlideOverProps extends HtmlComponentProps<HTMLDivElement> { open?: boolean; onClose?: () => void; placement?: 'left' | 'right' | 'top' | 'bottom'; width?: number | string; header?: ReactNode; footer?: ReactNode }
export interface SnackbarProps extends HtmlComponentProps<HTMLDivElement> { open?: boolean; message?: ReactNode; severity?: 'success' | 'warning' | 'error' | 'info'; closable?: boolean; showIcon?: boolean; showProgress?: boolean; autoHideDuration?: number; action?: ReactNode; onClose?: () => void; onAction?: () => void }
export interface StatusProps extends HtmlComponentProps<HTMLSpanElement> { status?: 'default' | 'success' | 'warning' | 'error' | 'info' | string; size?: ComponentSize; showText?: boolean; animated?: boolean; animationType?: 'auto' | 'glow' | 'spin' | 'bounce' | 'shake' | 'ripple'; text?: ReactNode }
export interface ToolbarProps extends HtmlComponentProps<HTMLDivElement> { variant?: 'regular' | 'dense'; disableGutters?: boolean }
export interface TooltipProps extends HtmlComponentProps<HTMLDivElement> { text?: ReactNode; placement?: 'top' | 'bottom' | 'left' | 'right'; children?: ReactNode }
export interface TypographyProps<T extends ElementType = 'p'> extends PolymorphicProps<T, { children?: ReactNode; className?: string; style?: CSSProperties; variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline'; component?: T; color?: string; align?: CSSProperties['textAlign']; gutterBottom?: boolean; noWrap?: boolean }> { component?: T }
export interface TypingTextProps extends HtmlComponentProps<HTMLSpanElement> { text?: string; speed?: number; pause?: number; loop?: boolean; erase?: boolean; showCursor?: boolean }
export interface VerificationCodeInputProps extends Omit<HtmlComponentProps<HTMLDivElement>, 'onChange'> { length?: number; value?: string; onChange?: (value: string) => void; onComplete?: (value: string) => void; autoFocus?: boolean }
export interface VideoPlayerProps extends HtmlComponentProps<HTMLDivElement> { src: string; autoplay?: boolean; loop?: boolean; muted?: boolean; poster?: string; controls?: boolean }
export interface WatermarkProps extends HtmlComponentProps<HTMLDivElement> { content?: ReactNode; image?: string; fullscreen?: boolean; gap?: [number, number]; offset?: [number, number]; rotate?: number; zIndex?: number; opacity?: number; debug?: boolean; cross?: boolean }

export interface ThemeContextValue extends ThemeSnapshot {
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}
export interface ThemeProviderProps {
  children?: ReactNode
  config?: WatercolorThemeConfig
  defaultMode?: ThemeMode
  themeUrl?: string
  target?: HTMLElement | null
  mode?: ThemeMode
  initialResolvedMode?: ResolvedThemeMode
  storageKey?: string
  storage?: ThemeStorage | null
  onModeChange?: (mode: ThemeMode) => void
  onResolvedModeChange?: (resolvedMode: ResolvedThemeMode) => void
  onThemeLoad?: (result: ThemeApplyResult | ThemeLoadResult) => void
  onThemeError?: (result: Extract<ThemeApplyResult | ThemeLoadResult, { ok: false }>) => void
}

export interface WatercolorLocaleMessages {
  breadcrumb: string
  closePopover: string
  close: string
  closeDialog: string
  closeLightbox: string
  downloadImage: (index: number) => string
  colorPicker: string
  circularProgress: string
  enterFullscreen: string
  loading: string
  muteVideo: string
  nextImage: string
  nextMonth: string
  nextPage: string
  openCalendar: string
  openImageInLightbox: (index: number) => string
  page: (page: number) => string
  pagination: string
  pauseVideo: string
  playVideo: string
  previousMonth: string
  previousPage: string
  previousImage: string
  progress: string
  rating: string
  ratingValue: (value: number, max: number) => string
  remove: string
  removeItem: (label?: string) => string
  rowsPerPage: string
  switchControl: string
  tabList: string
  unmuteVideo: string
  jumpToPage: string
  verificationCodeDigit: (index: number) => string
  viewImage: (index: number, description?: string) => string
  volume: string
  videoProgress: string
}
export interface LocaleContextValue {
  locale?: string
  messages: WatercolorLocaleMessages
}
export interface LocaleProviderProps {
  children?: ReactNode
  locale?: string
  messages?: Partial<WatercolorLocaleMessages>
}

export type PageProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  size?: PageSize
  gutter?: PageGutter
}>
export type StackProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  gap?: CompositionGap
  align?: CompositionAlign
}>
export type InlineProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  gap?: CompositionGap
  align?: CompositionAlign
  justify?: InlineJustify
  wrap?: boolean
}>
export type SplitProps<T extends ElementType = 'div'> = PolymorphicProps<T, CompositionBaseProps & {
  ratio?: SplitRatio
  gap?: CompositionGap
  align?: CompositionAlign
  collapse?: SplitCollapse
}>

export type {
  CompositionAlign,
  CompositionGap,
  InlineJustify,
  PageGutter,
  PageSize,
  SplitCollapse,
  SplitRatio,
} from '@zeturn/watercolor-core'

export const Accordion: ComponentType<AccordionProps>
export const Alert: ComponentType<AlertProps>
export const AppBar: ComponentType<AppBarProps>
export const Autocomplete: ComponentType<AutocompleteProps>
export const Avatar: ComponentType<AvatarProps>
export const Badge: ComponentType<BadgeProps>
export const Banner: ComponentType<BannerProps>
export const Blockquote: ComponentType<BlockquoteProps>
export const Box: <T extends ElementType = 'div'>(props: BoxProps<T>) => ReactElement | null
export const Breadcrumb: ComponentType<BreadcrumbProps>
export const Button: ComponentType<ButtonProps>
export const Card: ComponentType<CardProps>
export const CardActions: ComponentType<CardActionsProps>
export const CardContent: ComponentType<CardContentProps>
export const Checkbox: ComponentType<CheckboxProps>
export const Chip: ComponentType<ChipProps>
export const CircularProgress: ComponentType<CircularProgressProps>
export const ColorPicker: ComponentType<ColorPickerProps>
export const CodeBlock: ComponentType<CodeBlockProps>
export const Container: ComponentType<ContainerProps>
export const Copy: ComponentType<CopyProps>
export const DatePicker: ComponentType<DatePickerProps>
export const Fab: ComponentType<FabProps>
export const Feed: ComponentType<FeedProps>
export const Feature: ComponentType<FeatureProps>
export const FileInput: ComponentType<FileInputProps>
export const FormControl: ComponentType<FormControlProps>
export const FormControlLabel: ComponentType<FormControlLabelProps>
export const FormGroup: ComponentType<FormGroupProps>
export const FormHelperText: ComponentType<FormHelperTextProps>
export const Grid: ComponentType<GridProps>
export const HoverCard: ComponentType<HoverCardProps>
export const Icon: ComponentType<IconProps>
export const IconButton: ComponentType<IconButtonProps>
export const ImageGallery: ComponentType<ImageGalleryProps>
export const Inline: <T extends ElementType = 'div'>(props: InlineProps<T>) => ReactElement | null
export const Input: ComponentType<InputProps>
export const List: ComponentType<ListProps>
export const ListItem: <T extends ElementType = 'li'>(props: ListItemProps<T>) => ReactElement | null
export const ListItemIcon: ComponentType<ListItemIconProps>
export const ListItemText: ComponentType<ListItemTextProps>
export const Menu: ComponentType<MenuProps>
export const Modal: ComponentType<ModalProps>
export const NumberAnimation: ComponentType<NumberAnimationProps>
export const Pagination: ComponentType<PaginationProps>
export const Page: <T extends ElementType = 'div'>(props: PageProps<T>) => ReactElement | null
export const Paper: <T extends ElementType = 'div'>(props: PaperProps<T>) => ReactElement | null
export const Popover: ComponentType<PopoverProps>
export const PricingTable: ComponentType<PricingTableProps>
export const Progress: ComponentType<ProgressProps>
export const Radio: <Value = string | number | boolean>(props: RadioProps<Value>) => ReactElement | null
export const RadioGroup: <Value = string | number | boolean>(props: RadioGroupProps<Value>) => ReactElement | null
export const Rating: ComponentType<RatingProps>
export const Select: <Value extends SelectValue = SelectValue>(props: SelectProps<Value>) => ReactElement | null
export const Skeleton: <T extends ElementType = 'div'>(props: SkeletonProps<T>) => ReactElement | null
export const Slider: ComponentType<SliderProps>
export const SlideOver: ComponentType<SlideOverProps>
export const Split: <T extends ElementType = 'div'>(props: SplitProps<T>) => ReactElement | null
export const Stack: <T extends ElementType = 'div'>(props: StackProps<T>) => ReactElement | null
export const Snackbar: ComponentType<SnackbarProps>
export const Status: ComponentType<StatusProps>
export const Switch: ComponentType<SwitchProps>
export const Table: ComponentType<TableProps> & {
  Head: ComponentType<TableHeadProps>
  Body: ComponentType<TableBodyProps>
  Row: ComponentType<TableRowProps>
  Cell: ComponentType<TableCellProps>
}
export const TableBody: ComponentType<TableBodyProps>
export const TableCell: ComponentType<TableCellProps>
export const TableHead: ComponentType<TableHeadProps>
export const TableRow: ComponentType<TableRowProps>
export const Tabs: ComponentType<TabsProps>
export const TextField: ComponentType<TextFieldProps>
export const Toolbar: ComponentType<ToolbarProps>
export const Tooltip: ComponentType<TooltipProps>
export const Typography: <T extends ElementType = 'p'>(props: TypographyProps<T>) => ReactElement | null
export const TypingText: ComponentType<TypingTextProps>
export const VerificationCodeInput: ComponentType<VerificationCodeInputProps>
export const VideoPlayer: ComponentType<VideoPlayerProps>
export const Watermark: ComponentType<WatermarkProps>
export const LocaleProvider: ComponentType<LocaleProviderProps>
export const defaultLocaleMessages: WatercolorLocaleMessages
export function useLocale(): LocaleContextValue

export {
  THEME_CONFIG_VERSION,
  THEME_MODES,
  THEME_STORAGE_KEY,
  applyThemeConfig,
  createThemeController,
  createThemeInitScript,
  loadThemeConfig,
  resetThemeConfig,
  resolveThemeMode,
  serializeThemeConfig,
  validateThemeConfig,
} from '@zeturn/watercolor-core'
export type {
  PaletteName,
  PaletteShade,
  ResolvedThemeMode,
  ThemeApplyOptions,
  ThemeApplyResult,
  ThemeController,
  ThemeControllerOptions,
  ThemeFontConfig,
  ThemeInitScriptOptions,
  ThemeLoadResult,
  ThemeMode,
  ThemeModeConfig,
  ThemeModeTokenName,
  ThemeMotionConfig,
  ThemeSnapshot,
  ThemeStorage,
  ThemeTokensConfig,
  ThemeValidationIssue,
  ThemeValidationResult,
  WatercolorThemeConfig,
} from '@zeturn/watercolor-core'
export const ThemeProvider: ComponentType<ThemeProviderProps>
export function useTheme(): ThemeContextValue
