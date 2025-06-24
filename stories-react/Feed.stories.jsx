import React from 'react'
import Feed from '@/components/Feed/Feed.jsx'

export default {
  title: 'Components/Feed (React)',
  component: Feed,
  tags: ['autodocs'],
}

const flat = [
  {id:1,author:'Alice',time:'1h',text:'创建了一个新的任务',avatar:'https://i.pravatar.cc/40?img=1'},
  {id:2,author:'Bob',time:'2h',text:'评论了你的帖子',avatar:'https://i.pravatar.cc/40?img=2'},
  {id:3,author:'Carol',time:'3h',text:'分享了一篇文章',avatar:'https://i.pravatar.cc/40?img=3'},
  {id:4,author:'David',time:'4h',text:'上传了新的照片',avatar:'https://i.pravatar.cc/40?img=4'},
  {id:5,author:'Emma',time:'5h',text:'更新了项目状态',avatar:'https://i.pravatar.cc/40?img=5'},
]

const socialFeed = [
  {id:1,author:'张三',time:'刚刚',text:'今天天气真不错，适合出门散步！ 🌞',avatar:'https://i.pravatar.cc/40?img=11'},
  {id:2,author:'李四',time:'10分钟前',text:'刚完成了一个重要项目，感觉很有成就感 💪',avatar:'https://i.pravatar.cc/40?img=12'},
  {id:3,author:'王五',time:'30分钟前',text:'推荐一本好书《代码整洁之道》，程序员必读！',avatar:'https://i.pravatar.cc/40?img=13'},
  {id:4,author:'赵六',time:'1小时前',text:'团队聚餐，大家玩得很开心 🎉',avatar:'https://i.pravatar.cc/40?img=14'},
  {id:5,author:'孙七',time:'2小时前',text:'学习新技术Vue3，组合式API真的很强大',avatar:'https://i.pravatar.cc/40?img=15'},
  {id:6,author:'周八',time:'3小时前',text:'咖啡 + 代码 = 完美的下午 ☕',avatar:'https://i.pravatar.cc/40?img=16'},
]

const tree = [
  {id:1,author:'Alice',time:'3h',text:'发布了更新',avatar:'https://i.pravatar.cc/40?img=1',children:[
    {id:11,author:'Bob',time:'2h',text:'看起来不错！',avatar:'https://i.pravatar.cc/40?img=2',children:[
      {id:111,author:'Cindy',time:'1h',text:'同意 👍',avatar:'https://i.pravatar.cc/40?img=3'}
    ]},
    {id:12,author:'David',time:'1.5h',text:'我也觉得很棒',avatar:'https://i.pravatar.cc/40?img=4'}
  ]},
  {id:2,author:'Emma',time:'5h',text:'分享了一些工作心得',avatar:'https://i.pravatar.cc/40?img=5',children:[
    {id:21,author:'Frank',time:'4h',text:'感谢分享，很有启发',avatar:'https://i.pravatar.cc/40?img=6'},
    {id:22,author:'Grace',time:'3h',text:'请问可以详细说说吗？',avatar:'https://i.pravatar.cc/40?img=7',children:[
      {id:221,author:'Emma',time:'2h',text:'当然可以，我私信你详细资料',avatar:'https://i.pravatar.cc/40?img=5'}
    ]}
  ]}
]

const discussionFeed = [
  {id:1,author:'产品经理',time:'上午9:00',text:'新功能设计稿已完成，请大家review',avatar:'https://i.pravatar.cc/40?img=21',children:[
    {id:11,author:'UI设计师',time:'上午9:30',text:'整体设计不错，有几个细节需要调整',avatar:'https://i.pravatar.cc/40?img=22'},
    {id:12,author:'前端开发',time:'上午10:00',text:'从技术实现角度看，这个方案可行',avatar:'https://i.pravatar.cc/40?img=23',children:[
      {id:121,author:'后端开发',time:'上午10:15',text:'后端API需要相应调整，预计2天完成',avatar:'https://i.pravatar.cc/40?img=24'}
    ]},
    {id:13,author:'测试工程师',time:'上午10:30',text:'测试用例已经在准备中',avatar:'https://i.pravatar.cc/40?img=25'}
  ]},
  {id:2,author:'项目经理',time:'上午11:00',text:'本周进度总结：目标完成90%',avatar:'https://i.pravatar.cc/40?img=26',children:[
    {id:21,author:'团队Leader',time:'上午11:30',text:'大家辛苦了，进度超出预期！',avatar:'https://i.pravatar.cc/40?img=27'},
    {id:22,author:'产品经理',time:'下午12:00',text:'下周计划已经制定，会议室讨论',avatar:'https://i.pravatar.cc/40?img=21'}
  ]}
]

const activityFeed = [
  {id:1,author:'系统',time:'5分钟前',text:'用户 张三 完成了任务「网站首页优化」',avatar:''},
  {id:2,author:'系统',time:'15分钟前',text:'项目「移动端APP」状态更新为「测试中」',avatar:''},
  {id:3,author:'系统',time:'30分钟前',text:'新成员 李四 加入了团队',avatar:''},
  {id:4,author:'系统',time:'1小时前',text:'文档「API接口说明」已更新',avatar:''},
  {id:5,author:'系统',time:'2小时前',text:'代码仓库收到了3个新的提交',avatar:''},
]

