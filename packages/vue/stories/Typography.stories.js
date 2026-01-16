import Typography from '../src/components/Typography/Typography.vue'

export default {
  title: 'Components/Typography (vue)',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的排版组件，提供一致的文字样式和层次结构。支持多种字体变体、颜色和对齐方式。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '排版变体',
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button']
    },
    component: {
      description: '渲染的HTML元素',
      control: { type: 'text' }
    },
    color: {
      description: '文字颜色',
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'success', 'warning', 'error', 'textPrimary', 'textSecondary', 'textDisabled']
    },
    align: {
      description: '文字对齐方式',
      control: { type: 'select' },
      options: ['inherit', 'left', 'center', 'right', 'justify']
    },
    gutterBottom: {
      description: '是否在底部添加边距',
      control: { type: 'boolean' }
    },
    noWrap: {
      description: '是否截断溢出文字',
      control: { type: 'boolean' }
    }
  }
}

export const Primary = {
  args: {
    variant: 'body1',
    color: 'textPrimary',
    children: '这是一段示例文字，展示了水彩设计系统的排版组件。'
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: `<Typography v-bind="args">{{ args.children }}</Typography>`
  })
}

export const Headings = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">标题层次结构</h2>
          <div class="space-y-4">
            <Typography variant="h1" gutterBottom>
              标题 1 - 主标题
            </Typography>
            <Typography variant="h2" gutterBottom>
              标题 2 - 次主标题
            </Typography>
            <Typography variant="h3" gutterBottom>
              标题 3 - 章节标题
            </Typography>
            <Typography variant="h4" gutterBottom>
              标题 4 - 子章节标题
            </Typography>
            <Typography variant="h5" gutterBottom>
              标题 5 - 小节标题
            </Typography>
            <Typography variant="h6" gutterBottom>
              标题 6 - 最小标题
            </Typography>
          </div>
        </div>
      </div>
    `
  })
}

export const Subtitles = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">副标题</h2>
          <div class="space-y-3">
            <Typography variant="subtitle1" gutterBottom>
              副标题 1 - 用于重要的辅助信息
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              副标题 2 - 用于次要的辅助信息
            </Typography>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">副标题使用示例</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <Typography variant="h4" gutterBottom>
              文章标题
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              作者：张三 | 发布时间：2024年1月15日
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              分类：技术文章 | 阅读时间：约5分钟
            </Typography>
            <Typography variant="body1">
              这里是文章的正文内容，使用body1样式...
            </Typography>
          </div>
        </div>
      </div>
    `
  })
}

export const BodyText = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">正文文字</h2>
          <div class="space-y-4">
            <div>
              <Typography variant="h6" gutterBottom>Body 1（主要正文）</Typography>
              <Typography variant="body1" gutterBottom>
                这是使用body1样式的正文文字。body1是最常用的正文样式，具有良好的可读性和适中的字体大小。
                适用于大部分的正文内容，包括文章、描述、说明等。这种样式在各种设备上都能保持良好的阅读体验。
              </Typography>
            </div>
            
            <div>
              <Typography variant="h6" gutterBottom>Body 2（次要正文）</Typography>
              <Typography variant="body2" gutterBottom>
                这是使用body2样式的正文文字。body2比body1稍小一些，适用于次要的文字内容，
                如备注、说明文字、辅助信息等。在需要节省空间或者层次分明的布局中特别有用。
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">正文应用示例</h2>
          <div class="bg-white border rounded-lg p-6">
            <Typography variant="h5" gutterBottom>
              产品介绍
            </Typography>
            <Typography variant="body1" gutterBottom>
              水彩设计系统是一套现代化的UI组件库，致力于为开发者提供美观、易用、功能完整的组件。
              我们的设计理念注重简洁性和一致性，帮助您快速构建专业级的用户界面。
            </Typography>
            <Typography variant="body2" color="textSecondary">
              注：本产品仍在持续优化中，欢迎提供反馈和建议。
            </Typography>
          </div>
        </div>
      </div>
    `
  })
}

export const Captions = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">小字样式</h2>
          <div class="space-y-4">
            <div>
              <Typography variant="h6" gutterBottom>Caption（说明文字）</Typography>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                这是caption样式，通常用于图片说明、版权信息、时间戳等小字内容。
              </Typography>
            </div>
            
            <div>
              <Typography variant="h6" gutterBottom>Overline（上标文字）</Typography>
              <Typography variant="overline" color="textSecondary" gutterBottom>
                OVERLINE TEXT
              </Typography>
              <Typography variant="body2">
                overline样式通常用于分类标签、章节标识等。
              </Typography>
            </div>
            
            <div>
              <Typography variant="h6" gutterBottom>Button（按钮文字）</Typography>
              <Typography variant="button" color="primary">
                BUTTON TEXT
              </Typography>
              <Typography variant="body2" class="mt-2">
                button样式用于按钮文字和重要的操作文字。
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">应用示例</h2>
          <div class="space-y-4">
            <div class="bg-white border rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop" alt="示例图片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <Typography variant="overline" color="textSecondary" gutterBottom>
                  TECHNOLOGY
                </Typography>
                <Typography variant="h6" gutterBottom>
                  现代化的开发环境
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  使用最新的技术栈构建高效的应用程序。
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  图片来源：Unsplash | 发布时间：2024年1月15日
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Colors = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">颜色主题</h2>
          <div class="space-y-3">
            <Typography variant="body1" color="textPrimary">
              Primary Text - 主要文字颜色，用于最重要的内容
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Secondary Text - 次要文字颜色，用于辅助信息
            </Typography>
            <Typography variant="body1" color="textDisabled">
              Disabled Text - 禁用文字颜色，用于不可用状态
            </Typography>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">主题颜色</h2>
          <div class="space-y-3">
            <Typography variant="body1" color="primary">
              Primary Color - 主品牌色，用于重要信息和强调
            </Typography>
            <Typography variant="body1" color="secondary">
              Secondary Color - 次要颜色，用于辅助元素
            </Typography>
            <Typography variant="body1" color="success">
              Success Color - 成功状态，用于正面反馈
            </Typography>
            <Typography variant="body1" color="warning">
              Warning Color - 警告状态，用于提醒用户注意
            </Typography>
            <Typography variant="body1" color="error">
              Error Color - 错误状态，用于错误信息和危险操作
            </Typography>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">应用示例</h2>
          <div class="bg-gray-50 p-4 rounded-lg space-y-2">
            <Typography variant="h6" color="textPrimary">
              系统通知
            </Typography>
            <Typography variant="body2" color="success">
              ✓ 数据保存成功
            </Typography>
            <Typography variant="body2" color="warning">
              ⚠ 检测到网络延迟
            </Typography>
            <Typography variant="body2" color="error">
              ✗ 连接服务器失败
            </Typography>
            <Typography variant="caption" color="textSecondary">
              最后更新：刚刚
            </Typography>
          </div>
        </div>
      </div>
    `
  })
}

