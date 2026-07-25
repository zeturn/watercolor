# Watercolor UI — Component Catalog (React)

All components are imported from `@zeturn/watercolor-react` (barrel) or
`@zeturn/watercolor-react/components/<Name>` (deep). Every component accepts
`variant`, `color`, `size`, and `disabled` where relevant.

**Next.js (App Router):** import from `@zeturn/watercolor-next` instead. It re-exports the exact
same components, providers, and hooks behind a built-in `"use client"` boundary, so you can drop
components into Server Components without adding `'use client'` yourself. The catalog below is
identical for the Next.js package.

Shared `color` values: `'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'neutral'`.
Shared `size` values: `'sm' | 'md' | 'lg'`.

## Quick snippets

```tsx
import { Button, TextField, Card, CardContent, Select, Modal, Table } from '@zeturn/watercolor-react'

// Button
<Button variant="filled" color="primary" onClick={handleClick}>Save</Button>
<Button variant="outlined" color="secondary">Cancel</Button>
<Button variant="text" loading>Loading</Button>

// TextField
<TextField label="Email" type="email" value={email} onChange={setEmail} helperText="We never share it" />

// Card
<Card elevation={2} interactive>
  <CardContent>...</CardContent>
</Card>

// Select
<Select label="Role" options={[{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }]} />

// Modal
<Modal open={open} onClose={onClose} size="md">Modal body</Modal>

// Table
<Table striped hoverable>
  <thead><tr><th>Name</th><th>Status</th></tr></thead>
  <tbody><tr><td>Alpha</td><td>Active</td></tr></tbody>
</Table>
```

## Actions

- **Button** `components/Button` — 触发动作的基础按钮。
  Props: `variant` (`'filled'|'outlined'|'text'`), `size`, `color`, `disabled`, `fullWidth`, `loading`, `onClick`.
- **Fab** `components/Fab` — 悬浮操作按钮。
  Props: `variant` (`'circular'|'extended'`), `color`, `position` (`'fixed'|'absolute'`), `label`.
- **IconButton** `components/IconButton` — 仅图标的按钮。
  Props: `size`, `color`, `edge` (`'start'|'end'`), `disabled`.

## Form Inputs

- **TextField** `components/TextField` — 文本输入，支持标签/前后缀/错误。
  Props: `label`, `variant` (`'outlined'|'filled'|'standard'`), `type`, `multiline`, `rows`, `error`, `helperText`, `prefix`, `suffix`.
- **Select** `components/Select` — 下拉选择，支持单选/多选/搜索。
  Props: `label`, `options` (`{label,value}[]`), `multiple`, `searchable`, `placeholder`, `error`.
- **Checkbox** `components/Checkbox` — 复选框，支持不确定态。
  Props: `label`, `checked`, `indeterminate`, `color`, `disabled`.
- **Radio** `components/Radio` — 单选按钮。
  Props: `label`, `value`, `checked`, `color`, `disabled`.
- **Switch** `components/Switch` — 开关切换。
  Props: `checked`, `size` (`'sm'|'md'`), `color`, `label`, `disabled`.
- **Slider** `components/Slider` — 滑块，单值/范围/刻度。
  Props: `value`, `min`, `max`, `step`, `range`, `marks`, `disabled`.
- **DatePicker** `components/DatePicker` — 日期选择，支持范围。
  Props: `label`, `range`, `format` (default `'YYYY-MM-DD'`), `disableFuture`.
- **ColorPicker** `components/ColorPicker` — 颜色选择，含预设。
  Props: `value`, `presets`, `alpha`, `label`.
- **FileInput** `components/FileInput` — 文件上传，支持拖拽。
  Props: `label`, `accept`, `multiple`, `dragDrop`, `maxSize` (MB).
- **Autocomplete** `components/Autocomplete` — 自动完成，支持异步。
  Props: `options`, `multiple`, `async` (`(query)=>Promise<Option[]>`), `label`.
