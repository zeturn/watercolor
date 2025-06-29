import Avatar from '../src/components/Avatar/Avatar.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Avatar (Vue)',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的头像组件，支持图片、文字和自定义内容。提供多种尺寸、形状和颜色主题。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: '头像图片链接',
      control: { type: 'text' }
    },
    alt: {
      description: '图片替代文本',
      control: { type: 'text' }
    },
    size: {
      description: '头像尺寸',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    variant: {
      description: '头像形状',
      control: { type: 'select' },
      options: ['circular', 'rounded', 'square']
    },
    color: {
      description: '背景颜色主题（当没有图片时）',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error']
    },
    children: {
      description: '显示的文字内容（会自动生成首字母）',
      control: { type: 'text' }
    }
  }
}

export const Primary = {
  args: {
    children: 'John Doe',
    size: 'md',
    variant: 'circular',
    color: 'primary'
  }
}

export const WithImage = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">带图片的头像</h3>
          <div class="flex items-center space-x-4">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="用户头像"
              size="sm"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=150&h=150&fit=crop&crop=face"
              alt="用户头像"
              size="md"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="用户头像"
              size="lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">图片加载失败时的降级处理</h3>
          <div class="flex items-center space-x-4">
            <Avatar 
              src="invalid-url.jpg"
              children="张三"
              size="md"
              color="primary"
            />
            <Avatar 
              src="another-invalid-url.jpg"
              children="李四"
              size="md"
              color="success"
            />
          </div>
        </div>
      </div>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">预设尺寸</h3>
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <Avatar children="XS" size="xs" color="primary" />
              <p class="text-xs mt-2">XS</p>
            </div>
            <div class="text-center">
              <Avatar children="SM" size="sm" color="primary" />
              <p class="text-xs mt-2">SM</p>
            </div>
            <div class="text-center">
              <Avatar children="MD" size="md" color="primary" />
              <p class="text-xs mt-2">MD</p>
            </div>
            <div class="text-center">
              <Avatar children="LG" size="lg" color="primary" />
              <p class="text-xs mt-2">LG</p>
            </div>
            <div class="text-center">
              <Avatar children="XL" size="xl" color="primary" />
              <p class="text-xs mt-2">XL</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">自定义尺寸（数字像素值）</h3>
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <Avatar children="30" :size="30" color="success" />
              <p class="text-xs mt-2">30px</p>
            </div>
            <div class="text-center">
              <Avatar children="50" :size="50" color="success" />
              <p class="text-xs mt-2">50px</p>
            </div>
            <div class="text-center">
              <Avatar children="80" :size="80" color="success" />
              <p class="text-xs mt-2">80px</p>
            </div>
            <div class="text-center">
              <Avatar children="120" :size="120" color="success" />
              <p class="text-xs mt-2">120px</p>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">不同形状</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <Avatar children="圆形" variant="circular" color="primary" size="lg" />
              <div>
                <h4 class="font-medium">Circular（圆形）</h4>
                <p class="text-sm text-gray-600">最常见的头像形状</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <Avatar children="圆角" variant="rounded" color="success" size="lg" />
              <div>
                <h4 class="font-medium">Rounded（圆角矩形）</h4>
                <p class="text-sm text-gray-600">现代化的圆角设计</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <Avatar children="方形" variant="square" color="warning" size="lg" />
              <div>
                <h4 class="font-medium">Square（方形）</h4>
                <p class="text-sm text-gray-600">简洁的方形设计</p>
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
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">颜色主题</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="text-center">
              <Avatar children="默认" color="default" size="lg" />
              <p class="text-sm mt-2">Default</p>
            </div>
            <div class="text-center">
              <Avatar children="主色" color="primary" size="lg" />
              <p class="text-sm mt-2">Primary</p>
            </div>
            <div class="text-center">
              <Avatar children="次要" color="secondary" size="lg" />
              <p class="text-sm mt-2">Secondary</p>
            </div>
            <div class="text-center">
              <Avatar children="成功" color="success" size="lg" />
              <p class="text-sm mt-2">Success</p>
            </div>
            <div class="text-center">
              <Avatar children="警告" color="warning" size="lg" />
              <p class="text-sm mt-2">Warning</p>
            </div>
            <div class="text-center">
              <Avatar children="错误" color="error" size="lg" />
              <p class="text-sm mt-2">Error</p>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const TextAvatars = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">文字头像</h3>
          <p class="text-sm text-gray-600 mb-4">当没有图片时，会自动从文字生成首字母作为头像内容</p>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-medium mb-2">单个名字</h4>
              <div class="flex space-x-3">
                <Avatar children="张三" color="primary" />
                <Avatar children="李四" color="success" />
                <Avatar children="王五" color="warning" />
                <Avatar children="赵六" color="error" />
              </div>
            </div>
            
            <div>
              <h4 class="font-medium mb-2">全名（取首字母）</h4>
              <div class="flex space-x-3">
                <Avatar children="张 三" color="primary" />
                <Avatar children="李 小明" color="success" />
                <Avatar children="王 大华" color="warning" />
                <Avatar children="赵 小红" color="error" />
              </div>
            </div>
            
            <div>
              <h4 class="font-medium mb-2">英文名</h4>
              <div class="flex space-x-3">
                <Avatar children="John Doe" color="primary" />
                <Avatar children="Jane Smith" color="success" />
                <Avatar children="Bob Johnson" color="warning" />
                <Avatar children="Alice Brown" color="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const AvatarGroup = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">头像组合</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-medium mb-3">用户列表</h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="John Doe"
                  />
                  <div>
                    <p class="font-medium">John Doe</p>
                    <p class="text-sm text-gray-600">产品经理</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Avatar children="李明" color="primary" />
                  <div>
                    <p class="font-medium">李明</p>
                    <p class="text-sm text-gray-600">前端开发</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Avatar children="王小红" color="success" />
                  <div>
                    <p class="font-medium">王小红</p>
                    <p class="text-sm text-gray-600">UI设计师</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-medium mb-3">重叠头像组</h4>
              <div class="flex items-center">
                <div class="flex -space-x-2">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    size="sm"
                    class="border-2 border-white"
                  />
                  <Avatar 
                    children="李明"
                    color="primary"
                    size="sm"
                    class="border-2 border-white"
                  />
                  <Avatar 
                    children="王红"
                    color="success"
                    size="sm"
                    class="border-2 border-white"
                  />
                  <Avatar 
                    children="张三"
                    color="warning"
                    size="sm"
                    class="border-2 border-white"
                  />
                </div>
                <span class="ml-3 text-sm text-gray-600">+5 others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
} 