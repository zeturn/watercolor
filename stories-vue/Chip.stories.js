import Chip from '../src/components/Chip/Chip.vue'
import Avatar from '../src/components/Avatar/Avatar.vue'

export default {
  title: 'Components/Chip (Vue)',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的标签芯片组件，用于显示标签、过滤器或其他简短信息。支持多种样式、尺寸和交互方式。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '芯片显示的文本',
      control: { type: 'text' }
    },
    avatar: {
      description: '头像图片链接',
      control: { type: 'text' }
    },
    variant: {
      description: '芯片样式变体',
      control: { type: 'select' },
      options: ['filled', 'outlined']
    },
    size: {
      description: '芯片尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    color: {
      description: '芯片颜色主题',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error']
    },
    clickable: {
      description: '是否可点击',
      control: { type: 'boolean' }
    },
    deletable: {
      description: '是否可删除',
      control: { type: 'boolean' }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    onClick: { 
      action: 'click',
      description: '点击时触发'
    },
    onDelete: { 
      action: 'delete',
      description: '删除时触发'
    },
  }
}

export const Primary = {
  args: {
    label: '标签芯片',
    variant: 'filled',
    size: 'md',
    color: 'primary'
  }
}

export const Variants = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">填充样式 (Filled)</h3>
          <div class="flex flex-wrap gap-2">
            <Chip label="默认" variant="filled" color="default" />
            <Chip label="主色调" variant="filled" color="primary" />
            <Chip label="次要" variant="filled" color="secondary" />
            <Chip label="成功" variant="filled" color="success" />
            <Chip label="警告" variant="filled" color="warning" />
            <Chip label="错误" variant="filled" color="error" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">轮廓样式 (Outlined)</h3>
          <div class="flex flex-wrap gap-2">
            <Chip label="默认" variant="outlined" color="default" />
            <Chip label="主色调" variant="outlined" color="primary" />
            <Chip label="次要" variant="outlined" color="secondary" />
            <Chip label="成功" variant="outlined" color="success" />
            <Chip label="警告" variant="outlined" color="warning" />
            <Chip label="错误" variant="outlined" color="error" />
          </div>
        </div>
      </div>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">不同尺寸</h3>
          <div class="flex items-center flex-wrap gap-4">
            <div class="text-center">
              <Chip label="小尺寸" size="sm" color="primary" />
              <p class="text-xs mt-2">Small</p>
            </div>
            <div class="text-center">
              <Chip label="中等尺寸" size="md" color="primary" />
              <p class="text-xs mt-2">Medium</p>
            </div>
            <div class="text-center">
              <Chip label="大尺寸" size="lg" color="primary" />
              <p class="text-xs mt-2">Large</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">不同样式的尺寸对比</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-16 text-sm">Filled:</span>
              <Chip label="小" size="sm" variant="filled" color="primary" />
              <Chip label="中" size="md" variant="filled" color="primary" />
              <Chip label="大" size="lg" variant="filled" color="primary" />
            </div>
            <div class="flex items-center gap-2">
              <span class="w-16 text-sm">Outlined:</span>
              <Chip label="小" size="sm" variant="outlined" color="primary" />
              <Chip label="中" size="md" variant="outlined" color="primary" />
              <Chip label="大" size="lg" variant="outlined" color="primary" />
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const WithAvatars = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">带头像的芯片</h3>
          <div class="flex flex-wrap gap-2">
            <Chip 
              label="John Doe" 
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              color="primary" 
            />
            <Chip 
              label="Jane Smith" 
              avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face"
              color="success" 
            />
            <Chip 
              label="Bob Johnson" 
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
              color="warning" 
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">不同尺寸的头像芯片</h3>
          <div class="flex items-center gap-4">
            <Chip 
              label="小尺寸" 
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              size="sm"
              color="primary" 
            />
            <Chip 
              label="中等尺寸" 
              avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face"
              size="md"
              color="primary" 
            />
            <Chip 
              label="大尺寸" 
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
              size="lg"
              color="primary" 
            />
          </div>
        </div>
      </div>
    `
  })
}

export const Interactive = {
  render: () => ({
    components: { Chip },
    data() {
      return {
        chips: [
          { id: 1, label: '可点击芯片', clickable: true },
          { id: 2, label: '可删除芯片', deletable: true },
          { id: 3, label: '可点击可删除', clickable: true, deletable: true },
          { id: 4, label: '禁用芯片', disabled: true }
        ]
      }
    },
    methods: {
      handleClick(id) {
        alert('点击了芯片: ' + id)
      },
      handleDelete(id) {
        this.chips = this.chips.filter(chip => chip.id !== id)
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">交互式芯片</h3>
          <div class="flex flex-wrap gap-2">
            <Chip 
              v-for="chip in chips"
              :key="chip.id"
              :label="chip.label"
              :clickable="chip.clickable"
              :deletable="chip.deletable"
              :disabled="chip.disabled"
              color="primary"
              @click="handleClick(chip.id)"
              @delete="handleDelete(chip.id)"
            />
          </div>
        </div>
      </div>
    `
  })
}

