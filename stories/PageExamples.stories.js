import ContainerVue from '../src/components/Container/Container.vue'
import BoxVue from '../src/components/Box/Box.vue'
import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import TextFieldVue from '../src/components/TextField/TextField.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import CheckboxVue from '../src/components/Checkbox/Checkbox.vue'
import AlertVue from '../src/components/Alert/Alert.vue'
import AvatarVue from '../src/components/Avatar/Avatar.vue'
import ChipVue from '../src/components/Chip/Chip.vue'
import ProgressVue from '../src/components/Progress/Progress.vue'
import AppBarVue from '../src/components/Navigation/AppBar.vue'
import ToolbarVue from '../src/components/Navigation/Toolbar.vue'
import GridVue from '../src/components/Grid/Grid.vue'
import { ref } from 'vue'

export default {
  title: '页面示例',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

// 登录页面
export const LoginPage = {
  render: () => ({
    components: {
      ContainerVue,
      BoxVue,
      CardVue,
      ButtonVue,
      TextFieldVue,
      TypographyVue,
      CheckboxVue,
      AlertVue,
    },
    setup() {
      const formData = ref({
        email: '',
        password: '',
        rememberMe: false,
      })
      
      const showAlert = ref(false)
      const isLoading = ref(false)
      
      const handleLogin = () => {
        if (!formData.value.email || !formData.value.password) {
          showAlert.value = true
          setTimeout(() => showAlert.value = false, 3000)
          return
        }
        
        isLoading.value = true
        setTimeout(() => {
          isLoading.value = false
          alert('登录成功！')
        }, 2000)
      }
      
      return {
        formData,
        showAlert,
        isLoading,
        handleLogin,
      }
    },
    template: `
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center py-12 px-4">
        <ContainerVue max-width="xs" class="w-full">
          <BoxVue class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
              </svg>
            </div>
            <TypographyVue variant="h4" class="font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              欢迎回来
            </TypographyVue>
            <TypographyVue variant="body1" class="text-neutral-600 dark:text-neutral-400">
              登录到您的账户
            </TypographyVue>
          </BoxVue>
          
          <CardVue class="shadow-xl border-0">
            <BoxVue class="p-8">
              <AlertVue 
                v-if="showAlert"
                severity="error" 
                class="mb-6"
                @close="showAlert = false"
              >
                请填写邮箱和密码
              </AlertVue>
              
              <form @submit.prevent="handleLogin" class="space-y-6">
                <TextFieldVue
                  v-model="formData.email"
                  label="邮箱地址"
                  type="email"
                  placeholder="your@email.com"
                  variant="outlined"
                  size="lg"
                  required
                  class="w-full"
                />
                
                <TextFieldVue
                  v-model="formData.password"
                  label="密码"
                  type="password"
                  placeholder="请输入密码"
                  variant="outlined"
                  size="lg"
                  required
                  class="w-full"
                />
                
                <div class="flex items-center justify-between">
                  <CheckboxVue
                    v-model="formData.rememberMe"
                    label="记住我"
                    color="primary"
                  />
                  
                  <ButtonVue variant="text" size="sm" class="text-blue-600 hover:text-blue-500">
                    忘记密码？
                  </ButtonVue>
                </div>
                
                <ButtonVue
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isLoading"
                  class="w-full"
                >
                  {{ isLoading ? '登录中...' : '登录' }}
                </ButtonVue>
              </form>
              
              <div class="mt-6 text-center">
                <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                  还没有账户？
                  <ButtonVue variant="text" class="text-blue-600 hover:text-blue-500 p-0 font-medium">
                    立即注册
                  </ButtonVue>
                </TypographyVue>
              </div>
            </BoxVue>
          </CardVue>
        </ContainerVue>
      </div>
    `,
  }),
}

// 注册页面
export const RegisterPage = {
  render: () => ({
    components: {
      ContainerVue,
      BoxVue,
      CardVue,
      ButtonVue,
      TextFieldVue,
      TypographyVue,
      CheckboxVue,
      AlertVue,
      ProgressVue,
    },
    setup() {
      const formData = ref({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      })
      
      const showAlert = ref(false)
      const alertMessage = ref('')
      const alertType = ref('error')
      const isLoading = ref(false)
      
      const passwordStrength = ref(65) // 示例强度值
      
      const handleRegister = () => {
        if (!formData.value.firstName || !formData.value.lastName) {
          showAlertMessage('请填写姓名', 'error')
          return
        }
        
        if (!formData.value.agreeToTerms) {
          showAlertMessage('请同意服务条款', 'error')
          return
        }
        
        isLoading.value = true
        setTimeout(() => {
          isLoading.value = false
          showAlertMessage('注册成功！', 'success')
        }, 2000)
      }
      
      const showAlertMessage = (message, type) => {
        alertMessage.value = message
        alertType.value = type
        showAlert.value = true
        setTimeout(() => showAlert.value = false, 4000)
      }
      
      return {
        formData,
        showAlert,
        alertMessage,
        alertType,
        isLoading,
        passwordStrength,
        handleRegister,
      }
    },
    template: `
      <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-4">
        <ContainerVue max-width="md" class="w-full">
          <BoxVue class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <TypographyVue variant="h4" class="font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              创建您的账户
            </TypographyVue>
            <TypographyVue variant="body1" class="text-neutral-600 dark:text-neutral-400">
              加入我们，开始您的精彩旅程
            </TypographyVue>
          </BoxVue>
          
          <CardVue class="shadow-xl border-0">
            <BoxVue class="p-8">
              <AlertVue 
                v-if="showAlert"
                :severity="alertType" 
                class="mb-6"
                @close="showAlert = false"
              >
                {{ alertMessage }}
              </AlertVue>
              
              <form @submit.prevent="handleRegister" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextFieldVue
                    v-model="formData.firstName"
                    label="名字"
                    placeholder="请输入名字"
                    variant="outlined"
                    required
                    class="w-full"
                  />
                  
                  <TextFieldVue
                    v-model="formData.lastName"
                    label="姓氏"
                    placeholder="请输入姓氏"
                    variant="outlined"
                    required
                    class="w-full"
                  />
                </div>
                
                <TextFieldVue
                  v-model="formData.email"
                  label="邮箱地址"
                  type="email"
                  placeholder="your@email.com"
                  variant="outlined"
                  required
                  class="w-full"
                />
                
                <div class="space-y-2">
                  <TextFieldVue
                    v-model="formData.password"
                    label="密码"
                    type="password"
                    placeholder="至少8位，包含大小写字母和数字"
                    variant="outlined"
                    required
                    class="w-full"
                  />
                  
                  <div v-if="formData.password" class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span class="text-neutral-600 dark:text-neutral-400">密码强度</span>
                      <span class="text-green-600">良好</span>
                    </div>
                    <ProgressVue 
                      :value="passwordStrength" 
                      color="success"
                      size="sm"
                    />
                  </div>
                </div>
                
                <TextFieldVue
                  v-model="formData.confirmPassword"
                  label="确认密码"
                  type="password"
                  placeholder="再次输入密码"
                  variant="outlined"
                  required
                  class="w-full"
                />
                
                <CheckboxVue
                  v-model="formData.agreeToTerms"
                  required
                  label="我同意服务条款和隐私政策"
                />
                
                <ButtonVue
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isLoading"
                  class="w-full"
                >
                  {{ isLoading ? '注册中...' : '创建账户' }}
                </ButtonVue>
              </form>
              
              <div class="mt-6 text-center">
                <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                  已有账户？
                  <ButtonVue variant="text" class="text-blue-600 hover:text-blue-500 p-0 font-medium">
                    立即登录
                  </ButtonVue>
                </TypographyVue>
              </div>
            </BoxVue>
          </CardVue>
        </ContainerVue>
      </div>
    `,
  }),
}

// 文章页面
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
      ProgressVue,
    },
    setup() {
      const article = ref({
        title: '深入理解 Vue 3 Composition API',
        subtitle: '探索Vue 3 Composition API如何改变我们编写组件的方式',
        author: {
          name: '张三',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          bio: '全栈开发工程师'
        },
        publishDate: '2024年1月15日',
        readTime: '8分钟阅读',
        tags: ['Vue.js', 'JavaScript', '前端开发'],
        stats: {
          views: 2547,
          likes: 89,
          comments: 23
        }
      })
      
      const readingProgress = ref(45)
      const isLiked = ref(false)
      
      return {
        article,
        readingProgress,
        isLiked,
      }
    },
    template: `
      <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div class="fixed top-0 left-0 w-full z-50">
          <ProgressVue 
            :value="readingProgress" 
            color="primary" 
            size="sm"
            class="h-1"
          />
        </div>
        
        <ContainerVue max-width="4xl" class="py-8">
          <CardVue class="mb-8 border-0 shadow-lg">
            <BoxVue class="p-8">
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
              
              <TypographyVue variant="h1" class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {{ article.title }}
              </TypographyVue>
              
              <TypographyVue variant="h6" class="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                {{ article.subtitle }}
              </TypographyVue>
              
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
                
                <div class="flex items-center space-x-2">
                  <ButtonVue 
                    variant="secondary" 
                    size="sm"
                    :class="{ 'text-red-500': isLiked }"
                    @click="isLiked = !isLiked"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                    </svg>
                    {{ article.stats.likes }}
                  </ButtonVue>
                  
                  <ButtonVue variant="secondary" size="sm">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                    收藏
                  </ButtonVue>
                  
                  <ButtonVue variant="secondary" size="sm">
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
            <div class="lg:col-span-2">
              <CardVue class="border-0 shadow-lg">
                <BoxVue class="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop" 
                    alt="Vue 3 Composition API"
                    class="w-full h-64 object-cover rounded-lg mb-8"
                  />
                  
                  <div class="prose prose-lg max-w-none dark:prose-invert">
                    <p>Vue 3 引入的 Composition API 是一个革命性的变化，它为我们提供了一种全新的组织组件逻辑的方式。在这篇文章中，我们将深入探讨 Composition API 的核心概念和实际应用。</p>
                    
                    <h2>什么是 Composition API？</h2>
                    <p>Composition API 是 Vue 3 中引入的一组 API，它允许我们使用函数的方式来组织组件的逻辑。相比于 Options API，Composition API 提供了更好的逻辑复用、更清晰的类型推导和更灵活的代码组织方式。</p>
                    
                    <h3>核心概念</h3>
                    <p>setup() 是 Composition API 的入口点，它在组件创建之前执行，并且只执行一次。在 setup() 中，我们可以定义响应式数据、计算属性、方法等。</p>
                  </div>
                </BoxVue>
              </CardVue>
            </div>
            
            <div class="space-y-6">
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
                    <ButtonVue variant="primary" size="sm" class="w-full">
                      关注
                    </ButtonVue>
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

// 首页
export const HomePage = {
  render: () => ({
    components: {
      ContainerVue,
      BoxVue,
      GridVue,
      CardVue,
      ButtonVue,
      TypographyVue,
      AppBarVue,
      ToolbarVue,
    },
    setup() {
      const features = ref([
        {
          title: '现代化设计',
          description: '采用最新的设计趋势，提供优雅的用户界面',
          icon: '🎨'
        },
        {
          title: '高性能',
          description: '优化的组件架构，确保极致的性能表现',
          icon: '⚡'
        },
        {
          title: '易于定制',
          description: '灵活的主题系统，轻松适配您的品牌风格',
          icon: '🔧'
        },
        {
          title: '响应式',
          description: '完美适配所有设备，从手机到桌面端',
          icon: '📱'
        }
      ])
      
      return { features }
    },
    template: `
      <div class="min-h-screen bg-white dark:bg-neutral-900">
        <AppBarVue position="sticky" color="primary" class="shadow-sm">
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
              <ButtonVue variant="text">特性</ButtonVue>
              <ButtonVue variant="text">文档</ButtonVue>
              <ButtonVue variant="text">示例</ButtonVue>
              <ButtonVue variant="primary" size="sm">开始使用</ButtonVue>
            </div>
          </ToolbarVue>
        </AppBarVue>
        
        <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
          <ContainerVue max-width="6xl">
            <div class="text-center">
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
            </div>
          </ContainerVue>
        </section>
        
        <section class="py-20 bg-white dark:bg-neutral-900">
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
                lg="3"
              >
                <CardVue class="h-full border-0 shadow-lg text-center">
                  <BoxVue class="p-6">
                    <div class="text-4xl mb-4">{{ feature.icon }}</div>
                    <TypographyVue variant="h6" class="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                      {{ feature.title }}
                    </TypographyVue>
                    <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                      {{ feature.description }}
                    </TypographyVue>
                  </BoxVue>
                </CardVue>
              </GridVue>
            </GridVue>
          </ContainerVue>
        </section>
        
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
      </div>
    `,
  }),
}