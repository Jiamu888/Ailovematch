// 性别类型
export type Gender = 'male' | 'female'

// 性别选项
export const GENDER_OPTIONS = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
] as const

// 表单数据类型
export interface FormData {
  name1: string
  gender1: Gender
  name2: string
  gender2: Gender
}

// 兼容性数据类型
export interface Compatibility {
  personality: number
  lifestyle: number
  career: number
  interests: number
  values: number
}

// 计算结果类型
export interface CalculationResult {
  score: number
  compatibility: Compatibility
  suggestions: string[]
}

// 验证错误类型
export interface ValidationErrors {
  name1: string
  name2: string
}

// 状态类型
export interface HomeState {
  formData: FormData
  calculationResult: CalculationResult | null
  validationErrors: ValidationErrors
  isCalculating: boolean
}

// 创建 Store
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { calculateCompatibility } from '../utils/calculation'

export const useHomeStore = defineStore('home', () => {
  // 状态
  const formData = ref<FormData>({
    name1: '',
    gender1: 'male',
    name2: '',
    gender2: 'female',
  })

  const calculationResult = ref<CalculationResult | null>(null)
  const validationErrors = ref<ValidationErrors>({
    name1: '',
    name2: '',
  })
  const isCalculating = ref(false)

  // 方法
  const submitForm = async () => {
    try {
      isCalculating.value = true
      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 1500))
      calculationResult.value = calculateCompatibility(formData.value)
      return true
    } catch (error) {
      console.error('计算失败:', error)
      return false
    } finally {
      isCalculating.value = false
    }
  }

  const resetForm = () => {
    formData.value = {
      name1: '',
      gender1: 'male',
      name2: '',
      gender2: 'female',
    }
    calculationResult.value = null
    validationErrors.value = {
      name1: '',
      name2: '',
    }
  }

  return {
    formData,
    calculationResult,
    validationErrors,
    isCalculating,
    submitForm,
    resetForm,
  }
})
