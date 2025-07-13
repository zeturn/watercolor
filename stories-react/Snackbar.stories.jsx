import React, { useState } from 'react'
import Snackbar from '@/components/Snackbar/Snackbar.jsx'
import ButtonReact from '@/components/Button/Button.jsx'
import '../src/components/Snackbar/style.css'

// Native CSS styles for stories
const storyStyles = {
  container: {
    padding: '32px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    maxWidth: '500px'
  },
  card: {
    padding: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb'
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1f2937'
  },
  cardText: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '12px'
  },
  infoBox: {
    marginTop: '32px',
    padding: '16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px'
  },
  infoTitle: {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1f2937'
  },
  infoList: {
    margin: '0',
    paddingLeft: '20px',
    color: '#4b5563'
  },
  emptyState: {
    textAlign: 'center',
    padding: '32px',
    color: '#6b7280'
  }
}

export default {
  title: 'Components/Snackbar (React)',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '增强版 Snackbar 组件，整合了 Toast 的功能，支持标题、图标、进度条、多种位置等。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: '是否显示',
      control: { type: 'boolean' }
    },
    message: {
      description: '消息内容',
      control: { type: 'text' }
    },
    title: {
      description: '标题',
      control: { type: 'text' }
    },
    severity: {
      description: '严重程度',
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error']
    },
    variant: {
      description: '变体样式',
      control: { type: 'select' },
      options: ['filled', 'outlined', 'standard']
    },
    autoHideDuration: {
      description: '自动隐藏时间(ms)',
      control: { type: 'number' }
    },
    closable: {
      description: '是否可关闭',
      control: { type: 'boolean' }
    },
    showIcon: {
      description: '显示图标',
      control: { type: 'boolean' }
    },
    showProgress: {
      description: '显示进度条',
      control: { type: 'boolean' }
    },
    anchorOrigin: {
      description: '位置配置',
      control: { type: 'object' }
    },
    onClose: {
      action: 'close',
      description: '关闭时触发'
    },
  },
}

export const Default = {
  args: {
    message: '这是一条提示信息',
    severity: 'info',
    variant: 'filled',
    autoHideDuration: 3000,
    closable: true,
    showIcon: true,
    showProgress: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    
    return (
      <div style={storyStyles.container}>
        <ButtonReact 
          variant="primary"
          onClick={() => setOpen(true)}
        >
          显示 Snackbar
        </ButtonReact>
        <Snackbar
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
            args.onClose?.()
          }}
        />
      </div>
    )
  },
}

// 不同严重程度
export const Severities = () => {
  const [snackbars, setSnackbars] = useState({
    success: false,
    info: false,
    warning: false,
    error: false,
  })
  
  const showSnackbar = (type) => {
    setSnackbars(prev => ({ ...prev, [type]: true }))
  }
  
  const closeSnackbar = (type) => {
    setSnackbars(prev => ({ ...prev, [type]: false }))
  }

  const severityConfig = [
    { type: 'success', label: '成功', message: '操作成功完成' },
    { type: 'info', label: '信息', message: '这是一条信息提示' },
    { type: 'warning', label: '警告', message: '请注意这个警告' },
    { type: 'error', label: '错误', message: '发生了一个错误' },
  ]
  
  return (
    <div style={storyStyles.container}>
      <div style={storyStyles.buttonGroup}>
        <ButtonReact variant="success" onClick={() => showSnackbar('success')}>
          成功
        </ButtonReact>
        <ButtonReact variant="primary" onClick={() => showSnackbar('info')}>
          信息
        </ButtonReact>
        <ButtonReact variant="warning" onClick={() => showSnackbar('warning')}>
          警告
        </ButtonReact>
        <ButtonReact variant="error" onClick={() => showSnackbar('error')}>
          错误
        </ButtonReact>
      </div>
      
      {severityConfig.map(({ type, message }) => (
        <Snackbar
          key={type}
          open={snackbars[type]}
          message={message}
          severity={type}
          onClose={() => closeSnackbar(type)}
        />
      ))}
    </div>
  )
}

// 带标题的 Snackbar
export const WithTitle = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div style={storyStyles.container}>
      <ButtonReact 
        variant="success"
        onClick={() => setOpen(true)}
      >
        显示带标题的通知
      </ButtonReact>
      <Snackbar
        open={open}
        title="重要通知"
        message="您的账户设置已成功更新，新的配置将在下次登录时生效。"
        severity="success"
        variant="filled"
        autoHideDuration={5000}
        showIcon={true}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

