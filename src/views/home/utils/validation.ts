// 验证规则
const NAME_RULES = {
  required: {
    validate: (value: string) => value.trim().length > 0,
    message: '请输入姓名',
  },
  minLength: {
    validate: (value: string) => value.trim().length >= 2,
    message: '姓名至少需要2个字符',
  },
  maxLength: {
    validate: (value: string) => value.trim().length <= 10,
    message: '姓名不能超过10个字符',
  },
  format: {
    validate: (value: string) => /^[\u4e00-\u9fa5]+$/.test(value.trim()),
    message: '姓名只能包含中文字符',
  },
} as const

// 验证结果类型
interface ValidationResult {
  isValid: boolean
  errors: string[]
}

// 验证单个姓名
export const isValidChineseName = (name: string): boolean => {
  const trimmedName = name.trim()
  return (
    trimmedName.length >= 2 && trimmedName.length <= 10 && /^[\u4e00-\u9fa5]+$/.test(trimmedName)
  )
}

// 验证表单
export const validateForm = (name1: string, name2: string): ValidationResult => {
  const errors: string[] = []

  // 验证第一个姓名
  const trimmedName1 = name1.trim()
  if (!trimmedName1) {
    errors.push(NAME_RULES.required.message)
  } else if (!NAME_RULES.minLength.validate(trimmedName1)) {
    errors.push(NAME_RULES.minLength.message)
  } else if (!NAME_RULES.maxLength.validate(trimmedName1)) {
    errors.push(NAME_RULES.maxLength.message)
  } else if (!NAME_RULES.format.validate(trimmedName1)) {
    errors.push(NAME_RULES.format.message)
  }

  // 验证第二个姓名
  const trimmedName2 = name2.trim()
  if (!trimmedName2) {
    errors.push(NAME_RULES.required.message)
  } else if (!NAME_RULES.minLength.validate(trimmedName2)) {
    errors.push(NAME_RULES.minLength.message)
  } else if (!NAME_RULES.maxLength.validate(trimmedName2)) {
    errors.push(NAME_RULES.maxLength.message)
  } else if (!NAME_RULES.format.validate(trimmedName2)) {
    errors.push(NAME_RULES.format.message)
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// 格式化错误消息
export const formatErrors = (errors: string[]): string => {
  return errors[0] || ''
}

// 清理输入值
export const sanitizeInput = (value: string): string => {
  return value.trim().slice(0, 10)
}
