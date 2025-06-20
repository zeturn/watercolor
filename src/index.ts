// 样式导出
import './styles/index.css'

// Vue 组件 - 现有组件
export { default as ButtonVue } from './components/Button/Button.vue'
export { default as IconButtonVue } from './components/Button/IconButton.vue'
export { default as FabVue } from './components/Button/Fab.vue'
export { default as InputVue } from './components/Input/Input.vue'
export { default as CardVue } from './components/Card/Card.vue'
export { default as CardContentVue } from './components/Card/CardContent.vue'
export { default as CardActionsVue } from './components/Card/CardActions.vue'
export { default as SwitchVue } from './components/Switch/Switch.vue'
export { default as BadgeVue } from './components/Badge/Badge.vue'
export { default as ProgressVue } from './components/Progress/Progress.vue'
export { default as TabsVue } from './components/Tabs/Tabs.vue'
export { default as ToastVue } from './components/Toast/Toast.vue'
export { default as ModalVue } from './components/Modal/Modal.vue'
export { default as DropdownVue } from './components/Dropdown/Dropdown.vue'

// Vue 组件 - 布局组件
export { default as ContainerVue } from './components/Container/Container.vue'
export { default as BoxVue } from './components/Box/Box.vue'
export { default as GridVue } from './components/Grid/Grid.vue'
export { default as PaperVue } from './components/Paper/Paper.vue'

// Vue 组件 - 导航组件
export { default as AppBarVue } from './components/Navigation/AppBar.vue'
export { default as ToolbarVue } from './components/Navigation/Toolbar.vue'
export { default as MenuVue } from './components/Navigation/Menu.vue'
export { default as MenuItemVue } from './components/Navigation/MenuItem.vue'

// Vue 组件 - 输入组件
export { default as TextFieldVue } from './components/TextField/TextField.vue'
export { default as SelectVue } from './components/Select/Select.vue'
export { default as CheckboxVue } from './components/Checkbox/Checkbox.vue'
export { default as RadioVue } from './components/Radio/Radio.vue'
export { default as RadioGroupVue } from './components/Radio/RadioGroup.vue'
export { default as SliderVue } from './components/Slider/Slider.vue'

// Vue 组件 - 表单组件
export { default as FormControlVue } from './components/Form/FormControl.vue'
export { default as FormControlLabelVue } from './components/Form/FormControlLabel.vue'
export { default as FormGroupVue } from './components/Form/FormGroup.vue'
export { default as FormHelperTextVue } from './components/Form/FormHelperText.vue'

// Vue 组件 - 反馈组件
export { default as AlertVue } from './components/Feedback/Alert.vue'
export { default as SnackbarVue } from './components/Feedback/Snackbar.vue'
export { default as DialogVue } from './components/Feedback/Dialog.vue'
export { default as DialogTitleVue } from './components/Feedback/DialogTitle.vue'
export { default as DialogContentVue } from './components/Feedback/DialogContent.vue'
export { default as DialogActionsVue } from './components/Feedback/DialogActions.vue'
export { default as CircularProgressVue } from './components/Feedback/CircularProgress.vue'
export { default as TooltipVue } from './components/Feedback/Tooltip.vue'
export { default as SkeletonVue } from './components/Skeleton/Skeleton.vue'

// Vue 组件 - 数据展示组件
export { default as TypographyVue } from './components/Typography/Typography.vue'
export { default as ListVue } from './components/List/List.vue'
export { default as ListItemVue } from './components/List/ListItem.vue'
export { default as ListItemTextVue } from './components/List/ListItemText.vue'
export { default as ListItemIconVue } from './components/List/ListItemIcon.vue'
export { default as TableVue } from './components/Table/Table.vue'
export { default as TableHeadVue } from './components/Table/TableHead.vue'
export { default as TableBodyVue } from './components/Table/TableBody.vue'
export { default as TableRowVue } from './components/Table/TableRow.vue'
export { default as TableCellVue } from './components/Table/TableCell.vue'
export { default as AvatarVue } from './components/Avatar/Avatar.vue'
export { default as ChipVue } from './components/Chip/Chip.vue'

// Vue 组件 - 新增组件
export { default as AccordionVue } from './components/Accordion/Accordion.vue'
export { default as AlertNewVue } from './components/Alert/Alert.vue'
export { default as BannerVue } from './components/Banner/Banner.vue'
export { default as BreadcrumbVue } from './components/Breadcrumb/Breadcrumb.vue'
export { default as CopyVue } from './components/Copy/Copy.vue'
export { default as DatePickerVue } from './components/DatePicker/DatePicker.vue'

