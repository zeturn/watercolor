# Modal 和 Dialog 组件合并迁移指南

## 概述

我们已将 Dialog 组件的所有功能合并到 Modal 组件中，以消除功能重复并提供更统一的 API。新的 Modal 组件现在支持所有原有的 Dialog 功能，同时保持向后兼容性。

## 主要变化

### 1. 统一的组件
- ❌ **删除**: `Dialog` 组件
- ✅ **保留并增强**: `Modal` 组件

### 2. 新增功能
- 更完善的无障碍支持 (aria-* 属性)
- 焦点管理和焦点陷阱
- 更多的尺寸选项 (`xs` 新增)
- 更灵活的配置选项

## 迁移步骤

### React 组件迁移

#### 之前 (Dialog)
```jsx
import Dialog from './components/Dialog/Dialog.jsx'

function MyComponent() {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth={true}
      disableEscapeKeyDown={false}
      disableBackdropClick={false}
      showCloseButton={true}
    >
      <DialogTitle>标题</DialogTitle>
      <DialogContent>内容</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleConfirm}>确认</Button>
      </DialogActions>
    </Dialog>
  )
}
```

#### 之后 (Modal)
```jsx
import Modal from './components/Modal/Modal.jsx'

function MyComponent() {
  return (
    <Modal
      open={isOpen}                     // 或者使用 visible={isOpen}
      onClose={handleClose}
      size="md"                         // 或者使用 maxWidth="md"
      fullWidth={true}
      disableEscapeKeyDown={false}
      disableBackdropClick={false}
      showCloseButton={true}
      title="标题"                      // 直接传入标题
      footer={                          // 使用 footer 属性
        <>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm}>确认</Button>
        </>
      }
    >
      内容
    </Modal>
  )
}
```

### Vue 组件迁移

#### 之前 (Dialog)
```vue
<template>
  <Dialog
    :open="isOpen"
    @close="handleClose"
    max-width="md"
    :full-width="true"
    :disable-escape-key-down="false"
    :disable-backdrop-click="false"
    :show-close-button="true"
  >
    <DialogTitle>标题</DialogTitle>
    <DialogContent>内容</DialogContent>
    <DialogActions>
      <Button @click="handleClose">取消</Button>
      <Button @click="handleConfirm">确认</Button>
    </DialogActions>
  </Dialog>
</template>
```

#### 之后 (Modal)
```vue
<template>
  <Modal
    :open="isOpen"                    <!-- 或者使用 :visible="isOpen" -->
    @close="handleClose"
    size="md"                         <!-- 或者使用 max-width="md" -->
    :full-width="true"
    :disable-escape-key-down="false"
    :disable-backdrop-click="false"
    :show-close-button="true"
    title="标题"                     <!-- 直接传入标题 -->
  >
    内容
    
    <template #footer>               <!-- 使用 footer 插槽 -->
      <Button @click="handleClose">取消</Button>
      <Button @click="handleConfirm">确认</Button>
    </template>
  </Modal>
</template>
```

## 属性映射表

| Dialog 属性 | Modal 属性 | 说明 |
|------------|-----------|------|
| `open` | `open` 或 `visible` | 两个属性都支持，保持向后兼容 |
| `maxWidth` | `maxWidth` 或 `size` | 支持两种命名方式 |
| `fullWidth` | `fullWidth` | 保持不变 |
| `fullScreen` | `fullScreen` | 保持不变 |
| `disableEscapeKeyDown` | `disableEscapeKeyDown` | 保持不变 |
| `disableBackdropClick` | `disableBackdropClick` | 保持不变 |
| `showCloseButton` | `showCloseButton` | 保持不变 |
| `scroll` | `scroll` | 保持不变 |
| ❌ | `title` | **新增**: 直接设置标题 |
| ❌ | `header` | **新增**: 自定义头部内容 |
| ❌ | `footer` | **新增**: 自定义底部内容 |
| ❌ | `position` | **新增**: 位置控制 (center/top/bottom) |
| ❌ | `maskClosable` | **新增**: 别名，等同于 !disableBackdropClick |
| ❌ | `closeOnOverlay` | **新增**: 别名，等同于 !disableBackdropClick |

## 新增功能

### 1. 无障碍支持增强
```jsx
<Modal
  title="对话框标题"
  // 自动添加 aria-labelledby, aria-modal, role="dialog" 等属性
>
  内容
</Modal>
```

### 2. 焦点管理
- 自动将焦点设置到模态框
- 创建焦点陷阱，防止焦点逃逸
- 关闭时恢复原有焦点

### 3. 更多尺寸选项
```jsx
<Modal size="xs">超小尺寸</Modal>
<Modal size="sm">小尺寸</Modal>
<Modal size="md">中等尺寸</Modal>
<Modal size="lg">大尺寸</Modal>
<Modal size="xl">超大尺寸</Modal>
```

### 4. 位置控制
```jsx
<Modal position="top">顶部显示</Modal>
<Modal position="center">居中显示</Modal>
<Modal position="bottom">底部显示</Modal>
```

## 删除的文件

以下文件可以安全删除：
- `src/components/Dialog/Dialog.jsx`
- `src/components/Dialog/Dialog.vue`
- `src/components/Dialog/Dialog.css`
- `src/components/Dialog/style.css`
- `src/components/Dialog/utils.js`
- `src/components/Dialog/DialogTitle.vue`
- `src/components/Dialog/DialogContent.vue`
- `src/components/Dialog/DialogActions.vue`

## 注意事项

1. **向后兼容性**: 新的 Modal 组件支持所有原有的 Dialog 属性，可以逐步迁移
2. **样式继承**: 合并后的样式保持了两个组件的最佳特性
3. **性能优化**: 消除了重复代码，减小了包体积
4. **类型支持**: 如果使用 TypeScript，请更新相关的类型导入

## 测试建议

迁移后，建议进行以下测试：
1. 确保所有模态框/对话框正常显示和关闭
2. 验证键盘导航（Tab 键和 ESC 键）
3. 测试屏幕阅读器兼容性
4. 检查不同尺寸和位置的显示效果
5. 验证滚动锁定功能

## 获取帮助

如果在迁移过程中遇到问题，请：
1. 查看组件的 stories 文件获取使用示例
2. 检查测试文件了解预期行为
3. 参考本指南的映射表确认正确的属性名称 