import HeroSection from "../Main/heroSection"
import ProectsSection from "../Main/proectsSection"
import tempImg from '@/assets/temp.png'

const Works = () => {
    return (
        <>
            <HeroSection 
                title="Наши работы" 
                withBackground={false}
                withSideImage
                sideImageSrc={tempImg}
            >

            </HeroSection>
            <ProectsSection 
                gridConfig={[2, 4, 3]}
                filterClassName='xl:mt-26'
                className='lg:text-[140px]'
            />
        </>
    ) 
}

export default Works