import React, { useState } from 'react'
import Select from '@/components/Select/Select.jsx'

export default {
  title: 'Components/Select (React)',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 选择器组件，支持单选、多选、搜索等功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
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
    onChange: { 
      action: 'change',
      description: '值改变时触发'
    },
  },
}

const basicOptions = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
  { label: '选项 4', value: 'option4' }
]

export const Primary = {
  args: {
    label: '选择选项',
    options: basicOptions,
    placeholder: '请选择一个选项',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    required: false,
    multiple: false,
    searchable: false,
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('')
    
    return (
      <div className="w-80">
        <Select 
          {...args}
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value)
            args.onChange?.(e.target.value)
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          选中值: {selectedValue || '无'}
        </p>
      </div>
    )
  },
}

export const Multiple = () => {
  const [selectedValues, setSelectedValues] = useState([])
  
  const skillOptions = [
    { label: 'Vue.js', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Node.js', value: 'nodejs' }
  ]

  return (
    <div className="w-80">
      <Select 
        label="选择技能"
        options={skillOptions}
        placeholder="请选择您的技能"
        multiple={true}
        size="md"
        variant="outlined"
        value={selectedValues}
        onChange={(e) => setSelectedValues(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">
        已选择: {selectedValues.length} 项
      </p>
      {selectedValues.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {selectedValues.map(val => {
            const option = skillOptions.find(opt => opt.value === val)
            return (
              <span key={val} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                {option?.label}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const Searchable = () => {
  const [selectedValue, setSelectedValue] = useState('')
  
  const countryOptions = [
    { label: '中国', value: 'china' },
    { label: '美国', value: 'usa' },
    { label: '英国', value: 'uk' },
    { label: '法国', value: 'france' },
    { label: '德国', value: 'germany' },
    { label: '日本', value: 'japan' },
    { label: '韩国', value: 'korea' },
    { label: '澳大利亚', value: 'australia' }
  ]

  return (
    <div className="w-80">
      <Select 
        label="搜索国家"
        options={countryOptions}
        placeholder="搜索并选择国家"
        searchable={true}
        size="md"
        variant="outlined"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">
        选中国家: {countryOptions.find(c => c.value === selectedValue)?.label || '无'}
      </p>
    </div>
  )
}

export const Variants = () => {
  const [values, setValues] = useState({
    outlined: '',
    filled: '',
    standard: ''
  })

  const handleChange = (variant, value) => {
    setValues(prev => ({ ...prev, [variant]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold">不同变体样式</h3>
      
      <div className="space-y-4">
        <Select 
          label="Outlined 变体"
          options={basicOptions}
          placeholder="选择一个选项"
          variant="outlined"
          value={values.outlined}
          onChange={(e) => handleChange('outlined', e.target.value)}
        />
        
        <Select 
          label="Filled 变体"
          options={basicOptions}
          placeholder="选择一个选项"
          variant="filled"
          value={values.filled}
          onChange={(e) => handleChange('filled', e.target.value)}
        />
        
        <Select 
          label="Standard 变体"
          options={basicOptions}
          placeholder="选择一个选项"
          variant="standard"
          value={values.standard}
          onChange={(e) => handleChange('standard', e.target.value)}
        />
      </div>
    </div>
  )
}

export const Sizes = () => {
  const [values, setValues] = useState({
    sm: '',
    md: '',
    lg: ''
  })

  const handleChange = (size, value) => {
    setValues(prev => ({ ...prev, [size]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold">不同尺寸</h3>
      
      <div className="space-y-4">
        <Select 
          label="小尺寸 (sm)"
          options={basicOptions}
          placeholder="选择选项"
          size="sm"
          value={values.sm}
          onChange={(e) => handleChange('sm', e.target.value)}
        />
        
        <Select 
          label="中等尺寸 (md)"
          options={basicOptions}
          placeholder="选择选项"
          size="md"
          value={values.md}
          onChange={(e) => handleChange('md', e.target.value)}
        />
        
        <Select 
          label="大尺寸 (lg)"
          options={basicOptions}
          placeholder="选择选项"
          size="lg"
          value={values.lg}
          onChange={(e) => handleChange('lg', e.target.value)}
        />
      </div>
    </div>
  )
}

export const States = () => {
  const [values, setValues] = useState({
    normal: '',
    error: '',
    disabled: 'option1',
    required: ''
  })

  const handleChange = (state, value) => {
    setValues(prev => ({ ...prev, [state]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold">不同状态</h3>
      
      <div className="space-y-4">
        <Select 
          label="正常状态"
          options={basicOptions}
          placeholder="选择选项"
          value={values.normal}
          onChange={(e) => handleChange('normal', e.target.value)}
        />
        
        <Select 
          label="错误状态"
          options={basicOptions}
          placeholder="选择选项"
          error={true}
          helperText="请选择一个有效选项"
          value={values.error}
          onChange={(e) => handleChange('error', e.target.value)}
        />
        
        <Select 
          label="禁用状态"
          options={basicOptions}
          placeholder="已禁用"
          disabled={true}
          value={values.disabled}
          onChange={(e) => handleChange('disabled', e.target.value)}
        />
        
        <Select 
          label="必填字段"
          options={basicOptions}
          placeholder="必须选择"
          required={true}
          helperText="此字段为必填项"
          value={values.required}
          onChange={(e) => handleChange('required', e.target.value)}
        />
      </div>
    </div>
  )
}

export const FormExample = () => {
  const [formData, setFormData] = useState({
    department: '',
    position: [],
    country: '',
    experience: ''
  })

  const departments = [
    { label: '技术部', value: 'tech' },
    { label: '产品部', value: 'product' },
    { label: '设计部', value: 'design' },
    { label: '市场部', value: 'marketing' }
  ]

  const positions = [
    { label: '前端开发', value: 'frontend' },
    { label: '后端开发', value: 'backend' },
    { label: '全栈开发', value: 'fullstack' },
    { label: 'UI设计师', value: 'ui' },
    { label: 'UX设计师', value: 'ux' },
    { label: '产品经理', value: 'pm' }
  ]

  const countries = [
    { label: '中国', value: 'cn' },
    { label: '美国', value: 'us' },
    { label: '英国', value: 'uk' },
    { label: '加拿大', value: 'ca' }
  ]

  const experienceLevels = [
    { label: '应届毕业生', value: 'fresh' },
    { label: '1-3年', value: '1-3' },
    { label: '3-5年', value: '3-5' },
    { label: '5年以上', value: '5+' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('表单数据：\n' + JSON.stringify(formData, null, 2))
  }

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-6">员工信息表单</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Select 
          label="所属部门"
          options={departments}
          placeholder="请选择部门"
          required={true}
          value={formData.department}
          onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
        />
        
        <Select 
          label="职位技能"
          options={positions}
          placeholder="选择相关技能"
          multiple={true}
          value={formData.position}
          onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
        />
        
        <Select 
          label="工作国家"
          options={countries}
          placeholder="搜索并选择国家"
          searchable={true}
          value={formData.country}
          onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
        />
        
        <Select 
          label="工作经验"
          options={experienceLevels}
          placeholder="选择经验水平"
          value={formData.experience}
          onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
        />
        
        <button 
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          提交表单
        </button>
      </form>
    </div>
  )
}
