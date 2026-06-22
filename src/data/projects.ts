export type ProjectCategory = 'pool' | 'sauna'
export type FilterTab = 'all' | 'pools' | 'saunas'

export interface Project {
  id: number
  categories: ProjectCategory[]
  title: string
  subtitle: string
  images: string[]
  cover: string
}

const BOTH_CATEGORIES = new Set([1, 7, 8, 10, 11, 13, 17, 18, 19])
const POOL_ONLY = new Set([2, 3, 4, 5, 6, 9, 12, 15, 16])
const SAUNA_ONLY = new Set([14])

const getProjectCategories = (id: number): ProjectCategory[] => {
  const categories: ProjectCategory[] = []

  if (BOTH_CATEGORIES.has(id) || POOL_ONLY.has(id)) {
    categories.push('pool')
  }

  if (BOTH_CATEGORIES.has(id) || SAUNA_ONLY.has(id)) {
    categories.push('sauna')
  }

  return categories
}

const PROJECT_TITLES: Record<number, string> = {
  1: 'AQUA',
  2: 'HORIZON',
  3: "LOVER'S",
  4: 'CASCADE',
  5: 'INFINITY',
  6: 'REFLECT',
  7: 'CURRENT',
  8: 'EMBER',
  9: 'RIPPLE',
  10: 'VELOCITY',
  11: 'MONOLITH',
  12: 'WHISPER',
  13: 'ZENITH',
  14: 'SUNSET',
  15: 'PYRAMID',
  16: 'HAPPINESS',
  17: 'MIST',
  18: 'RETREAT',
  19: 'ECLIPSE',
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
      const sortedImages = [...images].sort((a, b) => a.localeCompare(b))

      return {
        id,
        categories: getProjectCategories(id),
        title: PROJECT_TITLES[id] ?? '',
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
  if (tab === 'pools') {
    return items.filter((project) => project.categories.includes('pool'))
  }

  if (tab === 'saunas') {
    return items.filter((project) => project.categories.includes('sauna'))
  }

  return items
}
