import NumberAnimation from '../src/components/NumberAnimation/NumberAnimation.vue'

export default {
  title: 'Components/NumberAnimation (Vue)',
  component: NumberAnimation,
  tags: ['autodocs'],
  argTypes: {
    from: { control: 'number' },
    to: { control: 'number' },
    duration: { control: { type: 'number', min: 500, step: 100 } },
    precision: { control: { type: 'number', min: 0, max: 4, step: 1 } },
    showSeparator: { control: 'boolean' },
    locale: { control: 'text' }
  }
}

export const Basic = {
  args: {
    from: 0,
    to: 12345,
    duration: 3000,
    precision: 0,
    showSeparator: true,
    active: true
  },
  render: (args) => ({
    components: { NumberAnimation },
    setup() {
      return { args }
    },
    template: `<NumberAnimation v-bind="args" style="font-size:32px; font-weight:bold;" />`
  })
}

export const WithPrecision = {
  render: () => ({
    components: { NumberAnimation },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold mb-4">不同精度的数字动画</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="text-center">
            <h4 class="mb-2">整数</h4>
            <NumberAnimation
              :from="0"
              :to="1000"
              :duration="2000"
              :precision="0"
              :show-separator="true"
              style="font-size:24px; font-weight:bold; color:#2196f3;"
            />
          </div>
          <div class="text-center">
            <h4 class="mb-2">一位小数</h4>
            <NumberAnimation
              :from="0"
              :to="98.6"
              :duration="2000"
              :precision="1"
              style="font-size:24px; font-weight:bold; color:#4caf50;"
            />
          </div>
          <div class="text-center">
            <h4 class="mb-2">两位小数</h4>
            <NumberAnimation
              :from="0"
              :to="3.14"
              :duration="2000"
              :precision="2"
              style="font-size:24px; font-weight:bold; color:#ff9800;"
            />
          </div>
          <div class="text-center">
            <h4 class="mb-2">百分比</h4>
            <NumberAnimation
              :from="0"
              :to="85.67"
              :duration="2000"
              :precision="2"
              style="font-size:24px; font-weight:bold; color:#e91e63;"
            />
            <span style="font-size:24px; font-weight:bold; color:#e91e63;">%</span>
          </div>
        </div>
      </div>
    `
  })
}

export const CounterExample = {
  render: () => ({
    components: { NumberAnimation },
    template: `
      <div class="text-center space-y-6">
        <h3 class="text-lg font-semibold mb-4">计数器示例</h3>
        <div class="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
          <h2 class="text-2xl mb-4">网站访问量</h2>
          <NumberAnimation
            :from="0"
            :to="1234567"
            :duration="4000"
            :precision="0"
            :show-separator="true"
            style="font-size:48px; font-weight:bold;"
          />
          <p class="mt-4 text-blue-100">实时统计数据</p>
        </div>
      </div>
    `
  })
}

export const MultipleCounts = {
  render: () => ({
    components: { NumberAnimation },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold mb-4">多项数据展示</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md text-center border">
            <div class="text-blue-500 text-4xl mb-2">👥</div>
            <h4 class="text-gray-600 mb-2">用户总数</h4>
            <NumberAnimation
              :from="0"
              :to="45632"
              :duration="3000"
              :precision="0"
              :show-separator="true"
              style="font-size:28px; font-weight:bold; color:#2196f3;"
            />
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center border">
            <div class="text-green-500 text-4xl mb-2">💰</div>
            <h4 class="text-gray-600 mb-2">总收入</h4>
            <span style="font-size:28px; font-weight:bold; color:#4caf50;">¥</span>
            <NumberAnimation
              :from="0"
              :to="2856734.50"
              :duration="3500"
              :precision="2"
              :show-separator="true"
              style="font-size:28px; font-weight:bold; color:#4caf50;"
            />
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center border">
            <div class="text-orange-500 text-4xl mb-2">📊</div>
            <h4 class="text-gray-600 mb-2">完成率</h4>
            <NumberAnimation
              :from="0"
              :to="92.8"
              :duration="2500"
              :precision="1"
              style="font-size:28px; font-weight:bold; color:#ff9800;"
            />
            <span style="font-size:28px; font-weight:bold; color:#ff9800;">%</span>
          </div>
        </div>
      </div>
    `
  })
} 