import React from 'react'
import Copy from '@/components/Copy/Copy.jsx'

export default {
  title: 'Components/Copy (React)',
  component: Copy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '要复制的文本',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'minimal'],
      description: '组件变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '组件大小',
    },
    showLabel: {
      control: 'boolean',
      description: '是否显示标签',
    },
    showTooltip: {
      control: 'boolean',
      description: '是否显示提示信息',
    },
    copyLabel: {
      control: 'text',
      description: '复制按钮标签',
    },
    copiedLabel: {
      control: 'text',
      description: '复制成功标签',
    },
    tooltipSuccess: {
      control: 'text',
      description: '成功提示信息',
    },
    tooltipError: {
      control: 'text',
      description: '错误提示信息',
    },
    resetDelay: {
      control: { type: 'number' },
      description: '重置延迟时间(毫秒)',
    },
    onCopy: { action: 'copy' },
    onError: { action: 'error' },
  },
}

export const Default = {
  args: {
    text: 'npm install watercolor-ui',
    variant: 'default',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制',
    copiedLabel: '已复制',
    tooltipSuccess: '复制成功!',
    tooltipError: '复制失败',
    resetDelay: 2000,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Copy {...args} />
    </div>
  ),
}

export const CodeSnippet = {
  args: {
    text: 'import { Copy } from "watercolor-ui"\\n\\n<Copy text="Hello World" />',
    variant: 'outlined',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制代码',
    copiedLabel: '已复制',
    tooltipSuccess: '代码已复制到剪贴板!',
    tooltipError: '复制失败',
    resetDelay: 2000,
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
        <pre className="whitespace-pre-wrap">{args.text}</pre>
        <div className="flex justify-end mt-2">
          <Copy {...args} />
        </div>
      </div>
    </div>
  ),
}

export const URL = {
  args: {
    text: 'https://watercolor-ui.vercel.app/docs/components/copy',
    variant: 'filled',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制链接',
    copiedLabel: '已复制',
    tooltipSuccess: '链接已复制!',
    tooltipError: '复制失败',
    resetDelay: 2000,
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Copy {...args} />
    </div>
  ),
}

export const Minimal = {
  args: {
    text: '2A3F-7B9C-1D5E-8F6A',
    variant: 'minimal',
    size: 'sm',
    showLabel: false,
    showTooltip: true,
    copyLabel: '复制',
    copiedLabel: '已复制',
    tooltipSuccess: '激活码已复制!',
    tooltipError: '复制失败',
    resetDelay: 1500,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex justify-between items-center">
          <span className="font-mono text-gray-700">{args.text}</span>
          <Copy {...args} />
        </div>
      </div>
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-3">默认样式</h3>
        <Copy text="npm install watercolor-ui" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">边框样式</h3>
        <Copy text="npm install watercolor-ui" variant="outlined" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">填充样式</h3>
        <Copy text="npm install watercolor-ui" variant="filled" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">简约样式</h3>
        <div className="flex items-center gap-2">
          <span>简约版</span>
          <Copy text="简约版" variant="minimal" showLabel={false} />
        </div>
      </div>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-2">小尺寸 (sm)</h3>
        <Copy text="https://example.com/small" size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">中等尺寸 (md)</h3>
        <Copy text="https://example.com/medium" size="md" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">大尺寸 (lg)</h3>
        <Copy text="https://example.com/large" size="lg" />
      </div>
    </div>
  ),
}

export const CustomIcons = {
  render: () => (
    <div className="w-96">
      <Copy 
        text="自定义图标"
        copyIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.024 2.533a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h8zM2.524 1H10.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 13.5v-11A1.5 1.5 0 012.5 1h.024z"/></svg>}
        copiedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L5.5 9.293l4.646-4.647a.5.5 0 01.708 0z"/></svg>}
      />
    </div>
  )
}

export const CustomContent = {
  render: () => (
    <div className="w-96">
      <Copy text="自定义内容">
        {(isCopied, copy) => (
          <button 
            onClick={copy} 
            className="w-full text-left p-4 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-all"
          >
            <p className="font-bold">点击这里复制</p>
            <p className="text-sm opacity-80">
              {isCopied ? '太棒了，已经复制好了！' : '将 "自定义内容" 复制到剪贴板'}
            </p>
          </button>
        )}
      </Copy>
    </div>
  )
}

export const LongText = {
  render: () => (
    <div className="w-96">
      <Copy 
        text="这是一段非常非常长的文本，它可能会超出容器的宽度，我们需要测试一下它在UI上的显示效果是否正常，是否会正确地换行或者截断。"
        variant="filled"
      />
    </div>
  )
}
