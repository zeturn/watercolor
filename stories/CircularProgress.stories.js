import { ref } from 'vue'
import CircularProgressVue from '../src/components/CircularProgress/CircularProgress.vue'
import SliderVue from '../src/components/Slider/Slider.vue'

export default {
  title: 'Components/CircularProgress',
  component: CircularProgressVue,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['indeterminate', 'determinate'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'inherit'],
    },
    size: { control: 'number' },
    thickness: { control: 'number' },
    showValue: { control: 'boolean' },
  },
}

const Template = (args) => ({
  components: { CircularProgressVue, SliderVue },
  setup() {
    const value = ref(args.value ?? 40)
    const variant = args.variant
    const update = (v) => (value.value = v)
    return { args, value, variant, update }
  },
  template: `
    <div class="space-y-4 w-64">
      <CircularProgressVue v-bind="args" :variant="variant" :value="value" />
      <SliderVue v-if="variant === 'determinate'" v-model="value" :min="0" :max="100" />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'indeterminate',
  color: 'primary',
  size: 40,
  thickness: 3.6,
  showValue: false,
} 