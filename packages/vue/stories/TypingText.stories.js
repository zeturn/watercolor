import TypingTextVue from '../src/components/TypingText/TypingText.vue'

export default {
  title: 'Components/TypingText (Vue)',
  component: TypingTextVue,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    speed: { control: 'number' },
    loop: { control: 'boolean' },
    erase: { control: 'boolean' },
    showCursor: { control: 'boolean' },
  },
}

export const Basic = {
  args: { text: 'Watercolor UI 打字机效果', speed: 120, loop: true, erase: true, showCursor: true },
  render: (args) => ({
    components: { TypingTextVue },
    setup() { return { args } },
    template: `<div class="p-8 text-xl font-mono"><TypingTextVue v-bind="args" /></div>`,
  }),
} 