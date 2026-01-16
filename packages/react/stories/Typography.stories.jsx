import React from 'react'
import Typography from '@/components/Typography/Typography.jsx'

export default {
  title: 'Components/Typography (React)',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '水彩设计系统的排版组件，提供一致的文字样式和层次结构。支持多种字体变体、颜色和对齐方式。',
      },
    },
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
  render: (args) => (
    <div className="p-6 max-w-2xl">
      <Typography {...args}>{args.children}</Typography>
    </div>
  )
}

export const Headings = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <div>
      <h2 className="text-xl font-semibold mb-4">标题层次结构</h2>
      <div className="space-y-4">
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
)

export const Subtitles = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <div>
      <h2 className="text-xl font-semibold mb-4">副标题</h2>
      <div className="space-y-3">
        <Typography variant="subtitle1" gutterBottom>
          副标题 1 - 用于重要的辅助信息
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          副标题 2 - 用于次要的辅助信息
        </Typography>
      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-4">副标题使用示例</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
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
)

export const BodyText = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <div>
      <h2 className="text-xl font-semibold mb-4">正文文字</h2>
      <div className="space-y-4">
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
      <h2 className="text-xl font-semibold mb-4">正文应用示例</h2>
      <div className="bg-white border rounded-lg p-6">
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
)

export const Colors = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <h2 className="text-xl font-semibold mb-4">文字颜色</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-medium mb-3">主题色彩</h3>
        <div className="space-y-2">
          <Typography variant="body1" color="primary">
            主色调文字 (Primary)
          </Typography>
          <Typography variant="body1" color="secondary">
            次要色彩 (Secondary)
          </Typography>
          <Typography variant="body1" color="success">
            成功状态 (Success)
          </Typography>
          <Typography variant="body1" color="warning">
            警告状态 (Warning)
          </Typography>
          <Typography variant="body1" color="error">
            错误状态 (Error)
          </Typography>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3">文本色彩</h3>
        <div className="space-y-2">
          <Typography variant="body1" color="textPrimary">
            主要文本颜色 (Text Primary)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            次要文本颜色 (Text Secondary)
          </Typography>
          <Typography variant="body1" color="textDisabled">
            禁用文本颜色 (Text Disabled)
          </Typography>
          <Typography variant="body1" color="inherit">
            继承父元素颜色 (Inherit)
          </Typography>
        </div>
      </div>
    </div>
  </div>
)

export const Alignment = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <h2 className="text-xl font-semibold mb-4">文字对齐</h2>
    <div className="space-y-4 border rounded-lg p-4">
      <Typography variant="h6" align="left" gutterBottom>
        左对齐标题 (align="left")
      </Typography>
      <Typography variant="body1" align="left">
        这是左对齐的正文内容。这是默认的对齐方式，适用于大多数阅读场景。
        文字从左边开始排列，形成整齐的左边界。
      </Typography>
      
      <Typography variant="h6" align="center" gutterBottom>
        居中对齐标题 (align="center")
      </Typography>
      <Typography variant="body1" align="center">
        这是居中对齐的正文内容。适用于标题、引用或需要突出显示的内容。
        文字在容器中央对齐。
      </Typography>
      
      <Typography variant="h6" align="right" gutterBottom>
        右对齐标题 (align="right")
      </Typography>
      <Typography variant="body1" align="right">
        这是右对齐的正文内容。适用于数字、日期或特殊布局需求。
        文字从右边开始排列，形成整齐的右边界。
      </Typography>
      
      <Typography variant="h6" align="justify" gutterBottom>
        两端对齐标题 (align="justify")
      </Typography>
      <Typography variant="body1" align="justify">
        这是两端对齐的正文内容。适用于长段落文本，可以创建整齐的文字块。
        除了最后一行外，每行的文字都会拉伸以填满整个宽度，形成整齐的左右边界。
        这种对齐方式在书籍和正式文档中很常见。
      </Typography>
    </div>
  </div>
)

