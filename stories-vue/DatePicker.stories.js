import DatePickerVue from '../src/components/DatePicker/DatePicker.vue'
import { ref } from 'vue'

export default {
  title: 'Components/DatePicker (Vue)',
  component: DatePickerVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'date' },
      description: '选中的日期值',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
    },
    format: {
      control: 'text',
      description: '日期格式',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    showToday: {
      control: 'boolean',
      description: '是否显示今天按钮',
    },
    minDate: {
      control: { type: 'date' },
      description: '最小日期',
    },
    maxDate: {
      control: { type: 'date' },
      description: '最大日期',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '组件大小',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: '组件变体',
    },
    'onUpdate:modelValue': { action: 'update:modelValue' },
    onChange: { action: 'change' },
  },
}

export const Default = {
  args: {
    modelValue: null,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    disabled: false,
    showToday: true,
    minDate: null,
    maxDate: null,
    size: 'md',
    variant: 'default',
  },
  render: (args) => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(args.modelValue)
      return { 
        args,
        selectedDate,
        updateDate: (date) => {
          selectedDate.value = date
          args['onUpdate:modelValue'](date)
        }
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <DatePickerVue 
          v-model="selectedDate"
          :placeholder="args.placeholder"
          :format="args.format"
          :disabled="args.disabled"
          :show-today="args.showToday"
          :min-date="args.minDate"
          :max-date="args.maxDate"
          :size="args.size"
          :variant="args.variant"
          @change="args.onChange"
        />
        <div class="mt-4 text-sm text-gray-600">
          选中日期: {{ selectedDate ? selectedDate.toLocaleDateString() : '无' }}
        </div>
      </div>
    `,
  }),
}

export const WithPreselectedDate = {
  args: {
    modelValue: new Date(),
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    disabled: false,
    showToday: true,
    minDate: null,
    maxDate: null,
    size: 'md',
    variant: 'default',
  },
  render: (args) => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(args.modelValue)
      return { 
        args,
        selectedDate,
        updateDate: (date) => {
          selectedDate.value = date
          args['onUpdate:modelValue'](date)
        }
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <DatePickerVue 
          v-model="selectedDate"
          :placeholder="args.placeholder"
          :format="args.format"
          :disabled="args.disabled"
          :show-today="args.showToday"
          :min-date="args.minDate"
          :max-date="args.maxDate"
          :size="args.size"
          :variant="args.variant"
          @change="args.onChange"
        />
      </div>
    `,
  }),
}

export const WithMinMaxDates = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(null)
      const today = new Date()
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
      
      return { 
        selectedDate,
        minDate,
        maxDate
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <div class="mb-4">
          <h3 class="text-sm font-medium text-gray-700 mb-2">限制日期范围</h3>
          <p class="text-xs text-gray-500">只能选择过去7天到未来30天的日期</p>
        </div>
        <DatePickerVue 
          v-model="selectedDate"
          placeholder="选择日期范围内的日期"
          :min-date="minDate"
          :max-date="maxDate"
        />
        <div class="mt-4 text-xs text-gray-500">
          <div>最小日期: {{ minDate.toLocaleDateString() }}</div>
          <div>最大日期: {{ maxDate.toLocaleDateString() }}</div>
        </div>
      </div>
    `,
  }),
}

export const Disabled = {
  args: {
    modelValue: new Date(),
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    disabled: true,
    showToday: true,
    minDate: null,
    maxDate: null,
    size: 'md',
    variant: 'default',
  },
  render: (args) => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(args.modelValue)
      return { 
        args,
        selectedDate
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <DatePickerVue 
          v-model="selectedDate"
          :placeholder="args.placeholder"
          :format="args.format"
          :disabled="args.disabled"
          :show-today="args.showToday"
          :min-date="args.minDate"
          :max-date="args.maxDate"
          :size="args.size"
          :variant="args.variant"
        />
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate1 = ref(null)
      const selectedDate2 = ref(null)
      const selectedDate3 = ref(null)
      
      return { 
        selectedDate1,
        selectedDate2,
        selectedDate3
      }
    },
    template: `
      <div class="space-y-4 w-full max-w-sm">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">小尺寸</h3>
          <DatePickerVue 
            v-model="selectedDate1"
            placeholder="小尺寸日期选择器"
            size="sm"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">中等尺寸</h3>
          <DatePickerVue 
            v-model="selectedDate2"
            placeholder="中等尺寸日期选择器"
            size="md"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">大尺寸</h3>
          <DatePickerVue 
            v-model="selectedDate3"
            placeholder="大尺寸日期选择器"
            size="lg"
          />
        </div>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate1 = ref(null)
      const selectedDate2 = ref(null)
      const selectedDate3 = ref(null)
      
      return { 
        selectedDate1,
        selectedDate2,
        selectedDate3
      }
    },
    template: `
      <div class="space-y-4 w-full max-w-sm">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">默认样式</h3>
          <DatePickerVue 
            v-model="selectedDate1"
            placeholder="默认样式"
            variant="default"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">边框样式</h3>
          <DatePickerVue 
            v-model="selectedDate2"
            placeholder="边框样式"
            variant="outlined"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">填充样式</h3>
          <DatePickerVue 
            v-model="selectedDate3"
            placeholder="填充样式"
            variant="filled"
          />
        </div>
      </div>
    `,
  }),
}

export const CustomFormat = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(null)
      
      return { 
        selectedDate
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <div class="mb-4">
          <h3 class="text-sm font-medium text-gray-700 mb-2">自定义日期格式</h3>
          <p class="text-xs text-gray-500">显示格式: DD/MM/YYYY</p>
        </div>
        <DatePickerVue 
          v-model="selectedDate"
          placeholder="选择日期 (DD/MM/YYYY)"
          format="DD/MM/YYYY"
        />
        <div class="mt-4 text-sm text-gray-600">
          选中日期: {{ selectedDate ? selectedDate.toLocaleDateString() : '无' }}
        </div>
      </div>
    `,
  }),
}

export const WithoutTodayButton = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const selectedDate = ref(null)
      
      return { 
        selectedDate
      }
    },
    template: `
      <div class="w-full max-w-sm">
        <DatePickerVue 
          v-model="selectedDate"
          placeholder="选择日期"
          :show-today="false"
        />
      </div>
    `,
  }),
}

export const InForm = {
  render: () => ({
    components: { DatePickerVue },
    setup() {
      const formData = ref({
        startDate: null,
        endDate: null,
        birthday: null
      })
      
      return { 
        formData
      }
    },
    template: `
      <div class="w-full max-w-md">
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              开始日期
            </label>
            <DatePickerVue 
              v-model="formData.startDate"
              placeholder="选择开始日期"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              结束日期
            </label>
            <DatePickerVue 
              v-model="formData.endDate"
              placeholder="选择结束日期"
              :min-date="formData.startDate"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              生日
            </label>
            <DatePickerVue 
              v-model="formData.birthday"
              placeholder="选择生日"
              :max-date="new Date()"
            />
          </div>
          
          <div class="bg-gray-50 p-3 rounded text-sm">
            <h4 class="font-medium mb-2">表单数据:</h4>
            <div>开始日期: {{ formData.startDate ? formData.startDate.toLocaleDateString() : '未选择' }}</div>
            <div>结束日期: {{ formData.endDate ? formData.endDate.toLocaleDateString() : '未选择' }}</div>
            <div>生日: {{ formData.birthday ? formData.birthday.toLocaleDateString() : '未选择' }}</div>
          </div>
        </form>
      </div>
    `,
  }),
} 