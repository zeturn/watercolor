import Switch from '../src/components/Switch/Switch.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Switch (vue)',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的开关组件，使用现代化纯CSS设计，减少阴影效果。已修复toggle原点位置问题，支持多种尺寸和颜色主题。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: '开关状态',
      control: { type: 'boolean' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    description: {
      description: '描述文本',
      control: { type: 'text' }
    },
    color: {
      description: '开关颜色主题',
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
    },
    size: {
      description: '开关尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    required: {
      description: '是否必填',
      control: { type: 'boolean' }
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
}

export const Primary = {
  args: {
    label: '开启通知',
    description: '接收应用通知',
    color: 'primary',
    size: 'md',
    disabled: false,
    required: false,
  },
  render: (args) => ({
    components: { Switch },
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
      <div class="w-80">
        <Switch 
          v-model="checked"
          :label="args.label"
          :description="args.description"
          :color="args.color"
          :size="args.size"
          :disabled="args.disabled"
          :required="args.required"
          @update:modelValue="onUpdateModelValue"
          @change="onChange"
        />
        <p class="mt-4 text-sm text-gray-500">当前状态: {{ checked ? '开启' : '关闭' }}</p>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        smallSwitch: ref(false),
        mediumSwitch: ref(false),
        largeSwitch: ref(false)
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">不同尺寸的开关</h3>
          <div class="space-y-4">
            <Switch 
              v-model="smallSwitch" 
              size="sm" 
              label="小尺寸开关" 
              description="适用于紧凑布局"
            />
            <Switch 
              v-model="mediumSwitch" 
              size="md" 
              label="中等尺寸开关（默认）" 
              description="标准尺寸，最常用"
            />
            <Switch 
              v-model="largeSwitch" 
              size="lg" 
              label="大尺寸开关" 
              description="适用于重要设置项"
            />
          </div>
        </div>

        <div class="mt-8">
          <h4 class="font-medium mb-3">无标签的不同尺寸对比</h4>
          <div class="flex items-center space-x-8">
            <div class="text-center">
              <Switch v-model="smallSwitch" size="sm" />
              <p class="text-xs text-gray-500 mt-2">小尺寸</p>
            </div>
            <div class="text-center">
              <Switch v-model="mediumSwitch" size="md" />
              <p class="text-xs text-gray-500 mt-2">中等尺寸</p>
            </div>
            <div class="text-center">
              <Switch v-model="largeSwitch" size="lg" />
              <p class="text-xs text-gray-500 mt-2">大尺寸</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Colors = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        switches: ref({
          primary: true,
          success: true,
          warning: true,
          error: true,
          purple: true,
          orange: true,
          cyan: true,
          pink: true,
        })
      }
    },
    template: `
      <div class="space-y-4 w-80">
        <h3 class="text-lg font-semibold mb-4">颜色主题</h3>
        <Switch v-model="switches.primary" color="primary" label="主色调 (Primary)" />
        <Switch v-model="switches.success" color="success" label="成功色 (Success)" />
        <Switch v-model="switches.warning" color="warning" label="警告色 (Warning)" />
        <Switch v-model="switches.error" color="error" label="错误色 (Error)" />
        <Switch v-model="switches.purple" color="purple" label="紫色 (Purple)" />
        <Switch v-model="switches.orange" color="orange" label="橙色 (Orange)" />
        <Switch v-model="switches.cyan" color="cyan" label="青色 (Cyan)" />
        <Switch v-model="switches.pink" color="pink" label="粉色 (Pink)" />
      </div>
    `,
  }),
}

