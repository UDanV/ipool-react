import kuznetsov from '@/assets/kuznetsov.png'
import spaBox from '@/assets/spa-box.png'
import beachCircle from '@/assets/image (3).png'
import HeroSection from './heroSection'
import ServicesSection from './servicesSection'
import ProectsSection from './proectsSection'
import SharpButton from '@/components/ui/sharpButton'

const Main = () => {
    return (
        <>
            <HeroSection 
                className='text-[50px] text-center lg:text-8xl lg:text-start xl:leading-30' 
                title='Бассейны и Спа' 
                withBackground 
            />
            <ServicesSection />
            <ProectsSection 
                className='lg:text-[140px]' 
                filterClassName='xl:mt-26' 
                gridConfig={[ 2, 4, 3 ]}
            />
            <div className='flex h-auto 2xl:h-screen justify-center items-center max-w-[1800px] m-auto mt-60 mb-60'>
                <div className='flex flex-col-reverse justify-center items-center xl:flex-row xl:gap-0 gap-8'>
                    <img className='w-full p-3 xl:p-0' src={kuznetsov} alt="" />
                    <div className='m-0 p-3 xl:ml-20 xl:p-0 flex flex-col justify-between'>
                        <h2 className='text-[65px] lg:text-[80px] xl:text-[100px] 2xl:text-[140px] font-bold'>43 000 <span className='opacity-10 text-[48px] xl:text-[60px] 2xl:text-[130px]'>тонн</span></h2>
                        <p className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Объём всех бассейнов <br /> построенных компанией "iPool"</p>
                        <p className='text-xl xl:text-2xl 2xl:text-4xl mt-6 font-light'>Эту цифру можно сравнить с водоизмещением тяжёлого авианесущего крейсера "Адмирал Флота Советского Союза Кузнецов" — 47 тыс. тонн.</p>
                    </div>
                </div>
            </div>
            <div className='border-0 2xl:border-y border-black flex flex-col items-center max-w-[1800px] m-auto p-3 2xl:p-0'>
                <img className='w-full mt-20' src={ spaBox } alt="" />
                <div className='flex items-center justify-around w-full 2xl:justify-between'>
                    <h2 className='text-[75px] md:text-[120px] lg:text-[200px] xl:text-[250px] 2xl:text-[350px] font-bold'>SPA</h2>
                    <img className='w-16 md:w-30 lg:w-40 xl:w-auto' src={ beachCircle } alt="" />
                    <h2 className='text-[75px] md:text-[120px] lg:text-[200px] xl:text-[250px] 2xl:text-[350px] font-bold'>BOX</h2>
                </div>
                <SharpButton 
                    title='К Spa-box' 
                    className='w-full'
                />
            </div>
        </>
    )
}

export default Main