import tempImg from '@/assets/temp.png'
import HeroSection from "../Main/heroSection"
import aboutImg from '@/assets/about-img.png'
import AboutCard from '@/components/ui/aboutCard'
import poolImg from '@/assets/pool-img.png'
import saunaImg from '@/assets/sauna-img.png'
import spaImg from '@/assets/spa-img.png'
import poolBg from '@/assets/pool-bg.png'
import saunaBg from '@/assets/sauna-bg.png'
import spaBg from '@/assets/spa-bg.png'
import roomImage from '@/assets/room-image.png'

const AboutPage = () => {
    return (
        <>
            <HeroSection 
                title="О нашей компании" 
                withBackground={false}
                withSideImage
                sideImageSrc={tempImg}
            />
            <div className="flex flex-col lg:flex-row justify-between items-center mt-32 lg:mt-64 w-full px-6 lg:px-15 gap-12">
                <div className="w-full lg:w-auto relative flex flex-col items-center lg:flex-row lg:items-end">
                    <img
                    src={aboutImg}
                    className="object-contain w-full max-w-md lg:max-w-none"
                    alt="about"
                    />

                    <img
                    src={aboutImg}
                    className="hidden 2xl:block object-contain w-10/12 mt-6 lg:mt-0 lg:absolute lg:-right-80 z-10"
                    alt="about-overlay"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                    <h2 className="font-medium text-2xl sm:text-3xl lg:text-[64px] leading-snug lg:leading-none">
                    Основной принцип работы компании — индивидуальный подход к каждому клиенту.
                    </h2>
                    <p className="font-light text-lg sm:text-xl lg:text-[32px] leading-relaxed lg:leading-none">
                    "iPool" — это новое лицо компании, которая более 
                    10 лет удерживает прочные позиции на Ростовском рынке услуг по обустройству SPA-зоны 
                    (бассейны, сауны, бани, SPA).
                    </p>
                    <p className="font-light text-base sm:text-lg lg:text-2xl leading-relaxed">
                    Компания "iPool" сочетает в себе огромный опыт, европейские традиции и успешную историю работы 
                    на рынке. 
                    <br />
                    <br />
                    Для того, чтобы поддерживать высокий статус компании, сотрудники изучают новые тенденции рынка, 
                    разрабатывают и адаптируют современные технологии обслуживания, продажи и продвижения бассейнов 
                    и SPA-оборудования.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mt-24 lg:mt-48 px-6 lg:px-15">
                <AboutCard image={poolImg} title="Бассейны" bg={poolBg} />
                <AboutCard image={saunaImg} title="Сауны" bg={saunaBg} />
                <AboutCard
                    image={spaImg}
                    title="Wellness и SPA"
                    bg={spaBg}
                    className="col-span-1 sm:col-span-2 mt-2.5"
                />
            </div>

            <div className="w-full mt-24 lg:mt-120 mb-48 lg:mb-96 px-6">
                <img className="m-auto w-full object-contain" src={roomImage} alt="room" />
            </div>
        </>
    )
}

export default AboutPage