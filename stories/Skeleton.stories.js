import Skeleton from '../src/components/Skeleton/Skeleton.vue'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display a placeholder preview of your content before the data gets loaded.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rectangular', 'rounded', 'circular']
    },
    animation: {
      control: { type: 'select' },
      options: [false, 'pulse', 'wave']
    },
    width: {
      control: { type: 'text' }
    },
    height: {
      control: { type: 'text' }
    }
  }
}

export const Basic = {
  render: () => ({
    template: `
      <div class="p-6 space-y-4">
        <h3 class="text-lg font-semibold mb-4">基础骨架屏</h3>
        
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rectangular" height="200px" />
        <Skeleton variant="circular" width="40px" height="40px" />
      </div>
    `
  })
}

export const CardLoading = {
  render: () => ({
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">卡片加载状态</h3>
        
        <Card class="p-4 max-w-md">
          <div class="flex items-start gap-3">
            <Skeleton variant="circular" width="40px" height="40px" />
            <div class="flex-1 space-y-2">
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
          
          <Skeleton variant="rectangular" height="200px" class="mt-4" />
          
          <div class="mt-4 space-y-2">
            <Skeleton variant="text" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="70%" />
          </div>
        </Card>
      </div>
    `
  })
}

export const Variants = {
  render: () => ({
    template: `
      <div class="p-6 space-y-6">
        <h3 class="text-lg font-semibold mb-4">骨架屏变体</h3>
        
        <div class="space-y-4">
          <div>
            <h4 class="font-medium mb-2">文本</h4>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
          
          <div>
            <h4 class="font-medium mb-2">矩形</h4>
            <Skeleton variant="rectangular" height="200px" />
          </div>
          
          <div>
            <h4 class="font-medium mb-2">圆角矩形</h4>
            <Skeleton variant="rounded" height="120px" />
          </div>
          
          <div>
            <h4 class="font-medium mb-2">圆形</h4>
            <div class="flex gap-4">
              <Skeleton variant="circular" width="40px" height="40px" />
              <Skeleton variant="circular" width="56px" height="56px" />
              <Skeleton variant="circular" width="72px" height="72px" />
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Animations = {
  render: () => ({
    template: `
      <div class="p-6 space-y-6">
        <h3 class="text-lg font-semibold mb-4">动画效果</h3>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <h4 class="font-medium mb-3">无动画</h4>
            <Skeleton :animation="false" height="80px" />
          </div>
          
          <div>
            <h4 class="font-medium mb-3">脉冲动画</h4>
            <Skeleton animation="pulse" height="80px" />
          </div>
          
          <div>
            <h4 class="font-medium mb-3">波浪动画</h4>
            <Skeleton animation="wave" height="80px" />
          </div>
        </div>
      </div>
    `
  })
}

export const CardExample = {
  render: () => ({
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">卡片加载状态</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium mb-3">加载中</h4>
            <Card class="p-4">
              <div class="flex items-start gap-3">
                <Skeleton variant="circular" width="40px" height="40px" />
                <div class="flex-1 space-y-2">
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
              
              <Skeleton variant="rectangular" height="200px" class="mt-4" />
              
              <div class="mt-4 space-y-2">
                <Skeleton variant="text" />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="70%" />
              </div>
              
              <div class="flex gap-2 mt-4">
                <Skeleton variant="rounded" width="80px" height="32px" />
                <Skeleton variant="rounded" width="80px" height="32px" />
              </div>
            </Card>
          </div>
          
          <div>
            <h4 class="font-medium mb-3">已加载</h4>
            <Card class="p-4">
              <div class="flex items-start gap-3">
                <Avatar src="https://i.pravatar.cc/40" />
                <div class="flex-1">
                  <h5 class="font-medium">张三</h5>
                  <p class="text-sm text-neutral-600">2小时前</p>
                </div>
              </div>
              
              <img 
                src="https://picsum.photos/400/200" 
                alt="示例图片"
                class="w-full h-[200px] object-cover rounded-lg mt-4"
              />
              
              <div class="mt-4">
                <p>这是一个示例文章的内容，展示了完全加载后的状态。内容包含了标题、作者信息、图片和正文内容。</p>
              </div>
              
              <div class="flex gap-2 mt-4">
                <Button size="sm" variant="primary">点赞</Button>
                <Button size="sm" variant="secondary">评论</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    `
  })
}

export const ListExample = {
  render: () => ({
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">列表加载状态</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium mb-3">加载中</h4>
            <List>
              <ListItem v-for="i in 4" :key="i" class="py-3">
                <ListItemIcon>
                  <Skeleton variant="circular" width="24px" height="24px" />
                </ListItemIcon>
                <ListItemText>
                  <div class="space-y-1">
                    <Skeleton variant="text" width="70%" />
                    <Skeleton variant="text" width="50%" />
                  </div>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          
          <div>
            <h4 class="font-medium mb-3">已加载</h4>
            <List>
              <ListItem class="py-3">
                <ListItemIcon>
                  <CheckCircleIcon class="text-success-500" />
                </ListItemIcon>
                <ListItemText 
                  primary="任务已完成"
                  secondary="刚刚完成了第一个任务"
                />
              </ListItem>
              <ListItem class="py-3">
                <ListItemIcon>
                  <InfoIcon class="text-info-500" />
                </ListItemIcon>
                <ListItemText 
                  primary="系统更新"
                  secondary="系统已更新到最新版本"
                />
              </ListItem>
              <ListItem class="py-3">
                <ListItemIcon>
                  <WarningIcon class="text-warning-500" />
                </ListItemIcon>
                <ListItemText 
                  primary="注意事项"
                  secondary="请及时保存您的工作"
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    `,
    components: {
      CheckCircleIcon: {
        template: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
      },
      InfoIcon: {
        template: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
      },
      WarningIcon: {
        template: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
      }
    }
  })
} 