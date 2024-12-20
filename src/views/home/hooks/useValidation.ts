import { ref, computed } from 'vue'
import type { ValidationRule, ValidationErrors } from '../types'

interface ValidationOptions {
  rules?: Record<string, ValidationRule[]>
  onSuccess?: () => void
  onError?: (errors: ValidationErrors) => void
}

export function useValidation(options: ValidationOptions = {}) {
  const { rules = {}, onSuccess, onError } = options
  const errors = ref<ValidationErrors>({})
  const isValid = computed(() => Object.keys(errors.value).length === 0)

  const validate = async (values: Record<string, any>) => {
    const newErrors: ValidationErrors = {}

    for (const [field, fieldRules] of Object.entries(rules)) {
      const value = values[field]

      for (const rule of fieldRules) {
        // 必填验证
        if (rule.required && !value) {
          newErrors[field] = rule.message || '此项是必填的'
          break
        }

        // 最小长度验证
        if (rule.minLength && value.length < rule.minLength) {
          newErrors[field] = rule.message || `最少需要 ${rule.minLength} 个字符`
          break
        }

        // 最大长度验证
        if (rule.maxLength && value.length > rule.maxLength) {
          newErrors[field] = rule.message || `最多允许 ${rule.maxLength} 个字符`
          break
        }

        // 正则验证
        if (rule.pattern && !rule.pattern.test(value)) {
          newErrors[field] = rule.message || '格式不正确'
          break
        }

        // 自定义验证
        if (rule.validator) {
          const result = await rule.validator(value)
          if (result !== true) {
            newErrors[field] = result
            break
          }
        }
      }
    }

    errors.value = newErrors

    if (Object.keys(newErrors).length === 0) {
      onSuccess?.()
    } else {
      onError?.(newErrors)
    }

    return isValid.value
  }

  const clearErrors = () => {
    errors.value = {}
  }

  return {
    errors,
    isValid,
    validate,
    clearErrors,
  }
}
