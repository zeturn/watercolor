import { useState, useEffect } from 'react'
import {
  Button, TextField, Select, Checkbox, Radio, RadioGroup,
  Switch, Slider, Chip, Avatar, Badge, Alert, Card, CardContent, CardActions,
  Modal, Tabs, Menu, Breadcrumb, Pagination, Snackbar, AppBar, Toolbar, Paper,
  Box, Grid, Container, Accordion, Blockquote, Copy, Status,
  PricingTable, Popover, SlideOver, ImageGallery, VideoPlayer, Watermark,
  NumberAnimation, TypingText, Feature, Feed, FormControl, FormGroup,
  FormHelperText, Skeleton, ColorPicker, DatePicker, FileInput, Autocomplete,
  List, ListItem, ListItemText, ListItemIcon, Rating, Progress, CircularProgress,
  Tooltip, Typography,
} from '@zeturn/watercolor-react'

/* 内联 SVG 图标，直接作为 Watercolor 组件的 icon / startIcon 节点 */
const I = {
  plus: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>,
  search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  heart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" /></svg>,
  edit: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
  delete: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" /></svg>,
  home: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3v-6h4v6h3a1 1 0 001-1V10" /></svg>,
  user: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" /></svg>,
  close: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>,
  menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></svg>,
  doc: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>,
  image: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 15l-5-5L5 21" /></svg>,
  star: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z" /></svg>,
}

export default function ComponentPreview({ componentId }) {
  const demos = {
    button: <ButtonDemo />,
    fab: <FabDemo />,
    iconbutton: <IconButtonDemo />,
    textfield: <TextFieldDemo />,
    select: <SelectDemo />,
    checkbox: <CheckboxDemo />,
    radio: <RadioDemo />,
    switch: <SwitchDemo />,
    slider: <SliderDemo />,
    datepicker: <DatePickerDemo />,
    colorpicker: <ColorPickerDemo />,
    fileinput: <FileInputDemo />,
    autocomplete: <AutocompleteDemo />,
    rating: <RatingDemo />,
    formcontrol: <FormControlDemo />,
    formgroup: <FormGroupDemo />,
    formhelpertext: <FormHelperTextDemo />,
    container: <ContainerDemo />,
    box: <BoxDemo />,
    grid: <GridDemo />,
    paper: <PaperDemo />,
    appbar: <AppBarDemo />,
    toolbar: <ToolbarDemo />,
    menu: <MenuDemo />,
    tabs: <TabsDemo />,
    breadcrumb: <BreadcrumbDemo />,
    pagination: <PaginationDemo />,
    alert: <AlertDemo />,
    snackbar: <SnackbarDemo />,
    modal: <ModalDemo />,
    tooltip: <TooltipDemo />,
    spinner: <SpinnerDemo />,
    circularprogress: <CircularProgressDemo />,
    progress: <ProgressDemo />,
    skeleton: <SkeletonDemo />,
    banner: <BannerDemo />,
    typography: <TypographyDemo />,
    list: <ListDemo />,
    listitem: <ListItemDemo />,
    listitemtext: <ListItemTextDemo />,
    listitemicon: <ListItemIconDemo />,
    table: <TableDemo />,
    avatar: <AvatarDemo />,
    chip: <ChipDemo />,
    card: <CardDemo />,
    badge: <BadgeDemo />,
    accordion: <AccordionDemo />,
    divider: <DividerDemo />,
    blockquote: <BlockquoteDemo />,
    copy: <CopyDemo />,
    status: <StatusDemo />,
    pricingtable: <PricingTableDemo />,
    popover: <PopoverDemo />,
    hovercard: <HoverCardDemo />,
    slideover: <SlideOverDemo />,
    imagegallery: <ImageGalleryDemo />,
    videoplayer: <VideoPlayerDemo />,
    watermark: <WatermarkDemo />,
    numberanimation: <NumberAnimationDemo />,
    typingtext: <TypingTextDemo />,
    feature: <FeatureDemo />,
    feed: <FeedDemo />,
  }

  return demos[componentId] || <GenericDemo />
}

/* ===================== 各组件 Demo（真实 Watercolor 组件） ===================== */

