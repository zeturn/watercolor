import React, { useState } from 'react'
import TypingText from '@/components/TypingText/TypingText.jsx'

export default {
  title: 'Components/TypingText (React)',
  component: TypingText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 打字机效果组件，模拟逐字输入的动画效果。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '要显示的文本内容'
    },
    speed: {
      control: { type: 'number', min: 50, max: 500, step: 10 },
      description: '打字速度（毫秒）'
    },
    loop: {
      control: 'boolean',
      description: '是否循环播放'
    },
    erase: {
      control: 'boolean',
      description: '是否启用擦除效果'
    },
    showCursor: {
      control: 'boolean',
      description: '是否显示光标'
    },
  },
}

export const Default = {
  args: {
    text: 'Watercolor UI 打字机效果',
    speed: 120,
    loop: true,
    erase: true,
    showCursor: true
  },
  render: (args) => (
    <div className="p-8 text-xl font-mono">
      <TypingText {...args} />
    </div>
  ),
}

export const Speeds = () => (
  <div className="p-8 space-y-6">
    <h3 className="text-lg font-semibold mb-4">不同速度</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">慢速 (200ms)</h4>
        <div className="text-lg font-mono">
          <TypingText text="这是慢速打字效果演示" speed={200} showCursor={true} />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">正常 (120ms)</h4>
        <div className="text-lg font-mono">
          <TypingText text="这是正常速度打字效果演示" speed={120} showCursor={true} />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">快速 (80ms)</h4>
        <div className="text-lg font-mono">
          <TypingText text="这是快速打字效果演示" speed={80} showCursor={true} />
        </div>
      </div>
    </div>
  </div>
)

export const WithoutLoop = () => (
  <div className="p-8 space-y-6">
    <h3 className="text-lg font-semibold mb-4">单次播放</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">仅输入，不擦除</h4>
        <div className="text-lg font-mono">
          <TypingText 
            text="这段文字只会输入一次，不会擦除" 
            speed={100} 
            loop={false} 
            erase={false}
            showCursor={true}
          />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">输入后擦除，然后停止</h4>
        <div className="text-lg font-mono">
          <TypingText 
            text="这段文字会输入然后擦除，但不会循环" 
            speed={100} 
            loop={false} 
            erase={true}
            showCursor={true}
          />
        </div>
      </div>
    </div>
  </div>
)

export const MultipleTexts = () => {
  const texts = [
    "欢迎使用 Watercolor UI",
    "现代化的组件库",
    "支持 React 和 Vue",
    "让开发更简单"
  ]
  
  return (
    <div className="p-8 space-y-6">
      <h3 className="text-lg font-semibold mb-4">多行文本效果</h3>
      <div className="space-y-3">
        {texts.map((text, index) => (
          <div key={index} className="text-lg font-mono" style={{ animationDelay: `${index * 2}s` }}>
            <TypingText 
              text={text} 
              speed={120} 
              loop={false} 
              erase={false}
              showCursor={index === texts.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const DifferentStyles = () => (
  <div className="p-8 space-y-6">
    <h3 className="text-lg font-semibold mb-4">不同样式</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">标题样式</h4>
        <div className="text-3xl font-bold text-blue-600">
          <TypingText text="欢迎来到未来" speed={150} showCursor={true} />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">代码样式</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
          <TypingText 
            text="const message = 'Hello, World!';" 
            speed={80} 
            showCursor={true}
            loop={false}
            erase={false}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">引用样式</h4>
        <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          <TypingText 
            text="设计不仅仅是它看起来如何，而是它如何工作。" 
            speed={100} 
            showCursor={true}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-600">彩色文字</h4>
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          <TypingText text="渐变色彩文字效果" speed={120} showCursor={true} />
        </div>
      </div>
    </div>
  </div>
)

export const Interactive = () => {
  const [text, setText] = useState('Watercolor UI 打字机效果')
  const [speed, setSpeed] = useState(120)
  const [showCursor, setShowCursor] = useState(true)
  const [loop, setLoop] = useState(true)
  const [erase, setErase] = useState(true)
  
  return (
    <div className="p-8 max-w-2xl">
      <h3 className="text-lg font-semibold mb-6">交互式演示</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">文本内容：</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="输入要显示的文本"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              速度：{speed}ms
            </label>
            <input
              type="range"
              min="50"
              max="300"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showCursor}
                onChange={(e) => setShowCursor(e.target.checked)}
              />
              <span className="text-sm">显示光标</span>
            </label>
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={loop}
                onChange={(e) => setLoop(e.target.checked)}
              />
              <span className="text-sm">循环播放</span>
            </label>
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={erase}
                onChange={(e) => setErase(e.target.checked)}
              />
              <span className="text-sm">擦除效果</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">预览效果：</label>
          <div className="min-h-24 p-4 border rounded bg-gray-50 text-lg font-mono">
            <TypingText 
              key={`${text}-${speed}-${showCursor}-${loop}-${erase}`}
              text={text}
              speed={speed}
              showCursor={showCursor}
              loop={loop}
              erase={erase}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoadingStates = () => (
  <div className="p-8 space-y-6">
    <h3 className="text-lg font-semibold mb-4">加载状态效果</h3>
    <div className="space-y-6">
      <div className="border rounded-lg p-6 bg-blue-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
            <span>🚀</span>
          </div>
          <div className="font-medium">系统启动中</div>
        </div>
        <div className="font-mono text-sm text-blue-700">
          <TypingText 
            text="正在初始化组件..." 
            speed={80} 
            loop={false} 
            erase={false}
            showCursor={true}
          />
        </div>
      </div>
      
      <div className="border rounded-lg p-6 bg-green-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
            <span>✓</span>
          </div>
          <div className="font-medium">任务完成</div>
        </div>
        <div className="font-mono text-sm text-green-700">
          <TypingText 
            text="所有测试通过，部署成功！" 
            speed={100} 
            loop={false} 
            erase={false}
            showCursor={false}
          />
        </div>
      </div>
      
      <div className="border rounded-lg p-6 bg-purple-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
            <span>💻</span>
          </div>
          <div className="font-medium">AI 助手</div>
        </div>
        <div className="font-mono text-sm text-purple-700">
          <TypingText 
            text="我是您的AI助手，请问有什么可以帮助您的吗？" 
            speed={60} 
            loop={false} 
            erase={false}
            showCursor={true}
          />
        </div>
      </div>
    </div>
  </div>
)

export const CommandLine = () => {
  const commands = [
    "$ npm install @zeturn/watercolor-react",
    "$ npm run dev",
    "Server running on http://localhost:3000",
    "Ready for development! 🎉"
  ]
  
  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">命令行效果</h3>
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm">
        {commands.map((command, index) => (
          <div key={index} className="mb-2" style={{ animationDelay: `${index * 3}s` }}>
            <TypingText 
              text={command}
              speed={command.startsWith('$') ? 100 : 80}
              loop={false}
              erase={false}
              showCursor={index === commands.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
