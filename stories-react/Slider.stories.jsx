import React, { useState } from 'react'
import Slider from '@/components/Slider/Slider.jsx'

export default {
  title: 'Components/Slider (React)',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 滑块组件，支持连续值选择、步长设置、值标签显示等功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '滑块的当前值',
      control: { type: 'number' },
    },
    min: {
      description: '最小值',
      control: { type: 'number' },
    },
    max: {
      description: '最大值',
      control: { type: 'number' },
    },
    step: {
      description: '步长',
      control: { type: 'number' },
    },
    label: {
      description: '标签文本',
      control: { type: 'text' },
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' },
    },
    valueLabelDisplay: {
      control: { type: 'select' },
      options: ['off', 'on', 'auto'],
      description: '值标签的显示方式',
    },
    onChange: { 
      action: 'change',
      description: '值改变时触发'
    },
  },
}

export const Primary = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    label: '音量',
    valueLabelDisplay: 'on',
    disabled: false,
  },
  render: (args) => {
    const [sliderValue, setSliderValue] = useState(args.value)
    
    return (
      <div className="w-80">
        <Slider 
          {...args}
          value={sliderValue}
          onChange={(value) => {
            setSliderValue(value)
            args.onChange?.(value)
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          当前值: {sliderValue}
        </p>
      </div>
    )
  },
}

export const Temperature = () => {
  const [temperature, setTemperature] = useState(20)
  
  return (
    <div className="w-80">
      <Slider 
        value={temperature}
        min={-10}
        max={40}
        step={0.5}
        label="温度 (°C)"
        valueLabelDisplay="on"
        onChange={setTemperature}
      />
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-sm">
          <strong>当前温度:</strong> {temperature}°C
        </p>
        <p className="text-xs text-gray-600 mt-1">
          {temperature < 0 ? '❄️ 非常寒冷' : 
           temperature < 10 ? '🥶 寒冷' :
           temperature < 25 ? '😊 温和' :
           temperature < 35 ? '🌞 温暖' : '🔥 炎热'}
        </p>
      </div>
    </div>
  )
}

export const Disabled = () => {
  const [sliderValue, setSliderValue] = useState(30)
  
  return (
    <div className="w-80">
      <Slider 
        value={sliderValue}
        min={0}
        max={100}
        step={1}
        label="禁用滑块"
        valueLabelDisplay="on"
        disabled={true}
        onChange={setSliderValue}
      />
      <p className="mt-2 text-sm text-gray-500">
        禁用状态下无法交互
      </p>
    </div>
  )
}

export const StepSizes = () => {
  const [values, setValues] = useState({
    fine: 50,
    coarse: 50,
    marks: 50
  })

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold">不同步长</h3>
      
      <div className="space-y-4">
        <Slider 
          value={values.fine}
          min={0}
          max={100}
          step={1}
          label="精细步长 (step=1)"
          valueLabelDisplay="on"
          onChange={(value) => handleChange('fine', value)}
        />
        
        <Slider 
          value={values.coarse}
          min={0}
          max={100}
          step={10}
          label="粗粒度步长 (step=10)"
          valueLabelDisplay="on"
          onChange={(value) => handleChange('coarse', value)}
        />
        
        <Slider 
          value={values.marks}
          min={0}
          max={100}
          step={25}
          label="标记步长 (step=25)"
          valueLabelDisplay="on"
          onChange={(value) => handleChange('marks', value)}
        />
      </div>
    </div>
  )
}

export const ValueLabelDisplay = () => {
  const [values, setValues] = useState({
    off: 30,
    on: 60,
    auto: 45
  })

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold">值标签显示模式</h3>
      
      <div className="space-y-4">
        <Slider 
          value={values.off}
          min={0}
          max={100}
          step={1}
          label="隐藏标签 (off)"
          valueLabelDisplay="off"
          onChange={(value) => handleChange('off', value)}
        />
        
        <Slider 
          value={values.on}
          min={0}
          max={100}
          step={1}
          label="始终显示 (on)"
          valueLabelDisplay="on"
          onChange={(value) => handleChange('on', value)}
        />
        
        <Slider 
          value={values.auto}
          min={0}
          max={100}
          step={1}
          label="自动显示 (auto)"
          valueLabelDisplay="auto"
          onChange={(value) => handleChange('auto', value)}
        />
      </div>
    </div>
  )
}

export const ControlPanel = () => {
  const [settings, setSettings] = useState({
    volume: 75,
    brightness: 80,
    bass: 40,
    treble: 60,
    balance: 50
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-6">🎵 音频控制面板</h3>
      
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-4">主音量控制</h4>
          <Slider 
            value={settings.volume}
            min={0}
            max={100}
            step={1}
            label={`音量: ${settings.volume}%`}
            valueLabelDisplay="on"
            onChange={(value) => handleChange('volume', value)}
          />
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-4">显示设置</h4>
          <Slider 
            value={settings.brightness}
            min={10}
            max={100}
            step={5}
            label={`亮度: ${settings.brightness}%`}
            valueLabelDisplay="on"
            onChange={(value) => handleChange('brightness', value)}
          />
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-4">音频均衡器</h4>
          <div className="space-y-4">
            <Slider 
              value={settings.bass}
              min={0}
              max={100}
              step={1}
              label="低音"
              valueLabelDisplay="on"
              onChange={(value) => handleChange('bass', value)}
            />
            
            <Slider 
              value={settings.treble}
              min={0}
              max={100}
              step={1}
              label="高音"
              valueLabelDisplay="on"
              onChange={(value) => handleChange('treble', value)}
            />
            
            <Slider 
              value={settings.balance}
              min={0}
              max={100}
              step={1}
              label="平衡 (L-R)"
              valueLabelDisplay="on"
              onChange={(value) => handleChange('balance', value)}
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">当前设置</h4>
          <div className="text-sm space-y-1">
            <p>🔊 音量: {settings.volume}%</p>
            <p>💡 亮度: {settings.brightness}%</p>
            <p>🎚️ 低音: {settings.bass}, 高音: {settings.treble}</p>
            <p>⚖️ 声道平衡: {settings.balance < 50 ? '偏左' : settings.balance > 50 ? '偏右' : '居中'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PriceRange = () => {
  const [priceRange, setPriceRange] = useState({
    min: 100,
    max: 500
  })

  return (
    <div className="w-80">
      <h3 className="text-lg font-semibold mb-4">💰 价格范围选择</h3>
      
      <div className="space-y-4">
        <Slider 
          value={priceRange.min}
          min={0}
          max={1000}
          step={10}
          label="最低价格"
          valueLabelDisplay="on"
          onChange={(value) => setPriceRange(prev => ({ 
            ...prev, 
            min: Math.min(value, prev.max - 10) 
          }))}
        />
        
        <Slider 
          value={priceRange.max}
          min={0}
          max={1000}
          step={10}
          label="最高价格"
          valueLabelDisplay="on"
          onChange={(value) => setPriceRange(prev => ({ 
            ...prev, 
            max: Math.max(value, prev.min + 10) 
          }))}
        />
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm font-medium text-blue-800">
          价格范围: ¥{priceRange.min} - ¥{priceRange.max}
        </p>
        <p className="text-xs text-blue-600">
          价格区间: ¥{priceRange.max - priceRange.min}
        </p>
      </div>
    </div>
  )
}
