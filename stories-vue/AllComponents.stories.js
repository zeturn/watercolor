import ButtonVue from '../src/components/Button/Button.vue'
import InputVue from '../src/components/Input/Input.vue'
import CardVue from '../src/components/Card/Card.vue'
import SwitchVue from '../src/components/Switch/Switch.vue'
import BadgeVue from '../src/components/Badge/Badge.vue'
import ProgressVue from '../src/components/Progress/Progress.vue'
import TabsVue from '../src/components/Tabs/Tabs.vue'
import AccordionVue from '../src/components/Accordion/Accordion.vue'
import AlertVue from '../src/components/Alert/Alert.vue'
import BannerVue from '../src/components/Banner/Banner.vue'
import BreadcrumbVue from '../src/components/Breadcrumb/Breadcrumb.vue'
import CopyVue from '../src/components/Copy/Copy.vue'
import DatePickerVue from '../src/components/DatePicker/DatePicker.vue'
import HoverCardVue from '../src/components/HoverCard/HoverCard.vue'
import ImageGalleryVue from '../src/components/ImageGallery/ImageGallery.vue'
import MarqueeVue from '../src/components/Marquee/Marquee.vue'
import { ref } from 'vue'

export default {
  title: 'Design System/All Components',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const ComponentShowcase = {
  render: () => ({
    components: { 
      ButtonVue, 
      InputVue, 
      CardVue, 
      SwitchVue, 
      BadgeVue, 
      ProgressVue, 
      TabsVue,
      AccordionVue,
      AlertVue,
      BannerVue,
      BreadcrumbVue,
      CopyVue,
      DatePickerVue,
      HoverCardVue,
      ImageGalleryVue,
      MarqueeVue,
    },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        notifications: true,
        darkMode: false,
        autoSave: true,
      })
      
      const activeTab = ref(0)
      const tabs = [
        { title: '概览', key: 'overview' },
        { title: '设置', key: 'settings' },
        { title: '统计', key: 'stats' },
      ]
      
      const progress = ref({
        profile: 75,
        tasks: 45,
        storage: 88
      })
      
      // 新组件数据
      const accordionItems = ref([
        {
          title: '什么是Watercolor UI？',
          content: 'Watercolor是一个现代化的Vue.js组件库，提供了丰富的UI组件。'
        },
        {
          title: '如何开始使用？',
          content: '您可以通过npm安装watercolor-ui，然后在项目中导入所需的组件。'
        }
      ])
      
      const breadcrumbItems = ref([
        { label: '首页', href: '/' },
        { label: '组件', href: '/components' },
        { label: '展示页面' }
      ])
      
      const selectedDate = ref(null)
      
      return { 
        formData, 
        activeTab, 
        tabs, 
        progress, 
        accordionItems,
        breadcrumbItems,
        selectedDate
      }
    },
    template: `
      <div class="p-8 bg-neutral-0 dark:bg-neutral-900 min-h-screen">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Watercolor UI 组件展示
          </h1>
          
          <CardVue title="按钮组件" class="mb-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">基础变体</h3>
                <div class="flex flex-wrap gap-3">
                  <ButtonVue variant="primary">主要按钮</ButtonVue>
                  <ButtonVue variant="secondary">次要按钮</ButtonVue>
                  <ButtonVue variant="filled">填充按钮</ButtonVue>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">彩色按钮</h3>
                <div class="flex flex-wrap gap-3">
                  <ButtonVue variant="success">成功</ButtonVue>
                  <ButtonVue variant="warning">警告</ButtonVue>
                  <ButtonVue variant="error">错误</ButtonVue>
                  <ButtonVue variant="purple">紫色</ButtonVue>
                  <ButtonVue variant="orange">橙色</ButtonVue>
                  <ButtonVue variant="cyan">青色</ButtonVue>
                  <ButtonVue variant="pink">粉色</ButtonVue>
                </div>
              </div>
            </div>
          </CardVue>
          
          <CardVue title="表单组件" class="mb-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="space-y-6">
                <InputVue 
                  v-model="formData.name"
                  label="用户名"
                  placeholder="请输入用户名"
                />
                
                <InputVue 
                  v-model="formData.email"
                  label="邮箱地址"
                  type="email"
                  placeholder="example@domain.com"
                  required
                />
                
                <div class="space-y-4">
                  <SwitchVue 
                    v-model="formData.notifications"
                    label="推送通知"
                    description="接收重要更新通知"
                    color="primary"
                  />
                  
                  <SwitchVue 
                    v-model="formData.darkMode"
                    label="深色模式"
                    color="purple"
                  />
                  
                  <SwitchVue 
                    v-model="formData.autoSave"
                    label="自动保存"
                    color="success"
                  />
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">进度条</h3>
                  <div class="space-y-4">
                    <ProgressVue 
                      :value="progress.profile"
                      label="个人资料完成度"
                      color="primary"
                      show-percent
                    />
                    
                    <ProgressVue 
                      :value="progress.tasks"
                      label="任务进度"
                      color="success"
                      show-percent
                    />
                    
                    <ProgressVue 
                      :value="progress.storage"
                      label="存储使用率"
                      color="warning"
                      show-percent
                    />
                  </div>
                </div>
                
                <div>
                  <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">徽章</h3>
                  <div class="flex flex-wrap gap-3">
                    <BadgeVue variant="primary">主要</BadgeVue>
                    <BadgeVue variant="success">成功</BadgeVue>
                    <BadgeVue variant="warning">警告</BadgeVue>
                    <BadgeVue variant="error">错误</BadgeVue>
                    <BadgeVue variant="purple">紫色</BadgeVue>
                  </div>
                </div>
              </div>
            </div>
          </CardVue>
          
          <CardVue title="标签页组件" class="mb-8">
            <TabsVue v-model="activeTab" :tabs="tabs" variant="default">
              <template #default="{ activeIndex }">
                <div class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <div v-if="activeIndex === 0">
                    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">概览页面</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      这里是应用的概览信息。
                    </p>
                  </div>
                  
                  <div v-else-if="activeIndex === 1">
                    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">设置页面</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      在这里可以配置应用设置。
                    </p>
                  </div>
                  
                  <div v-else>
                    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">统计页面</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      查看详细的统计数据。
                    </p>
                  </div>
                </div>
              </template>
            </TabsVue>
          </CardVue>
          
          <!-- 新组件展示 -->
          <CardVue title="新增组件" class="mb-8">
            <div class="space-y-8">
              <!-- 警告提示 -->
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">警告提示</h3>
                <div class="space-y-4">
                  <AlertVue 
                    type="success" 
                    title="操作成功" 
                    message="您的操作已成功完成！"
                    :closable="true"
                  />
                  <AlertVue 
                    type="info" 
                    title="系统通知" 
                    message="系统将在今晚进行维护升级。"
                    :closable="true"
                  />
                  <AlertVue 
                    type="warning" 
                    title="重要提醒" 
                    message="您的账户余额不足，请及时充值。"
                    :closable="true"
                  />
                </div>
              </div>
              
              <!-- 面包屑导航 -->
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">面包屑导航</h3>
                <BreadcrumbVue :items="breadcrumbItems" />
              </div>
              
              <!-- 复制组件 -->
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">复制组件</h3>
                <div class="space-y-4">
                  <CopyVue 
                    text="npm install watercolor-ui"
                    variant="outlined"
                    copy-label="复制命令"
                  />
                  <CopyVue 
                    text="https://watercolor-ui.com"
                    variant="filled"
                    copy-label="复制链接"
                  />
                </div>
              </div>
              
              <!-- 日期选择器 -->
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">日期选择器</h3>
                <DatePickerVue 
                  v-model="selectedDate"
                  placeholder="请选择日期"
                  class="max-w-xs"
                />
              </div>
              
              <!-- 手风琴 -->
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">手风琴</h3>
                <AccordionVue :items="accordionItems" />
              </div>
            </div>
          </CardVue>
          
          <!-- New Components Section -->
          <section class="mt-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">新增组件</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- HoverCard -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">HoverCard 悬停卡片</h3>
                <p class="text-gray-600 text-sm mb-4">鼠标悬停时显示预览卡片的组件</p>
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-gray-500 mb-2">基本用法：</p>
                    <HoverCardVue 
                      trigger-text="悬停查看详情"
                      :card-data="{
                        title: '示例卡片',
                        description: '这是一个悬停预览卡片的示例。',
                        meta: ['演示', '预览']
                      }"
                    />
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-2">不同变体：</p>
                    <div class="flex flex-wrap gap-3">
                      <HoverCardVue trigger-text="默认" variant="default" :card-data="{ title: '默认样式' }" />
                      <HoverCardVue trigger-text="边框" variant="outlined" :card-data="{ title: '边框样式' }" />
                      <HoverCardVue trigger-text="填充" variant="filled" :card-data="{ title: '填充样式' }" />
                      <HoverCardVue trigger-text="简洁" variant="minimal" :card-data="{ title: '简洁样式' }" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- ImageGallery -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">ImageGallery 图片画廊</h3>
                <p class="text-gray-600 text-sm mb-4">展示图片集合的画廊组件</p>
                <div>
                  <p class="text-sm text-gray-500 mb-2">示例画廊：</p>
                  <ImageGalleryVue 
                    :images="[
                      { id: 1, src: 'https://via.placeholder.com/200x150/3b82f6/ffffff?text=1', title: '图片1' },
                      { id: 2, src: 'https://via.placeholder.com/200x150/8b5cf6/ffffff?text=2', title: '图片2' },
                      { id: 3, src: 'https://via.placeholder.com/200x150/10b981/ffffff?text=3', title: '图片3' },
                      { id: 4, src: 'https://via.placeholder.com/200x150/f59e0b/ffffff?text=4', title: '图片4' }
                    ]"
                    title="示例画廊"
                    :columns="2"
                    size="sm"
                    :gap="8"
                  />
                </div>
              </div>

              <!-- Marquee -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Marquee 滚动文本</h3>
                <p class="text-gray-600 text-sm mb-4">跑马灯效果的滚动文本组件</p>
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-gray-500 mb-2">基本滚动：</p>
                    <MarqueeVue text="欢迎使用 Watercolor UI 组件库！" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-2">不同变体：</p>
                    <div class="space-y-2">
                      <MarqueeVue text="默认样式" variant="default" size="sm" />
                      <MarqueeVue text="边框样式" variant="outlined" size="sm" />
                      <MarqueeVue text="填充样式" variant="filled" size="sm" />
                      <MarqueeVue text="渐变样式" variant="gradient" size="sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    `,
  }),
} 