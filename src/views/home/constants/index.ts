// 验证规则常量
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 10,
    pattern: /^[\u4e00-\u9fa5]+$/,
  },
} as const

// 验证提示信息
export const VALIDATION_MESSAGES = {
  name: {
    required: '请输入姓名',
    minLength: '姓名至少需要2个字符',
    maxLength: '姓名不能超过10个字符',
    pattern: '姓名只能包含中文字符',
  },
} as const

// 计算参数常量
export const CALCULATION_PARAMS = {
  maxEnergy: 5000, // 最大能量值
  minScore: 60, // 最低分数
  maxScore: 100, // 最高分数
  scoreThresholds: {
    excellent: 90, // 优秀阈值
    good: 80, // 良好阈值
    fair: 70, // 一般阈值
    poor: 60, // 较差阈值
  },
} as const

// 动画配置常量
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

// 路由配置常量
export const ROUTE_CONFIG = {
  paths: {
    home: '/',
    result: '/result',
    notFound: '/:pathMatch(.*)*',
  },
  titles: {
    home: 'AI姓名配对 - 探索你们的缘分密码',
    result: '配对结果 - AI姓名配对',
    notFound: '页面未找到 - AI姓名配对',
  },
} as const

// 缓存配置常量
export const STORAGE_KEYS = {
  formData: 'nameMatchFormData',
  result: 'nameMatchResult',
  theme: 'nameMatchTheme',
} as const

// 系统配置常量
export const SYSTEM_CONFIG = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    timeout: 10000,
    retryTimes: 3,
  },
  debug: import.meta.env.DEV,
} as const

// 错误码常量
export const ERROR_CODES = {
  validation: {
    invalidName: 1001,
    invalidForm: 1002,
  },
  network: {
    timeout: 2001,
    serverError: 2002,
  },
  system: {
    unknown: 9999,
  },
} as const

// 正则表达式常量
export const REGEX_PATTERNS = {
  chineseName: /^[\u4e00-\u9fa5]{2,10}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^1[3-9]\d{9}$/,
} as const

// 默认值常量
export const DEFAULT_VALUES = {
  formData: {
    name1: '',
    gender1: 'male',
    name2: '',
    gender2: 'female',
  },
  pagination: {
    pageSize: 10,
    currentPage: 1,
  },
  animation: {
    duration: 300,
    delay: 100,
  },
} as const

// 提示信息常量
export const MESSAGES = {
  success: {
    calculation: '计算完成',
    save: '保存成功',
  },
  error: {
    validation: '表单验证失败',
    network: '网络请求失败',
    system: '系统错误',
  },
  confirm: {
    reset: '确定要重置表单吗？',
    delete: '确定要删除这条记录吗？',
  },
} as const
