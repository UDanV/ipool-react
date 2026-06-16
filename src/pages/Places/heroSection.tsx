import { motion } from 'framer-motion'
import bg from '@/assets/bg-spabox.png'
import HeroBanner from '@/components/sections/heroBanner'

const HeroSectionSpa = ({
  title,
  icon,
  secondIcon,
  centeredTitle = false,
}: {
  title: string
  icon?: string
  secondIcon?: string
  centeredTitle?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`min-h-[520px] bg-cover bg-center bg-no-repeat flex flex-col sm:min-h-[620px] lg:min-h-[calc(100vh_-_110px)] ${
          centeredTitle ? 'justify-center' : 'justify-end'
        } mt-8`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className={`flex flex-col lg:flex-row justify-center ${
            centeredTitle ? 'items-center' : 'lg:justify-between items-center lg:items-end'
          } mb-8 px-4 sm:px-8 md:px-20`}
        >
          <motion.h1
            initial={{ y: 150, visibility: 'hidden' }}
            animate={{ y: 0, visibility: 'visible' }}
            transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
            className={`text-[clamp(2.5rem,12vw,4rem)] sm:text-6xl md:text-7xl lg:text-[100px] font-bold uppercase leading-tight max-w-full lg:max-w-[60%] mb-8 md:mb-0 ${
              centeredTitle ? 'text-center' : 'text-center lg:text-left'
            }`}
          >
            {title}
          </motion.h1>

          {!centeredTitle && icon && (
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
              className="flex gap-4 items-start justify-end"
            >
              <img
                className="w-16 sm:w-20 md:w-24 -translate-y-2"
                src={icon}
                alt=""
              />
              {secondIcon && (
                <img
                  className="w-16 sm:w-20 md:w-24 -translate-y-2"
                  src={secondIcon}
                  alt=""
                />
              )}
            </motion.div>
          )}
        </div>
      </div>
      <HeroBanner />
    </motion.div>
  )
}

export default HeroSectionSpa