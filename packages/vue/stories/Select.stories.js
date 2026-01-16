import Select from '../src/components/Select/Select.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Select (vue)',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的选择器组件，支持单选、多选、搜索等功能。'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: '绑定值',
      control: { type: 'text' }
    },
    options: {
      description: '选项数组',
      control: { type: 'object' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    placeholder: {
      description: '占位符文本',
      control: { type: 'text' }
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    variant: {
      description: '变体',
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard']
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    multiple: {
      description: '是否多选',
      control: { type: 'boolean' }
    },
    searchable: {
      description: '是否可搜索',
      control: { type: 'boolean' }
    },
    required: {
      description: '是否必填',
      control: { type: 'boolean' }
    },
    error: {
      description: '是否显示错误状态',
      control: { type: 'boolean' }
    },
    helperText: {
      description: '帮助文本',
      control: { type: 'text' }
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
    label: '选择选项',
    options: [
      { label: '选项 1', value: 'option1' },
      { label: '选项 2', value: 'option2' },
      { label: '选项 3', value: 'option3' },
      { label: '选项 4', value: 'option4' }
    ],
    placeholder: '请选择一个选项',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    required: false,
    multiple: false,
    searchable: false,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref(null)
      
      return { 
        args,
        selectedValue,
        onUpdateModelValue: (value) => {
          selectedValue.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <Select 
        v-model="selectedValue"
        :label="args.label"
        :options="args.options"
        :placeholder="args.placeholder"
        :size="args.size"
        :variant="args.variant"
        :disabled="args.disabled"
        :required="args.required"
        :multiple="args.multiple"
        :searchable="args.searchable"
        :error="args.error"
        :helper-text="args.helperText"
        @update:modelValue="onUpdateModelValue"
        @change="onChange"
      />
    `,
  }),
}

export const Multiple = {
  args: {
    label: '选择技能',
    options: [
      { label: 'Vue.js', value: 'vue' },
      { label: 'React', value: 'react' },
      { label: 'Angular', value: 'angular' },
      { label: 'JavaScript', value: 'javascript' },
      { label: 'TypeScript', value: 'typescript' },
      { label: 'Node.js', value: 'nodejs' }
    ],
    placeholder: '请选择您的技能',
    multiple: true,
    size: 'md',
    variant: 'outlined',
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValues = ref([])
      
      return { 
        args,
        selectedValues,
        onUpdateModelValue: (value) => {
          selectedValues.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <Select 
        v-model="selectedValues"
        :label="args.label"
        :options="args.options"
        :placeholder="args.placeholder"
        :size="args.size"
        :variant="args.variant"
        :multiple="args.multiple"
        @update:modelValue="onUpdateModelValue"
        @change="onChange"
      />
    `,
  }),
}

export const Searchable = {
  args: {
    label: '搜索国家',
    options: [
      { label: '中国', value: 'china' },
      { label: '美国', value: 'usa' },
      { label: '英国', value: 'uk' },
      { label: '法国', value: 'france' },
      { label: '德国', value: 'germany' },
      { label: '日本', value: 'japan' },
      { label: '韩国', value: 'korea' },
      { label: '澳大利亚', value: 'australia' }
    ],
    placeholder: '搜索并选择国家',
    searchable: true,
    size: 'md',
    variant: 'outlined',
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref(null)
      
      return { 
        args,
        selectedValue,
        onUpdateModelValue: (value) => {
          selectedValue.value = value
          args['onUpdate:modelValue'](value)
        },
        onChange: (value) => {
          args.onChange(value)
        }
      }
    },
    template: `
      <Select 
        v-model="selectedValue"
        :label="args.label"
        :options="args.options"
        :placeholder="args.placeholder"
        :searchable="args.searchable"
        :size="args.size"
        :variant="args.variant"
        @update:modelValue="onUpdateModelValue"
        @change="onChange"
      />
    `,
  }),
}

export const Basic = {
  render: () => ({
    components: { Select },
    data() {
      return {
        singleSelect: null,
        multipleSelect: [],
        searchableSelect: null,
        countryOptions: [
          { label: '中国', value: 'china' },
          { label: '美国', value: 'usa' },
          { label: '日本', value: 'japan' },
          { label: '德国', value: 'germany' },
          { label: '法国', value: 'france' },
          { label: '英国', value: 'uk' },
          { label: '韩国', value: 'korea' },
          { label: '澳大利亚', value: 'australia' },
          { label: '加拿大', value: 'canada' },
          { label: '巴西', value: 'brazil' }
        ],
        skillOptions: [
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Vue.js', value: 'vue' },
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
          { label: 'Node.js', value: 'node' },
          { label: 'Python', value: 'python' },
          { label: 'Java', value: 'java' }
        ]
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">基础选择器</h3>
          <Select
            v-model="singleSelect"
            label="选择国家"
            :options="countryOptions"
            placeholder="请选择您的国家"
          />
          <p class="mt-2 text-sm text-gray-600">选中值: {{ singleSelect }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">多选选择器</h3>
          <Select
            v-model="multipleSelect"
            label="选择技能"
            :options="skillOptions"
            :multiple="true"
            placeholder="请选择您的技能"
          />
          <p class="mt-2 text-sm text-gray-600">选中值: {{ multipleSelect }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">可搜索选择器</h3>
          <Select
            v-model="searchableSelect"
            label="搜索国家"
            :options="countryOptions"
            :searchable="true"
            placeholder="搜索并选择国家"
          />
          <p class="mt-2 text-sm text-gray-600">选中值: {{ searchableSelect }}</p>
        </div>
      </div>
    `
  })
} 