const newsTimeline = [
  {id:1,author:'科技日报',time:'今天 14:30',text:'人工智能技术在医疗领域取得重大突破',avatar:'https://i.pravatar.cc/40?img=31'},
  {id:2,author:'财经周刊',time:'今天 12:15',text:'全球科技股票市场出现回暖趋势',avatar:'https://i.pravatar.cc/40?img=32'},
  {id:3,author:'创业邦',time:'今天 10:00',text:'新兴独角兽公司完成C轮融资，估值达50亿',avatar:'https://i.pravatar.cc/40?img=33'},
  {id:4,author:'开发者头条',time:'昨天 18:20',text:'React 19正式发布，带来多项重要更新',avatar:'https://i.pravatar.cc/40?img=34'},
  {id:5,author:'设计师资讯',time:'昨天 16:45',text:'2024年UI设计趋势：极简主义与个性化的平衡',avatar:'https://i.pravatar.cc/40?img=35'},
]

const renderInContainer = (args, maxWidth = 'md') => (
  <div className={`p-8 max-w-${maxWidth}`}>
    <Feed {...args} />
  </div>
)

export const Basic = { 
  args: { items: flat, showAvatar: true }, 
  render: (args) => renderInContainer(args)
}

export const Timeline = { 
  args: { items: flat, variant: 'timeline', showAvatar: false }, 
  render: (args) => renderInContainer(args)
}

export const Tree = { 
  args: { items: tree }, 
  render: (args) => renderInContainer(args)
}

export const SocialFeed = {
  args: { items: socialFeed, showAvatar: true },
  render: (args) => renderInContainer(args, 'lg')
}

export const DiscussionThread = {
  args: { items: discussionFeed, showAvatar: true },
  render: (args) => renderInContainer(args, '2xl')
}

export const ActivityLog = {
  args: { items: activityFeed, showAvatar: false, variant: 'timeline' },
  render: (args) => renderInContainer(args, 'lg')
}

export const NewsTimeline = {
  args: { items: newsTimeline, showAvatar: true, variant: 'timeline' },
  render: (args) => renderInContainer(args, 'xl')
}

export const CompactFeed = {
  args: { items: socialFeed.slice(0, 3), showAvatar: false },
  render: (args) => (
    <div className='p-4 max-w-sm'>
      <Feed {...args} />
    </div>
  )
}

export const LargeFeed = {
  args: { items: [...socialFeed, ...flat, ...newsTimeline.slice(0, 2)], showAvatar: true },
  render: (args) => (
    <div className='p-8 max-w-2xl h-96 overflow-y-auto'>
      <Feed {...args} />
    </div>
  )
}

export const CustomColors = {
  args: { 
    items: tree, 
    showAvatar: true,
    color: '#10b981' // 绿色主题
  },
  render: (args) => renderInContainer(args, 'lg')
}

export const ThickTimeline = {
  args: { 
    items: socialFeed.slice(0, 4), 
    showAvatar: true,
    variant: 'timeline',
    color: '#ef4444', // 红色主题
    lineWidth: 4, // 粗线条
    dotSize: 16 // 大圆点
  },
  render: (args) => renderInContainer(args, 'lg')
}

export const MinimalTimeline = {
  args: { 
    items: activityFeed.slice(0, 4), 
    showAvatar: false,
    variant: 'timeline',
    color: '#8b5cf6', // 紫色主题
    lineWidth: 1, // 细线条
    dotSize: 8 // 小圆点
  },
  render: (args) => renderInContainer(args, 'lg')
}

export const ColorfulFeed = {
  args: { 
    items: [
      {id:1,author:'设计师',time:'1小时前',text:'完成了新的品牌色彩方案',avatar:'https://i.pravatar.cc/40?img=41', color: '#ec4899'},
      {id:2,author:'产品经理',time:'2小时前',text:'用户调研报告已出炉',avatar:'https://i.pravatar.cc/40?img=42', color: '#f97316'},
      {id:3,author:'开发工程师',time:'3小时前',text:'性能优化提升50%',avatar:'https://i.pravatar.cc/40?img=43', color: '#3b82f6'},
    ], 
    showAvatar: true,
    variant: 'timeline'
  },
  render: (args) => renderInContainer(args, 'lg')
}

export const WithCustomContent = {
  args: { 
    items: [
      {id:1,author:'系统通知',time:'刚刚',avatar:'https://i.pravatar.cc/40?img=50', customContent: <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-sm text-yellow-800">请注意：服务器将于今晚2点进行维护。</div>},
      {id:2,author:'张三',time:'10分钟前',text:'这是正常的文本内容',avatar:'https://i.pravatar.cc/40?img=51'},
      {id:3,author:'李四',time:'20分钟前',avatar:'https://i.pravatar.cc/40?img=52', customContent: <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">处理请求</button>},
    ], 
    showAvatar: true
  },
  render: (args) => renderInContainer(args, 'lg')
}
