import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import AvatarVue from '../src/components/Avatar/Avatar.vue'

export default {
  title: 'Components/Card (Vue)',
  component: CardVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: { component: 'Card is a versatile container presenting content and actions on a single subject.' }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'minimal', 'elevated'],
      description: 'Card variant style',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color theme',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Card size',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable hover interaction',
    },
    noBorder: {
      control: 'boolean',
      description: 'Remove border',
    },
  },
}

export const Default = {
  args: {
    title: 'Card Title',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    interactive: true,
    noBorder: true,
  },
  render: (args) => ({
    components: { CardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="wc-w-96">
        <CardVue 
          :title="args.title"
          :variant="args.variant"
          :color="args.color"
          :size="args.size"
          :interactive="args.interactive"
          :no-border="args.noBorder"
        >
          <p class="wc-opacity-80">
            A clean and modern card component with no border or shadow by default.
            Light gray background, darkens on hover with a slight up-motion effect.
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const Colors = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">
        <CardVue title="Default (Gray)" color="default">
          <p class="wc-opacity-80">
            This is the default light gray card, with a clean and simple no border design.
          </p>
        </CardVue>
        
        <CardVue title="Primary (Blue)" color="primary">
          <p class="wc-opacity-80">
            Use the primary blue card for important information display.
          </p>
        </CardVue>
        
        <CardVue title="Success (Green)" color="success">
          <p class="wc-opacity-80">
            Success green card for displaying success information.
          </p>
        </CardVue>
        
        <CardVue title="Warning (Orange)" color="warning">
          <p class="wc-opacity-80">
            Warning orange card for reminding users to pay attention.
          </p>
        </CardVue>
        
        <CardVue title="Error (Red)" color="error">
          <p class="wc-opacity-80">
            Error red card for displaying error information.
          </p>
        </CardVue>
        
        <CardVue title="Info (Cyan)" color="info">
          <p class="wc-opacity-80">
            Info cyan card for general information display.
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-6 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Filled (default)</h3>
          <CardVue title="Filled Style Card" variant="filled">
            <p class="wc-opacity-80">
              This is the default filled style, light gray background, no border or shadow.
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Outlined</h3>
          <CardVue title="Outlined Style Card" variant="outlined">
            <p class="wc-opacity-80">
              Transparent background, with a thicker border, shows a light background on hover.
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Minimal</h3>
          <CardVue title="Minimal Style Card" variant="minimal">
            <p class="wc-opacity-80">
              The simplest style, no border, transparent background, smaller inner padding.
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Elevated</h3>
          <CardVue title="Elevated Style Card" variant="elevated">
            <p class="wc-opacity-80">
              Elevated style with shadow effect, this is the only variant with shadow.
            </p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-6 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Small</h3>
          <CardVue title="Small Card" size="small">
            <p class="wc-opacity-80">Compact card with smaller inner padding.</p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Medium (default)</h3>
          <CardVue title="Medium Card" size="medium">
            <p class="wc-opacity-80">Standard size card, balance between aesthetics and space utilization.</p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Large</h3>
          <CardVue title="Large Card" size="large">
            <p class="wc-opacity-80">Loose card with larger inner padding, suitable for important content display.</p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const Interactive = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Enabled Interaction Effect (default)</h3>
          <CardVue title="Interactive Card" :interactive="true" color="primary">
            <p class="wc-opacity-80">
              Background color changes and up-motion effect when hovered.
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">Disabled Interaction Effect</h3>
          <CardVue title="Static Card" :interactive="false" color="success">
            <p class="wc-opacity-80">
              Static card without hover effect.
            </p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const WithContent = {
  render: () => ({
    components: { CardVue, ButtonVue, AvatarVue },
    template: `
      <div class="wc-w-96">
        <CardVue title="User Information" color="primary">
          <div class="wc-space-y-4">
            <div class="wc-flex wc-items-center wc-space-x-3">
              <AvatarVue 
                :src="null" 
                children="Zhang San"
                size="md"
                fallback="ZS"
              />
              <div>
                <h4 class="wc-font-medium">Zhang San</h4>
                <p class="wc-text-sm wc-opacity-75">Front-end Engineer</p>
              </div>
            </div>
            
            <div class="wc-space-y-2">
              <div class="wc-flex wc-justify-between wc-text-sm">
                <span class="wc-opacity-75">Email</span>
                <span>zhangsan@example.com</span>
              </div>
              <div class="wc-flex wc-justify-between wc-text-sm">
                <span class="wc-opacity-75">Department</span>
                <span>Technology Department</span>
              </div>
            </div>
          </div>
          
          <template #footer>
            <div class="wc-flex wc-justify-end wc-space-x-2">
              <ButtonVue variant="secondary" size="sm">Cancel</ButtonVue>
              <ButtonVue variant="filled" size="sm">Edit</ButtonVue>
            </div>
          </template>
        </CardVue>
      </div>
    `,
  }),
}

export const ColoredVariants = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-8 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-4">Success Theme - Different Variants</h3>
          <div class="wc-space-y-4">
            <CardVue title="Filled Style" color="success" variant="filled">
              <p class="wc-opacity-80">Success filled style card.</p>
            </CardVue>
            <CardVue title="Outlined Style" color="success" variant="outlined">
              <p class="wc-opacity-80">Success outlined style card.</p>
            </CardVue>
            <CardVue title="Elevated Style" color="success" variant="elevated">
              <p class="wc-opacity-80">Success elevated style card.</p>
            </CardVue>
          </div>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-4">Warning Theme - Different Sizes</h3>
          <div class="wc-space-y-4">
            <CardVue title="Small Card" color="warning" size="small">
              <p class="wc-opacity-80">Warning small size card.</p>
            </CardVue>
            <CardVue title="Medium Card" color="warning" size="medium">
              <p class="wc-opacity-80">Warning medium size card.</p>
            </CardVue>
            <CardVue title="Large Card" color="warning" size="large">
              <p class="wc-opacity-80">Warning large size card.</p>
            </CardVue>
          </div>
        </div>
      </div>
    `,
  }),
}

// 保持向后兼容
export const VueDefault = Default 