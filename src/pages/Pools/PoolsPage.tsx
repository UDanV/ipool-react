import HeroSectionSpa from '@/pages/Places/heroSection'
import AboutCard from '@/components/ui/aboutCard'
import poolIcon from '@/assets/spaBoxIcons/pool-icon.svg'
import { concretePhoto, compositePhoto } from '@/data/photoLibrary'

const PoolsPage = () => {
  return (
    <>
      <HeroSectionSpa title="Бассейны" icon={poolIcon} centeredTitle />

      <section className="mt-10 w-full sm:mt-14 lg:mt-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[90dvw] m-auto">
          <AboutCard
            large
            bg={compositePhoto}
            title="Композитные"
            subtitle="Готовые чаши и быстрый монтаж под ключ"
            link="/pools/composite"
          />
          <AboutCard
            large
            bg={concretePhoto}
            title="Бетонные"
            subtitle="Индивидуальный проект любой формы и размера"
            link="/pools/concrete"
          />
        </div>
      </section>
    </>
  )
}

export default PoolsPage