// 不同变体样式
export const Variants = () => {
  const [snackbars, setSnackbars] = useState({
    filled: false,
    outlined: false,
    standard: false,
  })
  
  const showSnackbar = (variant) => {
    setSnackbars(prev => ({ ...prev, [variant]: true }))
  }
  
  const closeSnackbar = (variant) => {
    setSnackbars(prev => ({ ...prev, [variant]: false }))
  }

  const variants = [
    { type: 'filled', label: 'Filled', title: 'Filled 样式', message: '这是填充样式的 Snackbar', severity: 'info' },
    { type: 'outlined', label: 'Outlined', title: 'Outlined 样式', message: '这是轮廓样式的 Snackbar，带有彩色边框', severity: 'warning' },
    { type: 'standard', label: 'Standard', title: 'Standard 样式', message: '这是标准样式的 Snackbar', severity: 'success' },
  ]
  
  return (
    <div style={storyStyles.container}>
      <div style={storyStyles.buttonGroup}>
        <ButtonReact variant="primary" onClick={() => showSnackbar('filled')}>
          Filled
        </ButtonReact>
        <ButtonReact variant="outline" onClick={() => showSnackbar('outlined')}>
          Outlined
        </ButtonReact>
        <ButtonReact variant="ghost" onClick={() => showSnackbar('standard')}>
          Standard
        </ButtonReact>
      </div>
      
      {variants.map(({ type, title, message, severity }) => (
        <Snackbar
          key={type}
          open={snackbars[type]}
          title={title}
          message={message}
          severity={severity}
          variant={type}
          onClose={() => closeSnackbar(type)}
        />
      ))}
    </div>
  )
}

// 进度条功能
export const WithProgress = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div style={storyStyles.container}>
      <ButtonReact 
        variant="primary"
        onClick={() => setOpen(true)}
      >
        显示进度条通知
      </ButtonReact>
      <Snackbar
        open={open}
        title="文件上传中"
        message="正在上传文件，请稍候..."
        severity="info"
        variant="filled"
        autoHideDuration={8000}
        showIcon={true}
        showProgress={true}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

// 位置演示
export const Positions = () => {
  const [activePosition, setActivePosition] = useState(null)
  
  const positions = [
    { key: 'top-left', label: '左上', anchorOrigin: { vertical: 'top', horizontal: 'left' } },
    { key: 'top-center', label: '顶部中央', anchorOrigin: { vertical: 'top', horizontal: 'center' } },
    { key: 'top-right', label: '右上', anchorOrigin: { vertical: 'top', horizontal: 'right' } },
    { key: 'bottom-left', label: '左下', anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
    { key: 'bottom-center', label: '底部中央', anchorOrigin: { vertical: 'bottom', horizontal: 'center' } },
    { key: 'bottom-right', label: '右下', anchorOrigin: { vertical: 'bottom', horizontal: 'right' } },
  ]
  
  return (
    <div style={storyStyles.container}>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>不同位置</h3>
      <div style={storyStyles.grid}>
        {positions.map(({ key, label, anchorOrigin }) => (
          <ButtonReact
            key={key}
            variant="ghost"
            onClick={() => setActivePosition(key)}
          >
            {label}
          </ButtonReact>
        ))}
      </div>
      
      {positions.map(({ key, label, anchorOrigin }) => (
        <Snackbar
          key={key}
          open={activePosition === key}
          message={`这是来自${label}的消息`}
          severity="info"
          anchorOrigin={anchorOrigin}
          autoHideDuration={3000}
          onClose={() => setActivePosition(null)}
        />
      ))}
    </div>
  )
}

// 综合示例
export const Comprehensive = () => {
  const [notification, setNotification] = useState(null)
  
  const showNotification = (config) => {
    setNotification(config)
  }
  
  const closeNotification = () => {
    setNotification(null)
  }

  const handleAction = () => {
    alert('执行了操作！')
    closeNotification()
  }

  const examples = [
    {
      title: '成功操作',
      button: '保存成功',
      config: {
        title: '保存成功',
        message: '您的更改已成功保存到服务器',
        severity: 'success',
        variant: 'filled',
        showIcon: true,
        autoHideDuration: 4000,
      }
    },
    {
      title: '警告信息',
      button: '存储空间不足',
      config: {
        title: '存储空间警告',
        message: '您的存储空间即将用完，请及时清理或升级',
        severity: 'warning',
        variant: 'outlined',
        showIcon: true,
        autoHideDuration: 6000,
      }
    },
    {
      title: '网络错误',
      button: '连接失败',
      config: {
        title: '网络连接失败',
        message: '无法连接到服务器，请检查您的网络连接',
        severity: 'error',
        variant: 'filled',
        showIcon: true,
        showProgress: false,
        autoHideDuration: 0, // 不自动关闭
      }
    },
    {
      title: '长时间操作',
      button: '数据同步',
      config: {
        title: '正在同步数据',
        message: '数据同步可能需要几分钟时间，请耐心等待',
        severity: 'info',
        variant: 'standard',
        showIcon: true,
        showProgress: true,
        autoHideDuration: 10000,
      }
    }
  ]
  
  return (
    <div style={{ ...storyStyles.container, maxWidth: '800px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>综合功能演示</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {examples.map(({ title, button, config }, index) => (
          <div key={index} style={storyStyles.card}>
            <h4 style={storyStyles.cardTitle}>{title}</h4>
            <p style={storyStyles.cardText}>
              {config.severity === 'success' && '✅ 操作成功完成'}
              {config.severity === 'warning' && '⚠️ 需要用户注意'}
              {config.severity === 'error' && '❌ 发生错误需要处理'}
              {config.severity === 'info' && 'ℹ️ 提供有用信息'}
            </p>
            <ButtonReact
              variant={config.severity}
              onClick={() => showNotification(config)}
              style={{ width: '100%' }}
            >
              {button}
            </ButtonReact>
          </div>
        ))}
      </div>

      {notification && (
        <Snackbar
          open={true}
          {...notification}
          onClose={closeNotification}
          action={
            notification.severity === 'error' ? '重试' : null
          }
          onAction={handleAction}
        />
      )}

      <div style={storyStyles.infoBox}>
        <h4 style={storyStyles.infoTitle}>使用说明</h4>
        <ul style={storyStyles.infoList}>
          <li><strong>成功操作:</strong> 确认型通知，4秒后自动消失</li>
          <li><strong>警告信息:</strong> 轮廓样式，6秒后自动消失</li>
          <li><strong>网络错误:</strong> 不会自动消失，需要手动关闭</li>
          <li><strong>长时间操作:</strong> 带进度条，10秒后自动消失</li>
        </ul>
      </div>
    </div>
  )
}

