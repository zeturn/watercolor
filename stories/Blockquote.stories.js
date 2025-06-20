import BlockquoteVue from '../src/components/Blockquote/Blockquote.vue'

export default {
  title: 'Components/Blockquote',
  component: BlockquoteVue,
  tags: ['autodocs'],
  argTypes: {
    cite: { control: 'text' },
  },
}

export const Basic = {
  args: {
    cite: 'Steve Jobs',
    default: 'Stay hungry, stay foolish.'
  },
  render: (args) => ({
    components: { BlockquoteVue },
    setup() { return { args } },
    template: `
      <div class="p-8">
        <BlockquoteVue :cite="args.cite">{{ args.default }}</BlockquoteVue>
      </div>
    `,
  }),
} 