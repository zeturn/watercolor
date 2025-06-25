import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的模态框组件，支持多种尺寸和配置。现已优化内边距，提供更好的内容展示效果。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    visible: {
      description: '模态框显示状态',
      control: { type: 'boolean' }
    },
    title: {
      description: '模态框标题',
      control: { type: 'text' }
    },
    size: {
      description: '模态框尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl']
    },
    closable: {
      description: '是否显示关闭按钮',
      control: { type: 'boolean' }
    },
    maskClosable: {
      description: '点击遮罩是否关闭',
      control: { type: 'boolean' }
    },
    centered: {
      description: '是否垂直居中',
      control: { type: 'boolean' }
    },
    onClose: { 
      action: 'close',
      description: '关闭时触发'
    },
  }
};

export const Primary = (args) => {
    const [visible, setVisible] = useState(false);
  
    const handleClose = () => {
      setVisible(false);
      args.onClose();
    };
  
    return (
      <div>
        <Button onClick={() => setVisible(true)}>打开模态框</Button>
        <Modal 
          {...args}
          visible={visible} 
          onClose={handleClose}
        >
          <p>这是模态框的内容。现在有了合适的内边距，内容显示更加舒适。</p>
          <p>您可以在右侧面板中调整模态框的各种属性来查看效果。</p>
        </Modal>
      </div>
    );
};
Primary.args = {
    title: '模态框标题',
    size: 'md',
    closable: true,
    maskClosable: true,
    centered: false,
    onClose: action('close'),
};

export const Sizes = () => {
    const [modals, setModals] = useState({ sm: false, md: false, lg: false, xl: false });

    const handleOpen = (size) => setModals(prev => ({ ...prev, [size]: true }));
    const handleClose = (size) => setModals(prev => ({ ...prev, [size]: false }));

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">不同尺寸的模态框</h3>
            <div className="flex gap-4">
                <Button onClick={() => handleOpen('sm')}>小尺寸 (sm)</Button>
                <Button onClick={() => handleOpen('md')}>中等尺寸 (md)</Button>
                <Button onClick={() => handleOpen('lg')}>大尺寸 (lg)</Button>
                <Button onClick={() => handleOpen('xl')}>超大尺寸 (xl)</Button>
            </div>
            
            <Modal visible={modals.sm} onClose={() => handleClose('sm')} title="小尺寸模态框" size="sm">
                <p>这是一个小尺寸的模态框，适合简单的确认对话或短消息。</p>
            </Modal>
            
            <Modal visible={modals.md} onClose={() => handleClose('md')} title="中等尺寸模态框" size="md">
                <p>这是一个中等尺寸的模态框，适合大多数用例。</p>
                <p>包含适量的内容和操作按钮。</p>
            </Modal>
            
            <Modal visible={modals.lg} onClose={() => handleClose('lg')} title="大尺寸模态框" size="lg">
                <p>这是一个大尺寸的模态框，适合展示更多内容。</p>
                <p>可以包含表格、表单或其他复杂组件。</p>
                <div className="mt-4 p-4 bg-gray-50 rounded">
                    <h4 className="mb-2">示例内容区域</h4>
                    <p className="text-sm">这里可以放置任何你需要的内容。</p>
                </div>
            </Modal>
            
            <Modal visible={modals.xl} onClose={() => handleClose('xl')} title="超大尺寸模态框" size="xl">
                <p>这是一个超大尺寸的模态框，适合复杂的界面和大量内容。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-blue-50 rounded">
                        <h4 className="mb-2">左侧内容</h4>
                        <p className="text-sm">可以展示详细信息、图表或其他内容。</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded">
                        <h4 className="mb-2">右侧内容</h4>
                        <p className="text-sm">支持复杂的布局和多列内容展示。</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const WithFooter = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button onClick={() => setVisible(true)}>打开确认对话框</Button>
            <Modal 
                visible={visible} 
                onClose={() => setVisible(false)} 
                title="确认操作" 
                size="sm"
                footer={
                    <div className="flex justify-end gap-2">
                        <Button variant="secondary" onClick={() => setVisible(false)}>取消</Button>
                        <Button variant="error" onClick={() => setVisible(false)}>确认删除</Button>
                    </div>
                }
            >
                <p>您确定要删除这个项目吗？</p>
                <p className="text-sm text-gray-600">此操作不可撤销，请谨慎考虑。</p>
            </Modal>
        </div>
    );
};

export const CustomHeader = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div>
            <Button onClick={() => setVisible(true)}>自定义头部</Button>
            <Modal 
                visible={visible} 
                onClose={() => setVisible(false)} 
                size="md"
                header={
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-lg">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-green-800 m-0">操作成功</h3>
                            <p className="text-sm text-gray-600 m-0">您的更改已保存</p>
                        </div>
                    </div>
                }
                footer={
                    <Button onClick={() => setVisible(false)}>知道了</Button>
                }
            >
                <p>自定义头部让您可以创建更丰富的模态框体验。</p>
                <p>可以添加图标、状态指示器或其他视觉元素。</p>
            </Modal>
        </div>
    );
};

export const PaddingDemo = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div>
            <Button onClick={() => setVisible(true)}>查看内边距优化</Button>
            <Modal 
                visible={visible} 
                onClose={() => setVisible(false)} 
                title="内边距优化演示" 
                size="md"
                footer={
                    <Button onClick={() => setVisible(false)}>关闭</Button>
                }
            >
                <div className="space-y-4">
                    <div className="p-4 border border-dashed border-gray-300 rounded">
                        <h4 className="text-lg font-medium mb-2">优化后的内边距</h4>
                        <p>现在模态框的内容区域有了合适的内边距（24px），让内容不会紧贴边缘。</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded">
                        <h5 className="font-medium mb-2">改进内容：</h5>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>body区域增加了24px的全方向内边距</li>
                            <li>优化了header和footer的内边距分布</li>
                            <li>改善了各部分之间的间距协调</li>
                            <li>增加了最小高度，避免内容过少时的布局问题</li>
                        </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">
                            这些改进让模态框的内容展示更加美观和舒适，符合现代界面设计标准。
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const ScrollableContent = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div>
            <Button onClick={() => setVisible(true)}>可滚动内容</Button>
            <Modal 
                visible={visible} 
                onClose={() => setVisible(false)} 
                title="长内容模态框" 
                size="lg"
                footer={
                    <div className="flex justify-end gap-2">
                        <Button variant="secondary" onClick={() => setVisible(false)}>取消</Button>
                        <Button onClick={() => setVisible(false)}>确认</Button>
                    </div>
                }
            >
                <div className="space-y-4">
                    <p><strong>这是一个包含大量内容的模态框，用于测试滚动和内边距。</strong></p>
                    
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="p-4 border rounded">
                            <h4>内容块 {i + 1}</h4>
                            <p>这是第{i + 1}个内容块。模态框会自动处理过长的内容，当内容超过90%的视口高度时会出现滚动条。内边距确保内容不会贴边显示。</p>
                        </div>
                    ))}
                    
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                        <p className="text-sm">
                            <strong>注意：</strong>即使内容很长，内边距依然保持一致，确保良好的阅读体验。
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
