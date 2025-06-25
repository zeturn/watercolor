# Vue Storybook 渲染出 "[object Object]" 的原因与解决方案

> 适用版本：Storybook 8.x（Vue3-Vite 构建器）

## 1. 问题现象

启动 Vue 端 Storybook 后，Canvas 中的组件没有正常渲染，界面仅显示 **`[object Object]`**。浏览器控制台没有明显的报错，但组件内容缺失。

## 2. 问题根因

Storybook 在渲染每个 Story 时，会把 **Story 函数**（通常记作 `story` 或 `storyFn`）传入装饰器。它并不是组件本身，而是一个 **返回组件** 的函数。

```js
// story 的真实类型 (简化)
(type StoryFn = () => ComponentOptions)
```

在我们原先的装饰器里写了：

```js
return {
  setup() {
    // ⚠️ 错误写法：直接把 story 作为组件传给 h
    return () => h('div', wrapperProps, h(story))
  }
}
```

当 `h()` 收到的参数不是合法的 Vue 组件 / VNode 类型，而是一个普通函数（或对象）时，Vue 内部会把它 **字符串化** 再渲染到 DOM，于是最终输出就变成了：

```html
[object Object]
```

> 这是 JavaScript 对任意非原始对象默认执行 `toString()` 的结果。

## 3. 解决思路

1. **调用 `story()` 拿到真正的组件**；
2. 再把该组件交给 `h()` 创建 VNode；
3. 如有需要，可在外层再包一层自定义的 UI 容器。

## 4. 修改后的装饰器示例

```js
import { h } from 'vue'

export const decorators = [
  (story, context) => {
    const theme = context.globals.theme

    // … 其它主题切换逻辑

    return {
      setup() {
        return () =>
          h(
            'div',
            {
              class: `p-4 min-h-screen ${
                theme === 'dark'
                  ? 'bg-neutral-900 text-neutral-100'
                  : 'bg-neutral-0 text-neutral-900'
              }`,
            },
            [h(story())] // ✅ 正确：调用 story() 再交给 h
          )
      },
    }
  },
]
```

### 为什么这样就能解决？

* `story()` 返回的是真正的 **组件选项对象 / VNode**，Vue `h()` 可以正确识别并生成虚拟节点树；
* 传入合法节点后，渲染引擎可以正常 diff & mount，DOM 不再打印对象字符串，自然也就看不到 `[object Object]` 了。

## 5. 延伸：防止类似问题

| 场景                         | 建议做法 |
| ---------------------------- | -------- |
| **React** 的装饰器或 Render 函数 | 如果文件后缀是 `.js`，不要直接写 JSX，可写 `React.createElement`，或改为 `.jsx/.tsx` 让 Vite/TSX 解析 |
| **Vue** 装饰器               | 确认得到的是组件实例/选项；传函数必须先执行 |
| **全局样式 import 顺序**     | CSS 中的 `@import` 必须出现在其他声明之前，避免 Vite 报 "@"import must precede all other statements" |

---
💡 通过这次排查，如果 Canvas 里再次出现 `[object Object]`，大概率是 **把非组件对象直接传给了渲染函数**，从调用栈向上排查即可快速定位。 