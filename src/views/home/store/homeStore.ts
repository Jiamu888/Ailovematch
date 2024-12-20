import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FormData, ValidationErrors, CalculationResult } from '../types'

export const useHomeStore = defineStore('home', () => {
  // 表单数据
  const formData = ref<FormData>({
    name1: '',
    gender1: 'male',
    name2: '',
    gender2: 'female',
  })

  // 验证错误
  const validationErrors = ref<ValidationErrors>({})

  // 计算结果
  const calculationResult = ref<CalculationResult | null>(null)

  // 提交表单
  const submitForm = async () => {
    // 清除错误
    validationErrors.value = {}

    // 验证表单
    if (!formData.value.name1) {
      validationErrors.value.name1 = '请输入第一个人的姓名'
    }
    if (!formData.value.name2) {
      validationErrors.value.name2 = '请输入第二个人的姓名'
    }

    if (Object.keys(validationErrors.value).length > 0) {
      return
    }

    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 模拟计算结果
    calculationResult.value = {
      score: Math.floor(Math.random() * 30) + 70,
      compatibility: {
        性格相容: Math.floor(Math.random() * 30) + 70,
        生活方式: Math.floor(Math.random() * 30) + 70,
        事业发展: Math.floor(Math.random() * 30) + 70,
        兴趣爱好: Math.floor(Math.random() * 30) + 70,
        价值观念: Math.floor(Math.random() * 30) + 70,
      },
      suggestions: [
        '你们的性格特点非常互补，可以在生活中相互扶持、共同成长。',
        '建议多创造共同的兴趣爱好，增进感情交流。',
        '在事业发展方面可以互相支持，共同规划未来。',
        '价值观念的差异需要通过沟通来增进理解和包容。',
      ],
    }
  }

  // 重置表单
  const resetForm = () => {
    formData.value = {
      name1: '',
      gender1: 'male',
      name2: '',
      gender2: 'female',
    }
    validationErrors.value = {}
    calculationResult.value = null
  }

  return {
    formData,
    validationErrors,
    calculationResult,
    submitForm,
    resetForm,
  }
})
