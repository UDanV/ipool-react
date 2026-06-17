import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spaBoxCards } from '@/data/spaBoxCards'
import { ArrowUpRightIcon } from 'lucide-react'

const SpaBoxCatalog = () => {
  return (
    <section className="mx-auto mb-24 mt-20 max-w-[90dvw] px-3 sm:px-0 lg:mt-28 lg:mb-32">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-black/15" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
          Spa-box
        </span>
        <div className="h-px flex-1 bg-black/15" />
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <h2 className="max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-tight">
          Модули и решения
        </h2>
        <p className="max-w-xl text-base font-light leading-relaxed text-[#4B4B4B] lg:text-lg">
          Готовые блоки для wellness-зоны — комплектуем spa-box под ваш проект, без путаницы с
          портфолио реализованных объектов.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 xl:grid-cols-3 xl:gap-6">
        {spaBoxCards.map((card, index) => (
          <motion.div
            key={card.to}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
          >
            <Link
              to={card.to}
              className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white transition-colors duration-300 hover:border-[#687C96]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:right-4 sm:top-4">
                  <ArrowUpRightIcon className="h-4 w-4 text-white" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                <h3 className="text-lg font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#687C96] sm:text-xl">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4B4B4B] sm:text-base">
                  {card.subtitle}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SpaBoxCatalog