// React 组件
export { default as ButtonReact } from './components/Button/Button.jsx'
export { default as InputReact } from './components/Input/Input.jsx'
export { default as CardReact } from './components/Card/Card.jsx'
export { default as SwitchReact } from './components/Switch/Switch.jsx'
export { default as BadgeReact } from './components/Badge/Badge.jsx'
export { default as ProgressReact } from './components/Progress/Progress.jsx'
export { default as TabsReact } from './components/Tabs/Tabs.jsx'
export { default as ToastReact } from './components/Toast/Toast.jsx'
export { default as FeedReact } from './components/Feed/Feed.jsx'
export { default as FeatureReact } from './components/Feature/Feature.jsx'
export { default as FileInputReact } from './components/FileInput/FileInput.jsx'
export { default as BannerReact } from './components/Banner/Banner.jsx'
export { default as BlockquoteReact } from './components/Blockquote/Blockquote.jsx'
export { default as BoxReact } from './components/Box/Box.jsx'
export { default as BreadcrumbReact } from './components/Breadcrumb/Breadcrumb.jsx'
export { default as ChipReact } from './components/Chip/Chip.jsx'
export { default as ColorPickerReact } from './components/ColorPicker/ColorPicker.jsx'

// 主题工具
export * from './utils/theme'

// 类型定义
export type ButtonVariant = 'primary' | 'secondary' | 'filled' | 'success' | 'warning' | 'error' | 'purple' | 'orange' | 'cyan' | 'pink'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type InputSize = 'sm' | 'md' | 'lg'
export type CardVariant = 'default' | 'elevated'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'purple' | 'orange' | 'cyan' | 'pink'
export type BadgeSize = 'sm' | 'md' | 'lg'
export type ProgressColor = 'primary' | 'success' | 'warning' | 'error' | 'purple' | 'orange' | 'cyan' | 'pink'
export type ProgressSize = 'sm' | 'md' | 'lg'
export type SwitchColor = 'primary' | 'success' | 'warning' | 'error' | 'purple' | 'orange' | 'cyan' | 'pink'
export type TabsVariant = 'default' | 'pills' | 'underline'

// 新增组件类型定义
export type TextFieldVariant = 'outlined' | 'filled' | 'standard'
export type TextFieldSize = 'sm' | 'md' | 'lg'
export type AlertSeverity = 'success' | 'info' | 'warning' | 'error'
export type AlertVariant = 'standard' | 'filled' | 'outlined'
export type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error'
export type SnackbarVariant = 'filled' | 'outlined' | 'standard'
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'button'
export type TypographyColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'textPrimary' | 'textSecondary' | 'textDisabled'
export type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | false
export type DialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
export type AppBarPosition = 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
export type AppBarColor = 'primary' | 'secondary' | 'transparent' | 'inherit'

export interface WatercolorTheme {
  primary: Record<string, string>
  neutral: Record<string, string>
  success: Record<string, string>
  warning: Record<string, string>
  error: Record<string, string>
  purple?: Record<string, string>
  orange?: Record<string, string>
  cyan?: Record<string, string>
  pink?: Record<string, string>
}

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface AnchorOrigin {
  vertical: 'top' | 'center' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

// 新增组件类型定义
export type AccordionVariant = 'default' | 'bordered' | 'filled'
export type BannerType = 'success' | 'info' | 'warning' | 'error'
export type BannerPosition = 'top' | 'bottom'
export type BreadcrumbVariant = 'default' | 'underlined' | 'contained'
export type CopyVariant = 'default' | 'outlined' | 'filled' | 'minimal'
export type CopySize = 'sm' | 'md' | 'lg'
export type DatePickerVariant = 'default' | 'outlined' | 'filled'
export type DatePickerSize = 'sm' | 'md' | 'lg'

export interface AccordionItem {
  title: string
  content: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
  to?: string
  disabled?: boolean
  icon?: string
}

// New Components
export { default as HoverCard } from './components/HoverCard/HoverCard.vue'
export { default as ImageGallery } from './components/ImageGallery/ImageGallery.vue'
export { default as Marquee } from './components/Marquee/Marquee.vue'
export { default as Pagination } from './components/Pagination/Pagination.vue'
export { default as Popover } from './components/Popover/Popover.vue'
export { default as Blockquote } from './components/Blockquote/Blockquote.vue'
export { default as Rating } from './components/Rating/Rating.vue'
export { default as SlideOver } from './components/SlideOver/SlideOver.vue'
export { default as TypingText } from './components/TypingText/TypingText.vue'
export { default as VideoPlayer } from './components/VideoPlayer/VideoPlayer.vue'
export { default as Feature } from './components/Feature/Feature.vue'
export { default as Feed } from './components/Feed/Feed.vue'
export { default as PricingTable } from './components/PricingTable/PricingTable.vue'
export { default as Spinner } from './components/Spinner/Spinner.vue'
export { default as FileInput } from './components/FileInput/FileInput.vue'

// 新增工具类组件
export { default as Countdown } from './components/Countdown/Countdown.vue'
export { default as ColorPicker } from './components/ColorPicker/ColorPicker.vue'
export { default as VerificationCodeInput } from './components/Input/VerificationCodeInput.vue'
export { default as NumberAnimation } from './components/NumberAnimation/NumberAnimation.vue'
export { default as Watermark } from './components/Watermark/Watermark.vue'
export { default as Paradox } from './components/Paradox/Paradox.vue' 