import React, { useState } from 'react'
import Button from '@/components/Button/Button.jsx'
import SlideOver from '@/components/SlideOver/SlideOver.jsx'
import './SlideOver.stories.css'

export default {
  title: 'Components/SlideOver (React)',
  component: SlideOver,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Watercolor 侧边滑出面板组件。Story 使用真实 Watercolor 样式，不依赖 Tailwind。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: { description: '是否显示', control: { type: 'boolean' } },
    placement: { description: '滑出位置', control: { type: 'select' }, options: ['left', 'right'] },
    width: { description: '面板宽度', control: { type: 'text' } },
    onClose: { action: 'close', description: '关闭时触发' },
  },
}

function SlideOverStoryShell({ eyebrow = 'Watercolor overlay', title, description, children }) {
  return (
    <main className="wc-slideover-story">
      <section className="wc-slideover-story__shell">
        <p className="wc-slideover-story__eyebrow">{eyebrow}</p>
        <h1 className="wc-slideover-story__title">{title}</h1>
        <p className="wc-slideover-story__description">{description}</p>
        {children}
      </section>
    </main>
  )
}

function PanelContent({ title = '项目设置', onClose }) {
  return (
    <div className="wc-slideover-demo">
      <header className="wc-slideover-demo__header">
        <p className="wc-slideover-demo__eyebrow">Workspace</p>
        <h2>{title}</h2>
        <p>侧边面板用于承载临时上下文：设置、详情、筛选器或轻量表单。</p>
      </header>

      <div className="wc-slideover-demo__section">
        <h3>面板节奏</h3>
        <div className="wc-slideover-demo__list">
          <div className="wc-slideover-demo__row">
            <span>默认位置</span>
            <strong>右侧</strong>
          </div>
          <div className="wc-slideover-demo__row">
            <span>宽度</span>
            <strong>400px</strong>
          </div>
          <div className="wc-slideover-demo__row">
            <span>关闭策略</span>
            <strong>Escape / 遮罩</strong>
          </div>
        </div>
      </div>

      <footer className="wc-slideover-demo__footer">
        <Button variant="secondary" onClick={onClose}>取消</Button>
        <Button onClick={onClose}>完成</Button>
      </footer>
    </div>
  )
}

export const Basic = {
  args: {
    placement: 'right',
    width: '400px',
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <SlideOverStoryShell
        title="SlideOver"
        description="默认触发器和面板内容都使用 Watercolor 的克制、无边框风格。"
      >
        <Button onClick={() => setOpen(true)}>打开面板</Button>
        <SlideOver
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
            args.onClose?.()
          }}
        >
          <PanelContent onClose={() => setOpen(false)} />
        </SlideOver>
      </SlideOverStoryShell>
    )
  },
}

export const Placements = () => {
  const [panel, setPanel] = useState(null)

  return (
    <SlideOverStoryShell
      title="Placement"
      description="左右两侧使用同一套浮层内核和视觉结构。"
    >
      <div className="wc-slideover-story__actions">
        <Button variant="secondary" onClick={() => setPanel('left')}>从左侧滑出</Button>
        <Button onClick={() => setPanel('right')}>从右侧滑出</Button>
      </div>

      <SlideOver open={panel === 'left'} placement="left" width="360px" onClose={() => setPanel(null)}>
        <PanelContent title="左侧导航" onClose={() => setPanel(null)} />
      </SlideOver>
      <SlideOver open={panel === 'right'} placement="right" width="420px" onClose={() => setPanel(null)}>
        <PanelContent title="右侧设置" onClose={() => setPanel(null)} />
      </SlideOver>
    </SlideOverStoryShell>
  )
}

export const Widths = () => {
  const [activeWidth, setActiveWidth] = useState(null)
  const widths = [
    { label: '窄面板', value: '300px' },
    { label: '标准面板', value: '400px' },
    { label: '宽面板', value: '560px' },
  ]

  return (
    <SlideOverStoryShell
      title="Widths"
      description="宽度改变不应该改变面板内部的排版密度和按钮样式。"
    >
      <div className="wc-slideover-story__cards">
        {widths.map((item) => (
          <button
            key={item.value}
            className="wc-slideover-story__card"
            type="button"
            onClick={() => setActiveWidth(item)}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </button>
        ))}
      </div>

      {widths.map((item) => (
        <SlideOver
          key={item.value}
          open={activeWidth?.value === item.value}
          placement="right"
          width={item.value}
          onClose={() => setActiveWidth(null)}
        >
          <PanelContent title={item.label} onClose={() => setActiveWidth(null)} />
        </SlideOver>
      ))}
    </SlideOverStoryShell>
  )
}
