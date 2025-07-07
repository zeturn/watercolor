import React, { useState } from 'react';
import ImageGallery from '@/components/ImageGallery/ImageGallery.jsx';
import { action } from 'storybook/actions';

export default {
  title: 'Components/ImageGallery (React)',
  component: ImageGallery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: 'object',
      description: '图片数组',
    },
    title: {
      control: 'text',
      description: '画廊标题',
    },
    layout: {
      control: { type: 'select' },
      options: ['grid', 'masonry', 'carousel'],
      description: '布局模式',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '画廊尺寸',
    },
    columns: {
      control: { type: 'number', min: 1, max: 8 },
      description: '网格列数',
    },
    gap: {
      control: { type: 'number', min: 4, max: 32 },
      description: '图片间距(px)',
    },
    showInfo: {
      control: 'boolean',
      description: '显示图片信息',
    },
    showCount: {
      control: 'boolean',
      description: '显示图片数量',
    },
    showDownload: {
      control: 'boolean',
      description: '显示下载按钮',
    },
    showPagination: {
      control: 'boolean',
      description: '显示分页',
    },
    itemsPerPage: {
      control: { type: 'number', min: 4, max: 20 },
      description: '每页图片数',
    },
    lazyLoad: {
      control: 'boolean',
      description: '懒加载',
    },
    loading: {
      control: 'boolean',
      description: '加载状态',
    },
    onSelect: { action: 'select' },
    onDownload: { action: 'download' },
    onLightboxOpen: { action: 'lightbox-open' },
    onLightboxClose: { action: 'lightbox-close' },
  },
};

const Template = (args) => (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGallery {...args} />
    </div>
);

const sampleImages = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?random=1',
    thumbnail: 'https://picsum.photos/400/300?random=1',
    title: '美丽的风景',
    description: '这是一张美丽的自然风景照片，展现了大自然的壮丽。',
    alt: '风景照片'
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?random=2',
    thumbnail: 'https://picsum.photos/400/300?random=2',
    title: '城市建筑',
    description: '现代城市建筑的精美拍摄，展现了都市的繁华。',
    alt: '建筑照片'
  },
  {
    id: 3,
    src: 'https://picsum.photos/800/600?random=3',
    thumbnail: 'https://picsum.photos/400/300?random=3',
    title: '艺术创作',
    description: '独特的艺术作品，融合了传统与现代的元素。',
    alt: '艺术照片'
  },
  {
    id: 4,
    src: 'https://picsum.photos/800/600?random=4',
    thumbnail: 'https://picsum.photos/400/300?random=4',
    title: '自然生态',
    description: '野生动物在自然环境中的珍贵瞬间。',
    alt: '生态照片'
  },
  {
    id: 5,
    src: 'https://picsum.photos/800/600?random=5',
    thumbnail: 'https://picsum.photos/400/300?random=5',
    title: '人文纪实',
    description: '记录人们日常生活中的真实瞬间。',
    alt: '人文照片'
  },
  {
    id: 6,
    src: 'https://picsum.photos/800/600?random=6',
    thumbnail: 'https://picsum.photos/400/300?random=6',
    title: '科技创新',
    description: '展现现代科技发展的成果和未来趋势。',
    alt: '科技照片'
  },
  {
    id: 7,
    src: 'https://picsum.photos/800/600?random=7',
    thumbnail: 'https://picsum.photos/400/300?random=7',
    title: '食物美学',
    description: '精心制作的美食，色香味俱全。',
    alt: '美食照片'
  },
  {
    id: 8,
    src: 'https://picsum.photos/800/600?random=8',
    thumbnail: 'https://picsum.photos/400/300?random=8',
    title: '运动瞬间',
    description: '捕捉运动员的精彩瞬间和拼搏精神。',
    alt: '运动照片'
  },
  {
    id: 9,
    src: 'https://picsum.photos/800/600?random=9',
    thumbnail: 'https://picsum.photos/400/300?random=9',
    title: '旅行记忆',
    description: '世界各地的美丽景点和文化体验。',
    alt: '旅行照片'
  }
];


export const Default = Template.bind({});
Default.args = {
    images: sampleImages,
    title: '图片画廊',
    layout: 'grid',
    size: 'md',
    columns: 3,
    gap: 16,
    showInfo: true,
    showCount: true,
    showDownload: false,
    showPagination: false,
    itemsPerPage: 12,
    lazyLoad: true,
    loading: false,
    onSelect: action('select'),
    onDownload: action('download'),
    onLightboxOpen: action('lightbox-open'),
    onLightboxClose: action('lightbox-close'),
};

export const WithPagination = Template.bind({});
WithPagination.args = {
    ...Default.args,
    images: [...sampleImages, ...sampleImages.map(img => ({ ...img, id: img.id + 10 }))],
    title: '分页图片画廊',
    showPagination: true,
    itemsPerPage: 6,
};

export const MasonryLayout = Template.bind({});
MasonryLayout.args = {
    ...Default.args,
    title: '瀑布流布局',
    layout: 'masonry',
    columns: 4,
};

export const CarouselLayout = Template.bind({});
CarouselLayout.args = {
    ...Default.args,
    title: '轮播图布局',
    layout: 'carousel',
    size: 'lg',
    showInfo: false,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
    ...Default.args,
    title: '加载中...',
    images: [],
    loading: true,
};

export const EmptyState = Template.bind({});
EmptyState.args = {
    ...Default.args,
    title: '空画廊',
    images: [],
    loading: false,
};

export const WithCustomHeader = (args) => {
    const [filter, setFilter] = useState('all');
  
    const filteredImages = args.images.filter(img => {
      if (filter === 'all') return true;
      return img.title.includes(filter);
    });
  
    return (
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{args.title}</h2>
            <div>
                <button style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '4px', backgroundColor: filter === 'all' ? 'blue' : 'white', color: filter === 'all' ? 'white' : 'black' }} onClick={() => setFilter('all')}>全部</button>
                <button className={`px-3 py-1 text-sm rounded ml-2 ${filter === '风景' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setFilter('风景')}>风景</button>
                <button className={`px-3 py-1 text-sm rounded ml-2 ${filter === '城市' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setFilter('城市')}>城市</button>
            </div>
        </div>
        <ImageGallery {...args} images={filteredImages} />
      </div>
    );
  };
  WithCustomHeader.args = {
      ...Default.args,
      title: '可筛选的画廊'
  };
  
