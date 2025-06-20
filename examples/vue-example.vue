<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
      Watercolor UI - Vue 示例
    </h1>
    
    <!-- 主题切换 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">主题切换</h2>
      <div class="flex gap-4 mb-4">
        <ButtonVue 
          v-for="theme in themes" 
          :key="theme"
          :variant="currentTheme === theme ? 'filled' : 'secondary'"
          @click="switchTheme(theme)"
          class="capitalize"
        >
          {{ theme }}
        </ButtonVue>
      </div>
      <ButtonVue 
        :variant="isDark ? 'filled' : 'secondary'" 
        @click="toggleDark"
      >
        {{ isDark ? '浅色模式' : '深色模式' }}
      </ButtonVue>
    </div>
    
    <!-- 按钮示例 -->
    <CardVue title="按钮组件" class="mb-8">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-3">变体</h3>
          <div class="flex gap-3">
            <ButtonVue variant="primary">主要按钮</ButtonVue>
            <ButtonVue variant="secondary">次要按钮</ButtonVue>
            <ButtonVue variant="filled">填充按钮</ButtonVue>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-3">大小</h3>
          <div class="flex items-center gap-3">
            <ButtonVue size="sm" variant="primary">小按钮</ButtonVue>
            <ButtonVue size="md" variant="primary">中按钮</ButtonVue>
            <ButtonVue size="lg" variant="primary">大按钮</ButtonVue>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-3">状态</h3>
          <div class="flex gap-3">
            <ButtonVue variant="primary" @click="showAlert">点击我</ButtonVue>
            <ButtonVue variant="primary" disabled>禁用按钮</ButtonVue>
          </div>
        </div>
      </div>
    </CardVue>
    
    <!-- 输入框示例 -->
    <CardVue title="输入框组件" class="mb-8">
      <div class="space-y-6 max-w-md">
        <InputVue 
          v-model="formData.name"
          label="姓名"
          placeholder="请输入您的姓名"
          help-text="这将显示在您的个人资料中"
          required
        />
        
        <InputVue 
          v-model="formData.email"
          label="邮箱地址"
          type="email"
          placeholder="example@domain.com"
          :error="emailError"
          required
        />
        
        <InputVue 
          v-model="formData.password"
          label="密码"
          type="password"
          placeholder="请输入密码"
          help-text="密码至少8个字符"
          required
        />
        
        <InputVue 
          v-model="formData.phone"
          label="电话号码"
          type="tel"
          placeholder="请输入电话号码"
        />
        
        <InputVue 
          label="只读字段"
          value="这是一个只读字段"
          readonly
        />
        
        <InputVue 
          label="禁用字段"
          value="这是一个禁用字段"
          disabled
        />
        
        <div class="pt-4">
          <ButtonVue variant="filled" @click="handleSubmit">提交表单</ButtonVue>
        </div>
      </div>
    </CardVue>
    
    <!-- 卡片示例 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardVue title="统计卡片">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-500 mb-2">1,234</div>
          <p class="text-neutral-500 dark:text-neutral-400">总用户数</p>
        </div>
      </CardVue>
      
      <CardVue title="收入统计" variant="elevated">
        <div class="text-center">
          <div class="text-3xl font-bold text-success-500 mb-2">¥56,789</div>
          <p class="text-neutral-500 dark:text-neutral-400">本月收入</p>
        </div>
      </CardVue>
      
      <CardVue title="待处理任务">
        <div class="text-center">
          <div class="text-3xl font-bold text-warning-500 mb-2">42</div>
          <p class="text-neutral-500 dark:text-neutral-400">待处理数量</p>
        </div>
        
        <template #footer>
          <div class="flex justify-end">
            <ButtonVue variant="primary" size="sm">查看详情</ButtonVue>
          </div>
        </template>
      </CardVue>
      
      <CardVue class="md:col-span-2 lg:col-span-3">
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                用户反馈
              </h3>
              <p class="text-sm text-neutral-500 dark:text-neutral-400">
                最新的用户反馈信息
              </p>
            </div>
            <ButtonVue variant="secondary" size="sm">查看全部</ButtonVue>
          </div>
        </template>
        
        <div class="space-y-4">
          <div v-for="feedback in feedbackList" :key="feedback.id" 
               class="border-l-4 border-primary-500 pl-4">
            <p class="text-neutral-700 dark:text-neutral-300">{{ feedback.content }}</p>
            <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              — {{ feedback.author }} · {{ feedback.date }}
            </p>
          </div>
        </div>
      </CardVue>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ButtonVue, InputVue, CardVue } from '../src/index'
import { applyTheme, toggleDarkMode, isDarkMode, themes } from '../src/utils/theme'

// 主题状态
const currentTheme = ref('blue')
const isDark = ref(isDarkMode())

// 表单数据
const formData = ref({
  name: '',
  email: '',
  password: '',
  phone: ''
})

// 反馈数据
const feedbackList = ref([
  {
    id: 1,
    content: '这个组件库的设计非常简洁，我很喜欢！',
    author: '张三',
    date: '2024-01-15'
  },
  {
    id: 2,
    content: '深色模式支持很好，界面切换很流畅。',
    author: '李四',
    date: '2024-01-14'
  },
  {
    id: 3,
    content: '同时支持Vue和React真的很方便。',
    author: '王五',
    date: '2024-01-13'
  }
])

// 邮箱验证
const emailError = computed(() => {
  if (!formData.value.email) return ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(formData.value.email) ? '' : '请输入有效的邮箱地址'
})

// 主题切换
const switchTheme = (themeName) => {
  currentTheme.value = themeName
  applyTheme(themeName)
}

// 深色模式切换
const toggleDark = () => {
  isDark.value = !isDark.value
  toggleDarkMode(isDark.value)
}

// 事件处理
const showAlert = () => {
  alert('按钮被点击了！')
}

const handleSubmit = () => {
  if (emailError.value) {
    alert('请先修正表单错误')
    return
  }
  
  console.log('表单提交:', formData.value)
  alert('表单提交成功！')
}
</script> 