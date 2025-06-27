import WatermarkVue from '../src/components/Watermark/Watermark.vue'

export default {
  title: 'Components/Watermark (Vue)',
  component: WatermarkVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 水印组件，为内容添加防伪水印效果。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', description: '水印文本内容' },
    fontSize: { control: 'number', description: '字体大小' },
    fontColor: { control: 'color', description: '字体颜色' },
    rotate: { control: { type: 'number', min: -90, max: 90, step: 5 }, description: '旋转角度' },
    fullscreen: { control: 'boolean', description: '是否全屏覆盖' }
  }
}

const Template = (args) => ({
  components: { WatermarkVue },
  setup() {
    return { args }
  },
  template: `
    <div class="p-8">
      <WatermarkVue v-bind="args">
        <div style="height: 200px; background: #fafafa; padding: 20px;">
          <h3>示例内容</h3>
          <p>这里是被水印保护的内容区域。</p>
        </div>
      </WatermarkVue>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  content: 'Watermark',
  fontSize: 18,
  rotate: -30,
  fontColor: 'rgba(0,0,0,.15)',
  fullscreen: true,
} 