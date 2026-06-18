import HeroSectionSpa from "@/pages/Places/heroSection"
import poolIcon from '@/assets/spaBoxIcons/pool-icon.svg'
import ProectsSection from "../Main/proectsSection"

const ConcretePools = () => {
    return (
        <>
            <HeroSectionSpa title="Бетонный бассейн" icon={poolIcon} />
            <ProectsSection 
                filterClassName='xl:mt-26'
                className='lg:text-[140px]'
                showHeader={false} 
                showFilter={false}
                showButton={false}
                showPools={true}
            />
        </>
    )
}

export default ConcretePools