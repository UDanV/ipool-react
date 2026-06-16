import HeroSectionSpa from "@/pages/Places/heroSection"
import saunasIcon from '@/assets/saunas-icon.svg'
import ProectsSection from "../Main/proectsSection"

const SaunasPage = () => {
    return (
        <>
            <HeroSectionSpa title="Сауны" icon={saunasIcon} centeredTitle={true}></HeroSectionSpa>
            <ProectsSection 
                gridConfig={[2, 3]}
                filterClassName='xl:mt-26'
                className='lg:text-[140px]'
                showHeader={false} 
                showFilter={false}
                showButton={false}
            />
        </>
    )
}

export default SaunasPage