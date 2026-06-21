---
title: Documentation / 文档
---

# Documentation / 文档

## English

This documentation site is the shared entry point for understanding, running, testing, and maintaining this repository. Keep it practical: every page should help a new contributor or operator answer a real question quickly.

### Purpose

Use this documentation to record:

- what the project does and which problem it solves;
- how to install, configure, and run it locally;
- how to test, build, deploy, and troubleshoot it;
- which environment variables, secrets, and external services are required;
- where important code, scripts, workflows, and operational entry points live.

### Recommended structure

| Section | What to include |
| --- | --- |
| Overview | Product goal, audience, major capabilities, and repository map. |
| Setup | Prerequisites, installation commands, configuration, and local startup. |
| Development | Common scripts, tests, linting, formatting, and contribution workflow. |
| Deployment | Release process, GitHub Pages/docs publishing, rollback notes, and runtime checks. |
| Operations | Logs, health checks, alerts, known failure modes, and recovery steps. |

### Local preview

Run the documentation site from the `doc` directory:

```bash
npm install
npm run start
```

Build the static site with:

```bash
npm run build
```

## 中文

本文档站是理解、运行、测试和维护本仓库的统一入口。文档应保持实用：每一页都应帮助新贡献者或运维人员快速回答一个真实问题。

### 目标

建议在这里记录：

- 项目是什么、解决什么问题；
- 如何安装、配置并在本地运行；
- 如何测试、构建、部署和排障；
- 需要哪些环境变量、密钥和外部服务；
- 关键代码、脚本、工作流和运维入口分别在哪里。

### 推荐结构

| 章节 | 建议内容 |
| --- | --- |
| 概览 | 产品目标、目标用户、主要能力和仓库结构。 |
| 启动 | 前置依赖、安装命令、配置说明和本地启动方式。 |
| 开发 | 常用脚本、测试、lint、格式化和贡献流程。 |
| 部署 | 发布流程、GitHub Pages/文档发布、回滚说明和运行检查。 |
| 运维 | 日志、健康检查、告警、常见故障和恢复步骤。 |

### 本地预览

在 `doc` 目录运行文档站：

```bash
npm install
npm run start
```

构建静态站点：

```bash
npm run build
```
