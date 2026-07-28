// 入口：导出 Astro 集成，并重新导出 React 组件以便统一从本包引入。
import watercolor from '../integration.mjs'

export { watercolor as default }
export { default as watercolor } from '../integration.mjs'

// 方便直接从本包引入组件（底层仍是 @zeturn/watercolor-react）
export * from '@zeturn/watercolor-react'
