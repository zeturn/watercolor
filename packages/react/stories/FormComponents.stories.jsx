import React, { useState } from 'react'
import FormControl from '@/components/Form/FormControl.jsx'
import FormControlLabel from '@/components/Form/FormControlLabel.jsx'
import FormGroup from '@/components/Form/FormGroup.jsx'
import FormHelperText from '@/components/Form/FormHelperText.jsx'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'
import Radio from '@/components/Radio/Radio.jsx'
import Switch from '@/components/Switch/Switch.jsx'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.jsx'

export default {
  title: 'Components/Form (React)',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的表单组件系统，包含FormControl、FormControlLabel、FormGroup和FormHelperText。使用现代化纯CSS设计，减少阴影效果。'
      }
    }
  },
  tags: ['autodocs']
}

export const FormControlExample = {
  render: () => {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [radioValue, setRadioValue] = useState('option1')
    const [switchValue, setSwitchValue] = useState(false)

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">FormControl with Checkbox</h3>
          <FormControl error={false} margin="normal">
            <FormControlLabel
              label="我同意服务条款"
              control={<Checkbox aria-label="我同意服务条款" checked={checkboxValue} onChange={(e) => setCheckboxValue(e.target.checked)} />}
              required
            />
            <FormHelperText>请阅读并同意我们的服务条款</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">FormControl with Radio (Error State)</h3>
          <FormControl error={true} margin="normal">
            <FormControlLabel
              label="选项 1"
              control={<Radio aria-label="选项 1" checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} />}
            />
            <FormControlLabel
              label="选项 2"
              control={<Radio aria-label="选项 2" checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} />}
            />
            <FormHelperText error>请选择一个有效选项</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">FormControl with Switch</h3>
          <FormControl margin="normal">
            <FormControlLabel
              label="启用通知"
              control={<Switch checked={switchValue} onChange={(e) => setSwitchValue(e.target.checked)} />}
              labelPlacement="start"
            />
            <FormHelperText>开启后将接收系统通知</FormHelperText>
          </FormControl>
        </div>
      </div>
    )
  }
}

export const FormGroupExample = {
  render: () => {
    const [interests, setInterests] = useState([])
    const [gender, setGender] = useState('')
    const [preferences, setPreferences] = useState([])

    const handleInterestsChange = (e) => {
      const { value, checked } = e.target
      if (checked) {
        setInterests(prev => [...prev, value])
      } else {
        setInterests(prev => prev.filter(item => item !== value))
      }
    }

    const handlePreferencesChange = (e) => {
      const { value, checked } = e.target
      if (checked) {
        setPreferences(prev => [...prev, value])
      } else {
        setPreferences(prev => prev.filter(item => item !== value))
      }
    }

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">垂直FormGroup - 兴趣爱好</h3>
          <FormControl margin="normal">
            <FormGroup>
              <FormControlLabel label="阅读" control={<Checkbox value="reading" onChange={handleInterestsChange} />} />
              <FormControlLabel label="运动" control={<Checkbox value="sports" onChange={handleInterestsChange} />} />
              <FormControlLabel label="音乐" control={<Checkbox value="music" onChange={handleInterestsChange} />} />
            </FormGroup>
            <FormHelperText>选择您的兴趣爱好 (已选: {interests.join(', ') || '无'})</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">水平FormGroup - 性别</h3>
          <FormControl margin="normal">
            <FormGroup row>
              <FormControlLabel label="男性" control={<Radio checked={gender === 'male'} onChange={() => setGender('male')} />} />
              <FormControlLabel label="女性" control={<Radio checked={gender === 'female'} onChange={() => setGender('female')} />} />
              <FormControlLabel label="其他" control={<Radio checked={gender === 'other'} onChange={() => setGender('other')} />} />
            </FormGroup>
            <FormHelperText>请选择您的性别 (已选: {gender || '无'})</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">紧凑间距FormGroup</h3>
          <FormControl margin="normal">
            <FormGroup spacing="compact">
              <FormControlLabel label="邮件通知" control={<Checkbox value="email" onChange={handlePreferencesChange} />} />
              <FormControlLabel label="短信通知" control={<Checkbox value="sms" onChange={handlePreferencesChange} />} />
            </FormGroup>
            <FormHelperText>选择您的通知偏好 (已选: {preferences.join(', ') || '无'})</FormHelperText>
          </FormControl>
        </div>
      </div>
    )
  }
}

export const LoginFormExample = {
  render: () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
      const newErrors = {}
      if (!email) {
        newErrors.email = '邮箱地址不能为空'
      } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
        newErrors.email = '邮箱地址格式不正确'
      }
      if (!password) {
        newErrors.password = '密码不能为空'
      } else if (password.length < 8) {
        newErrors.password = '密码长度不能少于8位'
      }
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (validateForm()) {
        alert('登录成功!')
      }
    }

    return (
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg max-w-sm space-y-4">
        <h2 className="text-xl font-bold text-center">登录</h2>
        <FormControl margin="normal" fullWidth error={!!errors.email}>
          <FormControlLabel label="邮箱地址" required />
          <Input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入邮箱"
            error={!!errors.email}
          />
          {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
        </FormControl>

        <FormControl margin="normal" fullWidth error={!!errors.password}>
          <FormControlLabel label="密码" required />
          <Input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
            error={!!errors.password}
          />
          {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
        </FormControl>

        <FormGroup row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControlLabel 
            label="记住我"
            control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
          />
          <a href="#" className="text-sm text-blue-600 hover:underline">忘记密码?</a>
        </FormGroup>
        
        <Button type="submit" color="primary" fullWidth>登录</Button>
      </form>
    )
  }
} 
