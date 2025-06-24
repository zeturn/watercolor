import Radio from '../src/components/Radio/Radio.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的单选按钮组件，完全兼容Material-UI的Radio API。支持多种颜色主题和尺寸，通常与RadioGroup一起使用。'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: '单选按钮的值',
      control: { type: 'text' }
    },
    value: {
      description: '当前单选按钮的值',
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
    color: {
      description: '颜色主题',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info']
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  },
  tags: ['autodocs']
}

export const Default = {
  args: {
    value: 'option1',
    label: '选择此选项',
    color: 'primary',
    size: 'md',
    disabled: false
  },
  render: (args) => ({
    components: { Radio },
    setup() {
      const selectedValue = ref(args.value)
      
      return { 
        args,
        selectedValue,
        onUpdateModelValue: (value) => {
          selectedValue.value = value
          if (args['onUpdate:modelValue']) {
            args['onUpdate:modelValue'](value)
          }
        }
      }
    },
    template: `
      <Radio 
        v-model="selectedValue"
        :value="args.value"
        :label="args.label"
        :color="args.color"
        :size="args.size"
        :disabled="args.disabled"
        @update:modelValue="onUpdateModelValue"
      />
    `,
  }),
}

export const Colors = {
  render: () => ({
    components: { Radio },
    data() {
      return {
        selected: 'primary'
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio 
          v-model="selected"
          value="primary"
          label="Primary（默认）" 
          color="primary"
        />
        <Radio 
          v-model="selected"
          value="secondary"
          label="Secondary" 
          color="secondary"
        />
        <Radio 
          v-model="selected"
          value="success"
          label="Success" 
          color="success"
        />
        <Radio 
          v-model="selected"
          value="error"
          label="Error" 
          color="error"
        />
        <Radio 
          v-model="selected"
          value="warning"
          label="Warning" 
          color="warning"
        />
        <Radio 
          v-model="selected"
          value="info"
          label="Info" 
          color="info"
        />
      </div>
    `
  }),
}

export const Sizes = {
  render: () => ({
    components: { Radio },
    data() {
      return {
        selected: 'md'
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio 
          v-model="selected"
          value="sm"
          label="小尺寸单选按钮" 
          size="sm"
        />
        <Radio 
          v-model="selected"
          value="md"
          label="中等尺寸单选按钮" 
          size="md"
        />
        <Radio 
          v-model="selected"
          value="lg"
          label="大尺寸单选按钮" 
          size="lg"
        />
      </div>
    `
  }),
}

export const States = {
  render: () => ({
    components: { Radio },
    data() {
      return {
        selected: 'checked'
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio 
          v-model="selected"
          value="unchecked"
          label="未选中状态" 
        />
        <Radio 
          v-model="selected"
          value="checked"
          label="选中状态" 
        />
        <Radio 
          v-model="selected"
          value="disabled"
          label="禁用状态" 
          disabled
        />
        <Radio 
          v-model="selected"
          value="disabled-checked"
          label="禁用且选中状态" 
          disabled
        />
      </div>
    `
  }),
}

export const Basic = {
  render: () => ({
    components: { Radio },
    data() {
      return {
        paymentMethod: 'card',
        notifications: 'email'
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">支付方式</h3>
          <div class="space-y-2">
            <Radio 
              v-model="paymentMethod"
              value="card"
              label="信用卡/借记卡"
            />
            <Radio 
              v-model="paymentMethod"
              value="paypal"
              label="PayPal"
            />
            <Radio 
              v-model="paymentMethod"
              value="alipay"
              label="支付宝"
            />
            <Radio 
              v-model="paymentMethod"
              value="wechat"
              label="微信支付"
            />
          </div>
          <p class="mt-2 text-sm text-gray-600">选中的支付方式: {{ paymentMethod }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">通知方式</h3>
          <div class="space-y-2">
            <Radio 
              v-model="notifications"
              value="email"
              label="邮件通知"
            />
            <Radio 
              v-model="notifications"
              value="sms"
              label="短信通知"
            />
            <Radio 
              v-model="notifications"
              value="push"
              label="推送通知"
            />
            <Radio 
              v-model="notifications"
              value="none"
              label="不接收通知"
            />
          </div>
          <p class="mt-2 text-sm text-gray-600">选中的通知方式: {{ notifications }}</p>
        </div>
      </div>
    `
  })
} 