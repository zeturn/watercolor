import React, { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination.jsx';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: '分页组件，用于大量数据的分页展示。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    total: { 
      control: 'number',
      description: '数据总数'
    },
    pageSize: { 
      control: 'number',
      description: '每页显示数量'
    },
    value: { 
      control: 'number', 
      name: 'currentPage',
      description: '当前页码'
    },
    siblingCount: {
      control: 'number',
      description: '当前页左右显示的页码数量'
    },
    boundaryCount: {
      control: 'number',
      description: '首尾显示的页码数量'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '尺寸大小'
    }
  },
};

export const Basic = {
  args: {
    total: 120,
    pageSize: 10,
    value: 1,
    size: 'md',
  },
  render: (args) => {
    const [page, setPage] = useState(args.value);
    
    return (
      <div className="p-8">
        <Pagination 
          {...args}
          value={page} 
          onChange={setPage}
        />
        <p className="mt-4 text-sm text-gray-500">当前页: {page}</p>
      </div>
    );
  },
};

export const DifferentSizes = {
  render: () => {
    const [pages, setPages] = useState({
      small: 1,
      medium: 1,
      large: 1
    });

    const handlePageChange = (key) => (page) => {
      setPages(prev => ({ ...prev, [key]: page }));
    };

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-lg font-semibold mb-4">不同数据量的分页</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-2">小数据量 (50条数据)</h4>
            <Pagination 
              total={50} 
              pageSize={10} 
              value={pages.small}
              onChange={handlePageChange('small')}
            />
            <p className="mt-2 text-sm text-gray-500">
              当前页: {pages.small}, 总页数: {Math.ceil(50 / 10)}
            </p>
          </div>
          
          <div>
            <h4 className="mb-2">中等数据量 (500条数据)</h4>
            <Pagination 
              total={500} 
              pageSize={20} 
              value={pages.medium}
              onChange={handlePageChange('medium')}
            />
            <p className="mt-2 text-sm text-gray-500">
              当前页: {pages.medium}, 总页数: {Math.ceil(500 / 20)}
            </p>
          </div>
          
          <div>
            <h4 className="mb-2">大数据量 (10000条数据)</h4>
            <Pagination 
              total={10000} 
              pageSize={50} 
              value={pages.large}
              onChange={handlePageChange('large')}
            />
            <p className="mt-2 text-sm text-gray-500">
              当前页: {pages.large}, 总页数: {Math.ceil(10000 / 50)}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export const WithDataTable = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const total = 47;
    
    // 模拟数据
    const allData = Array.from({ length: total }, (_, i) => ({
      id: i + 1,
      name: `用户 ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['管理员', '编辑', '用户'][i % 3],
      status: ['活跃', '离线', '待审核'][i % 3]
    }));
    
    // 计算当前页数据
    const startIndex = (currentPage - 1) * pageSize;
    const currentData = allData.slice(startIndex, startIndex + pageSize);
    
    return (
      <div className="p-8">
        <h3 className="text-lg font-semibold mb-4">带数据表格的分页示例</h3>
        
        {/* 数据表格 */}
        <div className="bg-white border rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.role}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status === '活跃' ? 'bg-green-100 text-green-800' :
                      item.status === '离线' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 分页信息 */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500">
            显示 {startIndex + 1}-{Math.min(startIndex + pageSize, total)} 条，共 {total} 条记录
          </div>
          <div className="text-sm text-gray-500">
            第 {currentPage} 页，共 {Math.ceil(total / pageSize)} 页
          </div>
        </div>
        
        {/* 分页组件 */}
        <div className="flex justify-center">
          <Pagination 
            total={total}
            pageSize={pageSize}
            value={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    );
  }
};

export const CustomSiblingAndBoundary = {
  render: () => {
    const [page, setPage] = useState(50);
    const [config, setConfig] = useState({
      siblingCount: 1,
      boundaryCount: 1
    });
    
    return (
      <div className="space-y-6 p-8">
        <h3 className="text-lg font-semibold mb-4">自定义同级和边界页码数量</h3>
        
        {/* 配置控制 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                同级页码数量 (siblingCount): {config.siblingCount}
              </label>
              <input
                type="range"
                min="0"
                max="3"
                value={config.siblingCount}
                onChange={(e) => setConfig(prev => ({ ...prev, siblingCount: Number(e.target.value) }))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                边界页码数量 (boundaryCount): {config.boundaryCount}
              </label>
              <input
                type="range"
                min="1"
                max="3"
                value={config.boundaryCount}
                onChange={(e) => setConfig(prev => ({ ...prev, boundaryCount: Number(e.target.value) }))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* 分页示例 */}
        <div className="text-center">
          <Pagination 
            total={1000}
            pageSize={10}
            value={page}
            onChange={setPage}
            siblingCount={config.siblingCount}
            boundaryCount={config.boundaryCount}
          />
          <p className="mt-4 text-sm text-gray-500">
            当前页: {page} / 100
          </p>
        </div>
        
        {/* 说明 */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">配置说明：</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>siblingCount</strong>：当前页左右显示的页码数量</li>
            <li>• <strong>boundaryCount</strong>：首尾显示的页码数量</li>
            <li>• 当页码过多时，中间会显示省略号</li>
          </ul>
        </div>
      </div>
    );
  }
};
