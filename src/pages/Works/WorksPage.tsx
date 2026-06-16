import HeroSection from "../Main/heroSection"
import ProectsSection from "../Main/proectsSection"

const Works = () => {
    return (
        <>
            <HeroSection title="Наши работы" />
            <ProectsSection
                gridConfig={[2, 4, 3]}
                filterClassName='xl:mt-26'
                className='lg:text-[140px]'
            />
        </>
    )
}

export default Works