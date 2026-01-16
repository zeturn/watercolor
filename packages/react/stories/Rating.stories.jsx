import React, { useState } from 'react'
import Rating from '@/components/Rating/Rating.jsx'

export default {
  title: 'Components/Rating (React)',
  component: Rating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 评分组件，支持星级评分，可设置只读模式。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: '当前评分值',
    },
    max: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: '最大评分',
    },
    readOnly: {
      control: 'boolean',
      description: '是否只读',
    },
    onChange: {
      action: 'change',
      description: '评分变化回调',
    },
    className: {
      control: 'text',
      description: '自定义CSS类名',
    },
  },
}

export const Interactive = {
  args: {
    value: 3,
    max: 5,
    readOnly: false,
  },
  render: (args) => {
    const [rating, setRating] = useState(args.value)
    
    return (
      <div className="p-8 text-center">
        <div className="text-3xl mb-4">
          <Rating
            value={rating}
            max={args.max}
            readOnly={args.readOnly}
            onChange={(newRating) => {
              setRating(newRating)
              args.onChange?.(newRating)
            }}
          />
        </div>
        <p className="text-sm text-gray-500">
          当前评分: {rating} / {args.max}
        </p>
      </div>
    )
  },
}

export const ReadOnly = {
  args: { 
    value: 4, 
    max: 5, 
    readOnly: true 
  },
  render: (args) => (
    <div className="p-8 text-center">
      <div className="text-3xl">
        <Rating {...args} />
      </div>
      <p className="text-sm text-gray-500 mt-4">
        只读模式 - 评分: {args.value}
      </p>
    </div>
  ),
}

export const DifferentScales = () => {
  const scales = [
    { max: 3, value: 2, label: '3星制' },
    { max: 5, value: 3.5, label: '5星制' },
    { max: 7, value: 5, label: '7星制' },
    { max: 10, value: 8, label: '10星制' },
  ]

  return (
    <div className="space-y-6">
      {scales.map(({ max, value, label }) => (
        <div key={max} className="text-center">
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <div className="text-2xl">
            <Rating value={value} max={max} readOnly />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {value} / {max} 星
          </p>
        </div>
      ))}
    </div>
  )
}

export const ProductReviews = () => {
  const products = [
    { name: 'iPhone 15 Pro', rating: 4.5, reviews: 1234 },
    { name: 'MacBook Air M2', rating: 4.8, reviews: 856 },
    { name: 'AirPods Pro', rating: 4.2, reviews: 2341 },
    { name: 'Apple Watch Series 9', rating: 4.6, reviews: 567 },
  ]

  return (
    <div className="space-y-4 w-80">
      <h3 className="text-xl font-bold text-center mb-6">产品评价</h3>
      {products.map((product, index) => (
        <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800">{product.name}</h4>
            <span className="text-sm font-medium text-blue-600">
              {product.rating}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 mb-2">
            <Rating value={product.rating} readOnly />
            <span className="text-sm text-gray-500">
              ({product.reviews} 评价)
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full" 
              style={{ width: `${(product.rating / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const InteractiveReview = () => {
  const [ratings, setRatings] = useState({
    overall: 0,
    quality: 0,
    service: 0,
    value: 0,
    shipping: 0,
  })

  const categories = [
    { key: 'overall', label: '总体评价', description: '您对此产品的总体满意度' },
    { key: 'quality', label: '产品质量', description: '产品的做工和质量如何' },
    { key: 'service', label: '客户服务', description: '客服的响应速度和专业程度' },
    { key: 'value', label: '性价比', description: '产品的价格是否合理' },
    { key: 'shipping', label: '物流速度', description: '配送速度和包装情况' },
  ]

  const handleRatingChange = (category, newRating) => {
    setRatings(prev => ({
      ...prev,
      [category]: newRating
    }))
  }

  const averageRating = Object.values(ratings).reduce((a, b) => a + b, 0) / categories.length

  return (
    <div className="max-w-md space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">请为我们评分</h3>
        <p className="text-gray-600 text-sm">您的反馈对我们很重要</p>
      </div>

      <div className="space-y-4">
        {categories.map(({ key, label, description }) => (
          <div key={key} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{label}</h4>
              <span className="text-sm text-blue-600 font-medium">
                {ratings[key] || 0}/5
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            
            <div className="flex justify-center">
              <Rating
                value={ratings[key]}
                onChange={(rating) => handleRatingChange(key, rating)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">平均评分</h4>
        <div className="text-2xl mb-2">
          <Rating value={averageRating} readOnly />
        </div>
        <p className="text-lg font-bold text-blue-600">
          {averageRating.toFixed(1)} / 5.0
        </p>
      </div>

      <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
        提交评价
      </button>
    </div>
  )
}

export const HalfStarDemo = () => {
  const [rating, setRating] = useState(3.5)

  return (
    <div className="text-center space-y-4">
      <h3 className="text-lg font-semibold">支持半星评分</h3>
      
      <div className="text-3xl">
        <Rating 
          value={rating} 
          onChange={setRating}
        />
      </div>
      
      <p className="text-sm text-gray-600">
        当前评分: {rating} 星
      </p>
      
      <div className="space-x-2">
        <button 
          onClick={() => setRating(2.5)}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          2.5星
        </button>
        <button 
          onClick={() => setRating(3.5)}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          3.5星
        </button>
        <button 
          onClick={() => setRating(4.5)}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          4.5星
        </button>
      </div>
    </div>
  )
}
