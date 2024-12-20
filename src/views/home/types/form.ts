// 表单数据接口
export interface FormData {
  name1: string // 第一个人的姓名
  name2: string // 第二个人的姓名
  gender1: 'male' | 'female' // 第一个人的性别
  gender2: 'male' | 'female' // 第二个人的性别
}

// 验证规则接口
export interface ValidationRules {
  name: {
    required: boolean // 是否必填
    minLength: number // 最小长度
    maxLength: number // 最大长度
    pattern: RegExp // 匹配模式
  }
}

// 验证错误信息接口
export interface ValidationErrors {
  [key: string]: string // 字段名: 错误信息
}
