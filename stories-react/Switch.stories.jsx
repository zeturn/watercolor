import React, { useState } from 'react'
import Switch from '@/components/Switch/Switch.jsx'

export default {
  title: 'Components/Switch (React)',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 开关组件，使用现代化纯CSS设计，支持多种尺寸和颜色主题。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: '开关状态',
      control: { type: 'boolean' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    description: {
      description: '描述文本',
      control: { type: 'text' }
    },
    color: {
      description: '开关颜色主题',
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    required: {
      description: '是否必填',
      control: { type: 'boolean' }
    },
    onChange: { 
      action: 'change',
      description: '值改变时触发'
    },
  },
}

export const Primary = {
  args: {
    label: '开启通知',
    description: '接收应用通知',
    color: 'primary',
    disabled: false,
    required: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    
    return (
      <div className="w-80">
        <Switch 
          {...args}
          checked={checked}
          onChange={(value) => {
            setChecked(value)
            args.onChange?.(value)
          }}
        />
        <p className="mt-4 text-sm text-gray-500">
          当前状态: {checked ? '开启' : '关闭'}
        </p>
      </div>
    )
  },
}

export const Colors = () => {
  const [switches, setSwitches] = useState({
    primary: true,
    success: true,
    warning: true,
    error: true,
    purple: true,
    orange: true,
    cyan: true,
    pink: true,
  })

  const handleChange = (key, value) => {
    setSwitches(prev => ({ ...prev, [key]: value }))
  }

  const colors = [
    { key: 'primary', label: '主色调 (Primary)', color: 'primary' },
    { key: 'success', label: '成功色 (Success)', color: 'success' },
    { key: 'warning', label: '警告色 (Warning)', color: 'warning' },
    { key: 'error', label: '错误色 (Error)', color: 'error' },
    { key: 'purple', label: '紫色 (Purple)', color: 'purple' },
    { key: 'orange', label: '橙色 (Orange)', color: 'orange' },
    { key: 'cyan', label: '青色 (Cyan)', color: 'cyan' },
    { key: 'pink', label: '粉色 (Pink)', color: 'pink' },
  ]

  return (
    <div className="space-y-4 w-80">
      <h3 className="text-lg font-semibold mb-4">颜色主题</h3>
      {colors.map(({ key, label, color }) => (
        <Switch 
          key={key}
          checked={switches[key]}
          color={color}
          label={label}
          onChange={(value) => handleChange(key, value)}
        />
      ))}
    </div>
  )
}

export const States = () => {
  const [switches, setSwitches] = useState({
    normal: false,
    checked: true,
    disabledOff: false,
    disabledOn: true,
  })

  const handleChange = (key, value) => {
    setSwitches(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold mb-4">不同状态</h3>
      
      <div className="space-y-4">
        <Switch 
          checked={switches.normal}
          label="正常状态"
          description="可以正常切换"
          onChange={(value) => handleChange('normal', value)}
        />
        
        <Switch 
          checked={switches.checked}
          label="已选中状态"
          description="当前处于开启状态"
          color="success"
          onChange={(value) => handleChange('checked', value)}
        />
        
        <Switch 
          checked={switches.disabledOff}
          label="禁用状态（关闭）"
          description="无法进行交互"
          disabled={true}
          onChange={(value) => handleChange('disabledOff', value)}
        />
        
        <Switch 
          checked={switches.disabledOn}
          label="禁用状态（开启）"
          description="已锁定在开启状态"
          color="success"
          disabled={true}
          onChange={(value) => handleChange('disabledOn', value)}
        />
      </div>
    </div>
  )
}

export const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEffects: false,
    location: true,
    analytics: false,
    newsletter: true,
    twoFactor: false,
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const settingsConfig = [
    {
      category: '通知设置',
      items: [
        { key: 'notifications', label: '推送通知', description: '接收应用通知和提醒', color: 'primary' },
        { key: 'soundEffects', label: '声音效果', description: '播放通知声音', color: 'purple' },
        { key: 'newsletter', label: '邮件订阅', description: '接收产品更新邮件', color: 'cyan' },
      ]
    },
    {
      category: '应用设置',
      items: [
        { key: 'darkMode', label: '深色模式', description: '启用深色主题', color: 'orange' },
        { key: 'autoSave', label: '自动保存', description: '自动保存您的工作', color: 'success' },
      ]
    },
    {
      category: '隐私设置',
      items: [
        { key: 'location', label: '位置服务', description: '允许访问位置信息', color: 'warning' },
        { key: 'analytics', label: '数据分析', description: '帮助改进应用体验', color: 'error' },
        { key: 'twoFactor', label: '双重验证', description: '增强账户安全性', color: 'success' },
      ]
    }
  ]

  return (
    <div className="max-w-md">
      <h3 className="text-xl font-bold mb-6">⚙️ 应用设置</h3>
      
      <div className="space-y-6">
        {settingsConfig.map((section, sectionIndex) => (
          <div key={sectionIndex} className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-4 text-gray-800">{section.category}</h4>
            <div className="space-y-4">
              {section.items.map(({ key, label, description, color }) => (
                <Switch 
                  key={key}
                  checked={settings[key]}
                  label={label}
                  description={description}
                  color={color}
                  onChange={(value) => handleChange(key, value)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-3">当前配置摘要</h4>
          <div className="text-sm space-y-1">
            <p>✅ 已启用: {Object.values(settings).filter(Boolean).length} 项</p>
            <p>❌ 已禁用: {Object.values(settings).filter(v => !v).length} 项</p>
            <div className="mt-2 text-xs text-gray-600">
              {Object.entries(settings).filter(([_, enabled]) => enabled).map(([key, _]) => (
                <span key={key} className="inline-block mr-2 mb-1 px-2 py-1 bg-green-100 text-green-800 rounded">
                  {settingsConfig.flatMap(s => s.items).find(item => item.key === key)?.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FormIntegration = () => {
  const [formData, setFormData] = useState({
    agree: false,
    newsletter: false,
    terms: false,
    privacy: false,
  })

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.agree || !formData.terms) {
      alert('请同意必要的条款才能继续')
      return
    }
    alert('表单提交成功!\n' + JSON.stringify(formData, null, 2))
  }

  const isFormValid = formData.agree && formData.terms

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-6">📝 用户协议表单</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Switch 
            checked={formData.agree}
            label="同意服务条款"
            description="我已阅读并同意服务条款"
            color="primary"
            required={true}
            onChange={(value) => handleChange('agree', value)}
          />
          
          <Switch 
            checked={formData.terms}
            label="同意隐私政策"
            description="我已阅读并同意隐私政策"
            color="success"
            required={true}
            onChange={(value) => handleChange('terms', value)}
          />
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-700">可选设置</p>
          
          <Switch 
            checked={formData.newsletter}
            label="订阅邮件通知"
            description="接收产品更新和优惠信息"
            color="cyan"
            onChange={(value) => handleChange('newsletter', value)}
          />
          
          <Switch 
            checked={formData.privacy}
            label="隐私保护模式"
            description="启用额外的隐私保护功能"
            color="purple"
            onChange={(value) => handleChange('privacy', value)}
          />
        </div>

        <div className="mt-6">
          <button 
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              isFormValid 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isFormValid ? '提交注册' : '请完成必要选项'}
          </button>
        </div>

        <div className="text-xs text-gray-500">
          <p>* 标记为必填的选项需要同意才能继续</p>
        </div>
      </form>
    </div>
  )
}