function ButtonDemo() {
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        <Button variant="primary">Filled</Button>
        <Button variant="primary" buttonStyle="outlined">Outlined</Button>
        <Button variant="primary" buttonStyle="text">Text</Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        <Button size="sm" variant="primary">Small</Button>
        <Button variant="secondary">Medium</Button>
        <Button size="lg" variant="accent">Large</Button>
      </div>
      <Button
        variant="primary"
        loading={loading}
        startIcon={I.plus}
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}
      >
        {loading ? 'Loading...' : 'Click to load'}
      </Button>
    </div>
  )
}

function FabDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', justifyContent: 'center' }}>
      {/* 圆形 FAB — 原生 button（Fab 组件 icon 属性只接受 HTML 字符串，不接受 React 节点） */}
      <button
        aria-label="add"
        style={{
          width: 56, height: 56, borderRadius: '50%', border: 'none',
          background: 'var(--wc-color-primary, #3b82f6)', color: '#fff',
          cursor: 'pointer', boxShadow: '0 4px 12px rgba(59,130,246,.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .15s, box-shadow .15s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
      >{I.plus}</button>
      {/* 扩展 FAB */}
      <button
        aria-label="create"
        style={{
          height: 48, borderRadius: 24, border: 'none', padding: '0 24px 0 20px',
          background: 'var(--wc-color-primary, #3b82f6)', color: '#fff',
          cursor: 'pointer', fontWeight: 600, fontSize: 14,
          boxShadow: '0 4px 12px rgba(59,130,246,.35)',
          display: 'flex', alignItems: 'center', gap: 8,
          transition: 'transform .15s, box-shadow .15s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
      >
        <span style={{ display: 'flex' }}>{I.plus}</span>
        Create
      </button>
    </div>
  )
}

function IconButtonDemo() {
  /* IconButton 组件的 icon 属性只接受 HTML 字符串，不接受 React 节点，回退原生按钮 */
  const btnStyle = (color = 'var(--wc-color-primary, #3b82f6)') => ({
    width: 40, height: 40, borderRadius: '50%', border: `1.5px solid ${color}33`,
    background: `${color}10`, color, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background .2s',
  })
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
      <button aria-label="menu" style={btnStyle()} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59,130,246,.18)'} onMouseLeave={(e) => e.currentTarget.style.background = ''}>{I.menu}</button>
      <button aria-label="search" style={btnStyle()} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59,130,246,.18)'} onMouseLeave={(e) => e.currentTarget.style.background = ''}>{I.search}</button>
      <button aria-label="like" style={btnStyle('#ef4444')} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239,68,68,.18)'} onMouseLeave={(e) => e.currentTarget.style.background = ''}>{I.heart}</button>
    </div>
  )
}

function TextFieldDemo() {
  const [value, setValue] = useState('')
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TextField
        label="标签 Label"
        placeholder="请输入内容..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="帮助文字 helper text"
      />
      <TextField
        label="错误状态"
        defaultValue="无效输入"
        error="请输入有效内容"
      />
      <TextField
        label="多行文本"
        multiline
        rows={3}
        placeholder="多行输入..."
      />
    </div>
  )
}

function SelectDemo() {
  const [val, setVal] = useState('')
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Select
        label="选择一个选项"
        placeholder="请选择"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        options={[
          { value: '1', label: '选项一' },
          { value: '2', label: '选项二' },
          { value: '3', label: '选项三' },
        ]}
      />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['Vue', 'React', 'Svelte', 'Angular'].map((t) => (
          <Chip
            key={t}
            label={t}
            color={val === t ? 'primary' : 'default'}
            variant={val === t ? 'filled' : 'outlined'}
            onClick={() => setVal(t)}
          />
        ))}
      </div>
    </div>
  )
}

function CheckboxDemo() {
  const [checks, setChecks] = useState({ a: true, b: false, c: false })
  const toggle = (k) => setChecks((p) => ({ ...p, [k]: !p[k] }))
  const fruits = ['Apple', 'Banana', 'Cherry']
  const keys = ['a', 'b', 'c']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {fruits.map((f, i) => (
        <Checkbox
          key={f}
          checked={checks[keys[i]]}
          onChange={(e) => toggle(keys[i])}
          label={f}
        />
      ))}
    </div>
  )
}

