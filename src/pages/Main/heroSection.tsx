import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroBanner from '@/components/sections/heroBanner'
import { heroBackgrounds } from '@/data/photoLibrary'

const DEFAULT_BACKGROUNDS = [...heroBackgrounds]
const SLIDE_INTERVAL_MS = 5000

interface HeroSectionProps {
  title: string
  link?: string
  className?: string
  backgrounds?: string[]
}

const HeroSection = ({
  title,
  link,
  className = '',
  backgrounds = DEFAULT_BACKGROUNDS,
}: HeroSectionProps) => {
  const slides = backgrounds.length > 0 ? backgrounds : DEFAULT_BACKGROUNDS
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <div className="relative mt-0 min-h-[calc(100dvh_-_80px)] overflow-hidden lg:mt-8 lg:min-h-[calc(100dvh_-_130px)]">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[activeIndex]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-4 sm:px-8 md:px-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`max-w-full text-center text-[clamp(3rem,12vw,100px)] font-bold uppercase leading-[0.95] text-white xl:text-[120px] ${className}`}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      <HeroBanner link={link} />
    </>
  )
}

export default HeroSection
