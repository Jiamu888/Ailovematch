export interface Case {
  id: string
  name1: string
  name2: string
  gender1: 'male' | 'female'
  gender2: 'male' | 'female'
  matchScore: number
  matchType: string
  description: string
  createTime: string
}

export interface CaseCardProps {
  case: Case
}
