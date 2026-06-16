import HeroSection from './heroSection'
import ServicesSection from './servicesSection'
import ProectsSection from './proectsSection'
import SpaBoxSection from './spaBoxSection'

const Main = () => {
    return (
        <>
            <HeroSection title="Бассейны и Спа" />
            <ServicesSection />
            <ProectsSection
                className='lg:text-[140px]'
                filterClassName='xl:mt-26'
                gridConfig={[2, 4, 3]}
            />
            <SpaBoxSection />
        </>
    )
}

export default Main
