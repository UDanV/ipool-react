import { motion } from 'framer-motion'
import poolsarLogoImg from '@/assets/poolsar_logo.bmp'
import HeroBanner from '@/components/sections/heroBanner'

const HeroSectionSpa = ({
  title,
  icon,
  poolsarLogo = false,
  background,
  secondIcon,
  centeredTitle = false,
}: {
  title: string
  icon?: string
  poolsarLogo?: boolean
  background?: string
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
        className={`relative mt-0 flex min-h-[calc(100dvh_-_80px)] flex-col bg-cover bg-center bg-no-repeat lg:mt-8 lg:min-h-[calc(100dvh_-_130px)] ${
          centeredTitle ? 'justify-center' : 'justify-end'
        }`}
        style={{ backgroundImage: `url(${poolsarLogo ? poolsarLogoImg : background})` }}
      >
        <div
          className={`flex flex-col justify-center ${
            centeredTitle
              ? 'items-center'
              : 'items-center lg:flex-row lg:items-end lg:justify-between'
          } mb-8 px-4 sm:px-8 md:px-20`}
        >
          <motion.h1
            initial={{ y: 150, visibility: 'hidden' }}
            animate={{ y: 0, visibility: 'visible' }}
            transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
            className={`mb-8 max-w-full text-[clamp(2.5rem,12vw,3rem)] font-bold uppercase leading-tight sm:text-6xl md:text-7xl lg:mb-0 lg:max-w-[40%] lg:text-[100px] ${
              centeredTitle ? 'text-center' : 'text-center lg:text-left'
            } ${poolsarLogo ? 'text-white' : ''}`}
          >
            {title}
          </motion.h1>

          {!centeredTitle && icon && (
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
              className="flex items-start justify-end gap-4"
            >
              <img
                className="-translate-y-2 w-16 sm:w-20 md:w-24"
                src={icon}
                alt=""
              />
              {secondIcon && (
                <img
                  className="-translate-y-2 w-16 sm:w-20 md:w-24"
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
