export interface IFeatureProjectCard {
  id?: string | number
  projectTitle?: string
  projectDesc?: string
  projectTechStack: string[]
  githubRepo?: string
  projectUrl?: string
  isRtl?: boolean
  projectSnapShot?: string
}

export interface IHeaderLinks {
  id?: string | number
  title: string
  href: string
  animationDelay: string
}

export interface ITabs {
  id?: string | number
  title?: string
  step: number
  isActive: boolean
  onTabClick?: (step: number) => void
}