export const UseCases = {
  render: () => ({
    components: { Chip },
    data() {
      return {
        selectedTags: ['Vue.js', 'React'],
        availableTags: ['Vue.js', 'React', 'Angular', 'JavaScript', 'TypeScript', 'Node.js'],
        skills: [
          { name: 'JavaScript', level: 'expert' },
          { name: 'Vue.js', level: 'advanced' },
          { name: 'React', level: 'intermediate' },
          { name: 'Node.js', level: 'beginner' }
        ]
      }
    },
    computed: {
      skillColor() {
        return (level) => {
          const colors = {
            expert: 'success',
            advanced: 'primary',
            intermediate: 'warning',
            beginner: 'error'
          }
          return colors[level] || 'default'
        }
      }
    },
    methods: {
      toggleTag(tag) {
        const index = this.selectedTags.indexOf(tag)
        if (index > -1) {
          this.selectedTags.splice(index, 1)
        } else {
          this.selectedTags.push(tag)
        }
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">标签过滤器</h3>
          <p class="text-sm text-gray-600 mb-4">点击标签来切换选择状态</p>
          <div class="space-y-3">
            <div>
              <h4 class="text-sm font-medium mb-2">可选标签：</h4>
              <div class="flex flex-wrap gap-2">
                <Chip 
                  v-for="tag in availableTags"
                  :key="tag"
                  :label="tag"
                  :variant="selectedTags.includes(tag) ? 'filled' : 'outlined'"
                  :color="selectedTags.includes(tag) ? 'primary' : 'default'"
                  clickable
                  @click="toggleTag(tag)"
                />
              </div>
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2">已选择的标签：</h4>
              <div class="flex flex-wrap gap-2 min-h-[40px] p-2 bg-gray-50 rounded">
                <Chip 
                  v-for="tag in selectedTags"
                  :key="tag + '-selected'"
                  :label="tag"
                  color="primary"
                  deletable
                  @delete="toggleTag(tag)"
                />
                <span v-if="selectedTags.length === 0" class="text-gray-500 text-sm self-center">
                  暂未选择标签
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">技能等级标签</h3>
          <div class="flex flex-wrap gap-2">
            <Chip 
              v-for="skill in skills"
              :key="skill.name"
              :label="skill.name + ' (' + skill.level + ')'"
              :color="skillColor(skill.level)"
              size="sm"
            />
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <span class="inline-block mr-4">🟢 Expert</span>
            <span class="inline-block mr-4">🔵 Advanced</span>
            <span class="inline-block mr-4">🟡 Intermediate</span>
            <span class="inline-block mr-4">🔴 Beginner</span>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">状态标签</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="w-20 text-sm">任务状态:</span>
              <Chip label="进行中" color="primary" size="sm" />
              <Chip label="已完成" color="success" size="sm" />
              <Chip label="待审核" color="warning" size="sm" />
              <Chip label="已取消" color="error" size="sm" />
            </div>
            <div class="flex items-center gap-2">
              <span class="w-20 text-sm">优先级:</span>
              <Chip label="高" color="error" variant="outlined" size="sm" />
              <Chip label="中" color="warning" variant="outlined" size="sm" />
              <Chip label="低" color="success" variant="outlined" size="sm" />
            </div>
          </div>
        </div>
      </div>
    `
  })
} 