export type { Project, ProjectCategory, FilterTab } from '@/data/projects'
export { projects, filterProjects } from '@/data/projects'

export interface CardData {
  id: number
  title: string
  subtitle: string
  image: string
}

import { projects } from '@/data/projects'

export const cards: CardData[] = projects.map((project) => ({
  id: project.id,
  title: project.title,
  subtitle: project.subtitle,
  image: project.cover,
}))
