// Material-UI 兼容层 - 提供与 @mui/material 相同的导出接口
// 这个文件允许项目无缝从 Material-UI 切换到 Watercolor 设计系统

// 布局组件
export { default as Container } from './components/Container/Container.vue'
export { default as Box } from './components/Box/Box.vue'
export { default as Grid } from './components/Grid/Grid.vue'
export { default as Paper } from './components/Paper/Paper.vue'

// 导航组件
export { default as AppBar } from './components/Navigation/AppBar.vue'
export { default as Toolbar } from './components/Navigation/Toolbar.vue'
export { default as Menu } from './components/Navigation/Menu.vue'
export { default as MenuItem } from './components/Navigation/MenuItem.vue'

// 输入组件
export { default as TextField } from './components/TextField/TextField.vue'
export { default as FormControl } from './components/Form/FormControl.vue'
export { default as FormControlLabel } from './components/Form/FormControlLabel.vue'
export { default as FormGroup } from './components/Form/FormGroup.vue'
export { default as FormHelperText } from './components/Form/FormHelperText.vue'
export { default as Select } from './components/Select/Select.vue'
export { default as Checkbox } from './components/Checkbox/Checkbox.vue'
export { default as Radio } from './components/Radio/Radio.vue'
export { default as RadioGroup } from './components/Radio/RadioGroup.vue'
export { default as Button } from './components/Button/Button.vue'
export { default as IconButton } from './components/Button/IconButton.vue'
export { default as Fab } from './components/Button/Fab.vue'
export { default as Switch } from './components/Switch/Switch.vue'
export { default as Slider } from './components/Slider/Slider.vue'

// 反馈组件
export { default as Alert } from './components/Alert/Alert.vue'
export { default as Snackbar } from './components/Snackbar/Snackbar.vue'
export { default as Dialog } from './components/Dialog/Dialog.vue'
export { default as DialogTitle } from './components/Dialog/DialogTitle.vue'
export { default as DialogContent } from './components/Dialog/DialogContent.vue'
export { default as DialogActions } from './components/Dialog/DialogActions.vue'
export { default as CircularProgress } from './components/CircularProgress/CircularProgress.vue'
export { default as LinearProgress } from './components/Progress/Progress.vue'
export { default as Tooltip } from './components/Tooltip/Tooltip.vue'
export { default as Skeleton } from './components/Skeleton/Skeleton.vue'

// 数据展示组件
export { default as Typography } from './components/Display/Typography.vue'
export { default as List } from './components/Display/List.vue'
export { default as ListItem } from './components/Display/ListItem.vue'
export { default as ListItemText } from './components/Display/ListItemText.vue'
export { default as ListItemIcon } from './components/Display/ListItemIcon.vue'
export { default as Table } from './components/Display/Table.vue'
export { default as TableHead } from './components/Display/TableHead.vue'
export { default as TableBody } from './components/Display/TableBody.vue'
export { default as TableRow } from './components/Display/TableRow.vue'
export { default as TableCell } from './components/Display/TableCell.vue'
export { default as Avatar } from './components/Display/Avatar.vue'
export { default as Chip } from './components/Display/Chip.vue'
export { default as Card } from './components/Card/Card.vue'
export { default as CardContent } from './components/Card/CardContent.vue'
export { default as CardActions } from './components/Card/CardActions.vue'
export { default as Badge } from './components/Badge/Badge.vue'

// 其他组件
export { default as Modal } from './components/Modal/Modal.vue'
export { default as Tabs } from './components/Tabs/Tabs.vue'
export { default as Tab } from './components/Tabs/Tabs.vue' // 复用 Tabs 组件

// 主题相关
export * from './utils/theme'

// 兼容性别名和组件包装器
import ListItemComponent from './components/Display/ListItem.vue'
import PaperComponent from './components/Paper/Paper.vue'

export const ListItemButton = ListItemComponent
export const TableContainer = PaperComponent

// 工具函数
export const createTheme = (theme: any) => theme
export const ThemeProvider = ({ theme, children }: { theme: any, children: any }) => children
export const CssBaseline = () => null

// 样式系统兼容
export const styled = (component: any) => (styles: any) => component
export const useTheme = () => ({
  palette: {
    primary: { main: '#1a8cff' },
    secondary: { main: '#71717a' },
    error: { main: '#ef4444' },
    warning: { main: '#f59e0b' },
    success: { main: '#10b981' },
    info: { main: '#1a8cff' }
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    up: (breakpoint: string) => `@media (min-width: ${breakpoint}px)`,
    down: (breakpoint: string) => `@media (max-width: ${breakpoint}px)`
  }
})

// 颜色常量
export const colors = {
  blue: { 500: '#1a8cff' },
  green: { 500: '#10b981' },
  orange: { 500: '#f97316' },
  red: { 500: '#ef4444' },
  purple: { 500: '#a855f7' },
  grey: { 500: '#71717a' }
} 