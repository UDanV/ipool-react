import btnLink from '@/assets/button-link.png'

const HeroBanner = ({
        title = 'Почему выбирают нас?', 
        subtitle = 'Надежность и стабильность. Выбирая нас, вы выбираете проверенного партнера, на которого можно положиться в долгосрочной перспективе.'
    } : {
        title?: string, 
        subtitle?: string
    }) => {
    return (
        <div className='border-x border-t border-black mt-11 ml-3 max-w-[95%] flex flex-col-reverse lg:flex-row lg:border-x lg:w-full lg:max-w-full lg:ml-0'>
            <div className='border-x border-b border-black p-5 w-full 2xl:ml-42 lg:border-l lg:p-10 lg:border-b-0'>
                <h2 className='uppercase font-semibold text-xl text-[#2E2E2E] lg:text-2xl lg:font-bold'>{title}</h2>
                <p className='font-normal normal-case text-sm max-w-140 mt-3.5 text-[#4B4B4B] lg:text-base lg:font-bold lg:uppercase'>{subtitle}</p>
                <img className='w-8 ml-auto lg:w-15' src={btnLink} alt="" />
            </div>
            <div className='flex flex-col border-x border-b border-black p-5 justify-between w-full items-start 2xl:mr-16 lg:max-w-74 lg:border-l-0 lg:p-10 lg:border-b-0 lg:border-r'>
                <h2 className='uppercase font-semibold text-xl text-[#2E2E2E] lg:text-2xl'>Что в box’е?</h2>
                <img className='hidden w-15 ml-auto lg:block' src={btnLink} alt="" />
            </div>
        </div>
    )
}

export default HeroBanner