function RadioDemo() {
  const [val, setVal] = useState('a')
  const opts = [
    { k: 'a', l: 'Option A' },
    { k: 'b', l: 'Option B' },
    { k: 'c', l: 'Option C' },
  ]
  return (
    <RadioGroup value={val} onChange={(v) => setVal(v)}>
      {opts.map((o) => (
        <Radio key={o.k} value={o.k} label={o.l} />
      ))}
    </RadioGroup>
  )
}

function SwitchDemo() {
  const [on, setOn] = useState(true)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch checked={on} onChange={(c) => setOn(c)} label="开启通知" />
      <Switch checked={!on} onChange={(c) => setOn(!c)} label="深色模式" color="secondary" />
    </div>
  )
}

function SliderDemo() {
  const [val, setVal] = useState(60)
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Slider value={val} min={0} max={100} label="音量" valueLabelDisplay="on" onChange={(v) => setVal(v)} />
      <Slider defaultValue={40} min={0} max={100} color="secondary" label="亮度" valueLabelDisplay="on" />
    </div>
  )
}

function DatePickerDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <DatePicker placeholder="选择日期" onChange={(d) => console.log(d)} />
    </div>
  )
}

function ColorPickerDemo() {
  const [color, setColor] = useState('#3b82f6')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <ColorPicker value={color} onChange={setColor} />
      <span style={{ fontFamily: 'monospace' }}>{color}</span>
    </div>
  )
}

function FileInputDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <FileInput label="选择文件" accept="image/*" onChange={(files) => console.log(files)} />
    </div>
  )
}

function AutocompleteDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <Autocomplete
        label="搜索水果"
        placeholder="输入以搜索..."
        options={[
          { value: 'Apple', label: 'Apple' },
          { value: 'Apricot', label: 'Apricot' },
          { value: 'Banana', label: 'Banana' },
          { value: 'Blueberry', label: 'Blueberry' },
          { value: 'Cherry', label: 'Cherry' },
        ]}
      />
    </div>
  )
}

function RatingDemo() {
  const [val, setVal] = useState(3)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Rating value={val} max={5} onChange={(v) => setVal(v)} />
      <span style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>{val}/5</span>
    </div>
  )
}

function FormControlDemo() {
  return (
    <FormControl required fullWidth style={{ maxWidth: 360 }}>
      <TextField label="邮箱地址" placeholder="your@email.com" />
      <FormHelperText>我们不会分享你的邮箱地址</FormHelperText>
    </FormControl>
  )
}

function FormGroupDemo() {
  return (
    <FormGroup style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox defaultChecked label="接收邮件通知" />
      <Checkbox label="接收短信通知" />
      <Checkbox label="接收推送通知" />
    </FormGroup>
  )
}

function FormHelperTextDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 360 }}>
      <FormHelperText>这是正常的帮助文字</FormHelperText>
      <FormHelperText error>这是错误提示文字</FormHelperText>
    </div>
  )
}

function ContainerDemo() {
  return (
    <div style={{ width: '100%' }}>
      <Container maxWidth="md">
        <div style={{ background: 'var(--wc-accent-subtle, #eff6ff)', border: '1px solid var(--wc-border-default, #e5e7eb)', borderRadius: 12, padding: 24, textAlign: 'center' }}>
          Container (max-width: md)
        </div>
      </Container>
    </div>
  )
}

function BoxDemo() {
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Box p={3} borderRadius="12px" style={{ background: 'var(--wc-color-primary, #6366f1)' }}>Box 1</Box>
      <Box p={3} borderRadius="12px" style={{ background: 'var(--wc-color-secondary, #8b5cf6)' }}>Box 2</Box>
      <Box p={3} borderRadius="12px" style={{ background: 'var(--wc-color-accent, #06b6d4)' }}>Box 3</Box>
    </div>
  )
}

function GridDemo() {
  return (
    <Grid container spacing={2} style={{ width: '100%' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Grid item xs={6} md={3} key={n}>
          <div style={{ background: 'var(--wc-surface-raised, #f3f4f6)', borderRadius: 12, padding: 16, textAlign: 'center' }}>{n}</div>
        </Grid>
      ))}
    </Grid>
  )
}

function PaperDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
      <Paper elevation={1} style={{ padding: 24 }}>elevation 1</Paper>
      <Paper elevation={3} style={{ padding: 24 }}>elevation 3</Paper>
      <Paper elevation={5} style={{ padding: 24 }}>elevation 5</Paper>
    </div>
  )
}

function AppBarDemo() {
  return (
    <AppBar color="primary" style={{ borderRadius: 12, overflow: 'hidden' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 700 }}>Watercolor</Typography>
        <Button buttonStyle="text" color="inherit">Home</Button>
        <Button buttonStyle="text" color="inherit">Docs</Button>
      </Toolbar>
    </AppBar>
  )
}

function ToolbarDemo() {
  /* Toolbar 中的 IconButton 同样有 icon 属性 bug，回退原生按钮 */
  const iconBtn = (icon, label) => (
    <button
      aria-label={label}
      style={{
        width: 36, height: 36, borderRadius: 8, border: 'none',
        background: 'transparent', color: 'var(--wc-text-secondary,#6b7280)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .15s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--wc-state-hover-bg, rgba(0,0,0,.05))'}
      onMouseLeave={(e) => e.currentTarget.style.background = ''}
    >{icon}</button>
  )
  return (
    <Paper variant="outlined" style={{ width: '100%', padding: 4 }}>
      <Toolbar>
        {iconBtn(I.edit, 'edit')}
        {iconBtn(I.delete, 'delete')}
        <div style={{ flexGrow: 1 }} />
        <Button buttonStyle="text">Bold</Button>
        <Button buttonStyle="text">Italic</Button>
      </Toolbar>
    </Paper>
  )
}

function MenuDemo() {
  const [selected, setSelected] = useState('')
  return (
    <div style={{ textAlign: 'center' }}>
      <Menu
        triggerText="打开菜单"
        onSelect={(item) => setSelected(item.label)}
        items={[
          { key: '1', label: '个人资料', icon: I.user },
          { key: '2', label: '设置', icon: I.settings },
          { key: '3', label: '退出登录', icon: I.close, disabled: true },
        ]}
      />
      {selected && <p style={{ marginTop: 12, color: 'var(--wc-text-secondary, #6b7280)' }}>已选择：{selected}</p>}
    </div>
  )
}

function TabsDemo() {
  const [tab, setTab] = useState(0)
  const tabs = [{ title: '概览' }, { title: '分析' }, { title: '报告' }, { title: '设置' }]
  return (
    <div style={{ width: '100%' }}>
      <Tabs tabs={tabs} activeIndex={tab} onChange={(i) => setTab(i)} variant="underline" />
      <div style={{ marginTop: 16, padding: 16, border: '1px solid var(--wc-border-default, #e5e7eb)', borderRadius: 8 }}>
        {tabs[tab].title} 内容区域
      </div>
    </div>
  )
}

function BreadcrumbDemo() {
  return (
    <Breadcrumb
      items={[
        { label: '首页', href: '#' },
        { label: '组件库', href: '#' },
        { label: '当前页面', current: true },
      ]}
    />
  )
}

function PaginationDemo() {
  const [page, setPage] = useState(1)
  return <Pagination page={page} total={50} pageSize={10} onChange={(p) => setPage(p)} />
}

function AlertDemo() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert severity="info" message="这是一条信息提示" />
      <Alert severity="success" message="操作成功完成！" />
      <Alert severity="warning" message="请注意潜在的风险" />
      <Alert severity="error" message="发生错误，请重试" />
    </div>
  )
}

function SnackbarDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="primary" onClick={() => setOpen(true)}>显示消息</Button>
      <Snackbar
        open={open}
        message="已保存到草稿箱"
        severity="success"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

function ModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>打开对话框</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="你好！"
        footer={<Button buttonStyle="text" onClick={() => setOpen(false)}>关闭</Button>}
      >
        <p>这是一个模态对话框示例，点击遮罩或关闭按钮可关闭。</p>
      </Modal>
    </>
  )
}

function TooltipDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Tooltip text="顶部提示" placement="top"><Button size="sm">Top</Button></Tooltip>
      <Tooltip text="底部提示" placement="bottom"><Button size="sm">Bottom</Button></Tooltip>
      <Tooltip text="左侧提示" placement="left"><Button size="sm">Left</Button></Tooltip>
      <Tooltip text="右侧提示" placement="right"><Button size="sm">Right</Button></Tooltip>
    </div>
  )
}

function SpinnerDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <CircularProgress variant="indeterminate" size={24} color="primary" />
      <CircularProgress variant="indeterminate" size={36} color="secondary" />
      <CircularProgress variant="indeterminate" size={48} color="accent" />
    </div>
  )
}

function CircularProgressDemo() {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setVal((v) => (v >= 100 ? 0 : v + 5)), 200)
    return () => clearInterval(t)
  }, [])
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <CircularProgress value={val} size={56} showValue color="primary" />
      <CircularProgress variant="indeterminate" size={56} color="secondary" />
    </div>
  )
}

function ProgressDemo() {
  const [val, setVal] = useState(30)
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Progress value={val} color="primary" showPercent />
      <Progress value={60} color="secondary" showPercent />
      <Button size="sm" variant="primary" onClick={() => setVal((v) => (v >= 100 ? 0 : v + 10))}>增加进度</Button>
    </div>
  )
}

function SkeletonDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton variant="text" width="75%" />
          <Skeleton variant="text" width="50%" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={128} />
    </div>
  )
}

function BannerDemo() {
  return (
    <div style={{ width: '100%' }}>
      <Banner
        type="warning"
        title="试用即将到期"
        message="您的试用即将到期，请尽快升级以继续使用全部功能。"
        actions={<Button size="sm" variant="warning">升级</Button>}
      />
    </div>
  )
}

function TypographyDemo() {
  return (
    <div style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography variant="h1">Typography h1</Typography>
      <Typography variant="h3" style={{ color: 'var(--wc-color-primary, #6366f1)' }}>Typography h3 (primary)</Typography>
      <Typography variant="body1">这是一段正文文本，用于展示默认的正文排版样式。</Typography>
      <Typography variant="caption" style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>这是辅助说明文字 (caption)。</Typography>
    </div>
  )
}

function ListDemo() {
  return (
    <List style={{ width: '100%', maxWidth: 360 }}>
      <ListItem button>
        <ListItemIcon>{I.doc}</ListItemIcon>
        <ListItemText primary="文档.docx" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{I.image}</ListItemIcon>
        <ListItemText primary="图片.png" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{I.doc}</ListItemIcon>
        <ListItemText primary="报告.pdf" />
      </ListItem>
    </List>
  )
}

function ListItemDemo() {
  return (
    <List style={{ width: '100%', maxWidth: 360 }}>
      <ListItem button selected>
        <ListItemText primary="收件箱" />
        <Badge variant="primary" size="sm">12</Badge>
      </ListItem>
      <ListItem button>
        <ListItemText primary="已发送" />
        <Badge variant="default" size="sm">3</Badge>
      </ListItem>
      <ListItem disabled>
        <ListItemText primary="草稿箱" />
      </ListItem>
    </List>
  )
}

function ListItemTextDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ListItemText primary="主标题 Primary" secondary="这是副标题 secondary text" />
      <ListItemText primary="通知设置" secondary="管理你的通知偏好" />
    </div>
  )
}

function ListItemIconDemo() {
  return (
    <List style={{ width: '100%', maxWidth: 360 }}>
      <ListItem button>
        <ListItemIcon>{I.home}</ListItemIcon>
        <ListItemText primary="主页" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{I.user}</ListItemIcon>
        <ListItemText primary="个人资料" />
      </ListItem>
    </List>
  )
}

