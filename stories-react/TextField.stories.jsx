import React, { useState } from 'react'
import TextField from '@/components/TextField/TextField.jsx'
import '@/components/TextField/style.css'

export default {
  title: 'Components/TextField (React)',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '水彩设计系统的文本字段组件，完全兼容Material-UI的TextField API。支持多种变体、尺寸和验证状态。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '输入框的值',
      control: { type: 'text' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    type: {
      description: '输入框类型',
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url']
    },
    placeholder: {
      description: '占位符文本',
      control: { type: 'text' }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    readonly: {
      description: '是否只读',
      control: { type: 'boolean' }
    },
    required: {
      description: '是否必填',
      control: { type: 'boolean' }
    },
    error: {
      description: '错误信息',
      control: { type: 'text' }
    },
    helperText: {
      description: '帮助文本',
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
    fullWidth: {
      description: '是否全宽',
      control: { type: 'boolean' }
    },
    multiline: {
      description: '是否多行',
      control: { type: 'boolean' }
    },
    rows: {
      description: '多行时的行数',
      control: { type: 'number' }
    },
    startAdornment: {
      description: '前置装饰',
      control: { type: 'text' }
    },
    endAdornment: {
      description: '后置装饰',
      control: { type: 'text' }
    }
  },
}

export const Default = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名'
  },
  render: (args) => (
    <div className="p-6 min-w-80">
      <TextField {...args} />
    </div>
  )
}

export const Variants = () => (
  <div className="p-6 space-y-5 min-w-80">
    <h3 className="text-lg font-semibold mb-4">变体样式</h3>
    <TextField 
      label="Outlined (默认)" 
      variant="outlined" 
      placeholder="Outlined variant"
      helperText="这是outlined变体"
    />
    <TextField 
      label="Filled" 
      variant="filled" 
      placeholder="Filled variant"
      helperText="这是filled变体"
    />
    <TextField 
      label="Standard" 
      variant="standard" 
      placeholder="Standard variant"
      helperText="这是standard变体"
    />
  </div>
)

export const Sizes = () => (
  <div className="p-6 space-y-4 min-w-80">
    <h3 className="text-lg font-semibold mb-4">尺寸大小</h3>
    <TextField 
      label="小尺寸" 
      size="sm" 
      placeholder="小尺寸输入框"
    />
    <TextField 
      label="中等尺寸" 
      size="md" 
      placeholder="中等尺寸输入框"
    />
    <TextField 
      label="大尺寸" 
      size="lg" 
      placeholder="大尺寸输入框"
    />
  </div>
)

export const States = () => (
  <div className="p-6 space-y-4 min-w-80">
    <h3 className="text-lg font-semibold mb-4">状态</h3>
    <TextField 
      label="正常状态" 
      placeholder="正常状态"
      helperText="这是帮助文本"
    />
    <TextField 
      label="必填字段" 
      placeholder="必填字段"
      required
      helperText="这是必填字段"
    />
    <TextField 
      label="错误状态" 
      placeholder="错误状态"
      error="这是错误信息"
    />
    <TextField 
      label="禁用状态" 
      placeholder="禁用状态"
      disabled
      value="禁用的值"
    />
    <TextField 
      label="只读状态" 
      placeholder="只读状态"
      readonly
      value="只读的值"
      helperText="这是只读字段"
    />
  </div>
)

export const InputTypes = () => (
  <div className="p-6 space-y-4 min-w-80">
    <h3 className="text-lg font-semibold mb-4">输入类型</h3>
    <TextField 
      type="text"
      label="文本" 
      placeholder="输入文本"
    />
    <TextField 
      type="password"
      label="密码" 
      placeholder="输入密码"
    />
    <TextField 
      type="email"
      label="邮箱" 
      placeholder="输入邮箱地址"
    />
    <TextField 
      type="number"
      label="数字" 
      placeholder="输入数字"
    />
    <TextField 
      type="tel"
      label="电话" 
      placeholder="输入电话号码"
    />
    <TextField 
      type="url"
      label="网址" 
      placeholder="输入网址"
    />
  </div>
)

export const WithAdornments = () => (
  <div className="p-6 space-y-4 min-w-80">
    <h3 className="text-lg font-semibold mb-4">装饰元素</h3>
    <TextField 
      label="用户名" 
      placeholder="输入用户名"
      startAdornment="👤"
    />
    <TextField 
      label="密码" 
      type="password"
      placeholder="输入密码"
      endAdornment="🔒"
    />
    <TextField 
      label="搜索" 
      placeholder="搜索内容"
      startAdornment="🔍"
      endAdornment="⌘K"
    />
    <TextField 
      label="金额" 
      type="number"
      placeholder="0.00"
      startAdornment="¥"
      endAdornment="CNY"
    />
  </div>
)

