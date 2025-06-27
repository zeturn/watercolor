import ButtonVue from '../src/components/Button/Button.vue'
import InputVue from '../src/components/Input/Input.vue'
import CardVue from '../src/components/Card/Card.vue'
import { applyTheme, applyCSSTheme, toggleDarkMode, themes, applyFontTheme, fontThemes, setFonts } from '../src/utils/theme'
import { ref, computed, onMounted, nextTick } from 'vue'

export default {
  title: 'Design System/主题系统',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export const 主题切换器 = {
  render: () => ({
    components: { ButtonVue, CardVue },
    setup() {
      const currentTheme = ref('default')
      const isDark = ref(false)
      
      const switchTheme = async (themeName) => {
        currentTheme.value = themeName
        applyTheme(themeName)
        
        // 触发自定义事件通知其他组件主题已变化
        await nextTick()
        window.dispatchEvent(new CustomEvent('themechange', { detail: themeName }))
      }
      
      const toggleDark = () => {
        isDark.value = !isDark.value
        toggleDarkMode(isDark.value)
      }
      
      const themeList = Object.keys(themes)
      
      const themeInfo = {
        default: { name: '默认主题', desc: '基于 theme.config.json 文件的主题系统' }
      }
      
      return { 
        currentTheme, 
        switchTheme, 
        themeList, 
        themeInfo,
        isDark,
        toggleDark
      }
    },
    template: `
      <div class="p-8 bg-neutral-0 dark:bg-neutral-900 min-h-screen transition-colors duration-300">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">水彩设计系统 - 主题切换器</h2>
              <p class="text-neutral-600 dark:text-neutral-400">5个精心设计的主题配色，支持明暗模式切换</p>
            </div>
            <ButtonVue @click="toggleDark" variant="secondary">
              {{ isDark ? '☀️ 浅色模式' : '🌙 深色模式' }}
            </ButtonVue>
          </div>
          
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">选择主题</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <CardVue 
                v-for="theme in themeList" 
                :key="theme"
                :class="[
                  'cursor-pointer transition-all duration-200 hover:scale-105',
                  currentTheme === theme ? 'ring-2 ring-primary-500 shadow-lg' : 'hover:shadow-md'
                ]"
                @click="switchTheme(theme)"
              >
                <div class="text-center space-y-3">
                  <div class="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    {{ themeInfo[theme].name }}
                  </div>
                  <div class="text-sm text-neutral-600 dark:text-neutral-400">
                    {{ themeInfo[theme].desc }}
                  </div>
                  <div v-if="currentTheme === theme" class="text-primary-500 font-medium">
                    ✓ 当前主题
                  </div>
                </div>
              </CardVue>
            </div>
          </div>
          
          <!-- 主题预览卡片 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 色彩展示 -->
            <CardVue title="主题色彩">
              <div class="space-y-4">
                <!-- 主色调 -->
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">主色调 Primary</div>
                  <div class="flex gap-1">
                    <div class="w-8 h-8 bg-primary-100 rounded border"></div>
                    <div class="w-8 h-8 bg-primary-300 rounded border"></div>
                    <div class="w-8 h-8 bg-primary-500 rounded border"></div>
                    <div class="w-8 h-8 bg-primary-700 rounded border"></div>
                    <div class="w-8 h-8 bg-primary-900 rounded border"></div>
                  </div>
                </div>
                
                <!-- 次色调 -->
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">次色调 Secondary</div>
                  <div class="flex gap-1">
                    <div class="w-8 h-8 bg-secondary-100 rounded border"></div>
                    <div class="w-8 h-8 bg-secondary-300 rounded border"></div>
                    <div class="w-8 h-8 bg-secondary-500 rounded border"></div>
                    <div class="w-8 h-8 bg-secondary-700 rounded border"></div>
                    <div class="w-8 h-8 bg-secondary-900 rounded border"></div>
                  </div>
                </div>
                
                <!-- 语义色彩 -->
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">语义色彩</div>
                  <div class="grid grid-cols-4 gap-2">
                    <div class="text-center">
                      <div class="w-6 h-6 bg-success-500 rounded mx-auto mb-1"></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">成功</div>
                    </div>
                    <div class="text-center">
                      <div class="w-6 h-6 bg-info-500 rounded mx-auto mb-1"></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">信息</div>
                    </div>
                    <div class="text-center">
                      <div class="w-6 h-6 bg-warning-500 rounded mx-auto mb-1"></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">警告</div>
                    </div>
                    <div class="text-center">
                      <div class="w-6 h-6 bg-error-500 rounded mx-auto mb-1"></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">错误</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardVue>
            
            <!-- 组件预览 -->
            <CardVue title="组件预览">
              <div class="space-y-4">
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">按钮组件</div>
                  <div class="flex flex-wrap gap-2">
                    <ButtonVue variant="primary" size="sm">主要按钮</ButtonVue>
                    <ButtonVue variant="secondary" size="sm">次要按钮</ButtonVue>
                    <ButtonVue variant="outline" size="sm">线框按钮</ButtonVue>
                  </div>
                </div>
                
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">输入组件</div>
                  <InputVue placeholder="输入示例文本..." class="mb-2" />
                </div>
                
                <div>
                  <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">状态指示</div>
                  <div class="space-y-2">
                    <div class="p-2 bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 rounded text-sm">
                      ✓ 操作成功完成
                    </div>
                    <div class="p-2 bg-warning-100 dark:bg-warning-900 text-warning-800 dark:text-warning-200 rounded text-sm">
                      ⚠ 请注意此操作
                    </div>
                    <div class="p-2 bg-error-100 dark:bg-error-900 text-error-800 dark:text-error-200 rounded text-sm">
                      ✗ 操作失败
                    </div>
                  </div>
                </div>
              </div>
            </CardVue>
          </div>
        </div>
      </div>
    `,
  }),
}

export const 完整配色方案 = {
  render: () => ({
    setup() {
      const currentTheme = ref('default')
      
      // 动态读取CSS变量的函数
      const getCSSVariable = (varName) => {
        if (typeof window !== 'undefined') {
          return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
        }
        return ''
      }
      
      // 生成色彩数组的函数
      const generateColorArray = (prefix, shades) => {
        return shades.map(shade => ({
          shade,
          color: getCSSVariable(`--wc-${prefix}-${shade}`) || '#000000',
          variable: `--wc-${prefix}-${shade}`
        }))
      }
      
      // 响应式色彩数组
      const primaryColors = ref([])
      const secondaryColors = ref([])
      const successColors = ref([])
      const infoColors = ref([])
      const warningColors = ref([])
      const errorColors = ref([])
      const neutralColors = ref([])
      const extendedColors = ref({})
      
      // 更新颜色的函数
      const updateColors = () => {
        primaryColors.value = generateColorArray('primary', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])
        secondaryColors.value = generateColorArray('secondary', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])
        successColors.value = generateColorArray('success', [100, 200, 300, 400, 500, 600, 700, 800, 900])
        infoColors.value = generateColorArray('info', [100, 200, 300, 400, 500, 600, 700, 800, 900])
        warningColors.value = generateColorArray('warning', [100, 200, 300, 400, 500, 600, 700, 800, 900])
        errorColors.value = generateColorArray('error', [100, 200, 300, 400, 500, 600, 700, 800, 900])
        neutralColors.value = generateColorArray('neutral', [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950])
        
        // 扩展调色板
        extendedColors.value = {
          purple: generateColorArray('purple', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
          pink: generateColorArray('pink', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
          teal: generateColorArray('teal', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
          indigo: generateColorArray('indigo', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])
        }
      }
      
      const switchTheme = async (themeName) => {
        currentTheme.value = themeName
        applyTheme(themeName)
        
        await nextTick()
        setTimeout(updateColors, 100)
        window.dispatchEvent(new CustomEvent('themechange', { detail: themeName }))
      }
      
      const themeList = Object.keys(themes)
      
      // 组件挂载时更新颜色
      onMounted(() => {
        setTimeout(updateColors, 100)
        
        // 监听主题变化事件
        const handleThemeChange = () => {
          setTimeout(updateColors, 100)
        }
        
        window.addEventListener('themechange', handleThemeChange)
        
        return () => {
          window.removeEventListener('themechange', handleThemeChange)
        }
      })
      
      return {
        currentTheme,
        switchTheme,
        themeList,
        primaryColors,
        secondaryColors,
        successColors,
        infoColors,
        warningColors,
        errorColors,
        neutralColors,
        extendedColors
      }
    },
    template: `
      <div class="p-8 bg-neutral-0 dark:bg-neutral-900 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">完整配色方案展示</h2>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6">展示当前主题下的所有颜色变量和值</p>
            
            <!-- 主题切换器 -->
            <div class="flex flex-wrap gap-2 mb-6">
              <button 
                v-for="theme in themeList" 
                :key="theme"
                @click="switchTheme(theme)"
                :class="[
                  'px-4 py-2 rounded-lg font-medium transition-all',
                  currentTheme === theme 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                ]"
              >
                {{ theme === 'default' ? '默认' : theme.charAt(0).toUpperCase() + theme.slice(1) }}
              </button>
            </div>
          </div>
          
          <!-- 核心色彩系统 -->
          <div class="space-y-8">
            <!-- 主色调 -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">主色调 Primary</h3>
              <div class="grid grid-cols-5 md:grid-cols-10 gap-3">
                <div v-for="item in primaryColors" :key="item.shade" class="text-center">
                  <div 
                    class="w-full h-16 rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700 shadow-sm" 
                    :style="{ backgroundColor: item.color }"
                  ></div>
                  <div class="text-xs font-medium text-neutral-700 dark:text-neutral-300">{{ item.shade }}</div>
                  <div class="text-xs font-mono text-neutral-500 dark:text-neutral-400 break-all">{{ item.color }}</div>
                  <div class="text-xs font-mono text-neutral-400 dark:text-neutral-500 break-all">{{ item.variable }}</div>
                </div>
              </div>
            </div>
            
            <!-- 次色调 -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">次色调 Secondary</h3>
              <div class="grid grid-cols-5 md:grid-cols-10 gap-3">
                <div v-for="item in secondaryColors" :key="item.shade" class="text-center">
                  <div 
                    class="w-full h-16 rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700 shadow-sm" 
                    :style="{ backgroundColor: item.color }"
                  ></div>
                  <div class="text-xs font-medium text-neutral-700 dark:text-neutral-300">{{ item.shade }}</div>
                  <div class="text-xs font-mono text-neutral-500 dark:text-neutral-400 break-all">{{ item.color }}</div>
                  <div class="text-xs font-mono text-neutral-400 dark:text-neutral-500 break-all">{{ item.variable }}</div>
                </div>
              </div>
            </div>
            
            <!-- 语义色彩系统 -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">语义色彩系统</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- 成功色 -->
                <div>
                  <h4 class="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">成功色 Success</h4>
                  <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
                    <div v-for="item in successColors" :key="item.shade" class="text-center">
                      <div 
                        class="w-full h-12 rounded mb-1 border border-neutral-200 dark:border-neutral-700" 
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">{{ item.shade }}</div>
                      <div class="text-xs font-mono text-neutral-500 dark:text-neutral-500">{{ item.color }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- 信息色 -->
                <div>
                  <h4 class="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">信息色 Info</h4>
                  <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
                    <div v-for="item in infoColors" :key="item.shade" class="text-center">
                      <div 
                        class="w-full h-12 rounded mb-1 border border-neutral-200 dark:border-neutral-700" 
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">{{ item.shade }}</div>
                      <div class="text-xs font-mono text-neutral-500 dark:text-neutral-500">{{ item.color }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- 警告色 -->
                <div>
                  <h4 class="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">警告色 Warning</h4>
                  <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
                    <div v-for="item in warningColors" :key="item.shade" class="text-center">
                      <div 
                        class="w-full h-12 rounded mb-1 border border-neutral-200 dark:border-neutral-700" 
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">{{ item.shade }}</div>
                      <div class="text-xs font-mono text-neutral-500 dark:text-neutral-500">{{ item.color }}</div>
                    </div>
                  </div>
                </div>
                
                <!-- 错误色 -->
                <div>
                  <h4 class="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">错误色 Error</h4>
                  <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
                    <div v-for="item in errorColors" :key="item.shade" class="text-center">
                      <div 
                        class="w-full h-12 rounded mb-1 border border-neutral-200 dark:border-neutral-700" 
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">{{ item.shade }}</div>
                      <div class="text-xs font-mono text-neutral-500 dark:text-neutral-500">{{ item.color }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 中性色调 -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">中性色调 Neutral</h3>
              <div class="grid grid-cols-6 md:grid-cols-12 gap-2">
                <div v-for="item in neutralColors" :key="item.shade" class="text-center">
                  <div 
                    class="w-full h-16 rounded-lg mb-2 border border-neutral-200 dark:border-neutral-700 shadow-sm" 
                    :style="{ backgroundColor: item.color }"
                  ></div>
                  <div class="text-xs font-medium text-neutral-700 dark:text-neutral-300">{{ item.shade }}</div>
                  <div class="text-xs font-mono text-neutral-500 dark:text-neutral-400 break-all">{{ item.color }}</div>
                </div>
              </div>
            </div>
            
            <!-- 扩展调色板 -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">扩展调色板</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(colors, name) in extendedColors" :key="name">
                  <h4 class="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3 capitalize">{{ name }}</h4>
                  <div class="grid grid-cols-5 gap-2">
                    <div v-for="item in colors" :key="item.shade" class="text-center">
                      <div 
                        class="w-full h-12 rounded mb-1 border border-neutral-200 dark:border-neutral-700" 
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="text-xs text-neutral-600 dark:text-neutral-400">{{ item.shade }}</div>
                      <div class="text-xs font-mono text-neutral-500 dark:text-neutral-500">{{ item.color }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const 字体主题 = {
  render: () => ({
    components: { ButtonVue, CardVue },
    data() {
      return {
        currentFont: 'system',
        fontThemeNames: Object.keys(fontThemes),
        customFont: {
          chinese: '',
          english: '',
          fallback: ''
        }
      }
    },
    methods: {
      switchFont(fontName) {
        this.currentFont = fontName
        try {
          applyFontTheme(fontName)
        } catch (e) {
          console.warn('Font theme switch failed:', e)
        }
      },
      applyCustomFont() {
        try {
          if (this.customFont.chinese || this.customFont.english) {
            setFonts(this.customFont)
            this.currentFont = 'custom'
          }
        } catch (e) {
          console.warn('Custom font apply failed:', e)
        }
      }
    },
    template: `
      <div class="p-8 bg-neutral-0 dark:bg-neutral-900 min-h-screen">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">字体主题系统</h2>
          
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">预设字体主题</h3>
            <div class="flex flex-wrap gap-3 mb-6">
              <ButtonVue 
                v-for="fontTheme in fontThemeNames" 
                :key="fontTheme"
                :variant="currentFont === fontTheme ? 'primary' : 'secondary'"
                @click="switchFont(fontTheme)"
                class="capitalize"
              >
                {{ fontTheme }}
              </ButtonVue>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">自定义字体</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">中文字体</label>
                <input 
                  v-model="customFont.chinese"
                  type="text" 
                  placeholder="PingFang SC"
                  class="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">英文字体</label>
                <input 
                  v-model="customFont.english"
                  type="text" 
                  placeholder="SF Pro Display"
                  class="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">后备字体</label>
                <input 
                  v-model="customFont.fallback"
                  type="text" 
                  placeholder="sans-serif"
                  class="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
                />
              </div>
            </div>
            <ButtonVue @click="applyCustomFont" variant="primary">
              应用自定义字体
            </ButtonVue>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardVue title="中文字体展示">
              <div class="space-y-4">
                <h4 class="text-2xl font-bold">中文标题示例</h4>
                <p class="text-base leading-relaxed">
                  这是一段中文正文内容，用于展示当前字体的显示效果。中文字体的选择对于用户体验非常重要，
                  好的字体能够提升阅读体验，让用户感到舒适。水彩设计系统提供了多种字体主题供您选择。
                </p>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">
                  当前字体主题: {{ currentFont }}
                </div>
              </div>
            </CardVue>
            
            <CardVue title="English Font Display">
              <div class="space-y-4">
                <h4 class="text-2xl font-bold">English Title Example</h4>
                <p class="text-base leading-relaxed">
                  This is an English paragraph to demonstrate the current font display effect. 
                  Font selection plays a crucial role in user experience design. A well-chosen 
                  font can enhance readability and create a pleasant reading experience.
                </p>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">
                  Current font theme: {{ currentFont }}
                </div>
              </div>
            </CardVue>
          </div>
        </div>
      </div>
    `,
  }),
} 