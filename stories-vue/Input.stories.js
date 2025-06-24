import InputVue from '../src/components/Input/Input.vue'
import InputReact from '../src/components/Input/Input.jsx'
import { ref } from 'vue'

export default {
  title: 'Components/Input',
  component: InputVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: '输入框类型',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '输入框大小',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
    },
    label: {
      control: 'text',
      description: '标签文本',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
    },
    helpText: {
      control: 'text',
      description: '帮助文本',
    },
    error: {
      control: 'text',
      description: '错误信息',
    },
  },
}

export const VueDefault = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
    size: 'md',
    type: 'text',
    disabled: false,
    readonly: false,
    required: false,
    helpText: '',
    error: '',
  },
  render: (args) => ({
    components: { InputVue },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div class="w-80">
        <InputVue 
          v-model="value"
          :type="args.type"
          :label="args.label"
          :placeholder="args.placeholder"
          :size="args.size"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :required="args.required"
          :help-text="args.helpText"
          :error="args.error"
        />
        <p class="mt-2 text-sm text-neutral-500">当前值: {{ value }}</p>
      </div>
    `,
  }),
}

export const VueWithLabel = {
  render: () => ({
    components: { InputVue },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="w-80">
        <InputVue 
          v-model="value"
          label="电子邮箱"
          type="email"
          placeholder="请输入邮箱地址"
          help-text="我们将向此邮箱发送确认信息"
          required
        />
      </div>
    `,
  }),
}

export const VueWithError = {
  render: () => ({
    components: { InputVue },
    setup() {
      const value = ref('invalid-email')
      return { value }
    },
    template: `
      <div class="w-80">
        <InputVue 
          v-model="value"
          label="电子邮箱"
          type="email"
          placeholder="请输入邮箱地址"
          error="请输入有效的邮箱地址"
          required
        />
      </div>
    `,
  }),
}

export const VueSizes = {
  render: () => ({
    components: { InputVue },
    setup() {
      const smallValue = ref('')
      const mediumValue = ref('')
      const largeValue = ref('')
      return { smallValue, mediumValue, largeValue }
    },
    template: `
      <div class="space-y-4 w-80">
        <InputVue 
          v-model="smallValue"
          label="小尺寸"
          size="sm"
          placeholder="小尺寸输入框"
        />
        <InputVue 
          v-model="mediumValue"
          label="中等尺寸"
          size="md"
          placeholder="中等尺寸输入框"
        />
        <InputVue 
          v-model="largeValue"
          label="大尺寸"
          size="lg"
          placeholder="大尺寸输入框"
        />
      </div>
    `,
  }),
}

export const VueStates = {
  render: () => ({
    components: { InputVue },
    setup() {
      const normalValue = ref('')
      const disabledValue = ref('禁用状态')
      const readonlyValue = ref('只读状态')
      return { normalValue, disabledValue, readonlyValue }
    },
    template: `
      <div class="space-y-4 w-80">
        <InputVue 
          v-model="normalValue"
          label="正常状态"
          placeholder="可正常输入"
        />
        <InputVue 
          v-model="disabledValue"
          label="禁用状态"
          disabled
        />
        <InputVue 
          v-model="readonlyValue"
          label="只读状态"
          readonly
        />
      </div>
    `,
  }),
}

export const VueTypes = {
  render: () => ({
    components: { InputVue },
    setup() {
      const textValue = ref('')
      const emailValue = ref('')
      const passwordValue = ref('')
      const numberValue = ref('')
      return { textValue, emailValue, passwordValue, numberValue }
    },
    template: `
      <div class="space-y-4 w-80">
        <InputVue 
          v-model="textValue"
          label="文本"
          type="text"
          placeholder="文本输入"
        />
        <InputVue 
          v-model="emailValue"
          label="邮箱"
          type="email"
          placeholder="邮箱输入"
        />
        <InputVue 
          v-model="passwordValue"
          label="密码"
          type="password"
          placeholder="密码输入"
        />
        <InputVue 
          v-model="numberValue"
          label="数字"
          type="number"
          placeholder="数字输入"
        />
      </div>
    `,
  }),
} 