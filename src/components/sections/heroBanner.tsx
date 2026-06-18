import { ArrowUpRightIcon } from 'lucide-react'

const HeroBanner = ({
    link = '/about',
    title = 'Почему выбирают нас?',
    subtitle = 'Надежность и стабильность. Выбирая нас, вы выбираете проверенного партнера, на которого можно положиться в долгосрочной перспективе.'
}: {
    link?: string,
    title?: string,
    subtitle?: string
}) => {
    return (
        <div className='border-black mt-11 px-3 max-w-[90dvw] m-auto flex flex-col-reverse lg:flex-row lg:border-t lg:w-full lg:max-w-full lg:ml-0'>
            <div className='border-x border-b border-black p-5 w-full 2xl:ml-42 lg:border-l lg:p-10 lg:border-b-0 flex flex-col items-start justify-between gap-3.5'>
                <h2 className='uppercase font-semibold text-xl text-[#2E2E2E] lg:text-2xl lg:font-bold'>{title}</h2>
                <p className='font-normal normal-case text-sm max-w-140 text-[#4B4B4B] lg:text-base lg:font-bold lg:uppercase'>{subtitle}</p>
                <a href={link} className="inline-block rounded-full p-2 hover:shadow-2xl transition-shadow border border-black self-end">
                    <ArrowUpRightIcon
                        className="w-8 lg:w-15 hover:shadow-2xl transition-shadow rounded-full"
                    />
                </a>
            </div>
            <div className='flex flex-col border border-black p-5 justify-between w-full items-start 2xl:mr-16 lg:max-w-74 lg:border-l-0 lg:p-10 lg:border-b-0 lg:border-t-0 lg:border-r'>
                <h2 className='uppercase font-semibold text-xl text-[#2E2E2E] lg:text-2xl'>Что в box’е?</h2>
                <a href="/spa-box" className='ml-auto rounded-full p-2 hover:shadow-2xl transition-shadow border border-black'>
                    <ArrowUpRightIcon className='w-8 lg:w-15 hover:shadow-2xl transition-shadow rounded-full' />
                </a>
            </div>
        </div>
    )
}

export default HeroBanner