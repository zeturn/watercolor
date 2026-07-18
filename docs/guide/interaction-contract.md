# 交互内核与双框架契约

Watercolor 1.2.3 开始，弹层、焦点、键盘与定位行为收敛到共享交互内核。React 与 Vue 组件可以有不同的渲染语法，但用户可感知的行为必须一致。

## 共享基础设施

`@zeturn/watercolor-core` 提供框架无关的交互能力：

- `createOverlayLayer`：统一注册弹层层级、Escape、outside click、焦点恢复、焦点陷阱、滚动锁定。
- `computeFloatingPosition` / `applyFloatingPosition`：统一 viewport collision、flip、shift 和 fixed 定位。
- overlay stack：后打开的弹层优先处理 Escape 和 outside click，断开 DOM 的旧层会被自动清理。

React 使用 `Portal`、`useOverlayLayer`、`useFloatingPosition` 适配这些能力。Vue 使用 Teleport、`useOverlayLayer`、`useFloatingPosition` 适配同一套能力。

## 契约矩阵

| 组件 | open/close | keyboard | focus | outside click | positioning | scroll lock | nested overlays | SSR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modal | controlled/uncontrolled；`onClose` 一致 | Escape 关闭顶层 | 打开后聚焦内容，关闭后恢复触发元素，焦点限制在弹窗内 | 不关闭，除非组件显式提供 close affordance | 居中，不参与 collision | 锁定 body | 只处理顶层 Escape | 客户端挂载后启用交互 |
| SlideOver | controlled/uncontrolled；`onClose` 一致 | Escape 关闭顶层 | 打开后聚焦面板，关闭后恢复触发元素，焦点限制在面板内 | 不关闭，除非组件显式提供 close affordance | 边缘停靠 | 锁定 body | 只处理顶层 Escape | 客户端挂载后启用交互 |
| Popover | trigger click 切换；支持外部关闭回调 | Escape 关闭顶层 | 关闭后恢复触发元素 | 顶层 outside click 关闭 | fixed + flip/shift | 不锁定 | 子弹层优先 | 客户端挂载后启用定位 |
| HoverCard | hover/focus 打开，leave/blur 关闭 | Escape 关闭顶层 | 关闭后恢复触发元素 | 顶层 outside click 关闭 | fixed + flip/shift | 不锁定 | 子弹层优先 | 客户端挂载后启用定位 |
| Tooltip | hover/focus 打开，leave/blur 关闭 | Escape 关闭顶层 | 不抢焦点，保留 `aria-describedby` | 顶层 outside click 关闭 | fixed + flip/shift | 不锁定 | 子弹层优先 | 客户端挂载后启用定位 |
| Menu | trigger click 打开；选择 item 关闭 | ArrowUp/Down、Home/End、Tab、Escape | 打开后聚焦首个可用 item，关闭后恢复触发元素 | 顶层 outside click 关闭 | React fixed + flip/shift；Vue 使用同一定位计算 | 不锁定 | 子菜单/子弹层优先 | 客户端挂载后启用交互 |
| Select | click 或键盘打开；选择 option 关闭 | ArrowUp/Down、Home/End、Enter、Escape | 使用 `aria-activedescendant` 表达活动项，关闭后恢复触发元素 | 顶层 outside click 关闭 | 内联 listbox，保留表单布局稳定性 | 不锁定 | 子弹层优先 | 客户端挂载后启用交互 |
| Autocomplete | 输入、click 或键盘打开；选择 option 关闭 | ArrowUp/Down、Enter、Escape | 输入框保持焦点，活动项由列表状态表达 | 顶层 outside click 关闭 | 内联 listbox，保留输入宽度 | 不锁定 | 子弹层优先 | 客户端挂载后启用交互 |
| DatePicker | trigger click 打开；选择日期关闭 | Escape；日期按钮可 Tab 访问 | 关闭后恢复触发元素 | 顶层 outside click 关闭 | 内联 calendar，保留表单布局稳定性 | 不锁定 | 子弹层优先 | 客户端挂载后启用交互 |
| Snackbar | provider/toast 生命周期管理 | 不抢占键盘导航 | 不移动焦点 | 不因 outside click 关闭 | toast stack | 不锁定 | 不参与 modal stack | SSR 不创建 DOM listener |

## 默认值与禁用契约

- 组件默认关闭，除非文档明确提供 `defaultOpen`、`open`、`modelValue` 或同等属性。
- `disabled` 状态必须阻止打开、选择、键盘激活和 pointer 激活。
- controlled 组件只通过受控 prop 反映状态；uncontrolled 组件内部维护状态并仍然发出同名事件。
- React 事件使用 `onOpenChange`、`onClose`、`onChange` 等 camelCase；Vue 使用 `update:*`、`open-change`、`close`、`change` 等等价事件。
- 没有 Provider 时组件仍使用默认无边框 Watercolor 样式；交互内核不依赖主题 Provider。

## 新组件准入要求

新增或重构复合组件时必须满足：

1. 不直接复制 document-level Escape/outside click/focus trap 逻辑，必须使用框架 adapter。
2. React 与 Vue 至少有一个共享契约案例：open/close、keyboard、focus、SSR 或 nested overlays 之一。
3. Storybook 页面必须暴露 default、hover/focus、disabled、error/open 等关键状态中的适用项。
4. 如果组件公开在 package entry 中，必须有测试或 story；空测试和 `expect(true)` 不算覆盖。

