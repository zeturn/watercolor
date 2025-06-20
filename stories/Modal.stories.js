import Modal from '../src/components/Modal/Modal.vue'
import Button from '../src/components/Button/Button.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的模态框组件，支持多种尺寸和配置。现已优化内边距，提供更好的内容展示效果。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: '模态框显示状态',
      control: { type: 'boolean' }
    },
    title: {
      description: '模态框标题',
      control: { type: 'text' }
    },
    size: {
      description: '模态框尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl']
    },
    closable: {
      description: '是否显示关闭按钮',
      control: { type: 'boolean' }
    },
    maskClosable: {
      description: '点击遮罩是否关闭',
      control: { type: 'boolean' }
    },
    centered: {
      description: '是否垂直居中',
      control: { type: 'boolean' }
    },
    'onUpdate:modelValue': { 
      action: 'update:modelValue',
      description: '显示状态更新时触发'
    },
    onClose: { 
      action: 'close',
      description: '关闭时触发'
    },
  }
}

export const Primary = {
  args: {
    title: '模态框标题',
    size: 'md',
    closable: true,
    maskClosable: true,
    centered: false
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const visible = ref(false)
      
      return { 
        args, 
        visible,
        openModal: () => {
          visible.value = true
        },
        onUpdateModelValue: (value) => {
          visible.value = value
          args['onUpdate:modelValue'](value)
        },
        onClose: () => {
          args.onClose()
        }
      }
    },
    template: `
      <div>
        <Button @click="openModal">打开模态框</Button>
        <Modal 
          v-model="visible" 
          :title="args.title"
          :size="args.size"
          :closable="args.closable"
          :maskClosable="args.maskClosable"
          :centered="args.centered"
          @update:modelValue="onUpdateModelValue"
          @close="onClose"
        >
          <p>这是模态框的内容。现在有了合适的内边距，内容显示更加舒适。</p>
          <p>您可以在右侧面板中调整模态框的各种属性来查看效果。</p>
        </Modal>
      </div>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      return {
        modals: ref({
          sm: false,
          md: false,
          lg: false,
          xl: false
        })
      }
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">不同尺寸的模态框</h3>
        <div class="flex gap-4">
          <Button @click="modals.sm = true">小尺寸 (sm)</Button>
          <Button @click="modals.md = true">中等尺寸 (md)</Button>
          <Button @click="modals.lg = true">大尺寸 (lg)</Button>
          <Button @click="modals.xl = true">超大尺寸 (xl)</Button>
        </div>
        
        <Modal v-model="modals.sm" title="小尺寸模态框" size="sm">
          <p>这是一个小尺寸的模态框，适合简单的确认对话或短消息。</p>
        </Modal>
        
        <Modal v-model="modals.md" title="中等尺寸模态框" size="md">
          <p>这是一个中等尺寸的模态框，适合大多数用例。</p>
          <p>包含适量的内容和操作按钮。</p>
        </Modal>
        
        <Modal v-model="modals.lg" title="大尺寸模态框" size="lg">
          <p>这是一个大尺寸的模态框，适合展示更多内容。</p>
          <p>可以包含表格、表单或其他复杂组件。</p>
          <div class="mt-4 p-4 bg-gray-50 rounded">
            <h4 class="mb-2">示例内容区域</h4>
            <p class="text-sm">这里可以放置任何你需要的内容。</p>
          </div>
        </Modal>
        
        <Modal v-model="modals.xl" title="超大尺寸模态框" size="xl">
          <p>这是一个超大尺寸的模态框，适合复杂的界面和大量内容。</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 bg-blue-50 rounded">
              <h4 class="mb-2">左侧内容</h4>
              <p class="text-sm">可以展示详细信息、图表或其他内容。</p>
            </div>
            <div class="p-4 bg-green-50 rounded">
              <h4 class="mb-2">右侧内容</h4>
              <p class="text-sm">支持复杂的布局和多列内容展示。</p>
            </div>
          </div>
        </Modal>
      </div>
    `
  })
}

