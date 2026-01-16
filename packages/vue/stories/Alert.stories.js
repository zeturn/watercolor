import AlertVue from '../src/components/Alert/Alert.vue'

export default {
  title: 'Components/Alert (Vue)',
  component: AlertVue,
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
    message: {
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
    message: '您的操作已成功完成！数据已保存到系统中。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => ({
    components: { AlertVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 32rem;">
        <AlertVue 
          :type="args.type"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :variant="args.variant"
          @close="args.onClose"
        />
      </div>
    `,
  }),
}

export const Info = {
  args: {
    type: 'info',
    title: '系统通知',
    message: '系统将在今晚11点进行维护升级，预计持续2小时。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => ({
    components: { AlertVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 32rem;">
        <AlertVue 
          :type="args.type"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :variant="args.variant"
          @close="args.onClose"
        />
      </div>
    `,
  }),
}

export const Warning = {
  args: {
    type: 'warning',
    title: '重要提醒',
    message: '您的账户余额不足，请及时充值以确保服务正常使用。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => ({
    components: { AlertVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 32rem;">
        <AlertVue 
          :type="args.type"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :variant="args.variant"
          @close="args.onClose"
        />
      </div>
    `,
  }),
}

export const Error = {
  args: {
    type: 'error',
    title: '操作失败',
    message: '网络连接异常，请检查网络设置后重试。',
    closable: true,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => ({
    components: { AlertVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 32rem;">
        <AlertVue 
          :type="args.type"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :variant="args.variant"
          @close="args.onClose"
        />
      </div>
    `,
  }),
}

export const WithoutTitle = {
  args: {
    type: 'info',
    title: '',
    message: '这是一个没有标题的简单警告信息。',
    closable: false,
    showIcon: true,
    variant: 'standard',
  },
  render: (args) => ({
    components: { AlertVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; max-width: 32rem;">
        <AlertVue 
          :type="args.type"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :variant="args.variant"
          @close="args.onClose"
        />
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { AlertVue },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 32rem; margin-bottom: 40px; padding: 16px; border-radius: 8px;">
        <AlertVue 
          type="info"
          title="填充样式"
          message="这是填充样式的警告信息。"
          variant="filled"
        />
        <AlertVue 
          type="info"
          title="边框样式"
          message="这是边框样式的警告信息。"
          variant="outlined"
        />
        <AlertVue 
          type="info"
          title="标准样式"
          message="这是标准样式的警告信息。"
          variant="standard"
        />
      </div>
    `,
  }),
}

export const Divider = {
  render: () => ({
    template: `
      <div style="width: 100%; display: flex; justify-content: center; margin: 16px 0;">
        <div style="height: 2px; width: 128px; border-radius: 9999px;" />
      </div>
    `,
  }),
}

export const AllTypes = {
  render: () => ({
    components: { AlertVue },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 32rem; margin-bottom: 24px; padding: 16px; border-radius: 8px;">
        <AlertVue 
          type="success"
          title="成功"
          message="操作执行成功！"
          :closable="true"
          variant="standard"
        />
        <AlertVue 
          type="info"
          title="信息"
          message="这是一条信息提醒。"
          :closable="true"
          variant="standard"
        />
        <AlertVue 
          type="warning"
          title="警告"
          message="请注意这个重要提醒。"
          :closable="true"
          variant="standard"
        />
        <AlertVue 
          type="error"
          title="错误"
          message="发生了一个错误，请重试。"
          :closable="true"
          variant="standard"
        />
      </div>
    `,
  }),
}

export const WithCustomContent = {
  render: () => ({
    components: { AlertVue },
    template: `
      <div style="width: 100%; max-width: 32rem; margin-bottom: 24px; padding: 16px; border-radius: 8px;">
        <AlertVue 
          type="info"
          title="自定义内容"
          :closable="true"
        >
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <p>您可以在这里添加自定义内容：</p>
            <ul style="list-style-type: disc; padding-left: 16px;">
              <li>支持 HTML 标签</li>
              <li>可以添加<strong>粗体</strong>和<em>斜体</em></li>
              <li>支持<a href="#" style="color: var(--wc-text-brand); text-decoration: underline;">链接</a></li>
            </ul>
          </div>
        </AlertVue>
      </div>
    `,
  }),
} 