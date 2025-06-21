import { ref } from 'vue'
import SnackbarVue from '../src/components/Snackbar/Snackbar.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Snackbar',
  component: SnackbarVue,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    severity: { control: { type: 'select' }, options: ['success', 'info', 'warning', 'error'] },
    variant: { control: { type: 'select' }, options: ['filled', 'outlined', 'standard'] },
    autoHideDuration: { control: 'number' },
    closable: { control: 'boolean' },
  },
}

const Template = (args) => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const open = ref(false)
    const handleOpen = () => (open.value = true)
    const handleClose = () => (open.value = false)
    return { args, open, handleOpen, handleClose }
  },
  template: `
    <div>
      <ButtonVue variant="primary" @click="handleOpen">显示 Snackbar</ButtonVue>
      <SnackbarVue
        v-bind="args"
        :open="open"
        @close="handleClose"
      />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  message: '这是一条提示信息',
  severity: 'info',
  variant: 'filled',
  autoHideDuration: 3000,
  closable: true,
} 