import ContainerVue from '../src/components/Container/Container.vue'
import BoxVue from '../src/components/Box/Box.vue'
import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import TextFieldVue from '../src/components/TextField/TextField.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import CheckboxVue from '../src/components/Checkbox/Checkbox.vue'
import AlertVue from '../src/components/Alert/Alert.vue'
import ProgressVue from '../src/components/Progress/Progress.vue'
import { ref, computed } from 'vue'

export default {
  title: '页面示例/注册页面',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

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
        subscribeNewsletter: true,
      })
      
      const showAlert = ref(false)
      const alertMessage = ref('')
      const alertType = ref('error')
      const isLoading = ref(false)
      
      const passwordStrength = computed(() => {
        const password = formData.value.password
        if (!password) return { score: 0, text: '', color: 'error' }
        
        let score = 0
        if (password.length >= 8) score += 25
        if (/[A-Z]/.test(password)) score += 25
        if (/[a-z]/.test(password)) score += 25
        if (/[0-9]/.test(password)) score += 12.5
        if (/[^A-Za-z0-9]/.test(password)) score += 12.5
        
        if (score < 25) return { score, text: '弱', color: 'error' }
        if (score < 50) return { score, text: '一般', color: 'warning' }
        if (score < 75) return { score, text: '良好', color: 'primary' }
        return { score, text: '强', color: 'success' }
      })
      
      const handleRegister = () => {
        // 表单验证
        if (!formData.value.firstName || !formData.value.lastName) {
          showAlertMessage('请填写姓名', 'error')
          return
        }
        
        if (!formData.value.email) {
          showAlertMessage('请填写邮箱地址', 'error')
          return
        }
        
        if (!formData.value.password) {
          showAlertMessage('请设置密码', 'error')
          return
        }
        
        if (formData.value.password !== formData.value.confirmPassword) {
          showAlertMessage('两次密码输入不一致', 'error')
          return
        }
        
        if (!formData.value.agreeToTerms) {
          showAlertMessage('请同意服务条款和隐私政策', 'error')
          return
        }
        
        if (passwordStrength.value.score < 50) {
          showAlertMessage('密码强度太弱，请设置更复杂的密码', 'warning')
          return
        }
        
        isLoading.value = true
        // 模拟注册请求
        setTimeout(() => {
          isLoading.value = false
          showAlertMessage('注册成功！欢迎加入我们！', 'success')
        }, 2000)
      }
      
      const showAlertMessage = (message, type) => {
        alertMessage.value = message
        alertType.value = type
        showAlert.value = true
        setTimeout(() => {
          showAlert.value = false
        }, 4000)
      }
      
      const handleSocialRegister = (platform) => {
        alert(`使用${platform}注册`)
      }
      
      return {
        formData,
        showAlert,
        alertMessage,
        alertType,
        isLoading,
        passwordStrength,
        handleRegister,
        handleSocialRegister,
      }
    },
    template: `
      <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
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
              <!-- 社交注册按钮 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <ButtonVue 
                  variant="secondary" 
                  size="lg" 
                  class="flex items-center justify-center space-x-2"
                  @click="handleSocialRegister('Google')"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google</span>
                </ButtonVue>
                
                <ButtonVue 
                  variant="secondary" 
                  size="lg" 
                  class="flex items-center justify-center space-x-2"
                  @click="handleSocialRegister('GitHub')"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </ButtonVue>
              </div>
              
              <!-- 分割线 -->
              <div class="relative mb-6">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">或者手动注册</span>
                </div>
              </div>
              
              <!-- 错误/成功提示 -->
              <AlertVue 
                v-if="showAlert"
                :severity="alertType" 
                class="mb-6"
                @close="showAlert = false"
              >
                {{ alertMessage }}
              </AlertVue>
              
              <!-- 注册表单 -->
              <form @submit.prevent="handleRegister" class="space-y-6">
                <!-- 姓名 -->
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
                
                <!-- 邮箱 -->
                <TextFieldVue
                  v-model="formData.email"
                  label="邮箱地址"
                  type="email"
                  placeholder="your@email.com"
                  variant="outlined"
                  required
                  class="w-full"
                />
                
                <!-- 密码 -->
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
                  
                  <!-- 密码强度指示器 -->
                  <div v-if="formData.password" class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span class="text-neutral-600 dark:text-neutral-400">密码强度</span>
                      <span :class="{
                        'text-red-600': passwordStrength.color === 'error',
                        'text-yellow-600': passwordStrength.color === 'warning',
                        'text-blue-600': passwordStrength.color === 'primary',
                        'text-green-600': passwordStrength.color === 'success'
                      }">
                        {{ passwordStrength.text }}
                      </span>
                    </div>
                    <ProgressVue 
                      :value="passwordStrength.score" 
                      :color="passwordStrength.color"
                      size="sm"
                    />
                  </div>
                </div>
                
                <!-- 确认密码 -->
                <TextFieldVue
                  v-model="formData.confirmPassword"
                  label="确认密码"
                  type="password"
                  placeholder="再次输入密码"
                  variant="outlined"
                  required
                  class="w-full"
                />
                
                <!-- 协议同意 -->
                <div class="space-y-3">
                  <CheckboxVue
                    v-model="formData.subscribeNewsletter"
                    label="接收产品更新和营销邮件"
                    color="primary"
                  />
                </div>

                
                <!-- 提交按钮 -->
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
              
              <!-- 登录链接 -->
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
          
          <!-- 底部信息 -->
          <BoxVue class="text-center mt-8">
            <TypographyVue variant="caption" class="text-neutral-500 dark:text-neutral-400">
              注册即表示您同意我们的服务条款和隐私政策
            </TypographyVue>
          </BoxVue>
        </ContainerVue>
      </div>
    `,
  }),
} 