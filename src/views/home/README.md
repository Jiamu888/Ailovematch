# AI姓名配对分析

基于Vue 3 + TypeScript开发的姓名配对分析组件，提供智能的姓名匹配度分析和关系建议。

## 功能特性

- 智能分析：基于深度学习算法，分析姓名中蕴含的能量场和谐度
- 精准匹配：多维度评估姓名配对的相容性，提供详细的匹配报告
- 专业建议：根据分析结果，提供个性化的关系发展建议和指导
- 即时计算：先进的计算引擎，秒级完成姓名配对分析

## 目录结构

```
home/
├── components/           # 组件目录
│   ├── form/            # 表单相关组件
│   ├── intro/           # 介绍相关组件
│   └── result/          # 结果相关组件
├── store/               # 状态管理
│   └── homeStore.ts     # 主状态管理
├── styles/              # 样式文件
│   ├── variables.scss   # 变量定义
│   ├── mixins.scss     # 混合样式
│   └── reset.scss      # 重置样式
├── types/               # 类型定义
│   └── store.ts        # 状态类型
├── utils/               # 工具函数
│   └── validation.ts    # 验证工具
└── HomeView.vue         # 主视图组件
```

## 组件说明

### 表单组件

- `NameInput.vue`: 姓名输入组件
- `GenderSelect.vue`: 性别选择组件
- `CalculationForm.vue`: 计算表单组件

### 结果组件

- `ScoreChart.vue`: 分数图表组件
- `CompatibilityChart.vue`: 兼容性雷达图
- `SuggestionList.vue`: 建议列表组件

### 介绍组件

- `IntroHero.vue`: 首页英雄区
- `IntroFeatures.vue`: 功能特性展示

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
pnpm dev
```

### 构建命令

```bash
pnpm build
```

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 组合式 API 风格
- 采用 SCSS 模块化样式
- 使用 ESLint + Prettier 进行代码格式化

## 性能优化

- 组件懒加载
- 状态管理优化
- 动画性能优化
- 响应式设计优化

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 版本历史

- v1.0.0 (2024-01): 首次发布
- v1.1.0 (2024-02): 新增动画效果
- v1.2.0 (2024-03): 优化移动端适配

## 许可说明

MIT License
