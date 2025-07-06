import { ref } from 'vue'
import CircularProgressVue from '../src/components/CircularProgress/CircularProgress.vue'
import SliderVue from '../src/components/Slider/Slider.vue'

export default {
  title: 'Components/CircularProgress (Vue)',
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

// Determinate variant with value display
export const Determinate = Template.bind({})
Determinate.args = {
  variant: 'determinate',
  color: 'primary',
  size: 40,
  thickness: 3.6,
  showValue: true,
  value: 75,
}

// Color variants demonstration
export const Colors = () => ({
  components: { CircularProgressVue },
  template: `
    <div class="flex flex-wrap gap-6">
      <div class="text-center" v-for="c in colors" :key="c">
        <CircularProgressVue variant="determinate" :value="75" :color="c" />
        <p class="text-sm mt-2 capitalize">{{ c }}</p>
      </div>
    </div>
  `,
  setup() {
    const colors = ['primary', 'secondary', 'success', 'warning', 'error']
    return { colors }
  },
})

// Size variants demonstration
export const Sizes = () => ({
  components: { CircularProgressVue },
  template: `
    <div class="flex items-center gap-6">
      <div class="text-center" v-for="s in sizes" :key="s.value">
        <CircularProgressVue variant="determinate" :value="75" :size="s.value" />
        <p class="text-sm mt-2">{{ s.label }}</p>
      </div>
    </div>
  `,
  setup() {
    const sizes = [
      { label: 'Small (30px)', value: 30 },
      { label: 'Medium (40px)', value: 40 },
      { label: 'Large (60px)', value: 60 },
      { label: 'Extra Large (80px)', value: 80 },
    ]
    return { sizes }
  },
})

// Interactive example with value display and slider
export const WithValue = () => ({
  components: { CircularProgressVue, SliderVue },
  setup() {
    const value = ref(65)
    return { value }
  },
  template: `
    <div class="space-y-6 max-w-md">
      <div class="text-center">
        <CircularProgressVue variant="determinate" v-model:value="value" :size="80" :showValue="true" color="primary" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Progress: {{ value }}%</label>
        <SliderVue v-model="value" :min="0" :max="100" />
      </div>
    </div>
  `,
})

// Thickness variants demonstration
export const Thickness = () => ({
  components: { CircularProgressVue },
  template: `
    <div class="flex items-center gap-6">
      <div class="text-center" v-for="t in thicknessList" :key="t.value">
        <CircularProgressVue variant="determinate" :value="75" :thickness="t.value" />
        <p class="text-sm mt-2">{{ t.label }}</p>
      </div>
    </div>
  `,
  setup() {
    const thicknessList = [
      { label: 'Thin (2)', value: 2 },
      { label: 'Default (3.6)', value: 3.6 },
      { label: 'Thick (6)', value: 6 },
      { label: 'Extra Thick (10)', value: 10 },
    ]
    return { thicknessList }
  },
}) 