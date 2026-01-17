# 快速上手

安装完成后，您可以像使用普通组件一样在项目中使用 Watercolor UI 组件。

## Vue 3 使用示例

这里以 `Button` 和 `Card` 组件为例。

```vue
<template>
  <div class="app-container">
    <Card title="欢迎" subTitle="Watercolor UI">
      <p>这是一个基于水彩风格的 Vue 3 组件库。</p>
      
      <div class="actions">
        <!-- 基础按钮 -->
        <Button variant="primary" @click="handleClick">点击我</Button>
        
        <!-- 轮廓按钮 -->
        <Button variant="outline">取消</Button>
      </div>
    </Card>

    <!-- 使用图标 -->
    <Icon name="heart" library="lucide" color="red" />
  </div>
</template>

<script setup>
import { Button, Card, Icon } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css' // 确保已引入样式

const handleClick = () => {
  console.log('按钮被点击了')
}
</script>

<style>
.actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}
</style>
```

## React 使用示例

这里以 `Button` 和 `TextField` 组件为例。

```tsx
import React, { useState } from 'react'
import { Button, Card, TextField, Icon } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css' // 确保已引入样式

export default function App() {
  const [value, setValue] = useState('')

  return (
    <div className="p-4">
      <Card title="登录" className="max-w-md mx-auto">
        <div className="space-y-4">
          <TextField 
            label="用户名" 
            placeholder="请输入用户名"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          
          <div className="flex gap-4 mt-4">
            <Button variant="primary" onClick={() => alert('登录中...')}>
              <Icon name="log-in" library="lucide" className="mr-2" />
              登录
            </Button>
            <Button variant="text">忘记密码？</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
```

## 注意事项

### 1.图标库 (Icon Library)

Watercolor UI 的 `Icon` 组件支持多个图标库（如 Lucide, Heroicons, Phosphor 等）。
在使用时，请确保您了解如何通过 `library` 属性选择图标集。默认推荐使用 `lucide`。

### 2. 深色模式 (Dark Mode)

组件库内置了对深色模式的支持。如果在您的应用中启用了深色类名（通常是 `dark` 类加在 `html` 或 `body` 标签上），Watercolor 组件会自动适配深色主题。

### 3. Tree Shaking

为了减小打包体积，请尽量使用按需导入的方式（如上例所示），而不是导入整个对象。我们的包构建格式支持现代构建工具（Vite, Webpack 5+）自动进行 Tree Shaking。

## 想要了解更多？

请查看左侧菜单中的 **组件** 列表，获取每个组件的详细 API 文档和示例。
