import Checkbox from '../src/components/Checkbox/Checkbox.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的复选框组件，完全兼容Material-UI的Checkbox API。支持单选、多选、不确定状态和多种颜色主题。'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: '复选框的值，可以是布尔值或数组',
      control: { type: 'boolean' }
    },
    value: {
      description: '当modelValue为数组时的项值',
      control: { type: 'text' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    indeterminate: {
      description: '是否显示不确定状态',
      control: { type: 'boolean' }
    },
    color: {
      description: '颜色主题',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info']
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    'onUpdate:modelValue': { 
      action: 'update:modelValue',
      description: '值更新时触发'
    },
    onChange: { 
      action: 'change',
      description: '值改变时触发'
    },
  },
  tags: ['autodocs']
}

export const Primary = {
  args: {
    label: '我同意条款和条件',
    color: 'primary',
    size: 'md',
    disabled: false
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      
      return { 
        args, 
        checked,
        onUpdateModelValue: (value) => {
          checked.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <div class="space-y-4">
        <Checkbox 
          v-model="checked"
          :label="args.label"
          :color="args.color"
          :size="args.size"
          :disabled="args.disabled"
          @update:modelValue="onUpdateModelValue"
          @change="onChange"
        />
        <p class="text-sm text-gray-500">当前状态: {{ checked ? '已选中' : '未选中' }}</p>
      </div>
    `,
  }),
}

export const Colors = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        checkboxes: ref({
          primary: true,
          secondary: true,
          success: true,
          error: true,
          warning: true,
          info: true
        })
      }
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">颜色主题</h3>
        <Checkbox 
          v-model="checkboxes.primary"
          label="Primary（默认）" 
          color="primary"
        />
        <Checkbox 
          v-model="checkboxes.secondary"
          label="Secondary" 
          color="secondary"
        />
        <Checkbox 
          v-model="checkboxes.success"
          label="Success" 
          color="success"
        />
        <Checkbox 
          v-model="checkboxes.error"
          label="Error" 
          color="error"
        />
        <Checkbox 
          v-model="checkboxes.warning"
          label="Warning" 
          color="warning"
        />
        <Checkbox 
          v-model="checkboxes.info"
          label="Info" 
          color="info"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示复选框的各种颜色主题。'
      }
    }
  }
}

export const Sizes = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        sizes: ref({
          sm: true,
          md: true,
          lg: true
        })
      }
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">尺寸对比</h3>
        <Checkbox 
          v-model="sizes.sm"
          label="小尺寸复选框" 
          size="sm"
        />
        <Checkbox 
          v-model="sizes.md"
          label="中等尺寸复选框" 
          size="md"
        />
        <Checkbox 
          v-model="sizes.lg"
          label="大尺寸复选框" 
          size="lg"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示复选框的三种尺寸。'
      }
    }
  }
}

export const States = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        unchecked: ref(false),
        checked: ref(true),
        indeterminate: ref(false),
        disabledUnchecked: ref(false),
        disabledChecked: ref(true)
      }
    },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">不同状态</h3>
        <Checkbox 
          v-model="unchecked"
          label="未选中状态" 
        />
        <Checkbox 
          v-model="checked"
          label="选中状态" 
        />
        <Checkbox 
          v-model="indeterminate"
          :indeterminate="true"
          label="不确定状态" 
        />
        <Checkbox 
          v-model="disabledUnchecked"
          :disabled="true"
          label="禁用未选中" 
        />
        <Checkbox 
          v-model="disabledChecked"
          :disabled="true"
          label="禁用已选中" 
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示复选框的各种状态：未选中、选中、不确定、禁用等。'
      }
    }
  }
}

export const WithoutLabel = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        checkbox1: ref(false),
        checkbox2: ref(true),
        checkbox3: ref(false)
      }
    },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold mb-4">无标签复选框</h3>
        <div class="flex items-center gap-4">
          <Checkbox v-model="checkbox1" />
          <Checkbox v-model="checkbox2" />
          <Checkbox v-model="checkbox3" indeterminate />
          <span class="ml-2 text-sm text-gray-600">无标签的复选框，适用于表格等紧凑场景</span>
        </div>
        
        <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded">
          <p class="text-sm">状态: [{{ checkbox1 }}, {{ checkbox2 }}, {{ checkbox3 }}]</p>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示不带标签的复选框，适用于表格等紧凑场景。'
      }
    }
  }
}

export const MultipleSelection = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        selectedFruits: ref(['apple'])
      }
    },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold mb-4">多选示例 - 水果偏好</h3>
        <div class="space-y-3">
          <Checkbox 
            v-model="selectedFruits"
            value="apple"
            label="苹果 🍎" 
          />
          <Checkbox 
            v-model="selectedFruits"
            value="banana"
            label="香蕉 🍌" 
          />
          <Checkbox 
            v-model="selectedFruits"
            value="orange"
            label="橙子 🍊" 
          />
          <Checkbox 
            v-model="selectedFruits"
            value="grape"
            label="葡萄 🍇" 
          />
          <Checkbox 
            v-model="selectedFruits"
            value="strawberry"
            label="草莓 🍓" 
          />
        </div>
        
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="font-medium mb-2">已选择的水果：</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            {{ selectedFruits.length === 0 ? '暂无选择' : selectedFruits.join(', ') }}
          </p>
          <p class="text-xs text-gray-500 mt-1">
            总共选择了 {{ selectedFruits.length }} 种水果
          </p>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示复选框的多选功能，适用于选择多个选项的场景。'
      }
    }
  }
}

export const InteractiveDemo = {
  render: () => ({
    components: { Checkbox },
    setup() {
      return {
        settings: ref({
          notifications: true,
          autoSave: false,
          analytics: true,
          newsletter: false,
          updates: true
        })
      }
    },
    template: `
      <div class="max-w-md mx-auto space-y-6">
        <h3 class="text-xl font-bold mb-6">用户设置</h3>
        
        <div class="space-y-4">
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 class="font-medium mb-3 text-gray-800 dark:text-gray-200">通知设置</h4>
            <div class="space-y-3">
              <Checkbox 
                v-model="settings.notifications" 
                label="推送通知"
                color="primary"
              />
              <Checkbox 
                v-model="settings.newsletter" 
                label="邮件订阅"
                color="info"
              />
              <Checkbox 
                v-model="settings.updates" 
                label="产品更新"
                color="success"
              />
            </div>
          </div>
          
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 class="font-medium mb-3 text-gray-800 dark:text-gray-200">系统设置</h4>
            <div class="space-y-3">
              <Checkbox 
                v-model="settings.autoSave" 
                label="自动保存"
                color="success"
              />
              <Checkbox 
                v-model="settings.analytics" 
                label="数据分析"
                color="warning"
              />
            </div>
          </div>
        </div>

        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 class="font-medium mb-2">当前设置：</h4>
          <pre class="text-xs text-gray-600 dark:text-gray-300">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
      </div>
    `
  })
} 