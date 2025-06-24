import Watermark from '../src/components/Watermark/Watermark.vue'

export default {
  title: 'Components/Watermark',
  component: Watermark,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    fontSize: { control: 'number' },
    fontColor: { control: 'color' },
    rotate: { control: { type: 'number', min: -90, max: 90, step: 5 } },
    showSeparator: { control: 'boolean' }
  }
}

export const Basic = {
  args: {
    content: 'Watermark',
    fontSize: 18,
    rotate: -30,
    fontColor: 'rgba(0,0,0,.15)',
    fullscreen: true
  },
  render: (args) => ({
    components: { Watermark },
    setup() { return { args } },
    template: `<Watermark v-bind="args"><div style="height:200px; background:#fafafa;">示例内容</div></Watermark>`
  })
} 