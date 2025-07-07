import ImageGalleryVue from '../src/components/ImageGallery/ImageGallery.vue'

export default {
  title: 'Components/ImageGallery (Vue)',
  component: ImageGalleryVue,
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
}

// 示例图片数据
const sampleImages = [
  {
    id: 1,
    src: 'https://picsum.photos/400/300?random=1',
    thumbnail: 'https://picsum.photos/200/150?random=1',
    title: '美丽的风景',
    description: '这是一张美丽的自然风景照片，展现了大自然的壮丽。',
    alt: '风景照片'
  },
  {
    id: 2,
    src: 'https://picsum.photos/400/300?random=2',
    thumbnail: 'https://picsum.photos/200/150?random=2',
    title: '城市建筑',
    description: '现代城市建筑的精美拍摄，展现了都市的繁华。',
    alt: '建筑照片'
  },
  {
    id: 3,
    src: 'https://picsum.photos/400/300?random=3',
    thumbnail: 'https://picsum.photos/200/150?random=3',
    title: '艺术创作',
    description: '独特的艺术作品，融合了传统与现代的元素。',
    alt: '艺术照片'
  },
  {
    id: 4,
    src: 'https://picsum.photos/400/300?random=4',
    thumbnail: 'https://picsum.photos/200/150?random=4',
    title: '自然生态',
    description: '野生动物在自然环境中的珍贵瞬间。',
    alt: '生态照片'
  },
  {
    id: 5,
    src: 'https://picsum.photos/400/300?random=5',
    thumbnail: 'https://picsum.photos/200/150?random=5',
    title: '人文纪实',
    description: '记录人们日常生活中的真实瞬间。',
    alt: '人文照片'
  },
  {
    id: 6,
    src: 'https://picsum.photos/400/300?random=6',
    thumbnail: 'https://picsum.photos/200/150?random=6',
    title: '科技创新',
    description: '展现现代科技发展的成果和未来趋势。',
    alt: '科技照片'
  },
  {
    id: 7,
    src: 'https://picsum.photos/400/300?random=7',
    thumbnail: 'https://picsum.photos/200/150?random=7',
    title: '食物美学',
    description: '精心制作的美食，色香味俱全。',
    alt: '美食照片'
  },
  {
    id: 8,
    src: 'https://picsum.photos/400/300?random=8',
    thumbnail: 'https://picsum.photos/200/150?random=8',
    title: '运动瞬间',
    description: '捕捉运动员的精彩瞬间和拼搏精神。',
    alt: '运动照片'
  },
  {
    id: 9,
    src: 'https://picsum.photos/400/300?random=9',
    thumbnail: 'https://picsum.photos/200/150?random=9',
    title: '旅行记忆',
    description: '世界各地的美丽景点和文化体验。',
    alt: '旅行照片'
  }
]

