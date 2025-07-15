# Watercolor UI 组件库发布指南

> 本指南适用于 **watercolor-ui** 分包方案（Vue & React）。默认使用 npm 发布，可根据实际 CICD 流程调整。

---

## 目录

1. 环境要求
2. 版本号管理
3. 构建产物
4. 发布到 npm
   - 方案 A：拆分包（`watercolor-vue` / `watercolor-react`）
   - 方案 B：单包多导出路径（`watercolor-ui/vue`、`/react`）
5. Git Tag 与变更日志
6. 自动化流程（GitHub Actions 示范）
7. 常见问题

---

## 1. 环境要求

| 工具 | 最低版本 | 备注 |
| ---- | -------- | ---- |
| Node | ≥ 18.x   | 建议使用 **nvm** 管理多个版本 |
| npm  | ≥ 9.x    | 或使用 pnpm/yarn，根据团队习惯 |
| git  | ≥ 2.30   | 需开启 GPG 签名可自行配置 |

登录 npm：

```bash
npm adduser   # 第一次登录
# 或
npm login     # 已有账号
```

如果使用 **组织作用域包**（例如 `@watercolor`），请确保你对该组织拥有发布权限：

```bash
npm access grant read-write @watercolor:developers <npm-username>
```

---

## 2. 版本号管理

遵循 **[SemVer](https://semver.org/lang/zh-CN/)**：`主版本.次版本.补丁版本`。

- **破坏性改动**：+1 主版本（`1.x.x` → `2.0.0`）
- **向前兼容的功能**：+1 次版本（`1.1.x` → `1.2.0`）
- **Bug 修复 / 文档**：+1 补丁版本（`1.2.3` → `1.2.4`）

可使用 [changesets](https://github.com/changesets/changesets) 或 conventional commits 自动生成 `CHANGELOG.md`。

---

## 3. 构建产物

```bash
# 安装依赖
yarn install           # 或 npm ci / pnpm i

# 构建 Vue 版
yarn build:vue         # 输出 dist/watercolor-vue.*

# 构建 React 版
yarn build:react       # 输出 dist/watercolor-react.*
```

构建脚本位于 `package.json`：

```json
"scripts": {
  "build:vue":   "vite build --config vite.vue.config.js",
  "build:react": "vite build --config vite.react.config.js"
}
```

执行完成后，将在根目录 `dist/` 生成：

```
dist/
  ├─ watercolor-vue.es.js
  ├─ watercolor-vue.umd.js
  ├─ watercolor-vue.d.ts
  ├─ watercolor-react.es.js
  ├─ watercolor-react.umd.js
  └─ watercolor-react.d.ts
```

---

## 4. 发布到 npm

### 4.1 方案 A：拆分包

分别创建两个包 `watercolor-vue`、`watercolor-react`（首次发布时运行）。

```bash
# Vue 包
yarn build:vue
npm publish --access public --tag latest \
  --workspaces=false \
  --package ./package.json \
  --registry https://registry.npmjs.org/ \
  --<其他参数>

# React 包
yarn build:react
npm publish --access public --tag latest --package ./package.json
```

确保在发布前修改 `package.json`：

```json
{
  "name": "watercolor-vue",
  "main": "dist/watercolor-vue.umd.js",
  "module": "dist/watercolor-vue.es.js",
  "types": "dist/watercolor-vue.d.ts",
  "peerDependencies": { "vue": "^3.0.0" }
}
```

React 包同理，将 peerDependencies 改为 `react` / `react-dom`，并替换产物文件名。

### 4.2 方案 B：单包多导出

如果倾向保持一个包，可在根 `package.json` 增加 `exports` 字段：

```json
"exports": {
  ".": {
    "react": "./dist/watercolor-react.es.js",
    "vue":   "./dist/watercolor-vue.es.js",
    "default": "./dist/watercolor-react.es.js" // 可根据主推框架调整
  },
  "./react": "./dist/watercolor-react.es.js",
  "./vue":   "./dist/watercolor-vue.es.js"
}
```

发布步骤：

```bash
yarn build:vue && yarn build:react
npm version patch   # 或 minor / major
npm publish --access public
```

> 优点：保留单一包名；缺点：依赖仍包含 vue + react，需要在文档说明"选择性安装 peer"。

---

## 5. Git Tag 与变更日志

```bash
git add -A
git commit -m "chore(release): v1.2.0"

git tag v1.2.0

git push origin main --tags
```

自动生成日志（示例使用 conventional-changelog）：

```bash
npm run changelog
```

---

## 6. 自动化流程示例（GitHub Actions）

`.github/workflows/release.yml`：

```yaml
name: Release
on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Install deps
        run: pnpm install --frozen-lockfile
      - name: Build
        run: |
          pnpm build:vue
          pnpm build:react
      - name: Publish
        run: pnpm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 7. 常见问题

| 现象 | 解决方案 |
| ---- | -------- |
| 发布时提示 `403` | 检查 npm Token 权限、包名所有权、组织作用域 |
| peer dependency 警告 | 发布前确保 `package.json` 中 peerDependencies 只包含当前框架 |
| umd 打包后体积过大 | 检查是否忘记 external vue/react；可考虑删除 UMD，只保留 ESModule |
| TS 类型丢失 | 确认 vite-plugin-dts 插件启用、`insertTypesEntry` 为 `true` |

---

祝发布顺利！如有新的流程或规范需求，记得同步更新本指南。 