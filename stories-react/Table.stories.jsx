import React, { useState } from 'react'
import Table, { TableHead, TableBody, TableRow, TableCell } from '@/components/Table/Table.jsx'

export default {
  title: 'Components/Table (React)',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '完整的表格系统，包含表头、表体、行和单元格组件，用于数据展示。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '表格大小'
    },
    stickyHeader: {
      control: 'boolean',
      description: '是否固定表头'
    },
    dense: {
      control: 'boolean',
      description: '是否使用紧凑模式'
    },
    hover: {
      control: 'boolean',
      description: '是否启用行悬停效果'
    },
    striped: {
      control: 'boolean',
      description: '是否显示斑马纹'
    },
  },
}

export const Primary = {
  args: {
    size: 'md',
    stickyHeader: false,
    dense: false,
    hover: true,
    striped: false,
  },
  render: (args) => (
    <div className="p-6">
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell component="th">姓名</TableCell>
            <TableCell component="th">职位</TableCell>
            <TableCell component="th">部门</TableCell>
            <TableCell component="th" align="right">薪资</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>张三</TableCell>
            <TableCell>前端工程师</TableCell>
            <TableCell>技术部</TableCell>
            <TableCell align="right">¥15,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>李四</TableCell>
            <TableCell>产品经理</TableCell>
            <TableCell>产品部</TableCell>
            <TableCell align="right">¥18,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>王五</TableCell>
            <TableCell>设计师</TableCell>
            <TableCell>设计部</TableCell>
            <TableCell align="right">¥14,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const Dense = {
  args: {
    size: 'sm',
    dense: true,
    hover: true,
    striped: true,
  },
  render: (args) => (
    <div className="p-6">
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell component="th" size="small">ID</TableCell>
            <TableCell component="th" size="small">名称</TableCell>
            <TableCell component="th" size="small">状态</TableCell>
            <TableCell component="th" size="small" align="center">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3].map(i => (
            <TableRow key={i}>
              <TableCell size="small">#{i.toString().padStart(3, '0')}</TableCell>
              <TableCell size="small">项目 {i}</TableCell>
              <TableCell size="small">活跃</TableCell>
              <TableCell size="small" align="center">编辑</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const Sortable = {
  args: {
    size: 'md',
    hover: true,
  },
  render: (args) => {
    const [data, setData] = useState([
      { name: 'Alice', age: 28, score: 95, city: '北京' },
      { name: 'Bob', age: 32, score: 87, city: '上海' },
      { name: 'Charlie', age: 25, score: 92, city: '深圳' },
    ])
    
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' })
    
    const handleSort = (key) => {
      let direction = 'asc'
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc'
      }
      setSortConfig({ key, direction })
      
      const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
        return 0
      })
      setData(sortedData)
    }
    
    const getSortIcon = (key) => {
      if (sortConfig.key !== key) return ''
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓'
    }
    
    return (
      <div className="p-6">
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableCell 
                component="th" 
                sortDirection={sortConfig.key === 'name' ? sortConfig.direction : false}
                onClick={() => handleSort('name')}
                style={{ cursor: 'pointer' }}
              >
                名称{getSortIcon('name')}
              </TableCell>
              <TableCell 
                component="th"
                onClick={() => handleSort('age')}
                style={{ cursor: 'pointer' }}
              >
                年龄{getSortIcon('age')}
              </TableCell>
              <TableCell 
                component="th" 
                sortDirection={sortConfig.key === 'score' ? sortConfig.direction : false}
                onClick={() => handleSort('score')}
                style={{ cursor: 'pointer' }}
              >
                评分{getSortIcon('score')}
              </TableCell>
              <TableCell component="th">城市</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.score}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  },
}

export const StickyHeader = {
  args: {
    stickyHeader: true,
    hover: true,
    striped: true,
  },
  render: (args) => (
    <div className="p-6">
      <div style={{ height: '300px', overflow: 'auto' }}>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableCell component="th">序号</TableCell>
              <TableCell component="th">姓名</TableCell>
              <TableCell component="th">职位</TableCell>
              <TableCell component="th">电话</TableCell>
              <TableCell component="th">邮箱</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 20 }, (_, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>员工 {i + 1}</TableCell>
                <TableCell>{i % 3 === 0 ? '开发工程师' : i % 3 === 1 ? '产品经理' : '设计师'}</TableCell>
                <TableCell>138-0000-{String(i + 1).padStart(4, '0')}</TableCell>
                <TableCell>user{i + 1}@example.com</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
}

export const Interactive = () => {
  const [products] = useState([
    { id: 1, name: 'MacBook Pro', price: 12999, category: '电脑', stock: 15 },
    { id: 2, name: 'iPhone 15', price: 5999, category: '手机', stock: 32 },
    { id: 3, name: 'iPad Air', price: 4399, category: '平板', stock: 8 },
    { id: 4, name: 'Apple Watch', price: 2799, category: '穿戴', stock: 25 },
    { id: 5, name: 'AirPods Pro', price: 1999, category: '音频', stock: 41 },
  ])
  
  const [selectedRows, setSelectedRows] = useState([])
  
  const handleRowClick = (productId) => {
    setSelectedRows(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }
  
  const handleSelectAll = () => {
    if (selectedRows.length === products.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(products.map(p => p.id))
    }
  }

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-4">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSelectAll}
        >
          {selectedRows.length === products.length ? '取消全选' : '全选'}
        </button>
        {selectedRows.length > 0 && (
          <span className="text-sm text-gray-600">
            已选择 {selectedRows.length} 项
          </span>
        )}
      </div>
      
      <Table hover={true}>
        <TableHead>
          <TableRow>
            <TableCell component="th" padding="checkbox">
              <input
                type="checkbox"
                checked={selectedRows.length === products.length}
                onChange={handleSelectAll}
                className="rounded"
              />
            </TableCell>
            <TableCell component="th">产品名称</TableCell>
            <TableCell component="th" align="right">价格</TableCell>
            <TableCell component="th">分类</TableCell>
            <TableCell component="th" align="right">库存</TableCell>
            <TableCell component="th" align="center">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow 
              key={product.id}
              selected={selectedRows.includes(product.id)}
              clickable={true}
              onClick={() => handleRowClick(product.id)}
            >
              <TableCell padding="checkbox">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(product.id)}
                  onChange={() => handleRowClick(product.id)}
                  className="rounded"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">¥{product.price.toLocaleString()}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell align="right">{product.stock}</TableCell>
              <TableCell align="center">
                <button 
                  className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    alert(`编辑 ${product.name}`)
                  }}
                >
                  编辑
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export const CustomCells = () => {
  const data = [
    { name: '张三', status: 'active', level: 3, avatar: '👨‍💻', tags: ['React', 'Vue'] },
    { name: '李四', status: 'inactive', level: 5, avatar: '👩‍💼', tags: ['Product', 'UX'] },
    { name: '王五', status: 'pending', level: 2, avatar: '👨‍🎨', tags: ['Design'] },
  ]
  
  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
    }
    const labels = {
      active: '活跃',
      inactive: '非活跃',
      pending: '待审核',
    }
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    )
  }
  
  const getLevelStars = (level) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level)
  }

  return (
    <div className="p-6">
      <Table hover={true}>
        <TableHead>
          <TableRow>
            <TableCell component="th">用户</TableCell>
            <TableCell component="th">状态</TableCell>
            <TableCell component="th">等级</TableCell>
            <TableCell component="th">技能标签</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{row.avatar}</span>
                  <span className="font-medium">{row.name}</span>
                </div>
              </TableCell>
              <TableCell>
                {getStatusBadge(row.status)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">{getLevelStars(row.level)}</span>
                  <span className="text-sm text-gray-600">({row.level}/5)</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {row.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: '项目 Alpha', progress: 75, deadline: '2024-02-15', team: 5, priority: 'high' },
    { id: 2, name: '项目 Beta', progress: 45, deadline: '2024-03-01', team: 3, priority: 'medium' },
    { id: 3, name: '项目 Gamma', progress: 90, deadline: '2024-01-30', team: 8, priority: 'high' },
    { id: 4, name: '项目 Delta', progress: 20, deadline: '2024-04-15', team: 4, priority: 'low' },
  ])
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }
  
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">项目管理看板</h3>
        <p className="text-sm text-gray-600">跟踪项目进度和团队分配</p>
      </div>
      
      <Table hover={true} striped={true}>
        <TableHead>
          <TableRow>
            <TableCell component="th">项目名称</TableCell>
            <TableCell component="th" align="center">进度</TableCell>
            <TableCell component="th">截止日期</TableCell>
            <TableCell component="th" align="center">团队人数</TableCell>
            <TableCell component="th" align="center">优先级</TableCell>
            <TableCell component="th" align="center">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <div className="font-medium">{project.name}</div>
                <div className="text-sm text-gray-500">ID: {project.id}</div>
              </TableCell>
              <TableCell align="center">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{project.progress}%</span>
              </TableCell>
              <TableCell>
                <div className="text-sm">{project.deadline}</div>
                <div className="text-xs text-gray-500">
                  {new Date(project.deadline) < new Date() ? '已过期' : '进行中'}
                </div>
              </TableCell>
              <TableCell align="center">
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    👥 {project.team}
                  </span>
                </div>
              </TableCell>
              <TableCell align="center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                  {project.priority.toUpperCase()}
                </span>
              </TableCell>
              <TableCell align="center">
                <div className="flex justify-center gap-1">
                  <button className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm">
                    查看
                  </button>
                  <button className="px-2 py-1 text-green-600 hover:bg-green-50 rounded text-sm">
                    编辑
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