export const WithFooter = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      return {
        visible: ref(false),
        openModal: () => {
          return (visible) => { visible.value = true }
        }
      }
    },
    template: `
      <div>
        <Button @click="visible = true">打开确认对话框</Button>
        <Modal v-model="visible" title="确认操作" size="sm">
          <p>您确定要删除这个项目吗？</p>
          <p class="text-sm text-gray-600">此操作不可撤销，请谨慎考虑。</p>
          
          <template #footer>
            <Button variant="secondary" @click="visible = false">取消</Button>
            <Button variant="error" @click="visible = false">确认删除</Button>
          </template>
        </Modal>
      </div>
    `
  })
}

export const CustomHeader = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      return {
        visible: ref(false)
      }
    },
    template: `
      <div>
        <Button @click="visible = true">自定义头部</Button>
        <Modal v-model="visible" size="md">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-green-600 text-lg">✓</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-green-800 m-0">操作成功</h3>
                <p class="text-sm text-gray-600 m-0">您的更改已保存</p>
              </div>
            </div>
          </template>
          
          <p>自定义头部让您可以创建更丰富的模态框体验。</p>
          <p>可以添加图标、状态指示器或其他视觉元素。</p>
          
          <template #footer>
            <Button @click="visible = false">知道了</Button>
          </template>
        </Modal>
      </div>
    `
  })
}

export const PaddingDemo = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      return {
        visible: ref(false)
      }
    },
    template: `
      <div>
        <Button @click="visible = true">查看内边距优化</Button>
        <Modal v-model="visible" title="内边距优化演示" size="md">
          <div class="space-y-4">
            <div class="p-4 border border-dashed border-gray-300 rounded">
              <h4 class="text-lg font-medium mb-2">优化后的内边距</h4>
              <p>现在模态框的内容区域有了合适的内边距（24px），让内容不会紧贴边缘。</p>
            </div>
            
            <div class="p-4 bg-blue-50 rounded">
              <h5 class="font-medium mb-2">改进内容：</h5>
              <ul class="text-sm space-y-1 list-disc list-inside">
                <li>body区域增加了24px的全方向内边距</li>
                <li>优化了header和footer的内边距分布</li>
                <li>改善了各部分之间的间距协调</li>
                <li>增加了最小高度，避免内容过少时的布局问题</li>
              </ul>
            </div>
            
            <div class="p-4 bg-gray-50 rounded">
              <p class="text-sm text-gray-700">
                这些改进让模态框的内容展示更加美观和舒适，符合现代界面设计标准。
              </p>
            </div>
          </div>
          
          <template #footer>
            <Button @click="visible = false">关闭</Button>
          </template>
        </Modal>
      </div>
    `
  })
}

export const ScrollableContent = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      return {
        visible: ref(false)
      }
    },
    template: `
      <div>
        <Button @click="visible = true">可滚动内容</Button>
        <Modal v-model="visible" title="长内容模态框" size="lg">
          <div class="space-y-4">
            <p><strong>这是一个包含大量内容的模态框，用于测试滚动和内边距。</strong></p>
            
            <div v-for="i in 10" :key="i" class="p-4 border rounded">
              <h4>内容块 {{ i }}</h4>
              <p>这是第{{ i }}个内容块。模态框会自动处理过长的内容，当内容超过90%的视口高度时会出现滚动条。内边距确保内容不会贴边显示。</p>
            </div>
            
            <div class="p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p class="text-sm">
                <strong>注意：</strong>即使内容很长，内边距依然保持一致，确保良好的阅读体验。
              </p>
            </div>
          </div>
          
          <template #footer>
            <Button variant="secondary" @click="visible = false">取消</Button>
            <Button @click="visible = false">确认</Button>
          </template>
        </Modal>
      </div>
    `
  })
} 