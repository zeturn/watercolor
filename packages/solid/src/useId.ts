// 本地 useId 实现。
// solid-js 当前版本不导出 useId（React 的 useId 等价物），机械转换的组件
// 依赖它来生成 label/input 关联的 id。这里用一个进程内自增计数器生成稳定
// 的唯一 id。注意：这不是 hydration 安全的（每次加载都从 1 开始），但对于
// 非 SSR 水合场景（纯客户端渲染）足够，属于 best-effort 转换的一部分。
let counter = 0

export function useId(): string {
  counter += 1
  return `watercolor-${counter}`
}
