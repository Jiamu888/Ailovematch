import type { FormData, CalculationResult } from '../types/store'

// 计算姓名能量值
const calculateNameEnergy = (name: string): number => {
  const baseScore = name.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0)
  }, 0)
  return Math.abs(Math.sin(baseScore)) * 100
}

// 计算性别匹配度
const calculateGenderCompatibility = (gender1: string, gender2: string): number => {
  if (gender1 === 'male' && gender2 === 'female') return 100
  if (gender1 === 'female' && gender2 === 'male') return 100
  return 80
}

// 生成建议列表
const generateSuggestions = (score: number, compatibility: Record<string, number>): string[] => {
  const suggestions: string[] = []

  // 总体建议
  if (score >= 90) {
    suggestions.push('你们的姓名能量场高度和谐，这是一段值得珍惜的缘分。')
  } else if (score >= 80) {
    suggestions.push('你们的姓名能量场相当契合，通过互相理解可以建立深厚的关系。')
  } else if (score >= 70) {
    suggestions.push('你们的姓名能量场比较协调，需要更多的包容和沟通来增进感情。')
  } else if (score >= 60) {
    suggestions.push('你们的姓名能量场基本匹配，建议多关注对方的需求和想法。')
  } else {
    suggestions.push('你们的姓名能量场存在一定差异，但这可能带来互补的效果。')
  }

  // 具体维度建议
  if (compatibility.personality >= 80) {
    suggestions.push('在性格方面，你们展现出很好的互补性，这将有助于共同成长。')
  }

  if (compatibility.lifestyle >= 80) {
    suggestions.push('在生活方式上，你们有很高的契合度，可以轻松建立共同的生活节奏。')
  }

  if (compatibility.career >= 80) {
    suggestions.push('在事业发展方面，你们能够相互支持和激励，共同实现目标。')
  }

  if (compatibility.interests >= 80) {
    suggestions.push('在兴趣爱好上，你们有很多共同点，这将带来更多共同话题和活动。')
  }

  if (compatibility.values >= 80) {
    suggestions.push('在价值观念上，你们高度一致，这是长期关系的重要基础。')
  }

  return suggestions
}

// 主计算函数
export const calculateCompatibility = (formData: FormData): CalculationResult => {
  // 计算基础分数
  const energy1 = calculateNameEnergy(formData.name1)
  const energy2 = calculateNameEnergy(formData.name2)
  const genderScore = calculateGenderCompatibility(formData.gender1, formData.gender2)

  // 计算各维度兼容性
  const compatibility = {
    personality: Math.round(((energy1 * 0.6 + energy2 * 0.4) * genderScore) / 100),
    lifestyle: Math.round(((energy1 * 0.5 + energy2 * 0.5) * genderScore) / 100),
    career: Math.round(((energy1 * 0.4 + energy2 * 0.6) * genderScore) / 100),
    interests: Math.round(((energy1 * 0.7 + energy2 * 0.3) * genderScore) / 100),
    values: Math.round(((energy1 * 0.3 + energy2 * 0.7) * genderScore) / 100),
  }

  // 计算总分
  const score = Math.round(
    Object.values(compatibility).reduce((acc, val) => acc + val, 0) /
      Object.keys(compatibility).length,
  )

  // 生成建议
  const suggestions = generateSuggestions(score, compatibility)

  return {
    score,
    compatibility,
    suggestions,
  }
}