export const States = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        normalSwitch: ref(false),
        checkedSwitch: ref(true),
        disabledOffSwitch: ref(false),
        disabledOnSwitch: ref(true),
        requiredSwitch: ref(false)
      }
    },
    template: `
      <div class="space-y-4 w-80">
        <h3 class="text-lg font-semibold mb-4">不同状态</h3>
        <Switch v-model="normalSwitch" label="正常状态" description="可以正常切换" />
        <Switch v-model="checkedSwitch" label="选中状态" description="默认开启状态" />
        <Switch v-model="disabledOffSwitch" label="禁用关闭" description="禁用状态，关闭" disabled />
        <Switch v-model="disabledOnSwitch" label="禁用开启" description="禁用状态，开启" disabled />
        <Switch v-model="requiredSwitch" label="必填开关" description="带有必填标识" required />
      </div>
    `,
  }),
}

export const WithoutLabels = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        switch1: ref(false),
        switch2: ref(true),
        switch3: ref(false),
        switch4: ref(true)
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">无标签开关</h3>
          <div class="flex items-center space-x-6">
            <Switch v-model="switch1" color="primary" />
            <Switch v-model="switch2" color="success" />
            <Switch v-model="switch3" color="purple" />
            <Switch v-model="switch4" color="error" />
          </div>
        </div>

        <div>
          <h4 class="font-medium mb-3">不同尺寸的无标签开关</h4>
          <div class="flex items-center space-x-6">
            <Switch v-model="switch1" size="sm" color="primary" />
            <Switch v-model="switch2" size="md" color="success" />
            <Switch v-model="switch3" size="lg" color="purple" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const TogglePositionDemo = {
  render: () => ({
    components: { Switch },
    setup() {
      return {
        leftPosition: ref(false),
        rightPosition: ref(true)
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Toggle原点位置修复演示</h3>
          <p class="text-sm text-gray-600 mb-6">
            现在toggle原点正确定位在轨道的左右两端，不再偏右。
          </p>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-medium mb-3">关闭状态 - 原点在左侧</h4>
              <div class="flex items-center space-x-8">
                <Switch v-model="leftPosition" size="sm" color="primary" />
                <Switch v-model="leftPosition" size="md" color="primary" />
                <Switch v-model="leftPosition" size="lg" color="primary" />
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-3">开启状态 - 原点在右侧</h4>
              <div class="flex items-center space-x-8">
                <Switch v-model="rightPosition" size="sm" color="success" />
                <Switch v-model="rightPosition" size="md" color="success" />
                <Switch v-model="rightPosition" size="lg" color="success" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">修复内容：</h4>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• 修复了toggle原点位置偏右的问题</li>
            <li>• 使用独立的track和thumb元素，提高布局准确性</li>
            <li>• 优化了不同尺寸下的原点移动距离</li>
            <li>• 改进了整体的视觉对齐效果</li>
            <li>• 减少了阴影使用，采用现代扁平化设计</li>
          </ul>
        </div>
      </div>
    `,
  }),
}

export const InteractiveDemo = {
  render: () => ({
    components: { Switch },
    data() {
      return {
        settings: {
          notifications: true,
          darkMode: false,
          autoSave: true,
          analytics: false,
          newsletter: false
        }
      }
    },
    template: `
      <div class="max-w-md mx-auto space-y-6">
        <h3 class="text-xl font-bold mb-6">设置面板演示</h3>
        
        <div class="space-y-4">
          <Switch 
            v-model="settings.notifications" 
            label="推送通知" 
            description="接收重要更新和提醒" 
            color="primary"
          />
          
          <Switch 
            v-model="settings.darkMode" 
            label="暗黑模式" 
            description="使用深色主题界面" 
            color="purple"
          />
          
          <Switch 
            v-model="settings.autoSave" 
            label="自动保存" 
            description="自动保存您的工作进度" 
            color="success"
          />
          
          <Switch 
            v-model="settings.analytics" 
            label="数据分析" 
            description="帮助我们改进产品体验" 
            color="cyan"
          />
          
          <Switch 
            v-model="settings.newsletter" 
            label="邮件订阅" 
            description="接收产品更新和技巧" 
            color="orange"
          />
        </div>

        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 class="font-medium mb-2">当前设置：</h4>
          <pre class="text-xs">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
      </div>
    `
  })
} 