import HeroSection from "../Main/heroSection"
import tempImg from '@/assets/temp.png'
import drawnings from '@/assets/drawnings.png'
import pool from '@/assets/pool-img-temp.jpg'
import object from '@/assets/object.png'

const ActivityPage = () => {
    return (
        <div className="leading-tight lg:leading-none">
            <HeroSection title="Как мы работаем" />

            <div className="flex flex-col 2xl:flex-row items-center lg:items-start justify-between px-3 lg:px-16 mt-16 gap-10 lg:gap-24">
                <img src={tempImg} alt="Строительство" className="w-full max-w-xl object-contain 2xl:max-w-none" />
                <div className="text-lg sm:text-2xl xl:text-[32px] space-y-5 lg:space-y-8 2xl:max-w-3xl font-light">
                    <h2 className="text-4xl sm:text-[48px] lg:text-[64px] font-medium">Процесс Строительства</h2>
                    <p>Процесс строительства включает в себя несколько ключевых этапов, которые обеспечивают успешную реализацию проекта от начальной идеи до окончательной эксплуатации объекта.</p>
                    <p className="font-bold">Подготовительный этап</p>
                    <p>Строительство начинается с подготовительного этапа, который включает в себя принятие решения о строительстве, выбор земельного участка и его покупку или аренду.</p>
                    <p>На этом этапе также осуществляется разработка градостроительного плана, который определяет, как будет размещен объект на территории. Важным шагом является проведение публичных слушаний, на которых обсуждаются планы застройки с местными жителями и заинтересованными сторонами.</p>
                    <p>После этого проводятся инженерные изыскания, включая геологические и экологические исследования, что позволяет оценить условия для строительства.</p>
                </div>
            </div>

            <h2 className="2xl:indent-252 text-4xl sm:text-[48px] lg:text-[64px] xl:mt-12 px-3 mt-6 lg:px-16 font-medium">
                Следующий этап – это разработка проектной документации.
            </h2>

            <div className="flex flex-col 2xl:flex-row items-center lg:items-start justify-between px-3 lg:px-16 mt-8 gap-10 lg:gap-24">
                <img src={drawnings} alt="Проектная документация" className="w-full lg:w-auto max-w-lg" />
                <div className="text-lg sm:text-2xl xl:text-[32px] space-y-5 lg:space-y-8 2xl:max-w-3xl font-light">
                    <p>На этом этапе создаются все необходимые чертежи и схемы, которые детализируют проект.</p>
                    <p>Важно также установить инженерные системы – водоснабжение, электрику и вентиляцию – на этом этапе.</p>
                    <p>После получения всех необходимых разрешений начинается непосредственное строительство. Этот этап включает в себя земляные работы, такие как выемка грунта и подготовка фундамента.</p>
                </div>
            </div>

            <img className="px-3 lg:px-16 rounded-xl my-10 w-full" src={pool} alt="Бассейн" />

            <div className="flex flex-col 2xl:flex-row items-start justify-between px-3 lg:px-16 mt-8 gap-10 lg:gap-24">
                <h2 className="text-4xl sm:text-[48px] lg:text-[64px] font-medium 2xl:max-w-md">
                    Этап внутренней отделки и благоустройства территории.
                </h2>
                <div className="text-lg sm:text-2xl xl:text-[32px] leading-tight lg:leading-none space-y-5 lg:space-y-12 2xl:max-w-3xl font-light">
                    <p>На этом этапе проводятся работы по отделке внутренних помещений, установке окон и дверей, а также прокладке коммуникаций. Благоустройство включает в себя создание ландшафта вокруг здания: озеленение, укладка дорожек и установка освещения.</p>
                    <p className="font-normal">Завершением строительного процесса является ввод объекта в эксплуатацию. Для этого необходимо получить заключение о соответствии выполненных работ проекту от государственных органов. После этого объект регистрируется в государственных учреждениях, что подтверждает его законность и готовность к эксплуатации.</p>
                </div>
            </div>

            <div className="flex flex-col 2xl:flex-row items-start justify-between px-3 lg:px-16 mt-16 gap-10 lg:gap-24">
                <img src={tempImg} alt="Проектирование" className="w-full max-w-xl object-contain 2xl:max-w-none" />
                <div className="text-lg sm:text-2xl xl:text-[32px] space-y-5 lg:space-y-8 2xl:max-w-3xl font-light">
                    <h2 className="text-4xl sm:text-[48px] lg:text-[64px] font-medium">Процесс Проектирования</h2>
                    <p>Проектирование – это техническая часть работы, направленная на создание детализированной документации для реализации утвержденного дизайна.</p>
                    <p className="font-bold">Техническое задание (ТЗ)</p>
                    <p>Важно учесть не только эстетические предпочтения, но и функциональные задачи, которые должны быть решены в рамках будущего пространства.</p>
                    <p>Техническое задание служит основой для дальнейшей работы и определяет ключевые параметры, такие как размеры, материалы и инженерные системы.</p>
                    <p>После утверждения технического задания начинается разработка чертежей. Этот этап включает создание обмерного плана, на котором фиксируются точные размеры помещений, расположение окон, дверей и коммуникаций.</p>
                    <p>На основе этих данных создаются рабочие чертежи, которые детализируют каждый элемент проекта. Чертежи могут включать планы зонирования, схемы размещения оборудования и детализированные планы отделки.</p>
                    <p>Важно также разработать инженерные решения, которые обеспечивают надежную работу всех систем – от водоснабжения до электрики.</p>
                </div>
            </div>

            <img className="px-3 lg:px-16 rounded-xl my-10 w-full" src={pool} alt="Бассейн" />

            <div className="flex flex-col xl:flex-row items-start justify-between px-3 lg:px-16 mt-16 gap-10 lg:gap-24">
                <div className="flex flex-col space-y-8">
                    <h2 className="text-4xl sm:text-[48px] lg:text-[64px] font-medium 2xl:max-w-3xl">
                        Следующий шаг – это расчет необходимых материалов.
                    </h2>
                    <img src={object} alt="Материалы" className="w-full max-w-xl object-contain" />
                </div>
                <div className="text-lg sm:text-2xl xl:text-[32px] leading-tight lg:leading-none space-y-5 lg:space-y-12 2xl:max-w-3xl font-light">
                    <p>На основе разработанных чертежей составляется спецификация, в которой указываются все используемые материалы и их объемы. Это позволяет не только оценить стоимость проекта, но и обеспечить правильность закупок на этапе реализации.</p>
                    <p><span className="font-normal">Смета </span>включает в себя все затраты на материалы, работу специалистов и дополнительные расходы, что помогает избежать непредвиденных ситуаций в процессе строительства.</p>
                    <p className="font-normal">Важной частью проектирования являются инженерные расчеты. Специалисты оценивают нагрузки на конструкции, проверяют соответствие проекта строительным нормам и правилам (СНиП).</p>
                    <p>Это гарантирует безопасность и долговечность построенного объекта. Инженерные решения должны быть согласованы с дизайнерскими концепциями, чтобы обеспечить гармоничное сочетание функциональности и эстетики.</p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row xl:justify-end px-3 lg:px-16 mt-16">
                <div className="text-lg sm:text-2xl xl:text-[32px] leading-tight lg:leading-none space-y-5 lg:space-y-12 2xl:max-w-3xl font-light">
                    <h2 className="text-4xl sm:text-[48px] lg:text-[64px] font-medium">Что же в итоге?</h2>
                    <p>Когда все чертежи и расчеты готовы, происходит подготовка итогового проектного пакета.</p>
                    <p>В него входят все необходимые документы: чертежи, спецификации, сметы и расчеты. Этот пакет передается строителям для реализации проекта. Важно отметить, что успешное проектирование требует тесного взаимодействия между дизайнерами и инженерами на всех этапах работы.</p>
                    <p>Это сотрудничество позволяет создать гармоничное пространство, которое будет не только красивым, но и функциональным.</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityPage