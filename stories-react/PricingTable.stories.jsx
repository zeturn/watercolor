import React from 'react'
import PricingTable from '@/components/PricingTable/PricingTable.jsx'

export default {
  title: 'Components/PricingTable (React)',
  component: PricingTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 价格表格组件，支持多列布局和特殊标记。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    plans: {
      description: '价格方案数组',
      control: 'object',
    },
    columns: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: '列数',
    },
    className: {
      control: 'text',
      description: '自定义CSS类名',
    },
  },
}

const basicPlans = [
  { 
    name: '基础版', 
    price: '¥0/月', 
    features: ['1个项目', '社区支持', '基础功能'], 
    button: '免费开始'
  },
  { 
    name: '专业版', 
    price: '¥99/月', 
    features: ['无限项目', '优先支持', '高级功能', 'API访问'], 
    popular: true, 
    button: '立即购买'
  },
  { 
    name: '企业版', 
    price: '联系我们', 
    features: ['定制方案', '专属顾问', '企业级安全', '私有部署'], 
    button: '联系销售'
  },
]

export const Basic = {
  args: { 
    plans: basicPlans, 
    columns: 3 
  },
  render: (args) => (
    <div className="p-8 max-w-4xl">
      <PricingTable {...args} />
    </div>
  ),
}

export const SoftwarePricing = () => {
  const softwarePlans = [
    {
      name: '个人版',
      price: '¥29/月',
      features: [
        '单用户许可',
        '基础模板库',
        '社区支持',
        '标准导出格式'
      ],
      button: '选择个人版'
    },
    {
      name: '团队版',
      price: '¥199/月',
      features: [
        '最多10个用户',
        '完整模板库',
        '团队协作功能',
        '优先技术支持',
        '高级导出格式'
      ],
      popular: true,
      button: '选择团队版'
    },
    {
      name: '企业版',
      price: '¥999/月',
      features: [
        '无限用户',
        '自定义模板',
        '高级管理功能',
        '专属客户经理',
        '私有云部署',
        'SSO集成'
      ],
      button: '联系销售'
    }
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">选择适合您的计划</h2>
        <p className="text-gray-600">灵活的定价方案，满足不同规模团队的需求</p>
      </div>
      <PricingTable plans={softwarePlans} columns={3} />
    </div>
  )
}

export const HostingPricing = () => {
  const hostingPlans = [
    {
      name: '共享主机',
      price: '¥19/月',
      features: [
        '10GB 存储空间',
        '100GB 流量',
        '1个网站',
        '免费SSL证书',
        '99.9%正常运行时间'
      ],
      button: '立即购买'
    },
    {
      name: 'VPS主机',
      price: '¥89/月',
      features: [
        '50GB SSD存储',
        '不限流量',
        '5个网站',
        '免费备份',
        '专用IP地址',
        '24/7技术支持'
      ],
      popular: true,
      button: '推荐选择'
    },
    {
      name: '云服务器',
      price: '¥299/月',
      features: [
        '200GB SSD存储',
        '不限流量',
        '无限网站',
        '自动备份',
        '负载均衡',
        '专属技术顾问'
      ],
      button: '联系我们'
    },
    {
      name: '企业定制',
      price: '定制报价',
      features: [
        '自定义配置',
        '专属服务器',
        '高级安全防护',
        '多地域部署',
        '7x24专家支持',
        'SLA保障'
      ],
      button: '获取报价'
    }
  ]

  return (
    <div className="p-8 max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">主机托管服务</h2>
        <p className="text-gray-600">从个人网站到企业应用，我们都有合适的解决方案</p>
      </div>
      <PricingTable plans={hostingPlans} columns={4} />
    </div>
  )
}

export const EducationPricing = () => {
  const educationPlans = [
    {
      name: '学生版',
      price: '免费',
      features: [
        '所有核心功能',
        '5个项目',
        '社区论坛支持',
        '基础教程资源'
      ],
      button: '学生认证'
    },
    {
      name: '教师版',
      price: '¥199/年',
      features: [
        '课堂管理功能',
        '无限项目',
        '作业评分系统',
        '教学资源库',
        '优先技术支持'
      ],
      popular: true,
      button: '申请试用'
    },
    {
      name: '学校版',
      price: '¥2999/年',
      features: [
        '校园级授权',
        '管理员控制台',
        '批量用户管理',
        '数据分析报告',
        '定制化培训',
        '专属客服'
      ],
      button: '联系我们'
    }
  ]

  return (
    <div className="p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">教育优惠计划</h2>
        <p className="text-gray-600">为教育机构和学生提供特别优惠的定价方案</p>
        <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
          🎓 教育用户专享优惠
        </div>
      </div>
      <PricingTable plans={educationPlans} columns={3} />
    </div>
  )
}

export const CompactLayout = () => {
  const compactPlans = [
    {
      name: '基础',
      price: '¥39',
      features: ['核心功能', '邮件支持'],
      button: '选择'
    },
    {
      name: '标准',
      price: '¥79',
      features: ['所有功能', '电话支持'],
      popular: true,
      button: '选择'
    }
  ]

  return (
    <div className="p-8 max-w-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">简洁版价格表</h2>
        <p className="text-gray-600">适合空间有限的页面布局</p>
      </div>
      <PricingTable plans={compactPlans} columns={2} />
    </div>
  )
}
