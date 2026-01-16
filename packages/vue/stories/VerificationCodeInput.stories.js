import VerificationCodeInput from '../src/components/Input/VerificationCodeInput.vue'

export default {
  title: 'Components/VerificationCodeInput (Vue)',
  component: VerificationCodeInput,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 1, step: 1 },
      description: '验证码长度'
    },
    autoFocus: {
      control: 'boolean',
      description: '是否自动聚焦'
    }
  }
}

export const Basic = {
  args: {
    length: 6,
    autoFocus: false
  },
  render: (args) => ({
    components: { VerificationCodeInput },
    setup() {
      return { args, code: '' }
    },
    template: `
      <div>
        <VerificationCodeInput 
          v-model="code" 
          :length="args.length" 
          :auto-focus="args.autoFocus" 
          @complete="(v)=>globalThis.alert('验证码完成: '+v)" />
        <p style="margin-top:12px;">当前值：{{ code }}</p>
      </div>
    `
  })
}

export const FourDigits = {
  args: {
    length: 4,
    autoFocus: true
  },
  render: (args) => ({
    components: { VerificationCodeInput },
    setup() {
      return { args, code: '' }
    },
    template: `
      <div>
        <VerificationCodeInput 
          v-model="code" 
          :length="args.length" 
          :auto-focus="args.autoFocus" 
          @complete="(v)=>globalThis.alert('验证码完成: '+v)" />
        <p style="margin-top:12px;">当前值：{{ code }}</p>
      </div>
    `
  })
} 