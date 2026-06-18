export type ProjectCategory = 'pool' | 'sauna'
export type FilterTab = 'all' | 'pools' | 'saunas'

export interface Project {
  id: number
  category: ProjectCategory
  title: string
  subtitle: string
  images: string[]
  cover: string
}

const PROJECT_CATEGORIES: Record<number, ProjectCategory> = {
  1: 'pool',
  2: 'pool',
  3: 'pool',
  4: 'pool',
  5: 'pool',
  6: 'pool',
  7: 'pool',
  9: 'pool',
  10: 'pool',
  11: 'pool',
  15: 'pool',
  19: 'pool',
  8: 'sauna',
  12: 'sauna',
  13: 'sauna',
  14: 'sauna',
  16: 'sauna',
  17: 'sauna',
  18: 'sauna',
}

const imageModules = import.meta.glob(
  '@/assets/projects/**/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true, import: 'default' },
) as Record<string, string>

const isPlanFile = (path: string) => /план/i.test(path)

const buildProjects = (): Project[] => {
  const grouped = new Map<number, string[]>()

  for (const [path, src] of Object.entries(imageModules)) {
    if (isPlanFile(path)) continue

    const match = path.match(/projects\/(\d+)\//)
    if (!match) continue

    const id = Number(match[1])
    const images = grouped.get(id) ?? []
    images.push(src)
    grouped.set(id, images)
  }

  return [...grouped.entries()]
    .sort(([a], [b]) => a - b)
    .map(([id, images]) => {
      const category = PROJECT_CATEGORIES[id] ?? 'pool'
      const sortedImages = [...images].sort((a, b) => a.localeCompare(b))

      return {
        id,
        category,
        title: category === 'pool' ? 'Бассейн' : 'Сауна',
        subtitle: `#${id}`,
        images: sortedImages,
        cover: sortedImages[0],
      }
    })
}

export const projects = buildProjects()

export const filterProjects = (
  tab: FilterTab,
  items: Project[] = projects,
): Project[] => {
  if (tab === 'pools') return items.filter((project) => project.category === 'pool')
  if (tab === 'saunas') return items.filter((project) => project.category === 'sauna')
  return items
}
