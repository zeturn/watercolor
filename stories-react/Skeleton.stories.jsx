import React from 'react'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'

// Helper style generators to replace Tailwind utility classes
const container = (minWidth) => ({
  padding: '1.5rem',
  ...(minWidth ? { minWidth } : {})
})

const headingLg = {
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: '1rem'
}

const headingMd = {
  fontWeight: 500,
  marginBottom: '0.5rem'
}

const spaceY = (gap) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: gap
})

const flexBox = ({ gap = '0.75rem', align = 'center', justify } = {}) => ({
  display: 'flex',
  alignItems: align,
  columnGap: gap,
  ...(justify ? { justifyContent: justify } : {})
})

const gridCols = (cols, gap) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, 1fr)`,
  gap
})

const cardStyle = {
  maxWidth: '24rem',
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  padding: '1rem',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
}

const borderedContainer = {
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  overflow: 'hidden'
}

const tableHeader = {
  background: '#f9fafb',
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #e5e7eb'
}

const tableRow = {
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #e5e7eb'
}

const statsCard = {
  padding: '1rem',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem'
}

export default {
  title: 'Components/Skeleton (React)',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '显示内容加载之前的占位符预览。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rectangular', 'rounded', 'circular'],
      description: '骨架屏的形状变体'
    },
    animation: {
      control: { type: 'select' },
      options: [false, 'pulse', 'wave'],
      description: '动画效果，false表示无动画'
    },
    width: {
      control: { type: 'text' },
      description: '宽度，支持px或百分比'
    },
    height: {
      control: { type: 'text' },
      description: '高度，支持px或百分比'
    }
  }
}

// 最简单的测试用例
export const Default = {
  render: () => (
    <div style={container('20rem')}>
      <h3 style={headingLg}>默认骨架屏</h3>
      <Skeleton />
    </div>
  )
}

// 基础示例
export const Basic = {
  render: () => (
    <div style={container('24rem')}>
      <h3 style={headingLg}>基础骨架屏</h3>
      <div style={spaceY('0.75rem')}>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rectangular" height="200px" />
        <Skeleton variant="circular" width="40px" height="40px" />
      </div>
    </div>
  )
}

// 变体示例
export const Variants = {
  render: () => (
    <div style={container('500px')}>
      <h3 style={headingLg}>骨架屏变体</h3>
      <div style={spaceY('1.5rem')}>
        <div>
          <h4 style={headingMd}>文本</h4>
          <div style={spaceY('0.5rem')}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
        <div>
          <h4 style={headingMd}>矩形</h4>
          <Skeleton variant="rectangular" height="120px" />
        </div>
        <div>
          <h4 style={headingMd}>圆角矩形</h4>
          <Skeleton variant="rounded" height="80px" />
        </div>
        <div>
          <h4 style={headingMd}>圆形</h4>
          <div style={flexBox({ gap: '1rem' })}>
            <Skeleton variant="circular" width="32px" height="32px" />
            <Skeleton variant="circular" width="48px" height="48px" />
            <Skeleton variant="circular" width="64px" height="64px" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 动画示例
export const Animations = {
  render: () => (
    <div style={container('600px')}>
      <h3 style={headingLg}>动画效果</h3>
      <div style={gridCols(3, '1.5rem')}>
        <div>
          <h4 style={{ ...headingMd, marginBottom: '0.75rem' }}>无动画</h4>
          <Skeleton animation={false} height="60px" />
        </div>
        <div>
          <h4 style={{ ...headingMd, marginBottom: '0.75rem' }}>脉冲动画</h4>
          <Skeleton animation="pulse" height="60px" />
        </div>
        <div>
          <h4 style={{ ...headingMd, marginBottom: '0.75rem' }}>波浪动画</h4>
          <Skeleton animation="wave" height="60px" />
        </div>
      </div>
    </div>
  )
}

// 卡片加载示例
export const CardLoading = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h3 style={headingLg}>卡片加载状态</h3>
      <div style={cardStyle}>
        <div style={flexBox({ gap: '0.75rem', align: 'flex-start' })}>
          <Skeleton variant="circular" width="40px" height="40px" />
          <div style={spaceY('0.5rem')}>
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
        <Skeleton variant="rectangular" height="200px" style={{ marginTop: '1rem' }} />
        <div style={{ ...spaceY('0.5rem'), marginTop: '1rem' }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="70%" />
        </div>
        <div style={{ ...flexBox({ gap: '0.5rem' }), marginTop: '1rem' }}>
          <Skeleton variant="rounded" width="80px" height="32px" />
          <Skeleton variant="rounded" width="80px" height="32px" />
        </div>
      </div>
    </div>
  )
}

// 列表加载状态
export const ListLoading = {
  render: () => (
    <div style={{ padding: '1.5rem', maxWidth: '32rem' }}>
      <h3 style={headingLg}>列表加载状态</h3>
      <div style={spaceY('1rem')}>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              ...flexBox({ gap: '0.75rem' }),
              padding: '0.75rem',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem'
            }}
          >
            <Skeleton variant="circular" width="48px" height="48px" />
            <div style={{ flex: 1, ...spaceY('0.5rem') }}>
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="50%" />
            </div>
            <Skeleton variant="rounded" width="60px" height="24px" />
          </div>
        ))}
      </div>
    </div>
  )
}

// 表格加载状态
export const TableLoading = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h3 style={headingLg}>表格加载状态</h3>
      <div style={borderedContainer}>
        {/* 表头 */}
        <div style={tableHeader}>
          <div style={gridCols(4, '1rem')}>
            <Skeleton variant="text" width="60px" />
            <Skeleton variant="text" width="80px" />
            <Skeleton variant="text" width="70px" />
            <Skeleton variant="text" width="50px" />
          </div>
        </div>
        {/* 表格内容 */}
        {[1, 2, 3, 4, 5].map((row, idx) => (
          <div key={row} style={{ ...tableRow, borderBottom: idx === 4 ? 'none' : '1px solid #e5e7eb' }}>
            <div style={{ ...gridCols(4, '1rem'), alignItems: 'center' }}>
              <div style={flexBox({ gap: '0.5rem' })}>
                <Skeleton variant="circular" width="24px" height="24px" />
                <Skeleton variant="text" width="80px" />
              </div>
              <Skeleton variant="text" width="120px" />
              <Skeleton variant="rounded" width="60px" height="20px" />
              <Skeleton variant="text" width="40px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 文章加载状态
export const ArticleLoading = {
  render: () => (
    <div style={{ padding: '1.5rem', maxWidth: '42rem' }}>
      <h3 style={headingLg}>文章加载状态</h3>
      <article style={spaceY('1rem')}>
        {/* 标题区域 */}
        <div style={spaceY('0.75rem')}>
          <Skeleton variant="text" width="90%" height="32px" />
          <Skeleton variant="text" width="70%" height="32px" />
        </div>
        {/* 作者信息 */}
        <div style={{ ...flexBox({ gap: '0.75rem' }), padding: '1rem 0' }}>
          <Skeleton variant="circular" width="40px" height="40px" />
          <div style={spaceY('0.25rem')}>
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="80px" />
          </div>
        </div>
        {/* 特色图片 */}
        <Skeleton variant="rounded" height="200px" />
        {/* 文章内容 */}
        <div style={{ ...spaceY('0.75rem'), paddingTop: '1rem' }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="85%" />
          <div style={{ padding: '0.5rem 0' }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="80%" />
        </div>
        {/* 标签区域 */}
        <div style={{ ...flexBox({ gap: '0.5rem' }), paddingTop: '1rem' }}>
          <Skeleton variant="rounded" width="60px" height="24px" />
          <Skeleton variant="rounded" width="80px" height="24px" />
          <Skeleton variant="rounded" width="70px" height="24px" />
        </div>
      </article>
    </div>
  )
}

// 仪表板加载状态
export const DashboardLoading = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h3 style={headingLg}>仪表板加载状态</h3>
      <div style={spaceY('1.5rem')}>
        {/* 统计卡片 */}
        <div style={gridCols(4, '1rem')}>
          {[1, 2, 3, 4].map((card) => (
            <div key={card} style={statsCard}>
              <div style={{ ...flexBox({ justify: 'space-between' }), marginBottom: '0.5rem' }}>
                <Skeleton variant="text" width="60px" />
                <Skeleton variant="circular" width="24px" height="24px" />
              </div>
              <Skeleton variant="text" width="40px" height="28px" />
              <Skeleton variant="text" width="80px" />
            </div>
          ))}
        </div>
        {/* 图表区域 */}
        <div style={gridCols(2, '1.5rem')}>
          <div style={statsCard}>
            <Skeleton variant="text" width="120px" style={{ marginBottom: '1rem' }} />
            <Skeleton variant="rectangular" height="200px" />
          </div>
          <div style={statsCard}>
            <Skeleton variant="text" width="100px" style={{ marginBottom: '1rem' }} />
            <Skeleton variant="rectangular" height="200px" />
          </div>
        </div>
        {/* 活动列表 */}
        <div style={borderedContainer}>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
            <Skeleton variant="text" width="120px" />
          </div>
          {[1, 2, 3].map((item, idx) => (
            <div
              key={item}
              style={{
                ...flexBox({ gap: '0.75rem' }),
                padding: '1rem',
                borderBottom: idx === 2 ? 'none' : '1px solid #e5e7eb'
              }}
            >
              <Skeleton variant="circular" width="32px" height="32px" />
              <div style={{ flex: 1, ...spaceY('0.25rem') }}>
                <Skeleton variant="text" width="200px" />
                <Skeleton variant="text" width="120px" />
              </div>
              <Skeleton variant="text" width="60px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 控制台
export const Playground = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: undefined,
    height: undefined
  },
  render: (args) => (
    <div style={container('20rem')}>
      <h3 style={headingLg}>自定义骨架屏</h3>
      <Skeleton
        variant={args.variant}
        animation={args.animation}
        width={args.width}
        height={args.height}
      />
    </div>
  )
}