export const SpecialVariants = () => (
  <div className="p-6 space-y-6 max-w-4xl">
    <h2 className="text-xl font-semibold mb-4">特殊变体</h2>
    <div className="space-y-4">
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
        <Typography variant="button" component="span" className="bg-blue-600 text-white px-4 py-2 rounded">
          BUTTON TEXT
        </Typography>
        <Typography variant="body2" className="mt-2">
          button样式用于按钮内的文字，通常是大写字母。
        </Typography>
      </div>
    </div>
  </div>
)

export const TextTruncation = () => (
  <div className="p-6 space-y-6 max-w-md">
    <h2 className="text-xl font-semibold mb-4">文本截断</h2>
    <div className="space-y-4">
      <div>
        <Typography variant="h6" gutterBottom>正常文字（自动换行）</Typography>
        <Typography variant="body1" gutterBottom>
          这是一段很长的文字内容，在容器宽度不足时会自动换行显示。
          这样可以确保所有文字内容都能被用户看到。
        </Typography>
      </div>
      
      <div>
        <Typography variant="h6" gutterBottom>截断文字（noWrap）</Typography>
        <Typography variant="body1" noWrap gutterBottom>
          这是一段很长的文字内容，设置了noWrap属性后会被截断，超出部分会显示省略号。
        </Typography>
      </div>
      
      <div>
        <Typography variant="h6" gutterBottom>应用示例</Typography>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 border rounded">
            <div className="w-10 h-10 bg-blue-500 rounded"></div>
            <div className="flex-1 min-w-0">
              <Typography variant="subtitle1" noWrap>
                这是一个很长的文件名称.docx
              </Typography>
              <Typography variant="caption" color="textSecondary">
                修改时间: 2024-01-15
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const RealWorldExample = () => (
  <div className="p-6 max-w-4xl">
    <h2 className="text-xl font-semibold mb-6">实际应用示例</h2>
    
    <article className="max-w-3xl mx-auto">
      {/* 文章头部 */}
      <header className="mb-8">
        <Typography variant="overline" color="textSecondary" gutterBottom>
          技术文章
        </Typography>
        <Typography variant="h2" gutterBottom>
          构建现代化的设计系统
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          探索如何创建一致、可扩展的UI组件库
        </Typography>
        
        <div className="flex items-center gap-4 mt-6 pt-6 border-t">
          <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
          <div>
            <Typography variant="subtitle1">张三</Typography>
            <Typography variant="caption" color="textSecondary">
              发布于 2024年1月15日 · 阅读时间 8分钟
            </Typography>
          </div>
        </div>
      </header>
      
      {/* 文章正文 */}
      <main className="space-y-6">
        <Typography variant="h4" gutterBottom>
          引言
        </Typography>
        <Typography variant="body1" gutterBottom>
          在现代Web开发中，设计系统已经成为保证产品一致性和提高开发效率的重要工具。
          一个好的设计系统不仅能够统一视觉风格，还能提供可复用的组件和明确的设计规范。
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          核心组件
        </Typography>
        <Typography variant="body1" gutterBottom>
          设计系统的核心在于其组件库。每个组件都应该：
        </Typography>
        
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <Typography variant="body1" component="span">
              具有一致的视觉风格和交互行为
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              支持多种状态和变体
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              提供完整的文档和使用示例
            </Typography>
          </li>
        </ul>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <Typography variant="h6" gutterBottom>
            💡 专业提示
          </Typography>
          <Typography variant="body2">
            在设计组件时，始终考虑可访问性（a11y）标准，确保所有用户都能够使用您的产品。
          </Typography>
        </div>
        
        <Typography variant="h4" gutterBottom>
          实施建议
        </Typography>
        <Typography variant="body1" gutterBottom>
          成功实施设计系统需要团队的共同努力和持续的维护。建议从小规模开始，
          逐步扩展组件库的覆盖范围。
        </Typography>
        
        <Typography variant="body2" color="textSecondary" align="center" className="pt-8 border-t">
          感谢阅读！如有问题欢迎在评论区讨论。
        </Typography>
      </main>
    </article>
  </div>
)
