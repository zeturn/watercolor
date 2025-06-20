import ContainerVue from '../src/components/Container/Container.vue'
import BoxVue from '../src/components/Box/Box.vue'
import GridVue from '../src/components/Grid/Grid.vue'
import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import FabVue from '../src/components/Button/Fab.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import AvatarVue from '../src/components/Avatar/Avatar.vue'
import ChipVue from '../src/components/Chip/Chip.vue'
import BadgeVue from '../src/components/Badge/Badge.vue'
import FeatureVue from '../src/components/Feature/Feature.vue'
import AppBarVue from '../src/components/Navigation/AppBar.vue'
import ToolbarVue from '../src/components/Navigation/Toolbar.vue'
import BannerVue from '../src/components/Banner/Banner.vue'
import MarqueeVue from '../src/components/Marquee/Marquee.vue'

import { ref } from 'vue'

export default {
  title: '页面示例/首页',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const HomePage = {
  render: () => ({
    components: {
      ContainerVue,
      BoxVue,
      GridVue,
      CardVue,
      ButtonVue,
      FabVue,
      TypographyVue,
      AvatarVue,
      ChipVue,
      BadgeVue,
      FeatureVue,
      AppBarVue,
      ToolbarVue,
      BannerVue,
      MarqueeVue,
    },
    setup() {
      const showBanner = ref(true)
      
      const features = ref([
        {
          icon: '🎨',
          title: '现代化设计',
          description: '采用最新的设计趋势，提供优雅的用户界面'
        },
        {
          icon: '⚡',
          title: '高性能',
          description: '优化的组件架构，确保极致的性能表现'
        },
        {
          icon: '🔧',
          title: '易于定制',
          description: '灵活的主题系统，轻松适配您的品牌风格'
        },
        {
          icon: '📱',
          title: '响应式',
          description: '完美适配所有设备，从手机到桌面端'
        },
        {
          icon: '🚀',
          title: '开发效率',
          description: '丰富的组件库，大幅提升开发效率'
        },
        {
          icon: '🛠️',
          title: 'TypeScript',
          description: '完整的类型支持，提供更好的开发体验'
        }
      ])
      
      const testimonials = ref([
        {
          id: 1,
          name: '李明',
          role: '前端架构师',
          company: '阿里巴巴',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
          content: 'Watercolor UI 大大提升了我们团队的开发效率，组件质量非常高。',
          rating: 5
        },
        {
          id: 2,
          name: '王小红',
          role: 'UI/UX 设计师',
          company: '腾讯',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b9c2?w=60&h=60&fit=crop&crop=face',
          content: '设计风格统一，组件丰富，是我见过最好用的组件库之一。',
          rating: 5
        },
        {
          id: 3,
          name: '张三',
          role: '全栈开发工程师',
          company: '字节跳动',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
          content: '文档详细，API设计合理，上手非常容易。',
          rating: 5
        }
      ])
      
      const stats = ref([
        { label: '活跃用户', value: 50000, suffix: '+' },
        { label: '组件数量', value: 80, suffix: '+' },
        { label: 'GitHub Stars', value: 2500, suffix: '+' },
        { label: '社区贡献者', value: 150, suffix: '+' }
      ])
      
      const recentUpdates = ref([
        {
          version: 'v2.1.0',
          date: '2024-01-15',
          title: '新增暗色模式支持',
          description: '完整的暗色模式主题，自动切换系统主题'
        },
        {
          version: 'v2.0.5',
          date: '2024-01-10',
          title: '性能优化',
          description: '组件渲染性能提升30%，包体积减少15%'
        },
        {
          version: 'v2.0.0',
          date: '2024-01-01',
          title: '重大版本更新',
          description: '全新的API设计，更好的TypeScript支持'
        }
      ])
      
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      
      return {
        showBanner,
        features,
        testimonials,
        stats,
        recentUpdates,
        scrollToSection,
      }
    },
    template: `
      <div class="min-h-screen bg-white dark:bg-neutral-900">
        <!-- 顶部横幅 -->
        <BannerVue 
          v-if="showBanner"
          type="info" 
          position="top"
          @close="showBanner = false"
        >
          🎉 新版本 v2.1.0 已发布！现在支持暗色模式 
          <ButtonVue variant="text" size="sm" class="text-blue-600 dark:text-blue-400 ml-2">
            了解更多 →
          </ButtonVue>
        </BannerVue>
        
        <!-- 导航栏 -->
        <AppBarVue position="sticky" color="primary" class="shadow-sm border-b border-neutral-200 dark:border-neutral-700">
          <ToolbarVue class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">W</span>
              </div>
              <TypographyVue variant="h6" class="font-bold text-neutral-900 dark:text-neutral-100">
                Watercolor UI
              </TypographyVue>
            </div>
            
            <div class="hidden md:flex items-center space-x-6">
              <ButtonVue variant="text" @click="scrollToSection('features')">特性</ButtonVue>
              <ButtonVue variant="text" @click="scrollToSection('testimonials')">评价</ButtonVue>
              <ButtonVue variant="text" @click="scrollToSection('updates')">更新</ButtonVue>
              <ButtonVue variant="text">文档</ButtonVue>
              <ButtonVue variant="primary" size="sm">开始使用</ButtonVue>
            </div>
            
            <!-- 移动端菜单按钮 -->
            <ButtonVue variant="text" class="md:hidden">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </ButtonVue>
          </ToolbarVue>
        </AppBarVue>
        
        <!-- 英雄区域 -->
        <section class="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
          <ContainerVue max-width="6xl">
            <div class="text-center">
              <ChipVue variant="secondary" size="sm" class="mb-6">
                🚀 现代化组件库
              </ChipVue>
              
              <TypographyVue variant="h1" class="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                构建精美的
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  用户界面
                </span>
              </TypographyVue>
              
              <TypographyVue variant="h5" class="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto">
                Watercolor UI 是一个现代化的 Vue.js 组件库，提供了丰富的组件和优雅的设计，
                帮助您快速构建美观且功能强大的 Web 应用程序。
              </TypographyVue>
              
              <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <ButtonVue variant="primary" size="lg">
                  立即开始
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </ButtonVue>
                
                <ButtonVue variant="secondary" size="lg">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                  </svg>
                  观看演示
                </ButtonVue>
              </div>
              
              <!-- 统计数据 -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div v-for="stat in stats" :key="stat.label" class="text-center">
                  <TypographyVue variant="h4" class="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {{ stat.value }}{{ stat.suffix }}
                  </TypographyVue>
                  <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                    {{ stat.label }}
                  </TypographyVue>
                </div>
              </div>
            </div>
          </ContainerVue>
          
          <!-- 背景装饰 -->
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div class="absolute top-40 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-20 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </section>
        
        <!-- 特性展示 -->
        <section id="features" class="py-20 bg-white dark:bg-neutral-900">
          <ContainerVue max-width="6xl">
            <div class="text-center mb-16">
              <TypographyVue variant="h2" class="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                为什么选择 Watercolor UI？
              </TypographyVue>
              <TypographyVue variant="h6" class="text-xl text-neutral-600 dark:text-neutral-400">
                我们专注于提供最佳的开发体验和用户体验
              </TypographyVue>
            </div>
            
            <GridVue container spacing="lg">
              <GridVue 
                v-for="feature in features" 
                :key="feature.title"
                item 
                xs="12" 
                md="6" 
                lg="4"
              >
                <FeatureVue
                  :icon="feature.icon"
                  :title="feature.title"
                  :description="feature.description"
                  class="h-full"
                />
              </GridVue>
            </GridVue>
          </ContainerVue>
        </section>
        
        <!-- 用户评价 -->
        <section id="testimonials" class="py-20 bg-neutral-50 dark:bg-neutral-800">
          <ContainerVue max-width="6xl">
            <div class="text-center mb-16">
              <TypographyVue variant="h2" class="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                用户怎么说
              </TypographyVue>
              <TypographyVue variant="h6" class="text-xl text-neutral-600 dark:text-neutral-400">
                来自全球开发者的真实反馈
              </TypographyVue>
            </div>
            
            <GridVue container spacing="lg">
              <GridVue 
                v-for="testimonial in testimonials" 
                :key="testimonial.id"
                item 
                xs="12" 
                md="4"
              >
                <CardVue class="h-full border-0 shadow-lg">
                  <BoxVue class="p-6">
                    <div class="flex items-center mb-4">
                      <AvatarVue 
                        :src="testimonial.avatar" 
                        :alt="testimonial.name"
                        size="md"
                        class="mr-3"
                      />
                      <div>
                        <TypographyVue variant="subtitle1" class="font-medium text-neutral-900 dark:text-neutral-100">
                          {{ testimonial.name }}
                        </TypographyVue>
                        <TypographyVue variant="caption" class="text-neutral-600 dark:text-neutral-400">
                          {{ testimonial.role }} • {{ testimonial.company }}
                        </TypographyVue>
                      </div>
                    </div>
                    
                    <TypographyVue variant="body1" class="text-neutral-700 dark:text-neutral-300 mb-4">
                      "{{ testimonial.content }}"
                    </TypographyVue>
                    
                    <div class="flex items-center">
                      <span v-for="n in testimonial.rating" :key="n" class="text-yellow-400">★</span>
                    </div>
                  </BoxVue>
                </CardVue>
              </GridVue>
            </GridVue>
          </ContainerVue>
        </section>
        
        <!-- 最新更新 -->
        <section id="updates" class="py-20 bg-white dark:bg-neutral-900">
          <ContainerVue max-width="4xl">
            <div class="text-center mb-16">
              <TypographyVue variant="h2" class="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                最新更新
              </TypographyVue>
              <TypographyVue variant="h6" class="text-xl text-neutral-600 dark:text-neutral-400">
                持续改进，不断完善
              </TypographyVue>
            </div>
            
            <div class="space-y-6">
              <CardVue 
                v-for="update in recentUpdates" 
                :key="update.version"
                class="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <BoxVue class="p-6">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <div class="flex items-center mb-2">
                        <BadgeVue variant="primary" size="sm" class="mr-3">
                          {{ update.version }}
                        </BadgeVue>
                        <TypographyVue variant="caption" class="text-neutral-600 dark:text-neutral-400">
                          {{ update.date }}
                        </TypographyVue>
                      </div>
                      
                      <TypographyVue variant="h6" class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                        {{ update.title }}
                      </TypographyVue>
                      
                      <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                        {{ update.description }}
                      </TypographyVue>
                    </div>
                    
                    <ButtonVue variant="text" size="sm">
                      查看详情 →
                    </ButtonVue>
                  </div>
                </BoxVue>
              </CardVue>
            </div>
          </ContainerVue>
        </section>
        
        <!-- 调用行动 -->
        <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <ContainerVue max-width="4xl">
            <div class="text-center text-white">
              <TypographyVue variant="h2" class="text-4xl font-bold mb-4">
                准备好开始了吗？
              </TypographyVue>
              <TypographyVue variant="h6" class="text-xl opacity-90 mb-8">
                立即使用 Watercolor UI 构建您的下一个项目
              </TypographyVue>
              
              <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <ButtonVue variant="filled" size="lg" class="bg-white text-blue-600 hover:bg-gray-50">
                  查看文档
                </ButtonVue>
                
                <ButtonVue variant="secondary" size="lg" class="border-white text-white hover:bg-white hover:text-blue-600">
                  GitHub
                </ButtonVue>
              </div>
            </div>
          </ContainerVue>
        </section>
        
        <!-- 公司滚动横幅 -->
        <section class="py-12 bg-neutral-50 dark:bg-neutral-800">
          <ContainerVue max-width="6xl">
            <TypographyVue variant="h6" class="text-center text-neutral-600 dark:text-neutral-400 mb-8">
              受到领先公司信赖
            </TypographyVue>
            
            <MarqueeVue :speed="30" class="opacity-60">
              <div class="flex items-center space-x-12 text-2xl font-bold text-neutral-400">
                <span>阿里巴巴</span>
                <span>腾讯</span>
                <span>字节跳动</span>
                <span>百度</span>
                <span>美团</span>
                <span>滴滴</span>
                <span>小米</span>
                <span>华为</span>
              </div>
            </MarqueeVue>
          </ContainerVue>
        </section>
        
        <!-- 底部 -->
        <footer class="py-12 bg-neutral-900 text-white">
          <ContainerVue max-width="6xl">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div class="flex items-center space-x-2 mb-4">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">W</span>
                  </div>
                  <TypographyVue variant="h6" class="font-bold">
                    Watercolor UI
                  </TypographyVue>
                </div>
                <TypographyVue variant="body2" class="text-neutral-400">
                  现代化的 Vue.js 组件库，帮助您构建精美的用户界面。
                </TypographyVue>
              </div>
              
              <div>
                <TypographyVue variant="subtitle1" class="font-medium mb-4">产品</TypographyVue>
                <div class="space-y-2">
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">组件</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">模板</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">主题</ButtonVue>
                </div>
              </div>
              
              <div>
                <TypographyVue variant="subtitle1" class="font-medium mb-4">开发者</TypographyVue>
                <div class="space-y-2">
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">文档</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">API 参考</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">示例</ButtonVue>
                </div>
              </div>
              
              <div>
                <TypographyVue variant="subtitle1" class="font-medium mb-4">社区</TypographyVue>
                <div class="space-y-2">
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">GitHub</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">Discord</ButtonVue>
                  <ButtonVue variant="text" size="sm" class="text-neutral-400 hover:text-white p-0">Twitter</ButtonVue>
                </div>
              </div>
            </div>
            
            <div class="border-t border-neutral-800 mt-8 pt-8 text-center">
              <TypographyVue variant="caption" class="text-neutral-400">
                © 2024 Watercolor UI. 保留所有权利.
              </TypographyVue>
            </div>
          </ContainerVue>
        </footer>
        
        <!-- 浮动操作按钮 -->
        <FabVue 
          class="fixed bottom-6 right-6"
          @click="scrollToSection('top')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
          </svg>
        </FabVue>
      </div>
    `,
  }),
} 