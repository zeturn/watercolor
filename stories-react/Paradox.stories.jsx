import React from 'react';
import Paradox from '@/components/Paradox/Paradox.jsx';
import '../src/components/Paradox/storybook.css';

export default {
  title: 'Components/Paradox (React)',
  component: Paradox,
  parameters: {
    docs: {
      description: {
        component: '悖论组件，用于显示具有哲学意味的矛盾文本，带有悬停提示功能。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    content: { 
      control: 'text', 
      description: '显示文本' 
    },
    tooltip: { 
      control: 'text', 
      description: '悬停提示' 
    },
    animated: { 
      control: 'boolean', 
      description: '是否启用动画' 
    },
    transform: { 
      control: 'select', 
      options: ['none', 'rotate', 'scale', 'skew'],
      description: '变换类型'
    },
    speed: { 
      control: 'select', 
      options: ['slow', 'normal', 'fast'],
      description: '动画速度'
    },
    hoverEffect: { 
      control: 'boolean', 
      description: '是否启用悬停效果' 
    },
    infinite: { 
      control: 'boolean', 
      description: '是否无限循环' 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg', 'xl'],
      description: '尺寸变体'
    },
    variant: { 
      control: 'select', 
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: '样式变体'
    },
    borderStyle: { 
      control: 'select', 
      options: ['left', 'top', 'bottom', 'right', 'all'],
      description: '边框样式'
    },
    withQuotes: { 
      control: 'boolean', 
      description: '是否显示引用符号' 
    },
    glow: { 
      control: 'boolean', 
      description: '是否启用发光效果' 
    },
    gradient: { 
      control: 'boolean', 
      description: '是否启用渐变背景' 
    },
    className: {
      control: 'text',
      description: '自定义CSS类名'
    }
  }
};

export const Basic = {
  args: {
    content: '这句话是假。',
    tooltip: '若此句为真，则为假；若此句为假，则为真。'
  },
  render: (args) => <Paradox {...args} />
};

export const ClassicParadoxes = {
  render: () => (
    <div className="paradox-collection">
      <h3 className="paradox-title">经典悖论集合</h3>
      <div className="paradox-grid">
        <div className="paradox-section">
          <h4 className="paradox-section-title">逻辑悖论</h4>
          <Paradox 
            content="这句话是假的。"
            tooltip="说谎者悖论：如果这句话是真的，那么它就是假的；如果它是假的，那么它就是真的。"
          />
          <Paradox 
            content="我知道我什么都不知道。"
            tooltip="苏格拉底悖论：承认自己的无知本身就是一种知识。"
          />
          <Paradox 
            content="例外证明了规则。"
            tooltip="如果例外证明了规则，那么没有例外的规则就无法被证明。"
          />
        </div>
        
        <div className="paradox-section">
          <h4 className="paradox-section-title">哲学悖论</h4>
          <Paradox 
            content="自由意志是一种幻觉。"
            tooltip="如果自由意志是幻觉，那么相信这个观点本身是否也是被决定的？"
          />
          <Paradox 
            content="只有变化是永恒的。"
            tooltip="如果只有变化是永恒的，那么这个永恒性本身不就是不变的吗？"
          />
          <Paradox 
            content="完美是不完美的。"
            tooltip="追求完美的过程中，完美本身成为了一种限制和不完美。"
          />
        </div>
      </div>
    </div>
  )
};

export const ModernParadoxes = {
  render: () => (
    <div className="paradox-collection">
      <h3 className="paradox-title">现代悖论</h3>
      <div className="paradox-categories">
        <div className="paradox-category paradox-category--tech">
          <h4 className="paradox-category-title">技术悖论</h4>
          <div className="paradox-category-content">
            <Paradox 
              content="技术让我们更加孤独。"
              tooltip="连接世界的技术反而使人与人之间的真实联系减少。"
            />
            <Paradox 
              content="信息越多，知识越少。"
              tooltip="信息爆炸时代，获取信息容易了，但真正的理解和智慧却更加稀缺。"
            />
          </div>
        </div>
        
        <div className="paradox-category paradox-category--social">
          <h4 className="paradox-category-title">社会悖论</h4>
          <div className="paradox-category-content">
            <Paradox 
              content="选择越多，幸福越少。"
              tooltip="选择悖论：过多的选择可能导致决策疲劳和后悔心理。"
            />
            <Paradox 
              content="为了和平而战争。"
              tooltip="使用暴力手段来实现和平目标的矛盾性。"
            />
          </div>
        </div>
        
        <div className="paradox-category paradox-category--existential">
          <h4 className="paradox-category-title">存在悖论</h4>
          <div className="paradox-category-content">
            <Paradox 
              content="死亡给生命以意义。"
              tooltip="正是因为生命有限，才使得每一刻都变得珍贵和有意义。"
            />
            <Paradox 
              content="忘记是为了记住。"
              tooltip="有时候我们需要忘记痛苦的过去，才能更好地记住美好的未来。"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export const InteractiveParadox = {
  render: () => {
    const paradoxes = [
      {
        content: "这个句子有五个字。",
        tooltip: "数一数，这个句子真的有五个字吗？",
        explanation: "这个句子实际上有7个字，但它声称自己有5个字，形成了自指悖论。"
      },
      {
        content: "我从不说'从不'。",
        tooltip: "说这句话的人是否自相矛盾？",
        explanation: "说话者声明自己从不说'从不'，但在说这句话时却使用了'从不'。"
      },
      {
        content: "这页纸的背面什么都没写。",
        tooltip: "如果这句话写在纸的正面，那么背面的情况如何？",
        explanation: "这句话本身就写在了纸上，所以纸的背面可能确实什么都没写，也可能有其他内容。"
      }
    ];

    return (
      <div className="paradox-collection">
        <h3 className="paradox-title">互动悖论</h3>
        <p className="paradox-description">
          将鼠标悬停在下面的悖论上查看提示，点击查看详细解释。
        </p>
        
        <div className="paradox-interactive">
          {paradoxes.map((item, index) => (
            <div key={index} className="paradox-item">
              <Paradox 
                content={item.content}
                tooltip={item.tooltip}
              />
              <details className="paradox-explanation">
                <summary className="paradox-explanation-summary">
                  点击查看解释
                </summary>
                <p className="paradox-explanation-text">
                  {item.explanation}
                </p>
              </details>
            </div>
          ))}
        </div>
        
        <div className="paradox-tip">
          <h4 className="paradox-tip-title">🤔 思考提示</h4>
          <p className="paradox-tip-text">
            悖论不仅仅是文字游戏，它们揭示了语言、逻辑和思维的局限性。
            通过思考这些悖论，我们可以更好地理解知识的边界和认知的复杂性。
          </p>
        </div>
      </div>
    );
  }
};

export const Variants = {
  render: () => (
    <div className="paradox-collection">
      <h3 className="paradox-title">样式变体</h3>
      <div className="paradox-variants">
        <div className="paradox-variant-group">
          <h4 className="paradox-variant-title">尺寸变体</h4>
          <Paradox content="小尺寸" size="sm" />
          <Paradox content="中等尺寸" size="md" />
          <Paradox content="大尺寸" size="lg" />
          <Paradox content="超大尺寸" size="xl" />
        </div>
        
        <div className="paradox-variant-group">
          <h4 className="paradox-variant-title">颜色变体</h4>
          <Paradox content="主要" variant="primary" />
          <Paradox content="成功" variant="success" />
          <Paradox content="警告" variant="warning" />
          <Paradox content="错误" variant="error" />
          <Paradox content="信息" variant="info" />
        </div>
        
        <div className="paradox-variant-group">
          <h4 className="paradox-variant-title">边框样式</h4>
          <Paradox content="左边框" borderStyle="left" />
          <Paradox content="上边框" borderStyle="top" />
          <Paradox content="下边框" borderStyle="bottom" />
          <Paradox content="右边框" borderStyle="right" />
          <Paradox content="全边框" borderStyle="all" />
        </div>
        
        <div className="paradox-variant-group">
          <h4 className="paradox-variant-title">特殊效果</h4>
          <Paradox content="带引号" withQuotes />
          <Paradox content="发光效果" glow />
          <Paradox content="渐变背景" gradient />
          <Paradox content="动画效果" animated infinite />
        </div>
      </div>
    </div>
  )
};
