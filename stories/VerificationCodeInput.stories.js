import VerificationCodeInput from '../src/components/Input/VerificationCodeInput.vue'

export default {
  title: 'Components/Input/VerificationCodeInput',
  component: VerificationCodeInput,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 4, max: 8, step: 1 },
      description: '验证码长度'
    }
  }
}

export const Basic = {
  args: {
    length: 6
  },
  render: (args) => ({
    components: { VerificationCodeInput },
    setup() {
      return { args, code: '' }
    },
    template: `
      <div>
        <VerificationCodeInput v-model="code" :length="args.length" @complete="(v)=>globalThis.alert('验证码完成: '+v)" />
        <p style="margin-top:12px;">当前值：{{ code }}</p>
      </div>
    `
  })
} 