function TableDemo() {
  const rows = [
    { name: '张三', role: '管理员', status: '在线' },
    { name: '李四', role: '编辑', status: '离线' },
    { name: '王五', role: '访客', status: '忙碌' },
  ]
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell component="th">姓名</Table.Cell>
            <Table.Cell component="th">角色</Table.Cell>
            <Table.Cell component="th">状态</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((r) => (
            <Table.Row key={r.name}>
              <Table.Cell style={{ fontWeight: 500 }}>{r.name}</Table.Cell>
              <Table.Cell>{r.role}</Table.Cell>
              <Table.Cell>
                <Status status={r.status === '在线' ? 'success' : r.status === '忙碌' ? 'warning' : 'default'} showText text={r.status} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

function AvatarDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <Avatar variant="circular" size="md">WC</Avatar>
      <Avatar variant="circular" size="lg" src="https://api.dicebear.com/7.x/avataaars/svg?seed=watercolor" />
      <Avatar variant="circular" size="md" style={{ background: 'var(--wc-color-secondary, #8b5cf6)', color: '#fff' }}>AB</Avatar>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar size="sm" style={{ background: 'var(--wc-color-primary, #6366f1)', color: '#fff', border: '2px solid #fff' }}>U1</Avatar>
        <Avatar size="sm" style={{ background: 'var(--wc-color-secondary, #8b5cf6)', color: '#fff', border: '2px solid #fff', marginLeft: -12 }}>U2</Avatar>
        <Avatar size="sm" style={{ background: 'var(--wc-color-accent, #06b6d4)', color: '#fff', border: '2px solid #fff', marginLeft: -12 }}>+3</Avatar>
      </div>
    </div>
  )
}

function ChipDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="已完成" color="success" onDelete={() => {}} />
      <Chip label="待处理" color="warning" />
      <Chip label="React" variant="outlined" onDelete={() => {}} />
    </div>
  )
}

function CardDemo() {
  return (
    <Card title="水彩卡片" variant="elevated" style={{ width: 288 }}>
      <CardContent>
        <p style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>这是一个卡片组件的示例，包含标题、描述和操作按钮。</p>
      </CardContent>
      <CardActions>
        <Button size="sm" variant="primary">了解更多</Button>
      </CardActions>
    </Card>
  )
}

function BadgeDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Badge variant="secondary" size="sm">9</Badge>
      <Badge dot variant="success" />
      <Badge variant="warning" size="sm">New</Badge>
    </div>
  )
}

function AccordionDemo() {
  const items = [
    { key: '1', title: 'Watercolor 支持哪些框架？', content: '支持 Vue 3.5+ 和 React 18/19。' },
    { key: '2', title: '如何自定义主题？', content: '通过 ThemeProvider 或覆盖 CSS 变量即可轻松定制。' },
    { key: '3', title: '是否支持暗黑模式？', content: '内置完整的明暗模式支持。' },
  ]
  return <Accordion items={items} style={{ width: '100%', maxWidth: 420 }} />
}

function DividerDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p>上方内容</p>
      <hr style={{ border: 0, borderTop: '1px solid var(--wc-border-default, #e5e7eb)', margin: '8px 0' }} />
      <p>中间内容</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0', color: 'var(--wc-text-tertiary, #9ca3af)', fontSize: 12, letterSpacing: 2 }}>
        <span style={{ flex: 1, height: 1, background: 'var(--wc-border-default, #e5e7eb)' }} />
        WATERCOLOR
        <span style={{ flex: 1, height: 1, background: 'var(--wc-border-default, #e5e7eb)' }} />
      </div>
      <p>下方内容</p>
    </div>
  )
}

function BlockquoteDemo() {
  return (
    <Blockquote cite="Steve Jobs">
      “设计不是它看起来怎样，感觉如何。设计是它如何运作。”
    </Blockquote>
  )
}

function CopyDemo() {
  return <Copy text="npm install @zeturn/watercolor-react @zeturn/watercolor-core" label="复制安装命令" />
}

function StatusDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Status status="success" showText text="在线" />
      <Status status="warning" showText text="离开" />
      <Status status="error" showText text="离线" />
      <Status status="success" showText text="进行中" animated animationType="glow" />
    </div>
  )
}

function PricingTableDemo() {
  const plans = [
    { title: '免费版', price: '¥0', features: ['基础组件', '社区支持', '个人项目'], highlighted: false },
    { title: '专业版', price: '¥99', features: ['全部组件', '优先支持', '商业授权', '主题编辑器'], highlighted: true },
    { title: '团队版', price: '¥299', features: ['专业版全部', '团队协作', '定制组件', '专属客服'], highlighted: false },
  ]
  return <PricingTable plans={plans} style={{ width: '100%' }} />
}

function PopoverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ textAlign: 'center' }}>
      <Popover
        open={open}
        onOpenChange={setOpen}
        trigger={<Button variant="primary" onClick={() => setOpen((o) => !o)}>切换 Popover</Button>}
      >
        <div style={{ padding: 16, maxWidth: 240 }}>
          <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Popover 标题</h4>
          <p style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>这是 Popover 的内容区域，可承载任意富交互元素。</p>
        </div>
      </Popover>
    </div>
  )
}

function HoverCardDemo() {
  return (
    <HoverCard
      triggerText="悬停查看卡片"
      card={
        <div style={{ padding: 16, maxWidth: 240 }}>
          <strong>用户详细信息</strong>
          <p style={{ color: 'var(--wc-text-secondary, #6b7280)', marginTop: 4 }}>在这里展示用户头像、简介、操作等富内容。</p>
        </div>
      }
    />
  )
}

function SlideOverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>打开抽屉</Button>
      <SlideOver
        open={open}
        onClose={() => setOpen(false)}
        header="SlideOver"
        footer={<Button onClick={() => setOpen(false)}>关闭</Button>}
      >
        <p style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>这是一个从右侧滑出的抽屉面板示例。</p>
      </SlideOver>
    </>
  )
}

function ImageGalleryDemo() {
  const images = [
    { src: 'https://picsum.photos/seed/wc1/400/300', alt: '1', title: '图片 1' },
    { src: 'https://picsum.photos/seed/wc2/400/300', alt: '2', title: '图片 2' },
    { src: 'https://picsum.photos/seed/wc3/400/300', alt: '3', title: '图片 3' },
    { src: 'https://picsum.photos/seed/wc4/400/300', alt: '4', title: '图片 4' },
    { src: 'https://picsum.photos/seed/wc5/400/300', alt: '5', title: '图片 5' },
    { src: 'https://picsum.photos/seed/wc6/400/300', alt: '6', title: '图片 6' },
  ]
  return <ImageGallery images={images} layout="grid" style={{ width: '100%', maxWidth: 420 }} />
}

function VideoPlayerDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" controls poster="https://picsum.photos/seed/wcvideo/640/360" />
    </div>
  )
}

function WatermarkDemo() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 360, height: 128, borderRadius: 12, border: '1px solid var(--wc-border-default, #e5e7eb)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: 'var(--wc-text-secondary, #6b7280)' }}>文档内容预览</span>
      <Watermark content="WATERCOLOR UI" opacity={0.12} />
    </div>
  )
}

function NumberAnimationDemo() {
  return (
    <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--wc-color-primary, #6366f1)' }}>
      <NumberAnimation from={0} to={128} duration={2000} active suffix="+" />
    </div>
  )
}

function TypingTextDemo() {
  return (
    <div style={{ fontSize: 20, fontFamily: 'monospace' }}>
      <TypingText text="Build with Watercolor UI..." speed={100} loop />
    </div>
  )
}

function FeatureDemo() {
  const features = [
    { icon: <span style={{ fontSize: 28 }}>⚡</span>, title: '极速开发', desc: '预构建语义化组件' },
    { icon: <span style={{ fontSize: 28 }}>🎨</span>, title: '纯净样式', desc: '基于 CSS 变量主题' },
    { icon: <span style={{ fontSize: 28 }}>🌗</span>, title: '主题切换', desc: '内置明暗模式' },
  ]
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 520 }}>
      {features.map((f) => (
        <Feature key={f.title} icon={f.icon} title={f.title} description={f.desc} variant="card" style={{ flex: '1 1 140px' }} />
      ))}
    </div>
  )
}

function FeedDemo() {
  const items = [
    { title: 'Alice 发布了新组件', description: '2分钟前', avatar: 'A' },
    { title: 'Bob 更新了主题', description: '10分钟前', avatar: 'B' },
    { title: 'Carol 提交了 PR', description: '1小时前', avatar: 'C' },
  ]
  return <Feed items={items} style={{ width: '100%', maxWidth: 360 }} />
}

function GenericDemo() {
  return (
    <div style={{ textAlign: 'center', color: 'var(--wc-text-secondary, #6b7280)' }}>
      <div style={{ fontSize: 36, marginBottom: 8 }}>🎨</div>
      <p>该组件的实时预览正在建设中</p>
    </div>
  )
}
