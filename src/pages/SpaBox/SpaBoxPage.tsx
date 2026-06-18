import { motion } from 'framer-motion'
import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
} from '@/data/photoLibrary'
import SpaBoxCatalog from '@/components/sections/spaBoxCatalog'

const COLLAGE_IMAGES = [galleryImg1, galleryImg2, galleryImg3, galleryImg4]

const SpaBoxPage = () => {
  return (
    <>
      <div className="relative mt-0 flex min-h-[calc(100dvh_-_80px)] flex-col bg-cover bg-center bg-no-repeat lg:mt-8 lg:min-h-[calc(100dvh_-_130px)]">
        <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4">
          {COLLAGE_IMAGES.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: index * 0.12, ease: 'easeOut' }}
              className="relative h-full overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="text-5xl font-bold sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[220px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            SPA-BOX
          </motion.h1>

          <motion.p
            className="mt-6 max-w-4xl text-lg leading-normal sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: 'easeOut' }}
          >
            Проектирование, монтаж и сервисное обслуживание.
            <br />
            Ростов-на-Дону и Юг Росcии.
          </motion.p>
        </div>
      </div>

      <SpaBoxCatalog />
    </>
  )
}

export default SpaBoxPage
