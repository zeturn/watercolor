import React from 'react'
import Blockquote from '@/components/Blockquote/Blockquote.jsx'

export default {
  title: 'Components/Blockquote (React)',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    cite: { 
      control: 'text',
      description: '引用来源/作者'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'card'],
      description: '样式变体'
    },
    noBorder: {
      control: 'boolean',
      description: '是否无边框（默认无边框）'
    },
    interactive: {
      control: 'boolean',
      description: '是否启用交互效果（hover动画）'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '尺寸大小'
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色主题'
    },
  },
}

export const Default = {
  args: {
    cite: 'Steve Jobs',
    variant: 'default',
    noBorder: true,
    interactive: true,
    size: 'medium',
    color: 'default',
  },
  render: (args) => (
    <div className="p-8 max-w-2xl">
      <Blockquote 
        cite={args.cite}
        variant={args.variant}
        noBorder={args.noBorder}
        interactive={args.interactive}
        size={args.size}
        color={args.color}
      >
        Stay hungry, stay foolish. 这是一句激励人心的话，告诉我们要保持饥饿感和愚者心态。
      </Blockquote>
    </div>
  ),
}

export const Colors = {
  render: () => (
    <div className="p-8 space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">默认色（灰色）</h3>
        <Blockquote cite="Steve Jobs" color="default">
          Stay hungry, stay foolish. 保持饥饿，保持愚蠢。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">主题色（蓝色）</h3>
        <Blockquote cite="Albert Einstein" color="primary">
          Imagination is more important than knowledge. 想象力比知识更重要。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">成功色（绿色）</h3>
        <Blockquote cite="Winston Churchill" color="success">
          Success is not final, failure is not fatal: it is the courage to continue that counts. 成功不是终点，失败也不是致命的，重要的是继续前进的勇气。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">警告色（橙色）</h3>
        <Blockquote cite="Benjamin Franklin" color="warning">
          By failing to prepare, you are preparing to fail. 不准备就是在准备失败。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">错误色（红色）</h3>
        <Blockquote cite="Thomas Edison" color="error">
          I have not failed. I've just found 10,000 ways that won't work. 我没有失败，我只是找到了一万种行不通的方法。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">信息色（青色）</h3>
        <Blockquote cite="Maya Angelou" color="info">
          I've learned that people will forget what you said, but they will never forget how you made them feel. 人们会忘记你说过什么，但永远不会忘记你给他们的感受。
        </Blockquote>
      </div>
    </div>
  ),
}

export const ColoredVariants = {
  render: () => (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">成功主题 - 不同变体</h3>
        <div className="space-y-4">
          <Blockquote cite="Vince Lombardi" color="success" variant="default">
            The only place success comes before work is in the dictionary. 只有在字典里，成功才会出现在工作之前。
          </Blockquote>
          <Blockquote cite="Michael Jordan" color="success" variant="minimal">
            I can accept failure, everyone fails at something. But I can't accept not trying. 我可以接受失败，每个人都会在某些事情上失败。但我不能接受不去尝试。
          </Blockquote>
          <Blockquote cite="Oprah Winfrey" color="success" variant="card">
            The biggest adventure you can take is to live the life of your dreams. 你能进行的最大冒险就是过你梦想中的生活。
          </Blockquote>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">主题色 - 不同尺寸</h3>
        <div className="space-y-4">
          <Blockquote cite="孔子" color="primary" size="small">
            学而时习之，不亦说乎？
          </Blockquote>
          <Blockquote cite="老子" color="primary" size="medium">
            千里之行，始于足下。The journey of a thousand miles begins with one step.
          </Blockquote>
          <Blockquote cite="Nelson Mandela" color="primary" size="large">
            Education is the most powerful weapon which you can use to change the world. 教育是你可以用来改变世界的最强大的武器。
          </Blockquote>
        </div>
      </div>
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div className="p-8 space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">默认样式（浅灰背景，无边框）</h3>
        <Blockquote cite="Steve Jobs" variant="default" noBorder={true}>
          Stay hungry, stay foolish. 这是默认的新样式，背景为浅灰色，hover时会变深。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">简约样式</h3>
        <Blockquote cite="Albert Einstein" variant="minimal">
          Imagination is more important than knowledge. 简约样式更加轻量化。
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">卡片样式</h3>
        <Blockquote cite="Maya Angelou" variant="card">
          I've learned that people will forget what you said, but they will never forget how you made them feel.
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">传统样式（有左边框）</h3>
        <Blockquote cite="Winston Churchill" noBorder={false}>
          Success is not final, failure is not fatal: it is the courage to continue that counts.
        </Blockquote>
      </div>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="p-8 space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">小尺寸</h3>
        <Blockquote cite="Confucius" size="small">
          It does not matter how slowly you go as long as you do not stop.
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">中等尺寸（默认）</h3>
        <Blockquote cite="Albert Einstein" size="medium">
          Imagination is more important than knowledge.
        </Blockquote>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">大尺寸</h3>
        <Blockquote cite="Maya Angelou" size="large">
          I've learned that people will forget what you said, but they will never forget how you made them feel.
        </Blockquote>
      </div>
    </div>
  ),
}
