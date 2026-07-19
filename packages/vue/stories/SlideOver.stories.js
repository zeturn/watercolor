import { ref } from 'vue'
import ButtonVue from '../src/components/Button/Button.vue'
import SlideOverVue from '../src/components/SlideOver/SlideOver.vue'
import './SlideOver.stories.css'

export default {
  title: 'Components/SlideOver (Vue)',
  component: SlideOverVue,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['left', 'right'] },
    width: { control: 'text' },
  },
}

const panelTemplate = `
  <div class="wc-slideover-demo">
    <header class="wc-slideover-demo__header">
      <p class="wc-slideover-demo__eyebrow">Workspace</p>
      <h2>{{ panelTitle }}</h2>
      <p>侧边面板用于承载临时上下文：设置、详情、筛选器或轻量表单。</p>
    </header>
    <div class="wc-slideover-demo__section">
      <h3>面板节奏</h3>
      <div class="wc-slideover-demo__list">
        <div class="wc-slideover-demo__row"><span>默认位置</span><strong>{{ args.placement }}</strong></div>
        <div class="wc-slideover-demo__row"><span>宽度</span><strong>{{ args.width }}</strong></div>
        <div class="wc-slideover-demo__row"><span>关闭策略</span><strong>Escape / 遮罩</strong></div>
      </div>
    </div>
    <footer class="wc-slideover-demo__footer">
      <ButtonVue variant="secondary" @click="open = false">取消</ButtonVue>
      <ButtonVue @click="open = false">完成</ButtonVue>
    </footer>
  </div>
`

export const Basic = {
  args: { placement: 'right', width: '400px' },
  render: (args) => ({
    components: { ButtonVue, SlideOverVue },
    setup() {
      const open = ref(false)
      const panelTitle = '项目设置'
      return { args, open, panelTitle }
    },
    template: `
      <main class="wc-slideover-story">
        <section class="wc-slideover-story__shell">
          <p class="wc-slideover-story__eyebrow">Watercolor overlay</p>
          <h1 class="wc-slideover-story__title">SlideOver</h1>
          <p class="wc-slideover-story__description">默认触发器和面板内容都使用 Watercolor 的克制、无边框风格。</p>
          <ButtonVue @click="open = true">打开面板</ButtonVue>
          <SlideOverVue v-model="open" :placement="args.placement" :width="args.width">
            ${panelTemplate}
          </SlideOverVue>
        </section>
      </main>
    `,
  }),
}
