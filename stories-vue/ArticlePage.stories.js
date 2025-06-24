import ContainerVue from '../src/components/Container/Container.vue'
import BoxVue from '../src/components/Box/Box.vue'
import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import AvatarVue from '../src/components/Avatar/Avatar.vue'
import ChipVue from '../src/components/Chip/Chip.vue'
import BadgeVue from '../src/components/Badge/Badge.vue'
import BreadcrumbVue from '../src/components/Breadcrumb/Breadcrumb.vue'
import RatingVue from '../src/components/Rating/Rating.vue'
import ProgressVue from '../src/components/Progress/Progress.vue'
import BlockquoteVue from '../src/components/Blockquote/Blockquote.vue'
import { ref } from 'vue'

export default {
  title: '页面示例/文章页面',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const ArticlePage = {
  render: () => ({
    components: {
      ContainerVue,
      BoxVue,
      CardVue,
      ButtonVue,
      TypographyVue,
      AvatarVue,
      ChipVue,
      BadgeVue,
      BreadcrumbVue,
      RatingVue,
      ProgressVue,
      BlockquoteVue,
    },
    setup() {
      const article = ref({
        title: '深入理解 Vue 3 Composition API：现代前端开发的新范式',
        subtitle: '探索Vue 3 Composition API如何改变我们编写组件的方式，提高代码复用性和维护性',
        content: `
          <p>Vue 3 引入的 Composition API 是一个革命性的变化，它为我们提供了一种全新的组织组件逻辑的方式。在这篇文章中，我们将深入探讨 Composition API 的核心概念和实际应用。</p>
          
          <h2>什么是 Composition API？</h2>
          <p>Composition API 是 Vue 3 中引入的一组 API，它允许我们使用函数的方式来组织组件的逻辑。相比于 Options API，Composition API 提供了更好的逻辑复用、更清晰的类型推导和更灵活的代码组织方式。</p>
          
          <h2>核心概念</h2>
          <h3>1. setup() 函数</h3>
          <p>setup() 是 Composition API 的入口点，它在组件创建之前执行，并且只执行一次。在 setup() 中，我们可以定义响应式数据、计算属性、方法等。</p>
          
          <h3>2. 响应式系统</h3>
          <p>Vue 3 提供了 ref() 和 reactive() 来创建响应式数据。ref() 适用于基本类型，而 reactive() 适用于对象和数组。</p>
          
          <h3>3. 生命周期钩子</h3>
          <p>在 Composition API 中，生命周期钩子以 on 开头的函数形式提供，如 onMounted()、onUpdated() 等。</p>
        `,
        author: {
          name: '张三',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          bio: '全栈开发工程师，专注于现代前端技术栈',
          followers: 1234
        },
        publishDate: '2024年1月15日',
        readTime: '8分钟阅读',
        tags: ['Vue.js', 'JavaScript', '前端开发', 'Composition API'],
        stats: {
          views: 2547,
          likes: 89,
          comments: 23,
          shares: 12
        }
      })
      
      const breadcrumbItems = ref([
        { label: '首页', href: '/' },
        { label: '技术博客', href: '/blog' },
        { label: 'Vue.js', href: '/blog/vue' },
        { label: article.value.title }
      ])
      
      const readingProgress = ref(0)
      const isLiked = ref(false)
      const isBookmarked = ref(false)
      
      const relatedArticles = ref([
        {
          id: 1,
          title: 'Vue 3 性能优化技巧',
          excerpt: '了解如何让你的Vue 3应用运行得更快...',
          readTime: '5分钟',
          image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop'
        },
        {
          id: 2,
          title: '从 Vue 2 迁移到 Vue 3',
          excerpt: '完整的迁移指南，帮你平滑升级...',
          readTime: '12分钟',
          image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=300&h=200&fit=crop'
        },
        {
          id: 3,
          title: 'Vue 3 TypeScript 最佳实践',
          excerpt: '如何在Vue 3项目中有效使用TypeScript...',
          readTime: '7分钟',
          image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=200&fit=crop'
        }
      ])
      
      const handleLike = () => {
        isLiked.value = !isLiked.value
        if (isLiked.value) {
          article.value.stats.likes++
        } else {
          article.value.stats.likes--
        }
      }
      
      const handleBookmark = () => {
        isBookmarked.value = !isBookmarked.value
      }
      
      const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: article.value.title,
            text: article.value.subtitle,
            url: window.location.href
          })
        } else {
          alert('分享功能需要在支持的浏览器中使用')
        }
      }
      
      // 模拟阅读进度
      const updateReadingProgress = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrollTop / docHeight) * 100
        readingProgress.value = Math.min(progress, 100)
      }
      
      return {
        article,
        breadcrumbItems,
        readingProgress,
        isLiked,
        isBookmarked,
        relatedArticles,
        handleLike,
        handleBookmark,
        handleShare,
        updateReadingProgress,
      }
    },
    template: `
      <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <!-- 阅读进度条 -->
        <div class="fixed top-0 left-0 w-full z-50">
          <ProgressVue 
            :value="readingProgress" 
            color="primary" 
            size="sm"
            class="h-1"
          />
        </div>
        
        <!-- 主要内容 -->
        <ContainerVue max-width="4xl" class="py-8">
          <!-- 面包屑导航 -->
          <BreadcrumbVue :items="breadcrumbItems" class="mb-6" />
          
          <!-- 文章头部 -->
          <CardVue class="mb-8 border-0 shadow-lg">
            <BoxVue class="p-8">
              <!-- 标签 -->
              <div class="flex flex-wrap gap-2 mb-4">
                <ChipVue 
                  v-for="tag in article.tags" 
                  :key="tag"
                  variant="primary"
                  size="sm"
                >
                  {{ tag }}
                </ChipVue>
              </div>
              
              <!-- 标题 -->
              <TypographyVue variant="h1" class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {{ article.title }}
              </TypographyVue>
              
              <!-- 副标题 -->
              <TypographyVue variant="h6" class="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                {{ article.subtitle }}
              </TypographyVue>
              
              <!-- 作者信息和统计 -->
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div class="flex items-center space-x-4">
                  <AvatarVue 
                    :src="article.author.avatar" 
                    :alt="article.author.name"
                    size="lg"
                  />
                  <div>
                    <TypographyVue variant="subtitle1" class="font-medium text-neutral-900 dark:text-neutral-100">
                      {{ article.author.name }}
                    </TypographyVue>
                    <div class="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <span>{{ article.publishDate }}</span>
                      <span>•</span>
                      <span>{{ article.readTime }}</span>
                      <span>•</span>
                      <span>{{ article.stats.views }} 次阅读</span>
                    </div>
                  </div>
                </div>
                
                <!-- 互动按钮 -->
                <div class="flex items-center space-x-2">
                  <ButtonVue 
                    variant="secondary" 
                    size="sm"
                    :class="{ 'text-red-500': isLiked }"
                    @click="handleLike"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                    </svg>
                    {{ article.stats.likes }}
                  </ButtonVue>
                  
                  <ButtonVue 
                    variant="secondary" 
                    size="sm"
                    :class="{ 'text-blue-500': isBookmarked }"
                    @click="handleBookmark"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                    收藏
                  </ButtonVue>
                  
                  <ButtonVue 
                    variant="secondary" 
                    size="sm"
                    @click="handleShare"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                    </svg>
                    分享
                  </ButtonVue>
                </div>
              </div>
            </BoxVue>
          </CardVue>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- 文章内容 -->
            <div class="lg:col-span-2">
              <CardVue class="border-0 shadow-lg">
                <BoxVue class="p-8">
                  <!-- 特色图片 -->
                  <img 
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop" 
                    alt="Vue 3 Composition API"
                    class="w-full h-64 object-cover rounded-lg mb-8"
                  />
                  
                  <!-- 文章正文 -->
                  <div 
                    class="prose prose-lg max-w-none dark:prose-invert prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 prose-p:text-neutral-700 dark:prose-p:text-neutral-300"
                    v-html="article.content"
                  ></div>
                  
                  <!-- 引用块示例 -->
                  <BlockquoteVue 
                    quote="Composition API 不是为了替代 Options API，而是为了提供更多的选择和灵活性。"
                    author="尤雨溪"
                    class="my-8"
                  />
                  
                  <!-- 文章结尾 -->
                  <div class="border-t border-neutral-200 dark:border-neutral-700 pt-8 mt-8">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                          觉得这篇文章怎么样？
                        </TypographyVue>
                        <RatingVue :value="4.5" readonly size="sm" />
                      </div>
                      
                      <div class="flex items-center space-x-2">
                        <ButtonVue variant="primary" size="sm">
                          关注作者
                        </ButtonVue>
                      </div>
                    </div>
                  </div>
                </BoxVue>
              </CardVue>
            </div>
            
            <!-- 侧边栏 -->
            <div class="space-y-6">
              <!-- 作者信息卡片 -->
              <CardVue title="关于作者" class="border-0 shadow-lg">
                <BoxVue class="p-6">
                  <div class="text-center">
                    <AvatarVue 
                      :src="article.author.avatar" 
                      :alt="article.author.name"
                      size="xl"
                      class="mx-auto mb-4"
                    />
                    <TypographyVue variant="h6" class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                      {{ article.author.name }}
                    </TypographyVue>
                    <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400 mb-4">
                      {{ article.author.bio }}
                    </TypographyVue>
                    <div class="flex items-center justify-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{{ article.author.followers }} 关注者</span>
                      </div>
                    </div>
                    <ButtonVue variant="primary" size="sm" class="w-full">
                      关注
                    </ButtonVue>
                  </div>
                </BoxVue>
              </CardVue>
              
              <!-- 相关文章 -->
              <CardVue title="相关文章" class="border-0 shadow-lg">
                <BoxVue class="p-6">
                  <div class="space-y-4">
                    <div 
                      v-for="relatedArticle in relatedArticles" 
                      :key="relatedArticle.id"
                      class="flex space-x-3 group cursor-pointer"
                    >
                      <img 
                        :src="relatedArticle.image" 
                        :alt="relatedArticle.title"
                        class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div class="min-w-0 flex-1">
                        <TypographyVue 
                          variant="subtitle2" 
                          class="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1"
                        >
                          {{ relatedArticle.title }}
                        </TypographyVue>
                        <TypographyVue variant="caption" class="text-neutral-600 dark:text-neutral-400">
                          {{ relatedArticle.readTime }}
                        </TypographyVue>
                      </div>
                    </div>
                  </div>
                </BoxVue>
              </CardVue>
              
              <!-- 标签云 -->
              <CardVue title="热门标签" class="border-0 shadow-lg">
                <BoxVue class="p-6">
                  <div class="flex flex-wrap gap-2">
                    <ChipVue variant="secondary" size="sm">Vue.js</ChipVue>
                    <ChipVue variant="secondary" size="sm">React</ChipVue>
                    <ChipVue variant="secondary" size="sm">JavaScript</ChipVue>
                    <ChipVue variant="secondary" size="sm">TypeScript</ChipVue>
                    <ChipVue variant="secondary" size="sm">Node.js</ChipVue>
                    <ChipVue variant="secondary" size="sm">CSS</ChipVue>
                    <ChipVue variant="secondary" size="sm">HTML</ChipVue>
                    <ChipVue variant="secondary" size="sm">前端开发</ChipVue>
                  </div>
                </BoxVue>
              </CardVue>
            </div>
          </div>
        </ContainerVue>
      </div>
    `,
  }),
} 