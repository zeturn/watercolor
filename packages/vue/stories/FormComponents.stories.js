import FormControl from '../src/components/Form/FormControl.vue'
import FormControlLabel from '../src/components/Form/FormControlLabel.vue'
import FormGroup from '../src/components/Form/FormGroup.vue'
import FormHelperText from '../src/components/Form/FormHelperText.vue'
import Checkbox from '../src/components/Checkbox/Checkbox.vue'
import Radio from '../src/components/Radio/Radio.vue'
import Switch from '../src/components/Switch/Switch.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Form',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的表单组件系统，包含FormControl、FormControlLabel、FormGroup和FormHelperText。使用现代化纯CSS设计，减少阴影效果。'
      }
    }
  },
  tags: ['autodocs']
}

export const FormControlExample = {
  render: () => ({
    components: { FormControl, FormControlLabel, FormHelperText, Checkbox, Radio, Switch },
    data() {
      return {
        checkboxValue: false,
        radioValue: 'option1',
        switchValue: false
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">FormControl with Checkbox</h3>
          <FormControl :error="false" margin="normal">
            <FormControlLabel 
              v-model="checkboxValue"
              label="我同意服务条款"
              :required="true"
            >
              <Checkbox v-model="checkboxValue" aria-label="我同意服务条款" />
            </FormControlLabel>
            <FormHelperText>请阅读并同意我们的服务条款</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">FormControl with Radio (Error State)</h3>
          <FormControl :error="true" margin="normal">
            <FormControlLabel 
              v-model="radioValue"
              value="option1"
              label="选项 1"
            >
              <Radio v-model="radioValue" value="option1" aria-label="选项 1" />
            </FormControlLabel>
            <FormControlLabel 
              v-model="radioValue"
              value="option2"
              label="选项 2"
            >
              <Radio v-model="radioValue" value="option2" aria-label="选项 2" />
            </FormControlLabel>
            <FormHelperText error>请选择一个有效选项</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">FormControl with Switch</h3>
          <FormControl margin="normal">
            <FormControlLabel 
              v-model="switchValue"
              label="启用通知"
              labelPlacement="start"
            >
              <Switch v-model="switchValue" />
            </FormControlLabel>
            <FormHelperText>开启后将接收系统通知</FormHelperText>
          </FormControl>
        </div>
      </div>
    `
  })
}

export const FormGroupExample = {
  render: () => ({
    components: { FormControl, FormControlLabel, FormGroup, FormHelperText, Checkbox, Radio },
    data() {
      return {
        interests: [],
        gender: '',
        preferences: []
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">垂直FormGroup - 兴趣爱好</h3>
          <FormControl margin="normal">
            <FormGroup>
              <FormControlLabel 
                label="阅读"
              >
                <Checkbox v-model="interests" value="reading" />
              </FormControlLabel>
              <FormControlLabel 
                label="运动"
              >
                <Checkbox v-model="interests" value="sports" />
              </FormControlLabel>
              <FormControlLabel 
                label="音乐"
              >
                <Checkbox v-model="interests" value="music" />
              </FormControlLabel>
            </FormGroup>
            <FormHelperText>选择您的兴趣爱好</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">水平FormGroup - 性别</h3>
          <FormControl margin="normal">
            <FormGroup row>
              <FormControlLabel 
                v-model="gender"
                value="male"
                label="男性"
              >
                <Radio v-model="gender" value="male" />
              </FormControlLabel>
              <FormControlLabel 
                v-model="gender"
                value="female"
                label="女性"
              >
                <Radio v-model="gender" value="female" />
              </FormControlLabel>
              <FormControlLabel 
                v-model="gender"
                value="other"
                label="其他"
              >
                <Radio v-model="gender" value="other" />
              </FormControlLabel>
            </FormGroup>
            <FormHelperText>请选择您的性别</FormHelperText>
          </FormControl>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">紧凑间距FormGroup</h3>
          <FormControl margin="normal">
            <FormGroup spacing="compact">
              <FormControlLabel 
                label="邮件通知"
              >
                <Checkbox v-model="preferences" value="email" />
              </FormControlLabel>
              <FormControlLabel 
                label="短信通知"
              >
                <Checkbox v-model="preferences" value="sms" />
              </FormControlLabel>
            </FormGroup>
            <FormHelperText>选择您的通知偏好</FormHelperText>
          </FormControl>
        </div>
      </div>
    `
  })
}

export const FormHelperTextStates = {
  render: () => ({
    components: { FormControl, FormControlLabel, FormHelperText, Checkbox },
    data() {
      return {
        normalValue: false,
        errorValue: false,
        disabledValue: false,
        focusedValue: false
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">不同状态的FormHelperText</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-medium mb-2">正常状态</h4>
              <FormControl margin="normal">
                <FormControlLabel v-model="normalValue" label="普通选项">
                  <Checkbox v-model="normalValue" />
                </FormControlLabel>
                <FormHelperText>这是普通的帮助文本</FormHelperText>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-2">错误状态</h4>
              <FormControl :error="true" margin="normal">
                <FormControlLabel v-model="errorValue" label="错误选项">
                  <Checkbox v-model="errorValue" />
                </FormControlLabel>
                <FormHelperText error>这是错误状态的帮助文本</FormHelperText>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-2">禁用状态</h4>
              <FormControl :disabled="true" margin="normal">
                <FormControlLabel v-model="disabledValue" label="禁用选项" :disabled="true">
                  <Checkbox v-model="disabledValue" :disabled="true" />
                </FormControlLabel>
                <FormHelperText disabled>这是禁用状态的帮助文本</FormHelperText>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-2">聚焦状态</h4>
              <FormControl margin="normal">
                <FormControlLabel v-model="focusedValue" label="聚焦选项">
                  <Checkbox v-model="focusedValue" />
                </FormControlLabel>
                <FormHelperText focused>这是聚焦状态的帮助文本</FormHelperText>
              </FormControl>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">不同尺寸的FormHelperText</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-medium mb-2">小尺寸</h4>
              <FormHelperText size="sm">这是小尺寸的帮助文本</FormHelperText>
            </div>

            <div>
              <h4 class="font-medium mb-2">中等尺寸（默认）</h4>
              <FormHelperText size="md">这是中等尺寸的帮助文本</FormHelperText>
            </div>

            <div>
              <h4 class="font-medium mb-2">大尺寸</h4>
              <FormHelperText size="lg">这是大尺寸的帮助文本</FormHelperText>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const LabelPlacementDemo = {
  render: () => ({
    components: { FormControl, FormControlLabel, FormGroup, FormHelperText, Checkbox, Switch },
    data() {
      return {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        switch1: false
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">标签位置演示</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium mb-3">标签在右侧（默认）</h4>
              <FormControl margin="normal">
                <FormControlLabel 
                  v-model="checkbox1" 
                  label="标签在右侧"
                  labelPlacement="end"
                >
                  <Checkbox v-model="checkbox1" />
                </FormControlLabel>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-3">标签在左侧</h4>
              <FormControl margin="normal">
                <FormControlLabel 
                  v-model="checkbox2" 
                  label="标签在左侧"
                  labelPlacement="start"
                >
                  <Checkbox v-model="checkbox2" />
                </FormControlLabel>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-3">标签在上方</h4>
              <FormControl margin="normal">
                <FormControlLabel 
                  v-model="checkbox3" 
                  label="标签在上方"
                  labelPlacement="top"
                >
                  <Checkbox v-model="checkbox3" />
                </FormControlLabel>
              </FormControl>
            </div>

            <div>
              <h4 class="font-medium mb-3">标签在下方</h4>
              <FormControl margin="normal">
                <FormControlLabel 
                  v-model="checkbox4" 
                  label="标签在下方"
                  labelPlacement="bottom"
                >
                  <Checkbox v-model="checkbox4" />
                </FormControlLabel>
              </FormControl>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">开关组件标签位置</h3>
          <FormControl margin="normal">
            <FormControlLabel 
              v-model="switch1" 
              label="启用功能"
              labelPlacement="start"
            >
              <Switch v-model="switch1" />
            </FormControlLabel>
            <FormHelperText>这是一个常见的开关布局</FormHelperText>
          </FormControl>
        </div>
      </div>
    `
  })
}

export const ComprehensiveFormExample = {
  render: () => ({
    components: { FormControl, FormControlLabel, FormGroup, FormHelperText, Checkbox, Radio, Switch },
    data() {
      return {
        formData: {
          agree: false,
          gender: '',
          notifications: {
            email: true,
            sms: false,
            push: true
          },
          theme: false
        },
        errors: {
          gender: false
        }
      }
    },
    methods: {
      validateForm() {
        this.errors.gender = !this.formData.gender
      },
      toggleNotification(type) {
        this.formData.notifications[type] = !this.formData.notifications[type]
      }
    },
    template: `
      <div class="max-w-2xl mx-auto space-y-6">
        <h3 class="text-xl font-bold mb-6">用户偏好设置表单</h3>
        
        <!-- 协议同意 -->
        <FormControl margin="normal" :error="!formData.agree">
          <FormControlLabel 
            v-model="formData.agree"
            label="我已阅读并同意用户协议"
            :required="true"
          >
            <Checkbox v-model="formData.agree" />
          </FormControlLabel>
          <FormHelperText v-if="!formData.agree" error>
            必须同意用户协议才能继续
          </FormHelperText>
        </FormControl>

        <!-- 性别选择 -->
        <FormControl margin="normal" :error="errors.gender">
          <h4 class="font-medium mb-2">性别</h4>
          <FormGroup row>
            <FormControlLabel 
              v-model="formData.gender"
              value="male"
              label="男性"
            >
              <Radio v-model="formData.gender" value="male" @change="validateForm" />
            </FormControlLabel>
            <FormControlLabel 
              v-model="formData.gender"
              value="female"
              label="女性"
            >
              <Radio v-model="formData.gender" value="female" @change="validateForm" />
            </FormControlLabel>
            <FormControlLabel 
              v-model="formData.gender"
              value="other"
              label="其他"
            >
              <Radio v-model="formData.gender" value="other" @change="validateForm" />
            </FormControlLabel>
          </FormGroup>
          <FormHelperText v-if="errors.gender" error>
            请选择您的性别
          </FormHelperText>
        </FormControl>

        <!-- 通知设置 -->
        <FormControl margin="normal">
          <h4 class="font-medium mb-2">通知偏好</h4>
          <FormGroup spacing="comfortable">
            <FormControlLabel 
              label="邮件通知"
              labelPlacement="start"
            >
              <Switch 
                :modelValue="formData.notifications.email"
                @update:modelValue="toggleNotification('email')"
              />
            </FormControlLabel>
            <FormControlLabel 
              label="短信通知"
              labelPlacement="start"
            >
              <Switch 
                :modelValue="formData.notifications.sms"
                @update:modelValue="toggleNotification('sms')"
              />
            </FormControlLabel>
            <FormControlLabel 
              label="推送通知"
              labelPlacement="start"
            >
              <Switch 
                :modelValue="formData.notifications.push"
                @update:modelValue="toggleNotification('push')"
              />
            </FormControlLabel>
          </FormGroup>
          <FormHelperText>
            选择您希望接收的通知类型
          </FormHelperText>
        </FormControl>

        <!-- 主题设置 -->
        <FormControl margin="normal">
          <FormControlLabel 
            v-model="formData.theme"
            label="启用暗黑主题"
            labelPlacement="start"
          >
            <Switch v-model="formData.theme" />
          </FormControlLabel>
          <FormHelperText>
            开启后界面将使用暗黑主题
          </FormHelperText>
        </FormControl>

        <!-- 表单数据预览 -->
        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 class="font-medium mb-2">表单数据预览：</h4>
          <pre class="text-sm">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>
    `
  })
} 
