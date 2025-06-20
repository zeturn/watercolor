import Slider from '../src/components/Slider/Slider.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的滑块组件，完全兼容Material-UI的Slider API。支持连续值选择、步长设置、值标签显示等功能。'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: '滑块的当前值',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    min: {
      description: '最小值',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    max: {
      description: '最大值',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' }
      }
    },
    step: {
      description: '步长',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    valueLabelDisplay: {
      control: { type: 'select' },
      options: ['off', 'on', 'auto'],
      description: '值标签的显示方式',
      table: {
        type: { summary: "'off' | 'on' | 'auto'" },
        defaultValue: { summary: "'off'" }
      }
    },
    'onUpdate:modelValue': { 
      action: 'update:modelValue',
      description: '值更新时触发'
    },
    onChange: { 
      action: 'change',
      description: '值改变时触发'
    },
  },
  tags: ['autodocs']
}

export const Primary = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    label: '音量',
    valueLabelDisplay: 'on',
    disabled: false,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      const sliderValue = ref(args.modelValue)
      
      return { 
        args,
        sliderValue,
        onUpdateModelValue: (value) => {
          sliderValue.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <div style="width: 300px;">
        <Slider 
          v-model="sliderValue"
          :min="args.min"
          :max="args.max"
          :step="args.step"
          :label="args.label"
          :valueLabelDisplay="args.valueLabelDisplay"
          :disabled="args.disabled"
          @update:modelValue="onUpdateModelValue"
          @change="onChange"
        />
      </div>
    `,
  }),
}

export const Temperature = {
  args: {
    modelValue: 20,
    min: -10,
    max: 40,
    step: 0.5,
    label: '温度 (°C)',
    valueLabelDisplay: 'on',
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      const sliderValue = ref(args.modelValue)
      
      return { 
        args,
        sliderValue,
        onUpdateModelValue: (value) => {
          sliderValue.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <div style="width: 300px;">
        <Slider 
          v-model="sliderValue"
          :min="args.min"
          :max="args.max"
          :step="args.step"
          :label="args.label"
          :valueLabelDisplay="args.valueLabelDisplay"
          @update:modelValue="onUpdateModelValue"
          @change="onChange"
        />
      </div>
    `,
  }),
}

export const Disabled = {
  args: {
    modelValue: 30,
    min: 0,
    max: 100,
    step: 1,
    label: '禁用滑块',
    valueLabelDisplay: 'on',
    disabled: true,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      const sliderValue = ref(args.modelValue)
      
      return { 
        args,
        sliderValue
      }
    },
    template: `
      <div style="width: 300px;">
        <Slider 
          v-model="sliderValue"
          :min="args.min"
          :max="args.max"
          :step="args.step"
          :label="args.label"
          :valueLabelDisplay="args.valueLabelDisplay"
          :disabled="args.disabled"
        />
      </div>
    `,
  }),
}

export const Basic = {
  render: () => ({
    components: { Slider },
    data() {
      return {
        volume: 50,
        temperature: 20,
        progress: 80
      }
    },
    template: `
      <div class="p-6 space-y-8">
        <h3 class="text-lg font-semibold mb-4">基础滑块</h3>
        
        <div class="space-y-6">
          <div>
            <Slider 
              v-model="volume"
              label="音量"
              :min="0"
              :max="100"
              valueLabelDisplay="on"
            />
          </div>
          
          <div>
            <Slider 
              v-model="temperature"
              label="温度"
              :min="-10"
              :max="40"
              :step="0.5"
              valueLabelDisplay="on"
            />
          </div>
          
          <div>
            <Slider 
              v-model="progress"
              label="进度"
              :min="0"
              :max="200"
              :step="10"
              valueLabelDisplay="on"
            />
          </div>
        </div>
      </div>
    `
  })
} 