import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
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
  ThemeMode,
  ThemeSnapshot,
  ThemeStorage,
} from '@zeturn/watercolor-core'

type WatercolorComponent = ComponentType<Record<string, unknown>>
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

export interface ThemeContextValue extends ThemeSnapshot {
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}
export interface ThemeProviderProps {
  children?: ReactNode
  defaultMode?: ThemeMode
  mode?: ThemeMode
  storageKey?: string
  storage?: ThemeStorage | null
  onModeChange?: (mode: ThemeMode) => void
  onResolvedModeChange?: (resolvedMode: ResolvedThemeMode) => void
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

export const Accordion: WatercolorComponent
export const Alert: WatercolorComponent
export const AppBar: WatercolorComponent
export const Autocomplete: WatercolorComponent
export const Avatar: WatercolorComponent
export const Badge: WatercolorComponent
export const Banner: WatercolorComponent
export const Blockquote: WatercolorComponent
export const Box: WatercolorComponent
export const Breadcrumb: WatercolorComponent
export const Button: ComponentType<ButtonProps>
export const Card: WatercolorComponent
export const CardActions: WatercolorComponent
export const CardContent: WatercolorComponent
export const Checkbox: ComponentType<CheckboxProps>
export const Chip: WatercolorComponent
export const CircularProgress: WatercolorComponent
export const ColorPicker: WatercolorComponent
export const Container: WatercolorComponent
export const Copy: WatercolorComponent
export const DatePicker: WatercolorComponent
export const Fab: WatercolorComponent
export const Feed: WatercolorComponent
export const Feature: WatercolorComponent
export const FileInput: WatercolorComponent
export const FormControl: WatercolorComponent
export const FormControlLabel: WatercolorComponent
export const FormGroup: WatercolorComponent
export const FormHelperText: WatercolorComponent
export const Grid: WatercolorComponent
export const HoverCard: WatercolorComponent
export const Icon: WatercolorComponent
export const IconButton: WatercolorComponent
export const ImageGallery: WatercolorComponent
export const Inline: <T extends ElementType = 'div'>(props: InlineProps<T>) => ReactElement | null
export const Input: ComponentType<InputProps>
export const List: WatercolorComponent
export const ListItem: WatercolorComponent
export const ListItemIcon: WatercolorComponent
export const ListItemText: WatercolorComponent
export const Menu: ComponentType<MenuProps>
export const Modal: ComponentType<ModalProps>
export const NumberAnimation: WatercolorComponent
export const Pagination: WatercolorComponent
export const Page: <T extends ElementType = 'div'>(props: PageProps<T>) => ReactElement | null
export const Paper: WatercolorComponent
export const Popover: WatercolorComponent
export const PricingTable: WatercolorComponent
export const Progress: WatercolorComponent
export const Radio: <Value = string | number | boolean>(props: RadioProps<Value>) => ReactElement | null
export const RadioGroup: <Value = string | number | boolean>(props: RadioGroupProps<Value>) => ReactElement | null
export const Rating: WatercolorComponent
export const Select: <Value extends SelectValue = SelectValue>(props: SelectProps<Value>) => ReactElement | null
export const Skeleton: WatercolorComponent
export const Slider: WatercolorComponent
export const SlideOver: WatercolorComponent
export const Split: <T extends ElementType = 'div'>(props: SplitProps<T>) => ReactElement | null
export const Stack: <T extends ElementType = 'div'>(props: StackProps<T>) => ReactElement | null
export const Snackbar: WatercolorComponent
export const Status: WatercolorComponent
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
export const Toolbar: WatercolorComponent
export const Tooltip: WatercolorComponent
export const Typography: WatercolorComponent
export const TypingText: WatercolorComponent
export const VerificationCodeInput: WatercolorComponent
export const VideoPlayer: WatercolorComponent
export const Watermark: WatercolorComponent

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
