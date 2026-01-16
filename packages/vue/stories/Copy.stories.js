import CopyVue from '../src/components/Copy/Copy.vue'

export default {
  title: 'Components/Copy (Vue)',
  component: CopyVue,
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
  render: (args) => ({
    components: { CopyVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <CopyVue 
          :text="args.text"
          :variant="args.variant"
          :size="args.size"
          :show-label="args.showLabel"
          :show-tooltip="args.showTooltip"
          :copy-label="args.copyLabel"
          :copied-label="args.copiedLabel"
          :tooltip-success="args.tooltipSuccess"
          :tooltip-error="args.tooltipError"
          :reset-delay="args.resetDelay"
          @copy="args.onCopy"
          @error="args.onError"
        />
      </div>
    `,
  }),
}

export const CodeSnippet = {
  args: {
    text: 'import { Copy } from "watercolor-ui"\n\n<Copy text="Hello World" />',
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
  render: (args) => ({
    components: { CopyVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-lg">
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
          <pre class="whitespace-pre-wrap">{{ args.text }}</pre>
          <div class="flex justify-end mt-2">
            <CopyVue 
              :text="args.text"
              :variant="args.variant"
              :size="args.size"
              :show-label="args.showLabel"
              :show-tooltip="args.showTooltip"
              :copy-label="args.copyLabel"
              :copied-label="args.copiedLabel"
              :tooltip-success="args.tooltipSuccess"
              :tooltip-error="args.tooltipError"
              :reset-delay="args.resetDelay"
              @copy="args.onCopy"
              @error="args.onError"
            />
          </div>
        </div>
      </div>
    `,
  }),
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
  render: (args) => ({
    components: { CopyVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-lg">
        <CopyVue 
          :text="args.text"
          :variant="args.variant"
          :size="args.size"
          :show-label="args.showLabel"
          :show-tooltip="args.showTooltip"
          :copy-label="args.copyLabel"
          :copied-label="args.copiedLabel"
          :tooltip-success="args.tooltipSuccess"
          :tooltip-error="args.tooltipError"
          :reset-delay="args.resetDelay"
          @copy="args.onCopy"
          @error="args.onError"
        />
      </div>
    `,
  }),
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
  render: (args) => ({
    components: { CopyVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="text-sm text-gray-600 mb-2">激活码</div>
          <div class="flex items-center justify-between">
            <span class="font-mono text-lg">{{ args.text }}</span>
            <CopyVue 
              :text="args.text"
              :variant="args.variant"
              :size="args.size"
              :show-label="args.showLabel"
              :show-tooltip="args.showTooltip"
              :copy-label="args.copyLabel"
              :copied-label="args.copiedLabel"
              :tooltip-success="args.tooltipSuccess"
              :tooltip-error="args.tooltipError"
              :reset-delay="args.resetDelay"
              @copy="args.onCopy"
              @error="args.onError"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { CopyVue },
    setup() {
      const text = 'Hello World!'
      return { text }
    },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">小尺寸</h3>
          <CopyVue :text="text" size="sm" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">中等尺寸</h3>
          <CopyVue :text="text" size="md" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">大尺寸</h3>
          <CopyVue :text="text" size="lg" />
        </div>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { CopyVue },
    setup() {
      const text = 'Watercolor UI'
      return { text }
    },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">默认样式</h3>
          <CopyVue :text="text" variant="default" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">边框样式</h3>
          <CopyVue :text="text" variant="outlined" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">填充样式</h3>
          <CopyVue :text="text" variant="filled" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">简洁样式</h3>
          <CopyVue :text="text" variant="minimal" />
        </div>
      </div>
    `,
  }),
}

export const WithoutTooltip = {
  args: {
    text: 'Hello World!',
    variant: 'default',
    size: 'md',
    showLabel: true,
    showTooltip: false,
    copyLabel: '复制',
    copiedLabel: '已复制',
    resetDelay: 2000,
  },
  render: (args) => ({
    components: { CopyVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <CopyVue 
          :text="args.text"
          :variant="args.variant"
          :size="args.size"
          :show-label="args.showLabel"
          :show-tooltip="args.showTooltip"
          :copy-label="args.copyLabel"
          :copied-label="args.copiedLabel"
          :reset-delay="args.resetDelay"
          @copy="args.onCopy"
          @error="args.onError"
        />
      </div>
    `,
  }),
}

export const CustomContent = {
  render: () => ({
    components: { CopyVue },
    setup() {
      const apiKey = 'sk-1234567890abcdef'
      return { apiKey }
    },
    template: `
      <div class="w-full max-w-lg">
        <div class="border rounded-lg p-4">
          <h3 class="font-medium mb-2">API 密钥</h3>
          <CopyVue :text="apiKey" variant="outlined" size="md">
            <template #content>
              <div class="flex items-center">
                <span class="text-xs text-gray-500 mr-2">🔑</span>
                <span class="font-mono">{{ apiKey }}</span>
              </div>
            </template>
          </CopyVue>
          <p class="text-xs text-gray-500 mt-2">请妥善保管您的API密钥</p>
        </div>
      </div>
    `,
  }),
}

export const InTable = {
  render: () => ({
    components: { CopyVue },
    setup() {
      const data = [
        { id: '1001', email: 'user@example.com', status: '活跃' },
        { id: '1002', email: 'admin@example.com', status: '待激活' },
        { id: '1003', email: 'test@example.com', status: '已停用' }
      ]
      return { data }
    },
    template: `
      <div class="w-full max-w-2xl">
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-50">
              <th class="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th class="border border-gray-300 px-4 py-2 text-left">邮箱</th>
              <th class="border border-gray-300 px-4 py-2 text-left">状态</th>
              <th class="border border-gray-300 px-4 py-2 text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ item.email }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ item.status }}</td>
              <td class="border border-gray-300 px-4 py-2">
                <CopyVue 
                  :text="item.email" 
                  variant="minimal" 
                  size="sm" 
                  :show-label="false"
                  copy-label="复制邮箱"
                  tooltip-success="邮箱已复制!"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
} 