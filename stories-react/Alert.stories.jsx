import React from 'react'
import Alert from '@/components/Alert/Alert.jsx'

export default {
  title: 'Components/Alert (React)',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      description: '警告类型',
    },
    title: {
      control: 'text',
      description: '警告标题',
    },
    children: {
      control: 'text',
      description: '警告消息',
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'standard'],
      description: '警告变体',
    },
    onClose: { action: 'close' },
  },
}

export const Success = {
  args: {
    type: 'success',
    title: '操作成功',
    children: '您的操作已成功完成！数据已保存到系统中。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Alert 
        type={args.type}
        title={args.title}
        closable={args.closable}
        showIcon={args.showIcon}
        variant={args.variant}
        onClose={args.onClose}
      >
        {args.children}
      </Alert>
    </div>
  ),
}

export const Info = {
  args: {
    type: 'info',
    title: '系统通知',
    children: '系统将在今晚11点进行维护升级，预计持续2小时。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Alert 
        type={args.type}
        title={args.title}
        closable={args.closable}
        showIcon={args.showIcon}
        variant={args.variant}
        onClose={args.onClose}
      >
        {args.children}
      </Alert>
    </div>
  ),
}

export const Warning = {
  args: {
    type: 'warning',
    title: '重要提醒',
    children: '您的账户余额不足，请及时充值以确保服务正常使用。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Alert 
        type={args.type}
        title={args.title}
        closable={args.closable}
        showIcon={args.showIcon}
        variant={args.variant}
        onClose={args.onClose}
      >
        {args.children}
      </Alert>
    </div>
  ),
}

export const Error = {
  args: {
    type: 'error',
    title: '操作失败',
    children: '网络连接异常，请检查网络设置后重试。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Alert 
        type={args.type}
        title={args.title}
        closable={args.closable}
        showIcon={args.showIcon}
        variant={args.variant}
        onClose={args.onClose}
      >
        {args.children}
      </Alert>
    </div>
  ),
}

export const WithoutTitle = {
  args: {
    type: 'info',
    title: '',
    children: '这是一个没有标题的简单警告信息。',
    closable: false,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <Alert 
        type={args.type}
        title={args.title}
        closable={args.closable}
        showIcon={args.showIcon}
        variant={args.variant}
        onClose={args.onClose}
      >
        {args.children}
      </Alert>
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert 
        type="info"
        title="填充样式"
        variant="filled"
      >
        这是填充样式的警告信息。
      </Alert>
      <Alert 
        type="info"
        title="边框样式"
        variant="outlined"
      >
        这是边框样式的警告信息。
      </Alert>
      <Alert 
        type="info"
        title="标准样式"
        variant="standard"
      >
        这是标准样式的警告信息。
      </Alert>
    </div>
  ),
}

export const AllTypes = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert 
        type="success"
        title="成功"
        closable={true}
      >
        操作执行成功！
      </Alert>
      <Alert 
        type="info"
        title="信息"
        closable={true}
      >
        这是一条信息提醒。
      </Alert>
      <Alert 
        type="warning"
        title="警告"
        closable={true}
      >
        请注意这个重要提醒。
      </Alert>
      <Alert 
        type="error"
        title="错误"
        closable={true}
      >
        发生了一个错误，请重试。
      </Alert>
    </div>
  ),
}

export const WithCustomContent = {
  render: () => (
    <div className="w-full max-w-lg">
      <Alert 
        type="info"
        title="自定义内容"
        closable={true}
      >
        <div className="space-y-2">
          <p>您可以在这里添加自定义内容：</p>
          <ul className="list-disc pl-4">
            <li>支持 HTML 标签</li>
            <li>可以添加<strong>粗体</strong>和<em>斜体</em></li>
            <li>支持<a href="#" className="text-blue-500 underline">链接</a></li>
          </ul>
        </div>
      </Alert>
    </div>
  ),
}
