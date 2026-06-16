import HeroSection from '../Main/heroSection'
import aboutImg from '@/assets/about-img.png'
import AboutCard from '@/components/ui/aboutCard'
import poolPhoto from '@/assets/pool-img-temp.jpg'
import saunaPhoto from '@/assets/sauna-img-temp.jpg'
import roomImage from '@/assets/room-image.png'

const AboutPage = () => {
    return (
        <>
            <HeroSection
                title="О нашей компании"
                className="text-[clamp(1.75rem,7vw,100px)] sm:text-[clamp(2.25rem,8vw,100px)]"
            />

            <section className="mx-auto mt-16 w-full max-w-[90dvw] sm:mt-24 lg:mt-40 xl:mt-56">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-20">
                    <div className="relative flex shrink-0 flex-col items-center">
                        <img
                            src={aboutImg}
                            className="w-full max-w-[280px] object-contain sm:max-w-[360px] md:max-w-[420px]"
                            alt="about"
                        />

                        <img
                            src={aboutImg}
                            className="mt-4 hidden w-10/12 max-w-[480px] object-contain opacity-90 xl:absolute xl:-right-24 xl:top-8 xl:z-10 xl:mt-0 xl:block 2xl:-right-32"
                            alt="about-overlay"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-7 lg:w-[52%]">
                        <h2 className="text-center text-[clamp(1.5rem,5vw,4rem)] font-medium leading-tight lg:text-left lg:leading-[1.05]">
                            Основной принцип работы компании — индивидуальный подход к каждому клиенту.
                        </h2>

                        <p className="text-center text-[clamp(1rem,2.8vw,2rem)] font-light leading-relaxed lg:text-left lg:leading-snug">
                            "iPool" — это новое лицо компании, которая более 10 лет удерживает прочные позиции на
                            Ростовском рынке услуг по обустройству SPA-зоны (бассейны, сауны, бани, SPA).
                        </p>

                        <p className="text-center text-[clamp(0.9375rem,2.2vw,1.5rem)] font-light leading-relaxed lg:text-left">
                            Компания "iPool" сочетает в себе огромный опыт, европейские традиции и успешную историю
                            работы на рынке.
                            <br className="hidden sm:block" />
                            <br className="hidden sm:block" />
                            Для того, чтобы поддерживать высокий статус компании, сотрудники изучают новые
                            тенденции рынка, разрабатывают и адаптируют современные технологии обслуживания,
                            продажи и продвижения бассейнов и SPA-оборудования.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-20 w-full max-w-[90dvw] px-3 sm:mt-28 sm:px-6 md:mt-32 lg:mt-48 lg:px-0 xl:mt-56">
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">
                    <AboutCard bg={poolPhoto} title="Бассейны" link="/pools" />
                    <AboutCard bg={saunaPhoto} title="Сауны" link="/saunas" />
                </div>
            </section>

            <section className="mb-24 mt-16 mx-auto w-full max-w-[90dvw] sm:mt-24 lg:mb-64 lg:mt-40 xl:mb-96">
                <img
                    className="mx-auto w-full object-contain"
                    src={roomImage}
                    alt="room"
                />
            </section>
        </>
    )
}

export default AboutPage
