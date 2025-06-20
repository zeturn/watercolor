import RatingVue from '../src/components/Rating/Rating.vue'

export default {
  title: 'Components/Rating',
  component: RatingVue,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number', name: 'value' },
    max: { control: 'number' },
    readonly: { control: 'boolean' },
  },
}

export const Interactive = {
  args: {
    modelValue: 3,
    max: 5,
    readonly: false,
  },
  render: (args) => ({
    components: { RatingVue },
    setup() { return { args, rating: args.modelValue } },
    template: `
      <div class="p-8 text-3xl">
        <RatingVue v-model="rating" :max="args.max" :readonly="args.readonly" />
        <p class="mt-4 text-sm text-gray-500">当前评分: {{ rating }}</p>
      </div>
    `,
  }),
}

export const ReadOnly = {
  args: { modelValue: 4, max: 5, readonly: true },
  render: (args) => ({
    components: { RatingVue },
    setup() { return { args } },
    template: `<RatingVue :model-value="args.modelValue" :max="args.max" :readonly="true" />`,
  }),
} 