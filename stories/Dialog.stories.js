import { ref } from 'vue'
import DialogVue from '../src/components/Dialog/Dialog.vue'
import DialogTitleVue from '../src/components/Dialog/DialogTitle.vue'
import DialogContentVue from '../src/components/Dialog/DialogContent.vue'
import DialogActionsVue from '../src/components/Dialog/DialogActions.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Dialog',
  component: DialogVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: '是否打开' },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: '最大宽度',
    },
    fullWidth: { control: 'boolean', description: '占满宽度' },
    fullScreen: { control: 'boolean', description: '全屏' },
  },
}

const Template = (args) => ({
  components: { DialogVue, DialogTitleVue, DialogContentVue, DialogActionsVue, ButtonVue },
  setup() {
    const open = ref(args.open)
    const handleOpen = () => (open.value = true)
    const handleClose = () => (open.value = false)
    return { args, open, handleOpen, handleClose }
  },
  template: `
    <div>
      <ButtonVue variant="primary" @click="handleOpen">打开 Dialog</ButtonVue>
      <DialogVue
        v-bind="args"
        :open="open"
        @close="handleClose"
      >
        <DialogTitleVue>示例标题</DialogTitleVue>
        <DialogContentVue>
          这是 Dialog 内容。你可以在这里放置任何元素，例如表单、文本等。
        </DialogContentVue>
        <DialogActionsVue>
          <ButtonVue variant="secondary" @click="handleClose">取消</ButtonVue>
          <ButtonVue variant="primary" @click="handleClose">确定</ButtonVue>
        </DialogActionsVue>
      </DialogVue>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  open: false,
  maxWidth: 'sm',
  fullWidth: false,
  fullScreen: false,
} 