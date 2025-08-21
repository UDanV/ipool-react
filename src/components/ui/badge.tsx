import arrowRight from '@/assets/line-to-right.svg'

function Badge() {
    return (
        <div className="cursor-auto border-white w-full flex flex-col gap-12 px-5 py-5 2xl:pr-52 2xl:pl-5 2xl:pb-12 lg:border lg:border-black lg:hover:shadow-2xl lg:transition-shadow lg:cursor-pointer lg:w-1/2">
            <p className='text-2xl font-light text-center xl:text-3xl lg:text-left'>Сделаем предварительную оценку <br className='hidden lg:block' /> и замер бесплатно</p>
            <div className="gap-4 hidden lg:flex">
                <p className='text-xl font-light'>Как мы работаем</p>
                <img src={arrowRight} alt="" />
            </div>
        </div>
    )
}

export default Badge