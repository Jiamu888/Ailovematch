# 项目设计文档

## 项目概述

这是一个使用 TypeScript 和现代工具链的 Vue 3 项目模板。它为构建可扩展的 Vue 应用提供了基础架构。

## 技术栈

- Vue 3 (使用组合式 API)
- TypeScript 实现类型安全
- Vite 作为构建工具
- Vue Router 实现路由
- Pinia 实现状态管理
- ESLint + Prettier 保证代码质量

## 目录结构

├── assets/ # 静态资源文件(如 CSS)
├── components/ # 可复用的 Vue 组件
│ ├── icons/ # SVG 图标组件
│ └── ...
├── views/ # 路由页面组件
├── stores/ # Pinia 状态存储
├── router/ # Vue Router 配置
└── App.vue # 根组件

## 技术要点

### TypeScript 配置

- 启用严格类型检查
- 通过 vue-tsc 支持 Vue 3 类型
- 配置路径别名(@/ 指向 src/)

### 构建系统

- 使用 Vite 实现快速开发和优化构建
- 启用热模块替换(HMR)
- 通过 import.meta.env 使用环境变量
- 资源处理和优化

### 组件架构

- 使用 <script setup> 的组合式 API
- 单文件组件(SFC)
- 作用域样式
- 使用 defineProps 进行 Props 类型定义

### 路由

- 使用 HTML5 History 模式
- 路由组件懒加载
- 命名路由

### 状态管理

- 使用组合式 API 风格的 Pinia 存储
- 类型安全的 store actions 和 state

### 代码质量

- 使用 Vue 3 推荐规则的 ESLint
- 使用 Prettier 统一代码格式
- 使用 Editor Config 确保 IDE 一致性

### 开发工具

- Vue DevTools 插件
- TypeScript IDE 支持
- 推荐的 VSCode 扩展

## 开始使用

1. 安装依赖: `npm install`
2. 启动开发服务器: `npm run dev`
3. 生产环境构建: `npm run build`
4. 代码检查: `npm run lint`

## 最佳实践

- 所有新代码使用 TypeScript
- 遵循 Vue 3 组合式 API 模式
- 保持组件小巧且功能专注
- 使用 Pinia 管理共享状态
- 通过 ESLint/Prettier 维护一致的代码风格
