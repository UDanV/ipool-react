import buddaImg from '@/assets/budda-circle.png'
import buddaImg1 from '@/assets/budda-circle1.png'
import arrowBtn from '@/assets/arrow-button.png'
import SharpButton from '@/components/ui/sharpButton'
import { motion, type Variants } from 'framer-motion'

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
}

const DesignSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className='max-w-[1800px] m-auto flex flex-col gap-12 my-96 px-4 sm:px-8'>
        <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-0'>
          <h2 className='text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium uppercase leading-tight text-center lg:text-left'>
            <motion.span
              className='ml-0 xl:ml-28 block'
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Разработаем
            </motion.span>
            <motion.span
              className='ml-0 xl:ml-96 block'
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              современный
            </motion.span>
            <motion.span
              className='inline-flex items-center gap-4 ml-0 xl:ml-150'
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <img src={arrowBtn} alt='' className='h-[1em] inline-block' />
              дизайн
            </motion.span>
          </h2>

          <div className='flex items-start justify-center lg:justify-start'>
            <img
              className='translate-x-0 lg:translate-x-10 w-24 sm:w-32 lg:w-auto'
              src={buddaImg}
              alt=''
            />
            <img
              className='z-10 w-24 sm:w-32 lg:w-auto -ml-4 sm:-ml-6 lg:ml-0'
              src={buddaImg1}
              alt=''
            />
          </div>
        </div>

        <div className='text-center max-w-6xl m-auto px-2'>
          <p className='text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] uppercase font-medium leading-none'>
            Мы предлагаем индивидуальный подход и полный комплекс услуг.
            Компания iPool реализует проекты под ключ: от выбора инновационных
            материалов до профессионального монтажа и настройки. Мы используем
            только проверенные технологии, которые создают атмосферу морского
            побережья и обеспечивают антибактериальную защиту. Современный
            дизайн соляной комнаты включает стильную подсветку, эргономичную
            мебель и интерактивные элементы для максимального комфорта.
          </p>
        </div>
        <SharpButton title='Свяжитесь с нами' />
      </div>
    </motion.div>
  )
}

export default DesignSection