export const Alignment = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">文字对齐</h2>
          <div class="space-y-4 border rounded-lg p-4">
            <Typography variant="body1" align="left" class="bg-gray-50 p-2 rounded">
              左对齐文字 - 这是默认的对齐方式，适用于大部分的文字内容。
            </Typography>
            <Typography variant="body1" align="center" class="bg-gray-50 p-2 rounded">
              居中对齐文字 - 通常用于标题、标语或需要突出显示的内容。
            </Typography>
            <Typography variant="body1" align="right" class="bg-gray-50 p-2 rounded">
              右对齐文字 - 常用于数字、日期或特殊布局需求。
            </Typography>
            <Typography variant="body1" align="justify" class="bg-gray-50 p-2 rounded">
              两端对齐文字 - 适用于正文段落，可以让文字排列更加整齐美观。这种对齐方式会自动调整单词间距，使每行文字都能铺满整个宽度，形成整齐的左右边界。
            </Typography>
          </div>
        </div>
      </div>
    `
  })
}

export const Utilities = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-4">实用功能</h2>
          
          <div class="space-y-4">
            <div>
              <Typography variant="h6" gutterBottom>
                Gutter Bottom（底部边距）
              </Typography>
              <div class="border rounded-lg p-4 bg-gray-50">
                <Typography variant="body1" gutterBottom>
                  这段文字设置了gutterBottom属性，会在底部自动添加边距。
                </Typography>
                <Typography variant="body1">
                  这段文字没有设置gutterBottom，可以看到与上一段的间距差异。
                </Typography>
              </div>
            </div>
            
            <div>
              <Typography variant="h6" gutterBottom>
                No Wrap（文字截断）
              </Typography>
              <div class="border rounded-lg p-4 bg-gray-50 w-64">
                <Typography variant="body2" class="mb-2">
                  正常文字换行：这是一段很长的文字，当容器宽度不足时会自动换行显示，确保所有内容都能被看到。
                </Typography>
                <Typography variant="body2" noWrap>
                  截断文字：这是一段很长的文字，当容器宽度不足时会被截断并显示省略号。
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">自定义HTML元素</h2>
          <div class="space-y-3">
            <Typography variant="h5" component="div" gutterBottom>
              这是使用div元素的h5样式
            </Typography>
            <Typography variant="body1" component="span" color="primary">
              这是使用span元素的body1样式
            </Typography>
            <Typography variant="caption" component="p" color="textSecondary">
              这是使用p元素的caption样式
            </Typography>
          </div>
        </div>
      </div>
    `
  })
} 