// 实际应用场景
export const RealWorldExamples = () => {
  const [notifications, setNotifications] = useState([])
  
  const addNotification = (config) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { ...config, id }])
    
    if (config.autoHideDuration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, config.autoHideDuration)
    }
  }
  
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const scenarios = [
    {
      title: '📧 邮件发送',
      action: () => addNotification({
        title: '邮件发送成功',
        message: '您的邮件已成功发送给 3 位收件人',
        severity: 'success',
        autoHideDuration: 4000,
        showIcon: true,
      })
    },
    {
      title: '💾 自动保存',
      action: () => addNotification({
        message: '草稿已自动保存',
        severity: 'info',
        variant: 'standard',
        autoHideDuration: 2000,
        showIcon: false,
      })
    },
    {
      title: '🔒 登录过期',
      action: () => addNotification({
        title: '会话已过期',
        message: '您的登录会话已过期，请重新登录',
        severity: 'warning',
        variant: 'outlined',
        autoHideDuration: 0,
        showIcon: true,
      })
    },
    {
      title: '📁 文件上传',
      action: () => addNotification({
        title: '正在上传文件',
        message: '文件上传中，请勿关闭页面...',
        severity: 'info',
        showProgress: true,
        autoHideDuration: 6000,
        showIcon: true,
      })
    },
    {
      title: '❌ 网络错误',
      action: () => addNotification({
        title: '操作失败',
        message: '网络连接超时，请稍后重试',
        severity: 'error',
        autoHideDuration: 0,
        showIcon: true,
      })
    }
  ]
  
  return (
    <div style={{ ...storyStyles.container, maxWidth: '1200px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>实际应用场景</h3>
      
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontWeight: '500', marginBottom: '12px' }}>触发不同类型的通知：</h4>
        <div style={storyStyles.buttonGroup}>
          {scenarios.map(({ title, action }, index) => (
            <ButtonReact
              key={index}
              variant="primary"
              onClick={action}
            >
              {title}
            </ButtonReact>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <ButtonReact
          variant="error"
          onClick={() => setNotifications([])}
        >
          清空所有通知
        </ButtonReact>
      </div>

      {/* 显示当前活跃的通知 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {notifications.map((notification) => (
          <Snackbar
            key={notification.id}
            open={true}
            {...notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>

      {notifications.length === 0 && (
        <div style={storyStyles.emptyState}>
          没有活跃的通知
        </div>
      )}
    </div>
  )
}
