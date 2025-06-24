import ColorPicker from '../src/components/ColorPicker/ColorPicker.vue'

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'color',
      description: '选中的颜色'
    }
  }
}

export const Basic = {
  args: {
    modelValue: '#409eff'
  },
  render: (args) => ({
    components: { ColorPicker },
    setup() {
      return { args }
    },
    template: `<ColorPicker v-model="args.modelValue" /> <span style="margin-left:12px;">当前颜色：{{ args.modelValue }}</span>`
  })
} 