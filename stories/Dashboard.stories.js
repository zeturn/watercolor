import ContainerVue from '../src/components/Container/Container.vue'
import BoxVue from '../src/components/Box/Box.vue'
import GridVue from '../src/components/Grid/Grid.vue'
import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import AppBarVue from '../src/components/Navigation/AppBar.vue'
import ToolbarVue from '../src/components/Navigation/Toolbar.vue'
import MenuVue from '../src/components/Navigation/Menu.vue'
import MenuItemVue from '../src/components/Navigation/MenuItem.vue'
import AvatarVue from '../src/components/Avatar/Avatar.vue'
import BadgeVue from '../src/components/Badge/Badge.vue'
import ChipVue from '../src/components/Chip/Chip.vue'
import ProgressVue from '../src/components/Progress/Progress.vue'
import TableVue from '../src/components/Table/Table.vue'
import TableHeadVue from '../src/components/Table/TableHead.vue'
import TableBodyVue from '../src/components/Table/TableBody.vue'
import TableRowVue from '../src/components/Table/TableRow.vue'
import TableCellVue from '../src/components/Table/TableCell.vue'
import { ref } from 'vue'

export default {
  title: '页面示例/仪表板',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const Dashboard = {
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
      MenuVue,
      MenuItemVue,
      AvatarVue,
      BadgeVue,
      ChipVue,
      ProgressVue,
      TableVue,
      TableHeadVue,
      TableBodyVue,
      TableRowVue,
      TableCellVue,
    },
    setup() {
      const user = ref({
        name: '张小明',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        role: '管理员'
      })

      const stats = ref([
        {
          title: '总用户数',
          value: '12,486',
          change: '+12.5%',
          trend: 'up',
          color: 'primary',
          icon: '👥'
        },
        {
          title: '月收入',
          value: '￥85,420',
          change: '+8.2%',
          trend: 'up',
          color: 'success',
          icon: '💰'
        },
        {
          title: '订单数',
          value: '2,847',
          change: '-2.1%',
          trend: 'down',
          color: 'warning',
          icon: '📦'
        },
        {
          title: '转化率',
          value: '3.24%',
          change: '+0.5%',
          trend: 'up',
          color: 'purple',
          icon: '📈'
        }
      ])

      const recentOrders = ref([
        {
          id: '#12345',
          customer: '李明',
          product: 'Vue.js 高级教程',
          amount: '￥299',
          status: 'completed',
          date: '2024-01-15'
        },
        {
          id: '#12346',
          customer: '王小红',
          product: 'React 开发实战',
          amount: '￥399',
          status: 'pending',
          date: '2024-01-15'
        },
        {
          id: '#12347',
          customer: '张三',
          product: 'JavaScript 进阶',
          amount: '￥199',
          status: 'completed',
          date: '2024-01-14'
        },
        {
          id: '#12348',
          customer: '李四',
          product: 'TypeScript 实践',
          amount: '￥259',
          status: 'cancelled',
          date: '2024-01-14'
        }
      ])

      const projects = ref([
        {
          name: 'E-commerce Platform',
          progress: 85,
          status: 'On Track',
          team: 5,
          deadline: '2024-02-15'
        },
        {
          name: 'Mobile App Redesign',
          progress: 62,
          status: 'At Risk',
          team: 3,
          deadline: '2024-01-30'
        },
        {
          name: 'API Integration',
          progress: 95,
          status: 'Nearly Done',
          team: 2,
          deadline: '2024-01-20'
        }
      ])

      const getStatusColor = (status) => {
        switch (status) {
          case 'completed': return 'success'
          case 'pending': return 'warning'
          case 'cancelled': return 'error'
          default: return 'secondary'
        }
      }

      const getStatusText = (status) => {
        switch (status) {
          case 'completed': return '已完成'
          case 'pending': return '处理中'
          case 'cancelled': return '已取消'
          default: return status
        }
      }

      return {
        user,
        stats,
        recentOrders,
        projects,
        getStatusColor,
        getStatusText,
      }
    },
    template: `
      <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
        <!-- 顶部导航栏 -->
        <AppBarVue position="sticky" color="primary" class="shadow-sm border-b border-neutral-200 dark:border-neutral-700">
          <ToolbarVue class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">D</span>
              </div>
              <TypographyVue variant="h6" class="font-bold text-neutral-900 dark:text-neutral-100">
                Dashboard
              </TypographyVue>
            </div>
            
            <div class="flex items-center space-x-4">
              <ButtonVue variant="text" size="sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7.5A7.5 7.5 0 000 12.5v0A7.5 7.5 0 007.5 20H15v-3z"/>
                </svg>
              </ButtonVue>
              
              <BadgeVue variant="error" size="sm" class="relative">
                <ButtonVue variant="text" size="sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7.5A7.5 7.5 0 000 12.5v0A7.5 7.5 0 007.5 20H15v-3z"/>
                  </svg>
                </ButtonVue>
                <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </BadgeVue>
              
              <div class="flex items-center space-x-2">
                <AvatarVue :src="user.avatar" :alt="user.name" size="sm" />
                <div class="hidden sm:block">
                  <TypographyVue variant="body2" class="font-medium text-neutral-900 dark:text-neutral-100">
                    {{ user.name }}
                  </TypographyVue>
                  <TypographyVue variant="caption" class="text-neutral-600 dark:text-neutral-400">
                    {{ user.role }}
                  </TypographyVue>
                </div>
              </div>
            </div>
          </ToolbarVue>
        </AppBarVue>

        <!-- 主要内容 -->
        <ContainerVue max-width="7xl" class="py-6">
          <!-- 欢迎横幅 -->
          <BoxVue class="mb-8">
            <TypographyVue variant="h4" class="font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              欢迎回来，{{ user.name }}！
            </TypographyVue>
            <TypographyVue variant="body1" class="text-neutral-600 dark:text-neutral-400">
              这是您今天的工作概览
            </TypographyVue>
          </BoxVue>

          <!-- 统计卡片 -->
          <GridVue container spacing="lg" class="mb-8">
            <GridVue 
              v-for="stat in stats" 
              :key="stat.title"
              item 
              xs="12" 
              sm="6" 
              lg="3"
            >
              <CardVue class="border-0 shadow-lg h-full">
                <BoxVue class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <div class="text-3xl">{{ stat.icon }}</div>
                    <ChipVue 
                      :variant="stat.color" 
                      size="sm"
                      :class="{
                        'text-green-600': stat.trend === 'up',
                        'text-red-600': stat.trend === 'down'
                      }"
                    >
                      {{ stat.change }}
                    </ChipVue>
                  </div>
                  
                  <TypographyVue variant="h4" class="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {{ stat.value }}
                  </TypographyVue>
                  
                  <TypographyVue variant="body2" class="text-neutral-600 dark:text-neutral-400">
                    {{ stat.title }}
                  </TypographyVue>
                </BoxVue>
              </CardVue>
            </GridVue>
          </GridVue>

          <GridVue container spacing="lg">
            <!-- 最近订单 -->
            <GridVue item xs="12" lg="8">
              <CardVue title="最近订单" class="border-0 shadow-lg h-full">
                <BoxVue class="p-6">
                  <div class="flex items-center justify-between mb-6">
                    <TypographyVue variant="h6" class="font-semibold text-neutral-900 dark:text-neutral-100">
                      最近订单
                    </TypographyVue>
                    <ButtonVue variant="text" size="sm">查看全部</ButtonVue>
                  </div>
                  
                  <TableVue>
                    <TableHeadVue>
                      <TableRowVue>
                        <TableCellVue>订单号</TableCellVue>
                        <TableCellVue>客户</TableCellVue>
                        <TableCellVue>产品</TableCellVue>
                        <TableCellVue>金额</TableCellVue>
                        <TableCellVue>状态</TableCellVue>
                        <TableCellVue>日期</TableCellVue>
                      </TableRowVue>
                    </TableHeadVue>
                    <TableBodyVue>
                      <TableRowVue v-for="order in recentOrders" :key="order.id">
                        <TableCellVue>
                          <TypographyVue variant="body2" class="font-medium text-blue-600">
                            {{ order.id }}
                          </TypographyVue>
                        </TableCellVue>
                        <TableCellVue>{{ order.customer }}</TableCellVue>
                        <TableCellVue>{{ order.product }}</TableCellVue>
                        <TableCellVue>
                          <TypographyVue variant="body2" class="font-semibold">
                            {{ order.amount }}
                          </TypographyVue>
                        </TableCellVue>
                        <TableCellVue>
                          <ChipVue 
                            :variant="getStatusColor(order.status)" 
                            size="sm"
                          >
                            {{ getStatusText(order.status) }}
                          </ChipVue>
                        </TableCellVue>
                        <TableCellVue>{{ order.date }}</TableCellVue>
                      </TableRowVue>
                    </TableBodyVue>
                  </TableVue>
                </BoxVue>
              </CardVue>
            </GridVue>

            <!-- 项目进度 -->
            <GridVue item xs="12" lg="4">
              <CardVue title="项目进度" class="border-0 shadow-lg h-full">
                <BoxVue class="p-6">
                  <div class="flex items-center justify-between mb-6">
                    <TypographyVue variant="h6" class="font-semibold text-neutral-900 dark:text-neutral-100">
                      项目进度
                    </TypographyVue>
                    <ButtonVue variant="text" size="sm">管理</ButtonVue>
                  </div>
                  
                  <div class="space-y-6">
                    <div v-for="project in projects" :key="project.name" class="space-y-3">
                      <div class="flex items-center justify-between">
                        <TypographyVue variant="subtitle2" class="font-medium text-neutral-900 dark:text-neutral-100">
                          {{ project.name }}
                        </TypographyVue>
                        <TypographyVue variant="caption" class="text-neutral-600 dark:text-neutral-400">
                          {{ project.progress }}%
                        </TypographyVue>
                      </div>
                      
                      <ProgressVue 
                        :value="project.progress" 
                        :color="project.progress >= 80 ? 'success' : project.progress >= 60 ? 'warning' : 'primary'"
                        size="sm"
                      />
                      
                      <div class="flex items-center justify-between text-sm">
                        <div class="flex items-center space-x-2">
                          <ChipVue 
                            :variant="project.status === 'On Track' ? 'success' : project.status === 'At Risk' ? 'warning' : 'primary'" 
                            size="sm"
                          >
                            {{ project.status }}
                          </ChipVue>
                          <span class="text-neutral-600 dark:text-neutral-400">{{ project.team }} 人团队</span>
                        </div>
                        <span class="text-neutral-600 dark:text-neutral-400">{{ project.deadline }}</span>
                      </div>
                    </div>
                  </div>
                </BoxVue>
              </CardVue>
            </GridVue>
          </GridVue>

          <!-- 快速操作 -->
          <BoxVue class="mt-8">
            <CardVue title="快速操作" class="border-0 shadow-lg">
              <BoxVue class="p-6">
                <TypographyVue variant="h6" class="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  快速操作
                </TypographyVue>
                
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <ButtonVue variant="secondary" class="h-20 flex flex-col items-center justify-center space-y-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    <span class="text-sm">新建订单</span>
                  </ButtonVue>
                  
                  <ButtonVue variant="secondary" class="h-20 flex flex-col items-center justify-center space-y-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span class="text-sm">用户管理</span>
                  </ButtonVue>
                  
                  <ButtonVue variant="secondary" class="h-20 flex flex-col items-center justify-center space-y-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    <span class="text-sm">数据报告</span>
                  </ButtonVue>
                  
                  <ButtonVue variant="secondary" class="h-20 flex flex-col items-center justify-center space-y-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="text-sm">系统设置</span>
                  </ButtonVue>
                </div>
              </BoxVue>
            </CardVue>
          </BoxVue>
        </ContainerVue>
      </div>
    `,
  }),
}