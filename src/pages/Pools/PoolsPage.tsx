import HeroSectionSpa from '@/pages/Places/heroSection'
import AboutCard from '@/components/ui/aboutCard'
import poolIcon from '@/assets/pool-icon.svg'
import poolPhoto from '@/assets/pool-img-temp.jpg'
import concretePhoto from '@/assets/concrete-pool.png'

const PoolsPage = () => {
  return (
    <>
      <HeroSectionSpa title="Бассейны" icon={poolIcon} centeredTitle />

      <section className="mt-10 w-full sm:mt-14 lg:mt-16">
        <div className="grid grid-cols-1 gap-4 px-3 sm:gap-5 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 xl:px-12">
          <AboutCard
            large
            bg={poolPhoto}
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
