import HeroSectionSpa from "@/pages/Places/heroSection"
import saunasIcon from '@/assets/spaBoxIcons/saunas-icon.svg'
import ProectsSection from "../Main/proectsSection"

const SaunasPage = () => {
    return (
        <>
            <HeroSectionSpa title="Сауны" icon={saunasIcon} centeredTitle={true}></HeroSectionSpa>
            <ProectsSection 
                filterClassName='xl:mt-26'
                className='lg:text-[140px]'
                showHeader={false} 
                showFilter={false}
                showButton={false}
                showSaunas={true}
            />
        </>
    )
}

export default SaunasPage