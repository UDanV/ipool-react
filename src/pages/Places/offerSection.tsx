import { motion } from 'framer-motion'

const textReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'backOut' as const },
}

const OfferSection = ({ title, image }: { title: string, image: string }) => {
  return (
    <div className="flex flex-col px-4 sm:px-8 gap-10 lg:gap-24">
      <div className="m-auto flex max-w-[90dvw] flex-col items-center justify-around gap-10 2xl:flex-row">
        <img
          className="h-auto max-w-xl"
          src={image}
          alt=""
        />
        <div className="mt-8 mr-0 flex max-w-full flex-col lg:mt-0 lg:max-w-4xl 2xl:ml-30">
          <motion.h2
            {...textReveal}
            className="mb-8 text-center text-4xl font-medium uppercase sm:text-6xl lg:mb-[52px] lg:text-left lg:text-8xl"
          >
            Что мы предлагаем?
          </motion.h2>
          <motion.div
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            <p className="mb-6 text-left text-base font-medium uppercase sm:text-justify sm:text-xl lg:text-2xl">
              Компания iPool предлагает установку {title}, который станет идеальным
              дополнением для вашего пространства отдыха и релаксации.
            </p>
            <p className="text-left text-base font-medium uppercase sm:indent-12 sm:text-justify sm:text-xl lg:text-2xl">
              Мы работаем в Ростовской области, а также в других городах Ростовской области
              и Краснодарского края. {title} — это современное решение, которое сочетает в
              себе стильный дизайн, инновационные технологии и возможность наслаждаться
              уникальными водными процедурами прямо у себя дома.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="m-auto flex max-w-[90dvw] flex-col items-center justify-around gap-10 2xl:flex-row-reverse">
        <img
          className="h-auto max-w-xl"
          src={image}
          alt=""
        />
        <div className="mt-8 mr-0 flex max-w-full flex-col gap-9 lg:mt-0 lg:max-w-4xl 2xl:mr-30">
          <motion.h2
            {...textReveal}
            className="text-center text-4xl font-medium uppercase sm:text-6xl lg:text-left lg:text-8xl"
          >
            {title} под ключ
          </motion.h2>
          <motion.div
            {...textReveal}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            <p className="mb-6 text-left text-base font-medium uppercase sm:text-justify sm:text-xl lg:text-2xl">
              Если вы хотите установить {title}, мы обеспечим индивидуальный подход и полный
              комплекс услуг. Компания iPool выполняет проекты под ключ: от выбора оптимального
              оборудования до его профессионального монтажа и настройки. Мы используем только
              проверенные системы, которые предлагают разнообразные режимы, включая тропический
              дождь, водопад, туман и ароматерапию.
            </p>
            <p className="text-left text-base font-medium uppercase sm:text-justify sm:text-xl lg:text-2xl">
              Обращайтесь в компанию iPool, и мы создадим для вас уникальный {title}, который
              станет важной частью вашего дома или зоны отдыха, наполняя вашу жизнь комфортом
              и приятными эмоциями!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OfferSection