- **Rating** `components/Rating` — 评分，支持半星。
  Props: `value`, `max`, `precision`, `icon`, `readonly`.
- **FormControl** `components/FormControl` — 表单控件容器（标签/错误上下文）。
  Props: `label`, `error`, `required`, `disabled`.
- **FormGroup** `components/FormGroup` — 表单分组容器。
  Props: `row`, `disabled`.
- **FormHelperText** `components/FormHelperText` — 帮助/错误文字。
  Props: `error`, `disabled`.

## Layout

- **Container** `components/Container` — 响应式居中容器。
  Props: `maxWidth` (`'xs'|'sm'|'md'|'lg'|'xl'`), `centered`, `fixed`.
- **Box** `components/Box` — 通用盒子，支持 flex/grid。
  Props: `display`, `gap`, `padding`, `className`.
- **Grid** `components/Grid` — 响应式网格。
  Props: `columns` (number | `{sm,md,lg}`), `gap`, `container`.
- **Paper** `components/Paper` — 纸张容器，背景+阴影。
  Props: `elevation` (0-5), `square`, `outlined`.

## Navigation

- **AppBar** `components/AppBar` — 应用顶栏。
  Props: `position` (`'fixed'|'absolute'|'sticky'|'static'`), `color`, `dense`, `title`.
- **Toolbar** `components/Toolbar` — 工具栏。
  Props: `variant` (`'regular'|'dense'`), `disableGutters`.
- **Menu** `components/Menu` — 菜单（下拉/右键）。
  Props: `anchorEl`, `open`, `onClose`, `placement`.
- **Tabs** `components/Tabs` — 选项卡。
  Props: `value`, `onChange`, `orientation`, `scrollable`, `variant` (`'standard'|'fullWidth'|'pills'`).
- **Breadcrumb** `components/Breadcrumb` — 面包屑导航。
  Props: `separator`, `maxItems`, `itemsAfterCollapse`.
- **Pagination** `components/Pagination` — 分页器。
  Props: `count`, `page`, `shape` (`'rounded'|'circular'`), `size`, `onChange`.

## Feedback

- **Alert** `components/Alert` — 警告提示条。
  Props: `severity` (`'info'|'success'|'warning'|'error'`), `variant` (`'filled'|'outlined'|'soft'`), `title`, `action`, `closable`.
- **Snackbar** `components/Snackbar` — 轻量消息条，自动消失。
  Props: `open`, `message`, `autoHideDuration`, `anchorOrigin`, `action`.
- **Modal** `components/Modal` — 模态对话框。
  Props: `open`, `onClose`, `size` (`'sm'|'md'|'lg'|'xl'`), `fullScreen`, `closeOnBackdrop`.
- **Tooltip** `components/Tooltip` — 工具提示。
  Props: `title`, `placement`, `arrow`, `delay`.
- **Spinner** `components/Spinner` — 小型加载指示器。
  Props: `size`, `color`, `thickness`.
- **CircularProgress** `components/CircularProgress` — 圆形进度条。
  Props: `value` (0-100, omit for indeterminate), `size`, `thickness`, `color`.
- **Progress** `components/Progress` — 线性进度条。
  Props: `value`, `variant` (`'determinate'|'indeterminate'|'buffer'`), `bufferValue`, `color`.
- **Skeleton** `components/Skeleton` — 骨架屏占位。
  Props: `variant` (`'text'|'rectangular'|'circular'`), `width`, `height`, `animation` (`'pulse'|'wave'|false`).
- **Banner** `components/Banner` — 横幅提示。
  Props: `severity`, `icon`, `action`, `onClose`.

## Data Display

- **Typography** `components/Typography` — 排版。
  Props: `variant` (`'h1'..'h6'|'body1'|'caption'|...`), `color`, `align`, `gutterBottom`.
