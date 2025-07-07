import ColorPicker from '../src/components/ColorPicker/ColorPicker.vue'

export default {
  title: 'Components/ColorPicker (Vue)',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'color',
      description: 'Selected color',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the color preview',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the color preview',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the color picker',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
  }
}

export const Default = {
  args: {
    modelValue: '#409eff',
    size: 'md',
    shape: 'circle',
    disabled: false,
    className: '',
  },
  render: (args) => ({
    components: { ColorPicker },
    setup() {
      return { args }
    },
    template: `<ColorPicker v-model="args.modelValue" :size="args.size" :shape="args.shape" :disabled="args.disabled" :class-name="args.className" /> <span style="margin-left:12px;">当前颜色：{{ args.modelValue }}</span>`
  })
} 