export const Multiline = () => {
  const [value, setValue] = useState('')
  
  return (
    <div className="p-6 space-y-4 min-w-80">
      <h3 className="text-lg font-semibold mb-4">多行文本</h3>
      <TextField 
        label="评论" 
        placeholder="请输入您的评论..."
        multiline
        rows={3}
        helperText="最多500字"
      />
      <TextField 
        label="描述" 
        placeholder="详细描述..."
        multiline
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={`${value.length}/1000 字符`}
      />
      <TextField 
        label="自动调整高度" 
        placeholder="输入内容，高度会自动调整"
        multiline
        variant="filled"
      />
    </div>
  )
}

export const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bio: '',
  })
  
  const [errors, setErrors] = useState({})
  
  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username) newErrors.username = '用户名不能为空'
    if (!formData.email) newErrors.email = '邮箱不能为空'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = '邮箱格式不正确'
    if (!formData.password) newErrors.password = '密码不能为空'
    else if (formData.password.length < 6) newErrors.password = '密码至少6位'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = '两次密码不一致'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('表单提交成功！')
    }
  }
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-6">用户注册表单</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="用户名"
          placeholder="请输入用户名"
          value={formData.username}
          onChange={handleChange('username')}
          error={errors.username}
          required
          fullWidth
          startAdornment="👤"
        />
        
        <TextField
          label="邮箱地址"
          type="email"
          placeholder="请输入邮箱"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
          fullWidth
          startAdornment="📧"
        />
        
        <TextField
          label="密码"
          type="password"
          placeholder="请输入密码"
          value={formData.password}
          onChange={handleChange('password')}
          error={errors.password}
          required
          fullWidth
          helperText="密码至少6位"
          startAdornment="🔒"
        />
        
        <TextField
          label="确认密码"
          type="password"
          placeholder="请再次输入密码"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          error={errors.confirmPassword}
          required
          fullWidth
          startAdornment="🔒"
        />
        
        <TextField
          label="手机号码"
          type="tel"
          placeholder="请输入手机号"
          value={formData.phone}
          onChange={handleChange('phone')}
          fullWidth
          startAdornment="📱"
        />
        
        <TextField
          label="个人简介"
          placeholder="介绍一下自己..."
          multiline
          rows={3}
          value={formData.bio}
          onChange={handleChange('bio')}
          fullWidth
          helperText="选填，最多200字"
        />
        
        <button 
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          注册账户
        </button>
      </form>
    </div>
  )
}

export const SearchWithSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions] = useState([
    '前端开发', '后端开发', '全栈开发', '移动开发', 
    '产品设计', 'UI设计', 'UX设计', '数据分析'
  ])
  
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="p-6 min-w-80">
      <h3 className="text-lg font-semibold mb-4">搜索建议</h3>
      <div className="relative">
        <TextField
          label="搜索职位"
          placeholder="输入关键字搜索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          startAdornment="🔍"
          variant="outlined"
        />
        
        {searchTerm && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                onClick={() => setSearchTerm(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal'
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('消息发送成功！我们会尽快回复您。')
  }
  
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h3 className="text-lg font-semibold mb-6">联系我们</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="姓名"
            placeholder="您的姓名"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            variant="outlined"
          />
          <TextField
            label="邮箱"
            type="email"
            placeholder="您的邮箱"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            variant="outlined"
          />
        </div>
        
        <TextField
          label="主题"
          placeholder="消息主题"
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          required
          fullWidth
          variant="outlined"
        />
        
        <div>
          <label className="block text-sm font-medium mb-2">紧急程度</label>
          <select 
            value={formData.urgency}
            onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="low">低</option>
            <option value="normal">普通</option>
            <option value="high">高</option>
            <option value="urgent">紧急</option>
          </select>
        </div>
        
        <TextField
          label="消息内容"
          placeholder="请详细描述您的问题或需求..."
          multiline
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          fullWidth
          variant="outlined"
          helperText="请提供尽可能详细的信息，以便我们更好地为您服务"
        />
        
        <div className="flex gap-3">
          <button 
            type="submit"
            className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            发送消息
          </button>
          <button 
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setFormData({ name: '', email: '', subject: '', message: '', urgency: 'normal' })}
          >
            重置
          </button>
        </div>
      </form>
    </div>
  )
}
