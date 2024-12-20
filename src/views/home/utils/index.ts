import type { ValidationResult, ValidationErrors, FormData, CalculationResult } from '../types'

// 验证工具
export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return '请输入姓名'
  }
  if (!/^[\u4e00-\u9fa5]{2,10}$/.test(name.trim())) {
    return '姓名必须是2-10个汉字'
  }
  return null
}

export const validateForm = (formData: FormData): ValidationResult => {
  const errors: ValidationErrors = {}

  const name1Error = validateName(formData.name1)
  if (name1Error) errors.name1 = name1Error

  const name2Error = validateName(formData.name2)
  if (name2Error) errors.name2 = name2Error

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

// 计算工具
export const calculateNameEnergy = (name: string): number => {
  return name.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0)
  }, 0)
}

export const calculateCompatibility = (energy1: number, energy2: number): number => {
  const diff = Math.abs(energy1 - energy2)
  const maxDiff = 5000 // 假设最大差异值
  return Math.round((1 - diff / maxDiff) * 100)
}

export const generateSuggestions = (score: number): string[] => {
  const suggestions: string[] = []

  if (score >= 90) {
    suggestions.push('你们的姓名能量场高度和谐，这是一段值得珍惜的缘分。')
  } else if (score >= 80) {
    suggestions.push('你们的姓名能量场相当契合，通过互相理解可以建立深厚的关系。')
  } else if (score >= 70) {
    suggestions.push('你们的姓名能量场比较协调，需要更多的包容和沟通来增进感情。')
  } else {
    suggestions.push('你们的姓名能量场存在一定差异，但这可能带来互补的效果。')
  }

  return suggestions
}

// 动画工具
export const scrollToElement = (elementId: string, offset = 0): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}

export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timer: number | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)

    timer = window.setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: number | null = null
  let lastArgs: Parameters<T> | null = null

  return function (this: any, ...args: Parameters<T>) {
    lastArgs = args

    if (timer) return

    timer = window.setTimeout(() => {
      if (lastArgs) {
        fn.apply(this, lastArgs)
        lastArgs = null
      }
      timer = null
    }, delay)
  }
}

// 随机数生成
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 格式化日期
export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 深拷贝
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj

  if (Array.isArray(obj)) {
    return obj.map(deepClone) as unknown as T
  }

  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepClone(value)])) as T
}

// 字符串截断
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

// URL参数解析
export function parseQuery(queryString: string): Record<string, string> {
  const query: Record<string, string> = {}
  const pairs = queryString.substring(1).split('&')

  for (const pair of pairs) {
    const [key, value] = pair.split('=')
    if (key) {
      query[decodeURIComponent(key)] = decodeURIComponent(value || '')
    }
  }

  return query
}

// 通用工具
export const formatNumber = (num: number): string => {
  return num.toFixed(0)
}

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const catchError = async <T>(
  promise: Promise<T>,
  errorHandler?: (error: any) => void,
): Promise<T | null> => {
  try {
    return await promise
  } catch (error) {
    if (errorHandler) {
      errorHandler(error)
    } else {
      console.error('操作失败:', error)
    }
    return null
  }
}

export const memoize = <T extends (...args: any[]) => any>(
  func: T,
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache = new Map()

  return (...args: Parameters<T>) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = func(...args)
    cache.set(key, result)
    return result
  }
}