- **List** `components/List` — 列表容器。
  Props: `dense`, `disablePadding`, `ordered`.
- **ListItem** `components/ListItem` — 列表项。
  Props: `alignItems`, `divider`, `button`, `selected`.
- **ListItemText** `components/ListItemText` — 列表项文本。
  Props: `primary`, `secondary`, `disableTypography`.
- **ListItemIcon** `components/ListItemIcon` — 列表项图标容器。
  Props: `alignItems`.
- **Table** `components/Table` — 数据表格。
  Props: `striped` (default true), `hoverable` (default true), `dense`, `sortable`.
- **Avatar** `components/Avatar` — 头像。
  Props: `src`, `alt`, `size`, `shape` (`'circle'|'rounded'|'square'`), `badge`.
- **Chip** `components/Chip` — 标签芯片。
  Props: `label`, `color`, `variant` (`'filled'|'outlined'|'soft'`), `deletable`, `avatar`.
- **Card** `components/Card` — 卡片容器。
  Props: `elevation` (0-5), `outlined`, `interactive`.
- **Badge** `components/Badge` — 徽章。
  Props: `content`, `color`, `variant` (`'dot'|'standard'`), `max`, `showZero`.
- **Accordion** `components/Accordion` — 手风琴面板。
  Props: `expanded`, `disabled`, `disableGutters`, `onChange`.
- **Divider** `components/Divider` — 分割线。
  Props: `orientation`, `variant`, `textAlign`.
- **Blockquote** `components/Blockquote` — 引用块。
  Props: `cite`, `accent`.
- **Copy** `components/Copy` — 一键复制按钮。
  Props: `text`, `feedback`, `timeout`.
- **Status** `components/Status` — 状态指示器。
  Props: `color` (`'success'|'warning'|'error'|'neutral'`), `pulse`, `label`.
- **PricingTable** `components/PricingTable` — 价格表。
  Props: `title`, `price`, `features`, `highlighted`, `popular`.

## Overlay

- **Popover** `components/Popover` — 弹出浮层。
  Props: `open`, `anchorEl`, `placement`, `arrow`.
- **HoverCard** `components/HoverCard` — 悬停卡片。
  Props: `trigger`, `content`, `openDelay`, `closeDelay`.
- **SlideOver** `components/SlideOver` — 侧边抽屉。
  Props: `open`, `position` (`'left'|'right'`), `size`, `onClose`.

## Advanced

- **ImageGallery** `components/ImageGallery` — 图片画廊（灯箱）。
  Props: `images`, `thumbnails`, `lightbox`, `columns`.
- **VideoPlayer** `components/VideoPlayer` — 视频播放器。
  Props: `src`, `poster`, `controls`, `autoplay`.
- **Watermark** `components/Watermark` — 水印。
  Props: `content`, `image`, `rotate`, `opacity`.
- **NumberAnimation** `components/NumberAnimation` — 数字滚动动画。
  Props: `value`, `duration`, `prefix`, `suffix`, `separator`.
- **TypingText** `components/TypingText` — 打字机文本。
  Props: `text`, `speed`, `loop`, `cursor`.
- **Feature** `components/Feature` — 特性展示卡片。
  Props: `icon`, `title`, `description`, `direction`.
- **Feed** `components/Feed` — 信息流容器。
  Props: `items`, `loading`, `hasMore`, `onLoadMore`.

## Notes

- Deep imports (`@zeturn/watercolor-react/components/<Name>`) improve tree-shaking when only a few components are used.
- Icon packs are separate packages; import icons from the installed `@zeturn/watercolor-icons-*` package and pass them as `startIcon` / `endIcon` / `icon` props.
- For Vue 3, use `@zeturn/watercolor-vue` with the equivalent component names and the same category structure.
- For Next.js (App Router), use `@zeturn/watercolor-next` — it mirrors the React catalog above (same component names/props) and adds the RSC `"use client"` boundary automatically.