export const Default = {
  args: {
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
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
}

export const WithPagination = {
  args: {
    images: [...sampleImages, ...sampleImages.map(img => ({ ...img, id: img.id + 10 }))],
    title: '分页图片画廊',
    layout: 'grid',
    size: 'md',
    columns: 3,
    gap: 16,
    showInfo: true,
    showCount: true,
    showDownload: true,
    showPagination: true,
    itemsPerPage: 6,
    lazyLoad: true,
    loading: false,
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
}

export const MasonryLayout = {
  args: {
    images: [
      ...sampleImages.slice(0, 3).map(img => ({ ...img, src: 'https://picsum.photos/300/400?random=' + img.id })),
      ...sampleImages.slice(3, 6).map(img => ({ ...img, src: 'https://picsum.photos/300/250?random=' + img.id })),
      ...sampleImages.slice(6, 9).map(img => ({ ...img, src: 'https://picsum.photos/300/350?random=' + img.id })),
    ],
    title: '瀑布流布局',
    layout: 'masonry',
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
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
}

export const ProductGallery = {
  args: {
    images: [
      {
        id: 1,
        src: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Product+1',
        thumbnail: 'https://via.placeholder.com/200x150/3b82f6/ffffff?text=Product+1',
        title: 'iPhone 15 Pro',
        description: '采用钛金属设计的专业级智能手机。',
        alt: 'iPhone 15 Pro'
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Product+2',
        thumbnail: 'https://via.placeholder.com/200x150/8b5cf6/ffffff?text=Product+2',
        title: 'MacBook Air M3',
        description: '超薄轻便的笔记本电脑，性能强劲。',
        alt: 'MacBook Air M3'
      },
      {
        id: 3,
        src: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Product+3',
        thumbnail: 'https://via.placeholder.com/200x150/f59e0b/ffffff?text=Product+3',
        title: 'iPad Pro',
        description: '专业级平板电脑，创作者的理想选择。',
        alt: 'iPad Pro'
      },
      {
        id: 4,
        src: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Product+4',
        thumbnail: 'https://via.placeholder.com/200x150/10b981/ffffff?text=Product+4',
        title: 'Apple Watch',
        description: '智能手表，健康与时尚并重。',
        alt: 'Apple Watch'
      }
    ],
    title: '产品展示',
    layout: 'grid',
    size: 'lg',
    columns: 2,
    gap: 24,
    showInfo: true,
    showCount: true,
    showDownload: true,
    showPagination: false,
    itemsPerPage: 12,
    lazyLoad: true,
    loading: false,
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { ImageGalleryVue },
    setup() {
      const smallImages = sampleImages.slice(0, 4)
      return { smallImages }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3 class="text-lg font-semibold mb-4">小尺寸画廊</h3>
          <ImageGalleryVue 
            :images="smallImages"
            title="小尺寸"
            size="sm"
            :columns="4"
            :gap="8"
          />
        </div>
        
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>中等尺寸画廊</h3>
          <ImageGalleryVue 
            :images="smallImages"
            title="中等尺寸"
            size="md"
            :columns="3"
            :gap="16"
          />
        </div>
        
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>大尺寸画廊</h3>
          <ImageGalleryVue 
            :images="smallImages"
            title="大尺寸"
            size="lg"
            :columns="2"
            :gap="20"
          />
        </div>
        
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>特大尺寸画廊</h3>
          <ImageGalleryVue 
            :images="smallImages"
            title="特大尺寸"
            size="xl"
            :columns="2"
            :gap="24"
          />
        </div>
      </div>
    `,
  }),
}

export const LoadingState = {
  args: {
    images: sampleImages,
    title: '加载中的画廊',
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
    loading: true,
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
}

export const EmptyGallery = {
  args: {
    images: [],
    title: '空画廊',
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
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
        
        <div class="text-center py-12">
          <p class="text-gray-500">画廊为空时的显示效果</p>
        </div>
      </div>
    `,
  }),
}

export const CustomTitle = {
  render: () => ({
    components: { ImageGalleryVue },
    setup() {
      const images = sampleImages.slice(0, 6)
      return { images }
    },
    template: `
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <ImageGalleryVue 
          :images="images"
          :columns="3"
          :gap="16"
          show-count
        >
          <template #title>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm">📸</span>
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">我的摄影作品集</h2>
                <p class="text-sm text-gray-500">精选作品展示</p>
              </div>
            </div>
          </template>
        </ImageGalleryVue>
      </div>
    `,
  }),
}

export const ResponsiveColumns = {
  args: {
    images: sampleImages,
    title: '响应式列数',
    layout: 'grid',
    size: 'md',
    columns: 4,
    gap: 16,
    showInfo: true,
    showCount: true,
    showDownload: false,
    showPagination: false,
    itemsPerPage: 12,
    lazyLoad: true,
    loading: false,
  },
  render: (args) => ({
    components: { ImageGalleryVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-6xl mx-auto p-8">
        <div class="mb-4 p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-700">
            <strong>响应式提示：</strong> 画廊会根据屏幕大小自动调整列数：
            桌面端显示4列，平板显示2列，手机显示1列。
          </p>
        </div>
        
        <ImageGalleryVue 
          :images="args.images"
          :title="args.title"
          :layout="args.layout"
          :size="args.size"
          :columns="args.columns"
          :gap="args.gap"
          :show-info="args.showInfo"
          :show-count="args.showCount"
          :show-download="args.showDownload"
          :show-pagination="args.showPagination"
          :items-per-page="args.itemsPerPage"
          :lazy-load="args.lazyLoad"
          :loading="args.loading"
          @select="args.onSelect"
          @download="args.onDownload"
          @lightbox-open="args.onLightboxOpen"
          @lightbox-close="args.onLightboxClose"
        />
      </div>
    `,
  }),
} 